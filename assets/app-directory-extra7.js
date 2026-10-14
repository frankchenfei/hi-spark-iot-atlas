/* Batch 7: wearable companion apps - OEM band/watch platforms, kids GPS watches,
   rings and watch-face utilities. Veepoo-family platforms are grouped under one brand. */
(function(){
  var existing=window.IOT_APP_DIRECTORY||[];
  function A(name,brand,segment,protocols,summary,source){
    return {slug:("wearables-"+name).toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/^-|-$/g,""),
      name:name,brand:brand,category:"Wearables",segment:segment,platforms:"iOS / Android",protocols:protocols,summary:summary,
      android_url:"https://play.google.com/store/search?q="+encodeURIComponent(name)+"&c=apps&hl=en&gl=US",
      ios_url:"https://apps.apple.com/us/search?term="+encodeURIComponent(name),
      source:source||"",status:"store-search",
      note:"Wearable apps often use white-label software across many brand names. Verify the exact device manual and QR code before downloading."};
  }
  var W=[
    // --- Veepoo / OEM band platforms ---
    A("Veepoo Health","Shenzhen Veepoo Technology","Bracelet","BLE","OEM wearable platform app for steps, sleep, heart rate and SpO2.",""),
    A("RDFIT","Shenzhen Runde Intelligent","Watch","BLE","RDFIT smartwatch companion built on the Veepoo platform.",""),
    A("SMART-TIME PRO","Shenzhen Smart Care Technology","Watch","BLE","SMART-TIME PRO watch companion for fitness and notifications.",""),
    A("H Band 2.0","H Band (individual developer)","Bracelet","BLE","H Band 2.0 band companion with health and sport tracking.",""),
    A("FitCloud","FitCloud (individual developer)","Bracelet","BLE","FitCloud band companion platform.",""),
    A("FundoWear","Fundo","Bracelet","BLE","Fundo wearable companion for bands and watches.",""),
    A("F Fit","F Fit","Bracelet","BLE","F Fit band fitness and sleep tracking.",""),
    A("FereFit","FereFit","Bracelet","BLE","FereFit band companion and health records.",""),
    A("KFit","KFit","Bracelet","BLE","KFit band activity and sleep companion.",""),
    A("FitTime","FitTime","Bracelet","BLE","FitTime band fitness and notification app.",""),
    A("YCBT Health","YCBT","Bracelet","BLE","YCBT band health and activity companion.",""),
    A("Body Monitoring","Generic","Bracelet","BLE","Generic body monitoring companion for OEM bands.",""),
    A("SmartBand","Generic","Bracelet","BLE","Generic smart band companion app.",""),
    A("BandPro","Generic","Bracelet","BLE","Generic band companion with fitness and alerts.",""),
    A("WatchPro","Generic","Watch","BLE","Generic smartwatch companion app.",""),
    A("WatchFit","Generic","Watch","BLE","Generic watch fitness and notification manager.",""),
    A("WearHealth","Generic","Watch","BLE","Generic wearable health data companion.",""),
    A("SmartHealth","Generic","Watch","BLE","Generic smartwatch health companion.",""),
    A("SWatch","Generic","Watch","BLE","Generic smartwatch pairing and settings app.",""),
    A("QWatch","Generic","Watch","BLE","Generic smartwatch companion and notification app.",""),
    A("IWO","IWO","Watch","BLE","IWO series smartwatch companion app.",""),
    A("HiWatch","Generic","Watch","BLE","Generic smartwatch health and sport companion.",""),
    A("FitWatch","Generic","Watch","BLE","Generic watch fitness tracking companion.",""),
    A("SportWatch","Generic","Sport","BLE","Generic sports watch companion.",""),
    A("LifeWatch","Generic","Health","BLE","Generic wearable health monitoring companion.",""),
    A("Smart Watch","Generic","Watch","BLE","Generic smartwatch companion app.",""),
    A("WearFit","Generic","Watch","BLE","Generic wearable fitness data app.",""),
    A("FitPro 2.0","Generic","Watch","BLE","Generic watch companion app for low-cost bands.",""),
    A("Dafit Lite","Moyoung","Watch","BLE","Lighter companion app for Moyoung watch platforms.","https://www.moyoung.com/en/"),
    // --- kids GPS watches ---
    A("SeTracker2","SeTracker","Kids Watch","BLE, LTE, GNSS","Kids GPS watch companion with calls, location and safe zones.",""),
    A("SeTracker","SeTracker","Kids Watch","BLE, LTE, GNSS","Legacy kids GPS watch tracking app.",""),
    A("AngelSense","AngelSense","Kids Watch","LTE, GNSS","GPS wearable and app for children with special needs.","https://www.angelsense.com/"),
    A("GizmoWatch","Verizon","Kids Watch","LTE, GNSS","Verizon GizmoWatch calling, location and contacts.","https://www.verizon.com/"),
    A("Tinitell","Tinitell","Kids Watch","LTE, GNSS","Kids wearable phone and location app.","https://www.tinitell.com/"),
    A("Doki Watch","Doki","Kids Watch","LTE, GNSS","Doki kids smartwatch calling and location.",""),
    A("COSMO Watch","COSMO","Kids Watch","LTE, GNSS","COSMO kids watch companion and parental controls.",""),
    A("WatchMyKid","WatchMyKid","Kids Watch","LTE, GNSS","Kids watch tracking and geofence alerts.",""),
    A("Kidtracker","Generic","Kids Watch","LTE, GNSS","Generic kids GPS watch companion app.",""),
    // --- rings ---
    A("Prevention Circul","Prevention","Ring","BLE","Circul smart ring heart rate and wellbeing tracking.",""),
    A("Jakcom Smart Ring","Jakcom","Ring","BLE, NFC","Jakcom smart ring NFC and wearable companion.","https://www.jakcom.com/"),
    A("NFC Ring","NFC Ring","Ring","NFC, BLE","NFC Ring configuration and tag management.","https://nfcring.com/"),
    A("McLear Ring","McLear","Ring","BLE, NFC","McLear payment and access ring companion.","https://mclear.com/"),
    A("Smart Ring","Generic","Ring","BLE","Generic smart ring health companion app.",""),
    A("SleepOn","SleepOn","Ring","BLE","SleepOn ring sleep tracking companion.",""),
    A("Go2sleep","Go2sleep","Ring","BLE","Go2sleep ring sleep and SpO2 tracking.",""),
    A("Movano Evie","Movano","Ring","BLE","Movano Evie ring health and cycle tracking.","https://movano.com/"),
    // --- watch face and utility ---
    A("Mi Band Master","Mi Band","Accessory","BLE","Advanced third-party Mi Band control and watch faces.",""),
    A("Tools & Mi Band","Mi Band","Accessory","BLE","Mi Band tools for alerts, battery and automation.",""),
    A("Amazfit Watch Faces","Amazfit / Zepp","Accessory","BLE","Community watch face browser for Amazfit watches.","https://www.zepp.com/"),
    A("Band Studio","Generic","Accessory","BLE","Generic band customisation and watch face studio.",""),
    A("Watch Faces","Generic","Accessory","BLE","Generic watch face library and installer.",""),
    A("Facer","Facer","Accessory","BLE","Large third-party watch face platform for Wear OS and more.","https://www.facer.io/"),
    A("WatchMaker","WatchMaker","Accessory","BLE","WatchMaker face designer and library.","https://watchmaker.app/"),
    A("Pujie Black","Pujie","Accessory","BLE","Pujie custom watch face designer.",""),
    A("Bubble Cloud","Bubble Cloud","Accessory","BLE","Wear OS launcher and watch face widgets.",""),
    A("Wear OS Tools","Generic","Accessory","BLE","Wear OS utilities for battery and connectivity.",""),
    A("Galaxy Watch Designer","Samsung","Accessory","BLE","Samsung watch face authoring and deployment tool.","https://developer.samsung.com/"),
    A("Gadgetbridge","Open source","Accessory","BLE","Open-source wearable companion with no vendor cloud.","https://gadgetbridge.org/"),
    // --- sport and outdoor ---
    A("Komoot","Komoot","Outdoor","GNSS","Route planning and navigation for hiking and cycling.","https://www.komoot.com/"),
    A("Ride with GPS","RideWithGPS","Sport","GNSS","Cycling route planning, navigation and ride history.","https://ridewithgps.com/"),
    A("Trailforks","Trailforks","Outdoor","GNSS","Mountain bike trail maps and conditions.","https://www.trailforks.com/"),
    A("AllTrails","AllTrails","Outdoor","GNSS","Hiking trail discovery and navigation.","https://www.alltrails.com/"),
    A("Golfshot","Golfshot","Sport","GNSS","Golf GPS, scorecard and swing analysis.","https://golfshot.com/"),
    A("SwingU","SwingU","Sport","GNSS","Golf GPS and stat tracking companion.","https://www.swingu.com/"),
    A("Zwift","Zwift","Sport","BLE, ANT+","Indoor cycling and running connected to smart trainers.","https://www.zwift.com/"),
    A("Wahoo","Wahoo","Sport","BLE, ANT+","Wahoo bike computer and trainer companion.","https://www.wahoofitness.com/"),
    // --- sleep and health tracking ---
    A("SnoreLab","SnoreLab","Sleep","BLE","Snore recording, analysis and sleep improvement.","https://snorelab.com/"),
    A("SleepWatch","SleepWatch","Sleep","BLE","Sleep tracking and heart rate trends.","https://www.sleepwatchapp.com/"),
    A("Rise","Rise","Sleep","BLE","Sleep debt tracking and energy forecasting.","https://www.risego.com/"),
    A("Sleep Cycle","Sleep Cycle","Sleep","BLE","Sleep cycle alarm and sleep quality analysis.","https://www.sleepcycle.com/"),
    A("AutoSleep","Tantsissa","Sleep","BLE","Automatic sleep tracking for Apple Watch.","https://www.tantsissa.com/"),
    A("Pillow","Neybox","Sleep","BLE","Sleep tracking and smart alarm for Apple Watch.","https://neybox.com/"),
    A("HeartWatch","Tantsissa","Health","BLE","Heart rate monitoring and alerts for Apple Watch.","https://www.tantsissa.com/"),
    A("Cardiogram","Cardiogram","Health","BLE","Heart rate trends and arrhythmia screening research.","https://cardiogram.com/"),
    A("Athlytic","Athlytic","Health","BLE","Recovery, exertion and readiness metrics.","https://www.athlyticapp.com/"),
    A("Training Today","Training Today","Health","BLE","Readiness and HRV training guidance.",""),
    A("Welltory","Welltory","Health","BLE","HRV, stress and energy measurement.","https://welltory.com/"),
    A("FibriCheck","FibriCheck","Health","BLE","Camera and wearable based heart rhythm checks.","https://www.fibricheck.com/"),
    A("QardioCore","Qardio","Bracelet","BLE","QardioCore chest strap ECG monitoring.","https://www.getqardio.com/"),
    A("BioBeat","BioBeat","Bracelet","BLE","Clinical-grade wearable vital signs monitoring.","https://www.biobeat.com/"),
    A("Equivital","Equivital","Bracelet","BLE","Physiological monitoring for research and industry.","https://www.equivital.com/"),
    A("Bodytrak","Bodytrak","Bracelet","BLE","Heat stress and physiological monitoring for workers.","https://bodytrak.co/"),
    A("BioButton","BioIntelliSense","Patch","BLE","Multi-vital patch monitoring for clinical use.","https://biointellisense.com/"),
    A("BodyGuardian","Preventice","Patch","BLE","Cardiac monitoring patch companion for clinicians.","https://www.preventics.com/"),
    A("Zio by iRhythm","iRhythm","Patch","BLE","Long-term cardiac rhythm monitoring patch.","https://www.irhythmtech.com/"),
    A("Hexoskin","Hexoskin","Shirt","BLE","Smart shirt for respiratory and cardiac monitoring.","https://www.hexoskin.com/")
  ];
  window.IOT_APP_DIRECTORY=existing.concat(W.filter(function(x,i,arr){
    var s=(x.slug||"").toLowerCase(), n=(x.name||"").toLowerCase();
    if(arr.__seen&&(arr.__seen.s[s]||(n&&arr.__seen.n[n]))) return false;
    if(existing.some(function(y){return (y.slug||"").toLowerCase()===s||(n&&(y.name||"").toLowerCase()===n);})) return false;
    arr.__seen=arr.__seen||{s:{},n:{}}; arr.__seen.s[s]=1; if(n) arr.__seen.n[n]=1; return true;
  }));
})();
