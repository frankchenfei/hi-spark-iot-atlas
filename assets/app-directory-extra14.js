/* Batch 14: security-camera apps confirmed on the Apple App Store.
   These are the companion apps behind the high-volume OEM camera brands that were
   missing from the directory - the V380-class apps people actually search for.
   Every name and developer below was read back from a live store listing. */
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
  var R=[
    A("V360 Pro","V360","Security","Camera","Wi-Fi, 4G","V360 Pro live view, playback and motion alerts for Wi-Fi and 4G cameras.",""),
    A("Dv Link naxclow","Naxclow","Security","Camera","Wi-Fi","Dv Link naxclow setup, live view and playback for Naxclow cameras.",""),
    A("Sricam","Sricam","Security","Camera","Wi-Fi, 4G","Sricam camera setup, live view and recorded footage.","https://www.sricam.com/"),
    A("Zmodo","Zmodo","Security","Camera","Wi-Fi","Zmodo camera live view, playback and cloud recording plans.","https://www.zmodo.com/"),
    A("cam720","cam720","Security","Camera","Wi-Fi, 4G","cam720 camera viewing, recording and device setup.",""),
    A("V720","V720","Security","Camera","Wi-Fi, 4G","V720 live view, playback and alerts for Wi-Fi and 4G cameras.",""),
    A("GENBOLT CAM","GENBOLT","Security","Camera","Wi-Fi, 4G","GENBOLT camera live view, playback and motion alerts.","https://www.genbolt.com/"),
    A("ANRAN","ANRAN","Security","Camera","Wi-Fi, 4G","ANRAN camera and NVR live view, playback and alerts.","https://www.anran.com/"),
    A("Jennov","Jennov","Security","Camera","Wi-Fi, 4G","Jennov camera setup, live view and recorded footage.","https://www.jennov.com/"),
    A("SANNCE","SANNCE","Security","Camera and recorder","Wi-Fi, PoE","SANNCE camera, DVR and NVR live view and playback.","https://www.sannce.com/"),
    A("HiseeuCloud","Hiseeu","Security","Camera and recorder","Wi-Fi, 4G","HiseeuCloud live view and playback for Hiseeu cameras and recorders.","https://www.hiseeu.com/"),
    A("VStarcam Ultra","VStarcam","Security","Camera","Wi-Fi, 4G","VStarcam Ultra camera setup, live view and playback.","https://www.vstarcam.com/"),
    A("Netvue","Netvue","Security","Camera","Wi-Fi","Netvue camera live view, alerts and cloud recording.","https://www.netvue.com/"),
    A("CamHipro","CamHipro","Security","Camera","Wi-Fi","CamHipro camera setup, live view and playback.","")
  ];
  window.IOT_APP_DIRECTORY=existing.concat(R.filter(function(x,i,arr){
    var s=(x.slug||"").toLowerCase(), n=(x.name||"").toLowerCase();
    if(arr.__seen&&(arr.__seen.s[s]||(n&&arr.__seen.n[n]))) return false;
    if(existing.some(function(y){return (y.slug||"").toLowerCase()===s||(n&&(y.name||"").toLowerCase()===n);})) return false;
    arr.__seen=arr.__seen||{s:{},n:{}}; arr.__seen.s[s]=1; if(n) arr.__seen.n[n]=1; return true;
  }));
})();
