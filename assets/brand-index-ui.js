/* Interactive coverage index: the reader sets the priorities, the list re-ranks. */
(function(){
  var IDX=window.IOT_BRAND_INDEX; if(!IDX) return;
  var esc=function(v){return String(v==null?"":v).replace(/[&<>"']/g,function(c){return {"&":"&amp;","<":"&lt;",">":"&gt;","\"":"&quot;","'":"&#39;"}[c];});};
  var weights={}; IDX.dims.forEach(function(d){weights[d.key]=1;});
  var limit=60;

  function controls(){
    return '<div class="panel weight-panel"><h3 style="margin-top:0">Set your priorities</h3>'
      +'<p class="data-note" style="margin-top:-4px">Move a slider to weight what matters to you. The ranking below recalculates instantly, so the order reflects your needs rather than an editorial verdict.</p>'
      +'<div class="weight-grid">'+IDX.dims.map(function(d){
          return '<label class="weight-row" title="'+esc(d.desc)+'">'
            +'<span class="weight-name">'+esc(d.label)+'</span>'
            +'<input type="range" min="0" max="3" step="1" value="1" data-dim="'+esc(d.key)+'">'
            +'<span class="weight-val" data-val="'+esc(d.key)+'">1</span></label>';
        }).join("")+'</div>'
      +'<div class="weight-actions"><button type="button" class="btn small" id="weight-reset">Reset to equal weighting</button>'
      +'<span class="data-note" id="weight-summary"></span></div></div>';
  }

  function card(b){
    var top=IDX.dims.slice().sort(function(x,y){
      return (b.dims[y.key]||0)-(b.dims[x.key]||0);
    }).slice(0,3);
    return '<article class="brand-score-card compact" data-name="'+esc(b.name.toLowerCase())+'">'
      +'<div class="brand-score-top"><div><span class="pill teal">#'+b.pos+'</span><strong>'+esc(b.name)+'</strong>'
      +'<small>'+esc(b.band)+' &middot; '+esc(b.outlook)+'</small></div>'
      +'<div class="score-ring" style="--pct:'+b.index+'%"><span>'+b.index+'</span></div></div>'
      +'<div class="dim-list">'+top.map(function(d){
          return '<div class="dim-row"><span>'+esc(IDX.dimLabel(d.key))+'</span><b>'+d.value+'</b></div>';
        }).join("")+'</div>'
      +'<div class="brand-score-foot"><small>Evidence coverage '+b.evidence+'%</small>'
      +'<a class="text-link" href="'+window.IOT_SITE_BASE+'brand/'+encodeURIComponent(b.slug)+'.html">Scorecard &rarr;</a></div></article>';
  }

  function summary(list){
    var el=document.getElementById("weight-summary"); if(!el) return;
    var custom=IDX.dims.filter(function(d){return weights[d.key]!==1;}).length;
    el.textContent = custom ? custom+" of "+IDX.dims.length+" dimensions re-weighted"
                            : "Showing equal weighting across all "+IDX.dims.length+" dimensions";
  }

  function render(){
    var grid=document.getElementById("brand-insights-grid"); if(!grid) return;
    var list=IDX.rankAll(weights).slice(0,limit);
    grid.innerHTML=list.map(card).join("");
    summary(list);
  }

  function wire(){
    var panel=document.getElementById("weight-controls"); if(!panel) return;
    panel.innerHTML=controls();
    panel.addEventListener("input",function(ev){
      var el=ev.target; if(!el||!el.getAttribute) return;
      var d=el.getAttribute("data-dim"); if(!d) return;
      weights[d]=Number(el.value);
      var v=panel.querySelector('[data-val="'+d+'"]'); if(v) v.textContent=el.value;
      render();
    });
    panel.addEventListener("click",function(ev){
      if(ev.target.id!=="weight-reset") return;
      IDX.dims.forEach(function(d){weights[d.key]=1;});
      panel.querySelectorAll("input[data-dim]").forEach(function(i){ i.value=1; });
      panel.querySelectorAll("[data-val]").forEach(function(s){ s.textContent="1"; });
      render();
    });
    var search=document.querySelector("#brand-score-search input");
    if(search){
      search.addEventListener("input",function(){
        var q=search.value.toLowerCase().trim();
        document.querySelectorAll("#brand-insights-grid [data-name]").forEach(function(c){
          c.style.display=c.getAttribute("data-name").indexOf(q)>=0?"":"none";
        });
      });
    }
    render();
  }
  document.addEventListener("DOMContentLoaded",wire);
})();
