/* IoT Atlas - category hub.
   Turns each category page into a real aggregation of every content source
   (brands, apps, products, protocols, comparisons, guides, cloud platforms)
   instead of filtering a 12-row product list. Empty sections are hidden. */
(function(){
  var esc=function(v){return String(v==null?"":v).replace(/[&<>"']/g,function(c){return {"&":"&amp;","<":"&lt;",">":"&gt;","\"":"&quot;","'":"&#39;"}[c];});};
  var qs=function(v){return encodeURIComponent(v);};

  var CATS=[
{slug:"security-cameras",icon:"\u25c9",names:{en:"Security Cameras",es:"C\u00e1maras de seguridad",fr:"Cam\u00e9ras de s\u00e9curit\u00e9"},
 descriptions:{en:"Wi-Fi, 4G, PoE, battery and solar cameras for homes, farms and businesses.",es:"C\u00e1maras Wi-Fi, 4G, PoE, bater\u00eda y solar para hogares, granjas y empresas.",fr:"Cam\u00e9ras Wi-Fi, 4G, PoE, batterie et solaire pour maisons, fermes et entreprises."},
 brands:["camera","nvr-dvr"],apps:["Security"],amazon:["Security Cameras"],compare:["security","camera"],
 protocols:["Wi-Fi","4G LTE","PoE","ONVIF","RTSP"]},
{slug:"video-doorbells",icon:"\u25c8",names:{en:"Video Doorbells",es:"Timbre con v\u00eddeo",fr:"Sonnette vid\u00e9o"},
 descriptions:{en:"Wired and battery doorbells with app alerts, local or cloud recording.",es:"Timbres con cable y bater\u00eda con alertas, grabaci\u00f3n local o en la nube.",fr:"Sonettes filaires et sur batterie avec alertes et enregistrement."},
 brands:["doorbell"],apps:["Security"],amazon:["Video Doorbells"],compare:["doorbell","security"],
 protocols:["Wi-Fi","4G LTE","BLE"]},
{slug:"smart-locks",icon:"\u26bf",names:{en:"Smart Locks",es:"Cerraduras inteligentes",fr:"Serrures connect\u00e9es"},
 descriptions:{en:"Keyless entry, retrofit locks, keypads and Matter-compatible deadbolts.",es:"Acceso sin llave, cerraduras retrofit, teclados y cerrojos compatibles con Matter.",fr:"Acc\u00e8s sans cl\u00e9, serrures retrofit, claviers et verrous compatibles Matter."},
 brands:["locks"],apps:["Smart Locks"],amazon:["Smart Locks"],compare:["lock","device"],
 protocols:["BLE","Matter","Thread","Zigbee","Wi-Fi"]},
{slug:"access-control",icon:"\u26a1",names:{en:"Access Control & Intercom",es:"Control de acceso y portero",fr:"Contr\u00f4le d'acc\u00e8s et interphone"},
 descriptions:{en:"Door entry, building intercom, biometric readers and cloud access platforms.",es:"Control de puertas, portero de edificio, lectores biom\u00e9tricos y acceso en la nube.",fr:"Contr\u00f4le d'acc\u00e8s, interphonie, lecteurs biom\u00e9triques et plateformes cloud."},
 brands:["locks","doorbell","cpe"],apps:["Access Control"],amazon:[],compare:["security","privacy"],
 protocols:["Ethernet","PoE","Wi-Fi","BLE","ONVIF"]},
{slug:"trail-cameras",icon:"\u25d0",names:{en:"Trail & Hunting Cameras",es:"C\u00e1maras de caza",fr:"Cam\u00e9ras de chasse"},
 descriptions:{en:"Cellular and Wi-Fi trail cameras for wildlife, hunting and remote property monitoring.",es:"C\u00e1maras celulares y Wi-Fi para fauna, caza y vigilancia remota.",fr:"Cam\u00e9ras cellulaires et Wi-Fi pour faune, chasse et surveillance \u00e0 distance."},
 brands:["camera","gps-vehicle"],apps:["Trail Cameras"],amazon:[],compare:["camera","connectivity"],
 protocols:["LTE","Wi-Fi","BLE","GNSS"]},
{slug:"smart-lighting",icon:"\u25d5",names:{en:"Smart Lighting & LED",es:"Iluminaci\u00f3n inteligente y LED",fr:"\u00c9clairage intelligent et LED"},
 descriptions:{en:"Bulbs, strips, string lights, panels and commercial lighting control.",es:"Bombillas, tiras, guirnaldas, paneles y control de iluminaci\u00f3n comercial.",fr:"Ampoules, rubans, guirlandes, panneaux et \u00e9clairage professionnel."},
 brands:["lighting"],apps:["Lighting"],amazon:["Smart Lighting"],compare:["lighting"],
 protocols:["Wi-Fi","BLE","Zigbee","Matter","DALI-2","KNX"]},
{slug:"smart-plugs",icon:"\u2317",names:{en:"Smart Plugs & Electrical",es:"Enchufes y el\u00e9ctrico",fr:"Prises et \u00e9lectrique"},
 descriptions:{en:"Plugs, relays, switches, energy monitoring and DIN-rail automation.",es:"Enchufes, rel\u00e9s, interruptores, medici\u00f3n de energ\u00eda y automatizaci\u00f3n.",fr:"Prises, relais, interrupteurs, mesure d'\u00e9nergie et automatisation."},
 brands:["electrical","switches"],apps:["Electrical"],amazon:["Smart Plugs & Switches"],compare:["smart-home","device"],
 protocols:["Wi-Fi","BLE","Zigbee","Matter","Z-Wave"]},
{slug:"smart-home-hubs",icon:"\u25a3",names:{en:"Smart Home Hubs & Controllers",es:"Hubs y controladores",fr:"Hubs et contr\u00f4leurs"},
 descriptions:{en:"Border routers, Matter controllers, bridges and multi-protocol hubs.",es:"Border routers, controladores Matter, puentes y hubs multiprotocolo.",fr:"Routeurs fronti\u00e8re, contr\u00f4leurs Matter, ponts et hubs multiprotocoles."},
 brands:["smart-home","protocols"],apps:["Smart Home"],amazon:["Smart Speakers & Hubs"],compare:["matter","interoperability"],
 protocols:["Matter","Thread","Zigbee","Z-Wave","Wi-Fi","Ethernet"]},
{slug:"audio-headphones",icon:"\u266b",names:{en:"Audio & Headphones",es:"Audio y auriculares",fr:"Audio et casques"},
 descriptions:{en:"Earbuds, headphones, soundbars and multiroom speakers with companion apps.",es:"Auriculares, cascos, barras de sonido y altavoces multiroom con app.",fr:"\u00c9couteurs, casques, barres de son et enceintes multiroom avec application."},
 brands:["audio"],apps:["Audio & Headphones"],amazon:[],compare:["app","ecosystem"],
 protocols:["BLE","Wi-Fi","AirPlay","Spotify Connect"]},
{slug:"projectors",icon:"\u25b6",names:{en:"Smart Projectors",es:"Proyectores inteligentes",fr:"Projecteurs intelligents"},
 descriptions:{en:"Portable, laser and ultra-short-throw projectors with streaming and app control.",es:"Proyectores port\u00e1tiles, l\u00e1ser y de tiro ultracorto con streaming y app.",fr:"Projecteurs portables, laser et ultra-courte distance avec streaming."},
 brands:[],apps:["Projectors"],amazon:[],compare:["device","app"],
 protocols:["Wi-Fi","BLE","HDMI","Chromecast"]},
{slug:"label-printers",icon:"\u25a4",names:{en:"Label & Thermal Printers",es:"Impresoras de etiquetas",fr:"Imprimantes d'\u00e9tiquettes"},
 descriptions:{en:"Bluetooth and Wi-Fi label printers for labelling, shipping and barcodes.",es:"Impresoras de etiquetas Bluetooth y Wi-Fi para etiquetado y env\u00edos.",fr:"Imprimantes d'\u00e9tiquettes Bluetooth et Wi-Fi pour \u00e9tiquetage et exp\u00e9dition."},
 brands:[],apps:["Label Printers"],amazon:[],compare:["app","device"],
 protocols:["BLE","Wi-Fi","USB"]},
{slug:"smart-watches",icon:"\u231a",names:{en:"Smart Watches & Wearables",es:"Relojes y wearables",fr:"Montres et objets connect\u00e9s"},
 descriptions:{en:"Smart watches, rings, bands, patches and the health data they collect.",es:"Relojes, anillos, pulseras, parches y sus datos de salud.",fr:"Montres, bagues, bracelets, patchs et leurs donn\u00e9es de sant\u00e9."},
 brands:["wearables","glasses"],apps:["Wearables"],amazon:["Wearables & Smart Rings"],compare:["wearables","health"],
 protocols:["BLE","Wi-Fi","LTE","NFC"]},
{slug:"health-devices",icon:"\u2665",names:{en:"Health & Fitness Devices",es:"Dispositivos de salud",fr:"Appareils de sant\u00e9"},
 descriptions:{en:"Scales, blood pressure, pulse oximeters, glucose, ECG, sleep and hearing.",es:"B\u00e1sculas, presi\u00f3n arterial, ox\u00edmetros, glucosa, ECG, sue\u00f1o y audici\u00f3n.",fr:"Balances, tension, oxym\u00e8tres, glyc\u00e9mie, ECG, sommeil et audition."},
 brands:["health","scales","blood-pressure","sleep"],apps:["Health"],amazon:["Health Monitors"],compare:["health","privacy"],
 protocols:["BLE","Wi-Fi","ANT+"]},
{slug:"robot-vacuums",icon:"\u25cc",names:{en:"Robot Vacuums & Cleaning",es:"Robots de limpieza",fr:"Robots aspirateurs"},
 descriptions:{en:"Robot vacuums, mops, pool robots and connected cleaning appliances.",es:"Robots aspiradores, fregonas, limpiafondos y electrodom\u00e9sticos conectados.",fr:"Robots aspirateurs, serpilli\u00e8res, robots de piscine et appareils connect\u00e9s."},
 brands:["robot-vacuum","robots"],apps:["Robot Vacuums"],amazon:["Robot Vacuums"],compare:["device","app"],
 protocols:["Wi-Fi","BLE","Matter","LiDAR","vSLAM"]},
{slug:"gps-trackers",icon:"\u25c6",names:{en:"GPS & Asset Trackers",es:"Rastreadores GPS",fr:"Traqueurs GPS"},
 descriptions:{en:"Pet, vehicle, personal and asset trackers using GNSS, LTE, BLE and UWB.",es:"Rastreadores de mascotas, veh\u00edculos y activos con GNSS, LTE, BLE y UWB.",fr:"Traqueurs d'animaux, v\u00e9hicules et actifs via GNSS, LTE, BLE et UWB."},
 brands:["tracking","gps-vehicle","gps-personal","gps-pet"],apps:["Tracking"],amazon:["Pet & GPS Trackers"],compare:["connectivity","lpwan"],
 protocols:["GNSS","LTE","BLE","UWB","LoRaWAN"]},
{slug:"drones",icon:"\u2708",names:{en:"Drones & Toy Drones",es:"Drones y drones de juguete",fr:"Drones et drones jouets"},
 descriptions:{en:"Camera drones, FPV, agricultural and low-cost toy drones with app control.",es:"Drones con c\u00e1mara, FPV, agr\u00edcolas y drones de juguete con app.",fr:"Drones cam\u00e9ra, FPV, agricoles et drones jouets pilot\u00e9s par application."},
 brands:["drones","drones-consumer"],apps:["Drones"],amazon:["Drones"],compare:["device","connectivity"],
 protocols:["Wi-Fi","OcuSync","Radio","GNSS"]},
{slug:"smart-garden",icon:"\u273f",names:{en:"Smart Garden & Irrigation",es:"Jard\u00edn e riego inteligente",fr:"Jardin et irrigation"},
 descriptions:{en:"Irrigation controllers, robotic mowers, pool robots and plant sensors.",es:"Controladores de riego, cortac\u00e9sped rob\u00f3tico, limpiafondos y sensores.",fr:"Contr\u00f4leurs d'arrosage, tondeuses robot, robots de piscine et capteurs."},
 brands:["smart-garden"],apps:["Smart Garden"],amazon:["Smart Garden & Irrigation"],compare:["device","connectivity"],
 protocols:["Wi-Fi","BLE","Zigbee","GNSS","LoRaWAN"]},
{slug:"home-appliances",icon:"\u25a2",names:{en:"Smart Home Appliances",es:"Electrodom\u00e9sticos inteligentes",fr:"\u00c9lectrom\u00e9nager connect\u00e9"},
 descriptions:{en:"Kitchen appliances, air treatment, water leak detection and connected white goods.",es:"Electrodom\u00e9sticos de cocina, aire, fugas de agua y l\u00ednea blanca.",fr:"Appareils de cuisine, traitement d'air, fuites d'eau et gros \u00e9lectrom\u00e9nager."},
 brands:["appliances","thermostats"],apps:["Health & Home"],amazon:["Smart Kitchen Appliances","Air Quality & Purifiers"],compare:["device","app"],
 protocols:["Wi-Fi","BLE","Matter"]},
{slug:"ai-toys",icon:"\u25c8",names:{en:"AI Toys & Education",es:"Juguetes IA y educaci\u00f3n",fr:"Jouets IA et \u00e9ducation"},
 descriptions:{en:"Coding robots, STEM kits, AI companion toys and child-safe connected devices.",es:"Robots de programaci\u00f3n, kits STEM, juguetes IA y dispositivos infantiles.",fr:"Robots de codage, kits STEM, jouets IA et appareils pour enfants."},
 brands:["ai-toys-category","education"],apps:["AI Toys & Education"],amazon:[],compare:["privacy","app"],
 protocols:["BLE","Wi-Fi"]},
{slug:"iot-sim",icon:"\u25a4",names:{en:"IoT SIM & eSIM",es:"SIM y eSIM para IoT",fr:"SIM et eSIM IoT"},
 descriptions:{en:"Cellular connectivity: SIM, eSIM, roaming, private APN and data plans.",es:"Conectividad celular: SIM, eSIM, roaming, APN privada y planes de datos.",fr:"Connectivit\u00e9 cellulaire : SIM, eSIM, roaming, APN priv\u00e9 et forfaits."},
 brands:["sim-esim","cellular"],apps:[],amazon:[],compare:["cellular","pricing"],
 protocols:["4G LTE","5G","NB-IoT","LTE-M","eSIM"]},
{slug:"routers-hotspots",icon:"\u25b2",names:{en:"Routers, Mesh & Hotspots",es:"Routers, mesh y hotspots",fr:"Routeurs, mesh et hotspots"},
 descriptions:{en:"Mesh Wi-Fi, 4G/5G routers, travel routers and portable hotspots.",es:"Wi-Fi mesh, routers 4G/5G, routers de viaje y hotspots port\u00e1tiles.",fr:"Wi-Fi mesh, routeurs 4G/5G, routeurs nomades et hotspots."},
 brands:["networking","cpe","hotspots","industrial-router"],apps:[],amazon:["Networking & Mesh Wi-Fi"],compare:["connectivity","wifi"],
 protocols:["Wi-Fi 6","Wi-Fi 6E","Wi-Fi 7","5G","Ethernet"]},
{slug:"alarms-sensors",icon:"\u25b3",names:{en:"Alarms & Sensors",es:"Alarmas y sensores",fr:"Alarmes et capteurs"},
 descriptions:{en:"Alarm panels, motion, door, leak, smoke and environmental sensors.",es:"Paneles de alarma, movimiento, puerta, fuga, humo y sensores ambientales.",fr:"Centrales d'alarme, d\u00e9tecteurs de mouvement, fuite, fum\u00e9e et environnement."},
 brands:["alarm","sensors"],apps:["Security"],amazon:["Alarm Systems"],compare:["security","detection"],
 protocols:["Zigbee","Z-Wave","Matter","Thread","Wi-Fi","LoRaWAN"]},
{slug:"energy-solar",icon:"\u2600",names:{en:"Energy & Solar",es:"Energ\u00eda y solar",fr:"\u00c9nergie et solaire"},
 descriptions:{en:"Home energy monitoring, solar inverters, batteries and portable power stations.",es:"Monitorizaci\u00f3n de energ\u00eda, inversores solares, bater\u00edas y estaciones port\u00e1tiles.",fr:"Suivi \u00e9nerg\u00e9tique, onduleurs solaires, batteries et stations portables."},
 brands:["electrical","industrial"],apps:["Energy & Solar"],amazon:[],compare:["pricing","device"],
 protocols:["Wi-Fi","BLE","Modbus","RS-485","Zigbee"]},
{slug:"pet-tech",icon:"\u25cf",names:{en:"Pet Tech",es:"Tecnolog\u00eda para mascotas",fr:"Technologie pour animaux"},
 descriptions:{en:"Smart feeders, litter boxes, pet cameras, doors and GPS collars.",es:"Comederos, areneros, c\u00e1maras, puertas y collares GPS.",fr:"Distributeurs, liti\u00e8res, cam\u00e9ras, chati\u00e8res et colliers GPS."},
 brands:["tracking","gps-pet","smart-home"],apps:["Pet Tech"],amazon:["Pet & GPS Trackers"],compare:["device","connectivity"],
 protocols:["Wi-Fi","BLE","LTE","GNSS","UWB"]},
{slug:"air-water",icon:"\u25cb",names:{en:"Air & Water Quality",es:"Calidad de aire y agua",fr:"Qualit\u00e9 de l'air et de l'eau"},
 descriptions:{en:"Air quality monitors, purifiers, leak detection and automatic water shutoff.",es:"Monitores de aire, purificadores, detecci\u00f3n de fugas y corte de agua.",fr:"Capteurs d'air, purificateurs, d\u00e9tection de fuite et coupure d'eau."},
 brands:["sensors","smart-home","health"],apps:["Air & Water"],amazon:["Air Quality & Purifiers"],compare:["privacy","device"],
 protocols:["Wi-Fi","BLE","Zigbee","Matter","LoRaWAN"]},
{slug:"infrared-remotes",icon:"\u25f0",names:{en:"Infrared & Remotes",es:"Infrarrojos y mandos",fr:"Infrarouge et t\u00e9l\u00e9commandes"},
 descriptions:{en:"Universal IR blasters, air conditioner controllers, smart remotes and HVAC hubs.",es:"Emisores IR universales, controladores de aire, mandos inteligentes y hubs HVAC.",fr:"\u00c9metteurs IR universels, commandes de climatisation, t\u00e9l\u00e9commandes et hubs CVC."},
 brands:["smart-home","sensors","electrical"],apps:["Infrared & Remotes"],amazon:[],compare:["device","app"],
 protocols:["Wi-Fi","BLE","Zigbee","Matter","Infrared"]},
{slug:"ev-charging",icon:"\u26a1",names:{en:"EV Charging",es:"Carga de VE",fr:"Recharge de VE"},
 descriptions:{en:"Home chargers, load balancing, OCPP networks and charge scheduling.",es:"Cargadores dom\u00e9sticos, balanceo de carga, redes OCPP y programaci\u00f3n.",fr:"Bornes domestiques, \u00e9quilibrage, r\u00e9seaux OCPP et planification."},
 brands:["electrical","industrial"],apps:["EV Charging"],amazon:[],compare:["pricing","device"],
 protocols:["OCPP","Wi-Fi","BLE","LTE","ISO 15118"]},
{slug:"dash-cams",icon:"\u25b6",names:{en:"Dash Cams",es:"C\u00e1maras de salpicadero",fr:"Cam\u00e9ras embarqu\u00e9es"},
 descriptions:{en:"Vehicle dash cameras with parking mode, cloud upload and driver alerts.",es:"C\u00e1maras de coche con modo aparcamiento, nube y alertas.",fr:"Cam\u00e9ras de tableau de bord avec mode parking, cloud et alertes."},
 brands:["camera","gps-vehicle"],apps:["Dash Cams"],amazon:["Dash Cams"],compare:["device","storage"],
 protocols:["Wi-Fi","BLE","GNSS","LTE"]},
{slug:"tv-streaming",icon:"\u25b6",names:{en:"TV & Streaming",es:"TV y streaming",fr:"TV et streaming"},
 descriptions:{en:"TV, set-top box and console remotes, plus casting and media control.",es:"Mandos de TV, decodificadores y consolas, adem\u00e1s de casting.",fr:"T\u00e9l\u00e9commandes TV, box et consoles, plus diffusion et contr\u00f4le m\u00e9dia."},
 brands:["smart-home","ce"],apps:["TV & Streaming"],amazon:[],compare:["app","device"],
 protocols:["Wi-Fi","BLE","IR","Chromecast","AirPlay"]},
{slug:"cloud-iot",icon:"\u2601",names:{en:"Cloud & IoT Platforms",es:"Plataformas cloud e IoT",fr:"Plateformes cloud et IoT"},
 descriptions:{en:"Hyperscalers, IoT platforms, MQTT brokers, edge and device management.",es:"Hyperscalers, plataformas IoT, brokers MQTT, edge y gesti\u00f3n de dispositivos.",fr:"Hyperscalers, plateformes IoT, brokers MQTT, edge et gestion de flottes."},
 brands:["cloud","device-management","edge","modules","server"],apps:[],amazon:[],compare:["cloud","platform"],
 protocols:["MQTT","HTTPS","CoAP","AMQP","LoRaWAN"]}
  ];

  window.IOT_CATEGORY_HUB=CATS;
  function logoFor(slug){var m=((window.IOT_LOGO_MAP||{}).brands||{})[slug];return (m&&m.file)?(window.IOT_SITE_BASE||"")+"assets/logos/"+m.file:null;}
  function initials(s){var p=String(s||"?").split(/\s+/);return (p.length>1?(p[0][0]+p[1][0]):String(s).slice(0,2)).toUpperCase();}
  function local(o){var lang=(new URLSearchParams(location.search)).get("lang")||(function(){try{return localStorage.getItem("iot-lang");}catch(e){return null;}})()||"en";return (o&&(o[lang]||o.en))||"";}

  function pick(cat){
    var brands=(window.IOT_BRANDS||[]).filter(function(b){
      return (b.categories||[]).some(function(t){return cat.brands.indexOf(String(t).toLowerCase())>=0;});
    });
    var apps=(window.IOT_APP_DIRECTORY||[]).filter(function(a){return cat.apps.indexOf(a.category)>=0;});
    var amz=((window.IOT_AMAZON||{}).products||[]).filter(function(p){return cat.amazon.indexOf(p.category)>=0;});
    var comps=(window.IOT_COMPARISONS||[]).filter(function(x){
      return (x.tags||[]).some(function(t){return cat.compare.indexOf(String(t).toLowerCase())>=0;});
    });
    var K=window.IOT_KNOWLEDGE||{protocols:[],guides:[],concepts:[]};
    var protos=K.protocols.filter(function(p){
      var hay=(p.name+" "+p.category+" "+p.use).toLowerCase();
      return cat.protocols.some(function(t){return hay.indexOf(String(t).toLowerCase())>=0;});
    });
    var guides=K.guides.filter(function(g){
      var hay=(g.name+" "+g.summary+" "+(g.audience||"")).toLowerCase();
      return cat.compare.some(function(t){return hay.indexOf(String(t).toLowerCase())>=0;});
    });
    var clouds=(window.IOT_CLOUDS||[]).filter(function(){return cat.slug==="cloud-iot";});
    return {brands:brands,apps:apps,amz:amz,comps:comps,protos:protos,guides:guides,clouds:clouds};
  }

  function brandCard(b){
    var f=logoFor(b.slug);
    var logo=f?('<img class="brand-logo-svg" loading="lazy" alt="" src="'+esc(f)+'">'):('<span class="brand-chip-icon">'+esc(initials(b.name))+'</span>');
    return '<a class="brand-directory-card" href="'+window.IOT_SITE_BASE+'brand/'+qs(b.slug)+'.html">'
      +'<span class="brand-logo-wrap">'+logo+'</span>'
      +'<div><strong>'+esc(b.name)+'</strong><small>'+esc(b.app||b.type||"")+'</small>'
      +'<span>'+esc((b.protocols||[]).slice(0,3).join(" \u00b7 "))+'</span></div></a>';
  }
  function appCard(a){
    return '<a class="app-card" href="'+window.IOT_SITE_BASE+'app/'+qs(a.slug)+'.html">'
      +'<div class="app-card-top"><span class="pill teal">'+esc(a.category)+'</span><span class="pill amber">'+esc(a.segment||"App")+'</span></div>'
      +'<div class="app-card-head"><span class="app-icon">'+esc(a.name.slice(0,2).toUpperCase())+'</span>'
      +'<div><strong>'+esc(a.name)+'</strong><small>'+esc(a.brand)+'</small></div></div>'
      +'<p>'+esc(a.summary)+'</p><span class="text-link">App details \u2192</span></a>';
  }
  function protoCard(p){
    return '<a class="knowledge-card" href="'+window.IOT_SITE_BASE+'protocol/'+qs(p.slug)+'.html">'
      +'<span class="pill teal">Protocol</span><strong>'+esc(p.name)+'</strong>'
      +'<p>'+esc(p.summary)+'</p><small>'+esc(p.category)+'</small><span class="text-link">Open \u2192</span></a>';
  }
  function guideCard(g){
    return '<a class="knowledge-card" href="'+esc(g.href||"knowledge.html")+'">'
      +'<span class="pill teal">Guide</span><strong>'+esc(g.name)+'</strong>'
      +'<p>'+esc(g.summary)+'</p><small>'+esc(g.type||"")+'</small><span class="text-link">Open \u2192</span></a>';
  }
  function compCard(x){
    var tot=(x.scoreA+x.scoreB)||1, pa=Math.round(x.scoreA/tot*100);
    return '<a class="compare-card" href="'+window.IOT_SITE_BASE+'compare/'+qs(x.slug)+'.html">'
      +'<span class="pill blue">'+esc(x.type)+'</span><strong>'+esc(x.title)+'</strong><p>'+esc(x.summary)+'</p>'
      +'<div class="compare-mini"><div class="compare-mini-row"><span>'+esc(x.a)+' '+x.scoreA+'</span><span>'+x.scoreB+' '+esc(x.b)+'</span></div>'
      +'<div class="split-bar"><i class="sa" style="width:'+pa+'%"></i><i class="sb" style="width:'+(100-pa)+'%"></i></div></div>'
      +'<span class="text-link">Open comparison \u2192</span></a>';
  }
  function amzRow(p,i){
    return '<tr><td><span class="rank-badge">'+(i+1)+'</span></td>'
      +'<td><strong>'+esc(p.title)+'</strong><br><small class="bsr-brand">'+esc(p.brand)+'</small></td>'
      +'<td><span class="pill">'+esc(p.protocol)+'</span></td>'
      +'<td>'+p.rating.toFixed(1)+'</td><td><strong>'+esc(p.price)+'</strong></td><td>'+p.score+'</td></tr>';
  }
  function section(title,sub,body,link,linkText){
    return '<section class="section compact"><div class="container">'
      +'<div class="section-head"><div><h2>'+esc(title)+'</h2><p>'+esc(sub)+'</p></div>'
      +(link?'<a class="text-link" href="'+link+'">'+esc(linkText||"View all")+' \u2192</a>':'')+'</div>'
      +body+'</div></section>';
  }
  function grid(inner,cls){return '<div class="'+(cls||"card-grid")+'">'+inner+'</div>';}

  function renderDetail(){
    var host=document.querySelector("#category-body"); if(!host) return;
    var params=new URLSearchParams(location.search);
    var key=(window.IOT_ENTITY_SLUG("category")||"security-cameras").toLowerCase();
    var aliases={wearables:"smart-watches",lighting:"smart-lighting",tracking:"gps-trackers",
      routers:"routers-hotspots",health:"health-devices",security:"security-cameras",
      cameras:"security-cameras",audio:"audio-headphones","smart-home":"smart-home-hubs",
      "cameras-drones":"drones","cctv":"security-cameras"};
    key=aliases[key]||key;
    var cat=CATS.filter(function(c){return c.slug===key;})[0]||CATS[0];
    var d=pick(cat);

    document.querySelector("#category-name").textContent=local(cat.names);
    document.querySelector("#category-summary").textContent=local(cat.descriptions);
    var crumb=document.querySelector("#category-crumb-name"); if(crumb) crumb.textContent=local(cat.names);
    document.title=local(cat.names)+" | IoT Atlas";
    var tags=document.querySelector("#category-tags");
    if(tags) tags.innerHTML=cat.protocols.slice(0,6).map(function(t){return '<span class="pill teal">'+esc(t)+'</span>';}).join("");

    var stats=document.querySelector("#category-stats");
    if(stats){var rows=[[d.brands.length,"Brands indexed"],[d.apps.length,"Apps indexed"],[d.amz.length,"Products ranked"],[d.comps.length,"Comparisons"],[d.protos.length,"Protocols"],[d.guides.length,"Guides"]].filter(function(s){return s[0]>0;});stats.innerHTML=rows.map(function(s){return '<div class="stat-card"><strong>'+s[0]+'</strong><span>'+s[1]+'</span></div>';}).join("");}

    var out=[];
    var total=d.brands.length+d.apps.length+d.amz.length+d.comps.length+d.protos.length+d.guides.length;
    if(!total){
      out.push('<section class="section compact"><div class="container"><div class="panel"><h3>This category is queued for expansion</h3>'
        +'<p>No records are indexed yet. Browse the <a class="text-link" href="'+window.IOT_SITE_BASE+'categories.html">full category list</a> or use '
        +'<a class="text-link" href="'+window.IOT_SITE_BASE+'search.html">global search</a> while this category is being built out.</p></div></div></section>');
    }
    if(d.brands.length) out.push(section("Brands in "+local(cat.names),d.brands.length+" brands with products, apps and protocols in this category.",
      grid(d.brands.slice(0,12).map(brandCard).join(""),"brand-directory-grid"),"brand.html","All 268 brands"));
    if(d.apps.length) out.push(section("Apps you will need","Companion apps for devices in this category, with Google Play and App Store links.",
      grid(d.apps.slice(0,9).map(appCard).join(""),"app-grid"),(window.IOT_SITE_BASE||"")+"apps.html?q="+qs(local(cat.names)),"All "+d.apps.length+" apps"));
    if(d.amz.length) out.push(section("Marketplace picks","Ranked products in this category with editorial IoT scores.",
      '<div class="table-wrap"><table class="data-table"><thead><tr><th>#</th><th>Product</th><th>Protocol</th><th>Rating</th><th>Price</th><th>Score</th></tr></thead><tbody>'
      +d.amz.map(amzRow).join("")+'</tbody></table></div><p class="data-note">Sample marketplace data. Requires a licensed Amazon data source before production.</p>',
      "amazon-best-sellers.html","Amazon ranking page"));
    if(d.protos.length) out.push(section("Protocols used here","What the devices in this category actually speak, and what each protocol is good for.",
      grid(d.protos.slice(0,6).map(protoCard).join(""),"knowledge-grid"),"knowledge.html","Knowledge base"));
    if(d.comps.length) out.push(section("Decisions to make","Structured comparisons that resolve the main trade-offs in this category.",
      grid(d.comps.slice(0,6).map(compCard).join(""),"compare-grid"),"compare.html","All 49 comparisons"));
    if(d.guides.length) out.push(section("Guides & deep dives","Implementation and buying guidance connected to this category.",
      grid(d.guides.slice(0,6).map(guideCard).join(""),"knowledge-grid"),"knowledge.html","Knowledge base"));
    if(d.clouds.length) out.push(section("Platforms to build on","Cloud, IoT and connectivity platforms with deployment guidance.",
      grid(d.clouds.slice(0,12).map(function(c){
        return '<a class="cloud-card" href="'+window.IOT_SITE_BASE+'cloud/'+qs(c.slug)+'.html"><div class="cloud-card-top"><span class="provider-logo">'+esc(initials(c.name))+'</span><span class="pill teal">'+esc(c.type)+'</span></div><strong>'+esc(c.name)+'</strong><p>'+esc(c.notes)+'</p><span class="text-link">Open platform guide \u2192</span></a>';
      }).join(""),"cloud-directory-grid"),"cloud.html","All 29 platforms"));

    // sibling categories so thin pages still offer a way forward
    var sibs=CATS.filter(function(c){return c.slug!==cat.slug;}).filter(function(c){
      return c.protocols.some(function(p){return cat.protocols.indexOf(p)>=0;});
    }).slice(0,6);
    if(sibs.length) out.push(section("Related categories","Adjacent categories that share protocols or buying decisions.",
      grid(sibs.map(function(c){var dd=pick(c);
        return '<a class="card category-card" href="'+window.IOT_SITE_BASE+'category/'+qs(c.slug)+'.html">'
        +'<span class="category-icon">'+c.icon+'</span><h3>'+esc(local(c.names))+'</h3>'
        +'<p>'+esc(local(c.descriptions))+'</p>'
        +'<div class="card-meta"><span>'+dd.brands.length+' brands</span><span>'+dd.apps.length+' apps</span></div></a>';
      }).join(""))));

    host.innerHTML=out.join("");
  }

  function renderDirectory(){
    var gridEl=document.querySelector("#category-directory"); if(!gridEl) return;
    var q=new URLSearchParams(location.search).get("q")||"";
    gridEl.innerHTML=CATS.map(function(c){
      var d=pick(c);
      return '<a class="card category-card" href="'+window.IOT_SITE_BASE+'category/'+qs(c.slug)+'.html" data-search="'+esc((local(c.names)+" "+local(c.descriptions)+" "+c.protocols.join(" ")).toLowerCase())+'">'
        +'<span class="category-icon">'+c.icon+'</span><h3>'+esc(local(c.names))+'</h3>'
        +'<p>'+esc(local(c.descriptions))+'</p>'
        +'<div class="card-meta"><span>'+d.brands.length+' brands</span><span>'+d.apps.length+' apps</span><span>'+d.amz.length+' products</span></div>'
        +'<div class="tag-row">'+c.protocols.slice(0,4).map(function(t){return '<span class="pill">'+esc(t)+'</span>';}).join("")+'</div></a>';
    }).join("");
    var input=document.querySelector("#category-search input");
    if(input&&input.value===""&&q) input.value=q;
    if(input){
      var run=function(){var s=input.value.toLowerCase().trim();
        gridEl.querySelectorAll("[data-search]").forEach(function(el){el.style.display=el.getAttribute("data-search").indexOf(s)>=0?"":"none";});};
      input.addEventListener("input",run); run();
    }
  }

  window.IOT_RENDER_CATEGORY=renderDetail;
  window.IOT_RENDER_CATEGORY_DIRECTORY=renderDirectory;
})();
