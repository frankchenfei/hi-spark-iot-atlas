/* Cookie consent gate.
 *
 * The site targets Spain and France, so analytics must not fire before the
 * visitor agrees. This module owns the decision and exposes it to analytics.js.
 * Accept and Reject are given equal weight, which is what the GDPR expects. */
(function () {
  var KEY = "iot-consent";
  var VERSION = "1";
  var listeners = [];

  function read() {
    try {
      var raw = localStorage.getItem(KEY);
      if (!raw) return null;
      var v = JSON.parse(raw);
      if (!v || v.version !== VERSION) return null;
      return v.analytics ? "granted" : "denied";
    } catch (e) { return null; }
  }
  function write(state) {
    try {
      localStorage.setItem(KEY, JSON.stringify({ version: VERSION, analytics: state === "granted", at: new Date().toISOString() }));
    } catch (e) {}
    listeners.forEach(function (fn) { try { fn(state); } catch (e) {} });
    document.dispatchEvent(new CustomEvent("iot:consent", { detail: { analytics: state } }));
  }

  window.IOT_CONSENT = {
    state: function () { return read(); },
    granted: function () { return read() === "granted"; },
    onChange: function (fn) { listeners.push(fn); var s = read(); if (s) fn(s); },
    grant: function () { write("granted"); hide(); },
    deny: function () { write("denied"); hide(); },
    reset: function () { try { localStorage.removeItem(KEY); } catch (e) {} show(true); }
  };

  var banner = null;
  function t(key, fallback) {
    var m = window.IOT_I18N || {};
    var lang = document.documentElement.lang || "en";
    return (m[lang] && m[lang][key]) || (m.en && m.en[key]) || fallback;
  }

  function build() {
    var host = document.createElement("div");
    host.className = "consent-banner";
    host.setAttribute("role", "dialog");
    host.setAttribute("aria-live", "polite");
    host.setAttribute("aria-label", t("consent.aria", "Cookie choices"));
    host.innerHTML =
      '<div class="consent-inner">' +
        '<div class="consent-copy">' +
          "<strong>" + t("consent.title", "Cookies and measurement") + "</strong>" +
          "<p>" + t("consent.body", "We use privacy-friendly analytics to see which pages are useful. Nothing loads until you choose. You can change this later from the footer.") + "</p>" +
          '<a class="consent-link" href="'+window.IOT_SITE_BASE+'cookies.html">' + t("consent.policy", "Cookie policy") + "</a>" +
        "</div>" +
        '<div class="consent-actions">' +
          '<button type="button" class="btn" data-consent="deny">' + t("consent.reject", "Reject") + "</button>" +
          '<button type="button" class="btn primary" data-consent="grant">' + t("consent.accept", "Accept") + "</button>" +
        "</div>" +
      "</div>";
    host.querySelector('[data-consent="grant"]').addEventListener("click", function () { window.IOT_CONSENT.grant(); });
    host.querySelector('[data-consent="deny"]').addEventListener("click", function () { window.IOT_CONSENT.deny(); });
    return host;
  }

  function show(force) {
    if (!force && read()) return;
    if (banner) return;
    banner = build();
    document.body.appendChild(banner);
    requestAnimationFrame(function () { banner.classList.add("is-open"); });
  }
  function hide() {
    if (!banner) return;
    banner.classList.remove("is-open");
    var el = banner;
    banner = null;
    setTimeout(function () { if (el.parentNode) el.parentNode.removeChild(el); }, 220);
  }

  document.addEventListener("DOMContentLoaded", function () {
    if (!read()) show();
    // Footer link re-opens the choice.
    document.querySelectorAll("[data-consent-reset]").forEach(function (a) {
      a.addEventListener("click", function (e) { e.preventDefault(); window.IOT_CONSENT.reset(); });
    });
  });
})();
