/* Homepage hero metrics, computed from the data files that are actually loaded.
   Replaces the earlier hardcoded numbers so nothing on the page claims more than we have. */
(function(){
  function set(id,v){var el=document.getElementById(id);if(el)el.textContent=v;}
  document.addEventListener("DOMContentLoaded",function(){
    var T=window.IOT_TOTALS||null;
    var K=window.IOT_KNOWLEDGE||{protocols:[],standards:[],guides:[],concepts:[],apps:[]};
    var apps=window.IOT_APP_DIRECTORY||[];
    var brands=window.IOT_BRANDS||[];
    var clouds=window.IOT_CLOUDS||[];
    var comps=window.IOT_COMPARISONS||[];
    var amz=(window.IOT_AMAZON||{}).products||[];
    var knowledge=(K.protocols.length+K.standards.length+K.guides.length+(K.concepts||[]).length);
    var records=brands.length+apps.length+clouds.length+comps.length+knowledge+amz.length;
    set("hp-records",T?T.records:records);
    set("hp-apps",T?T.apps:apps.length);
    set("hp-clouds",T?T.clouds:clouds.length);
    set("hp-amazon",T?T.amazon:amz.length);
    // Directory counters: read from the data so a new batch never leaves a stale number.
    var cats=window.IOT_CATEGORY_HUB||[];
    set("category-total-count",T?T.categories:cats.length);
    set("category-app-count",T?T.apps:apps.length);
    set("app-total-count",T?T.apps:apps.length);
    // Worked example pages: derive their counters from the hub entry they name.
    var sampleHost=document.querySelector("[data-sample-category]");
    if(sampleHost){
      var slug=sampleHost.getAttribute("data-sample-category");
      var entry=(window.IOT_CATEGORY_HUB||[]).filter(function(x){return x.slug===slug;})[0];
      if(entry){
        var wantApps=entry.apps||[], wantBrands=entry.brands||[], wantProto=entry.protocols||[];
        set("sample-app-count",apps.filter(function(a){return wantApps.indexOf(a.category)>=0;}).length);
        set("sample-brand-count",brands.filter(function(b){return (b.categories||[]).some(function(t){return wantBrands.indexOf(t)>=0;});}).length);
        set("sample-protocol-count",wantProto.length);
      }
    }
  });
})();
