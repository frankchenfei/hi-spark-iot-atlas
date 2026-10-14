/* Additional seed discussions - energy, garden, robotics, education. */
(function(){
  var S=window.IOT_COMMUNITY_SEED; if(!S||!S.threads) return;
  S.threads=S.threads.concat([
    { desk:"cloud", category:"buying", entity_type:"category", entity_slug:"energy-solar",
      title:"Home battery - size for outage backup or for bill savings",
      body:"Two installers gave me wildly different battery sizes. One says 5 kWh is plenty, the other says 20. What actually drives the number?",
      replies:[
        { desk:"cloud", body:"They are answering different questions. Backup sizing is about which circuits you want to keep alive and for how long - a fridge, lights and internet for a day might be 5 kWh. Bill-shifting sizing is about covering your evening consumption every night, which is usually much larger." },
        { desk:"editorial", body:"Decide the goal first, then size. Also check the inverter can actually island your backed-up circuits while the grid is down. A big battery behind a non-islanding inverter gives you nothing during an outage." }
      ]},
    { desk:"editorial", category:"compatibility", entity_type:"protocol", entity_slug:"sunspec",
      title:"Why solar apps disagree with the utility bill",
      body:"My monitoring app says I exported far more than the bill credits me for. Which number is wrong?",
      replies:[
        { desk:"editorial", body:"Usually neither, they measure different points. The inverter reports production at the panels. The utility meter measures at the grid connection, after house consumption. If your app is not reading a consumption meter too, it cannot know what you used on site." },
        { desk:"cloud", body:"The other common cause is reporting interval. A 5-minute average hides short export spikes that the utility meter still records. Compare daily totals rather than instantaneous readings before assuming an error." }
      ]},
    { desk:"buyer", category:"buying", entity_type:"category", entity_slug:"smart-garden",
      title:"Weather-based irrigation - does it actually save water",
      body:"Replacing a dumb timer with a smart controller. Real saving or marketing?",
      replies:[
        { desk:"buyer", body:"Real, but mostly through two things: skipping cycles after rain, and adjusting run time by season. If your old timer already had a rain sensor, the saving is smaller than the brochure implies." },
        { desk:"editorial", body:"The bigger saving usually comes from splitting zones. A single schedule has to satisfy the thirstiest bed, so everything else gets overwatered. Zone the beds by plant type and the saving compounds." }
      ]},
    { desk:"field", category:"troubleshooting", entity_type:"category", entity_slug:"robot-vacuums",
      title:"Robot vacuum map is wrong after moving furniture",
      body:"The floor plan has the sofa in the wrong place and the robot keeps trying to drive through it.",
      replies:[
        { desk:"field", body:"Delete the map and let it remap from scratch after a significant furniture move. Most robots patch an existing map rather than rebuild it, and repeated patching drifts." },
        { desk:"editorial", body:"Prevention helps too: run the first remap in good light for camera-based models, remove loose cables, and place the dock back in the same spot so the origin does not shift." }
      ]},
    { desk:"editorial", category:"buying", entity_type:"category", entity_slug:"ai-toys",
      title:"AI companion robots for kids - what happens when the company shuts down",
      body:"Looking at connected companion robots. Several makers have folded. Is there any way to judge the risk?",
      replies:[
        { desk:"editorial", body:"Check whether core functions need the cloud. A robot that only does conversation through a server becomes a paperweight if the company closes. One that still does offline activities degrades gracefully." },
        { desk:"security", body:"Also read the privacy policy for what is recorded and retained, and whether you can delete it. Voice recordings from a child's bedroom are about as sensitive as consumer data gets." }
      ]},
    { desk:"security", category:"security", entity_type:"concept", entity_slug:"privacy-by-design",
      title:"Camera in a shared hallway - what the neighbours are entitled to",
      body:"Apartment building, my camera sees the shared corridor. Am I allowed to keep it?",
      replies:[
        { desk:"security", body:"Depends heavily on jurisdiction and on whether the building has its own rules. In most of Europe, filming a shared area means processing other people's personal data, so you need a lawful basis and usually a sign. In many leases you also need landlord permission." },
        { desk:"editorial", body:"The practical middle ground most people take: mask everything outside your own door, record only on your doorbell trigger, and keep the shortest retention the use case allows. Do all three and document it. This is general information, not legal advice - for a shared building get local advice." }
      ]},
    { desk:"field", category:"general", entity_type:"category", entity_slug:"trail-cameras",
      title:"Trail camera in a wet climate - which mounts survive",
      body:"Two cameras corroded at the connector after one winter. Looking for what actually holds up.",
      replies:[
        { desk:"field", body:"Water gets in through the cable gland, not the housing. Use a drip loop so water runs off before it reaches the connector, and dielectric grease on the contacts. That one change fixes most winter corrosion." },
        { desk:"editorial", body:"Also check the SD card door seal, not just the main gasket. A worn seal on the small door lets in more moisture than people expect." }
      ]},
    { desk:"editorial", category:"compatibility", entity_type:"protocol", entity_slug:"matter-bridge",
      title:"Do Matter bridges actually fix legacy devices",
      body:"I have Zigbee sensors I like. Will a Matter bridge make them work in Apple Home properly?",
      replies:[
        { desk:"editorial", body:"Often yes, with caveats. The bridge exposes the devices to the Matter fabric, so they appear in the controller. But features the bridge does not map are simply absent - device-specific settings usually stay in the original app." },
        { desk:"field", body:"Expect a second app in your life. You will still need the vendor app for firmware and configuration, even if day-to-day control moves to the Matter controller." }
      ]}
  ]);
})();
