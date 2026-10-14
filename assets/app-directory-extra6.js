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
  var DRONES=[
    A("HFUFO","HFUFO","Drones","Toy Drone","Wi-Fi","Toy drone flight control, camera framing and media transfer.",""),
    A("Max-see","Max-see","Drones","Toy Drone","Wi-Fi","Toy drone and camera app for low-cost quadcopters.",""),
    A("Go Fly Drone Remote Controller","Go Fly","Drones","Toy Drone","Wi-Fi","Toy drone remote control, flight modes and video.",""),
    A("Sky Viper Video","Sky Viper","Drones","Toy Drone","Wi-Fi","Sky Viper toy drone flight control and recording.","https://www.sky-viper.com/"),
    A("Propel Star Wars","Propel","Drones","Toy Drone","Wi-Fi","Propel licensed toy drone flight and battle modes.","https://www.propelrc.com/"),
    A("Hubsan Zino","Hubsan","Drones","Toy Drone","Wi-Fi, Radio","Hubsan drone flight control, gimbal and camera settings.","https://www.hubsan.com/"),
    A("ZEROTECH","ZEROTECH","Drones","Toy Drone","Wi-Fi","ZEROTECH drone flight control and follow modes.","http://www.zerotech.com/"),
    A("Wingsland","Wingsland","Drones","Toy Drone","Wi-Fi","Wingsland toy drone flight and camera control.",""),
    A("FPV Drone","Generic","Drones","Toy Drone","Wi-Fi","Generic FPV toy drone control and live view.",""),
    A("RC Drone","Generic","Drones","Toy Drone","Wi-Fi","Generic RC quadcopter control app.",""),
    A("UFO Drone","Generic","Drones","Toy Drone","Wi-Fi","Toy UFO drone flight control and tricks.",""),
    A("Drone Remote Controller","Generic","Drones","Toy Drone","Wi-Fi","Universal toy drone remote control companion.",""),
    // FPV / hobby-grade configuration tools that pair with BETAFPV, iFlight, GEPRC etc.
    A("Betaflight Configurator","Betaflight","Drones","FPV Config","USB","Flight controller configuration for Betaflight-based FPV drones.","https://betaflight.com/"),
    A("SpeedyBee","SpeedyBee","Drones","FPV Config","BLE, USB","Mobile flight controller and ESC configuration for FPV builds.","https://www.speedybee.com/"),
    A("ExpressLRS Configurator","ExpressLRS","Drones","FPV Config","USB, Radio","Flashing and configuring ExpressLRS radio links.","https://www.expresslrs.org/"),
    A("BLHeli Configurator","BLHeli","Drones","FPV Config","USB","ESC firmware flashing and configuration for multirotors.","https://github.com/blheli-configurator"),
    A("Mission Planner","ArduPilot","Drones","FPV Config","USB, Radio, Wi-Fi","Ground control station for ArduPilot autopilots.","https://ardupilot.org/planner/"),
    A("QGroundControl","PX4","Drones","FPV Config","USB, Radio, Wi-Fi","Ground control station for PX4 and ArduPilot vehicles.","http://qgroundcontrol.com/"),
    A("DJI Assistant 2","DJI","Drones","FPV Config","USB","Firmware and parameter utility for DJI aircraft.","https://www.dji.com/")
  ];
  window.IOT_APP_DIRECTORY=existing.concat(DRONES.filter(function(x,i,arr){
    var s=(x.slug||"").toLowerCase(), n=(x.name||"").toLowerCase();
    if(arr.__seen&&(arr.__seen.s[s]||(n&&arr.__seen.n[n]))) return false;
    if(existing.some(function(y){return (y.slug||"").toLowerCase()===s||(n&&(y.name||"").toLowerCase()===n);})) return false;
    arr.__seen=arr.__seen||{s:{},n:{}}; arr.__seen.s[s]=1; if(n) arr.__seen.n[n]=1; return true;
  }));
})();
