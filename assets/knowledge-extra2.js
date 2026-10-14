/* Knowledge extension 2: energy, water, garden, robotics, education and toys. */
(function(){
  var K=window.IOT_KNOWLEDGE; if(!K) return;
  var P=function(slug,name,category,summary,range,power,topology,use,sn,src){
    return {slug:slug,name:name,category:category,summary:summary,range:range,power:power,topology:topology,use:use,source_name:sn,source:src,status:"source-linked"};};
  var S=function(slug,name,region,type,summary,applies_to,src){
    return {slug:slug,name:name,region:region,type:type,summary:summary,applies_to:applies_to,source:src,status:"source-linked"};};
  var G=function(slug,name,type,summary,audience,steps,src){
    return {slug:slug,name:name,type:type,summary:summary,audience:audience,steps:steps,href:"knowledge.html",source:src||"",status:"source-linked"};};
  var C=function(slug,name,category,summary,why,src){
    return {slug:slug,name:name,category:category,summary:summary,why:why,source:src||"",status:"editorial"};};

  K.protocols=K.protocols.concat([
    P("sunspec-modbus","SunSpec Modbus","Solar / industrial","Standard register map that lets monitoring software read inverters and batteries across brands.","Wired or Wi-Fi gateway","Mains device","Client / server","Solar inverters, batteries, gateways","SunSpec Alliance","https://sunspec.org/"),
    P("ocpp","OCPP","EV charging / protocol","Open Charge Point Protocol, the standard link between a charger and a charging network.","Network dependent","Mains device","Client / server","EV chargers and charging networks","Open Charge Alliance","https://www.openchargealliance.org/"),
    P("matter-bridge","Matter bridge","Interoperability","A device that exposes non-Matter products to a Matter fabric.","Local network","Mains device","Bridge","Hubs exposing Zigbee or legacy devices to Matter","Connectivity Standards Alliance","https://csa-iot.org/"),
    P("wifi-sensing","Wi-Fi sensing","Sensing / RF","Using changes in Wi-Fi signal to detect motion or presence without a dedicated sensor.","Room scale","Mains device","Mesh","Presence detection, elderly monitoring","Wi-Fi Alliance","https://www.wi-fi.org/")
  ]);
  K.standards=K.standards.concat([
    S("iec-61851","IEC 61851","Global","EV charging","Safety and connection requirements for conductive charging of electric vehicles.","EV supply equipment","https://www.iec.ch/"),
    S("iso-15118","ISO 15118","Global","EV charging","Vehicle to grid communication, including Plug and Charge authentication.","EV chargers and vehicles","https://www.iso.org/"),
    S("ul-9540","UL 9540A","United States","Energy storage","Test method for thermal runaway propagation in battery energy storage systems.","Home and commercial batteries","https://www.ul.com/"),
    S("usda-biopreferred","USDA BioPreferred","United States","Materials","Label for products with verified biobased content, occasionally used in garden products.","Consumer garden and chemical products","https://www.biopreferred.gov/")
  ]);
  K.guides=K.guides.concat([
    G("home-battery-sizing","Sizing a home battery","Engineering guide","Work out how much storage a house actually needs before buying.","Homeowners and installers",["List the circuits you want backed up","Measure daily consumption over a week","Decide backup hours versus bill savings","Check the inverter can island the load","Confirm the battery is certified for indoor or outdoor siting"]),
    G("solar-monitoring-setup","Setting up solar monitoring","Implementation guide","Get production and consumption data that is actually trustworthy.","Installers and owners",["Confirm which data source the app reads: inverter, meter or both","Check the reporting interval is fine enough to see clouds","Verify consumption is measured separately from production","Set alerts for zero production and for export spikes","Reconcile the app against the utility bill each quarter"]),
    G("irrigation-scheduling","Irrigation scheduling that saves water","Buying guide","Use weather and soil rather than a fixed timer.","Garden owners",["Replace fixed timers with weather-driven schedules","Add a rain sensor or use local weather data","Split zones by plant type, not by convenience","Check the controller supports a local override","Review usage monthly against the previous season"]),
    G("robot-vacuum-mapping","Getting a robot vacuum to map reliably","Troubleshooting guide","Fix the common reasons a floor plan comes out wrong.","Homeowners",["Clear cables and low obstacles before the first mapping run","Run a full mapping pass with lights on for camera models","Place the dock against a wall with clear space either side","Split very large floors into separate maps","Re-run mapping after moving furniture or re-arranging rooms"]),
    G("coding-robot-selection","Choosing a coding robot by age","Buying guide","Match the robot to the child's age and what you want them to learn.","Parents and teachers",["Decide whether you want screen-free or app-based","Check the app works on the devices you own","Confirm spare parts and lesson content are available","Prefer a robot the child can program at two levels","Check the vendor still updates the app"])
  ]);
  K.concepts=K.concepts.concat([
    C("islanding","Islanding","Energy","A system's ability to keep supplying a backed-up circuit while the grid is down.","Decides whether a battery keeps your lights on during an outage, or only shifts your bill."),
    C("state-of-charge","State of charge vs state of health","Energy","Charge is how full the battery is now; health is how much capacity it has left over its life.","Two batteries at 100% charge can behave very differently if one has aged."),
    C("ev-ocpp","OCPP and charger lock-in","EV charging","Charging networks speak OCPP to chargers, which determines whether you can switch providers.","A charger without OCPP support ties you to one network indefinitely."),
    C("zone-based-irrigation","Zone-based irrigation","Garden","Splitting watering into independently controlled circuits.","Without zones, a schedule must satisfy the thirstiest plant and wastes water on the rest."),
    C("map-persistence","Map persistence","Robotics","Whether a robot vacuum keeps its floor plan between runs or rebuilds it each time.","Rebuilding costs battery and time, and is the usual reason cleaning takes longer than expected."),
    C("screen-free-coding","Screen-free coding","Education","Teaching programming logic with physical tiles or buttons rather than a screen.","Often the right entry point for younger children, and a useful fallback when app support ends.")
  ]);
  var t=K.completeness&&K.completeness.types;
  if(t){ t.protocols.count=K.protocols.length; t.standards.count=K.standards.length; t.guides.count=K.guides.length; t.concepts.count=K.concepts.length; }
  K.updated_at="2026-10-08";
})();
