/* Data quality filter.
   Removes app records that were fabricated as filler rather than sourced from a
   real product. These entries had no verifiable publisher, no store listing and
   no official site - they existed only to pad category counts, which damages
   credibility far more than an empty category does.

   Rule: a record may only stay if it has a distinguishable publisher.
   App-store search links are not evidence that a named app exists. */
(function(){
  var FABRICATED=[
    // camera
    "HD WiFi Camera","Baby Monitor","HD Mini Cam",
    // health - invented scale / oximeter / BP / thermometer / respiratory names
    "SmartScale","ScaleUp","Body Compass","Keep Fit","Smart Health","Health Scale","Bluetooth Scale",
    "VitaScale","FitScale","BodyTracker","BodyScale","Smart Body","Health Tracker",
    "Smart O2","CheckO2","OxyGo","Pulse Oximeter","Oximeter",
    "Blood Pressure Monitor","BP Monitor","Health Monitor","HeartCheck",
    "Thermo","Smart Thermometer","Fever Tracker","SmartResp","Breathe","Asthmon",
    // wearables
    "Smart Ring","SmartBand","Band Studio","Watch Faces","Wear OS Tools","WatchPro","BandPro",
    "WatchFit","WearHealth","SmartHealth","SWatch","QWatch","HiWatch","FitWatch","SportWatch",
    "LifeWatch","Smart Watch","WearFit","FitPro 2.0","Kidtracker",
    // lighting / smart home
    "Smart Light","Matter Controller","LED Lamp","LED Hue","iLedMagic",
    // infrared
    "Remote Buddy","AirTouch","Smart IR","IR Remote",
    // drones  (WiFi UAV is intentionally kept - requested by the client)
    "FPV Drone","RC Drone","UFO Drone","Drone Remote Controller"
  ];
  var block={}; FABRICATED.forEach(function(n){ block[n.toLowerCase()]=1; });

  var apps=window.IOT_APP_DIRECTORY||[];
  var kept=[], removed=[];
  apps.forEach(function(a){
    var n=(a.name||"").toLowerCase();
    if(block[n] && (a.brand==="Generic"||!a.brand)){ removed.push(a.name); return; }
    kept.push(a);
  });
  window.IOT_APP_DIRECTORY=kept;
  window.IOT_QUALITY_FILTER={removed:removed.length,names:removed};
})();
