window.IOT_COMPATIBILITY = [
  {
    "slug": "ring-alexa",
    "title": "Ring and Alexa compatibility",
    "question": "Does Ring work with Alexa?",
    "category": "Voice control",
    "subject": "Ring",
    "target": "Amazon Alexa",
    "verdict": "Supported with account linking",
    "summary": "Ring devices can be linked to Alexa for voice control, live-view workflows on supported devices and event announcements where the device and region support them.",
    "requirements": [
      "Ring account",
      "Alexa account",
      "Ring skill enabled",
      "Supported Ring device and region"
    ],
    "limitations": [
      "Feature availability varies by Ring model",
      "Live view and announcements may require compatible Echo displays or speakers",
      "Account and region restrictions can apply"
    ],
    "steps": [
      "Open the Alexa app",
      "Enable the Ring skill",
      "Link the Ring account",
      "Discover devices",
      "Assign devices to rooms",
      "Test voice commands and notifications"
    ],
    "sources": [
      {
        "label": "Ring support",
        "url": "https://support.ring.com/hc/en-us"
      },
      {
        "label": "Amazon Alexa",
        "url": "https://www.amazon.com/alexa"
      }
    ],
    "lastVerified": "2026-10-10"
  },
  {
    "slug": "philips-hue-alexa",
    "title": "Philips Hue and Alexa compatibility",
    "question": "Does Philips Hue work with Alexa?",
    "category": "Voice control",
    "subject": "Philips Hue",
    "target": "Amazon Alexa",
    "verdict": "Supported",
    "summary": "Philips Hue lights and scenes can be controlled through Alexa when the Hue account and bridge or compatible Bluetooth setup are linked.",
    "requirements": [
      "Philips Hue account",
      "Hue Bridge for most whole-home features",
      "Alexa app and compatible Echo device"
    ],
    "limitations": [
      "Bluetooth-only setups have fewer features than Bridge-connected systems",
      "Advanced entertainment and automation features depend on the Hue system",
      "Region and device model support vary"
    ],
    "steps": [
      "Open the Alexa app",
      "Enable the Philips Hue skill",
      "Link the Hue account",
      "Discover lights and scenes",
      "Assign rooms and test controls"
    ],
    "sources": [
      {
        "label": "Philips Hue and Alexa",
        "url": "https://www.philips-hue.com/en-us/support/faq"
      },
      {
        "label": "Philips Hue support",
        "url": "https://www.philips-hue.com/en-us/support"
      }
    ],
    "lastVerified": "2026-10-10"
  },
  {
    "slug": "philips-hue-apple-home",
    "title": "Philips Hue and Apple Home compatibility",
    "question": "Does Philips Hue work with Apple Home?",
    "category": "Apple ecosystem",
    "subject": "Philips Hue",
    "target": "Apple Home",
    "verdict": "Supported with a compatible Hue Bridge",
    "summary": "Hue lights can be added to Apple Home through a compatible Hue Bridge, enabling Siri, scenes, automations and Home app controls.",
    "requirements": [
      "Hue Bridge",
      "Apple Home hub for remote access and automations",
      "iPhone or iPad with the Home app"
    ],
    "limitations": [
      "Some Hue-specific effects may not appear in Apple Home",
      "Remote access and automations require a compatible Apple home hub",
      "Firmware and model support can change"
    ],
    "steps": [
      "Update the Hue Bridge and Hue app",
      "Open the Apple Home app",
      "Add accessory and select Hue Bridge",
      "Assign rooms",
      "Test Siri and automations"
    ],
    "sources": [
      {
        "label": "Philips Hue and Apple Home",
        "url": "https://www.philips-hue.com/en-us/support/faq"
      },
      {
        "label": "Apple Home",
        "url": "https://www.apple.com/home-app/"
      }
    ],
    "lastVerified": "2026-10-10"
  },
  {
    "slug": "aqara-apple-home",
    "title": "Aqara and Apple Home compatibility",
    "question": "Does Aqara work with Apple Home?",
    "category": "Apple ecosystem",
    "subject": "Aqara",
    "target": "Apple Home",
    "verdict": "Supported by compatible hubs and models",
    "summary": "Many Aqara devices can be exposed to Apple Home through supported Aqara hubs, with Matter adding another path for compatible models.",
    "requirements": [
      "Compatible Aqara hub",
      "Aqara Home app",
      "Apple Home hub for remote access and automations"
    ],
    "limitations": [
      "Not every Aqara model exposes every feature to Apple Home",
      "Matter support depends on the exact model and firmware",
      "Multi-hub and region differences can affect setup"
    ],
    "steps": [
      "Confirm the device and hub support Apple Home",
      "Update firmware",
      "Add the device in Aqara Home",
      "Bind the hub to Apple Home",
      "Assign room and test automations"
    ],
    "sources": [
      {
        "label": "Aqara support",
        "url": "https://www.aqara.com/en/support/"
      },
      {
        "label": "Apple Home",
        "url": "https://www.apple.com/home-app/"
      }
    ],
    "lastVerified": "2026-10-10"
  },
  {
    "slug": "tuya-alexa",
    "title": "Tuya and Alexa compatibility",
    "question": "Does Tuya work with Alexa?",
    "category": "Voice control",
    "subject": "Tuya / Smart Life",
    "target": "Amazon Alexa",
    "verdict": "Supported for compatible devices",
    "summary": "Tuya and Smart Life devices can be linked to Alexa through the Tuya Smart or Smart Life skill when the device type, account region and firmware support the integration.",
    "requirements": [
      "Tuya Smart or Smart Life account",
      "Alexa app",
      "Device visible in the Tuya account",
      "Region-compatible skill"
    ],
    "limitations": [
      "Device categories expose different capabilities",
      "Some white-label apps may require their own skill",
      "Account region can determine which skill is available"
    ],
    "steps": [
      "Confirm the device is visible in Tuya Smart or Smart Life",
      "Open the Alexa app",
      "Enable the matching Tuya skill",
      "Link the account",
      "Discover devices",
      "Test commands"
    ],
    "sources": [
      {
        "label": "Tuya support",
        "url": "https://www.tuya.com/"
      },
      {
        "label": "Alexa support",
        "url": "https://www.amazon.com/alexa"
      }
    ],
    "lastVerified": "2026-10-10"
  },
  {
    "slug": "tuya-google-home",
    "title": "Tuya and Google Home compatibility",
    "question": "Does Tuya work with Google Home?",
    "category": "Voice control",
    "subject": "Tuya / Smart Life",
    "target": "Google Home",
    "verdict": "Supported for compatible devices",
    "summary": "Compatible Tuya and Smart Life devices can be linked to Google Home through the matching Google Home integration.",
    "requirements": [
      "Tuya Smart or Smart Life account",
      "Google Home app",
      "Compatible device type and region"
    ],
    "limitations": [
      "Available device traits vary by category",
      "Some OEM-branded apps use different integrations",
      "Regional account restrictions can apply"
    ],
    "steps": [
      "Confirm the device is in the Tuya account",
      "Open Google Home",
      "Add service and select the correct Tuya integration",
      "Link the account",
      "Assign devices to rooms",
      "Test voice and app controls"
    ],
    "sources": [
      {
        "label": "Tuya support",
        "url": "https://www.tuya.com/"
      },
      {
        "label": "Google Home support",
        "url": "https://support.google.com/googlehome/"
      }
    ],
    "lastVerified": "2026-10-10"
  },
  {
    "slug": "matter-ecosystems",
    "title": "Matter ecosystem compatibility",
    "question": "Does Matter work with Apple, Google, Alexa and SmartThings?",
    "category": "Matter",
    "subject": "Matter device",
    "target": "Matter controllers",
    "verdict": "Supported when both sides are Matter-certified",
    "summary": "A Matter-certified device can work across Matter controllers, but the exact features exposed depend on the device type, controller, firmware and whether a Thread border router is required.",
    "requirements": [
      "Matter-certified device",
      "Matter controller or hub",
      "Thread border router when using Thread",
      "Compatible firmware and region"
    ],
    "limitations": [
      "Not every feature is exposed to every controller",
      "Multi-admin setup and Thread topology can affect reliability",
      "Controller updates are required as Matter evolves"
    ],
    "steps": [
      "Verify Matter certification",
      "Confirm controller compatibility",
      "Install the latest firmware",
      "Add the device with the setup code",
      "Add a second controller only if multi-admin is supported",
      "Test automations and local control"
    ],
    "sources": [
      {
        "label": "Matter overview",
        "url": "https://csa-iot.org/all-solutions/matter/"
      },
      {
        "label": "Matter product database",
        "url": "https://csa-iot.org/certification/"
      }
    ],
    "lastVerified": "2026-10-10"
  },
  {
    "slug": "shelly-home-assistant",
    "title": "Shelly and Home Assistant compatibility",
    "question": "Does Shelly work with Home Assistant?",
    "category": "Local automation",
    "subject": "Shelly",
    "target": "Home Assistant",
    "verdict": "Supported",
    "summary": "Shelly devices can be integrated with Home Assistant through the official Shelly integration for local control and automation.",
    "requirements": [
      "Shelly device on the local network",
      "Home Assistant installation",
      "Compatible firmware"
    ],
    "limitations": [
      "Device features vary by Shelly model",
      "Cloud features and local features are not identical",
      "Network and firmware security settings must be reviewed"
    ],
    "steps": [
      "Update Shelly firmware",
      "Confirm the device is reachable on the LAN",
      "Add the Shelly integration in Home Assistant",
      "Assign areas and entities",
      "Test local automations"
    ],
    "sources": [
      {
        "label": "Home Assistant Shelly integration",
        "url": "https://www.home-assistant.io/integrations/shelly/"
      },
      {
        "label": "Shelly support",
        "url": "https://support.shelly.cloud/"
      }
    ],
    "lastVerified": "2026-10-10"
  },
  {
    "slug": "esphome-home-assistant",
    "title": "ESPHome and Home Assistant compatibility",
    "question": "Does ESPHome work with Home Assistant?",
    "category": "Local automation",
    "subject": "ESPHome",
    "target": "Home Assistant",
    "verdict": "Supported",
    "summary": "ESPHome is designed to integrate directly with Home Assistant, giving local control over supported ESP-based devices.",
    "requirements": [
      "ESP-based device supported by ESPHome",
      "Home Assistant",
      "ESPHome dashboard or command-line tooling"
    ],
    "limitations": [
      "Hardware support depends on the board and components",
      "A custom firmware update can change device behavior",
      "Secure secrets and OTA settings must be configured"
    ],
    "steps": [
      "Identify the board and chipset",
      "Create an ESPHome configuration",
      "Build and flash firmware",
      "Adopt the device in Home Assistant",
      "Test entities and automations"
    ],
    "sources": [
      {
        "label": "ESPHome getting started",
        "url": "https://esphome.io/guides/getting_started_hassio.html"
      },
      {
        "label": "Home Assistant ESPHome integration",
        "url": "https://www.home-assistant.io/integrations/esphome/"
      }
    ],
    "lastVerified": "2026-10-10"
  },
  {
    "slug": "smartthings-matter",
    "title": "SmartThings and Matter compatibility",
    "question": "Does SmartThings support Matter?",
    "category": "Matter",
    "subject": "Samsung SmartThings",
    "target": "Matter",
    "verdict": "Supported on compatible hubs and app versions",
    "summary": "SmartThings supports Matter on compatible hubs and app versions, with device feature support depending on the exact Matter device type and firmware.",
    "requirements": [
      "Compatible SmartThings hub",
      "Current SmartThings app",
      "Matter-certified device",
      "Thread border router for Thread devices"
    ],
    "limitations": [
      "Older hubs may not support Matter",
      "Not all device features appear in SmartThings",
      "Firmware and regional rollout timing can differ"
    ],
    "steps": [
      "Confirm hub compatibility",
      "Update the hub and app",
      "Put the Matter device in pairing mode",
      "Add device in SmartThings",
      "Assign room and test automations"
    ],
    "sources": [
      {
        "label": "SmartThings Matter",
        "url": "https://www.smartthings.com/matter"
      },
      {
        "label": "Matter overview",
        "url": "https://csa-iot.org/all-solutions/matter/"
      }
    ],
    "lastVerified": "2026-10-10"
  },
  {
    "slug": "philips-hue-google-home",
    "title": "Philips Hue and Google Home compatibility",
    "question": "Does Philips Hue work with Google Home?",
    "category": "Voice control",
    "subject": "Philips Hue",
    "target": "Google Home",
    "verdict": "Supported",
    "summary": "Hue lights, rooms and scenes can be controlled from Google Home after the Hue account is linked through the Philips Hue integration.",
    "requirements": [
      "Philips Hue account",
      "Hue Bridge or Bluetooth setup",
      "Google Home app"
    ],
    "limitations": [
      "Bluetooth-only setups expose fewer controls than Bridge systems",
      "Some Hue-specific effects stay inside the Hue app",
      "Feature names differ between the two apps"
    ],
    "steps": [
      "Open the Google Home app",
      "Add the Philips Hue service",
      "Sign in to the Hue account",
      "Assign rooms",
      "Test voice and app control"
    ],
    "sources": [
      {
        "label": "Philips Hue support",
        "url": "https://www.philips-hue.com/en-us/support/faq"
      },
      {
        "label": "Google Nest help",
        "url": "https://support.google.com/googlenest"
      }
    ],
    "lastVerified": "2026-10-14"
  },
  {
    "slug": "tapo-google-home",
    "title": "TP-Link Tapo and Google Home compatibility",
    "question": "Does Tapo work with Google Home?",
    "category": "Voice control",
    "subject": "TP-Link Tapo",
    "target": "Google Home",
    "verdict": "Supported for cameras, plugs and lights",
    "summary": "Tapo devices can be linked to Google Home through the Tapo integration, which exposes live view on supported cameras plus plugs and lighting controls.",
    "requirements": [
      "Tapo account and the Tapo app",
      "Google Home app",
      "Current Tapo firmware"
    ],
    "limitations": [
      "Feature set depends on the device model",
      "Camera live view requires a compatible display or the Home app",
      "Local recording and SD card settings stay in the Tapo app"
    ],
    "steps": [
      "Update the Tapo device firmware",
      "Open Google Home and add the Tapo service",
      "Link the Tapo account",
      "Assign devices to rooms",
      "Test live view and switching"
    ],
    "sources": [
      {
        "label": "TP-Link Tapo support",
        "url": "https://www.tp-link.com/us/support/"
      },
      {
        "label": "Google Nest help",
        "url": "https://support.google.com/googlenest"
      }
    ],
    "lastVerified": "2026-10-14"
  },
  {
    "slug": "roborock-google-home",
    "title": "Roborock and Google Home compatibility",
    "question": "Does Roborock work with Google Home?",
    "category": "Voice control",
    "subject": "Roborock",
    "target": "Google Home",
    "verdict": "Supported for basic commands",
    "summary": "Roborock vacuums can be linked to Google Home for start, stop, dock and room-based cleaning commands on models that expose those traits.",
    "requirements": [
      "Roborock account",
      "Google Home app",
      "Robot online in the Roborock app"
    ],
    "limitations": [
      "Map editing and fine settings remain in the Roborock app",
      "Available commands vary by model and region",
      "Multi-floor maps need correct map selection in the Roborock app"
    ],
    "steps": [
      "Confirm the robot appears in the Roborock app",
      "Add the Roborock service in Google Home",
      "Link the account and pick the device",
      "Assign a room",
      "Test start, pause and dock commands"
    ],
    "sources": [
      {
        "label": "Roborock",
        "url": "https://us.roborock.com/"
      },
      {
        "label": "Google Nest help",
        "url": "https://support.google.com/googlenest"
      }
    ],
    "lastVerified": "2026-10-14"
  },
  {
    "slug": "eufy-security-alexa",
    "title": "eufy Security and Alexa compatibility",
    "question": "Does eufy Security work with Alexa?",
    "category": "Voice control",
    "subject": "eufy Security",
    "target": "Amazon Alexa",
    "verdict": "Supported with account linking",
    "summary": "eufy Security cameras and doorbells can be linked to Alexa so supported models stream to Echo Show displays and announce events.",
    "requirements": [
      "eufy Security account and app",
      "Alexa account with the eufy Security skill enabled",
      "A camera or doorbell that supports Alexa streaming"
    ],
    "limitations": [
      "Live view needs a screen-equipped Alexa device",
      "Recording and storage settings are managed in the eufy app",
      "Not every eufy model exposes every Alexa feature"
    ],
    "steps": [
      "Confirm the model supports Alexa in the eufy app",
      "Enable the eufy Security skill in Alexa",
      "Link the eufy account",
      "Name the camera for voice control",
      "Test live view and announcements"
    ],
    "sources": [
      {
        "label": "eufy support",
        "url": "https://support.eufy.com/"
      },
      {
        "label": "Amazon Alexa",
        "url": "https://www.amazon.com/alexa"
      }
    ],
    "lastVerified": "2026-10-14"
  },
  {
    "slug": "sonoff-ewelink-alexa",
    "title": "SONOFF eWeLink and Alexa compatibility",
    "question": "Does eWeLink work with Alexa?",
    "category": "Voice control",
    "subject": "SONOFF / eWeLink",
    "target": "Amazon Alexa",
    "verdict": "Supported for switching and scenes",
    "summary": "SONOFF devices managed in the eWeLink app can be controlled by Alexa after the eWeLink skill is enabled, covering switching, scenes and some sensors.",
    "requirements": [
      "eWeLink account with the device paired",
      "Alexa app",
      "Correct regional eWeLink server"
    ],
    "limitations": [
      "Which server region you use affects the skill and device visibility",
      "DIY-flashed firmware (Tasmota, ESPHome) is not covered by the eWeLink skill",
      "Multi-channel devices need per-channel naming"
    ],
    "steps": [
      "Check the device server region in the eWeLink app",
      "Enable the eWeLink skill in Alexa",
      "Link the eWeLink account",
      "Discover devices and rename channels",
      "Test switching and scenes"
    ],
    "sources": [
      {
        "label": "eWeLink",
        "url": "https://ewelink.cc/"
      },
      {
        "label": "SONOFF support",
        "url": "https://sonoff.tech/pages/support"
      }
    ],
    "lastVerified": "2026-10-14"
  },
  {
    "slug": "govee-alexa",
    "title": "Govee and Alexa compatibility",
    "question": "Does Govee work with Alexa?",
    "category": "Voice control",
    "subject": "Govee",
    "target": "Amazon Alexa",
    "verdict": "Supported for lights and scenes",
    "summary": "Govee lights and light strips can be controlled by Alexa through the Govee Home skill, including power, brightness, colour and scene commands.",
    "requirements": [
      "Govee Home account",
      "Alexa app",
      "Wi-Fi or Bluetooth device already paired in Govee Home"
    ],
    "limitations": [
      "Music sync and DIY effects stay in the Govee Home app",
      "Bluetooth-only models cannot be controlled remotely",
      "Segment-level control is limited in voice assistants"
    ],
    "steps": [
      "Pair the device in Govee Home",
      "Enable the Govee Home skill in Alexa",
      "Link the Govee account",
      "Run discovery",
      "Test brightness, colour and scene commands"
    ],
    "sources": [
      {
        "label": "Govee",
        "url": "https://www.govee.com/"
      },
      {
        "label": "Amazon Alexa",
        "url": "https://www.amazon.com/alexa"
      }
    ],
    "lastVerified": "2026-10-14"
  },
  {
    "slug": "wyze-alexa",
    "title": "Wyze and Alexa compatibility",
    "question": "Does Wyze work with Alexa?",
    "category": "Voice control",
    "subject": "Wyze",
    "target": "Amazon Alexa",
    "verdict": "Supported for cameras and plugs",
    "summary": "Wyze cameras and plugs can be linked to Alexa so supported models stream to Echo Show devices and plugs respond to voice commands.",
    "requirements": [
      "Wyze account and app",
      "Alexa app with the Wyze skill",
      "Camera or plug that supports Alexa"
    ],
    "limitations": [
      "Live streaming is limited to screen-equipped Alexa devices",
      "Cam Plus features and recording settings stay in the Wyze app",
      "Model support varies by firmware"
    ],
    "steps": [
      "Update the Wyze device firmware",
      "Enable the Wyze skill in Alexa",
      "Link the Wyze account",
      "Name devices for voice control",
      "Test streaming and switching"
    ],
    "sources": [
      {
        "label": "Wyze",
        "url": "https://www.wyze.com/"
      },
      {
        "label": "Amazon Alexa",
        "url": "https://www.amazon.com/alexa"
      }
    ],
    "lastVerified": "2026-10-14"
  },
  {
    "slug": "switchbot-google-home",
    "title": "SwitchBot and Google Home compatibility",
    "question": "Does SwitchBot work with Google Home?",
    "category": "Voice control",
    "subject": "SwitchBot",
    "target": "Google Home",
    "verdict": "Supported with a hub or Matter",
    "summary": "SwitchBot devices can reach Google Home either through the SwitchBot integration with a hub, or directly when the device supports Matter.",
    "requirements": [
      "SwitchBot app and account",
      "SwitchBot Hub for non-Matter devices, or a Matter-enabled model",
      "Google Home app"
    ],
    "limitations": [
      "Bluetooth-only devices need a hub to be reachable remotely",
      "Matter support depends on the exact model and firmware",
      "Scene behaviour differs between the SwitchBot app and Google Home"
    ],
    "steps": [
      "Check whether the model supports Matter",
      "Add the device in the SwitchBot app",
      "Add the SwitchBot service, or pair Matter, in Google Home",
      "Assign rooms",
      "Test commands and scenes"
    ],
    "sources": [
      {
        "label": "SwitchBot",
        "url": "https://www.switch-bot.com/"
      },
      {
        "label": "Google Nest help",
        "url": "https://support.google.com/googlenest"
      }
    ],
    "lastVerified": "2026-10-14"
  },
  {
    "slug": "yolink-alexa",
    "title": "YoLink and Alexa compatibility",
    "question": "Does YoLink work with Alexa?",
    "category": "Voice control",
    "subject": "YoLink",
    "target": "Amazon Alexa",
    "verdict": "Supported with a YoLink hub",
    "summary": "YoLink sensors and controls need a YoLink hub before they can be linked to Alexa for status queries, alerts and switching.",
    "requirements": [
      "YoLink hub powered and online",
      "YoLink app with sensors paired",
      "Alexa app with the YoLink skill"
    ],
    "limitations": [
      "Sensors are not reachable without the hub",
      "Some sensor types report status only, with no voice control",
      "Alert wording is limited to what the skill exposes"
    ],
    "steps": [
      "Confirm the hub is online in the YoLink app",
      "Enable the YoLink skill in Alexa",
      "Link the YoLink account",
      "Run discovery",
      "Test status queries and alerts"
    ],
    "sources": [
      {
        "label": "YoLink",
        "url": "https://www.yosmart.com/"
      },
      {
        "label": "Amazon Alexa",
        "url": "https://www.amazon.com/alexa"
      }
    ],
    "lastVerified": "2026-10-14"
  },
  {
    "slug": "home-assistant-matter-controller",
    "title": "Home Assistant as a Matter controller",
    "question": "Can Home Assistant control Matter devices?",
    "category": "Matter",
    "subject": "Home Assistant",
    "target": "Matter",
    "verdict": "Supported through the Matter integration",
    "summary": "Home Assistant can commission and control Matter devices through its Matter integration, which runs a Matter server and works alongside Thread border routers.",
    "requirements": [
      "Home Assistant with the Matter integration installed",
      "IPv6 enabled on the network",
      "Thread border router for Thread-based devices",
      "Bluetooth for initial commissioning where required"
    ],
    "limitations": [
      "Commissioning needs Bluetooth or an existing Thread network",
      "IPv6 and mDNS must work on the network for discovery",
      "Feature support depends on the device type and cluster implementation"
    ],
    "steps": [
      "Update Home Assistant",
      "Install and start the Matter integration",
      "Commission the device with its pairing code",
      "Assign the device to an area",
      "Test control and automations"
    ],
    "sources": [
      {
        "label": "Home Assistant Matter integration",
        "url": "https://www.home-assistant.io/integrations/matter/"
      },
      {
        "label": "CSA Matter",
        "url": "https://csa-iot.org/all-solutions/matter/"
      }
    ],
    "lastVerified": "2026-10-14"
  },
  {
    "slug": "aqara-google-home",
    "title": "Aqara and Google Home compatibility",
    "question": "Does Aqara work with Google Home?",
    "category": "Voice control",
    "subject": "Aqara",
    "target": "Google Home",
    "verdict": "Supported for compatible devices",
    "summary": "Aqara devices appear in Google Home through the Aqara Home integration, with Matter adding a direct path for compatible models.",
    "requirements": [
      "Aqara Home account",
      "Aqara hub for hub-based devices",
      "Google Home app"
    ],
    "limitations": [
      "Feature exposure depends on the model",
      "Matter support requires compatible Aqara hardware and firmware",
      "Region can affect which integration is offered"
    ],
    "steps": [
      "Add the device in Aqara Home",
      "In Google Home add the Aqara service or pair Matter",
      "Link the account and assign rooms",
      "Test control and automations"
    ],
    "sources": [
      {
        "label": "Aqara support",
        "url": "https://www.aqara.com/en/support/"
      },
      {
        "label": "Google Nest help",
        "url": "https://support.google.com/googlenest"
      }
    ],
    "lastVerified": "2026-10-14"
  },
  {
    "slug": "aqara-alexa",
    "title": "Aqara and Amazon Alexa compatibility",
    "question": "Does Aqara work with Amazon Alexa?",
    "category": "Voice control",
    "subject": "Aqara",
    "target": "Amazon Alexa",
    "verdict": "Supported for compatible devices",
    "summary": "Aqara hubs can be linked to Alexa so sensors, switches and lights answer voice commands and appear in routines.",
    "requirements": [
      "Aqara Home account",
      "Aqara hub",
      "Alexa app with the Aqara skill"
    ],
    "limitations": [
      "Hub-based devices need the hub online",
      "Some sensors report status only",
      "Names must be unique in the Alexa home"
    ],
    "steps": [
      "Enable the Aqara skill in Alexa",
      "Link the Aqara account",
      "Discover devices and assign rooms",
      "Test commands and routines"
    ],
    "sources": [
      {
        "label": "Aqara support",
        "url": "https://www.aqara.com/en/support/"
      },
      {
        "label": "Amazon Alexa",
        "url": "https://www.amazon.com/alexa"
      }
    ],
    "lastVerified": "2026-10-14"
  },
  {
    "slug": "shelly-alexa",
    "title": "Shelly and Amazon Alexa compatibility",
    "question": "Does Shelly work with Amazon Alexa?",
    "category": "Voice control",
    "subject": "Shelly",
    "target": "Amazon Alexa",
    "verdict": "Supported for compatible devices",
    "summary": "Shelly relays and plugs can be controlled by Alexa after the Shelly Cloud or Matter path is set up.",
    "requirements": [
      "Shelly device on the network",
      "Ale-xa app with the Shelly skill or Matter pairing",
      "Current Shelly firmware"
    ],
    "limitations": [
      "Local-only setups without cloud or Matter are not exposed to Alexa",
      "Channel naming matters for multi-channel relays",
      "Firmware version changes available features"
    ],
    "steps": [
      "Update Shelly firmware",
      "Choose the cloud skill or Matter pairing in Alexa",
      "Discover devices",
      "Rename channels and test switching"
    ],
    "sources": [
      {
        "label": "Shelly support",
        "url": "https://shelly.com/pages/support"
      },
      {
        "label": "Amazon Alexa",
        "url": "https://www.amazon.com/alexa"
      }
    ],
    "lastVerified": "2026-10-14"
  },
  {
    "slug": "switchbot-alexa",
    "title": "SwitchBot and Amazon Alexa compatibility",
    "question": "Does SwitchBot work with Amazon Alexa?",
    "category": "Voice control",
    "subject": "SwitchBot",
    "target": "Amazon Alexa",
    "verdict": "Supported for compatible devices",
    "summary": "SwitchBot devices reach Alexa through the SwitchBot skill with a hub, or directly when the model supports Matter.",
    "requirements": [
      "SwitchBot account",
      "SwitchBot Hub for non-Matter devices",
      "Alexa app"
    ],
    "limitations": [
      "Bluetooth-only devices need a hub",
      "Matter support depends on the model",
      "Scenes differ between the SwitchBot app and Alexa"
    ],
    "steps": [
      "Add the device in the SwitchBot app",
      "Enable the skill or pair Matter in Alexa",
      "Discover devices",
      "Test commands and scenes"
    ],
    "sources": [
      {
        "label": "SwitchBot",
        "url": "https://www.switch-bot.com/"
      },
      {
        "label": "Amazon Alexa",
        "url": "https://www.amazon.com/alexa"
      }
    ],
    "lastVerified": "2026-10-14"
  },
  {
    "slug": "sonoff-google-home",
    "title": "SONOFF / eWeLink and Google Home compatibility",
    "question": "Does SONOFF / eWeLink work with Google Home?",
    "category": "Voice control",
    "subject": "SONOFF / eWeLink",
    "target": "Google Home",
    "verdict": "Supported for compatible devices",
    "summary": "SONOFF devices managed in eWeLink can be added to Google Home through the eWeLink integration, covering switching and scenes.",
    "requirements": [
      "eWeLink account with the device paired",
      "Google Home app",
      "Correct eWeLink server region"
    ],
    "limitations": [
      "Server region affects visibility",
      "DIY firmware is not covered by the integration",
      "Multi-channel devices need per-channel naming"
    ],
    "steps": [
      "Check the device region in eWeLink",
      "Add the eWeLink service in Google Home",
      "Link the account",
      "Assign rooms and test switching"
    ],
    "sources": [
      {
        "label": "eWeLink",
        "url": "https://ewelink.cc/"
      },
      {
        "label": "Google Nest help",
        "url": "https://support.google.com/googlenest"
      }
    ],
    "lastVerified": "2026-10-14"
  },
  {
    "slug": "tapo-alexa",
    "title": "TP-Link Tapo and Amazon Alexa compatibility",
    "question": "Does TP-Link Tapo work with Amazon Alexa?",
    "category": "Voice control",
    "subject": "TP-Link Tapo",
    "target": "Amazon Alexa",
    "verdict": "Supported for compatible devices",
    "summary": "Tapo cameras, plugs and lights can be linked to Alexa so supported models stream to Echo Show devices and plugs respond to voice control.",
    "requirements": [
      "Tapo account and app",
      "Alexa app with the Tapo skill",
      "Current Tapo firmware"
    ],
    "limitations": [
      "Live view requires a screen-equipped Alexa device",
      "Recording features stay in the Tapo app",
      "Model support varies"
    ],
    "steps": [
      "Update Tapo firmware",
      "Enable the Tapo skill in Alexa",
      "Link the Tapo account",
      "Test streaming and switching"
    ],
    "sources": [
      {
        "label": "TP-Link support",
        "url": "https://www.tp-link.com/us/support/"
      },
      {
        "label": "Amazon Alexa",
        "url": "https://www.amazon.com/alexa"
      }
    ],
    "lastVerified": "2026-10-14"
  },
  {
    "slug": "eufy-google-home",
    "title": "eufy Security and Google Home compatibility",
    "question": "Does eufy Security work with Google Home?",
    "category": "Voice control",
    "subject": "eufy Security",
    "target": "Google Home",
    "verdict": "Supported for compatible devices",
    "summary": "eufy cameras and doorbells can be added to Google Home so supported models stream and report events in the Home app.",
    "requirements": [
      "eufy Security account and app",
      "Google Home app",
      "Model that supports Google Home streaming"
    ],
    "limitations": [
      "Streaming needs a compatible display",
      "Local storage settings stay in the eufy app",
      "Event wording is limited to what the integration exposes"
    ],
    "steps": [
      "Confirm model support in the eufy app",
      "Add the eufy service in Google Home",
      "Link the account",
      "Test streaming and event notifications"
    ],
    "sources": [
      {
        "label": "eufy support",
        "url": "https://support.eufy.com/"
      },
      {
        "label": "Google Nest help",
        "url": "https://support.google.com/googlenest"
      }
    ],
    "lastVerified": "2026-10-14"
  },
  {
    "slug": "ring-google-home",
    "title": "Ring and Google Home compatibility",
    "question": "Does Ring work with Google Home?",
    "category": "Voice control",
    "subject": "Ring",
    "target": "Google Home",
    "verdict": "Supported for compatible devices",
    "summary": "Ring doorbells and cameras can be linked to Google Home so supported models stream to Nest displays and announce events.",
    "requirements": [
      "Ring account",
      "Google Home app",
      "Supported Ring device and region"
    ],
    "limitations": [
      "Announcements require compatible speakers or displays",
      "Ring plan features may be required for recording",
      "Feature rollout varies by region"
    ],
    "steps": [
      "Open Google Home and add the Ring service",
      "Link the Ring account",
      "Assign devices to rooms",
      "Test live view and announcements"
    ],
    "sources": [
      {
        "label": "Ring support",
        "url": "https://support.ring.com/hc/en-us"
      },
      {
        "label": "Google Nest help",
        "url": "https://support.google.com/googlenest"
      }
    ],
    "lastVerified": "2026-10-14"
  },
  {
    "slug": "wyze-google-home",
    "title": "Wyze and Google Home compatibility",
    "question": "Does Wyze work with Google Home?",
    "category": "Voice control",
    "subject": "Wyze",
    "target": "Google Home",
    "verdict": "Supported for compatible devices",
    "summary": "Wyze cameras and plugs can be linked to Google Home for live view on supported displays and switching commands.",
    "requirements": [
      "Wyze account and app",
      "Google Home app",
      "Model that supports Google Home"
    ],
    "limitations": [
      "Live view needs a display",
      "Cam Plus and recording settings stay in the Wyze app",
      "Model support varies by firmware"
    ],
    "steps": [
      "Update Wyze firmware",
      "Add the Wyze service in Google Home",
      "Link the account",
      "Test live view and switching"
    ],
    "sources": [
      {
        "label": "Wyze",
        "url": "https://www.wyze.com/"
      },
      {
        "label": "Google Nest help",
        "url": "https://support.google.com/googlenest"
      }
    ],
    "lastVerified": "2026-10-14"
  },
  {
    "slug": "govee-google-home",
    "title": "Govee and Google Home compatibility",
    "question": "Does Govee work with Google Home?",
    "category": "Voice control",
    "subject": "Govee",
    "target": "Google Home",
    "verdict": "Supported for compatible devices",
    "summary": "Govee lights and strips can be controlled from Google Home after linking the Govee Home account, including power, brightness, colour and scenes.",
    "requirements": [
      "Govee Home account",
      "Google Home app",
      "Device paired in Govee Home"
    ],
    "limitations": [
      "Music sync and DIY effects stay in the Govee app",
      "Bluetooth-only models are not remote-reachable",
      "Segment control is limited"
    ],
    "steps": [
      "Pair the device in Govee Home",
      "Add the Govee Home service in Google Home",
      "Link the account",
      "Test brightness, colour and scenes"
    ],
    "sources": [
      {
        "label": "Govee",
        "url": "https://www.govee.com/"
      },
      {
        "label": "Google Nest help",
        "url": "https://support.google.com/googlenest"
      }
    ],
    "lastVerified": "2026-10-14"
  },
  {
    "slug": "reolink-alexa",
    "title": "Reolink and Amazon Alexa compatibility",
    "question": "Does Reolink work with Amazon Alexa?",
    "category": "Voice control",
    "subject": "Reolink",
    "target": "Amazon Alexa",
    "verdict": "Supported for compatible devices",
    "summary": "Reolink cameras can be linked to Alexa so supported models stream to Echo Show devices and respond to camera commands.",
    "requirements": [
      "Reolink account and app",
      "Alexa app with the Reolink skill",
      "Camera that supports Alexa streaming"
    ],
    "limitations": [
      "Live view needs a screen-equipped device",
      "Recordings stay on the NVR, hub or microSD",
      "Model support varies"
    ],
    "steps": [
      "Update camera firmware",
      "Enable the Reolink skill in Alexa",
      "Link the account",
      "Test live view and commands"
    ],
    "sources": [
      {
        "label": "Reolink support",
        "url": "https://reolink.com/support/"
      },
      {
        "label": "Amazon Alexa",
        "url": "https://www.amazon.com/alexa"
      }
    ],
    "lastVerified": "2026-10-14"
  },
  {
    "slug": "reolink-google-home",
    "title": "Reolink and Google Home compatibility",
    "question": "Does Reolink work with Google Home?",
    "category": "Voice control",
    "subject": "Reolink",
    "target": "Google Home",
    "verdict": "Supported for compatible devices",
    "summary": "Reolink cameras can be added to Google Home so supported models stream and report motion events in the Home app.",
    "requirements": [
      "Reolink account and app",
      "Google Home app",
      "Model that supports Google Home"
    ],
    "limitations": [
      "Streaming needs a compatible display",
      "Detection zones stay in the Reolink app",
      "Model support varies by firmware"
    ],
    "steps": [
      "Confirm model support",
      "Add the Reolink service in Google Home",
      "Link the account",
      "Test streaming and motion events"
    ],
    "sources": [
      {
        "label": "Reolink support",
        "url": "https://reolink.com/support/"
      },
      {
        "label": "Google Nest help",
        "url": "https://support.google.com/googlenest"
      }
    ],
    "lastVerified": "2026-10-14"
  },
  {
    "slug": "roborock-alexa",
    "title": "Roborock and Amazon Alexa compatibility",
    "question": "Does Roborock work with Amazon Alexa?",
    "category": "Voice control",
    "subject": "Roborock",
    "target": "Amazon Alexa",
    "verdict": "Supported for compatible devices",
    "summary": "Roborock vacuums can be linked to Alexa for start, pause, dock and room cleaning commands on supported models.",
    "requirements": [
      "Roborock account",
      "Alexa app with the Roborock skill",
      "Robot online in the Roborock app"
    ],
    "limitations": [
      "Map editing stays in the Roborock app",
      "Command set varies by model and region",
      "Multi-floor maps need the right map selected"
    ],
    "steps": [
      "Confirm the robot online in the Roborock app",
      "Enable the Roborock skill in Alexa",
      "Link the account",
      "Test start, pause and dock"
    ],
    "sources": [
      {
        "label": "Roborock",
        "url": "https://us.roborock.com/"
      },
      {
        "label": "Amazon Alexa",
        "url": "https://www.amazon.com/alexa"
      }
    ],
    "lastVerified": "2026-10-14"
  },
  {
    "slug": "kasa-google-home",
    "title": "TP-Link Kasa and Google Home compatibility",
    "question": "Does TP-Link Kasa work with Google Home?",
    "category": "Voice control",
    "subject": "TP-Link Kasa",
    "target": "Google Home",
    "verdict": "Supported for compatible devices",
    "summary": "Kasa plugs, switches and bulbs can be linked to Google Home through the Kasa integration for switching and scenes.",
    "requirements": [
      "Kasa account and app",
      "Google Home app",
      "Devices added in the Kasa app"
    ],
    "limitations": [
      "Some Kasa models also support Matter, which changes the pairing path",
      "Energy monitoring views stay in the Kasa app",
      "Naming affects voice control reliability"
    ],
    "steps": [
      "Add devices in the Kasa app",
      "Add the Kasa service in Google Home",
      "Link the account and assign rooms",
      "Test switching and scenes"
    ],
    "sources": [
      {
        "label": "TP-Link support",
        "url": "https://www.tp-link.com/us/support/"
      },
      {
        "label": "Google Nest help",
        "url": "https://support.google.com/googlenest"
      }
    ],
    "lastVerified": "2026-10-14"
  },
  {
    "slug": "meross-alexa",
    "title": "Meross and Amazon Alexa compatibility",
    "question": "Does Meross work with Amazon Alexa?",
    "category": "Voice control",
    "subject": "Meross",
    "target": "Amazon Alexa",
    "verdict": "Supported for compatible devices",
    "summary": "Meross plugs, switches and garage door controllers can be controlled by Alexa after enabling the Meross skill.",
    "requirements": [
      "Meross account and app",
      "Alexa app with the Meross skill",
      "Device online in the Meross app"
    ],
    "limitations": [
      "Which server region you use affects the skill",
      "Garage door control requires the correct device type in the app",
      "Multi-channel devices need per-channel naming"
    ],
    "steps": [
      "Confirm the device online in the Meross app",
      "Enable the Meross skill in Alexa",
      "Link the account",
      "Discover devices and test control"
    ],
    "sources": [
      {
        "label": "Meross support",
        "url": "https://www.meross.com/"
      },
      {
        "label": "Amazon Alexa",
        "url": "https://www.amazon.com/alexa"
      }
    ],
    "lastVerified": "2026-10-14"
  },
  {
    "slug": "blink-alexa",
    "title": "Blink and Amazon Alexa compatibility",
    "question": "Does Blink work with Amazon Alexa?",
    "category": "Voice control",
    "subject": "Blink",
    "target": "Amazon Alexa",
    "verdict": "Supported with account linking",
    "summary": "Blink cameras and doorbells can be linked to Alexa so supported models stream to Echo Show devices and announce motion events.",
    "requirements": [
      "Blink account",
      "Alexa app with the Blink skill",
      "Camera that supports Alexa streaming"
    ],
    "limitations": [
      "Live view needs a screen-equipped device",
      "Local storage and sync module settings stay in the Blink app",
      "Model support varies by firmware"
    ],
    "steps": [
      "Enable the Blink skill in Alexa",
      "Link the Blink account",
      "Name cameras for voice control",
      "Test live view and announcements"
    ],
    "sources": [
      {
        "label": "Blink support",
        "url": "https://support.blinkforhome.com/"
      },
      {
        "label": "Amazon Alexa",
        "url": "https://www.amazon.com/alexa"
      }
    ],
    "lastVerified": "2026-10-14"
  },
  {
    "slug": "arlo-alexa",
    "title": "Arlo and Amazon Alexa compatibility",
    "question": "Does Arlo work with Amazon Alexa?",
    "category": "Voice control",
    "subject": "Arlo",
    "target": "Amazon Alexa",
    "verdict": "Supported for cameras and doorbells",
    "summary": "Arlo cameras can be linked to Alexa so supported models stream to Echo Show devices and answer camera commands.",
    "requirements": [
      "Arlo account and app",
      "Alexa app with the Arlo skill",
      "Model that supports Alexa streaming"
    ],
    "limitations": [
      "Streaming requires a screen-equipped Alexa device",
      "Recording plans and local storage stay in the Arlo app",
      "Feature set differs between models"
    ],
    "steps": [
      "Enable the Arlo skill in Alexa",
      "Link the Arlo account",
      "Run discovery and rename cameras",
      "Test live view and commands"
    ],
    "sources": [
      {
        "label": "Arlo support",
        "url": "https://support.arlo.com/"
      },
      {
        "label": "Amazon Alexa",
        "url": "https://www.amazon.com/alexa"
      }
    ],
    "lastVerified": "2026-10-14"
  },
  {
    "slug": "ecobee-alexa",
    "title": "ecobee and Amazon Alexa compatibility",
    "question": "Does ecobee work with Amazon Alexa?",
    "category": "Voice control",
    "subject": "ecobee",
    "target": "Amazon Alexa",
    "verdict": "Supported",
    "summary": "ecobee thermostats and sensors can be controlled by Alexa after the ecobee skill is enabled, including setpoint and comfort settings.",
    "requirements": [
      "ecobee account and app",
      "Alexa app with the ecobee skill",
      "Thermostat online in the ecobee app"
    ],
    "limitations": [
      "Advanced scheduling stays in the ecobee app",
      "Sensor naming affects voice control",
      "Some features depend on your HVAC system"
    ],
    "steps": [
      "Enable the ecobee skill in Alexa",
      "Link the ecobee account",
      "Run discovery and name the thermostat",
      "Test setpoint and comfort commands"
    ],
    "sources": [
      {
        "label": "ecobee support",
        "url": "https://support.ecobee.com/"
      },
      {
        "label": "Amazon Alexa",
        "url": "https://www.amazon.com/alexa"
      }
    ],
    "lastVerified": "2026-10-14"
  },
  {
    "slug": "wiz-alexa",
    "title": "WiZ and Amazon Alexa compatibility",
    "question": "Does WiZ work with Amazon Alexa?",
    "category": "Voice control",
    "subject": "WiZ",
    "target": "Amazon Alexa",
    "verdict": "Supported",
    "summary": "WiZ lights can be controlled by Alexa through the WiZ skill, including power, brightness, colour and scenes.",
    "requirements": [
      "WiZ account and app",
      "Alexa app with the WiZ skill",
      "Lights already paired in the WiZ app"
    ],
    "limitations": [
      "Dynamic scenes stay in the WiZ app",
      "Bluetooth-only setup limits remote control",
      "Segment control is limited"
    ],
    "steps": [
      "Pair lights in the WiZ app",
      "Enable the WiZ skill in Alexa",
      "Link the account",
      "Test brightness, colour and scenes"
    ],
    "sources": [
      {
        "label": "WiZ support",
        "url": "https://www.wizconnected.com/"
      },
      {
        "label": "Amazon Alexa",
        "url": "https://www.amazon.com/alexa"
      }
    ],
    "lastVerified": "2026-10-14"
  },
  {
    "slug": "meross-google-home",
    "title": "Meross and Google Home compatibility",
    "question": "Does Meross work with Google Home?",
    "category": "Voice control",
    "subject": "Meross",
    "target": "Google Home",
    "verdict": "Supported",
    "summary": "Meross plugs, switches and garage controllers can be added to Google Home through the Meross integration.",
    "requirements": [
      "Meross account and app",
      "Google Home app",
      "Device online in the Meross app"
    ],
    "limitations": [
      "Server region affects visibility",
      "Garage control needs the correct device type",
      "Multi-channel devices need per-channel naming"
    ],
    "steps": [
      "Confirm the device is online in the Meross app",
      "Add the Meross service in Google Home",
      "Link the account",
      "Assign rooms and test control"
    ],
    "sources": [
      {
        "label": "Meross support",
        "url": "https://www.meross.com/"
      },
      {
        "label": "Google Nest help",
        "url": "https://support.google.com/googlenest"
      }
    ],
    "lastVerified": "2026-10-14"
  },
  {
    "slug": "tuya-home-assistant",
    "title": "Tuya / Smart Life and Home Assistant compatibility",
    "question": "Does Tuya / Smart Life work with Home Assistant?",
    "category": "Voice control",
    "subject": "Tuya / Smart Life",
    "target": "Home Assistant",
    "verdict": "Supported through the official Tuya integration",
    "summary": "Home Assistant can control Tuya and Smart Life devices through its official Tuya integration, which links the device cloud to the local dashboard.",
    "requirements": [
      "Home Assistant instance",
      "Tuya IoT Platform account with the devices linked",
      "Tuya integration installed in Home Assistant"
    ],
    "limitations": [
      "The official integration is cloud-based; local control needs community projects",
      "Smart Life accounts must be linked to Tuya IoT Platform",
      "Entity naming follows the Tuya device names"
    ],
    "steps": [
      "Create a Tuya IoT Platform project and link the app account",
      "Add the Tuya integration in Home Assistant",
      "Authorise the account",
      "Assign entities to areas and test control"
    ],
    "sources": [
      {
        "label": "Home Assistant Tuya integration",
        "url": "https://www.home-assistant.io/integrations/tuya/"
      },
      {
        "label": "Tuya",
        "url": "https://www.tuya.com/"
      }
    ],
    "lastVerified": "2026-10-14"
  },
  {
    "slug": "eufy-security-apple-home",
    "title": "eufy Security and Apple Home compatibility",
    "question": "Does eufy Security work with Apple Home?",
    "category": "Voice control",
    "subject": "eufy Security",
    "target": "Apple Home",
    "verdict": "Supported on HomeKit-compatible models",
    "summary": "Some eufy cameras support Apple Home through HomeKit, including HomeKit Secure Video where the model and firmware allow it.",
    "requirements": [
      "Apple Home hub for remote access and recording",
      "eufy Security app and account",
      "Camera model that supports HomeKit"
    ],
    "limitations": [
      "Not every eufy model supports HomeKit",
      "HomeKit Secure Video needs a supported iCloud plan",
      "Features differ between the eufy app and Apple Home"
    ],
    "steps": [
      "Check the model for HomeKit support in the eufy app",
      "Update camera firmware",
      "Add the HomeKit code in the Apple Home app",
      "Assign rooms and test recording"
    ],
    "sources": [
      {
        "label": "eufy support",
        "url": "https://support.eufy.com/"
      },
      {
        "label": "Apple support",
        "url": "https://support.apple.com/"
      }
    ],
    "lastVerified": "2026-10-14"
  },
  {
    "slug": "kasa-matter",
    "title": "TP-Link Kasa and Matter compatibility",
    "question": "Does TP-Link Kasa work with Matter?",
    "category": "Voice control",
    "subject": "TP-Link Kasa",
    "target": "Matter",
    "verdict": "Supported on current models with Matter firmware",
    "summary": "Several Kasa plugs, switches and bulbs support Matter, which lets them pair directly with a Matter controller instead of the Kasa cloud integration.",
    "requirements": [
      "Matter-enabled Kasa model",
      "Matter controller or hub",
      "Current firmware and the Kasa app for setup"
    ],
    "limitations": [
      "Older Kasa models do not support Matter",
      "Firmware must be updated before pairing",
      "Energy monitoring views stay in the Kasa app"
    ],
    "steps": [
      "Update the device firmware in the Kasa app",
      "Find the Matter pairing code in the app or on the label",
      "Pair in the controller app",
      "Test switching and, where supported, power readings"
    ],
    "sources": [
      {
        "label": "TP-Link support",
        "url": "https://www.tp-link.com/us/support/"
      },
      {
        "label": "CSA Matter",
        "url": "https://csa-iot.org/all-solutions/matter/"
      }
    ],
    "lastVerified": "2026-10-14"
  },
  {
    "slug": "tapo-matter",
    "title": "TP-Link Tapo and Matter compatibility",
    "question": "Does TP-Link Tapo work with Matter?",
    "category": "Voice control",
    "subject": "TP-Link Tapo",
    "target": "Matter",
    "verdict": "Supported on selected models",
    "summary": "Selected Tapo plugs, bulbs and sensors support Matter, allowing direct pairing with Matter controllers alongside the Tapo app.",
    "requirements": [
      "Matter-enabled Tapo model",
      "Matter controller",
      "Up-to-date firmware"
    ],
    "limitations": [
      "Support varies by model and region",
      "Some features remain app-only",
      "Matter firmware rollout differs per SKU"
    ],
    "steps": [
      "Check the model page for Matter support",
      "Update firmware",
      "Pair with the Matter code in the controller app",
      "Verify control and any local automations"
    ],
    "sources": [
      {
        "label": "TP-Link support",
        "url": "https://www.tp-link.com/us/support/"
      },
      {
        "label": "CSA Matter",
        "url": "https://csa-iot.org/all-solutions/matter/"
      }
    ],
    "lastVerified": "2026-10-14"
  },
  {
    "slug": "switchbot-matter",
    "title": "SwitchBot and Matter compatibility",
    "question": "Does SwitchBot work with Matter?",
    "category": "Voice control",
    "subject": "SwitchBot",
    "target": "Matter",
    "verdict": "Supported through compatible hubs",
    "summary": "Selected SwitchBot devices reach Matter controllers through a compatible SwitchBot hub, which acts as the bridge.",
    "requirements": [
      "SwitchBot Hub that supports Matter",
      "Matter controller",
      "Devices added in the SwitchBot app"
    ],
    "limitations": [
      "Bluetooth-only devices need the hub",
      "Which devices are exposed depends on hub firmware",
      "Scene behaviour differs between apps"
    ],
    "steps": [
      "Update the hub firmware",
      "Enable Matter in the SwitchBot app",
      "Pair the hub in the Matter controller",
      "Test device control"
    ],
    "sources": [
      {
        "label": "SwitchBot",
        "url": "https://www.switch-bot.com/"
      },
      {
        "label": "CSA Matter",
        "url": "https://csa-iot.org/all-solutions/matter/"
      }
    ],
    "lastVerified": "2026-10-14"
  },
  {
    "slug": "shelly-matter",
    "title": "Shelly and Matter compatibility",
    "question": "Does Shelly work with Matter?",
    "category": "Voice control",
    "subject": "Shelly",
    "target": "Matter",
    "verdict": "Supported on Gen2 and Gen3 devices with Matter firmware",
    "summary": "Shelly relays and plugs based on Gen2 or Gen3 hardware can be exposed to Matter controllers, in addition to local and cloud control.",
    "requirements": [
      "Shelly Gen2 or Gen3 device",
      "Matter controller",
      "Firmware that includes Matter support"
    ],
    "limitations": [
      "Older Gen1 devices are not supported",
      "Local scripts and webhooks are separate from Matter",
      "Feature exposure depends on firmware"
    ],
    "steps": [
      "Check the device generation",
      "Update to Matter-capable firmware",
      "Enable Matter and pair in the controller app",
      "Test switching and local control"
    ],
    "sources": [
      {
        "label": "Shelly support",
        "url": "https://shelly.com/pages/support"
      },
      {
        "label": "CSA Matter",
        "url": "https://csa-iot.org/all-solutions/matter/"
      }
    ],
    "lastVerified": "2026-10-14"
  },
  {
    "slug": "aqara-matter",
    "title": "Aqara and Matter compatibility",
    "question": "Does Aqara work with Matter?",
    "category": "Voice control",
    "subject": "Aqara",
    "target": "Matter",
    "verdict": "Supported through compatible Aqara hubs",
    "summary": "Aqara exposes selected devices to Matter controllers through hubs such as the M2 and M3, which bridge the Zigbee devices into Matter.",
    "requirements": [
      "Compatible Aqara hub",
      "Matter controller",
      "Aqara Home app"
    ],
    "limitations": [
      "Which devices are exposed depends on hub model and firmware",
      "Some Aqara-specific features stay in the Aqara app",
      "Not every Aqara device supports bridging"
    ],
    "steps": [
      "Update the hub firmware",
      "Enable Matter bridging in the Aqara app",
      "Pair the hub in the Matter controller",
      "Verify the bridged devices and test control"
    ],
    "sources": [
      {
        "label": "Aqara support",
        "url": "https://www.aqara.com/en/support/"
      },
      {
        "label": "CSA Matter",
        "url": "https://csa-iot.org/all-solutions/matter/"
      }
    ],
    "lastVerified": "2026-10-14"
  }
];
