// Derives subcategory segments where the source data does not provide one,
// so every category subcategory filter on the App Download Center actually works.
(function(){
  var apps=window.IOT_APP_DIRECTORY||[];
  var RECORDER=/NVR|DVR|XVR|VMS|SmartPSS|gDMSS|iDMSS|XProtect|Camera Station|Video Security|Blue Iris|iSpy|tinyCam|IP Cam Viewer|ONVIF|NetSurveillance|Guarding Vision|Hik-ProConnect/i;
  var DOORBELL=/Doorbell|Intercom|Chime/i;
  apps.forEach(function(a){
    if(a.segment) return;
    if(a.category==="Security"){
      if(RECORDER.test(a.name)) a.segment="Recorder & VMS";
      else if(DOORBELL.test(a.name)) a.segment="Doorbell & Intercom";
      else a.segment="Camera";
    }
  });
  window.IOT_APP_DIRECTORY=apps;
})();
