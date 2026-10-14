/* Mobile-aware demo: side by side on desktop, one pane at a time on small screens. */
(function(){
  function esc(v){return String(v==null?"":v).replace(/[&<>"']/g,function(c){return {"&":"&amp;","<":"&lt;",">":"&gt;","\"":"&quot;","'":"&#39;"}[c];});}
  function card(a){
    return '<article class="app-card"><div class="app-card-top">'
      + '<span class="pill teal">'+esc(a.category||"")+'</span>'
      + '<span class="pill amber">'+esc(a.segment||"App")+'</span>'
      + (a.ios_verified?'<span class="pill green">Verified</span>':'')
      + '</div><div class="app-card-head"><span class="app-icon">'+esc((a.name||"?").slice(0,2).toUpperCase())+'</span>'
      + '<div><strong>'+esc(a.name)+'</strong><small>'+esc(a.brand||"")+'</small></div></div>'
      + '<p>'+esc(a.summary||"")+'</p></article>';
  }
  function nodes(el){ return el.getElementsByTagName("*").length.toLocaleString(); }

  document.addEventListener("DOMContentLoaded", function(){
    var apps = window.IOT_APP_DIRECTORY || [];
    var plain = document.getElementById("demo-plain");
    var virt  = document.getElementById("demo-virtual");
    if(!plain || !virt) return;
    document.getElementById("demo-total").textContent = apps.length;

    // mobile: show one pane, switch with buttons
    var panes = document.querySelectorAll(".demo-pane");
    var sw = document.getElementById("demo-switch");
    if (sw) {
      sw.addEventListener("click", function(ev){
        var b = ev.target.closest("[data-mode]"); if(!b) return;
        sw.querySelectorAll("[data-mode]").forEach(function(x){ x.classList.toggle("active", x === b); });
        panes.forEach(function(p){ p.classList.toggle("is-active", p.getAttribute("data-mode") === b.getAttribute("data-mode")); });
      });
    }

    window.IOT_VIRTUAL.skeleton(plain, 6);
    window.IOT_VIRTUAL.skeleton(virt, 6);
    document.getElementById("demo-plain-nodes").textContent = "loading...";
    document.getElementById("demo-virtual-nodes").textContent = "loading...";

    setTimeout(function(){
      var narrow = window.matchMedia("(max-width: 900px)").matches;
      // on narrow screens, only build the pane that is visible first
      var t0 = performance.now();
      plain.classList.remove("virtual-grid");
      plain.innerHTML = apps.slice(0, narrow ? 120 : apps.length).map(card).join("");
      document.getElementById("demo-plain-nodes").textContent = nodes(plain);
      document.getElementById("demo-plain-time").textContent = Math.round(performance.now()-t0) + " ms";
      if (narrow) {
        var note = document.getElementById("demo-plain-note");
        if (note) note.textContent = " (first 120 shown on mobile to keep this demo usable)";
      }

      var t1 = performance.now();
      window.IOT_VIRTUAL.grid(virt, apps, card, {
        minCardWidth: 280, cardHeight: 320, gap: 14,
        onStats: function(s){
          document.getElementById("demo-virtual-nodes").textContent = nodes(virt);
          document.getElementById("demo-visible").textContent = s.rendered;
        }
      });
      document.getElementById("demo-virtual-time").textContent = Math.round(performance.now()-t1) + " ms";
      window.addEventListener("scroll", function(){
        document.getElementById("demo-virtual-nodes").textContent = nodes(virt);
      }, { passive: true });
    }, 900);
  });
})();
