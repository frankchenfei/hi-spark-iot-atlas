/* Ad slot renderer.
 *
 * Two jobs:
 *   1. Fill explicit <div data-ad-slot="..."> placeholders that the templates carry.
 *   2. Insert in-feed units into long directory grids so a 989-row list is not a
 *      wall of cards.
 *
 * Ads are only ever drawn inside an element that already reserves the height, so
 * enabling them cannot shift the page layout. When an ad is not configured the
 * slot renders as a labelled placeholder box, which is what reviewers should see. */
(function () {
  var CFG = window.IOT_ADS || { mode: "off" };
  var MODE = CFG.mode || "off";
  if (MODE === "off") return;

  var SIZES = {
    leaderboard: { desktop: "1164x108", mobile: "320x120" },
    billboard:   { desktop: "1164x300", mobile: "320x120" },
    rectangle:   { desktop: "360x300", mobile: "320x300" },
    halfpage:    { desktop: "360x720", mobile: "320x300" },
    infeed:      { desktop: "360x300", mobile: "320x300" }
  };

  function esc(v) {
    return String(v == null ? "" : v).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }

  function label() {
    return '<span class="ad-label">Advertisement</span>';
  }

  function placeholder(size) {
    var s = SIZES[size] || { desktop: "responsive", mobile: "responsive" };
    var mobile = window.matchMedia && window.matchMedia("(max-width:760px)").matches;
    var label = mobile ? s.mobile : s.desktop;
    return '<div class="ad-frame"><span class="ad-note">Reserved ' + esc(label) + ' responsive slot</span></div>';
  }

  function adsenseCode(slotName) {
    var client = (CFG.adsense && CFG.adsense.client) || "";
    var slotId = (CFG.adsense && CFG.adsense.slots && CFG.adsense.slots[slotName]) || "";
    if (!client || !slotId) return placeholder(slotName);
    return '<ins class="adsbygoogle" style="display:block" data-ad-client="' + esc(client) +
      '" data-ad-slot="' + esc(slotId) + '" data-ad-format="auto" data-full-width-responsive="true"></ins>';
  }

  function directCode(host) {
    var src = host.getAttribute("data-ad-src");
    if (!src) return placeholder(host.getAttribute("data-ad-size") || "300x250");
    return '<iframe class="ad-frame" src="' + esc(src) + '" title="Advertisement" loading="lazy" ' +
      'style="border:0;width:100%;height:100%"></iframe>';
  }

  function body(host) {
    var size = host.getAttribute("data-ad-size") || "rectangle";
    if (MODE === "adsense") return adsenseCode(size);
    if (MODE === "direct") return directCode(host);
    return placeholder(size);
  }

  function fill(host) {
    if (!host || host.getAttribute("data-ad-ready") === "1") return;
    host.setAttribute("data-ad-ready", "1");
    var size = host.getAttribute("data-ad-size") || "leaderboard";
    host.classList.add("ad-slot", "is-" + size);
    host.innerHTML = label() + '<div class="ad-body">' + body(host) + "</div>";
    if (MODE === "adsense" && window.adsbygoogle && host.querySelector(".adsbygoogle")) {
      try { (window.adsbygoogle = window.adsbygoogle || []).push({}); } catch (e) {}
    }
  }

  // Only fill a slot once it is near the viewport, so ad code never delays first paint.
  var io = ("IntersectionObserver" in window)
    ? new IntersectionObserver(function (entries) {
        entries.forEach(function (en) {
          if (en.isIntersecting) { fill(en.target); io.unobserve(en.target); }
        });
      }, { rootMargin: "320px 0px" })
    : null;

  function slotHtml(size) {
    return '<div class="ad-slot-host" data-ad-slot="in-feed" data-ad-size="' + size + '"></div>';
  }

  // Insert in-feed units into directory grids. Grids use CSS grid / flex, so the
  // ad occupies a full row via the .ad-infeed class.
  var FEED_GRIDS = [".app-grid", ".brand-directory-grid", ".compare-grid", ".product-grid", ".knowledge-grid", ".bsr-grid", ".cloud-directory-grid"];
  function injectInFeed() {
    var every = CFG.inFeedEvery || 8;
    var max = CFG.inFeedMax || 3;
    FEED_GRIDS.forEach(function (sel) {
      document.querySelectorAll(sel).forEach(function (grid) {
        if (grid.getAttribute("data-ad-infeed") === "1") return;
        grid.setAttribute("data-ad-infeed", "1");
        var kids = Array.prototype.slice.call(grid.children);
        if (kids.length < every * 2) return;
        var placed = 0;
        for (var i = kids.length - 1; i > 0 && placed < max; i--) {
          if ((kids.length - i) % every !== 0) continue;
          var after = kids[i];
          if (!after || !after.parentNode) continue;
          var wrap = document.createElement("div");
          wrap.className = "ad-infeed";
          wrap.innerHTML = slotHtml("infeed");
          after.parentNode.insertBefore(wrap, after.nextSibling);
          placed++;
        }
      });
    });
  }

  function bindAll() {
    var hosts = document.querySelectorAll("[data-ad-slot]");
    for (var i = 0; i < hosts.length; i++) {
      if (io) io.observe(hosts[i]); else fill(hosts[i]);
    }
  }

  // Listing pages rebuild their grids after the data files load, so re-run once
  // the dynamic render has settled.
  function schedule() {
    injectInFeed();
    bindAll();
  }

  document.addEventListener("DOMContentLoaded", function () {
    schedule();
    setTimeout(schedule, 60);
    setTimeout(schedule, 400);
  });
  window.IOT_ADS_REFRESH = schedule;
})();

