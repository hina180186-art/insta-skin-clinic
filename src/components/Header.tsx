"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ChevronDown, ChevronRight, Menu, X, MessageCircle, Sparkles, Droplets, Activity, Layers } from "lucide-react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-40 bg-[#FAF8F5]/95 backdrop-blur-md border-b border-[#B08968]/20 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-11 h-11 rounded-full bg-gradient-to-br from-[#B08968] to-[#9A7454] flex items-center justify-center text-[#FAF8F5] shadow-md group-hover:scale-105 transition-transform duration-300">
              <span className="font-serif font-bold text-xl tracking-tight">IS</span>
            </div>
            <div>
              <span className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-[#1F2421] block leading-none">
                INSTA SKIN
              </span>
              <span className="text-[10px] sm:text-[11px] tracking-[0.22em] uppercase text-[#5C5852] font-semibold block mt-1">
                Skin · Laser · Hair Clinic
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8 text-[14.5px] font-medium text-[#1F2421]">
            <Link href="/" className="hover:text-[#B08968] transition-colors py-1">
              Home
            </Link>
            <Link href="/about" className="hover:text-[#B08968] transition-colors py-1">
              About Us
            </Link>

            {/* Treatments Dropdown */}
            <div className="relative group py-2">
              <button className="inline-flex items-center gap-1 hover:text-[#B08968] transition-colors py-1 focus:outline-none">
                <span>Treatments</span>
                <ChevronDown className="w-4 h-4 text-[#B08968] transition-transform duration-200 group-hover:rotate-180" />
              </button>
              <div className="absolute left-0 top-full w-72 bg-[#FAF8F5] border border-[#B08968]/30 rounded-xl shadow-2xl p-3 opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-300 z-50">
                <div className="text-[11px] font-bold tracking-wider uppercase text-[#B08968] px-3 py-1.5">
                  Medical Aesthetic Procedures
                </div>
                <Link
                  href="/treatments/laser-hair-removal"
                  className="flex items-start gap-3 p-2.5 rounded-lg hover:bg-[#F2EDE4] transition-colors"
                >
                  <Sparkles className="w-4 h-4 text-[#B08968] mt-1 shrink-0" />
                  <div>
                    <span className="block font-semibold text-sm text-[#1F2421]">Laser Hair Removal</span>
                    <span className="block text-xs text-[#5C5852]">Painless Full Body & Face</span>
                  </div>
                </Link>
                <Link
                  href="/treatments/hydrafacial"
                  className="flex items-start gap-3 p-2.5 rounded-lg hover:bg-[#F2EDE4] transition-colors"
                >
                  <Droplets className="w-4 h-4 text-[#B08968] mt-1 shrink-0" />
                  <div>
                    <span className="block font-semibold text-sm text-[#1F2421]">Signature HydraFacial MD</span>
                    <span className="block text-xs text-[#5C5852]">Deep Pore Vortex Cleansing</span>
                  </div>
                </Link>
                <Link
                  href="/treatments/prp-hair-restoration"
                  className="flex items-start gap-3 p-2.5 rounded-lg hover:bg-[#F2EDE4] transition-colors"
                >
                  <Activity className="w-4 h-4 text-[#B08968] mt-1 shrink-0" />
                  <div>
                    <span className="block font-semibold text-sm text-[#1F2421]">PRP Hair Restoration</span>
                    <span className="block text-xs text-[#5C5852]">Regenerative Growth Therapy</span>
                  </div>
                </Link>
                <Link
                  href="/treatments/acne-scar-laser"
                  className="flex items-start gap-3 p-2.5 rounded-lg hover:bg-[#F2EDE4] transition-colors"
                >
                  <Layers className="w-4 h-4 text-[#B08968] mt-1 shrink-0" />
                  <div>
                    <span className="block font-semibold text-sm text-[#1F2421]">Fractional CO2 Laser</span>
                    <span className="block text-xs text-[#5C5852]">Acne Scars & Texture Reset</span>
                  </div>
                </Link>
              </div>
            </div>

            {/* Concerns Dropdown */}
            <div className="relative group py-2">
              <button className="inline-flex items-center gap-1 hover:text-[#B08968] transition-colors py-1 focus:outline-none">
                <span>Concerns</span>
                <ChevronDown className="w-4 h-4 text-[#B08968] transition-transform duration-200 group-hover:rotate-180" />
              </button>
              <div className="absolute left-0 top-full w-64 bg-[#FAF8F5] border border-[#B08968]/30 rounded-xl shadow-2xl p-3 opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-300 z-50">
                <Link
                  href="/concerns/hair-fall-thinning"
                  className="block p-2.5 rounded-lg hover:bg-[#F2EDE4] transition-colors"
                >
                  <span className="block font-semibold text-sm text-[#1F2421]">Hair Fall & Thinning</span>
                  <span className="block text-xs text-[#5C5852]">Alopecia & Scalp Density</span>
                </Link>
                <Link
                  href="/concerns/pigmentation-melasma"
                  className="block p-2.5 rounded-lg hover:bg-[#F2EDE4] transition-colors"
                >
                  <span className="block font-semibold text-sm text-[#1F2421]">Melasma & Dark Spots</span>
                  <span className="block text-xs text-[#5C5852]">Hyperpigmentation Care</span>
                </Link>
              </div>
            </div>

            <Link href="/results" className="hover:text-[#B08968] transition-colors py-1">
              Before & After
            </Link>
            <Link href="/contact" className="hover:text-[#B08968] transition-colors py-1">
              Contact & Map
            </Link>
          </nav>

          {/* Action CTA & Mobile Toggle */}
          <div className="flex items-center gap-4">
            <a
              href="https://wa.me/923009353482?text=Hello%20Insta%20Skin%20Clinic,%20I%20would%20like%20to%20book%20a%20consultation%20appointment."
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex btn-emerald px-5 py-2.5 text-sm font-semibold tracking-wide"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Book via WhatsApp</span>
            </a>

            <button
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Open Mobile Menu"
              className="lg:hidden p-2.5 rounded-lg border border-[#B08968]/30 text-[#1F2421] hover:bg-[#F2EDE4] transition-colors"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <>
          <div
            onClick={() => setMobileMenuOpen(false)}
            className="fixed inset-0 bg-black/60 z-50 backdrop-blur-sm transition-opacity"
          />
          <div className="fixed top-0 right-0 bottom-0 w-80 max-w-full bg-[#FAF8F5] z-50 shadow-2xl flex flex-col justify-between p-6 overflow-y-auto">
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-[#B08968]/20">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-full bg-[#B08968] flex items-center justify-center text-[#FAF8F5] font-serif font-bold text-base">
                    IS
                  </div>
                  <div>
                    <span className="font-serif font-bold text-base text-[#1F2421] block">INSTA SKIN</span>
                    <span className="text-[9px] uppercase tracking-wider text-[#5C5852]">Gujranwala Clinic</span>
                  </div>
                </div>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 rounded-lg text-[#5C5852] hover:text-[#1F2421] hover:bg-[#F2EDE4]"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <nav className="mt-6 flex flex-col gap-1 text-base font-medium text-[#1F2421]">
                <Link
                  href="/"
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2.5 rounded-lg hover:bg-[#F2EDE4] transition-colors flex items-center justify-between"
                >
                  <span>Home</span>
                  <ChevronRight className="w-4 h-4 text-[#5C5852]" />
                </Link>
                <Link
                  href="/about"
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2.5 rounded-lg hover:bg-[#F2EDE4] transition-colors flex items-center justify-between"
                >
                  <span>About Doctors & Clinic</span>
                  <ChevronRight className="w-4 h-4 text-[#5C5852]" />
                </Link>

                <div className="pt-4 pb-1 px-3 text-xs uppercase font-bold tracking-wider text-[#B08968]">
                  Treatments
                </div>
                <Link
                  href="/treatments/laser-hair-removal"
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2 text-sm hover:bg-[#F2EDE4] rounded-lg text-[#5C5852] pl-6"
                >
                  Laser Hair Removal
                </Link>
                <Link
                  href="/treatments/hydrafacial"
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2 text-sm hover:bg-[#F2EDE4] rounded-lg text-[#5C5852] pl-6"
                >
                  Signature HydraFacial MD
                </Link>
                <Link
                  href="/treatments/prp-hair-restoration"
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2 text-sm hover:bg-[#F2EDE4] rounded-lg text-[#5C5852] pl-6"
                >
                  PRP Hair Restoration
                </Link>
                <Link
                  href="/treatments/acne-scar-laser"
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2 text-sm hover:bg-[#F2EDE4] rounded-lg text-[#5C5852] pl-6"
                >
                  Fractional CO2 Laser
                </Link>

                <div className="pt-4 pb-1 px-3 text-xs uppercase font-bold tracking-wider text-[#B08968]">Concerns</div>
                <Link
                  href="/concerns/hair-fall-thinning"
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2 text-sm hover:bg-[#F2EDE4] rounded-lg text-[#5C5852] pl-6"
                >
                  Hair Fall & Thinning
                </Link>
                <Link
                  href="/concerns/pigmentation-melasma"
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2 text-sm hover:bg-[#F2EDE4] rounded-lg text-[#5C5852] pl-6"
                >
                  Melasma & Dark Spots
                </Link>

                <div className="pt-4 pb-1 px-3 text-xs uppercase font-bold tracking-wider text-[#B08968]">Explore</div>
                <Link
                  href="/results"
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2.5 rounded-lg hover:bg-[#F2EDE4] transition-colors flex items-center justify-between"
                >
                  <span>Before & After Results</span>
                  <ChevronRight className="w-4 h-4 text-[#5C5852]" />
                </Link>
                <Link
                  href="/contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2.5 rounded-lg hover:bg-[#F2EDE4] transition-colors flex items-center justify-between"
                >
                  <span>Contact & Clinic Location</span>
                  <ChevronRight className="w-4 h-4 text-[#5C5852]" />
                </Link>
              </nav>
            </div>

            <div className="pt-6 border-t border-[#B08968]/20 flex flex-col gap-3">
              <a
                href="https://wa.me/923009353482?text=Hello%20Insta%20Skin%20Clinic,%20I%20would%20like%20to%20book%20a%20consultation."
                target="_blank"
                rel="noopener noreferrer"
                className="btn-emerald py-3 text-sm w-full"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp Concierge</span>
              </a>
              <div className="text-center text-xs text-[#5C5852]">
                Kashmir Rd, Peoples Colony, Gujranwala
                <br />
                Call: +92 300 9353482
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
