/* IoT Atlas - brand coverage index.
   Reframes the previous "brand value" leaderboard:
     - no financial vocabulary (value, valuation, outlook, band)
     - dimensions renamed to observable ecosystem facts
     - "confidence" renamed to evidence coverage
     - user-adjustable weighting, so the ranking reflects the reader's priorities
       rather than an editorial verdict
*/
(function(){
  var DIM=[
    {key:"Product Breadth",        label:"Catalogue breadth",        desc:"How many distinct product families are documented on this site.", w:1},
    {key:"App & Ecosystem",        label:"App & ecosystem coverage", desc:"Whether the brand ships a companion app and supports third-party ecosystems.", w:1},
    {key:"Protocol Coverage",      label:"Protocol coverage",        desc:"Which networking protocols the catalogue actually uses.", w:1},
    {key:"Global Availability",    label:"Regional availability",    desc:"How widely the products are sold and supported across regions.", w:1},
    {key:"Innovation Velocity",    label:"Release activity",         desc:"How frequently new or updated models reach the catalogue.", w:1},
    {key:"Support & Documentation",label:"Documentation depth",      desc:"Availability of official manuals, datasheets and setup guides.", w:1},
    {key:"Value for Money",        label:"Price positioning",        desc:"Where the range sits on price, relative to comparable products.", w:1},
    {key:"Review & Community",     label:"Review & community volume",desc:"Volume of public reviews and community discussion.", w:1},
    {key:"Enterprise Fit",         label:"Enterprise features",      desc:"Business features such as fleet tooling, SLAs and certifications.", w:1},
    {key:"Brand Momentum",         label:"Catalogue momentum",       desc:"Direction of the catalogue over recent releases.", w:1}
  ];
  var BAND={
    "Scale Brand":      "Broad portfolio",
    "Growth Brand":     "Expanding portfolio",
    "Niche Brand":      "Focused portfolio",
    "Emerging Brand":   "Emerging portfolio"
  };
  var OUTLOOK={ "Stable":"Steady catalogue", "Rising":"Expanding catalogue", "Watch":"Narrowing catalogue" };

  function band(v){ return BAND[v]||v||"Portfolio"; }
  function outlook(v){ return OUTLOOK[v]||v||"Steady catalogue"; }
  function dimLabel(k){ var d=DIM.filter(function(x){return x.key===k;})[0]; return d?d.label:k; }

  var DISCLAIMER = "Coverage index is an editorial summary of publicly available information. It is not a rating, certification, financial valuation or investment recommendation, and it is not a measure of product quality. Brands can respond or request a correction under our corrections policy.";

  // ---------- weighting engine ----------
  function weighted(scores, weights){
    var num=0, den=0;
    DIM.forEach(function(d){
      var w=weights[d.key]==null?1:weights[d.key];
      var v=scores.dimensions[d.key];
      if(typeof v==="number"){ num+=v*w; den+=w; }
    });
    return den?Math.round(num/den):0;
  }
  function rankAll(weights){
    var brands=(window.IOT_BRAND_SCORES||{}).brands||{};
    var list=Object.keys(brands).map(function(slug){
      var b=brands[slug];
      return {slug:slug,name:b.name,index:weighted(b,weights),base:b.overall,evidence:b.confidence,
              band:band(b.value_band),outlook:outlook(b.outlook),dims:b.dimensions};
    });
    list.sort(function(a,b){ return b.index-a.index || a.name.localeCompare(b.name); });
    list.forEach(function(x,i){ x.pos=i+1; });
    return list;
  }

  window.IOT_BRAND_INDEX={ dims:DIM, disclaimer:DISCLAIMER, band:band, outlook:outlook,
    dimLabel:dimLabel, weighted:weighted, rankAll:rankAll };
})();
