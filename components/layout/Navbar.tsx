// "use client";

// import { useState } from "react";
// import { usePathname } from "next/navigation";
// import Link from "next/link";
// import { useLanguage } from "../../src/context/LanguageContext";
// import { translations } from "../../src/translations/index"; // ✅ added

// export default function Navbar() {
//   const [mobileOpen, setMobileOpen] = useState(false);
//   const [mobileMaterialsOpen, setMobileMaterialsOpen] = useState(false);
//   const [mobileLocationOpen, setMobileLocationOpen] = useState(false);
//   const { lang, setLang } = useLanguage();

//   const t = translations[lang as keyof typeof translations]; // ✅ added

//   const pathname = usePathname();

//   return (
//     <nav className="relative">

//       {/* ================= DESKTOP MENU ================= */}
//       <ul className="hidden md:flex items-center gap-8 text-slate-800 font-medium">

//         {/* Home */}
//         <li>
//           <Link
//             href="/"
//             className={`transition ${
//               pathname === "/"
//                 ? "text-slate-900 font-semibold border-b-2 border-slate-900"
//                 : "hover:text-slate-500"
//             }`}
//           >
//             {t.home}
//           </Link>
//         </li>

//         {/* Materials */}
//         <li className="relative group">
//           <span
//             className={`transition cursor-pointer ${
//               pathname.startsWith("/materials")
//                 ? "text-slate-900 font-semibold border-b-2 border-slate-900"
//                 : "hover:text-slate-500"
//             }`}
//           >
//             {t.materials}
//           </span>

//           <div className="absolute left-0 top-full mt-2 bg-white shadow-lg rounded-md p-4 w-56 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
//             <ul className="space-y-2 text-sm">
//               <li><Link href="/materials/column-boxes">{t.columnBoxes}</Link></li>
//               <li><Link href="/materials/cutting-machine">{t.cuttingMachine}</Link></li>
//               <li><Link href="/materials/pillar-boxes">{t.pillarBoxes}</Link></li>
//               <li><Link href="/materials/sidewall-sheets">{t.sidewallSheets}</Link></li>
//               <li><Link href="/materials/iron-jockeys">{t.ironJockeys}</Link></li>
//               <li><Link href="/materials/slab-sheets">{t.slabSheets}</Link></li>
//               <li><Link href="/materials/flint-beam-sheets">{t.flintBeamSheets}</Link></li>
//             </ul>
//           </div>
//         </li>

//         {/* Gallery */}
//         <li>
//           <Link
//             href="/gallery"
//             className={`transition ${
//               pathname === "/gallery"
//                 ? "text-slate-900 font-semibold border-b-2 border-slate-900"
//                 : "hover:text-slate-500"
//             }`}
//           >
//             {t.gallery}
//           </Link>
//         </li>

//         {/* Location */}
//         <li className="relative group">
//           <span
//             className={`transition cursor-pointer ${
//               pathname.startsWith("/location")
//                 ? "text-slate-900 font-semibold border-b-2 border-slate-900"
//                 : "hover:text-slate-500"
//             }`}
//           >
//             {t.location}
//           </span>

//           <div className="absolute left-0 top-full mt-2 bg-white shadow-lg rounded-md p-4 w-40 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
//             <ul className="space-y-2 text-sm">
//               <li><Link href="/location/kisan-nagar">{t.kisanNagar}</Link></li>
//               <li><Link href="/location/allipuram">{t.allipuram}</Link></li>
//             </ul>
//           </div>
//         </li>

//         {/* About */}
//         <li>
//           <Link
//             href="/about"
//             className={`transition ${
//               pathname === "/about"
//                 ? "text-slate-900 font-semibold border-b-2 border-slate-900"
//                 : "hover:text-slate-500"
//             }`}
//           >
//             {t.about}
//           </Link>
//         </li>

