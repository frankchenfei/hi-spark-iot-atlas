/* IoT Atlas - cloud world map (self-contained, no external deps) */
(function(){
  // ---- coarse land mask: 60 cols x 30 rows, equirectangular ----
  function row(spec){var a=new Array(60).fill(0);spec.forEach(function(p){for(var i=p[0];i<=p[1];i++)a[i]=1;});return a;}
  var MASK=[
    row([]),
    row([[10,18],[21,26],[28,28],[43,46]]),
    row([[8,19],[21,27],[40,50]]),
    row([[2,7],[8,20],[22,26],[28,31],[32,57]]),
    row([[2,7],[8,21],[23,26],[28,31],[32,59]]),
    row([[2,6],[7,20],[26,28],[29,31],[32,59]]),
    row([[4,20],[26,28],[29,33],[34,59]]),
    row([[5,19],[26,34],[35,44],[44,53],[53,55]]),
    row([[5,19],[26,33],[33,36],[36,39],[38,41],[42,53]]),
    row([[6,18],[26,34],[34,38],[38,42],[42,52],[53,53]]),
    row([[6,13],[14,16],[26,37],[36,39],[39,42],[42,51]]),
    row([[6,12],[15,17],[26,37],[36,39],[39,42],[44,48],[49,50]]),
    row([[8,13],[16,18],[26,36],[36,38],[40,42],[44,48],[49,51]]),
    row([[11,14],[16,19],[26,35],[36,38],[42,42],[45,47],[49,51]]),
    row([[12,16],[17,21],[29,36],[36,37],[44,46],[47,49],[52,54]]),
    row([[12,15],[16,22],[29,36],[36,37],[44,46],[47,49],[49,49],[52,55]]),
    row([[12,15],[16,23],[29,33],[33,36],[45,48],[49,49],[52,55],[50,55]]),
    row([[12,15],[16,23],[29,33],[34,35],[37,37],[48,56]]),
    row([[13,16],[16,22],[29,33],[34,35],[37,37],[48,57]]),
    row([[13,17],[17,20],[29,34],[48,57]]),
    row([[13,17],[29,33],[49,57],[58,59]]),
    row([[13,16],[58,59]]),
    row([[13,16],[58,59]]),
    row([[13,15]]),
    row([]),
    row([[17,20],[40,55]]),
    row([[0,59]]),
    row([[0,59]]),
    row([[6,54]]),
    row([[16,44]])
  ];

  // ---- cloud platforms: 29 entries, distinct primary locations ----
  var PLATFORMS=[
    {n:"AWS",s:"aws-aws-iot-core",c:"Hyperscaler",lat:47.6,lon:-122.3,city:"Seattle"},
    {n:"Microsoft Azure",s:"microsoft-azure-azure-iot-hub",c:"Hyperscaler",lat:45.5,lon:-121.2,city:"Redmond"},
    {n:"Google Cloud",s:"google-cloud-google-cloud-iot-core",c:"Hyperscaler",lat:37.4,lon:-122.1,city:"Mountain View"},
    {n:"Oracle Cloud",s:"oracle-cloud-oracle-iot",c:"Hyperscaler",lat:30.3,lon:-97.7,city:"Austin"},
    {n:"IBM Cloud",s:"ibm-cloud-ibm-watson-iot-platform",c:"Hyperscaler",lat:41.1,lon:-73.7,city:"Armonk"},
    {n:"Alibaba Cloud",s:"alibaba-cloud-link-iot-platform",c:"Hyperscaler",lat:30.3,lon:120.2,city:"Hangzhou"},
    {n:"Tencent Cloud",s:"tencent-cloud-iot-explorer",c:"Hyperscaler",lat:22.5,lon:114.1,city:"Shenzhen"},
    {n:"Huawei Cloud",s:"huawei-cloud-iot-device-access",c:"Hyperscaler",lat:26.6,lon:106.7,city:"Guiyang"},
    {n:"Volcano Engine",s:"volcano-engine-iot-platform",c:"Hyperscaler",lat:39.9,lon:116.4,city:"Beijing"},
    {n:"DigitalOcean",s:"digitalocean-managed-iot-broker",c:"Cloud host",lat:40.7,lon:-74.0,city:"New York"},
    {n:"Vultr",s:"vultr-self-managed-mqtt",c:"Cloud host",lat:26.7,lon:-80.1,city:"West Palm Beach"},
    {n:"Akamai / Linode",s:"akamai-linode-linode-mqtt-stack",c:"Cloud host",lat:42.4,lon:-71.1,city:"Cambridge MA"},
    {n:"OVHcloud",s:"ovhcloud-iot-platform",c:"Cloud host",lat:50.7,lon:3.2,city:"Roubaix"},
    {n:"Hetzner",s:"hetzner-self-managed-iot",c:"Cloud host",lat:49.5,lon:11.1,city:"Nuremberg"},
    {n:"Tuya Cloud",s:"tuya-cloud-tuya-iot-platform",c:"IoT platform",lat:30.3,lon:117.5,city:"Hangzhou (CN)"},
    {n:"EMQX",s:"emqx-emqx-cloud",c:"IoT platform",lat:30.3,lon:123.0,city:"Hangzhou (coast)"},
    {n:"Particle",s:"particle-particle-cloud",c:"IoT platform",lat:37.8,lon:-122.4,city:"San Francisco"},
    {n:"Ayla Networks",s:"ayla-networks-ayla-iot-platform",c:"IoT platform",lat:37.3,lon:-121.9,city:"Santa Clara"},
    {n:"Losant",s:"losant-losant-enterprise-iot",c:"IoT platform",lat:39.1,lon:-84.5,city:"Cincinnati"},
    {n:"Blynk",s:"blynk-blynk-iot",c:"IoT platform",lat:37.9,lon:-122.3,city:"Berkeley"},
    {n:"ThingWorx",s:"thingworx-thingworx-iiot",c:"Industrial",lat:42.4,lon:-71.0,city:"Boston"},
    {n:"Siemens Insights Hub",s:"siemens-insights-hub-mindsphere",c:"Industrial",lat:48.1,lon:11.6,city:"Munich"},
    {n:"SAP",s:"sap-sap-leonardo-iot",c:"Industrial",lat:49.3,lon:8.6,city:"Walldorf"},
    {n:"Ubidots",s:"ubidots-ubidots-iot",c:"IoT platform",lat:6.2,lon:-75.6,city:"Medellin"},
    {n:"Datacake",s:"datacake-datacake",c:"IoT platform",lat:51.5,lon:7.5,city:"Dortmund"},
    {n:"Arduino Cloud",s:"arduino-cloud-arduino-iot-cloud",c:"IoT platform",lat:45.1,lon:7.7,city:"Turin"},
    {n:"HiveMQ",s:"hivemq-hivemq-cloud",c:"IoT platform",lat:48.5,lon:12.2,city:"Landshut"},
    {n:"Cloudflare",s:"cloudflare-cloudflare-iot",c:"Edge network",lat:37.8,lon:-122.5,city:"San Francisco"},
    {n:"Scaleway",s:"scaleway-scaleway-iot-hub",c:"Cloud host",lat:48.9,lon:2.4,city:"Paris"}
  ];

  // ---- hyperscaler region hubs: shows global footprint ----
  var HUBS=[
    [47.6,-122.3],[37.8,-122.4],[40.7,-74.0],[30.3,-97.7],[45.5,-121.2],
    [51.5,-0.1],[50.1,8.7],[48.9,2.4],[52.5,13.4],[59.3,18.1],
    [1.35,103.8],[3.1,101.7],[22.3,114.2],[35.7,139.7],[37.6,127.0],
    [19.1,72.9],[12.9,77.6],[-33.9,151.2],[-36.8,174.8],
    [-23.5,-46.6],[-34.6,-58.4],[19.4,-99.1],[25.2,55.3],[-26.2,28.0],
    [30.0,31.2],[41.0,29.0],[55.8,37.6],[1.3,103.9],[-37.8,144.9],
    [53.3,-6.3],[60.2,24.9],[59.3,18.1],[43.7,-79.4],[49.3,-123.1]
  ];

  function slugFor(p){
      var clouds=window.IOT_CLOUDS||[];
      var want=String(p.n).toLowerCase();
      var hit=clouds.filter(function(c){
        var prov=String(c.provider||'').toLowerCase();
        var nm=String(c.name||'').toLowerCase();
        return prov===want||nm===want||prov.indexOf(want)>=0||want.indexOf(prov)>=0||(c.aliases||[]).some(function(a){return String(a).toLowerCase()===want;});
      })[0];
      return hit?hit.slug:p.s;
    }
  function project(lat,lon,W,H){
    return [ (lon+180)/360*W, (90-lat)/180*H ];
  }

  function render(){
    var host=document.querySelector("#cloud-map");
    if(!host) return;
    var W=1200,H=600,cell=20;
    var svg=[];
    svg.push('<svg class="world-map" viewBox="0 0 '+W+' '+H+'" role="img" aria-label="World map of global IoT cloud platform locations" preserveAspectRatio="xMidYMid meet">');
    svg.push('<defs>');
    svg.push('<linearGradient id="mapArc" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stop-color="#f3a712" stop-opacity=".95"/><stop offset="100%" stop-color="#0c7475" stop-opacity=".25"/></linearGradient>');
    svg.push('<radialGradient id="mapGlow"><stop offset="0%" stop-color="#f3a712" stop-opacity=".55"/><stop offset="100%" stop-color="#f3a712" stop-opacity="0"/></radialGradient>');
    svg.push('</defs>');
    // graticule
    for(var gy=0;gy<=H;gy+=100){ svg.push('<line x1="0" y1="'+gy+'" x2="'+W+'" y2="'+gy+'" stroke="#e6eef1" stroke-width="1"/>'); }
    for(var gx=0;gx<=W;gx+=100){ svg.push('<line x1="'+gx+'" y1="0" x2="'+gx+'" y2="'+H+'" stroke="#e6eef1" stroke-width="1"/>'); }
    // land dots
    for(var r=0;r<MASK.length;r++){
      for(var c=0;c<60;c++){
        if(!MASK[r][c]) continue;
        var cx=c*cell+cell/2, cy=r*cell+cell/2;
        svg.push('<circle class="land-dot" cx="'+cx.toFixed(1)+'" cy="'+cy.toFixed(1)+'" r="3.4"/>');
      }
    }
    // region hubs
    HUBS.forEach(function(h){
      var p=project(h[0],h[1],W,H);
      svg.push('<circle class="hub-dot" cx="'+p[0].toFixed(1)+'" cy="'+p[1].toFixed(1)+'" r="3"/>');
    });
    // arcs from an anchor set to show interconnection
    var anchors=[[47.6,-122.3],[50.1,8.7],[1.35,103.8],[22.3,114.2],[-23.5,-46.6],[-33.9,151.2],[30.0,31.2],[41.0,29.0]];
    var arcs=[[0,1],[0,2],[1,6],[2,3],[2,5],[3,4],[6,4],[1,7],[0,4]];
    arcs.forEach(function(a){
      var p1=project(anchors[a[0]][0],anchors[a[0]][1],W,H);
      var p2=project(anchors[a[1]][0],anchors[a[1]][1],W,H);
      var mx=(p1[0]+p2[0])/2, my=(p1[1]+p2[1])/2 - Math.abs(p2[0]-p1[0])*0.22 - 20;
      svg.push('<path class="map-arc" d="M'+p1[0].toFixed(1)+' '+p1[1].toFixed(1)+' Q'+mx.toFixed(1)+' '+my.toFixed(1)+' '+p2[0].toFixed(1)+' '+p2[1].toFixed(1)+'" fill="none"/>');
    });
    // platform markers
    PLATFORMS.forEach(function(p,i){
      var pt=project(p.lat,p.lon,W,H);
      svg.push('<g class="map-marker" data-i="'+i+'" data-cat="'+p.c+'" transform="translate('+pt[0].toFixed(1)+','+pt[1].toFixed(1)+')">'
        +'<circle class="mk-halo" r="12"/>'
        +'<circle class="mk-dot" r="5.2"/>'
        +'<text class="mk-label" x="10" y="4">'+p.n+'</text>'
        +'</g>');
    });
    svg.push('</svg>');
    host.innerHTML=svg.join("");

    // ---- interaction ----
    var markers=[].slice.call(host.querySelectorAll(".map-marker"));
    var readout=document.querySelector("#cloud-map-readout");
    function clear(){ markers.forEach(function(m){m.classList.remove("active");}); }
    function activate(i){
      clear();
      var m=markers[i]; if(!m) return;
      m.classList.add("active");
      var p=PLATFORMS[i];
      if(readout){
        readout.innerHTML='<strong>'+p.n+'</strong><span>'+p.city+'</span><span class="pill teal">'+p.c+'</span>';
      }
    }
    markers.forEach(function(m){
      var i=Number(m.getAttribute("data-i"));
      m.addEventListener("mouseenter",function(){activate(i);});
      m.addEventListener("click",function(){activate(i);var s=slugFor(PLATFORMS[i]);if(s)location.href=(window.IOT_SITE_BASE||"")+"cloud/"+encodeURIComponent(s)+".html";});
    });
    host.addEventListener("mouseleave",function(){ clear(); if(readout) readout.innerHTML='<strong>Hover a platform</strong><span>29 platforms plotted</span>'; });
    activate(0);

    // legend chips filter markers by category
    var legend=document.querySelector("#cloud-map-legend");
    if(legend){
      var cats=[]; PLATFORMS.forEach(function(p){ if(cats.indexOf(p.c)<0) cats.push(p.c); });
      legend.innerHTML=cats.map(function(c){
        var n=PLATFORMS.filter(function(p){return p.c===c;}).length;
        return '<button type="button" class="category-tab active" data-cat="'+c+'">'+c+' <small>'+n+'</small></button>';
      }).join("");
      legend.querySelectorAll("[data-cat]").forEach(function(b){
        b.addEventListener("click",function(){
          b.classList.toggle("active");
          var on={};
          legend.querySelectorAll(".category-tab.active").forEach(function(o){on[o.getAttribute("data-cat")]=1;});
          markers.forEach(function(m){
            var vis=!!on[m.getAttribute("data-cat")];
            m.style.display=vis?"":"none";
          });
        });
      });
    }

    var stats=document.querySelector("#cloud-map-stats");
    if(stats){
      var catN=[]; PLATFORMS.forEach(function(p){ if(catN.indexOf(p.c)<0) catN.push(p.c); });
      stats.innerHTML='<div class="stat-card"><strong>'+PLATFORMS.length+'</strong><span>Platforms plotted</span></div>'
        +'<div class="stat-card"><strong>'+HUBS.length+'</strong><span>Region hubs</span></div>'
        +'<div class="stat-card"><strong>'+catN.length+'</strong><span>Platform types</span></div>'
        +'<div class="stat-card"><strong>6</strong><span>Continents</span></div>';
    }
  }

  document.addEventListener("DOMContentLoaded",render);
})();
