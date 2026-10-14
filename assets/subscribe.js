/* Renders the newsletter form when configured. */
(function () {
  var CFG = window.IOT_SUBSCRIBE || { mode: "off" };
  var MODE = CFG.mode || "off";
  if (MODE === "off") return;

  function t(key, fallback) {
    var m = window.IOT_I18N || {};
    var lang = document.documentElement.lang || "en";
    return (m[lang] && m[lang][key]) || (m.en && m.en[key]) || fallback;
  }
  function esc(v) {
    return String(v == null ? "" : v).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }

  function render() {
    if (document.querySelector(".subscribe-block")) return;
    var footer = document.getElementById("site-footer");
    if (!footer || !footer.parentNode) return;

    var hidden = "";
    for (var k in (CFG.hidden || {})) hidden += '<input type="hidden" name="' + esc(k) + '" value="' + esc(CFG.hidden[k]) + '">';

    var block = document.createElement("section");
    block.className = "subscribe-block";
    block.innerHTML =
      '<div class="container">' +
        '<div class="subscribe-inner">' +
          "<div class=\"subscribe-copy\">" +
            "<strong>" + t("subscribe.title", "Get the IoT data updates") + "</strong>" +
            "<p>" + esc(CFG.note || t("subscribe.note", "Occasional updates. Unsubscribe anytime.")) + "</p>" +
          "</div>" +
          '<form class="subscribe-form" novalidate>' +
            hidden +
            '<label class="sr-only" for="subscribe-email">' + t("subscribe.email", "Email address") + "</label>" +
            '<input id="subscribe-email" type="email" name="' + esc(CFG.emailField || "email") + '" required ' +
              'placeholder="' + esc(t("subscribe.placeholder", "you@example.com")) + '" autocomplete="email">' +
            '<button class="btn primary" type="submit">' + t("subscribe.button", "Subscribe") + "</button>" +
            '<span class="subscribe-status" role="status"></span>' +
          "</form>" +
        "</div>" +
      "</div>";
    footer.parentNode.insertBefore(block, footer);

    block.querySelector("form").addEventListener("submit", function (e) {
      e.preventDefault();
      var status = block.querySelector(".subscribe-status");
      var input = block.querySelector("#subscribe-email");
      var value = (input.value || "").trim();
      if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(value)) {
        status.textContent = t("subscribe.invalid", "Enter a valid email address.");
        status.className = "subscribe-status is-error";
        input.focus();
        return;
      }
      if (MODE !== "live" || !CFG.endpoint) {
        status.textContent = t("subscribe.preview", "Preview mode - nothing was sent.");
        status.className = "subscribe-status is-preview";
        return;
      }
      status.textContent = t("subscribe.sending", "Sending...");
      status.className = "subscribe-status";
      fetch(CFG.endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: value })
      }).then(function (r) {
        if (!r.ok) throw new Error("http " + r.status);
        status.textContent = t("subscribe.done", "Thanks - check your inbox to confirm.");
        status.className = "subscribe-status is-ok";
        input.value = "";
        if (window.IOT_TRACK) window.IOT_TRACK("newsletter_signup", {});
      }).catch(function () {
        status.textContent = t("subscribe.error", "That did not work. Please try again later.");
        status.className = "subscribe-status is-error";
      });
    });
  }

  document.addEventListener("DOMContentLoaded", render);
})();
