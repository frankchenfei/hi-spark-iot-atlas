/* Batch 9: fills the thinnest categories - electrical, garden, AI toys,
   robot vacuums, pet tech, air & water, energy storage, trail cameras. */
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
  var E=[
    A("Gosund","Gosund","Electrical","Smart plug","Wi-Fi","Gosund plugs, switches and strip control.","https://www.gosund.com/"),
    A("Teckin","Teckin","Electrical","Smart plug","Wi-Fi","Teckin plugs, bulbs and camera control.","https://www.teckin.com/"),
    A("BN-LINK","BN-LINK","Electrical","Smart plug","Wi-Fi","BN-LINK plugs, switches and outdoor timers.","https://www.bn-link.com/"),
    A("Avatar Controls","Avatar Controls","Electrical","Smart plug","Wi-Fi, BLE","Avatar Controls plugs, bulbs and strip control.",""),
    A("Wipro Next","Wipro","Electrical","Smart lighting","Wi-Fi","Wipro Next smart lighting and appliance control.","https://www.wiproconsumercare.com/"),
    A("Syska Smart Home","Syska","Electrical","Smart lighting","Wi-Fi","Syska smart bulbs, plugs and strip control.","https://www.syska.com/"),
    A("Havells Smart","Havells","Electrical","Smart lighting","Wi-Fi","Havells smart lighting and fan control.","https://www.havells.com/"),
    A("Legrand Home","Legrand","Electrical","Wiring device","Wi-Fi, Zigbee","Legrand connected switches, sockets and dimmers.","https://www.legrand.com/"),
    A("Schneider Wiser","Schneider Electric","Electrical","Wiring device","Wi-Fi, Zigbee","Wiser home energy, lighting and shutter control.","https://www.se.com/"),
    A("Leviton","Leviton","Electrical","Wiring device","Wi-Fi, BLE","Leviton smart switches, dimmers and load centres.","https://www.leviton.com/"),
    A("Lutron Caseta","Lutron","Electrical","Lighting control","Wi-Fi, RF","Caseta smart dimmers, switches and shades.","https://www.lutron.com/"),
    A("Finder Bliss","Finder","Electrical","Relay","Wi-Fi","Finder connected relays and DIN-rail automation.","https://www.findernet.com/")
  ];
  var G=[
    A("Rachio","Rachio","Smart Garden","Irrigation","Wi-Fi","Rachio smart sprinkler schedules and water use.","https://rachio.com/"),
    A("Orbit B-hyve","Orbit","Smart Garden","Irrigation","Wi-Fi, BLE","B-hyve sprinkler timers and hose faucet control.","https://bhyve.orbitonline.com/"),
    A("Netro","Netro","Smart Garden","Irrigation","Wi-Fi","Netro smart watering schedules and zones.","https://www.netrohome.com/"),
    A("RainMachine","RainMachine","Smart Garden","Irrigation","Wi-Fi","RainMachine local weather-driven irrigation.","https://www.rainmachine.com/"),
    A("Click and Grow","Click and Grow","Smart Garden","Indoor garden","Wi-Fi","Click and Grow indoor garden and plant pods.","https://www.clickandgrow.com/"),
    A("AeroGarden","AeroGarden","Smart Garden","Indoor garden","Wi-Fi","AeroGarden indoor growing, lights and reminders.","https://aerogarden.com/"),
    A("Gardyn","Gardyn","Smart Garden","Indoor garden","Wi-Fi","Gardyn vertical hydroponic garden control.","https://www.gardyn.com/"),
    A("Rise Gardens","Rise Gardens","Smart Garden","Indoor garden","Wi-Fi","Rise Gardens hydroponic system and plant guidance.","https://risegardens.com/"),
    A("OpenSprinkler","OpenSprinkler","Smart Garden","Irrigation","Wi-Fi, Ethernet","Open-source sprinkler controller management.","https://opensprinkler.com/"),
    A("Eve Aqua","Eve Systems","Smart Garden","Irrigation","Thread, BLE","Eve Aqua smart water outlet for Thread and HomeKit.","https://www.evehome.com/"),
    A("Toro","Toro","Smart Garden","Irrigation","Wi-Fi","Toro smart irrigation and lawn care control.","https://www.toro.com/"),
    A("Hunter Hydrawise","Hunter","Smart Garden","Irrigation","Wi-Fi","Hydrawise irrigation controllers and zone schedules.","https://www.hydrawise.com/")
  ];
  var T=[
    A("Makeblock","Makeblock","AI Toys & Education","Coding robot","BLE, Wi-Fi","Makeblock robotics, laser and coding products.","https://www.makeblock.com/"),
    A("Ozobot","Ozobot","AI Toys & Education","Coding robot","BLE","Ozobot screen-free and block coding robots.","https://ozobot.com/"),
    A("Wonder Workshop","Wonder Workshop","AI Toys & Education","Coding robot","BLE","Dash, Dot and Cue coding robots.","https://www.makewonder.com/"),
    A("Sphero","Sphero","AI Toys & Education","Coding robot","BLE","Sphero robots, coding activities and STEM lessons.","https://sphero.com/"),
    A("Miko","Miko","AI Toys & Education","AI companion","Wi-Fi","Miko AI companion robot for children.","https://miko.ai/"),
    A("Moxie","Embodied","AI Toys & Education","AI companion","Wi-Fi","Moxie conversational robot for social-emotional learning.","https://moxierobot.com/"),
    A("lement","Lement","AI Toys & Education","Coding kit","BLE, Wi-Fi","Coding and robotics kits for classroom use.",""),
    A("UBTECH","UBTECH","AI Toys & Education","Coding robot","BLE, Wi-Fi","UBTECH educational and humanoid robots.","https://www.ubtrobot.com/"),
    A("Djeco","Djeco","AI Toys & Education","Coding kit","BLE","Early-years coding and activity toys.",""),
    A("RoboMaster","DJI","AI Toys & Education","Coding robot","Wi-Fi","DJI RoboMaster education robots and competition kits.","https://www.dji.com/robomaster-s1"),
    A("Anki Vector","Anki","AI Toys & Education","AI companion","Wi-Fi, BLE","Vector desktop robot companion.","https://digitaldreamlabs.com/"),
    A("Petoi","Petoi","AI Toys & Education","Coding robot","BLE, Wi-Fi","Petoi quadruped robots for coding and robotics.","https://www.petoi.com/")
  ];
  var R=[
    A("Eufy Clean","eufy","Robot Vacuums","Vacuum","Wi-Fi, BLE","eufy robot vacuum and mop control.","https://www.eufy.com/"),
    A("LG ThinQ","LG","Robot Vacuums","Appliance","Wi-Fi, BLE","LG ThinQ appliance and robot vacuum control.","https://www.lg.com/"),
    A("MOVA","MOVA","Robot Vacuums","Vacuum","Wi-Fi, BLE","MOVA robot vacuum maps and schedules.","https://www.mova-tech.com/"),
    A("Ultenic","Ultenic","Robot Vacuums","Vacuum","Wi-Fi, BLE","Ultenic robot vacuum and mop control.","https://www.ultenic.com/"),
    A("Tikom","Tikom","Robot Vacuums","Vacuum","Wi-Fi, BLE","Tikom robot vacuum schedules and modes.","https://www.tikom.com/"),
    A("Laresar","Laresar","Robot Vacuums","Vacuum","Wi-Fi, BLE","Laresar robot vacuum mapping and cleaning modes.","https://www.laresar.com/"),
    A("Honiture","Honiture","Robot Vacuums","Vacuum","Wi-Fi, BLE","Honiture robot vacuum and mop control.","https://www.honiture.com/"),
    A("Bissell Connect","Bissell","Robot Vacuums","Cleaning","Wi-Fi, BLE","BISSELL connected cleaning product controls.","https://www.bissell.com/"),
    A("Miele","Miele","Robot Vacuums","Appliance","Wi-Fi","Miele Scout robot vacuum and connected appliances.","https://www.miele.com/"),
    A("Neato","Neato","Robot Vacuums","Vacuum","Wi-Fi","Neato robot vacuum floor plans and cleaning.","https://www.neatorobotics.com/"),
    A("SwitchBot Clean","SwitchBot","Robot Vacuums","Vacuum","Wi-Fi, BLE, Matter","SwitchBot robot vacuum and cleaning devices.","https://www.switch-bot.com/"),
    A("OKP","OKP","Robot Vacuums","Vacuum","Wi-Fi, BLE","OKP robot vacuum control and schedules.","")
  ];
  var PE=[
    A("Petcube","Petcube","Pet Tech","Pet camera","Wi-Fi","Petcube pet camera, laser play and two-way audio.","https://petcube.com/"),
    A("Skymee","Skymee","Pet Tech","Pet camera","Wi-Fi","Skymee pet camera and treat dispenser.","https://www.skymee.com/"),
    A("CATLINK","CATLINK","Pet Tech","Litter box","Wi-Fi","CATLINK self-cleaning litter box and health tracking.","https://www.catlink.net/"),
    A("Petoneer","Petoneer","Pet Tech","Pet fountain","Wi-Fi, BLE","Petoneer fountains, feeders and litter boxes.","https://www.petoneer.com/"),
    A("DOGNESS","DOGNESS","Pet Tech","Pet feeder","Wi-Fi","DOGNESS smart feeder and pet device control.","https://www.dogness.com/"),
    A("Wagz","Wagz","Pet Tech","Pet tracker","Wi-Fi, LTE, GNSS","Wagz smart collar location and activity.","https://wagz.com/"),
    A("Pawbo","Pawbo","Pet Tech","Pet camera","Wi-Fi","Pawbo pet camera and interaction devices.",""),
    A("Tuya Pet","Tuya","Pet Tech","Pet feeder","Wi-Fi, BLE","Tuya-based pet feeders and fountains.","https://www.tuya.com/")
  ];
  var AW=[
    A("Airthings","Airthings","Air & Water","Air quality","Wi-Fi, BLE","Radon, air quality and humidity monitoring.","https://www.airthings.com/"),
    A("Awair","Awair","Air & Water","Air quality","Wi-Fi","Awair air quality scoring and alerts.","https://www.getawair.com/"),
    A("uHoo","uHoo","Air & Water","Air quality","Wi-Fi","uHoo multi-sensor indoor air quality.","https://uhooair.com/"),
    A("Kaiterra","Kaiterra","Air & Water","Air quality","Wi-Fi, BLE","Kaiterra air quality monitors and purifier control.","https://kaiterra.com/"),
    A("IQAir","IQAir","Air & Water","Air quality","Wi-Fi","IQAir purifier and air quality monitoring.","https://www.iqair.com/"),
    A("Blueair","Blueair","Air & Water","Purifier","Wi-Fi, BLE","Blueair purifier control and filter status.","https://www.blueair.com/"),
    A("Levoit","Levoit","Air & Water","Purifier","Wi-Fi, BLE","Levoit purifiers, humidifiers and air monitors.","https://levoit.com/"),
    A("Coway","Coway","Air & Water","Purifier","Wi-Fi","Coway air purifier and water purifier control.","https://www.coway.com/"),
    A("LeakSmart","LeakSmart","Air & Water","Water leak","Wi-Fi, Zigbee","LeakSmart water shutoff and leak sensors.","https://www.leaksmart.com/"),
    A("Resideo","Resideo","Air & Water","Water leak","Wi-Fi","Resideo water leak and freeze detection.","https://www.resideo.com/")
  ];
  var EN=[
    A("Tesla Powerwall","Tesla","Energy & Solar","Battery","Wi-Fi","Powerwall and solar monitoring and backup control.","https://www.tesla.com/powerwall"),
    A("Fronius Solar","Fronius","Energy & Solar","Solar","Wi-Fi","Fronius inverter monitoring and system status.","https://www.fronius.com/"),
    A("SMA Sunny Portal","SMA","Energy & Solar","Solar","Wi-Fi","SMA inverter and plant monitoring.","https://www.sma.de/"),
    A("GoodWe","GoodWe","Energy & Solar","Solar","Wi-Fi","GoodWe inverter monitoring and plant management.","https://en.goodwe.com/"),
    A("SolaX Cloud","SolaX","Energy & Solar","Solar","Wi-Fi","SolaX inverter and battery monitoring.","https://www.solaxpower.com/"),
    A("Deye Cloud","Deye","Energy & Solar","Solar","Wi-Fi","Deye inverter and hybrid system monitoring.","https://www.deyeinverter.com/"),
    A("Bluetti","Bluetti","Energy & Solar","Portable power","BLE, Wi-Fi","Bluetti power station and solar input control.","https://www.bluetti.com/"),
    A("Anker SOLIX","Anker","Energy & Solar","Battery","Wi-Fi, BLE","Anker SOLIX home battery and portable power.","https://www.anker.com/"),
    A("Jackery","Jackery","Energy & Solar","Portable power","BLE, Wi-Fi","Jackery portable power station monitoring.","https://www.jackery.com/"),
    A("Goal Zero","Goal Zero","Energy & Solar","Portable power","BLE","Goal Zero portable power and solar panels.","https://www.goalzero.com/")
  ];
  var TC=[
    A("BlazeVideo","BlazeVideo","Trail Cameras","Trail cam","Wi-Fi, BLE","BlazeVideo trail camera setup and downloads.",""),
    A("Meidase","Meidase","Trail Cameras","Trail cam","Wi-Fi, BLE","Meidase trail camera configuration and gallery.",""),
    A("CEYOMUR","CEYOMUR","Trail Cameras","Trail cam","Wi-Fi, BLE","CEYOMUR trail camera app and media transfer.",""),
    A("Wosports","Wosports","Trail Cameras","Trail cam","Wi-Fi","Wosports trail camera live view and settings.",""),
    A("Vikeri","Vikeri","Trail Cameras","Trail cam","Wi-Fi, BLE","Vikeri trail camera configuration.",""),
    A("K&F Concept","K&F Concept","Trail Cameras","Trail cam","Wi-Fi","K&F Concept trail and action camera app.","https://www.kentfaith.com/"),
    A("Voopeak","Voopeak","Trail Cameras","Trail cam","Wi-Fi, BLE","Voopeak trail camera setup and gallery.","")
  ];
  var extra=[].concat(E,G,T,R,PE,AW,EN,TC);
  window.IOT_APP_DIRECTORY=existing.concat(extra.filter(function(x,i,arr){
    var s=(x.slug||"").toLowerCase(), n=(x.name||"").toLowerCase();
    if(arr.__seen&&(arr.__seen.s[s]||(n&&arr.__seen.n[n]))) return false;
    if(existing.some(function(y){return (y.slug||"").toLowerCase()===s||(n&&(y.name||"").toLowerCase()===n);})) return false;
    arr.__seen=arr.__seen||{s:{},n:{}}; arr.__seen.s[s]=1; if(n) arr.__seen.n[n]=1; return true;
  }));
})();
