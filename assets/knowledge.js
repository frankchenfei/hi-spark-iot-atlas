window.IOT_KNOWLEDGE = {
  "protocols": [
    {
      "slug": "wifi",
      "name": "Wi-Fi",
      "category": "Wireless LAN",
      "summary": "High-bandwidth wireless networking for cameras, hubs, appliances and home devices.",
      "range": "30–100 m indoor",
      "power": "High",
      "topology": "Star / infrastructure",
      "use": "Video, cloud devices, hubs, appliances",
      "source_name": "Wi-Fi",
      "source": "https://www.wi-fi.org/",
      "status": "source-linked"
    },
    {
      "slug": "bluetooth-le",
      "name": "Bluetooth LE",
      "category": "Short-range",
      "summary": "Low-energy pairing and control for wearables, locks, sensors and configuration.",
      "range": "5–30 m",
      "power": "Very low",
      "topology": "Point-to-point / mesh",
      "use": "Wearables, locks, scales, setup",
      "source_name": "Bluetooth SIG",
      "source": "https://www.bluetooth.com/",
      "status": "source-linked"
    },
    {
      "slug": "zigbee",
      "name": "Zigbee",
      "category": "Mesh",
      "summary": "Low-power mesh networking widely used in sensors, lighting, locks and smart-home hubs.",
      "range": "10–30 m per hop",
      "power": "Low",
      "topology": "Mesh",
      "use": "Sensors, lighting, locks, energy",
      "source_name": "CSA / Zigbee Alliance",
      "source": "https://csa-iot.org/all-solutions/zigbee/",
      "status": "source-linked"
    },
    {
      "slug": "thread",
      "name": "Thread",
      "category": "IPv6 mesh",
      "summary": "Low-power IPv6 mesh designed for Matter, smart-home devices and border routers.",
      "range": "10–30 m per hop",
      "power": "Low",
      "topology": "Mesh",
      "use": "Matter sensors, lighting, locks",
      "source_name": "Thread Group",
      "source": "https://www.threadgroup.org/",
      "status": "source-linked"
    },
    {
      "slug": "matter",
      "name": "Matter",
      "category": "Application standard",
      "summary": "Cross-ecosystem application layer for smart-home devices across Wi-Fi, Ethernet and Thread.",
      "range": "Depends on transport",
      "power": "Transport-dependent",
      "topology": "Ecosystem interoperability",
      "use": "Lighting, locks, sensors, plugs",
      "source_name": "Connectivity Standards Alliance",
      "source": "https://csa-iot.org/all-solutions/matter/",
      "status": "source-linked"
    },
    {
      "slug": "z-wave",
      "name": "Z-Wave",
      "category": "Mesh",
      "summary": "Sub-GHz mesh ecosystem common in security, locks, lighting and hubs.",
      "range": "10–40 m per hop",
      "power": "Low",
      "topology": "Mesh",
      "use": "Security, locks, lighting, HVAC",
      "source_name": "Z-Wave Alliance",
      "source": "https://z-wavealliance.org/",
      "status": "source-linked"
    },
    {
      "slug": "mqtt",
      "name": "MQTT",
      "category": "IoT messaging",
      "summary": "Publish-subscribe messaging protocol designed for constrained devices and unreliable networks.",
      "range": "Network dependent",
      "power": "Low to medium",
      "topology": "Broker / clients",
      "use": "Cloud messaging, telemetry, control",
      "source_name": "OASIS / MQTT.org",
      "source": "https://mqtt.org/",
      "status": "source-linked"
    },
    {
      "slug": "https-rest",
      "name": "HTTPS & REST",
      "category": "Application / API",
      "summary": "Secure request-response APIs used by cloud platforms, mobile apps and device management tools.",
      "range": "Network dependent",
      "power": "Medium",
      "topology": "Client / server",
      "use": "APIs, onboarding, management",
      "source_name": "IETF",
      "source": "https://www.rfc-editor.org/rfc/rfc9110",
      "status": "source-linked"
    },
    {
      "slug": "coap",
      "name": "CoAP",
      "category": "Constrained web",
      "summary": "UDP-based protocol for constrained IoT devices and low-bandwidth networks.",
      "range": "Network dependent",
      "power": "Low",
      "topology": "Client / server",
      "use": "Sensors, utility meters, LPWAN",
      "source_name": "IETF",
      "source": "https://datatracker.ietf.org/doc/html/rfc7252",
      "status": "source-linked"
    },
    {
      "slug": "amqp",
      "name": "AMQP",
      "category": "Enterprise messaging",
      "summary": "Message-oriented protocol used by enterprise IoT platforms and cloud integrations.",
      "range": "Network dependent",
      "power": "Medium",
      "topology": "Broker / queues",
      "use": "Enterprise IoT, Azure integrations",
      "source_name": "OASIS",
      "source": "https://www.amqp.org/",
      "status": "source-linked"
    },
    {
      "slug": "lorawan",
      "name": "LoRaWAN",
      "category": "LPWAN",
      "summary": "Long-range, low-power wide-area networking for sensors, agriculture and utility metering.",
      "range": "2–15 km rural",
      "power": "Very low",
      "topology": "Star of stars",
      "use": "Agriculture, metering, asset tracking",
      "source_name": "LoRa Alliance",
      "source": "https://lora-alliance.org/",
      "status": "source-linked"
    },
    {
      "slug": "nb-iot",
      "name": "NB-IoT",
      "category": "Cellular LPWAN",
      "summary": "Narrowband cellular service for low-power, low-data sensors and meters.",
      "range": "Carrier coverage",
      "power": "Very low",
      "topology": "Cellular",
      "use": "Meters, sensors, utilities",
      "source_name": "3GPP / GSMA",
      "source": "https://www.3gpp.org/",
      "status": "source-linked"
    },
    {
      "slug": "lte-m",
      "name": "LTE-M",
      "category": "Cellular LPWAN",
      "summary": "LTE-based low-power cellular connectivity with better mobility and latency than NB-IoT.",
      "range": "Carrier coverage",
      "power": "Low",
      "topology": "Cellular",
      "use": "Trackers, mobility, industrial sensors",
      "source_name": "3GPP / GSMA",
      "source": "https://www.gsma.com/iot/",
      "status": "source-linked"
    },
    {
      "slug": "4g-lte",
      "name": "4G LTE",
      "category": "Cellular broadband",
      "summary": "Cellular broadband for cameras, routers, hotspots and remote sites.",
      "range": "Carrier coverage",
      "power": "High",
      "topology": "Cellular",
      "use": "4G cameras, routers, hotspots",
      "source_name": "GSMA",
      "source": "https://www.gsma.com/",
      "status": "source-linked"
    },
    {
      "slug": "5g",
      "name": "5G",
      "category": "Cellular broadband",
      "summary": "High-throughput, low-latency cellular connectivity for gateways, video and industrial deployments.",
      "range": "Carrier coverage",
      "power": "High",
      "topology": "Cellular",
      "use": "Edge gateways, video, industrial",
      "source_name": "GSMA / 3GPP",
      "source": "https://www.3gpp.org/",
      "status": "source-linked"
    },
    {
      "slug": "esim",
      "name": "eSIM",
      "category": "SIM technology",
      "summary": "Embedded, remotely provisioned SIM profile for cellular devices and global fleets.",
      "range": "Carrier coverage",
      "power": "Medium",
      "topology": "Cellular",
      "use": "Global fleets, trackers, routers",
      "source_name": "GSMA",
      "source": "https://www.gsma.com/esim/",
      "status": "source-linked"
    },
    {
      "slug": "gnss",
      "name": "GNSS",
      "category": "Positioning",
      "summary": "Satellite positioning using GPS, Galileo, GLONASS, BeiDou and related constellations.",
      "range": "Global outdoor",
      "power": "Medium",
      "topology": "Satellite receive",
      "use": "Trackers, fleet, drones",
      "source_name": "GPS.gov",
      "source": "https://www.gps.gov/",
      "status": "source-linked"
    },
    {
      "slug": "uwb",
      "name": "Ultra-Wideband",
      "category": "Wireless / ranging",
      "summary": "Centimetre-accurate ranging for secure access and precise indoor location.",
      "range": "10-50 m",
      "power": "Low to moderate",
      "topology": "Point-to-point / anchor",
      "use": "Digital keys, indoor positioning, Find My",
      "source_name": "FiRa Consortium",
      "source": "https://www.firaconsortium.org/",
      "status": "source-linked"
    },
    {
      "slug": "nfc",
      "name": "NFC",
      "category": "Short-range",
      "summary": "Very short-range tap, pairing and payment technology.",
      "range": "<10 cm",
      "power": "Very low",
      "topology": "Point-to-point",
      "use": "Access, pairing, payments",
      "source_name": "NFC Forum",
      "source": "https://nfc-forum.org/",
      "status": "source-linked"
    },
    {
      "slug": "rfid",
      "name": "RFID",
      "category": "Identification",
      "summary": "Radio-frequency identification for inventory, access and asset identification.",
      "range": "Centimeters to meters",
      "power": "Low",
      "topology": "Reader / tag",
      "use": "Asset tracking, retail, logistics",
      "source_name": "GS1 / RAIN RFID",
      "source": "https://www.gs1.org/",
      "status": "source-linked"
    },
    {
      "slug": "modbus",
      "name": "Modbus",
      "category": "Industrial / fieldbus",
      "summary": "Decades-old industrial protocol, still the default for PLCs, meters and inverters.",
      "range": "Bus length dependent",
      "power": "Wired",
      "topology": "Master / slave bus",
      "use": "Energy meters, inverters, PLCs",
      "source_name": "Modbus Organization",
      "source": "https://modbus.org/",
      "status": "source-linked"
    },
    {
      "slug": "opcua",
      "name": "OPC UA",
      "category": "Industrial interoperability",
      "summary": "Secure industrial communication standard for machines, PLCs and industrial software.",
      "range": "Network dependent",
      "power": "Medium",
      "topology": "Client / server / pub-sub",
      "use": "Manufacturing, SCADA, digital twins",
      "source_name": "OPC Foundation",
      "source": "https://opcfoundation.org/",
      "status": "source-linked"
    },
    {
      "slug": "rs485",
      "name": "RS-485",
      "category": "Industrial / physical layer",
      "summary": "Differential serial physical layer used by Modbus RTU, BACnet MS/TP and many sensors.",
      "range": "Up to 1200 m",
      "power": "Wired",
      "topology": "Multi-drop bus",
      "use": "Industrial sensors, meters, BMS",
      "source_name": "TIA",
      "source": "https://www.tiaonline.org/",
      "status": "source-linked"
    },
    {
      "slug": "ethernet",
      "name": "Ethernet",
      "category": "Wired LAN",
      "summary": "Reliable wired networking for NVRs, gateways, industrial devices and fixed infrastructure.",
      "range": "100 m copper per run",
      "power": "Medium",
      "topology": "Star / industrial",
      "use": "NVR, PoE, industrial IoT",
      "source_name": "IEEE 802.3",
      "source": "https://standards.ieee.org/ieee/802.3/7071/",
      "status": "source-linked"
    },
    {
      "slug": "poe",
      "name": "PoE",
      "category": "Power over Ethernet",
      "summary": "Combines data and power on Ethernet cabling for cameras, access points and IoT endpoints.",
      "range": "100 m typical",
      "power": "Medium",
      "topology": "Star / powered switch",
      "use": "Security cameras, access points",
      "source_name": "Ethernet Alliance",
      "source": "https://ethernetalliance.org/",
      "status": "source-linked"
    },
    {
      "slug": "wi-fi-halow",
      "name": "Wi-Fi HaLow",
      "category": "Long-range Wi-Fi",
      "summary": "Sub-GHz Wi-Fi standard for longer-range, lower-power IoT devices.",
      "range": "Up to 1 km+",
      "power": "Low to medium",
      "topology": "Star",
      "use": "Agriculture, industrial sensors",
      "source_name": "Wi-Fi Alliance",
      "source": "https://www.wi-fi.org/discover-wi-fi/wi-fi-halow",
      "status": "source-linked"
    },
    {
      "slug": "wi-fi-6e-7",
      "name": "Wi-Fi 6E / 7",
      "category": "High-performance Wi-Fi",
      "summary": "Modern Wi-Fi generations with higher throughput, lower latency and 6 GHz support.",
      "range": "30–100 m indoor",
      "power": "High",
      "topology": "Infrastructure / mesh",
      "use": "Video, smart home, gateways",
      "source_name": "Wi-Fi Alliance",
      "source": "https://www.wi-fi.org/",
      "status": "source-linked"
    },
    {
      "slug": "ble-mesh",
      "name": "Bluetooth Mesh",
      "category": "Mesh / BLE",
      "summary": "Many-to-many BLE mesh aimed at commercial lighting and building control.",
      "range": "10-30 m per hop",
      "power": "Low",
      "topology": "Managed flooding mesh",
      "use": "Commercial lighting, building automation",
      "source_name": "Bluetooth SIG",
      "source": "https://www.bluetooth.com/",
      "status": "source-linked"
    },
    {
      "slug": "ipv6",
      "name": "IPv6",
      "category": "Network layer",
      "summary": "Modern internet addressing and routing foundation for scalable IoT networks.",
      "range": "Global / local",
      "power": "Medium",
      "topology": "Network layer",
      "use": "Thread, gateways, cloud",
      "source_name": "IETF",
      "source": "https://www.internetilluminati.com/",
      "status": "source-linked"
    },
    {
      "slug": "digital-twin",
      "name": "Digital Twin",
      "category": "Data model",
      "summary": "Virtual representation of a physical device, asset or process for monitoring and simulation.",
      "range": "System dependent",
      "power": "Medium",
      "topology": "Cloud / edge",
      "use": "Manufacturing, buildings, fleets",
      "source_name": "Industry standards",
      "source": "https://www.iso.org/standard/78743.html",
      "status": "source-linked"
    },
    {
      "slug": "matter-over-wifi",
      "name": "Matter over Wi-Fi",
      "category": "Application / IP",
      "summary": "Matter application layer carried over Wi-Fi for mains-powered devices.",
      "range": "30-100 m indoor",
      "power": "High",
      "topology": "Star / infrastructure",
      "use": "Smart plugs, bulbs, appliances, cameras",
      "source_name": "Connectivity Standards Alliance",
      "source": "https://csa-iot.org/all-solutions/matter/",
      "status": "source-linked"
    },
    {
      "slug": "thread-1-4",
      "name": "Thread 1.4",
      "category": "Mesh / IPv6",
      "summary": "Latest Thread release adding better border router management, Thread over Infrastructure and improved diagnostics.",
      "range": "10-30 m per hop",
      "power": "Very low",
      "topology": "Mesh / IPv6",
      "use": "Battery sensors, locks, lighting, Matter devices",
      "source_name": "Thread Group",
      "source": "https://www.threadgroup.org/",
      "status": "source-linked"
    },
    {
      "slug": "wi-sun",
      "name": "Wi-SUN",
      "category": "Mesh / LPWAN",
      "summary": "IEEE 802.15.4g based field area network for large outdoor smart-city and utility meshes.",
      "range": "1-5 km per hop",
      "power": "Low",
      "topology": "Mesh / FAN",
      "use": "Smart metering, street lighting, city sensors",
      "source_name": "Wi-SUN Alliance",
      "source": "https://www.wi-sun.org/",
      "status": "source-linked"
    },
    {
      "slug": "zigbee-green-power",
      "name": "Zigbee Green Power",
      "category": "Mesh / energy harvesting",
      "summary": "Energy-harvesting profile that lets batteryless switches and sensors join a Zigbee network.",
      "range": "10-30 m",
      "power": "Harvested / near zero",
      "topology": "Mesh",
      "use": "Kinetic switches, self-powered sensors",
      "source_name": "Connectivity Standards Alliance",
      "source": "https://csa-iot.org/all-solutions/zigbee/",
      "status": "source-linked"
    },
    {
      "slug": "ble-channel-sounding",
      "name": "Bluetooth Channel Sounding",
      "category": "Wireless / ranging",
      "summary": "Precise distance measurement over BLE for secure access and asset tracking.",
      "range": "Under 50 m",
      "power": "Low",
      "topology": "Point-to-point",
      "use": "Digital key, proximity access, asset tags",
      "source_name": "Bluetooth SIG",
      "source": "https://www.bluetooth.com/",
      "status": "source-linked"
    },
    {
      "slug": "5g-redcap",
      "name": "5G RedCap",
      "category": "Cellular / 5G",
      "summary": "Reduced-capability 5G for wearables, industrial sensors and cameras that do not need full eMBB.",
      "range": "Operator dependent",
      "power": "Moderate",
      "topology": "Cellular star",
      "use": "Wearables, industrial cameras, routers",
      "source_name": "3GPP",
      "source": "https://www.3gpp.org/",
      "status": "source-linked"
    },
    {
      "slug": "ntn-satellite-iot",
      "name": "Satellite NTN IoT",
      "category": "Satellite / non-terrestrial",
      "summary": "Direct-to-satellite connectivity for devices outside terrestrial coverage.",
      "range": "Continental",
      "power": "Moderate to high",
      "topology": "Constellation",
      "use": "Asset tracking, remote agriculture, maritime",
      "source_name": "3GPP",
      "source": "https://www.3gpp.org/",
      "status": "source-linked"
    },
    {
      "slug": "sigfox-0g",
      "name": "Sigfox / 0G",
      "category": "LPWAN / unlicensed",
      "summary": "Ultra-narrowband, very low data rate network for simple telemetry.",
      "range": "1-50 km",
      "power": "Very low",
      "topology": "Star / operator",
      "use": "Meters, simple trackers, alarms",
      "source_name": "UnaBiz",
      "source": "https://www.unabiz.com/",
      "status": "source-linked"
    },
    {
      "slug": "mioty",
      "name": "mioty",
      "category": "LPWAN / telegram splitting",
      "summary": "ETSI-standardised LPWAN using telegram splitting for high reliability in dense networks.",
      "range": "1-15 km",
      "power": "Very low",
      "topology": "Star / operator",
      "use": "Industrial sensors, metering",
      "source_name": "mioty alliance",
      "source": "https://www.mioty-alliance.com/",
      "status": "source-linked"
    },
    {
      "slug": "wm-bus",
      "name": "Wireless M-Bus",
      "category": "Metering / sub-GHz",
      "summary": "European standard for wireless utility metering in the 868 MHz band.",
      "range": "100 m - 1 km",
      "power": "Very low",
      "topology": "Star / meter",
      "use": "Water, gas, heat and electricity meters",
      "source_name": "OMS Group",
      "source": "https://www.oms-group.org/",
      "status": "source-linked"
    },
    {
      "slug": "zwave-long-range",
      "name": "Z-Wave Long Range",
      "category": "Mesh / sub-GHz",
      "summary": "Z-Wave LR removes repeater limits and extends range for large installations.",
      "range": "1 km+",
      "power": "Very low",
      "topology": "Star (LR) / mesh",
      "use": "Large homes, MDU, hospitality",
      "source_name": "Z-Wave Alliance",
      "source": "https://z-wavealliance.org/",
      "status": "source-linked"
    },
    {
      "slug": "can-bus",
      "name": "CAN bus",
      "category": "Industrial / vehicle",
      "summary": "Robust vehicle and machine bus, now paired with IoT gateways for telematics.",
      "range": "Up to 1 km",
      "power": "Wired",
      "topology": "Multi-master bus",
      "use": "Vehicles, machinery, battery systems",
      "source_name": "CiA",
      "source": "https://www.can-cia.org/",
      "status": "source-linked"
    },
    {
      "slug": "lora-p2p",
      "name": "LoRa point-to-point",
      "category": "LPWAN / physical",
      "summary": "Raw LoRa modulation without LoRaWAN, used for simple private links.",
      "range": "1-15 km",
      "power": "Very low",
      "topology": "Point-to-point",
      "use": "Gateways, remote control, telemetry",
      "source_name": "Semtech",
      "source": "https://www.semtech.com/lora",
      "status": "source-linked"
    },
    {
      "slug": "knx",
      "name": "KNX",
      "category": "Building automation",
      "summary": "Long-established building automation standard for lighting, HVAC and blinds.",
      "range": "Bus dependent",
      "power": "Wired / low",
      "topology": "Bus / IP",
      "use": "Commercial buildings, hotels",
      "source_name": "KNX Association",
      "source": "https://www.knx.org/",
      "status": "source-linked"
    },
    {
      "slug": "dali-2",
      "name": "DALI-2",
      "category": "Lighting control",
      "summary": "Digital addressable lighting interface with certified control gear and sensors.",
      "range": "Bus dependent",
      "power": "Wired",
      "topology": "Bus",
      "use": "Commercial lighting",
      "source_name": "DiiA",
      "source": "https://www.digitalilluminationinterface.org/",
      "status": "source-linked"
    },
    {
      "slug": "ethernet-tsn",
      "name": "Ethernet TSN",
      "category": "Industrial / deterministic",
      "summary": "Time-Sensitive Networking adds determinism and time sync to standard Ethernet.",
      "range": "Cable dependent",
      "power": "Wired",
      "topology": "Switched network",
      "use": "Motion control, robotics, industrial IoT",
      "source_name": "IEEE",
      "source": "https://standards.ieee.org/",
      "status": "source-linked"
    },
    {
      "slug": "mqtt-sn",
      "name": "MQTT-SN",
      "category": "Messaging / constrained",
      "summary": "MQTT for Sensor Networks, adapted for very constrained devices and non-TCP links.",
      "range": "Network dependent",
      "power": "Very low",
      "topology": "Pub/sub via gateway",
      "use": "Sensors on Zigbee, UDP or serial links",
      "source_name": "OASIS",
      "source": "https://www.oasis-open.org/",
      "status": "source-linked"
    }
  ],
  "apps": [
    {
      "status": "source-linked",
      "slug": "tuya-smart",
      "name": "Tuya Smart",
      "brand": "Tuya",
      "platforms": "iOS / Android",
      "protocols": "Wi-Fi, BLE, Zigbee, Matter",
      "summary": "Consumer app for Tuya-based smart-home devices.",
      "source": "https://www.tuya.com/"
    },
    {
      "status": "source-linked",
      "slug": "smart-life",
      "name": "Smart Life",
      "brand": "Tuya",
      "platforms": "iOS / Android",
      "protocols": "Wi-Fi, BLE, Zigbee",
      "summary": "White-label Tuya app ecosystem for OEM smart devices.",
      "source": "https://www.tuya.com/"
    },
    {
      "status": "source-linked",
      "slug": "mi-home",
      "name": "Mi Home / Xiaomi Home",
      "brand": "Xiaomi",
      "platforms": "iOS / Android",
      "protocols": "Wi-Fi, BLE, Zigbee, Matter",
      "summary": "Xiaomi ecosystem app for devices, scenes and automation.",
      "source": "https://home.mi.com/"
    },
    {
      "status": "source-linked",
      "slug": "huawei-ai-life",
      "name": "Huawei AI Life",
      "brand": "Huawei",
      "platforms": "iOS / Android",
      "protocols": "Wi-Fi, BLE, Zigbee, Matter",
      "summary": "Huawei IoT device management and ecosystem app.",
      "source": "https://consumer.huawei.com/en/mobileservices/"
    },
    {
      "status": "source-linked",
      "slug": "hik-connect",
      "name": "Hik-Connect",
      "brand": "Hikvision",
      "platforms": "iOS / Android",
      "protocols": "Wi-Fi, 4G, PoE",
      "summary": "Remote viewing and management for Hikvision security devices.",
      "source": "https://www.hikvision.com/"
    },
    {
      "status": "source-linked",
      "slug": "dmss",
      "name": "DMSS",
      "brand": "Dahua",
      "platforms": "iOS / Android",
      "protocols": "Wi-Fi, 4G, PoE",
      "summary": "Dahua mobile app for cameras, NVRs and alarms.",
      "source": "https://www.dahuasecurity.com/"
    },
    {
      "status": "source-linked",
      "slug": "ezviz",
      "name": "EZVIZ",
      "brand": "EZVIZ",
      "platforms": "iOS / Android",
      "protocols": "Wi-Fi, 4G, PoE",
      "summary": "Consumer camera and smart-home app from EZVIZ.",
      "source": "https://www.ezviz.com/"
    },
    {
      "status": "source-linked",
      "slug": "imou-life",
      "name": "Imou Life",
      "brand": "Imou",
      "platforms": "iOS / Android",
      "protocols": "Wi-Fi, 4G",
      "summary": "Imou camera, doorbell and alarm app.",
      "source": "https://www.imou.com/"
    },
    {
      "status": "source-linked",
      "slug": "reolink",
      "name": "Reolink",
      "brand": "Reolink",
      "platforms": "iOS / Android / Web",
      "protocols": "Wi-Fi, 4G, PoE",
      "summary": "Camera setup, live view, playback and NVR management.",
      "source": "https://reolink.com/"
    },
    {
      "status": "source-linked",
      "slug": "ring",
      "name": "Ring",
      "brand": "Ring",
      "platforms": "iOS / Android",
      "protocols": "Wi-Fi, Z-Wave",
      "summary": "Doorbells, cameras, alarms and community features.",
      "source": "https://ring.com/"
    },
    {
      "status": "source-linked",
      "slug": "kasa-smart",
      "name": "Kasa Smart",
      "brand": "TP-Link",
      "platforms": "iOS / Android",
      "protocols": "Wi-Fi, Matter",
      "summary": "Plugs, switches, bulbs, cameras and routers.",
      "source": "https://www.kasasmart.com/"
    },
    {
      "status": "source-linked",
      "slug": "tapo",
      "name": "Tapo",
      "brand": "TP-Link",
      "platforms": "iOS / Android",
      "protocols": "Wi-Fi, 4G",
      "summary": "Tapo cameras, plugs and smart-home devices.",
      "source": "https://www.tapo.com/"
    },
    {
      "status": "source-linked",
      "slug": "eufy-security",
      "name": "eufy Security",
      "brand": "eufy / Anker",
      "platforms": "iOS / Android",
      "protocols": "Wi-Fi, 4G",
      "summary": "Cameras, doorbells and HomeBase ecosystems.",
      "source": "https://www.eufy.com/"
    },
    {
      "status": "source-linked",
      "slug": "blink",
      "name": "Blink Home Monitor",
      "brand": "Blink / Amazon",
      "platforms": "iOS / Android",
      "protocols": "Wi-Fi, 4G",
      "summary": "Amazon-owned camera and doorbell app.",
      "source": "https://blinkforhome.com/"
    },
    {
      "status": "source-linked",
      "slug": "wyze",
      "name": "Wyze",
      "brand": "Wyze",
      "platforms": "iOS / Android",
      "protocols": "Wi-Fi, BLE",
      "summary": "Value-focused cameras, sensors and home devices.",
      "source": "https://www.wyze.com/"
    },
    {
      "status": "source-linked",
      "slug": "aqara-home",
      "name": "Aqara Home",
      "brand": "Aqara",
      "platforms": "iOS / Android",
      "protocols": "Zigbee, Thread, Matter",
      "summary": "Sensors, locks, hubs and automation.",
      "source": "https://www.aqara.com/"
    },
    {
      "status": "source-linked",
      "slug": "smartthings",
      "name": "SmartThings",
      "brand": "Samsung",
      "platforms": "iOS / Android / Web",
      "protocols": "Wi-Fi, Zigbee, Z-Wave, Matter",
      "summary": "Samsung multi-protocol smart-home platform.",
      "source": "https://www.smartthings.com/"
    },
    {
      "status": "source-linked",
      "slug": "amazon-alexa",
      "name": "Amazon Alexa",
      "brand": "Amazon",
      "platforms": "iOS / Android / Voice",
      "protocols": "Wi-Fi, Matter, Thread",
      "summary": "Voice assistant and smart-home automation platform.",
      "source": "https://developer.amazon.com/en-US/alexa"
    },
    {
      "status": "source-linked",
      "slug": "google-home",
      "name": "Google Home",
      "brand": "Google",
      "platforms": "iOS / Android",
      "protocols": "Wi-Fi, Matter, Thread",
      "summary": "Google Nest and Matter device control.",
      "source": "https://home.google.com/"
    },
    {
      "status": "source-linked",
      "slug": "apple-home",
      "name": "Apple Home",
      "brand": "Apple",
      "platforms": "iOS / iPadOS / macOS",
      "protocols": "Wi-Fi, Matter, Thread",
      "summary": "Apple HomeKit and Matter ecosystem app.",
      "source": "https://www.apple.com/home-app/"
    },
    {
      "status": "source-linked",
      "slug": "govee-home",
      "name": "Govee Home",
      "brand": "Govee",
      "platforms": "iOS / Android",
      "protocols": "Wi-Fi, BLE, Matter",
      "summary": "LED strips, bulbs, string lights and scenes.",
      "source": "https://www.govee.com/"
    },
    {
      "status": "source-linked",
      "slug": "shelly",
      "name": "Shelly Smart Control",
      "brand": "Shelly",
      "platforms": "iOS / Android / Web",
      "protocols": "Wi-Fi, BLE, Zigbee, Matter",
      "summary": "Relays, switches, energy monitoring and automation.",
      "source": "https://www.shelly.com/"
    },
    {
      "status": "source-linked",
      "slug": "ewelink",
      "name": "eWeLink",
      "brand": "SONOFF / ITEAD",
      "platforms": "iOS / Android / Web",
      "protocols": "Wi-Fi, Zigbee, Matter",
      "summary": "SONOFF and eWeLink device control.",
      "source": "https://sonoff.tech/"
    },
    {
      "status": "source-linked",
      "slug": "meross",
      "name": "Meross",
      "brand": "Meross",
      "platforms": "iOS / Android",
      "protocols": "Wi-Fi, Matter",
      "summary": "Plugs, switches, lighting and garage devices.",
      "source": "https://www.meross.com/"
    },
    {
      "status": "source-linked",
      "slug": "withings-health-mate",
      "name": "Withings Health Mate",
      "brand": "Withings",
      "platforms": "iOS / Android",
      "protocols": "Wi-Fi, BLE",
      "summary": "Scales, blood pressure, sleep and connected health.",
      "source": "https://www.withings.com/"
    },
    {
      "status": "source-linked",
      "slug": "oura",
      "name": "Oura",
      "brand": "Oura",
      "platforms": "iOS / Android",
      "protocols": "BLE",
      "summary": "Smart-ring health, sleep and readiness tracking.",
      "source": "https://ouraring.com/"
    }
  ],
  "standards": [
    {
      "slug": "fcc",
      "name": "FCC",
      "region": "United States",
      "summary": "Radio equipment authorization and RF compliance.",
      "source": "https://www.fcc.gov/oet/ea/fccid",
      "status": "source-linked",
      "type": "Radio",
      "applies_to": "Wireless devices sold in the United States"
    },
    {
      "slug": "ce",
      "name": "CE Marking",
      "region": "European Union",
      "summary": "EU conformity for health, safety, radio, EMC and environmental requirements.",
      "source": "https://single-market-economy.ec.europa.eu/single-market/ce-marking_en",
      "status": "source-linked",
      "type": "Market access",
      "applies_to": "Products sold in the European Economic Area"
    },
    {
      "slug": "ukca",
      "name": "UKCA",
      "region": "United Kingdom",
      "type": "Market access",
      "summary": "UK conformity assessment marking for goods placed on the Great Britain market.",
      "applies_to": "Radio and electrical products sold in Great Britain",
      "source": "https://www.gov.uk/guidance/using-the-ukca-marking",
      "status": "source-linked"
    },
    {
      "slug": "rcm",
      "name": "RCM",
      "region": "Australia / New Zealand",
      "summary": "Regulatory compliance mark for electrical and radio products.",
      "source": "https://www.acma.gov.au/radiocommunications-licences",
      "status": "source-linked",
      "type": "Market access",
      "applies_to": "Products sold in Australia and New Zealand"
    },
    {
      "slug": "anatel",
      "name": "ANATEL",
      "region": "Brazil",
      "type": "Market access",
      "summary": "Brazilian telecommunications homologation required for radio products.",
      "applies_to": "Wireless devices sold in Brazil",
      "source": "https://www.gov.br/anatel/",
      "status": "source-linked"
    },
    {
      "slug": "ifetel",
      "name": "IFETEL",
      "region": "Mexico",
      "summary": "Mexican telecommunications conformity approval.",
      "source": "https://www.ift.org.mx/",
      "status": "source-linked",
      "type": "Market access",
      "applies_to": "Wireless devices sold in Mexico"
    },
    {
      "slug": "ndaa",
      "name": "NDAA Section 889",
      "region": "United States",
      "summary": "Procurement restrictions for specified telecommunications and video surveillance equipment.",
      "source": "https://www.acquisition.gov/",
      "status": "source-linked",
      "type": "Procurement",
      "applies_to": "Devices procured by US federal agencies"
    },
    {
      "slug": "gdpr",
      "name": "GDPR",
      "region": "European Union",
      "summary": "Personal-data protection and privacy requirements.",
      "source": "https://commission.europa.eu/law/law-topic/data-protection_en",
      "status": "source-linked",
      "type": "Privacy",
      "applies_to": "Organisations processing EU personal data"
    },
    {
      "slug": "matter-cert",
      "name": "Matter Certification",
      "region": "Global",
      "summary": "CSA certification program for cross-ecosystem Matter devices.",
      "source": "https://csa-iot.org/certification/",
      "status": "source-linked",
      "type": "Interoperability",
      "applies_to": "Matter devices and controllers"
    },
    {
      "slug": "thread-cert",
      "name": "Thread Certification",
      "region": "Global",
      "summary": "Thread Group certification for Thread devices and border routers.",
      "source": "https://www.threadgroup.org/Certification",
      "status": "source-linked",
      "type": "Interoperability",
      "applies_to": "Thread devices and border routers"
    },
    {
      "slug": "energy-star",
      "name": "ENERGY STAR",
      "region": "United States",
      "summary": "Energy-efficiency certification for qualifying products.",
      "source": "https://www.energystar.gov/",
      "status": "source-linked",
      "type": "Efficiency",
      "applies_to": "Consumer products sold in the United States"
    },
    {
      "slug": "red-cybersecurity-en-18031",
      "name": "EN 18031 (RED cybersecurity)",
      "region": "European Union",
      "type": "Cybersecurity",
      "summary": "Harmonised standards giving presumption of conformity to the Radio Equipment Directive cybersecurity articles, mandatory from August 2025.",
      "applies_to": "Any radio product sold in the EU",
      "source": "https://www.etsi.org/",
      "status": "source-linked"
    },
    {
      "slug": "etsi-en-303-645",
      "name": "ETSI EN 303 645",
      "region": "European Union / global",
      "type": "Cybersecurity",
      "summary": "Baseline consumer IoT security requirements: no default passwords, vulnerability disclosure, secure updates.",
      "applies_to": "Consumer IoT devices",
      "source": "https://www.etsi.org/deliver/etsi_en/303600_303699/303645/",
      "status": "source-linked"
    },
    {
      "slug": "iec-62443",
      "name": "IEC 62443",
      "region": "Global",
      "type": "Industrial security",
      "summary": "Series defining security for industrial automation and control systems across operators, integrators and vendors.",
      "applies_to": "Industrial IoT, OT networks",
      "source": "https://www.iec.ch/",
      "status": "source-linked"
    },
    {
      "slug": "iso-27001",
      "name": "ISO/IEC 27001",
      "region": "Global",
      "type": "Information security",
      "summary": "Management system standard for information security, commonly required in enterprise IoT procurement.",
      "applies_to": "Platform operators, cloud services",
      "source": "https://www.iso.org/standard/27001",
      "status": "source-linked"
    },
    {
      "slug": "nist-8259",
      "name": "NIST IR 8259",
      "region": "United States",
      "type": "Cybersecurity",
      "summary": "Baseline IoT device cybersecurity capabilities and the non-technical supporting activities around them.",
      "applies_to": "IoT device manufacturers",
      "source": "https://www.nist.gov/itl/applied-cybersecurity/nist-cybersecurity-iot-program",
      "status": "source-linked"
    },
    {
      "slug": "us-cyber-trust-mark",
      "name": "US Cyber Trust Mark",
      "region": "United States",
      "type": "Certification",
      "summary": "Voluntary US labelling programme for consumer IoT cybersecurity.",
      "applies_to": "Consumer IoT products sold in the US",
      "source": "https://www.ftc.gov/",
      "status": "source-linked"
    },
    {
      "slug": "ccpa-cpra",
      "name": "CCPA / CPRA",
      "region": "United States (California)",
      "type": "Privacy",
      "summary": "California consumer privacy rights, including disclosure, deletion and opt-out of sale or sharing.",
      "applies_to": "Businesses serving California residents",
      "source": "https://cppa.ca.gov/",
      "status": "source-linked"
    },
    {
      "slug": "eprivacy-directive",
      "name": "ePrivacy Directive",
      "region": "European Union",
      "type": "Privacy",
      "summary": "Rules on cookies, electronic communications and consent that sit alongside the GDPR.",
      "applies_to": "Websites, apps and connected services in the EU",
      "source": "https://eur-lex.europa.eu/",
      "status": "source-linked"
    },
    {
      "slug": "eu-data-act",
      "name": "EU Data Act",
      "region": "European Union",
      "type": "Data access",
      "summary": "Rules on access to and sharing of data generated by connected products and related services.",
      "applies_to": "Connected product makers and service providers in the EU",
      "source": "https://digital-strategy.ec.europa.eu/",
      "status": "source-linked"
    },
    {
      "slug": "eu-ai-act",
      "name": "EU AI Act",
      "region": "European Union",
      "type": "AI regulation",
      "summary": "Risk-based regulation of AI systems, relevant to IoT products with AI inference or profiling.",
      "applies_to": "AI-enabled connected products in the EU",
      "source": "https://artificialintelligenceact.eu/",
      "status": "source-linked"
    },
    {
      "slug": "rohs",
      "name": "RoHS",
      "region": "European Union",
      "type": "Materials",
      "summary": "Restriction of hazardous substances in electrical and electronic equipment.",
      "applies_to": "Electronic hardware sold in the EU",
      "source": "https://environment.ec.europa.eu/",
      "status": "source-linked"
    },
    {
      "slug": "reach",
      "name": "REACH",
      "region": "European Union",
      "type": "Chemicals",
      "summary": "Registration, evaluation and authorisation of chemicals in products placed on the EU market.",
      "applies_to": "Hardware manufacturers and importers",
      "source": "https://echa.europa.eu/",
      "status": "source-linked"
    },
    {
      "slug": "weee",
      "name": "WEEE",
      "region": "European Union",
      "type": "E-waste",
      "summary": "Producer responsibility for take-back and recycling of electrical and electronic equipment.",
      "applies_to": "Hardware producers and importers in the EU",
      "source": "https://environment.ec.europa.eu/",
      "status": "source-linked"
    },
    {
      "slug": "eu-battery-regulation",
      "name": "EU Battery Regulation",
      "region": "European Union",
      "type": "Batteries",
      "summary": "Carbon footprint, recycled content, removability and passport requirements for batteries.",
      "applies_to": "Battery-powered connected devices in the EU",
      "source": "https://environment.ec.europa.eu/",
      "status": "source-linked"
    },
    {
      "slug": "ptcrb",
      "name": "PTCRB",
      "region": "North America",
      "type": "Cellular certification",
      "summary": "Device certification programme for cellular modules and devices on North American networks.",
      "applies_to": "LTE and 5G connected devices",
      "source": "https://www.ptcrb.com/",
      "status": "source-linked"
    },
    {
      "slug": "gcf",
      "name": "GCF",
      "region": "Global",
      "type": "Cellular certification",
      "summary": "Global Certification Forum interoperability certification for cellular devices.",
      "applies_to": "Cellular IoT modules and devices",
      "source": "https://www.globalcertificationforum.org/",
      "status": "source-linked"
    },
    {
      "slug": "ul-2900",
      "name": "UL 2900",
      "region": "United States",
      "type": "Software security",
      "summary": "Software cybersecurity for network-connectable products, often requested in US procurement.",
      "applies_to": "Network-connected products",
      "source": "https://www.ul.com/",
      "status": "source-linked"
    },
    {
      "slug": "srrc",
      "name": "SRRC",
      "region": "China",
      "type": "Market access",
      "summary": "Chinese radio transmission equipment type approval.",
      "applies_to": "Wireless devices sold in mainland China",
      "source": "https://www.miit.gov.cn/",
      "status": "source-linked"
    },
    {
      "slug": "mic-telec",
      "name": "MIC / TELEC",
      "region": "Japan",
      "type": "Market access",
      "summary": "Japanese radio law certification for wireless equipment.",
      "applies_to": "Wireless devices sold in Japan",
      "source": "https://www.tele.soumu.go.jp/",
      "status": "source-linked"
    },
    {
      "slug": "imda",
      "name": "IMDA",
      "region": "Singapore",
      "type": "Market access",
      "summary": "Singapore equipment registration for telecommunication and radio products.",
      "applies_to": "Wireless devices sold in Singapore",
      "source": "https://www.imda.gov.sg/",
      "status": "source-linked"
    },
    {
      "slug": "matter-certification",
      "name": "Matter certification",
      "region": "Global",
      "type": "Interoperability",
      "summary": "CSA certification programme proving a device implements the Matter specification correctly.",
      "applies_to": "Matter devices and controllers",
      "source": "https://csa-iot.org/certification/",
      "status": "source-linked"
    },
    {
      "slug": "zigbee-certified",
      "name": "Zigbee Certified",
      "region": "Global",
      "type": "Interoperability",
      "summary": "Certification that a product conforms to Zigbee specifications and interoperates with the ecosystem.",
      "applies_to": "Zigbee products",
      "source": "https://csa-iot.org/certification/",
      "status": "source-linked"
    },
    {
      "slug": "wifi-certified",
      "name": "Wi-Fi CERTIFIED",
      "region": "Global",
      "type": "Interoperability",
      "summary": "Wi-Fi Alliance certification programme covering generations, security and features such as WPA3.",
      "applies_to": "Wi-Fi products",
      "source": "https://www.wi-fi.org/certification",
      "status": "source-linked"
    },
    {
      "slug": "bluetooth-sig-qualification",
      "name": "Bluetooth SIG qualification",
      "region": "Global",
      "type": "Interoperability",
      "summary": "Mandatory qualification and declaration process for Bluetooth products.",
      "applies_to": "Bluetooth products",
      "source": "https://www.bluetooth.com/develop-with-bluetooth/qualification-listing/",
      "status": "source-linked"
    },
    {
      "slug": "fcc-part-15",
      "name": "FCC Part 15",
      "region": "United States",
      "type": "Radio",
      "summary": "Unlicensed radio frequency device rules and equipment authorisation.",
      "applies_to": "Wireless devices sold in the United States",
      "source": "https://www.fcc.gov/",
      "status": "source-linked"
    },
    {
      "slug": "red-2014-53-eu",
      "name": "Radio Equipment Directive 2014/53/EU",
      "region": "European Union",
      "type": "Radio",
      "summary": "Core EU directive for placing radio equipment on the market, including Article 3(3) security duties.",
      "applies_to": "Radio products sold in the EU",
      "source": "https://eur-lex.europa.eu/",
      "status": "source-linked"
    },
    {
      "slug": "iec-62368-1",
      "name": "IEC 62368-1",
      "region": "Global",
      "type": "Safety",
      "summary": "Safety standard for audio, video, IT and communication technology equipment, replacing older safety standards.",
      "applies_to": "Mains-powered connected devices",
      "source": "https://www.iec.ch/",
      "status": "source-linked"
    },
    {
      "slug": "ipc-1752a",
      "name": "IPC-1752A",
      "region": "Global",
      "type": "Supply chain",
      "summary": "Materials declaration standard used to collect compliance data across a hardware supply chain.",
      "applies_to": "Electronics manufacturers",
      "source": "https://www.ipc.org/",
      "status": "source-linked"
    }
  ],
  "guides": [
    {
      "slug": "best-4g-security-cameras",
      "name": "Best 4G security cameras",
      "type": "Buying guide",
      "summary": "Compare solar, battery, data plans, detection, storage and subscriptions.",
      "href": "category.html",
      "status": "source-linked",
      "audience": "Buyers without wired internet",
      "steps": [
        "Check mobile coverage at the site",
        "Confirm how much data the camera uses",
        "Decide local or cloud storage",
        "Check the SIM plan and roaming terms",
        "Verify the camera works without a hub"
      ]
    },
    {
      "slug": "matter-buying-guide",
      "name": "Matter buying guide",
      "type": "Protocol",
      "summary": "Understand transports, hubs, border routers, certification and compatibility.",
      "href": "compare.html",
      "status": "source-linked",
      "audience": "Smart-home buyers",
      "steps": [
        "Check the device is Matter certified",
        "Confirm which controller you will use",
        "Check the transport (Wi-Fi, Thread, Ethernet)",
        "Verify multi-admin support",
        "Update controller firmware before pairing"
      ]
    },
    {
      "slug": "mqtt-topic-design",
      "name": "MQTT topic and payload design",
      "type": "Implementation guide",
      "summary": "Design topics that scale across fleets without breaking subscriptions.",
      "audience": "Backend and firmware engineers",
      "steps": [
        "Put the tenant and device id early in the topic",
        "Never put unbounded values in topics",
        "Keep payloads versioned and schema-validated",
        "Use retained messages only where required",
        "Plan for topic length and wildcard cost"
      ],
      "href": "knowledge.html",
      "source": "",
      "status": "source-linked"
    },
    {
      "slug": "device-provisioning",
      "name": "Device provisioning and certificates",
      "type": "Cloud",
      "summary": "Compare fleet enrollment, X.509 certificates and zero-touch onboarding.",
      "href": "cloud.html",
      "status": "source-linked",
      "audience": "IoT platform engineers",
      "steps": [
        "Issue per-device credentials at manufacture",
        "Register identity before shipping",
        "Bind the owner on first boot",
        "Handle ownership transfer",
        "Audit every provisioning event"
      ]
    },
    {
      "slug": "fleet-ota",
      "name": "Fleet OTA strategy",
      "type": "Cloud",
      "summary": "Plan rollout rings, rollback, signing, telemetry and failure handling.",
      "href": "cloud.html",
      "status": "source-linked",
      "audience": "Firmware and platform engineers",
      "steps": [
        "Sign every firmware image",
        "Stage the rollout with a canary cohort",
        "Support rollback to a known-good slot",
        "Track firmware version drift",
        "Plan recovery for failed devices"
      ]
    },
    {
      "slug": "iot-sim-selection",
      "name": "How to choose an IoT SIM or eSIM",
      "type": "Connectivity",
      "summary": "Compare coverage, data plans, roaming, private APN and lifetime pricing.",
      "href": "category.html",
      "status": "source-linked",
      "audience": "Procurement and operations teams",
      "steps": [
        "Estimate data per device per month",
        "Compare roaming and local plans",
        "Check permanent roaming restrictions",
        "Confirm eSIM or solderable options",
        "Model total cost over three years"
      ]
    },
    {
      "slug": "lorawan-vs-nbiot",
      "name": "LoRaWAN vs NB-IoT",
      "type": "Connectivity",
      "summary": "Compare range, power, carrier dependency, payload and deployment cost.",
      "href": "compare.html",
      "status": "source-linked",
      "audience": "Solution architects",
      "steps": [
        "Define data rate, latency and mobility needs",
        "Check operator or gateway coverage on site",
        "Compare module and subscription cost",
        "Confirm battery and link budget",
        "Pilot before committing to rollout"
      ]
    },
    {
      "slug": "wifi-vs-poe",
      "name": "Wi-Fi vs PoE cameras",
      "type": "Product decision",
      "summary": "Compare reliability, cabling, bandwidth, installation and recorder design.",
      "href": "compare.html",
      "status": "source-linked",
      "audience": "Installers and buyers",
      "steps": [
        "Check whether cabling is possible",
        "Decide continuous versus event recording",
        "Estimate the camera count",
        "Plan NVR or cloud storage",
        "Verify the power budget"
      ]
    },
    {
      "slug": "local-vs-cloud-storage",
      "name": "Local storage vs cloud storage",
      "type": "Product decision",
      "summary": "Compare microSD, NVR, HomeBase and cloud subscriptions.",
      "href": "compare.html",
      "status": "source-linked",
      "audience": "Buyers and installers",
      "steps": [
        "Estimate retention needs",
        "Compare subscription cost over three years",
        "Assess privacy requirements",
        "Plan off-site backup",
        "Verify the remote access method"
      ]
    },
    {
      "slug": "camera-privacy-europe",
      "name": "Camera privacy in Europe",
      "type": "Compliance",
      "summary": "GDPR, signage, retention, access control and DPIA considerations.",
      "href": "category.html",
      "status": "source-linked",
      "audience": "EU operators and installers",
      "steps": [
        "Identify the lawful basis for filming",
        "Minimise coverage of public space",
        "Display the required signage",
        "Set retention limits",
        "Document a DPIA where required"
      ]
    },
    {
      "slug": "amazon-bsr-method",
      "name": "How we interpret Amazon BSR",
      "type": "Data method",
      "summary": "Separate marketplace rank, editorial score, availability and price snapshots.",
      "href": "amazon-best-sellers.html",
      "status": "source-linked",
      "audience": "Analysts and editors",
      "steps": [
        "Capture rank daily",
        "Normalise by category",
        "Track review velocity",
        "Separate marketplace rank from editorial score",
        "Document every snapshot date"
      ]
    },
    {
      "slug": "app-region-lock",
      "name": "App region and account lock",
      "type": "App ecosystem",
      "summary": "Check region, account migration, sharing and cloud service availability.",
      "href": "brand.html",
      "status": "source-linked",
      "audience": "Buyers and support teams",
      "steps": [
        "Check the app listing in the target region",
        "Verify account region requirements",
        "Test pairing with a local account",
        "Check firmware region variants",
        "Document any workarounds"
      ]
    },
    {
      "slug": "smart-home-protocols",
      "name": "Smart-home protocol map",
      "type": "Protocol",
      "summary": "Compare Wi-Fi, BLE, Zigbee, Thread, Matter and Z-Wave.",
      "href": "knowledge.html",
      "status": "source-linked",
      "audience": "Smart-home buyers",
      "steps": [
        "List the devices you actually need",
        "Check hub requirements",
        "Confirm Matter support",
        "Check 2.4 GHz Wi-Fi congestion",
        "Plan for battery-powered devices"
      ]
    },
    {
      "slug": "industrial-iot-stack",
      "name": "Industrial IoT stack",
      "type": "Industrial",
      "summary": "From sensors and gateways to MQTT, OPC UA, cloud and dashboards.",
      "href": "knowledge.html",
      "status": "source-linked",
      "audience": "Industrial architects",
      "steps": [
        "Map OT data sources",
        "Choose a gateway strategy",
        "Select the protocol and broker",
        "Plan security segmentation",
        "Design the data pipeline"
      ]
    },
    {
      "slug": "cloud-cost-model",
      "name": "IoT cloud cost model",
      "type": "Cloud",
      "summary": "Estimate messages, connections, rules, storage, egress and support.",
      "href": "cloud.html",
      "status": "source-linked",
      "audience": "Cloud and finance teams",
      "steps": [
        "Model messages, connections and storage",
        "Add egress and rule costs",
        "Include observability and support",
        "Model growth scenarios",
        "Review against actual usage monthly"
      ]
    },
    {
      "slug": "build-vs-buy-iot-platform",
      "name": "Build vs buy an IoT platform",
      "type": "Business",
      "summary": "Compare AWS/Azure style platforms, Tuya, EMQX, Particle and managed IoT cloud.",
      "href": "cloud.html",
      "status": "source-linked",
      "audience": "Product leaders",
      "steps": [
        "Define differentiating requirements",
        "Estimate build and run cost",
        "Assess time to market",
        "Evaluate vendor lock-in",
        "Decide with a three-year TCO model"
      ]
    },
    {
      "slug": "ota-firmware-update",
      "name": "OTA firmware update implementation",
      "type": "Implementation guide",
      "summary": "Design a safe over-the-air update path covering signing, staging, rollback and fleet blast radius.",
      "audience": "Firmware and platform engineers",
      "steps": [
        "Sign firmware and verify on device before boot",
        "Use staged rollout with a canary cohort",
        "Keep a known-good slot for rollback",
        "Log update outcomes and version drift per device",
        "Define a bricked-device recovery procedure"
      ],
      "href": "knowledge.html",
      "source": "",
      "status": "source-linked"
    },
    {
      "slug": "zero-touch-provisioning",
      "name": "Zero-touch device provisioning",
      "type": "Implementation guide",
      "summary": "Get devices from factory to customer account without manual pairing steps.",
      "audience": "Product and cloud engineers",
      "steps": [
        "Issue per-device certificates or keys at manufacture",
        "Register device identity in the cloud before shipping",
        "Bind to the owner on first boot with a claim code",
        "Handle re-provisioning and ownership transfer",
        "Audit every provisioning event"
      ],
      "href": "knowledge.html",
      "source": "",
      "status": "source-linked"
    },
    {
      "slug": "device-shadow-digital-twin",
      "name": "Device shadow and digital twin design",
      "type": "Architecture guide",
      "summary": "Model reported versus desired state so devices stay controllable when offline.",
      "audience": "IoT architects",
      "steps": [
        "Separate reported state from desired state",
        "Version every state document",
        "Define conflict resolution rules",
        "Decide retention for stale state",
        "Expose state history for debugging"
      ],
      "href": "knowledge.html",
      "source": "",
      "status": "source-linked"
    },
    {
      "slug": "certificate-rotation",
      "name": "TLS certificate and key rotation",
      "type": "Security guide",
      "summary": "Rotate device credentials without bricking a fleet.",
      "audience": "Security and firmware engineers",
      "steps": [
        "Inventory every credential and expiry",
        "Support overlapping validity windows",
        "Deliver new credentials over the existing secure channel",
        "Fail gracefully and retry with backoff",
        "Alert on devices approaching expiry"
      ],
      "href": "knowledge.html",
      "source": "",
      "status": "source-linked"
    },
    {
      "slug": "fleet-observability",
      "name": "Fleet observability and alerting",
      "type": "Operations guide",
      "summary": "Know when devices degrade before customers report it.",
      "audience": "SRE and support teams",
      "steps": [
        "Define connection, message and error SLIs",
        "Track firmware version distribution",
        "Alert on reconnect storms and battery cliffs",
        "Correlate failures by region and carrier",
        "Publish a customer-facing status page"
      ],
      "href": "knowledge.html",
      "source": "",
      "status": "source-linked"
    },
    {
      "slug": "edge-vs-cloud-inference",
      "name": "Edge versus cloud inference for IoT",
      "type": "Architecture guide",
      "summary": "Decide where AI inference runs and what that costs.",
      "audience": "Product and ML engineers",
      "steps": [
        "Classify decisions by latency and privacy needs",
        "Size the model to the available accelerator",
        "Plan model distribution and versioning",
        "Define fallback behaviour when offline",
        "Measure accuracy drift after deployment"
      ],
      "href": "knowledge.html",
      "source": "",
      "status": "source-linked"
    },
    {
      "slug": "matter-commissioning-troubleshooting",
      "name": "Matter commissioning troubleshooting",
      "type": "Troubleshooting guide",
      "summary": "Work through the common reasons Matter pairing fails.",
      "audience": "Support and field technicians",
      "steps": [
        "Confirm the controller and device share a fabric",
        "Check Thread border router or Wi-Fi credentials",
        "Verify the pairing code has not expired",
        "Update controller and device firmware",
        "Re-test with a second ecosystem to isolate the fault"
      ],
      "href": "knowledge.html",
      "source": "",
      "status": "source-linked"
    },
    {
      "slug": "thread-border-router-planning",
      "name": "Thread border router planning",
      "type": "Implementation guide",
      "summary": "Place border routers so a Thread mesh stays stable.",
      "audience": "Smart-home installers",
      "steps": [
        "Budget at least two border routers for redundancy",
        "Keep routers on mains power and wired backhaul",
        "Avoid putting all routers on one Wi-Fi channel",
        "Check Thread network diagnostics after install",
        "Document the mesh topology for support"
      ],
      "href": "knowledge.html",
      "source": "",
      "status": "source-linked"
    },
    {
      "slug": "cellular-data-plan-sizing",
      "name": "Cellular data plan sizing",
      "type": "Cost guide",
      "summary": "Estimate monthly data so SIM plans do not overrun.",
      "audience": "Product and ops teams",
      "steps": [
        "Estimate payload size and message frequency",
        "Multiply by retries and protocol overhead",
        "Add firmware update allowance",
        "Add headroom for incident traffic",
        "Monitor actual usage against the estimate"
      ],
      "href": "knowledge.html",
      "source": "",
      "status": "source-linked"
    },
    {
      "slug": "battery-life-estimation",
      "name": "Battery life estimation for connected devices",
      "type": "Engineering guide",
      "summary": "Produce a defensible battery life figure instead of a marketing guess.",
      "audience": "Hardware engineers",
      "steps": [
        "Measure current in each radio and sleep state",
        "Build a duty-cycle model with realistic retries",
        "Include self-discharge and temperature effects",
        "Test at the temperature extremes of the target market",
        "Publish assumptions alongside the claimed life"
      ],
      "href": "knowledge.html",
      "source": "",
      "status": "source-linked"
    },
    {
      "slug": "rf-site-survey",
      "name": "RF site survey for wireless IoT",
      "type": "Field guide",
      "summary": "Verify coverage before committing to a wireless deployment.",
      "audience": "Installers and RF engineers",
      "steps": [
        "Survey at the target frequency and power",
        "Record RSSI, SNR and packet loss per location",
        "Identify interference sources and dead zones",
        "Plan repeaters or gateways from measured data",
        "Re-survey after building changes"
      ],
      "href": "knowledge.html",
      "source": "",
      "status": "source-linked"
    },
    {
      "slug": "privacy-by-design",
      "name": "Privacy by design for connected products",
      "type": "Compliance guide",
      "summary": "Build data protection into the product instead of bolting it on.",
      "audience": "Product, legal and engineering teams",
      "steps": [
        "Map every data field and its purpose",
        "Apply minimisation and retention limits",
        "Design consent and deletion flows",
        "Document lawful basis and transfers",
        "Test subject access and deletion requests"
      ],
      "href": "knowledge.html",
      "source": "",
      "status": "source-linked"
    },
    {
      "slug": "choosing-lpwan",
      "name": "Choosing an LPWAN technology",
      "type": "Decision guide",
      "summary": "Pick between LoRaWAN, NB-IoT, LTE-M, Sigfox and mioty with evidence.",
      "audience": "Solution architects",
      "steps": [
        "Define data rate, latency and mobility needs",
        "Check operator coverage at the deployment site",
        "Model device cost, module cost and subscription",
        "Confirm battery and link budget requirements",
        "Pilot before committing to a multi-year rollout"
      ],
      "href": "knowledge.html",
      "source": "",
      "status": "source-linked"
    },
    {
      "slug": "cloud-region-selection",
      "name": "Selecting a cloud region for IoT",
      "type": "Architecture guide",
      "summary": "Choose regions for latency, residency and service availability.",
      "audience": "Cloud architects",
      "steps": [
        "Map users and devices to candidate regions",
        "Check device latency to each region",
        "Confirm data residency and transfer constraints",
        "Verify service parity for required features",
        "Plan failover and disaster recovery across regions"
      ],
      "href": "knowledge.html",
      "source": "",
      "status": "source-linked"
    },
    {
      "slug": "hardware-security-bringup",
      "name": "Hardware security bring-up",
      "type": "Security guide",
      "summary": "Get secure boot, key storage and debug lockdown right at manufacture.",
      "audience": "Hardware and firmware engineers",
      "steps": [
        "Enable secure boot and verify the chain",
        "Store keys in a secure element or TPM",
        "Disable or fuse off debug interfaces",
        "Provision unique per-device credentials",
        "Document the manufacturing security steps"
      ],
      "href": "knowledge.html",
      "source": "",
      "status": "source-linked"
    },
    {
      "slug": "interop-testing",
      "name": "Interoperability testing across ecosystems",
      "type": "QA guide",
      "summary": "Prove a device works in Alexa, Google Home, Apple Home and SmartThings.",
      "audience": "QA and certification teams",
      "steps": [
        "Build a matrix of ecosystems and versions",
        "Test pairing, control, state sync and removal",
        "Test under poor network conditions",
        "Record results per ecosystem version",
        "Re-test after every firmware release"
      ],
      "href": "knowledge.html",
      "source": "",
      "status": "source-linked"
    }
  ],
  "updated_at": "2026-10-08",
  "license_notes": "Source links point to official project, vendor, standards or regulatory pages. Summaries are original editorial descriptions.",
  "concepts": [
    {
      "slug": "device-shadow",
      "name": "Device shadow",
      "category": "Architecture",
      "summary": "A cloud-side copy of a device's reported and desired state.",
      "why": "Lets you read and control a device that is offline, and gives the backend a single place to reconcile state.",
      "source": "",
      "status": "editorial"
    },
    {
      "slug": "digital-twin",
      "name": "Digital twin",
      "category": "Architecture",
      "summary": "A live model of a physical asset, its sensors and its behaviour.",
      "why": "Used for simulation, predictive maintenance and remote diagnosis without touching the physical asset.",
      "source": "",
      "status": "editorial"
    },
    {
      "slug": "ota",
      "name": "Over-the-air update",
      "category": "Firmware",
      "summary": "Delivering firmware or configuration to devices remotely.",
      "why": "The main way security fixes reach deployed hardware; a poor OTA path is the most common long-term fleet risk.",
      "source": "",
      "status": "editorial"
    },
    {
      "slug": "commissioning",
      "name": "Commissioning",
      "category": "Provisioning",
      "summary": "The process of joining a device to a network and an account.",
      "why": "Commissioning failures are the largest source of consumer support tickets and returns.",
      "source": "",
      "status": "editorial"
    },
    {
      "slug": "device-attestation",
      "name": "Device attestation",
      "category": "Security",
      "summary": "Cryptographic proof that a device is genuine and running approved firmware.",
      "why": "Blocks cloned devices and compromised firmware from joining a fleet or a Matter fabric.",
      "source": "",
      "status": "editorial"
    },
    {
      "slug": "secure-boot",
      "name": "Secure boot",
      "category": "Security",
      "summary": "A boot chain where each stage verifies the signature of the next.",
      "why": "Prevents persistent firmware tampering on physically accessible devices.",
      "source": "",
      "status": "editorial"
    },
    {
      "slug": "mqtt-qos",
      "name": "MQTT QoS levels",
      "category": "Messaging",
      "summary": "QoS 0 delivers at most once, QoS 1 at least once and QoS 2 exactly once.",
      "why": "Choosing the wrong level either loses telemetry or creates duplicate processing and extra cost.",
      "source": "",
      "status": "editorial"
    },
    {
      "slug": "last-gasp",
      "name": "Last-gasp message",
      "category": "Reliability",
      "summary": "A final status message sent as a device loses power.",
      "why": "Turns a silent outage into a diagnosable event, which matters for alarms and safety-adjacent devices.",
      "source": "",
      "status": "editorial"
    },
    {
      "slug": "edge-computing",
      "name": "Edge computing",
      "category": "Architecture",
      "summary": "Processing data near the device instead of in a central cloud region.",
      "why": "Cuts latency and bandwidth, keeps sensitive data local and lets the system keep working offline.",
      "source": "",
      "status": "editorial"
    },
    {
      "slug": "fleet-management",
      "name": "Fleet management",
      "category": "Operations",
      "summary": "The tooling and process for managing thousands of deployed devices.",
      "why": "Without it, firmware versions, certificates and configuration drift become unmanageable within months.",
      "source": "",
      "status": "editorial"
    },
    {
      "slug": "telemetry-vs-command",
      "name": "Telemetry vs command channel",
      "category": "Data",
      "summary": "Telemetry flows device to cloud, commands flow cloud to device.",
      "why": "Separating them lets you apply different security, retention and rate-limit policies to each direction.",
      "source": "",
      "status": "editorial"
    },
    {
      "slug": "time-series-data",
      "name": "Time-series data",
      "category": "Data",
      "summary": "Telemetry stored as timestamped samples rather than mutable rows.",
      "why": "Drives retention cost, query performance and the ability to detect trends and anomalies.",
      "source": "",
      "status": "editorial"
    },
    {
      "slug": "device-identity",
      "name": "Device identity",
      "category": "Security",
      "summary": "A unique, verifiable credential per device.",
      "why": "Shared or reused credentials mean one compromised device can impersonate the whole fleet.",
      "source": "",
      "status": "editorial"
    },
    {
      "slug": "local-first-architecture",
      "name": "Local-first architecture",
      "category": "Architecture",
      "summary": "Automation that runs locally and treats the cloud as an enhancement.",
      "why": "Keeps lights, locks and alarms working when broadband or the vendor cloud is unavailable.",
      "source": "",
      "status": "editorial"
    },
    {
      "slug": "interop-bridge",
      "name": "Interoperability bridge",
      "category": "Interoperability",
      "summary": "A gateway that exposes one ecosystem's devices to another.",
      "why": "Vendor locks and ecosystem battles rarely end in one protocol winning, so bridges stay necessary.",
      "source": "",
      "status": "editorial"
    },
    {
      "slug": "obsolescence-management",
      "name": "Obsolescence management",
      "category": "Lifecycle",
      "summary": "Planning for the end of cloud services, firmware support and spare parts.",
      "why": "Connected products can be bricked by a cloud shutdown even when the hardware still works.",
      "source": "",
      "status": "editorial"
    },
    {
      "slug": "data-minimisation",
      "name": "Data minimisation",
      "category": "Privacy",
      "summary": "Collecting only the data the product actually needs.",
      "why": "Reduces breach exposure, retention cost and regulatory risk under GDPR and similar laws.",
      "source": "",
      "status": "editorial"
    },
    {
      "slug": "latency-budget",
      "name": "Latency budget",
      "category": "Performance",
      "summary": "The total time from an event to a user-visible response, split across every hop.",
      "why": "Makes latency discussions concrete instead of arguing about which single component is slow.",
      "source": "",
      "status": "editorial"
    },
    {
      "slug": "link-budget",
      "name": "Link budget",
      "category": "RF",
      "summary": "The accounting of transmit power, gains, path loss and receiver sensitivity.",
      "why": "Determines whether a radio link will actually work at the claimed range in a real building.",
      "source": "",
      "status": "editorial"
    },
    {
      "slug": "duty-cycle",
      "name": "Duty cycle",
      "category": "RF / regulation",
      "summary": "The proportion of time a radio may transmit, often set by regulation.",
      "why": "Sub-GHz bands are duty-cycle limited, so it caps how often a device can report in Europe.",
      "source": "",
      "status": "editorial"
    },
    {
      "slug": "matter-fabric",
      "name": "Matter fabric",
      "category": "Interoperability",
      "summary": "A set of Matter devices sharing one controller and trust domain.",
      "why": "Explains why a device can be on one app but not another, and why multi-admin matters.",
      "source": "",
      "status": "editorial"
    }
  ],
  "completeness": {
    "generated": "2026-10-08",
    "note": "Every record is validated against a required-field contract before publish. Records missing a required field fail the build.",
    "types": {
      "protocols": {
        "count": 47,
        "required": [
          "slug",
          "name",
          "category",
          "summary",
          "range",
          "power",
          "topology",
          "use",
          "source_name",
          "source",
          "status"
        ]
      },
      "standards": {
        "count": 40,
        "required": [
          "slug",
          "name",
          "region",
          "type",
          "summary",
          "applies_to",
          "source",
          "status"
        ]
      },
      "guides": {
        "count": 32,
        "required": [
          "slug",
          "name",
          "type",
          "summary",
          "audience",
          "steps",
          "href",
          "status"
        ]
      },
      "concepts": {
        "count": 21,
        "required": [
          "slug",
          "name",
          "category",
          "summary",
          "why",
          "status"
        ]
      },
      "apps": {
        "count": 26,
        "required": [
          "slug",
          "name",
          "brand",
          "summary",
          "platforms",
          "protocols",
          "status"
        ]
      }
    }
  }
};
