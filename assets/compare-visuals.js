/* Compare hub visuals: coverage and decisiveness charts, a decision map table
   and two score-gap panels that show which decisions are genuinely close and
   which have a clear winner. */
(function(){
  var X=window.IOT_COMPARISONS||[];
  var esc=function(v){return String(v==null?"":v).replace(/[&<>"']/g,function(c){return {"&":"&amp;","<":"&lt;",">":"&gt;","\"":"&quot;","'":"&#39;"}[c];});};
  var qs=function(v){return encodeURIComponent(v);};
  var PURPOSE={
    "Brand":"Which company's ecosystem fits your home or project",
    "Device":"Wired vs wireless, retrofit vs replace, one approach vs another",
    "Protocol":"Which radio or messaging standard to build or buy on",
    "Connectivity":"Which network technology suits the site and the data",
    "Cloud":"Which platform to build the product on",
    "App":"Which companion app to standardise on",
    "Storage":"Where recordings live and what it costs over time",
    "AI":"Where inference runs and what detection technology to use",
    "Pricing":"Ownership model and lifetime cost",
    "Privacy":"Data residency, compliance and control"
  };
  function gap(x){ return Math.abs(x.scoreA-x.scoreB); }
  function split(x){
    var tot=(x.scoreA+x.scoreB)||1, pa=Math.round(x.scoreA/tot*100);
    return '<div class="split-bar"><i class="sa" style="width:'+pa+'%"></i><i class="sb" style="width:'+(100-pa)+'%"></i></div>';
  }
  function row(x,note){
    return '<a class="gap-row" href="'+window.IOT_SITE_BASE+'compare/'+qs(x.slug)+'.html">'
      +'<div class="gap-head"><span class="pill '+(note==="close"?"teal":"blue")+'">'+(note==="close"?"Close call":"Clear gap")+'</span>'
      +'<strong>'+esc(x.title)+'</strong><span class="gap-num">'+gap(x)+'</span></div>'
      +'<div class="gap-pair"><span>'+esc(x.a)+' <b>'+x.scoreA+'</b></span><span>'+esc(x.b)+' <b>'+x.scoreB+'</b></span></div>'
      +split(x)+'</a>';
  }

  /* Two compact charts that give the hub an analytical texture before the table:
     how much each family covers, and how decisive that family's decisions are. */
  function charts(byType,types){
    var counts=types.map(function(t){return {t:t,n:byType[t].length};});
    var maxCount=Math.max.apply(null,counts.map(function(c){return c.n;}))||1;

    var allGaps=types.map(function(t){return Math.max.apply(null,byType[t].map(gap));});
    var maxGap=Math.max.apply(null,allGaps)||1;

    var barchart=counts.map(function(c){
      return '<div class="hbar-row"><span class="hbar-label">'+esc(c.t)+'</span>'
        +'<div class="hbar-track"><i style="width:'+Math.round(c.n/maxCount*100)+'%"></i></div>'
        +'<span class="hbar-val">'+c.n+'</span></div>';
    }).join("");

    var strip=types.map(function(t){
      var list=byType[t];
      var avg=Math.round(list.reduce(function(a,x){return a+gap(x);},0)/list.length);
      var dots=list.map(function(x){
        var pos=Math.round(gap(x)/maxGap*100);
        return '<i class="strip-dot'+(gap(x)<5?' is-close':'')+'" style="left:'+pos+'%" title="'+esc(x.title)+' \u00b7 gap '+gap(x)+'"></i>';
      }).join("");
      return '<div class="strip-row"><span class="strip-label">'+esc(t)+'</span>'
        +'<div class="strip-track">'+dots+'<i class="strip-avg" style="left:'+Math.round(avg/maxGap*100)+'%" title="Average gap '+avg+'"></i></div>'
        +'<span class="strip-val">avg '+avg+'</span></div>';
    }).join("");

    return '<div class="viz-grid">'
      +'<div class="viz-card"><div class="viz-head"><h3>Coverage by decision family</h3>'
      +'<p>How many structured comparisons sit behind each family. Longer bars mean more entry points to start from.</p></div>'
      +'<div class="hbar-chart">'+barchart+'</div></div>'
      +'<div class="viz-card"><div class="viz-head"><h3>How decisive is each family</h3>'
      +'<p>Every dot is one comparison, placed by its score gap. Dots bunched near the left are calls your priorities decide.</p></div>'
      +'<div class="strip-chart">'+strip+'</div>'
      +'<div class="strip-axis"><span>0 pts \u2014 practical tie</span><span>'+maxGap+' pts \u2014 clear winner</span></div>'
      +'<div class="viz-legend"><span><i class="viz-key close"></i>Gap under 5 pts</span>'
      +'<span><i class="viz-key gap"></i>Gap 5 pts or more</span>'
      +'<span><i class="viz-key avg"></i>Family average</span></div></div>'
      +'</div>';
  }

  function render(){
    var host=document.querySelector("#compare-visuals"); if(!host) return;
    var byType={};
    X.forEach(function(x){ (byType[x.type]=byType[x.type]||[]).push(x); });
    var types=Object.keys(byType).sort(function(a,b){return byType[b].length-byType[a].length;});

    var table='<div class="table-wrap"><table class="data-table"><thead><tr>'
      +'<th>Family</th><th>What it decides</th><th>Comparisons</th><th>Score gap</th><th>Start with</th>'
      +'</tr></thead><tbody>'
      +types.map(function(t){
          var list=byType[t], gaps=list.map(gap), lo=Math.min.apply(null,gaps), hi=Math.max.apply(null,gaps);
          var first=list[0];
          return '<tr><td><span class="pill blue">'+esc(t)+'</span></td>'
            +'<td>'+esc(PURPOSE[t]||"Structured decision support")+'</td>'
            +'<td><strong>'+list.length+'</strong></td>'
            +'<td>'+(lo===hi?('<strong>'+lo+'</strong>'):('<strong>'+lo+'</strong> \u2013 <strong>'+hi+'</strong>'))+' pts</td>'
            +'<td><a class="text-link" href="'+window.IOT_SITE_BASE+'compare/'+qs(first.slug)+'.html">'+esc(first.title)+' &rarr;</a></td></tr>';
        }).join("")
      +'</tbody></table></div><p class="data-note">Score gap is the difference between the two weighted scores. A gap under 5 points means the choice depends on your priorities rather than a clear winner.</p>';

    var sorted=X.slice().sort(function(a,b){return gap(a)-gap(b);});
    var close=sorted.slice(0,4);
    var wide=sorted.slice(-4).reverse();

    host.innerHTML=charts(byType,types)
      +'<div class="section-head"><div><h2>Decision map</h2><p>What each comparison family answers, how many options are covered and how decisive they usually are.</p></div></div>'
      +table
      +'<div class="section-head" style="margin-top:34px"><div><h2>Where the decision is actually hard</h2><p>Left: comparisons where the two sides are almost level. Right: comparisons with a clear winner.</p></div></div>'
      +'<div class="gap-grid"><div class="gap-col"><h3>Closest calls</h3>'+close.map(function(x){return row(x,"close");}).join("")+'</div>'
      +'<div class="gap-col"><h3>Clearest gaps</h3>'+wide.map(function(x){return row(x,"wide");}).join("")+'</div></div>';
  }
  document.addEventListener("DOMContentLoaded",render);
})();
