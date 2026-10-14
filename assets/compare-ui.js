(function(){
  var comparisons=window.IOT_COMPARISONS||[];
  var params=new URLSearchParams(location.search);
  var esc=function(v){return String(v==null?"":v).replace(/[&<>"']/g,function(c){return {"&":"&amp;","<":"&lt;",">":"&gt;","\"":"&quot;","'":"&#39;"}[c];});};
  var qs=function(v){return encodeURIComponent(v);};

  // ---- logo lookup across brands + clouds ----
  var logoNames={};
  function addName(n,slug){ if(!n) return; logoNames[String(n).toLowerCase().trim()]=slug; }
  var logoMap=(window.IOT_LOGO_MAP||{}).brands||{};
  (window.IOT_BRANDS||[]).forEach(function(b){ addName(b.name,b.slug); if(b.app) addName(b.app,b.slug); });
  (window.IOT_CLOUDS||[]).forEach(function(c){ addName(c.provider,c.slug); addName(c.name,c.slug); (c.aliases||[]).forEach(function(a){ addName(a,c.slug); }); });
  function logoFor(label){
    var key=String(label||"").toLowerCase().trim();
    var slug=logoNames[key];
    if(!slug){
      var hit=Object.keys(logoNames).filter(function(k){return k.indexOf(key)>=0||key.indexOf(k)>=0;})[0];
      if(hit) slug=logoNames[hit];
    }
    if(!slug) return null;
    var m=logoMap[slug];
    return (m&&m.file)?((window.IOT_SITE_BASE||"")+"assets/logos/"+m.file):null;
  }
  function initials(label){
    var s=String(label||"?").replace(/[^A-Za-z0-9 ]/g," ").trim().split(/\s+/);
    if(s.length>=2) return (s[0][0]+s[1][0]).toUpperCase();
    return String(label||"?").slice(0,2).toUpperCase();
  }
  function badge(label){
    var f=logoFor(label);
    return f?('<img src="'+esc(f)+'" alt="" loading="lazy">'):esc(initials(label));
  }

  // ---- shared result hook for the global search ----
  var original=window.IOT_KNOWLEDGE_RESULTS;
  window.IOT_KNOWLEDGE_RESULTS=function(q){
    var base=original?original(q):[];
    if(!q) return base;
    var s=q.toLowerCase();
    var extra=comparisons.filter(function(x){
      return [x.title,x.type,x.a,x.b,x.summary,(x.tags||[]).join(" ")].join(" ").toLowerCase().indexOf(s)>=0;
    }).map(function(x){ return {type:"Comparison",title:x.title,sub:x.type+" - "+x.criteria.length+" decision factors",href:(window.IOT_SITE_BASE||"")+"compare/"+qs(x.slug)+".html"}; });
    return base.concat(extra).slice(0,60);
  };

  function splitBar(x){
    var tot=(x.scoreA+x.scoreB)||1;
    var pa=Math.round(x.scoreA/tot*100);
    return '<div class="split-bar"><i class="sa" style="width:'+pa+'%"></i><i class="sb" style="width:'+(100-pa)+'%"></i></div>';
  }

  function compCard(x){
    return '<a class="compare-card" href="'+window.IOT_SITE_BASE+'compare/'+qs(x.slug)+'.html" data-type="'+esc(x.type)+'" data-search="'+esc([x.title,x.type,x.a,x.b,x.summary,(x.tags||[]).join(" ")].join(" ").toLowerCase())+'">'
      +'<span class="pill blue">'+esc(x.type)+'</span>'
      +'<strong>'+esc(x.title)+'</strong>'
      +'<p>'+esc(x.summary)+'</p>'
      +'<div class="compare-mini">'
        +'<div class="compare-mini-row"><span>'+esc(x.a)+' '+x.scoreA+'</span><span>'+x.scoreB+' '+esc(x.b)+'</span></div>'
        +splitBar(x)
      +'</div>'
      +'<div class="compare-versus"><span>'+esc(x.a)+'</span><b>VS</b><span>'+esc(x.b)+'</span></div>'
      +'<span class="text-link">Open comparison &rarr;</span></a>';
  }

  function renderDirectory(){
    var grid=document.querySelector("#compare-directory"); if(!grid) return;
    grid.innerHTML=comparisons.map(compCard).join("");

    // type filter tabs
    var tabs=document.querySelector("#compare-tabs");
    if(tabs){
      var types=[];
      comparisons.forEach(function(x){ if(types.indexOf(x.type)<0) types.push(x.type); });
      var order=["Brand","Device","Protocol","Connectivity","Cloud","Platform","App","Storage","AI","Pricing","Privacy"];
      types.sort(function(a,b){var ia=order.indexOf(a),ib=order.indexOf(b);return (ia<0?99:ia)-(ib<0?99:ib);});
      tabs.innerHTML='<button type="button" class="category-tab active" data-type="">All <small>'+comparisons.length+'</small></button>'
        +types.map(function(t){
            var n=comparisons.filter(function(x){return x.type===t;}).length;
            return '<button type="button" class="category-tab" data-type="'+esc(t)+'">'+esc(t)+' <small>'+n+'</small></button>';
          }).join("");
      tabs.querySelectorAll("[data-type]").forEach(function(b){
        b.addEventListener("click",function(){
          tabs.querySelectorAll("[data-type]").forEach(function(o){o.classList.remove("active");});
          b.classList.add("active");
          var t=b.getAttribute("data-type");
          grid.querySelectorAll("[data-search]").forEach(function(el){
            el.style.display=(!t||el.getAttribute("data-type")===t)?'':'none';
          });
        });
      });
    }

    var input=document.querySelector("#compare-search input");
    if(input){
      var q=params.get("q"); if(q) input.value=q;
      var run=function(){
        var s=input.value.toLowerCase().trim();
        grid.querySelectorAll("[data-search]").forEach(function(el){
          var typeEl=el.getAttribute("data-type");
          var active=tabs&&tabs.querySelector(".category-tab.active");
          var t=active?active.getAttribute("data-type"):"";
          el.style.display=(el.getAttribute("data-search").indexOf(s)>=0&&(!t||typeEl===t))?'':'none';
        });
      };
      input.addEventListener("input",run); run();
    }
  }

  function renderDetail(){
    var el=document.querySelector("#compare-detail"); if(!el) return;
    var key=(window.IOT_ENTITY_SLUG("pair")||(comparisons[0]&&comparisons[0].slug)||"").toLowerCase();
    var x=comparisons.filter(function(v){return v.slug===key;})[0]
       || comparisons.filter(function(v){return v.title.toLowerCase().indexOf(key)>=0;})[0]
       || comparisons[0];
    if(!x) return;

    document.querySelector("#compare-title").textContent=x.title;
    var ct=document.querySelector("#compare-crumb-title"); if(ct) ct.textContent=x.title;
    document.querySelector("#compare-summary").textContent=x.summary;
    var tags=document.querySelector("#compare-tags");
    if(tags) tags.innerHTML=(x.tags||[]).map(function(t){return '<span class="pill teal">'+esc(t)+'</span>';}).join("");
    document.title=x.title+" | IoT Atlas Compare";

    var aWins=x.winsA>x.winsB, bWins=x.winsB>x.winsA;
    var hero=document.querySelector("#compare-hero");
    if(hero){
      hero.innerHTML=
        '<div class="vs-side vs-side-a'+(aWins?' win':'')+'">'
          +'<div class="vs-head"><span class="vs-badge">'+badge(x.a)+'</span><div><div class="vs-name">'+esc(x.a)+'</div><div class="vs-sub">'+(aWins?'Stronger overall':'Compared option')+'</div></div></div>'
          +'<div class="vs-score">'+x.scoreA+'<small>weighted score out of 100</small></div>'
          +'<div class="scorebar"><i style="width:'+x.scoreA+'%"></i></div>'
          +'<div class="vs-wins"><span>Wins <b>'+x.winsA+'</b></span><span>Ties <b>'+x.ties+'</b></span><span>Losses <b>'+x.winsB+'</b></span></div>'
        +'</div>'
        +'<div class="vs-middle"><span class="vs-chip">VS</span></div>'
        +'<div class="vs-side vs-side-b'+(bWins?' win':'')+'">'
          +'<div class="vs-head"><span class="vs-badge">'+badge(x.b)+'</span><div><div class="vs-name">'+esc(x.b)+'</div><div class="vs-sub">'+(bWins?'Stronger overall':'Compared option')+'</div></div></div>'
          +'<div class="vs-score">'+x.scoreB+'<small>weighted score out of 100</small></div>'
          +'<div class="scorebar b"><i style="width:'+x.scoreB+'%"></i></div>'
          +'<div class="vs-wins"><span>Wins <b>'+x.winsB+'</b></span><span>Ties <b>'+x.ties+'</b></span><span>Losses <b>'+x.winsA+'</b></span></div>'
        +'</div>';
    }

    var bf=document.querySelector("#compare-bestfor");
    if(bf&&x.bestFor){
      bf.innerHTML='<div class="best-for-card a"><h3>Choose '+esc(x.a)+' if</h3><p>'+esc(x.bestFor.a)+'</p></div>'
                  +'<div class="best-for-card b"><h3>Choose '+esc(x.b)+' if</h3><p>'+esc(x.bestFor.b)+'</p></div>';
    }

    document.querySelector("#compare-verdict").textContent=x.verdict;
    document.querySelector("#compare-a").textContent=x.a;
    document.querySelector("#compare-b").textContent=x.b;

    document.querySelector("#compare-rows").innerHTML=x.criteria.map(function(r){
      var cls=r.winner==="Tie"?"teal":(r.winner===x.a?"green":"blue");
      return '<tr>'
        +'<td><strong>'+esc(r.label)+'</strong></td>'
        +'<td>'+esc(r.a)
          +'<div class="dualbar"><div class="dualbar-row"><span class="sc">'+r.aScore+'</span><div class="scorebar thin"><i style="width:'+r.aScore+'%"></i></div></div></div></td>'
        +'<td>'+esc(r.b)
          +'<div class="dualbar"><div class="dualbar-row"><span class="sc">'+r.bScore+'</span><div class="scorebar thin b"><i style="width:'+r.bScore+'%"></i></div></div></div></td>'
        +'<td><span class="pill '+cls+' win-pill">'+esc(r.winner)+'</span></td>'
        +'</tr>';
    }).join("");

    var meta=document.querySelector("#compare-meta");
    if(meta){
      meta.innerHTML='<span><b>'+x.criteria.length+'</b> decision factors scored</span>'
        +'<span><b>'+x.winsA+'</b> factors favour '+esc(x.a)+'</span>'
        +'<span><b>'+x.winsB+'</b> factors favour '+esc(x.b)+'</span>'
        +'<span><b>'+x.ties+'</b> ties</span>'
        +'<span>Editorial scoring &middot; editorial data</span>';
    }

    var rel=document.querySelector("#compare-related");
    if(rel){
      var same=comparisons.filter(function(v){return v.slug!==x.slug&&(v.type===x.type||(v.tags||[]).some(function(t){return (x.tags||[]).indexOf(t)>=0;}));}).slice(0,6);
      rel.innerHTML=same.map(compCard).join("");
    }
  }

  document.addEventListener("DOMContentLoaded",function(){ renderDirectory(); renderDetail(); });
})();
