"use client";

import { Phone, MessageCircle } from "lucide-react";

export default function FloatingContact() {
  // Pre-filled WhatsApp message
  const message = encodeURIComponent(
    "Hello I want to know about construction materials"
  );

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col gap-3">

      {/* Call Button */}
      <a
        href="tel:+918885577399"
        aria-label="Call Now"
        className="group relative flex items-center justify-center w-14 h-14 rounded-full bg-blue-600 text-white shadow-xl hover:scale-110 transition duration-300 animate-bounce"
      >
        <Phone size={22} />

        {/* Tooltip */}
        <span className="absolute right-16 whitespace-nowrap bg-white text-slate-800 text-sm px-3 py-1 rounded-lg shadow-md opacity-0 group-hover:opacity-100 transition">
          Call Now
        </span>
      </a>

      {/* WhatsApp Button */}
      <a
        href={`https://wa.me/918885577399?text=${message}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp"
        className="group relative flex items-center justify-center w-14 h-14 rounded-full bg-green-500 text-white shadow-xl hover:scale-110 transition duration-300 animate-pulse"
      >
        <MessageCircle size={22} />

        {/* Tooltip */}
        <span className="absolute right-16 whitespace-nowrap bg-white text-slate-800 text-sm px-3 py-1 rounded-lg shadow-md opacity-0 group-hover:opacity-100 transition">
          WhatsApp
        </span>
      </a>

    </div>
  );
}