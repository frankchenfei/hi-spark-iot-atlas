/* Seed discussions for the community forum.
   Shared source for two outputs:
     1. demo mode  - rendered by assets/community.js before Supabase is connected
     2. supabase/seed.sql - imported as real starter threads after deployment
   Authored by the editorial desks, so nothing here is presented as a real member. */
window.IOT_COMMUNITY_SEED = {
  notice: "Sample discussions written by the IoT Atlas editorial desks. Member accounts and live threads open once Supabase is connected.",
  desks: {
    editorial:  { handle:"iotatlas_editorial", name:"IoT Atlas Editorial" },
    field:      { handle:"field_notes",        name:"Field Notes Desk" },
    buyer:      { handle:"buyer_desk",         name:"Buyer's Desk" },
    cloud:      { handle:"cloud_desk",         name:"Cloud Desk" },
    security:   { handle:"security_desk",      name:"Security Desk" }
  },
  threads: [
    { desk:"field", category:"troubleshooting", entity_type:"protocol", entity_slug:"matter",
      title:"Matter pairing fails on my Thread border router - what to check first",
      body:"Commissioning keeps failing at the very last step. The device shows up in the controller but never finishes. Before I replace hardware, what is worth checking in order?",
      replies:[
        { desk:"editorial", body:"Work through it in this order. First confirm the controller and the device are on the same fabric - a device already commissioned by another ecosystem needs to be removed there first, not just unplugged. Second check that you have at least one Thread border router powered and on the same network as the controller. Third update both the controller app and the device firmware; early Matter firmware had commissioning bugs that were fixed later." },
        { desk:"field", body:"Adding to that: Thread credentials matter more than people expect. If you have two border routers from different vendors they may be on separate Thread networks, and the device only joins one. Check the Thread network name and channel in the border router diagnostics." },
        { desk:"editorial", body:"If it still fails, test with a second ecosystem. If pairing works there, the fault is with the first controller, not the device. That single test saves a lot of guessing." }
      ]},
    { desk:"buyer", category:"buying", entity_type:"brand", entity_slug:"reolink",
      title:"Reolink vs eufy for a 6-camera install with no subscription",
      body:"Six outdoor cameras, want local recording, no monthly fee, and I would rather not run PoE to every corner. Which way would you go?",
      replies:[
        { desk:"editorial", body:"At six cameras the split usually comes down to wiring. If you can run cable to even two corners, a small NVR or PoE switch changes the whole cost curve and gives you continuous recording instead of event clips. If you cannot run cable anywhere, battery cameras with a HomeBase-style local store are the practical answer, and you accept event-only recording." },
        { desk:"field", body:"Note the difference between 'local storage' and 'continue recording during an internet outage'. Test that explicitly - some setups keep recording, others stop scheduling when the cloud is unreachable." },
        { desk:"buyer", body:"Also budget the SD cards. Six cameras running event recording will chew through consumer cards. Use high-endurance cards or central storage." }
      ]},
    { desk:"editorial", category:"compatibility", entity_type:"app", entity_slug:"tuya-smart",
      title:"Does using Tuya Smart and Smart Life split my account?",
      body:"I have some devices added in Tuya Smart and some in Smart Life. They are the same cloud, right? Should I consolidate?",
      replies:[
        { desk:"editorial", body:"Same backend, separate account surfaces. Devices added in one app do not automatically appear in the other unless you link the accounts. The practical rule: pick the app your device manuals point at and stay in it. Consolidating later means removing and re-adding devices, which loses scenes and automations." },
        { desk:"field", body:"Worth checking before you buy more: some OEM apps are Tuya underneath but tie devices to their own account namespace. Those really do not cross over." }
      ]},
    { desk:"buyer", category:"buying", entity_type:"app", entity_slug:"trail-cameras-spypoint",
      title:"SPYPOINT cellular camera - realistic monthly data usage",
      body:"Trying to size a data plan before I commit. How much does a cellular trail camera actually send per month?",
      replies:[
        { desk:"editorial", body:"Depends almost entirely on your settings and how busy the site is. A camera sending a few dozen downsized photos a day sits in the low hundreds of MB per month. Bump to HD transfers, frequent triggers, or a windy location with moving branches and you can multiply that several times." },
        { desk:"field", body:"Set the trigger sensitivity conservatively for the first month and check actual usage before you lock a plan. False triggers from vegetation are the single biggest cause of bill shock." }
      ]},
    { desk:"field", category:"troubleshooting", entity_type:"protocol", entity_slug:"mqtt",
      title:"MQTT QoS 1 is giving me duplicate readings in my dashboard",
      body:"My time-series chart shows two or three identical points in a row. I am publishing at QoS 1. Is the broker duplicating?",
      replies:[
        { desk:"editorial", body:"That is QoS 1 behaving exactly as specified - 'at least once' means duplicates are allowed. The broker is not corrupting anything; your subscriber is expected to deduplicate. Add a message id or a monotonic sequence number to the payload and drop repeats on ingest." },
        { desk:"cloud", body:"If duplicates are unacceptable and your volume is low, QoS 2 solves it but costs an extra round trip per message. For telemetry at scale, QoS 0 plus application-level sequencing is usually cheaper than QoS 2." },
        { desk:"editorial", body:"Also check whether you are subscribed to overlapping wildcards. Two matching subscriptions deliver every message twice, which looks identical to a QoS problem." }
      ]},
    { desk:"cloud", category:"cloud", entity_type:"cloud", entity_slug:"aws-aws-iot-core",
      title:"AWS IoT Core vs Tuya Cloud for a 5,000 device consumer fleet",
      body:"We are launching a consumer product, roughly 5k devices in year one, mostly in Europe. Which platform shape fits better?",
      replies:[
        { desk:"cloud", body:"The decision is really build-versus-buy, not feature comparison. Tuya gets you a working consumer app, OTA and device onboarding in weeks, and you inherit their module supply chain. AWS gives you full control of the data model and no platform lock-in, but you own the app, the onboarding flow and the support burden." },
        { desk:"editorial", body:"One EU-specific note: whichever way you go, confirm where the device data lands and whether you can keep it in an EU region. That constraint often decides the platform before cost does." },
        { desk:"cloud", body:"Cost model warning: the headline per-device price is rarely the driver. Model messages, connections, storage, egress and support separately, then multiply for growth. The gap between the two options usually shows up in engineering headcount, not the invoice." }
      ]},
    { desk:"security", category:"security", entity_type:"concept", entity_slug:"device-identity",
      title:"TLS certificate rotation bricked 40 devices - post-mortem notes",
      body:"We rotated our device certificates and 40 units stopped connecting. Sharing what we got wrong so others avoid it.",
      replies:[
        { desk:"security", body:"The classic failure: the new certificate was pushed over the existing secure channel, but the client was configured to trust only the new CA before the new leaf was actually accepted. Any device that rebooted mid-rotation came back with no working credential." },
        { desk:"editorial", body:"The fix is overlapping validity. Keep the old and new trust anchors both accepted for at least one full rotation cycle, and only remove the old one after you have measured 100% of devices reporting on the new credential." },
        { desk:"cloud", body:"Add an alert on 'devices whose credential expires within 30 days'. If that alert exists, you never discover rotation failures from a customer report." },
        { desk:"security", body:"And always stage the rotation on a canary cohort first. Forty devices is a bad day; forty thousand is a recall." }
      ]},
    { desk:"buyer", category:"buying", entity_type:"category", entity_slug:"smart-locks",
      title:"Retrofit lock or full deadbolt replacement for a rental?",
      body:"I rent and cannot change the lock permanently. Is a retrofit smart lock actually worth it, or should I wait until I own a place?",
      replies:[
        { desk:"editorial", body:"Retrofit is built for exactly your situation. It keeps the existing key cylinder, so your landlord's key still works, and you can take it with you when you move. The trade-off is bulk on the inside face and a lower security ceiling than a certified deadbolt." },
        { desk:"buyer", body:"Check the door's backset and whether the interior thumb-turn is compatible before buying. That is where most retrofits get returned." }
      ]},
    { desk:"security", category:"security", entity_type:"standard", entity_slug:"gdpr",
      title:"Doorbell camera in Germany - when do I need a DPIA?",
      body:"Installing a video doorbell at a private house in Germany that films part of the pavement. Do I need a data protection impact assessment?",
      replies:[
        { desk:"security", body:"The trigger is systematic monitoring of a publicly accessible area. If the camera reliably captures the pavement or a shared corridor, you are likely in DPIA territory. If it is tightly masked to your own doorstep and the field of view is minimised, the assessment is much simpler." },
        { desk:"editorial", body:"Practical steps regardless: enable privacy masking so neighbouring property and as much public space as possible is excluded, set the shortest retention your use case allows, and put up the required signage. Document all three - that documentation is what you show if someone complains." },
        { desk:"security", body:"This is general guidance, not legal advice. For a multi-unit building or anything commercial, get a local lawyer to review it." }
      ]},
    { desk:"field", category:"troubleshooting", entity_type:"protocol", entity_slug:"zigbee",
      title:"Zigbee mesh drops out after adding 40 bulbs",
      body:"Everything was stable at 15 devices. I added 40 bulbs and now random devices go unavailable for a few minutes at a time.",
      replies:[
        { desk:"field", body:"Check whether the bulbs are functioning as routers. Mains-powered Zigbee devices repeat, battery devices do not. If your new bulbs are repeating, you just drastically changed the mesh topology and the coordinator is re-learning routes." },
        { desk:"editorial", body:"A few things help: give it 24-48 hours to settle before judging, make sure your coordinator is on a 2.4 GHz channel that does not overlap your Wi-Fi, and avoid putting all the routers physically in one room. Zigbee and Wi-Fi both live in 2.4 GHz and a badly chosen channel pair will look exactly like a mesh fault." },
        { desk:"field", body:"Also watch device limits. Some consumer coordinators degrade well before the theoretical maximum. Spreading across two coordinators is often cleaner than fighting one." }
      ]},
    { desk:"cloud", category:"cloud", entity_type:"protocol", entity_slug:"lorawan",
      title:"NB-IoT vs LoRaWAN for a water metering pilot in a dense city",
      body:"200 meters, deep indoor basements, need 10-year battery. Which technology would you pilot first?",
      replies:[
        { desk:"cloud", body:"Deep indoor plus 10-year battery points firmly at NB-IoT if you have operator coverage in those basements. Its link budget is the reason it exists. Verify coverage with an actual test device in the deepest basement you have before ordering anything." },
        { desk:"editorial", body:"LoRaWAN is cheaper per device and you control the network, but basement penetration is the weak point and you will need gateway placement you may not control. If the buildings are yours and you can place gateways, LoRaWAN becomes very attractive on cost." },
        { desk:"cloud", body:"Also model the data plan and the module cost over the full device life, not just year one. The cheaper module is often not the cheaper fleet." }
      ]},
    { desk:"field", category:"troubleshooting", entity_type:"app", entity_slug:"lighting-magic-home-pro",
      title:"Magic Home Pro controller stopped responding after a router swap",
      body:"Replaced my router, kept the same SSID and password, but the LED controller is now unreachable from the app.",
      replies:[
        { desk:"field", body:"Same SSID is not always enough. If the new router hands out a different subnet, or is using WPA3 where the old one used WPA2, or has band steering forcing everything onto 5 GHz, these controllers will fail to reconnect. Put a dedicated 2.4 GHz SSID up and re-pair." },
        { desk:"editorial", body:"Also check AP isolation. Some routers enable client isolation by default on guest networks. The phone and the controller have to be able to see each other locally for discovery to work." }
      ]},
    { desk:"buyer", category:"buying", entity_type:"category", entity_slug:"audio-headphones",
      title:"Do companion audio apps actually add anything, or is it marketing?",
      body:"Looking at QCY, TOZO, soundcore, JBL and Sonos. Some have extensive apps and some barely need one. What is the app genuinely for?",
      replies:[
        { desk:"buyer", body:"For earbuds the app is mostly EQ, ANC modes and firmware updates. EQ is the part that changes daily use; firmware updates are the part that fixes bugs you did not know you had. If the app is the only way to update firmware, it matters." },
        { desk:"editorial", body:"For multiroom speakers the calculus is completely different. Sonos and similar systems are essentially an app product with a speaker attached - grouping, room assignment and streaming accounts all live in the app. There the app is not a bonus, it is the product." },
        { desk:"field", body:"One practical check: install the app before you buy and read the recent reviews mentioning firmware. A headphone with no update path is a headphone with whatever bugs it shipped with." }
      ]}
  ,
    { desk:"editorial", category:"compatibility", entity_type:"app", entity_slug:"smart-locks-aqara-home-locks",
      title:"Aqara U200 with Apple Home keys - does it really work day to day",
      body:"Interested in the U200 specifically for the Apple Home key feature. Anyone using it as their daily lock rather than a demo?",
      replies:[
        { desk:"editorial", body:"Reported experience is that the Home key tap works well once provisioned, but the provisioning step is where people get stuck. You need a HomePod or Apple TV as a home hub on the same network, and you need to add the lock through the Aqara app first, then expose it to Apple Home. Adding it directly usually results in a lock that is visible but not tap-capable." },
        { desk:"field", body:"Also keep a physical key or keypad code configured. Any smart lock that depends on a cloud or hub round trip will eventually be a lock you cannot open." }
      ]},
    { desk:"buyer", category:"buying", entity_type:"concept", entity_slug:"pir-vs-radar",
      title:"Best presence sensor for a bathroom - PIR keeps switching the light off",
      body:"PIR sensor turns the bathroom light off while I am still in there because I am not moving enough. Is mmWave the answer?",
      replies:[
        { desk:"editorial", body:"Yes, this is the textbook mmWave use case. PIR detects motion, not presence. Sitting still or reading means no motion, so the light goes off. mmWave radar detects micro-motion including breathing, so it holds presence while you are stationary." },
        { desk:"buyer", body:"Two practical warnings. Radar can see through drywall and thin doors, so it may trigger from the corridor - lower the sensitivity and set the detection range short. And some units run hot; check reviews for noise and heat before putting one in a small room." }
      ]},
    { desk:"field", category:"compatibility", entity_type:"protocol", entity_slug:"nvr-dvr",
      title:"ONVIF PTZ camera with Blue Iris - what actually needs checking",
      body:"Trying to add a PTZ camera to Blue Iris over ONVIF. Video works but PTZ controls do nothing.",
      replies:[
        { desk:"field", body:"Video over ONVIF and PTZ over ONVIF are separate profiles. A camera can advertise profile S for streaming and not implement the PTZ service properly. Check the camera's ONVIF device manager output to confirm the PTZ service is actually advertised." },
        { desk:"editorial", body:"Second common cause is the ONVIF user. Many cameras have a separate ONVIF account from the web UI admin, and PTZ requires the media user to have operator-level rights. Creating a dedicated ONVIF user with full rights fixes a surprising number of these." },
        { desk:"field", body:"If it still fails, try the manufacturer-specific driver in Blue Iris instead of generic ONVIF. Vendor drivers often implement PTZ over the native API rather than the ONVIF service." }
      ]},
    { desk:"cloud", category:"cloud", entity_type:"protocol", entity_slug:"esim",
      title:"eSIM or physical SIM for a 2,000 unit fleet in Brazil",
      body:"Deploying trackers in Brazil. Trying to decide between soldered eSIM and a physical SIM tray.",
      replies:[
        { desk:"cloud", body:"At 2,000 units the operational saving from eSIM is real but it depends on your failure rate. A physical SIM means any connectivity problem becomes a truck roll. An eSIM lets you reprovision over the air, which turns most of those into a support ticket." },
        { desk:"editorial", body:"Check two things first. One, whether your chosen eSIM provider supports remote provisioning to the local carriers you need in Brazil - coverage there is carrier-specific, not generic roaming. Two, permanent roaming restrictions: some Brazilian carriers will cut off a permanently roamed SIM after a few months." },
        { desk:"cloud", body:"Also confirm the module actually supports the bands used locally. That catches more deployments than the SIM form factor does." }
      ]},
    { desk:"field", category:"general", entity_type:"category", entity_slug:"security-cameras",
      title:"Solar camera in a shaded courtyard - what worked and what did not",
      body:"Courtyard gets maybe two hours of direct sun in winter. Solar camera is struggling. Sharing what I tried.",
      replies:[
        { desk:"field", body:"Two hours of winter sun is genuinely not enough for most integrated solar cameras. The panel is sized for the summer case. What worked for me was separating the panel from the camera and running a cable to a roof position that gets sun all day." },
        { desk:"editorial", body:"If you cannot relocate the panel, reduce the camera's duty cycle instead of fighting physics. Lower the resolution on event clips, shorten clip length, cut the pre-roll, and disable continuous live view in the app. Those four changes typically halve consumption." },
        { desk:"field", body:"And check the panel is not being shaded by its own mounting bracket or a window frame at the low winter sun angle. I have made that mistake." }
      ]},
    { desk:"buyer", category:"buying", entity_type:"app", entity_slug:"label-printers-brother-p-touch-design-print",
      title:"NIIMBOT or Brother P-touch for cable labelling",
      body:"Need to label a rack of network cables. Small labels, needs to survive handling. Which ecosystem?",
      replies:[
        { desk:"buyer", body:"For cable labelling the deciding factor is label material and tape width, not the printer. Heat-shrink and flexible nylon tapes are what survive handling and abrasion. Check which of your two candidates offers the compatible tape in the widths your cables need." },
        { desk:"editorial", body:"Brother has the deeper tape catalogue including heat-shrink; NIIMBOT is cheaper per label and the app is faster for short text. If you are labelling a rack once, either works. If labelling is ongoing maintenance, buy for the tape range." },
        { desk:"field", body:"One gotcha: check the minimum label length your app allows. Some apps force a minimum that makes flag-style cable labels impossible on thin cables." }
      ]},
    { desk:"field", category:"troubleshooting", entity_type:"category", entity_slug:"trail-cameras",
      title:"Trail camera SD cards that actually survive a winter",
      body:"Two cards failed last winter in the same camera. Both were standard consumer cards. What should I be using?",
      replies:[
        { desk:"field", body:"High-endurance cards, and specifically ones rated for temperature. Standard cards are rated to roughly 0 degrees C for operation; below that the controller can fail to write even if the flash itself survives. That is why they die in winter and work fine in summer." },
        { desk:"editorial", body:"Also set the camera to overwrite the oldest files rather than filling the card. A card that reaches full and stays full is under continuous write pressure at the worst moment, and loop recording distributes writes more evenly." },
        { desk:"field", body:"And format the card in the camera, not on your computer. Cameras are picky about cluster size, and formatting elsewhere is a common cause of cards that work on a laptop but not in the camera." }
      ]}
  ]
};
