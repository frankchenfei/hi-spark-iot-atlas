/* Progressive rendering for long lists.
   Renders a first batch immediately and appends the rest on scroll or on demand,
   so pages with hundreds of cards stay responsive on mobile. */
(function(){
  var BATCH = 48;
  function esc(s){return String(s==null?"":s);}
  function render(container, items, opts){
    if(!container) return;
    opts = opts || {};
    var batch = opts.batch || BATCH;
    var label = opts.label || "items";
    var shown = 0;
    container.innerHTML = "";
    var sentinel = document.createElement("div");
    sentinel.className = "lazy-sentinel";
    var btn = document.createElement("button");
    btn.type = "button";
    btn.className = "btn primary lazy-more";
    var status = document.createElement("p");
    status.className = "lazy-status data-note";

    function append(n){
      var slice = items.slice(shown, shown + n);
      if(!slice.length) return 0;
      var frag = document.createElement("div");
      frag.className = "lazy-batch";
      frag.innerHTML = slice.join("");
      // move the new nodes in, preserving filter state for the caller
      while(frag.firstChild) container.insertBefore(frag.firstChild, sentinel);
      shown += slice.length;
      return slice.length;
    }
    function update(){
      var left = items.length - shown;
      btn.textContent = "Load more (" + Math.min(batch, left) + " of " + left + ")";
      btn.style.display = left > 0 ? "" : "none";
      status.textContent = left > 0 ? (shown + " of " + items.length + " " + label + " shown") : "";
    }
    function more(){
      append(batch); update();
      if(opts.auto === false) return;
    }
    btn.addEventListener("click", more);

    container.appendChild(sentinel);
    container.appendChild(btn);
    container.appendChild(status);
    append(batch); update();

    if(opts.auto !== false && "IntersectionObserver" in window){
      var io = new IntersectionObserver(function(entries){
        entries.forEach(function(e){ if(e.isIntersecting){ append(batch); update(); } });
      }, { rootMargin: "600px" });
      io.observe(sentinel);
    }
    return {
      setItems: function(next){ items = next; shown = 0;
        while(container.firstChild) container.removeChild(container.firstChild);
        container.appendChild(sentinel); container.appendChild(btn); container.appendChild(status);
        append(batch); update(); },
      count: function(){ return shown; }
    };
  }
  window.IOT_LAZY = { render: render };
})();
