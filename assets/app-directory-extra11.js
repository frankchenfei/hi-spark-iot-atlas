/* Batch 11: TV and streaming remotes (a category that was missing entirely)
   plus per-generation Mi Band watch faces and more band companions. */
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
  var TV=[
    A("Roku","Roku","TV & Streaming","Streaming remote","Wi-Fi","Turns a phone into a Roku remote, with private listening through headphones and channel launching.","https://www.roku.com/"),
    A("Apple TV Remote","Apple","TV & Streaming","Streaming remote","Wi-Fi, BLE, IR","Control an Apple TV from an iPhone or iPad, including keyboard entry and Siri.","https://www.apple.com/"),
    A("Google TV","Google","TV & Streaming","Streaming remote","Wi-Fi, BLE, IR","Google TV and Chromecast control, casting and content discovery.","https://tv.google/"),
    A("Android TV Remote","Google","TV & Streaming","Streaming remote","Wi-Fi, BLE","Remote and keyboard for Android TV and Google TV devices.","https://www.android.com/tv/"),
    A("Amazon Fire TV","Amazon","TV & Streaming","Streaming remote","Wi-Fi, BLE","Fire TV navigation, voice search and casting from a phone.","https://www.amazon.com/"),
    A("Chromecast","Google","TV & Streaming","Casting","Wi-Fi","Cast video, audio and tabs to Chromecast and built-in Cast devices.","https://store.google.com/"),
    A("LG TV Plus","LG","TV & Streaming","TV remote","Wi-Fi, BLE, IR","LG webOS TV remote, content browsing and screen sharing.","https://www.lg.com/"),
    A("SmartThings TV Remote","Samsung","TV & Streaming","TV remote","Wi-Fi, BLE","Samsung smart TV control and screen mirroring through SmartThings.","https://www.samsung.com/"),
    A("Vizio SmartCast","Vizio","TV & Streaming","TV remote","Wi-Fi, BLE","Vizio SmartCast TV and soundbar control and casting.","https://www.vizio.com/"),
    A("TCL TV Remote","TCL","TV & Streaming","TV remote","Wi-Fi, BLE","TCL smart TV remote and app navigation.","https://www.tcl.com/"),
    A("Hisense RemoteNOW","Hisense","TV & Streaming","TV remote","Wi-Fi, BLE","Hisense smart TV control, casting and channel browsing.","https://www.hisense.com/"),
    A("TiVo","TiVo","TV & Streaming","DVR remote","Wi-Fi, IR","TiVo DVR scheduling, recording management and remote control.","https://www.tivo.com/"),
    A("Xfinity X1","Comcast","TV & Streaming","Set-top remote","Wi-Fi","Xfinity X1 set-top box remote, guide and DVR management.","https://www.xfinity.com/"),
    A("Sky Remote","Sky","TV & Streaming","Set-top remote","Wi-Fi","Sky box remote, planner and recording control.","https://www.sky.com/"),
    A("Xbox","Microsoft","TV & Streaming","Console","Wi-Fi, BLE","Xbox console setup, remote control and game launching from a phone.","https://www.xbox.com/"),
    A("PlayStation Remote Play","Sony","TV & Streaming","Console","Wi-Fi","Streams a PlayStation console to a phone or tablet and acts as a remote.","https://www.playstation.com/"),
    A("Bang & Olufsen Remote","Bang & Olufsen","TV & Streaming","TV remote","Wi-Fi, BLE","B&O TV and speaker control and setup.","https://www.bang-olufsen.com/"),
    A("Philips TV Remote","Philips","TV & Streaming","TV remote","Wi-Fi, IR","Philips TV remote control, casting and channel browsing.","https://www.philips.com/")
  ];
  var FACES=[
    A("Facer Watch Faces","Facer","Wearables","Watch face","BLE","Large third-party watch face library covering Wear OS, Tizen and Apple Watch.","https://www.facer.io/"),
    A("Mi Band 5 Watch Faces","Mi Band","Wearables","Watch face","BLE","Third-party watch face collection for the Mi Band 5.",""),
    A("Mi Band 6 Watch Faces","Mi Band","Wearables","Watch face","BLE","Third-party watch face collection for the Mi Band 6.",""),
    A("Mi Band 7 Watch Faces","Mi Band","Wearables","Watch face","BLE","Third-party watch face collection for the Mi Band 7.",""),
    A("Mi Band 8 Watch Faces","Mi Band","Wearables","Watch face","BLE","Third-party watch face collection for the Mi Band 8.",""),
    A("Mi Band 4 Watch Faces","Mi Band","Wearables","Watch face","BLE","Third-party watch face collection for the Mi Band 4.",""),
    A("Watch Face Studio","Samsung","Wearables","Watch face","BLE","Samsung's official tool for designing and deploying Wear OS watch faces.","https://developer.samsung.com/"),
    A("Watchface Builder","Generic","Wearables","Watch face","BLE","Builds custom watch faces for supported wearable platforms.",""),
    A("TimeFlik","TimeFlik","Wearables","Watch face","BLE","Animated watch faces for Wear OS.",""),
    A("RNBW Watch Faces","RNBW","Wearables","Watch face","BLE","Colourful watch face packs for Wear OS.",""),
    A("Zoi Watch Faces","Zoi","Wearables","Watch face","BLE","Watch face collection for Wear OS and Samsung watches.",""),
    A("Watch Face Maker","Generic","Wearables","Watch face","BLE","Create a watch face from a photo for supported watches.",""),
    A("Samsung Watch Faces","Samsung","Wearables","Watch face","BLE","Samsung's bundled watch face collection and editor.","https://www.samsung.com/"),
    A("Amazfit Watch Face Studio","Amazfit / Zepp","Wearables","Watch face","BLE","Design tool for Amazfit watch faces.","https://www.zepp.com/"),
    A("Garmin Face It","Garmin","Wearables","Watch face","BLE","Garmin's watch face creator using your own photos.","https://www.garmin.com/"),
    A("My Watch Face","Generic","Wearables","Watch face","BLE","Photo-based watch face creator for compatible watches.","")
  ];
  var BANDS=[
    A("FunRun","FunRun","Wearables","Bracelet","BLE","Band companion for activity, sleep and notifications.",""),
    A("FitCloudPro 2","FitCloud","Wearables","Watch","BLE","Watch companion for the FitCloudPro hardware family.",""),
    A("Smart Watch Face","Generic","Wearables","Watch face","BLE","Watch face browser for low-cost smartwatches.",""),
    A("Zeroner","Zeroner","Wearables","Bracelet","BLE","Zeroner band and watch companion.",""),
    A("Yoho Sports","Yoho","Wearables","Bracelet","BLE","Yoho band activity and sleep tracking.",""),
    A("HeroBand","HeroBand","Wearables","Bracelet","BLE","HeroBand fitness tracker companion.",""),
    A("SmartTime","Generic","Wearables","Watch","BLE","Watch companion for SmartTime hardware families.",""),
    A("Mi Band Tools","Mi Band","Wearables","Accessory","BLE","Adds custom notifications, reminders and automation to Mi Band.",""),
    A("Mi Band 8 Manager","Mi Band","Wearables","Accessory","BLE","Third-party management utilities for Mi Band 8.","")
  ];
  var extra=[].concat(TV,FACES,BANDS);
  window.IOT_APP_DIRECTORY=existing.concat(extra.filter(function(x,i,arr){
    var s=(x.slug||"").toLowerCase(), n=(x.name||"").toLowerCase();
    if(arr.__seen&&(arr.__seen.s[s]||(n&&arr.__seen.n[n]))) return false;
    if(existing.some(function(y){return (y.slug||"").toLowerCase()===s||(n&&(y.name||"").toLowerCase()===n);})) return false;
    arr.__seen=arr.__seen||{s:{},n:{}}; arr.__seen.s[s]=1; if(n) arr.__seen.n[n]=1; return true;
  }));
})();
