"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileMaterialsOpen, setMobileMaterialsOpen] = useState(false);
  const [mobileLocationOpen, setMobileLocationOpen] = useState(false);

  const pathname = usePathname();

  return (
    <nav className="relative">

      {/* ================= DESKTOP MENU ================= */}
      <ul className="hidden md:flex items-center gap-8 text-slate-800 font-medium">

        {/* Home */}
        <li>
          <Link
            href="/"
            className={`transition ${
              pathname === "/"
                ? "text-slate-900 font-semibold border-b-2 border-slate-900"
                : "hover:text-slate-500"
            }`}
          >
            Home
          </Link>
        </li>

        {/* Desktop Materials */}
        <li className="relative group">
          <span
            className={`transition cursor-pointer ${
              pathname.startsWith("/materials")
                ? "text-slate-900 font-semibold border-b-2 border-slate-900"
                : "hover:text-slate-500"
            }`}
          >
            Materials
          </span>

          <div className="absolute left-0 top-full mt-2 bg-white shadow-lg rounded-md p-4 w-56 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
            <ul className="space-y-2 text-sm">
              <li><Link href="/materials/column-boxes" className="hover:text-slate-500">Column Boxes</Link></li>
              <li><Link href="/materials/cutting-machine" className="hover:text-slate-500">Cutting Machine</Link></li>
              <li><Link href="/materials/pillar-boxes" className="hover:text-slate-500">Pillar Boxes</Link></li>
              <li><Link href="/materials/sidewall-sheets" className="hover:text-slate-500">Sidewall Sheets</Link></li>
              <li><Link href="/materials/iron-jockeys" className="hover:text-slate-500">Iron Jockeys</Link></li>
              <li><Link href="/materials/slab-sheets" className="hover:text-slate-500">Slab Sheets</Link></li>
              <li><Link href="/materials/flint-beam-sheets" className="hover:text-slate-500">Flint Beam Sheets</Link></li>
            </ul>
          </div>
        </li>

        {/* Gallery */}
        <li>
          <Link
            href="/gallery"
            className={`transition ${
              pathname === "/gallery"
                ? "text-slate-900 font-semibold border-b-2 border-slate-900"
                : "hover:text-slate-500"
            }`}
          >
            Gallery
          </Link>
        </li>

        {/* Desktop Location */}
        <li className="relative group">
          <span
            className={`transition cursor-pointer ${
              pathname.startsWith("/location")
                ? "text-slate-900 font-semibold border-b-2 border-slate-900"
                : "hover:text-slate-500"
            }`}
          >
            Location
          </span>

          <div className="absolute left-0 top-full mt-2 bg-white shadow-lg rounded-md p-4 w-40 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
            <ul className="space-y-2 text-sm">
              <li><Link href="/location/kisan-nagar" className="hover:text-slate-500">Kisan Nagar</Link></li>
              <li><Link href="/location/allipuram" className="hover:text-slate-500">Allipuram</Link></li>
            </ul>
          </div>
        </li>

        {/* About */}
        <li>
          <Link
            href="/about"
            className={`transition ${
              pathname === "/about"
                ? "text-slate-900 font-semibold border-b-2 border-slate-900"
                : "hover:text-slate-500"
            }`}
          >
            About Us
          </Link>
        </li>

        {/* Contact */}
        <li>
          <Link
            href="/contact"
            className={`transition ${
              pathname === "/contact"
                ? "text-slate-900 font-semibold border-b-2 border-slate-900"
                : "hover:text-slate-500"
            }`}
          >
            Contact
          </Link>
        </li>

      </ul>

      {/* ================= MOBILE BUTTON ================= */}
      <button
        className="md:hidden text-2xl"
        onClick={() => setMobileOpen(true)}
      >
        ☰
      </button>

      {/* ================= MOBILE SIDE DRAWER ================= */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-xl z-50 transform transition-transform duration-300 ${
          mobileOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-end p-4">
          <button onClick={() => setMobileOpen(false)} className="text-xl">
            ✕
          </button>
        </div>

        <div className="flex flex-col space-y-6 px-6 text-slate-800 font-medium">

          <Link href="/" onClick={() => setMobileOpen(false)}>Home</Link>

          {/* Mobile Materials */}
          <div>
            <button
              onClick={() => setMobileMaterialsOpen(!mobileMaterialsOpen)}
              className="w-full text-left"
            >
              Materials
            </button>

            {mobileMaterialsOpen && (
              <div className="ml-4 mt-2 space-y-2 text-sm">
                <Link href="/materials/column-boxes" className="block" onClick={() => setMobileOpen(false)}>Column Boxes</Link>
                <Link href="/materials/cutting-machine" className="block" onClick={() => setMobileOpen(false)}>Cutting Machine</Link>
                <Link href="/materials/pillar-boxes" className="block" onClick={() => setMobileOpen(false)}>Pillar Boxes</Link>
                <Link href="/materials/sidewall-sheets" className="block" onClick={() => setMobileOpen(false)}>Sidewall Sheets</Link>
                <Link href="/materials/iron-jockeys" className="block" onClick={() => setMobileOpen(false)}>Iron Jockeys</Link>
                <Link href="/materials/slab-sheets" className="block" onClick={() => setMobileOpen(false)}>Slab Sheets</Link>
                <Link href="/materials/flint-beam-sheets" className="block" onClick={() => setMobileOpen(false)}>Flint Beam Sheets</Link>
              </div>
            )}
          </div>

          <Link href="/gallery" onClick={() => setMobileOpen(false)}>Gallery</Link>

          {/* Mobile Location */}
          <div>
            <button
              onClick={() => setMobileLocationOpen(!mobileLocationOpen)}
              className="w-full text-left"
            >
              Location
            </button>

            {mobileLocationOpen && (
              <div className="ml-4 mt-2 space-y-2 text-sm">
                <Link href="/location/kisan-nagar" className="block" onClick={() => setMobileOpen(false)}>Kisan Nagar</Link>
                <Link href="/location/allipuram" className="block" onClick={() => setMobileOpen(false)}>Allipuram</Link>
              </div>
            )}
          </div>

          <Link href="/about" onClick={() => setMobileOpen(false)}>About Us</Link>
          <Link href="/contact" onClick={() => setMobileOpen(false)}>Contact</Link>

        </div>
      </div>

      {/* Overlay */}
      {mobileOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40"
          onClick={() => setMobileOpen(false)}
        />
      )}

    </nav>
  );
}