//         {/* Contact */}
//         <li>
//           <Link
//             href="/contact"
//             className={`transition ${
//               pathname === "/contact"
//                 ? "text-slate-900 font-semibold border-b-2 border-slate-900"
//                 : "hover:text-slate-500"
//             }`}
//           >
//             {t.contact}
//           </Link>
//         </li>

//         {/* Language Switch */}
//         <li>
//           <div className="ml-6 flex gap-2">
//             <button
//               onClick={() => setLang("en")}
//               className={`px-2 ${lang === "en" ? "font-bold" : ""}`}
//             >
//               EN
//             </button>

//             <button
//               onClick={() => setLang("te")}
//               className={`px-2 ${lang === "te" ? "font-bold" : ""}`}
//             >
//               తెలుగు
//             </button>
//           </div>
//         </li>

//       </ul>

//       {/* ================= MOBILE BUTTON ================= */}
//       <button
//         className="md:hidden text-2xl text-slate-900"
//         onClick={() => setMobileOpen(true)}
//       >
//         ☰
//       </button>

//       {/* ================= MOBILE DRAWER ================= */}
//       <div
//         className={`fixed top-0 right-0 h-full w-64 bg-white shadow-xl z-50 transform transition-transform duration-300 ${
//           mobileOpen ? "translate-x-0" : "translate-x-full"
//         }`}
//       >
//         <div className="flex justify-end p-4">
//           <button onClick={() => setMobileOpen(false)}>✕</button>
//         </div>

//         <div className="flex flex-col space-y-6 px-6 text-slate-800 font-medium">

//           <Link href="/" onClick={() => setMobileOpen(false)}>{t.home}</Link>

//           {/* Materials */}
//           <div>
//             <button
//               onClick={() => setMobileMaterialsOpen(!mobileMaterialsOpen)}
//               className="w-full text-left"
//             >
//               {t.materials}
//             </button>

//             {mobileMaterialsOpen && (
//               <div className="ml-4 mt-2 space-y-2 text-sm flex flex-col">
//                 <Link href="/materials/column-boxes" onClick={() => setMobileOpen(false)}>{t.columnBoxes}</Link>
//                 <Link href="/materials/cutting-machine" onClick={() => setMobileOpen(false)}>{t.cuttingMachine}</Link>
//                 <Link href="/materials/pillar-boxes" onClick={() => setMobileOpen(false)}>{t.pillarBoxes}</Link>
//                 <Link href="/materials/sidewall-sheets" onClick={() => setMobileOpen(false)}>{t.sidewallSheets}</Link>
//                 <Link href="/materials/iron-jockeys" onClick={() => setMobileOpen(false)}>{t.ironJockeys}</Link>
//                 <Link href="/materials/slab-sheets" onClick={() => setMobileOpen(false)}>{t.slabSheets}</Link>
//                 <Link href="/materials/flint-beam-sheets" onClick={() => setMobileOpen(false)}>{t.flintBeamSheets}</Link>
//               </div>
//             )}
//           </div>

//           <Link href="/gallery" onClick={() => setMobileOpen(false)}>{t.gallery}</Link>

//           {/* Location */}
//           <div>
//             <button
//               onClick={() => setMobileLocationOpen(!mobileLocationOpen)}
//               className="w-full text-left"
//             >
//               {t.location}
//             </button>

//             {mobileLocationOpen && (
//               <div className="ml-4 mt-2 space-y-2 text-sm flex flex-col">
//                 <Link href="/location/kisan-nagar" onClick={() => setMobileOpen(false)}>{t.kisanNagar}</Link>
//                 <Link href="/location/allipuram" onClick={() => setMobileOpen(false)}>{t.allipuram}</Link>
//               </div>
//             )}
//           </div>

//           <Link href="/about" onClick={() => setMobileOpen(false)}>{t.about}</Link>
//           <Link href="/contact" onClick={() => setMobileOpen(false)}>{t.contact}</Link>

//           {/* Language Switch Mobile */}
//           <div className="flex gap-4 pt-4">
//             <button
//               onClick={() => setLang("en")}
//               className={`${lang === "en" ? "font-bold" : ""}`}
//             >
//               EN
//             </button>

