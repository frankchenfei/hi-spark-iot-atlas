(function(){
  const all=window.IOT_BRANDS||[],map=window.IOT_LOGO_MAP||{brands:{}};
  const brands=all.filter(x=>x.type==='amazon-iot-brand');
  const esc=v=>String(v??"").replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;","\"":"&quot;","'":"&#39;"}[c]));
  const qs=v=>encodeURIComponent(v);
  function card(b){const m=map.brands[b.slug]||{};return `<a class="brand-directory-card amazon-brand-card" href="${window.IOT_SITE_BASE||''}brand/${qs(b.slug)}.html" data-search="${esc([b.name,b.app,b.hq,b.categories.join(' '),b.protocols.join(' '),b.notes].join(' ').toLowerCase())}"><span class="brand-logo-wrap"><img class="brand-logo-svg" loading="lazy" alt="" src="${window.IOT_SITE_BASE||''}assets/logos/${m.file||('monogram-'+b.slug+'.svg')}"></span><div><strong>${esc(b.name)}</strong><small>${esc(b.app||'No app listed')}</small><span>${esc(b.categories.join(' · '))}</span><span>${esc(b.protocols.join(' · '))}</span></div><span class="pill ${b.priority==='P0'?'teal':'blue'}">${esc(b.priority)}</span></a>`;}
  document.addEventListener('DOMContentLoaded',function(){const grid=document.getElementById('amazon-brand-directory');if(!grid)return;grid.innerHTML=brands.map(card).join('');document.getElementById('amazon-brand-count').textContent=brands.length;const input=document.querySelector('#amazon-brand-search input');if(input){const run=()=>{const q=input.value.toLowerCase().trim();grid.querySelectorAll('[data-search]').forEach(el=>el.style.display=el.dataset.search.includes(q)?'':'none')};input.addEventListener('input',run);run();}});
})();
