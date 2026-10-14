/* Compatibility, model/manual, troubleshooting and certification renderers. */
(function(){
  var esc=function(v){return String(v==null?'':v).replace(/[&<>"']/g,function(c){return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c];});};
  var path=function(type,slug){return window.IOT_ENTITY_PATH?window.IOT_ENTITY_PATH(type,slug,'en'):'/'+type+'/'+slug+'.html';};
  var slug=function(param){return window.IOT_ENTITY_SLUG?window.IOT_ENTITY_SLUG(param):null;};
  var data=function(name){return Array.isArray(window[name])?window[name]:[];};
  /* ES/FR: the English record stays the source, this store carries es/fr overrides.
     Records are localised before rendering and the page repaints on iot:langchange. */
  var CORE=window.IOT_CONTENT_I18N_CORE||{};
  var CORE_TYPE={compat:'compatibility',model:'model',issue:'troubleshooting',certification:'certification'};
  var CORE_LANGS=['en','es','fr'];
  var UI={
    en:{quick:'Quick answer',cite:'How to cite this page',copy:'Copy citation',copied:'Copied',verified:'last verified'},
    es:{quick:'Respuesta rápida',cite:'Cómo citar esta página',copy:'Copiar cita',copied:'Copiado',verified:'verificado el'},
    fr:{quick:'Réponse rapide',cite:'Comment citer cette page',copy:'Copier la citation',copied:'Copié',verified:'vérifié le'}
  };
  var GEO_LABEL_I18N={
    en:{compat:'Compatibility',model:'Model and manual',issue:'Troubleshooting',certification:'Certification'},
    es:{compat:'Compatibilidad',model:'Modelo y manual',issue:'Solución de problemas',certification:'Certificación'},
    fr:{compat:'Compatibilité',model:'Modèle et manuel',issue:'Dépannage',certification:'Certification'}
  };
  function currentLang(){var p=null;try{p=new URLSearchParams(location.search).get('lang');}catch(e){}if(p&&CORE_LANGS.indexOf(p)>-1)return p;try{var s=localStorage.getItem('iot-lang');if(s&&CORE_LANGS.indexOf(s)>-1)return s;}catch(e){}var h=document.documentElement&&document.documentElement.lang;return (h&&CORE_LANGS.indexOf(h)>-1)?h:'en';}
  function ui(key){var l=currentLang();return (UI[l]&&UI[l][key])||UI.en[key]||'';}
  function localized(type,x){if(!x)return x;var store=CORE[CORE_TYPE[type]||type];var entry=store&&store[x.slug];var l=entry&&entry[currentLang()];if(!l)return x;var out={};for(var k in x)out[k]=x[k];for(var j in l)out[j]=l[j];return out;}
  function card(record,href,meta){return '<a class="card expanded-card" href="'+esc(href)+'" data-filter="'+esc([record.title,record.question,record.brand,record.model,record.code,record.category,record.target,record.appliesTo&&record.appliesTo.join(' ')].join(' ').toLowerCase())+'"><span class="pill blue">'+esc(meta||record.category||'Reference')+'</span><h3>'+esc(record.title||record.question||record.model||record.name)+'</h3><p>'+esc(record.summary||record.symptom||record.meaning||'')+'</p><span class="text-link">Open guide →</span></a>';}
  function renderHub(config){var grid=document.getElementById(config.grid);if(!grid)return;var q=(document.getElementById(config.search)||{}).value||'';var s=q.toLowerCase();var items=config.items.filter(function(x){return !s||JSON.stringify(x).toLowerCase().indexOf(s)>-1;});grid.innerHTML=items.map(function(raw){var x=localized(config.type,raw);return card(x,path(config.type,x.slug),config.meta&&config.meta(x));}).join('');var count=document.getElementById(config.count);if(count)count.textContent=items.length+' records';}
  function bindSearch(id,fn){var el=document.getElementById(id);if(el)el.addEventListener('input',fn);}
  function list(items){return '<ul class="source-list">'+(items||[]).map(function(x){return '<li>'+esc(x)+'</li>';}).join('')+'</ul>';}
  function sources(items){return '<ul class="source-list">'+(items||[]).map(function(x){return '<li><a href="'+esc(x.url)+'" target="_blank" rel="noopener">'+esc(x.label||x.url)+'</a></li>';}).join('')+'</ul>';}
  function steps(items){return '<div class="feature-list">'+(items||[]).map(function(x,i){return '<div class="feature"><div class="feature-icon">'+(i+1)+'</div><div><p>'+esc(x)+'</p></div></div>';}).join('')+'</div>';}
  function specTable(obj){return '<div class="spec-grid">'+Object.keys(obj||{}).map(function(k){return '<div class="spec"><small>'+esc(k)+'</small><strong>'+esc(obj[k])+'</strong></div>';}).join('')+'</div>';}
  function set(id,text){var el=document.getElementById(id);if(el)el.textContent=text==null?'':text;}
  function setHtml(id,html){var el=document.getElementById(id);if(el)el.innerHTML=html||'';}
  function renderCompatibility(){var all=data('IOT_COMPATIBILITY');var s=slug('compat')||'ring-alexa';var x=localized('compat',all.find(function(v){return v.slug===s;}));if(!x)return;set('compat-title',x.title);set('compat-question',x.question);set('compat-verdict',x.verdict);set('compat-summary',x.summary);set('compat-subject',x.subject);set('compat-target',x.target);set('compat-category',x.category);setHtml('compat-requirements',list(x.requirements));setHtml('compat-limitations',list(x.limitations));setHtml('compat-steps',steps(x.steps));setHtml('compat-sources',sources(x.sources));set('compat-verified',x.lastVerified);setHtml('compat-related',all.filter(function(v){return v.slug!==x.slug&&(v.category===x.category||v.subject===x.subject||v.target===x.target);}).slice(0,4).map(function(v){return card(v,path('compat',v.slug),v.category);}).join(''));paintGeo('compat',x);}
  function renderModels(){var all=data('IOT_MODELS');var s=slug('model')||all[0]&&all[0].slug;var x=localized('model',all.find(function(v){return v.slug===s;}));if(!x)return;set('model-title',x.brand+' '+x.model);set('model-name',x.model);set('model-brand',x.brand);set('model-category',x.category);set('model-summary',x.summary);set('model-status',x.status);set('model-app',x.app);set('model-protocols',(x.protocols||[]).join(' · '));set('model-power',x.power);set('model-storage',(x.storage||[]).join(' · '));setHtml('model-specs',specTable(x.specs));var manual=document.getElementById('model-manual');if(manual)manual.href=x.manualUrl||x.supportUrl||'#';var support=document.getElementById('model-support');if(support)support.href=x.supportUrl||x.manualUrl||'#';setHtml('model-sources',sources(x.sources));set('model-verified',x.lastVerified);setHtml('model-related',all.filter(function(v){return v.slug!==x.slug&&(v.category===x.category||v.brand===x.brand);}).slice(0,4).map(function(v){return card(v,path('model',v.slug),v.category);}).join(''));paintGeo('model',x);}
  function renderTroubleshooting(){var all=data('IOT_TROUBLESHOOTING');var s=slug('issue')||all[0]&&all[0].slug;var x=localized('issue',all.find(function(v){return v.slug===s;}));if(!x)return;set('issue-title',x.title);set('issue-crumb-title',x.title);set('issue-symptom',x.symptom);set('issue-category',x.category);set('issue-escalation',x.escalation);setHtml('issue-applies',list(x.appliesTo));setHtml('issue-causes',list(x.likelyCauses));setHtml('issue-checks',list(x.quickChecks));setHtml('issue-steps',steps(x.steps));setHtml('issue-sources',sources(x.sources));set('issue-verified',x.lastVerified);paintGeo('issue',x);}
  function renderCertifications(){var all=data('IOT_CERTIFICATIONS');var s=slug('certification')||all[0]&&all[0].slug;var x=localized('certification',all.find(function(v){return v.slug===s;}));if(!x)return;set('cert-title',x.name);set('cert-crumb-title',x.name);set('cert-code',x.code);set('cert-region',x.region);set('cert-group',x.group||'Certification');set('cert-status',x.status);set('cert-issuer',x.issuer);set('cert-summary',x.summary);set('cert-meaning',x.meaning);setHtml('cert-applies',list(x.appliesTo));setHtml('cert-gaps',list(x.doesNotCover));setHtml('cert-checklist',list(x.checklist));setHtml('cert-sources',sources(x.sources));set('cert-verified',x.lastVerified);setHtml('cert-related',all.filter(function(v){return v.slug!==x.slug&&(v.group===x.group||v.region===x.region);}).slice(0,4).map(function(v){return card(v,path('certification',v.slug),v.code);}).join(''));paintGeo('certification',x);}
  var GEO_DIR={compat:'compatibility',model:'model',issue:'troubleshooting',certification:'certification'};
  var GEO_LABEL={compat:'Compatibility',model:'Model and manual',issue:'Troubleshooting',certification:'Certification'};
  function geoAnswer(type,x){
    if(type==='compat') return (x.verdict?x.verdict+'. ':'')+(x.summary||'');
    if(type==='model') return (x.brand+' '+x.model)+' is a '+(x.category||'device')+' in the IoT Atlas model directory. '+(x.summary||'')+(x.app?' It is paired with the '+x.app+' app.':'');
    if(type==='issue') return (x.symptom||'')+(x.likelyCauses&&x.likelyCauses.length?' Most common cause to check first: '+x.likelyCauses[0]:'');
    return (x.summary||'')+(x.status?' Status: '+x.status+'.':'')+(x.issuer?' Issued or recognised by '+x.issuer+'.':'');
  }
  function geoFacts(type,x){
    if(type==='compat') return [['Subject',x.subject],['Works with',x.target],['Verdict',x.verdict],['Category',x.category],['Last verified',x.lastVerified]];
    if(type==='model') return [['Brand',x.brand],['Model',x.model],['Category',x.category],['Companion app',x.app],['Protocols',(x.protocols||[]).join(' · ')],['Power',x.power],['Last verified',x.lastVerified]];
    if(type==='issue') return [['Applies to',(x.appliesTo||[]).slice(0,3).join(', ')],['Category',x.category],['Escalate when',x.escalation],['Last verified',x.lastVerified]];
    return [['Code',x.code],['Region',x.region],['Type',x.status],['Issued by',x.issuer],['Group',x.group],['Last verified',x.lastVerified]];
  }
  function geoBlock(type,x){
    var title=x.title||x.name||x.question||((x.brand||'')+' '+(x.model||''));
    var url='https://hi-spark.net/'+GEO_DIR[type]+'/'+x.slug+'.html';
    var cite='IoT Atlas. "'+title+'". '+url+' Last verified '+(x.lastVerified||'')+'.';
    var facts=geoFacts(type,x).filter(function(f){return f[1];});
    return '<div class="container"><div class="geo-inner">'+
      '<div class="geo-head"><span class="pill green">'+esc(ui('quick'))+'</span><span class="geo-meta">'+esc((GEO_LABEL_I18N[currentLang()]||GEO_LABEL_I18N.en)[type])+' · '+esc(ui('verified'))+' '+esc(x.lastVerified||'')+'</span></div>'+
      '<p class="geo-answer">'+esc(geoAnswer(type,x))+'</p>'+
      '<div class="geo-facts">'+facts.map(function(f){return '<div class="geo-fact"><small>'+esc(f[0])+'</small><strong>'+esc(f[1])+'</strong></div>';}).join('')+'</div>'+
      '<div class="geo-cite"><div><strong>'+esc(ui('cite'))+'</strong><code>'+esc(cite)+'</code></div><button type="button" class="btn" data-copy-cite>'+esc(ui('copy'))+'</button></div>'+
      '</div></div>';
  }
  var GEO_HOST={compat:'compat-question',model:'model-name',issue:'issue-symptom',certification:'cert-code'};
  function paintGeo(type,x){ if(!document.getElementById(GEO_HOST[type]||''))return; setHtml('geo-block', geoBlock(type,x)); }
  function bindCite(){
    var btn=document.querySelector('[data-copy-cite]');
    if(!btn||btn.getAttribute('data-bound'))return;
    btn.setAttribute('data-bound','1');
    btn.addEventListener('click',function(){
      var node=document.querySelector('.geo-cite code');
      var text=node?node.textContent:'';
      if(typeof navigator==='undefined'||!navigator.clipboard||!navigator.clipboard.writeText)return;
      navigator.clipboard.writeText(text).then(function(){
        btn.textContent=ui('copied');
        setTimeout(function(){btn.textContent=ui('copy');},1600);
      },function(){});
    });
  }
  function renderCertGroups(all){
    var host=document.getElementById('certification-groups');
    if(!host)return false;
    var el=document.getElementById('certification-search');
    var q=(el&&el.value?el.value:'').toLowerCase();
    var items=all.filter(function(x){return !q||JSON.stringify(x).toLowerCase().indexOf(q)>-1;});
    var order=['Radio and telecom','Safety and EMC','Environmental and materials','Security and privacy','Interoperability'];
    var groups={};
    items.forEach(function(x){var g=x.group||'Other';(groups[g]=groups[g]||[]).push(x);});
    var keys=order.filter(function(k){return groups[k];}).concat(Object.keys(groups).filter(function(k){return order.indexOf(k)<0;}));
    host.innerHTML=keys.map(function(k){
      return '<section class="cert-group"><h2 class="group-heading">'+esc(k)+' <span class="group-count">'+groups[k].length+'</span></h2><div class="card-grid">'+groups[k].map(function(x){return card(x,path('certification',x.slug),x.code+' · '+x.region);}).join('')+'</div></section>';
    }).join('');
    set('certification-count', items.length+' of '+all.length+' records'+(q?' matching "'+q+'"':' in '+keys.length+' groups'));
    return true;
  }
  function boot(){
    var compat=data('IOT_COMPATIBILITY'),models=data('IOT_MODELS'),issues=data('IOT_TROUBLESHOOTING'),certs=data('IOT_CERTIFICATIONS');
    renderHub({grid:'compatibility-grid',search:'compatibility-search',count:'compatibility-count',items:compat,type:'compat'});bindSearch('compatibility-search',function(){renderHub({grid:'compatibility-grid',search:'compatibility-search',count:'compatibility-count',items:compat,type:'compat'});});
    renderHub({grid:'model-grid',search:'model-search',count:'model-count',items:models,type:'model',meta:function(x){return x.brand+' · '+x.category;}});bindSearch('model-search',function(){renderHub({grid:'model-grid',search:'model-search',count:'model-count',items:models,type:'model',meta:function(x){return x.brand+' · '+x.category;}});});
    renderHub({grid:'troubleshooting-grid',search:'troubleshooting-search',count:'troubleshooting-count',items:issues,type:'issue'});bindSearch('troubleshooting-search',function(){renderHub({grid:'troubleshooting-grid',search:'troubleshooting-search',count:'troubleshooting-count',items:issues,type:'issue'});});
    if(!renderCertGroups(certs)){renderHub({grid:'certification-grid',search:'certification-search',count:'certification-count',items:certs,type:'certification',meta:function(x){return x.code+' · '+x.region;}});}
    bindSearch('certification-search',function(){if(!renderCertGroups(certs)){renderHub({grid:'certification-grid',search:'certification-search',count:'certification-count',items:certs,type:'certification',meta:function(x){return x.code+' · '+x.region;}});}});
    renderCompatibility();renderModels();renderTroubleshooting();renderCertifications();bindCite();
  }
  /* The language switch mutates the page in place, so repaint the centres. */
  document.addEventListener('iot:langchange',function(){
    var compat=data('IOT_COMPATIBILITY'),models=data('IOT_MODELS'),issues=data('IOT_TROUBLESHOOTING'),certs=data('IOT_CERTIFICATIONS');
    renderHub({grid:'compatibility-grid',search:'compatibility-search',count:'compatibility-count',items:compat,type:'compat'});
    renderHub({grid:'model-grid',search:'model-search',count:'model-count',items:models,type:'model',meta:function(x){return x.brand+' · '+x.category;}});
    renderHub({grid:'troubleshooting-grid',search:'troubleshooting-search',count:'troubleshooting-count',items:issues,type:'issue'});
    if(!renderCertGroups(certs)){renderHub({grid:'certification-grid',search:'certification-search',count:'certification-count',items:certs,type:'certification',meta:function(x){return x.code+' · '+x.region;}});}
    renderCompatibility();renderModels();renderTroubleshooting();renderCertifications();bindCite();
  });
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',boot);else boot();
})();
