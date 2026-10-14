/* ES / FR translations for the four reference centres.
 *
 * Policy: every new or updated content record ships in English, Spanish and
 * French. The English source stays on the record; this store carries the es/fr
 * overrides keyed by type and slug. tools/audit_site.mjs fails the build when a
 * record has no es/fr entry, so nothing can ship in one language only.
 *
 * Loaded by the four centres and inlined per entity by tools/prerender_entities.mjs. */
window.IOT_CONTENT_I18N_CORE = {
  "compatibility": {
    "ring-alexa": {
      "es": {
        "title": "Compatibilidad de Ring y Alexa",
        "question": "¿Funciona Ring con Alexa?",
        "category": "Control por voz",
        "verdict": "Compatible mediante vinculación de cuenta",
        "summary": "Los dispositivos Ring pueden vincularse a Alexa para el control por voz, la visualización en directo en los modelos compatibles y los avisos de eventos cuando el dispositivo y la región lo permiten.",
        "requirements": [
          "Cuenta de Ring",
          "Cuenta de Alexa",
          "Skill de Ring activada",
          "Dispositivo y región de Ring compatibles"
        ],
        "limitations": [
          "La disponibilidad de funciones varía según el modelo de Ring",
          "La visualización en directo y los avisos pueden requerir pantallas o altavoces Echo compatibles",
          "Pueden aplicarse restricciones de cuenta y de región"
        ],
        "steps": [
          "Abre la app de Alexa",
          "Activa la skill de Ring",
          "Vincula la cuenta de Ring",
          "Busca los dispositivos",
          "Asigna los dispositivos a habitaciones",
          "Prueba los comandos de voz y las notificaciones"
        ]
      },
      "fr": {
        "title": "Compatibilité Ring et Alexa",
        "question": "Ring fonctionne-t-il avec Alexa ?",
        "category": "Commande vocale",
        "verdict": "Compatible via la liaison de compte",
        "summary": "Les appareils Ring peuvent être associés à Alexa pour la commande vocale, l'affichage en direct sur les modèles compatibles et les annonces d'événements lorsque l'appareil et la région le permettent.",
        "requirements": [
          "Compte Ring",
          "Compte Alexa",
          "Compétence Ring activée",
          "Appareil et région Ring compatibles"
        ],
        "limitations": [
          "Les fonctions disponibles varient selon le modèle Ring",
          "L'affichage en direct et les annonces peuvent nécessiter des écrans ou enceintes Echo compatibles",
          "Des restrictions de compte et de région peuvent s'appliquer"
        ],
        "steps": [
          "Ouvrir l'application Alexa",
          "Activer la compétence Ring",
          "Lier le compte Ring",
          "Rechercher les appareils",
          "Affecter les appareils à des pièces",
          "Tester les commandes vocales et les notifications"
        ]
      }
    },
    "philips-hue-alexa": {
      "es": {
        "title": "Compatibilidad de Philips Hue y Alexa",
        "question": "¿Funciona Philips Hue con Alexa?",
        "category": "Control por voz",
        "verdict": "Compatible",
        "summary": "Las luces y escenas de Philips Hue pueden controlarse con Alexa cuando se vinculan la cuenta Hue y el bridge o una configuración Bluetooth compatible.",
        "requirements": [
          "Cuenta de Philips Hue",
          "Hue Bridge para la mayoría de funciones de toda la casa",
          "App de Alexa y un dispositivo Echo compatible"
        ],
        "limitations": [
          "Las configuraciones solo Bluetooth tienen menos funciones que los sistemas con Bridge",
          "Las funciones avanzadas de entretenimiento y automatización dependen del sistema Hue",
          "La compatibilidad varía según la región y el modelo"
        ],
        "steps": [
          "Abre la app de Alexa",
          "Activa la skill de Philips Hue",
          "Vincula la cuenta Hue",
          "Busca luces y escenas",
          "Asigna habitaciones y prueba los controles"
        ]
      },
      "fr": {
        "title": "Compatibilité Philips Hue et Alexa",
        "question": "Philips Hue fonctionne-t-il avec Alexa ?",
        "category": "Commande vocale",
        "verdict": "Compatible",
        "summary": "Les lampes et scènes Philips Hue peuvent être contrôlées via Alexa lorsque le compte Hue et le bridge ou une configuration Bluetooth compatible sont associés.",
        "requirements": [
          "Compte Philips Hue",
          "Hue Bridge pour la plupart des fonctions de toute la maison",
          "Application Alexa et appareil Echo compatible"
        ],
        "limitations": [
          "Les installations uniquement Bluetooth offrent moins de fonctions que les systèmes reliés au Bridge",
          "Les fonctions avancées de divertissement et d'automatisation dépendent du système Hue",
          "La compatibilité varie selon la région et le modèle"
        ],
        "steps": [
          "Ouvrir l'application Alexa",
          "Activer la compétence Philips Hue",
          "Lier le compte Hue",
          "Rechercher les lampes et les scènes",
          "Affecter les pièces et tester les commandes"
        ]
      }
    },
    "philips-hue-apple-home": {
      "es": {
        "title": "Compatibilidad de Philips Hue y Apple Home",
        "question": "¿Funciona Philips Hue con Apple Home?",
        "category": "Ecosistema Apple",
        "verdict": "Compatible con un Hue Bridge compatible",
        "summary": "Las luces Hue pueden añadirse a Apple Home mediante un Hue Bridge compatible, lo que habilita Siri, escenas, automatizaciones y controles desde la app Casa.",
        "requirements": [
          "Hue Bridge",
          "Un hub de Apple Home para acceso remoto y automatizaciones",
          "iPhone o iPad con la app Casa"
        ],
        "limitations": [
          "Algunos efectos exclusivos de Hue pueden no aparecer en Apple Home",
          "El acceso remoto y las automatizaciones requieren un hub de Apple Home compatible",
          "La compatibilidad de firmware y modelos puede cambiar"
        ],
        "steps": [
          "Actualiza el Hue Bridge y la app Hue",
          "Abre la app Casa",
          "Añade un accesorio y selecciona el Hue Bridge",
          "Asigna habitaciones",
          "Prueba Siri y las automatizaciones"
        ]
      },
      "fr": {
        "title": "Compatibilité Philips Hue et Apple Home",
        "question": "Philips Hue fonctionne-t-il avec Apple Home ?",
        "category": "Écosystème Apple",
        "verdict": "Compatible avec un Hue Bridge compatible",
        "summary": "Les lampes Hue peuvent être ajoutées à Apple Home via un Hue Bridge compatible, ce qui active Siri, les scènes, les automatisations et les commandes depuis l'app Maison.",
        "requirements": [
          "Hue Bridge",
          "Un hub Apple Home pour l'accès à distance et les automatisations",
          "iPhone ou iPad avec l'app Maison"
        ],
        "limitations": [
          "Certains effets propres à Hue peuvent ne pas apparaître dans Apple Home",
          "L'accès à distance et les automatisations nécessitent un hub Apple Home compatible",
          "La prise en charge des firmwares et des modèles peut évoluer"
        ],
        "steps": [
          "Mettre à jour le Hue Bridge et l'app Hue",
          "Ouvrir l'app Maison",
          "Ajouter un accessoire et sélectionner le Hue Bridge",
          "Affecter les pièces",
          "Tester Siri et les automatisations"
        ]
      }
    },
    "aqara-apple-home": {
      "es": {
        "title": "Compatibilidad de Aqara y Apple Home",
        "question": "¿Funciona Aqara con Apple Home?",
        "category": "Ecosistema Apple",
        "verdict": "Compatible con hubs y modelos compatibles",
        "summary": "Muchos dispositivos Aqara pueden exponerse a Apple Home a través de hubs Aqara compatibles, y Matter añade otra vía para los modelos compatibles.",
        "requirements": [
          "Hub Aqara compatible",
          "App Aqara Home",
          "Un hub de Apple Home para acceso remoto y automatizaciones"
        ],
        "limitations": [
          "No todos los modelos Aqara exponen todas las funciones a Apple Home",
          "La compatibilidad con Matter depende del modelo y el firmware exactos",
          "Las diferencias entre hubs y regiones pueden afectar a la instalación"
        ],
        "steps": [
          "Confirma que el dispositivo y el hub admiten Apple Home",
          "Actualiza el firmware",
          "Añade el dispositivo en Aqara Home",
          "Vincula el hub con Apple Home",
          "Asigna la habitación y prueba las automatizaciones"
        ]
      },
      "fr": {
        "title": "Compatibilité Aqara et Apple Home",
        "question": "Aqara fonctionne-t-il avec Apple Home ?",
        "category": "Écosystème Apple",
        "verdict": "Compatible avec les hubs et modèles compatibles",
        "summary": "De nombreux appareils Aqara peuvent être exposés à Apple Home via des hubs Aqara compatibles, et Matter offre une autre voie pour les modèles compatibles.",
        "requirements": [
          "Hub Aqara compatible",
          "App Aqara Home",
          "Un hub Apple Home pour l'accès à distance et les automatisations"
        ],
        "limitations": [
          "Tous les modèles Aqara n'exposent pas toutes les fonctions à Apple Home",
          "La prise en charge de Matter dépend du modèle et du firmware exacts",
          "Les différences entre hubs et régions peuvent compliquer l'installation"
        ],
        "steps": [
          "Vérifier que l'appareil et le hub prennent en charge Apple Home",
          "Mettre à jour le firmware",
          "Ajouter l'appareil dans Aqara Home",
          "Associer le hub à Apple Home",
          "Affecter la pièce et tester les automatisations"
        ]
      }
    },
    "tuya-alexa": {
      "es": {
        "title": "Compatibilidad de Tuya y Alexa",
        "question": "¿Funciona Tuya con Alexa?",
        "category": "Control por voz",
        "verdict": "Compatible con dispositivos compatibles",
        "summary": "Los dispositivos Tuya y Smart Life pueden vincularse a Alexa mediante la skill de Tuya Smart o Smart Life cuando el tipo de dispositivo, la región de la cuenta y el firmware admiten la integración.",
        "requirements": [
          "Cuenta de Tuya Smart o Smart Life",
          "App de Alexa",
          "Dispositivo visible en la cuenta Tuya",
          "Skill compatible con la región"
        ],
        "limitations": [
          "Cada categoría de dispositivo expone capacidades distintas",
          "Algunas apps de marca blanca pueden requerir su propia skill",
          "La región de la cuenta determina qué skill está disponible"
        ],
        "steps": [
          "Confirma que el dispositivo aparece en Tuya Smart o Smart Life",
          "Abre la app de Alexa",
          "Activa la skill de Tuya correspondiente",
          "Vincula la cuenta",
          "Busca los dispositivos",
          "Prueba los comandos"
        ]
      },
      "fr": {
        "title": "Compatibilité Tuya et Alexa",
        "question": "Tuya fonctionne-t-il avec Alexa ?",
        "category": "Commande vocale",
        "verdict": "Compatible avec les appareils compatibles",
        "summary": "Les appareils Tuya et Smart Life peuvent être associés à Alexa via la compétence Tuya Smart ou Smart Life lorsque le type d'appareil, la région du compte et le firmware prennent en charge l'intégration.",
        "requirements": [
          "Compte Tuya Smart ou Smart Life",
          "Application Alexa",
          "Appareil visible dans le compte Tuya",
          "Compétence compatible avec la région"
        ],
        "limitations": [
          "Chaque catégorie d'appareil expose des capacités différentes",
          "Certaines applications en marque blanche nécessitent leur propre compétence",
          "La région du compte détermine la compétence disponible"
        ],
        "steps": [
          "Vérifier que l'appareil apparaît dans Tuya Smart ou Smart Life",
          "Ouvrir l'application Alexa",
          "Activer la compétence Tuya correspondante",
          "Lier le compte",
          "Rechercher les appareils",
          "Tester les commandes"
        ]
      }
    },
    "tuya-google-home": {
      "es": {
        "title": "Compatibilidad de Tuya y Google Home",
        "question": "¿Funciona Tuya con Google Home?",
        "category": "Control por voz",
        "verdict": "Compatible con dispositivos compatibles",
        "summary": "Los dispositivos Tuya y Smart Life compatibles pueden vincularse a Google Home mediante la integración correspondiente.",
        "requirements": [
          "Cuenta de Tuya Smart o Smart Life",
          "App de Google Home",
          "Tipo de dispositivo y región compatibles"
        ],
        "limitations": [
          "Las funciones disponibles varían según la categoría",
          "Algunas apps de marca OEM usan integraciones distintas",
          "Pueden aplicarse restricciones regionales de cuenta"
        ],
        "steps": [
          "Confirma que el dispositivo está en la cuenta Tuya",
          "Abre Google Home",
          "Añade un servicio y selecciona la integración Tuya correcta",
          "Vincula la cuenta",
          "Asigna los dispositivos a habitaciones",
          "Prueba el control por voz y desde la app"
        ]
      },
      "fr": {
        "title": "Compatibilité Tuya et Google Home",
        "question": "Tuya fonctionne-t-il avec Google Home ?",
        "category": "Commande vocale",
        "verdict": "Compatible avec les appareils compatibles",
        "summary": "Les appareils Tuya et Smart Life compatibles peuvent être associés à Google Home via l'intégration correspondante.",
        "requirements": [
          "Compte Tuya Smart ou Smart Life",
          "Application Google Home",
          "Type d'appareil et région compatibles"
        ],
        "limitations": [
          "Les fonctions disponibles varient selon la catégorie",
          "Certaines applications de marque OEM utilisent d'autres intégrations",
          "Des restrictions régionales de compte peuvent s'appliquer"
        ],
        "steps": [
          "Vérifier que l'appareil figure dans le compte Tuya",
          "Ouvrir Google Home",
          "Ajouter un service et sélectionner la bonne intégration Tuya",
          "Lier le compte",
          "Affecter les appareils à des pièces",
          "Tester la commande vocale et l'application"
        ]
      }
    },
    "matter-ecosystems": {
      "es": {
        "title": "Compatibilidad entre ecosistemas Matter",
        "question": "¿Funciona Matter con Apple, Google, Alexa y SmartThings?",
        "category": "Matter",
        "verdict": "Compatible cuando ambos lados tienen certificación Matter",
        "summary": "Un dispositivo con certificación Matter puede funcionar con varios controladores Matter, pero las funciones expuestas dependen del tipo de dispositivo, el controlador, el firmware y de si se necesita un border router de Thread.",
        "requirements": [
          "Dispositivo con certificación Matter",
          "Controlador o hub Matter",
          "Border router de Thread si se usa Thread",
          "Firmware y región compatibles"
        ],
        "limitations": [
          "No todas las funciones se exponen a todos los controladores",
          "La configuración multiadmin y la topología Thread pueden afectar a la fiabilidad",
          "Se requieren actualizaciones del controlador a medida que Matter evoluciona"
        ],
        "steps": [
          "Verifica la certificación Matter",
          "Confirma la compatibilidad del controlador",
          "Instala el firmware más reciente",
          "Añade el dispositivo con el código de configuración",
          "Añade un segundo controlador solo si se admite multiadmin",
          "Prueba las automatizaciones y el control local"
        ]
      },
      "fr": {
        "title": "Compatibilité entre écosystèmes Matter",
        "question": "Matter fonctionne-t-il avec Apple, Google, Alexa et SmartThings ?",
        "category": "Matter",
        "verdict": "Compatible lorsque les deux côtés sont certifiés Matter",
        "summary": "Un appareil certifié Matter peut fonctionner avec plusieurs contrôleurs Matter, mais les fonctions exposées dépendent du type d'appareil, du contrôleur, du firmware et de la nécessité d'un border router Thread.",
        "requirements": [
          "Appareil certifié Matter",
          "Contrôleur ou hub Matter",
          "Border router Thread en cas d'usage de Thread",
          "Firmware et région compatibles"
        ],
        "limitations": [
          "Toutes les fonctions ne sont pas exposées à tous les contrôleurs",
          "La configuration multi-admin et la topologie Thread peuvent affecter la fiabilité",
          "Les mises à jour du contrôleur sont nécessaires à mesure que Matter évolue"
        ],
        "steps": [
          "Vérifier la certification Matter",
          "Confirmer la compatibilité du contrôleur",
          "Installer le dernier firmware",
          "Ajouter l'appareil avec le code d'appairage",
          "Ajouter un second contrôleur uniquement si le multi-admin est pris en charge",
          "Tester les automatisations et le contrôle local"
        ]
      }
    },
    "shelly-home-assistant": {
      "es": {
        "title": "Compatibilidad de Shelly y Home Assistant",
        "question": "¿Funciona Shelly con Home Assistant?",
        "category": "Automatización local",
        "verdict": "Compatible",
        "summary": "Los dispositivos Shelly pueden integrarse con Home Assistant mediante la integración oficial de Shelly para control y automatización locales.",
        "requirements": [
          "Dispositivo Shelly en la red local",
          "Instalación de Home Assistant",
          "Firmware compatible"
        ],
        "limitations": [
          "Las funciones varían según el modelo de Shelly",
          "Las funciones en la nube y las locales no son idénticas",
          "Deben revisarse la red y la seguridad del firmware"
        ],
        "steps": [
          "Actualiza el firmware de Shelly",
          "Confirma que el dispositivo es accesible en la red local",
          "Añade la integración Shelly en Home Assistant",
          "Asigna áreas y entidades",
          "Prueba las automatizaciones locales"
        ]
      },
      "fr": {
        "title": "Compatibilité Shelly et Home Assistant",
        "question": "Shelly fonctionne-t-il avec Home Assistant ?",
        "category": "Automatisation locale",
        "verdict": "Compatible",
        "summary": "Les appareils Shelly peuvent être intégrés à Home Assistant via l'intégration officielle Shelly pour un contrôle et une automatisation locaux.",
        "requirements": [
          "Appareil Shelly sur le réseau local",
          "Installation de Home Assistant",
          "Firmware compatible"
        ],
        "limitations": [
          "Les fonctions varient selon le modèle Shelly",
          "Les fonctions cloud et locales ne sont pas identiques",
          "La sécurité du réseau et du firmware doit être vérifiée"
        ],
        "steps": [
          "Mettre à jour le firmware Shelly",
          "Vérifier que l'appareil est accessible sur le réseau local",
          "Ajouter l'intégration Shelly dans Home Assistant",
          "Affecter les zones et les entités",
          "Tester les automatisations locales"
        ]
      }
    },
    "esphome-home-assistant": {
      "es": {
        "title": "Compatibilidad de ESPHome y Home Assistant",
        "question": "¿Funciona ESPHome con Home Assistant?",
        "category": "Automatización local",
        "verdict": "Compatible",
        "summary": "ESPHome está diseñado para integrarse directamente con Home Assistant, lo que permite el control local de los dispositivos basados en ESP compatibles.",
        "requirements": [
          "Dispositivo basado en ESP compatible con ESPHome",
          "Home Assistant",
          "Panel de ESPHome o herramientas de línea de comandos"
        ],
        "limitations": [
          "La compatibilidad de hardware depende de la placa y los componentes",
          "Una actualización de firmware personalizada puede cambiar el comportamiento del dispositivo",
          "Deben configurarse los secretos y el OTA de forma segura"
        ],
        "steps": [
          "Identifica la placa y el chipset",
          "Crea una configuración de ESPHome",
          "Compila y flashea el firmware",
          "Adopta el dispositivo en Home Assistant",
          "Prueba las entidades y las automatizaciones"
        ]
      },
      "fr": {
        "title": "Compatibilité ESPHome et Home Assistant",
        "question": "ESPHome fonctionne-t-il avec Home Assistant ?",
        "category": "Automatisation locale",
        "verdict": "Compatible",
        "summary": "ESPHome est conçu pour s'intégrer directement à Home Assistant, ce qui permet un contrôle local des appareils à base d'ESP compatibles.",
        "requirements": [
          "Appareil à base d'ESP compatible ESPHome",
          "Home Assistant",
          "Tableau de bord ESPHome ou outils en ligne de commande"
        ],
        "limitations": [
          "La prise en charge matérielle dépend de la carte et des composants",
          "Une mise à jour de firmware personnalisée peut modifier le comportement de l'appareil",
          "Les secrets et les paramètres OTA doivent être configurés de façon sûre"
        ],
        "steps": [
          "Identifier la carte et le chipset",
          "Créer une configuration ESPHome",
          "Compiler et flasher le firmware",
          "Adopter l'appareil dans Home Assistant",
          "Tester les entités et les automatisations"
        ]
      }
    },
    "smartthings-matter": {
      "es": {
        "title": "Compatibilidad de SmartThings y Matter",
        "question": "¿Admite SmartThings Matter?",
        "category": "Matter",
        "verdict": "Compatible en hubs y versiones de app compatibles",
        "summary": "SmartThings admite Matter en hubs y versiones de app compatibles, y las funciones disponibles dependen del tipo de dispositivo Matter y del firmware.",
        "requirements": [
          "Hub de SmartThings compatible",
          "App de SmartThings actualizada",
          "Dispositivo con certificación Matter",
          "Border router de Thread para dispositivos Thread"
        ],
        "limitations": [
          "Los hubs antiguos pueden no admitir Matter",
          "No todas las funciones del dispositivo aparecen en SmartThings",
          "El despliegue de firmware y por región puede variar"
        ],
        "steps": [
          "Confirma la compatibilidad del hub",
          "Actualiza el hub y la app",
          "Pon el dispositivo Matter en modo de emparejamiento",
          "Añade el dispositivo en SmartThings",
          "Asigna la habitación y prueba las automatizaciones"
        ]
      },
      "fr": {
        "title": "Compatibilité SmartThings et Matter",
        "question": "SmartThings prend-il en charge Matter ?",
        "category": "Matter",
        "verdict": "Compatible sur les hubs et versions d'application compatibles",
        "summary": "SmartThings prend en charge Matter sur les hubs et versions d'application compatibles ; les fonctions disponibles dépendent du type d'appareil Matter et du firmware.",
        "requirements": [
          "Hub SmartThings compatible",
          "Application SmartThings à jour",
          "Appareil certifié Matter",
          "Border router Thread pour les appareils Thread"
        ],
        "limitations": [
          "Les anciens hubs peuvent ne pas prendre en charge Matter",
          "Toutes les fonctions de l'appareil n'apparaissent pas dans SmartThings",
          "Le déploiement des firmwares et par région peut varier"
        ],
        "steps": [
          "Confirmer la compatibilité du hub",
          "Mettre à jour le hub et l'application",
          "Mettre l'appareil Matter en mode appairage",
          "Ajouter l'appareil dans SmartThings",
          "Affecter la pièce et tester les automatisations"
        ]
      }
    },
    "philips-hue-google-home": {
      "es": {
        "title": "Compatibilidad de Philips Hue y Google Home",
        "question": "¿Funciona Philips Hue con Google Home?",
        "category": "Control por voz",
        "verdict": "Compatible",
        "summary": "Las luces, habitaciones y escenas Hue pueden controlarse desde Google Home tras vincular la cuenta Hue mediante la integración de Philips Hue.",
        "requirements": [
          "Cuenta de Philips Hue",
          "Hue Bridge o configuración Bluetooth",
          "App de Google Home"
        ],
        "limitations": [
          "Las configuraciones solo Bluetooth exponen menos controles que los sistemas con Bridge",
          "Algunos efectos exclusivos de Hue se quedan en la app Hue",
          "Los nombres de las funciones cambian entre las dos apps"
        ],
        "steps": [
          "Abre la app de Google Home",
          "Añade el servicio Philips Hue",
          "Inicia sesión en la cuenta Hue",
          "Asigna habitaciones",
          "Prueba el control por voz y desde la app"
        ]
      },
      "fr": {
        "title": "Compatibilité Philips Hue et Google Home",
        "question": "Philips Hue fonctionne-t-il avec Google Home ?",
        "category": "Commande vocale",
        "verdict": "Compatible",
        "summary": "Les lampes, pièces et scènes Hue peuvent être contrôlées depuis Google Home après avoir lié le compte Hue via l'intégration Philips Hue.",
        "requirements": [
          "Compte Philips Hue",
          "Hue Bridge ou configuration Bluetooth",
          "Application Google Home"
        ],
        "limitations": [
          "Les installations uniquement Bluetooth exposent moins de contrôles que les systèmes avec Bridge",
          "Certains effets propres à Hue restent dans l'application Hue",
          "Les noms de fonctions diffèrent entre les deux applications"
        ],
        "steps": [
          "Ouvrir l'application Google Home",
          "Ajouter le service Philips Hue",
          "Se connecter au compte Hue",
          "Affecter les pièces",
          "Tester la commande vocale et l'application"
        ]
      }
    },
    "tapo-google-home": {
      "es": {
        "title": "Compatibilidad de TP-Link Tapo y Google Home",
        "question": "¿Funciona Tapo con Google Home?",
        "category": "Control por voz",
        "verdict": "Compatible con cámaras, enchufes y luces",
        "summary": "Los dispositivos Tapo pueden vincularse a Google Home mediante la integración de Tapo, que expone la visualización en directo en las cámaras compatibles además del control de enchufes e iluminación.",
        "requirements": [
          "Cuenta Tapo y app Tapo",
          "App de Google Home",
          "Firmware Tapo actualizado"
        ],
        "limitations": [
          "Las funciones dependen del modelo",
          "La visualización en directo requiere una pantalla compatible o la app Home",
          "La grabación local y la tarjeta SD se gestionan en la app Tapo"
        ],
        "steps": [
          "Actualiza el firmware del dispositivo Tapo",
          "Abre Google Home y añade el servicio Tapo",
          "Vincula la cuenta Tapo",
          "Asigna los dispositivos a habitaciones",
          "Prueba la visualización en directo y el encendido"
        ]
      },
      "fr": {
        "title": "Compatibilité TP-Link Tapo et Google Home",
        "question": "Tapo fonctionne-t-il avec Google Home ?",
        "category": "Commande vocale",
        "verdict": "Compatible pour caméras, prises et éclairage",
        "summary": "Les appareils Tapo peuvent être liés à Google Home via l'intégration Tapo, qui expose l'affichage en direct sur les caméras compatibles ainsi que le contrôle des prises et de l'éclairage.",
        "requirements": [
          "Compte Tapo et application Tapo",
          "Application Google Home",
          "Firmware Tapo à jour"
        ],
        "limitations": [
          "Les fonctions dépendent du modèle",
          "L'affichage en direct nécessite un écran compatible ou l'application Home",
          "L'enregistrement local et la carte SD restent dans l'application Tapo"
        ],
        "steps": [
          "Mettre à jour le firmware de l'appareil Tapo",
          "Ouvrir Google Home et ajouter le service Tapo",
          "Lier le compte Tapo",
          "Affecter les appareils à des pièces",
          "Tester l'affichage en direct et la commutation"
        ]
      }
    },
    "roborock-google-home": {
      "es": {
        "title": "Compatibilidad de Roborock y Google Home",
        "question": "¿Funciona Roborock con Google Home?",
        "category": "Control por voz",
        "verdict": "Compatible para comandos básicos",
        "summary": "Los robots Roborock pueden vincularse a Google Home para iniciar, pausar, volver a la base y limpiar por habitaciones en los modelos que exponen esas capacidades.",
        "requirements": [
          "Cuenta Roborock",
          "App de Google Home",
          "Robot en línea en la app Roborock"
        ],
        "limitations": [
          "La edición de mapas y los ajustes finos siguen en la app Roborock",
          "Los comandos disponibles varían según modelo y región",
          "Los mapas de varias plantas requieren seleccionar el mapa correcto en la app"
        ],
        "steps": [
          "Confirma que el robot aparece en la app Roborock",
          "Añade el servicio Roborock en Google Home",
          "Vincula la cuenta y elige el dispositivo",
          "Asigna una habitación",
          "Prueba iniciar, pausar y volver a la base"
        ]
      },
      "fr": {
        "title": "Compatibilité Roborock et Google Home",
        "question": "Roborock fonctionne-t-il avec Google Home ?",
        "category": "Commande vocale",
        "verdict": "Compatible pour les commandes de base",
        "summary": "Les aspirateurs Roborock peuvent être liés à Google Home pour démarrer, mettre en pause, retourner à la base et nettoyer par pièce sur les modèles qui exposent ces fonctions.",
        "requirements": [
          "Compte Roborock",
          "Application Google Home",
          "Robot en ligne dans l'application Roborock"
        ],
        "limitations": [
          "L'édition des cartes et les réglages fins restent dans l'application Roborock",
          "Les commandes disponibles varient selon le modèle et la région",
          "Les cartes multi-étages nécessitent de sélectionner la bonne carte dans l'application"
        ],
        "steps": [
          "Vérifier que le robot apparaît dans l'application Roborock",
          "Ajouter le service Roborock dans Google Home",
          "Lier le compte et choisir l'appareil",
          "Affecter une pièce",
          "Tester démarrage, pause et retour à la base"
        ]
      }
    },
    "eufy-security-alexa": {
      "es": {
        "title": "Compatibilidad de eufy Security y Alexa",
        "question": "¿Funciona eufy Security con Alexa?",
        "category": "Control por voz",
        "verdict": "Compatible mediante vinculación de cuenta",
        "summary": "Las cámaras y videoporteros eufy Security pueden vincularse a Alexa para que los modelos compatibles emitan en pantallas Echo Show y anuncien eventos.",
        "requirements": [
          "Cuenta y app de eufy Security",
          "Cuenta de Alexa con la skill de eufy Security activada",
          "Una cámara o videoportero compatible con emisión en Alexa"
        ],
        "limitations": [
          "La visualización en directo requiere un dispositivo Alexa con pantalla",
          "La grabación y el almacenamiento se gestionan en la app eufy",
          "No todos los modelos eufy exponen todas las funciones de Alexa"
        ],
        "steps": [
          "Confirma en la app eufy que el modelo admite Alexa",
          "Activa la skill de eufy Security en Alexa",
          "Vincula la cuenta eufy",
          "Nombra la cámara para el control por voz",
          "Prueba la visualización y los anuncios"
        ]
      },
      "fr": {
        "title": "Compatibilité eufy Security et Alexa",
        "question": "eufy Security fonctionne-t-il avec Alexa ?",
        "category": "Commande vocale",
        "verdict": "Compatible via la liaison de compte",
        "summary": "Les caméras et sonnettes eufy Security peuvent être liées à Alexa afin que les modèles compatibles diffusent sur les écrans Echo Show et annoncent les événements.",
        "requirements": [
          "Compte et application eufy Security",
          "Compte Alexa avec la compétence eufy Security activée",
          "Une caméra ou sonnette compatible avec la diffusion Alexa"
        ],
        "limitations": [
          "L'affichage en direct nécessite un appareil Alexa avec écran",
          "L'enregistrement et le stockage se gèrent dans l'application eufy",
          "Tous les modèles eufy n'exposent pas toutes les fonctions Alexa"
        ],
        "steps": [
          "Vérifier dans l'application eufy que le modèle prend en charge Alexa",
          "Activer la compétence eufy Security dans Alexa",
          "Lier le compte eufy",
          "Nommer la caméra pour la commande vocale",
          "Tester l'affichage et les annonces"
        ]
      }
    },
    "sonoff-ewelink-alexa": {
      "es": {
        "title": "Compatibilidad de SONOFF eWeLink y Alexa",
        "question": "¿Funciona eWeLink con Alexa?",
        "category": "Control por voz",
        "verdict": "Compatible para encendido y escenas",
        "summary": "Los dispositivos SONOFF gestionados en la app eWeLink pueden controlarse con Alexa tras activar la skill de eWeLink, lo que cubre encendido, escenas y algunos sensores.",
        "requirements": [
          "Cuenta eWeLink con el dispositivo emparejado",
          "App de Alexa",
          "Servidor regional de eWeLink correcto"
        ],
        "limitations": [
          "La región del servidor afecta a la skill y a la visibilidad de los dispositivos",
          "El firmware alternativo (Tasmota, ESPHome) no está cubierto por la skill de eWeLink",
          "Los dispositivos multicanal necesitan nombrar cada canal"
        ],
        "steps": [
          "Revisa la región del servidor en la app eWeLink",
          "Activa la skill de eWeLink en Alexa",
          "Vincula la cuenta eWeLink",
          "Busca dispositivos y renombra los canales",
          "Prueba el encendido y las escenas"
        ]
      },
      "fr": {
        "title": "Compatibilité SONOFF eWeLink et Alexa",
        "question": "eWeLink fonctionne-t-il avec Alexa ?",
        "category": "Commande vocale",
        "verdict": "Compatible pour la commutation et les scènes",
        "summary": "Les appareils SONOFF gérés dans l'application eWeLink peuvent être contrôlés par Alexa après activation de la compétence eWeLink : commutation, scènes et certains capteurs.",
        "requirements": [
          "Compte eWeLink avec l'appareil appairé",
          "Application Alexa",
          "Bon serveur régional eWeLink"
        ],
        "limitations": [
          "La région du serveur affecte la compétence et la visibilité des appareils",
          "Un firmware alternatif (Tasmota, ESPHome) n'est pas couvert par la compétence eWeLink",
          "Les appareils multicanaux nécessitent un nommage par canal"
        ],
        "steps": [
          "Vérifier la région du serveur dans l'application eWeLink",
          "Activer la compétence eWeLink dans Alexa",
          "Lier le compte eWeLink",
          "Rechercher les appareils et renommer les canaux",
          "Tester la commutation et les scènes"
        ]
      }
    },
    "govee-alexa": {
      "es": {
        "title": "Compatibilidad de Govee y Alexa",
        "question": "¿Funciona Govee con Alexa?",
        "category": "Control por voz",
        "verdict": "Compatible para luces y escenas",
        "summary": "Las luces y tiras Govee pueden controlarse con Alexa mediante la skill de Govee Home, incluyendo encendido, brillo, color y escenas.",
        "requirements": [
          "Cuenta de Govee Home",
          "App de Alexa",
          "Dispositivo Wi-Fi o Bluetooth ya emparejado en Govee Home"
        ],
        "limitations": [
          "La sincronía musical y los efectos DIY se quedan en la app Govee Home",
          "Los modelos solo Bluetooth no se controlan en remoto",
          "El control por segmentos está limitado en los asistentes de voz"
        ],
        "steps": [
          "Empareja el dispositivo en Govee Home",
          "Activa la skill de Govee Home en Alexa",
          "Vincula la cuenta Govee",
          "Ejecuta la búsqueda de dispositivos",
          "Prueba brillo, color y escenas"
        ]
      },
      "fr": {
        "title": "Compatibilité Govee et Alexa",
        "question": "Govee fonctionne-t-il avec Alexa ?",
        "category": "Commande vocale",
        "verdict": "Compatible pour l'éclairage et les scènes",
        "summary": "Les lampes et rubans Govee peuvent être contrôlés par Alexa via la compétence Govee Home : marche, luminosité, couleur et scènes.",
        "requirements": [
          "Compte Govee Home",
          "Application Alexa",
          "Appareil Wi-Fi ou Bluetooth déjà appairé dans Govee Home"
        ],
        "limitations": [
          "La synchronisation musicale et les effets DIY restent dans l'application Govee Home",
          "Les modèles uniquement Bluetooth ne sont pas contrôlables à distance",
          "Le contrôle par segments est limité dans les assistants vocaux"
        ],
        "steps": [
          "Appairer l'appareil dans Govee Home",
          "Activer la compétence Govee Home dans Alexa",
          "Lier le compte Govee",
          "Lancer la recherche d'appareils",
          "Tester luminosité, couleur et scènes"
        ]
      }
    },
    "wyze-alexa": {
      "es": {
        "title": "Compatibilidad de Wyze y Alexa",
        "question": "¿Funciona Wyze con Alexa?",
        "category": "Control por voz",
        "verdict": "Compatible para cámaras y enchufes",
        "summary": "Las cámaras y enchufes Wyze pueden vincularse a Alexa para que los modelos compatibles emitan en dispositivos Echo Show y los enchufes respondan a la voz.",
        "requirements": [
          "Cuenta y app de Wyze",
          "App de Alexa con la skill de Wyze",
          "Cámara o enchufe compatible con Alexa"
        ],
        "limitations": [
          "La emisión en directo se limita a dispositivos Alexa con pantalla",
          "Las funciones de Cam Plus y la grabación se gestionan en la app Wyze",
          "La compatibilidad varía según el modelo y el firmware"
        ],
        "steps": [
          "Actualiza el firmware del dispositivo Wyze",
          "Activa la skill de Wyze en Alexa",
          "Vincula la cuenta Wyze",
          "Nombra los dispositivos para el control por voz",
          "Prueba la emisión y el encendido"
        ]
      },
      "fr": {
        "title": "Compatibilité Wyze et Alexa",
        "question": "Wyze fonctionne-t-il avec Alexa ?",
        "category": "Commande vocale",
        "verdict": "Compatible pour caméras et prises",
        "summary": "Les caméras et prises Wyze peuvent être liées à Alexa afin que les modèles compatibles diffusent sur les appareils Echo Show et que les prises répondent à la voix.",
        "requirements": [
          "Compte et application Wyze",
          "Application Alexa avec la compétence Wyze",
          "Caméra ou prise compatible Alexa"
        ],
        "limitations": [
          "La diffusion en direct est limitée aux appareils Alexa avec écran",
          "Les fonctions Cam Plus et l'enregistrement restent dans l'application Wyze",
          "La compatibilité varie selon le modèle et le firmware"
        ],
        "steps": [
          "Mettre à jour le firmware de l'appareil Wyze",
          "Activer la compétence Wyze dans Alexa",
          "Lier le compte Wyze",
          "Nommer les appareils pour la commande vocale",
          "Tester la diffusion et la commutation"
        ]
      }
    },
    "switchbot-google-home": {
      "es": {
        "title": "Compatibilidad de SwitchBot y Google Home",
        "question": "¿Funciona SwitchBot con Google Home?",
        "category": "Control por voz",
        "verdict": "Compatible con hub o Matter",
        "summary": "Los dispositivos SwitchBot pueden llegar a Google Home mediante la integración de SwitchBot con un hub, o directamente cuando el dispositivo admite Matter.",
        "requirements": [
          "App y cuenta de SwitchBot",
          "SwitchBot Hub para dispositivos sin Matter, o un modelo con Matter",
          "App de Google Home"
        ],
        "limitations": [
          "Los dispositivos solo Bluetooth necesitan un hub para ser accesibles en remoto",
          "La compatibilidad con Matter depende del modelo y el firmware exactos",
          "El comportamiento de las escenas difiere entre la app SwitchBot y Google Home"
        ],
        "steps": [
          "Comprueba si el modelo admite Matter",
          "Añade el dispositivo en la app SwitchBot",
          "Añade el servicio SwitchBot, o empareja Matter, en Google Home",
          "Asigna habitaciones",
          "Prueba comandos y escenas"
        ]
      },
      "fr": {
        "title": "Compatibilité SwitchBot et Google Home",
        "question": "SwitchBot fonctionne-t-il avec Google Home ?",
        "category": "Commande vocale",
        "verdict": "Compatible avec un hub ou Matter",
        "summary": "Les appareils SwitchBot peuvent rejoindre Google Home via l'intégration SwitchBot avec un hub, ou directement lorsque l'appareil prend en charge Matter.",
        "requirements": [
          "Application et compte SwitchBot",
          "SwitchBot Hub pour les appareils non Matter, ou un modèle compatible Matter",
          "Application Google Home"
        ],
        "limitations": [
          "Les appareils uniquement Bluetooth nécessitent un hub pour être joignables à distance",
          "La prise en charge de Matter dépend du modèle et du firmware exacts",
          "Le comportement des scènes diffère entre l'application SwitchBot et Google Home"
        ],
        "steps": [
          "Vérifier si le modèle prend en charge Matter",
          "Ajouter l'appareil dans l'application SwitchBot",
          "Ajouter le service SwitchBot, ou appairer Matter, dans Google Home",
          "Affecter les pièces",
          "Tester les commandes et les scènes"
        ]
      }
    },
    "yolink-alexa": {
      "es": {
        "title": "Compatibilidad de YoLink y Alexa",
        "question": "¿Funciona YoLink con Alexa?",
        "category": "Control por voz",
        "verdict": "Compatible con un hub YoLink",
        "summary": "Los sensores y controles YoLink necesitan un hub YoLink antes de poder vincularse a Alexa para consultas de estado, alertas y encendido.",
        "requirements": [
          "Hub YoLink alimentado y en línea",
          "App YoLink con los sensores emparejados",
          "App de Alexa con la skill de YoLink"
        ],
        "limitations": [
          "Los sensores no son accesibles sin el hub",
          "Algunos tipos de sensor solo informan estado, sin control por voz",
          "El texto de las alertas se limita a lo que expone la skill"
        ],
        "steps": [
          "Confirma que el hub está en línea en la app YoLink",
          "Activa la skill de YoLink en Alexa",
          "Vincula la cuenta YoLink",
          "Ejecuta la búsqueda de dispositivos",
          "Prueba consultas de estado y alertas"
        ]
      },
      "fr": {
        "title": "Compatibilité YoLink et Alexa",
        "question": "YoLink fonctionne-t-il avec Alexa ?",
        "category": "Commande vocale",
        "verdict": "Compatible avec un hub YoLink",
        "summary": "Les capteurs et commandes YoLink nécessitent un hub YoLink avant de pouvoir être liés à Alexa pour les états, les alertes et la commutation.",
        "requirements": [
          "Hub YoLink alimenté et en ligne",
          "Application YoLink avec les capteurs appairés",
          "Application Alexa avec la compétence YoLink"
        ],
        "limitations": [
          "Les capteurs ne sont pas joignables sans le hub",
          "Certains types de capteurs ne remontent que l'état, sans commande vocale",
          "Le libellé des alertes se limite à ce que la compétence expose"
        ],
        "steps": [
          "Vérifier que le hub est en ligne dans l'application YoLink",
          "Activer la compétence YoLink dans Alexa",
          "Lier le compte YoLink",
          "Lancer la recherche d'appareils",
          "Tester les états et les alertes"
        ]
      }
    },
    "home-assistant-matter-controller": {
      "es": {
        "title": "Home Assistant como controlador Matter",
        "question": "¿Puede Home Assistant controlar dispositivos Matter?",
        "category": "Matter",
        "verdict": "Compatible mediante la integración de Matter",
        "summary": "Home Assistant puede comisionar y controlar dispositivos Matter con su integración de Matter, que ejecuta un servidor Matter y convive con border routers de Thread.",
        "requirements": [
          "Home Assistant con la integración de Matter instalada",
          "IPv6 habilitado en la red",
          "Border router de Thread para dispositivos Thread",
          "Bluetooth para la puesta en marcha inicial cuando sea necesario"
        ],
        "limitations": [
          "La puesta en marcha requiere Bluetooth o una red Thread existente",
          "IPv6 y mDNS deben funcionar en la red para el descubrimiento",
          "La compatibilidad de funciones depende del tipo de dispositivo y del clúster"
        ],
        "steps": [
          "Actualiza Home Assistant",
          "Instala e inicia la integración de Matter",
          "Comisiona el dispositivo con su código de emparejamiento",
          "Asigna el dispositivo a un área",
          "Prueba el control y las automatizaciones"
        ]
      },
      "fr": {
        "title": "Home Assistant comme contrôleur Matter",
        "question": "Home Assistant peut-il contrôler des appareils Matter ?",
        "category": "Matter",
        "verdict": "Compatible via l'intégration Matter",
        "summary": "Home Assistant peut commissionner et contrôler des appareils Matter grâce à son intégration Matter, qui exécute un serveur Matter et cohabite avec les border routers Thread.",
        "requirements": [
          "Home Assistant avec l'intégration Matter installée",
          "IPv6 activé sur le réseau",
          "Border router Thread pour les appareils Thread",
          "Bluetooth pour la mise en service initiale si nécessaire"
        ],
        "limitations": [
          "La mise en service nécessite le Bluetooth ou un réseau Thread existant",
          "IPv6 et mDNS doivent fonctionner sur le réseau pour la découverte",
          "La prise en charge dépend du type d'appareil et du cluster implémenté"
        ],
        "steps": [
          "Mettre à jour Home Assistant",
          "Installer et démarrer l'intégration Matter",
          "Commissionner l'appareil avec son code d'appairage",
          "Affecter l'appareil à une zone",
          "Tester le contrôle et les automatisations"
        ]
      }
    },
    "aqara-google-home": {
      "es": {
        "title": "Aqara y Google Home: compatibilidad",
        "question": "¿Funciona Aqara con Google Home?",
        "category": "Control por voz",
        "verdict": "Compatible con dispositivos compatibles",
        "summary": "Los dispositivos Aqara aparecen en Google Home mediante la integración de Aqara Home, y Matter añade una vía directa para los modelos compatibles.",
        "requirements": [
          "Cuenta de Aqara Home",
          "Hub Aqara para dispositivos con hub",
          "App de Google Home"
        ],
        "limitations": [
          "La exposición de funciones depende del modelo",
          "Matter requiere hardware y firmware compatibles de Aqara",
          "La región puede afectar a la integración disponible"
        ],
        "steps": [
          "Añade el dispositivo en Aqara Home",
          "En Google Home añade el servicio Aqara o empareja Matter",
          "Vincula la cuenta y asigna habitaciones",
          "Prueba el control y las automatizaciones"
        ]
      },
      "fr": {
        "title": "Aqara et Google Home : compatibilité",
        "question": "Aqara fonctionne-t-il avec Google Home ?",
        "category": "Commande vocale",
        "verdict": "Compatible avec les appareils compatibles",
        "summary": "Les appareils Aqara apparaissent dans Google Home via l'intégration Aqara Home, et Matter offre une voie directe pour les modèles compatibles.",
        "requirements": [
          "Compte Aqara Home",
          "Hub Aqara pour les appareils à hub",
          "Application Google Home"
        ],
        "limitations": [
          "L'exposition des fonctions dépend du modèle",
          "Matter nécessite un matériel et un firmware compatibles Aqara",
          "La région peut influencer l'intégration proposée"
        ],
        "steps": [
          "Ajouter l'appareil dans Aqara Home",
          "Dans Google Home, ajouter le service Aqara ou appairer Matter",
          "Lier le compte et affecter les pièces",
          "Tester le contrôle et les automatisations"
        ]
      }
    },
    "aqara-alexa": {
      "es": {
        "title": "Aqara y Amazon Alexa: compatibilidad",
        "question": "¿Funciona Aqara con Amazon Alexa?",
        "category": "Control por voz",
        "verdict": "Compatible con dispositivos compatibles",
        "summary": "Los hubs Aqara pueden vincularse a Alexa para que sensores, interruptores y luces respondan a la voz y aparezcan en rutinas.",
        "requirements": [
          "Cuenta de Aqara Home",
          "Hub Aqara",
          "App de Alexa con la skill de Aqara"
        ],
        "limitations": [
          "Los dispositivos con hub necesitan el hub en línea",
          "Algunos sensores solo informan estado",
          "Los nombres deben ser únicos en la casa de Alexa"
        ],
        "steps": [
          "Activa la skill de Aqara en Alexa",
          "Vincula la cuenta Aqara",
          "Busca dispositivos y asigna habitaciones",
          "Prueba comandos y rutinas"
        ]
      },
      "fr": {
        "title": "Aqara et Amazon Alexa : compatibilité",
        "question": "Aqara fonctionne-t-il avec Amazon Alexa ?",
        "category": "Commande vocale",
        "verdict": "Compatible avec les appareils compatibles",
        "summary": "Les hubs Aqara peuvent être liés à Alexa pour que capteurs, interrupteurs et lampes répondent à la voix et apparaissent dans les routines.",
        "requirements": [
          "Compte Aqara Home",
          "Hub Aqara",
          "Application Alexa avec la compétence Aqara"
        ],
        "limitations": [
          "Les appareils à hub nécessitent le hub en ligne",
          "Certains capteurs ne remontent que l'état",
          "Les noms doivent être uniques dans la maison Alexa"
        ],
        "steps": [
          "Activer la compétence Aqara dans Alexa",
          "Lier le compte Aqara",
          "Rechercher les appareils et affecter les pièces",
          "Tester les commandes et les routines"
        ]
      }
    },
    "shelly-alexa": {
      "es": {
        "title": "Shelly y Amazon Alexa: compatibilidad",
        "question": "¿Funciona Shelly con Amazon Alexa?",
        "category": "Control por voz",
        "verdict": "Compatible con dispositivos compatibles",
        "summary": "Los relés y enchufes Shelly pueden controlarse con Alexa tras configurar Shelly Cloud o el emparejamiento Matter.",
        "requirements": [
          "Dispositivo Shelly en la red",
          "App de Alexa con la skill de Shelly o emparejamiento Matter",
          "Firmware Shelly actualizado"
        ],
        "limitations": [
          "Las instalaciones solo locales sin nube ni Matter no se exponen a Alexa",
          "El nombre de cada canal importa en relés multicanal",
          "La versión de firmware cambia las funciones disponibles"
        ],
        "steps": [
          "Actualiza el firmware de Shelly",
          "Elige la skill en la nube o el emparejamiento Matter en Alexa",
          "Busca los dispositivos",
          "Renombra los canales y prueba la conmutación"
        ]
      },
      "fr": {
        "title": "Shelly et Amazon Alexa : compatibilité",
        "question": "Shelly fonctionne-t-il avec Amazon Alexa ?",
        "category": "Commande vocale",
        "verdict": "Compatible avec les appareils compatibles",
        "summary": "Les relais et prises Shelly peuvent être contrôlés par Alexa après configuration de Shelly Cloud ou de l'appairage Matter.",
        "requirements": [
          "Appareil Shelly sur le réseau",
          "Application Alexa avec la compétence Shelly ou appairage Matter",
          "Firmware Shelly à jour"
        ],
        "limitations": [
          "Les installations purement locales sans cloud ni Matter ne sont pas exposées à Alexa",
          "Le nom de chaque canal compte sur les relais multicanaux",
          "La version de firmware modifie les fonctions disponibles"
        ],
        "steps": [
          "Mettre à jour le firmware Shelly",
          "Choisir la compétence cloud ou l'appairage Matter dans Alexa",
          "Rechercher les appareils",
          "Renommer les canaux et tester la commutation"
        ]
      }
    },
    "switchbot-alexa": {
      "es": {
        "title": "SwitchBot y Amazon Alexa: compatibilidad",
        "question": "¿Funciona SwitchBot con Amazon Alexa?",
        "category": "Control por voz",
        "verdict": "Compatible con dispositivos compatibles",
        "summary": "Los dispositivos SwitchBot llegan a Alexa mediante la skill de SwitchBot con un hub, o directamente cuando el modelo admite Matter.",
        "requirements": [
          "Cuenta de SwitchBot",
          "SwitchBot Hub para dispositivos sin Matter",
          "App de Alexa"
        ],
        "limitations": [
          "Los dispositivos solo Bluetooth necesitan un hub",
          "La compatibilidad con Matter depende del modelo",
          "Las escenas difieren entre la app SwitchBot y Alexa"
        ],
        "steps": [
          "Añade el dispositivo en la app SwitchBot",
          "Activa la skill o empareja Matter en Alexa",
          "Busca los dispositivos",
          "Prueba comandos y escenas"
        ]
      },
      "fr": {
        "title": "SwitchBot et Amazon Alexa : compatibilité",
        "question": "SwitchBot fonctionne-t-il avec Amazon Alexa ?",
        "category": "Commande vocale",
        "verdict": "Compatible avec les appareils compatibles",
        "summary": "Les appareils SwitchBot rejoignent Alexa via la compétence SwitchBot avec un hub, ou directement lorsque le modèle prend en charge Matter.",
        "requirements": [
          "Compte SwitchBot",
          "SwitchBot Hub pour les appareils non Matter",
          "Application Alexa"
        ],
        "limitations": [
          "Les appareils uniquement Bluetooth nécessitent un hub",
          "La prise en charge de Matter dépend du modèle",
          "Les scènes diffèrent entre l'app SwitchBot et Alexa"
        ],
        "steps": [
          "Ajouter l'appareil dans l'app SwitchBot",
          "Activer la compétence ou appairer Matter dans Alexa",
          "Rechercher les appareils",
          "Tester les commandes et les scènes"
        ]
      }
    },
    "sonoff-google-home": {
      "es": {
        "title": "SONOFF / eWeLink y Google Home: compatibilidad",
        "question": "¿Funciona SONOFF / eWeLink con Google Home?",
        "category": "Control por voz",
        "verdict": "Compatible con dispositivos compatibles",
        "summary": "Los dispositivos SONOFF gestionados en eWeLink pueden añadirse a Google Home mediante la integración de eWeLink, cubriendo conmutación y escenas.",
        "requirements": [
          "Cuenta eWeLink con el dispositivo emparejado",
          "App de Google Home",
          "Región de servidor eWeLink correcta"
        ],
        "limitations": [
          "La región del servidor afecta a la visibilidad",
          "El firmware alternativo no está cubierto por la integración",
          "Los dispositivos multicanal necesitan nombrar cada canal"
        ],
        "steps": [
          "Revisa la región del dispositivo en eWeLink",
          "Añade el servicio eWeLink en Google Home",
          "Vincula la cuenta",
          "Asigna habitaciones y prueba la conmutación"
        ]
      },
      "fr": {
        "title": "SONOFF / eWeLink et Google Home : compatibilité",
        "question": "SONOFF / eWeLink fonctionne-t-il avec Google Home ?",
        "category": "Commande vocale",
        "verdict": "Compatible avec les appareils compatibles",
        "summary": "Les appareils SONOFF gérés dans eWeLink peuvent être ajoutés à Google Home via l'intégration eWeLink : commutation et scènes.",
        "requirements": [
          "Compte eWeLink avec l'appareil appairé",
          "Application Google Home",
          "Bonne région de serveur eWeLink"
        ],
        "limitations": [
          "La région du serveur affecte la visibilité",
          "Un firmware alternatif n'est pas couvert par l'intégration",
          "Les appareils multicanaux nécessitent un nommage par canal"
        ],
        "steps": [
          "Vérifier la région de l'appareil dans eWeLink",
          "Ajouter le service eWeLink dans Google Home",
          "Lier le compte",
          "Affecter les pièces et tester la commutation"
        ]
      }
    },
    "tapo-alexa": {
      "es": {
        "title": "TP-Link Tapo y Amazon Alexa: compatibilidad",
        "question": "¿Funciona TP-Link Tapo con Amazon Alexa?",
        "category": "Control por voz",
        "verdict": "Compatible con dispositivos compatibles",
        "summary": "Las cámaras, enchufes y luces Tapo pueden vincularse a Alexa para que los modelos compatibles emitan en dispositivos Echo Show y los enchufes respondan a la voz.",
        "requirements": [
          "Cuenta y app Tapo",
          "App de Alexa con la skill de Tapo",
          "Firmware Tapo actualizado"
        ],
        "limitations": [
          "La visualización en directo requiere un dispositivo Alexa con pantalla",
          "Las funciones de grabación se quedan en la app Tapo",
          "La compatibilidad varía según el modelo"
        ],
        "steps": [
          "Actualiza el firmware Tapo",
          "Activa la skill de Tapo en Alexa",
          "Vincula la cuenta Tapo",
          "Prueba la emisión y el encendido"
        ]
      },
      "fr": {
        "title": "TP-Link Tapo et Amazon Alexa : compatibilité",
        "question": "TP-Link Tapo fonctionne-t-il avec Amazon Alexa ?",
        "category": "Commande vocale",
        "verdict": "Compatible avec les appareils compatibles",
        "summary": "Les caméras, prises et lampes Tapo peuvent être liées à Alexa afin que les modèles compatibles diffusent sur les appareils Echo Show et que les prises répondent à la voix.",
        "requirements": [
          "Compte et application Tapo",
          "Application Alexa avec la compétence Tapo",
          "Firmware Tapo à jour"
        ],
        "limitations": [
          "L'affichage en direct nécessite un appareil Alexa avec écran",
          "Les fonctions d'enregistrement restent dans l'app Tapo",
          "La compatibilité varie selon le modèle"
        ],
        "steps": [
          "Mettre à jour le firmware Tapo",
          "Activer la compétence Tapo dans Alexa",
          "Lier le compte Tapo",
          "Tester la diffusion et la commutation"
        ]
      }
    },
    "eufy-google-home": {
      "es": {
        "title": "eufy Security y Google Home: compatibilidad",
        "question": "¿Funciona eufy Security con Google Home?",
        "category": "Control por voz",
        "verdict": "Compatible con dispositivos compatibles",
        "summary": "Las cámaras y videoporteros eufy pueden añadirse a Google Home para que los modelos compatibles emitan y notifiquen eventos en la app Home.",
        "requirements": [
          "Cuenta y app de eufy Security",
          "App de Google Home",
          "Modelo compatible con emisión en Google Home"
        ],
        "limitations": [
          "La emisión requiere una pantalla compatible",
          "Los ajustes de almacenamiento local se quedan en la app eufy",
          "El texto de los eventos se limita a lo que expone la integración"
        ],
        "steps": [
          "Confirma el soporte del modelo en la app eufy",
          "Añade el servicio eufy en Google Home",
          "Vincula la cuenta",
          "Prueba la emisión y las notificaciones"
        ]
      },
      "fr": {
        "title": "eufy Security et Google Home : compatibilité",
        "question": "eufy Security fonctionne-t-il avec Google Home ?",
        "category": "Commande vocale",
        "verdict": "Compatible avec les appareils compatibles",
        "summary": "Les caméras et sonnettes eufy peuvent être ajoutées à Google Home afin que les modèles compatibles diffusent et signalent les événements dans l'app Home.",
        "requirements": [
          "Compte et application eufy Security",
          "Application Google Home",
          "Modèle compatible avec la diffusion Google Home"
        ],
        "limitations": [
          "La diffusion nécessite un écran compatible",
          "Les réglages de stockage local restent dans l'app eufy",
          "Le libellé des événements se limite à ce que l'intégration expose"
        ],
        "steps": [
          "Confirmer la compatibilité du modèle dans l'app eufy",
          "Ajouter le service eufy dans Google Home",
          "Lier le compte",
          "Tester la diffusion et les notifications"
        ]
      }
    },
    "ring-google-home": {
      "es": {
        "title": "Ring y Google Home: compatibilidad",
        "question": "¿Funciona Ring con Google Home?",
        "category": "Control por voz",
        "verdict": "Compatible con dispositivos compatibles",
        "summary": "Los videoporteros y cámaras Ring pueden vincularse a Google Home para que los modelos compatibles emitan en pantallas Nest y anuncien eventos.",
        "requirements": [
          "Cuenta de Ring",
          "App de Google Home",
          "Dispositivo y región de Ring compatibles"
        ],
        "limitations": [
          "Los anuncios requieren altavoces o pantallas compatibles",
          "Las funciones de grabación pueden exigir un plan Ring",
          "El despliegue de funciones varía por región"
        ],
        "steps": [
          "Abre Google Home y añade el servicio Ring",
          "Vincula la cuenta de Ring",
          "Asigna los dispositivos a habitaciones",
          "Prueba la visualización y los anuncios"
        ]
      },
      "fr": {
        "title": "Ring et Google Home : compatibilité",
        "question": "Ring fonctionne-t-il avec Google Home ?",
        "category": "Commande vocale",
        "verdict": "Compatible avec les appareils compatibles",
        "summary": "Les sonnettes et caméras Ring peuvent être liées à Google Home afin que les modèles compatibles diffusent sur les écrans Nest et annoncent les événements.",
        "requirements": [
          "Compte Ring",
          "Application Google Home",
          "Appareil et région Ring compatibles"
        ],
        "limitations": [
          "Les annonces nécessitent des enceintes ou écrans compatibles",
          "Les fonctions d'enregistrement peuvent exiger un forfait Ring",
          "Le déploiement des fonctions varie selon la région"
        ],
        "steps": [
          "Ouvrir Google Home et ajouter le service Ring",
          "Lier le compte Ring",
          "Affecter les appareils à des pièces",
          "Tester l'affichage et les annonces"
        ]
      }
    },
    "wyze-google-home": {
      "es": {
        "title": "Wyze y Google Home: compatibilidad",
        "question": "¿Funciona Wyze con Google Home?",
        "category": "Control por voz",
        "verdict": "Compatible con dispositivos compatibles",
        "summary": "Las cámaras y enchufes Wyze pueden vincularse a Google Home para visualización en directo en pantallas compatibles y comandos de encendido.",
        "requirements": [
          "Cuenta y app de Wyze",
          "App de Google Home",
          "Modelo compatible con Google Home"
        ],
        "limitations": [
          "La visualización en directo requiere pantalla",
          "Cam Plus y la grabación se quedan en la app Wyze",
          "La compatibilidad varía según firmware"
        ],
        "steps": [
          "Actualiza el firmware de Wyze",
          "Añade el servicio Wyze en Google Home",
          "Vincula la cuenta",
          "Prueba la visualización y el encendido"
        ]
      },
      "fr": {
        "title": "Wyze et Google Home : compatibilité",
        "question": "Wyze fonctionne-t-il avec Google Home ?",
        "category": "Commande vocale",
        "verdict": "Compatible avec les appareils compatibles",
        "summary": "Les caméras et prises Wyze peuvent être liées à Google Home pour l'affichage en direct sur écrans compatibles et les commandes de commutation.",
        "requirements": [
          "Compte et application Wyze",
          "Application Google Home",
          "Modèle compatible Google Home"
        ],
        "limitations": [
          "L'affichage en direct nécessite un écran",
          "Cam Plus et l'enregistrement restent dans l'app Wyze",
          "La compatibilité varie selon le firmware"
        ],
        "steps": [
          "Mettre à jour le firmware Wyze",
          "Ajouter le service Wyze dans Google Home",
          "Lier le compte",
          "Tester l'affichage et la commutation"
        ]
      }
    },
    "govee-google-home": {
      "es": {
        "title": "Govee y Google Home: compatibilidad",
        "question": "¿Funciona Govee con Google Home?",
        "category": "Control por voz",
        "verdict": "Compatible con dispositivos compatibles",
        "summary": "Las luces y tiras Govee pueden controlarse desde Google Home tras vincular la cuenta Govee Home, incluyendo encendido, brillo, color y escenas.",
        "requirements": [
          "Cuenta de Govee Home",
          "App de Google Home",
          "Dispositivo emparejado en Govee Home"
        ],
        "limitations": [
          "La sincronía musical y los efectos DIY se quedan en la app Govee",
          "Los modelos solo Bluetooth no son accesibles en remoto",
          "El control por segmentos está limitado"
        ],
        "steps": [
          "Empareja el dispositivo en Govee Home",
          "Añade el servicio Govee Home en Google Home",
          "Vincula la cuenta",
          "Prueba brillo, color y escenas"
        ]
      },
      "fr": {
        "title": "Govee et Google Home : compatibilité",
        "question": "Govee fonctionne-t-il avec Google Home ?",
        "category": "Commande vocale",
        "verdict": "Compatible avec les appareils compatibles",
        "summary": "Les lampes et rubans Govee peuvent être contrôlés depuis Google Home après liaison du compte Govee Home : marche, luminosité, couleur et scènes.",
        "requirements": [
          "Compte Govee Home",
          "Application Google Home",
          "Appareil appairé dans Govee Home"
        ],
        "limitations": [
          "La synchronisation musicale et les effets DIY restent dans l'app Govee",
          "Les modèles uniquement Bluetooth ne sont pas joignables à distance",
          "Le contrôle par segments est limité"
        ],
        "steps": [
          "Appairer l'appareil dans Govee Home",
          "Ajouter le service Govee Home dans Google Home",
          "Lier le compte",
          "Tester luminosité, couleur et scènes"
        ]
      }
    },
    "reolink-alexa": {
      "es": {
        "title": "Reolink y Amazon Alexa: compatibilidad",
        "question": "¿Funciona Reolink con Amazon Alexa?",
        "category": "Control por voz",
        "verdict": "Compatible con dispositivos compatibles",
        "summary": "Las cámaras Reolink pueden vincularse a Alexa para que los modelos compatibles emitan en dispositivos Echo Show y respondan a comandos de cámara.",
        "requirements": [
          "Cuenta y app de Reolink",
          "App de Alexa con la skill de Reolink",
          "Cámara compatible con emisión en Alexa"
        ],
        "limitations": [
          "La visualización en directo requiere un dispositivo con pantalla",
          "Las grabaciones se quedan en el NVR, hub o microSD",
          "La compatibilidad varía según el modelo"
        ],
        "steps": [
          "Actualiza el firmware de la cámara",
          "Activa la skill de Reolink en Alexa",
          "Vincula la cuenta",
          "Prueba la visualización y los comandos"
        ]
      },
      "fr": {
        "title": "Reolink et Amazon Alexa : compatibilité",
        "question": "Reolink fonctionne-t-il avec Amazon Alexa ?",
        "category": "Commande vocale",
        "verdict": "Compatible avec les appareils compatibles",
        "summary": "Les caméras Reolink peuvent être liées à Alexa afin que les modèles compatibles diffusent sur les appareils Echo Show et répondent aux commandes.",
        "requirements": [
          "Compte et application Reolink",
          "Application Alexa avec la compétence Reolink",
          "Caméra compatible avec la diffusion Alexa"
        ],
        "limitations": [
          "L'affichage en direct nécessite un appareil avec écran",
          "Les enregistrements restent sur le NVR, le hub ou la microSD",
          "La compatibilité varie selon le modèle"
        ],
        "steps": [
          "Mettre à jour le firmware de la caméra",
          "Activer la compétence Reolink dans Alexa",
          "Lier le compte",
          "Tester l'affichage et les commandes"
        ]
      }
    },
    "reolink-google-home": {
      "es": {
        "title": "Reolink y Google Home: compatibilidad",
        "question": "¿Funciona Reolink con Google Home?",
        "category": "Control por voz",
        "verdict": "Compatible con dispositivos compatibles",
        "summary": "Las cámaras Reolink pueden añadirse a Google Home para que los modelos compatibles emitan y notifiquen movimiento en la app Home.",
        "requirements": [
          "Cuenta y app de Reolink",
          "App de Google Home",
          "Modelo compatible con Google Home"
        ],
        "limitations": [
          "La emisión requiere pantalla compatible",
          "Las zonas de detección se configuran en la app Reolink",
          "La compatibilidad varía según firmware"
        ],
        "steps": [
          "Confirma el soporte del modelo",
          "Añade el servicio Reolink en Google Home",
          "Vincula la cuenta",
          "Prueba la emisión y los eventos de movimiento"
        ]
      },
      "fr": {
        "title": "Reolink et Google Home : compatibilité",
        "question": "Reolink fonctionne-t-il avec Google Home ?",
        "category": "Commande vocale",
        "verdict": "Compatible avec les appareils compatibles",
        "summary": "Les caméras Reolink peuvent être ajoutées à Google Home afin que les modèles compatibles diffusent et signalent les mouvements dans l'app Home.",
        "requirements": [
          "Compte et application Reolink",
          "Application Google Home",
          "Modèle compatible Google Home"
        ],
        "limitations": [
          "La diffusion nécessite un écran compatible",
          "Les zones de détection se règlent dans l'app Reolink",
          "La compatibilité varie selon le firmware"
        ],
        "steps": [
          "Confirmer la compatibilité du modèle",
          "Ajouter le service Reolink dans Google Home",
          "Lier le compte",
          "Tester la diffusion et les événements"
        ]
      }
    },
    "roborock-alexa": {
      "es": {
        "title": "Roborock y Amazon Alexa: compatibilidad",
        "question": "¿Funciona Roborock con Amazon Alexa?",
        "category": "Control por voz",
        "verdict": "Compatible con dispositivos compatibles",
        "summary": "Los robots Roborock pueden vincularse a Alexa para iniciar, pausar, volver a la base y limpiar por habitaciones en modelos compatibles.",
        "requirements": [
          "Cuenta de Roborock",
          "App de Alexa con la skill de Roborock",
          "Robot en línea en la app Roborock"
        ],
        "limitations": [
          "La edición de mapas se queda en la app Roborock",
          "El conjunto de comandos varía por modelo y región",
          "Los mapas multinivel requieren seleccionar el mapa correcto"
        ],
        "steps": [
          "Confirma que el robot está en línea en la app",
          "Activa la skill de Roborock en Alexa",
          "Vincula la cuenta",
          "Prueba iniciar, pausar y volver a la base"
        ]
      },
      "fr": {
        "title": "Roborock et Amazon Alexa : compatibilité",
        "question": "Roborock fonctionne-t-il avec Amazon Alexa ?",
        "category": "Commande vocale",
        "verdict": "Compatible avec les appareils compatibles",
        "summary": "Les aspirateurs Roborock peuvent être liés à Alexa pour démarrer, mettre en pause, retourner à la base et nettoyer par pièce sur les modèles compatibles.",
        "requirements": [
          "Compte Roborock",
          "Application Alexa avec la compétence Roborock",
          "Robot en ligne dans l'app Roborock"
        ],
        "limitations": [
          "L'édition des cartes reste dans l'app Roborock",
          "Le jeu de commandes varie selon le modèle et la région",
          "Les cartes multi-niveaux nécessitent la bonne carte sélectionnée"
        ],
        "steps": [
          "Vérifier que le robot est en ligne",
          "Activer la compétence Roborock dans Alexa",
          "Lier le compte",
          "Tester démarrage, pause et retour à la base"
        ]
      }
    },
    "kasa-google-home": {
      "es": {
        "title": "TP-Link Kasa y Google Home: compatibilidad",
        "question": "¿Funciona TP-Link Kasa con Google Home?",
        "category": "Control por voz",
        "verdict": "Compatible con dispositivos compatibles",
        "summary": "Los enchufes, interruptores y bombillas Kasa pueden vincularse a Google Home mediante la integración de Kasa para control y escenas.",
        "requirements": [
          "Cuenta y app de Kasa",
          "App de Google Home",
          "Dispositivos añadidos en la app Kasa"
        ],
        "limitations": [
          "Algunos modelos Kasa también admiten Matter, lo que cambia la vía de emparejamiento",
          "Las vistas de consumo se quedan en la app Kasa",
          "El nombre afecta a la fiabilidad del control por voz"
        ],
        "steps": [
          "Añade los dispositivos en la app Kasa",
          "Añade el servicio Kasa en Google Home",
          "Vincula la cuenta y asigna habitaciones",
          "Prueba encendido y escenas"
        ]
      },
      "fr": {
        "title": "TP-Link Kasa et Google Home : compatibilité",
        "question": "TP-Link Kasa fonctionne-t-il avec Google Home ?",
        "category": "Commande vocale",
        "verdict": "Compatible avec les appareils compatibles",
        "summary": "Les prises, interrupteurs et ampoules Kasa peuvent être liés à Google Home via l'intégration Kasa pour la commutation et les scènes.",
        "requirements": [
          "Compte et application Kasa",
          "Application Google Home",
          "Appareils ajoutés dans l'app Kasa"
        ],
        "limitations": [
          "Certains modèles Kasa prennent aussi en charge Matter, ce qui change la voie d'appairage",
          "Les vues de consommation restent dans l'app Kasa",
          "Le nommage affecte la fiabilité de la commande vocale"
        ],
        "steps": [
          "Ajouter les appareils dans l'app Kasa",
          "Ajouter le service Kasa dans Google Home",
          "Lier le compte et affecter les pièces",
          "Tester la commutation et les scènes"
        ]
      }
    },
    "meross-alexa": {
      "es": {
        "title": "Meross y Amazon Alexa: compatibilidad",
        "question": "¿Funciona Meross con Amazon Alexa?",
        "category": "Control por voz",
        "verdict": "Compatible con dispositivos compatibles",
        "summary": "Los enchufes, interruptores y controladores de garaje Meross pueden controlarse con Alexa tras activar la skill de Meross.",
        "requirements": [
          "Cuenta y app de Meross",
          "App de Alexa con la skill de Meross",
          "Dispositivo en línea en la app Meross"
        ],
        "limitations": [
          "La región del servidor afecta a la skill",
          "El control de garaje requiere el tipo de dispositivo correcto",
          "Los dispositivos multicanal necesitan nombrar cada canal"
        ],
        "steps": [
          "Confirma que el dispositivo está en línea en la app",
          "Activa la skill de Meross en Alexa",
          "Vincula la cuenta",
          "Busca dispositivos y prueba el control"
        ]
      },
      "fr": {
        "title": "Meross et Amazon Alexa : compatibilité",
        "question": "Meross fonctionne-t-il avec Amazon Alexa ?",
        "category": "Commande vocale",
        "verdict": "Compatible avec les appareils compatibles",
        "summary": "Les prises, interrupteurs et contrôleurs de porte de garage Meross peuvent être contrôlés par Alexa après activation de la compétence Meross.",
        "requirements": [
          "Compte et application Meross",
          "Application Alexa avec la compétence Meross",
          "Appareil en ligne dans l'app Meross"
        ],
        "limitations": [
          "La région du serveur affecte la compétence",
          "Le contrôle de porte nécessite le bon type d'appareil",
          "Les appareils multicanaux nécessitent un nommage par canal"
        ],
        "steps": [
          "Vérifier que l'appareil est en ligne",
          "Activer la compétence Meross dans Alexa",
          "Lier le compte",
          "Rechercher les appareils et tester"
        ]
      }
    },
    "blink-alexa": {
      "fr": {
        "title": "Blink et Amazon Alexa : compatibilité",
        "question": "Blink fonctionne-t-il avec Amazon Alexa ?",
        "category": "Commande vocale",
        "verdict": "Compatible avec les appareils compatibles",
        "summary": "Les caméras et sonnettes Blink peuvent être liées à Alexa afin que les modèles compatibles diffusent sur les appareils Echo Show et annoncent les mouvements.",
        "requirements": [
          "Compte Blink",
          "Application Alexa avec la compétence Blink",
          "Caméra compatible avec la diffusion Alexa"
        ],
        "limitations": [
          "L'affichage en direct nécessite un appareil avec écran",
          "Le stockage local et le module Sync se gèrent dans l'app Blink",
          "La compatibilité varie selon le firmware"
        ],
        "steps": [
          "Activer la compétence Blink dans Alexa",
          "Lier le compte Blink",
          "Nommer les caméras",
          "Tester l'affichage et les annonces"
        ]
      },
      "es": {
        "title": "Compatibilidad de Blink y Alexa",
        "question": "¿Funciona Blink con Alexa?",
        "category": "Control por voz",
        "verdict": "Compatible mediante vinculación de cuenta",
        "summary": "Las cámaras y videoporteros Blink pueden vincularse a Alexa para que los modelos compatibles emitan en dispositivos Echo Show y anuncien los eventos de movimiento.",
        "requirements": [
          "Cuenta de Blink",
          "App de Alexa con la skill de Blink",
          "Cámara compatible con la emisión en Alexa"
        ],
        "limitations": [
          "La visualización en directo requiere un dispositivo con pantalla",
          "El almacenamiento local y los ajustes del módulo Sync se gestionan en la app de Blink",
          "La compatibilidad depende del modelo y del firmware"
        ],
        "steps": [
          "Activa la skill de Blink en Alexa",
          "Vincula la cuenta de Blink",
          "Nombra las cámaras para el control por voz",
          "Prueba la visualización en directo y los anuncios"
        ]
      }
    },
    "arlo-alexa": {
      "fr": {
        "title": "Arlo et Amazon Alexa : compatibilité",
        "question": "Arlo fonctionne-t-il avec Amazon Alexa ?",
        "category": "Commande vocale",
        "verdict": "Compatible avec les appareils compatibles",
        "summary": "Les caméras Arlo peuvent être liées à Alexa afin que les modèles compatibles diffusent sur les Echo Show et répondent aux commandes.",
        "requirements": [
          "Compte et application Arlo",
          "Application Alexa avec la compétence Arlo",
          "Modèle compatible avec la diffusion"
        ],
        "limitations": [
          "La diffusion nécessite un appareil avec écran",
          "Les forfaits d'enregistrement et le stockage local restent dans l'app Arlo",
          "Les fonctions varient selon le modèle"
        ],
        "steps": [
          "Activer la compétence Arlo dans Alexa",
          "Lier le compte Arlo",
          "Rechercher et renommer les caméras",
          "Tester l'affichage et les commandes"
        ]
      },
      "es": {
        "title": "Compatibilidad de Arlo y Alexa",
        "question": "¿Funciona Arlo con Alexa?",
        "category": "Control por voz",
        "verdict": "Compatible en cámaras y videoporteros",
        "summary": "Las cámaras Arlo pueden vincularse a Alexa para que los modelos compatibles emitan en dispositivos Echo Show y respondan a comandos de cámara.",
        "requirements": [
          "Cuenta y app de Arlo",
          "App de Alexa con la skill de Arlo",
          "Modelo compatible con la emisión en Alexa"
        ],
        "limitations": [
          "La emisión requiere un dispositivo Alexa con pantalla",
          "Los planes de grabación y el almacenamiento local se gestionan en la app de Arlo",
          "Las funciones varían según el modelo"
        ],
        "steps": [
          "Activa la skill de Arlo en Alexa",
          "Vincula la cuenta de Arlo",
          "Ejecuta la búsqueda de dispositivos y renombra las cámaras",
          "Prueba la visualización en directo y los comandos"
        ]
      }
    },
    "ecobee-alexa": {
      "fr": {
        "title": "ecobee et Amazon Alexa : compatibilité",
        "question": "ecobee fonctionne-t-il avec Amazon Alexa ?",
        "category": "Commande vocale",
        "verdict": "Compatible avec les appareils compatibles",
        "summary": "Les thermostats et capteurs ecobee peuvent être contrôlés par Alexa après activation de la compétence ecobee : consigne et modes de confort inclus.",
        "requirements": [
          "Compte et application ecobee",
          "Application Alexa avec la compétence ecobee",
          "Thermostat en ligne dans l'app ecobee"
        ],
        "limitations": [
          "La programmation avancée reste dans l'app ecobee",
          "Le nom des capteurs influence la commande vocale",
          "Certaines fonctions dépendent de votre système de chauffage"
        ],
        "steps": [
          "Activer la compétence ecobee dans Alexa",
          "Lier le compte ecobee",
          "Rechercher et renommer le thermostat",
          "Tester la consigne et les modes"
        ]
      },
      "es": {
        "title": "Compatibilidad de ecobee y Alexa",
        "question": "¿Funciona ecobee con Alexa?",
        "category": "Control por voz",
        "verdict": "Compatible",
        "summary": "Los termostatos y sensores ecobee se pueden controlar con Alexa tras activar la skill de ecobee, incluidos el punto de consigna y los ajustes de confort.",
        "requirements": [
          "Cuenta y app de ecobee",
          "App de Alexa con la skill de ecobee",
          "Termostato en línea en la app de ecobee"
        ],
        "limitations": [
          "La programación avanzada se gestiona en la app de ecobee",
          "El nombre de los sensores afecta al control por voz",
          "Algunas funciones dependen de tu sistema de climatización"
        ],
        "steps": [
          "Activa la skill de ecobee en Alexa",
          "Vincula la cuenta de ecobee",
          "Ejecuta la búsqueda y nombra el termostato",
          "Prueba los comandos de consigna y confort"
        ]
      }
    },
    "wiz-alexa": {
      "fr": {
        "title": "WiZ et Amazon Alexa : compatibilité",
        "question": "WiZ fonctionne-t-il avec Amazon Alexa ?",
        "category": "Commande vocale",
        "verdict": "Compatible avec les appareils compatibles",
        "summary": "Les lampes WiZ peuvent être contrôlées par Alexa via la compétence WiZ : marche, luminosité, couleur et scènes.",
        "requirements": [
          "Compte et application WiZ",
          "Application Alexa avec la compétence WiZ",
          "Lampes déjà appairées dans l'app WiZ"
        ],
        "limitations": [
          "Les scènes dynamiques restent dans l'app WiZ",
          "Une configuration Bluetooth seule limite le contrôle à distance",
          "Le contrôle par segments est limité"
        ],
        "steps": [
          "Appairer les lampes dans l'app WiZ",
          "Activer la compétence WiZ dans Alexa",
          "Lier le compte",
          "Tester luminosité, couleur et scènes"
        ]
      },
      "es": {
        "title": "Compatibilidad de WiZ y Alexa",
        "question": "¿Funciona WiZ con Alexa?",
        "category": "Control por voz",
        "verdict": "Compatible",
        "summary": "Las luces WiZ se pueden controlar con Alexa a través de la skill de WiZ, incluidos encendido, brillo, color y escenas.",
        "requirements": [
          "Cuenta y app de WiZ",
          "App de Alexa con la skill de WiZ",
          "Luces ya emparejadas en la app de WiZ"
        ],
        "limitations": [
          "Las escenas dinámicas se gestionan en la app de WiZ",
          "Una configuración solo por Bluetooth limita el control remoto",
          "El control por segmentos es limitado"
        ],
        "steps": [
          "Empareja las luces en la app de WiZ",
          "Activa la skill de WiZ en Alexa",
          "Vincula la cuenta",
          "Prueba brillo, color y escenas"
        ]
      }
    },
    "meross-google-home": {
      "fr": {
        "title": "Meross et Google Home : compatibilité",
        "question": "Meross fonctionne-t-il avec Google Home ?",
        "category": "Commande vocale",
        "verdict": "Compatible avec les appareils compatibles",
        "summary": "Les prises, interrupteurs et contrôleurs de garage Meross peuvent être ajoutés à Google Home via l'intégration Meross.",
        "requirements": [
          "Compte et application Meross",
          "Application Google Home",
          "Appareil en ligne dans l'app Meross"
        ],
        "limitations": [
          "La région du serveur affecte la visibilité",
          "Le contrôle de porte nécessite le bon type d'appareil",
          "Les appareils multicanaux nécessitent un nommage par canal"
        ],
        "steps": [
          "Vérifier que l'appareil est en ligne",
          "Ajouter le service Meross dans Google Home",
          "Lier le compte",
          "Affecter les pièces et tester"
        ]
      },
      "es": {
        "title": "Compatibilidad de Meross y Google Home",
        "question": "¿Funciona Meross con Google Home?",
        "category": "Control por voz",
        "verdict": "Compatible",
        "summary": "Los enchufes, interruptores y mandos de garaje Meross se pueden añadir a Google Home mediante la integración de Meross.",
        "requirements": [
          "Cuenta y app de Meross",
          "App de Google Home",
          "Dispositivo en línea en la app de Meross"
        ],
        "limitations": [
          "La región del servidor afecta a la visibilidad",
          "El control del garaje requiere el tipo de dispositivo correcto",
          "Los dispositivos multicanal necesitan nombres por canal"
        ],
        "steps": [
          "Confirma que el dispositivo está en línea en la app de Meross",
          "Añade el servicio Meross en Google Home",
          "Vincula la cuenta",
          "Asigna habitaciones y prueba el control"
        ]
      }
    },
    "tuya-home-assistant": {
      "fr": {
        "title": "Tuya / Smart Life et Home Assistant : compatibilité",
        "question": "Tuya / Smart Life fonctionne-t-il avec Home Assistant ?",
        "category": "Commande vocale",
        "verdict": "Compatible avec les appareils compatibles",
        "summary": "Home Assistant peut contrôler des appareils Tuya et Smart Life via son intégration officielle Tuya, qui relie le cloud du fabricant au tableau de bord local.",
        "requirements": [
          "Instance Home Assistant",
          "Compte Tuya IoT Platform avec les appareils liés",
          "Intégration Tuya installée"
        ],
        "limitations": [
          "L'intégration officielle passe par le cloud ; le contrôle local nécessite des projets communautaires",
          "Les comptes Smart Life doivent être liés à Tuya IoT Platform",
          "Le nommage des entités suit les noms Tuya"
        ],
        "steps": [
          "Créer un projet Tuya IoT Platform et lier le compte de l'app",
          "Ajouter l'intégration Tuya dans Home Assistant",
          "Autoriser le compte",
          "Affecter les entités et tester"
        ]
      },
      "es": {
        "title": "Compatibilidad de Tuya / Smart Life y Home Assistant",
        "question": "¿Funciona Tuya / Smart Life con Home Assistant?",
        "category": "Control por voz",
        "verdict": "Compatible mediante la integración oficial de Tuya",
        "summary": "Home Assistant puede controlar dispositivos Tuya y Smart Life a través de su integración oficial de Tuya, que enlaza la nube del dispositivo con el panel local.",
        "requirements": [
          "Instancia de Home Assistant",
          "Cuenta de Tuya IoT Platform con los dispositivos vinculados",
          "Integración de Tuya instalada en Home Assistant"
        ],
        "limitations": [
          "La integración oficial se basa en la nube; el control local requiere proyectos de la comunidad",
          "Las cuentas de Smart Life deben vincularse a Tuya IoT Platform",
          "El nombre de las entidades sigue el nombre del dispositivo en Tuya"
        ],
        "steps": [
          "Crea un proyecto en Tuya IoT Platform y vincula la cuenta de la app",
          "Añade la integración de Tuya en Home Assistant",
          "Autoriza la cuenta",
          "Asigna las entidades a áreas y prueba el control"
        ]
      }
    },
    "eufy-security-apple-home": {
      "fr": {
        "title": "eufy Security et Apple Home : compatibilité",
        "question": "eufy Security fonctionne-t-il avec Apple Home ?",
        "category": "Commande vocale",
        "verdict": "Compatible avec les appareils compatibles",
        "summary": "Certaines caméras eufy prennent en charge Apple Home via HomeKit, y compris HomeKit Secure Video lorsque le modèle et le firmware le permettent.",
        "requirements": [
          "Hub Apple Home pour l'accès distant et l'enregistrement",
          "Application et compte eufy Security",
          "Modèle de caméra compatible HomeKit"
        ],
        "limitations": [
          "Tous les modèles eufy ne prennent pas en charge HomeKit",
          "HomeKit Secure Video nécessite un forfait iCloud compatible",
          "Les fonctions diffèrent entre l'app eufy et Apple Home"
        ],
        "steps": [
          "Vérifier la compatibilité HomeKit dans l'app eufy",
          "Mettre à jour le firmware de la caméra",
          "Ajouter le code HomeKit dans l'app Maison",
          "Affecter les pièces et tester l'enregistrement"
        ]
      },
      "es": {
        "title": "Compatibilidad de eufy Security y Apple Home",
        "question": "¿Funciona eufy Security con Apple Home?",
        "category": "Control por voz",
        "verdict": "Compatible en modelos compatibles con HomeKit",
        "summary": "Algunas cámaras eufy admiten Apple Home a través de HomeKit, incluido HomeKit Secure Video cuando el modelo y el firmware lo permiten.",
        "requirements": [
          "Hub de Apple Home para el acceso remoto y la grabación",
          "App y cuenta de eufy Security",
          "Modelo de cámara compatible con HomeKit"
        ],
        "limitations": [
          "No todos los modelos eufy admiten HomeKit",
          "HomeKit Secure Video requiere un plan de iCloud compatible",
          "Las funciones difieren entre la app de eufy y Apple Home"
        ],
        "steps": [
          "Comprueba en la app de eufy si el modelo admite HomeKit",
          "Actualiza el firmware de la cámara",
          "Introduce el código de HomeKit en la app Apple Home",
          "Asigna habitaciones y prueba la grabación"
        ]
      }
    },
    "kasa-matter": {
      "fr": {
        "title": "TP-Link Kasa et Matter : compatibilité",
        "question": "TP-Link Kasa fonctionne-t-il avec Matter ?",
        "category": "Commande vocale",
        "verdict": "Compatible sur les appareils compatibles",
        "summary": "Plusieurs prises, interrupteurs et ampoules Kasa prennent en charge Matter, ce qui permet un appairage direct avec un contrôleur Matter plutôt que via le cloud Kasa.",
        "requirements": [
          "Modèle Kasa compatible Matter",
          "Contrôleur ou hub Matter",
          "Firmware à jour et app Kasa pour la configuration"
        ],
        "limitations": [
          "Les anciens modèles Kasa ne prennent pas en charge Matter",
          "Le firmware doit être mis à jour avant l'appairage",
          "Les vues de consommation restent dans l'app Kasa"
        ],
        "steps": [
          "Mettre à jour le firmware dans l'app Kasa",
          "Trouver le code Matter dans l'app ou sur l'étiquette",
          "Appairer dans l'app du contrôleur",
          "Tester la commutation et la mesure"
        ]
      },
      "es": {
        "title": "Compatibilidad de TP-Link Kasa y Matter",
        "question": "¿Funciona TP-Link Kasa con Matter?",
        "category": "Control por voz",
        "verdict": "Compatible en modelos actuales con firmware Matter",
        "summary": "Varios enchufes, interruptores y bombillas Kasa admiten Matter, lo que les permite emparejarse directamente con un controlador Matter en lugar de usar la integración en la nube de Kasa.",
        "requirements": [
          "Modelo Kasa compatible con Matter",
          "Controlador o hub Matter",
          "Firmware actual y la app de Kasa para la configuración"
        ],
        "limitations": [
          "Los modelos Kasa antiguos no admiten Matter",
          "El firmware debe actualizarse antes del emparejamiento",
          "La vista de medición de energía se mantiene en la app de Kasa"
        ],
        "steps": [
          "Actualiza el firmware del dispositivo en la app de Kasa",
          "Busca el código de emparejamiento Matter en la app o en la etiqueta",
          "Empareja en la app del controlador",
          "Prueba la conmutación y, si se admite, las lecturas de potencia"
        ]
      }
    },
    "tapo-matter": {
      "fr": {
        "title": "TP-Link Tapo et Matter : compatibilité",
        "question": "TP-Link Tapo fonctionne-t-il avec Matter ?",
        "category": "Commande vocale",
        "verdict": "Compatible sur les appareils compatibles",
        "summary": "Certains modèles de prises, ampoules et capteurs Tapo prennent en charge Matter, permettant un appairage direct avec les contrôleurs Matter en plus de l'app Tapo.",
        "requirements": [
          "Modèle Tapo compatible Matter",
          "Contrôleur Matter",
          "Firmware à jour"
        ],
        "limitations": [
          "La prise en charge varie selon le modèle et la région",
          "Certaines fonctions restent propres à l'app",
          "Le déploiement du firmware Matter diffère selon la référence"
        ],
        "steps": [
          "Vérifier la prise en charge Matter sur la page du modèle",
          "Mettre à jour le firmware",
          "Appairer avec le code Matter dans l'app du contrôleur",
          "Vérifier le contrôle et les automatisations locales"
        ]
      },
      "es": {
        "title": "Compatibilidad de TP-Link Tapo y Matter",
        "question": "¿Funciona TP-Link Tapo con Matter?",
        "category": "Control por voz",
        "verdict": "Compatible en modelos seleccionados",
        "summary": "Algunos enchufes, bombillas y sensores Tapo admiten Matter, lo que permite el emparejamiento directo con controladores Matter junto con la app de Tapo.",
        "requirements": [
          "Modelo Tapo compatible con Matter",
          "Controlador Matter",
          "Firmware actualizado"
        ],
        "limitations": [
          "La compatibilidad varía según modelo y región",
          "Algunas funciones siguen siendo exclusivas de la app",
          "El despliegue del firmware Matter difiere por referencia"
        ],
        "steps": [
          "Comprueba en la página del modelo si admite Matter",
          "Actualiza el firmware",
          "Empareja con el código Matter en la app del controlador",
          "Verifica el control y las automatizaciones locales disponibles"
        ]
      }
    },
    "switchbot-matter": {
      "fr": {
        "title": "SwitchBot et Matter : compatibilité",
        "question": "SwitchBot fonctionne-t-il avec Matter ?",
        "category": "Commande vocale",
        "verdict": "Compatible sur les appareils compatibles",
        "summary": "Certains appareils SwitchBot rejoignent les contrôleurs Matter via un hub SwitchBot compatible qui sert de bridge.",
        "requirements": [
          "Hub SwitchBot compatible Matter",
          "Contrôleur Matter",
          "Appareils ajoutés dans l'app SwitchBot"
        ],
        "limitations": [
          "Les appareils uniquement Bluetooth nécessitent le hub",
          "Les appareils exposés dépendent du firmware du hub",
          "Le comportement des scènes diffère entre les apps"
        ],
        "steps": [
          "Mettre à jour le firmware du hub",
          "Activer Matter dans l'app SwitchBot",
          "Appairer le hub dans le contrôleur Matter",
          "Tester le contrôle des appareils"
        ]
      },
      "es": {
        "title": "Compatibilidad de SwitchBot y Matter",
        "question": "¿Funciona SwitchBot con Matter?",
        "category": "Control por voz",
        "verdict": "Compatible a través de hubs compatibles",
        "summary": "Algunos dispositivos SwitchBot llegan a los controladores Matter a través de un hub SwitchBot compatible, que actúa como puente.",
        "requirements": [
          "Hub SwitchBot compatible con Matter",
          "Controlador Matter",
          "Dispositivos añadidos en la app de SwitchBot"
        ],
        "limitations": [
          "Los dispositivos solo Bluetooth necesitan el hub",
          "Qué dispositivos se exponen depende del firmware del hub",
          "El comportamiento de las escenas difiere entre apps"
        ],
        "steps": [
          "Actualiza el firmware del hub",
          "Activa Matter en la app de SwitchBot",
          "Empareja el hub en el controlador Matter",
          "Prueba el control de los dispositivos"
        ]
      }
    },
    "shelly-matter": {
      "fr": {
        "title": "Shelly et Matter : compatibilité",
        "question": "Shelly fonctionne-t-il avec Matter ?",
        "category": "Commande vocale",
        "verdict": "Compatible sur les appareils compatibles",
        "summary": "Les relais et prises Shelly à base de matériel Gen2 ou Gen3 peuvent être exposés aux contrôleurs Matter, en plus du contrôle local et cloud.",
        "requirements": [
          "Appareil Shelly Gen2 ou Gen3",
          "Contrôleur Matter",
          "Firmware avec prise en charge Matter"
        ],
        "limitations": [
          "Les appareils Gen1 ne sont pas pris en charge",
          "Scripts et webhooks locaux sont indépendants de Matter",
          "L'exposition des fonctions dépend du firmware"
        ],
        "steps": [
          "Vérifier la génération de l'appareil",
          "Mettre à jour vers un firmware compatible Matter",
          "Activer Matter et appairer dans l'app du contrôleur",
          "Tester la commutation et le contrôle local"
        ]
      },
      "es": {
        "title": "Compatibilidad de Shelly y Matter",
        "question": "¿Funciona Shelly con Matter?",
        "category": "Control por voz",
        "verdict": "Compatible en dispositivos Gen2 y Gen3 con firmware Matter",
        "summary": "Los relés y enchufes Shelly basados en hardware Gen2 o Gen3 pueden exponerse a controladores Matter, además del control local y en la nube.",
        "requirements": [
          "Dispositivo Shelly Gen2 o Gen3",
          "Controlador Matter",
          "Firmware con soporte de Matter"
        ],
        "limitations": [
          "Los dispositivos Gen1 antiguos no son compatibles",
          "Los scripts locales y los webhooks son independientes de Matter",
          "Las funciones expuestas dependen del firmware"
        ],
        "steps": [
          "Comprueba la generación del dispositivo",
          "Actualiza a un firmware compatible con Matter",
          "Activa Matter y empareja en la app del controlador",
          "Prueba la conmutación y el control local"
        ]
      }
    },
    "aqara-matter": {
      "fr": {
        "title": "Aqara et Matter : compatibilité",
        "question": "Aqara fonctionne-t-il avec Matter ?",
        "category": "Commande vocale",
        "verdict": "Compatible sur les appareils compatibles",
        "summary": "Aqara expose certains appareils aux contrôleurs Matter via des hubs comme le M2 et le M3, qui servent de bridge pour les appareils Zigbee.",
        "requirements": [
          "Hub Aqara compatible",
          "Contrôleur Matter",
          "Application Aqara Home"
        ],
        "limitations": [
          "Les appareils exposés dépendent du hub et du firmware",
          "Certaines fonctions propres à Aqara restent dans son app",
          "Tous les appareils Aqara ne prennent pas en charge le bridge"
        ],
        "steps": [
          "Mettre à jour le firmware du hub",
          "Activer le bridge Matter dans l'app Aqara",
          "Appairer le hub dans le contrôleur Matter",
          "Vérifier les appareils exposés et tester"
        ]
      },
      "es": {
        "title": "Compatibilidad de Aqara y Matter",
        "question": "¿Funciona Aqara con Matter?",
        "category": "Control por voz",
        "verdict": "Compatible a través de hubs Aqara compatibles",
        "summary": "Aqara expone determinados dispositivos a controladores Matter a través de hubs como el M2 y el M3, que actúan de puente entre Zigbee y Matter.",
        "requirements": [
          "Hub Aqara compatible",
          "Controlador Matter",
          "App Aqara Home"
        ],
        "limitations": [
          "Qué dispositivos se exponen depende del modelo de hub y del firmware",
          "Algunas funciones propias de Aqara permanecen en la app de Aqara",
          "No todos los dispositivos Aqara admiten el puente Matter"
        ],
        "steps": [
          "Actualiza el firmware del hub",
          "Activa el puente Matter en la app de Aqara",
          "Empareja el hub en el controlador Matter",
          "Verifica los dispositivos puenteados y prueba el control"
        ]
      }
    }
  },
  "model": {
    "reolink-argus-4-pro": {
      "es": {
        "category": "Cámaras de seguridad",
        "summary": "Cámara 4K sin cables con batería, almacenamiento local y conectividad Wi-Fi.",
        "status": "Vigente",
        "power": "Batería con panel solar opcional",
        "storage": [
          "microSD",
          "Reolink NVR / Home Hub"
        ],
        "specs": {
          "Resolución": "4K UHD",
          "Conectividad": "Wi-Fi",
          "Detección": "Persona / vehículo / animal",
          "Resistencia": "Uso en exterior",
          "Matter": "Verifica modelo y firmware"
        }
      },
      "fr": {
        "category": "Caméras de sécurité",
        "summary": "Caméra 4K sans fil sur batterie, avec stockage local et connexion Wi-Fi.",
        "status": "Actuel",
        "power": "Batterie avec panneau solaire en option",
        "storage": [
          "microSD",
          "Reolink NVR / Home Hub"
        ],
        "specs": {
          "Résolution": "4K UHD",
          "Connectivité": "Wi-Fi",
          "Détection": "Personne / véhicule / animal",
          "Résistance": "Usage extérieur",
          "Matter": "Vérifier le modèle et le firmware"
        }
      }
    },
    "aqara-u200": {
      "es": {
        "category": "Cerraduras inteligentes",
        "summary": "Plataforma de cerradura inteligente de retrofit con soporte Matter y Thread en hardware compatible.",
        "status": "Vigente",
        "power": "Batería",
        "storage": [
          "Registros locales de la cerradura"
        ],
        "specs": {
          "Tipo de cierre": "Retrofit",
          "Acceso": "Huella / PIN / app / llave",
          "Matter": "Compatible con firmware compatible",
          "Thread": "Compatible",
          "Región": "Verifica la versión regional"
        }
      },
      "fr": {
        "category": "Serrures connectées",
        "summary": "Plateforme de serrure connectée en retrofit avec prise en charge Matter et Thread sur matériel compatible.",
        "status": "Actuel",
        "power": "Batterie",
        "storage": [
          "Historique local de la serrure"
        ],
        "specs": {
          "Type de serrure": "Retrofit",
          "Accès": "Empreinte / code / app / clé",
          "Matter": "Pris en charge sur firmware compatible",
          "Thread": "Pris en charge",
          "Région": "Vérifier la version régionale"
        }
      }
    },
    "ring-battery-doorbell-pro": {
      "es": {
        "category": "Videoporteros",
        "summary": "Videoportero con batería, app Ring, flujos en la nube e integración con Alexa.",
        "status": "Vigente",
        "power": "Batería",
        "storage": [
          "Las funciones de suscripción en la nube varían"
        ],
        "specs": {
          "Alimentación": "Batería",
          "Vídeo": "Vídeo HD",
          "Voz": "Integración con Alexa",
          "Suscripción": "Las funciones del plan Ring varían",
          "Región": "Verifica la región del dispositivo y de la cuenta"
        }
      },
      "fr": {
        "category": "Sonneries vidéo",
        "summary": "Sonnette vidéo sur batterie avec application Ring, flux cloud et intégration Alexa.",
        "status": "Actuel",
        "power": "Batterie",
        "storage": [
          "Les fonctions cloud dépendent de l'abonnement"
        ],
        "specs": {
          "Alimentation": "Batterie",
          "Vidéo": "Vidéo HD",
          "Voix": "Intégration Alexa",
          "Abonnement": "Les fonctions du forfait Ring varient",
          "Région": "Vérifier la région de l'appareil et du compte"
        }
      }
    },
    "tapo-c425": {
      "es": {
        "category": "Cámaras de seguridad",
        "summary": "Cámara Wi-Fi de interior/exterior sin cables con almacenamiento local y soporte de la app Tapo.",
        "status": "Vigente",
        "power": "Batería",
        "storage": [
          "microSD",
          "Tapo Care opcional"
        ],
        "specs": {
          "Resolución": "2K",
          "Conectividad": "Wi-Fi",
          "Almacenamiento": "microSD",
          "Resistencia": "Uso en exterior",
          "Voz": "Verifica la integración de voz actual"
        }
      },
      "fr": {
        "category": "Caméras de sécurité",
        "summary": "Caméra Wi-Fi intérieure/extérieure sans fil avec stockage local et prise en charge de l'app Tapo.",
        "status": "Actuel",
        "power": "Batterie",
        "storage": [
          "microSD",
          "Tapo Care en option"
        ],
        "specs": {
          "Résolution": "2K",
          "Connectivité": "Wi-Fi",
          "Stockage": "microSD",
          "Résistance": "Usage extérieur",
          "Voix": "Vérifier l'intégration vocale actuelle"
        }
      }
    },
    "eufy-solocam-s340": {
      "es": {
        "category": "Cámaras de seguridad",
        "summary": "Cámara de batería con doble objetivo, almacenamiento local y gestión desde la app eufy Security.",
        "status": "Vigente",
        "power": "Batería con panel solar opcional",
        "storage": [
          "Almacenamiento local"
        ],
        "specs": {
          "Objetivos": "Doble objetivo",
          "Conectividad": "Wi-Fi",
          "Alimentación": "Batería / solar",
          "Almacenamiento": "Local",
          "Región": "Verifica el modelo y la región de la app"
        }
      },
      "fr": {
        "category": "Caméras de sécurité",
        "summary": "Caméra à double objectif sur batterie, avec stockage local et gestion via l'app eufy Security.",
        "status": "Actuel",
        "power": "Batterie avec panneau solaire en option",
        "storage": [
          "Stockage local"
        ],
        "specs": {
          "Objectifs": "Double objectif",
          "Connectivité": "Wi-Fi",
          "Alimentation": "Batterie / solaire",
          "Stockage": "Local",
          "Région": "Vérifier le modèle et la région de l'app"
        }
      }
    },
    "shelly-pro-1pm": {
      "es": {
        "category": "Electricidad",
        "summary": "Relé inteligente para carril DIN con medición de consumo y opciones de automatización local.",
        "status": "Vigente",
        "power": "Red eléctrica",
        "storage": [
          "Ajustes locales del dispositivo"
        ],
        "specs": {
          "Montaje": "Carril DIN",
          "Medición": "Medida de consumo",
          "Control local": "Según las capacidades del dispositivo",
          "Nube": "Opcional",
          "Trabajo eléctrico": "Requiere instalación por personal cualificado"
        }
      },
      "fr": {
        "category": "Électricité",
        "summary": "Relais connecté pour rail DIN avec mesure de consommation et options d'automatisation locale.",
        "status": "Actuel",
        "power": "Secteur",
        "storage": [
          "Réglages locaux de l'appareil"
        ],
        "specs": {
          "Montage": "Rail DIN",
          "Mesure": "Mesure de consommation",
          "Contrôle local": "Selon les capacités de l'appareil",
          "Cloud": "En option",
          "Travaux électriques": "Installation par un professionnel qualifié requise"
        }
      }
    },
    "govee-h619a": {
      "es": {
        "category": "Iluminación inteligente",
        "summary": "Sistema de tira LED direccionable controlado desde la app Govee Home.",
        "status": "Verifica la revisión actual",
        "power": "Adaptador de red",
        "storage": [
          "Escenas de la app y cuenta en la nube"
        ],
        "specs": {
          "Tipo de producto": "Tira LED",
          "Control": "App Govee Home",
          "Sincronía musical": "Verifica la revisión del modelo",
          "Voz": "Comprueba las integraciones actuales",
          "Instalación": "Uso interior según el modelo"
        }
      },
      "fr": {
        "category": "Éclairage connecté",
        "summary": "Ruban LED adressable contrôlé via l'application Govee Home.",
        "status": "Vérifier la révision actuelle",
        "power": "Adaptateur secteur",
        "storage": [
          "Scènes de l'app et compte cloud"
        ],
        "specs": {
          "Type de produit": "Ruban LED",
          "Contrôle": "Application Govee Home",
          "Synchro musicale": "Vérifier la révision du modèle",
          "Voix": "Vérifier les intégrations actuelles",
          "Installation": "Usage intérieur selon le modèle"
        }
      }
    },
    "oura-ring-4": {
      "es": {
        "category": "Wearables",
        "summary": "Anillo inteligente centrado en el seguimiento del sueño, la readiness y la salud desde la app Oura.",
        "status": "Vigente",
        "power": "Batería recargable",
        "storage": [
          "Cuenta en la nube de Oura"
        ],
        "specs": {
          "Formato": "Anillo inteligente",
          "Uso principal": "Sueño y recuperación",
          "App": "Oura",
          "Suscripción": "Algunas métricas requieren membresía",
          "Región": "Verifica la disponibilidad"
        }
      },
      "fr": {
        "category": "Objets connectés portables",
        "summary": "Bague connectée centrée sur le suivi du sommeil, de la readiness et de la santé via l'app Oura.",
        "status": "Actuel",
        "power": "Batterie rechargeable",
        "storage": [
          "Compte cloud Oura"
        ],
        "specs": {
          "Format": "Bague connectée",
          "Usage principal": "Sommeil et récupération",
          "App": "Oura",
          "Abonnement": "Certaines analyses nécessitent un abonnement",
          "Région": "Vérifier la disponibilité"
        }
      }
    },
    "dji-mini-4-pro": {
      "es": {
        "category": "Drones",
        "summary": "Dron compacto con cámara, detección de obstáculos y flujos de trabajo en la app DJI Fly.",
        "status": "Vigente",
        "power": "Batería recargable",
        "storage": [
          "microSD"
        ],
        "specs": {
          "Clase de peso": "Menos de 249 g según la configuración",
          "Cámara": "Flujo de vídeo 4K",
          "Detección de obstáculos": "Compatible",
          "App": "DJI Fly",
          "Normativa de vuelo": "Verifica la normativa local"
        }
      },
      "fr": {
        "category": "Drones",
        "summary": "Drone compact avec caméra, détection d'obstacles et flux de travail dans l'app DJI Fly.",
        "status": "Actuel",
        "power": "Batterie rechargeable",
        "storage": [
          "microSD"
        ],
        "specs": {
          "Classe de poids": "Moins de 249 g selon la configuration",
          "Caméra": "Flux vidéo 4K",
          "Détection d'obstacles": "Prise en charge",
          "App": "DJI Fly",
          "Réglementation de vol": "Vérifier la réglementation locale"
        }
      }
    },
    "wyze-cam-v4": {
      "es": {
        "category": "Cámaras de seguridad",
        "summary": "Cámara Wi-Fi de interior/exterior gestionada desde la app Wyze.",
        "status": "Vigente",
        "power": "Red eléctrica",
        "storage": [
          "microSD",
          "Cam Plus opcional"
        ],
        "specs": {
          "Resolución": "Clase 2.5K",
          "Conectividad": "Wi-Fi",
          "Almacenamiento": "microSD",
          "Suscripción": "Funciones en la nube opcionales",
          "Resistencia": "Verifica los requisitos de instalación en exterior"
        }
      },
      "fr": {
        "category": "Caméras de sécurité",
        "summary": "Caméra Wi-Fi intérieure/extérieure gérée via l'application Wyze.",
        "status": "Actuel",
        "power": "Secteur",
        "storage": [
          "microSD",
          "Cam Plus en option"
        ],
        "specs": {
          "Résolution": "Classe 2.5K",
          "Connectivité": "Wi-Fi",
          "Stockage": "microSD",
          "Abonnement": "Fonctions cloud en option",
          "Résistance": "Vérifier les conditions d'installation extérieure"
        }
      }
    },
    "switchbot-hub-2": {
      "es": {
        "category": "Hubs de hogar conectado",
        "summary": "Hub compatible con Matter para dispositivos y escenas SwitchBot compatibles.",
        "status": "Vigente",
        "power": "Red eléctrica",
        "storage": [
          "La compatibilidad de automatización local varía"
        ],
        "specs": {
          "Matter": "Compatible",
          "Temperatura y humedad": "Sensores integrados según el modelo",
          "Automatización": "Escenas locales y en la app",
          "Voz": "Verifica las funciones actuales del ecosistema"
        }
      },
      "fr": {
        "category": "Hubs domotiques",
        "summary": "Hub compatible Matter pour les appareils et scènes SwitchBot compatibles.",
        "status": "Actuel",
        "power": "Secteur",
        "storage": [
          "La prise en charge de l'automatisation locale varie"
        ],
        "specs": {
          "Matter": "Pris en charge",
          "Température et humidité": "Capteurs intégrés selon le modèle",
          "Automatisation": "Scènes locales et via l'app",
          "Voix": "Vérifier les fonctions actuelles de l'écosystème"
        }
      }
    },
    "roborock-qrevo-curv": {
      "es": {
        "category": "Robots aspiradora",
        "summary": "Sistema de robot aspiradora y base gestionado desde la app Roborock.",
        "status": "Verifica el modelo regional actual",
        "power": "Sistema de base recargable",
        "storage": [
          "Cuenta en la nube y datos de la app"
        ],
        "specs": {
          "Tipo de producto": "Robot aspiradora",
          "App": "Roborock",
          "Mapas": "Gestionados desde la app",
          "Voz": "Verifica las integraciones actuales",
          "Manual": "Comprueba el número de modelo regional"
        }
      },
      "fr": {
        "category": "Aspirateurs robots",
        "summary": "Système d'aspirateur robot et base géré via l'application Roborock.",
        "status": "Vérifier le modèle régional actuel",
        "power": "Système de base rechargeable",
        "storage": [
          "Compte cloud et données de l'app"
        ],
        "specs": {
          "Type de produit": "Aspirateur robot",
          "App": "Roborock",
          "Cartes": "Gérées par l'app",
          "Voix": "Vérifier les intégrations actuelles",
          "Manuel": "Vérifier la référence du modèle régional"
        }
      }
    },
    "tapo-c220": {
      "es": {
        "category": "Cámaras de seguridad",
        "summary": "Cámara Wi-Fi de interior con giro e inclinación gestionada desde la app Tapo.",
        "status": "Vigente - verifica la variante regional",
        "power": "Red eléctrica",
        "storage": [
          "microSD"
        ],
        "specs": {
          "Resolución": "Clase 2K - verifica la revisión del modelo",
          "Montaje": "Interior",
          "Giro e inclinación": "Compatible",
          "Visión nocturna": "Infrarrojos",
          "Región": "Verifica el modelo regional"
        }
      },
      "fr": {
        "category": "Caméras de sécurité",
        "summary": "Caméra Wi-Fi intérieure à rotation et inclinaison gérée depuis l'app Tapo.",
        "status": "Actuel - vérifier la variante régionale",
        "power": "Secteur",
        "storage": [
          "microSD"
        ],
        "specs": {
          "Résolution": "Classe 2K - vérifier la révision du modèle",
          "Montage": "Intérieur",
          "Rotation et inclinaison": "Pris en charge",
          "Vision nocturne": "Infrarouge",
          "Région": "Vérifier le modèle régional"
        }
      }
    },
    "wyze-cam-pan-v3": {
      "es": {
        "category": "Cámaras de seguridad",
        "summary": "Cámara Wi-Fi de interior y exterior con giro e inclinación gestionada desde la app Wyze.",
        "status": "Vigente - verifica disponibilidad regional",
        "power": "Red eléctrica",
        "storage": [
          "microSD",
          "Cam Plus opcional"
        ],
        "specs": {
          "Resolución": "Clase 1080p - verifica la revisión del modelo",
          "Montaje": "Interior y exterior",
          "Giro e inclinación": "Compatible",
          "Suscripción": "Funciones en la nube opcionales",
          "Región": "Verifica el modelo regional"
        }
      },
      "fr": {
        "category": "Caméras de sécurité",
        "summary": "Caméra Wi-Fi intérieure et extérieure à rotation gérée depuis l'app Wyze.",
        "status": "Actuel - vérifier la disponibilité régionale",
        "power": "Secteur",
        "storage": [
          "microSD",
          "Cam Plus en option"
        ],
        "specs": {
          "Résolution": "Classe 1080p - vérifier la révision du modèle",
          "Montage": "Intérieur et extérieur",
          "Rotation et inclinaison": "Pris en charge",
          "Abonnement": "Fonctions cloud en option",
          "Région": "Vérifier le modèle régional"
        }
      }
    },
    "aqara-hub-m3": {
      "es": {
        "category": "Hubs de hogar conectado",
        "summary": "Bridge Matter y border router Thread que además expone los dispositivos Zigbee de Aqara a ecosistemas de terceros.",
        "status": "Vigente - verifica firmware y variante regional",
        "power": "Red eléctrica",
        "storage": [
          "Automatización local en el hub"
        ],
        "specs": {
          "Función": "Bridge Matter y border router Thread",
          "Thread": "Border router",
          "Matter": "Bridge para dispositivos Aqara",
          "Automatización local": "Compatible en el hub",
          "Región": "Verifica el modelo regional"
        }
      },
      "fr": {
        "category": "Hubs domotiques",
        "summary": "Bridge Matter et border router Thread qui expose aussi les appareils Zigbee Aqara aux écosystèmes tiers.",
        "status": "Actuel - vérifier le firmware et la variante régionale",
        "power": "Secteur",
        "storage": [
          "Automatisation locale sur le hub"
        ],
        "specs": {
          "Rôle": "Bridge Matter et border router Thread",
          "Thread": "Border router",
          "Matter": "Bridge pour appareils Aqara",
          "Automatisation locale": "Pris en charge sur le hub",
          "Région": "Vérifier le modèle régional"
        }
      }
    },
    "philips-hue-bridge": {
      "es": {
        "category": "Hubs de hogar conectado",
        "summary": "Controlador Zigbee para las luces Hue que además integra el sistema en Apple Home, Google Home, Alexa y Matter.",
        "status": "Vigente - verifica la versión que se vende en tu región",
        "power": "Red eléctrica",
        "storage": [
          "Cuenta Hue para escenas y automatizaciones"
        ],
        "specs": {
          "Función": "Coordinador Zigbee",
          "Ethernet": "Cableado al router",
          "Matter": "Expuesto a través del bridge",
          "Voz": "Apple Home, Google Home, Alexa",
          "Región": "Verifica el tipo de enchufe y el kit regional"
        }
      },
      "fr": {
        "category": "Hubs domotiques",
        "summary": "Contrôleur Zigbee des lampes Hue qui intègre aussi le système à Apple Home, Google Home, Alexa et Matter.",
        "status": "Actuel - vérifier la version vendue dans votre région",
        "power": "Secteur",
        "storage": [
          "Compte Hue pour scènes et automatisations"
        ],
        "specs": {
          "Rôle": "Coordinateur Zigbee",
          "Ethernet": "Relié au routeur par câble",
          "Matter": "Exposé via le bridge",
          "Voix": "Apple Home, Google Home, Alexa",
          "Région": "Vérifier le type de prise et le kit régional"
        }
      }
    },
    "sonoff-zigbee-bridge-pro": {
      "es": {
        "category": "Hubs de hogar conectado",
        "summary": "Bridge de Wi-Fi a Zigbee que expone dispositivos Zigbee de SONOFF y de terceros a la app eWeLink.",
        "status": "Vigente - verifica la revisión del modelo",
        "power": "Red eléctrica por USB",
        "storage": [
          "Escenas locales en el bridge"
        ],
        "specs": {
          "Función": "Coordinador Zigbee",
          "Puente": "Zigbee a Wi-Fi",
          "Servidor": "Verifica la región de eWeLink",
          "Voz": "Comprueba las integraciones actuales",
          "Región": "Verifica la variante regional"
        }
      },
      "fr": {
        "category": "Hubs domotiques",
        "summary": "Bridge Wi-Fi vers Zigbee qui expose les appareils Zigbee SONOFF et tiers à l'application eWeLink.",
        "status": "Actuel - vérifier la révision du modèle",
        "power": "Secteur via USB",
        "storage": [
          "Scènes locales sur le bridge"
        ],
        "specs": {
          "Rôle": "Coordinateur Zigbee",
          "Pont": "Zigbee vers Wi-Fi",
          "Serveur": "Vérifier la région eWeLink",
          "Voix": "Vérifier les intégrations actuelles",
          "Région": "Vérifier la variante régionale"
        }
      }
    },
    "switchbot-bot": {
      "es": {
        "category": "Hogar conectado",
        "summary": "Pulsador a batería que convierte un botón o interruptor existente en uno controlado en remoto.",
        "status": "Vigente - verifica la revisión del modelo",
        "power": "Batería",
        "storage": [
          "Programación local en la app"
        ],
        "specs": {
          "Formato": "Pulsador de interruptor",
          "Control": "Bluetooth desde la app",
          "Acceso remoto": "Requiere un hub SwitchBot",
          "Matter": "A través de un hub compatible",
          "Región": "Verifica la variante regional"
        }
      },
      "fr": {
        "category": "Maison connectée",
        "summary": "Appareil à pile qui appuie sur un bouton ou un interrupteur existant pour le contrôler à distance.",
        "status": "Actuel - vérifier la révision du modèle",
        "power": "Pile",
        "storage": [
          "Programmation locale dans l'app"
        ],
        "specs": {
          "Format": "Appui sur interrupteur",
          "Contrôle": "Bluetooth depuis l'app",
          "Accès à distance": "Nécessite un hub SwitchBot",
          "Matter": "Via un hub compatible",
          "Région": "Vérifier la variante régionale"
        }
      }
    },
    "eufy-indoor-cam-s350": {
      "es": {
        "category": "Cámaras de seguridad",
        "summary": "Cámara de interior con doble objetivo, giro e inclinación gestionada desde la app eufy Security.",
        "status": "Vigente - verifica la variante regional",
        "power": "Red eléctrica",
        "storage": [
          "microSD"
        ],
        "specs": {
          "Objetivos": "Doble objetivo",
          "Montaje": "Interior",
          "Giro e inclinación": "Compatible",
          "Almacenamiento": "microSD",
          "Región": "Verifica el modelo regional"
        }
      },
      "fr": {
        "category": "Caméras de sécurité",
        "summary": "Caméra intérieure à double objectif avec rotation gérée depuis l'app eufy Security.",
        "status": "Actuel - vérifier la variante régionale",
        "power": "Secteur",
        "storage": [
          "microSD"
        ],
        "specs": {
          "Objectifs": "Double objectif",
          "Montage": "Intérieur",
          "Rotation et inclinaison": "Pris en charge",
          "Stockage": "microSD",
          "Région": "Vérifier le modèle régional"
        }
      }
    },
    "roborock-q7-max": {
      "es": {
        "category": "Robots aspiradora",
        "summary": "Robot aspiradora y friegasuelos gestionado desde la app Roborock con limpieza basada en mapa.",
        "status": "Vigente - verifica la variante regional",
        "power": "Base de carga",
        "storage": [
          "Cuenta de la app y datos de mapas"
        ],
        "specs": {
          "Tipo de producto": "Robot aspiradora y friegasuelos",
          "Base": "Base de carga - el modelo plus añade vaciado automático",
          "Mapas": "Gestionados desde la app",
          "Voz": "Verifica las integraciones actuales",
          "Región": "Verifica el modelo regional"
        }
      },
      "fr": {
        "category": "Aspirateurs robots",
        "summary": "Aspirateur robot laveur géré depuis l'application Roborock avec nettoyage par carte.",
        "status": "Actuel - vérifier la variante régionale",
        "power": "Base de charge",
        "storage": [
          "Compte de l'app et données de cartes"
        ],
        "specs": {
          "Type de produit": "Aspirateur robot laveur",
          "Base": "Base de charge - le modèle plus ajoute le vidage automatique",
          "Cartes": "Gérées par l'application",
          "Voix": "Vérifier les intégrations actuelles",
          "Région": "Vérifier le modèle régional"
        }
      }
    },
    "dji-osmo-pocket-3": {
      "es": {
        "category": "Cámaras",
        "summary": "Cámara de mano con estabilizador y pantalla giratoria que se empareja con la app DJI Mimo por Wi-Fi y Bluetooth.",
        "status": "Vigente - verifica el contenido del kit regional",
        "power": "Batería recargable",
        "storage": [
          "microSD"
        ],
        "specs": {
          "Formato": "Cámara de mano con gimbal",
          "Estabilización": "Gimbal de 3 ejes",
          "App": "DJI Mimo",
          "Almacenamiento": "microSD",
          "Región": "Verifica el kit regional"
        }
      },
      "fr": {
        "category": "Caméras",
        "summary": "Caméra portative sur nacelle avec écran rotatif, associée à l'application DJI Mimo en Wi-Fi et Bluetooth.",
        "status": "Actuel - vérifier le contenu du kit régional",
        "power": "Batterie rechargeable",
        "storage": [
          "microSD"
        ],
        "specs": {
          "Format": "Caméra portative sur nacelle",
          "Stabilisation": "Nacelle 3 axes",
          "App": "DJI Mimo",
          "Stockage": "microSD",
          "Région": "Vérifier le kit régional"
        }
      }
    },
    "withings-body-plus": {
      "es": {
        "category": "Dispositivos de salud",
        "summary": "Báscula conectada que sincroniza peso y composición corporal con la app Withings por Wi-Fi o Bluetooth.",
        "status": "Vigente - verifica la disponibilidad regional",
        "power": "Pilas",
        "storage": [
          "Cuenta en la nube de Withings"
        ],
        "specs": {
          "Tipo de producto": "Báscula conectada",
          "Mediciones": "Peso y composición corporal - verifica la lista actual de métricas",
          "Sincronización": "Wi-Fi o Bluetooth",
          "App": "Withings",
          "Región": "Verifica la disponibilidad regional"
        }
      },
      "fr": {
        "category": "Appareils de santé",
        "summary": "Balance connectée qui synchronise poids et composition corporelle avec l'application Withings en Wi-Fi ou Bluetooth.",
        "status": "Actuel - vérifier la disponibilité régionale",
        "power": "Piles",
        "storage": [
          "Compte cloud Withings"
        ],
        "specs": {
          "Type de produit": "Balance connectée",
          "Mesures": "Poids et composition corporelle - vérifier la liste actuelle des mesures",
          "Synchronisation": "Wi-Fi ou Bluetooth",
          "App": "Withings",
          "Région": "Vérifier la disponibilité régionale"
        }
      }
    },
    "ring-indoor-cam": {
      "es": {
        "category": "Cámaras de seguridad",
        "summary": "Cámara de interior alimentada por red, gestionada desde la app Ring con flujos de Ring y Alexa.",
        "status": "Vigente - verifica la variante regional",
        "power": "Red eléctrica",
        "storage": [
          "Las funciones de suscripción en la nube varían"
        ],
        "specs": {
          "Montaje": "Interior",
          "Vídeo": "Vídeo HD - verifica la revisión",
          "Voz": "Integración con Alexa",
          "Suscripción": "Plan Ring opcional",
          "Región": "Verifica el dispositivo y la región de la cuenta"
        }
      },
      "fr": {
        "category": "Caméras de sécurité",
        "summary": "Caméra intérieure sur secteur gérée depuis l'app Ring avec les flux Ring et Alexa.",
        "status": "Actuel - vérifier la variante régionale",
        "power": "Secteur",
        "storage": [
          "Les fonctions cloud dépendent de l'abonnement"
        ],
        "specs": {
          "Montage": "Intérieur",
          "Vidéo": "Vidéo HD - vérifier la révision",
          "Voix": "Intégration Alexa",
          "Abonnement": "Forfait Ring en option",
          "Région": "Vérifier l'appareil et la région du compte"
        }
      }
    },
    "tapo-p110": {
      "es": {
        "category": "Electricidad",
        "summary": "Enchufe inteligente con medición de consumo gestionado desde la app Tapo.",
        "status": "Vigente - verifica el tipo de enchufe regional",
        "power": "Red eléctrica",
        "storage": [
          "Cuenta de la app e historial de consumo"
        ],
        "specs": {
          "Medición": "Medición de consumo",
          "Programación": "Programaciones y temporizadores en la app",
          "Voz": "Verifica las integraciones actuales",
          "Enchufe": "Verifica el estándar de enchufe regional",
          "Región": "Verifica el modelo regional"
        }
      },
      "fr": {
        "category": "Électricité",
        "summary": "Prise connectée avec mesure de consommation gérée depuis l'app Tapo.",
        "status": "Actuel - vérifier le type de prise régional",
        "power": "Secteur",
        "storage": [
          "Compte de l'app et historique"
        ],
        "specs": {
          "Mesure": "Mesure de consommation",
          "Programmation": "Programmes et minuteries dans l'app",
          "Voix": "Vérifier les intégrations actuelles",
          "Prise": "Vérifier la norme de prise régionale",
          "Région": "Vérifier le modèle régional"
        }
      }
    },
    "nanoleaf-shapes": {
      "es": {
        "category": "Iluminación inteligente",
        "summary": "Paneles de luz modulares controlados desde la app Nanoleaf, con soporte Matter en firmware actual.",
        "status": "Vigente - verifica controlador y firmware",
        "power": "Red eléctrica",
        "storage": [
          "Cuenta de la app para escenas"
        ],
        "specs": {
          "Tipo de producto": "Paneles de luz modulares",
          "Control": "App Nanoleaf",
          "Matter": "Verifica firmware y controlador",
          "Thread": "Compatible con controladores y firmware compatibles",
          "Región": "Verifica el kit regional"
        }
      },
      "fr": {
        "category": "Éclairage connecté",
        "summary": "Panneaux lumineux modulaires contrôlés depuis l'app Nanoleaf, avec prise en charge Matter sur firmware actuel.",
        "status": "Actuel - vérifier contrôleur et firmware",
        "power": "Secteur",
        "storage": [
          "Compte de l'app pour les scènes"
        ],
        "specs": {
          "Type de produit": "Panneaux lumineux modulaires",
          "Contrôle": "App Nanoleaf",
          "Matter": "Vérifier firmware et contrôleur",
          "Thread": "Pris en charge selon contrôleur et firmware",
          "Région": "Vérifier le kit régional"
        }
      }
    },
    "wyze-plug": {
      "es": {
        "category": "Electricidad",
        "summary": "Enchufe inteligente Wi-Fi compacto gestionado desde la app Wyze.",
        "status": "Vigente - verifica el tipo de enchufe regional",
        "power": "Red eléctrica",
        "storage": [
          "Cuenta de la app para programaciones"
        ],
        "specs": {
          "Formato": "Enchufable",
          "Programación": "Programaciones y temporizadores en la app",
          "Voz": "Verifica las integraciones actuales",
          "Enchufe": "Verifica el estándar de enchufe regional",
          "Región": "Verifica el modelo regional"
        }
      },
      "fr": {
        "category": "Électricité",
        "summary": "Prise connectée Wi-Fi compacte gérée depuis l'app Wyze.",
        "status": "Actuel - vérifier le type de prise régional",
        "power": "Secteur",
        "storage": [
          "Compte de l'app pour les programmes"
        ],
        "specs": {
          "Format": "Sur prise",
          "Programmation": "Programmes et minuteries dans l'app",
          "Voix": "Vérifier les intégrations actuelles",
          "Prise": "Vérifier la norme de prise régionale",
          "Région": "Vérifier le modèle régional"
        }
      }
    },
    "aqara-motion-sensor-p2": {
      "es": {
        "category": "Sensores",
        "summary": "Sensor de movimiento basado en Thread que se empareja directamente con controladores Matter o mediante un hub Aqara.",
        "status": "Vigente - verifica hub y firmware compatibles",
        "power": "Batería",
        "storage": [
          "La automatización se ejecuta en el controlador"
        ],
        "specs": {
          "Sensor": "Detección de movimiento y luz - verifica la lista actual de métricas",
          "Protocolo": "Thread",
          "Matter": "Se empareja con controladores Matter",
          "Hub": "Hub Aqara opcional para funciones avanzadas",
          "Región": "Verifica el modelo regional"
        }
      },
      "fr": {
        "category": "Capteurs",
        "summary": "Capteur de mouvement Thread qui s'appaire directement avec les contrôleurs Matter ou via un hub Aqara.",
        "status": "Actuel - vérifier hub et firmware compatibles",
        "power": "Pile",
        "storage": [
          "L'automatisation s'exécute dans le contrôleur"
        ],
        "specs": {
          "Capteur": "Mouvement et luminosité - vérifier la liste actuelle des mesures",
          "Protocole": "Thread",
          "Matter": "S'appaire avec les contrôleurs Matter",
          "Hub": "Hub Aqara en option pour les fonctions avancées",
          "Région": "Vérifier le modèle régional"
        }
      }
    },
    "switchbot-curtain-3": {
      "es": {
        "category": "Hogar conectado",
        "summary": "Motor de cortina gestionado desde la app SwitchBot, con acceso remoto mediante un hub.",
        "status": "Vigente - verifica la compatibilidad del riel",
        "power": "Batería recargable o panel solar",
        "storage": [
          "Programaciones de la app"
        ],
        "specs": {
          "Tipo de producto": "Robot de cortina",
          "Rieles": "Verifica los tipos de barra y riel compatibles",
          "Acceso remoto": "Requiere un hub SwitchBot",
          "Matter": "A través de un hub compatible",
          "Región": "Verifica la variante regional"
        }
      },
      "fr": {
        "category": "Maison connectée",
        "summary": "Moteur de rideau géré depuis l'app SwitchBot, avec accès à distance via un hub.",
        "status": "Actuel - vérifier la compatibilité du rail",
        "power": "Batterie rechargeable ou panneau solaire",
        "storage": [
          "Programmes de l'app"
        ],
        "specs": {
          "Type de produit": "Robot de rideau",
          "Rails": "Vérifier les types de tringle et rail",
          "Accès à distance": "Nécessite un hub SwitchBot",
          "Matter": "Via un hub compatible",
          "Région": "Vérifier la variante régionale"
        }
      }
    },
    "shelly-plus-1pm": {
      "es": {
        "category": "Electricidad",
        "summary": "Relé para carril DIN o empotrado con medición de potencia y soporte de automatización local.",
        "status": "Vigente - verifica la variante regional",
        "power": "Red eléctrica",
        "storage": [
          "Ajustes locales del dispositivo"
        ],
        "specs": {
          "Montaje": "Empotrado o carril DIN con adaptador",
          "Medición": "Medida de consumo",
          "Control local": "API local y scripts",
          "Nube": "Opcional",
          "Trabajo eléctrico": "Requiere instalación por personal cualificado"
        }
      },
      "fr": {
        "category": "Électricité",
        "summary": "Relais encastrable ou pour rail DIN avec mesure de puissance et automatisation locale.",
        "status": "Actuel - vérifier la variante régionale",
        "power": "Secteur",
        "storage": [
          "Réglages locaux de l'appareil"
        ],
        "specs": {
          "Montage": "Encastré ou rail DIN avec adaptateur",
          "Mesure": "Mesure de consommation",
          "Contrôle local": "API locale et scripts",
          "Cloud": "En option",
          "Travaux électriques": "Installation par un professionnel qualifié requise"
        }
      }
    },
    "philips-hue-white-color-bulb": {
      "es": {
        "category": "Iluminación inteligente",
        "summary": "Bombilla LED de color controlada desde la app Hue e integrada con Alexa, Google Home y Apple Home a través del sistema Hue.",
        "status": "Vigente - verifica el casquillo y el kit regional",
        "power": "Red eléctrica",
        "storage": [
          "Cuenta Hue para escenas"
        ],
        "specs": {
          "Tipo de producto": "Bombilla LED de color",
          "Casquillo": "Verifica E27, E14 o GU10",
          "Bridge": "Recomendado para todas las funciones",
          "Voz": "Apple Home, Google Home, Alexa",
          "Región": "Verifica el kit regional"
        }
      },
      "fr": {
        "category": "Éclairage connecté",
        "summary": "Ampoule LED couleur contrôlée depuis l'app Hue et intégrée à Alexa, Google Home et Apple Home via le système Hue.",
        "status": "Actuel - vérifier le culot et le kit régional",
        "power": "Secteur",
        "storage": [
          "Compte Hue pour les scènes"
        ],
        "specs": {
          "Type de produit": "Ampoule LED couleur",
          "Culot": "Vérifier E27, E14 ou GU10",
          "Bridge": "Recommandé pour toutes les fonctions",
          "Voix": "Apple Home, Google Home, Alexa",
          "Région": "Vérifier le kit régional"
        }
      }
    },
    "dji-mini-4k": {
      "es": {
        "category": "Drones",
        "summary": "Dron compacto con cámara que se empareja con la app DJI Fly para control de vuelo y transferencia de archivos.",
        "status": "Vigente - verifica el kit regional y la normativa",
        "power": "Batería recargable",
        "storage": [
          "microSD"
        ],
        "specs": {
          "Clase de peso": "Verifica el peso actual y el umbral de registro en tu país",
          "Cámara": "Flujo de vídeo 4K - verifica la especificación",
          "App": "DJI Fly",
          "Normativa de vuelo": "Verifica registro y normas locales",
          "Región": "Verifica el kit regional"
        }
      },
      "fr": {
        "category": "Drones",
        "summary": "Drone compact avec caméra, associé à l'app DJI Fly pour le pilotage et le transfert de médias.",
        "status": "Actuel - vérifier le kit régional et la réglementation",
        "power": "Batterie rechargeable",
        "storage": [
          "microSD"
        ],
        "specs": {
          "Classe de poids": "Vérifier le poids actuel et le seuil d'enregistrement dans votre pays",
          "Caméra": "Flux vidéo 4K - vérifier la spécification",
          "App": "DJI Fly",
          "Réglementation de vol": "Vérifier l'enregistrement et les règles locales",
          "Région": "Vérifier le kit régional"
        }
      }
    },
    "roborock-s8": {
      "es": {
        "category": "Robots aspiradora",
        "summary": "Robot aspiradora y friegasuelos con limpieza basada en mapa gestionado desde la app Roborock.",
        "status": "Vigente - verifica la variante regional",
        "power": "Base de carga",
        "storage": [
          "Cuenta de la app y datos de mapas"
        ],
        "specs": {
          "Tipo de producto": "Robot aspiradora y friegasuelos",
          "Base": "Base de carga - el modelo plus añade vaciado automático",
          "Mapas": "Gestionados desde la app",
          "Voz": "Verifica las integraciones actuales",
          "Región": "Verifica el modelo regional"
        }
      },
      "fr": {
        "category": "Aspirateurs robots",
        "summary": "Aspirateur robot laveur avec nettoyage par carte géré depuis l'application Roborock.",
        "status": "Actuel - vérifier la variante régionale",
        "power": "Base de charge",
        "storage": [
          "Compte de l'app et données de cartes"
        ],
        "specs": {
          "Type de produit": "Aspirateur robot laveur",
          "Base": "Base de charge - le modèle plus ajoute le vidage automatique",
          "Cartes": "Gérées par l'application",
          "Voix": "Vérifier les intégrations actuelles",
          "Région": "Vérifier le modèle régional"
        }
      }
    }
  },
  "troubleshooting": {
    "camera-will-not-connect-to-wifi": {
      "es": {
        "title": "La cámara no se conecta al Wi-Fi",
        "symptom": "Una cámara de seguridad no puede unirse a la red Wi-Fi local o se desconecta repetidamente.",
        "category": "Cámaras de seguridad",
        "escalation": "Si la cámara se conecta cerca del router pero falla fuera, mejora la cobertura Wi-Fi con un nodo mesh o un punto de acceso en lugar de reiniciar la cámara una y otra vez.",
        "appliesTo": [
          "Cámaras Wi-Fi",
          "Cámaras con batería",
          "Cámaras de interior y exterior"
        ],
        "likelyCauses": [
          "Cámara solo de 2,4 GHz emparejada a una red de 5 GHz",
          "Señal débil en el punto de instalación",
          "Contraseña o modo de seguridad Wi-Fi incorrectos",
          "Aislamiento del router o restricciones de la red de invitados",
          "Cámara ya vinculada a otra cuenta"
        ],
        "quickChecks": [
          "Confirma si la cámara admite 2,4 GHz y/o 5 GHz",
          "Acerca la cámara al router para la configuración",
          "Confirma la contraseña y el SSID",
          "Desactiva el aislamiento de clientes durante la configuración",
          "Elimina la entrada antigua del dispositivo en la app si es necesario"
        ],
        "steps": [
          "Restablece la cámara de fábrica con el procedimiento oficial",
          "Conecta el teléfono a la red de 2,4 GHz prevista",
          "Abre la app oficial e inicia un emparejamiento nuevo",
          "Introduce las credenciales Wi-Fi correctas",
          "Espera la confirmación de emparejamiento antes de mover la cámara",
          "Prueba la visualización en directo en el punto de instalación final"
        ]
      },
      "fr": {
        "title": "La caméra ne se connecte pas au Wi-Fi",
        "symptom": "Une caméra de sécurité ne parvient pas à rejoindre le réseau Wi-Fi local ou se déconnecte régulièrement.",
        "category": "Caméras de sécurité",
        "escalation": "Si la caméra se connecte près du routeur mais échoue à distance, améliorez la couverture Wi-Fi avec un nœud mesh ou un point d'accès plutôt que de réinitialiser la caméra sans cesse.",
        "appliesTo": [
          "Caméras Wi-Fi",
          "Caméras sur batterie",
          "Caméras intérieures et extérieures"
        ],
        "likelyCauses": [
          "Caméra 2,4 GHz uniquement associée à un réseau 5 GHz",
          "Signal faible au point d'installation",
          "Mot de passe ou mode de sécurité Wi-Fi incorrects",
          "Isolation du routeur ou restrictions du réseau invité",
          "Caméra déjà associée à un autre compte"
        ],
        "quickChecks": [
          "Vérifier si la caméra prend en charge le 2,4 GHz et/ou le 5 GHz",
          "Rapprocher la caméra du routeur pour la configuration",
          "Confirmer le mot de passe et le SSID",
          "Désactiver l'isolation des clients pendant la configuration",
          "Supprimer l'ancienne entrée d'appareil dans l'app si nécessaire"
        ],
        "steps": [
          "Réinitialiser la caméra selon la procédure officielle",
          "Connecter le téléphone au réseau 2,4 GHz prévu",
          "Ouvrir l'application officielle et lancer un nouvel appairage",
          "Saisir les bons identifiants Wi-Fi",
          "Attendre la confirmation d'appairage avant de déplacer la caméra",
          "Tester l'affichage en direct au point d'installation final"
        ]
      }
    },
    "matter-device-will-not-pair": {
      "es": {
        "title": "El dispositivo Matter no se empareja",
        "symptom": "El código de configuración Matter falla, el dispositivo no se detecta o el emparejamiento se detiene antes de terminar.",
        "category": "Matter",
        "escalation": "En dispositivos Thread, verifica que haya un border router Thread compatible en línea y que IPv6 esté activado en la red.",
        "appliesTo": [
          "Dispositivos Matter",
          "Apple Home",
          "Google Home",
          "Alexa",
          "SmartThings"
        ],
        "likelyCauses": [
          "El dispositivo no está en modo de emparejamiento",
          "El teléfono está en la red Wi-Fi o Thread incorrecta",
          "Border router Thread no disponible",
          "Firmware del controlador antiguo",
          "Código de configuración ya usado o dispositivo aún emparejado en otro lugar"
        ],
        "quickChecks": [
          "Confirma que el dispositivo tiene certificación Matter",
          "Comprueba si el dispositivo usa Wi-Fi o Thread",
          "Actualiza el firmware del controlador y del dispositivo",
          "Confirma que el Bluetooth está activado durante la puesta en marcha",
          "Elimina emparejamientos obsoletos de otros ecosistemas"
        ],
        "steps": [
          "Restablece el dispositivo Matter con el procedimiento del fabricante",
          "Abre la app del controlador previsto",
          "Escanea el código QR Matter o introduce el código manual",
          "Mantén el teléfono cerca del dispositivo durante la puesta en marcha",
          "Completa el nombre y la asignación de habitación",
          "Prueba el control local antes de añadir un segundo controlador"
        ]
      },
      "fr": {
        "title": "L'appareil Matter ne s'appaire pas",
        "symptom": "Le code de configuration Matter échoue, l'appareil n'est pas détecté ou l'appairage s'arrête avant la fin.",
        "category": "Matter",
        "escalation": "Pour les appareils Thread, vérifiez qu'un border router Thread compatible est en ligne et qu'IPv6 est activé sur le réseau.",
        "appliesTo": [
          "Appareils Matter",
          "Apple Home",
          "Google Home",
          "Alexa",
          "SmartThings"
        ],
        "likelyCauses": [
          "L'appareil n'est pas en mode appairage",
          "Le téléphone est sur le mauvais réseau Wi-Fi ou Thread",
          "Border router Thread indisponible",
          "Firmware du contrôleur ancien",
          "Code de configuration déjà utilisé ou appareil encore associé ailleurs"
        ],
        "quickChecks": [
          "Confirmer que l'appareil est certifié Matter",
          "Vérifier si l'appareil utilise le Wi-Fi ou Thread",
          "Mettre à jour le firmware du contrôleur et de l'appareil",
          "Vérifier que le Bluetooth est activé pendant l'installation",
          "Supprimer les appairages obsolètes des autres écosystèmes"
        ],
        "steps": [
          "Réinitialiser l'appareil Matter selon la procédure du fabricant",
          "Ouvrir l'application du contrôleur prévu",
          "Scanner le QR code Matter ou saisir le code d'appairage manuel",
          "Garder le téléphone près de l'appareil pendant l'installation",
          "Terminer le nommage et l'affectation de pièce",
          "Tester le contrôle local avant d'ajouter un second contrôleur"
        ]
      }
    },
    "zigbee-device-offline": {
      "es": {
        "title": "El dispositivo Zigbee se desconecta continuamente",
        "symptom": "Un sensor, luz o cerradura Zigbee aparece desconectado o responde con lentitud en la app.",
        "category": "Zigbee",
        "escalation": "Si solo falla una habitación, trátalo primero como un problema de cobertura. Si fallan todos los dispositivos, revisa el hub, el coordinador y el plan de canales.",
        "appliesTo": [
          "Sensores Zigbee",
          "Luces Zigbee",
          "Cerraduras Zigbee",
          "Hubs Zigbee"
        ],
        "likelyCauses": [
          "Cobertura mesh débil",
          "Hub o coordinador sobrecargado",
          "Interferencia entre canales Wi-Fi y Zigbee",
          "Problema de batería o alimentación",
          "Dispositivo expulsado de la mesh"
        ],
        "quickChecks": [
          "Revisa la batería y la alimentación",
          "Confirma que el hub está en línea",
          "Revisa el solapamiento entre canal Zigbee y canal Wi-Fi",
          "Comprueba cuántos routers hay en la mesh Zigbee",
          "Prueba el dispositivo cerca del hub"
        ],
        "steps": [
          "Acerca el dispositivo al hub y pruébalo",
          "Vuelve a emparejarlo si sigue desconectado",
          "Añade un dispositivo router Zigbee alimentado por red entre el hub y el sensor",
          "Aleja el hub del router y de dispositivos USB 3",
          "Reconstruye o refresca la mesh si la plataforma lo permite"
        ]
      },
      "fr": {
        "title": "L'appareil Zigbee se déconnecte sans cesse",
        "symptom": "Un capteur, une lampe ou une serrure Zigbee apparaît hors ligne ou répond lentement dans l'application.",
        "category": "Zigbee",
        "escalation": "Si une seule pièce échoue, traitez d'abord un problème de couverture. Si tous les appareils échouent, examinez le hub, le coordinateur et le plan de canaux.",
        "appliesTo": [
          "Capteurs Zigbee",
          "Lampes Zigbee",
          "Serrures Zigbee",
          "Hubs Zigbee"
        ],
        "likelyCauses": [
          "Couverture mesh faible",
          "Hub ou coordinateur surchargé",
          "Interférences entre canaux Wi-Fi et Zigbee",
          "Problème de pile ou d'alimentation",
          "Appareil exclu du mesh"
        ],
        "quickChecks": [
          "Vérifier la pile et l'alimentation",
          "Confirmer que le hub est en ligne",
          "Vérifier le chevauchement des canaux Zigbee et Wi-Fi",
          "Compter le nombre de routeurs dans le mesh Zigbee",
          "Tester l'appareil près du hub"
        ],
        "steps": [
          "Rapprocher l'appareil du hub et tester",
          "Le réappairer s'il reste hors ligne",
          "Ajouter un routeur Zigbee alimenté sur secteur entre le hub et le capteur",
          "Éloigner le hub du routeur et des périphériques USB 3",
          "Reconstruire ou rafraîchir le mesh si la plateforme le permet"
        ]
      }
    },
    "smart-life-device-not-found": {
      "es": {
        "title": "Smart Life no encuentra un dispositivo",
        "symptom": "Un dispositivo Tuya o Smart Life no se detecta durante el emparejamiento.",
        "category": "Hogar conectado",
        "escalation": "Si el dispositivo usa una app de marca blanca propia del fabricante, no des por hecho que Tuya Smart o Smart Life lo controlarán. Verifica la app indicada en el manual oficial.",
        "appliesTo": [
          "Tuya Smart",
          "Smart Life",
          "Apps Tuya de marca blanca"
        ],
        "likelyCauses": [
          "El dispositivo está en otro modo de emparejamiento",
          "Permiso de Bluetooth o ubicación bloqueado",
          "Dispositivo emparejado a otra cuenta",
          "Región de la app o centro de datos no coincidentes",
          "Banda Wi-Fi no compatible durante la puesta en marcha"
        ],
        "quickChecks": [
          "Confirma la app correcta y la región de la cuenta",
          "Activa los permisos de Bluetooth y red local",
          "Coloca el dispositivo cerca del teléfono",
          "Restablece el dispositivo al modo de emparejamiento",
          "Comprueba si ya está emparejado a otra cuenta"
        ],
        "steps": [
          "Elimina cualquier entrada previa del dispositivo",
          "Restablece el dispositivo según el manual del fabricante",
          "Abre la app correspondiente y elige Añadir dispositivo",
          "Selecciona la autodetección o la categoría correcta",
          "Completa las credenciales Wi-Fi y espera a que se registre",
          "Renombra el dispositivo y prueba el control"
        ]
      },
      "fr": {
        "title": "Smart Life ne trouve pas d'appareil",
        "symptom": "Un appareil Tuya ou Smart Life n'est pas détecté lors de l'appairage.",
        "category": "Maison connectée",
        "escalation": "Si l'appareil utilise une application en marque blanche propre au fabricant, ne partez pas du principe que Tuya Smart ou Smart Life le contrôlera. Vérifiez l'application indiquée dans le manuel officiel.",
        "appliesTo": [
          "Tuya Smart",
          "Smart Life",
          "Applications Tuya en marque blanche"
        ],
        "likelyCauses": [
          "L'appareil est dans un autre mode d'appairage",
          "Autorisation Bluetooth ou localisation bloquée",
          "Appareil associé à un autre compte",
          "Région de l'application ou centre de données différents",
          "Bande Wi-Fi non prise en charge pendant l'installation"
        ],
        "quickChecks": [
          "Confirmer la bonne application et la région du compte",
          "Activer les autorisations Bluetooth et réseau local",
          "Placer l'appareil près du téléphone",
          "Remettre l'appareil en mode appairage",
          "Vérifier s'il est déjà associé à un autre compte"
        ],
        "steps": [
          "Supprimer toute entrée précédente de l'appareil",
          "Réinitialiser l'appareil selon le manuel du fabricant",
          "Ouvrir l'application correspondante et choisir Ajouter un appareil",
          "Sélectionner la détection automatique ou la bonne catégorie",
          "Saisir les identifiants Wi-Fi et attendre l'enregistrement",
          "Renommer l'appareil et tester le contrôle"
        ]
      }
    },
    "ring-doorbell-offline": {
      "es": {
        "title": "El videoportero Ring aparece desconectado",
        "symptom": "El videoportero Ring aparece sin conexión o deja de enviar notificaciones.",
        "category": "Videoporteros",
        "escalation": "Si solo está desconectado el videoportero, céntrate en la cobertura Wi-Fi en la puerta, la alimentación del transformador o el estado de la batería.",
        "appliesTo": [
          "Videoporteros Ring",
          "Cámaras Ring"
        ],
        "likelyCauses": [
          "Señal Wi-Fi débil",
          "Problema de batería o alimentación",
          "Caída del router o del proveedor de internet",
          "Problema del servicio o de la cuenta de Ring",
          "El dispositivo necesita reiniciarse"
        ],
        "quickChecks": [
          "Revisa la batería o la alimentación por cable",
          "Prueba el Wi-Fi en la ubicación de la puerta",
          "Consulta la página de estado de Ring y tu internet doméstico",
          "Confirma que el dispositivo no está en modo de configuración"
        ],
        "steps": [
          "Abre la app Ring y revisa el estado del dispositivo",
          "Reinicia el router si otros dispositivos están desconectados",
          "Reinicia el videoportero con el procedimiento oficial",
          "Vuelve a conectarlo al Wi-Fi si cambiaron las credenciales o la red",
          "Prueba las alertas de movimiento y la visualización en directo"
        ]
      },
      "fr": {
        "title": "La sonnette Ring apparaît hors ligne",
        "symptom": "La sonnette Ring apparaît hors ligne ou cesse d'envoyer des notifications.",
        "category": "Sonneries vidéo",
        "escalation": "Si seule la sonnette est hors ligne, concentrez-vous sur la couverture Wi-Fi à la porte, l'alimentation du transformateur ou l'état de la batterie.",
        "appliesTo": [
          "Sonneries Ring",
          "Caméras Ring"
        ],
        "likelyCauses": [
          "Signal Wi-Fi faible",
          "Problème de batterie ou d'alimentation",
          "Panne du routeur ou du fournisseur d'accès",
          "Problème de service ou de compte Ring",
          "Appareil à redémarrer"
        ],
        "quickChecks": [
          "Vérifier la batterie ou l'alimentation filaire",
          "Tester le Wi-Fi à l'emplacement de la porte",
          "Consulter la page d'état Ring et l'accès internet du logement",
          "Vérifier que l'appareil n'est pas en mode configuration"
        ],
        "steps": [
          "Ouvrir l'application Ring et vérifier l'état de l'appareil",
          "Redémarrer le routeur si d'autres appareils sont hors ligne",
          "Redémarrer la sonnette selon la procédure officielle",
          "Reconnecter au Wi-Fi si les identifiants ou le réseau ont changé",
          "Tester les alertes de mouvement et l'affichage en direct"
        ]
      }
    },
    "sd-card-not-detected": {
      "es": {
        "title": "La cámara no detecta la tarjeta microSD",
        "symptom": "La app de la cámara indica que no hay almacenamiento, falla el formateo o la grabación local no sirve.",
        "category": "Almacenamiento",
        "escalation": "Las cámaras de grabación continua necesitan tarjetas de alta resistencia. Una tarjeta que funciona en un teléfono puede fallar en una cámara.",
        "appliesTo": [
          "Cámaras de seguridad",
          "Cámaras de caza",
          "Dashcams"
        ],
        "likelyCauses": [
          "Formato de tarjeta no compatible",
          "Tarjeta falsificada o desgastada",
          "La tarjeta supera la capacidad admitida",
          "Error de firmware",
          "Tarjeta insertada incorrectamente"
        ],
        "quickChecks": [
          "Confirma la capacidad máxima admitida",
          "Usa una tarjeta de marca reconocida para grabación continua",
          "Formatea la tarjeta en la cámara o en la app oficial",
          "Comprueba la tarjeta en un ordenador",
          "Actualiza el firmware de la cámara"
        ],
        "steps": [
          "Apaga la cámara",
          "Extrae y vuelve a insertar la tarjeta correctamente",
          "Deja que la cámara o la app formateen la tarjeta",
          "Prueba la grabación local",
          "Sustituye la tarjeta si el formateo o la escritura siguen fallando"
        ]
      },
      "fr": {
        "title": "La caméra ne détecte pas la carte microSD",
        "symptom": "L'application de la caméra signale l'absence de stockage, un échec de formatage ou un enregistrement local inutilisable.",
        "category": "Stockage",
        "escalation": "Les caméras en enregistrement continu nécessitent des cartes à haute endurance. Une carte qui fonctionne dans un téléphone peut échouer dans une caméra.",
        "appliesTo": [
          "Caméras de sécurité",
          "Pièges photographiques",
          "Dashcams"
        ],
        "likelyCauses": [
          "Format de carte non pris en charge",
          "Carte contrefaite ou usée",
          "Carte dépassant la capacité prise en charge",
          "Bug de firmware",
          "Carte mal insérée"
        ],
        "quickChecks": [
          "Vérifier la capacité maximale prise en charge",
          "Utiliser une carte de marque adaptée à l'enregistrement continu",
          "Formater la carte dans la caméra ou l'application officielle",
          "Tester la carte sur un ordinateur",
          "Mettre à jour le firmware de la caméra"
        ],
        "steps": [
          "Éteindre la caméra",
          "Retirer et réinsérer correctement la carte",
          "Laisser la caméra ou l'application formater la carte",
          "Tester l'enregistrement local",
          "Remplacer la carte si le formatage ou l'écriture échoue encore"
        ]
      }
    },
    "smart-lock-calibration-failed": {
      "es": {
        "title": "Falla la calibración de la cerradura inteligente",
        "symptom": "La app de la cerradura indica fallo de calibración, estado incorrecto o recorrido incompleto del pestillo.",
        "category": "Cerraduras inteligentes",
        "escalation": "No fuerces el motor. La fricción en el marco de la puerta es un problema mecánico que la calibración por software no puede resolver.",
        "appliesTo": [
          "Cerraduras retrofit",
          "Cerraduras de pestillo",
          "Cerraduras Matter"
        ],
        "likelyCauses": [
          "Desalineación de la puerta o fricción en la placa",
          "El pestillo no se mueve con libertad",
          "Problema de adaptador o montaje",
          "Nivel de batería demasiado bajo",
          "Estado de calibración del firmware o la app"
        ],
        "quickChecks": [
          "Comprueba el movimiento manual del pestillo",
          "Revisa la alineación de la puerta y la placa",
          "Sustituye las baterías",
          "Confirma el adaptador y la instalación correctos",
          "Actualiza el firmware"
        ],
        "steps": [
          "Calibra con la puerta abierta",
          "Comprueba si el pestillo se mueve con la mano",
          "Ajusta la placa o la alineación de la puerta",
          "Vuelve a ejecutar la calibración",
          "Prueba bloquear y desbloquear varias veces",
          "Reinstala la entrada del dispositivo en la app solo si la calibración sigue corrupta"
        ]
      },
      "fr": {
        "title": "La calibration de la serrure connectée a échoué",
        "symptom": "L'application de la serrure signale un échec de calibration, un état incorrect ou une course de pêne incomplète.",
        "category": "Serrures connectées",
        "escalation": "Ne forcez pas le moteur. La friction dans le cadre de porte est un problème mécanique que la calibration logicielle ne peut pas résoudre.",
        "appliesTo": [
          "Serrures en retrofit",
          "Serrures à pêne",
          "Serrures Matter"
        ],
        "likelyCauses": [
          "Désalignement de la porte ou friction sur la gâche",
          "Pêne qui ne coulisse pas librement",
          "Problème d'adaptateur ou de montage",
          "Niveau de batterie trop faible",
          "État de calibration du firmware ou de l'application"
        ],
        "quickChecks": [
          "Vérifier le mouvement manuel du pêne",
          "Inspecter l'alignement de la porte et la gâche",
          "Remplacer les piles",
          "Confirmer le bon adaptateur et la bonne installation",
          "Mettre à jour le firmware"
        ],
        "steps": [
          "Calibrer porte ouverte",
          "Vérifier que le pêne coulisse à la main",
          "Ajuster la gâche ou l'alignement de la porte",
          "Relancer la calibration",
          "Tester verrouillage et déverrouillage plusieurs fois",
          "Réinstaller l'entrée de l'appareil dans l'app uniquement si la calibration reste corrompue"
        ]
      }
    },
    "iot-certificate-rotation": {
      "es": {
        "title": "Falla la rotación de certificados IoT",
        "symptom": "Un parque de dispositivos no puede reconectarse tras caducar un certificado o cambiar la política de rotación.",
        "category": "Cloud IoT",
        "escalation": "Mantén siempre una vía de reversión documentada. Nunca rotes todo el parque antes de validar DNS, sincronización horaria, TLS y el flujo de aprovisionamiento.",
        "appliesTo": [
          "AWS IoT Core",
          "Azure IoT Hub",
          "Huawei Cloud IoTDA",
          "Otras plataformas MQTT"
        ],
        "likelyCauses": [
          "Certificado de dispositivo caducado",
          "Cadena de CA incorrecta",
          "Desfase horario en el dispositivo",
          "Política o registro de thing no coincidentes",
          "Trabajo OTA de rotación fallido"
        ],
        "quickChecks": [
          "Revisa las fechas de validez del certificado",
          "Confirma el reloj del dispositivo",
          "Valida la cadena de CA",
          "Compara la identidad y la política del dispositivo en la consola",
          "Prueba un dispositivo piloto antes del despliegue masivo"
        ],
        "steps": [
          "Identifica el certificado y el grupo de dispositivos afectados",
          "Emite el certificado de reemplazo",
          "Prueba TLS mutuo desde un dispositivo piloto",
          "Despliega la rotación con un trabajo OTA controlado",
          "Supervisa las tasas de reconexión y de error",
          "Revoca el certificado antiguo tras el despliegue"
        ]
      },
      "fr": {
        "title": "La rotation des certificats IoT a échoué",
        "symptom": "Un parc d'appareils ne peut pas se reconnecter après l'expiration d'un certificat ou un changement de politique de rotation.",
        "category": "Cloud IoT",
        "escalation": "Conservez toujours une procédure de retour arrière documentée. Ne faites jamais tourner l'ensemble du parc avant d'avoir validé le DNS, la synchronisation horaire, TLS et le processus de provisionnement.",
        "appliesTo": [
          "AWS IoT Core",
          "Azure IoT Hub",
          "Huawei Cloud IoTDA",
          "Autres plateformes MQTT"
        ],
        "likelyCauses": [
          "Certificat d'appareil expiré",
          "Mauvaise chaîne de CA",
          "Dérive d'horloge sur l'appareil",
          "Politique ou enregistrement de thing non concordants",
          "Tâche OTA de rotation échouée"
        ],
        "quickChecks": [
          "Vérifier les dates de validité du certificat",
          "Confirmer l'horloge de l'appareil",
          "Valider la chaîne de CA",
          "Comparer l'identité et la politique de l'appareil dans la console",
          "Tester un appareil pilote avant le déploiement général"
        ],
        "steps": [
          "Identifier le certificat et le groupe d'appareils concernés",
          "Émettre le certificat de remplacement",
          "Tester le TLS mutuel depuis un appareil pilote",
          "Déployer la rotation via une tâche OTA contrôlée",
          "Surveiller les taux de reconnexion et d'erreur",
          "Révoquer l'ancien certificat après le déploiement"
        ]
      }
    },
    "robot-vacuum-cannot-find-dock": {
      "es": {
        "title": "El robot aspirador no encuentra su base",
        "symptom": "El robot limpia pero no vuelve a la base de carga, o informa que se ha perdido.",
        "category": "Robots aspiradora",
        "escalation": "Si el robot encuentra la base desde la app pero no al terminar la limpieza, normalmente el mapa guardado está obsoleto: borra el mapa, vuelve a aprenderlo y añade de nuevo las zonas prohibidas en lugar de mover la base otra vez.",
        "appliesTo": [
          "Robots aspiradora con base de carga",
          "Robots aspiradora y friegasuelos"
        ],
        "likelyCauses": [
          "La base se movió después de guardar el mapa",
          "El cable o adaptador de la base está desenchufado",
          "La base está en un acceso obstruido o sobre una superficie oscura",
          "Sensor lidar o cámara con polvo",
          "Mapa guardado desactualizado tras cambiar muebles"
        ],
        "quickChecks": [
          "Comprueba que la luz de la base está encendida",
          "Confirma que la base está en superficie dura y nivelada con espacio delante",
          "Limpia los sensores y los contactos de carga",
          "Revisa en la app si hay un mapa perdido o incompleto"
        ],
        "steps": [
          "Devuelve el robot a la base a mano y confirma que carga",
          "Limpia los contactos de la base y las almohadillas del robot",
          "Elimina y vuelve a crear el mapa en la app",
          "Vuelve a añadir zonas prohibidas y nombres de habitación",
          "Ejecuta una limpieza corta y observa el retorno",
          "Solo entonces mueve la base si la ubicación sigue siendo incorrecta"
        ]
      },
      "fr": {
        "title": "L'aspirateur robot ne retrouve pas sa base",
        "symptom": "Le robot nettoie mais ne revient pas à sa base de charge, ou signale qu'il est perdu.",
        "category": "Aspirateurs robots",
        "escalation": "Si le robot retrouve la base depuis l'application mais pas en fin de cycle, la carte enregistrée est souvent obsolète : supprimez la carte, refaites l'apprentissage et recréez les zones interdites plutôt que de déplacer la base.",
        "appliesTo": [
          "Aspirateurs robots avec base de charge",
          "Robots aspirateurs laveurs"
        ],
        "likelyCauses": [
          "Base déplacée après l'enregistrement de la carte",
          "Câble ou adaptateur de la base débranché",
          "Accès à la base obstrué ou surface sombre",
          "Capteur lidar ou caméra poussiéreux",
          "Carte obsolète après un changement de mobilier"
        ],
        "quickChecks": [
          "Vérifier que le voyant de la base est allumé",
          "Confirmer que la base est sur une surface dure et plane avec de l'espace devant",
          "Nettoyer les capteurs et les contacts de charge",
          "Vérifier dans l'application si une carte est perdue ou incomplète"
        ],
        "steps": [
          "Ramener le robot à la base à la main et vérifier la charge",
          "Nettoyer les contacts de la base et les patins du robot",
          "Supprimer puis recréer la carte dans l'application",
          "Recréer les zones interdites et les noms de pièces",
          "Lancer un nettoyage court et observer le retour",
          "Ne déplacer la base que si l'emplacement reste inadapté"
        ]
      }
    },
    "smart-plug-online-but-not-switching": {
      "es": {
        "title": "El enchufe inteligente aparece en línea pero no conmuta",
        "symptom": "El enchufe figura en línea en la app, pero al conmutarlo no ocurre nada o el relé hace clic y vuelve al estado anterior.",
        "category": "Hogar conectado",
        "escalation": "Si el enchufe está caliente, zumba o salta el automático, deja de usarlo y sustitúyelo. Un fallo de conmutación en hardware de red es un problema de seguridad, no de software.",
        "appliesTo": [
          "Enchufes inteligentes Wi-Fi",
          "Enchufes Zigbee y Matter",
          "Medidores de consumo enchufables"
        ],
        "likelyCauses": [
          "Actualización de firmware en curso o fallida",
          "Límite de seguridad local o umbral de potencia activado",
          "Relé al final de su vida útil tras muchas conmutaciones",
          "Automatización o programación que anula el control manual",
          "Estado en la nube o en la cuenta desincronizado"
        ],
        "quickChecks": [
          "Prueba el botón físico del enchufe",
          "Busca en la app avisos de actualización o errores",
          "Desactiva programaciones y automatizaciones de ese enchufe",
          "Comprueba que no informa de sobretemperatura o exceso de potencia"
        ],
        "steps": [
          "Pulsa el botón físico para probar la conmutación básica",
          "Elimina cualquier programación o escena del enchufe",
          "Actualiza el firmware y espera al reinicio",
          "Corta la alimentación en la toma diez segundos",
          "Vuelve a probar la conmutación desde la app",
          "Si el relé no mantiene el estado, sustituye el enchufe"
        ]
      },
      "fr": {
        "title": "La prise connectée est en ligne mais ne commute pas",
        "symptom": "La prise apparaît en ligne dans l'application, mais la commande ne fait rien ou le relais clique puis revient à l'état précédent.",
        "category": "Maison connectée",
        "escalation": "Si la prise chauffe, bourdonne ou fait disjoncter, cessez de l'utiliser et remplacez-la. Un défaut de commutation sur du matériel secteur est un problème de sécurité, pas de logiciel.",
        "appliesTo": [
          "Prises connectées Wi-Fi",
          "Prises Zigbee et Matter",
          "Compteurs de consommation sur prise"
        ],
        "likelyCauses": [
          "Mise à jour du firmware en cours ou échouée",
          "Limite de sécurité locale ou seuil de puissance atteint",
          "Relais en fin de vie après de nombreuses commutations",
          "Automatisation ou programme qui annule la commande manuelle",
          "État cloud ou compte désynchronisé"
        ],
        "quickChecks": [
          "Essayer le bouton physique de la prise",
          "Chercher dans l'application une mise à jour ou une erreur",
          "Désactiver programmes et automatisations pour cette prise",
          "Vérifier qu'aucune surchauffe ou surpuissance n'est signalée"
        ],
        "steps": [
          "Appuyer sur le bouton physique pour tester la commutation de base",
          "Supprimer tout programme ou scène lié à la prise",
          "Mettre à jour le firmware et attendre le redémarrage",
          "Couper l'alimentation au niveau de la prise pendant dix secondes",
          "Retester la commutation depuis l'application",
          "Si le relais ne tient pas, remplacer la prise"
        ]
      }
    },
    "doorbell-no-motion-alerts": {
      "es": {
        "title": "El videoportero no envía avisos de movimiento",
        "symptom": "La visualización en directo funciona, pero las notificaciones de movimiento nunca llegan al teléfono.",
        "category": "Videoporteros",
        "escalation": "Si los avisos llegan con la app abierta pero nunca en segundo plano, el teléfono está cerrando la app: revisa la optimización de batería y la actualización en segundo plano en lugar de reinstalar el videoportero.",
        "appliesTo": [
          "Videoporteros con batería",
          "Videoporteros cableados",
          "Videoporteros con sensor PIR"
        ],
        "likelyCauses": [
          "Permiso de notificaciones desactivado para la app",
          "Sensibilidad o zonas de movimiento que excluyen la zona",
          "Optimización de batería del teléfono que detiene los avisos en segundo plano",
          "Función de suscripción caducada o no activada",
          "Error de firmware tras una actualización"
        ],
        "quickChecks": [
          "Revisa los ajustes de notificaciones del teléfono para esa app",
          "Abre las zonas de movimiento y la sensibilidad en la app",
          "Confirma que el videoportero está en línea",
          "Comprueba si los avisos llegan con la app abierta"
        ],
        "steps": [
          "Revisa zonas de movimiento, sensibilidad y horario de avisos",
          "Activa la actualización en segundo plano y desactiva la optimización de batería",
          "Actualiza el firmware del dispositivo y de la app",
          "Prueba delante del videoportero con la app cerrada",
          "Si nunca se disparan, restablece el dispositivo y vuelve a añadirlo"
        ]
      },
      "fr": {
        "title": "La sonnette vidéo n'envoie aucune alerte de mouvement",
        "symptom": "L'affichage en direct fonctionne, mais les notifications de mouvement n'arrivent jamais sur le téléphone.",
        "category": "Sonnettes vidéo",
        "escalation": "Si les alertes arrivent application ouverte mais jamais en arrière-plan, le téléphone met l'application en veille : vérifiez l'optimisation de batterie et l'actualisation en arrière-plan plutôt que de réinstaller la sonnette.",
        "appliesTo": [
          "Sonnettes vidéo sur batterie",
          "Sonnettes vidéo filaires",
          "Sonnettes avec capteur PIR"
        ],
        "likelyCauses": [
          "Autorisation de notification désactivée pour l'application",
          "Sensibilité ou zones de mouvement excluant la zone",
          "Optimisation de batterie du téléphone coupant les alertes en arrière-plan",
          "Option d'abonnement expirée ou non activée",
          "Bug de firmware après une mise à jour"
        ],
        "quickChecks": [
          "Vérifier les réglages de notification du téléphone",
          "Ouvrir les zones de mouvement et la sensibilité dans l'application",
          "Confirmer que la sonnette est en ligne",
          "Vérifier si les alertes arrivent application ouverte"
        ],
        "steps": [
          "Revoir zones, sensibilité et plage horaire des alertes",
          "Activer l'actualisation en arrière-plan et désactiver l'optimisation de batterie",
          "Mettre à jour le firmware de l'appareil et de l'application",
          "Tester devant la sonnette avec l'application fermée",
          "Si rien ne se déclenche, réinitialiser l'appareil et le réassocier"
        ]
      }
    },
    "app-account-region-mismatch": {
      "es": {
        "title": "La app no encuentra un dispositivo por la región de la cuenta",
        "symptom": "Tras mudarte, cambiar de Wi-Fi o reinstalar la app, un dispositivo que funcionaba no aparece durante el emparejamiento.",
        "category": "Hogar conectado",
        "escalation": "No restablezcas el dispositivo antes de comprobar la región: un restablecimiento de fábrica en un dispositivo vinculado a otra región suele empeorar el problema y puede borrar programaciones locales.",
        "appliesTo": [
          "Dispositivos Tuya y Smart Life",
          "Dispositivos Aqara y Mi Home",
          "Cuentas en la nube con centros de datos regionales"
        ],
        "likelyCauses": [
          "La cuenta de la app está registrada en otra región que el dispositivo",
          "El centro de datos cambió al reinstalar la app",
          "El dispositivo sigue vinculado a otra cuenta",
          "El dispositivo se compró en una región con otro servidor"
        ],
        "quickChecks": [
          "Revisa la región de la cuenta en los ajustes de la app",
          "Compara el centro de datos con el país de compra del dispositivo",
          "Comprueba si el dispositivo aparece desconectado en la cuenta antigua",
          "Comprueba si sigue vinculado a un propietario anterior"
        ],
        "steps": [
          "Abre los ajustes de la app y lee la región de la cuenta",
          "Si hace falta, crea una segunda cuenta en la región del dispositivo",
          "Elimina el dispositivo de la cuenta antigua primero",
          "Restablece y empareja el dispositivo en la cuenta de la región correcta",
          "Documenta qué cuenta posee cada dispositivo para no repetirlo"
        ]
      },
      "fr": {
        "title": "L'application ne trouve pas un appareil à cause de la région du compte",
        "symptom": "Après un déménagement, un changement de Wi-Fi ou une réinstallation, un appareil qui fonctionnait n'apparaît plus lors de l'appairage.",
        "category": "Maison connectée",
        "escalation": "Ne réinitialisez pas l'appareil avant de vérifier la région : une réinitialisation d'usine sur un appareil lié à une autre région aggrave souvent le problème et peut effacer les programmes locaux.",
        "appliesTo": [
          "Appareils Tuya et Smart Life",
          "Appareils Aqara et Mi Home",
          "Comptes cloud avec centres de données régionaux"
        ],
        "likelyCauses": [
          "Le compte de l'application est enregistré dans une autre région que l'appareil",
          "Le centre de données a changé lors de la réinstallation",
          "L'appareil est encore associé à un autre compte",
          "Appareil acheté dans une région utilisant un autre serveur"
        ],
        "quickChecks": [
          "Vérifier la région du compte dans les réglages",
          "Comparer le centre de données avec le pays d'achat",
          "Vérifier si l'appareil apparaît hors ligne dans l'ancien compte",
          "Vérifier s'il est encore lié à un ancien propriétaire"
        ],
        "steps": [
          "Ouvrir les réglages et lire la région du compte",
          "Si nécessaire, créer un second compte dans la région de l'appareil",
          "Retirer d'abord l'appareil de l'ancien compte",
          "Réinitialiser et appairer l'appareil sur le compte de la bonne région",
          "Documenter quel compte possède quel appareil"
        ]
      }
    },
    "streaming-device-wont-join-wifi": {
      "es": {
        "title": "El dispositivo de streaming o Smart TV no se conecta al Wi-Fi",
        "symptom": "Una TV, un stick o un dispositivo de streaming no ve la red o falla en el paso de la contraseña.",
        "category": "TV y streaming",
        "escalation": "Si la TV se conecta al punto de acceso del teléfono pero nunca al router de casa, sospecha del modo de seguridad o del band steering, no de la TV.",
        "appliesTo": [
          "Smart TV",
          "Sticks y cajas de streaming",
          "Altavoces y barras de sonido inalámbricos"
        ],
        "likelyCauses": [
          "El dispositivo solo admite 2,4 GHz y el nombre existe en 5 GHz",
          "Modo de seguridad solo WPA3 o mixto no soportado por firmware antiguo",
          "Caracteres especiales en la contraseña rechazados por el teclado del dispositivo",
          "Filtrado MAC o lista de control de acceso en el router",
          "Band steering que oculta el SSID de 2,4 GHz"
        ],
        "quickChecks": [
          "Comprueba en las especificaciones las bandas admitidas",
          "Desactiva temporalmente WPA3 o usa modo mixto WPA2/WPA3",
          "Prueba la contraseña en un teclado de teléfono para detectar errores",
          "Busca filtrado MAC en los ajustes del router"
        ],
        "steps": [
          "Separa los SSID de 2,4 GHz y 5 GHz en el router",
          "Conecta el dispositivo a la red de 2,4 GHz",
          "Si falla, pon el router en WPA2-PSK para la prueba",
          "Desactiva temporalmente band steering y el control de acceso",
          "Tras conectar, restaura la seguridad paso a paso"
        ]
      },
      "fr": {
        "title": "L'appareil de streaming ou le téléviseur ne rejoint pas le Wi-Fi",
        "symptom": "Un téléviseur, un stick ou un appareil de streaming ne voit pas le réseau ou échoue à l'étape du mot de passe.",
        "category": "TV et streaming",
        "escalation": "Si le téléviseur se connecte au partage de connexion du téléphone mais jamais au routeur, suspectez le mode de sécurité ou le band steering, pas le téléviseur.",
        "appliesTo": [
          "Téléviseurs connectés",
          "Sticks et box de streaming",
          "Enceintes et barres de son sans fil"
        ],
        "likelyCauses": [
          "Appareil compatible 2,4 GHz uniquement alors que le nom existe en 5 GHz",
          "Mode de sécurité WPA3 seul ou mixte non pris en charge",
          "Caractères spéciaux du mot de passe rejetés par le clavier de l'appareil",
          "Filtrage MAC ou liste de contrôle d'accès sur le routeur",
          "Band steering masquant le SSID 2,4 GHz"
        ],
        "quickChecks": [
          "Vérifier les bandes prises en charge dans les caractéristiques",
          "Désactiver temporairement WPA3 ou passer en mode mixte",
          "Tester le mot de passe sur un clavier de téléphone",
          "Chercher un filtrage MAC dans les réglages du routeur"
        ],
        "steps": [
          "Séparer les SSID 2,4 GHz et 5 GHz sur le routeur",
          "Connecter l'appareil au réseau 2,4 GHz",
          "En cas d'échec, passer le routeur en WPA2-PSK pour le test",
          "Désactiver temporairement le band steering et le contrôle d'accès",
          "Après connexion, rétablir la sécurité étape par étape"
        ]
      }
    },
    "thread-device-offline-border-router": {
      "es": {
        "title": "Los dispositivos Thread se desconectan cuando falla el border router",
        "symptom": "Los sensores y luces Matter sobre Thread dejan de responder aunque la batería y el estado en la app parezcan normales.",
        "category": "Thread",
        "escalation": "Los dispositivos Thread dependen de un border router operativo y de IPv6. Si fallan todos a la vez, revisa el border router y la red antes de tocar cada dispositivo.",
        "appliesTo": [
          "Dispositivos Matter sobre Thread",
          "Sensores, cerraduras y luces Thread",
          "Redes Thread de Apple Home, Google Home y SmartThings"
        ],
        "likelyCauses": [
          "Border router desenchufado o reiniciándose",
          "IPv6 desactivado en el router o en el proveedor",
          "Firmware del border router desactualizado",
          "Credenciales de la red Thread cambiadas tras resetear un hub",
          "Dispositivo expulsado de la red Thread"
        ],
        "quickChecks": [
          "Comprueba que el border router tiene corriente y está en línea",
          "Confirma en la app que el hub figura como border router Thread",
          "Comprueba si otros dispositivos Thread responden",
          "Busca cambios recientes de router o de IPv6"
        ],
        "steps": [
          "Reinicia el border router y espera a que se reintegre",
          "Confirma que Thread está activado en el hub",
          "Vuelve a probar un dispositivo cerca del border router",
          "Si solo falla uno, elimínalo y vuelve a añadirlo",
          "Si fallan todos, reinicia la red Thread y añade los dispositivos en orden"
        ]
      },
      "fr": {
        "title": "Les appareils Thread tombent hors ligne quand le border router est indisponible",
        "symptom": "Les capteurs et lampes Matter over Thread cessent de répondre alors que la batterie et l'état dans l'application semblent normaux.",
        "category": "Thread",
        "escalation": "Les appareils Thread dépendent d'un border router fonctionnel et d'IPv6. Si tous échouent en même temps, traitez le border router et le réseau avant de toucher aux appareils.",
        "appliesTo": [
          "Appareils Matter over Thread",
          "Capteurs, serrures et éclairages Thread",
          "Réseaux Thread Apple Home, Google Home et SmartThings"
        ],
        "likelyCauses": [
          "Border router débranché ou en redémarrage",
          "IPv6 désactivé sur le routeur ou chez le fournisseur",
          "Firmware du border router obsolète",
          "Identifiants du réseau Thread modifiés après une réinitialisation",
          "Appareil exclu du réseau Thread"
        ],
        "quickChecks": [
          "Vérifier que le border router est alimenté et en ligne",
          "Confirmer que le hub apparaît comme border router Thread",
          "Vérifier si d'autres appareils Thread répondent",
          "Chercher un changement récent de routeur ou d'IPv6"
        ],
        "steps": [
          "Redémarrer le border router et attendre sa réintégration",
          "Confirmer que Thread est activé sur le hub",
          "Retester un appareil près du border router",
          "Si un seul échoue, le retirer et le réassocier",
          "Si tous échouent, réinitialiser le réseau Thread et réassocier dans l'ordre"
        ]
      }
    },
    "ble-device-wont-pair-with-phone": {
      "es": {
        "title": "El dispositivo Bluetooth no se empareja con el teléfono",
        "symptom": "Un wearable, cerradura o sensor en modo emparejamiento nunca aparece en la app ni en la lista Bluetooth del teléfono.",
        "category": "Bluetooth",
        "escalation": "Si el dispositivo se empareja con otro teléfono, el problema está en el teléfono o en los permisos de la app, no en el firmware del dispositivo.",
        "appliesTo": [
          "Pulseras de actividad y smartwatches",
          "Cerra duras Bluetooth y rastreadores",
          "Sensores que se emparejan por Bluetooth Low Energy"
        ],
        "likelyCauses": [
          "Permiso de Bluetooth o ubicación denegado para la app",
          "El dispositivo sigue vinculado a otro teléfono",
          "El dispositivo no está realmente en modo emparejamiento",
          "La pila Bluetooth del teléfono necesita reiniciarse",
          "Interferencias o demasiada distancia durante el emparejamiento"
        ],
        "quickChecks": [
          "Apaga y enciende el Bluetooth",
          "Revisa los permisos de Bluetooth y ubicación de la app",
          "Confirma el patrón del LED de modo emparejamiento",
          "Prueba a emparejar desde los ajustes del teléfono"
        ],
        "steps": [
          "Elimina el vínculo antiguo del dispositivo en los ajustes",
          "Cierra la app por completo y vuelve a abrirla",
          "Pon el dispositivo en modo emparejamiento y empareja a menos de un metro",
          "Completa el emparejamiento dentro de la app del fabricante",
          "Si sigue fallando, prueba con un segundo teléfono"
        ]
      },
      "fr": {
        "title": "L'appareil Bluetooth ne s'appaire pas avec le téléphone",
        "symptom": "Un objet portable, une serrure ou un capteur en mode appairage n'apparaît jamais dans l'application ni dans la liste Bluetooth du téléphone.",
        "category": "Bluetooth",
        "escalation": "Si l'appareil s'appaire avec un autre téléphone, le problème vient du téléphone ou des autorisations de l'application, pas du firmware de l'appareil.",
        "appliesTo": [
          "Bracelets d'activité et montres connectées",
          "Serrures Bluetooth et traceurs",
          "Capteurs appairés en Bluetooth Low Energy"
        ],
        "likelyCauses": [
          "Autorisation Bluetooth ou localisation refusée à l'application",
          "Appareil encore associé à un autre téléphone",
          "Appareil pas réellement en mode appairage",
          "Pile Bluetooth du téléphone à redémarrer",
          "Interférences ou distance trop grande pendant l'appairage"
        ],
        "quickChecks": [
          "Éteindre et rallumer le Bluetooth",
          "Vérifier les autorisations Bluetooth et localisation",
          "Confirmer le motif de LED du mode appairage",
          "Essayer depuis les réglages du téléphone"
        ],
        "steps": [
          "Supprimer l'ancien appairage dans les réglages du téléphone",
          "Fermer complètement l'application puis la rouvrir",
          "Remettre l'appareil en mode appairage et appairer à moins d'un mètre",
          "Terminer l'appairage dans l'application du fabricant",
          "En cas d'échec, tester avec un second téléphone"
        ]
      }
    },
    "firmware-update-stuck": {
      "es": {
        "title": "La actualización de firmware se queda bloqueada",
        "symptom": "Una actualización OTA se queda en el mismo porcentaje mucho tiempo, falla, o el dispositivo deja de responder después.",
        "category": "Firmware",
        "escalation": "Nunca apagues un dispositivo a propósito durante una actualización. Si no responde tras veinte minutos, sigue el procedimiento de recuperación del fabricante en lugar de cortar la corriente repetidamente.",
        "appliesTo": [
          "Cámaras, hubs y sensores",
          "Wearables y relojes",
          "Dispositivos que se actualizan por Wi-Fi o Bluetooth"
        ],
        "likelyCauses": [
          "Wi-Fi inestable o señal baja durante la descarga",
          "Batería por debajo del nivel exigido",
          "Interrupción por reinicio, corte de luz o cierre de la app",
          "Problema del servidor o CDN de actualizaciones",
          "Almacenamiento o partición insuficiente para la imagen"
        ],
        "quickChecks": [
          "Confirma alimentación estable o más del 50 % de batería",
          "Revisa la intensidad del Wi-Fi en el dispositivo",
          "Busca una segunda actualización que deba ejecutarse después",
          "Comprueba la página de estado del fabricante"
        ],
        "steps": [
          "Acerca el dispositivo al router para la actualización",
          "Mantén la app en primer plano y el teléfono desbloqueado",
          "Deja que termine: una barra detenida puede completarse igualmente",
          "Si falla, reintenta una vez desde la app sin cortar la corriente",
          "Si falla repetidamente, usa la recuperación o actualización por USB"
        ]
      },
      "fr": {
        "title": "La mise à jour du firmware reste bloquée",
        "symptom": "Une mise à jour OTA reste au même pourcentage longtemps, échoue, ou l'appareil ne répond plus ensuite.",
        "category": "Firmware",
        "escalation": "Ne coupez jamais volontairement l'alimentation pendant une mise à jour. S'il ne répond pas après vingt minutes, suivez la procédure de récupération du fabricant plutôt que de couper le courant à répétition.",
        "appliesTo": [
          "Caméras, hubs et capteurs",
          "Objets portables et montres",
          "Appareils mis à jour par Wi-Fi ou Bluetooth"
        ],
        "likelyCauses": [
          "Wi-Fi instable ou signal faible pendant le téléchargement",
          "Batterie sous le niveau requis",
          "Interruption par redémarrage, coupure ou fermeture de l'application",
          "Problème du serveur ou du CDN de mise à jour",
          "Stockage ou partition insuffisants pour l'image"
        ],
        "quickChecks": [
          "Vérifier une alimentation stable ou plus de 50 % de batterie",
          "Vérifier la force du signal Wi-Fi à l'appareil",
          "Chercher une seconde mise à jour à exécuter ensuite",
          "Consulter la page d'état du fabricant"
        ],
        "steps": [
          "Rapprocher l'appareil du routeur pour la mise à jour",
          "Garder l'application au premier plan et le téléphone déverrouillé",
          "Laisser terminer : une barre figée peut aboutir",
          "En cas d'échec, réessayer une fois depuis l'application",
          "En cas d'échecs répétés, utiliser la récupération ou la mise à jour USB"
        ]
      }
    },
    "voice-assistant-device-unresponsive": {
      "es": {
        "title": "El asistente de voz dice que el dispositivo no responde",
        "symptom": "Alexa o Google Assistant indican que el dispositivo no responde aunque la app del fabricante lo controla bien.",
        "category": "Control por voz",
        "escalation": "Si un dispositivo renombrado rompe el control por voz pero la app funciona, la solución es buscar dispositivos y unificar nombres, no volver a emparejar el dispositivo.",
        "appliesTo": [
          "Integraciones con Alexa y Google Home",
          "Skills y servicios vinculados",
          "Dispositivos renombrados o movidos de habitación"
        ],
        "likelyCauses": [
          "El dispositivo se renombró en la app del fabricante después de la búsqueda",
          "Vínculo de cuenta caducado o contraseña cambiada",
          "Skill o integración eliminada y vuelta a añadir",
          "Nombres de dispositivo duplicados en la misma casa",
          "Región o idioma distintos en la cuenta del asistente"
        ],
        "quickChecks": [
          "Prueba primero el dispositivo en la app del fabricante",
          "Di el nombre exacto tal como aparece en el asistente",
          "Revisa el estado de la cuenta vinculada en la app del asistente",
          "Busca entradas duplicadas con el mismo nombre"
        ],
        "steps": [
          "Confirma que el dispositivo funciona en la app del fabricante",
          "Vuelve a buscar dispositivos en el asistente",
          "Renombra para que cada nombre sea único en la casa",
          "Vuelve a vincular la cuenta si el estado muestra error",
          "Desactiva y reactiva la skill o integración si la búsqueda falla"
        ]
      },
      "fr": {
        "title": "L'assistant vocal dit que l'appareil ne répond pas",
        "symptom": "Alexa ou Google Assistant indique que l'appareil ne répond pas alors que l'application du fabricant le contrôle correctement.",
        "category": "Commande vocale",
        "escalation": "Si un appareil renommé casse la commande vocale alors que l'application fonctionne, la solution est la recherche d'appareils et des noms uniques, pas un nouvel appairage.",
        "appliesTo": [
          "Intégrations Alexa et Google Home",
          "Compétences et services liés",
          "Appareils renommés ou déplacés de pièce"
        ],
        "likelyCauses": [
          "Appareil renommé dans l'application du fabricant après la découverte",
          "Liaison de compte expirée ou mot de passe modifié",
          "Compétence ou intégration supprimée puis rajoutée",
          "Noms d'appareils en double dans la même maison",
          "Région ou langue différentes dans le compte de l'assistant"
        ],
        "quickChecks": [
          "Tester d'abord l'appareil dans l'application du fabricant",
          "Prononcer le nom exact tel qu'il apparaît dans l'assistant",
          "Vérifier l'état du compte lié dans l'application de l'assistant",
          "Chercher des entrées en double"
        ],
        "steps": [
          "Confirmer que l'appareil fonctionne dans l'application du fabricant",
          "Relancer la recherche d'appareils dans l'assistant",
          "Renommer pour rendre chaque nom unique dans la maison",
          "Relier à nouveau le compte si l'état affiche une erreur",
          "Désactiver puis réactiver la compétence si la découverte échoue"
        ]
      }
    },
    "camera-night-vision-problem": {
      "es": {
        "title": "La visión nocturna de la cámara se ve lavada o se queda en blanco y negro",
        "symptom": "Por la noche la imagen se ve lavada, muestra un anillo brillante, o la cámara nunca cambia a infrarrojos.",
        "category": "Cámaras de seguridad",
        "escalation": "Una imagen nocturna lavada a través de un cristal es un problema de reflexión: mueve la cámara al otro lado del cristal o desactiva los LED infrarrojos en lugar de cambiar la cámara.",
        "appliesTo": [
          "Cámaras de seguridad de interior y exterior",
          "Cámaras con batería con LED infrarrojos",
          "Videoporteros con visión nocturna"
        ],
        "likelyCauses": [
          "Cámara montada detrás de un cristal que provoca reflexión infrarroja",
          "LED infrarrojos desactivados en la app o por programación",
          "Polvo, telarañas o agua en la lente o en el anillo infrarrojo",
          "Una fuente de luz cercana que anula el umbral día/noche",
          "Fallo del filtro IR tras un uso prolongado"
        ],
        "quickChecks": [
          "Revisa el ajuste de visión nocturna en la app",
          "Limpia la lente y el anillo de LED infrarrojos",
          "Busca un punto brillante o halo en la imagen",
          "Prueba con la habitación completamente a oscuras"
        ],
        "steps": [
          "Limpia la lente y el anillo infrarrojo con un paño seco",
          "Pon la visión nocturna en automático en la app",
          "Separa la cámara del cristal si aparece un halo",
          "Ajusta las luces cercanas para que no la engañen",
          "Si la imagen sigue en color a oscuras, el filtro IR probablemente esté averiado"
        ]
      },
      "fr": {
        "title": "La vision nocturne de la caméra est délavée ou reste en noir et blanc",
        "symptom": "La nuit, l'image est délavée, montre un anneau lumineux, ou la caméra ne passe jamais en infrarouge.",
        "category": "Caméras de sécurité",
        "escalation": "Une image nocturne délavée à travers une vitre est un problème de réflexion : déplacez la caméra de l'autre côté de la vitre ou désactivez les LED infrarouges plutôt que de changer la caméra.",
        "appliesTo": [
          "Caméras de sécurité intérieures et extérieures",
          "Caméras sur batterie avec LED infrarouges",
          "Sonnettes avec vision nocturne"
        ],
        "likelyCauses": [
          "Caméra placée derrière une vitre provoquant une réflexion infrarouge",
          "LED infrarouges désactivées dans l'application ou par programme",
          "Poussière, toiles ou eau sur l'objectif ou l'anneau infrarouge",
          "Source lumineuse proche annulant le seuil jour/nuit",
          "Filtre IR défaillant après un usage prolongé"
        ],
        "quickChecks": [
          "Vérifier le réglage de vision nocturne dans l'application",
          "Nettoyer l'objectif et l'anneau de LED",
          "Chercher un point lumineux ou un halo",
          "Tester dans une pièce totalement sombre"
        ],
        "steps": [
          "Nettoyer l'objectif et l'anneau infrarouge avec un chiffon sec",
          "Régler la vision nocturne sur auto dans l'application",
          "Éloigner la caméra de la vitre en cas de halo",
          "Ajuster les éclairages proches pour ne pas la tromper",
          "Si l'image reste en couleur dans le noir, le filtre IR est probablement en panne"
        ]
      }
    },
    "smart-lock-battery-drains-fast": {
      "es": {
        "title": "La batería de la cerradura inteligente se agota en días",
        "symptom": "Una cerradura a batería avisa de batería baja mucho antes de lo esperado.",
        "category": "Cerraduras inteligentes",
        "escalation": "Si la cerradura está caliente en el compartimento de la batería o el consumo continúa con pilas nuevas del tipo recomendado, deja de usarla y contacta con el fabricante: un consumo anómalo en hardware sin cable es un tema de seguridad.",
        "appliesTo": [
          "Cerraduras retrofit",
          "Cerraduras de pestillo",
          "Cerraduras Matter"
        ],
        "likelyCauses": [
          "Motor forzado por una placa o puerta desalineada",
          "Química o marca de pila incorrecta (alcalina frente a litio)",
          "Wi-Fi o Matter sondeando más de lo que admite la cerradura",
          "Auto-desbloqueo o geocercas que se disparan a menudo",
          "Error de firmware o intentos de emparejamiento repetidos"
        ],
        "quickChecks": [
          "Comprueba si el pestillo se mueve con la mano",
          "Confirma el tipo de pila en el manual oficial",
          "Revisa el auto-desbloqueo y las geocercas",
          "Busca reconexiones repetidas en la app"
        ],
        "steps": [
          "Lubrica y alinea el pestillo, la placa y el marco",
          "Instala exactamente el tipo de pila del manual",
          "Desactiva temporalmente el auto-desbloqueo y las geocercas",
          "Vuelve a dar de alta o restablece la cerradura una vez",
          "Vigila el consumo durante una semana",
          "Si continúa, escala al fabricante"
        ]
      },
      "fr": {
        "title": "La pile de la serrure connectée se vide en quelques jours",
        "symptom": "Une serrure sur pile signale une pile faible bien avant la durée attendue.",
        "category": "Serrures connectées",
        "escalation": "Si la serrure est chaude au niveau du logement de pile ou si la consommation persiste avec des piles neuves du type recommandé, cessez de l'utiliser et contactez le fabricant : une décharge anormale sur du matériel sans fil secteur est un enjeu de sécurité.",
        "appliesTo": [
          "Serrures en retrofit",
          "Serrures à pêne",
          "Serrures Matter"
        ],
        "likelyCauses": [
          "Moteur forcé par une gâche ou une porte mal alignée",
          "Chimie ou marque de pile inadaptée (alcaline ou lithium)",
          "Interrogations Wi-Fi ou Matter plus fréquentes que ne le supporte la serrure",
          "Déverrouillage automatique ou geofencing trop souvent déclenché",
          "Bug de firmware ou appairages répétés"
        ],
        "quickChecks": [
          "Vérifier que le pêne coulisse à la main",
          "Confirmer le type de pile dans le manuel officiel",
          "Revoir le déverrouillage automatique et le geofencing",
          "Chercher des reconnexions répétées dans l'app"
        ],
        "steps": [
          "Lubrifier et aligner le pêne, la gâche et le cadre",
          "Installer exactement le type de pile du manuel",
          "Désactiver temporairement le déverrouillage automatique",
          "Réassocier ou réinitialiser la serrure une fois",
          "Surveiller la consommation pendant une semaine",
          "Si le problème persiste, contacter le fabricant"
        ]
      }
    },
    "wifi-camera-live-view-lag": {
      "es": {
        "title": "La visualización en directo se corta o va a tirones",
        "symptom": "La visualización en directo se abre pero se entrecorta o tarda mucho en arrancar.",
        "category": "Cámaras de seguridad",
        "escalation": "Si la cámara va mal en alta resolución pero fluida en el flujo de baja calidad, es un problema de ancho de banda y no de la cámara: mejora la cobertura Wi-Fi o usa el substream.",
        "appliesTo": [
          "Cámaras Wi-Fi",
          "Cámaras con batería",
          "Cámaras con grabación en la nube"
        ],
        "likelyCauses": [
          "Señal Wi-Fi débil en la cámara",
          "Ancho de banda de subida saturado por otros dispositivos",
          "Emitir el flujo principal de alto bitrate en lugar del substream",
          "Cámara sobrecalentada al sol",
          "Relay en la nube o región de cuenta añadiendo latencia"
        ],
        "quickChecks": [
          "Revisa la intensidad de señal en la app",
          "Prueba el flujo de menor resolución",
          "Prueba con los demás dispositivos inactivos",
          "Compara el rendimiento con datos móviles"
        ],
        "steps": [
          "Acerca la cámara al router o añade un punto de acceso",
          "Usa el substream para las consultas diarias",
          "Limita el bitrate o la resolución en la app",
          "Actualiza el firmware y reinicia router y cámara",
          "Si persiste, graba en local (NVR o SD) para aislar la red"
        ]
      },
      "fr": {
        "title": "L'affichage en direct est saccadé ou met du temps à démarrer",
        "symptom": "L'affichage en direct s'ouvre mais saccade ou met plusieurs secondes à démarrer.",
        "category": "Caméras de sécurité",
        "escalation": "Si la caméra est saccadée en haute résolution mais fluide sur le flux réduit, il s'agit de débit et non de la caméra : améliorez la couverture Wi-Fi ou utilisez le flux secondaire.",
        "appliesTo": [
          "Caméras Wi-Fi",
          "Caméras sur batterie",
          "Caméras enregistrant dans le cloud"
        ],
        "likelyCauses": [
          "Signal Wi-Fi faible au niveau de la caméra",
          "Bande passante montante saturée par d'autres appareils",
          "Diffusion du flux principal à haut débit au lieu du flux secondaire",
          "Caméra en surchauffe au soleil",
          "Relais cloud ou région de compte ajoutant de la latence"
        ],
        "quickChecks": [
          "Vérifier la force du signal dans l'app",
          "Essayer le flux de résolution inférieure",
          "Tester avec les autres appareils inactifs",
          "Comparer en données mobiles"
        ],
        "steps": [
          "Rapprocher la caméra du routeur ou ajouter un point d'accès",
          "Utiliser le flux secondaire au quotidien",
          "Limiter le débit ou la résolution dans l'app",
          "Mettre à jour le firmware et redémarrer routeur et caméra",
          "Si cela persiste, enregistrer en local pour isoler le réseau"
        ]
      }
    },
    "zigbee-pairing-fails": {
      "es": {
        "title": "El dispositivo Zigbee no se empareja con el hub",
        "symptom": "Un sensor o luz Zigbee no se une al hub, o se une y se cae al instante.",
        "category": "Zigbee",
        "escalation": "Si el dispositivo se empareja cerca del hub pero se cae en su ubicación, es cobertura de malla: añade un router Zigbee alimentado por red en lugar de reiniciar el dispositivo una y otra vez.",
        "appliesTo": [
          "Sensores y luces Zigbee",
          "Cerraduras Zigbee",
          "Hubs y bridges Zigbee"
        ],
        "likelyCauses": [
          "No se mantiene el modo emparejamiento el tiempo suficiente",
          "Modo o canal del hub cambiado tras una actualización",
          "Distancia o muros que bloquean la unión",
          "Dispositivo ya emparejado a otro hub",
          "Batería demasiado baja para el proceso"
        ],
        "quickChecks": [
          "Confirma el patrón LED de emparejamiento en el manual",
          "Acerca el dispositivo al hub y reintenta",
          "Revisa la versión de firmware del hub",
          "Sustituye la batería antes de emparejar"
        ],
        "steps": [
          "Elimina el dispositivo de cualquier hub anterior",
          "Restablece el dispositivo de fábrica",
          "Pon el hub en modo añadir y empareja a menos de un metro",
          "Acércalo poco a poco a su ubicación final",
          "Si se cae con distancia, añade un router Zigbee intermedio"
        ]
      },
      "fr": {
        "title": "L'appareil Zigbee ne s'appaire pas avec le hub",
        "symptom": "Un capteur ou une lampe Zigbee ne rejoint pas le hub, ou le rejoint puis se déconnecte aussitôt.",
        "category": "Zigbee",
        "escalation": "Si l'appareil s'appaire près du hub mais se déconnecte à son emplacement, il s'agit de couverture mesh : ajoutez un routeur Zigbee alimenté sur secteur au lieu de réinitialiser l'appareil.",
        "appliesTo": [
          "Capteurs et lampes Zigbee",
          "Serrures Zigbee",
          "Hubs et bridges Zigbee"
        ],
        "likelyCauses": [
          "Mode appairage pas maintenu assez longtemps",
          "Mode ou canal du hub modifié après une mise à jour",
          "Distance ou murs bloquant l'association",
          "Appareil déjà appairé à un autre hub",
          "Pile trop faible pour le processus"
        ],
        "quickChecks": [
          "Confirmer le motif de LED d'appairage du manuel",
          "Rapprocher l'appareil du hub et réessayer",
          "Vérifier la version du firmware du hub",
          "Remplacer la pile avant l'appairage"
        ],
        "steps": [
          "Retirer l'appareil de tout hub précédent",
          "Réinitialiser l'appareil d'usine",
          "Mettre le hub en mode ajout et appairer à moins d'un mètre",
          "Le rapprocher progressivement de son emplacement",
          "S'il décroche avec la distance, ajouter un routeur Zigbee intermédiaire"
        ]
      }
    },
    "hub-loses-devices-after-power-cut": {
      "es": {
        "title": "El hub pierde dispositivos tras un corte de luz",
        "symptom": "Tras un corte, el hub vuelve pero varios dispositivos aparecen desconectados o desaparecen.",
        "category": "Hubs de hogar conectado",
        "escalation": "Si los dispositivos desaparecen en cada corte, protege el hub con un SAI pequeño o revisa su alimentación en lugar de volver a añadirlos cada vez.",
        "appliesTo": [
          "Hubs Zigbee y Matter",
          "Bridges de hogar conectado",
          "Cámaras que actúan como hub"
        ],
        "likelyCauses": [
          "El hub reinició antes de que los dispositivos volvieran a la malla",
          "Dispositivos con batería débil que no se reincorporaron",
          "Cambio de nombre de red o IP tras el corte",
          "Base de datos local corrupta por apagado brusco",
          "El router tardó más que el hub en volver"
        ],
        "quickChecks": [
          "Espera diez minutos y refresca la app antes de actuar",
          "Comprueba si el hub está en línea",
          "Confirma que el router e internet volvieron primero",
          "Busca dispositivos que también perdieron la lectura de batería"
        ],
        "steps": [
          "Reinicia primero el router y después el hub",
          "Espera a que la malla se recomponga y refresca la app",
          "Vuelve a añadir solo los que sigan desconectados",
          "Actualiza el firmware del hub",
          "Añade un SAI para hub y router y evita apagados bruscos"
        ]
      },
      "fr": {
        "title": "Le hub perd des appareils après une coupure de courant",
        "symptom": "Après une coupure, le hub revient mais plusieurs appareils apparaissent hors ligne ou disparaissent.",
        "category": "Hubs domotiques",
        "escalation": "Si les appareils disparaissent à chaque coupure, protégez le hub avec un petit onduleur ou vérifiez son alimentation plutôt que de les réassocier à chaque fois.",
        "appliesTo": [
          "Hubs Zigbee et Matter",
          "Bridges de maison connectée",
          "Caméras faisant office de hub"
        ],
        "likelyCauses": [
          "Hub redémarré avant que les appareils ne rejoignent le mesh",
          "Appareils à pile faible n'ayant pas rejoint",
          "Changement de nom de réseau ou d'IP après la coupure",
          "Base locale corrompue par un arrêt brutal",
          "Routeur revenu plus lentement que le hub"
        ],
        "quickChecks": [
          "Attendre dix minutes et rafraîchir l'app avant d'agir",
          "Vérifier que le hub est en ligne",
          "Confirmer que le routeur et internet sont revenus d'abord",
          "Chercher des appareils ayant aussi perdu leur niveau de pile"
        ],
        "steps": [
          "Redémarrer le routeur puis le hub",
          "Attendre la reformation du mesh et rafraîchir l'app",
          "Ne réassocier que les appareils restés hors ligne",
          "Mettre à jour le firmware du hub",
          "Ajouter un onduleur pour le hub et le routeur"
        ]
      }
    },
    "camera-motion-detection-too-sensitive": {
      "es": {
        "title": "La detección de movimiento salta constantemente",
        "symptom": "Las alertas se disparan con árboles en movimiento, faros o lluvia en lugar de eventos reales.",
        "category": "Cámaras de seguridad",
        "escalation": "Si las alertas solo paran al desactivar la detección, la cámara apunta a un disparador que no puedes enmascarar: reorienta la cámara o reduce el área de detección en lugar de apagarla.",
        "appliesTo": [
          "Cámaras Wi-Fi",
          "Cámaras con batería",
          "Videoporteros con PIR"
        ],
        "likelyCauses": [
          "Zonas de detección que cubren calles, árboles o reflejos",
          "Sensibilidad al máximo",
          "PIR apuntando a una fuente de calor o sombra en movimiento",
          "Horario de notificaciones desactivado",
          "Detección de personas no activada donde está disponible"
        ],
        "quickChecks": [
          "Revisa el dibujo de zonas en la app",
          "Comprueba el nivel de sensibilidad",
          "Mira las miniaturas de las alertas para identificar el disparador",
          "Confirma si hay detección de personas o vehículos"
        ],
        "steps": [
          "Redibuja la zona excluyendo el disparador",
          "Baja la sensibilidad paso a paso",
          "Activa el filtro de personas o vehículos si el modelo lo permite",
          "Define un horario de alertas",
          "Prueba dos días antes de volver a ajustar"
        ]
      },
      "fr": {
        "title": "La détection de mouvement se déclenche en permanence",
        "symptom": "Les alertes se déclenchent sur des arbres qui bougent, des phares ou la pluie plutôt que sur de vrais événements.",
        "category": "Caméras de sécurité",
        "escalation": "Si les alertes ne s'arrêtent qu'en désactivant totalement la détection, la caméra vise un déclencheur impossible à masquer : réorientez la caméra ou réduisez la zone de détection plutôt que de la désactiver.",
        "appliesTo": [
          "Caméras Wi-Fi",
          "Caméras sur batterie",
          "Sonnettes avec PIR"
        ],
        "likelyCauses": [
          "Zones de détection couvrant routes, arbres ou reflets",
          "Sensibilité au maximum",
          "PIR visant une source de chaleur ou une ombre mouvante",
          "Plage horaire de notification désactivée",
          "Détection de personnes non activée là où elle existe"
        ],
        "quickChecks": [
          "Revoir le dessin des zones dans l'app",
          "Vérifier le niveau de sensibilité",
          "Regarder les vignettes d'alerte pour identifier le déclencheur",
          "Vérifier la présence de détection personne ou véhicule"
        ],
        "steps": [
          "Redessiner la zone pour exclure le déclencheur",
          "Baisser la sensibilité par paliers",
          "Activer le filtre personne ou véhicule si disponible",
          "Définir une plage horaire d'alertes",
          "Tester deux jours avant de réajuster"
        ]
      }
    },
    "smart-bulb-flickers": {
      "es": {
        "title": "La bombilla inteligente parpadea o zumba",
        "symptom": "Una bombilla LED inteligente parpadea, zumba o brilla débilmente cuando está apagada.",
        "category": "Iluminación",
        "escalation": "Si parpadea solo en una luminaria, la luminaria o el regulador son incompatibles. Comprueba la especificación de la bombilla antes de sustituirla.",
        "appliesTo": [
          "Bombillas inteligentes",
          "Reguladores e interruptores inteligentes",
          "Tiras LED con regulador"
        ],
        "likelyCauses": [
          "Bombilla no regulable en un regulador",
          "Regulación por debajo de la carga mínima",
          "Falta de neutro en un interruptor inteligente",
          "Curva de regulación del firmware no adecuada a la luminaria",
          "Cableado antiguo o driver de la luminaria degradado"
        ],
        "quickChecks": [
          "Confirma que la bombilla es regulable y qué reguladores admite",
          "Prueba la bombilla en un casquillo sin regulador",
          "Consulta la carga mínima del interruptor",
          "Busca un ajuste de curva de regulación en la app"
        ],
        "steps": [
          "Prueba la bombilla en un casquillo sin regulador",
          "Si ahí funciona, revisa la compatibilidad del regulador",
          "Fija un brillo mínimo en la app",
          "Actualiza el firmware de bombilla e interruptor",
          "Si solo falla en una luminaria, cambia el regulador por uno compatible"
        ]
      },
      "fr": {
        "title": "L'ampoule connectée clignote ou bourdonne",
        "symptom": "Une ampoule LED connectée clignote, bourdonne ou luit faiblement lorsqu'elle est éteinte.",
        "category": "Éclairage",
        "escalation": "Si elle ne clignote que sur un seul luminaire, le luminaire ou le variateur est incompatible. Vérifiez la spécification de l'ampoule avant de la remplacer.",
        "appliesTo": [
          "Ampoules connectées",
          "Variateurs et interrupteurs connectés",
          "Rubans LED sur variateur"
        ],
        "likelyCauses": [
          "Ampoule non dimmable sur un variateur",
          "Variation sous la charge minimale",
          "Neutre absent sur un interrupteur connecté",
          "Courbe de variation du firmware inadaptée au luminaire",
          "Câblage ancien ou driver défaillant"
        ],
        "quickChecks": [
          "Confirmer que l'ampoule est dimmable et le type de variateur supporté",
          "Tester l'ampoule sur une douille simple",
          "Vérifier la charge minimale de l'interrupteur",
          "Chercher un réglage de courbe dans l'app"
        ],
        "steps": [
          "Tester l'ampoule sur une douille non graduable",
          "Si elle fonctionne, vérifier la compatibilité du variateur",
          "Fixer un niveau de luminosité minimum dans l'app",
          "Mettre à jour le firmware",
          "Si le problème ne touche qu'un luminaire, remplacer le variateur"
        ]
      }
    },
    "doorbell-mechanical-chime-not-working": {
      "es": {
        "title": "El videoportero no hace sonar el timbre interior",
        "symptom": "El videoportero funciona en la app pero el timbre mecánico interior ya no suena.",
        "category": "Videoporteros",
        "escalation": "Nunca puentees ni anules un transformador por encima de su capacidad para forzar el timbre. Si el timbre necesita más potencia de la que da el transformador, sustitúyelo en lugar de recablear.",
        "appliesTo": [
          "Videoporteros cableados",
          "Videoporteros que sustituyen a un timbre mecánico",
          "Transformadores de videoportero"
        ],
        "likelyCauses": [
          "Tensión del transformador por debajo del requisito",
          "Timbre interior no activado en los ajustes de la app",
          "Kit de timbre no instalado o mal cableado",
          "Timbre digital no compatible con el modelo",
          "Mecanismo del timbre desgastado"
        ],
        "quickChecks": [
          "Comprueba tensión y potencia del transformador",
          "Busca el interruptor de timbre interior en la app",
          "Confirma el cableado del kit según el manual",
          "Prueba el timbre puenteando brevemente los terminales con cuidado"
        ],
        "steps": [
          "Lee los requisitos de alimentación en el manual oficial",
          "Comprueba la potencia impresa en el transformador",
          "Activa el timbre interior en la app y ajusta la duración",
          "Reinstala el kit según el diagrama del fabricante",
          "Si sigue fallando, que un electricista sustituya el transformador"
        ]
      },
      "fr": {
        "title": "La sonnette filaire ne fait pas sonner le carillon existant",
        "symptom": "La sonnette fonctionne dans l'app mais le carillon mécanique intérieur ne sonne plus.",
        "category": "Sonnettes vidéo",
        "escalation": "Ne pontez jamais un transformateur au-delà de sa capacité pour forcer un carillon. Si le carillon demande plus de puissance que le transformateur, remplacez le transformateur plutôt que de recâbler.",
        "appliesTo": [
          "Sonnettes vidéo filaires",
          "Sonnettes remplaçant un carillon mécanique",
          "Transformateurs de sonnette"
        ],
        "likelyCauses": [
          "Tension du transformateur inférieure à l'exigence",
          "Carillon intérieur non activé dans les réglages",
          "Kit de carillon non installé ou mal câblé",
          "Carillon numérique non pris en charge",
          "Mécanisme du carillon usé"
        ],
        "quickChecks": [
          "Vérifier tension et puissance du transformateur",
          "Chercher l'option carillon intérieur dans l'app",
          "Confirmer le câblage du kit selon le manuel",
          "Tester le carillon en pontant brièvement les bornes avec précaution"
        ],
        "steps": [
          "Lire les besoins d'alimentation dans le manuel officiel",
          "Vérifier la puissance indiquée sur le transformateur",
          "Activer le carillon intérieur dans l'app",
          "Réinstaller le kit selon le schéma du fabricant",
          "En cas d'échec, faire remplacer le transformateur par un électricien"
        ]
      }
    },
    "camera-sd-card-fills-quickly": {
      "es": {
        "title": "La tarjeta microSD se llena en pocos días",
        "symptom": "El almacenamiento local se sobrescribe o deja de grabar mucho antes de lo esperado.",
        "category": "Almacenamiento",
        "escalation": "Si una tarjeta de alta resistencia sigue llenándose en días, el perfil de grabación es la causa: pasa a grabación por eventos en lugar de comprar una tarjeta mayor.",
        "appliesTo": [
          "Cámaras de seguridad",
          "Cámaras de caza",
          "Dashcams"
        ],
        "likelyCauses": [
          "Grabación continua en lugar de por eventos",
          "Perfil de alto bitrate o alta resolución",
          "Demasiados eventos falsos generando clips",
          "Capacidad pequeña para el perfil de grabación",
          "Tarjeta degradada que se remonta repetidamente"
        ],
        "quickChecks": [
          "Comprueba si la grabación es continua o por eventos",
          "Revisa resolución y bitrate",
          "Cuenta cuántos eventos se graban al día",
          "Revisa salud y capacidad de la tarjeta"
        ],
        "steps": [
          "Cambia a grabación por movimiento o persona",
          "Baja el bitrate o la resolución si la calidad lo permite",
          "Ajusta las zonas para reducir falsos eventos",
          "Formatea la tarjeta en la cámara tras cambiar los ajustes",
          "Sustituye por una tarjeta de alta resistencia del tamaño adecuado"
        ]
      },
      "fr": {
        "title": "La carte microSD se remplit en quelques jours",
        "symptom": "Le stockage local s'écrase ou cesse d'enregistrer bien plus tôt que prévu.",
        "category": "Stockage",
        "escalation": "Si une carte haute endurance se remplit encore en quelques jours, le profil d'enregistrement est en cause : passez à l'enregistrement sur événement plutôt que d'acheter une carte plus grosse.",
        "appliesTo": [
          "Caméras de sécurité",
          "Pièges photographiques",
          "Dashcams"
        ],
        "likelyCauses": [
          "Enregistrement continu au lieu d'événements",
          "Profil haut débit ou haute résolution",
          "Trop de faux événements générant des clips",
          "Capacité trop faible pour le profil",
          "Carte usée se remontant en boucle"
        ],
        "quickChecks": [
          "Vérifier le mode d'enregistrement",
          "Revoir résolution et débit",
          "Compter les événements enregistrés par jour",
          "Vérifier l'état et la capacité de la carte"
        ],
        "steps": [
          "Passer à l'enregistrement sur mouvement ou personne",
          "Baisser le débit ou la résolution si possible",
          "Ajuster les zones pour réduire les faux événements",
          "Formater la carte dans la caméra après modification",
          "Remplacer par une carte haute endurance adaptée"
        ]
      }
    },
    "smart-plug-turns-off-randomly": {
      "es": {
        "title": "El enchufe inteligente se apaga solo",
        "symptom": "Un enchufe o interruptor corta la corriente en momentos aleatorios sin programación.",
        "category": "Electricidad",
        "escalation": "Si el enchufe corta bajo carga y está caliente, trátalo como sobrecarga o fallo de hardware y deja de usarlo hasta que un electricista revise el circuito.",
        "appliesTo": [
          "Enchufes inteligentes",
          "Relés e interruptores inteligentes",
          "Enchufes con medición"
        ],
        "likelyCauses": [
          "Protección de sobrecarga actuando con carga alta",
          "Automatización, temporizador o umbral de potencia aún activos",
          "Reinicio de firmware tras actualización fallida",
          "Cableado flojo en el enchufe o la toma",
          "Caída en la nube que deja el dispositivo en estado seguro"
        ],
        "quickChecks": [
          "Anota la carga conectada cuando se apaga",
          "Comprueba la temperatura del enchufe",
          "Revisa escenas, temporizadores y reglas de potencia",
          "Comprueba versión de firmware y reinicios recientes"
        ],
        "steps": [
          "Desconecta la carga y prueba el encendido en vacío",
          "Elimina toda automatización y temporizador",
          "Actualiza el firmware y reinicia el enchufe",
          "Prueba la carga en otro circuito para comparar",
          "Si sigue cortando, sustituye el enchufe o revisa el circuito"
        ]
      },
      "fr": {
        "title": "La prise connectée s'éteint toute seule",
        "symptom": "Une prise ou un interrupteur coupe l'alimentation à des moments aléatoires sans programmation.",
        "category": "Électricité",
        "escalation": "Si la prise coupe sous charge et qu'elle est chaude, considérez une surcharge ou un défaut matériel et cessez de l'utiliser jusqu'au contrôle par un électricien.",
        "appliesTo": [
          "Prises connectées",
          "Relais et interrupteurs connectés",
          "Prises avec mesure de consommation"
        ],
        "likelyCauses": [
          "Protection de surcharge déclenchée sous charge élevée",
          "Automatisation, minuterie ou seuil de puissance encore actifs",
          "Redémarrage du firmware après mise à jour échouée",
          "Câblage desserré dans la prise",
          "Panne cloud laissant l'appareil en état sûr"
        ],
        "quickChecks": [
          "Noter la charge présente lors de la coupure",
          "Vérifier la température de la prise",
          "Revoir scènes, minuteries et règles de puissance",
          "Vérifier la version de firmware et les redémarrages"
        ],
        "steps": [
          "Débrancher la charge et tester sans charge",
          "Supprimer toute automatisation et minuterie",
          "Mettre à jour le firmware et redémarrer la prise",
          "Tester la charge sur un autre circuit",
          "En cas de coupures persistantes, remplacer la prise ou faire vérifier le circuit"
        ]
      }
    },
    "wearable-steps-not-syncing": {
      "es": {
        "title": "La pulsera o el reloj no sincroniza los pasos",
        "symptom": "La pulsera muestra pasos en pantalla pero la app mantiene los datos de ayer o aparece vacía.",
        "category": "Wearables",
        "escalation": "Si solo falla una métrica, el problema suele ser permisos de la app o el teléfono cerrando la app en segundo plano, no el sensor.",
        "appliesTo": [
          "Pulseras de actividad",
          "Smartwatches",
          "Anillos inteligentes"
        ],
        "likelyCauses": [
          "Permiso de la plataforma de salud denegado para la app",
          "Sincronización en segundo plano bloqueada por optimización de batería",
          "Bluetooth desconectado tras cerrar la app",
          "Varias apps reclamando los mismos datos de salud",
          "Almacenamiento del wearable lleno de registros sin sincronizar"
        ],
        "quickChecks": [
          "Abre la app y fuerza una sincronización manual",
          "Revisa los permisos de salud de la app",
          "Confirma que el Bluetooth está activo y conectado",
          "Busca una actualización de firmware"
        ],
        "steps": [
          "Fuerza una sincronización manual y comprueba si termina",
          "Concede permisos de salud y de segundo plano a la app",
          "Excluye la app de la optimización de batería",
          "Reinicia la pulsera y el teléfono",
          "Desconecta otras apps de la misma plataforma y vuelve a probar"
        ]
      },
      "fr": {
        "title": "Le bracelet ou la montre ne synchronise pas les pas",
        "symptom": "Le bracelet affiche des pas à l'écran mais l'application garde les données de la veille ou reste vide.",
        "category": "Objets portables",
        "escalation": "Si une seule mesure ne se synchronise pas, le problème vient généralement des autorisations de l'app ou du téléphone qui met l'app en veille, pas du capteur.",
        "appliesTo": [
          "Bracelets d'activité",
          "Montres connectées",
          "Bagues connectées"
        ],
        "likelyCauses": [
          "Autorisation de la plateforme santé refusée",
          "Synchronisation en arrière-plan bloquée par l'optimisation de batterie",
          "Bluetooth déconnecté après fermeture de l'app",
          "Plusieurs applications réclamant les mêmes données",
          "Stockage du bracelet saturé de données non synchronisées"
        ],
        "quickChecks": [
          "Ouvrir l'app et forcer une synchronisation",
          "Vérifier les autorisations santé",
          "Confirmer que le Bluetooth est actif et connecté",
          "Chercher une mise à jour de firmware"
        ],
        "steps": [
          "Forcer une synchronisation manuelle et vérifier",
          "Accorder les autorisations santé et arrière-plan",
          "Exclure l'app de l'optimisation de batterie",
          "Redémarrer le bracelet et le téléphone",
          "Déconnecter les autres apps de la même plateforme et retester"
        ]
      }
    },
    "alexa-skill-wont-link": {
      "es": {
        "title": "La skill de Alexa no vincula la cuenta del fabricante",
        "symptom": "Durante la vinculación la página de acceso entra en bucle, rechaza la contraseña o indica que la cuenta no se puede vincular.",
        "category": "Control por voz",
        "escalation": "Si la vinculación también falla en la web del fabricante, el problema es la propia cuenta: restablece primero la contraseña del fabricante en lugar de desvincular la skill una y otra vez.",
        "appliesTo": [
          "Skills de Alexa para cámaras, luces y enchufes",
          "Integraciones con Google Home",
          "Ecosistemas vinculados por cuenta"
        ],
        "likelyCauses": [
          "Tipo de cuenta incorrecto: inicio de sesión social en lugar de cuenta de correo",
          "Contraseña cambiada en el lado del fabricante",
          "Desajuste de región entre la cuenta del fabricante y la del asistente",
          "Interrupción del servicio del fabricante",
          "Demasiados intentos fallidos que activan un bloqueo temporal"
        ],
        "quickChecks": [
          "Inicia sesión en la app del fabricante con las mismas credenciales",
          "Comprueba si la cuenta usa inicio de sesión único",
          "Confirma la región configurada para el fabricante",
          "Revisa la página de estado del fabricante"
        ],
        "steps": [
          "Restablece la contraseña del fabricante e inicia sesión en su app",
          "Elimina la skill o la integración del asistente",
          "Vuelve a añadir la skill y vincula de nuevo",
          "Usa el acceso del proveedor si se aplica el inicio de sesión único",
          "Espera a que expire el bloqueo temporal y reinténtalo"
        ]
      },
      "fr": {
        "title": "La compétence Alexa ne lie pas le compte du fabricant",
        "symptom": "Pendant la liaison, la page de connexion boucle, refuse le mot de passe ou indique que le compte ne peut pas être lié.",
        "category": "Commande vocale",
        "escalation": "Si la liaison échoue aussi sur le site du fabricant, le compte lui-même est en cause : réinitialisez d'abord le mot de passe du fabricant plutôt que de dissocier la compétence sans cesse.",
        "appliesTo": [
          "Compétences Alexa pour caméras, éclairages et prises",
          "Intégrations Google Home",
          "Écosystèmes liés par compte"
        ],
        "likelyCauses": [
          "Mauvais type de compte : connexion sociale au lieu d'un compte e-mail",
          "Mot de passe modifié côté fabricant",
          "Incohérence de région entre le compte fabricant et celui de l'assistant",
          "Panne de service chez le fabricant",
          "Trop de tentatives échouées déclenchant un blocage temporaire"
        ],
        "quickChecks": [
          "Se connecter à l'app du fabricant avec les mêmes identifiants",
          "Vérifier si le compte utilise l'authentification unique",
          "Confirmer la région configurée pour le fabricant",
          "Consulter la page d'état du fabricant"
        ],
        "steps": [
          "Réinitialiser le mot de passe du fabricant et se connecter à son app",
          "Supprimer la compétence ou l'intégration de l'assistant",
          "Réajouter la compétence et relier à nouveau",
          "Utiliser la connexion du fournisseur en cas d'authentification unique",
          "Attendre la fin du blocage temporaire puis réessayer"
        ]
      }
    },
    "camera-two-way-audio-fails": {
      "es": {
        "title": "El audio bidireccional de la cámara no funciona",
        "symptom": "Oyes la cámara, pero la persona que está delante no te oye, o el audio se distorsiona.",
        "category": "Cámaras de seguridad",
        "escalation": "Si el audio funciona en una llamada telefónica pero no en la app de la cámara, el permiso de micrófono pertenece a la app, no a la cámara.",
        "appliesTo": [
          "Cámaras Wi-Fi",
          "Videoporteros",
          "Cámaras con batería y altavoz"
        ],
        "likelyCauses": [
          "Permiso de micrófono denegado para la app",
          "En algunos modelos hay que mantener pulsado el control de hablar",
          "Audio silenciado en la app o por el modo privacidad",
          "Teléfono ocupado en una llamada o usando el micrófono",
          "Volumen del altavoz de la cámara muy bajo"
        ],
        "quickChecks": [
          "Revisa el permiso de micrófono de la app",
          "Confirma que mantienes pulsado el control de hablar",
          "Busca un interruptor de privacidad o silencio",
          "Cierra las demás apps que usan el micrófono"
        ],
        "steps": [
          "Concede el permiso de micrófono a la app de la cámara",
          "Mantén pulsado el botón de hablar y habla tras el tono",
          "Sube el volumen del altavoz en los ajustes de la cámara",
          "Desactiva el modo privacidad si está activado",
          "Prueba desde un segundo teléfono para descartar el terminal"
        ]
      },
      "fr": {
        "title": "L'audio bidirectionnel de la caméra ne fonctionne pas",
        "symptom": "Vous entendez la caméra, mais la personne devant ne vous entend pas, ou le son est distordu.",
        "category": "Caméras de sécurité",
        "escalation": "Si l'audio fonctionne lors d'un appel téléphonique mais pas dans l'app de la caméra, l'autorisation du micro relève de l'app, pas de la caméra.",
        "appliesTo": [
          "Caméras Wi-Fi",
          "Sonnettes vidéo",
          "Caméras sur batterie avec haut-parleur"
        ],
        "likelyCauses": [
          "Autorisation micro refusée pour l'app",
          "Sur certains modèles, il faut maintenir la commande de parole enfoncée",
          "Audio coupé dans l'app ou par le mode confidentialité",
          "Téléphone occupé par un appel ou utilisant le micro",
          "Volume du haut-parleur de la caméra très bas"
        ],
        "quickChecks": [
          "Vérifier l'autorisation micro de l'app",
          "Confirmer que vous maintenez la commande de parole",
          "Chercher un interrupteur de confidentialité ou de sourdine",
          "Fermer les autres apps utilisant le micro"
        ],
        "steps": [
          "Accorder l'autorisation micro à l'app de la caméra",
          "Maintenir le bouton de parole et parler après la tonalité",
          "Augmenter le volume du haut-parleur dans les réglages de la caméra",
          "Désactiver le mode confidentialité s'il est activé",
          "Tester depuis un second téléphone pour écarter le terminal"
        ]
      }
    },
    "robot-vacuum-mop-streaks": {
      "es": {
        "title": "El robot aspiradora deja rayas o charcos al fregar",
        "symptom": "Tras fregar quedan rayas, manchas húmedas, o el robot deja de avanzar sobre el suelo mojado.",
        "category": "Robots aspiradora",
        "escalation": "Si el robot pierde agua mientras está en la base, deja de usar el depósito y revisa su junta: las fugas internas pueden dañar la electrónica.",
        "appliesTo": [
          "Robots aspiradora y friegasuelos",
          "Robots con depósito o base de agua"
        ],
        "likelyCauses": [
          "Mopa sucia o desgastada",
          "Caudal de agua demasiado alto",
          "Mopa mal colocada o ya empapada",
          "No se aspiró antes de fregar",
          "Las ruedas patinan en el suelo mojado"
        ],
        "quickChecks": [
          "Revisa el estado y el montaje de la mopa",
          "Comprueba el ajuste de caudal de agua",
          "Aspira antes de fregar",
          "Busca fugas alrededor del depósito"
        ],
        "steps": [
          "Lava o sustituye la mopa",
          "Baja el caudal de agua",
          "Haz primero una pasada solo de aspiración en suelos sucios",
          "Vuelve a colocar el depósito y revisa la junta",
          "Haz un ciclo de prueba en una habitación y revisa el resultado"
        ]
      },
      "fr": {
        "title": "L'aspirateur robot laisse des traces ou des flaques en lavant",
        "symptom": "Après le lavage, le sol présente des traces, des zones humides, ou le robot s'arrête sur le sol mouillé.",
        "category": "Aspirateurs robots",
        "escalation": "Si le robot fuit lorsqu'il est sur sa base, cessez d'utiliser le réservoir et vérifiez son joint : les fuites internes peuvent endommager l'électronique.",
        "appliesTo": [
          "Aspirateurs robots laveurs",
          "Robots avec réservoir ou base d'eau"
        ],
        "likelyCauses": [
          "Serpillière sale ou usée",
          "Débit d'eau trop élevé",
          "Serpillière mal posée ou déjà saturée",
          "Sol non aspiré avant le lavage",
          "Roues qui patinent sur sol mouillé"
        ],
        "quickChecks": [
          "Vérifier l'état et la mise en place de la serpillière",
          "Contrôler le réglage du débit d'eau",
          "Aspirer avant de laver",
          "Chercher des fuites autour du réservoir"
        ],
        "steps": [
          "Laver ou remplacer la serpillière",
          "Réduire le débit d'eau",
          "Passer d'abord un cycle d'aspiration seule sur sol sale",
          "Remettre le réservoir en place et vérifier le joint",
          "Lancer un cycle d'essai dans une pièce et contrôler le résultat"
        ]
      }
    },
    "smart-lock-keypad-code-fails": {
      "es": {
        "title": "El teclado de la cerradura inteligente deja de aceptar el código",
        "symptom": "El teclado se ilumina pero el código guardado ya no abre la puerta, o solo se rechaza a determinadas horas.",
        "category": "Cerraduras inteligentes",
        "escalation": "Si el teclado falla con la batería baja, cambia las pilas antes de modificar códigos: la falta de energía provoca lecturas parciales en lugar de fallos limpios.",
        "appliesTo": [
          "Cerraduras con teclado",
          "Cerraduras retrofit con teclado",
          "Cerraduras Matter"
        ],
        "likelyCauses": [
          "Batería por debajo del nivel que necesita el teclado",
          "Código eliminado o sobrescrito en la app",
          "Membrana del teclado mojada o sucia",
          "Actualización de firmware interrumpida",
          "Bloqueo por auto-cierre o modo privacidad"
        ],
        "quickChecks": [
          "Revisa el nivel de batería en la app",
          "Prueba el desbloqueo remoto desde la app, que usa la radio y no el teclado",
          "Seca el teclado y reinténtalo",
          "Confirma que el código sigue existiendo en la app"
        ],
        "steps": [
          "Sustituye las pilas por el tipo recomendado",
          "Vuelve a añadir el código de acceso en la app",
          "Limpia y seca el teclado y vuelve a probar",
          "Actualiza el firmware con la puerta abierta",
          "Prueba el teclado y el desbloqueo por app antes de volver a confiar en él"
        ]
      },
      "fr": {
        "title": "Le clavier de la serrure connectée n'accepte plus le code",
        "symptom": "Le clavier s'éclaire mais le code enregistré n'ouvre plus la porte, ou n'est refusé qu'à certains moments.",
        "category": "Serrures connectées",
        "escalation": "Si le clavier échoue avec une pile faible, remplacez les piles avant de modifier les codes : le manque d'énergie provoque des lectures partielles plutôt que des échecs francs.",
        "appliesTo": [
          "Serrures à clavier",
          "Serrures en retrofit avec clavier",
          "Serrures Matter"
        ],
        "likelyCauses": [
          "Pile en dessous du seuil nécessaire au clavier",
          "Code supprimé ou écrasé dans l'app",
          "Membrane du clavier mouillée ou encrassée",
          "Mise à jour de firmware interrompue",
          "Verrouillage automatique ou mode confidentialité bloquant l'accès"
        ],
        "quickChecks": [
          "Vérifier le niveau de pile dans l'app",
          "Tester le déverrouillage à distance depuis l'app, qui utilise la radio et non le clavier",
          "Sécher le clavier et réessayer",
          "Confirmer que le code existe toujours dans l'app"
        ],
        "steps": [
          "Remplacer les piles par le type recommandé",
          "Réajouter le code d'accès dans l'app",
          "Nettoyer et sécher le clavier puis retester",
          "Mettre à jour le firmware porte ouverte",
          "Tester le clavier et le déverrouillage par app avant de s'y fier à nouveau"
        ]
      }
    },
    "wearable-heart-rate-inaccurate": {
      "es": {
        "title": "Las lecturas de frecuencia cardíaca del wearable parecen erróneas",
        "symptom": "La frecuencia cardíaca durante el ejercicio es muy inferior o superior a la esperada, o el sensor muestra saltos grandes.",
        "category": "Wearables",
        "escalation": "La frecuencia cardíaca de un wearable de consumo no es una medida médica. Si las lecturas importan clínicamente, usa un monitor validado y consulta a un profesional.",
        "appliesTo": [
          "Pulseras de actividad",
          "Smartwatches",
          "Anillos inteligentes"
        ],
        "likelyCauses": [
          "Correa o anillo demasiado sueltos que hacen perder el contacto",
          "Sensor cubierto de suciedad, sudor o un tatuaje",
          "Colocado sobre la articulación de la muñeca en vez de por encima",
          "Firmware que cambia el algoritmo de medición",
          "Artefacto de movimiento en pesas o remo"
        ],
        "quickChecks": [
          "Comprueba el ajuste y la posición",
          "Limpia la zona del sensor",
          "Compara en reposo con el pulso tomado a mano",
          "Busca una actualización de firmware"
        ],
        "steps": [
          "Aprieta y recoloca el dispositivo por encima del hueso de la muñeca",
          "Limpia el sensor y la piel",
          "Actualiza el firmware",
          "Prueba en cardio continuo en lugar de intervalos o pesas",
          "Si las lecturas siguen siendo erráticas, solicita una revisión técnica"
        ]
      },
      "fr": {
        "title": "Les mesures de fréquence cardiaque du bracelet semblent fausses",
        "symptom": "La fréquence cardiaque pendant l'effort est très inférieure ou supérieure à l'attendu, ou le capteur affiche de grands sauts.",
        "category": "Objets portables",
        "escalation": "La fréquence cardiaque d'un objet connecté grand public n'est pas une mesure médicale. Si les valeurs ont une importance clinique, utilisez un cardiofréquencemètre validé et consultez un professionnel.",
        "appliesTo": [
          "Bracelets d'activité",
          "Montres connectées",
          "Bagues connectées"
        ],
        "likelyCauses": [
          "Bracelet ou bague trop lâche entraînant une perte de contact",
          "Capteur couvert de saleté, de sueur ou d'un tatouage",
          "Porté sur l'articulation du poignet au lieu d'au-dessus",
          "Firmware modifiant l'algorithme de mesure",
          "Artéfacts de mouvement en musculation ou en rame"
        ],
        "quickChecks": [
          "Vérifier l'ajustement et la position",
          "Nettoyer la zone du capteur",
          "Comparer au repos avec le pouls pris manuellement",
          "Chercher une mise à jour de firmware"
        ],
        "steps": [
          "Serrer et repositionner l'appareil au-dessus de l'os du poignet",
          "Nettoyer le capteur et la peau",
          "Mettre à jour le firmware",
          "Tester en cardio continu plutôt qu'en fractionné ou en musculation",
          "Si les valeurs restent erratiques, demander un contrôle technique"
        ]
      }
    },
    "smart-plug-no-energy-reading": {
      "es": {
        "title": "El enchufe inteligente no muestra datos de consumo",
        "symptom": "El enchufe conmuta bien, pero las cifras de potencia o consumo se quedan a cero o faltan.",
        "category": "Electricidad",
        "escalation": "Si la lectura muestra un valor fijo que nunca cambia, puede haber fallado el chip de medida: ninguna calibración en la app lo arreglará.",
        "appliesTo": [
          "Enchufes con medición de energía",
          "Relés con medición",
          "Medidores de pinza"
        ],
        "likelyCauses": [
          "Carga demasiado pequeña para el rango del medidor",
          "Firmware sin medición para ese modelo",
          "Unidades o tarifa sin configurar en la app",
          "Se muestra un límite de seguridad local en lugar de una medición",
          "Avería del hardware de medición"
        ],
        "quickChecks": [
          "Conecta una carga mayor y conocida y observa la lectura",
          "Comprueba en las especificaciones si el modelo mide energía",
          "Revisa las unidades y los ajustes de tarifa",
          "Actualiza el firmware"
        ],
        "steps": [
          "Prueba con una carga para la que esté diseñado el medidor",
          "Confirma que el modelo realmente mide potencia",
          "Configura unidades y tarifa en la app",
          "Actualiza el firmware y vuelve a comprobar",
          "Si la lectura nunca cambia, solicita un reemplazo en garantía"
        ]
      },
      "fr": {
        "title": "La prise connectée n'affiche aucune donnée d'énergie",
        "symptom": "La prise commute correctement, mais les valeurs de puissance ou de consommation restent à zéro ou sont absentes.",
        "category": "Électricité",
        "escalation": "Si la mesure affiche une valeur fixe qui ne change jamais, la puce de mesure est peut-être en panne : aucune calibration dans l'app ne corrigera cela.",
        "appliesTo": [
          "Prises avec mesure d'énergie",
          "Relais avec mesure",
          "Pinces de mesure"
        ],
        "likelyCauses": [
          "Charge trop faible pour la plage de mesure",
          "Firmware sans mesure pour ce modèle",
          "Unités ou tarif non configurés dans l'app",
          "Limite de sécurité locale affichée au lieu d'une mesure",
          "Défaillance matérielle de la mesure"
        ],
        "quickChecks": [
          "Brancher une charge plus importante et connue puis observer la mesure",
          "Vérifier dans les spécifications si le modèle mesure l'énergie",
          "Revoir les unités et les réglages de tarif",
          "Mettre à jour le firmware"
        ],
        "steps": [
          "Tester avec une charge prévue pour le calibre du compteur",
          "Confirmer que le modèle mesure réellement la puissance",
          "Configurer les unités et le tarif dans l'app",
          "Mettre à jour le firmware et revérifier",
          "Si la mesure ne change jamais, demander un remplacement sous garantie"
        ]
      }
    },
    "video-doorbell-battery-drains-fast": {
      "es": {
        "title": "El videoportero a batería se agota en pocos días",
        "symptom": "Un videoportero a batería necesita recargas mucho más a menudo que los meses de uso previstos.",
        "category": "Videoporteros",
        "escalation": "Si el videoportero sigue agotándose tras desactivar la detección y bajar la calidad del flujo, la causa es la ruta de radio o la batería: revisa la intensidad de señal y el estado de la batería.",
        "appliesTo": [
          "Videoporteros a batería",
          "Cámaras a batería con eventos frecuentes"
        ],
        "likelyCauses": [
          "Demasiados eventos de movimiento en una calle concurrida",
          "Wi-Fi débil que obliga a transmitir con más potencia",
          "Uso frecuente de la visualización en directo",
          "El frío reduce la capacidad de la batería",
          "Química de batería antigua o no recomendada"
        ],
        "quickChecks": [
          "Revisa el número de eventos al día",
          "Comprueba la intensidad de señal en la app",
          "Anota la temperatura exterior",
          "Revisa la salud o el número de ciclos de la batería si se muestra"
        ],
        "steps": [
          "Reduce las zonas de detección y la sensibilidad",
          "Baja la resolución en directo y la duración de los clips",
          "Acerca el router o añade un punto de acceso junto a la puerta",
          "Actualiza el firmware",
          "Sustituye las baterías agotadas por el tipo recomendado y vuelve a medir el consumo diario"
        ]
      },
      "fr": {
        "title": "La sonnette vidéo sur batterie se vide en quelques jours",
        "symptom": "Une sonnette sur batterie nécessite des recharges bien plus fréquentes que les mois d'autonomie annoncés.",
        "category": "Sonnettes vidéo",
        "escalation": "Si la sonnette se vide encore après avoir désactivé la détection et réduit la qualité du flux, la cause est la liaison radio ou la batterie : vérifiez la force du signal et l'état de la batterie.",
        "appliesTo": [
          "Sonnettes vidéo sur batterie",
          "Caméras sur batterie avec événements fréquents"
        ],
        "likelyCauses": [
          "Trop d'événements de mouvement dans une rue passante",
          "Wi-Fi faible forçant une puissance d'émission plus élevée",
          "Consultation fréquente de l'affichage en direct",
          "Le froid réduit la capacité de la batterie",
          "Chimie de batterie ancienne ou non recommandée"
        ],
        "quickChecks": [
          "Vérifier le nombre d'événements par jour",
          "Contrôler la force du signal dans l'app",
          "Noter la température extérieure",
          "Vérifier l'état ou le nombre de cycles de la batterie si affiché"
        ],
        "steps": [
          "Réduire les zones de détection et la sensibilité",
          "Baisser la résolution en direct et la durée des clips",
          "Rapprocher le routeur ou ajouter un point d'accès près de la porte",
          "Mettre à jour le firmware",
          "Remplacer les batteries usées par le type recommandé et remesurer la consommation quotidienne"
        ]
      }
    },
    "camera-image-blurry": {
      "es": {
        "title": "La imagen de la cámara se ve borrosa o desenfocada",
        "symptom": "El metraje se ve poco nítido incluso de día, o solo una parte del encuadre está enfocada.",
        "category": "Cámaras de seguridad",
        "escalation": "Si solo está nítida una zona del encuadre, la lente es de foco fijo: recoloca la cámara o elige un modelo adecuado a la distancia.",
        "appliesTo": [
          "Cámaras Wi-Fi",
          "Cámaras con batería",
          "Cámaras de foco fijo"
        ],
        "likelyCauses": [
          "Cúpula o cristal rayado o sucio",
          "Film protector aún en la lente",
          "Condensación tras la cubierta de la lente",
          "Sujeto más cerca que la distancia mínima de enfoque",
          "Carcasa sucia que reduce el contraste"
        ],
        "quickChecks": [
          "Limpia la cubierta de la lente con un paño de microfibra",
          "Comprueba si queda film protector",
          "Busca condensación dentro de la carcasa",
          "Prueba el enfoque a distintas distancias"
        ],
        "steps": [
          "Limpia la lente y la carcasa",
          "Retira cualquier film de transporte",
          "Deja secar la cámara si hay condensación y revisa la junta",
          "Recoloca la cámara según la distancia al sujeto",
          "Compara con una segunda cámara antes de sustituirla"
        ]
      },
      "fr": {
        "title": "L'image de la caméra est floue ou mal mise au point",
        "symptom": "Les images paraissent molles même en plein jour, ou seule une partie du cadre est nette.",
        "category": "Caméras de sécurité",
        "escalation": "Si seule une zone du cadre est nette, l'objectif est à focale fixe : repositionnez la caméra ou choisissez un modèle adapté à la distance.",
        "appliesTo": [
          "Caméras Wi-Fi",
          "Caméras sur batterie",
          "Caméras à focale fixe"
        ],
        "likelyCauses": [
          "Dôme ou verre rayé ou sale",
          "Film protecteur encore sur l'objectif",
          "Condensation derrière le capot de l'objectif",
          "Sujet plus proche que la distance minimale de mise au point",
          "Boîtier sale réduisant le contraste"
        ],
        "quickChecks": [
          "Nettoyer le capot de l'objectif avec un chiffon microfibre",
          "Vérifier la présence d'un film protecteur",
          "Chercher de la condensation dans le boîtier",
          "Tester la mise au point à différentes distances"
        ],
        "steps": [
          "Nettoyer l'objectif et le boîtier",
          "Retirer tout film de transport",
          "Laisser sécher la caméra en cas de condensation et vérifier le joint",
          "Repositionner la caméra selon la distance du sujet",
          "Comparer avec une seconde caméra avant de remplacer"
        ]
      }
    },
    "matter-commissioning-code-rejected": {
      "es": {
        "title": "Se rechaza el código de puesta en marcha de Matter",
        "symptom": "El controlador indica que el código de emparejamiento es incorrecto, ha caducado o ya está en uso.",
        "category": "Matter",
        "escalation": "Si el código ya se usó, el dispositivo sigue reclamado por el controlador anterior: elimínalo allí primero en lugar de reintentar el código.",
        "appliesTo": [
          "Dispositivos Matter",
          "Controladores y hubs Matter",
          "Dispositivos Thread durante la puesta en marcha"
        ],
        "likelyCauses": [
          "Código ya usado para dar de alta el dispositivo en otro ecosistema",
          "Errores al teclear el código de emparejamiento manual",
          "Dispositivo sin restablecer al modo de puesta en marcha",
          "Firmware del controlador demasiado antiguo para el dispositivo",
          "Border router Thread no disponible para dispositivos Thread"
        ],
        "quickChecks": [
          "Comprueba si el dispositivo ya aparece en otro ecosistema",
          "Verifica los dígitos de la etiqueta o de la app",
          "Confirma que el LED indica modo de puesta en marcha",
          "Actualiza la app del controlador y el firmware del hub"
        ],
        "steps": [
          "Elimina el dispositivo de cualquier ecosistema que ya lo tenga",
          "Restablece el dispositivo al modo de puesta en marcha",
          "Elige añadir dispositivo en la app del controlador",
          "Introduce o escanea el código una sola vez, sin reintentos a ciegas",
          "En dispositivos Thread, confirma antes que el border router está en línea"
        ]
      },
      "fr": {
        "title": "Le code d'appairage Matter est refusé",
        "symptom": "Le contrôleur indique que le code d'appairage est erroné, expiré ou déjà utilisé.",
        "category": "Matter",
        "escalation": "Si le code a déjà servi, l'appareil est encore revendiqué par le contrôleur précédent : supprimez-le d'abord là-bas plutôt que de réessayer le code.",
        "appliesTo": [
          "Appareils Matter",
          "Contrôleurs et hubs Matter",
          "Appareils Thread pendant l'appairage"
        ],
        "likelyCauses": [
          "Code déjà utilisé pour appairer l'appareil ailleurs",
          "Erreurs de saisie du code d'appairage manuel",
          "Appareil non réinitialisé en mode appairage",
          "Firmware du contrôleur trop ancien pour l'appareil",
          "Routeur frontière Thread indisponible pour les appareils Thread"
        ],
        "quickChecks": [
          "Vérifier si l'appareil apparaît déjà dans un autre écosystème",
          "Vérifier les chiffres sur l'étiquette ou dans l'app",
          "Confirmer que la LED indique le mode appairage",
          "Mettre à jour l'app du contrôleur et le firmware du hub"
        ],
        "steps": [
          "Supprimer l'appareil de tout écosystème qui le possède déjà",
          "Réinitialiser l'appareil en mode appairage",
          "Choisir ajouter un appareil dans l'app du contrôleur",
          "Saisir ou scanner le code une seule fois, sans réessais à l'aveugle",
          "Pour les appareils Thread, confirmer d'abord que le routeur frontière est en ligne"
        ]
      }
    },
    "wifi-router-too-many-devices": {
      "es": {
        "title": "El Wi-Fi se ralentiza con muchos dispositivos conectados",
        "symptom": "Enchufes y cámaras se desconectan a medida que se añaden dispositivos, y los móviles van lentos en las mismas habitaciones.",
        "category": "Redes",
        "escalation": "Si el router ha alcanzado su límite de clientes, ajustar dispositivos no servirá: añade un punto de acceso o una red IoT dedicada en lugar de reiniciar equipos.",
        "appliesTo": [
          "Routers con muchos clientes IoT",
          "Sistemas mesh",
          "Viviendas con 40 o más dispositivos conectados"
        ],
        "likelyCauses": [
          "Límite de clientes alcanzado en el router o en la banda",
          "Banda de 2,4 GHz congestionada con dispositivos pequeños",
          "Un único punto de acceso cubriendo un área demasiado grande",
          "Pool de DHCP demasiado pequeño para el número de dispositivos",
          "Dispositivos baratos que mantienen conexiones abiertas"
        ],
        "quickChecks": [
          "Cuenta los dispositivos conectados en la interfaz del router",
          "Comprueba qué banda usa cada dispositivo",
          "Busca mensajes de agotamiento de direcciones DHCP",
          "Comprueba si las desconexiones coinciden con la incorporación de dispositivos"
        ],
        "steps": [
          "Amplía el pool de DHCP o reduce los tiempos de concesión",
          "Pasa los dispositivos IoT a la banda de 2,4 GHz o a una red de invitados",
          "Añade un punto de acceso o un nodo mesh",
          "Actualiza el firmware del router y de los dispositivos",
          "Sustituye los dispositivos que se reconectan una y otra vez"
        ]
      },
      "fr": {
        "title": "Le Wi-Fi ralentit avec de nombreux appareils connectés",
        "symptom": "Prises et caméras se déconnectent à mesure que des appareils sont ajoutés, et les téléphones ralentissent dans les mêmes pièces.",
        "category": "Réseau",
        "escalation": "Si le routeur a atteint sa limite de clients, régler les appareils n'y changera rien : ajoutez un point d'accès ou un réseau IoT dédié plutôt que de redémarrer les équipements.",
        "appliesTo": [
          "Routeurs avec de nombreux clients IoT",
          "Systèmes maillés",
          "Logements avec 40 appareils connectés ou plus"
        ],
        "likelyCauses": [
          "Limite de clients atteinte sur le routeur ou la bande",
          "Bande 2,4 GHz saturée par de petits appareils",
          "Point d'accès unique couvrant une zone trop vaste",
          "Bail DHCP trop petit pour le nombre d'appareils",
          "Appareils bon marché maintenant des connexions ouvertes"
        ],
        "quickChecks": [
          "Compter les appareils connectés dans l'interface du routeur",
          "Vérifier la bande utilisée par chaque appareil",
          "Chercher des messages d'épuisement des adresses DHCP",
          "Vérifier si les coupures coïncident avec l'ajout d'appareils"
        ],
        "steps": [
          "Élargir le bail DHCP ou raccourcir les durées de bail",
          "Basculer les appareils IoT sur la bande 2,4 GHz ou un réseau invité",
          "Ajouter un point d'accès ou un nœud maillé",
          "Mettre à jour le firmware du routeur et des appareils",
          "Remplacer les appareils qui se reconnectent sans cesse"
        ]
      }
    },
    "camera-solar-panel-not-charging": {
      "es": {
        "title": "El panel solar no mantiene cargada la cámara",
        "symptom": "Una cámara alimentada por panel solar sigue perdiendo carga incluso en días soleados.",
        "category": "Alimentación",
        "escalation": "Si un multímetro muestra salida en el panel pero la cámara nunca carga, el fallo está en el circuito de carga o el cable, no en el panel.",
        "appliesTo": [
          "Cámaras solares",
          "Cámaras a batería con panel solar",
          "Cámaras de caza"
        ],
        "likelyCauses": [
          "Panel a la sombra o con ángulo incorrecto para la estación",
          "Panel sucio o cubierto de nieve",
          "Cable o conector corroído o flojo",
          "Sol invernal bajo más tráfico de eventos",
          "Panel de tamaño insuficiente para el consumo de la cámara"
        ],
        "quickChecks": [
          "Revisa la orientación del panel y las sombras a lo largo del día",
          "Limpia el panel",
          "Inspecciona el cable y el conector",
          "Revisa el consumo diario"
        ],
        "steps": [
          "Recoloca e inclina el panel hacia el sol del mediodía",
          "Limpia el panel y revisa cable y conector",
          "Reduce el tráfico de eventos y el uso de la visualización en directo",
          "Actualiza el firmware y consulta el registro de carga",
          "Mide la salida del panel si la batería sigue bajando y sustituye la pieza defectuosa"
        ]
      },
      "fr": {
        "title": "Le panneau solaire ne maintient pas la caméra chargée",
        "symptom": "Une caméra alimentée par panneau solaire perd toujours de la charge même par beau temps.",
        "category": "Alimentation",
        "escalation": "Si un multimètre indique une sortie au panneau mais que la caméra ne charge jamais, le défaut vient du circuit de charge ou du câble, pas du panneau.",
        "appliesTo": [
          "Caméras solaires",
          "Caméras sur batterie avec panneau solaire",
          "Caméras de chasse"
        ],
        "likelyCauses": [
          "Panneau à l'ombre ou mal incliné pour la saison",
          "Panneau sale ou couvert de neige",
          "Câble ou connecteur corrodé ou desserré",
          "Soleil d'hiver faible et trafic d'événements élevé",
          "Panneau sous-dimensionné pour la consommation de la caméra"
        ],
        "quickChecks": [
          "Vérifier l'orientation du panneau et les ombres au fil de la journée",
          "Nettoyer le panneau",
          "Inspecter le câble et le connecteur",
          "Revoir la consommation quotidienne"
        ],
        "steps": [
          "Repositionner et incliner le panneau vers le soleil de midi",
          "Nettoyer le panneau et vérifier câble et connecteur",
          "Réduire le trafic d'événements et l'usage de l'affichage en direct",
          "Mettre à jour le firmware et consulter le journal de charge",
          "Mesurer la sortie du panneau si la batterie baisse encore, puis remplacer la pièce défectueuse"
        ]
      }
    },
    "gps-tracker-location-inaccurate": {
      "es": {
        "title": "El rastreador GPS informa de una ubicación incorrecta",
        "symptom": "Un rastreador muestra una ubicación a cientos de metros, salta entre sitios o deja de actualizarse.",
        "category": "Localización",
        "escalation": "Si el rastreador es preciso en exteriores pero se desvía en interiores, la posición proviene de Wi-Fi o de telefonía en lugar del GPS: valora la precisión según el método indicado.",
        "appliesTo": [
          "Rastreadores LTE y GPS",
          "Rastreadores de mascotas y activos",
          "Rastreadores de vehículos"
        ],
        "likelyCauses": [
          "Uso en interiores donde el GPS queda bloqueado",
          "Posicionamiento asistido por Wi-Fi o torres de telefonía",
          "Batería baja que obliga a obtener posiciones con menos frecuencia",
          "Poca vista del cielo en ciudades o bajo cubierta",
          "Retardo del firmware o del mapa de la plataforma"
        ],
        "quickChecks": [
          "Compara el valor de precisión indicado en la app",
          "Comprueba si el dispositivo informa de posiciones LTE, Wi-Fi o GPS",
          "Prueba en exteriores con cielo despejado",
          "Anota el intervalo de actualización configurado"
        ],
        "steps": [
          "Fuerza una actualización manual de ubicación en exteriores",
          "Comprueba el método de posicionamiento y la precisión indicados",
          "Ajusta el intervalo de actualización y el modo de batería",
          "Actualiza el firmware",
          "Si el dispositivo nunca obtiene posición GPS en exteriores, solicita una revisión técnica"
        ]
      },
      "fr": {
        "title": "Le traceur GPS indique une position erronée",
        "symptom": "Un traceur affiche une position à plusieurs centaines de mètres, saute d'un lieu à l'autre ou cesse de se mettre à jour.",
        "category": "Localisation",
        "escalation": "Si le traceur est précis dehors mais dérive à l'intérieur, la position provient du Wi-Fi ou du réseau cellulaire et non du GPS : jugez la précision selon la méthode indiquée.",
        "appliesTo": [
          "Traceurs LTE et GPS",
          "Traceurs pour animaux et actifs",
          "Traceurs de véhicules"
        ],
        "likelyCauses": [
          "Usage en intérieur où le GPS est bloqué",
          "Positionnement assisté par Wi-Fi ou antennes cellulaires",
          "Batterie faible forçant des relevés moins fréquents",
          "Mauvaise vue du ciel en ville ou sous couvert",
          "Retard du firmware ou de la cartographie de la plateforme"
        ],
        "quickChecks": [
          "Comparer la valeur de précision indiquée dans l'app",
          "Vérifier si l'appareil indique des positions LTE, Wi-Fi ou GPS",
          "Tester dehors avec une vue dégagée du ciel",
          "Noter l'intervalle de mise à jour configuré"
        ],
        "steps": [
          "Forcer une mise à jour manuelle de la position en extérieur",
          "Vérifier la méthode de positionnement et la précision indiquées",
          "Ajuster l'intervalle de mise à jour et le mode batterie",
          "Mettre à jour le firmware",
          "Si l'appareil n'obtient jamais de position GPS dehors, demander un contrôle technique"
        ]
      }
    }
  },
  "certification": {
    "fcc": {
      "es": {
        "name": "Autorización de equipos de la FCC",
        "group": "Radio y telecomunicaciones",
        "region": "Estados Unidos",
        "status": "Obligatoria para productos de radio",
        "issuer": "Comisión Federal de Comunicaciones (FCC)",
        "summary": "Normativa estadounidense de autorización de equipos para transmisores de radio y determinados productos electrónicos comercializados en el mercado americano.",
        "meaning": "Todo dispositivo que emite energía de radiofrecuencia en Estados Unidos suele necesitar autorización de la FCC antes de comercializarse o importarse. Según la tecnología, se aplica la vía de certificación, la declaración de conformidad del proveedor o la verificación.",
        "appliesTo": [
          "Radios Wi-Fi, Bluetooth, celulares y sub-GHz",
          "Radiadores no intencionados, como electrónica conmutada",
          "Módulos inalámbricos y equipos que los incorporan"
        ],
        "doesNotCover": [
          "La seguridad eléctrica, cubierta por el listado NRTL (UL o ETL)",
          "La exposición a RF de los usuarios, salvo que se evalúe frente a los límites",
          "La ciberseguridad o la privacidad del dispositivo y su nube"
        ],
        "checklist": [
          "Identifica la vía de autorización correcta para cada radio",
          "Ensaya en un laboratorio acreditado según la parte aplicable de la FCC",
          "Mantén correctos la etiqueta del FCC ID y las menciones del manual",
          "Completa la declaración del proveedor o la certificación",
          "Registra las condiciones de la concesión del módulo si usas uno precertificado"
        ]
      },
      "fr": {
        "name": "Autorisation d'équipement FCC",
        "group": "Radio et télécoms",
        "region": "États-Unis",
        "status": "Obligatoire pour les produits radio",
        "issuer": "Federal Communications Commission (FCC)",
        "summary": "Réglementation américaine d'autorisation d'équipement pour les émetteurs radio et certains produits électroniques mis sur le marché américain.",
        "meaning": "Tout appareil émettant de l'énergie radioélectrique aux États-Unis doit généralement obtenir une autorisation FCC avant sa commercialisation ou son importation. Selon la technologie, la voie est la certification, la déclaration de conformité du fournisseur ou la vérification.",
        "appliesTo": [
          "Radios Wi-Fi, Bluetooth, cellulaires et sub-GHz",
          "Émetteurs non intentionnels, comme l'électronique à découpage",
          "Modules sans fil et hôtes qui les intègrent"
        ],
        "doesNotCover": [
          "La sécurité électrique, couverte par un essai NRTL (UL ou ETL)",
          "L'exposition des utilisateurs aux RF, sauf évaluation par rapport aux limites",
          "La cybersécurité et la vie privée de l'appareil et de son cloud"
        ],
        "checklist": [
          "Identifier la bonne voie d'autorisation pour chaque radio",
          "Tester en laboratoire accrédité selon la partie FCC applicable",
          "Tenir à jour l'étiquette FCC ID et les mentions du manuel",
          "Compléter la déclaration du fournisseur ou la certification",
          "Consigner les conditions d'octroi du module si un module précertifié est utilisé"
        ]
      }
    },
    "ised": {
      "es": {
        "name": "Certificación de radio ISED (Canadá)",
        "group": "Radio y telecomunicaciones",
        "region": "Canadá",
        "status": "Obligatoria para productos de radio",
        "issuer": "Innovation, Science and Economic Development Canada",
        "summary": "Certificación y etiquetado de equipos de radio en Canadá, gestionados dentro del programa de gestión del espectro de ISED.",
        "meaning": "Los productos inalámbricos vendidos en Canadá requieren un número de certificación ISED y el etiquetado correcto, normalmente en inglés y francés. Se aceptan informes de laboratorios acreditados a través de un organismo de certificación reconocido.",
        "appliesTo": [
          "Dispositivos Wi-Fi, Bluetooth y celulares",
          "Mandos y sensores sub-GHz",
          "Módulos inalámbricos importados a Canadá"
        ],
        "doesNotCover": [
          "La aprobación de seguridad eléctrica canadiense (cUL o equivalente)",
          "Los requisitos provinciales de protección al consumidor",
          "Las obligaciones de ciberseguridad"
        ],
        "checklist": [
          "Selecciona la norma RSS correcta para la radio",
          "Ensaya y obtén el número de certificación de un organismo reconocido",
          "Aplica la etiqueta ISED y las menciones bilingües",
          "Registra la versión de hardware y firmware ensayada"
        ]
      },
      "fr": {
        "name": "Certification radio ISED (Canada)",
        "group": "Radio et télécoms",
        "region": "Canada",
        "status": "Obligatoire pour les produits radio",
        "issuer": "Innovation, Sciences et Développement économique Canada",
        "summary": "Certification et étiquetage des équipements radio au Canada, gérés dans le cadre du programme de gestion du spectre d'ISED.",
        "meaning": "Les produits sans fil vendus au Canada nécessitent un numéro de certification ISED et un étiquetage correct, généralement en anglais et en français. Les rapports de laboratoires accrédités sont acceptés via un organisme de certification reconnu.",
        "appliesTo": [
          "Appareils Wi-Fi, Bluetooth et cellulaires",
          "Télécommandes et capteurs sub-GHz",
          "Modules sans fil importés au Canada"
        ],
        "doesNotCover": [
          "L'homologation de sécurité électrique canadienne (cUL ou équivalent)",
          "Les exigences provinciales de protection des consommateurs",
          "Les obligations de cybersécurité"
        ],
        "checklist": [
          "Sélectionner la bonne norme RSS pour la radio",
          "Tester et obtenir le numéro de certification auprès d'un organisme reconnu",
          "Appliquer l'étiquette ISED et les mentions bilingues",
          "Consigner la version matérielle et firmware testée"
        ]
      }
    },
    "ce": {
      "es": {
        "name": "Marcado CE según la Directiva de Equipos Radioeléctricos",
        "group": "Radio y telecomunicaciones",
        "region": "Unión Europea",
        "status": "Obligatoria en la UE",
        "issuer": "Organismos notificados y el fabricante según la legislación de la UE",
        "summary": "La Directiva 2014/53/UE es la principal vía para el marcado CE de productos inalámbricos vendidos en la Unión Europea.",
        "meaning": "El fabricante declara la conformidad, coloca el marcado CE y elabora el expediente técnico. Desde el 1 de agosto de 2025, el reglamento delegado de ciberseguridad añade requisitos obligatorios para los equipos radioeléctricos conectados a internet.",
        "appliesTo": [
          "Cualquier producto con transmisor de radio",
          "Dispositivos que combinan radio, GPS o funciones celulares",
          "Equipos radioeléctricos conectados a internet, incluidas sus apps"
        ],
        "doesNotCover": [
          "El marcado CE no demuestra por sí solo que un producto sea seguro o duradero",
          "Las obligaciones químicas o de envases, cubiertas por RoHS, REACH y la normativa de envases",
          "Las restricciones nacionales de espectro que siguen aplicándose dentro de la UE"
        ],
        "checklist": [
          "Identifica las directivas y normas armonizadas aplicables",
          "Decide si se requiere un organismo notificado",
          "Elabora y conserva el expediente técnico el tiempo exigido",
          "Firma la declaración UE de conformidad",
          "Aplica el marcado CE, los datos del importador y los idiomas exigidos"
        ]
      },
      "fr": {
        "name": "Marquage CE au titre de la directive Équipements radio",
        "group": "Radio et télécoms",
        "region": "Union européenne",
        "status": "Obligatoire dans l'UE",
        "issuer": "Organismes notifiés et fabricant selon le droit de l'UE",
        "summary": "La directive 2014/53/UE constitue la principale voie de marquage CE pour les produits sans fil vendus dans l'Union européenne.",
        "meaning": "Le fabricant déclare la conformité, appose le marquage CE et constitue le dossier technique. Depuis le 1er août 2025, le règlement délégué sur la cybersécurité ajoute des exigences obligatoires pour les équipements radio connectés à internet.",
        "appliesTo": [
          "Tout produit comportant un émetteur radio",
          "Appareils combinant radio, GPS ou fonctions cellulaires",
          "Équipements radio connectés à internet, y compris leurs applications"
        ],
        "doesNotCover": [
          "Le marquage CE ne prouve pas à lui seul la sécurité ou la durabilité d'un produit",
          "Les obligations chimiques ou d'emballage, couvertes par RoHS, REACH et la réglementation emballages",
          "Les restrictions nationales de spectre qui s'appliquent encore dans l'UE"
        ],
        "checklist": [
          "Identifier les directives et normes harmonisées applicables",
          "Déterminer si un organisme notifié est requis",
          "Constituer et conserver le dossier technique pendant la durée exigée",
          "Signer la déclaration UE de conformité",
          "Apposer le marquage CE, les coordonnées de l'importateur et les langues requises"
        ]
      }
    },
    "ukca": {
      "es": {
        "name": "Marcado UKCA (Gran Bretaña)",
        "group": "Radio y telecomunicaciones",
        "region": "Reino Unido",
        "status": "Obligatoria en Gran Bretaña",
        "issuer": "Organismos aprobados del Reino Unido y el fabricante",
        "summary": "Marcado de evaluación de la conformidad del Reino Unido para la mayoría de productos comercializados en Gran Bretaña, con reglas distintas en Irlanda del Norte.",
        "meaning": "El marcado UKCA refleja gran parte del marco de la UE tras el Brexit. El Gobierno británico sigue reconociendo el marcado CE para la mayoría de productos, pero conviene verificar por producto los equipos de radio, los productos de seguridad y el etiquetado antes de enviar.",
        "appliesTo": [
          "Equipos de radio comercializados en Gran Bretaña",
          "Productos en los que el fabricante elige la vía UKCA",
          "Importadores y distribuidores con stock en el Reino Unido"
        ],
        "doesNotCover": [
          "Irlanda del Norte, donde se aplican disposiciones específicas UKNI",
          "El acceso al mercado de la UE, que sigue exigiendo marcado CE",
          "Aprobaciones específicas como gas o productos sanitarios"
        ],
        "checklist": [
          "Confirma si la vía aceptada para tu producto es CE o UKCA",
          "Utiliza un organismo aprobado del Reino Unido cuando se exija evaluación por terceros",
          "Conserva la declaración de conformidad del Reino Unido con los datos del responsable británico",
          "Aplica el marcado UKCA y el etiquetado correcto"
        ]
      },
      "fr": {
        "name": "Marquage UKCA (Grande-Bretagne)",
        "group": "Radio et télécoms",
        "region": "Royaume-Uni",
        "status": "Obligatoire en Grande-Bretagne",
        "issuer": "Organismes agréés britanniques et fabricant",
        "summary": "Marquage d'évaluation de la conformité britannique pour la plupart des produits mis sur le marché en Grande-Bretagne, avec des règles distinctes en Irlande du Nord.",
        "meaning": "Le marquage UKCA reprend une grande partie du cadre européen après le Brexit. Le gouvernement britannique continue de reconnaître le marquage CE pour la plupart des produits, mais il convient de vérifier par produit les équipements radio, les produits de sécurité et l'étiquetage avant expédition.",
        "appliesTo": [
          "Équipements radio mis sur le marché en Grande-Bretagne",
          "Produits pour lesquels le fabricant choisit la voie UKCA",
          "Importateurs et distributeurs détenant du stock au Royaume-Uni"
        ],
        "doesNotCover": [
          "L'Irlande du Nord, où s'appliquent des dispositions UKNI spécifiques",
          "L'accès au marché de l'UE, qui exige toujours le marquage CE",
          "Les homologations spécifiques telles que le gaz ou les dispositifs médicaux"
        ],
        "checklist": [
          "Confirmer si la voie acceptée pour le produit est CE ou UKCA",
          "Faire appel à un organisme agréé britannique lorsque l'évaluation tierce est exigée",
          "Conserver la déclaration de conformité britannique avec les coordonnées du responsable au Royaume-Uni",
          "Apposer le marquage UKCA et l'étiquetage requis"
        ]
      }
    },
    "anatel": {
      "es": {
        "name": "Homologación de telecomunicaciones en Brasil",
        "group": "Radio y telecomunicaciones",
        "region": "Brasil",
        "status": "Obligatoria para productos de telecomunicaciones",
        "issuer": "Agência Nacional de Telecomunicações (Anatel)",
        "summary": "Homologación exigida antes de vender productos de telecomunicaciones y radio o conectarlos a redes brasileñas.",
        "meaning": "La homologación de Anatel se concede a un representante local y el modelo aprobado se publica con un número de homologación que debe figurar en el producto o en el manual.",
        "appliesTo": [
          "Productos Wi-Fi, Bluetooth, celulares y de RF",
          "Cables, conectores y equipos de red",
          "Dispositivos que se conectan a redes públicas de telecomunicaciones"
        ],
        "doesNotCover": [
          "La certificación de seguridad de INMETRO cuando el producto también entra en su ámbito",
          "Las obligaciones legales de garantía y posventa",
          "El registro fiscal y de importación"
        ],
        "checklist": [
          "Designa un representante brasileño como titular legal",
          "Ensaya en un laboratorio acreditado según los actos de Anatel aplicables",
          "Registra el producto y obtén el número de homologación",
          "Muestra el número y mantén el certificado vigente"
        ]
      },
      "fr": {
        "name": "Homologation télécoms au Brésil",
        "group": "Radio et télécoms",
        "region": "Brésil",
        "status": "Obligatoire pour les produits télécoms",
        "issuer": "Agência Nacional de Telecomunicações (Anatel)",
        "summary": "Homologation exigée avant de vendre des produits télécoms et radio au Brésil ou de les raccorder aux réseaux brésiliens.",
        "meaning": "L'homologation Anatel est délivrée à un représentant local et le modèle approuvé est publié avec un numéro d'homologation qui doit figurer sur le produit ou dans le manuel.",
        "appliesTo": [
          "Produits Wi-Fi, Bluetooth, cellulaires et RF",
          "Câbles, connecteurs et équipements réseau",
          "Appareils raccordés aux réseaux télécoms publics"
        ],
        "doesNotCover": [
          "La certification de sécurité INMETRO lorsque le produit entre aussi dans son champ",
          "Les obligations légales de garantie et de service après-vente",
          "L'enregistrement fiscal et douanier"
        ],
        "checklist": [
          "Désigner un représentant brésilien comme titulaire légal",
          "Tester dans un laboratoire accrédité selon les actes Anatel applicables",
          "Enregistrer le produit et obtenir le numéro d'homologation",
          "Afficher le numéro et maintenir le certificat à jour"
        ]
      }
    },
    "ift": {
      "es": {
        "name": "Homologación de telecomunicaciones en México",
        "group": "Radio y telecomunicaciones",
        "region": "México",
        "status": "Obligatoria para productos de telecomunicaciones",
        "issuer": "Instituto Federal de Telecomunicaciones (IFT)",
        "summary": "Homologación mexicana para productos que usan el espectro radioeléctrico o se conectan a redes públicas de telecomunicaciones.",
        "meaning": "La aprobación se emite a través de un titular mexicano y da lugar a un certificado de homologación que debe reflejarse en el etiquetado y la documentación para el mercado mexicano.",
        "appliesTo": [
          "Móviles, tablets, wearables y dispositivos Wi-Fi",
          "Módulos de radio y equipos de red",
          "Equipos terminales de voz y datos"
        ],
        "doesNotCover": [
          "Las normas NOM de seguridad y eficiencia que también puedan aplicarse",
          "Los trámites de despacho aduanero",
          "Los servicios de software operados desde fuera de México"
        ],
        "checklist": [
          "Confirma si el producto es homologable o está exento",
          "Designa al titular mexicano y presenta la solicitud",
          "Ensaya según las disposiciones técnicas del IFT",
          "Etiqueta el producto con la referencia de homologación"
        ]
      },
      "fr": {
        "name": "Homologation télécoms au Mexique",
        "group": "Radio et télécoms",
        "region": "Mexique",
        "status": "Obligatoire pour les produits télécoms",
        "issuer": "Instituto Federal de Telecomunicaciones (IFT)",
        "summary": "Homologation mexicaine pour les produits utilisant le spectre radioélectrique ou raccordés aux réseaux télécoms publics.",
        "meaning": "L'approbation est délivrée via un titulaire mexicain et donne lieu à un certificat d'homologation qui doit apparaître dans l'étiquetage et la documentation destinés au marché mexicain.",
        "appliesTo": [
          "Téléphones, tablettes, objets connectés et appareils Wi-Fi",
          "Modules radio et équipements réseau",
          "Équipements terminaux voix et données"
        ],
        "doesNotCover": [
          "Les normes NOM de sécurité et d'efficacité qui peuvent aussi s'appliquer",
          "Les formalités de dédouanement",
          "Les services logiciels exploités hors du Mexique"
        ],
        "checklist": [
          "Vérifier si le produit est homologable ou exempté",
          "Désigner le titulaire mexicain et déposer la demande",
          "Tester selon les dispositions techniques de l'IFT",
          "Étiqueter le produit avec la référence d'homologation"
        ]
      }
    },
    "kc": {
      "es": {
        "name": "Certificación KC (Corea del Sur)",
        "group": "Radio y telecomunicaciones",
        "region": "Corea del Sur",
        "status": "Obligatoria para productos de radio",
        "issuer": "National Radio Research Agency (RRA), dependiente de MSIT",
        "summary": "Certificación coreana para equipos de radio que combina la conformidad radioeléctrica y, en muchos casos, seguridad eléctrica y EMC.",
        "meaning": "La certificación KC tiene varias vías (certificación de conformidad, registro o declaración del proveedor) según el tipo de radio y la potencia. Los certificados los ostenta un representante coreano.",
        "appliesTo": [
          "Productos Wi-Fi y Bluetooth",
          "Módulos celulares y de IoT",
          "Receptores de difusión y equipos de RF"
        ],
        "doesNotCover": [
          "El registro coreano de residuos electrónicos y reciclaje, que es independiente",
          "La regulación de contenidos o servicios",
          "Los requisitos de ciberseguridad"
        ],
        "checklist": [
          "Clasifica el equipo y elige la vía KC correcta",
          "Ensaya según las normas técnicas coreanas",
          "Designa un representante coreano que ostente el certificado",
          "Aplica la marca KC y las menciones en coreano"
        ]
      },
      "fr": {
        "name": "Certification KC (Corée du Sud)",
        "group": "Radio et télécoms",
        "region": "Corée du Sud",
        "status": "Obligatoire pour les produits radio",
        "issuer": "National Radio Research Agency (RRA), rattachée au MSIT",
        "summary": "Certification coréenne des équipements radio, combinant conformité radio et, souvent, sécurité électrique et CEM.",
        "meaning": "La certification KC comporte plusieurs voies (certification de conformité, enregistrement ou déclaration du fournisseur) selon le type de radio et la puissance. Les certificats sont détenus par un représentant coréen.",
        "appliesTo": [
          "Produits Wi-Fi et Bluetooth",
          "Modules cellulaires et IoT",
          "Récepteurs de diffusion et équipements RF"
        ],
        "doesNotCover": [
          "L'enregistrement coréen des déchets électroniques et du recyclage, distinct",
          "La régulation des contenus ou des services",
          "Les exigences de cybersécurité"
        ],
        "checklist": [
          "Classer l'équipement et choisir la bonne voie KC",
          "Tester selon les normes techniques coréennes",
          "Désigner un représentant coréen détenteur du certificat",
          "Apposer la marque KC et les mentions en coréen"
        ]
      }
    },
    "mic-telec": {
      "es": {
        "name": "Certificación de radio en Japón (Giteki)",
        "group": "Radio y telecomunicaciones",
        "region": "Japón",
        "status": "Obligatoria para productos de radio",
        "issuer": "Ministerio de Asuntos Internos y Comunicaciones (MIC) a través de organismos registrados",
        "summary": "Certificación japonesa de conformidad técnica para equipos de radio, conocida como marca Giteki y gestionada por organismos de certificación registrados.",
        "meaning": "Los equipos de radio deben certificarse y llevar la marca Giteki con el número de certificación. Los productos que incorporan un módulo certificado pueden necesitar su propia certificación si no se cumplen las condiciones del módulo.",
        "appliesTo": [
          "Dispositivos Wi-Fi, Bluetooth, RFID y celulares",
          "Módulos y antenas inalámbricas",
          "Mandos de corto alcance"
        ],
        "doesNotCover": [
          "Las obligaciones japonesas de seguridad eléctrica, como PSE para ciertas fuentes",
          "La aprobación de conexión a redes de telecomunicaciones más allá de la función radio",
          "La regulación de ciberseguridad"
        ],
        "checklist": [
          "Determina si puedes reutilizar la certificación del módulo",
          "Solicita la certificación a un organismo japonés registrado",
          "Etiqueta la marca Giteki y el número de certificación",
          "Mantén actualizada la documentación de protección de la construcción"
        ]
      },
      "fr": {
        "name": "Certification radio au Japon (Giteki)",
        "group": "Radio et télécoms",
        "region": "Japon",
        "status": "Obligatoire pour les produits radio",
        "issuer": "Ministère des Affaires intérieures et des Communications (MIC) via des organismes enregistrés",
        "summary": "Certification japonaise de conformité technique des équipements radio, connue sous le nom de marque Giteki et gérée par des organismes de certification enregistrés.",
        "meaning": "Les équipements radio doivent être certifiés et porter la marque Giteki avec le numéro de certification. Les produits intégrant un module certifié peuvent nécessiter leur propre certification si les conditions du module ne sont pas respectées.",
        "appliesTo": [
          "Appareils Wi-Fi, Bluetooth, RFID et cellulaires",
          "Modules et antennes sans fil",
          "Télécommandes à courte portée"
        ],
        "doesNotCover": [
          "Les obligations japonaises de sécurité électrique, comme PSE pour certaines alimentations",
          "L'approbation de raccordement aux réseaux télécoms au-delà de la fonction radio",
          "La régulation de la cybersécurité"
        ],
        "checklist": [
          "Déterminer si la certification du module peut être réutilisée",
          "Déposer la demande auprès d'un organisme japonais enregistré",
          "Apposer la marque Giteki et le numéro de certification",
          "Tenir à jour la documentation de protection de la construction"
        ]
      }
    },
    "ncc-tw": {
      "es": {
        "name": "Homologación NCC de Taiwán",
        "group": "Radio y telecomunicaciones",
        "region": "Taiwán",
        "status": "Obligatoria para productos de radio",
        "issuer": "National Communications Commission (NCC)",
        "summary": "Homologación taiwanesa para equipos de radio de baja potencia y terminales de telecomunicaciones vendidos en el mercado local.",
        "meaning": "Los productos aprobados reciben un número de certificación NCC y deben llevar la marca NCC. La solicitud la presenta normalmente una empresa representante taiwanesa.",
        "appliesTo": [
          "Productos Wi-Fi, Bluetooth y RF",
          "Dispositivos móviles y wearables con radio",
          "Equipos terminales de telecomunicaciones"
        ],
        "doesNotCover": [
          "La certificación taiwanesa BSMI de seguridad eléctrica y EMC, que es independiente",
          "Los sistemas de transporte y reciclaje de baterías",
          "El cumplimiento de servicios de software"
        ],
        "checklist": [
          "Confirma si se requiere aprobación según la banda y la potencia",
          "Ensaya en un laboratorio taiwanés reconocido",
          "Presenta la solicitud a través de un agente local",
          "Aplica la marca NCC y el etiquetado en chino tradicional"
        ]
      },
      "fr": {
        "name": "Homologation NCC de Taïwan",
        "group": "Radio et télécoms",
        "region": "Taïwan",
        "status": "Obligatoire pour les produits radio",
        "issuer": "National Communications Commission (NCC)",
        "summary": "Homologation taïwanaise des équipements radio à faible puissance et des terminaux télécoms vendus sur le marché local.",
        "meaning": "Les produits approuvés reçoivent un numéro de certification NCC et doivent porter la marque NCC. La demande est généralement déposée par une société représentante taïwanaise.",
        "appliesTo": [
          "Produits Wi-Fi, Bluetooth et RF",
          "Appareils mobiles et portables avec radio",
          "Équipements terminaux télécoms"
        ],
        "doesNotCover": [
          "La certification taïwanaise BSMI de sécurité électrique et de CEM, distincte",
          "Les filières de transport et de recyclage des batteries",
          "La conformité des services logiciels"
        ],
        "checklist": [
          "Vérifier si une approbation est requise selon la bande et la puissance",
          "Tester dans un laboratoire taïwanais reconnu",
          "Déposer la demande via un agent local",
          "Apposer la marque NCC et l'étiquetage en chinois traditionnel"
        ]
      }
    },
    "rcm": {
      "es": {
        "name": "RCM de Australia y Nueva Zelanda",
        "group": "Radio y telecomunicaciones",
        "region": "Australia y Nueva Zelanda",
        "status": "Obligatoria para productos de radio y de red",
        "issuer": "ACMA y los reguladores del EESS",
        "summary": "La marca RCM indica que un producto cumple los requisitos de radiocomunicaciones de Australia y Nueva Zelanda y, cuando procede, de seguridad eléctrica.",
        "meaning": "El proveedor debe registrarse en la base de datos nacional y conservar las evidencias de ensayo de radio, EMC y seguridad. Las reglas de etiquetado difieren entre el ámbito de radio y el eléctrico.",
        "appliesTo": [
          "Dispositivos de radiocomunicaciones",
          "Productos eléctricos alimentados por red",
          "Dispositivos que combinan ambos ámbitos"
        ],
        "doesNotCover": [
          "La aprobación de cableado o conexión a operadores de telecomunicaciones",
          "Las obligaciones de reciclaje de baterías",
          "Los etiquetados voluntarios de eficiencia"
        ],
        "checklist": [
          "Identifica si se aplica el régimen de radio, el EESS o ambos",
          "Regístrate como proveedor responsable",
          "Conserva informes de ensayo conformes con las normas exigidas",
          "Aplica la marca RCM con el tamaño y la ubicación correctos"
        ]
      },
      "fr": {
        "name": "RCM d'Australie et de Nouvelle-Zélande",
        "group": "Radio et télécoms",
        "region": "Australie et Nouvelle-Zélande",
        "status": "Obligatoire pour les produits radio et secteur",
        "issuer": "ACMA et les régulateurs de l'EESS",
        "summary": "La marque RCM indique qu'un produit respecte les exigences de radiocommunication d'Australie et de Nouvelle-Zélande et, le cas échéant, de sécurité électrique.",
        "meaning": "Le fournisseur doit s'enregistrer dans la base nationale et conserver les preuves d'essai radio, CEM et sécurité. Les règles d'étiquetage diffèrent entre le périmètre radio et le périmètre électrique.",
        "appliesTo": [
          "Appareils de radiocommunication",
          "Produits électriques alimentés par le secteur",
          "Appareils combinant les deux périmètres"
        ],
        "doesNotCover": [
          "L'approbation du câblage ou du raccordement aux opérateurs télécoms",
          "Les obligations de recyclage des batteries",
          "Les labels volontaires d'efficacité énergétique"
        ],
        "checklist": [
          "Identifier si le régime radio, l'EESS ou les deux s'appliquent",
          "S'enregistrer comme fournisseur responsable",
          "Conserver les rapports d'essai conformes aux normes exigées",
          "Apposer la marque RCM avec la bonne taille et le bon emplacement"
        ]
      }
    },
    "saso": {
      "es": {
        "name": "Conformidad SASO de Arabia Saudí",
        "group": "Radio y telecomunicaciones",
        "region": "Arabia Saudí",
        "status": "Obligatoria en Arabia Saudí",
        "issuer": "Saudi Standards, Metrology and Quality Organization",
        "summary": "Conformidad de producto para mercancías que entran en Arabia Saudí, tramitada en la plataforma SABER con certificados de conformidad.",
        "meaning": "Los importadores deben registrar el producto y obtener los certificados de conformidad antes del despacho de aduanas. Los productos de radio y telecomunicaciones también necesitan la aprobación de CITC.",
        "appliesTo": [
          "Productos eléctricos y electrónicos de consumo",
          "Dispositivos de radio y telecomunicaciones",
          "Productos incluidos en reglamentos técnicos regulados"
        ],
        "doesNotCover": [
          "La licencia de radio y telecomunicaciones de CITC, tramitada aparte",
          "Los regímenes halal o alimentarios",
          "El registro de agencia comercial"
        ],
        "checklist": [
          "Confirma el reglamento técnico aplicable al producto",
          "Registra el producto en SABER y elige la vía de conformidad",
          "Ensaya según la norma saudí aplicable o un equivalente aprobado",
          "Adjunta el certificado a cada envío"
        ]
      },
      "fr": {
        "name": "Conformité SASO d'Arabie saoudite",
        "group": "Radio et télécoms",
        "region": "Arabie saoudite",
        "status": "Obligatoire en Arabie saoudite",
        "issuer": "Saudi Standards, Metrology and Quality Organization",
        "summary": "Conformité produit pour les marchandises entrant en Arabie saoudite, traitée sur la plateforme SABER avec des certificats de conformité.",
        "meaning": "Les importateurs doivent enregistrer le produit et obtenir les certificats de conformité avant le dédouanement. Les produits radio et télécoms nécessitent aussi l'approbation de la CITC.",
        "appliesTo": [
          "Produits électriques et électroniques grand public",
          "Appareils radio et télécoms",
          "Produits couverts par des règlements techniques réglementés"
        ],
        "doesNotCover": [
          "La licence radio et télécoms de la CITC, traitée séparément",
          "Les régimes halal ou alimentaires",
          "L'enregistrement d'agence commerciale"
        ],
        "checklist": [
          "Confirmer le règlement technique applicable au produit",
          "Enregistrer le produit dans SABER et choisir la voie de conformité",
          "Tester selon la norme saoudienne applicable ou un équivalent approuvé",
          "Joindre le certificat à chaque expédition"
        ]
      }
    },
    "eac": {
      "es": {
        "name": "Conformidad EAC euroasiática",
        "group": "Radio y telecomunicaciones",
        "region": "Unión Económica Euroasiática",
        "status": "Obligatoria en los mercados de la UEEA",
        "issuer": "Organismos nacionales de acreditación de los Estados miembros",
        "summary": "Conformidad EAC para productos comercializados en la Unión Económica Euroasiática, que cubre seguridad, EMC y, en algunas categorías, requisitos de radio.",
        "meaning": "Los productos evaluados frente a los reglamentos técnicos aplicables (baja tensión, EMC y EMC de equipos radioeléctricos, entre otros) reciben una declaración o certificado EAC válido en todos los Estados miembros.",
        "appliesTo": [
          "Productos eléctricos y electrónicos",
          "Equipos de radio y de baja tensión",
          "Maquinaria y electrodomésticos"
        ],
        "doesNotCover": [
          "La licencia local de operadores de telecomunicaciones",
          "Los regímenes voluntarios de exportación",
          "Los requisitos de idioma fuera de los reglamentos técnicos"
        ],
        "checklist": [
          "Mapea el producto frente a los reglamentos TR CU aplicables",
          "Decide entre la vía de declaración y la de certificación",
          "Utiliza un organismo acreditado de un Estado miembro",
          "Marca el producto con el símbolo EAC y la información en cirílico cuando se exija"
        ]
      },
      "fr": {
        "name": "Conformité EAC eurasienne",
        "group": "Radio et télécoms",
        "region": "Union économique eurasienne",
        "status": "Obligatoire sur les marchés de l'UEEA",
        "issuer": "Organismes nationaux d'accréditation des États membres",
        "summary": "Conformité EAC pour les produits mis sur le marché de l'Union économique eurasienne, couvrant la sécurité, la CEM et, dans certaines catégories, les exigences radio.",
        "meaning": "Les produits évalués au regard des règlements techniques applicables (basse tension, CEM et CEM des équipements radio, entre autres) reçoivent une déclaration ou un certificat EAC valable dans tous les États membres.",
        "appliesTo": [
          "Produits électriques et électroniques",
          "Équipements radio et basse tension",
          "Machines et appareils électroménagers"
        ],
        "doesNotCover": [
          "La licence locale des opérateurs télécoms",
          "Les régimes volontaires à l'export",
          "Les exigences linguistiques hors des règlements techniques"
        ],
        "checklist": [
          "Positionner le produit par rapport aux règlements TR CU applicables",
          "Choisir entre la déclaration et la certification",
          "Faire appel à un organisme accrédité d'un État membre",
          "Marquer le produit du symbole EAC et des informations en cyrillique lorsque requis"
        ]
      }
    },
    "bis-wpc": {
      "es": {
        "name": "Registro BIS y aprobación WPC en India",
        "group": "Radio y telecomunicaciones",
        "region": "India",
        "status": "Obligatoria para productos regulados",
        "issuer": "Bureau of Indian Standards y la Wireless Planning and Coordination",
        "summary": "El cumplimiento indio suele combinar el registro BIS de seguridad electrónica bajo el esquema CRS con la aprobación WPC para productos inalámbricos.",
        "meaning": "El registro BIS se concede al fabricante a través del esquema de registro obligatorio, mientras que la aprobación de tipo de equipo WPC cubre la interfaz radio. Un mismo producto puede necesitar ambos.",
        "appliesTo": [
          "Electrónica incluida en la lista CRS",
          "Dispositivos Wi-Fi y Bluetooth",
          "Equipos de telecomunicaciones y RF"
        ],
        "doesNotCover": [
          "La licencia india de red de telecomunicaciones",
          "Los incentivos a la fabricación local",
          "Las declaraciones de envases fuera de los esquemas"
        ],
        "checklist": [
          "Comprueba si el producto figura en el listado CRS",
          "Ensaya en un laboratorio reconocido por BIS",
          "Solicita la ETA de WPC para el módulo de radio",
          "Aplica la marca estándar una vez concedido el registro"
        ]
      },
      "fr": {
        "name": "Enregistrement BIS et approbation WPC en Inde",
        "group": "Radio et télécoms",
        "region": "Inde",
        "status": "Obligatoire pour les produits réglementés",
        "issuer": "Bureau of Indian Standards et Wireless Planning and Coordination",
        "summary": "La conformité indienne combine souvent l'enregistrement BIS de sécurité électronique au titre du régime CRS et l'approbation WPC pour les produits sans fil.",
        "meaning": "L'enregistrement BIS est délivré au fabricant via le régime d'enregistrement obligatoire, tandis que l'approbation de type d'équipement WPC couvre l'interface radio. Un même produit peut nécessiter les deux.",
        "appliesTo": [
          "Électronique figurant sur la liste CRS",
          "Appareils Wi-Fi et Bluetooth",
          "Équipements télécoms et RF"
        ],
        "doesNotCover": [
          "La licence indienne de réseau télécom",
          "Les incitations à la fabrication locale",
          "Les déclarations d'emballage hors des régimes concernés"
        ],
        "checklist": [
          "Vérifier si le produit figure sur la liste CRS",
          "Tester dans un laboratoire reconnu par le BIS",
          "Demander l'ETA du WPC pour le module radio",
          "Apposer la marque standard une fois l'enregistrement accordé"
        ]
      }
    },
    "srrc-ccc": {
      "es": {
        "name": "Aprobación SRRC y CCC en China",
        "group": "Radio y telecomunicaciones",
        "region": "China",
        "status": "Obligatoria en China",
        "issuer": "MIIT, SRRC y organismos designados por la CNCA",
        "summary": "Los productos inalámbricos que entran en China suelen requerir la homologación radioeléctrica SRRC y, para las categorías incluidas en la lista CCC, la certificación obligatoria CCC.",
        "meaning": "La aprobación SRRC cubre el tipo de transmisor y la CCC cubre seguridad y EMC para los productos en su ámbito. Ambas las ostenta una entidad local y se comprueban en la importación y la venta.",
        "appliesTo": [
          "Equipos transmisores de radio",
          "Productos del catálogo CCC, incluidos algunos equipos informáticos y audiovisuales",
          "Módulos inalámbricos y dispositivos acabados"
        ],
        "doesNotCover": [
          "La declaración de envases del RoHS chino, que es una obligación aparte",
          "La revisión de ciberseguridad para equipos de red críticos",
          "La licencia de servicios de software"
        ],
        "checklist": [
          "Determina el ámbito SRRC y la norma de ensayo de radio",
          "Comprueba si el producto está en el catálogo CCC",
          "Designa un solicitante local y presenta las muestras",
          "Aplica el código SRRC y la marca CCC según corresponda"
        ]
      },
      "fr": {
        "name": "Approbation SRRC et CCC en Chine",
        "group": "Radio et télécoms",
        "region": "Chine",
        "status": "Obligatoire en Chine",
        "issuer": "MIIT, SRRC et organismes désignés par la CNCA",
        "summary": "Les produits sans fil entrant en Chine nécessitent généralement l'homologation radio SRRC et, pour les catégories de la liste CCC, la certification obligatoire CCC.",
        "meaning": "L'approbation SRRC couvre le type d'émetteur et la CCC couvre la sécurité et la CEM pour les produits concernés. Les deux sont détenues par une entité locale et contrôlées à l'importation et à la vente.",
        "appliesTo": [
          "Équipements émetteurs radio",
          "Produits du catalogue CCC, dont certains équipements informatiques et audiovisuels",
          "Modules sans fil et produits finis"
        ],
        "doesNotCover": [
          "La déclaration d'emballage RoHS chinoise, obligation distincte",
          "L'examen de cybersécurité pour les équipements réseau critiques",
          "La licence de services logiciels"
        ],
        "checklist": [
          "Déterminer le périmètre SRRC et la norme d'essai radio",
          "Vérifier si le produit figure au catalogue CCC",
          "Désigner un demandeur local et fournir les échantillons",
          "Apposer le code SRRC et la marque CCC selon le cas"
        ]
      }
    },
    "ul-etl": {
      "es": {
        "name": "Listado de seguridad norteamericano",
        "group": "Seguridad y EMC",
        "region": "Estados Unidos y Canadá",
        "status": "Exigido por minoristas e inspectores",
        "issuer": "UL, Intertek (ETL), CSA y otros NRTL",
        "summary": "Certificación de seguridad de producto por terceros para el mercado norteamericano, emitida por un laboratorio nacionalmente reconocido (NRTL).",
        "meaning": "El listado de seguridad no es una marca gubernamental única: es una certificación emitida por un NRTL frente a normas UL o CSA. Minoristas, aseguradoras e inspectores eléctricos suelen exigirla, y la marca debe corresponder al producto y a la fábrica exactos.",
        "appliesTo": [
          "Dispositivos IoT alimentados por red, hubs y cargadores",
          "Productos con batería y circuitos de carga",
          "Componentes como fuentes de alimentación internas"
        ],
        "doesNotCover": [
          "La homologación radio, competencia de la FCC o ISED",
          "El rendimiento, la privacidad o la ciberseguridad del producto",
          "Las actualizaciones de software que alteren el diseño relevante para la seguridad"
        ],
        "checklist": [
          "Identifica la norma UL o CSA correcta para el producto",
          "Presenta muestras y componentes críticos al NRTL",
          "Acepta el programa de inspección en fábrica para productos listados",
          "Comunica los cambios de diseño que afecten a la seguridad antes de enviarlos"
        ]
      },
      "fr": {
        "name": "Homologation de sécurité nord-américaine",
        "group": "Sécurité et CEM",
        "region": "États-Unis et Canada",
        "status": "Exigée par les distributeurs et les inspecteurs",
        "issuer": "UL, Intertek (ETL), CSA et autres NRTL",
        "summary": "Certification de sécurité produit par un tiers pour le marché nord-américain, délivrée par un laboratoire nationalement reconnu (NRTL).",
        "meaning": "L'homologation de sécurité n'est pas une marque gouvernementale unique : c'est une certification délivrée par un NRTL selon les normes UL ou CSA. Les distributeurs, assureurs et inspecteurs électriques l'exigent souvent, et la marque doit correspondre au produit et à l'usine exacts.",
        "appliesTo": [
          "Appareils IoT sur secteur, hubs et chargeurs",
          "Produits sur batterie avec circuits de charge",
          "Composants tels que les alimentations internes"
        ],
        "doesNotCover": [
          "L'homologation radio, du ressort de la FCC ou d'ISED",
          "Les performances, la vie privée ou la cybersécurité du produit",
          "Les mises à jour logicielles modifiant la conception liée à la sécurité"
        ],
        "checklist": [
          "Identifier la norme UL ou CSA applicable au produit",
          "Soumettre les échantillons et composants critiques au NRTL",
          "Accepter le programme d'inspection en usine pour les produits homologués",
          "Signaler les changements de conception touchant la sécurité avant expédition"
        ]
      }
    },
    "iec-62368": {
      "es": {
        "name": "Norma de seguridad IEC y EN 62368-1",
        "group": "Seguridad y EMC",
        "region": "Internacional",
        "status": "Norma de seguridad de referencia",
        "issuer": "Comisión Electrotécnica Internacional",
        "summary": "La norma de seguridad basada en peligros que sustituyó a IEC 60950 e IEC 60065 para equipos de audio, vídeo, tecnología de la información y comunicación.",
        "meaning": "En lugar de prescribir la construcción, IEC 62368-1 exige identificar las fuentes de energía y aportar salvaguardas. Es la norma con la que se ensayan la mayoría de altavoces inteligentes, hubs, cámaras y cargadores.",
        "appliesTo": [
          "Equipos de audio y vídeo",
          "Equipos informáticos y de comunicación",
          "Dispositivos con alimentación de red o batería e interfaz de carga"
        ],
        "doesNotCover": [
          "La homologación radio",
          "Las normas de seguridad médica o de automoción",
          "La ciberseguridad del dispositivo o de la nube"
        ],
        "checklist": [
          "Clasifica las fuentes de energía y las salvaguardas necesarias",
          "Revisa las características de los componentes y las distancias de aislamiento",
          "Ensaya condiciones anómalas y de fallo único",
          "Comprueba la edición de la norma usada en cada certificado de mercado"
        ]
      },
      "fr": {
        "name": "Norme de sécurité IEC et EN 62368-1",
        "group": "Sécurité et CEM",
        "region": "International",
        "status": "Norme de sécurité de référence",
        "issuer": "Commission Électrotechnique Internationale",
        "summary": "La norme de sécurité basée sur les dangers qui a remplacé l'IEC 60950 et l'IEC 60065 pour les équipements audio, vidéo, informatiques et de communication.",
        "meaning": "Plutôt que de prescrire la construction, l'IEC 62368-1 impose d'identifier les sources d'énergie et de prévoir des protections. C'est la norme selon laquelle sont testés la plupart des enceintes connectées, hubs, caméras et chargeurs.",
        "appliesTo": [
          "Équipements audio et vidéo",
          "Équipements informatiques et de communication",
          "Appareils alimentés sur secteur ou batterie avec interface de charge"
        ],
        "doesNotCover": [
          "L'homologation radio",
          "Les normes de sécurité médicale ou automobile",
          "La cybersécurité de l'appareil ou du cloud"
        ],
        "checklist": [
          "Classer les sources d'énergie et les protections requises",
          "Vérifier les caractéristiques des composants et les distances d'isolement",
          "Tester les conditions anormales et de défaut unique",
          "Vérifier l'édition de la norme utilisée dans chaque certificat marché"
        ]
      }
    },
    "emc-directive": {
      "es": {
        "name": "Directiva EMC 2014/30/UE",
        "group": "Seguridad y EMC",
        "region": "Unión Europea",
        "status": "Obligatoria en la UE",
        "issuer": "El fabricante según la legislación de la UE, con organismos notificados cuando proceda",
        "summary": "Directiva europea que exige a los equipos limitar sus emisiones electromagnéticas y ser inmunes a interferencias en su entorno previsto.",
        "meaning": "La EMC se evalúa aparte de la radio y la seguridad. Los productos con radio suelen quedar cubiertos por la Directiva de Equipos Radioeléctricos, que reúne requisitos de radio y EMC en un solo expediente.",
        "appliesTo": [
          "Equipos eléctricos y electrónicos con posibles emisiones",
          "Dispositivos con fuentes conmutadas o motores",
          "Equipos destinados a entornos residenciales, comerciales o industriales"
        ],
        "doesNotCover": [
          "La autorización del espectro radioeléctrico",
          "La seguridad eléctrica",
          "La garantía de inmunidad en toda instalación real"
        ],
        "checklist": [
          "Identifica si se aplica la RED o la Directiva EMC",
          "Ensaya emisiones e inmunidad frente a normas armonizadas",
          "Documenta la evaluación y las normas aplicadas",
          "Incluye las menciones de EMC en la declaración y el manual"
        ]
      },
      "fr": {
        "name": "Directive CEM 2014/30/UE",
        "group": "Sécurité et CEM",
        "region": "Union européenne",
        "status": "Obligatoire dans l'UE",
        "issuer": "Le fabricant selon le droit de l'UE, avec organismes notifiés le cas échéant",
        "summary": "Directive européenne imposant aux équipements de limiter leurs émissions électromagnétiques et d'être immunisés contre les interférences dans leur environnement prévu.",
        "meaning": "La CEM s'évalue séparément de la radio et de la sécurité. Les produits comportant une radio relèvent généralement de la directive Équipements radio, qui réunit les exigences radio et CEM dans un même dossier.",
        "appliesTo": [
          "Équipements électriques et électroniques susceptibles d'émettre",
          "Appareils à alimentation à découpage ou à moteurs",
          "Équipements destinés aux environnements résidentiels, commerciaux ou industriels"
        ],
        "doesNotCover": [
          "L'autorisation du spectre radioélectrique",
          "La sécurité électrique",
          "La garantie d'immunité dans toute installation réelle"
        ],
        "checklist": [
          "Déterminer si la RED ou la directive CEM s'applique",
          "Tester les émissions et l'immunité selon les normes harmonisées",
          "Documenter l'évaluation et les normes appliquées",
          "Inclure les mentions CEM dans la déclaration et le manuel"
        ]
      }
    },
    "cb-scheme": {
      "es": {
        "name": "Certificado del esquema CB de IECEE",
        "group": "Seguridad y EMC",
        "region": "Internacional",
        "status": "Voluntario, muy utilizado",
        "issuer": "Organismos de certificación miembros de IECEE",
        "summary": "Sistema internacional que permite convertir un único informe y certificado de seguridad en certificaciones nacionales en los países participantes.",
        "meaning": "El esquema CB reduce los ensayos de seguridad repetidos entre países. Un certificado y un informe de un organismo miembro sirven de base para la aprobación nacional de otros miembros, a veces con diferencias nacionales añadidas.",
        "appliesTo": [
          "Productos que necesitan aprobación de seguridad en varios países",
          "Fuentes de alimentación, cargadores y electrodomésticos",
          "Componentes con su propia norma"
        ],
        "doesNotCover": [
          "Las homologaciones radio, gestionadas por los regímenes nacionales de telecomunicaciones",
          "Los requisitos de marcado, que siguen siendo nacionales",
          "Los regímenes de inspección en fábrica de cada esquema"
        ],
        "checklist": [
          "Elige un laboratorio CB reconocido en los países objetivo",
          "Confirma las diferencias nacionales antes de ensayar",
          "Solicita el certificado CB y el informe completo",
          "Convierte el informe en certificados nacionales cuando sea necesario"
        ]
      },
      "fr": {
        "name": "Certificat du système CB de l'IECEE",
        "group": "Sécurité et CEM",
        "region": "International",
        "status": "Volontaire, très utilisé",
        "issuer": "Organismes de certification membres de l'IECEE",
        "summary": "Système international permettant de convertir un seul rapport et certificat de sécurité en certifications nationales dans les pays participants.",
        "meaning": "Le système CB réduit les essais de sécurité répétés entre pays. Un certificat et un rapport d'un organisme membre servent de base à l'approbation nationale d'autres membres, avec parfois des différences nationales ajoutées.",
        "appliesTo": [
          "Produits nécessitant une approbation de sécurité dans plusieurs pays",
          "Alimentations, chargeurs et appareils électroménagers",
          "Composants disposant de leur propre norme"
        ],
        "doesNotCover": [
          "Les homologations radio, gérées par les régimes nationaux de télécommunications",
          "Les exigences de marquage, qui restent nationales",
          "Les régimes d'inspection en usine propres à chaque système"
        ],
        "checklist": [
          "Choisir un laboratoire CB reconnu dans les pays visés",
          "Confirmer les différences nationales avant les essais",
          "Demander le certificat CB et le rapport complet",
          "Convertir le rapport en certificats nationaux si nécessaire"
        ]
      }
    },
    "ip-rating": {
      "es": {
        "name": "Grado de protección IP según IEC 60529",
        "group": "Seguridad y EMC",
        "region": "Internacional",
        "status": "Voluntario, muy solicitado",
        "issuer": "Laboratorios de ensayo según IEC 60529",
        "summary": "Grado de protección contra la penetración que describe la resistencia al polvo y al agua, escrito como IP seguido de dos dígitos.",
        "meaning": "El primer dígito cubre sólidos y polvo; el segundo, el agua. Los grados se aplican a la carcasa completa tal como se ensayó, no a la electrónica interior, y pueden perderse si se abre la carcasa o se reutilizan las juntas.",
        "appliesTo": [
          "Cámaras y videoporteros de exterior",
          "Sensores expuestos a humedad o lluvia",
          "Dispositivos portátiles con requisitos de estanqueidad"
        ],
        "doesNotCover": [
          "La resistencia a impactos, cubierta por los grados IK",
          "La resistencia a la corrosión y a la niebla salina",
          "La protección mantenida tras una reparación o cambio de batería"
        ],
        "checklist": [
          "Selecciona el grado exigido por el entorno de instalación",
          "Ensaya el producto acabado, incluidas juntas y empaquetaduras",
          "Incluye prensaestopas y conectores en la evaluación",
          "Indica las condiciones de ensayo en el material de marketing"
        ]
      },
      "fr": {
        "name": "Indice de protection IP selon l'IEC 60529",
        "group": "Sécurité et CEM",
        "region": "International",
        "status": "Volontaire, très demandé",
        "issuer": "Laboratoires d'essai selon l'IEC 60529",
        "summary": "Indice de protection contre la pénétration décrivant la résistance à la poussière et à l'eau, noté IP suivi de deux chiffres.",
        "meaning": "Le premier chiffre couvre les solides et la poussière, le second l'eau. Les indices s'appliquent au boîtier complet tel qu'essayé, non à l'électronique interne, et peuvent être perdus si le boîtier est ouvert ou les joints réutilisés.",
        "appliesTo": [
          "Caméras et sonnettes d'extérieur",
          "Capteurs exposés à l'humidité ou à la pluie",
          "Appareils portables soumis à des exigences d'étanchéité"
        ],
        "doesNotCover": [
          "La résistance aux chocs, couverte par les indices IK",
          "La résistance à la corrosion et au brouillard salin",
          "La protection maintenue après une réparation ou un changement de batterie"
        ],
        "checklist": [
          "Choisir l'indice exigé par l'environnement d'installation",
          "Tester le produit fini, joints et garnitures inclus",
          "Intégrer les presse-étoupes et connecteurs à l'évaluation",
          "Indiquer les conditions d'essai dans les supports marketing"
        ]
      }
    },
    "csa": {
      "es": {
        "name": "Certificación de CSA Group",
        "group": "Seguridad y EMC",
        "region": "Canadá y Estados Unidos",
        "status": "Requisito habitual de mercado",
        "issuer": "CSA Group",
        "summary": "Certificación de seguridad canadiense también aceptada como listado NRTL para el mercado estadounidense.",
        "meaning": "Las marcas CSA indican que un producto se ha evaluado frente a normas canadienses y, cuando procede, estadounidenses. Suele ser la vía más práctica para productos vendidos en ambos países a la vez.",
        "appliesTo": [
          "Productos eléctricos y electrónicos para Canadá",
          "Productos que buscan un listado conjunto Canadá–EE. UU.",
          "Componentes que requieren piezas certificadas"
        ],
        "doesNotCover": [
          "La certificación de equipos de radio en ninguno de los dos países",
          "Los requisitos de los códigos eléctricos provinciales",
          "La ciberseguridad y la privacidad"
        ],
        "checklist": [
          "Confirma qué normas CSA o UL se aplican en cada país",
          "Elige una certificación conjunta Canadá–EE. UU. si es posible",
          "Mantén vigente el programa de inspección en fábrica",
          "Comunica los cambios en componentes críticos"
        ]
      },
      "fr": {
        "name": "Certification CSA Group",
        "group": "Sécurité et CEM",
        "region": "Canada et États-Unis",
        "status": "Exigence de marché courante",
        "issuer": "CSA Group",
        "summary": "Certification de sécurité canadienne également acceptée comme homologation NRTL pour le marché américain.",
        "meaning": "Les marques CSA indiquent qu'un produit a été évalué selon les normes canadiennes et, le cas échéant, américaines. C'est souvent la voie la plus pratique pour les produits vendus simultanément dans les deux pays.",
        "appliesTo": [
          "Produits électriques et électroniques destinés au Canada",
          "Produits visant une homologation conjointe Canada–États-Unis",
          "Composants nécessitant des pièces certifiées"
        ],
        "doesNotCover": [
          "La certification des équipements radio dans l'un ou l'autre pays",
          "Les exigences des codes électriques provinciaux",
          "La cybersécurité et la vie privée"
        ],
        "checklist": [
          "Confirmer les normes CSA ou UL applicables dans chaque pays",
          "Choisir une certification conjointe Canada–États-Unis si possible",
          "Maintenir le programme d'inspection en usine",
          "Signaler les changements de composants critiques"
        ]
      }
    },
    "rohs": {
      "es": {
        "name": "Restricción de sustancias peligrosas (RoHS)",
        "group": "Medio ambiente y materiales",
        "region": "Unión Europea y mercados alineados",
        "status": "Obligatoria en su ámbito",
        "issuer": "Declaración del fabricante según la Directiva 2011/65/UE",
        "summary": "Restringe el plomo, el mercurio, el cadmio, el cromo hexavalente y ciertos ftalatos en aparatos eléctricos y electrónicos vendidos en la UE.",
        "meaning": "El cumplimiento de RoHS se demuestra con expediente técnico, declaraciones de proveedores e informes de ensayo de materiales, no con una marca en el producto. Muchos otros mercados han adoptado restricciones similares, a veces con listas distintas.",
        "appliesTo": [
          "Aparatos eléctricos y electrónicos de las diez categorías RoHS",
          "Componentes y subconjuntos comercializados",
          "Cables, fuentes de alimentación y accesorios vendidos con el dispositivo"
        ],
        "doesNotCover": [
          "Las baterías, con su propia normativa",
          "Los envases, cubiertos por la normativa de envases",
          "La seguridad del producto o el rendimiento radio"
        ],
        "checklist": [
          "Recopila declaraciones de proveedores e informes de ensayo de materiales",
          "Evalúa niveles en materiales homogéneos, no en el producto acabado",
          "Conserva evidencias de cada referencia del listado de materiales",
          "Renueva las evidencias cuando un proveedor cambie material o proceso"
        ]
      },
      "fr": {
        "name": "Limitation des substances dangereuses (RoHS)",
        "group": "Environnement et matériaux",
        "region": "Union européenne et marchés alignés",
        "status": "Obligatoire dans son périmètre",
        "issuer": "Déclaration du fabricant au titre de la directive 2011/65/UE",
        "summary": "Limite le plomb, le mercure, le cadmium, le chrome hexavalent et certains phtalates dans les équipements électriques et électroniques vendus dans l'UE.",
        "meaning": "La conformité RoHS se démontre par un dossier technique, des déclarations de fournisseurs et des rapports d'essai de matériaux, et non par une marque sur le produit. De nombreux autres marchés ont adopté des restrictions similaires, parfois avec des listes différentes.",
        "appliesTo": [
          "Équipements électriques et électroniques des dix catégories RoHS",
          "Composants et sous-ensembles mis sur le marché",
          "Câbles, alimentations et accessoires vendus avec l'appareil"
        ],
        "doesNotCover": [
          "Les batteries, soumises à leur propre réglementation",
          "Les emballages, couverts par la réglementation emballages",
          "La sécurité du produit ou les performances radio"
        ],
        "checklist": [
          "Rassembler les déclarations de fournisseurs et rapports d'essai de matériaux",
          "Évaluer les niveaux dans les matériaux homogènes, non dans le produit fini",
          "Conserver les preuves pour chaque référence de la nomenclature",
          "Actualiser les preuves en cas de changement de matériau ou de procédé"
        ]
      }
    },
    "reach": {
      "es": {
        "name": "REACH: SVHC y notificación SCIP",
        "group": "Medio ambiente y materiales",
        "region": "Unión Europea",
        "status": "Obligatoria en su ámbito",
        "issuer": "Marco de la Agencia Europea de Sustancias y Mezclas Químicas",
        "summary": "Reglamento europeo de sustancias químicas que impone obligaciones al proveedor cuando un producto contiene una sustancia extremadamente preocupante por encima del umbral.",
        "meaning": "El hardware IoT puede contener SVHC en soldaduras, plásticos, recubrimientos o cables. Las obligaciones de información se aplican a nivel de artículo y la notificación en la base SCIP es exigible para artículos comercializados en la UE.",
        "appliesTo": [
          "Artículos acabados comercializados en la UE",
          "Componentes importados como artículos separados",
          "Cables, carcasas y recubrimientos"
        ],
        "doesNotCover": [
          "La restricción de sustancias en electrónica, que es RoHS",
          "Las restricciones químicas de las baterías",
          "Las normas de exposición laboral dentro de las fábricas"
        ],
        "checklist": [
          "Recopila declaraciones completas de materiales de los proveedores",
          "Revisa periódicamente la lista de candidatas SVHC vigente",
          "Comunica la información en la cadena de suministro cuando proceda",
          "Prepara las notificaciones SCIP de los artículos afectados"
        ]
      },
      "fr": {
        "name": "REACH : SVHC et notification SCIP",
        "group": "Environnement et matériaux",
        "region": "Union européenne",
        "status": "Obligatoire dans son périmètre",
        "issuer": "Cadre de l'Agence européenne des produits chimiques",
        "summary": "Réglementation européenne sur les substances chimiques imposant des obligations au fournisseur lorsqu'un produit contient une substance extrêmement préoccupante au-delà du seuil.",
        "meaning": "Le matériel IoT peut contenir des SVHC dans les soudures, plastiques, revêtements ou câbles. Les obligations d'information s'appliquent au niveau de l'article et la notification dans la base SCIP est requise pour les articles mis sur le marché de l'UE.",
        "appliesTo": [
          "Articles finis mis sur le marché de l'UE",
          "Composants importés comme articles distincts",
          "Câbles, boîtiers et revêtements"
        ],
        "doesNotCover": [
          "La restriction des substances dans l'électronique, qui relève de RoHS",
          "Les restrictions chimiques des batteries",
          "Les règles d'exposition professionnelle en usine"
        ],
        "checklist": [
          "Rassembler les déclarations complètes de matériaux des fournisseurs",
          "Vérifier régulièrement la liste des substances candidates SVHC",
          "Communiquer l'information dans la chaîne d'approvisionnement si nécessaire",
          "Préparer les notifications SCIP des articles concernés"
        ]
      }
    },
    "weee": {
      "es": {
        "name": "Residuos de aparatos eléctricos y electrónicos (RAEE)",
        "group": "Medio ambiente y materiales",
        "region": "Unión Europea y Reino Unido",
        "status": "Obligatoria en su ámbito",
        "issuer": "Sistemas nacionales de responsabilidad ampliada del productor",
        "summary": "Normas que hacen al productor responsable de financiar la recogida y el reciclaje de aparatos eléctricos y electrónicos.",
        "meaning": "Quien comercializa productos suele tener que registrarse en una entidad de responsabilidad ampliada en cada país, declarar volúmenes y mostrar el símbolo del contenedor tachado.",
        "appliesTo": [
          "Aparatos eléctricos domésticos y profesionales",
          "Vendedores online, incluidas las ventas a distancia en la UE",
          "Baterías contenidas en el producto"
        ],
        "doesNotCover": [
          "Las restricciones de sustancias de RoHS",
          "Los sistemas de recuperación de envases",
          "Las obligaciones de transporte y logística"
        ],
        "checklist": [
          "Regístrate en cada país de la UE donde comercialices",
          "Declara los volúmenes puestos en el mercado a tiempo",
          "Imprime el símbolo del contenedor tachado y la identificación del productor",
          "Contrata un sistema de recogida cuando sea exigible"
        ]
      },
      "fr": {
        "name": "Déchets d'équipements électriques et électroniques (DEEE)",
        "group": "Environnement et matériaux",
        "region": "Union européenne et Royaume-Uni",
        "status": "Obligatoire dans son périmètre",
        "issuer": "Filières nationales de responsabilité élargie du producteur",
        "summary": "Règles rendant le producteur responsable du financement de la collecte et du recyclage des équipements électriques et électroniques.",
        "meaning": "Celui qui met les produits sur le marché doit généralement s'enregistrer auprès d'une filière de responsabilité élargie dans chaque pays, déclarer les volumes et afficher le symbole de la poubelle barrée.",
        "appliesTo": [
          "Équipements électriques domestiques et professionnels",
          "Vendeurs en ligne, y compris la vente à distance dans l'UE",
          "Batteries contenues dans le produit"
        ],
        "doesNotCover": [
          "Les restrictions de substances de RoHS",
          "Les filières de reprise des emballages",
          "Les obligations de transport et de logistique"
        ],
        "checklist": [
          "S'enregistrer dans chaque pays de l'UE où les produits sont mis sur le marché",
          "Déclarer les volumes mis sur le marché dans les délais",
          "Imprimer le symbole de la poubelle barrée et l'identification du producteur",
          "Contracter une filière de reprise lorsque c'est exigé"
        ]
      }
    },
    "eu-battery": {
      "es": {
        "name": "Reglamento europeo de baterías (UE) 2023/1542",
        "group": "Medio ambiente y materiales",
        "region": "Unión Europea",
        "status": "Obligatoria, por fases",
        "issuer": "Autoridades de los Estados miembros de la UE",
        "summary": "Sustituye a la antigua directiva de baterías con obligaciones más amplias sobre huella de carbono, contenido reciclado, etiquetado, diligencia debida y extraíbilidad.",
        "meaning": "El reglamento se aplica de forma progresiva, por lo que distintas obligaciones entran en vigor en fechas diferentes. Las baterías portátiles integradas en productos IoT se enfrentan a expectativas de extraíbilidad y sustituibilidad, y el etiquetado se amplía con el tiempo.",
        "appliesTo": [
          "Productos con baterías recargables o sustituibles",
          "Proveedores de paquetes de baterías",
          "Productores que comercializan baterías en la UE"
        ],
        "doesNotCover": [
          "Los ensayos de transporte de celdas de litio, que son UN 38.3",
          "Los ensayos de seguridad del paquete de baterías",
          "Los objetivos de reciclaje gestionados por los sistemas nacionales"
        ],
        "checklist": [
          "Identifica la categoría de batería y las fechas de aplicación",
          "Planifica la extraíbilidad y sustituibilidad de las baterías portátiles",
          "Prepara la documentación de huella de carbono y contenido reciclado",
          "Aplica el etiquetado y el QR de baterías cuando corresponda"
        ]
      },
      "fr": {
        "name": "Règlement européen sur les batteries (UE) 2023/1542",
        "group": "Environnement et matériaux",
        "region": "Union européenne",
        "status": "Obligatoire, par phases",
        "issuer": "Autorités des États membres de l'UE",
        "summary": "Remplace l'ancienne directive batteries par des obligations élargies : empreinte carbone, contenu recyclé, étiquetage, devoir de diligence et retraitabilité.",
        "meaning": "Le règlement s'applique progressivement : différentes obligations entrent en vigueur à des dates distinctes. Les batteries portables intégrées aux produits IoT sont concernées par les attentes de retrait et de remplacement, et l'étiquetage s'étend avec le temps.",
        "appliesTo": [
          "Produits à batterie rechargeable ou remplaçable",
          "Fournisseurs de packs de batteries",
          "Producteurs mettant des batteries sur le marché de l'UE"
        ],
        "doesNotCover": [
          "Les essais de transport des cellules lithium, qui relèvent de l'UN 38.3",
          "Les essais de sécurité du pack de batteries",
          "Les objectifs de recyclage gérés par les filières nationales"
        ],
        "checklist": [
          "Identifier la catégorie de batterie et les dates d'application",
          "Prévoir le retrait et le remplacement des batteries portables",
          "Préparer les documents d'empreinte carbone et de contenu recyclé",
          "Appliquer l'étiquetage et le QR batterie lorsqu'ils s'appliquent"
        ]
      }
    },
    "prop65": {
      "es": {
        "name": "Propuesta 65 de California",
        "group": "Medio ambiente y materiales",
        "region": "California, Estados Unidos",
        "status": "Obligatoria si se supera la exposición segura",
        "issuer": "Oficina de Evaluación de Riesgos Ambientales de California",
        "summary": "Ley californiana que exige una advertencia clara cuando un producto expone a los usuarios a sustancias de la lista estatal por encima de los niveles de referencia.",
        "meaning": "La norma se basa en advertir, no en aprobar. El fabricante evalúa la exposición y advierte, o documenta que está por debajo del nivel de referencia. El contenido y la ubicación de la advertencia siguen formatos establecidos.",
        "appliesTo": [
          "Productos de consumo vendidos en California",
          "Cables, materiales vinílicos, soldaduras y recubrimientos",
          "Productos que pueden liberar una sustancia durante el uso normal"
        ],
        "doesNotCover": [
          "Las restricciones químicas federales",
          "Las normas europeas de sustancias",
          "La certificación de seguridad del producto"
        ],
        "checklist": [
          "Revisa el listado de materiales frente a la lista vigente de sustancias",
          "Evalúa las vías de exposición y la duración del uso",
          "Elige entre advertir o documentar la ausencia de exposición",
          "Aplica la advertencia en el formato exigido y revisa periódicamente"
        ]
      },
      "fr": {
        "name": "Proposition 65 de Californie",
        "group": "Environnement et matériaux",
        "region": "Californie, États-Unis",
        "status": "Obligatoire si l'exposition dépasse le seuil",
        "issuer": "Office d'évaluation des risques sanitaires environnementaux de Californie",
        "summary": "Loi californienne exigeant un avertissement clair lorsqu'un produit expose les utilisateurs à des substances de la liste de l'État au-delà des seuils de référence.",
        "meaning": "La règle repose sur l'avertissement, non sur une autorisation. Le fabricant évalue l'exposition et avertit, ou documente qu'elle reste sous le seuil de référence. Le contenu et l'emplacement de l'avertissement suivent des formats définis.",
        "appliesTo": [
          "Produits de consommation vendus en Californie",
          "Câbles, matériaux vinyliques, soudures et revêtements",
          "Produits pouvant libérer une substance lors d'un usage normal"
        ],
        "doesNotCover": [
          "Les restrictions chimiques fédérales",
          "Les règles européennes sur les substances",
          "La certification de sécurité du produit"
        ],
        "checklist": [
          "Comparer la nomenclature à la liste actuelle des substances",
          "Évaluer les voies d'exposition et la durée d'utilisation",
          "Choisir entre l'avertissement et un dossier d'absence d'exposition",
          "Appliquer l'avertissement au format requis et réviser régulièrement"
        ]
      }
    },
    "un383": {
      "es": {
        "name": "Ensayos de transporte UN 38.3 para baterías de litio",
        "group": "Medio ambiente y materiales",
        "region": "Transporte internacional",
        "status": "Obligatoria para el envío",
        "issuer": "Manual de Pruebas y Criterios de la ONU, ensayado por laboratorios acreditados",
        "summary": "Requisito de ensayo de transporte para celdas y baterías de litio metal y litio ion antes del envío aéreo, marítimo o terrestre.",
        "meaning": "Enviar baterías de litio sin un resumen de ensayo UN 38.3 infringe la normativa de transporte, y los transportistas pueden rechazar el envío. El informe acompaña a la batería en la cadena de suministro, incluidos los envíos de muestras.",
        "appliesTo": [
          "Dispositivos con celdas de litio ion o litio metal",
          "Paquetes de baterías de repuesto",
          "Envíos de prototipos y muestras"
        ],
        "doesNotCover": [
          "La certificación de seguridad de la batería del producto acabado",
          "El diseño del sistema de carga",
          "Las advertencias al consumidor más allá del etiquetado de transporte"
        ],
        "checklist": [
          "Ensaya cada tipo de celda y batería tal como se envía",
          "Conserva el resumen de ensayo de un laboratorio acreditado",
          "Revisa el estado de carga y las normas de embalaje para el transporte aéreo",
          "Vuelve a ensayar tras cambios de diseño o proveedor que afecten a la batería"
        ]
      },
      "fr": {
        "name": "Essais de transport UN 38.3 pour batteries lithium",
        "group": "Environnement et matériaux",
        "region": "Transport international",
        "status": "Obligatoire pour l'expédition",
        "issuer": "Manuel d'épreuves et de critères de l'ONU, testé par des laboratoires accrédités",
        "summary": "Exigence d'essai de transport pour les cellules et batteries lithium-métal et lithium-ion avant expédition aérienne, maritime ou terrestre.",
        "meaning": "Expédier des batteries lithium sans résumé d'essai UN 38.3 constitue une infraction à la réglementation transport, et les transporteurs peuvent refuser l'envoi. Le rapport accompagne la batterie tout au long de la chaîne d'approvisionnement, y compris pour les envois d'échantillons.",
        "appliesTo": [
          "Appareils à cellules lithium-ion ou lithium-métal",
          "Packs de batteries de rechange",
          "Envois de prototypes et d'échantillons"
        ],
        "doesNotCover": [
          "La certification de sécurité de la batterie du produit fini",
          "La conception du système de charge",
          "Les avertissements consommateur au-delà de l'étiquetage transport"
        ],
        "checklist": [
          "Tester chaque type de cellule et de batterie tel qu'expédié",
          "Conserver le résumé d'essai d'un laboratoire accrédité",
          "Vérifier l'état de charge et les règles d'emballage pour le transport aérien",
          "Retester après tout changement de conception ou de fournisseur affectant la batterie"
        ]
      }
    },
    "energy-star": {
      "es": {
        "name": "Programa de eficiencia Energy Star",
        "group": "Medio ambiente y materiales",
        "region": "Estados Unidos y mercados seleccionados",
        "status": "Voluntario",
        "issuer": "Agencia de Protección Medioambiental de EE. UU.",
        "summary": "Etiquetado voluntario de eficiencia para productos que cumplen las especificaciones Energy Star en una categoría elegible.",
        "meaning": "Para equipos de red y electrónica de consumo, la certificación Energy Star exige ensayos por terceros y registro, y la etiqueta solo puede usarse en la configuración certificada.",
        "appliesTo": [
          "Electrónica de consumo y equipos de red elegibles",
          "Productos en los que la eficiencia es un argumento de venta",
          "Programas de minoristas que exigen la etiqueta"
        ],
        "doesNotCover": [
          "Las homologaciones de seguridad, EMC o radio",
          "El etiquetado energético de la UE, que es un régimen distinto",
          "Las normas de eficiencia de motores o inversores"
        ],
        "checklist": [
          "Confirma que la categoría del producto es elegible actualmente",
          "Ensaya frente a la versión vigente de la especificación",
          "Completa la certificación por terceros y el registro",
          "Comunica los cambios que afecten a la configuración cualificada"
        ]
      },
      "fr": {
        "name": "Programme d'efficacité énergétique Energy Star",
        "group": "Environnement et matériaux",
        "region": "États-Unis et marchés sélectionnés",
        "status": "Volontaire",
        "issuer": "Agence américaine de protection de l'environnement",
        "summary": "Étiquetage volontaire d'efficacité pour les produits conformes aux spécifications Energy Star dans une catégorie éligible.",
        "meaning": "Pour les équipements réseau et l'électronique grand public, la certification Energy Star exige des essais par un tiers et un enregistrement ; l'étiquette ne peut être utilisée que pour la configuration certifiée.",
        "appliesTo": [
          "Électronique grand public et équipements réseau éligibles",
          "Produits pour lesquels l'efficacité est un argument de vente",
          "Programmes de distributeurs exigeant l'étiquette"
        ],
        "doesNotCover": [
          "Les homologations de sécurité, CEM ou radio",
          "L'étiquetage énergétique de l'UE, régime distinct",
          "Les normes d'efficacité des moteurs ou onduleurs"
        ],
        "checklist": [
          "Vérifier que la catégorie du produit est actuellement éligible",
          "Tester selon la version en vigueur de la spécification",
          "Effectuer la certification tierce et l'enregistrement",
          "Signaler les changements affectant la configuration qualifiée"
        ]
      }
    },
    "etsi-303-645": {
      "es": {
        "name": "Base de seguridad ETSI EN 303 645 para IoT de consumo",
        "group": "Seguridad y privacidad",
        "region": "Base internacional",
        "status": "Base voluntaria, referenciada por la regulación",
        "issuer": "ETSI, desarrollada con la industria y los reguladores",
        "summary": "Base ampliamente referenciada de trece requisitos de seguridad para dispositivos IoT de consumo, desde la ausencia de contraseñas universales hasta las actualizaciones seguras.",
        "meaning": "EN 303 645 no es por sí misma un requisito de acceso al mercado, pero varios regímenes nacionales y requisitos de minoristas la usan como referencia. El cumplimiento se evidencia con un informe frente a los requisitos y la guía de protección de datos asociada.",
        "appliesTo": [
          "Dispositivos IoT de consumo como cámaras, hubs y sensores",
          "Apps móviles y servicios en la nube asociados",
          "Fabricantes que diseñan un programa de seguridad base"
        ],
        "doesNotCover": [
          "Los requisitos de seguridad de dispositivos industriales o médicos",
          "La certificación de un sistema de gestión tipo ISO 27001",
          "El cumplimiento legal de protección de datos"
        ],
        "checklist": [
          "Elimina las contraseñas universales y exige credenciales únicas",
          "Publica un contacto y un proceso de divulgación de vulnerabilidades",
          "Publica un periodo de soporte y una política de actualizaciones",
          "Protege los datos sensibles en tránsito y en reposo",
          "Ensaya el dispositivo frente a los trece requisitos"
        ]
      },
      "fr": {
        "name": "Socle de sécurité ETSI EN 303 645 pour l'IoT grand public",
        "group": "Sécurité et vie privée",
        "region": "Socle international",
        "status": "Socle volontaire, référencé par la réglementation",
        "issuer": "ETSI, développé avec l'industrie et les régulateurs",
        "summary": "Socle largement référencé de treize exigences de sécurité pour les objets IoT grand public, de l'absence de mots de passe universels aux mises à jour sécurisées.",
        "meaning": "L'EN 303 645 n'est pas en soi une exigence d'accès au marché, mais plusieurs programmes nationaux et exigences de distributeurs s'y réfèrent. La conformité est généralement attestée par un rapport d'essai et la recommandation sur la protection des données associée.",
        "appliesTo": [
          "Objets IoT grand public tels que caméras, hubs et capteurs",
          "Applications mobiles et services cloud associés",
          "Fabricants construisant un programme de sécurité de base"
        ],
        "doesNotCover": [
          "Les exigences de sécurité des dispositifs industriels ou médicaux",
          "La certification d'un système de management de type ISO 27001",
          "La conformité juridique en matière de protection des données"
        ],
        "checklist": [
          "Supprimer les mots de passe universels et imposer des identifiants uniques",
          "Publier un contact et un processus de divulgation des vulnérabilités",
          "Publier une durée de support et une politique de mise à jour",
          "Protéger les données sensibles en transit et au repos",
          "Tester l'appareil au regard des treize exigences"
        ]
      }
    },
    "en-18031": {
      "es": {
        "name": "Normas armonizadas EN 18031 bajo la RED",
        "group": "Seguridad y privacidad",
        "region": "Unión Europea",
        "status": "Vinculada al acceso al mercado de la UE",
        "issuer": "CEN/CENELEC, citadas bajo la Directiva de Equipos Radioeléctricos",
        "summary": "Normas armonizadas que otorgan presunción de conformidad con los requisitos de ciberseguridad añadidos a la Directiva de Equipos Radioeléctricos.",
        "meaning": "Con el reglamento delegado aplicable desde el 1 de agosto de 2025, los equipos radioeléctricos conectados a internet deben cumplir requisitos de protección de red, protección de datos personales y protección contra el fraude. EN 18031-1, -2 y -3 son las vías principales y los ensayos los realizan organismos notificados.",
        "appliesTo": [
          "Equipos radioeléctricos conectados a internet en la UE",
          "Wearables, cámaras, juguetes y dispositivos domésticos con app",
          "Dispositivos que tratan datos personales o permiten pagos"
        ],
        "doesNotCover": [
          "Las obligaciones del operador del servicio derivadas del RGPD",
          "Los ensayos de rendimiento radio y EMC",
          "La seguridad de los servicios back-end fuera del ámbito del dispositivo"
        ],
        "checklist": [
          "Confirma cuál de las tres normas se aplica al producto",
          "Mapea las funciones del dispositivo frente a cada requisito",
          "Contacta con un organismo notificado con antelación",
          "Incorpora la evaluación al expediente técnico con la declaración de conformidad"
        ]
      },
      "fr": {
        "name": "Normes harmonisées EN 18031 au titre de la RED",
        "group": "Sécurité et vie privée",
        "region": "Union européenne",
        "status": "Liée à l'accès au marché de l'UE",
        "issuer": "CEN/CENELEC, citées au titre de la directive Équipements radio",
        "summary": "Normes harmonisées conférant une présomption de conformité aux exigences de cybersécurité ajoutées à la directive Équipements radio.",
        "meaning": "Avec le règlement délégué applicable depuis le 1er août 2025, les équipements radio connectés à internet doivent satisfaire des exigences de protection du réseau, des données personnelles et contre la fraude. Les EN 18031-1, -2 et -3 sont les voies principales, évaluées par des organismes notifiés.",
        "appliesTo": [
          "Équipements radio connectés à internet dans l'UE",
          "Objets portables, caméras, jouets et appareils domestiques avec application",
          "Appareils traitant des données personnelles ou permettant des paiements"
        ],
        "doesNotCover": [
          "Les obligations de l'exploitant du service au titre du RGPD",
          "Les essais de performance radio et de CEM",
          "La sécurité des services back-end hors du périmètre de l'appareil"
        ],
        "checklist": [
          "Confirmer laquelle des trois normes s'applique au produit",
          "Positionner les fonctions de l'appareil par rapport à chaque exigence",
          "Contacter tôt un organisme notifié",
          "Intégrer l'évaluation au dossier technique avec la déclaration de conformité"
        ]
      }
    },
    "nist-8259": {
      "es": {
        "name": "Base de ciberseguridad IoT NIST IR 8259",
        "group": "Seguridad y privacidad",
        "region": "Marco de Estados Unidos",
        "status": "Marco voluntario",
        "issuer": "National Institute of Standards and Technology",
        "summary": "Base voluntaria de seis actividades fundamentales de ciberseguridad para dispositivos conectados, muy utilizada en compras públicas y planificación de producto.",
        "meaning": "NIST IR 8259 describe lo que un fabricante debería hacer antes de que el dispositivo llegue al mercado, y 8259A enumera las capacidades correspondientes del dispositivo. Suele usarse junto con la guía de ciberseguridad para adquisiciones federales.",
        "appliesTo": [
          "Fabricantes que planifican funciones de seguridad del dispositivo",
          "Requisitos de compra que citan la guía NIST",
          "Productos que buscan una base documentada ante compradores empresariales"
        ],
        "doesNotCover": [
          "Una certificación o sello",
          "El cumplimiento de la normativa de privacidad",
          "La regulación sectorial, como los dispositivos médicos"
        ],
        "checklist": [
          "Identifica el dispositivo y sus supuestos de seguridad",
          "Define las capacidades de seguridad orientadas al cliente",
          "Documenta el modelo de actualización y gestión de vulnerabilidades",
          "Mapea el dispositivo frente a las seis actividades y las capacidades de 8259A"
        ]
      },
      "fr": {
        "name": "Socle de cybersécurité IoT NIST IR 8259",
        "group": "Sécurité et vie privée",
        "region": "Cadre des États-Unis",
        "status": "Cadre volontaire",
        "issuer": "National Institute of Standards and Technology",
        "summary": "Socle volontaire de six activités fondamentales de cybersécurité pour les appareils connectés, largement utilisé dans les achats publics et la planification produit.",
        "meaning": "Le NIST IR 8259 décrit ce qu'un fabricant devrait faire avant la mise sur le marché, et le 8259A liste les capacités correspondantes de l'appareil. Il est souvent utilisé avec les recommandations de cybersécurité pour les achats fédéraux.",
        "appliesTo": [
          "Fabricants planifiant les fonctions de sécurité de l'appareil",
          "Exigences d'achat citant les recommandations NIST",
          "Produits recherchant un socle documenté face aux acheteurs professionnels"
        ],
        "doesNotCover": [
          "Une certification ou un label",
          "La conformité aux lois sur la vie privée",
          "La réglementation sectorielle, comme les dispositifs médicaux"
        ],
        "checklist": [
          "Identifier l'appareil et ses hypothèses de sécurité",
          "Définir les capacités de sécurité orientées client",
          "Documenter le modèle de mise à jour et de gestion des vulnérabilités",
          "Positionner l'appareil par rapport aux six activités et aux capacités du 8259A"
        ]
      }
    },
    "cyber-trust-mark": {
      "es": {
        "name": "Marca de confianza cibernética de EE. UU.",
        "group": "Seguridad y privacidad",
        "region": "Estados Unidos",
        "status": "Programa de etiquetado voluntario",
        "issuer": "FCC con administradores del programa",
        "summary": "Programa voluntario de etiquetado estadounidense para la ciberseguridad de IoT de consumo, derivado de la iniciativa de etiquetado de la FCC.",
        "meaning": "La etiqueta pretende dar al comprador una señal sencilla de que el dispositivo cumple una base de seguridad definida, incluidas contraseñas únicas, actualizaciones y gestión de vulnerabilidades. Los detalles del programa y la lista de administradores reconocidos siguen evolucionando, por lo que conviene confirmar los requisitos vigentes antes de basar un lanzamiento en la marca.",
        "appliesTo": [
          "Productos IoT de consumo vendidos en Estados Unidos",
          "Minoristas y marketplaces que promueven la etiqueta",
          "Fabricantes que planifican una estrategia de diferenciación en seguridad"
        ],
        "doesNotCover": [
          "La autorización de equipos de radio, que es independiente",
          "Un sustituto del cumplimiento de la normativa de privacidad",
          "La seguridad de dispositivos industriales o empresariales"
        ],
        "checklist": [
          "Comprueba el alcance y los requisitos vigentes del programa",
          "Alinea el dispositivo con los criterios de seguridad subyacentes",
          "Planifica los ensayos por terceros y la administración de la etiqueta",
          "Mantén un compromiso público de soporte y actualizaciones"
        ]
      },
      "fr": {
        "name": "Marque de confiance cybernétique des États-Unis",
        "group": "Sécurité et vie privée",
        "region": "États-Unis",
        "status": "Programme d'étiquetage volontaire",
        "issuer": "FCC avec des administrateurs de programme",
        "summary": "Programme d'étiquetage volontaire américain pour la cybersécurité des objets IoT grand public, issu de l'initiative d'étiquetage de la FCC.",
        "meaning": "Le label vise à donner à l'acheteur un signal simple indiquant que l'appareil respecte un socle de sécurité défini : mots de passe uniques, mises à jour et traitement des vulnérabilités. Les détails du programme et la liste des administrateurs reconnus évoluent encore : mieux vaut confirmer les exigences en vigueur avant de fonder un lancement sur ce label.",
        "appliesTo": [
          "Produits IoT grand public vendus aux États-Unis",
          "Distributeurs et marketplaces mettant le label en avant",
          "Fabricants préparant une différenciation par la sécurité"
        ],
        "doesNotCover": [
          "L'autorisation des équipements radio, distincte",
          "Un substitut à la conformité en matière de vie privée",
          "La sécurité des appareils industriels ou d'entreprise"
        ],
        "checklist": [
          "Vérifier le périmètre et les exigences actuelles du programme",
          "Aligner l'appareil sur les critères de sécurité sous-jacents",
          "Prévoir les essais tiers et l'administration du label",
          "Maintenir un engagement public de support et de mises à jour"
        ]
      }
    },
    "iec-62443": {
      "es": {
        "name": "Ciberseguridad industrial IEC 62443",
        "group": "Seguridad y privacidad",
        "region": "Internacional",
        "status": "Voluntaria, a menudo contractual",
        "issuer": "Comisión Electrotécnica Internacional e ISA",
        "summary": "Familia de normas de ciberseguridad para sistemas de automatización y control industrial, que cubre procesos, sistemas y componentes.",
        "meaning": "IEC 62443 es la referencia para IoT industrial, gateways y sistemas de edificios. Los compradores suelen exigir un nivel de seguridad objetivo, como SL 1 o SL 2, y la evidencia se obtiene mediante certificación o evaluación independiente.",
        "appliesTo": [
          "Gateways, controladores y sensores industriales",
          "Dispositivos de gestión de edificios y energía",
          "Proveedores que venden a infraestructuras críticas"
        ],
        "doesNotCover": [
          "Las bases de IoT de consumo, más ligeras",
          "La certificación clásica de seguridad informática",
          "Los requisitos de seguridad funcional"
        ],
        "checklist": [
          "Define el nivel de seguridad objetivo y las zonas del producto",
          "Aplica requisitos de desarrollo seguro y endurecimiento",
          "Documenta el modelo de amenazas, el control de acceso y las actualizaciones",
          "Completa una evaluación o certificación independiente"
        ]
      },
      "fr": {
        "name": "Cybersécurité industrielle IEC 62443",
        "group": "Sécurité et vie privée",
        "region": "International",
        "status": "Volontaire, souvent contractuelle",
        "issuer": "Commission Électrotechnique Internationale et ISA",
        "summary": "Famille de normes de cybersécurité pour les systèmes d'automatisation et de contrôle industriels, couvrant procédés, systèmes et composants.",
        "meaning": "L'IEC 62443 est la référence pour l'IoT industriel, les passerelles et les systèmes du bâtiment. Les acheteurs exigent souvent un niveau de sécurité cible, tel que SL 1 ou SL 2, et les preuves proviennent d'une certification ou d'une évaluation indépendante.",
        "appliesTo": [
          "Passerelles, automates et capteurs industriels",
          "Dispositifs de gestion du bâtiment et de l'énergie",
          "Fournisseurs vendant aux infrastructures critiques"
        ],
        "doesNotCover": [
          "Les socles IoT grand public, plus légers",
          "La certification classique de sécurité informatique",
          "Les exigences de sécurité fonctionnelle"
        ],
        "checklist": [
          "Définir le niveau de sécurité cible et les zones du produit",
          "Appliquer des exigences de développement sécurisé et de durcissement",
          "Documenter le modèle de menaces, le contrôle d'accès et les mises à jour",
          "Réaliser une évaluation ou une certification indépendante"
        ]
      }
    },
    "iso-27001": {
      "es": {
        "name": "Sistema de gestión de seguridad de la información (ISO/IEC 27001)",
        "group": "Seguridad y privacidad",
        "region": "Internacional",
        "status": "Voluntaria, contractual",
        "issuer": "Organismos de certificación acreditados",
        "summary": "Certificación de un sistema de gestión de seguridad de la información, que cubre cómo protege una organización sus datos y los de sus clientes.",
        "meaning": "ISO/IEC 27001 certifica la organización y sus procesos, no un dispositivo concreto. En empresas IoT es más relevante para el servicio en la nube, el backend de la app y las prácticas internas de desarrollo, y se exige con frecuencia en compras B2B.",
        "appliesTo": [
          "Plataformas en la nube y backends de apps",
          "Empresas que tratan datos de clientes a escala",
          "Proveedores que responden a cuestionarios de seguridad empresariales"
        ],
        "doesNotCover": [
          "Los requisitos de seguridad a nivel de dispositivo",
          "El cumplimiento de la normativa de privacidad, que aborda ISO 27701",
          "La certificación de producto de cualquier tipo"
        ],
        "checklist": [
          "Define el alcance y la declaración de aplicabilidad",
          "Evalúa riesgos y selecciona controles",
          "Opera el sistema de gestión con evidencias",
          "Completa las auditorías de fase 1 y 2 y mantén las auditorías de seguimiento"
        ]
      },
      "fr": {
        "name": "Système de management de la sécurité de l'information (ISO/IEC 27001)",
        "group": "Sécurité et vie privée",
        "region": "International",
        "status": "Volontaire, contractuelle",
        "issuer": "Organismes de certification accrédités",
        "summary": "Certification d'un système de management de la sécurité de l'information, portant sur la manière dont une organisation protège ses données et celles de ses clients.",
        "meaning": "L'ISO/IEC 27001 certifie l'organisation et ses processus, pas un appareil. Pour les entreprises IoT, elle concerne surtout le service cloud, le back-end de l'application et les pratiques de développement internes, et elle est fréquemment exigée en achat B2B.",
        "appliesTo": [
          "Plateformes cloud et back-ends d'applications",
          "Entreprises traitant des données clients à grande échelle",
          "Fournisseurs répondant à des questionnaires de sécurité d'entreprise"
        ],
        "doesNotCover": [
          "Les exigences de sécurité au niveau de l'appareil",
          "La conformité aux lois sur la vie privée, traitée par l'ISO 27701",
          "La certification de produit, quelle qu'elle soit"
        ],
        "checklist": [
          "Définir le périmètre et la déclaration d'applicabilité",
          "Évaluer les risques et sélectionner les mesures de contrôle",
          "Exploiter le système de management avec des preuves",
          "Réaliser les audits de phase 1 et 2 puis les audits de suivi"
        ]
      }
    },
    "iso-27701": {
      "es": {
        "name": "Gestión de la información de privacidad (ISO/IEC 27701)",
        "group": "Seguridad y privacidad",
        "region": "Internacional",
        "status": "Voluntaria, contractual",
        "issuer": "Organismos de certificación acreditados",
        "summary": "Extensión de ISO/IEC 27001 y 27002 para la gestión de la información de privacidad, que cubre a responsables y encargados del tratamiento.",
        "meaning": "ISO/IEC 27701 aporta un marco de gestión que se mapea con la normativa de privacidad, útil para empresas IoT que tratan datos de ubicación, cámara o salud. Complementa, pero no sustituye, el cumplimiento legal.",
        "appliesTo": [
          "Servicios en la nube que tratan datos personales",
          "Apps móviles que recogen datos de uso o de cuenta",
          "Organizaciones que actúan como encargadas del tratamiento de clientes empresariales"
        ],
        "doesNotCover": [
          "Una garantía de cumplimiento legal en cada jurisdicción",
          "Los requisitos de protección de datos a nivel de dispositivo",
          "El software de gestión de consentimiento"
        ],
        "checklist": [
          "Parte de un sistema de gestión ISO/IEC 27001 operativo",
          "Identifica los roles de responsable y encargado",
          "Amplía la evaluación de riesgos a los datos personales",
          "Documenta los registros de tratamiento y la conservación"
        ]
      },
      "fr": {
        "name": "Management de l'information de vie privée (ISO/IEC 27701)",
        "group": "Sécurité et vie privée",
        "region": "International",
        "status": "Volontaire, contractuelle",
        "issuer": "Organismes de certification accrédités",
        "summary": "Extension des ISO/IEC 27001 et 27002 au management de l'information de vie privée, couvrant responsables et sous-traitants.",
        "meaning": "L'ISO/IEC 27701 fournit un cadre de management aligné sur la réglementation vie privée, utile aux entreprises IoT traitant des données de localisation, de caméra ou de santé. Elle complète la conformité juridique sans la remplacer.",
        "appliesTo": [
          "Services cloud traitant des données personnelles",
          "Applications mobiles collectant des données d'usage ou de compte",
          "Organisations agissant comme sous-traitants pour des clients professionnels"
        ],
        "doesNotCover": [
          "Une garantie de conformité juridique dans chaque juridiction",
          "Les exigences de protection des données au niveau de l'appareil",
          "Le logiciel de gestion du consentement"
        ],
        "checklist": [
          "Partir d'un système de management ISO/IEC 27001 opérationnel",
          "Identifier les rôles de responsable et de sous-traitant",
          "Étendre l'analyse de risques aux données personnelles",
          "Documenter les registres de traitement et la conservation"
        ]
      }
    },
    "soc-2": {
      "es": {
        "name": "Informe de confianza SOC 2",
        "group": "Seguridad y privacidad",
        "region": "Estados Unidos, usado globalmente",
        "status": "Voluntario, contractual",
        "issuer": "Firmas de auditoría autorizadas",
        "summary": "Informe de atestación independiente sobre controles que cubren seguridad y, opcionalmente, disponibilidad, integridad de procesamiento, confidencialidad y privacidad.",
        "meaning": "SOC 2 es un informe, no un certificado. Los clientes empresariales suelen pedir primero un informe Tipo 1 puntual y después un Tipo 2 que cubra un periodo de operación a medida que el servicio madura.",
        "appliesTo": [
          "Servicios en la nube y plataformas IoT para clientes empresariales",
          "Entornos de backend y tratamiento de datos de apps",
          "Proveedores en procesos de compra empresariales"
        ],
        "doesNotCover": [
          "La seguridad del firmware del dispositivo",
          "El cumplimiento de la normativa de privacidad del consumidor",
          "Una marca de certificación pública"
        ],
        "checklist": [
          "Elige los criterios de servicios de confianza relevantes",
          "Documenta políticas y evidencias de control",
          "Completa una evaluación de preparación antes de la auditoría",
          "Publica el informe bajo NDA para los clientes"
        ]
      },
      "fr": {
        "name": "Rapport de confiance SOC 2",
        "group": "Sécurité et vie privée",
        "region": "États-Unis, utilisé mondialement",
        "status": "Volontaire, contractuel",
        "issuer": "Cabinets d'audit agréés",
        "summary": "Rapport d'attestation indépendant sur les contrôles couvrant la sécurité et, en option, la disponibilité, l'intégrité de traitement, la confidentialité et la vie privée.",
        "meaning": "SOC 2 est un rapport, pas un certificat. Les clients professionnels demandent généralement d'abord un rapport Type 1 ponctuel, puis un Type 2 couvrant une période d'exploitation à mesure que le service mûrit.",
        "appliesTo": [
          "Services cloud et plateformes IoT destinés aux clients professionnels",
          "Environnements back-end et traitement de données d'applications",
          "Fournisseurs engagés dans des processus d'achat d'entreprise"
        ],
        "doesNotCover": [
          "La sécurité du firmware de l'appareil",
          "La conformité aux lois de protection des consommateurs",
          "Une marque de certification publique"
        ],
        "checklist": [
          "Choisir les critères de services de confiance pertinents",
          "Documenter les politiques et les preuves de contrôle",
          "Réaliser une évaluation de préparation avant l'audit",
          "Diffuser le rapport sous NDA aux clients"
        ]
      }
    },
    "gdpr": {
      "es": {
        "name": "Reglamento General de Protección de Datos",
        "group": "Seguridad y privacidad",
        "region": "Unión Europea",
        "status": "Obligatorio",
        "issuer": "Autoridades de protección de datos de la UE",
        "summary": "Norma europea central sobre el tratamiento de datos personales, incluidos los recogidos por dispositivos conectados, apps y servicios en la nube.",
        "meaning": "Los productos IoT tratan habitualmente datos personales como credenciales, identificadores de dispositivo, ubicación, imágenes de cámara o mediciones de salud. El RGPD exige base jurídica, transparencia, minimización, seguridad, límites de conservación y soporte a los derechos de los interesados, y se aplica también a vendedores fuera de la UE que se dirigen a usuarios europeos.",
        "appliesTo": [
          "Apps asociadas y cuentas en la nube",
          "Cámaras, rastreadores y wearables que tratan datos personales",
          "Fabricantes y proveedores que ofrecen dispositivos a usuarios de la UE"
        ],
        "doesNotCover": [
          "El acceso al mercado radio o de seguridad",
          "Normas sectoriales como la Directiva ePrivacy para cookies y comunicaciones",
          "Las leyes nacionales de aplicación que añaden requisitos"
        ],
        "checklist": [
          "Mapea qué datos personales recoge cada producto y adónde van",
          "Define la base jurídica y documéntala",
          "Publica un aviso de privacidad coherente con los flujos reales",
          "Implementa conservación, supresión y exportación",
          "Evalúa las transferencias fuera de la UE y las garantías aplicadas"
        ]
      },
      "fr": {
        "name": "Règlement général sur la protection des données",
        "group": "Sécurité et vie privée",
        "region": "Union européenne",
        "status": "Obligatoire",
        "issuer": "Autorités de protection des données de l'UE",
        "summary": "Texte européen central sur le traitement des données personnelles, y compris celles collectées par les objets connectés, les applications et les services cloud.",
        "meaning": "Les produits IoT traitent couramment des données personnelles : identifiants de compte, identifiants d'appareil, localisation, images de caméra ou mesures de santé. Le RGPD exige une base légale, la transparence, la minimisation, la sécurité, des durées de conservation et le respect des droits des personnes ; il s'applique aussi aux vendeurs hors UE ciblant des utilisateurs européens.",
        "appliesTo": [
          "Applications associées et comptes cloud",
          "Caméras, traceurs et objets portables traitant des données personnelles",
          "Fabricants et prestataires proposant des appareils aux utilisateurs de l'UE"
        ],
        "doesNotCover": [
          "L'accès au marché radio ou de sécurité",
          "Les règles sectorielles comme la directive ePrivacy pour les cookies et les communications",
          "Les lois nationales de mise en œuvre ajoutant des exigences"
        ],
        "checklist": [
          "Cartographier les données personnelles collectées et leurs destinations",
          "Définir la base légale et la documenter",
          "Publier une politique de confidentialité conforme aux flux réels",
          "Mettre en place conservation, suppression et export",
          "Évaluer les transferts hors UE et les garanties appliquées"
        ]
      }
    },
    "ccpa-cpra": {
      "es": {
        "name": "Derechos de privacidad del consumidor en California",
        "group": "Seguridad y privacidad",
        "region": "California, Estados Unidos",
        "status": "Obligatoria en su ámbito",
        "issuer": "Agencia de Protección de la Privacidad de California y el Fiscal General",
        "summary": "Ley californiana de privacidad que otorga a los consumidores derechos sobre su información personal, incluido el derecho a saber, suprimir, corregir y oponerse a la venta o cesión.",
        "meaning": "Las empresas que superan los umbrales deben ofrecer avisos en la recogida, atender las solicitudes de los consumidores y gestionar contratos con proveedores de servicio. Los identificadores de dispositivo y la ubicación precisa cuentan como información personal, por lo que las apps y los servicios en la nube suelen estar en el ámbito.",
        "appliesTo": [
          "Empresas que atienden a residentes de California",
          "Apps asociadas y servicios en la nube",
          "Integraciones de analítica y publicidad"
        ],
        "doesNotCover": [
          "Las normas europeas de protección de datos",
          "Normas sectoriales como las de datos de salud",
          "Los requisitos de seguridad a nivel de dispositivo"
        ],
        "checklist": [
          "Confirma si se superan los umbrales de aplicación",
          "Actualiza el aviso de privacidad y las divulgaciones de recogida",
          "Implementa la gestión de solicitudes y la verificación de identidad",
          "Revisa los contratos con socios de analítica y publicidad"
        ]
      },
      "fr": {
        "name": "Droits à la vie privée des consommateurs en Californie",
        "group": "Sécurité et vie privée",
        "region": "Californie, États-Unis",
        "status": "Obligatoire dans son périmètre",
        "issuer": "Agence californienne de protection de la vie privée et procureur général",
        "summary": "Loi californienne accordant aux consommateurs des droits sur leurs informations personnelles : savoir, supprimer, corriger et s'opposer à la vente ou au partage.",
        "meaning": "Les entreprises dépassant les seuils doivent fournir des informations lors de la collecte, traiter les demandes des consommateurs et encadrer les contrats avec leurs prestataires. Les identifiants d'appareil et la localisation précise comptent comme informations personnelles, ce qui place souvent les applications et services cloud dans le périmètre.",
        "appliesTo": [
          "Entreprises servant des résidents de Californie",
          "Applications associées et services cloud",
          "Intégrations d'analytique et de publicité"
        ],
        "doesNotCover": [
          "Les règles européennes de protection des données",
          "Les règles sectorielles comme celles sur les données de santé",
          "Les exigences de sécurité au niveau de l'appareil"
        ],
        "checklist": [
          "Vérifier si les seuils d'application sont atteints",
          "Mettre à jour la politique de confidentialité et les informations de collecte",
          "Mettre en place le traitement des demandes et la vérification d'identité",
          "Revoir les contrats avec les partenaires analytiques et publicitaires"
        ]
      }
    },
    "coppa": {
      "es": {
        "name": "Privacidad infantil en línea (COPPA)",
        "group": "Seguridad y privacidad",
        "region": "Estados Unidos",
        "status": "Obligatoria en su ámbito",
        "issuer": "Comisión Federal de Comercio",
        "summary": "Norma estadounidense que restringe la recogida de información personal de menores de trece años sin consentimiento parental verificable.",
        "meaning": "Los juguetes inteligentes, los relojes infantiles y las cámaras para niños son un área de riesgo directo para COPPA, porque combinan cámara, micrófono, ubicación y cuentas de app. La norma también limita la analítica de terceros y la publicidad en servicios dirigidos a menores.",
        "appliesTo": [
          "Juguetes inteligentes, relojes infantiles y rastreadores para niños",
          "Apps y servicios dirigidos a menores",
          "Sitios con conocimiento real de usuarios menores"
        ],
        "doesNotCover": [
          "Las homologaciones radio y de seguridad",
          "Las normas europeas de datos de menores, como el artículo 8 del RGPD",
          "Las normas de compra escolar"
        ],
        "checklist": [
          "Determina si el producto o la app se dirige a menores",
          "Minimiza la recogida y desactiva la publicidad conductual cuando proceda",
          "Implementa consentimiento parental verificable cuando sea necesario",
          "Ofrece vías de revisión y supresión para los padres",
          "Revisa los flujos de datos de proveedores que traten datos de menores"
        ]
      },
      "fr": {
        "name": "Protection de la vie privée des enfants en ligne (COPPA)",
        "group": "Sécurité et vie privée",
        "region": "États-Unis",
        "status": "Obligatoire dans son périmètre",
        "issuer": "Federal Trade Commission",
        "summary": "Règle américaine limitant la collecte d'informations personnelles auprès des moins de treize ans sans consentement parental vérifiable.",
        "meaning": "Les jouets connectés, montres pour enfants et caméras jeunesse constituent une zone de risque directe au titre de la COPPA, car ils combinent caméra, microphone, localisation et comptes applicatifs. La règle encadre aussi l'analytique tierce et la publicité dans les services destinés aux enfants.",
        "appliesTo": [
          "Jouets connectés, montres pour enfants et traceurs jeunesse",
          "Applications et services destinés aux enfants",
          "Sites ayant connaissance d'utilisateurs mineurs"
        ],
        "doesNotCover": [
          "Les homologations radio et de sécurité",
          "Les règles européennes sur les données des enfants, comme l'article 8 du RGPD",
          "Les règles d'achat scolaire"
        ],
        "checklist": [
          "Déterminer si le produit ou l'application s'adresse aux enfants",
          "Minimiser la collecte et désactiver la publicité comportementale si nécessaire",
          "Mettre en place un consentement parental vérifiable lorsque requis",
          "Prévoir des voies de consultation et de suppression pour les parents",
          "Examiner les flux de données des prestataires traitant des données d'enfants"
        ]
      }
    },
    "wi-fi-certified": {
      "es": {
        "name": "Certificación de Wi-Fi Alliance",
        "group": "Interoperabilidad",
        "region": "Internacional",
        "status": "Voluntaria, muy exigida",
        "issuer": "Wi-Fi Alliance",
        "summary": "Programa de certificación que confirma que un producto interoperará con redes Wi-Fi y admite el conjunto de seguridad y funciones anunciado.",
        "meaning": "La certificación cubre la configuración ensayada, incluidos el chipset, el firmware y el diseño de antena. Wi-Fi 6, Wi-Fi 6E, Wi-Fi 7, WPA3 y EasyMesh son programas distintos, y un dispositivo puede llevar más de una designación.",
        "appliesTo": [
          "Puntos de acceso, routers, repetidores y sistemas mesh",
          "Cámaras, videoporteros y electrodomésticos con Wi-Fi",
          "Módulos usados como parte de un producto final certificado"
        ],
        "doesNotCover": [
          "La homologación radio como FCC o CE",
          "La calidad del servicio de internet o el rendimiento en la nube",
          "El rendimiento mesh en cualquier edificio"
        ],
        "checklist": [
          "Elige las certificaciones que correspondan a las afirmaciones de marketing",
          "Ensaya en un laboratorio autorizado con el plan de ensayo correcto",
          "Traslada las condiciones de certificación del módulo al diseño anfitrión",
          "Muestra las marcas e identificadores de certificación correctamente"
        ]
      },
      "fr": {
        "name": "Certification Wi-Fi Alliance",
        "group": "Interopérabilité",
        "region": "International",
        "status": "Volontaire, très exigée",
        "issuer": "Wi-Fi Alliance",
        "summary": "Programme de certification confirmant qu'un produit interopérera avec les réseaux Wi-Fi et prend en charge l'ensemble de sécurité et de fonctions annoncé.",
        "meaning": "La certification couvre la configuration testée, notamment le chipset, le firmware et la conception d'antenne. Wi-Fi 6, Wi-Fi 6E, Wi-Fi 7, WPA3 et EasyMesh sont des programmes distincts, et un appareil peut porter plusieurs désignations.",
        "appliesTo": [
          "Bornes, routeurs, répéteurs et systèmes mesh",
          "Caméras, sonnettes et appareils électroménagers Wi-Fi",
          "Modules intégrés à un produit final certifié"
        ],
        "doesNotCover": [
          "L'homologation radio telle que FCC ou CE",
          "La qualité du service internet ou les performances cloud",
          "Les performances mesh dans tous les bâtiments"
        ],
        "checklist": [
          "Choisir les certifications correspondant aux allégations marketing",
          "Tester dans un laboratoire agréé avec le bon plan d'essai",
          "Transférer les conditions de certification du module à la conception hôte",
          "Afficher correctement les marques et identifiants de certification"
        ]
      }
    },
    "bluetooth-sig": {
      "es": {
        "name": "Cualificación Bluetooth",
        "group": "Interoperabilidad",
        "region": "Internacional",
        "status": "Obligatoria para usar las marcas Bluetooth",
        "issuer": "Bluetooth Special Interest Group",
        "summary": "Membresía, declaración y proceso de cualificación que permite a un producto usar las marcas Bluetooth y declarar compatibilidad de versión.",
        "meaning": "Los productos deben cualificarse a través del Bluetooth SIG y figurar en el listado, y el diseño debe declararlo la empresa miembro. Las declaraciones de componente de un proveedor de módulos pueden reducir el alcance de ensayo, pero no la obligación de declarar el producto final.",
        "appliesTo": [
          "Accesorios, wearables y dispositivos de audio",
          "Dispositivos con Bluetooth Low Energy para configuración o sensores",
          "Módulos integrados en un producto mayor"
        ],
        "doesNotCover": [
          "La homologación radio en los países de destino",
          "La certificación Wi-Fi o celular",
          "Los requisitos de las tiendas de aplicaciones"
        ],
        "checklist": [
          "Únete al Bluetooth SIG como miembro",
          "Usa componentes cualificados y registra sus declaraciones",
          "Completa la declaración y el listado del producto",
          "Mantén la versión del diseño cualificado alineada con el firmware enviado"
        ]
      },
      "fr": {
        "name": "Qualification Bluetooth",
        "group": "Interopérabilité",
        "region": "International",
        "status": "Obligatoire pour utiliser les marques Bluetooth",
        "issuer": "Bluetooth Special Interest Group",
        "summary": "Adhésion, déclaration et processus de qualification permettant à un produit d'utiliser les marques Bluetooth et de revendiquer une version prise en charge.",
        "meaning": "Les produits doivent être qualifiés auprès du Bluetooth SIG et figurer au listing, et la conception doit être déclarée par l'entreprise membre. Les déclarations de composants d'un fournisseur de modules peuvent réduire le périmètre d'essai, mais pas l'obligation de déclarer le produit final.",
        "appliesTo": [
          "Accessoires, objets portables et appareils audio",
          "Appareils Bluetooth Low Energy pour la configuration ou les capteurs",
          "Modules intégrés dans un produit plus large"
        ],
        "doesNotCover": [
          "L'homologation radio dans les pays de destination",
          "La certification Wi-Fi ou cellulaire",
          "Les exigences des magasins d'applications"
        ],
        "checklist": [
          "Adhérer au Bluetooth SIG en tant que membre",
          "Utiliser des composants qualifiés et consigner leurs déclarations",
          "Compléter la déclaration et le listing du produit",
          "Maintenir la version de conception qualifiée alignée sur le firmware livré"
        ]
      }
    },
    "matter": {
      "es": {
        "name": "Certificación Matter",
        "group": "Interoperabilidad",
        "region": "Internacional",
        "status": "Voluntaria, dependiente del ecosistema",
        "issuer": "Connectivity Standards Alliance (CSA)",
        "summary": "Estándar de capa de aplicación que permite que los dispositivos de hogar conectado funcionen con Apple Home, Google Home, Amazon Alexa y SmartThings.",
        "meaning": "La certificación Matter exige ser miembro de CSA, participar en eventos de ensayo y certificar con un proveedor autorizado. Los productos se certifican por tipo de dispositivo, y cada ecosistema decide qué funciones expone en su app.",
        "appliesTo": [
          "Luces, enchufes, sensores, cerraduras y bridges",
          "Hubs y border routers que comisionan dispositivos Matter",
          "Marcas que buscan compatibilidad multi-ecosistema"
        ],
        "doesNotCover": [
          "Todas las funciones de la app del fabricante",
          "Las integraciones nube a nube que no forman parte de Matter",
          "La homologación radio"
        ],
        "checklist": [
          "Regístrate como miembro de CSA y obtén un vendor ID",
          "Implementa el tipo de dispositivo y los clústeres correctos",
          "Supera el arnés de ensayo y completa la certificación",
          "Presenta el producto a los programas de los ecosistemas que quieras soportar"
        ]
      },
      "fr": {
        "name": "Certification Matter",
        "group": "Interopérabilité",
        "region": "International",
        "status": "Volontaire, dépendante de l'écosystème",
        "issuer": "Connectivity Standards Alliance (CSA)",
        "summary": "Standard de couche applicative permettant aux appareils de maison connectée de fonctionner avec Apple Home, Google Home, Amazon Alexa et SmartThings.",
        "meaning": "La certification Matter exige une adhésion à la CSA, la participation à des événements d'essai et une certification auprès d'un prestataire agréé. Les produits sont certifiés par type d'appareil, et chaque écosystème décide des fonctions exposées dans son application.",
        "appliesTo": [
          "Lampes, prises, capteurs, serrures et bridges",
          "Hubs et border routers qui commissionnent des appareils Matter",
          "Marques recherchant une compatibilité multi-écosystème"
        ],
        "doesNotCover": [
          "Toutes les fonctions de l'application du fabricant",
          "Les intégrations cloud à cloud hors Matter",
          "L'homologation radio"
        ],
        "checklist": [
          "S'inscrire comme membre CSA et obtenir un vendor ID",
          "Implémenter le bon type d'appareil et les bons clusters",
          "Passer le harnais d'essai et terminer la certification",
          "Soumettre le produit aux programmes des écosystèmes pris en charge"
        ]
      }
    },
    "thread": {
      "es": {
        "name": "Certificación Thread",
        "group": "Interoperabilidad",
        "region": "Internacional",
        "status": "Voluntaria, dependiente del ecosistema",
        "issuer": "Thread Group",
        "summary": "Certificación para la red mesh Thread, el transporte IP de baja potencia que suele usar Matter.",
        "meaning": "La certificación Thread es independiente de la de Matter y muchos productos necesitan ambas. Los border routers tienen requisitos adicionales, y la red depende de un border router Thread para llegar a internet.",
        "appliesTo": [
          "Sensores, cerraduras e iluminación de baja potencia",
          "Border routers y hubs",
          "Dispositivos Matter sobre Thread"
        ],
        "doesNotCover": [
          "La certificación de la capa de aplicación Matter",
          "La función Wi-Fi o Bluetooth",
          "La homologación radio"
        ],
        "checklist": [
          "Únete a Thread Group y usa componentes cualificados",
          "Ensaya frente a la versión vigente de la especificación Thread",
          "Certifica el border router por separado cuando proceda",
          "Valida la coexistencia con Wi-Fi en la banda objetivo"
        ]
      },
      "fr": {
        "name": "Certification Thread",
        "group": "Interopérabilité",
        "region": "International",
        "status": "Volontaire, dépendante de l'écosystème",
        "issuer": "Thread Group",
        "summary": "Certification du réseau mesh Thread, le transport IP basse consommation souvent utilisé par Matter.",
        "meaning": "La certification Thread est distincte de celle de Matter et de nombreux produits nécessitent les deux. Les border routers ont des exigences supplémentaires, et le réseau dépend d'un border router Thread pour accéder à internet.",
        "appliesTo": [
          "Capteurs, serrures et éclairage basse consommation",
          "Border routers et hubs",
          "Appareils Matter over Thread"
        ],
        "doesNotCover": [
          "La certification de la couche applicative Matter",
          "La fonction Wi-Fi ou Bluetooth",
          "L'homologation radio"
        ],
        "checklist": [
          "Adhérer au Thread Group et utiliser des composants qualifiés",
          "Tester selon la version en vigueur de la spécification Thread",
          "Certifier le border router séparément le cas échéant",
          "Valider la coexistence avec le Wi-Fi dans la bande visée"
        ]
      }
    },
    "zigbee": {
      "es": {
        "name": "Certificación Zigbee",
        "group": "Interoperabilidad",
        "region": "Internacional",
        "status": "Voluntaria, dependiente del ecosistema",
        "issuer": "Connectivity Standards Alliance (CSA)",
        "summary": "Certificación para dispositivos Zigbee y el programa Zigbee Certified, incluidos los tipos de dispositivo Zigbee 3.0.",
        "meaning": "Zigbee sigue siendo la malla de baja potencia más desplegada en hubs y sensores. La certificación confirma la interoperabilidad en la capa de aplicación entre dispositivos certificados, aunque los clústeres propios del fabricante pueden limitar funciones entre marcas.",
        "appliesTo": [
          "Sensores, enchufes, interruptores e iluminación",
          "Coordinadores Zigbee integrados en hubs",
          "Dispositivos destinados a redes Zigbee multimarca"
        ],
        "doesNotCover": [
          "La certificación Matter",
          "El rendimiento Wi-Fi",
          "Las funciones en la nube de la app del fabricante"
        ],
        "checklist": [
          "Implementa el tipo de dispositivo y los clústeres Zigbee correctos",
          "Valida frente a dispositivos certificados de otros fabricantes",
          "Completa los ensayos de certificación de CSA",
          "Documenta el comportamiento propio del fabricante para soporte"
        ]
      },
      "fr": {
        "name": "Certification Zigbee",
        "group": "Interopérabilité",
        "region": "International",
        "status": "Volontaire, dépendante de l'écosystème",
        "issuer": "Connectivity Standards Alliance (CSA)",
        "summary": "Certification des appareils Zigbee et du programme Zigbee Certified, y compris les types d'appareils Zigbee 3.0.",
        "meaning": "Zigbee reste le mesh basse consommation le plus déployé dans les hubs et capteurs. La certification confirme l'interopérabilité au niveau applicatif entre appareils certifiés, même si des clusters propriétaires peuvent limiter les fonctions entre marques.",
        "appliesTo": [
          "Capteurs, prises, interrupteurs et éclairage",
          "Coordinateurs Zigbee intégrés aux hubs",
          "Appareils destinés à des réseaux Zigbee multi-marques"
        ],
        "doesNotCover": [
          "La certification Matter",
          "Les performances Wi-Fi",
          "Les fonctions cloud de l'application du fabricant"
        ],
        "checklist": [
          "Implémenter le bon type d'appareil et les bons clusters Zigbee",
          "Valider face à des appareils certifiés d'autres fabricants",
          "Terminer les essais de certification CSA",
          "Documenter le comportement propriétaire pour le support"
        ]
      }
    },
    "qi-wpc": {
      "es": {
        "name": "Certificación de carga inalámbrica Qi",
        "group": "Interoperabilidad",
        "region": "Internacional",
        "status": "Voluntaria, ampliamente adoptada",
        "issuer": "Wireless Power Consortium",
        "summary": "Certificación para productos de carga inalámbrica por inducción bajo el estándar Qi, que cubre transmisores y receptores.",
        "meaning": "La certificación Qi verifica la transferencia de energía y el comportamiento de seguridad entre transmisor y receptor, incluida la detección de objetos extraños. Los productos que anuncian compatibilidad Qi deberían estar certificados, no solo probados internamente.",
        "appliesTo": [
          "Bases y soportes de carga inalámbrica",
          "Wearables y teléfonos con carga inalámbrica",
          "Accesorios vendidos como compatibles con Qi"
        ],
        "doesNotCover": [
          "La seguridad de la carga por cable",
          "La certificación de la batería",
          "La homologación radio de cualquier función de datos inalámbrica"
        ],
        "checklist": [
          "Confirma el perfil de potencia Qi y el diseño de bobina",
          "Ensaya transmisor y receptor como pareja",
          "Completa la certificación y el listado del WPC",
          "Aplica el logotipo Qi según los términos de licencia"
        ]
      },
      "fr": {
        "name": "Certification de recharge sans fil Qi",
        "group": "Interopérabilité",
        "region": "International",
        "status": "Volontaire, largement adoptée",
        "issuer": "Wireless Power Consortium",
        "summary": "Certification des produits de recharge sans fil par induction selon la norme Qi, couvrant émetteurs et récepteurs.",
        "meaning": "La certification Qi vérifie le transfert d'énergie et le comportement de sécurité entre émetteur et récepteur, y compris la détection d'objets étrangers. Les produits revendiquant la compatibilité Qi devraient être certifiés, et non seulement testés en interne.",
        "appliesTo": [
          "Bases et supports de recharge sans fil",
          "Objets portables et téléphones à recharge sans fil",
          "Accessoires vendus comme compatibles Qi"
        ],
        "doesNotCover": [
          "La sécurité de la charge filaire",
          "La certification de la batterie",
          "L'homologation radio d'une éventuelle fonction de données sans fil"
        ],
        "checklist": [
          "Confirmer le profil de puissance Qi et la conception de bobine",
          "Tester émetteur et récepteur en paire",
          "Terminer la certification et le listing du WPC",
          "Appliquer le logo Qi selon les termes de licence"
        ]
      }
    }
  }
};
