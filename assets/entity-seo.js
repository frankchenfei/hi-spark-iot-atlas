/* Entity-level SEO for the detail templates.
 *
 * Every detail page is a static template that reads its subject from a query
 * parameter, so without this script all 268 brands, 989 apps, 29 platforms,
 * 62 protocols and 49 comparisons would share one <title> and - far worse -
 * one canonical pointing at the bare template. That tells a crawler to collapse
 * every entity into five URLs.
 *
 * Runs after the data files. Only facts already present in the record are
 * emitted: no ratings, no prices, no offers. */
(function(){
  var LOCALES = ["en","es","fr"];
  var ROUTES = {
    "brand-detail.html":    { key:"brand",    title:"Brand knowledge hub",           label:"Brand" },
    "app-detail.html":      { key:"app",      title:"IoT app details",               label:"App" },
    "cloud-detail.html":    { key:"provider", title:"IoT platform deployment guide", label:"Cloud platform" },
    "protocol-detail.html": { key:"protocol", title:"Protocol guide",                label:"Protocol" },
    "compare-detail.html":  { key:"pair",     title:"IoT comparison",                label:"Comparison" },
    "product.html":         { key:"product",  title:"Product knowledge page",        label:"Product" },
    "category-detail.html": { key:"category", title:"IoT category",                  label:"Category" }
  };
  var file = (location.pathname.split("/").pop() || "index.html");
  var route = ROUTES[file];
  if (!route) return;

  var params = new URLSearchParams(location.search);
  var slug = ((window.IOT_ENTITY_SLUG ? window.IOT_ENTITY_SLUG(route.key) : params.get(route.key)) || "").toLowerCase();
  if (!slug) return;

  function find(list, field, value) {
    if (!Array.isArray(list)) return null;
    for (var i = 0; i < list.length; i++) {
      var it = list[i] || {};
      if (String(it[field] || "").toLowerCase() === value) return it;
    }
    return null;
  }
  function pickName(it) {
    if (!it) return "";
    if (it.name) return it.name;
    if (it.model) return it.model;
    if (it.title) return it.title;
    if (it.names) return it.names.en || it.names[Object.keys(it.names)[0]] || "";
    return "";
  }

  var entity = null, kind = "";
  var K = window.IOT_KNOWLEDGE || {};
  switch (route.key) {
    case "brand":    entity = find(window.IOT_BRANDS, "slug", slug); kind = "Organization"; break;
    case "app":      entity = find(window.IOT_APP_DIRECTORY, "slug", slug); kind = "SoftwareApplication"; break;
    case "provider": entity = find(window.IOT_CLOUDS, "slug", slug); kind = "WebPage"; break;
    case "protocol": entity = find(K.protocols, "slug", slug); kind = "TechArticle"; break;
    case "pair":     entity = find(window.IOT_COMPARISONS, "slug", slug); kind = "WebPage"; break;
    case "product":  entity = find(window.IOT_PRODUCT_DIRECTORY, "slug", slug); kind = "Product"; break;
    case "category": entity = find(window.IOT_CATEGORY_HUB, "slug", slug); kind = "CollectionPage"; break;
    case "compat": entity = find(window.IOT_COMPATIBILITY, "slug", slug); kind = "TechArticle"; break;
    case "model": entity = find(window.IOT_MODELS, "slug", slug); kind = "Product"; break;
    case "issue": entity = find(window.IOT_TROUBLESHOOTING, "slug", slug); kind = "HowTo"; break;
    case "certification": entity = find(window.IOT_CERTIFICATIONS, "slug", slug); kind = "WebPage"; break;
  }
  if (!entity) return;

  var name = pickName(entity);
  if (!name) return;

  var desc = entity.summary || entity.notes || (entity.descriptions && (entity.descriptions.en || entity.descriptions[Object.keys(entity.descriptions)[0]])) || "";
  desc = String(desc).replace(/\s+/g, " ").trim();
  if (desc.length > 158) desc = desc.slice(0, 155).replace(/[\s,;:.-]+$/, "") + "...";

  var title = name + " | " + route.title + " | IoT Atlas";

  // Canonical keeps the site origin but carries the entity so each subject is
  // its own URL instead of collapsing into the template.
  var head = document.head;
  var canonEl = head.querySelector('link[rel="canonical"]');
  var origin = "https://hi-spark.net";
  if (canonEl && canonEl.href) {
    try { origin = new URL(canonEl.href).origin; } catch (e) {}
  }
  var dir = { brand: "brand", app: "app", provider: "cloud", protocol: "protocol", pair: "compare", product: "product", category: "category", compat: "compatibility", model: "model", issue: "troubleshooting", certification: "certification" }[route.key];
  var base = dir ? origin + "/" + dir + "/" + encodeURIComponent(slug) + ".html" : origin + "/" + file;

  function setAttr(sel, attr, value) {
    var el = head.querySelector(sel);
    if (!el) return;
    el.setAttribute(attr, value);
  }
  function ensureMeta(selector, attrs, content) {
    var el = head.querySelector(selector);
    if (!el) {
      el = document.createElement("meta");
      for (var k in attrs) el.setAttribute(k, attrs[k]);
      head.appendChild(el);
    }
    el.setAttribute("content", content);
  }

  document.title = title;
  if (canonEl) canonEl.setAttribute("href", base);
  setAttr('meta[name="description"]', "content", desc || (name + " reference page on IoT Atlas."));
  setAttr('meta[property="og:title"]', "content", title);
  setAttr('meta[property="og:description"]', "content", desc || name);
  setAttr('meta[property="og:url"]', "content", base);
  setAttr('meta[name="twitter:title"]', "content", title);
  setAttr('meta[name="twitter:description"]', "content", desc || name);

  // Keep the hreflang cluster pointing at the same entity in each language.
  var alts = head.querySelectorAll('link[rel="alternate"][hreflang]');
  for (var i = 0; i < alts.length; i++) {
    var hl = alts[i].getAttribute("hreflang");
    if (hl === "x-default" || hl === "en") alts[i].setAttribute("href", base);
    else if (LOCALES.indexOf(hl) > -1) alts[i].setAttribute("href", base + "&lang=" + hl);
  }

  // Entity-level structured data, limited to fields present in the record.
  var node = { "@type": kind, name: name, url: base };
  if (desc) node.description = desc;
  if (kind === "Organization") {
    if (entity.url) node.sameAs = [entity.url];
    if (entity.hq) node.location = { "@type": "Place", name: String(entity.hq) };
  }
  if (kind === "SoftwareApplication") {
    node.operatingSystem = "iOS, Android";
    node.applicationCategory = "UtilitiesApplication";
    if (entity.brand) node.author = { "@type": "Organization", name: entity.brand };
    if (entity.source) node.sameAs = [entity.source];
  }
  if (kind === "Product") {
    if (entity.brand) node.brand = { "@type": "Brand", name: entity.brand };
    if (entity.category) node.category = entity.category;
  }

  var payload = {
    "@context": "https://schema.org",
    "@graph": [
      node,
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: origin + "/" },
          { "@type": "ListItem", position: 2, name: route.label, item: origin + "/" + file },
          { "@type": "ListItem", position: 3, name: name, item: base }
        ]
      }
    ]
  };
  var s = document.createElement("script");
  s.type = "application/ld+json";
  s.setAttribute("data-generated", "entity-seo");
  s.textContent = JSON.stringify(payload);
  head.appendChild(s);

  window.IOT_ENTITY_SEO = { slug: slug, name: name, kind: kind, canonical: base };
})();
