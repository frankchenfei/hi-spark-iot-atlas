/* Consent-gated analytics.
 *
 * Loads at most one provider, only after assets/consent.js records an "accepted"
 * choice, and only once. Exposes window.IOT_TRACK(event, props) so any script can
 * record an interaction without knowing which provider is behind it. */
(function () {
  var CFG = window.IOT_ANALYTICS || { provider: "none" };
  var PROVIDER = CFG.provider || "none";
  var loaded = false;

  function log() {
    if (CFG.debug && window.console) console.log.apply(console, ["[analytics]"].concat([].slice.call(arguments)));
  }

  function inject(src, attrs) {
    var s = document.createElement("script");
    s.async = true;
    s.src = src;
    if (attrs) for (var k in attrs) s.setAttribute(k, attrs[k]);
    document.head.appendChild(s);
    return s;
  }

  function loadGa4(id) {
    if (!id) return log("ga4: no measurement id, skipping");
    inject("https://www.googletagmanager.com/gtag/js?id=" + encodeURIComponent(id));
    window.dataLayer = window.dataLayer || [];
    window.gtag = function () { window.dataLayer.push(arguments); };
    window.gtag("js", new Date());
    // send_page_view false: we send the pageview explicitly so it includes our loader.
    window.gtag("config", id, { send_page_view: false, anonymize_ip: true });
    window.gtag("event", "page_view", {
      page_location: location.href,
      page_title: document.title
    });
  }

  function loadPlausible(c) {
    if (!c.domain) return log("plausible: no domain, skipping");
    inject(c.src || "https://plausible.io/js/script.js", { "data-domain": c.domain, defer: "" });
  }

  function loadUmami(c) {
    if (!c.src || !c.websiteId) return log("umami: src or website id missing, skipping");
    inject(c.src, { "data-website-id": c.websiteId, defer: "" });
  }

  function boot() {
    if (loaded) return;
    loaded = true;
    if (PROVIDER === "ga4") loadGa4((CFG.ga4 || {}).id);
    else if (PROVIDER === "plausible") loadPlausible(CFG.plausible || {});
    else if (PROVIDER === "umami") loadUmami(CFG.umami || {});
    else log("provider is \"" + PROVIDER + "\", nothing to load");
    bindOutbound();
    bindAds();
    bindSearch();
  }

  window.IOT_TRACK = function (event, props) {
    props = props || {};
    if (CFG.debug) log(event, props);
    try {
      if (PROVIDER === "ga4" && window.gtag) window.gtag("event", event, props);
      else if (PROVIDER === "plausible" && window.plausible) window.plausible(event, { props: props });
      else if (PROVIDER === "umami" && window.umami) window.umami.track(event, props);
    } catch (e) {}
  };

  function storeName(url) {
    if (/play\.google\.com/.test(url)) return "google_play";
    if (/apps\.apple\.com/.test(url)) return "app_store";
    return "other";
  }

  function bindOutbound() {
    if (!CFG.trackOutbound) return;
    document.addEventListener("click", function (e) {
      var a = e.target && e.target.closest ? e.target.closest("a[href]") : null;
      if (!a) return;
      var href = a.getAttribute("href") || "";
      if (!/^https?:\/\//i.test(href)) return;
      var isStore = /play\.google\.com|apps\.apple\.com/.test(href);
      window.IOT_TRACK(isStore ? "store_click" : "outbound_click", {
        store: isStore ? storeName(href) : undefined,
        link_url: href,
        link_text: (a.textContent || "").trim().slice(0, 80),
        page_path: location.pathname + location.search
      });
    }, true);
  }

  function bindAds() {
    if (!CFG.trackAds || !("IntersectionObserver" in window)) return;
    var seen = 0;
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (!en.isIntersecting || en.target.getAttribute("data-ad-seen") === "1") return;
        en.target.setAttribute("data-ad-seen", "1");
        seen++;
        window.IOT_TRACK("ad_slot_view", {
          slot: en.target.getAttribute("data-ad-slot") || "unknown",
          index: seen,
          page_path: location.pathname + location.search
        });
        io.unobserve(en.target);
      });
    }, { threshold: 0.5 });
    function observe() {
      document.querySelectorAll("[data-ad-slot]").forEach(function (el) {
        if (el.getAttribute("data-ad-seen") !== "1") io.observe(el);
      });
    }
    document.addEventListener("DOMContentLoaded", observe);
    setTimeout(observe, 800);
  }

  function bindSearch() {
    if (!CFG.trackSearch) return;
    document.addEventListener("submit", function (e) {
      var form = e.target;
      if (!form || !form.querySelector) return;
      var input = form.querySelector('input[type="search"], input[name="q"]');
      if (!input || !input.value.trim()) return;
      window.IOT_TRACK("site_search", { search_term: input.value.trim().slice(0, 80) });
    }, true);
  }

  // Boot either now (choice already stored) or when the visitor accepts.
  function start() {
    if (!window.IOT_CONSENT) return log("consent module missing, analytics stays off");
    window.IOT_CONSENT.onChange(function (state) { if (state === "granted") boot(); });
    if (window.IOT_CONSENT.granted()) boot();
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", start);
  else start();
})();
