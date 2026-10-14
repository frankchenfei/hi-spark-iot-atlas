/* Knowledge base extension: printing and audio, matching the new app categories. */
(function(){
  var K=window.IOT_KNOWLEDGE; if(!K) return;
  var P=function(slug,name,category,summary,range,power,topology,use,source_name,source){
    return {slug:slug,name:name,category:category,summary:summary,range:range,power:power,topology:topology,use:use,source_name:source_name,source:source,status:"source-linked"};};
  var S=function(slug,name,region,type,summary,applies_to,source){
    return {slug:slug,name:name,region:region,type:type,summary:summary,applies_to:applies_to,source:source,status:"source-linked"};};
  var G=function(slug,name,type,summary,audience,steps,source){
    return {slug:slug,name:name,type:type,summary:summary,audience:audience,steps:steps,href:"knowledge.html",source:source||"",status:"source-linked"};};
  var C=function(slug,name,category,summary,why,source){
    return {slug:slug,name:name,category:category,summary:summary,why:why,source:source||"",status:"editorial"};};

  K.protocols=K.protocols.concat([
    P("airprint","AirPrint","Printing / IP","Apple driverless printing over the local network.","Local network","Mains device","Peer to peer / mDNS","iPhone and iPad printing to network printers","Apple","https://support.apple.com/en-us/HT201311"),
    P("ipp","IPP","Printing / IP","Internet Printing Protocol, the standard behind driverless and cloud printing.","Network dependent","Mains device","Client / server","Network and cloud print queues","PWG","https://www.pwg.org/ipp/"),
    P("escpos","ESC/POS","Printing / receipt","Epson command set that became the de facto standard for receipt and label printers.","Wired or BLE","Mains or battery","Point to point","Receipt printers, kitchen printers, POS","Epson","https://www.epson.com/"),
    P("zpl","ZPL","Printing / label","Zebra Programming Language used to compose barcode and RFID labels.","Network dependent","Mains device","Client / server","Logistics, warehouse and retail labels","Zebra","https://www.zebra.com/"),
    P("bluetooth-a2dp","Bluetooth A2DP","Audio / Bluetooth","Profile that carries stereo audio to headphones and speakers.","About 10 m","Low","Point to point","Headphones, earbuds, speakers","Bluetooth SIG","https://www.bluetooth.com/"),
    P("le-audio","Bluetooth LE Audio","Audio / Bluetooth","Next-generation Bluetooth audio with LC3 codec, multi-stream and broadcast.","About 10 m","Very low","Point to point / broadcast","Earbuds, hearing aids, Auracast venues","Bluetooth SIG","https://www.bluetooth.com/"),
    P("airplay-2","AirPlay 2","Audio / streaming","Apple streaming protocol with multiroom synchronisation.","Local network","Mains device","Peer to peer","Multiroom audio, TVs, speakers","Apple","https://www.apple.com/airplay/"),
    P("google-cast","Google Cast","Audio / streaming","Google streaming protocol for casting audio and video to devices.","Local network","Mains device","Peer to peer","Speakers, displays, TVs","Google","https://cast.google.com/"),
    P("spotify-connect","Spotify Connect","Audio / streaming","Streams Spotify directly to a device without routing through the phone.","Local network","Mains device","Cloud to device","Speakers, AV receivers, streamers","Spotify","https://www.spotify.com/connect/"),
    P("dlna-upnp","DLNA / UPnP","Audio / streaming","Discovery and streaming standard for sharing media on a local network.","Local network","Mains device","Peer to peer","Media servers, streamers, TVs","DLNA","https://www.dlna.org/")
  ]);

  K.standards=K.standards.concat([
    S("mopria","Mopria","Global","Printing","Certification that a printer works with the Android and Windows driverless print stack.","Printers and MFPs","https://mopria.org/"),
    S("wifi-certified-audio","Wi-Fi CERTIFIED Audio","Global","Audio","Certification programme for multiroom audio and streaming interoperability.","Wi-Fi speakers and streamers","https://www.wi-fi.org/"),
    S("bluetooth-profile-qualification","Bluetooth profile qualification","Global","Audio","Mandatory qualification of the specific Bluetooth profiles a product implements.","Bluetooth audio products","https://www.bluetooth.com/develop-with-bluetooth/qualification-listing/"),
    S("energy-star-imaging","ENERGY STAR imaging equipment","United States","Efficiency","Efficiency criteria for printers, copiers and multifunction devices.","Printers sold in the US","https://www.energystar.gov/")
  ]);

  K.guides=K.guides.concat([
    G("label-material-selection","Choosing label material and adhesive","Buying guide","Match face stock and adhesive to the surface, temperature and lifetime the label needs.","Buyers and installers",["Define the surface: plastic, metal, glass, fabric or cable","Decide the lifetime: days, a year, or permanent","Choose direct thermal for short life, thermal transfer for long life","Choose acrylic adhesive for cold and damp, rubber for dry indoor","Test one label for a month before committing"]),
    G("printer-network-troubleshooting","Network printer troubleshooting","Troubleshooting guide","Work through why a network printer drops off or will not print.","Home and small office users",["Reserve a fixed IP for the printer","Check whether the printer sleeps and drops Wi-Fi","Confirm the phone and printer are on the same subnet and band","Remove and re-add the printer inside the manufacturer app","Check the print service plugin is installed and enabled"]),
    G("multiroom-audio-planning","Planning multiroom audio","Implementation guide","Design a whole-home audio system that stays useful as it grows.","Home installers",["Decide whether existing speakers stay in use","Check which streaming protocols each candidate supports","Confirm synchronisation quality across rooms","Plan wired backhaul for the main rooms","Avoid committing every room to one vendor"]),
    G("audio-codec-selection","Choosing a Bluetooth audio codec","Buying guide","Decide which audio codec actually matters for your use.","Audio buyers",["Check both the phone and the headphones support the codec","Prefer a stable link over the highest bitrate","Test in the environment you will actually use","Note that a higher codec falls back under congestion","Judge the result by listening, not by the spec sheet"]),
    G("thermal-print-longevity","Making thermal prints last","Engineering guide","Keep direct thermal output readable for the lifetime the label needs.","Product and operations teams",["Choose direct thermal only for short-lifetime labels","Switch to thermal transfer for UV or abrasion exposure","Select a synthetic stock for outdoor or chemical exposure","Store printed labels away from heat and sunlight","Verify adhesives separately from the print surface"])
  ]);

  K.concepts=K.concepts.concat([
    C("direct-thermal-vs-transfer","Direct thermal vs thermal transfer","Printing","Direct thermal prints by heating the paper; thermal transfer melts ribbon onto the label.","Explains why some labels fade to blank in sunlight and others last years."),
    C("label-adhesive","Label adhesive type","Printing","Acrylic, rubber and hot-melt adhesives behave very differently on cold, damp or oily surfaces.","Adhesive failure is the most common reason a label falls off long before the print fades."),
    C("dpi-print-resolution","Print resolution (DPI)","Printing","Dots per inch of the print head, which sets the smallest readable barcode and text.","A 203 dpi head cannot print the same barcode density as a 300 dpi head, regardless of the app."),
    C("codec-latency","Audio codec latency","Audio","The delay a codec adds between the source and the speaker.","Matters for gaming and video, where lip-sync errors above roughly 100 ms become noticeable."),
    C("room-correction","Room correction","Audio","Measuring a room and adjusting output to compensate for speaker placement and surfaces.","A cheap speaker with correction often beats an expensive one placed badly."),
    C("multiroom-sync","Multiroom synchronisation","Audio","Keeping separate speakers aligned within a few milliseconds so audio does not echo between rooms.","The single hardest part of multiroom audio, and the reason closed ecosystems still win.")
  ]);

  // keep the completeness manifest truthful
  var t=K.completeness&&K.completeness.types;
  if(t){
    t.protocols.count=K.protocols.length; t.standards.count=K.standards.length;
    t.guides.count=K.guides.length; t.concepts.count=K.concepts.length;
  }
  K.updated_at="2026-10-08";
})();
