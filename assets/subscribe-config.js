/* Newsletter capture.
 *
 * The site earns search traffic but had no way to keep it. This block adds a
 * signup form that works with any provider accepting a plain form POST
 * (Buttondown, Mailchimp embedded action, ConvertKit, or your own endpoint).
 *
 * mode:
 *   "preview" - renders the form so you can review the layout; submitting is
 *               blocked and nothing is sent.
 *   "live"    - posts to the configured endpoint.
 *   "off"     - renders nothing.
 */
window.IOT_SUBSCRIBE = {
  mode: "preview",
  endpoint: "",
  emailField: "email",
  hidden: {},
  note: "One short email when new IoT app data lands. No resale, unsubscribe anytime."
};
