/* Batch 10: fills remaining gaps - dash cams, EV charging, intercom, sensors. */
(function(){
  var existing=window.IOT_APP_DIRECTORY||[];
  function A(name,brand,category,segment,protocols,summary,source){
    return {slug:(category+"-"+name).toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/^-|-$/g,""),
      name:name,brand:brand,category:category,segment:segment,platforms:"iOS / Android",protocols:protocols,summary:summary,
      android_url:"https://play.google.com/store/search?q="+encodeURIComponent(name)+"&c=apps&hl=en&gl=US",
      ios_url:"https://apps.apple.com/us/search?term="+encodeURIComponent(name),
      source:source||"",status:"store-search",
      note:"Verify the store listing, developer account and regional availability before production."};
  }
  var X=[
    // EV charging - new category
    A("Wallbox","Wallbox","EV Charging","Charger","Wi-Fi, BLE","Wallbox charger scheduling, solar matching and energy stats.","https://wallbox.com/"),
    A("Zappi","myenergi","EV Charging","Charger","Wi-Fi, BLE","Zappi charger modes, solar diversion and scheduling.","https://myenergi.com/"),
    A("Ohme","Ohme","EV Charging","Charger","Wi-Fi, LTE","Ohme smart charging schedules and tariff optimisation.","https://ohme-ev.com/"),
    A("Easee","Easee","EV Charging","Charger","Wi-Fi, BLE","Easee charger setup, load balancing and schedules.","https://easee.com/"),
    A("Tesla Charging","Tesla","EV Charging","Charger","Wi-Fi, BLE","Tesla Wall Connector setup and charge scheduling.","https://www.tesla.com/"),
    A("Emporia EV","Emporia","EV Charging","Charger","Wi-Fi","Emporia EV charger control and energy monitoring.","https://www.emporiaenergy.com/"),
    A("Pod Point","Pod Point","EV Charging","Charger","Wi-Fi, LTE","Pod Point charging sessions, schedules and costs.","https://pod-point.com/"),
    A("EVBox","EVBox","EV Charging","Charger","Wi-Fi, LTE, OCPP","EVBox charger management for homes and businesses.","https://evbox.com/"),
    A("ChargePoint","ChargePoint","EV Charging","Network","LTE, OCPP","ChargePoint public charging, sessions and roaming.","https://www.chargepoint.com/"),
    A("Zaptec","Zaptec","EV Charging","Charger","Wi-Fi, BLE","Zaptec charger installation and load balancing.","https://zaptec.com/"),
    A("ABB Terra","ABB","EV Charging","Charger","LTE, OCPP","ABB charger fleet management and OCPP configuration.","https://global.abb/"),
    A("Alfen","Alfen","EV Charging","Charger","Wi-Fi, LTE, OCPP","Alfen charger setup and smart charging profiles.","https://alfen.com/"),
    // Dash cams
    A("BlackVue","BlackVue","Dash Cams","Dash cam","Wi-Fi, BLE, Cloud","BlackVue dash cam live view, cloud and parking mode.","https://www.blackvue.com/"),
    A("Thinkware Cloud","Thinkware","Dash Cams","Dash cam","Wi-Fi, Cloud","Thinkware dash cam cloud, parking mode and updates.","https://www.thinkware.com/"),
    A("Viofo","VIOFO","Dash Cams","Dash cam","Wi-Fi, BLE","VIOFO dash cam settings, clips and firmware.","https://www.viofo.com/"),
    A("Nextbase","Nextbase","Dash Cams","Dash cam","Wi-Fi, BLE","Nextbase dash cam emergency response and clip sharing.","https://www.nextbase.com/"),
    A("Kenwood Dashcam","Kenwood","Dash Cams","Dash cam","Wi-Fi","Kenwood dash cam viewing and settings.","https://www.kenwood.com/"),
    A("Rexing","Rexing","Dash Cams","Dash cam","Wi-Fi","Rexing dash cam live view and downloads.","https://www.rexingusa.com/"),
    // Intercom / access additions
    A("Akuvox","Akuvox","Access Control","Intercom","Wi-Fi, Ethernet, PoE","Akuvox door intercom, access and building management.","https://www.akuvox.com/"),
    A("Fermax","Fermax","Access Control","Intercom","Wi-Fi, Ethernet","Fermax video door entry and building intercom.","https://www.fermax.com/"),
    A("Bticino","Bticino","Access Control","Intercom","Wi-Fi, Ethernet","Bticino door entry and home automation.","https://www.bticino.com/"),
    A("Hikvision Intercom","Hikvision","Access Control","Intercom","Wi-Fi, PoE","Hikvision video intercom and door station control.","https://www.hikvision.com/"),
    // Sensors
    A("Aqara Sensors","Aqara","Smart Home","Sensor","Zigbee, Thread, Matter","Aqara door, motion, temperature and leak sensors.","https://www.aqara.com/"),
    A("Sonoff Sensors","SONOFF","Smart Home","Sensor","Zigbee, Wi-Fi","Sonoff motion, door and temperature sensors.","https://sonoff.tech/"),
    A("Tuya Sensors","Tuya","Smart Home","Sensor","Zigbee, Wi-Fi, BLE","Tuya-based sensors across many OEM brands.","https://www.tuya.com/"),
    A("Frient","frient","Smart Home","Sensor","Zigbee","frient sensors for leak, vibration, air quality and alarms.","https://frient.com/"),
    A("Netatmo","Netatmo","Air & Water","Weather","Wi-Fi, BLE","Netatmo weather, air quality and thermostat control.","https://www.netatmo.com/"),
    A("Ecowitt","Ecowitt","Air & Water","Weather","Wi-Fi, LoRa","Ecowitt weather stations and soil sensors.","https://www.ecowitt.com/"),
    A("Davis WeatherLink","Davis Instruments","Air & Water","Weather","Wi-Fi, BLE","Davis weather station monitoring and history.","https://www.davisinstruments.com/"),
    A("Ambient Weather","Ambient Weather","Air & Water","Weather","Wi-Fi","Ambient Weather stations and sensor network.","https://ambientweather.com/")
  ];
  window.IOT_APP_DIRECTORY=existing.concat(X.filter(function(x,i,arr){
    var s=(x.slug||"").toLowerCase(), n=(x.name||"").toLowerCase();
    if(arr.__seen&&(arr.__seen.s[s]||(n&&arr.__seen.n[n]))) return false;
    if(existing.some(function(y){return (y.slug||"").toLowerCase()===s||(n&&(y.name||"").toLowerCase()===n);})) return false;
    arr.__seen=arr.__seen||{s:{},n:{}}; arr.__seen.s[s]=1; if(n) arr.__seen.n[n]=1; return true;
  }));
})();
