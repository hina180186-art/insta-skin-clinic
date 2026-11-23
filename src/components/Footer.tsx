import React from "react";
import Link from "next/link";
import { MapPin, Phone, MessageCircle, Clock, Shield, Check } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#1F2421] text-[#EFE8DE] pt-20 pb-12 border-t border-[#B08968]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-[#B08968]/20">
          {/* Col 1: Brand & Credentials */}
          <div className="lg:col-span-4 space-y-5">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#B08968] flex items-center justify-center text-[#FAF8F5] font-serif font-bold text-lg">
                IS
              </div>
              <div>
                <span className="font-serif text-xl font-bold tracking-tight text-[#FAF8F5] block">
                  INSTA SKIN CLINIC
                </span>
                <span className="text-[10px] tracking-[0.2em] uppercase text-[#D8C3A5]">
                  Skin · Laser · Hair Clinic
                </span>
              </div>
            </div>

            <p className="text-xs text-[#EFE8DE]/70 leading-relaxed">
              Gujranwala&apos;s premier aesthetic dermatology center combining medical science with quiet luxury. Providing FDA-approved laser hair removal, medical HydraFacial MD, PRP hair restoration, and Fractional CO2 acne scar therapy.
            </p>

            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#FAF8F5]/5 border border-[#B08968]/30 text-xs">
              <span className="text-amber-400">★ 4.9</span>
              <span className="text-[#EFE8DE]/80">139 Verified Google Reviews</span>
            </div>

            <div className="flex items-center gap-3 text-xs text-[#B08968]">
              <span className="flex items-center gap-1">
                <Shield className="w-3.5 h-3.5" /> PMDC Registered
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Check className="w-3.5 h-3.5" /> FDA Approved
              </span>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="font-serif font-bold text-sm text-[#D8C3A5] tracking-wider uppercase">Navigation</h4>
            <ul className="space-y-2.5 text-xs text-[#EFE8DE]/75">
              <li>
                <Link href="/" className="hover:text-[#B08968] transition-colors">Home</Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-[#B08968] transition-colors">About Doctors & Clinic</Link>
              </li>
              <li>
                <Link href="/results" className="hover:text-[#B08968] transition-colors">Before & After Results</Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#B08968] transition-colors">Contact & Location</Link>
              </li>
              <li>
                <Link href="/concerns/hair-fall-thinning" className="hover:text-[#B08968] transition-colors">Hair Fall Guide</Link>
              </li>
              <li>
                <Link href="/concerns/pigmentation-melasma" className="hover:text-[#B08968] transition-colors">Melasma Guide</Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Medical Treatments */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-serif font-bold text-sm text-[#D8C3A5] tracking-wider uppercase">Medical Procedures</h4>
            <ul className="space-y-2.5 text-xs text-[#EFE8DE]/75">
              <li>
                <Link href="/treatments/laser-hair-removal" className="hover:text-[#B08968] transition-colors">Triple-Wavelength Laser Hair Removal</Link>
              </li>
              <li>
                <Link href="/treatments/hydrafacial" className="hover:text-[#B08968] transition-colors">Signature Medical HydraFacial MD</Link>
              </li>
              <li>
                <Link href="/treatments/prp-hair-restoration" className="hover:text-[#B08968] transition-colors">Autologous PRP Hair Restoration</Link>
              </li>
              <li>
                <Link href="/treatments/acne-scar-laser" className="hover:text-[#B08968] transition-colors">Fractional CO2 Laser Resurfacing</Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#B08968] transition-colors">Hollywood Carbon Laser Peel</Link>
              </li>
              <li>
                <Link href="/concerns/pigmentation-melasma" className="hover:text-[#B08968] transition-colors">Targeted Medical Chemical Peels</Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Gujranwala Clinic Info */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-serif font-bold text-sm text-[#D8C3A5] tracking-wider uppercase">Gujranwala Clinic</h4>
            <div className="space-y-3 text-xs text-[#EFE8DE]/75">
              <p className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#B08968] shrink-0 mt-0.5" />
                <span>Kashmir Rd, Sector W Peoples Colony, Gujranwala, 52250, Pakistan</span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#B08968] shrink-0" />
                <a href="tel:+923009353482" className="hover:text-[#B08968] transition-colors">+92 300 9353482</a>
              </p>
              <p className="flex items-center gap-2">
                <MessageCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                <a
                  href="https://wa.me/923009353482?text=Hello%20Insta%20Skin%20Clinic,%20I%20am%20messaging%20via%20your%20website."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-emerald-400 hover:underline"
                >
                  +92 300 9353482 (WhatsApp)
                </a>
              </p>
              <p className="flex items-start gap-2">
                <Clock className="w-4 h-4 text-[#B08968] shrink-0 mt-0.5" />
                <span>
                  Mon – Sat: 11:00 AM – 9:00 PM<br />
                  <span className="text-[#D8C3A5]">Sunday: By Appointment Only</span>
                </span>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#EFE8DE]/50">
          <p>© 2026 Insta Skin Clinic (Skin Laser & Hair Clinic). All rights reserved.</p>
          <p className="text-[11px] text-[#EFE8DE]/40 text-center sm:text-right">
            Disclaimer: Clinical results vary based on individual skin physiology and compliance with medical instructions.
          </p>
        </div>
      </div>
    </footer>
  );
}
