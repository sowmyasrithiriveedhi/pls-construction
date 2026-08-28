"use client";

import { useLanguage } from "../../src/context/LanguageContext";
import { translations } from "../../src/translations/index";
import { Language } from "../../src/context/LanguageContext";

export default function AboutPage() {
  const { lang } = useLanguage() as { lang: Language };
  const t = translations[lang as keyof typeof translations];

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[60vh] w-full">
        <img
          src="/aboutus.png"
          alt="PLS Construction Materials Shop"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white">
            {t.about} {/* ✅ replaced */}
          </h1>
        </div>
      </section>

      {/* Your Existing Section (unchanged) */}
      <section className="min-h-screen py-24">
        <div className="max-w-4xl mx-auto px-6 space-y-12">

          {/* Heading */}
          <div className="text-center space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold text-white">
              {t.aboutTitle} {/* ✅ replaced */}
            </h1>
          </div>

          {/* Content */}
          <div className="space-y-6 text-gray-200 text-lg leading-relaxed text-center">
            <p>
              {t.aboutDesc1}
            </p>

            <p>{t.aboutDesc2}</p>
          </div>

          {/* Tagline */}
          <div className="pt-8 border-t border-gray-700 text-center">
            <p className="text-2xl md:text-3xl font-semibold text-white tracking-wide">
              {t.tagline} {/* ✅ replaced */}
            </p>
          </div>

        </div>
      </section>
    </>
  );
}