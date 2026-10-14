/* Applies catalogue translations at load time.
 *
 * UI chrome is translated by assets/i18n.js. This layer covers the catalogue
 * prose, which is stored on the records themselves:
 *   brand.notes   -> brand detail page ("Brand profile")
 *   app.summary   -> app detail page ("Official app download")
 *
 * Only the staged subset is covered (top 100 brands, top 200 apps). Anything
 * without a translation keeps its English text, so the page never goes blank.
 *
 * The English original is stashed on the record the first time a translation is
 * applied, so switching back to EN restores it exactly. */
(function () {
  var STORE = window.IOT_CONTENT_I18N;
  if (!STORE) return;
  var SUPPORTED = ["es", "fr"];

  function currentLang() {
    var p = new URLSearchParams(location.search).get("lang");
    if (p && SUPPORTED.concat("en").indexOf(p) > -1) return p;
    try {
      var s = localStorage.getItem("iot-lang");
      if (s && SUPPORTED.concat("en").indexOf(s) > -1) return s;
    } catch (e) {}
    return "en";
  }
  function pick(entry, lang) {
    if (!entry) return "";
    var v = entry[lang];
    return v && String(v).trim() ? String(v).trim() : "";
  }

  /* Each collection maps a store bucket to the record field that renders as prose.
     Brand and cloud use "notes", everything else uses "summary". */
  var COLLECTIONS = [
    { bucket: "brands", list: "IOT_BRANDS", field: "notes" },
    { bucket: "apps", list: "IOT_APP_DIRECTORY", field: "summary" },
    { bucket: "clouds", list: "IOT_CLOUDS", field: "notes" },
    { bucket: "protocols", list: "IOT_KNOWLEDGE.protocols", field: "summary" },
    { bucket: "standards", list: "IOT_KNOWLEDGE.standards", field: "summary" },
    { bucket: "concepts", list: "IOT_KNOWLEDGE.concepts", field: "summary" },
    { bucket: "comparisons", list: "IOT_COMPARISONS", field: "summary" }
  ];
  function resolve(path) {
    return path.split(".").reduce(function (acc, k) { return acc && acc[k]; }, window) || [];
  }
  function apply(lang) {
    var used = 0;
    for (var c = 0; c < COLLECTIONS.length; c++) {
      var col = COLLECTIONS[c];
      var store = STORE[col.bucket];
      var list = resolve(col.list);
      if (!store || !list.length) continue;
      for (var i = 0; i < list.length; i++) {
        var rec = list[i];
        var enKey = "__i18n_en_" + col.field;
        if (rec[enKey] === undefined) rec[enKey] = rec[col.field];
        var t = pick(store[rec.slug], lang);
        if (t) { rec[col.field] = t; used++; } else { rec[col.field] = rec[enKey]; }
      }
    }
    window.IOT_CONTENT_I18N_APPLIED = { lang: lang, records: used };
    return used;
  }

  window.IOT_APPLY_CONTENT_I18N = function () { return apply(currentLang()); };

  // Initial pass. The data scripts have already run by the time this executes.
  apply(currentLang());

  // app.js re-renders without a reload when the visitor switches language, so
  // re-apply as soon as it announces the new locale.
  document.addEventListener("iot:langchange", function (e) {
    apply((e && e.detail && e.detail.lang) || currentLang());
  });
})();
