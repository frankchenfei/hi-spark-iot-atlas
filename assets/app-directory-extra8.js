/* Batch 8: printing apps (label, receipt, photo, study/wrong-question printers)
   and a wider audio companion set. */
(function(){
  var existing=window.IOT_APP_DIRECTORY||[];
  function A(name,brand,category,segment,protocols,summary,source){
    return {slug:(category+"-"+name).toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/^-|-$/g,""),
      name:name,brand:brand,category:category,segment:segment,platforms:"iOS / Android",protocols:protocols,summary:summary,
      android_url:"https://play.google.com/store/search?q="+encodeURIComponent(name)+"&c=apps&hl=en&gl=US",
      ios_url:"https://apps.apple.com/us/search?term="+encodeURIComponent(name),
      source:source||"",status:"store-search",
      note:"Verify the store listing, developer account and regional availability before production."};
  }
  var P=[
    // --- study and homework printersPrint","Label Printers","Study printer","BLE","Study and note printing: capture text, photos and questions to a mini thermal printer.",""),
    A("PeriPage","PeriPage","Label Printers","Study printer","BLE, Wi-Fi","PeriPage mini thermal printer for notes, labels and study material.","https://www.peripage.com/"),
    A("FUN PRINT","FUN PRINT","Label Printers","Study printer","BLE","Compact thermal printer for study notes, lists and photos.",""),
    A("Walk Print","Walk Print","Label Printers","Study printer","BLE, Wi-Fi","Walk Print portable thermal printer for notes and labels.",""),
    A("Memobird","Memobird","Label Printers","Study printer","Wi-Fi, BLE","Memobird note and photo printer for study and messages.","https://www.memobird.cn/"),
    A("Paperang","Paperang","Label Printers","Study printer","BLE","Paperang pocket thermal printer for photos and notes.","https://www.paperang.com/"),
    A("Phomemo Study","Phomemo","Label Printers","Study printer","BLE","Phomemo study and note printing mode for mini printers.","https://phomemo.com/"),
    // --- label / barcode printers ---
    A("Xprinter","Xprinter","Label Printers","Label","BLE, Wi-Fi","Xprinter label and receipt printer setup and calibration.","https://www.xprinter.net/"),
    A("Brady Express","Brady","Label Printers","Industrial label","BLE, Wi-Fi","Brady industrial label printing for wire and equipment marking.","https://www.bradyid.com/"),
    A("SATO","SATO","Label Printers","Industrial label","Wi-Fi, BLE","SATO barcode and RFID label printer management.","https://www.sato-global.com/"),
    A("TSC Print Set","TSC","Label Printers","Industrial label","Wi-Fi, BLE","TSC thermal transfer label printer configuration.","https://www.tscprinters.com/"),
    A("Godex","Godex","Label Printers","Industrial label","Wi-Fi, BLE","Godex barcode label printer setup.","https://www.godexintl.com/"),
    A("Deli Label","Deli","Label Printers","Label","BLE","Deli label and study printer companion.","https://www.deliworld.com/"),
    A("Liene Photo","Liene","Label Printers","Photo printer","Wi-Fi, BLE","Liene photo printer for instant prints.","https://www.liene-life.com/"),
    A("Comet Print","Comet","Label Printers","Label","BLE","Comet label printer companion app.",""),
    // --- office / brand printer apps ---
    A("Canon PRINT","Canon","Label Printers","Office printer","Wi-Fi, BLE","Canon PRINT for setup, scanning, printing and ink status.","https://www.canon.com/"),
    A("Canon PRINT Inkjet/SELPHY","Canon","Label Printers","Office printer","Wi-Fi","Canon inkjet and SELPHY photo printing from mobile.","https://www.canon.com/"),
    A("HP Smart","HP","Label Printers","Office printer","Wi-Fi, BLE","HP printer setup, scanning, supplies and mobile printing.","https://www.hp.com/"),
    A("HP Print Service Plugin","HP","Label Printers","Print service","Wi-Fi","Android print service enabling printing to HP printers.","https://www.hp.com/"),
    A("Samsung Print Service Plugin","Samsung","Label Printers","Print service","Wi-Fi","Android print service plugin for Samsung printers.","https://www.samsung.com/"),
    A("Epson Smart Panel","Epson","Label Printers","Office printer","Wi-Fi, BLE","Epson printer setup, maintenance and mobile printing.","https://www.epson.com/"),
    A("Epson iPrint","Epson","Label Printers","Office printer","Wi-Fi","Epson mobile printing, scanning and cloud print.","https://www.epson.com/"),
    A("Epson Creative Print","Epson","Label Printers","Photo printer","Wi-Fi","Epson craft, stationery and photo printing from mobile.","https://www.epson.com/"),
    A("Brother Mobile Connect","Brother","Label Printers","Office printer","Wi-Fi, BLE","Brother printer setup, supplies, scanning and mobile print.","https://www.brother.com/"),
    A("PrinterShare Mobile Print","PrinterShare","Label Printers","Print service","Wi-Fi, BLE","Print documents and photos to many printer brands over Wi-Fi or Bluetooth.",""),
    A("PrinterOn","PrinterOn","Label Printers","Print service","Wi-Fi","Enterprise mobile printing and pull printing.","https://www.printeron.com/"),
    A("Mopria Print Service","Mopria","Label Printers","Print service","Wi-Fi","Android print service supporting Mopria-certified printers.","https://mopria.org/"),
    A("Xerox Print Service","Xerox","Label Printers","Office printer","Wi-Fi","Android print service for Xerox devices.","https://www.xerox.com/"),
    A("Lexmark Print","Lexmark","Label Printers","Office printer","Wi-Fi","Lexmark mobile printing and device management.","https://www.lexmark.com/"),
    A("RICOH Smart Device Connector","Ricoh","Label Printers","Office printer","Wi-Fi, BLE","Ricoh mobile printing, scanning and device connection.","https://www.ricoh.com/"),
    A("Kyocera Mobile Print","Kyocera","Label Printers","Office printer","Wi-Fi","Kyocera mobile printing and document capture.","https://www.kyoceradocumentsolutions.com/"),
    A("Sharpdesk Mobile","Sharp","Label Printers","Office printer","Wi-Fi","Sharp mobile printing and scanning companion.","https://global.sharp/"),
    A("Konica Minolta Mobile Print","Konica Minolta","Label Printers","Office printer","Wi-Fi","Konica Minolta mobile print and scan.","https://www.konicaminolta.com/")
  ];
  var AU=[
    A("Anker","Anker","Audio & Headphones","Speaker","BLE, Wi-Fi","Anker speaker and power device companion.","https://www.anker.com/"),
    A("Tribit","Tribit","Audio & Headphones","Speaker","BLE","Tribit speaker EQ, pairing and firmware.","https://www.tribit.com/"),
    A("Tronsmart","Tronsmart","Audio & Headphones","Speaker","BLE","Tronsmart audio EQ, lights and firmware updates.","https://www.tronsmart.com/"),
    A("Fosi Audio","Fosi Audio","Audio & Headphones","Amplifier","BLE","Fosi audio amplifier and DAC control.","https://fosiaudio.com/"),
    A("WiiM","WiiM","Audio & Headphones","Multiroom","Wi-Fi, BLE","WiiM streaming amplifier and multiroom setup.","https://www.wiimhome.com/"),
    A("BluOS","Bluesound","Audio & Headphones","Multiroom","Wi-Fi, BLE","Bluesound and BluOS multiroom streaming control.","https://www.bluesound.com/"),
    A("Denon","Denon","Audio & Headphones","AV receiver","Wi-Fi, BLE","Denon AV receiver setup, HEOS multiroom and calibration.","https://www.denon.com/"),
    A("Marantz","Marantz","Audio & Headphones","AV receiver","Wi-Fi, BLE","Marantz AV receiver setup and HEOS multiroom.","https://www.marantz.com/"),
    A("Yamaha MusicCast","Yamaha","Audio & Headphones","Multiroom","Wi-Fi, BLE","Yamaha MusicCast multiroom and receiver control.","https://www.yamaha.com/"),
    A("Onkyo Controller","Onkyo","Audio & Headphones","AV receiver","Wi-Fi, BLE","Onkyo receiver setup, streaming and room calibration.","https://www.onkyo.com/"),
    A("Pioneer Remote","Pioneer","Audio & Headphones","AV receiver","Wi-Fi, BLE","Pioneer AV receiver and streaming control.","https://www.pioneerhomeusa.com/"),
    A("Klipsch Connect","Klipsch","Audio & Headphones","Speaker","BLE","Klipsch speaker EQ, firmware and setup.","https://www.klipsch.com/"),
    A("Ultimate Ears","Ultimate Ears","Audio & Headphones","Speaker","BLE","UE speaker EQ, party up and firmware updates.","https://www.ultimateears.com/"),
    A("Devialet","Devialet","Audio & Headphones","Speaker","Wi-Fi, BLE","Devialet speaker setup, EQ and multiroom.","https://www.devialet.com/"),
    A("KEF Connect","KEF","Audio & Headphones","Speaker","Wi-Fi, BLE","KEF wireless speaker setup and streaming.","https://www.kef.com/"),
    A("Audio-Technica","Audio-Technica","Audio & Headphones","Headphones","BLE","Audio-Technica wireless headphone and turntable companion.","https://www.audio-technica.com/"),
    A("AKG Headphones","AKG","Audio & Headphones","Headphones","BLE","AKG headphone EQ and firmware.","https://www.akg.com/"),
    A("Beyerdynamic","Beyerdynamic","Audio & Headphones","Headphones","BLE","Beyerdynamic headphone settings and firmware.","https://www.beyerdynamic.com/"),
    A("ShurePlus Play","Shure","Audio & Headphones","Headphones","BLE","Shure headphone and earphone EQ and firmware.","https://www.shure.com/"),
    A("Rode Connect","Rode","Audio & Headphones","Microphone","USB","Rode microphone and interface configuration.","https://www.rode.com/"),
    A("Elgato Wave Link","Elgato","Audio & Headphones","Microphone","USB, Wi-Fi","Elgato microphone and stream audio mixing.","https://www.elgato.com/"),
    A("SteelSeries GG","SteelSeries","Audio & Headphones","Gaming audio","USB, BLE","SteelSeries headset EQ, sonar and peripheral settings.","https://steelseries.com/"),
    A("HyperX NGENUITY","HyperX","Audio & Headphones","Gaming audio","USB, BLE","HyperX headset and peripheral configuration.","https://www.hyperx.com/"),
    A("Razer Audio","Razer","Audio & Headphones","Gaming audio","BLE, USB","Razer headset EQ, THX and lighting settings.","https://www.razer.com/"),
    A("Logitech G","Logitech","Audio & Headphones","Gaming audio","USB, BLE","Logitech G headset and peripheral configuration.","https://www.logitechg.com/"),
    A("Corsair iCUE Audio","Corsair","Audio & Headphones","Gaming audio","USB","Corsair headset EQ and surround settings.","https://www.corsair.com/"),
    A("Creative","Creative","Audio & Headphones","Sound card","USB, BLE","Creative sound card, headphone and speaker control.","https://www.creative.com/"),
    A("FiiO Control","FiiO","Audio & Headphones","DAC","BLE","FiiO DAC, amplifier and portable player settings.","https://www.fiio.com/"),
    A("Shanling","Shanling","Audio & Headphones","DAC","BLE","Shanling portable player and DAC control.","https://www.shanling.com/"),
    A("HiBy Music","HiBy","Audio & Headphones","DAC","BLE","HiBy portable player and DAC configuration.","https://store.hiby.com/"),
    A("iFi Audio","iFi","Audio & Headphones","DAC","BLE","iFi DAC and amplifier settings.","https://ifi-audio.com/"),
    A("Topping","Topping","Audio & Headphones","DAC","USB, BLE","Topping DAC and amplifier control.","https://www.toppingaudio.com/"),
    A("Amazon Echo","Amazon","Audio & Headphones","Smart speaker","Wi-Fi, BLE, Matter","Echo and Alexa speaker setup and multiroom audio.","https://www.amazon.com/"),
    A("Google Nest Audio","Google","Audio & Headphones","Smart speaker","Wi-Fi, BLE, Thread","Nest speaker setup, grouping and voice control.","https://store.google.com/"),
    A("Apple HomePod","Apple","Audio & Headphones","Smart speaker","Wi-Fi, BLE, Thread","HomePod setup, stereo pairing and multiroom audio.","https://www.apple.com/")
  ];
  var extra=[].concat(P,AU);
  window.IOT_APP_DIRECTORY=existing.concat(extra.filter(function(x,i,arr){
    var s=(x.slug||"").toLowerCase(), n=(x.name||"").toLowerCase();
    if(arr.__seen&&(arr.__seen.s[s]||(n&&arr.__seen.n[n]))) return false;
    if(existing.some(function(y){return (y.slug||"").toLowerCase()===s||(n&&(y.name||"").toLowerCase()===n);})) return false;
    arr.__seen=arr.__seen||{s:{},n:{}}; arr.__seen.s[s]=1; if(n) arr.__seen.n[n]=1; return true;
  }));
})();
