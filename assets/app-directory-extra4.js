(function(){
  var existing=window.IOT_APP_DIRECTORY||[];
  var A=function(name,brand,category,segment,protocols,summary){
    return {slug:(category+"-"+name).toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/^-|-$/g,""),
      name:name,brand:brand,category:category,segment:segment,platforms:"iOS / Android",protocols:protocols,summary:summary,
      android_url:"https://play.google.com/store/search?q="+encodeURIComponent(name)+"&c=apps&hl=en&gl=US",
      ios_url:"https://apps.apple.com/us/search?term="+encodeURIComponent(name),
      source:"Official app store search",status:"store-search",
      note:"Verify the store listing, developer account and regional availability before production."};
  };
  var extra=[
    // ---- Lighting & LED controllers ----
    A("Magic Home Pro","Zengge / LEDnet","Lighting","LED controller","Wi-Fi, BLE","Magic Home Pro control for RGB, RGBW and addressable LED controllers."),
    A("Magic LED","Zengge / LEDnet","Lighting","LED controller","Wi-Fi, BLE","Legacy Magic LED app for Zengge Wi-Fi LED controller modules."),
    A("LED Magic Home","LEDnet","Lighting","LED controller","Wi-Fi","LED controller setup, colour scenes and timers."),
    A("Happy Lighting","Happy Lighting","Lighting","LED controller","BLE, Wi-Fi","Bluetooth LED strip control, music sync and scene presets."),
    A("BRmesh","BRmesh","Lighting","LED controller","BLE, Wi-Fi","Mesh LED controller groups, colour effects and schedules."),
    A("Lotus Lantern","Lotus Lantern","Lighting","LED controller","BLE, Wi-Fi","Decorative LED controller scenes, music modes and timers."),
    A("DuoCo Strip","DuoCo","Lighting","LED controller","BLE, Wi-Fi","Addressable LED strip effects and segment control."),
    A("BanlanX","BanlanX","Lighting","LED controller","BLE","Bluetooth addressable LED controller effects and DIY scenes."),
    A("iDeal LED","iDeal","Lighting","LED controller","BLE, Wi-Fi","LED strip colour, music and schedule control."),
    A("Surplife","Surplife","Lighting","LED controller","BLE, Wi-Fi","Smart LED controller scenes, groups and voice control."),
    A("LampSmart Pro","LampSmart","Lighting","LED controller","BLE","Bluetooth mesh lamp and strip control."),
    A("Zengge Smart","Zengge","Lighting","LED controller","Wi-Fi, BLE","Zengge controller automation and colour scenes."),
    A("FitHome","FitHome","Lighting","LED controller","BLE, Wi-Fi","LED controller modes, music sync and timers."),
    A("Smart Light","Generic","Lighting","LED controller","BLE, Wi-Fi","Companion app used by many low-cost LED controllers."),
    // ---- Energy & solar ----
    A("Emporia Energy","Emporia","Energy & Solar","Energy monitor","Wi-Fi","Whole-home energy monitoring, circuits and solar tracking."),
    A("Sense Home","Sense","Energy & Solar","Energy monitor","Wi-Fi","Home energy monitoring with device detection."),
    A("SolarEdge Monitoring","SolarEdge","Energy & Solar","Solar","Wi-Fi","Solar production, inverter status and consumption monitoring."),
    A("Enphase Enlighten","Enphase","Energy & Solar","Solar","Wi-Fi","Enphase solar and battery system monitoring."),
    A("mySolarEdge","SolarEdge","Energy & Solar","Solar","Wi-Fi","Installer-facing solar system commissioning."),
    A("Growatt","Growatt","Energy & Solar","Solar","Wi-Fi","Growatt inverter monitoring and plant management."),
    A("ShinePhone","Growatt","Energy & Solar","Solar","Wi-Fi","Solar inverter monitoring used across OEM brands."),
    A("VictronConnect","Victron Energy","Energy & Solar","Off-grid","BLE","Victron battery, inverter and MPPT configuration."),
    A("Renogy DC Home","Renogy","Energy & Solar","Off-grid","BLE, Wi-Fi","Renogy solar, battery and inverter monitoring."),
    A("EcoFlow","EcoFlow","Energy & Solar","Portable power","BLE, Wi-Fi","Portable power station and solar input management."),
    // ---- Pet tech ----
    A("PetKit","PetKit","Pet Tech","Pet feeder","Wi-Fi, BLE","Smart feeder, fountain and litter box control."),
    A("Litter-Robot Connect","Whisker","Pet Tech","Litter box","Wi-Fi","Litter-Robot status, cycles and weight tracking."),
    A("Furbo Dog Camera","Furbo","Pet Tech","Pet camera","Wi-Fi","Pet camera, treat tossing and bark alerts."),
    A("PETLIBRO","PETLIBRO","Pet Tech","Pet feeder","Wi-Fi, BLE","Automatic feeder schedules and portion control."),
    A("WOpet","WOpet","Pet Tech","Pet feeder","Wi-Fi","Feeder scheduling and camera monitoring."),
    A("Sure Petcare","Sure Petcare","Pet Tech","Pet door","Wi-Fi, BLE","Microchip pet doors, feeders and activity tracking."),
    A("PetSafe Smart Feed","PetSafe","Pet Tech","Pet feeder","Wi-Fi","Smart feeder schedules and low-food alerts."),
    A("Tractive CAT","Tractive","Pet Tech","Pet tracker","LTE, BLE, GNSS","Feline GPS tracking and safe zones."),
    // ---- Air & water ----
    A("Qingping+","Qingping","Air & Water","Air quality","Wi-Fi, BLE","Air quality, temperature and humidity monitoring."),
    A("Temtop Air","Temtop","Air & Water","Air quality","Wi-Fi","PM2.5, CO2 and environmental monitoring."),
    A("Aranet4","Aranet","Air & Water","Air quality","BLE","CO2, temperature and humidity readings and logging."),
    A("Moen Smart Water","Moen","Air & Water","Water leak","Wi-Fi","Flo smart water shutoff, leak detection and usage."),
    A("Phyn Plus","Phyn","Air & Water","Water leak","Wi-Fi","Whole-home water monitoring and automatic shutoff."),
    A("GROHE Sense","Grohe","Air & Water","Water leak","Wi-Fi","Water leak and frost detection with shutoff."),
    A("D-Link Water Sensor","D-Link","Air & Water","Water leak","Wi-Fi, Zigbee","Water leak sensor alerts and automation."),
    A("Inkbird Smart","Inkbird","Air & Water","Sensors","BLE, Wi-Fi","Temperature, humidity and BBQ probe monitoring."),
    // ---- Hubs & controllers ----
    A("Home Assistant","Nabu Casa","Smart Home","Hub","Wi-Fi, Ethernet, Zigbee, Z-Wave, Matter, Thread","Local-first home automation hub and dashboard."),
    A("Homey","Athom","Smart Home","Hub","Wi-Fi, Zigbee, Z-Wave, Matter, Thread","Multi-protocol hub with Flow automation."),
    A("Hubitat","Hubitat","Smart Home","Hub","Zigbee, Z-Wave, Matter","Local automation hub and rule engine."),
    A("Ezlo / Vera","Ezlo","Smart Home","Hub","Zigbee, Z-Wave","Ezlo and Vera hub control and scenes."),
    A("openHAB","openHAB","Smart Home","Hub","Multi-protocol","Open-source home automation across many bindings."),
    A("Fibaro Home Center","Fibaro","Smart Home","Hub","Z-Wave, BLE","Fibaro Home Center scenes and device control."),
    A("SmartThings Station","Samsung","Smart Home","Hub","Matter, Thread, Wi-Fi","Samsung Matter and Thread hub setup."),
    A("Matter Controller","Generic","Smart Home","Hub","Matter, Thread","Reference Matter commissioning controller.")
  ];
  window.IOT_APP_DIRECTORY=existing.concat(extra.filter(function(x,i,arr){
    var s=(x.slug||"").toLowerCase(), n=(x.name||"").toLowerCase();
    if(arr.__seen&&(arr.__seen.s[s]||(n&&arr.__seen.n[n]))) return false;
    if(existing.some(function(y){return (y.slug||"").toLowerCase()===s||(n&&(y.name||"").toLowerCase()===n);})) return false;
    arr.__seen=arr.__seen||{s:{},n:{}}; arr.__seen.s[s]=1; if(n) arr.__seen.n[n]=1; return true;
  }));
})();
