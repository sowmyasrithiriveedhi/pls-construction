export type Language = "en" | "te";

type TranslationKeys = {
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