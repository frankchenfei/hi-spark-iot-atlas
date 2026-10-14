/* Appends attribution parameters to outbound links.
 *
 * Runs on every page and rewrites merchant links in place. Internal links and
 * mailto/tel are untouched. Existing parameters are preserved, and the script is
 * idempotent so a re-render does not stack duplicates. */
(function () {
  var CFG = window.IOT_OUTBOUND || {};
  if (!CFG.enabled) return;

  var STORES = [
    { test: /^https?:\/\/apps\.apple\.com\//i, extra: function (u) { return CFG.affiliate && CFG.affiliate.appStore ? [CFG.affiliate.appStore] : []; } },
    { test: /^https?:\/\/play\.google\.com\//i, extra: function (u) { return CFG.affiliate && CFG.affiliate.googlePlay ? [CFG.affiliate.googlePlay] : []; } }
  ];

  function tag(href) {
    var url;
    try { url = new URL(href, location.href); } catch (e) { return href; }
    if (!/^https?:$/.test(url.protocol)) return href;
    if (url.hostname === location.hostname) return href;

    var store = null;
    for (var i = 0; i < STORES.length; i++) if (STORES[i].test.test(href)) { store = STORES[i]; break; }

    if (CFG.source && !url.searchParams.has("utm_source")) url.searchParams.set("utm_source", CFG.source);
    if (CFG.medium && !url.searchParams.has("utm_medium")) url.searchParams.set("utm_medium", CFG.medium);
    if (CFG.campaign && !url.searchParams.has("utm_campaign")) url.searchParams.set("utm_campaign", CFG.campaign);

    if (store) {
      // affiliate partners expect their own parameter, sometimes pre-formatted
      var extras = store.extra(url);
      for (var j = 0; j < extras.length; j++) {
        var pair = String(extras[j]).replace(/^[?&]/, "").split("=");
        if (pair[0] && pair[1]) url.searchParams.set(pair[0], pair.slice(1).join("="));
      }
    }
    return url.toString();
  }

  function rewrite(root) {
    var scope = root && root.querySelectorAll ? root : document;
    var links = scope.querySelectorAll('a[href^="http"]');
    for (var i = 0; i < links.length; i++) {
      var a = links[i];
      if (a.getAttribute("data-tagged") === "1") continue;
      var original = a.getAttribute("href");
      var next = tag(original);
      if (next !== original) a.setAttribute("href", next);
      a.setAttribute("data-tagged", "1");
    }
  }

  window.IOT_TAG_OUTBOUND = rewrite;
  document.addEventListener("DOMContentLoaded", function () {
    rewrite();
    // Listing grids and detail panels are painted after load, so sweep again.
    setTimeout(function () { rewrite(); }, 120);
    setTimeout(function () { rewrite(); }, 700);
  });
})();
