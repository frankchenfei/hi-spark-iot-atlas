/* IoT Atlas community client.
   Talks to Supabase when assets/supabase-config.js is filled in.
   When it is not configured the UI degrades to an explanatory setup panel so the
   static site keeps working. */
(function(){
  var cfg=window.IOT_SUPABASE||{};
  var configured=!!(cfg.enabled&&cfg.url&&cfg.anonKey);
  var esc=function(v){return String(v==null?"":v).replace(/[&<>"']/g,function(c){return {"&":"&amp;","<":"&lt;",">":"&gt;","\"":"&quot;","'":"&#39;"}[c];});};
  var sb=null, session=null;

  function params(){return new URLSearchParams(location.search);}
  function fmt(d){try{return new Date(d).toLocaleDateString("en-GB",{day:"numeric",month:"short",year:"numeric"});}catch(e){return "";}}

  function setupPanel(){
    return '<div class="panel community-setup">'
      +'<h3 style="margin-top:0">Community is ready to connect</h3>'
      +'<p>The community runs on Supabase. Three steps switch it on:</p>'
      +'<ol class="community-steps">'
      +'<li>Create a Supabase project and run <code>supabase/schema.sql</code> in the SQL editor.</li>'
      +'<li>Copy your Project URL and anon key into <code>assets/supabase-config.js</code> and set <code>enabled: true</code>.</li>'
      +'<li>Add your site domain to Supabase Authentication &rarr; URL Configuration.</li>'
      +'</ol>'
      +'<p class="data-note">Until then this page shows the intended layout. No data leaves the browser.</p>'
      +'</div>';
  }

  function authBar(){
    if(session){
      return '<div class="community-auth"><span class="pill green">Signed in</span>'
        +'<span class="community-user">'+esc(session.user.email||"")+'</span>'
        +'<button type="button" class="btn small" id="community-signout">Sign out</button></div>';
    }
    return '<form class="community-auth" id="community-signin">'
      +'<input type="email" required placeholder="you@example.com" aria-label="Email address" id="community-email">'
      +'<button type="submit" class="btn primary small">Email me a sign-in link</button>'
      +'<span class="data-note" id="community-auth-msg">No password needed.</span></form>';
  }

  function threadCard(t){
    return '<a class="community-thread" href="'+window.IOT_SITE_BASE+'community.html?thread='+encodeURIComponent(t.slug)+'">'
      +'<div class="community-thread-top">'
      +'<span class="pill teal">'+esc(t.category||"general")+'</span>'
      +(t.entity_slug?'<span class="pill blue">'+esc(t.entity_type||"")+' &middot; '+esc(t.entity_slug)+'</span>':'')
      +(t.pinned?'<span class="pill amber">Pinned</span>':'')
      +'</div>'
      +'<strong>'+esc(t.title)+'</strong>'
      +'<p>'+esc(String(t.body||"").slice(0,180))+(String(t.body||"").length>180?"\u2026":"")+'</p>'
      +'<div class="community-meta"><span>@'+esc(t.author_handle||"member")+'</span>'
      +'<span>'+esc(fmt(t.created_at))+'</span>'
      +'<span>'+Number(t.reply_count||0)+' replies</span>'
      +'<span>'+Number(t.reaction_count||0)+' helpful</span></div></a>';
  }

  function newThreadForm(entityType,entitySlug){
    return '<form class="community-form" id="community-new-thread">'
      +'<h3 style="margin-top:0">Start a discussion</h3>'
      +'<input type="text" required minlength="8" maxlength="160" placeholder="Question or topic title" id="ct-title">'
      +'<textarea required minlength="10" maxlength="8000" rows="5" placeholder="Describe the setup, the problem or what you found." id="ct-body"></textarea>'
      +'<div class="community-form-row">'
      +'<select id="ct-category"><option value="general">General</option><option value="compatibility">Compatibility</option>'
      +'<option value="troubleshooting">Troubleshooting</option><option value="buying">Buying advice</option>'
      +'<option value="cloud">Cloud &amp; platform</option><option value="security">Security &amp; privacy</option></select>'
      +'<button type="submit" class="btn primary">Post discussion</button></div>'
      +'<span class="data-note" id="ct-msg"></span>'
      +(entityType?'<input type="hidden" id="ct-entity-type" value="'+esc(entityType)+'"><input type="hidden" id="ct-entity-slug" value="'+esc(entitySlug||"")+'">':'')
      +'</form>';
  }

  function slugify(s){
    return String(s).toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/^-|-$/g,"").slice(0,60)
      + "-" + Math.random().toString(36).slice(2,7);
  }

  // ---------------------------------------------------------------- data
  async function loadThreads(limit){
    var q=sb.from("community_thread_feed").select("*").limit(limit||30);
    var res=await q;
    if(res.error) throw res.error;
    return res.data||[];
  }
  async function loadThread(slug){
    var t=await sb.from("community_thread_feed").select("*").eq("slug",slug).maybeSingle();
    if(t.error) throw t.error;
    if(!t.data) return null;
    var p=await sb.from("posts").select("id,body,created_at,reaction_count,is_answer,profiles(handle,display_name,avatar_url)").eq("thread_id",t.data.id).order("created_at");
    if(p.error) throw p.error;
    return {thread:t.data,posts:p.data||[]};
  }

  // ------------------------------------------------------- seed demo mode
  function seedSlug(title){return String(title).toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/^-|-$/g,"").slice(0,70);}
  function seedNotice(){var s=window.IOT_COMMUNITY_SEED||{};return '<div class="callout community-callout"><strong>Sample discussions</strong><br><span>'+esc(s.notice||"")+'</span></div>';}
  function seedThreadCard(th){
    var s=window.IOT_COMMUNITY_SEED, d=s.desks[th.desk]||{handle:"editorial"};
    var slug=seedSlug(th.title);
    return '<a class="community-thread" href="'+window.IOT_SITE_BASE+'community.html?thread='+encodeURIComponent(slug)+'" data-seed="1" data-category="'+esc(th.category)+'" data-search="'+esc((th.title+" "+th.body+" "+th.category).toLowerCase())+'">'
      +'<div class="community-thread-top"><span class="pill teal">'+esc(th.category)+'</span>'
      +(th.entity_slug?'<span class="pill blue">'+esc(th.entity_type)+" &middot; "+esc(th.entity_slug)+'</span>':'')
      +'<span class="pill amber">Sample</span></div>'
      +'<strong>'+esc(th.title)+'</strong>'
      +'<p>'+esc(th.body.slice(0,180))+(th.body.length>180?"\u2026":"")+'</p>'
      +'<div class="community-meta"><span>@'+esc(d.handle)+'</span><span>'+th.replies.length+' replies</span></div></a>';
  }
  function renderSeedDetail(slug){
    var s=window.IOT_COMMUNITY_SEED, th=null;
    s.threads.forEach(function(x){ if(seedSlug(x.title)===slug) th=x; });
    if(!th) return null;
    var d=s.desks[th.desk]||{handle:"editorial",name:"Editorial"};
    return '<div class="community-detail">'
      +'<a class="text-link" href="'+window.IOT_SITE_BASE+'community.html">&larr; All discussions</a>'
      +seedNotice()
      +'<h2>'+esc(th.title)+'</h2>'
      +'<div class="community-meta"><span>@'+esc(d.handle)+'</span><span class="pill teal">'+esc(th.category)+'</span>'
      +(th.entity_slug?'<span class="pill blue">'+esc(th.entity_type)+" &middot; "+esc(th.entity_slug)+'</span>':'')+'</div>'
      +'<div class="community-body">'+esc(th.body)+'</div>'
      +'<h3>'+th.replies.length+' replies</h3>'
      +th.replies.map(function(r){var rd=s.desks[r.desk]||{handle:"editorial"};
          return '<div class="community-post"><div class="community-post-head"><strong>@'+esc(rd.handle)+'</strong><span>'+esc(rd.name||"")+'</span></div><p>'+esc(r.body)+'</p></div>';
        }).join("")
      +'<div class="panel community-cta"><h3 style="margin-top:0">Member accounts open at launch</h3>'
      +'<p>Sign-in, posting and replies switch on once the Supabase project is connected. Until then these editorial discussions are read-only.</p>'+setupPanel()+'</div>'
      +'</div>';
  }
  function renderSeedMode(){
    var host=document.querySelector("#community-hub"); if(!host) return;
    var s=window.IOT_COMMUNITY_SEED;
    if(!s||!s.threads||!s.threads.length){ host.innerHTML=setupPanel(); return; }
    var slug=params().get("thread");
    if(slug){ var d=renderSeedDetail(slug); if(d){ host.innerHTML=d; return; } }
    var cats=["all"]; s.threads.forEach(function(x){ if(cats.indexOf(x.category)<0) cats.push(x.category); });
    host.innerHTML=seedNotice()
      +'<div class="category-tabs" id="seed-tabs">'+cats.map(function(c,i){
          var n=c==="all"?s.threads.length:s.threads.filter(function(x){return x.category===c;}).length;
          return '<button type="button" class="category-tab'+(i===0?' active':'')+'" data-cat="'+esc(c)+'">'+esc(c.charAt(0).toUpperCase()+c.slice(1))+' <small>'+n+'</small></button>';
        }).join("")+'</div>'
      +'<div class="community-feed" id="seed-feed">'+s.threads.map(seedThreadCard).join("")+'</div>';
    var tabs=document.getElementById("seed-tabs"), feed=document.getElementById("seed-feed");
    if(tabs&&feed){ tabs.addEventListener("click",function(ev){
      var b=ev.target.closest("[data-cat]"); if(!b) return;
      tabs.querySelectorAll("[data-cat]").forEach(function(o){o.classList.remove("active");});
      b.classList.add("active");
      var c=b.getAttribute("data-cat");
      feed.querySelectorAll("[data-seed]").forEach(function(el){ el.style.display=(c==="all"||el.getAttribute("data-category")===c)?"":"none"; });
    }); }
  }

  // ------------------------------------------------------------ rendering
  async function renderHub(){
    var host=document.querySelector("#community-hub"); if(!host) return;
    if(!configured){ host.innerHTML=setupPanel(); return; }
    var slug=params().get("thread");
    try{
      if(slug){
        var d=await loadThread(slug);
        if(!d){ host.innerHTML='<div class="panel"><h3>Discussion not found</h3><p><a class="text-link" href="'+window.IOT_SITE_BASE+'community.html">Back to all discussions</a></p></div>'; return; }
        host.innerHTML='<div class="community-detail">'
          +'<a class="text-link" href="'+window.IOT_SITE_BASE+'community.html">&larr; All discussions</a>'
          +'<h2>'+esc(d.thread.title)+'</h2>'
          +'<div class="community-meta"><span>@'+esc(d.thread.author_handle)+'</span><span>'+esc(fmt(d.thread.created_at))+'</span>'
          +'<span class="pill teal">'+esc(d.thread.category)+'</span></div>'
          +'<div class="community-body">'+esc(d.thread.body)+'</div>'
          +'<h3>'+d.posts.length+' replies</h3>'
          +d.posts.map(function(p){
              var a=(p.profiles&&p.profiles.handle)||"member";
              return '<div class="community-post"><div class="community-post-head"><strong>@'+esc(a)+'</strong><span>'+esc(fmt(p.created_at))+'</span></div><p>'+esc(p.body)+'</p></div>';
            }).join("")
          +authBar()
          +'<form class="community-form" id="community-reply"><textarea required minlength="2" rows="4" placeholder="Write a reply" id="cr-body"></textarea>'
          +'<button type="submit" class="btn primary">Post reply</button><span class="data-note" id="cr-msg"></span></form>'
          +'</div>';
        wireReply(d.thread.id);
        return;
      }
      var threads=await loadThreads(40);
      host.innerHTML='<div class="community-layout">'
        +'<div class="community-main">'
        +'<div class="section-head"><div><h2>Latest discussions</h2><p>'+threads.length+' public threads from installers, buyers and builders.</p></div></div>'
        +'<div class="community-feed">'+(threads.length?threads.map(threadCard).join(""):'<div class="panel"><p>No discussions yet. Be the first to post.</p></div>')+'</div>'
        +'</div>'
        +'<aside class="community-side">'+authBar()+newThreadForm()+'</aside></div>';
      wireNewThread();
    }catch(e){
      host.innerHTML='<div class="panel"><h3>Could not load the community</h3><p>'+esc(e.message||"Unknown error")+'</p></div>';
    }
  }

  async function renderEntity(){
    var host=document.querySelector("#entity-community"); if(!host) return;
    var type=host.getAttribute("data-entity-type"), slug=host.getAttribute("data-entity-slug");
    if(!configured){
      var s=window.IOT_COMMUNITY_SEED;
      var mine=s?(s.threads.filter(function(x){return x.entity_type===type&&x.entity_slug===slug;})):[];
      host.innerHTML='<div class="section-head"><div><h2>Community discussion</h2><p>'+(mine.length?mine.length+' sample threads reference this record.':'Member discussions open at launch.')+'</p></div><a class="text-link" href="'+window.IOT_SITE_BASE+'community.html">All discussions &rarr;</a></div>'
        +(mine.length?'<div class="community-feed compact">'+mine.map(seedThreadCard).join('')+'</div>':'<div class="panel community-setup compact"><p class="data-note">Community is connected at launch. <a class="text-link" href="'+window.IOT_SITE_BASE+'community.html">See sample discussions &rarr;</a></p></div>');
      return;
    }
    try{
      var res=await sb.from("community_thread_feed").select("*").eq("entity_type",type).eq("entity_slug",slug).limit(10);
      if(res.error) throw res.error;
      var list=res.data||[];
      host.innerHTML='<div class="section-head"><div><h2>Community discussion</h2><p>'+(list.length?list.length+' threads about this record.':"No threads yet. Ask the first question.")+'</p></div><a class="text-link" href="'+window.IOT_SITE_BASE+'community.html">All discussions &rarr;</a></div>'
        +'<div class="community-feed compact">'+list.map(threadCard).join("")+'</div>'
        +authBar()+newThreadForm(type,slug);
      wireNewThread();
    }catch(e){ host.innerHTML='<div class="panel"><p class="data-note">Community unavailable: '+esc(e.message||"")+'</p></div>'; }
  }

  // ---------------------------------------------------------------- wiring
  function msg(id,text,ok){var el=document.getElementById(id);if(el){el.textContent=text;el.style.color=ok?"var(--success)":"var(--danger)";}}

  function wireNewThread(){
    var f=document.getElementById("community-new-thread"); if(!f) return;
    f.addEventListener("submit",async function(ev){
      ev.preventDefault();
      if(!session){ msg("ct-msg","Sign in first using the email link.",false); return; }
      var et=document.getElementById("ct-entity-type"), es=document.getElementById("ct-entity-slug");
      var title=document.getElementById("ct-title").value.trim();
      var body=document.getElementById("ct-body").value.trim();
      msg("ct-msg","Posting\u2026",true);
      var r=await sb.from("threads").insert({
        slug:slugify(title), title:title, body:body,
        category:document.getElementById("ct-category").value,
        entity_type:et?et.value:null, entity_slug:es?es.value:null,
        author_id:session.user.id
      }).select().single();
      if(r.error){ msg("ct-msg",r.error.message,false); return; }
      location.href=(window.IOT_SITE_BASE||"")+"community.html?thread="+encodeURIComponent(r.data.slug);
    });
  }

  function wireReply(threadId){
    var f=document.getElementById("community-reply"); if(!f) return;
    f.addEventListener("submit",async function(ev){
      ev.preventDefault();
      if(!session){ msg("cr-msg","Sign in first using the email link.",false); return; }
      msg("cr-msg","Posting\u2026",true);
      var r=await sb.from("posts").insert({thread_id:threadId,author_id:session.user.id,body:document.getElementById("cr-body").value.trim()});
      if(r.error){ msg("cr-msg",r.error.message,false); return; }
      location.reload();
    });
  }

  function wireAuth(){
    document.addEventListener("submit",async function(ev){
      if(ev.target.id!=="community-signin") return;
      ev.preventDefault();
      var email=document.getElementById("community-email").value.trim();
      var r=await sb.auth.signInWithOtp({email:email,options:{emailRedirectTo:location.origin+location.pathname}});
      if(r.error){ msg("community-auth-msg",r.error.message,false); return; }
      msg("community-auth-msg","Check your inbox for the sign-in link.",true);
    });
    document.addEventListener("click",async function(ev){
      if(ev.target.id!=="community-signout") return;
      await sb.auth.signOut(); location.reload();
    });
  }

  function wireNewsletter(){
    var f=document.getElementById("newsletter-form"); if(!f) return;
    f.addEventListener("submit",async function(ev){
      ev.preventDefault();
      var m=document.getElementById("newsletter-msg");
      var email=document.getElementById("newsletter-email").value.trim();
      if(!configured){
        m.textContent="Newsletter signup opens together with the member system. Nothing was submitted.";
        m.style.color="var(--accent)";
        return;
      }
      m.textContent="Subscribing…"; m.style.color="";
      var r=await sb.from("subscribers").insert({email:email,locale:(params().get("lang")||"en"),source:"homepage"});
      if(r.error){
        m.textContent = r.error.code==="23505" ? "You are already on the list." : "Could not subscribe: "+r.error.message;
        m.style.color = r.error.code==="23505" ? "var(--success)" : "var(--danger)";
        return;
      }
      m.textContent="Thanks - you are on the list."; m.style.color="var(--success)"; f.reset();
    });
  }
  async function init(){
    var needsHub=document.querySelector("#community-hub");
    var needsEntity=document.querySelector("#entity-community");
    var needsNews=document.querySelector("#newsletter-form");
    if(needsNews&&configured){ try{ var modN=await import("https://esm.sh/@supabase/supabase-js@2"); sb=modN.createClient(cfg.url,cfg.anonKey); wireNewsletter(); }catch(e){} }
    else if(needsNews&&!configured){ wireNewsletter(); }
    if(!needsHub&&!needsEntity) return;
    if(!configured){ if(needsHub) renderSeedMode(); if(needsEntity) renderEntity(); return; }
    try{
      var mod=await import("https://esm.sh/@supabase/supabase-js@2");
      sb=mod.createClient(cfg.url,cfg.anonKey);
      var s=await sb.auth.getSession(); session=s.data.session;
      sb.auth.onAuthStateChange(function(_e,ns){session=ns;});
      wireAuth();
      if(needsHub) renderHub();
      if(needsEntity) renderEntity();
    }catch(e){
      if(needsHub) document.querySelector("#community-hub").innerHTML='<div class="panel"><h3>Supabase SDK could not load</h3><p class="data-note">'+esc(e.message||"")+'</p></div>';
    }
  }

  document.addEventListener("DOMContentLoaded",init);
})();
