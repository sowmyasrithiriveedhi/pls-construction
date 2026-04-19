export type Language = "en" | "te";

type TranslationKeys = {

  //home page
  homeTitle1: string;
  homeDesc1: string;
  homeTitle2: string;
  homeDesc2: string;

  //hero section
  heroQuote: string;

  // Navbar
  home: string;
  materials: string;
  gallery: string;
  location: string;
  about: string;
  contact: string;

  // Materials dropdown
  columnBoxes: string;
  cuttingMachine: string;
  pillarBoxes: string;
  sidewallSheets: string;
  ironJockeys: string;
  slabSheets: string;
  flintBeamSheets: string;

  // Materials Pages
  columnBoxesTitle: string;
  columnBoxesDesc: string;

  cuttingMachineTitle: string;
  cuttingMachineDesc: string;

  pillarBoxesTitle: string;
  pillarBoxesDesc: string;

  sidewallSheetsTitle: string;
  sidewallSheetsDesc: string;

  ironJockeysTitle: string;
  ironJockeysDesc: string;

  slabSheetsTitle: string;
  slabSheetsDesc: string;

  flintBeamSheetsTitle: string;
  flintBeamSheetsDesc: string;

  // Location dropdown
  kisanNagar: string;
  allipuram: string;
  locationTitle: string;
  getDirections: string;

  // About Page
  aboutTitle: string;
  aboutDesc1: string;
  aboutDesc2: string;
  tagline: string;

  // Contact Page
  contactTitle: string;
  contactDesc: string;
  call: string;
  whatsapp: string;



  // Footer
  footerRights: string;
};

