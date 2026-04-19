"use client";

import Image from "next/image";
import { useLanguage } from "../../src/context/LanguageContext";
import { translations } from "../../src/translations";

export default function Hero() {
  const { lang } = useLanguage();
  const t = translations[lang];

  return (
    <section className="relative h-[90vh] w-full">
      
      {/* Background Image */}
      <Image
        src="/images/hero.jpg"
        alt="Construction Site"
        fill
        priority
        className="object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Center Text */}
      <div className="absolute inset-0 flex items-center justify-center">
        <h2 className="text-white text-4xl md:text-6xl font-extrabold text-center px-6">
          {t.heroQuote}
        </h2>
      </div>

    </section>
  );
}