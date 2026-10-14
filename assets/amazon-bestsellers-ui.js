(function(){
  var data=window.IOT_AMAZON||{products:[],categories:[],marketplaces:[]};
  var products=data.products||[];
  var params=new URLSearchParams(location.search);
  var esc=function(v){return String(v==null?"":v).replace(/[&<>"']/g,function(c){return {"&":"&amp;","<":"&lt;",">":"&gt;","\"":"&quot;","'":"&#39;"}[c];});};

  var state={market:"US",category:"",q:""};

  function scoreBar(n){
    var cls=n>=88?"":(n>=80?"":" low");
    return '<div class="scorebar thin"><i style="width:'+n+'%"></i></div><span class="bsr-score">'+n+'</span>';
  }

  function row(p,pos){
    return '<tr data-row="'+esc([p.title,p.brand,p.category,p.protocol,p.asin].join(" ").toLowerCase())+'" data-cat="'+esc(p.category)+'">'
      +'<td><span class="rank-badge">'+pos+'</span></td>'
      +'<td><strong>'+esc(p.title)+'</strong><br><small class="bsr-brand">'+esc(p.brand)+' &middot; '+esc(p.asin)+'</small></td>'
      +'<td><span class="pill blue">'+esc(p.category)+'</span></td>'
      +'<td><span class="pill">'+esc(p.protocol)+'</span></td>'
      +'<td>'+p.rating.toFixed(1)+' <small class="bsr-brand">('+p.reviews.toLocaleString("en-US")+')</small></td>'
      +'<td><strong>'+esc(p.price)+'</strong></td>'
      +'<td><div class="bsr-score-cell">'+scoreBar(p.score)+'</div></td>'
      +'</tr>';
  }

  function leaderCard(cat){
    var list=products.filter(function(p){return p.category===cat;}).sort(function(a,b){return b.score-a.score;}).slice(0,3);
    var top=products.filter(function(p){return p.category===cat;});
    var avg=Math.round(top.reduce(function(s,p){return s+p.score;},0)/top.length);
    return '<article class="bsr-card" data-lead="'+esc(cat.toLowerCase())+'">'
      +'<div class="bsr-card-head"><strong>'+esc(cat)+'</strong><span class="pill teal">'+top.length+' products</span></div>'
      +'<div class="bsr-avg"><span>Editorial avg</span><b>'+avg+'</b></div>'
      +'<ol class="bsr-list">'+list.map(function(p,idx){
          return '<li><span class="bsr-rank">'+(idx+1)+'</span><span class="bsr-name">'+esc(p.title)+'</span><span class="bsr-val">'+p.score+'</span></li>';
        }).join("")+'</ol></article>';
  }

  function render(){
    var tbody=document.querySelector("#amazon-table");
    if(!tbody) return;
    var rows=products.filter(function(p){
      if(state.market && p.markets.indexOf(state.market)<0) return false;
      if(state.category && p.category!==state.category) return false;
      if(state.q){
        var hay=[p.title,p.brand,p.category,p.protocol,p.asin].join(" ").toLowerCase();
        if(hay.indexOf(state.q)<0) return false;
      }
      return true;
    });
    rows.sort(function(a,b){return a.category===b.category?(a.rankInCategory-b.rankInCategory):a.category.localeCompare(b.category);});
    tbody.innerHTML=rows.length?rows.map(function(p,i){return row(p,i+1);}).join(""):'<tr><td colspan="7">No products match these filters. Try another marketplace or category.</td></tr>';

    var count=document.querySelector("#bsr-count"); if(count) count.textContent=rows.length;
    var catCount=document.querySelector("#bsr-cats"); if(catCount) catCount.textContent=[...new Set(rows.map(function(p){return p.category;}))].length;
    var avgEl=document.querySelector("#bsr-avg"); if(avgEl) avgEl.textContent=rows.length?Math.round(rows.reduce(function(s,p){return s+p.score;},0)/rows.length):"-";
    var snap=document.querySelector("#bsr-snapshot"); if(snap) snap.textContent=data.updated||"-";
  }

  function renderTabs(){
    var tabs=document.querySelector("#amazon-tabs"); if(!tabs) return;
    tabs.innerHTML='<button type="button" class="category-tab active" data-cat="">All <small>'+products.length+'</small></button>'
      +data.categories.map(function(c){
          var n=products.filter(function(p){return p.category===c;}).length;
          return '<button type="button" class="category-tab" data-cat="'+esc(c)+'">'+esc(c)+' <small>'+n+'</small></button>';
        }).join("");
    tabs.querySelectorAll("[data-cat]").forEach(function(b){
      b.addEventListener("click",function(){
        tabs.querySelectorAll("[data-cat]").forEach(function(o){o.classList.remove("active");});
        b.classList.add("active");
        state.category=b.getAttribute("data-cat");
        var sel=document.querySelector("#amazon-category"); if(sel) sel.value=state.category;
        render();
      });
    });
  }

  function renderLeaders(){
    var el=document.querySelector("#amazon-leaders"); if(!el) return;
    el.innerHTML=data.categories.map(leaderCard).join("");
  }

  function wire(){
    var mkt=document.querySelector("#amazon-market");
    if(mkt){
      mkt.innerHTML=data.marketplaces.map(function(m){return '<option value="'+esc(m.code)+'">'+esc(m.label)+'</option>';}).join("");
      mkt.value=state.market;
      mkt.addEventListener("change",function(){state.market=mkt.value;render();});
    }
    var sel=document.querySelector("#amazon-category");
    if(sel){
      sel.innerHTML='<option value="">All IoT categories</option>'+data.categories.map(function(c){return '<option value="'+esc(c)+'">'+esc(c)+'</option>';}).join("");
      sel.addEventListener("change",function(){state.category=sel.value;render();
        var tabs=document.querySelector("#amazon-tabs");
        if(tabs) tabs.querySelectorAll("[data-cat]").forEach(function(b){b.classList.toggle("active",b.getAttribute("data-cat")===state.category);});
      });
    }
    var input=document.querySelector("#amazon-search");
    if(input){
      var q=params.get("q"); if(q){input.value=q;state.q=q.toLowerCase().trim();}
      input.addEventListener("input",function(){state.q=input.value.toLowerCase().trim();render();});
    }
    var leadSearch=document.querySelector("#amazon-leader-search");
    if(leadSearch){
      leadSearch.addEventListener("input",function(){
        var s=leadSearch.value.toLowerCase().trim();
        document.querySelectorAll("[data-lead]").forEach(function(el){
          el.style.display=el.getAttribute("data-lead").indexOf(s)>=0?"":"none";
        });
      });
    }
  }

  document.addEventListener("DOMContentLoaded",function(){renderTabs();wire();render();renderLeaders();});
})();