//             <button
//               onClick={() => setLang("te")}
//               className={`${lang === "te" ? "font-bold" : ""}`}
//             >
//               తెలుగు
//             </button>
//           </div>

//         </div>
//       </div>

//       {/* Overlay */}
//       {mobileOpen && (
//         <div
//           className="fixed inset-0 bg-black/40 z-40"
//           onClick={() => setMobileOpen(false)}
//         />
//       )}

//     </nav>
//   );
// }



"use client";

import { useState, useEffect } from "react"; // ✅ added useEffect
import { usePathname } from "next/navigation";
import Link from "next/link";
import { useLanguage } from "../../src/context/LanguageContext";
import { translations } from "../../src/translations/index";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileMaterialsOpen, setMobileMaterialsOpen] = useState(false);
  const [mobileLocationOpen, setMobileLocationOpen] = useState(false);
  const { lang, setLang } = useLanguage();

  const t = translations[lang as keyof typeof translations];

  const pathname = usePathname();

  // ✅ ADDED THIS BLOCK (auto close on resize)
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMobileOpen(false);
        setMobileMaterialsOpen(false);
        setMobileLocationOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  // ✅ END

  return (
    <nav className="relative">

      {/* ================= DESKTOP MENU ================= */}
      <ul className="hidden md:flex items-center gap-8 text-slate-800 font-medium">

        <li>
          <Link href="/" className={`transition ${
            pathname === "/"
              ? "text-slate-900 font-semibold border-b-2 border-slate-900"
              : "hover:text-slate-500"
          }`}>
            {t.home}
          </Link>
        </li>

        <li className="relative group">
          <span className={`transition cursor-pointer ${
            pathname.startsWith("/materials")
              ? "text-slate-900 font-semibold border-b-2 border-slate-900"
              : "hover:text-slate-500"
          }`}>
            {t.materials}
          </span>

          <div className="absolute left-0 top-full mt-2 bg-white shadow-lg rounded-md p-4 w-56 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
            <ul className="space-y-2 text-sm">
              <li><Link href="/materials/column-boxes">{t.columnBoxes}</Link></li>
              <li><Link href="/materials/cutting-machine">{t.cuttingMachine}</Link></li>
              <li><Link href="/materials/pillar-boxes">{t.pillarBoxes}</Link></li>
              <li><Link href="/materials/sidewall-sheets">{t.sidewallSheets}</Link></li>
              <li><Link href="/materials/iron-jockeys">{t.ironJockeys}</Link></li>
              <li><Link href="/materials/slab-sheets">{t.slabSheets}</Link></li>
              <li><Link href="/materials/flint-beam-sheets">{t.flintBeamSheets}</Link></li>
            </ul>
          </div>
        </li>

        <li>
          <Link href="/gallery" className={`transition ${
            pathname === "/gallery"
              ? "text-slate-900 font-semibold border-b-2 border-slate-900"
              : "hover:text-slate-500"
          }`}>
            {t.gallery}
          </Link>
        </li>

        <li className="relative group">
          <span className={`transition cursor-pointer ${
            pathname.startsWith("/location")
              ? "text-slate-900 font-semibold border-b-2 border-slate-900"
              : "hover:text-slate-500"
          }`}>
            {t.location}
          </span>

          <div className="absolute left-0 top-full mt-2 bg-white shadow-lg rounded-md p-4 w-40 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
            <ul className="space-y-2 text-sm">
              <li><Link href="/location/kisan-nagar">{t.kisanNagar}</Link></li>
              <li><Link href="/location/allipuram">{t.allipuram}</Link></li>
            </ul>
          </div>
        </li>

        <li>
          <Link href="/about" className={`transition ${
            pathname === "/about"
              ? "text-slate-900 font-semibold border-b-2 border-slate-900"
              : "hover:text-slate-500"
          }`}>
            {t.about}
          </Link>
        </li>

        <li>
          <Link href="/contact" className={`transition ${
            pathname === "/contact"
              ? "text-slate-900 font-semibold border-b-2 border-slate-900"
              : "hover:text-slate-500"
          }`}>
            {t.contact}
          </Link>
        </li>

        <li>
          <div className="ml-6 flex gap-2">
            <button onClick={() => setLang("en")} className={`px-2 ${lang === "en" ? "font-bold" : ""}`}>
              EN
            </button>
            <button onClick={() => setLang("te")} className={`px-2 ${lang === "te" ? "font-bold" : ""}`}>
              తెలుగు
            </button>
          </div>
        </li>

      </ul>

      {/* ================= MOBILE BUTTON ================= */}
      <button className="md:hidden text-2xl text-slate-900" onClick={() => setMobileOpen(true)}>
        ☰
      </button>

      {/* ================= MOBILE DRAWER ================= */}
      <div className={`fixed top-0 right-0 h-full w-64 bg-white shadow-xl z-50 transform transition-transform duration-300 ${
        mobileOpen ? "translate-x-0" : "translate-x-full"
      }`}>
        <div className="flex justify-end p-4">
          <button onClick={() => setMobileOpen(false)}>✕</button>
        </div>

        <div className="flex flex-col space-y-6 px-6 text-slate-800 font-medium">

          <Link href="/" onClick={() => setMobileOpen(false)}>{t.home}</Link>

          <div>
            <button onClick={() => setMobileMaterialsOpen(!mobileMaterialsOpen)} className="w-full text-left">
              {t.materials}
            </button>

            {mobileMaterialsOpen && (
              <div className="ml-4 mt-2 space-y-2 text-sm flex flex-col">
                <Link href="/materials/column-boxes" onClick={() => setMobileOpen(false)}>{t.columnBoxes}</Link>
                <Link href="/materials/cutting-machine" onClick={() => setMobileOpen(false)}>{t.cuttingMachine}</Link>
                <Link href="/materials/pillar-boxes" onClick={() => setMobileOpen(false)}>{t.pillarBoxes}</Link>
                <Link href="/materials/sidewall-sheets" onClick={() => setMobileOpen(false)}>{t.sidewallSheets}</Link>
                <Link href="/materials/iron-jockeys" onClick={() => setMobileOpen(false)}>{t.ironJockeys}</Link>
                <Link href="/materials/slab-sheets" onClick={() => setMobileOpen(false)}>{t.slabSheets}</Link>
                <Link href="/materials/flint-beam-sheets" onClick={() => setMobileOpen(false)}>{t.flintBeamSheets}</Link>
              </div>
            )}
          </div>

          <Link href="/gallery" onClick={() => setMobileOpen(false)}>{t.gallery}</Link>

          <div>
            <button onClick={() => setMobileLocationOpen(!mobileLocationOpen)} className="w-full text-left">
              {t.location}
            </button>

            {mobileLocationOpen && (
              <div className="ml-4 mt-2 space-y-2 text-sm flex flex-col">
                <Link href="/location/kisan-nagar" onClick={() => setMobileOpen(false)}>{t.kisanNagar}</Link>
                <Link href="/location/allipuram" onClick={() => setMobileOpen(false)}>{t.allipuram}</Link>
              </div>
            )}
          </div>

          <Link href="/about" onClick={() => setMobileOpen(false)}>{t.about}</Link>
          <Link href="/contact" onClick={() => setMobileOpen(false)}>{t.contact}</Link>

          <div className="flex gap-4 pt-4">
            <button onClick={() => setLang("en")} className={`${lang === "en" ? "font-bold" : ""}`}>EN</button>
            <button onClick={() => setLang("te")} className={`${lang === "te" ? "font-bold" : ""}`}>తెలుగు</button>
          </div>

        </div>
      </div>

      {mobileOpen && (
        <div className="fixed inset-0 bg-black/40 z-40" onClick={() => setMobileOpen(false)} />
      )}

    </nav>
  );
}