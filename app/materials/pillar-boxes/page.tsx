"use client";

import { useLanguage } from "../../../src/context/LanguageContext";
import { translations } from "../../../src/translations";

export default function PillarBoxesPage() {
  const { lang } = useLanguage();
  const t = translations[lang];

  return (
    <>
      <section className="relative h-[60vh] w-full">
        <img src="/materials/pillar-boxes.jpg" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white">{t.pillarBoxesTitle}</h1>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6 text-center space-y-8">
          <p className="text-gray-200 text-lg">{t.pillarBoxesDesc}</p>

          <div className="grid md:grid-cols-3 gap-8">
            <img src="/materials/pillar1.jpg" className="rounded-lg shadow-lg hover:scale-110 transition duration-300" />
            <img src="/materials/pillar2.jpg" className="rounded-lg shadow-lg hover:scale-110 transition duration-300" />
            <img src="/materials/pillar3.jpg" className="rounded-lg shadow-lg hover:scale-110 transition duration-300" />
          </div>
        </div>
      </section>
    </>
  );
}