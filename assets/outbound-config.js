/* Outbound link attribution.
 *
 * Every store and vendor link on the site is an outbound click. Without tags the
 * traffic you send is invisible to the merchants and to your own analytics, so
 * nothing can be attributed or monetised later.
 *
 * enabled   - turn the rewriting on/off
 * source    - utm_source, identifies the site
 * medium    - utm_medium, identifies the placement type
 * campaign  - utm_campaign, identifies the deployment
 * affiliate - optional program tags appended to store links. Leave empty until you
 *             have affiliate accounts; the code skips empty values.
 */
window.IOT_OUTBOUND = {
  enabled: true,
  source: "iot-atlas",
  medium: "directory",
  campaign: "hi-spark",
  affiliate: {
    // e.g. "at=10lXXXX" (Apple) or "&referrer=utm_source%3Diotalas" (Play)
    appStore: "",
    googlePlay: ""
  }
};
