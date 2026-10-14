/* Batch 5: watch & fitness, LED, GPS tracking, infrared remotes, Philips ecosystem.
   Every entry carries an official source URL so the brand sites can be completed. */
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

  var WATCH=[
    A("oraimo Health","oraimo","Wearables","Watch","BLE","oraimo watch and band companion: activity, sleep, heart rate and device settings.","https://www.oraimo.com/en"),
    A("DAFIT","Moyoung","Wearables","Watch","BLE","DAFIT watch companion for fitness, sleep and notifications.","https://www.moyoung.com/en/"),
    A("VeryFit","Moyoung","Wearables","Watch","BLE","VeryFit smartwatch health tracking and device configuration.","https://www.moyoung.com/en/"),
    A("VeryFitPro","Moyoung","Wearables","Watch","BLE","VeryFitPro band and watch companion app.","https://www.moyoung.com/en/"),
    A("FitCloudPro","Shenzhen","Wearables","Watch","BLE","FitCloudPro companion for ID205 and similar watch platforms.",""),
    A("GloryFit","Shenzhen","Wearables","Watch","BLE","GloryFit smartwatch fitness and notification app.",""),
    A("HryFine","Shenzhen","Wearables","Bracelet","BLE","HryFine band companion for steps, sleep and heart rate.",""),
    A("H Band","Shenzhen","Wearables","Bracelet","BLE","H Band fitness band companion and health records.",""),
    A("Runmefit","Runmefit","Wearables","Watch","BLE","Runmefit watch companion, watch faces and fitness data.",""),
    A("Haylou Fun","Haylou","Wearables","Watch","BLE","Haylou watch and earbud companion app.","https://www.haylou.com/"),
    A("Kospet Fit","Kospet","Wearables","Watch","BLE","Kospet smartwatch health, sport and watch face manager.","https://www.kospet.com/"),
    A("Zeblaze Fit","Zeblaze","Wearables","Watch","BLE","Zeblaze watch companion and fitness tracking.","https://www.zeblaze.com/"),
    A("Fire-Boltt Fit","Fire-Boltt","Wearables","Watch","BLE","Fire-Boltt smartwatch companion for India and global markets.","https://www.fireboltt.com/"),
    A("NoiseFit","Noise","Wearables","Watch","BLE","Noise smartwatch and earbud companion app.","https://www.gonoise.com/"),
    A("boAt Crest","boAt","Wearables","Watch","BLE","boAt smartwatch health and notification management.","https://www.boat-lifestyle.com/"),
    A("DT NO.1","DT NO.1","Wearables","Watch","BLE","DT NO.1 watch companion and watch face library.",""),
    A("WearPro","Shenzhen","Wearables","Watch","BLE","WearPro watch companion for sport, sleep and notifications.",""),
    A("COROS","COROS","Wearables","Sport","BLE","COROS watch training, recovery and route management.","https://coros.com/"),
    A("Garmin Connect","Garmin","Wearables","Watch","BLE","Garmin activity, health, training and device management.","https://www.garmin.com/"),
    A("Garmin Connect IQ","Garmin","Wearables","Accessory","BLE","Garmin watch apps, watch faces and data fields.","https://www.garmin.com/"),
    A("Fitbit","Google","Wearables","Watch","BLE","Fitbit activity, sleep, heart rate and wellness tracking.","https://www.fitbit.com/"),
    A("Samsung Health","Samsung","Wearables","Watch","BLE","Samsung watch and phone health, sleep and fitness data.","https://www.samsung.com/"),
    A("Galaxy Wearable","Samsung","Wearables","Watch","BLE","Samsung Galaxy Watch and Buds pairing and settings.","https://www.samsung.com/"),
    A("Mi Fitness","Xiaomi","Wearables","Watch","BLE","Xiaomi watch and band health and device management.","https://www.mi.com/"),
    A("Zepp Life","Amazfit / Zepp","Wearables","Bracelet","BLE","Mi Band and Amazfit band activity and health data.","https://www.zepp.com/"),
    A("Zepp","Amazfit / Zepp","Wearables","Watch","BLE","Amazfit watch companion, training and health analysis.","https://www.zepp.com/"),
    A("Huawei Health","Huawei","Wearables","Watch","BLE","Huawei watch and band health, sport and sleep data.","https://consumer.huawei.com/"),
    A("Honor Health","Honor","Wearables","Watch","BLE","Honor wearable health and fitness management.","https://www.honor.com/"),
    A("OnePlus Health","OnePlus","Wearables","Watch","BLE","OnePlus watch health and fitness companion.","https://www.oneplus.com/"),
    A("O Health","OPPO","Wearables","Watch","BLE","OPPO watch health tracking companion.","https://www.oppo.com/"),
    A("HeyTap Health","OPPO","Wearables","Watch","BLE","HeyTap health data and wearable management.","https://www.oppo.com/"),
    A("vivo Health","vivo","Wearables","Watch","BLE","vivo watch health and fitness companion.","https://www.vivo.com/"),
    A("realme Link","realme","Wearables","Watch","BLE","realme watch and AIoT device management.","https://www.realme.com/"),
    A("Notify for Mi Band","Mi Band","Wearables","Bracelet","BLE","Third-party Mi Band and Amazfit companion with advanced alerts.",""),
    A("Gadgetbridge","Open source","Wearables","Accessory","BLE","Open-source wearable companion with no vendor cloud.","https://gadgetbridge.org/"),
    A("Wonlex","Wonlex","Wearables","Watch","BLE, LTE","Kids GPS watch companion with calling and safe zones.","https://www.wonlex.com/"),
    A("Xplora","Xplora","Wearables","Watch","BLE, LTE","Kids smartwatch with calls, location and activity.","https://www.xplora.com/"),
    A("Spacetalk","Spacetalk","Wearables","Watch","BLE, LTE","Kids watch phone with location and parent controls.","https://www.spacetalk.com/"),
    A("TickTalk","TickTalk","Wearables","Watch","BLE, LTE","Kids smartwatch calling, location and messaging.","https://www.myticktalk.com/"),
    A("imoo","imoo","Wearables","Watch","BLE, LTE","Kids watch phone companion and parental controls.","https://www.imoo.com/"),
    A("Whoop","Whoop","Wearables","Bracelet","BLE","Whoop strain, recovery and sleep coaching.","https://www.whoop.com/"),
    A("RingConn","RingConn","Wearables","Ring","BLE","RingConn smart ring sleep, HRV and activity tracking.","https://www.ringconn.com/"),
    A("Ultrahuman","Ultrahuman","Wearables","Ring","BLE","Ultrahuman Ring metabolic and sleep insights.","https://www.ultrahuman.com/"),
    A("Circular","Circular","Wearables","Ring","BLE","Circular smart ring health and sleep tracking.","https://circular.xyz/"),
    A("Amazfit Helio Ring","Amazfit / Zepp","Wearables","Ring","BLE","Amazfit smart ring readiness and recovery.","https://www.amazfit.com/"),
    A("Samsung Galaxy Ring","Samsung","Wearables","Ring","BLE","Galaxy Ring sleep, energy score and wellness tracking.","https://www.samsung.com/"),
    A("Oura","Oura","Wearables","Ring","BLE","Oura ring sleep, readiness and health trends.","https://ouraring.com/"),
    A("Zepp Aura","Amazfit / Zepp","Wearables","Sleep","BLE","Sleep coaching and soundscapes paired with Amazfit devices.","https://www.zepp.com/"),
    A("Muse S","Muse","Wearables","Bracelet","BLE","Muse headband and sleep wearable meditation and EEG.","https://choosemuse.com/"),
    A("Fitbeing","Fitbeing","Wearables","Bracelet","BLE","Fitbeing band companion for fitness and sleep.",""),
    A("Lefun Health","Lefun","Wearables","Bracelet","BLE","Lefun band health and activity companion.",""),
    A("YFit","YFit","Wearables","Bracelet","BLE","YFit band fitness tracking companion.",""),
    A("Wearfit 2.0","Wearfit","Wearables","Watch","BLE","Wearfit watch companion and health records.",""),
    A("Fundo Pro","Fundo","Wearables","Bracelet","BLE","Fundo band companion and fitness data.",""),
    A("JYouPro","JYou","Wearables","Bracelet","BLE","JYouPro band and watch companion app.",""),
    A("Coolwear","Coolwear","Wearables","Bracelet","BLE","Coolwear band fitness and notification app.",""),
    A("HeroBand III","HeroBand","Wearables","Bracelet","BLE","HeroBand fitness tracker companion.",""),
    A("Lige Fit","Lige","Wearables","Watch","BLE","Lige smartwatch companion and health data.","https://www.lige.com/"),
    A("Findtime","Findtime","Wearables","Watch","BLE","Findtime smartwatch companion app.","")
  ];
  var LED=[
    A("Philips Hue","Philips Hue","Lighting","Smart bulb","Zigbee, BLE, Matter","Philips Hue lights, scenes, automations and accessories.","https://www.philips-hue.com/"),
    A("Philips Hue BT","Philips Hue","Lighting","Smart bulb","BLE","Bluetooth-only control for Hue lamps without a bridge.","https://www.philips-hue.com/"),
    A("IPIXEL COLOR","IPIXEL","Lighting","LED controller","BLE, Wi-Fi","Pixel and addressable LED controller colour, effects and DIY scenes.",""),
    A("LED Lamp","Generic","Lighting","LED controller","BLE, Wi-Fi","Companion app used across low-cost Bluetooth LED lamps and strips.",""),
    A("LED Hue","Generic","Lighting","LED controller","BLE, Wi-Fi","LED strip colour, music sync and schedule control.",""),
    A("iLedMagic","Generic","Lighting","LED controller","BLE, Wi-Fi","Bluetooth LED controller scenes and timers.",""),
    A("HappyLighting","Happy Lighting","Lighting","LED controller","BLE, Wi-Fi","Bluetooth LED strip control with music sync.",""),
    A("BanlanX","BanlanX","Lighting","LED controller","BLE","Addressable LED effects and DIY pixel scenes.",""),
    A("DuoCo Strip","DuoCo","Lighting","LED controller","BLE, Wi-Fi","Addressable strip effects and segment control.",""),
    A("Lotus Lantern","Lotus Lantern","Lighting","LED controller","BLE, Wi-Fi","Decorative LED scenes, music modes and timers.",""),
    A("Magic Home Pro","Zengge / LEDnet","Lighting","LED controller","Wi-Fi, BLE","RGB, RGBW and addressable LED controller management.","https://www.zengge.com/"),
    A("Magic LED","Zengge / LEDnet","Lighting","LED controller","Wi-Fi, BLE","Legacy app for Zengge Wi-Fi LED controller modules.","https://www.zengge.com/"),
    A("Zengge Smart","Zengge","Lighting","LED controller","Wi-Fi, BLE","Zengge controller automation and colour scenes.","https://www.zengge.com/"),
    A("LIFX","LIFX","Lighting","Smart bulb","Wi-Fi, Matter","LIFX Wi-Fi bulbs, scenes and effects.","https://www.lifx.com/"),
    A("Twinkly","Twinkly","Lighting","String lights","Wi-Fi, BLE","Twinkly decorative string lights with mapped effects.","https://www.twinkly.com/"),
    A("Govee Home","Govee","Lighting","LED controller","Wi-Fi, BLE, Matter","Govee strips, bulbs, string lights and scenes.","https://www.govee.com/"),
    A("Yeelight","Yeelight","Lighting","Smart bulb","Wi-Fi, BLE, Zigbee","Yeelight bulbs, strips and lighting scenes.","https://www.yeelight.com/"),
    A("Nanoleaf","Nanoleaf","Lighting","Panels","Wi-Fi, Thread, Matter","Nanoleaf panels, strips and smart lighting scenes.","https://nanoleaf.me/"),
    A("WiZ Connected","WiZ","Lighting","Smart bulb","Wi-Fi, Matter","WiZ lighting setup, scenes and schedules.","https://www.wizconnected.com/"),
    A("Cync","GE Cync","Lighting","Smart bulb","Wi-Fi, BLE, Matter","Cync bulbs, plugs and lighting scenes.","https://www.gelighting.com/cync"),
    A("Feit Electric","Feit Electric","Lighting","Smart bulb","Wi-Fi, BLE","Feit smart bulbs, strips and home lighting.","https://www.feit.com/"),
    A("Sengled Home","Sengled","Lighting","Smart bulb","Wi-Fi, Zigbee, Matter","Sengled bulb and smart lighting control.","https://www.sengled.com/"),
    A("Lepro","Lepro","Lighting","LED controller","Wi-Fi, BLE","Lepro lighting and scene controls.","https://www.lepro.com/"),
    A("LEDVANCE SMART+","LEDVANCE","Lighting","Smart bulb","Wi-Fi, Zigbee, Matter","LEDVANCE smart lighting setup and automation.","https://www.ledvance.com/"),
    A("Tapo Lighting","TP-Link Tapo","Lighting","Smart bulb","Wi-Fi, Matter","Tapo bulbs, strips and lighting scenes.","https://www.tapo.com/"),
    A("Kasa Smart","TP-Link Kasa","Lighting","Smart bulb","Wi-Fi, Matter","Kasa bulbs, plugs, switches and lighting scenes.","https://www.kasasmart.com/"),
    A("Elgato Light","Elgato","Lighting","Studio light","Wi-Fi, BLE","Elgato Key Light and Light Strip studio control.","https://www.elgato.com/"),
    A("Corsair iCUE","Corsair","Lighting","PC lighting","USB, Wi-Fi","Corsair RGB lighting, cooling and peripheral control.","https://www.corsair.com/"),
    A("Razer Chroma","Razer","Lighting","PC lighting","USB, Wi-Fi","Razer RGB lighting and Chroma effects.","https://www.razer.com/"),
    A("SignalRGB","WhirlwindFX","Lighting","PC lighting","USB, Wi-Fi","Unified RGB control across many PC lighting brands.","https://www.signalrgb.com/")
  ];

  var GPS=[
    A("Tracksolid Pro","Jimi IoT","Tracking","Vehicle GPS","LTE, GNSS, BLE","Jimi IoT vehicle and asset tracker management, geofence and reports.","https://www.jimiiot.com/"),
    A("Jimi IoT","Jimi IoT","Tracking","Vehicle GPS","LTE, GNSS","Jimi IoT device activation, tracking and fleet tools.","https://www.jimiiot.com/"),
    A("Concox","Concox","Tracking","Vehicle GPS","LTE, GNSS","Concox GPS tracker configuration and tracking.","https://www.concox.com/"),
    A("Teltonika GPS","Teltonika","Tracking","Fleet","LTE, GNSS, BLE","Teltonika FMB tracker configuration and fleet data.","https://teltonika-gps.com/"),
    A("Queclink","Queclink","Tracking","Fleet","LTE, GNSS","Queclink tracker management for fleet and asset use.","https://www.queclink.com/"),
    A("Ruptela","Ruptela","Tracking","Fleet","LTE, GNSS","Ruptela fleet telematics and driver behaviour.","https://ruptela.com/"),
    A("Wanway","Wanway","Tracking","Vehicle GPS","LTE, GNSS","Wanway GPS tracker setup and monitoring.","https://www.wanwaytech.com/"),
    A("TKSTAR","TKSTAR","Tracking","Vehicle GPS","LTE, GNSS","TKSTAR tracker configuration and location history.",""),
    A("SinoTrack","SinoTrack","Tracking","Vehicle GPS","LTE, GNSS","SinoTrack tracker setup, geofence and alerts.","https://www.sinotrack.com/"),
    A("Meitrack","Meitrack","Tracking","Fleet","LTE, GNSS","Meitrack tracker configuration and fleet reporting.","https://www.meitrack.com/"),
    A("iStartek","iStartek","Tracking","Fleet","LTE, GNSS","iStartek tracker management and reports.","https://www.istartek.com/"),
    A("WeTrack","WeTrack","Tracking","Vehicle GPS","LTE, GNSS","WeTrack GPS tracker companion app.",""),
    A("GPSWOX","GPSWOX","Tracking","Fleet","LTE, GNSS","GPSWOX fleet tracking platform and mobile client.","https://www.gpswox.com/"),
    A("Traccar Client","Traccar","Tracking","Open source","GNSS, LTE","Open-source location client that reports to a Traccar server.","https://www.traccar.org/"),
    A("GeoZilla","GeoZilla","Tracking","Family","GNSS, LTE","Family location sharing, place alerts and driving reports.","https://geozilla.com/"),
    A("Life360","Life360","Tracking","Family","GNSS, LTE","Family location sharing, crash detection and place alerts.","https://www.life360.com/"),
    A("Find My Device","Google","Tracking","Asset","BLE, GNSS","Android device and tracker location network.","https://www.google.com/android/find/"),
    A("Tile","Life360","Tracking","Asset","BLE","Tile tracker finding, sharing and Smart Alerts.","https://www.tile.com/"),
    A("Chipolo","Chipolo","Tracking","Asset","BLE","Chipolo tracker setup and Find My support.","https://chipolo.net/"),
    A("Pebblebee","Pebblebee","Tracking","Asset","BLE, UWB","Pebblebee tracker management and item finding.","https://pebblebee.com/"),
    A("Cube Tracker","Cube","Tracking","Asset","BLE","Cube tracker finding and separation alerts.","https://cubetracker.com/"),
    A("Tractive","Tractive","Tracking","Pet tracker","LTE, BLE, GNSS","Pet GPS tracking, activity and safe zones.","https://tractive.com/"),
    A("Fi","Fi","Tracking","Pet tracker","LTE, BLE, GNSS","Fi smart collar location, activity and health.","https://tryfi.com/"),
    A("Whistle","Whistle","Tracking","Pet tracker","LTE, BLE, GNSS","Whistle pet location, activity and health tracking.","https://whistle.com/"),
    A("Winnes GPS","Winnes","Tracking","Vehicle GPS","LTE, GNSS","Winnes GPS tracker companion.",""),
    A("Coban","Coban","Tracking","Vehicle GPS","LTE, GNSS","Coban GPS tracker setup and monitoring.",""),
    A("Gosuncn","Gosuncn","Tracking","Fleet","LTE, GNSS","Gosuncn telematics device management.","https://www.gosuncn.com/"),
    A("Jimilab","Jimi IoT","Tracking","Vehicle GPS","LTE, GNSS","Jimi IoT configuration utility for installers.","https://www.jimiiot.com/"),
    A("Onward","Onward","Tracking","Vehicle GPS","LTE, GNSS","Vehicle tracker management and journey history.","")
  ];
  var IR=[
    A("Ocrustar","Ocrustar","Infrared & Remotes","IR blaster","BLE, Wi-Fi","Infrared remote control hub for air conditioners, TVs and appliances.",""),
    A("BroadLink","BroadLink","Infrared & Remotes","IR blaster","Wi-Fi, BLE","BroadLink RM series universal remote and IR/RF hub control.","https://www.broadlink.com.cn/"),
    A("Sensibo","Sensibo","Infrared & Remotes","AC control","Wi-Fi","Sensibo air conditioner control, scheduling and climate automation.","https://sensibo.com/"),
    A("Tado","tado","Infrared & Remotes","AC control","Wi-Fi, Matter, Thread","tado smart thermostat and AC control.","https://www.tado.com/"),
    A("SwitchBot","SwitchBot","Infrared & Remotes","IR blaster","BLE, Wi-Fi, Matter","SwitchBot Hub IR remote and appliance control.","https://www.switch-bot.com/"),
    A("Moes","Moes","Infrared & Remotes","IR blaster","Wi-Fi, Zigbee","Moes smart IR remote and scene control.","https://www.moeshouse.com/"),
    A("Zemismart","Zemismart","Infrared & Remotes","IR blaster","Wi-Fi, Zigbee","Zemismart IR and curtain controller setup.","https://www.zemismart.com/"),
    A("Tuya Smart IR","Tuya","Infrared & Remotes","IR blaster","Wi-Fi, BLE","Tuya-based universal IR remote control.","https://www.tuya.com/"),
    A("Harmony","Logitech","Infrared & Remotes","Universal remote","Wi-Fi, BLE","Logitech Harmony hub and remote configuration.","https://www.logitech.com/"),
    A("Sofabaton","Sofabaton","Infrared & Remotes","Universal remote","Wi-Fi, BLE","Sofabaton universal remote and hub setup.","https://www.sofabaton.com/"),
    A("Remote Buddy","Generic","Infrared & Remotes","Universal remote","Wi-Fi","Universal remote app for compatible IR hubs.",""),
    A("AirTouch","Generic","Infrared & Remotes","AC control","Wi-Fi","Air conditioner control through compatible IR hubs.",""),
    A("Flair","Flair","Infrared & Remotes","HVAC","Wi-Fi","Flair smart vent and mini-split HVAC control.","https://flair.co/"),
    A("Cielo","Cielo","Infrared & Remotes","AC control","Wi-Fi","Cielo smart AC controller and scheduling.","https://cielowigle.com/"),
    A("Ambi Climate","Ambi","Infrared & Remotes","AC control","Wi-Fi","AI-assisted air conditioner comfort control.","https://www.ambiclimate.com/"),
    A("Breez","Breez","Infrared & Remotes","AC control","Wi-Fi","Mini-split and AC remote management.",""),
    A("Smart IR","Generic","Infrared & Remotes","IR blaster","Wi-Fi","Generic IR blaster companion used by OEM remote hubs.",""),
    A("IR Remote","Generic","Infrared & Remotes","IR blaster","BLE","Bluetooth IR blaster control and code library.","")
  ];

  var PHILIPS=[
    A("Philips HomeID","Philips","Smart Home","Appliance","Wi-Fi, BLE","Philips appliance setup, warranty and connected product management.","https://www.philips.com/"),
    A("Philips Smart Home","Philips","Smart Home","Hub","Wi-Fi, BLE, Zigbee","Philips smart home devices, scenes and automation.","https://www.philips.com/"),
    A("Philips Sonicare","Philips","Health","Oral care","BLE","Sonicare toothbrush coaching, brushing data and brush head tracking.","https://www.philips.com/"),
    A("Philips Air+","Philips","Air & Water","Air quality","Wi-Fi, BLE","Philips air purifier and air quality monitoring.","https://www.philips.com/"),
    A("Philips SleepMapper","Philips","Health","Sleep","BLE","Philips sleep therapy device data and adherence tracking.","https://www.philips.com/"),
    A("Philips TV Remote","Philips","Smart Home","Remote","Wi-Fi, IR","Philips TV remote control and casting.","https://www.philips.com/"),
    A("Philips Baby Monitor","Philips","Health","Baby","Wi-Fi","Philips Avent baby monitor viewing and alerts.","https://www.philips.com/"),
    A("Philips Wake-up Light","Philips","Health","Light therapy","BLE","Philips wake-up light alarm and light therapy settings.","https://www.philips.com/")
  ];

  var extra=[].concat(WATCH,LED,GPS,IR,PHILIPS);

  window.IOT_APP_DIRECTORY=existing.concat(extra.filter(function(x,i,arr){
    var s=(x.slug||"").toLowerCase(), n=(x.name||"").toLowerCase();
    if(arr.__seen&&(arr.__seen.s[s]||(n&&arr.__seen.n[n]))) return false;
    if(existing.some(function(y){return (y.slug||"").toLowerCase()===s||(n&&(y.name||"").toLowerCase()===n);})) return false;
    arr.__seen=arr.__seen||{s:{},n:{}}; arr.__seen.s[s]=1; if(n) arr.__seen.n[n]=1; return true;
  }));
})();