export const translations: Record<Language, TranslationKeys> = {
  en: {

    // Home Page
    homeTitle1: "High-Quality Construction Materials",
    homeDesc1:
      "We provide durable and high-strength construction materials designed to build strong foundations and long-lasting structures. Trusted by contractors and builders across locations.",
 
    homeTitle2: "Reliable Service & On-Time Delivery",
    homeDesc2:
      "With multiple branch locations and a strong supply network, we ensure timely delivery and customer satisfaction. We focus on reliability, trust, and long-term partnerships.",


    // Hero Section
    heroQuote: "The Foundation Starts With Us.",


    // Navbar
    home: "Home",
    materials: "Materials",
    gallery: "Gallery",
    location: "Location",
    about: "About Us",
    contact: "Contact",

    // Materials dropdown
    columnBoxes: "Column Boxes",
    cuttingMachine: "Cutting Machine",
    pillarBoxes: "Pillar Boxes",
    sidewallSheets: "Sidewall Sheets",
    ironJockeys: "Iron Jockeys",
    slabSheets: "Slab Sheets",
    flintBeamSheets: "Flint Beam Sheets",

    // Materials Pages
    columnBoxesTitle: "Column Boxes",
    columnBoxesDesc:
      "Column boxes are used in construction to support concrete columns during casting. They provide strong structural alignment and durability for vertical construction.",

    cuttingMachineTitle: "Cutting Machine",
    cuttingMachineDesc:
      "Cutting machines are used to cut construction materials with precision and speed for efficient site work.",

    pillarBoxesTitle: "Pillar Boxes",
    pillarBoxesDesc:
      "Pillar boxes are designed to shape and support pillars during concrete casting for strong vertical structures.",

    sidewallSheetsTitle: "Sidewall Sheets",
    sidewallSheetsDesc:
      "Sidewall sheets are used for wall shuttering and provide smooth finishing and structural support.",

    ironJockeysTitle: "Iron Jockeys",
    ironJockeysDesc:
      "Iron jockeys provide strong temporary support in slab and beam shuttering systems during construction.",

    slabSheetsTitle: "Slab Sheets",
    slabSheetsDesc:
      "Slab sheets are used to support slab concrete work and ensure strong and level casting surfaces.",

    flintBeamSheetsTitle: "Flint Beam Sheets",
    flintBeamSheetsDesc:
     "Flint beam sheets are used in beam shuttering systems to maintain beam shape and support during casting.",


    // Location dropdown
    kisanNagar: "Kisan Nagar",
    allipuram: "Allipuram",
    locationTitle: "Location",
    getDirections: "Get Directions",


    // About Page
    aboutTitle: "PLS Construction Materials",
    aboutDesc1:
      "PLS Construction Materials is committed to supplying reliable and high-quality construction materials for strong and durable structures.",
    aboutDesc2:
      "With trusted products and branches in Kisan Nagar and Allipuram, we proudly support builders and customers.",
    tagline: "Strong materials. Trusted service. Solid foundations.",

    // Contact Page
    contactTitle: "Contact",
    contactDesc:
      "Get in touch with PLS Construction Materials for reliable construction materials and trusted service.",
    call: "Call Now",
    whatsapp: "WhatsApp",

    //footer
    footerRights: "All rights reserved.",

    
  },

  te: {


    // Home Page
    homeTitle1: "ఉన్నత నాణ్యత గల నిర్మాణ పదార్థాలు",
    homeDesc1:
      "బలమైన పునాదులు మరియు దీర్ఘకాలిక నిర్మాణాల కోసం మేము నాణ్యమైన మరియు బలమైన నిర్మాణ పదార్థాలను అందిస్తున్నాము. కాంట్రాక్టర్లు మరియు బిల్డర్ల విశ్వాసం పొందాము.",

    homeTitle2: "నమ్మకమైన సేవ & సమయానికి డెలివరీ",
    homeDesc2:
      "అనేక శాఖలు మరియు బలమైన సరఫరా వ్యవస్థతో మేము సమయానికి సరఫరా చేసి కస్టమర్ సంతృప్తిని అందిస్తున్నాము. నమ్మకం మరియు దీర్ఘకాలిక సంబంధాలపై దృష్టి పెడుతున్నాము.",

    // Hero Section
    heroQuote: "పునాది మా దగ్గరే ప్రారంభమవుతుంది.",
      
    // Navbar
    home: "హోమ్",
    materials: "పదార్థాలు",
    gallery: "గ్యాలరీ",
    location: "స్థానం",
    about: "మా గురించి",
    contact: "సంప్రదించండి",


    // Materials dropdown
    columnBoxes: "కాలమ్ బాక్స్‌లు",
    cuttingMachine: "కట్టింగ్ మెషీన్",
    pillarBoxes: "పిల్లర్ బాక్స్‌లు",
    sidewallSheets: "సైడ్‌వాల్ షీట్లు",
    ironJockeys: "ఐరన్ జాకీలు",
    slabSheets: "స్లాబ్ షీట్లు",
    flintBeamSheets: "ఫ్లింట్ బీమ్ షీట్లు",

    // Materials Pages
    columnBoxesTitle: "కాలమ్ బాక్స్‌లు",
    columnBoxesDesc:
      "కాలమ్ బాక్స్‌లు కాంక్రీట్ కాలమ్‌ల కాస్టింగ్ సమయంలో మద్దతు ఇవ్వడానికి ఉపయోగిస్తారు. ఇవి బలమైన నిర్మాణ సరళిని అందిస్తాయి.",

    cuttingMachineTitle: "కట్టింగ్ మెషీన్",
    cuttingMachineDesc:
      "కట్టింగ్ మెషీన్ నిర్మాణ పదార్థాలను ఖచ్చితంగా మరియు వేగంగా కట్ చేయడానికి ఉపయోగిస్తారు.",

    pillarBoxesTitle: "పిల్లర్ బాక్స్‌లు",
    pillarBoxesDesc:
      "పిల్లర్ బాక్స్‌లు పిల్లర్ కాస్టింగ్ సమయంలో ఆకారం మరియు మద్దతు ఇవ్వడానికి ఉపయోగిస్తారు.",

    sidewallSheetsTitle: "సైడ్‌వాల్ షీట్లు",
    sidewallSheetsDesc:
      "సైడ్‌వాల్ షీట్లు గోడ షట్టరింగ్ కోసం ఉపయోగించి మద్దతు మరియు మంచి ఫినిషింగ్ ఇస్తాయి.",

    ironJockeysTitle: "ఐరన్ జాకీలు",
    ironJockeysDesc:
      "ఐరన్ జాకీలు స్లాబ్ మరియు బీమ్ షట్టరింగ్ సమయంలో తాత్కాలిక బలమైన మద్దతు ఇస్తాయి.",

    slabSheetsTitle: "స్లాబ్ షీట్లు",
    slabSheetsDesc:
      "స్లాబ్ షీట్లు స్లాబ్ కాంక్రీట్ పనులకు మద్దతు ఇవ్వడానికి ఉపయోగిస్తారు.",

    flintBeamSheetsTitle: "ఫ్లింట్ బీమ్ షీట్లు",
    flintBeamSheetsDesc:
      "ఫ్లింట్ బీమ్ షీట్లు బీమ్ షట్టరింగ్ సమయంలో ఆకారం మరియు మద్దతు కోసం ఉపయోగిస్తారు.",


    // Location dropdown
    kisanNagar: "కిసాన్ నగర్",
    allipuram: "అల్లిపురం",
    locationTitle: "స్థానం",
    getDirections: "దిశలు చూడండి",

    // About Page
    aboutTitle: "PLS కన్స్ట్రక్షన్ మెటీరియల్స్",
    aboutDesc1:
      "PLS కన్స్ట్రక్షన్ మెటీరియల్స్ బలమైన నిర్మాణాల కోసం నాణ్యమైన పదార్థాలను అందిస్తుంది.",
    aboutDesc2:
      "కిసాన్ నగర్ మరియు అల్లిపురం ప్రాంతాలలో మేము నమ్మకమైన సేవలను అందిస్తున్నాము.",
    tagline: "బలమైన పదార్థాలు. నమ్మకమైన సేవ. దృఢమైన పునాది.",

    // Contact Page
    contactTitle: "సంప్రదించండి",
    contactDesc:
      "నాణ్యమైన నిర్మాణ పదార్థాలు మరియు నమ్మకమైన సేవ కోసం PLS కన్స్ట్రక్షన్ మెటీరియల్స్ ను సంప్రదించండి.",
    call: "కాల్ చేయండి",
    whatsapp: "వాట్సాప్",


  //footer
  footerRights: "అన్ని హక్కులు కలవు.",
  },
};