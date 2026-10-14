/* Canonical URLs for entity pages.
 *
 * tools/prerender_entities.mjs writes one static file per brand, app, platform,
 * protocol, comparison, category and product. Links point at those files so
 * visitors and crawlers land on the indexed version rather than the query-string
 * template, and the language choice is carried across as ?lang=. */
(function () {
  /* The site must work both from a web server and from a plain file:// open.
     A root-relative link like "/app/x.html" becomes "file:///C:/app/x.html" when
     the page is opened as a file, which is why every detail link failed locally.
     Compute how deep the current page sits and prefix every generated path so it
     resolves relative to the page - correct for file://, http://, and any
     sub-directory deployment. */
  var DEPTH_DIR = /\/(brand|app|cloud|protocol|compare|category|product|compatibility|model|troubleshooting|certification)\/[^\/]*$/.test(location.pathname);
  var BASE = DEPTH_DIR ? "../" : "";
  window.IOT_SITE_BASE = BASE;
  window.IOT_PAGE_PATH = function (page) { return BASE + page; };
  var PREFIX = { brand: "brand", app: "app", cloud: "cloud", protocol: "protocol", compare: "compare", category: "category", product: "product", compat: "compatibility", model: "model", issue: "troubleshooting", certification: "certification" };
  window.IOT_ENTITY_PATH = function (type, slug, lang) {
    var dir = PREFIX[type];
    if (!dir || !slug) return "/";
    var p = BASE + dir + "/" + encodeURIComponent(slug) + ".html";
    return (lang && lang !== "en") ? p + "?lang=" + encodeURIComponent(lang) : p;
  };
  /* Entity detail pages are static files (`/brand/xiaomi.html`) with no query
     string, but the renderers originally read the subject from `?brand=`. Without
     this every detail page fell back to its default record - every brand showed
     Ring, every app showed Tuya Smart, every platform showed AWS. Resolve the slug
     from the path first, then fall back to the query string for the legacy
     templates. */
  var PARAM_DIR = { brand: "brand", app: "app", provider: "cloud", protocol: "protocol",
    pair: "compare", category: "category", product: "product", compat: "compatibility", model: "model", issue: "troubleshooting", certification: "certification" };
  window.IOT_ENTITY_SLUG = function (param) {
    var dir = PARAM_DIR[param];
    if (dir) {
      var m = location.pathname.match(new RegExp("/" + dir + "/([^/]+)\\.html$", "i"));
      if (m) { try { return decodeURIComponent(m[1]); } catch (e) { return m[1]; } }
    }
    try { return new URLSearchParams(location.search).get(param); } catch (e) { return null; }
  };
  /* Safety net.
     Renderers build links in several places; any one of them that emits a bare
     "compare.html" is correct at the site root and wrong one directory down.
     Sweep the DOM and promote bare root-page links to the current depth. This
     covers every renderer, present and future, without hunting each one. */
  var ROOT_PAGE = /^[a-z0-9-]+\.html(?:[?#]|$)/i;
  window.IOT_FIX_LINKS = function (root) {
    if (!BASE) return 0;
    var scope = (root && root.querySelectorAll) ? root : document;
    var links = scope.querySelectorAll('a[href]');
    var fixed = 0;
    for (var i = 0; i < links.length; i++) {
      var a = links[i], href = a.getAttribute("href");
      if (!href || !ROOT_PAGE.test(href)) continue;
      a.setAttribute("href", BASE + href);
      fixed++;
    }
    return fixed;
  };
  if (typeof document !== "undefined") {
    document.addEventListener("DOMContentLoaded", function () {
      window.IOT_FIX_LINKS();
      // grids and detail panels paint after load, so sweep again
      setTimeout(function () { window.IOT_FIX_LINKS(); }, 120);
      setTimeout(function () { window.IOT_FIX_LINKS(); }, 700);
    });
  }
})();
