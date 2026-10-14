/* Ad slot configuration.
 *
 * mode:
 *   "placeholder" - draw a labelled grey box that reserves the real height.
 *                   Use this for layout review and before an ad account is live.
 *   "adsense"     - load Google AdSense and fill each slot from client/slot IDs.
 *   "direct"      - fill slots from your own ad server using slot.dataset.src.
 *   "off"         - render nothing (use if you want no ad markup at all).
 *
 * Every slot is labelled "Advertisement" and reserves its height, so switching
 * this on does not shift the layout (no CLS penalty). */
window.IOT_ADS = {
  mode: "placeholder",
  adsense: { client: "", slots: {} },
  // Optional: cap how many in-feed units appear so long directories stay readable.
  inFeedEvery: 8,
  inFeedMax: 3
};
