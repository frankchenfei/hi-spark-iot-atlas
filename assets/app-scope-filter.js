/* Scope filter: an app belongs in this directory only if it has a device
   interaction - it controls hardware, pairs with a device, or reads data from a
   sensor over a wireless protocol.
 *
 *   IN  : companion apps for cameras, locks, sensors, wearables, scales, printers,
 *         chargers, TVs and set-top boxes, network players, smart speakers.
 *   OUT : standalone software with no device link - media catalogues, food
 *         logging, patient portals, pure navigation or social fitness apps.
 *
 * Removed here because they were added in error during the category audit. */
(function(){
  var OUT_OF_SCOPE = [
    // media players and music services - no device control
    "Plex","Plexamp","Kodi","VLC","Roon","Qobuz","TIDAL",
    // standalone logging / portals - no device link
    "MyFitnessPal","MyChart",
    // games consoles - not IoT devices
    "Xbox","PlayStation Remote Play",
    // navigation and social fitness - guidance only, no hardware pairing
    "Komoot","Ride with GPS","Trailforks","AllTrails","Golfshot","SwingU",
    "Nike Run Club","adidas Running","Runkeeper","MapMyRun"
  ];
  var drop = {};
  OUT_OF_SCOPE.forEach(function(n){ drop[n.toLowerCase()] = 1; });

  var apps = window.IOT_APP_DIRECTORY || [];
  var kept = [], removed = [];
  apps.forEach(function(a){
    if(drop[(a.name || "").toLowerCase()]){ removed.push(a.name); return; }
    kept.push(a);
  });
  window.IOT_APP_DIRECTORY = kept;
  window.IOT_SCOPE_FILTER = { removed: removed.length, names: removed };
})();
