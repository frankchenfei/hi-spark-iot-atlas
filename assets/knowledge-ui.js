(function(){
  var knowledge=window.IOT_KNOWLEDGE||{protocols:[],apps:[],standards:[],guides:[],concepts:[]};
  var params=new URLSearchParams(location.search);
  var esc=function(v){return String(v==null?"":v).replace(/[&<>"']/g,function(c){return {"&":"&amp;","<":"&lt;",">":"&gt;","\"":"&quot;","'":"&#39;"}[c];});};
  var qs=function(v){return encodeURIComponent(v);};

  function card(x,type){
    var link=type==="protocol"?((window.IOT_SITE_BASE||"")+"protocol/"+qs(x.slug)+".html"):(x.href||((window.IOT_SITE_BASE||"")+"knowledge.html"));
    var sub=x.brand||x.category||x.region||x.type||"";
    var hay=[x.name,x.summary,x.category,x.brand,x.region,x.type,x.platforms,x.protocols,x.applies_to,x.why,x.audience].filter(Boolean).join(" ").toLowerCase();
    return '<a class="knowledge-card" href="'+link+'" data-type="'+esc(type)+'" data-search="'+esc(hay)+'">'
      +'<span class="pill teal">'+esc(type)+'</span>'
      +'<strong>'+esc(x.name)+'</strong>'
      +'<p>'+esc(x.summary)+'</p>'
      +'<small>'+esc(sub)+'</small>'
      +'<span class="text-link">Open &rarr;</span></a>';
  }

  window.IOT_KNOWLEDGE_RESULTS=function(q){
    if(!q)return[];
    var s=q.toLowerCase(),out=[];
    function push(type,title,sub,href,text){ if(String(text).toLowerCase().indexOf(s)>=0) out.push({type:type,title:title,sub:sub,href:href}); }
    knowledge.protocols.forEach(function(x){ push("Protocol",x.name,x.category,(window.IOT_SITE_BASE||"")+"protocol/"+qs(x.slug)+".html",[x.name,x.summary,x.category,x.use].join(" ")); });
    knowledge.apps.forEach(function(x){ push("App",x.name,x.brand+" - "+x.platforms,(window.IOT_SITE_BASE||"")+"knowledge.html?q="+qs(x.name),[x.name,x.brand,x.summary,x.platforms,x.protocols].join(" ")); });
    knowledge.standards.forEach(function(x){ push("Standard",x.name,x.region,x.source,[x.name,x.summary,x.region,x.applies_to].join(" ")); });
    knowledge.guides.forEach(function(x){ push("Guide",x.name,x.type,x.href||"knowledge.html",[x.name,x.summary,x.type,x.audience].join(" ")); });
    (knowledge.concepts||[]).forEach(function(x){ push("Concept",x.name,x.category,(window.IOT_SITE_BASE||"")+"knowledge.html?q="+qs(x.name),[x.name,x.summary,x.why,x.category].join(" ")); });
    return out.slice(0,40);
  };

  function renderHome(){
    var el=document.querySelector("#home-knowledge"); if(!el) return;
    el.innerHTML=knowledge.protocols.slice(0,6).map(function(x){return card(x,"protocol");}).join("");
  }

  function renderStats(){
    var s={
      'k-stat-protocols':knowledge.protocols.length,
      'k-stat-standards':knowledge.standards.length,
      'k-stat-guides':knowledge.guides.length,
      'k-stat-concepts':(knowledge.concepts||[]).length,
      'k-stat-apps':knowledge.apps.length
    };
    Object.keys(s).forEach(function(id){ var el=document.getElementById(id); if(el) el.textContent=s[id]; });
  }

  function renderCompleteness(){
    var el=document.querySelector("#knowledge-completeness"); if(!el) return;
    var c=knowledge.completeness; if(!c) return;
    var types=c.types||{};
    var rows=Object.keys(types).map(function(k){
      var t=types[k];
      return '<div class="kc-row"><div><strong>'+esc(k.charAt(0).toUpperCase()+k.slice(1))+'</strong><small>'+t.required.length+' required fields per record</small></div>'
        +'<span class="pill green">'+t.count+' complete</span></div>';
    }).join("");
    var total=Object.keys(types).reduce(function(s,k){return s+types[k].count;},0);
    el.innerHTML='<div class="kc-head"><div><h2>Content completeness</h2><p>'+esc(c.note||"")+'</p></div><span class="pill teal">'+total+' validated records</span></div>'
      +'<div class="kc-grid">'+rows+'</div>'
      +'<p class="kc-foot">Contract last enforced on '+esc(c.generated||"")+'. Records that fail validation block the build instead of publishing incomplete.</p>';
  }

  function renderDirectory(){
    var grid=document.querySelector("#knowledge-directory"); if(!grid) return;
    var groups=[
      {t:"protocol",items:knowledge.protocols},
      {t:"concept",items:knowledge.concepts||[]},
      {t:"standard",items:knowledge.standards},
      {t:"guide",items:knowledge.guides},
      {t:"app",items:knowledge.apps}
    ];
    var all=[];
    groups.forEach(function(g){ g.items.forEach(function(x){ all.push({x:x,t:g.t}); }); });
    var _kl=null;if(window.IOT_LAZY){_kl=window.IOT_LAZY.render(grid,all.map(function(o){return card(o.x,o.t);}),{label:"records"});}else{grid.innerHTML=all.map(function(o){return card(o.x,o.t);}).join("");}

    var tabs=document.querySelector("#knowledge-tabs");
    if(tabs){
      tabs.innerHTML='<button type="button" class="category-tab active" data-type="">All <small>'+all.length+'</small></button>'
        +groups.map(function(g){ return '<button type="button" class="category-tab" data-type="'+g.t+'">'+g.t.charAt(0).toUpperCase()+g.t.slice(1)+'s <small>'+g.items.length+'</small></button>'; }).join("");
      tabs.querySelectorAll("[data-type]").forEach(function(b){
        b.addEventListener("click",function(){
          tabs.querySelectorAll("[data-type]").forEach(function(o){o.classList.remove("active");});
          b.classList.add("active");
          var t=b.getAttribute("data-type");
          grid.querySelectorAll("[data-type]").forEach(function(el){
            el.style.display=(!t||el.getAttribute("data-type")===t)?'':'none';
          });
        });
      });
    }

    var input=document.querySelector("#knowledge-search input");
    if(input){
      var q=params.get("q"); if(q) input.value=q;
      var run=function(){
        var s=input.value.toLowerCase().trim();
        var active=tabs&&tabs.querySelector(".category-tab.active");
        var t=active?active.getAttribute("data-type"):"";
        if(_kl){var keep=all.filter(function(o){return (!t||o.t===t)&&(card(o.x,o.t).toLowerCase().indexOf(s)>=0);});_kl.setItems(keep.map(function(o){return card(o.x,o.t);}));}else{grid.querySelectorAll("[data-search]").forEach(function(el){el.style.display=(el.getAttribute("data-search").indexOf(s)>=0&&(!t||el.getAttribute("data-type")===t))?'':'none';});}
      };
      input.addEventListener("input",run); run();
    }
  }

  function renderProtocolDetail(){
    var el=document.querySelector("#protocol-detail"); if(!el) return;
    var key=(window.IOT_ENTITY_SLUG("protocol")||"matter").toLowerCase();
    var p=knowledge.protocols.filter(function(x){return x.slug===key;})[0]
       || knowledge.protocols.filter(function(x){return x.name.toLowerCase().indexOf(key)>=0;})[0]
       || knowledge.protocols[0];
    if(!p) return;
    document.querySelector("#protocol-name").textContent=p.name;
    var pc=document.querySelector("#protocol-crumb-name"); if(pc) pc.textContent=p.name;
    document.querySelector("#protocol-summary").textContent=p.summary;
    document.querySelector("#protocol-category").textContent=p.category;
    document.querySelector("#protocol-range").textContent=p.range;
    document.querySelector("#protocol-power").textContent=p.power;
    document.querySelector("#protocol-topology").textContent=p.topology;
    document.querySelector("#protocol-use").textContent=p.use;
    var src=document.querySelector("#protocol-source");
    if(src){ src.href=p.source; src.textContent=p.source_name; }
    var rel=document.querySelector("#protocol-related");
    if(rel){
      var same=knowledge.protocols.filter(function(x){return x.slug!==p.slug&&x.category===p.category;}).slice(0,6);
      if(!same.length) same=knowledge.protocols.filter(function(x){return x.slug!==p.slug;}).slice(0,6);
      rel.innerHTML=same.map(function(x){return card(x,"protocol");}).join("");
    }
  }

  document.addEventListener("DOMContentLoaded",function(){ renderHome(); renderStats(); renderCompleteness(); renderDirectory(); renderProtocolDetail(); });
})();
