// "use client";
// import { createContext, useContext, useState } from "react";

// const LanguageContext = createContext<any>(null);

// export function LanguageProvider({ children }: any) {
//   const [lang, setLang] = useState("en");

//   return (
//     <LanguageContext.Provider value={{ lang, setLang }}>
//       {children}
//     </LanguageContext.Provider>
//   );
// }

// export const useLanguage = () => useContext(LanguageContext);




"use client";
import { createContext, useContext, useState, useEffect } from "react";
import { Language } from "../translations";

const LanguageContext = createContext<any>(null);

export function LanguageProvider({ children }: any) {
  const [lang, setLang] = useState<Language>("en");
  // ✅ Load saved language
  useEffect(() => {
    const savedLang = localStorage.getItem("lang");
    if (savedLang) {
      setLang(savedLang as Language);
    }
  }, []);

  // ✅ Save language when changed
  useEffect(() => {
    localStorage.setItem("lang", lang);
  }, [lang]);

  return (
    <LanguageContext.Provider value={{ lang, setLang }}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLanguage = () => useContext(LanguageContext);