/* Batch 12: gaps confirmed by the category completeness audit.
   Media players are included where they control or serve audio/video to devices.
   Pure subscription video catalogues (Netflix, Disney+) are deliberately excluded
   because they have no device-control function and would dilute an IoT directory. */
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
    // security systems
    A("SimpliSafe","SimpliSafe","Security","Alarm system","Wi-Fi, RF","SimpliSafe alarm control, sensors and optional professional monitoring, with no long contract required.","https://simplisafe.com/"),
    A("ADT","ADT","Security","Alarm system","Wi-Fi, Z-Wave","ADT alarm arming, sensors and monitoring account control.","https://www.adt.com/"),
    A("Abode","Abode","Security","Alarm system","Wi-Fi, Zigbee, Z-Wave","Abode alarm and automation, with optional self-monitoring instead of a contract.","https://goabode.com/"),
    A("Blurams","Blurams","Security","Camera","Wi-Fi","Blurams cameras and doorbells with live view and AI alerts.","https://www.blurams.com/"),
    A("Zumimall","Zumimall","Security","Camera","Wi-Fi, 4G","Zumimall battery cameras with PIR wake-up and local recording.",""),
    A("Arenti","Arenti","Security","Camera","Wi-Fi, 4G","Arenti cameras and doorbells with live view and alerts.","https://www.arenti.com/"),
    A("Tapo Care","TP-Link","Security","Cloud service","Wi-Fi","Tapo Care cloud recording plans for Tapo cameras.","https://www.tapo.com/"),
    // smart home
    A("Yonomi","Yonomi","Smart Home","Automation","Wi-Fi, BLE","Yonomi automation across mixed smart-home brands.","https://yonomi.co/"),
    A("Brilliant","Brilliant","Smart Home","Control panel","Wi-Fi, BLE","Brilliant smart home control panels and switches.","https://www.brilliant.tech/"),
    // health and fitness
    A("MyFitnessPal","MyFitnessPal","Health","Nutrition","Wi-Fi","Food logging and calorie tracking, syncs activity from wearables.","https://www.myfitnesspal.com/"),
    A("Health","Apple","Health","Platform","BLE","Apple Health aggregates data from wearables, scales, blood pressure monitors and clinical records.","https://www.apple.com/"),
    A("Fit","Google","Health","Platform","BLE","Google Fit activity and health data hub, now folded into Health Connect on newer Android.","https://www.google.com/fit/"),
    A("MyChart","Epic","Health","Patient records","Wi-Fi","MyChart gives patients access to clinical records, test results and appointments from participating providers.","https://www.mychart.org/"),
    // lighting
    A("WLED","WLED","Lighting","LED controller","Wi-Fi","Open-source firmware and control for addressable LED strips, with a very large effects library and no cloud dependency.","https://kno.wled.ge/"),
    A("Sylvania Smart","Sylvania","Lighting","Smart bulb","Wi-Fi, BLE","Sylvania Smart+ bulbs and lighting control.","https://www.sylvania.com/"),
    A("Hatch","Hatch","Lighting","Sleep light","Wi-Fi, BLE","Hatch Rest sleep lights and sound machines for children.","https://www.hatch.co/"),
    A("Lumos","Lumos","Lighting","Smart bulb","Wi-Fi","Lumos smart lighting control.",""),
    // media players that control or serve devices
    A("Plex","Plex","TV & Streaming","Media player","Wi-Fi","Plex media server and player, including casting to TVs and streaming boxes.","https://www.plex.tv/"),
    A("Plexamp","Plex","Audio & Headphones","Media player","Wi-Fi","Plexamp is Plex's music player, with casting and multiroom output.","https://www.plex.tv/"),
    A("Kodi","Kodi","TV & Streaming","Media player","Wi-Fi","Kodi open-source media centre, widely used on TV boxes and Raspberry Pi.","https://kodi.tv/"),
    A("VLC","VideoLAN","TV & Streaming","Media player","Wi-Fi","VLC plays almost any format and can cast to network devices.","https://www.videolan.org/"),
    A("Roon","Roon","Audio & Headphones","Media player","Wi-Fi","Roon music library and multiroom playback for hi-fi systems.","https://roon.app/"),
    A("Qobuz","Qobuz","Audio & Headphones","Media service","Wi-Fi","Qobuz hi-res streaming with casting to network players.","https://www.qobuz.com/"),
    A("TIDAL","TIDAL","Audio & Headphones","Media service","Wi-Fi","TIDAL streaming with Connect support for network players.","https://tidal.com/")
  ];
  window.IOT_APP_DIRECTORY=existing.concat(X.filter(function(x,i,arr){
    var s=(x.slug||"").toLowerCase(), n=(x.name||"").toLowerCase();
    if(arr.__seen&&(arr.__seen.s[s]||(n&&arr.__seen.n[n]))) return false;
    if(existing.some(function(y){return (y.slug||"").toLowerCase()===s||(n&&(y.name||"").toLowerCase()===n);})) return false;
    arr.__seen=arr.__seen||{s:{},n:{}}; arr.__seen.s[s]=1; if(n) arr.__seen.n[n]=1; return true;
  }));
})();
