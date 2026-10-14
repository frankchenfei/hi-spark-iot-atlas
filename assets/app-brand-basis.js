/* Brand attribution normalisation.
   Rule: an app's brand is the publisher named in its own store listing.
   We only keep a DIFFERENT parent-company name when the relationship is
   first-party and derivable from the app name, or is a documented acquisition.
   Anything I inferred without a source is reset to the app's own name. */
(function(){
  var apps=window.IOT_APP_DIRECTORY||[];

  // documented publisher relationships we are willing to stand behind
  var DOCUMENTED={
    "Hikvision":"first-party vendor app (Hik-Connect)",
    "Dahua":"first-party vendor app (DMSS)",
    "Xiongmai":"first-party vendor app (XMEye / iCSee)",
    "VStarcam":"first-party vendor app (Eye4)",
    "Uniview":"first-party vendor app (EZView)",
    "AliveCor":"first-party vendor app (Kardia)",
    "Abbott":"first-party vendor app (LibreLink / Libre 3)",
    "Wellue":"first-party vendor app (O2Ring / ViHealth)",
    "Contec":"first-party vendor app (CMS50D)",
    "A&D Medical":"first-party vendor app (A&D Connect)",
    "BioIntelliSense":"first-party vendor app (BioButton)",
    "Senseonics":"first-party vendor app (Eversense)",
    "iRhythm":"first-party vendor app (Zio)",
    "Preventice":"first-party vendor app (BodyGuardian)",
    "ResMed":"first-party vendor app (myAir / AirView)",
    "Omron":"first-party vendor app (OMRON connect)",
    "iHealth":"first-party vendor app (MyVitals)",
    "Withings":"first-party vendor app (Health Mate / ScanWatch)",
    "Qardio":"first-party vendor app",
    "Roche":"first-party vendor app (Accu-Chek / mySugr)",
    "Azumio":"first-party vendor app (Glucose Buddy)",
    "Flo Health":"first-party vendor app (Flo)",
    "Ovia Health":"first-party vendor app (Ovia)",
    "Lexie Hearing":"first-party vendor app (Lexie)",
    "Ubiquiti":"first-party vendor app (UniFi Access)",
    "Victron Energy":"first-party vendor app (VictronConnect)",
    "Growatt":"first-party vendor app (ShinePhone)",
    "Samsung":"first-party vendor app (SmartThings / Galaxy)",
    "OPPO":"first-party vendor app (O Health / HeyTap)",
    "Xiaomi":"first-party vendor app (Mi Fitness / Mi Home)",
    "Amazfit / Zepp":"first-party vendor app (Zepp / Amazfit)",
    "Nabu Casa":"documented publisher of Home Assistant",
    "Athom":"documented publisher of Homey",
    "Whisker":"documented publisher of Litter-Robot",
    "Tuya":"first-party vendor app (Tuya Smart / Smart Life)",
    "TP-Link":"first-party vendor app (Kasa / Tapo are TP-Link lines)",
    "TP-Link Tapo":"first-party vendor app",
    "TP-Link Kasa":"first-party vendor app",
    "GE Cync":"first-party vendor app",
    "Anker":"first-party vendor app (soundcore / Nebula are Anker brands)",
    "Ring":"first-party vendor app",
    "Blink":"first-party vendor app",
    "Amazon Alexa":"first-party vendor app",
    "Google":"first-party vendor app",
    "Apple":"first-party vendor app",
    "Verizon":"first-party vendor app (GizmoWatch)",
    "Logitech":"first-party vendor app (Harmony)",
    "ArduPilot":"documented GCS publisher (Mission Planner)",
    "PX4":"documented GCS publisher (QGroundControl)",
    "ASICS":"documented acquisition (Runkeeper)",
    "Under Armour":"documented publisher (MapMyRun)",
    "Life360":"documented acquisition of Tile (2022)",
    "WhirlwindFX":"documented publisher of SignalRGB",
    "Jimi IoT":"documented platform (Tracksolid Pro)",
    "Casio":"first-party vendor app (G-Shock Connected)",
    "Milestone":"first-party vendor app (XProtect)",
    "Wonder Workshop":"first-party vendor app",
    "Etekcity / Levoit / Cosori":"first-party vendor app (VeSync)",
    "Senseonics ":"first-party vendor app",
    "Urbandroid":"documented developer of Sleep as Android",
    "Tantsissa":"documented developer of AutoSleep / HeartWatch",
    "Neybox":"documented developer of Pillow",
    "Moyoung":"CLIENT-SUPPLIED: DAFIT official site is moyoung.com",
    "Happy Lighting":"name variant only",
    "RideWithGPS":"name variant only",
    "LEDVANCE":"first-party vendor app (LEDVANCE SMART+)",
    "Ledvance Smart+":"first-party vendor app"
  };

  // relationships I inferred without a source - reset brand to the app's own name
  var DEMOTE={ "Zengge / LEDnet":1, "LEDnet":1 };

  var reset=0, tagged=0;
  apps.forEach(function(a){
    if(!a.brand||a.brand==="Generic") return;
    if(DEMOTE[a.brand]){ a.brand=a.name; a.brand_basis="unverified - reset to app name"; reset++; return; }
    if(DOCUMENTED[a.brand]){ a.brand_basis=DOCUMENTED[a.brand]; tagged++; return; }
    if(a.brand.toLowerCase()!==(a.name||"").toLowerCase() && (a.name||"").toLowerCase().indexOf(a.brand.toLowerCase())<0){
      a.brand_basis="unverified - brand left as recorded, needs review";
    }
  });
  window.IOT_BRAND_BASIS_STATS={documented:tagged,demoted:reset};
})();
