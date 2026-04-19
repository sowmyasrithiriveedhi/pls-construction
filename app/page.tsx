"use client";

import Hero from "@/components/sections/Hero";
import InfoSection from "@/components/sections/InfoSection";
import { useLanguage } from "../src/context/LanguageContext";
import { translations } from "../src/translations";

export default function Home() {
  const { lang } = useLanguage();
  const t = translations[lang];

  return (
    <>
      <Hero />

      <InfoSection
        title={t.homeTitle1}
        description={t.homeDesc1}
        image="/images/section1.jpg"
      />

      <InfoSection
        title={t.homeTitle2}
        description={t.homeDesc2}
        image="/images/section2.jpg"
        reverse
      />
    </>
  );
}