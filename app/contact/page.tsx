"use client";

import { useLanguage } from "../../src/context/LanguageContext";
import { translations } from "../../src/translations";

export default function ContactPage() {
  const { lang } = useLanguage();
  const t = translations[lang as keyof typeof translations];

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[60vh] w-full">
        <img
          src="/contact.jpg"
          alt="Contact PLS Construction Materials"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Dark Overlay + Contact Text */}
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white">
            {t.contactTitle}
          </h1>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-8">

          <p className="text-gray-300 text-lg">
            {t.contactDesc}
          </p>

          {/* Buttons */}
          <div className="flex justify-center gap-6 pt-4">

            {/* Call Button */}
            <a
              href="tel:+918885577399"
              className="bg-green-600 text-white px-7 py-3 rounded-lg font-semibold hover:bg-green-700 transition"
            >
              {t.call}
            </a>

            {/* WhatsApp Button */}
            <a
              href="https://wa.me/918885577399?text=Hello%20I%20want%20to%20know%20about%20construction%20materials"
              className="bg-emerald-500 text-white px-7 py-3 rounded-lg font-semibold hover:bg-emerald-600 transition"
            >
              {t.whatsapp}
            </a>

          </div>

        </div>
      </section>
    </>
  );
}