window.IOT_TROUBLESHOOTING = [
  {
    "slug": "camera-will-not-connect-to-wifi",
    "title": "Camera will not connect to Wi-Fi",
    "symptom": "A security camera cannot join the local Wi-Fi network or repeatedly drops offline.",
    "category": "Security Cameras",
    "appliesTo": [
      "Wi-Fi cameras",
      "Battery cameras",
      "Indoor and outdoor cameras"
    ],
    "likelyCauses": [
      "2.4 GHz-only camera paired to a 5 GHz network",
      "Weak signal at the installation point",
      "Wrong Wi-Fi password or security mode",
      "Router isolation or guest network restrictions",
      "Camera already paired to another account"
    ],
    "quickChecks": [
      "Confirm the camera supports 2.4 GHz and/or 5 GHz",
      "Move the camera near the router for setup",
      "Confirm the password and SSID",
      "Disable client isolation during setup",
      "Remove the old device entry from the app if needed"
    ],
    "steps": [
      "Factory reset the camera using the official procedure",
      "Connect the phone to the intended 2.4 GHz network",
      "Open the official app and start a fresh pairing",
      "Enter the correct Wi-Fi credentials",
      "Wait for the pairing confirmation before moving the camera",
      "Test live view at the final installation point"
    ],
    "escalation": "If the camera connects near the router but fails outside, improve Wi-Fi coverage with a mesh node or access point rather than repeatedly resetting the camera.",
    "sources": [
      {
        "label": "Reolink support",
        "url": "https://support.reolink.com/hc/en-us/"
      },
      {
        "label": "TP-Link support",
        "url": "https://www.tp-link.com/us/support/"
      }
    ],
    "lastVerified": "2026-10-10"
  },
  {
    "slug": "matter-device-will-not-pair",
    "title": "Matter device will not pair",
    "symptom": "The Matter setup code fails, the device is not discovered or pairing stops before completion.",
    "category": "Matter",
    "appliesTo": [
      "Matter devices",
      "Apple Home",
      "Google Home",
      "Alexa",
      "SmartThings"
    ],
    "likelyCauses": [
      "Device is not in pairing mode",
      "Phone is on the wrong Wi-Fi or Thread network",
      "Thread border router unavailable",
      "Old controller firmware",
      "Setup code already used or device still paired elsewhere"
    ],
    "quickChecks": [
      "Confirm the device is Matter-certified",
      "Check whether the device uses Wi-Fi or Thread",
      "Update the controller and device firmware",
      "Confirm Bluetooth is enabled during commissioning",
      "Remove stale pairings from other ecosystems"
    ],
    "steps": [
      "Reset the Matter device using the manufacturer procedure",
      "Open the intended controller app",
      "Scan the Matter QR code or enter the manual pairing code",
      "Keep the phone near the device during commissioning",
      "Complete naming and room assignment",
      "Test local control before adding a second controller"
    ],
    "escalation": "For Thread devices, verify that a compatible Thread border router is online and that IPv6 is enabled on the network.",
    "sources": [
      {
        "label": "Matter overview",
        "url": "https://csa-iot.org/all-solutions/matter/"
      },
      {
        "label": "SmartThings Matter",
        "url": "https://www.smartthings.com/matter"
      }
    ],
    "lastVerified": "2026-10-10"
  },
  {
    "slug": "zigbee-device-offline",
    "title": "Zigbee device keeps going offline",
    "symptom": "A Zigbee sensor, light or lock shows offline or responds slowly in the app.",
    "category": "Zigbee",
    "appliesTo": [
      "Zigbee sensors",
      "Zigbee lights",
      "Zigbee locks",
      "Zigbee hubs"
    ],
    "likelyCauses": [
      "Weak mesh coverage",
      "Hub or coordinator overloaded",
      "Wi-Fi and Zigbee channel interference",
      "Battery or power issue",
      "Device dropped from the mesh"
    ],
    "quickChecks": [
      "Check battery and power",
      "Confirm the hub is online",
      "Review Zigbee channel and Wi-Fi channel overlap",
      "Check how many routers are in the Zigbee mesh",
      "Test the device near the hub"
    ],
    "steps": [
      "Bring the device near the hub and test",
      "Re-pair it if it remains offline",
      "Add a mains-powered Zigbee router device between hub and sensor",
      "Move the hub away from the router and USB 3 devices",
      "Rebuild or refresh the mesh if the platform supports it"
    ],
    "escalation": "If only one room fails, treat it as a coverage problem first. If all devices fail, troubleshoot the hub, coordinator and channel plan.",
    "sources": [
      {
        "label": "Home Assistant Zigbee guidance",
        "url": "https://www.home-assistant.io/integrations/zha/"
      },
      {
        "label": "CSA connectivity standards",
        "url": "https://csa-iot.org/all-solutions/"
      }
    ],
    "lastVerified": "2026-10-10"
  },
  {
    "slug": "smart-life-device-not-found",
    "title": "Smart Life cannot find a device",
    "symptom": "A Tuya or Smart Life device is not discovered during pairing.",
    "category": "Smart Home",
    "appliesTo": [
      "Tuya Smart",
      "Smart Life",
      "White-label Tuya apps"
    ],
    "likelyCauses": [
      "Device is in a different pairing mode",
      "Bluetooth or location permission is blocked",
      "Device is paired to another account",
      "App region or data center mismatch",
      "Unsupported Wi-Fi band during commissioning"
    ],
    "quickChecks": [
      "Confirm the correct app and account region",
      "Enable Bluetooth and local network permissions",
      "Place the device near the phone",
      "Reset the device to pairing mode",
      "Check whether it is already paired to another account"
    ],
    "steps": [
      "Remove any previous device entry",
      "Reset the device according to the manufacturer manual",
      "Open the matching app and choose Add Device",
      "Select auto-discovery or the correct category",
      "Complete Wi-Fi credentials and wait for the device to register",
      "Rename the device and test control"
    ],
    "escalation": "If the device uses a manufacturer-specific white-label app, do not assume Tuya Smart or Smart Life will control it. Verify the app stated in the official manual.",
    "sources": [
      {
        "label": "Tuya support",
        "url": "https://www.tuya.com/"
      }
    ],
    "lastVerified": "2026-10-10"
  },
  {
    "slug": "ring-doorbell-offline",
    "title": "Ring doorbell shows offline",
    "symptom": "The Ring doorbell appears offline or stops sending notifications.",
    "category": "Video Doorbells",
    "appliesTo": [
      "Ring doorbells",
      "Ring cameras"
    ],
    "likelyCauses": [
      "Weak Wi-Fi signal",
      "Battery or power issue",
      "Router or ISP outage",
      "Ring service or account issue",
      "Device needs restart"
    ],
    "quickChecks": [
      "Check battery or wired power",
      "Test Wi-Fi at the door location",
      "Check the Ring status page and home internet",
      "Confirm the device is not in setup mode"
    ],
    "steps": [
      "Open the Ring app and check device health",
      "Restart the router if other devices are offline",
      "Power-cycle the doorbell using the official procedure",
      "Reconnect to Wi-Fi if credentials or network changed",
      "Test motion alerts and live view"
    ],
    "escalation": "If only the doorbell is offline, focus on door-side Wi-Fi coverage, transformer power or battery condition.",
    "sources": [
      {
        "label": "Ring support",
        "url": "https://support.ring.com/hc/en-us"
      }
    ],
    "lastVerified": "2026-10-10"
  },
  {
    "slug": "sd-card-not-detected",
    "title": "Camera does not detect the microSD card",
    "symptom": "The camera app reports no storage, format failure or unusable local recording.",
    "category": "Storage",
    "appliesTo": [
      "Security cameras",
      "Trail cameras",
      "Dash cameras"
    ],
    "likelyCauses": [
      "Card format is unsupported",
      "Counterfeit or worn card",
      "Card exceeds supported capacity",
      "Firmware bug",
      "Card inserted incorrectly"
    ],
    "quickChecks": [
      "Confirm the maximum supported capacity",
      "Use a reputable card rated for continuous recording",
      "Format the card in the camera or official app",
      "Check the card on a computer",
      "Update camera firmware"
    ],
    "steps": [
      "Power off the camera",
      "Remove and reinsert the card correctly",
      "Let the camera or app format the card",
      "Test recording locally",
      "Replace the card if format or write operations still fail"
    ],
    "escalation": "Continuous-recording cameras require high-endurance cards. A card that works in a phone may still fail in a camera.",
    "sources": [
      {
        "label": "Reolink support",
        "url": "https://support.reolink.com/hc/en-us/"
      },
      {
        "label": "Wyze support",
        "url": "https://support.wyze.com/"
      }
    ],
    "lastVerified": "2026-10-10"
  },
  {
    "slug": "smart-lock-calibration-failed",
    "title": "Smart lock calibration failed",
    "symptom": "The lock app reports calibration failure, incorrect lock state or incomplete bolt travel.",
    "category": "Smart Locks",
    "appliesTo": [
      "Retrofit locks",
      "Deadbolt locks",
      "Matter locks"
    ],
    "likelyCauses": [
      "Door alignment or strike plate friction",
      "Bolt not moving freely",
      "Adapter or mounting issue",
      "Battery level too low",
      "Firmware or app calibration state"
    ],
    "quickChecks": [
      "Check manual bolt movement",
      "Inspect door alignment and strike plate",
      "Replace batteries",
      "Confirm the correct adapter and installation",
      "Update firmware"
    ],
    "steps": [
      "Calibrate with the door open",
      "Check whether the bolt moves freely by hand",
      "Adjust the strike plate or door alignment",
      "Run calibration again",
      "Test lock and unlock several times",
      "Reinstall the app device entry only if calibration remains corrupted"
    ],
    "escalation": "Do not force the motor. Friction in the door frame is a mechanical problem that software calibration cannot solve.",
    "sources": [
      {
        "label": "Aqara support",
        "url": "https://www.aqara.com/en/support/"
      }
    ],
    "lastVerified": "2026-10-10"
  },
  {
    "slug": "iot-certificate-rotation",
    "title": "IoT certificate rotation failed",
    "symptom": "A device fleet cannot reconnect after a certificate expires or a rotation policy changes.",
    "category": "Cloud IoT",
    "appliesTo": [
      "AWS IoT Core",
      "Azure IoT Hub",
      "Huawei Cloud IoTDA",
      "Other MQTT platforms"
    ],
    "likelyCauses": [
      "Expired device certificate",
      "Wrong CA chain",
      "Clock skew on the device",
      "Policy or thing registration mismatch",
      "OTA rotation job failed"
    ],
    "quickChecks": [
      "Check certificate validity dates",
      "Confirm the device clock",
      "Validate the CA chain",
      "Compare device identity and policy in the cloud console",
      "Test one pilot device before fleet rollout"
    ],
    "steps": [
      "Identify the affected certificate and device group",
      "Issue the replacement certificate",
      "Test mutual TLS from one pilot device",
      "Deploy rotation through a controlled OTA job",
      "Monitor reconnect and error rates",
      "Revoke the old certificate after the rollout"
    ],
    "escalation": "Always keep a documented rollback path. Never rotate the entire fleet before validating DNS, time sync, TLS and the provisioning workflow.",
    "sources": [
      {
        "label": "AWS IoT security documentation",
        "url": "https://docs.aws.amazon.com/iot/"
      },
      {
        "label": "Azure IoT security documentation",
        "url": "https://learn.microsoft.com/azure/iot/"
      }
    ],
    "lastVerified": "2026-10-10"
  },
  {
    "slug": "robot-vacuum-cannot-find-dock",
    "title": "Robot vacuum cannot find its dock",
    "symptom": "The robot cleans but cannot return to the charging dock, or it reports that it is lost.",
    "category": "Robot Vacuums",
    "escalation": "If the robot finds the dock from the app but not when it finishes a run, the saved map is usually stale: delete the map, relearn and re-add the no-go zones rather than moving the dock again.",
    "appliesTo": [
      "Robot vacuums with a charging dock",
      "Robot vacuum and mop combos"
    ],
    "likelyCauses": [
      "Dock moved after the map was saved",
      "Dock power cable or adapter unplugged",
      "Dock placed with obstructed approach or on a dark surface",
      "Lidar or camera sensor covered with dust",
      "Saved map out of date after furniture changed"
    ],
    "quickChecks": [
      "Check that the dock light is on",
      "Confirm the dock is on a hard, level surface with clear space in front",
      "Wipe the sensors and charging contacts",
      "Check the app for a lost or incomplete map"
    ],
    "steps": [
      "Return the robot to the dock by hand and confirm it charges",
      "Clean the dock contacts and the robot charging pads",
      "In the app, delete and rebuild the map",
      "Re-add no-go zones and room names",
      "Run a short clean and watch the return-to-dock behaviour",
      "Only then move the dock if placement is still wrong"
    ],
    "sources": [
      {
        "label": "Roborock support",
        "url": "https://us.roborock.com/"
      },
      {
        "label": "eufy support",
        "url": "https://support.eufy.com/"
      }
    ],
    "lastVerified": "2026-10-14"
  },
  {
    "slug": "smart-plug-online-but-not-switching",
    "title": "Smart plug shows online but does not switch",
    "symptom": "The plug reports online in the app, but toggling it does nothing or the relay clicks and returns to the previous state.",
    "category": "Smart Home",
    "escalation": "If the plug is warm, buzzes or trips a breaker, stop using it and replace it. Switching faults on mains hardware are a safety issue, not a software one.",
    "appliesTo": [
      "Wi-Fi smart plugs",
      "Zigbee and Matter plugs",
      "Plug-in energy monitors"
    ],
    "likelyCauses": [
      "Firmware update in progress or failed",
      "Local safety limit or power threshold triggered",
      "Relay has reached end of life after heavy switching",
      "Automation or schedule overriding manual control",
      "Cloud or account state out of sync with the device"
    ],
    "quickChecks": [
      "Try the physical button on the plug",
      "Check the app for a firmware update prompt or error",
      "Disable schedules and automations for that plug",
      "Confirm the plug is not reporting over-temperature or over-power"
    ],
    "steps": [
      "Press the physical button to test basic switching",
      "Remove any schedule or scene for the plug",
      "Update firmware and wait for the reboot",
      "Power-cycle the plug at the socket for ten seconds",
      "Re-test switching from the app",
      "If the relay still does not hold, replace the plug"
    ],
    "sources": [
      {
        "label": "TP-Link support",
        "url": "https://www.tp-link.com/us/support/"
      },
      {
        "label": "SONOFF support",
        "url": "https://sonoff.tech/pages/support"
      }
    ],
    "lastVerified": "2026-10-14"
  },
  {
    "slug": "doorbell-no-motion-alerts",
    "title": "Video doorbell sends no motion alerts",
    "symptom": "Live view works but motion notifications never arrive on the phone.",
    "category": "Video Doorbells",
    "escalation": "If alerts arrive while the app is open but never in the background, the phone is killing the app: check battery optimisation and background refresh for the app rather than reinstalling the doorbell.",
    "appliesTo": [
      "Battery video doorbells",
      "Wired doorbells",
      "Camera doorbells with PIR sensors"
    ],
    "likelyCauses": [
      "Notification permission disabled for the app",
      "Sensitivity or motion zones set so the area is excluded",
      "Phone battery optimisation stopping background alerts",
      "Subscription feature expired or not enabled",
      "Firmware bug after an update"
    ],
    "quickChecks": [
      "Check the phone notification settings for the app",
      "Open motion zones and sensitivity in the app",
      "Confirm the doorbell is online in the app",
      "Check whether alerts arrive with the app open"
    ],
    "steps": [
      "Review motion zones, sensitivity and alert schedule",
      "Enable background refresh and disable battery optimisation for the app",
      "Update the doorbell and app firmware",
      "Test in front of the doorbell with the app closed",
      "If alerts never fire, reset the device and re-add it to the account"
    ],
    "sources": [
      {
        "label": "eufy support",
        "url": "https://support.eufy.com/"
      },
      {
        "label": "Wyze",
        "url": "https://www.wyze.com/"
      }
    ],
    "lastVerified": "2026-10-14"
  },
  {
    "slug": "app-account-region-mismatch",
    "title": "The app cannot find a device because of the account region",
    "symptom": "After moving, changing Wi-Fi or reinstalling the app, a device that used to work is invisible during pairing.",
    "category": "Smart Home",
    "escalation": "Do not factory-reset the device before checking the region: a factory reset on a device bound to another region usually makes the problem worse and can delete local schedules.",
    "appliesTo": [
      "Tuya and Smart Life devices",
      "Aqara and Mi Home devices",
      "Cloud accounts with regional data centres"
    ],
    "likelyCauses": [
      "App account is registered in a different region than the device",
      "Data centre selection changed during app installation",
      "Device is still claimed by another account",
      "Device was bought in a region whose server differs from the phone account"
    ],
    "quickChecks": [
      "Check the account region in the app settings",
      "Compare the app data centre with the country where you bought the device",
      "Confirm the device appears offline rather than missing in the old account",
      "Check whether the device is still bound to a previous owner"
    ],
    "steps": [
      "Open the app settings and read the account region",
      "If needed, register a second account in the device region",
      "Remove the device from the old account first",
      "Reset and pair the device on the matching region account",
      "Document which account owns which device to avoid repeating this"
    ],
    "sources": [
      {
        "label": "eWeLink",
        "url": "https://ewelink.cc/"
      },
      {
        "label": "Smart Life support",
        "url": "https://www.tuya.com/"
      }
    ],
    "lastVerified": "2026-10-14"
  },
  {
    "slug": "streaming-device-wont-join-wifi",
    "title": "Streaming device or smart TV will not join Wi-Fi",
    "symptom": "A TV, stick or streaming device cannot see the network or fails at the password step.",
    "category": "TV and Streaming",
    "escalation": "If the TV connects to a phone hotspot but never to the home router, suspect the router security mode or band steering rather than the TV.",
    "appliesTo": [
      "Smart TVs",
      "Streaming sticks and boxes",
      "Wireless speakers and soundbars"
    ],
    "likelyCauses": [
      "Device supports only 2.4 GHz while the network name exists on 5 GHz",
      "WPA3-only or mixed security mode not supported by older firmware",
      "Special characters in the password rejected by the device keyboard",
      "MAC filtering or access control list on the router",
      "Router band steering hiding the 2.4 GHz SSID"
    ],
    "quickChecks": [
      "Check the device specifications for the supported bands",
      "Temporarily disable WPA3 or use WPA2/WPA3 mixed mode",
      "Try the password on a phone keyboard to spot typing issues",
      "Look for MAC filtering in the router settings"
    ],
    "steps": [
      "Separate the 2.4 GHz and 5 GHz SSIDs on the router",
      "Connect the device to the 2.4 GHz network",
      "If it fails, set the router to WPA2-PSK for the test",
      "Temporarily disable band steering and access control",
      "After the device connects, restore security settings one at a time"
    ],
    "sources": [
      {
        "label": "TP-Link support",
        "url": "https://www.tp-link.com/us/support/"
      },
      {
        "label": "Apple support",
        "url": "https://support.apple.com/"
      }
    ],
    "lastVerified": "2026-10-14"
  },
  {
    "slug": "thread-device-offline-border-router",
    "title": "Thread devices go offline when the border router is down",
    "symptom": "Matter-over-Thread sensors and lights stop responding but their battery and app status look normal.",
    "category": "Thread",
    "escalation": "Thread devices depend on a working border router and IPv6. If every Thread device fails at once, troubleshoot the border router and the network before touching individual devices.",
    "appliesTo": [
      "Matter over Thread devices",
      "Thread sensors, locks and lights",
      "Apple Home, Google Home and SmartThings Thread networks"
    ],
    "likelyCauses": [
      "Border router unplugged or rebooting",
      "IPv6 disabled on the router or ISP",
      "Border router firmware out of date",
      "Thread network credentials changed after a hub reset",
      "Device dropped from the Thread network"
    ],
    "quickChecks": [
      "Check that the border router is powered and online",
      "Confirm the hub shows in the app as a Thread border router",
      "Check whether other Thread devices respond",
      "Look for a recent router or ISP change affecting IPv6"
    ],
    "steps": [
      "Power-cycle the border router and wait for it to rejoin",
      "Confirm Thread is enabled in the hub settings",
      "Re-test one device near the border router",
      "If only one device fails, remove and re-add that device",
      "If all devices fail, reset the Thread network and re-add devices in order"
    ],
    "sources": [
      {
        "label": "Home Assistant Matter integration",
        "url": "https://www.home-assistant.io/integrations/matter/"
      },
      {
        "label": "Thread Group",
        "url": "https://www.threadgroup.org/"
      }
    ],
    "lastVerified": "2026-10-14"
  },
  {
    "slug": "ble-device-wont-pair-with-phone",
    "title": "Bluetooth device will not pair with the phone",
    "symptom": "A wearable, lock or sensor in pairing mode never appears in the app or in the phone Bluetooth list.",
    "category": "Bluetooth",
    "escalation": "If the device pairs with another phone, the problem is the phone or the app permission, not the device firmware.",
    "appliesTo": [
      "Fitness bands and smart watches",
      "Bluetooth locks and trackers",
      "Sensors that pair over Bluetooth Low Energy"
    ],
    "likelyCauses": [
      "Bluetooth or location permission denied for the app",
      "Device still bonded to another phone",
      "Device not actually in pairing mode",
      "Phone Bluetooth stack needs a restart",
      "Interference or too much distance during pairing"
    ],
    "quickChecks": [
      "Turn Bluetooth off and on again",
      "Check app permissions for Bluetooth and location",
      "Confirm the device LED pattern for pairing mode",
      "Try pairing from the phone settings instead of the app"
    ],
    "steps": [
      "Remove the old bond for the device in phone settings",
      "Force-close the app and reopen it",
      "Put the device back into pairing mode and pair within one metre",
      "Complete the pairing inside the vendor app so the account is linked",
      "If it still fails, test with a second phone to isolate the cause"
    ],
    "sources": [
      {
        "label": "SwitchBot",
        "url": "https://www.switch-bot.com/"
      },
      {
        "label": "Wyze",
        "url": "https://www.wyze.com/"
      }
    ],
    "lastVerified": "2026-10-14"
  },
  {
    "slug": "firmware-update-stuck",
    "title": "Firmware update stalls at a percentage",
    "symptom": "An over-the-air update sits at the same percentage for a long time, fails, or the device becomes unresponsive afterwards.",
    "category": "Firmware",
    "escalation": "Never power off a device mid-update on purpose. If it is unresponsive after twenty minutes, follow the vendor recovery procedure rather than repeatedly cutting power.",
    "appliesTo": [
      "Cameras, hubs and sensors",
      "Wearables and watches",
      "Devices updated over Wi-Fi or Bluetooth"
    ],
    "likelyCauses": [
      "Unstable Wi-Fi or low signal during download",
      "Battery below the required level for the update",
      "Interrupted by a reboot, power cut or app being closed",
      "Update server or CDN issue",
      "Device storage or partition too full for the image"
    ],
    "quickChecks": [
      "Confirm the device is on stable power or above 50 percent battery",
      "Check Wi-Fi signal strength at the device",
      "Look for a second staged update that must run after the first",
      "Check the vendor status page for an outage"
    ],
    "steps": [
      "Move the device closer to the router for the update",
      "Keep the app in the foreground and the phone unlocked",
      "Let the update finish; a stalled progress bar can still complete",
      "If it fails, retry once from the app and not by power cycling",
      "On repeated failure, use the vendor recovery or USB update path"
    ],
    "sources": [
      {
        "label": "eufy support",
        "url": "https://support.eufy.com/"
      },
      {
        "label": "Home Assistant Matter integration",
        "url": "https://www.home-assistant.io/integrations/matter/"
      }
    ],
    "lastVerified": "2026-10-14"
  },
  {
    "slug": "voice-assistant-device-unresponsive",
    "title": "Voice assistant says the device is not responding",
    "symptom": "Alexa or Google Assistant reports that the device is not responding even though the vendor app controls it fine.",
    "category": "Voice control",
    "escalation": "If a renamed device breaks voice control but the app works, the fix is discovery and naming, not re-pairing the device.",
    "appliesTo": [
      "Alexa and Google Home integrations",
      "Skills and linked services",
      "Devices renamed or moved to another room"
    ],
    "likelyCauses": [
      "Device renamed in the vendor app after discovery",
      "Account link expired or password changed",
      "Skill or integration removed and re-added",
      "Duplicate device names in the same home",
      "Region or language mismatch in the assistant account"
    ],
    "quickChecks": [
      "Test the device in the vendor app first",
      "Say the exact device name as it appears in the assistant app",
      "Check the linked account status in the assistant app",
      "Look for duplicate entries with the same name"
    ],
    "steps": [
      "Confirm the device works in the vendor app",
      "Re-run device discovery in the assistant app",
      "Rename devices so each name is unique in the home",
      "Re-link the account if the status shows an error",
      "Disable and re-enable the skill or integration if discovery fails"
    ],
    "sources": [
      {
        "label": "Amazon Alexa",
        "url": "https://www.amazon.com/alexa"
      },
      {
        "label": "Google Nest help",
        "url": "https://support.google.com/googlenest"
      }
    ],
    "lastVerified": "2026-10-14"
  },
  {
    "slug": "camera-night-vision-problem",
    "title": "Camera night vision is washed out or stays in black and white",
    "symptom": "At night the image looks washed out, shows a bright ring, or the camera never switches to infrared.",
    "category": "Security Cameras",
    "escalation": "A washed-out night image through glass is a reflection problem: move the camera behind the glass or switch off the IR LEDs instead of replacing the camera.",
    "appliesTo": [
      "Indoor and outdoor security cameras",
      "Battery cameras with IR LEDs",
      "Doorbells with night vision"
    ],
    "likelyCauses": [
      "Camera mounted behind a window causing IR reflection",
      "IR LEDs disabled in the app or on a schedule",
      "Dust, cobwebs or water on the lens or IR ring",
      "Nearby light source defeating the day/night threshold",
      "Hardware fault in the IR cut filter after long use"
    ],
    "quickChecks": [
      "Check the night vision setting in the app",
      "Clean the lens and the ring of IR LEDs",
      "Look for a bright spot or halo in the image",
      "Test with the room in complete darkness"
    ],
    "steps": [
      "Clean the lens and IR ring with a dry microfibre cloth",
      "Set night vision to auto in the app",
      "Remove the camera from behind glass if a halo appears",
      "Adjust nearby lights so the camera is not fooled into day mode",
      "If the image stays colour in darkness, the IR cut filter is likely faulty"
    ],
    "sources": [
      {
        "label": "Reolink support",
        "url": "https://reolink.com/support/"
      },
      {
        "label": "TP-Link support",
        "url": "https://www.tp-link.com/us/support/"
      }
    ],
    "lastVerified": "2026-10-14"
  },
  {
    "slug": "smart-lock-battery-drains-fast",
    "title": "Smart lock battery drains in days",
    "symptom": "A battery-powered smart lock reports low battery far sooner than the expected months of use.",
    "category": "Smart Locks",
    "escalation": "If the lock is warm around the battery compartment or the drain continues with a fresh set of the recommended cells, stop using it and contact the manufacturer: internal drain on mains-free hardware is a safety matter.",
    "appliesTo": [
      "Retrofit smart locks",
      "Deadbolt smart locks",
      "Matter locks"
    ],
    "likelyCauses": [
      "Motor straining against a misaligned strike plate",
      "Wrong battery chemistry or brand (alkaline vs lithium requirements)",
      "Wi-Fi or Matter polling more often than the lock supports",
      "Frequent auto-unlock or geofence triggers",
      "Firmware bug or repeated pairing attempts"
    ],
    "quickChecks": [
      "Check whether the bolt moves freely by hand",
      "Confirm the battery type in the official manual",
      "Review auto-unlock and geofence settings",
      "Look for repeated reconnect or pairing events in the app"
    ],
    "steps": [
      "Lubricate and align the bolt, strike plate and frame",
      "Fit the exact battery type the manual requires",
      "Disable auto-unlock and geofence rules temporarily",
      "Re-seat the lock in the app or reset it once",
      "Monitor drain for one week with the new settings",
      "If drain continues, escalate to the manufacturer"
    ],
    "sources": [
      {
        "label": "Aqara support",
        "url": "https://www.aqara.com/en/support/"
      },
      {
        "label": "SwitchBot",
        "url": "https://www.switch-bot.com/"
      }
    ],
    "lastVerified": "2026-10-14"
  },
  {
    "slug": "wifi-camera-live-view-lag",
    "title": "Camera live view lags or keeps buffering",
    "symptom": "Live view opens but stutters, drops frames or takes many seconds to start.",
    "category": "Security Cameras",
    "escalation": "If the camera lags at high resolution but is smooth in the low-bandwidth stream, this is throughput rather than a camera fault: fix Wi-Fi coverage or use the substream.",
    "appliesTo": [
      "Wi-Fi cameras",
      "Battery cameras",
      "Cameras recording to cloud"
    ],
    "likelyCauses": [
      "Weak Wi-Fi signal at the camera",
      "Upload bandwidth saturated by other devices",
      "Streaming the main high-bitrate stream instead of the substream",
      "Camera overheating in direct sun",
      "Cloud relay or account region adding latency"
    ],
    "quickChecks": [
      "Check reported Wi-Fi signal strength in the app",
      "Try the lower-resolution stream",
      "Test live view with other devices idle",
      "Compare app performance on mobile data"
    ],
    "steps": [
      "Move the camera or add an access point closer to it",
      "Set live view to the substream for everyday checking",
      "Cap the camera bitrate or resolution in the app",
      "Update firmware and reboot the router and camera",
      "If lag persists, test with a local NVR or SD recording to isolate the network"
    ],
    "sources": [
      {
        "label": "Reolink support",
        "url": "https://reolink.com/support/"
      },
      {
        "label": "TP-Link support",
        "url": "https://www.tp-link.com/us/support/"
      }
    ],
    "lastVerified": "2026-10-14"
  },
  {
    "slug": "zigbee-pairing-fails",
    "title": "Zigbee device will not pair with the hub",
    "symptom": "A Zigbee sensor or light never joins the hub, or it joins and immediately drops.",
    "category": "Zigbee",
    "escalation": "If a device pairs near the hub but drops in place, it is a mesh coverage problem: add a mains-powered Zigbee router instead of repeatedly resetting the device.",
    "appliesTo": [
      "Zigbee sensors and lights",
      "Zigbee locks",
      "Zigbee hubs and bridges"
    ],
    "likelyCauses": [
      "Device not held in pairing mode long enough",
      "Wrong hub mode or channel after a hub firmware update",
      "Distance or wall construction blocking the join",
      "Device already paired to another hub",
      "Battery too low for the join process"
    ],
    "quickChecks": [
      "Confirm the pairing LED pattern from the manual",
      "Bring the device next to the hub and retry",
      "Check hub firmware version",
      "Replace the battery before pairing"
    ],
    "steps": [
      "Remove the device from any previous hub",
      "Reset the device to factory state",
      "Put the hub in add-device mode and pair within one metre",
      "Move the device gradually to its final position",
      "If it drops at distance, add a mains-powered Zigbee router between hub and device"
    ],
    "sources": [
      {
        "label": "Aqara support",
        "url": "https://www.aqara.com/en/support/"
      },
      {
        "label": "SONOFF support",
        "url": "https://sonoff.tech/pages/support"
      }
    ],
    "lastVerified": "2026-10-14"
  },
  {
    "slug": "hub-loses-devices-after-power-cut",
    "title": "Hub forgets devices after a power cut",
    "symptom": "After an outage the hub comes back but several devices show offline or missing.",
    "category": "Smart Home Hubs",
    "escalation": "If devices disappear after every outage, protect the hub with a small UPS or check the hub power supply rather than re-adding devices each time.",
    "appliesTo": [
      "Zigbee and Matter hubs",
      "Smart home bridges",
      "Cameras acting as hubs"
    ],
    "likelyCauses": [
      "Hub rebooted faster than the devices re-joined the mesh",
      "Devices with weak batteries failed to rejoin",
      "Network name or IP change after the outage",
      "Corrupted local database after an unclean shutdown",
      "Router took longer than the hub to come online"
    ],
    "quickChecks": [
      "Wait ten minutes and refresh the app before reacting",
      "Check whether the hub is online in the app",
      "Confirm the router and internet came back first",
      "Look for devices that also lost battery level readings"
    ],
    "steps": [
      "Reboot the router first, then the hub",
      "Wait for the mesh to re-form and refresh the app",
      "Re-add only the devices that stay offline",
      "Update hub firmware",
      "Add a small UPS for the hub and router to avoid unclean shutdowns"
    ],
    "sources": [
      {
        "label": "Home Assistant Matter integration",
        "url": "https://www.home-assistant.io/integrations/matter/"
      },
      {
        "label": "SONOFF support",
        "url": "https://sonoff.tech/pages/support"
      }
    ],
    "lastVerified": "2026-10-14"
  },
  {
    "slug": "camera-motion-detection-too-sensitive",
    "title": "Camera motion alerts fire constantly",
    "symptom": "Motion notifications trigger on swaying trees, headlights or rain instead of real events.",
    "category": "Security Cameras",
    "escalation": "If alerts only stop when detection is disabled entirely, the camera is mounted facing a trigger you cannot mask: move the camera or narrow the detection area rather than turning detection off.",
    "appliesTo": [
      "Wi-Fi cameras",
      "Battery cameras",
      "Doorbells with PIR"
    ],
    "likelyCauses": [
      "Detection zones covering roads, trees or reflections",
      "Sensitivity left at maximum",
      "PIR sensor aimed at a heat source or moving shadow",
      "Notification schedule disabled so alerts fire all day",
      "Person detection not enabled where available"
    ],
    "quickChecks": [
      "Review the detection zone drawing in the app",
      "Check sensitivity level",
      "Look at the alert thumbnails to spot the trigger",
      "Confirm whether person or vehicle detection is available"
    ],
    "steps": [
      "Redraw the detection zone to exclude the trigger",
      "Lower sensitivity one step at a time",
      "Enable person or vehicle filtering if the model supports it",
      "Set an alert schedule for the hours you care about",
      "Test for two days before adjusting again"
    ],
    "sources": [
      {
        "label": "Reolink support",
        "url": "https://reolink.com/support/"
      },
      {
        "label": "eufy support",
        "url": "https://support.eufy.com/"
      }
    ],
    "lastVerified": "2026-10-14"
  },
  {
    "slug": "smart-bulb-flickers",
    "title": "Smart bulb flickers or buzzes",
    "symptom": "An LED smart bulb flickers, buzzes or glows faintly when switched off.",
    "category": "Lighting",
    "escalation": "If the bulb flickers only on one fixture, the fixture or dimmer is incompatible. Check the bulb specification before replacing the bulb.",
    "appliesTo": [
      "Smart bulbs",
      "Smart dimmers and switches",
      "LED strips on dimmers"
    ],
    "likelyCauses": [
      "Non-dimmable bulb on a dimmer",
      "Dimming below the bulb minimum load",
      "Neutral wire missing on a smart switch",
      "Firmware dimming curve not suited to the fixture",
      "Old wiring or a failing driver in the fixture"
    ],
    "quickChecks": [
      "Confirm the bulb is dimmable and the dimmer type it supports",
      "Test the bulb in a plain on/off socket",
      "Check the minimum load for the switch",
      "Look for a firmware dimming setting in the app"
    ],
    "steps": [
      "Test the bulb in a non-dimmable socket",
      "If it is fine there, check dimmer compatibility",
      "Set a minimum brightness floor in the app",
      "Update bulb and switch firmware",
      "If flicker persists on one fixture only, replace the dimmer with a compatible model"
    ],
    "sources": [
      {
        "label": "TP-Link support",
        "url": "https://www.tp-link.com/us/support/"
      },
      {
        "label": "Govee",
        "url": "https://www.govee.com/"
      }
    ],
    "lastVerified": "2026-10-14"
  },
  {
    "slug": "doorbell-mechanical-chime-not-working",
    "title": "Wired doorbell does not ring the existing chime",
    "symptom": "The doorbell works in the app but the indoor mechanical chime no longer rings.",
    "category": "Video Doorbells",
    "escalation": "Never bridge or bypass a transformer above its rating to force a chime to work. If the chime needs more power than the transformer supplies, upgrade the transformer instead of rewiring around it.",
    "appliesTo": [
      "Wired video doorbells",
      "Doorbells replacing a mechanical chime",
      "Doorbell transformers"
    ],
    "likelyCauses": [
      "Transformer voltage below the doorbell requirement",
      "Indoor chime not enabled in the app settings",
      "Chime kit not installed or miswired",
      "Digital chime not supported by the doorbell model",
      "Existing chime mechanism worn out"
    ],
    "quickChecks": [
      "Check transformer voltage and rating",
      "Look for an indoor chime toggle in the app",
      "Confirm the chime kit wiring from the manual",
      "Test the chime by shorting the terminals briefly with care"
    ],
    "steps": [
      "Read the doorbell power requirements from the official manual",
      "Check the transformer rating printed on the unit",
      "Enable the indoor chime in the app and set the duration",
      "Reinstall the chime kit following the manufacturer diagram",
      "If it still fails, have an electrician upgrade the transformer"
    ],
    "sources": [
      {
        "label": "Ring support",
        "url": "https://support.ring.com/hc/en-us"
      },
      {
        "label": "eufy support",
        "url": "https://support.eufy.com/"
      }
    ],
    "lastVerified": "2026-10-14"
  },
  {
    "slug": "camera-sd-card-fills-quickly",
    "title": "Camera microSD card fills up in days",
    "symptom": "Local storage wraps or stops recording much sooner than expected.",
    "category": "Storage",
    "escalation": "If a high-endurance card still fills in days, the recording profile is the cause: switch to event-only recording instead of buying a larger card.",
    "appliesTo": [
      "Security cameras",
      "Trail cameras",
      "Dash cameras"
    ],
    "likelyCauses": [
      "Continuous recording enabled instead of events",
      "High bitrate or high resolution profile",
      "Too many false motion events triggering clips",
      "Card capacity small for the recording profile",
      "Card wearing out and remounting repeatedly"
    ],
    "quickChecks": [
      "Check whether recording mode is continuous or event-based",
      "Review resolution and bitrate settings",
      "Look at how many events are recorded per day",
      "Check card health and capacity"
    ],
    "steps": [
      "Switch to motion or person-event recording",
      "Lower the bitrate or resolution if quality allows",
      "Tune detection zones to reduce false events",
      "Format the card in the camera after changing settings",
      "Replace with a high-endurance card sized for the new profile"
    ],
    "sources": [
      {
        "label": "Reolink support",
        "url": "https://reolink.com/support/"
      },
      {
        "label": "TP-Link support",
        "url": "https://www.tp-link.com/us/support/"
      }
    ],
    "lastVerified": "2026-10-14"
  },
  {
    "slug": "smart-plug-turns-off-randomly",
    "title": "Smart plug turns off on its own",
    "symptom": "A plug or switch cuts power at random times without a scheduled action.",
    "category": "Electrical",
    "escalation": "If the plug switches off under load and is warm, treat it as an overload or hardware fault and stop using it until an electrician checks the circuit.",
    "appliesTo": [
      "Smart plugs",
      "Smart relays and switches",
      "Energy-monitoring plugs"
    ],
    "likelyCauses": [
      "Overload protection tripping under heavy load",
      "Automation, timer or power threshold rule still active",
      "Firmware restart after a failed update",
      "Loose wiring in the plug or socket",
      "Cloud outage leaving the device in a safe state"
    ],
    "quickChecks": [
      "Note the load connected when it switches off",
      "Check the plug temperature",
      "Review all scenes, timers and power rules",
      "Check firmware version and recent restarts"
    ],
    "steps": [
      "Disconnect the load and test switching with no load",
      "Delete every automation and timer for that plug",
      "Update firmware and reboot the plug",
      "Move the load to another circuit to compare",
      "If it still trips, replace the plug or have the circuit checked"
    ],
    "sources": [
      {
        "label": "TP-Link support",
        "url": "https://www.tp-link.com/us/support/"
      },
      {
        "label": "SONOFF support",
        "url": "https://sonoff.tech/pages/support"
      }
    ],
    "lastVerified": "2026-10-14"
  },
  {
    "slug": "wearable-steps-not-syncing",
    "title": "Fitness band or watch does not sync steps",
    "symptom": "The band shows steps on the screen but the app keeps yesterday's numbers or stays empty.",
    "category": "Wearables",
    "escalation": "If only one metric fails to sync, the problem is usually app permissions or the phone killing the app in the background, not the sensor itself.",
    "appliesTo": [
      "Fitness bands",
      "Smart watches",
      "Smart rings"
    ],
    "likelyCauses": [
      "Health platform permission denied for the app",
      "Background sync blocked by battery optimisation",
      "Bluetooth disconnected after the app was closed",
      "Multiple apps claiming the same health data",
      "Wearable storage full of unsynced records"
    ],
    "quickChecks": [
      "Open the app and force a manual sync",
      "Check health permissions for the app",
      "Confirm Bluetooth is on and the band is connected",
      "Look for a firmware update for the band"
    ],
    "steps": [
      "Force a manual sync and note whether it completes",
      "Grant health and background permissions to the app",
      "Exclude the app from battery optimisation",
      "Reboot the band and the phone",
      "Disconnect other apps from the same health platform and retest"
    ],
    "sources": [
      {
        "label": "Withings",
        "url": "https://www.withings.com/"
      },
      {
        "label": "SwitchBot",
        "url": "https://www.switch-bot.com/"
      }
    ],
    "lastVerified": "2026-10-14"
  },
  {
    "slug": "alexa-skill-wont-link",
    "title": "Alexa skill will not link the vendor account",
    "symptom": "During skill linking the login page loops, rejects the password or reports that the account cannot be linked.",
    "category": "Voice control",
    "escalation": "If linking fails on the vendor site as well as in Alexa, the account itself is the problem: reset the vendor password first rather than unlinking the skill repeatedly.",
    "appliesTo": [
      "Alexa skills for cameras, lights and plugs",
      "Google Home integrations",
      "Account-linked ecosystems"
    ],
    "likelyCauses": [
      "Wrong account type: social login versus email account",
      "Password changed on the vendor side",
      "Region mismatch between vendor and assistant accounts",
      "Vendor service outage",
      "Too many failed attempts triggering a temporary lock"
    ],
    "quickChecks": [
      "Log in to the vendor app with the same credentials",
      "Check whether the account uses single sign-on",
      "Confirm the vendor region setting",
      "Check the vendor status page"
    ],
    "steps": [
      "Reset the vendor password and log in to the vendor app",
      "Remove the skill or integration from the assistant",
      "Re-add the skill and link again",
      "Use the provider login if single sign-on applies",
      "Wait out a temporary lock, then retry"
    ],
    "sources": [
      {
        "label": "Amazon Alexa",
        "url": "https://www.amazon.com/alexa"
      },
      {
        "label": "Google Nest help",
        "url": "https://support.google.com/googlenest"
      }
    ],
    "lastVerified": "2026-10-14"
  },
  {
    "slug": "camera-two-way-audio-fails",
    "title": "Camera two-way audio does not work",
    "symptom": "You hear the camera but the person at the camera cannot hear you, or the audio is distorted.",
    "category": "Security Cameras",
    "escalation": "If audio works on a phone call but not in the camera app, the microphone permission belongs to the app, not the camera.",
    "appliesTo": [
      "Wi-Fi cameras",
      "Video doorbells",
      "Battery cameras with speakers"
    ],
    "likelyCauses": [
      "Microphone permission denied for the app",
      "The talk control must be held while speaking on some models",
      "Audio muted in the app or by privacy mode",
      "Phone busy in a call or using the microphone elsewhere",
      "Camera speaker volume set very low"
    ],
    "quickChecks": [
      "Check microphone permission for the app",
      "Confirm you are holding the talk control",
      "Look for a privacy or mute mode switch",
      "Close other apps using the microphone"
    ],
    "steps": [
      "Grant microphone permission to the camera app",
      "Hold the talk button and speak after the prompt tone",
      "Increase speaker volume in the camera settings",
      "Disable privacy mode if enabled",
      "Test from a second phone to isolate the handset"
    ],
    "sources": [
      {
        "label": "Reolink support",
        "url": "https://reolink.com/support/"
      },
      {
        "label": "TP-Link support",
        "url": "https://www.tp-link.com/us/support/"
      }
    ],
    "lastVerified": "2026-10-14"
  },
  {
    "slug": "robot-vacuum-mop-streaks",
    "title": "Robot vacuum leaves streaks or puddles",
    "symptom": "After mopping the floor shows streaks, wet spots, or the robot stops moving on wet flooring.",
    "category": "Robot Vacuums",
    "escalation": "If the robot leaks while docked, stop using the water tank and check the tank seal: internal leaks can damage the electronics.",
    "appliesTo": [
      "Robot vacuum and mop combos",
      "Robots with a water tank or dock"
    ],
    "likelyCauses": [
      "Dirty or worn mop pad",
      "Water flow set too high",
      "Pad not installed flat or already saturated",
      "Floors not vacuumed before mopping",
      "Wheel slip on wet flooring"
    ],
    "quickChecks": [
      "Check the mop pad condition and fit",
      "Review the water flow setting",
      "Vacuum before mopping",
      "Look for leaks around the tank"
    ],
    "steps": [
      "Wash or replace the mop pad",
      "Lower the water flow",
      "Run a vacuum-only pass first on dirty floors",
      "Re-seat the tank and check the seal",
      "Run a test cycle in one room and inspect the result"
    ],
    "sources": [
      {
        "label": "Roborock",
        "url": "https://us.roborock.com/"
      },
      {
        "label": "eufy support",
        "url": "https://support.eufy.com/"
      }
    ],
    "lastVerified": "2026-10-14"
  },
  {
    "slug": "smart-lock-keypad-code-fails",
    "title": "Smart lock keypad stops accepting the code",
    "symptom": "The keypad lights up but the stored code no longer unlocks the door, or codes are only rejected at certain times.",
    "category": "Smart Locks",
    "escalation": "If the keypad fails while the battery is low, replace the batteries before changing codes: low power causes partial reads rather than clean failures.",
    "appliesTo": [
      "Keypad smart locks",
      "Retrofit locks with keypads",
      "Matter locks"
    ],
    "likelyCauses": [
      "Battery below the level the keypad needs",
      "Code removed or overwritten in the app",
      "Keypad membrane wet or contaminated",
      "Firmware update interrupted",
      "Auto-lock or privacy mode blocking entry"
    ],
    "quickChecks": [
      "Check the battery level in the app",
      "Test app remote unlock, which uses the radio instead of the keypad",
      "Dry the keypad and retry",
      "Confirm the code still exists in the app"
    ],
    "steps": [
      "Replace the batteries with the recommended type",
      "Re-add the entry code in the app",
      "Wipe the keypad dry and retest",
      "Update firmware with the door open",
      "Test keypad and app unlock before relying on it again"
    ],
    "sources": [
      {
        "label": "Aqara support",
        "url": "https://www.aqara.com/en/support/"
      },
      {
        "label": "SwitchBot",
        "url": "https://www.switch-bot.com/"
      }
    ],
    "lastVerified": "2026-10-14"
  },
  {
    "slug": "wearable-heart-rate-inaccurate",
    "title": "Wearable heart rate readings look wrong",
    "symptom": "Heart rate during exercise is far lower or higher than expected, or the sensor reports large jumps.",
    "category": "Wearables",
    "escalation": "Consumer wearable heart rate is not a medical measure. If the readings matter clinically, use a validated monitor and consult a professional.",
    "appliesTo": [
      "Fitness bands",
      "Smart watches",
      "Smart rings"
    ],
    "likelyCauses": [
      "Strap or ring too loose so the sensor loses contact",
      "Sensor covered by dirt, sweat or a tattoo",
      "Worn over the wrist joint instead of above it",
      "Firmware changing the measurement algorithm",
      "Movement artefact during weights or rowing"
    ],
    "quickChecks": [
      "Check fit and position",
      "Clean the sensor area",
      "Compare at rest against a manual pulse",
      "Check for a firmware update"
    ],
    "steps": [
      "Tighten and reposition the device above the wrist bone",
      "Clean the sensor and the skin",
      "Update firmware",
      "Test during steady cardio rather than intervals or weights",
      "If readings stay erratic, arrange a service check"
    ],
    "sources": [
      {
        "label": "Withings",
        "url": "https://www.withings.com/"
      },
      {
        "label": "SwitchBot",
        "url": "https://www.switch-bot.com/"
      }
    ],
    "lastVerified": "2026-10-14"
  },
  {
    "slug": "smart-plug-no-energy-reading",
    "title": "Smart plug reports no energy data",
    "symptom": "The plug switches fine but the power or consumption figures stay at zero or are missing.",
    "category": "Electrical",
    "escalation": "If readings show a fixed value that never changes, the metering chip may have failed: no app calibration will fix that.",
    "appliesTo": [
      "Plugs with energy monitoring",
      "Energy-monitoring relays",
      "Clamp monitors"
    ],
    "likelyCauses": [
      "Load too small for the metering range",
      "Firmware without metering for that model",
      "App unit or tariff settings not configured",
      "Local safety limit shown instead of a measurement",
      "Hardware metering fault"
    ],
    "quickChecks": [
      "Connect a larger known load and watch the reading",
      "Check the model specification for metering",
      "Review units and tariff settings",
      "Update firmware"
    ],
    "steps": [
      "Test with a load the meter is designed for",
      "Confirm the model actually meters power",
      "Configure units and tariff in the app",
      "Update firmware and re-check",
      "If the reading never changes, request a warranty replacement"
    ],
    "sources": [
      {
        "label": "TP-Link support",
        "url": "https://www.tp-link.com/us/support/"
      },
      {
        "label": "eWeLink",
        "url": "https://ewelink.cc/"
      }
    ],
    "lastVerified": "2026-10-14"
  },
  {
    "slug": "video-doorbell-battery-drains-fast",
    "title": "Battery video doorbell drains in days",
    "symptom": "A battery doorbell needs charging far more often than the expected months of use.",
    "category": "Video Doorbells",
    "escalation": "If the doorbell still drains after disabling detection and lowering stream quality, the radio path or the battery is the cause: check signal strength and battery health.",
    "appliesTo": [
      "Battery video doorbells",
      "Battery cameras with frequent events"
    ],
    "likelyCauses": [
      "Too many motion events on a busy street",
      "Weak Wi-Fi forcing higher transmit power",
      "Live view used frequently",
      "Cold weather reducing battery capacity",
      "Old or non-recommended battery chemistry"
    ],
    "quickChecks": [
      "Check the event count per day",
      "Review signal strength in the app",
      "Note the outside temperature",
      "Check battery health or cycle count if reported"
    ],
    "steps": [
      "Reduce detection zones and sensitivity",
      "Lower live view resolution and clip length",
      "Move the router or add an access point closer to the door",
      "Update firmware",
      "Replace aged batteries with the recommended type and re-measure daily drain"
    ],
    "sources": [
      {
        "label": "eufy support",
        "url": "https://support.eufy.com/"
      },
      {
        "label": "Reolink support",
        "url": "https://reolink.com/support/"
      }
    ],
    "lastVerified": "2026-10-14"
  },
  {
    "slug": "camera-image-blurry",
    "title": "Camera image is blurry or out of focus",
    "symptom": "Footage looks soft even in daylight, or only part of the frame is sharp.",
    "category": "Security Cameras",
    "escalation": "If only one area of the frame is sharp, the lens is fixed-focus: reposition the camera or choose a model suited to the distance.",
    "appliesTo": [
      "Wi-Fi cameras",
      "Battery cameras",
      "Fixed-focus cameras"
    ],
    "likelyCauses": [
      "Dome or glass cover scratched or dirty",
      "Protective film left on the lens",
      "Condensation behind the lens cover",
      "Subject closer than the minimum focus distance",
      "Dirty housing reducing contrast"
    ],
    "quickChecks": [
      "Clean the lens cover with a microfibre cloth",
      "Check for a protective film",
      "Look for condensation inside the housing",
      "Test focus at different distances"
    ],
    "steps": [
      "Clean the lens and housing",
      "Remove any transit film",
      "Let the camera dry if condensation is present and check the seal",
      "Reposition the camera to suit the subject distance",
      "Compare with a second camera before replacing"
    ],
    "sources": [
      {
        "label": "Reolink support",
        "url": "https://reolink.com/support/"
      },
      {
        "label": "Wyze",
        "url": "https://www.wyze.com/"
      }
    ],
    "lastVerified": "2026-10-14"
  },
  {
    "slug": "matter-commissioning-code-rejected",
    "title": "Matter commissioning code is rejected",
    "symptom": "The controller says the pairing code is wrong, expired or already in use.",
    "category": "Matter",
    "escalation": "If the code was already used, the device is still claimed by the previous controller: remove it there first rather than retrying the code.",
    "appliesTo": [
      "Matter devices",
      "Matter controllers and hubs",
      "Thread devices during commissioning"
    ],
    "likelyCauses": [
      "Code already used to commission the device elsewhere",
      "Typing errors in the manual pairing code",
      "Device not reset to commissioning mode",
      "Controller firmware too old for the device",
      "Thread border router unavailable for Thread devices"
    ],
    "quickChecks": [
      "Check whether the device already appears in another ecosystem",
      "Verify the digits on the label or in the app",
      "Confirm the LED shows commissioning mode",
      "Update the controller app and hub firmware"
    ],
    "steps": [
      "Remove the device from any ecosystem that already has it",
      "Reset the device to commissioning mode",
      "Choose add device in the controller app",
      "Enter or scan the code once, without blind retries",
      "For Thread devices, confirm the border router is online first"
    ],
    "sources": [
      {
        "label": "Home Assistant Matter",
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
    "slug": "wifi-router-too-many-devices",
    "title": "Wi-Fi slows down with many smart devices",
    "symptom": "Smart plugs and cameras drop offline as more devices are added, and phones slow down in the same rooms.",
    "category": "Networking",
    "escalation": "If the router has reached its client limit, device tweaking will not help: add an access point or a dedicated IoT network instead of resetting devices.",
    "appliesTo": [
      "Routers with many IoT clients",
      "Mesh systems",
      "Homes with 40 or more connected devices"
    ],
    "likelyCauses": [
      "Client limit reached on the router or band",
      "2.4 GHz band congested with small devices",
      "Single access point covering too large an area",
      "DHCP pool too small for the number of devices",
      "Cheap devices holding connections open"
    ],
    "quickChecks": [
      "Count connected devices in the router interface",
      "Check which band each device uses",
      "Look for DHCP address exhaustion messages",
      "Test whether drops correlate with adding devices"
    ],
    "steps": [
      "Raise the DHCP pool or shorten lease times",
      "Move IoT devices to the 2.4 GHz band or a guest network",
      "Add an access point or mesh node",
      "Update router and device firmware",
      "Replace devices that repeatedly rejoin the network"
    ],
    "sources": [
      {
        "label": "TP-Link support",
        "url": "https://www.tp-link.com/us/support/"
      },
      {
        "label": "eWeLink",
        "url": "https://ewelink.cc/"
      }
    ],
    "lastVerified": "2026-10-14"
  },
  {
    "slug": "camera-solar-panel-not-charging",
    "title": "Solar panel does not keep the camera charged",
    "symptom": "A solar-powered camera keeps losing charge even on sunny days.",
    "category": "Power",
    "escalation": "If a multimeter shows panel output but the camera never charges, the charging circuit or cable is faulty rather than the panel.",
    "appliesTo": [
      "Solar cameras",
      "Battery cameras with solar panels",
      "Trail cameras"
    ],
    "likelyCauses": [
      "Panel in shade or at the wrong angle for the season",
      "Dirty or snow-covered panel",
      "Cable or connector corroded or loose",
      "Low winter sun plus heavy event traffic",
      "Panel undersized for the camera power draw"
    ],
    "quickChecks": [
      "Check panel orientation and shading through the day",
      "Clean the panel",
      "Inspect the cable and connector",
      "Review daily power consumption"
    ],
    "steps": [
      "Reposition and tilt the panel towards the midday sun",
      "Clean the panel and check cable and connector",
      "Reduce event traffic and live view use",
      "Update firmware and read the charge log",
      "Measure panel output if the battery still drops, then replace the faulty part"
    ],
    "sources": [
      {
        "label": "Reolink support",
        "url": "https://reolink.com/support/"
      },
      {
        "label": "eufy support",
        "url": "https://support.eufy.com/"
      }
    ],
    "lastVerified": "2026-10-14"
  },
  {
    "slug": "gps-tracker-location-inaccurate",
    "title": "GPS tracker reports the wrong location",
    "symptom": "A tracker shows a location hundreds of metres off, jumps between places or stops updating.",
    "category": "Tracking",
    "escalation": "If the tracker is accurate outdoors but drifts indoors, the position comes from Wi-Fi or cell positioning rather than GPS: judge accuracy by the reported method.",
    "appliesTo": [
      "LTE and GPS trackers",
      "Pet and asset trackers",
      "Vehicle trackers"
    ],
    "likelyCauses": [
      "Indoor use where GPS is blocked",
      "Assisted positioning using Wi-Fi or cell towers",
      "Low battery forcing less frequent fixes",
      "Poor sky view in cities or under cover",
      "Firmware or platform mapping delay"
    ],
    "quickChecks": [
      "Compare the reported accuracy value in the app",
      "Check whether the device reports LTE, Wi-Fi or GPS fixes",
      "Test outdoors with a clear sky view",
      "Note the update interval setting"
    ],
    "steps": [
      "Force a manual location update outdoors",
      "Check the reported positioning method and accuracy",
      "Adjust the update interval and battery mode",
      "Update firmware",
      "If the device never gets a GPS fix outdoors, request a service check"
    ],
    "sources": [
      {
        "label": "Queclink",
        "url": "https://www.queclink.com/"
      },
      {
        "label": "Teltonika Telematics",
        "url": "https://teltonika-gps.com/"
      }
    ],
    "lastVerified": "2026-10-14"
  }
];
