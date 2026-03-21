"use client";

import { useLanguage } from "../../../src/context/LanguageContext";
import { translations } from "../../../src/translations";

export default function AllipuramPage() {
  const { lang } = useLanguage();
  const t = translations[lang as keyof typeof translations];

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[60vh] w-full">
        <img
          src="/location-hero.jpg"
          alt="Allipuram Location"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white">
            {t.allipuram}
          </h1>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-6 text-center space-y-6">

          {/* Google Map */}
          <div className="relative w-full h-[450px] rounded-lg overflow-hidden shadow-lg">

            {/* Loading Skeleton */}
            <div className="absolute inset-0 animate-pulse bg-gray-300"></div>

            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4351.523262126677!2d80.0419521!3d14.453136700000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a4c8b00403aaa45%3A0x457398be6752c4f!2sPLS%20building%20materials!5e1!3m2!1sen!2sin!4v1773234790516!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              className="relative"
            ></iframe>

          </div>

          {/* Buttons */}
          <div className="flex justify-center gap-6 pt-4 flex-wrap">

            {/* Directions */}
            <a
              href="https://www.google.com/maps/dir/?api=1&destination=14.4531367,80.0419521"
              target="_blank"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
            >
              {t.getDirections}
            </a>

          </div>

        </div>
      </section>
    </>
  );
}