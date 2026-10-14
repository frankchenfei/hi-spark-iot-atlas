/* Adds a sort control to the app directory: A-Z, most protocols, category. */
(function(){
  function ready(){
    var tabs=document.getElementById("app-category-tabs");
    var grid=document.getElementById("app-directory");
    if(!tabs||!grid) return;
    if(document.getElementById("app-sort")) return;
    var sel=document.createElement("select");
    sel.className="btn"; sel.id="app-sort";
    sel.setAttribute("aria-label","Sort apps");
    sel.innerHTML='<option value="default">Sort: default</option><option value="az">Sort: A to Z</option><option value="za">Sort: Z to A</option><option value="cat">Sort: by category</option>';
    tabs.parentNode.insertBefore(sel, tabs);
    sel.addEventListener("change",function(){
      var mode=sel.value;
      var ev=new Event("iot:resort",{bubbles:true});
      document.dispatchEvent(new CustomEvent("iot:sort",{detail:mode}));
    });
  }
  document.addEventListener("DOMContentLoaded",ready);
})();
