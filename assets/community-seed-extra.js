/* Additional seed discussions, appended to the base set. */
(function(){
  var S=window.IOT_COMMUNITY_SEED;
  if(!S||!S.threads) return;
  S.threads=S.threads.concat([
    { desk:"buyer", category:"buying", entity_type:"category", entity_slug:"label-printers",
      title:"Thermal labels fade outdoors - is it the paper or the printer",
      body:"Using a Bluetooth label printer for plant markers and cable tags. The first batch faded to blank in about four months.",
      replies:[
        { desk:"editorial", body:"Almost always the paper. Direct thermal print is heat-sensitive and fades with UV and abrasion. For anything outdoors or handled daily you want thermal transfer with a wax-resin ribbon, or a synthetic stock rated for UV." },
        { desk:"field", body:"Quick test: put one label on a windowsill for a month. If it fades there it will fade on the plant marker too." },
        { desk:"buyer", body:"Check the adhesive as well as the face stock. Acrylic adhesive handles cold and damp; rubber adhesive is cheaper and lets go in a freezer." }
      ]},
    { desk:"field", category:"troubleshooting", entity_type:"category", entity_slug:"label-printers",
      title:"Mini thermal printer pairs but prints nothing",
      body:"The app says connected but every job comes out blank or disappears.",
      replies:[
        { desk:"field", body:"Blank output usually means the paper is loaded upside down. Direct thermal paper only prints on the coated side." },
        { desk:"editorial", body:"If the job vanishes entirely it is a link problem, not a print problem. Forget the printer in system settings, remove it in the app, then pair from inside the app. Many of these printers only accept pairing started by their own app." }
      ]},
    { desk:"editorial", category:"buying", entity_type:"category", entity_slug:"label-printers",
      title:"Do I need a label printer, or is a normal printer with label sheets enough",
      body:"Trying to justify a dedicated label printer for home organisation and shipping.",
      replies:[
        { desk:"buyer", body:"For address and shipping labels, a laser printer with sheet labels is cheaper per label and sharper. A dedicated printer wins for odd shapes, one-off lengths, or when you print a few at a time and hate wasting a sheet." },
        { desk:"editorial", body:"Volume and hands-free use decide it. A thermal printer removes the trim step entirely, which matters at twenty parcels rather than two." }
      ]},
    { desk:"cloud", category:"troubleshooting", entity_type:"category", entity_slug:"label-printers",
      title:"Network printer keeps disappearing from the app",
      body:"Works for a day, then goes offline in the app until I power-cycle it.",
      replies:[
        { desk:"cloud", body:"Give the printer a static IP or a DHCP reservation. Most apps remember the printer by IP, so when the lease changes the app loses it even though the printer is online. This fixes most cases." },
        { desk:"field", body:"Also check sleep settings. Many printers drop Wi-Fi in deep sleep and wake slower than the app waits." }
      ]},
    { desk:"editorial", category:"compatibility", entity_type:"category", entity_slug:"label-printers",
      title:"Mobile print: brand app or the Android print service",
      body:"There seem to be two ways to print from a phone. Which one do I set up?",
      replies:[
        { desk:"editorial", body:"Install both. The print service makes the printer appear in the standard share and print menu from any app. The manufacturer app adds ink levels, head cleaning, scanning and paper profiles." },
        { desk:"field", body:"If you only install one, install the print service. It works with more apps and is what you reach for when printing a PDF in a hurry." }
      ]},
    { desk:"buyer", category:"buying", entity_type:"category", entity_slug:"audio-headphones",
      title:"LDAC, aptX or AAC - can you actually hear the difference",
      body:"Every spec sheet pushes a different codec. Does it matter in practice?",
      replies:[
        { desk:"editorial", body:"Less than the marketing suggests, and it needs both ends to support it. In a busy 2.4 GHz environment a higher codec often drops to a lower rate anyway." },
        { desk:"field", body:"Driver and fit matter more. Two earbuds with the same codec can differ by several dB in bass purely from the seal." }
      ]},
    { desk:"cloud", category:"buying", entity_type:"category", entity_slug:"audio-headphones",
      title:"Multiroom audio - Sonos, WiiM or BluOS",
      body:"Building whole-home audio and want to avoid a dead-end ecosystem.",
      replies:[
        { desk:"cloud", body:"All three synchronise reliably. The real question is lock-in. Sonos is the most polished and the most closed. WiiM is the cheapest entry and speaks AirPlay, Chromecast and DLNA. BluOS sits between." },
        { desk:"editorial", body:"If you already own speakers you like, a streamer plus your existing amplifier is the least wasteful path." }
      ]},
    { desk:"field", category:"troubleshooting", entity_type:"category", entity_slug:"audio-headphones",
      title:"Headset microphone not detected on a desktop",
      body:"Works on the phone, but the PC sees headphones and no microphone.",
      replies:[
        { desk:"field", body:"Check the connector. A single 4-pole TRRS plug needs a splitter on a desktop with separate pink and green jacks. A TRRS plug in a TRS socket gives audio out and no mic, exactly your symptom." },
        { desk:"editorial", body:"If it is USB or wireless, check the input device in both the OS sound settings and inside the game or app. Applications often override the system default." }
      ]},
    { desk:"editorial", category:"buying", entity_type:"category", entity_slug:"audio-headphones",
      title:"Do you need a separate DAC for a phone",
      body:"Portable DAC dongles are everywhere. Real improvement or audiophile tax?",
      replies:[
        { desk:"buyer", body:"It depends what you are driving. For low-impedance earbuds a modern phone output is usually transparent. A DAC earns its place with high-impedance headphones, audible hiss, or when you need more headroom." },
        { desk:"editorial", body:"Try before you buy. The measurable differences are real but small, and often below the threshold where most people notice." }
      ]},
    { desk:"security", category:"security", entity_type:"category", entity_slug:"audio-headphones",
      title:"Smart speakers and privacy - what actually gets sent",
      body:"Want a voice assistant but not a microphone reporting back from every room.",
      replies:[
        { desk:"security", body:"Two separate things. Wake-word detection runs locally. The audio after the wake word goes to the vendor, and you can usually review and delete it. Check whether transcripts are retained, because those are the more sensitive artefact." },
        { desk:"editorial", body:"For the rooms you care about most, a speaker with a hardware mute switch beats trusting a software toggle." }
      ]},
    { desk:"field", category:"troubleshooting", entity_type:"category", entity_slug:"audio-headphones",
      title:"Earbuds stopped pairing after a firmware update",
      body:"Both earbuds were fine, then the app pushed an update and now only one connects.",
      replies:[
        { desk:"field", body:"Reset the pair, not just the phone. Almost every earbud set has a case-button reset that clears the bond between the two buds. Do that before anything else, then re-pair." },
        { desk:"editorial", body:"If it persists, check the app for a second update. Firmware rollouts are sometimes staged per bud, and a half-updated pair behaves exactly like this." }
      ]},
    { desk:"buyer", category:"buying", entity_type:"category", entity_slug:"label-printers",
      title:"Which label material for cables in a rack",
      body:"Labelling a network rack. Labels need to survive handling and stay readable.",
      replies:[
        { desk:"buyer", body:"Heat-shrink or flexible nylon tape. Paper labels abrade off a cable in weeks. Check which widths your printer supports in those materials before choosing the printer, not after." },
        { desk:"field", body:"Print flag-style where you can. It gives more characters per centimetre of cable and reads without rotating the bundle." }
      ]}
  ]);
})();
