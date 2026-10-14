/* Analytics configuration.
 *
 * provider: "none" | "ga4" | "plausible" | "umami"
 * Nothing loads until the visitor accepts cookies (see assets/consent.js),
 * so GA4 here is GDPR-shaped rather than firing on first paint.
 *
 * Fill in one provider's IDs before launch and leave the rest empty. */
window.IOT_ANALYTICS = {
  provider: "none",
  ga4: { id: "" },
  plausible: { domain: "", src: "https://plausible.io/js/script.js" },
  umami: { websiteId: "", src: "" },
  // Events worth measuring on this site: store-link clicks, ad slot visibility,
  // language switches and internal searches.
  trackOutbound: true,
  trackAds: true,
  trackSearch: true,
  debug: false
};
