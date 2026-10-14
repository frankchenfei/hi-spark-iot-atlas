window.IOT_CERTIFICATIONS = [
  {
    "slug": "fcc",
    "title": "FCC equipment authorization",
    "code": "FCC",
    "name": "FCC equipment authorization",
    "group": "Radio and telecom",
    "region": "United States",
    "status": "Mandatory for radio products",
    "issuer": "Federal Communications Commission (FCC)",
    "summary": "U.S. equipment authorization rules for radio transmitters, intentional radiators and certain electronic products placed on the American market.",
    "meaning": "Any device that transmits radio energy in the United States normally needs an FCC authorization before it can be marketed or imported. Devices fall into Certification, Supplier’s Declaration of Conformity or verification routes depending on the radio technology.",
    "appliesTo": [
      "Wi-Fi, Bluetooth, cellular and sub-GHz radios",
      "Unintentional radiators such as switching electronics",
      "Wireless modules and host devices that contain them"
    ],
    "doesNotCover": [
      "Electrical safety, which is handled by NRTL listing such as UL or ETL",
      "RF exposure to users unless the device is assessed against the exposure limits",
      "Cybersecurity or privacy of the device or its cloud"
    ],
    "checklist": [
      "Identify the correct authorization route for each radio",
      "Test to the applicable FCC rule part at an accredited lab",
      "Keep the FCC ID label and user manual statements accurate",
      "Complete the supplier’s declaration or certification filing",
      "List the module grant conditions when using a pre-certified module"
    ],
    "sources": [
      {
        "label": "FCC Equipment Authorization",
        "url": "https://www.fcc.gov/engineering-technology/laboratory-division/equipment-authorization"
      },
      {
        "label": "FCC rules (47 CFR Part 15)",
        "url": "https://www.ecfr.gov/current/title-47/chapter-I/subchapter-A/part-15"
      }
    ],
    "lastVerified": "2026-10-10"
  },
  {
    "slug": "ised",
    "title": "ISED radio certification (Canada)",
    "code": "ISED",
    "name": "ISED radio certification (Canada)",
    "group": "Radio and telecom",
    "region": "Canada",
    "status": "Mandatory for radio products",
    "issuer": "Innovation, Science and Economic Development Canada",
    "summary": "Canadian radio equipment certification and labelling rules, managed under the spectrum management programme of ISED.",
    "meaning": "Wireless products sold in Canada require an ISED certification number and the correct label wording, usually in both English and French. Test reports from an accredited lab are accepted through a recognised certification body.",
    "appliesTo": [
      "Wi-Fi, Bluetooth and cellular devices",
      "Sub-GHz remote controls and sensors",
      "Wireless modules imported into Canada"
    ],
    "doesNotCover": [
      "Canadian electrical safety approval (cUL or equivalent)",
      "Provincial consumer protection requirements",
      "Cybersecurity obligations"
    ],
    "checklist": [
      "Select the correct RSS standard for the radio",
      "Test and obtain a certification number from a recognised body",
      "Apply the ISED label and bilingual user statements",
      "Record the hardware and firmware version tested"
    ],
    "sources": [
      {
        "label": "ISED spectrum management",
        "url": "https://ised-isde.canada.ca/site/spectrum-management-telecommunications/en"
      }
    ],
    "lastVerified": "2026-10-10"
  },
  {
    "slug": "ce",
    "title": "CE marking under the Radio Equipment Directive",
    "code": "CE / RED",
    "name": "CE marking under the Radio Equipment Directive",
    "group": "Radio and telecom",
    "region": "European Union",
    "status": "Mandatory in the EU",
    "issuer": "Notified bodies and the manufacturer under EU law",
    "summary": "The Radio Equipment Directive 2014/53/EU is the main route to CE marking for wireless products sold in the European Union.",
    "meaning": "Manufacturers declare conformity, apply the CE mark and produce a technical file. From 1 August 2025 the delegated regulation on cybersecurity for internet-connected radio equipment adds mandatory security requirements.",
    "appliesTo": [
      "Any product containing a radio transmitter",
      "Devices that combine radio, GPS or cellular functions",
      "Internet-connected radio equipment, including apps that control them"
    ],
    "doesNotCover": [
      "A CE mark alone does not prove a product is secure or future-proof",
      "Chemical or packaging obligations handled by RoHS, REACH and packaging rules",
      "National spectrum restrictions that still apply inside the EU"
    ],
    "checklist": [
      "Identify the applicable directives and harmonised standards",
      "Decide whether a notified body is required",
      "Build and retain the technical file for the required period",
      "Sign the EU declaration of conformity",
      "Apply the CE mark, importer details and language requirements"
    ],
    "sources": [
      {
        "label": "EU Radio Equipment Directive",
        "url": "https://single-market-economy.ec.europa.eu/sectors/electrical-and-electronic-engineering-industries-eei/radio-equipment-directive-red_en"
      },
      {
        "label": "EUR-Lex delegated regulation 2022/30",
        "url": "https://eur-lex.europa.eu/eli/reg_del/2022/30/oj"
      }
    ],
    "lastVerified": "2026-10-10"
  },
  {
    "slug": "ukca",
    "title": "UKCA marking (Great Britain)",
    "code": "UKCA",
    "name": "UKCA marking (Great Britain)",
    "group": "Radio and telecom",
    "region": "United Kingdom",
    "status": "Mandatory in Great Britain",
    "issuer": "UK approved bodies and the manufacturer",
    "summary": "The UK conformity assessment marking used for most products placed on the market in Great Britain, with separate rules in Northern Ireland.",
    "meaning": "UKCA marking mirrors much of the EU framework after Brexit. The UK government has continued to recognise CE marking for most goods, but radio equipment, security products and labelling rules should be checked per product before shipping.",
    "appliesTo": [
      "Radio equipment placed on the Great Britain market",
      "Products where the manufacturer chooses the UKCA route",
      "Importers and distributors holding stock in the UK"
    ],
    "doesNotCover": [
      "Northern Ireland, where specific UKNI arrangements apply",
      "EU market access, which still needs CE marking",
      "Product-specific approvals such as gas or medical devices"
    ],
    "checklist": [
      "Confirm whether CE or UKCA is the accepted route for your product",
      "Use a UK approved body where third-party assessment is required",
      "Keep the UK declaration of conformity with UK responsible person details",
      "Apply the UKCA mark and correct labelling"
    ],
    "sources": [
      {
        "label": "Using the UKCA marking",
        "url": "https://www.gov.uk/guidance/using-the-ukca-marking"
      }
    ],
    "lastVerified": "2026-10-10"
  },
  {
    "slug": "anatel",
    "title": "Brazilian telecommunications homologation",
    "code": "Anatel",
    "name": "Brazilian telecommunications homologation",
    "group": "Radio and telecom",
    "region": "Brazil",
    "status": "Mandatory for telecom products",
    "issuer": "Agência Nacional de Telecomunicações (Anatel)",
    "summary": "Homologation required before telecom and radio products may be sold or connected to Brazilian networks.",
    "meaning": "Anatel homologation is granted to a local representative, and the approved model is published with a homologation number that must appear on the product or in the manual.",
    "appliesTo": [
      "Wi-Fi, Bluetooth, cellular and RF products",
      "Cables, connectors and network equipment",
      "Devices that connect to public telecom networks"
    ],
    "doesNotCover": [
      "INMETRO safety certification where the product also falls under that scope",
      "Consumer warranty and after-sales law obligations",
      "Tax and import registration"
    ],
    "checklist": [
      "Appoint a Brazilian representative as a legal holder",
      "Test at an accredited lab against the applicable Anatel acts",
      "Register the product and obtain the homologation number",
      "Display the number and keep the certificate current"
    ],
    "sources": [
      {
        "label": "Anatel",
        "url": "https://www.gov.br/anatel/pt-br"
      }
    ],
    "lastVerified": "2026-10-10"
  },
  {
    "slug": "ift",
    "title": "Mexican telecommunications approval",
    "code": "IFT",
    "name": "Mexican telecommunications approval",
    "group": "Radio and telecom",
    "region": "Mexico",
    "status": "Mandatory for telecom products",
    "issuer": "Instituto Federal de Telecomunicaciones (IFT)",
    "summary": "Mexican homologation for products that use the radio spectrum or connect to public telecom networks.",
    "meaning": "Approval is issued through a Mexican holder and results in a homologation certificate that must be referenced in labelling and documentation for the Mexican market.",
    "appliesTo": [
      "Mobile phones, tablets, wearables and Wi-Fi devices",
      "Radio modules and network equipment",
      "Voice and data terminal equipment"
    ],
    "doesNotCover": [
      "NOM safety and efficiency rules that may also apply",
      "Customs clearance procedures",
      "Software services operated from outside Mexico"
    ],
    "checklist": [
      "Confirm whether the product is homologable or exempt",
      "Appoint the Mexican holder and file the application",
      "Test against IFT technical provisions",
      "Label the product with the homologation reference"
    ],
    "sources": [
      {
        "label": "IFT",
        "url": "https://www.ift.org.mx/"
      }
    ],
    "lastVerified": "2026-10-10"
  },
  {
    "slug": "kc",
    "title": "KC certification (South Korea)",
    "code": "KC",
    "name": "KC certification (South Korea)",
    "group": "Radio and telecom",
    "region": "South Korea",
    "status": "Mandatory for radio products",
    "issuer": "National Radio Research Agency (RRA) under MSIT",
    "summary": "Korean certification for radio equipment, combining radio conformity and, in many cases, electrical safety and EMC approval.",
    "meaning": "KC certification uses different routes: conformity certification, registration or a supplier declaration, depending on the radio type and power. Certificates are held by a Korean representative.",
    "appliesTo": [
      "Wi-Fi and Bluetooth products",
      "Cellular and IoT modules",
      "Broadcast receivers and RF equipment"
    ],
    "doesNotCover": [
      "Korean e-waste and recycling registration, which is separate",
      "Content or service regulation",
      "Cybersecurity requirements"
    ],
    "checklist": [
      "Classify the equipment and choose the right KC route",
      "Test to Korean technical standards",
      "Appoint a Korean representative to hold the certificate",
      "Apply the KC mark and Korean-language label statements"
    ],
    "sources": [
      {
        "label": "National Radio Research Agency (RRA)",
        "url": "https://www.rra.go.kr/en/index.do"
      }
    ],
    "lastVerified": "2026-10-10"
  },
  {
    "slug": "mic-telec",
    "title": "Japanese radio certification (Giteki)",
    "code": "MIC / TELEC",
    "name": "Japanese radio certification (Giteki)",
    "group": "Radio and telecom",
    "region": "Japan",
    "status": "Mandatory for radio products",
    "issuer": "Ministry of Internal Affairs and Communications (MIC) through registered bodies",
    "summary": "Japanese technical conformity certification for radio equipment, commonly known as the Giteki mark and administered through registered certification bodies.",
    "meaning": "Radio equipment must be certified and carry the Giteki mark with the certification number. Products that include a certified module may still need their own certification if the module conditions are not met.",
    "appliesTo": [
      "Wi-Fi, Bluetooth, RFID and cellular devices",
      "Wireless modules and antennas",
      "Short-range remote controls"
    ],
    "doesNotCover": [
      "Japanese electrical safety obligations such as PSE for certain power supplies",
      "Telecom network connection approval beyond the radio function",
      "Cybersecurity regulation"
    ],
    "checklist": [
      "Determine whether the module certification can be reused",
      "Apply to a registered Japanese certification body",
      "Label the Giteki mark and certification number",
      "Keep the construction-protection documentation current"
    ],
    "sources": [
      {
        "label": "MIC technical regulations",
        "url": "https://www.tele.soumu.go.jp/e/"
      }
    ],
    "lastVerified": "2026-10-10"
  },
  {
    "slug": "ncc-tw",
    "title": "Taiwan NCC type approval",
    "code": "NCC",
    "name": "Taiwan NCC type approval",
    "group": "Radio and telecom",
    "region": "Taiwan",
    "status": "Mandatory for radio products",
    "issuer": "National Communications Commission (NCC)",
    "summary": "Taiwanese type approval for low-power radio equipment and telecom terminal devices sold on the local market.",
    "meaning": "Approved products receive a NCC certification number and must carry the NCC mark. The application is normally filed by a Taiwanese representative company.",
    "appliesTo": [
      "Wi-Fi, Bluetooth and RF products",
      "Mobile and wearable devices with radios",
      "Telecom terminal equipment"
    ],
    "doesNotCover": [
      "Taiwan BSMI electrical safety and EMC certification, which is separate",
      "Battery transport and recycling schemes",
      "Software service compliance"
    ],
    "checklist": [
      "Confirm whether approval is required for the radio band and power",
      "Test at a recognised Taiwanese laboratory",
      "File through a local agent",
      "Apply the NCC mark and label content in Traditional Chinese"
    ],
    "sources": [
      {
        "label": "Taiwan NCC",
        "url": "https://www.ncc.gov.tw/english/"
      }
    ],
    "lastVerified": "2026-10-10"
  },
  {
    "slug": "rcm",
    "title": "Australian and New Zealand RCM",
    "code": "RCM",
    "name": "Australian and New Zealand RCM",
    "group": "Radio and telecom",
    "region": "Australia and New Zealand",
    "status": "Mandatory for radio and mains products",
    "issuer": "ACMA and the EESS regulators",
    "summary": "The Regulatory Compliance Mark shows that a product meets Australian and New Zealand radio communications and, where applicable, electrical safety requirements.",
    "meaning": "The supplier must be registered in the national database and hold test evidence for radio, EMC and safety requirements. Labelling rules differ between radio and electrical safety scopes.",
    "appliesTo": [
      "Radio communications devices",
      "Mains-powered electrical products",
      "Devices that combine both scopes"
    ],
    "doesNotCover": [
      "Telecommunications cabling or carrier connection approval",
      "Battery recycling obligations",
      "Voluntary efficiency ratings"
    ],
    "checklist": [
      "Identify whether radio, EESS or both schemes apply",
      "Register as a responsible supplier",
      "Hold compliant test reports with the required standards",
      "Apply the RCM with the correct size and placement"
    ],
    "sources": [
      {
        "label": "ACMA compliance",
        "url": "https://www.acma.gov.au/radiocommunications-licences"
      },
      {
        "label": "EESS",
        "url": "https://www.eess.gov.au/"
      }
    ],
    "lastVerified": "2026-10-10"
  },
  {
    "slug": "saso",
    "title": "Saudi SASO conformity",
    "code": "SASO",
    "name": "Saudi SASO conformity",
    "group": "Radio and telecom",
    "region": "Saudi Arabia",
    "status": "Mandatory in Saudi Arabia",
    "issuer": "Saudi Standards, Metrology and Quality Organization",
    "summary": "Product conformity used for goods entering Saudi Arabia, issued through the SABER platform with certificate of conformity procedures.",
    "meaning": "Importers must register the product and obtain the required certificates of conformity before customs clearance. Radio and telecom products also need CITC approval.",
    "appliesTo": [
      "Electrical and electronic consumer products",
      "Radio and telecom devices",
      "Products in regulated technical regulations"
    ],
    "doesNotCover": [
      "CITC radio and telecom licensing, which is handled separately",
      "Halal or food-related schemes",
      "Commercial agency registration"
    ],
    "checklist": [
      "Confirm the technical regulation that applies to the product",
      "Register the product in SABER and select the conformity route",
      "Test to the applicable Saudi standard or approved equivalent",
      "Attach the certificate to each shipment"
    ],
    "sources": [
      {
        "label": "SASO",
        "url": "https://www.saso.gov.sa/en/Pages/default.aspx"
      }
    ],
    "lastVerified": "2026-10-10"
  },
  {
    "slug": "eac",
    "title": "Eurasian EAC conformity",
    "code": "EAC",
    "name": "Eurasian EAC conformity",
    "group": "Radio and telecom",
    "region": "Eurasia Economic Union",
    "status": "Mandatory in EAEU markets",
    "issuer": "National accreditation bodies of the EAEU member states",
    "summary": "EAC conformity for products placed on the Eurasian Economic Union market, covering safety, EMC and, for some categories, radio requirements.",
    "meaning": "Products assessed against the relevant technical regulations, for example low-voltage, EMC and EMC-of-radio rules, receive an EAC declaration or certificate that is valid across the member states.",
    "appliesTo": [
      "Electrical and electronic products",
      "Radio and low-voltage equipment",
      "Machinery and household appliances"
    ],
    "doesNotCover": [
      "Local telecom operator licensing",
      "Voluntary export schemes",
      "Language requirements outside the technical regulations"
    ],
    "checklist": [
      "Map the product against the applicable TR CU regulations",
      "Decide between declaration and certification routes",
      "Use an accredited body in a member state",
      "Mark the product with the EAC mark and Cyrillic information where required"
    ],
    "sources": [
      {
        "label": "Eurasian Economic Union",
        "url": "https://eec.eaeunion.org/en/"
      }
    ],
    "lastVerified": "2026-10-10"
  },
  {
    "slug": "bis-wpc",
    "title": "Indian BIS registration and WPC approval",
    "code": "BIS / WPC",
    "name": "Indian BIS registration and WPC approval",
    "group": "Radio and telecom",
    "region": "India",
    "status": "Mandatory for regulated products",
    "issuer": "Bureau of Indian Standards and the Wireless Planning and Coordination wing",
    "summary": "Indian compliance typically combines BIS registration for electronics safety under the CRS scheme with WPC approval for wireless products.",
    "meaning": "BIS registration is issued to the manufacturer through the Compulsory Registration Scheme, while the WPC equipment type approval covers the radio interface. Both can be needed for one product.",
    "appliesTo": [
      "Electronics covered by the CRS list",
      "Wi-Fi and Bluetooth devices",
      "Telecom and RF equipment"
    ],
    "doesNotCover": [
      "Indian telecom network licensing",
      "Local manufacturing incentives",
      "Consumer packaging declarations outside the schemes"
    ],
    "checklist": [
      "Check whether the product appears in the CRS schedule",
      "Test in a BIS-recognised laboratory",
      "Apply for WPC ETA for the radio module",
      "Apply the standard mark once registration is granted"
    ],
    "sources": [
      {
        "label": "Bureau of Indian Standards",
        "url": "https://www.bis.gov.in/"
      },
      {
        "label": "WPC",
        "url": "https://www.wpc.dot.gov.in/"
      }
    ],
    "lastVerified": "2026-10-10"
  },
  {
    "slug": "srrc-ccc",
    "title": "China SRRC and CCC approval",
    "code": "SRRC / CCC",
    "name": "China SRRC and CCC approval",
    "group": "Radio and telecom",
    "region": "China",
    "status": "Mandatory in China",
    "issuer": "MIIT, SRRC and CNCA-designated bodies",
    "summary": "Wireless products entering China normally require SRRC radio type approval, with CCC compulsory certification for categories on the CCC list.",
    "meaning": "SRRC approval covers the radio transmitter type, and CCC covers safety and EMC for products in scope. Both are held by a local entity and are checked at import and sale.",
    "appliesTo": [
      "Radio transmitting equipment",
      "Products in the CCC catalogue, including some IT and AV equipment",
      "Wireless modules and finished devices"
    ],
    "doesNotCover": [
      "China RoHS packaging disclosure, which is a separate obligation",
      "Cybersecurity review for critical network equipment",
      "Software service licensing"
    ],
    "checklist": [
      "Determine SRRC scope and the radio test standard",
      "Check whether the product is in the CCC catalogue",
      "Appoint a local applicant and submit samples",
      "Apply the SRRC code and CCC mark as required"
    ],
    "sources": [
      {
        "label": "MIIT",
        "url": "https://www.miit.gov.cn/"
      },
      {
        "label": "CNCA",
        "url": "https://www.cnca.gov.cn/"
      }
    ],
    "lastVerified": "2026-10-10"
  },
  {
    "slug": "ul-etl",
    "title": "North American safety listing",
    "code": "UL / ETL",
    "name": "North American safety listing",
    "group": "Safety and EMC",
    "region": "United States and Canada",
    "status": "Required by retailers and inspectors",
    "issuer": "UL, Intertek (ETL), CSA and other NRTLs",
    "summary": "Third-party product safety certification for the North American market, issued by a Nationally Recognized Testing Laboratory.",
    "meaning": "Safety listing is not a single government mark: it is a certification issued by an NRTL against UL or CSA standards. Retailers, insurers and electrical inspectors commonly require it, and the mark must match the exact product and factory.",
    "appliesTo": [
      "Mains-powered IoT devices, hubs and chargers",
      "Battery-powered products with charging circuits",
      "Components such as power supplies inside a device"
    ],
    "doesNotCover": [
      "Radio approval, which is the FCC or ISED scope",
      "Performance, privacy or cybersecurity of the product",
      "Software updates that change the safety-relevant design"
    ],
    "checklist": [
      "Identify the correct UL or CSA standard for the product",
      "Submit samples and critical components to the NRTL",
      "Accept the factory inspection programme for listed products",
      "Report design changes that affect safety before shipping them"
    ],
    "sources": [
      {
        "label": "UL certification",
        "url": "https://www.ul.com/services/certification"
      },
      {
        "label": "CSA Group testing and certification",
        "url": "https://www.csagroup.org/testing-certification/"
      }
    ],
    "lastVerified": "2026-10-10"
  },
  {
    "slug": "iec-62368",
    "title": "IEC and EN 62368-1 safety standard",
    "code": "IEC 62368-1",
    "name": "IEC and EN 62368-1 safety standard",
    "group": "Safety and EMC",
    "region": "International",
    "status": "Core safety standard",
    "issuer": "International Electrotechnical Commission",
    "summary": "The hazard-based safety standard that replaced IEC 60950 and IEC 60065 for audio, video, information and communication technology equipment.",
    "meaning": "Rather than prescribing construction, IEC 62368-1 requires the designer to identify energy sources and provide safeguards. It is the safety standard that most smart speakers, hubs, cameras and chargers are tested against.",
    "appliesTo": [
      "Audio and video equipment",
      "IT and communication equipment",
      "Devices with mains or battery power and a charging interface"
    ],
    "doesNotCover": [
      "Radio approval",
      "Medical or automotive safety standards",
      "Cybersecurity of the device or cloud"
    ],
    "checklist": [
      "Classify energy sources and required safeguards",
      "Check component ratings and creepage and clearance distances",
      "Test abnormal and single-fault conditions",
      "Review the standard edition used in each market certificate"
    ],
    "sources": [
      {
        "label": "IEC",
        "url": "https://www.iec.ch/"
      }
    ],
    "lastVerified": "2026-10-10"
  },
  {
    "slug": "emc-directive",
    "title": "EMC Directive 2014/30/EU",
    "code": "EMC",
    "name": "EMC Directive 2014/30/EU",
    "group": "Safety and EMC",
    "region": "European Union",
    "status": "Mandatory in the EU",
    "issuer": "Manufacturer under EU law, with notified bodies where required",
    "summary": "The European directive that requires equipment to limit electromagnetic emissions and to be immune to interference in its intended environment.",
    "meaning": "EMC is assessed separately from radio and safety. Products that contain radios are usually covered by the Radio Equipment Directive, which combines radio and EMC requirements in one file.",
    "appliesTo": [
      "Electrical and electronic equipment with possible emissions",
      "Devices with switching power supplies or motors",
      "Equipment intended for residential, commercial or industrial environments"
    ],
    "doesNotCover": [
      "Radio spectrum authorisation",
      "Electrical safety",
      "Immunity performance guarantees in every real installation"
    ],
    "checklist": [
      "Identify whether RED or EMC Directive applies",
      "Test emissions and immunity against harmonised standards",
      "Document the assessment and any applicable standards",
      "Include EMC statements in the declaration and manual"
    ],
    "sources": [
      {
        "label": "EU EMC Directive",
        "url": "https://single-market-economy.ec.europa.eu/sectors/electrical-and-electronic-engineering-industries-eei/electromagnetic-compatibility-emc-directive_en"
      }
    ],
    "lastVerified": "2026-10-10"
  },
  {
    "slug": "cb-scheme",
    "title": "IECEE CB Scheme certificate",
    "code": "CB Scheme",
    "name": "IECEE CB Scheme certificate",
    "group": "Safety and EMC",
    "region": "International",
    "status": "Voluntary, widely used",
    "issuer": "IECEE member certification bodies",
    "summary": "An international system that lets one safety test report and certificate be converted into national certifications in participating countries.",
    "meaning": "The CB Scheme reduces repeated safety testing across countries. A CB test certificate and report from one member body is accepted as the basis for national approval by other members, sometimes with national differences added.",
    "appliesTo": [
      "Products needing safety approval in several countries",
      "Power supplies, chargers and appliances",
      "Components with their own standards"
    ],
    "doesNotCover": [
      "Radio approvals, which are handled by national telecom schemes",
      "Marking requirements, which stay national",
      "Factory inspection regimes of individual schemes"
    ],
    "checklist": [
      "Choose a CB test laboratory recognised in the target countries",
      "Confirm national differences before testing",
      "Request the CB certificate and full test report",
      "Convert the report into national certificates where needed"
    ],
    "sources": [
      {
        "label": "IECEE CB Scheme",
        "url": "https://www.iecee.org/cb-scheme"
      }
    ],
    "lastVerified": "2026-10-10"
  },
  {
    "slug": "ip-rating",
    "title": "IEC 60529 IP rating",
    "code": "IP",
    "name": "IEC 60529 IP rating",
    "group": "Safety and EMC",
    "region": "International",
    "status": "Voluntary, widely demanded",
    "issuer": "Testing laboratories against IEC 60529",
    "summary": "Ingress protection rating that describes resistance to dust and water, written as IP followed by two digits.",
    "meaning": "The first digit covers solids and dust, the second covers water. Ratings apply to the complete enclosure as tested, not to the electronics inside, and can be voided if the housing is opened or seals are reused.",
    "appliesTo": [
      "Outdoor cameras and doorbells",
      "Sensors exposed to humidity or rain",
      "Portable devices with sealing requirements"
    ],
    "doesNotCover": [
      "Impact resistance, which is covered by IK ratings",
      "Corrosion resistance and salt spray",
      "Continued protection after repair or battery replacement"
    ],
    "checklist": [
      "Select the rating required by the installation environment",
      "Test the finished product, including seals and gaskets",
      "Include cable glands and connectors in the assessment",
      "State the test conditions in marketing material"
    ],
    "sources": [
      {
        "label": "IEC IP ratings",
        "url": "https://www.iec.ch/ip-ratings"
      }
    ],
    "lastVerified": "2026-10-10"
  },
  {
    "slug": "csa",
    "title": "CSA Group certification",
    "code": "CSA",
    "name": "CSA Group certification",
    "group": "Safety and EMC",
    "region": "Canada and United States",
    "status": "Common market requirement",
    "issuer": "CSA Group",
    "summary": "Canadian safety certification that is also accepted as an NRTL listing for the United States market.",
    "meaning": "CSA marks show that a product has been evaluated against Canadian and, where applicable, U.S. standards. This is often the most practical route for products sold in both countries at once.",
    "appliesTo": [
      "Electrical and electronic products for Canada",
      "Products seeking a combined Canada and U.S. listing",
      "Components that require certified parts"
    ],
    "doesNotCover": [
      "Radio equipment certification in either country",
      "Provincial electrical code requirements",
      "Cybersecurity and privacy"
    ],
    "checklist": [
      "Confirm which CSA or UL standards apply in each country",
      "Choose a combined Canada and U.S. certification if possible",
      "Keep the factory inspection programme current",
      "Report changes to critical components"
    ],
    "sources": [
      {
        "label": "CSA Group",
        "url": "https://www.csagroup.org/testing-certification/"
      }
    ],
    "lastVerified": "2026-10-10"
  },
  {
    "slug": "rohs",
    "title": "Restriction of Hazardous Substances",
    "code": "RoHS",
    "name": "Restriction of Hazardous Substances",
    "group": "Environmental and materials",
    "region": "European Union and aligned markets",
    "status": "Mandatory in scope",
    "issuer": "Manufacturer declaration under EU Directive 2011/65/EU",
    "summary": "Restricts lead, mercury, cadmium, hexavalent chromium and certain phthalates in electrical and electronic equipment sold in the EU.",
    "meaning": "RoHS compliance is shown through a technical file, supplier declarations and material test reports rather than a product mark. Many other markets have adopted similar restrictions, sometimes with different substance lists.",
    "appliesTo": [
      "Electrical and electronic equipment in the ten RoHS categories",
      "Components and sub-assemblies placed on the market",
      "Cables, power supplies and accessories sold with the device"
    ],
    "doesNotCover": [
      "Batteries, which have their own regulation",
      "Packaging, which is covered by packaging rules",
      "Product safety or radio performance"
    ],
    "checklist": [
      "Collect supplier declarations and material test reports",
      "Assess homogeneous material levels rather than the finished product",
      "Keep evidence for every part number in the bill of materials",
      "Refresh evidence when a supplier changes a material or process"
    ],
    "sources": [
      {
        "label": "EU RoHS Directive",
        "url": "https://environment.ec.europa.eu/topics/waste-and-recycling/rohs-directive_en"
      }
    ],
    "lastVerified": "2026-10-10"
  },
  {
    "slug": "reach",
    "title": "REACH SVHC and SCIP notification",
    "code": "REACH",
    "name": "REACH SVHC and SCIP notification",
    "group": "Environmental and materials",
    "region": "European Union",
    "status": "Mandatory in scope",
    "issuer": "European Chemicals Agency framework",
    "summary": "European chemicals regulation that places duties on suppliers when a product contains a Substance of Very High Concern above the threshold.",
    "meaning": "IoT hardware can contain SVHCs in solder, plastics, coatings or cables. Information duties apply at the article level, and SCIP database notification is required for articles placed on the EU market.",
    "appliesTo": [
      "Finished articles placed on the EU market",
      "Components imported as separate articles",
      "Cables, housings and coatings"
    ],
    "doesNotCover": [
      "Restriction of hazardous substances in electronics, which is RoHS",
      "Battery chemical restrictions",
      "Occupational exposure rules inside factories"
    ],
    "checklist": [
      "Collect full material declarations from suppliers",
      "Check the current SVHC candidate list regularly",
      "Communicate information down the supply chain when required",
      "Prepare SCIP notifications for the affected articles"
    ],
    "sources": [
      {
        "label": "ECHA REACH",
        "url": "https://echa.europa.eu/regulations/reach/understanding-reach"
      }
    ],
    "lastVerified": "2026-10-10"
  },
  {
    "slug": "weee",
    "title": "Waste Electrical and Electronic Equipment",
    "code": "WEEE",
    "name": "Waste Electrical and Electronic Equipment",
    "group": "Environmental and materials",
    "region": "European Union and United Kingdom",
    "status": "Mandatory in scope",
    "issuer": "National producer responsibility schemes",
    "summary": "Rules that make producers responsible for financing the collection and recycling of electrical and electronic equipment.",
    "meaning": "Sellers that place products on the market usually have to register with a national producer responsibility organisation in each country, report volumes and display the crossed-out bin symbol.",
    "appliesTo": [
      "Household and professional electrical equipment",
      "Online sellers, including distance sellers into the EU",
      "Batteries contained in the product"
    ],
    "doesNotCover": [
      "RoHS substance restrictions",
      "Packaging recovery schemes",
      "Transport and logistics obligations"
    ],
    "checklist": [
      "Register in every EU country where you place goods",
      "Report put-on-market volumes on time",
      "Print the crossed-out bin symbol and producer identification",
      "Contract with a take-back scheme where required"
    ],
    "sources": [
      {
        "label": "EU WEEE Directive",
        "url": "https://environment.ec.europa.eu/topics/waste-and-recycling/waste-electrical-and-electronic-equipment-weee_en"
      }
    ],
    "lastVerified": "2026-10-10"
  },
  {
    "slug": "eu-battery",
    "title": "EU Battery Regulation (EU) 2023/1542",
    "code": "EU Battery",
    "name": "EU Battery Regulation (EU) 2023/1542",
    "group": "Environmental and materials",
    "region": "European Union",
    "status": "Mandatory, phased",
    "issuer": "EU member state authorities",
    "summary": "Replaces the older battery directive with wider duties covering carbon footprint, recycled content, labelling, due diligence and removability.",
    "meaning": "The regulation applies progressively, so different obligations start on different dates. Portable batteries designed into IoT products face removability and replaceability expectations, and labelling requirements expand over time.",
    "appliesTo": [
      "Products with rechargeable or replaceable batteries",
      "Battery pack suppliers",
      "Producers placing batteries on the EU market"
    ],
    "doesNotCover": [
      "Transport testing of lithium cells, which is UN 38.3",
      "Safety testing of the battery pack",
      "Recycling targets handled by national schemes"
    ],
    "checklist": [
      "Identify the battery category and the applicable phase-in dates",
      "Plan for removability and replaceability of portable batteries",
      "Prepare carbon footprint and recycled content documentation",
      "Apply the battery labelling and QR requirements when they apply"
    ],
    "sources": [
      {
        "label": "EU batteries policy",
        "url": "https://environment.ec.europa.eu/topics/waste-and-recycling/batteries_en"
      }
    ],
    "lastVerified": "2026-10-10"
  },
  {
    "slug": "prop65",
    "title": "California Proposition 65",
    "code": "Prop 65",
    "name": "California Proposition 65",
    "group": "Environmental and materials",
    "region": "California, United States",
    "status": "Mandatory if exposure triggers",
    "issuer": "California Office of Environmental Health Hazard Assessment",
    "summary": "California law that requires a clear warning when a product exposes users to chemicals on the state list above safe harbour levels.",
    "meaning": "The rule is warning-based rather than approval-based. Manufacturers either assess exposure and warn, or document that exposure is below the safe harbour level. Warning content and placement follow set formats.",
    "appliesTo": [
      "Consumer products sold in California",
      "Cables, vinyl materials, solder and coatings",
      "Products where a chemical may be released during normal use"
    ],
    "doesNotCover": [
      "Federal chemical restrictions",
      "EU substance rules",
      "Product safety certification"
    ],
    "checklist": [
      "Screen the bill of materials against the current chemical list",
      "Assess likely exposure routes and duration of use",
      "Choose between a warning and a documented no-exposure case",
      "Apply the warning in the required format and refresh the review"
    ],
    "sources": [
      {
        "label": "California OEHHA",
        "url": "https://oehha.ca.gov/proposition-65"
      }
    ],
    "lastVerified": "2026-10-10"
  },
  {
    "slug": "un383",
    "title": "UN 38.3 lithium battery transport testing",
    "code": "UN 38.3",
    "name": "UN 38.3 lithium battery transport testing",
    "group": "Environmental and materials",
    "region": "International transport",
    "status": "Mandatory for shipping",
    "issuer": "UN Manual of Tests and Criteria, tested by accredited labs",
    "summary": "Transport test requirement for lithium metal and lithium ion cells and batteries before air, sea or land shipment.",
    "meaning": "Shipping lithium batteries without a UN 38.3 test summary is a transport regulation violation, and carriers can refuse the shipment. The test report accompanies the battery through the supply chain, including sample shipments.",
    "appliesTo": [
      "Devices with lithium ion or lithium metal cells",
      "Replacement battery packs",
      "Prototype and sample shipments"
    ],
    "doesNotCover": [
      "Battery safety certification of the finished product",
      "Charging system design",
      "Consumer warnings beyond transport labelling"
    ],
    "checklist": [
      "Test each cell and battery type as shipped",
      "Hold the test summary from an accredited laboratory",
      "Check state of charge and packaging rules for air transport",
      "Re-test after design or supplier changes that affect the battery"
    ],
    "sources": [
      {
        "label": "UN transport of dangerous goods",
        "url": "https://unece.org/transport/standards/transport/dangerous-goods"
      }
    ],
    "lastVerified": "2026-10-10"
  },
  {
    "slug": "energy-star",
    "title": "Energy Star efficiency programme",
    "code": "Energy Star",
    "name": "Energy Star efficiency programme",
    "group": "Environmental and materials",
    "region": "United States and selected markets",
    "status": "Voluntary",
    "issuer": "US Environmental Protection Agency",
    "summary": "Voluntary efficiency labelling for products that meet Energy Star specifications in an eligible category.",
    "meaning": "For network equipment and consumer electronics, Energy Star certification requires third-party testing and registration, and the label must be used only for the certified configuration.",
    "appliesTo": [
      "Eligible consumer electronics and network equipment",
      "Products where efficiency is a selling point",
      "Retail programmes that require the label"
    ],
    "doesNotCover": [
      "Safety, EMC or radio approval",
      "EU energy labelling, which is a separate scheme",
      "Inverter or motor efficiency standards"
    ],
    "checklist": [
      "Confirm the product category is currently eligible",
      "Test against the active specification version",
      "Complete third-party certification and registration",
      "Report changes that affect qualified configuration"
    ],
    "sources": [
      {
        "label": "Energy Star",
        "url": "https://www.energystar.gov/"
      }
    ],
    "lastVerified": "2026-10-10"
  },
  {
    "slug": "etsi-303-645",
    "title": "ETSI EN 303 645 consumer IoT security baseline",
    "code": "EN 303 645",
    "name": "ETSI EN 303 645 consumer IoT security baseline",
    "group": "Security and privacy",
    "region": "International baseline",
    "status": "Voluntary baseline, referenced by regulation",
    "issuer": "ETSI, developed with industry and regulators",
    "summary": "Widely referenced baseline of thirteen security provisions for consumer IoT devices, from no universal default passwords to secure updates.",
    "meaning": "EN 303 645 is not a market access requirement by itself, but several national schemes and retailer requirements use it as the reference. Compliance is usually evidenced by a test report against the provisions plus the corresponding data protection guidance.",
    "appliesTo": [
      "Consumer IoT devices such as cameras, hubs and sensors",
      "Companion mobile apps and cloud services",
      "Manufacturers designing a security baseline programme"
    ],
    "doesNotCover": [
      "Industrial or medical device security requirements",
      "Full ISO 27001 style management system certification",
      "Legal data protection compliance"
    ],
    "checklist": [
      "Eliminate universal default passwords and enforce unique credentials",
      "Provide a vulnerability disclosure contact and process",
      "Publish a support period and update policy",
      "Secure sensitive data in transit and at rest",
      "Test the device against the thirteen provisions"
    ],
    "sources": [
      {
        "label": "ETSI consumer IoT security",
        "url": "https://www.etsi.org/technologies/consumer-iot-security"
      }
    ],
    "lastVerified": "2026-10-10"
  },
  {
    "slug": "en-18031",
    "title": "EN 18031 harmonised standards under the RED",
    "code": "EN 18031",
    "name": "EN 18031 harmonised standards under the RED",
    "group": "Security and privacy",
    "region": "European Union",
    "status": "Linked to EU market access",
    "issuer": "CEN/CENELEC standards, cited under the Radio Equipment Directive",
    "summary": "Harmonised standards that give a presumption of conformity with the cybersecurity requirements added to the Radio Equipment Directive.",
    "meaning": "With the delegated regulation applying from 1 August 2025, internet-connected radio equipment must meet network protection, personal data protection and fraud protection requirements. EN 18031-1, -2 and -3 are the main routes, and testing is done by notified bodies.",
    "appliesTo": [
      "Internet-connected radio equipment in the EU",
      "Wearables, cameras, toys and home devices with apps",
      "Devices that process personal data or allow payments"
    ],
    "doesNotCover": [
      "GDPR duties of the service operator",
      "Radio performance and EMC testing",
      "Security of back-end services outside the device scope"
    ],
    "checklist": [
      "Confirm which of the three standards applies to the product",
      "Map device features against each requirement clause",
      "Engage a notified body early in the schedule",
      "Keep the assessment in the technical file with the declaration of conformity"
    ],
    "sources": [
      {
        "label": "EUR-Lex delegated regulation 2022/30",
        "url": "https://eur-lex.europa.eu/eli/reg_del/2022/30/oj"
      },
      {
        "label": "ETSI consumer IoT security",
        "url": "https://www.etsi.org/technologies/consumer-iot-security"
      }
    ],
    "lastVerified": "2026-10-10"
  },
  {
    "slug": "nist-8259",
    "title": "NIST IR 8259 IoT cybersecurity baseline",
    "code": "NIST 8259",
    "name": "NIST IR 8259 IoT cybersecurity baseline",
    "group": "Security and privacy",
    "region": "United States framework",
    "status": "Voluntary framework",
    "issuer": "National Institute of Standards and Technology",
    "summary": "A voluntary baseline of six foundational cybersecurity activities for connected devices, used widely in procurement and product planning.",
    "meaning": "NIST IR 8259 describes what a manufacturer should do before a device reaches the market, and 8259A lists the corresponding device capabilities. It is often used together with the IoT device cybersecurity guidance for federal acquisition.",
    "appliesTo": [
      "Manufacturers planning device security features",
      "Procurement requirements that reference NIST guidance",
      "Products seeking a documented baseline for enterprise buyers"
    ],
    "doesNotCover": [
      "A certification or a mark",
      "Privacy law compliance",
      "Sector-specific regulation such as medical devices"
    ],
    "checklist": [
      "Identify the device and its security assumptions",
      "Define the customer-facing security capabilities",
      "Document the update and vulnerability handling model",
      "Map the device against the six activities and 8259A capabilities"
    ],
    "sources": [
      {
        "label": "NIST cybersecurity for IoT",
        "url": "https://www.nist.gov/itl/applied-cybersecurity/nist-cybersecurity-iot-program"
      },
      {
        "label": "NIST IR 8259",
        "url": "https://csrc.nist.gov/pubs/ir/8259/final"
      }
    ],
    "lastVerified": "2026-10-10"
  },
  {
    "slug": "cyber-trust-mark",
    "title": "US Cyber Trust Mark",
    "code": "US Cyber Trust Mark",
    "name": "US Cyber Trust Mark",
    "group": "Security and privacy",
    "region": "United States",
    "status": "Voluntary labelling programme",
    "issuer": "FCC with programme administrators",
    "summary": "A voluntary US labelling programme for consumer IoT cybersecurity, developed from the FCC cyber labelling initiative.",
    "meaning": "The label is intended to give shoppers a simple signal that a device meets a defined security baseline, including unique passwords, updates and vulnerability handling. Programme details and the list of recognised administrators continue to develop, so the current requirements should be confirmed before planning a launch around the mark.",
    "appliesTo": [
      "Consumer IoT products sold in the United States",
      "Retailers and marketplaces that promote the label",
      "Manufacturers planning a security differentiation strategy"
    ],
    "doesNotCover": [
      "Radio equipment authorisation, which is separate",
      "A substitute for privacy law compliance",
      "Industrial or enterprise device security"
    ],
    "checklist": [
      "Check the current programme scope and requirements",
      "Align the device with the underlying security criteria",
      "Plan for third-party testing and label administration",
      "Keep a public support and update commitment"
    ],
    "sources": [
      {
        "label": "FCC Cyber Trust Mark",
        "url": "https://www.fcc.gov/cybertrustmark"
      }
    ],
    "lastVerified": "2026-10-10"
  },
  {
    "slug": "iec-62443",
    "title": "IEC 62443 industrial cybersecurity",
    "code": "IEC 62443",
    "name": "IEC 62443 industrial cybersecurity",
    "group": "Security and privacy",
    "region": "International",
    "status": "Voluntary, often contractual",
    "issuer": "International Electrotechnical Commission and ISA",
    "summary": "A family of standards for cybersecurity of industrial automation and control systems, covering processes, systems and components.",
    "meaning": "IEC 62443 is the reference for industrial IoT, gateways and building systems. Buyers often require a security level target such as SL 1 or SL 2, and evidence is usually produced through a certification or an independent assessment.",
    "appliesTo": [
      "Industrial gateways, controllers and sensors",
      "Building and energy management devices",
      "Vendors selling into critical infrastructure"
    ],
    "doesNotCover": [
      "Consumer IoT baselines, which are lighter weight",
      "Classic IT security certification",
      "Functional safety requirements"
    ],
    "checklist": [
      "Define the target security level and zones for the product",
      "Apply secure development and hardening requirements",
      "Document threat model, access control and update process",
      "Complete an independent assessment or certification"
    ],
    "sources": [
      {
        "label": "ISA/IEC 62443",
        "url": "https://www.isa.org/standards-and-publications/isa-standards/isa-iec-62443-series-of-standards"
      }
    ],
    "lastVerified": "2026-10-10"
  },
  {
    "slug": "iso-27001",
    "title": "Information security management (ISO/IEC 27001)",
    "code": "ISO 27001",
    "name": "Information security management (ISO/IEC 27001)",
    "group": "Security and privacy",
    "region": "International",
    "status": "Voluntary, contractual",
    "issuer": "Accredited certification bodies",
    "summary": "Certification of a management system for information security, covering how an organisation protects its own and its customers’ data.",
    "meaning": "ISO/IEC 27001 certifies the organisation and its processes, not a specific device. For IoT companies it is most relevant to the cloud service, the mobile app backend and internal development practices, and it is frequently demanded in B2B procurement.",
    "appliesTo": [
      "Cloud platforms and app backends",
      "Companies operating customer data at scale",
      "Vendors responding to enterprise security questionnaires"
    ],
    "doesNotCover": [
      "Device level security requirements",
      "Privacy law compliance, which ISO 27701 addresses",
      "Product certification of any kind"
    ],
    "checklist": [
      "Define the scope and statement of applicability",
      "Assess risks and select controls",
      "Operate the management system with evidence",
      "Complete stage 1 and stage 2 audits and maintain surveillance audits"
    ],
    "sources": [
      {
        "label": "ISO/IEC 27001",
        "url": "https://www.iso.org/standard/27001"
      }
    ],
    "lastVerified": "2026-10-10"
  },
  {
    "slug": "iso-27701",
    "title": "Privacy information management (ISO/IEC 27701)",
    "code": "ISO 27701",
    "name": "Privacy information management (ISO/IEC 27701)",
    "group": "Security and privacy",
    "region": "International",
    "status": "Voluntary, contractual",
    "issuer": "Accredited certification bodies",
    "summary": "An extension to ISO/IEC 27001 and 27002 for privacy information management, covering controllers and processors of personal data.",
    "meaning": "ISO/IEC 27701 provides a management framework that maps to privacy regulation, which is useful for IoT companies handling location, camera or health data. It complements but does not replace legal compliance.",
    "appliesTo": [
      "Cloud services that process personal data",
      "Mobile apps collecting usage or account data",
      "Organisations acting as data processors for enterprise clients"
    ],
    "doesNotCover": [
      "A guarantee of legal compliance in each jurisdiction",
      "Device level data protection requirements",
      "Consumer consent management software"
    ],
    "checklist": [
      "Start from an operational ISO/IEC 27001 management system",
      "Identify the controller and processor roles",
      "Extend the risk assessment to personal data",
      "Document records of processing and retention"
    ],
    "sources": [
      {
        "label": "ISO/IEC 27701",
        "url": "https://www.iso.org/standard/71670"
      }
    ],
    "lastVerified": "2026-10-10"
  },
  {
    "slug": "soc-2",
    "title": "SOC 2 trust services report",
    "code": "SOC 2",
    "name": "SOC 2 trust services report",
    "group": "Security and privacy",
    "region": "United States, used globally",
    "status": "Voluntary, contractual",
    "issuer": "Licensed CPA firms",
    "summary": "An independent attestation report on controls covering security and, optionally, availability, processing integrity, confidentiality and privacy.",
    "meaning": "SOC 2 is a report rather than a certificate. Enterprise customers typically ask for a Type 1 point-in-time report first and a Type 2 report covering a period of operation as the service matures.",
    "appliesTo": [
      "Cloud services and IoT platforms serving business customers",
      "Mobile backend and data processing environments",
      "Vendors in enterprise procurement processes"
    ],
    "doesNotCover": [
      "Device firmware security",
      "Consumer privacy law compliance",
      "A public certification mark"
    ],
    "checklist": [
      "Choose the relevant trust services criteria",
      "Document policies and control evidence",
      "Complete a readiness assessment before the audit",
      "Publish the report under NDA to customers"
    ],
    "sources": [
      {
        "label": "AICPA assurance services",
        "url": "https://www.aicpa-cima.com/topic/audit-assurance"
      }
    ],
    "lastVerified": "2026-10-10"
  },
  {
    "slug": "gdpr",
    "title": "EU General Data Protection Regulation",
    "code": "GDPR",
    "name": "EU General Data Protection Regulation",
    "group": "Security and privacy",
    "region": "European Union",
    "status": "Mandatory",
    "issuer": "EU data protection authorities",
    "summary": "The core EU law on processing personal data, including data collected by connected devices, apps and cloud services.",
    "meaning": "IoT products routinely process personal data such as account details, device identifiers, location, camera footage or health measurements. GDPR requires a lawful basis, transparency, data minimisation, security, retention limits and support for data subject rights, and it applies to sellers outside the EU that target EU users.",
    "appliesTo": [
      "Companion apps and cloud accounts",
      "Cameras, trackers and wearables that process personal data",
      "Manufacturers and service providers offering devices to EU users"
    ],
    "doesNotCover": [
      "Radio or safety market access",
      "Sector rules such as the ePrivacy Directive for cookies and communications",
      "Local implementation laws that add national requirements"
    ],
    "checklist": [
      "Map what personal data each product collects and where it goes",
      "Define the lawful basis and document it",
      "Publish a privacy notice that matches the actual data flows",
      "Implement retention, deletion and export capabilities",
      "Assess transfers outside the EU and the safeguards used"
    ],
    "sources": [
      {
        "label": "EU data protection",
        "url": "https://commission.europa.eu/law/law-topic/data-protection_en"
      }
    ],
    "lastVerified": "2026-10-10"
  },
  {
    "slug": "ccpa-cpra",
    "title": "California consumer privacy rights",
    "code": "CCPA / CPRA",
    "name": "California consumer privacy rights",
    "group": "Security and privacy",
    "region": "California, United States",
    "status": "Mandatory in scope",
    "issuer": "California Privacy Protection Agency and the Attorney General",
    "summary": "California privacy law giving consumers rights over personal information, including the right to know, delete, correct and opt out of sale or sharing.",
    "meaning": "Businesses meeting the thresholds must provide notices at collection, honour consumer requests and manage contracts with service providers. Device identifiers and precise location data count as personal information, so companion apps and cloud services are usually in scope.",
    "appliesTo": [
      "Businesses serving California residents",
      "Companion apps and cloud services",
      "Ad tech and analytics integrations"
    ],
    "doesNotCover": [
      "EU data protection rules",
      "Sector rules such as health data laws",
      "Device level security requirements"
    ],
    "checklist": [
      "Confirm whether the business thresholds apply",
      "Update the privacy notice and collection disclosures",
      "Implement request handling and identity verification",
      "Review contracts with analytics and advertising partners"
    ],
    "sources": [
      {
        "label": "California CCPA",
        "url": "https://oag.ca.gov/privacy/ccpa"
      },
      {
        "label": "California Privacy Protection Agency",
        "url": "https://cppa.ca.gov/"
      }
    ],
    "lastVerified": "2026-10-10"
  },
  {
    "slug": "coppa",
    "title": "Children’s online privacy (COPPA)",
    "code": "COPPA",
    "name": "Children’s online privacy (COPPA)",
    "group": "Security and privacy",
    "region": "United States",
    "status": "Mandatory in scope",
    "issuer": "Federal Trade Commission",
    "summary": "US rule that restricts collecting personal information from children under thirteen without verifiable parental consent.",
    "meaning": "Smart toys, kids’ watches and children’s cameras are a direct COPPA risk area because they combine cameras, microphones, location and app accounts. The rule also constrains third-party analytics and advertising in child-directed services.",
    "appliesTo": [
      "Smart toys, kids’ watches and children’s trackers",
      "Apps and services directed to children",
      "Sites with actual knowledge of child users"
    ],
    "doesNotCover": [
      "Radio and safety approvals",
      "EU child data rules such as GDPR Article 8",
      "School procurement rules"
    ],
    "checklist": [
      "Decide whether the product or app is child-directed",
      "Minimise collection and disable behavioural advertising where required",
      "Implement verifiable parental consent where needed",
      "Provide parental review and deletion routes",
      "Review vendor data flows for child data"
    ],
    "sources": [
      {
        "label": "FTC COPPA rule",
        "url": "https://www.ftc.gov/legal-library/browse/rules/childrens-online-privacy-protection-rule-coppa"
      }
    ],
    "lastVerified": "2026-10-10"
  },
  {
    "slug": "wi-fi-certified",
    "title": "Wi-Fi Alliance certification",
    "code": "Wi-Fi CERTIFIED",
    "name": "Wi-Fi Alliance certification",
    "group": "Interoperability",
    "region": "International",
    "status": "Voluntary, widely required",
    "issuer": "Wi-Fi Alliance",
    "summary": "Certification programme that confirms a product interoperates with Wi-Fi networks and supports the security and feature set claimed on the package.",
    "meaning": "Certification covers the tested configuration, including the chipset, firmware and antenna design. Wi-Fi 6, Wi-Fi 6E, Wi-Fi 7, WPA3 and EasyMesh are separate programmes, and a device can carry more than one designation.",
    "appliesTo": [
      "Access points, routers, extenders and mesh systems",
      "Cameras, doorbells and appliances with Wi-Fi",
      "Modules used as part of a certified end product"
    ],
    "doesNotCover": [
      "Radio regulatory approval such as FCC or CE",
      "Internet service quality or cloud performance",
      "Mesh performance in every building layout"
    ],
    "checklist": [
      "Choose the certifications that match the marketing claims",
      "Test at an authorised laboratory using the correct test plan",
      "Transfer the module certification conditions to the host design",
      "Display the certification marks and identifiers correctly"
    ],
    "sources": [
      {
        "label": "Wi-Fi Alliance certification",
        "url": "https://www.wi-fi.org/certification"
      }
    ],
    "lastVerified": "2026-10-10"
  },
  {
    "slug": "bluetooth-sig",
    "title": "Bluetooth qualification",
    "code": "Bluetooth SIG",
    "name": "Bluetooth qualification",
    "group": "Interoperability",
    "region": "International",
    "status": "Required to use Bluetooth marks",
    "issuer": "Bluetooth Special Interest Group",
    "summary": "Membership, declaration and qualification process that lets a product use the Bluetooth trademarks and claim version support.",
    "meaning": "Products must be qualified through the Bluetooth SIG and listed, and the design must be declared by the member company. Component declarations from a module supplier can reduce the test scope but not the obligation to declare the final product.",
    "appliesTo": [
      "Accessories, wearables and audio devices",
      "Devices using Bluetooth Low Energy for setup or sensors",
      "Modules embedded in a larger product"
    ],
    "doesNotCover": [
      "Radio approval in the destination countries",
      "Wi-Fi or cellular certification",
      "App store requirements"
    ],
    "checklist": [
      "Join the Bluetooth SIG as a member",
      "Use qualified components and record their declarations",
      "Complete the declaration and product listing",
      "Keep the qualified design version aligned with shipped firmware"
    ],
    "sources": [
      {
        "label": "Bluetooth qualification",
        "url": "https://www.bluetooth.com/develop-with-bluetooth/qualification-listing/"
      }
    ],
    "lastVerified": "2026-10-10"
  },
  {
    "slug": "matter",
    "title": "Matter certification",
    "code": "Matter",
    "name": "Matter certification",
    "group": "Interoperability",
    "region": "International",
    "status": "Voluntary, ecosystem dependent",
    "issuer": "Connectivity Standards Alliance (CSA)",
    "summary": "Application-layer standard that lets smart home devices work across Apple Home, Google Home, Amazon Alexa and SmartThings.",
    "meaning": "Matter certification requires a CSA membership, test event participation and certification by an authorised test provider. Products are certified by device type, and the ecosystem still controls which features are exposed in each app.",
    "appliesTo": [
      "Lights, plugs, sensors, locks and bridges",
      "Hubs and border routers that commission Matter devices",
      "Brands that want multi-ecosystem support"
    ],
    "doesNotCover": [
      "Every feature of the manufacturer app",
      "Cloud-to-cloud integrations that are not part of Matter",
      "Radio approval"
    ],
    "checklist": [
      "Register as a CSA member and obtain a vendor ID",
      "Implement the correct device type and clusters",
      "Pass the test harness and complete certification",
      "Submit the product to the ecosystem programmes you support"
    ],
    "sources": [
      {
        "label": "CSA Matter",
        "url": "https://csa-iot.org/all-solutions/matter/"
      }
    ],
    "lastVerified": "2026-10-10"
  },
  {
    "slug": "thread",
    "title": "Thread certification",
    "code": "Thread",
    "name": "Thread certification",
    "group": "Interoperability",
    "region": "International",
    "status": "Voluntary, ecosystem dependent",
    "issuer": "Thread Group",
    "summary": "Certification for Thread mesh networking, the low-power IP transport commonly used with Matter devices.",
    "meaning": "Thread certification is separate from Matter certification, and many products need both. Border routers have additional requirements, and the network relies on a Thread border router to reach the internet.",
    "appliesTo": [
      "Low-power sensors, locks and lighting",
      "Border routers and hubs",
      "Matter over Thread devices"
    ],
    "doesNotCover": [
      "Matter application layer certification",
      "Wi-Fi or Bluetooth function",
      "Radio approval"
    ],
    "checklist": [
      "Join the Thread Group and use qualified components",
      "Test against the current Thread specification version",
      "Certify the border router separately where applicable",
      "Validate coexistence with Wi-Fi in the target band"
    ],
    "sources": [
      {
        "label": "Thread Group",
        "url": "https://www.threadgroup.org/"
      }
    ],
    "lastVerified": "2026-10-10"
  },
  {
    "slug": "zigbee",
    "title": "Zigbee certification",
    "code": "Zigbee",
    "name": "Zigbee certification",
    "group": "Interoperability",
    "region": "International",
    "status": "Voluntary, ecosystem dependent",
    "issuer": "Connectivity Standards Alliance (CSA)",
    "summary": "Certification for Zigbee devices and the Zigbee Certified programme, including Zigbee 3.0 device types.",
    "meaning": "Zigbee remains the most widely deployed low-power mesh in hubs and sensors. Certification confirms the device interoperates at the application layer with certified devices, while vendor-specific clusters can still limit cross-brand features.",
    "appliesTo": [
      "Sensors, plugs, switches and lighting",
      "Zigbee coordinators sold inside hubs",
      "Devices intended for multi-brand zigbee networks"
    ],
    "doesNotCover": [
      "Matter certification",
      "Wi-Fi performance",
      "Cloud features of the vendor app"
    ],
    "checklist": [
      "Implement the correct Zigbee device type and clusters",
      "Validate against certified devices from other vendors",
      "Complete CSA certification testing",
      "Document vendor-specific behaviour for support teams"
    ],
    "sources": [
      {
        "label": "CSA Zigbee",
        "url": "https://csa-iot.org/all-solutions/zigbee/"
      }
    ],
    "lastVerified": "2026-10-10"
  },
  {
    "slug": "qi-wpc",
    "title": "Qi wireless charging certification",
    "code": "Qi",
    "name": "Qi wireless charging certification",
    "group": "Interoperability",
    "region": "International",
    "status": "Voluntary, widely adopted",
    "issuer": "Wireless Power Consortium",
    "summary": "Certification for inductive wireless charging products under the Qi standard, covering transmitters and receivers.",
    "meaning": "Qi certification verifies power transfer and safety behaviour between a transmitter and receiver, including foreign object detection. Products that claim Qi compatibility should be certified rather than only tested in-house.",
    "appliesTo": [
      "Wireless charging pads and stands",
      "Wearables and phones with wireless charging",
      "Accessories sold as Qi compatible"
    ],
    "doesNotCover": [
      "Wired charging safety",
      "Battery certification",
      "Radio approval for any wireless data function"
    ],
    "checklist": [
      "Confirm the Qi power profile and coil design",
      "Test transmitter and receiver as a pair",
      "Complete WPC certification and listing",
      "Apply the Qi logo under the licence terms"
    ],
    "sources": [
      {
        "label": "Wireless Power Consortium",
        "url": "https://www.wirelesspowerconsortium.com/"
      }
    ],
    "lastVerified": "2026-10-10"
  }
];
