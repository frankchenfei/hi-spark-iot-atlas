/* Share bar and call-to-action: behaviour and language switching.
 *
 * The markup itself is written into the static HTML by the build
 * (tools/share-cta-markup.mjs), so crawlers and no-JavaScript visitors already
 * see the links. This script:
 *   1. swaps the labels when the visitor changes language (data-s keys);
 *   2. rebuilds the share URLs with the localised page title;
 *   3. wires the copy buttons and the subscribe form;
 *   4. falls back to rendering the block itself on pages the build did not fill
 *      (the query-string detail templates).
 *
 * No third-party scripts. Clicks are reported through window.IOT_TRACK, which is
 * consent-gated. */
(function () {
  var LANGS = ["en", "es", "fr"];
  var T = {
    en: {
      share_title: "Share this reference",
      share_note: "Pages like this are how other buyers, installers and researchers find the data. A link or a citation helps.",
      copy: "Copy link", copied: "Link copied", copy_cite: "Copy citation", cite_copied: "Citation copied",
      share: "Share", email: "Email",
      cta_title: "Get the monthly IoT brief",
      cta_note: "Certification changes, compatibility notes and platform updates. One short email, unsubscribe anytime.",
      cta_email: "you@company.com", cta_button: "Subscribe", cta_ok: "Thanks. Check your inbox to confirm.", cta_preview: "Preview mode: the newsletter endpoint is not connected yet.",
      dataset: "Download the open dataset (CC BY 4.0)", dataset_note: "1,452 structured records as JSON",
      correction: "Suggest a correction", correction_note: "Email info@hi-spark.com - we publish fixes and credit them",
      feed: "Follow the Atom feed", feed_note: "Recently verified records",
      net_x: "Share on X", net_linkedin: "Share on LinkedIn", net_facebook: "Share on Facebook",
      net_whatsapp: "Share on WhatsApp", net_reddit: "Share on Reddit", net_email: "Share by email"
    },
    es: {
      share_title: "Comparte esta referencia",
      share_note: "Páginas como esta son como otros compradores, instaladores e investigadores encuentran los datos. Un enlace o una cita ayuda.",
      copy: "Copiar enlace", copied: "Enlace copiado", copy_cite: "Copiar cita", cite_copied: "Cita copiada",
      share: "Compartir", email: "Correo",
      cta_title: "Recibe el boletín mensual de IoT",
      cta_note: "Cambios en certificaciones, notas de compatibilidad y novedades de plataformas. Un correo corto, baja cuando quieras.",
      cta_email: "tu@empresa.com", cta_button: "Suscribirme", cta_ok: "Gracias. Revisa tu correo para confirmar.", cta_preview: "Modo vista previa: el boletín aún no está conectado.",
      dataset: "Descargar el conjunto de datos abierto (CC BY 4.0)", dataset_note: "1.452 registros estructurados en JSON",
      correction: "Sugerir una corrección", correction_note: "Escribe a info@hi-spark.com - publicamos las correcciones y las acreditamos",
      feed: "Seguir el feed Atom", feed_note: "Registros verificados recientemente",
      net_x: "Compartir en X", net_linkedin: "Compartir en LinkedIn", net_facebook: "Compartir en Facebook",
      net_whatsapp: "Compartir en WhatsApp", net_reddit: "Compartir en Reddit", net_email: "Compartir por correo"
    },
    fr: {
      share_title: "Partager cette référence",
      share_note: "C'est ainsi que d'autres acheteurs, installateurs et chercheurs trouvent ces données. Un lien ou une citation aide.",
      copy: "Copier le lien", copied: "Lien copié", copy_cite: "Copier la citation", cite_copied: "Citation copiée",
      share: "Partager", email: "E-mail",
      cta_title: "Recevez la lettre IoT mensuelle",
      cta_note: "Évolutions des certifications, notes de compatibilité et actualités des plateformes. Un e-mail court, désinscription à tout moment.",
      cta_email: "vous@entreprise.com", cta_button: "S'abonner", cta_ok: "Merci. Vérifiez votre boîte pour confirmer.", cta_preview: "Mode aperçu : la lettre n'est pas encore connectée.",
      dataset: "Télécharger le jeu de données ouvert (CC BY 4.0)", dataset_note: "1 452 enregistrements structurés en JSON",
      correction: "Proposer une correction", correction_note: "Écrivez à info@hi-spark.com - nous publions les corrections et les créditons",
      feed: "Suivre le flux Atom", feed_note: "Enregistrements récemment vérifiés",
      net_x: "Partager sur X", net_linkedin: "Partager sur LinkedIn", net_facebook: "Partager sur Facebook",
      net_whatsapp: "Partager sur WhatsApp", net_reddit: "Partager sur Reddit", net_email: "Partager par e-mail"
    }
  };
  var EMAIL = "info@hi-spark.com";
  function currentLang() {
    var p = null;
    try { p = new URLSearchParams(location.search).get("lang"); } catch (e) {}
    if (p && LANGS.indexOf(p) > -1) return p;
    try { var s = localStorage.getItem("iot-lang"); if (s && LANGS.indexOf(s) > -1) return s; } catch (e) {}
    var h = document.documentElement && document.documentElement.lang;
    return h && LANGS.indexOf(h) > -1 ? h : "en";
  }
  function t(k) { var l = currentLang(); return (T[l] && T[l][k]) || T.en[k] || ""; }
  function esc(v) { return String(v == null ? "" : v).replace(/[&<>"']/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]; }); }
  function base() { return window.IOT_SITE_BASE || ""; }
  function canonical() {
    var l = document.querySelector('link[rel="canonical"]');
    var h = l && l.getAttribute("href");
    return h && /^https?:/i.test(h) ? h : String(location.href).split("#")[0];
  }
  function pageTitle() {
    var h = document.querySelector("h1");
    var s = h && h.textContent ? h.textContent.trim() : "";
    if (!s) s = String(document.title || "").replace(/\s*\|\s*IoT Atlas\s*$/, "");
    return s.replace(/\s+/g, " ").slice(0, 120);
  }
  function track(name, props) { try { if (window.IOT_TRACK) window.IOT_TRACK(name, props || {}); } catch (e) {} }
  function copy(text, btn, doneKey) {
    if (!(navigator.clipboard && navigator.clipboard.writeText)) return;
    navigator.clipboard.writeText(text).then(function () {
      var old = btn.textContent;
      btn.textContent = t(doneKey);
      setTimeout(function () { btn.textContent = old; }, 1800);
    }, function () {});
  }
  function shareTargets(title, url) {
    var enc = encodeURIComponent;
    return [
      ["x", "X", "https://twitter.com/intent/tweet?text=" + enc(title) + "&url=" + enc(url)],
      ["linkedin", "LinkedIn", "https://www.linkedin.com/sharing/share-offsite/?url=" + enc(url)],
      ["facebook", "Facebook", "https://www.facebook.com/sharer/sharer.php?u=" + enc(url)],
      ["whatsapp", "WhatsApp", "https://api.whatsapp.com/send?text=" + enc(title + " " + url)],
      ["reddit", "Reddit", "https://www.reddit.com/submit?url=" + enc(url) + "&title=" + enc(title)],
      ["email", t("email"), "mailto:?subject=" + enc(title) + "&body=" + enc(url)]
    ];
  }
  function citation(url, title) { return 'IoT Atlas. "' + title + '". ' + url + "."; }
  /* Fallback markup for pages the build did not pre-render (CTA band only:
     the share row sits in #share-bar at the top of the page). */
  function buildMarkup(url, title) {
    var mailto = "mailto:" + EMAIL + "?subject=" + encodeURIComponent("Correction: " + title) +
      "&body=" + encodeURIComponent(url + "\n\nWhat looks wrong:\n\nCorrect information and an official source:\n");
    return '<div class="container"><div class="cta-band">' +
      '<div class="cta-band-copy">' +
        '<h2 class="share-heading" data-s="cta_title">' + esc(t("cta_title")) + "</h2>" +
        '<p class="share-note" data-s="cta_note">' + esc(t("cta_note")) + "</p>" +
        '<form class="cta-form" action="mailto:' + EMAIL + '" method="post" enctype="text/plain" novalidate>' +
          '<input id="cta-email" type="email" name="email" required autocomplete="email" placeholder="' + esc(t("cta_email")) + '" data-s-ph="cta_email">' +
          '<button class="btn primary" type="submit" data-s="cta_button">' + esc(t("cta_button")) + "</button></form>" +
        '<p class="cta-status" role="status"></p></div>' +
      '<ul class="cta-links">' +
        '<li><a href="' + esc(base() + "data/iot-atlas-open-dataset.json") + '" download><span data-s="dataset">' + esc(t("dataset")) + "</span></a> <small data-s=\"dataset_note\">" + esc(t("dataset_note")) + "</small></li>" +
        '<li><a href="' + esc(mailto) + '"><span data-s="correction">' + esc(t("correction")) + "</span></a> <small data-s=\"correction_note\">" + esc(t("correction_note")) + "</small></li>" +
        '<li><a href="' + esc(base() + "feed.xml") + '"><span data-s="feed">' + esc(t("feed")) + "</span></a> <small data-s=\"feed_note\">" + esc(t("feed_note")) + "</small></li>" +
      "</ul></div></div>";
  }
  /* Swap the pre-rendered English labels for the visitor's language. */
  function localize(host, url, title) {
    var nodes = host.querySelectorAll("[data-s]");
    for (var i = 0; i < nodes.length; i++) {
      var k = nodes[i].getAttribute("data-s");
      var v = t(k);
      if (v) nodes[i].textContent = v;
    }
    var ph = host.querySelectorAll("[data-s-ph]");
    for (var j = 0; j < ph.length; j++) {
      var k2 = ph[j].getAttribute("data-s-ph");
      var v2 = t(k2);
      if (v2) ph[j].setAttribute("placeholder", v2);
    }
    var targets = shareTargets(title, url);
    for (var n = 0; n < targets.length; n++) {
      var a = host.querySelector('[data-share="' + targets[n][0] + '"]');
      if (a) a.setAttribute("href", targets[n][2]);
    }
    var urlNode = host.querySelector(".share-url");
    if (urlNode) urlNode.textContent = url;
    var titled = host.querySelectorAll("[data-s-title]");
    for (var m2 = 0; m2 < titled.length; m2++) {
      var k3 = titled[m2].getAttribute("data-s-title");
      var v3 = t(k3);
      if (v3) { titled[m2].setAttribute("title", v3); titled[m2].setAttribute("aria-label", v3); }
    }
    var citeTag = host.querySelector("[data-citation]");
    if (citeTag) citeTag.textContent = JSON.stringify({ citation: citation(url, title) });
  }
  function bind(host, url, title) {
    if (host.getAttribute("data-bound") === "1") return;
    host.setAttribute("data-bound", "1");
    host.addEventListener("click", function (e) {
      var b = e.target.closest ? e.target.closest("[data-share]") : null;
      if (!b) {
        // CTA link: report which call to action was used so the operator can see
        // what actually converts (dataset download, correction email, feed).
        var a = e.target.closest ? e.target.closest("a[href]") : null;
        if (!a) return;
        var href = a.getAttribute("href") || "";
        var target = /iot-atlas-open-dataset/.test(href) ? "dataset"
          : (/^mailto:/.test(href) ? "correction_email"
          : (/feed\.xml/.test(href) ? "atom_feed" : ""));
        if (target) track("cta_click", { target: target, page: url });
        return;
      }
      var kind = b.getAttribute("data-share");
      if (kind === "copy") { e.preventDefault(); copy(url, b, "copied"); track("share", { channel: "copy_link", page: url }); }
      else if (kind === "cite") {
        e.preventDefault();
        var tag = host.querySelector("[data-citation]");
        var text = citation(url, title);
        if (tag) { try { text = JSON.parse(tag.textContent).citation || text; } catch (err) {} }
        copy(text, b, "cite_copied");
        track("share", { channel: "copy_citation", page: url });
      } else track("share", { channel: kind, page: url });
    });
    var form = host.querySelector(".cta-form");
    if (form) form.addEventListener("submit", function (e) {
      e.preventDefault();
      var cfg = window.IOT_SUBSCRIBE || { mode: "off", endpoint: "" };
      var status = host.querySelector(".cta-status");
      var input = host.querySelector("#cta-email");
      var email = input && input.value.trim();
      if (!email || email.indexOf("@") < 1) return;
      track("cta_subscribe", { page: url });
      if ((cfg.mode || "off") !== "live" || !cfg.endpoint) { if (status) status.textContent = t("cta_preview"); return; }
      var body = new FormData();
      body.append(cfg.emailField || "email", email);
      Object.keys(cfg.hidden || {}).forEach(function (k) { body.append(k, cfg.hidden[k]); });
      fetch(cfg.endpoint, { method: "POST", body: body, mode: "cors" })
        .then(function () { form.reset(); if (status) status.textContent = t("cta_ok"); })
        .catch(function () { if (status) status.textContent = t("cta_preview"); });
    });
  }
  function barMarkup(url, title) {
    return '<div class="container"><div class="share-bar-inner">' +
      '<span class="share-bar-label" data-s="share">' + esc(t("share")) + "</span>" +
      '<span class="share-bar-icons">' + shareTargets(title, url).map(function (s) { return '<a class="share-icon share-icon-' + s[0] + '" data-share="' + s[0] + '" data-s-title="net_' + s[0] + '" href="' + s[2] + '" target="_blank" rel="noopener nofollow" title="' + esc(t("net_" + s[0])) + '" aria-label="' + esc(t("net_" + s[0])) + '"></a>'; }).join("") + "</span>" +
      '<span class="share-bar-tools">' +
        '<button type="button" class="share-tool" data-share="copy" data-s-title="copy"><span data-s="copy">' + esc(t("copy")) + "</span></button>" +
        '<button type="button" class="share-tool" data-share="cite" data-s-title="copy_cite"><span data-s="copy_cite">' + esc(t("copy_cite")) + "</span></button>" +
      "</span>" +
      '<code class="share-url" hidden>' + esc(url) + "</code>" +
      '<script type="application/json" data-citation>' + JSON.stringify({ citation: citation(url, title) }) + "<\/script></div></div>";
  }
  function enhanceOne(host, kind) {
    if (!host) return;
    var url = canonical(), title = pageTitle();
    var ready = kind === "bar" ? !!host.querySelector(".share-bar-inner") : !!host.querySelector(".share-cta-grid");
    if (!ready) {
      host.innerHTML = kind === "bar" ? barMarkup(url, title) : buildMarkup(url, title);
      host.setAttribute("data-bound", "0");
    }
    localize(host, url, title);
    bind(host, url, title);
  }
  /* FAQ blocks are pre-rendered in English with the ES/FR pairs carried in a JSON
     script tag; swap them when the visitor is on another language. */
  var FAQ_EN = null;
  function localizeEntityFaq() {
    var host = document.getElementById("entity-faq");
    if (!host) return;
    var list = host.querySelector(".faq-list");
    var tag = document.querySelector("script[data-faq-i18n]");
    if (!list || !tag) return;
    if (FAQ_EN === null) FAQ_EN = list.innerHTML;
    var lang = currentLang();
    if (lang === "en") { if (list.innerHTML !== FAQ_EN) list.innerHTML = FAQ_EN; return; }
    var pairs = null;
    try { pairs = (JSON.parse(tag.textContent) || {})[lang]; } catch (e) {}
    if (!pairs || !pairs.length) { if (list.innerHTML !== FAQ_EN) list.innerHTML = FAQ_EN; return; }
    list.innerHTML = pairs.map(function (p) {
      return '<details class="faq-item" open><summary>' + esc(p[0]) + "</summary><p>" + esc(p[1]) + "</p></details>";
    }).join("");
  }
  /* Generic language swap for pages that ship a <script data-l10n> payload:
     element text is replaced by the ES/FR string, with the original English kept
     as the fallback. Used by the market entry pages. */
  var L10N_EN = null;
  function localizeDataAttrs() {
    var nodes = document.querySelectorAll("[data-l10n-key]");
    if (!nodes.length) return;
    var tag = document.querySelector("script[data-l10n]");
    var payload = {};
    if (tag) { try { payload = JSON.parse(tag.textContent) || {}; } catch (e) {} }
    var lang = currentLang();
    if (L10N_EN === null) { L10N_EN = []; for (var i = 0; i < nodes.length; i++) L10N_EN.push(nodes[i].textContent); }
    for (var j = 0; j < nodes.length; j++) {
      var k = nodes[j].getAttribute("data-l10n-key");
      var v = lang === "en" ? L10N_EN[j] : ((payload[lang] || {})[k] || L10N_EN[j]);
      if (v != null) nodes[j].textContent = v;
    }
  }
  function enhance() {
    enhanceOne(document.getElementById("share-bar"), "bar");
    enhanceOne(document.getElementById("share-cta"), "cta");
    localizeEntityFaq();
    localizeDataAttrs();
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", enhance);
  else enhance();
  document.addEventListener("iot:langchange", enhance);
})();
