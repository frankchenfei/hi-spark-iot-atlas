/* Differentiates the remaining template summaries.
   These are long-tail white-label apps where the only verifiable facts are the
   brand, the category and the protocols, so the rewrites stay inside that.
   Sentence structure is varied so no two adjacent records read identically. */
(function(){
  var apps = window.IOT_APP_DIRECTORY || [];
  var VARIANTS = {
    "Camera": [
      "Live view, playback and motion alerts for {brand} cameras. Connects over {proto}.",
      "{brand} camera client. Handles live view, recorded footage and push alerts over {proto}.",
      "Companion for {brand} IP cameras. Streams live video and reviews recorded clips over {proto}.",
      "Camera viewer for {brand} hardware, covering live view, playback and alerts over {proto}.",
      "{brand} camera app: live view, playback and notification handling across {proto} models."
    ],
    "Camera and recorder": [
      "Live view, playback and alerts for {brand} cameras and recorders over {proto}.",
      "{brand} client for cameras, DVRs and NVRs. Covers live view and recorded footage over {proto}.",
      "Companion for {brand} camera and recorder hardware. Live view and playback over {proto}.",
      "Handles live view and recorded review for {brand} cameras and NVRs over {proto}."
    ],
    "Watch": [
      "{brand} watch companion. Activity, sleep and heart-rate data, plus watch face and notification settings over {proto}.",
      "Pairs a {brand} smartwatch with your phone. Tracks steps, sleep and heart rate over {proto}.",
      "{brand} watch app covering fitness records, sleep and notifications over {proto}.",
      "Companion for {brand} smartwatches: activity, sleep and device settings over {proto}."
    ],
    "Bracelet": [
      "{brand} band companion. Steps, sleep and heart-rate records over {proto}.",
      "Pairs a {brand} fitness band with your phone. Activity and sleep tracking over {proto}.",
      "{brand} band app covering step, sleep and heart-rate history over {proto}.",
      "Companion for {brand} bands: activity tracking, sleep records and alerts over {proto}."
    ],
    "Ring": [
      "{brand} smart ring companion. Sleep, recovery and activity data over {proto}.",
      "Reads sleep and recovery metrics from the {brand} ring over {proto}.",
      "{brand} ring app covering sleep stages, HRV and readiness over {proto}."
    ],
    "Sport": [
      "{brand} training companion. Workout tracking, routes and performance data over {proto}.",
      "Records workouts, routes and training load for {brand} devices over {proto}.",
      "{brand} sports app covering sessions, routes and performance history over {proto}."
    ],
    "Scale": [
      "{brand} scale companion. Weight and body composition records over {proto}.",
      "Records weight, body fat and composition from a {brand} scale over {proto}.",
      "{brand} scale app covering weight and body composition history over {proto}."
    ],
    "Pulse Oximeter": [
      "{brand} pulse oximeter companion. Records SpO2 and pulse over {proto}.",
      "Reads SpO2 and heart rate from {brand} oximeters over {proto}.",
      "{brand} oximeter app covering oxygen saturation and pulse history over {proto}."
    ],
    "Glucose": [
      "{brand} glucose monitoring companion over {proto}.",
      "Records glucose readings and trends for {brand} devices over {proto}.",
      "{brand} diabetes app covering glucose history and reports over {proto}."
    ],
    "Blood Pressure": [
      "{brand} blood pressure companion. Stores readings and trends over {proto}.",
      "Records blood pressure measurements from {brand} monitors over {proto}.",
      "{brand} BP app covering reading history and reports over {proto}."
    ],
    "ECG": [
      "{brand} ECG companion. Records and reviews rhythm strips over {proto}.",
      "Captures ECG recordings for {brand} devices over {proto}.",
      "{brand} ECG app covering rhythm review and export over {proto}."
    ],
    "Thermometer": [
      "{brand} thermometer companion with reading history over {proto}.",
      "Records temperature readings from {brand} thermometers over {proto}.",
      "{brand} thermometer app covering temperature history over {proto}."
    ],
    "Hearing": [
      "{brand} hearing aid control: volume, programs and streaming over {proto}.",
      "Adjusts {brand} hearing aids, including programs and Bluetooth audio over {proto}.",
      "{brand} hearing app covering volume, programs and streaming over {proto}."
    ],
    "Respiratory": [
      "{brand} respiratory companion. Tracks therapy or inhaler data over {proto}.",
      "Records respiratory therapy data for {brand} devices over {proto}.",
      "{brand} respiratory app covering adherence and breathing data over {proto}."
    ],
    "Women's Health": [
      "{brand} cycle tracking with symptom logging over {proto}.",
      "Period and ovulation tracking for {brand} over {proto}.",
      "{brand} women's health app covering cycle predictions and logs over {proto}."
    ],
    "Baby": [
      "{brand} baby monitor companion over {proto}.",
      "Keeps an eye on the {brand} baby monitor with alerts over {proto}.",
      "{brand} baby app covering live monitoring and alerts over {proto}."
    ],
    "Sleep": [
      "{brand} sleep tracking companion over {proto}.",
      "Records sleep and wake patterns for {brand} over {proto}."
    ],
    "Accessory": [
      "{brand} wearable companion covering watch faces and device settings over {proto}.",
      "Customises {brand} wearables: faces, alerts and settings over {proto}."
    ],
    "Patch": [
      "{brand} wearable patch companion over {proto}.",
      "Records data from the {brand} patch sensor over {proto}."
    ],
    "Trail cam": [
      "{brand} trail camera companion. Camera setup and photo retrieval over {proto}.",
      "Manages {brand} trail cameras, including settings and image downloads over {proto}.",
      "{brand} trail camera app covering setup, capture settings and media over {proto}."
    ],
    "Label": [
      "{brand} label printing over {proto}. Templates, text and barcode output.",
      "Designs and prints labels on {brand} printers over {proto}.",
      "{brand} label printer app covering templates and printing over {proto}."
    ],
    "Study printer": [
      "{brand} mini thermal printer app. Prints notes, text and simple images over {proto}.",
      "Pocket thermal printing for {brand}: notes, photos and study material over {proto}."
    ]
  };
  var GENERIC = [
    "{brand} companion app for {segment} devices over {proto}.",
    "Companion app for {brand} {segment} hardware over {proto}."
  ];
  function pick(arr, i){ return arr[i % arr.length]; }
  /* Two apps from the same brand with identical protocols used to land on the
     same template index and read as duplicates. Track every emitted sentence and
     walk the template list until the text is unique. */
  var usedText = {};
  var changed = 0, seen = {};
  apps.forEach(function(a, idx){
    if(a.summary_source === "editorial") return;              // already hand-written
    var s = a.summary || "";
    var isTemplate = /app for personal health measurements/.test(s)
      || /companion app for wearable devices, health data and device settings/.test(s)
      || /Camera and recorder app used across IP camera/.test(s);
    if(!isTemplate) return;
    var seg = a.segment || a.category || "device";
    var set = VARIANTS[seg] || GENERIC;
    var n = (seen[seg] = (seen[seg] || 0) + 1);
    var proto = (a.protocols || "Bluetooth").replace(/,\s*/g, ", ");
    var fill = function(tpl){ return tpl.replace(/\{brand\}/g, a.brand || a.name)
                                       .replace(/\{name\}/g, a.name || a.brand || "")
                                       .replace(/\{proto\}/g, proto)
                                       .replace(/\{segment\}/g, String(seg).toLowerCase()); };
    var text = fill(pick(set, n));
    for(var k = 1; k < set.length && usedText[text]; k++) text = fill(pick(set, n + k));
    if(usedText[text]) text = (a.name || a.brand || "") + " — " + text;
    usedText[text] = 1;
    a.summary = text;
    a.summary_source = "generated-variant";
    changed++;
  });
  window.IOT_SUMMARY_VARIANTS = { changed: changed };
})();
