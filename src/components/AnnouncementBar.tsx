import React from "react";
import { Star, MapPin, Clock, Phone } from "lucide-react";

export default function AnnouncementBar() {
  return (
    <div className="bg-[#1F2421] text-[#EFE8DE] text-xs py-2.5 px-4 border-b border-[#B08968]/30">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
        <div className="flex items-center gap-4 text-center sm:text-left">
          <span className="inline-flex items-center gap-1.5 text-amber-300">
            <Star className="w-3.5 h-3.5 fill-amber-300 text-amber-300" />
            <strong className="text-white">4.9 ★</strong> (139 Verified Google Reviews)
          </span>
          <span className="hidden md:inline text-white/30">•</span>
          <span className="hidden md:inline-flex items-center gap-1.5 text-[#EFE8DE]/90">
            <MapPin className="w-3.5 h-3.5 text-[#B08968]" />
            Kashmir Rd, Sector W Peoples Colony, Gujranwala
          </span>
        </div>
        <div className="flex items-center gap-5">
          <span className="inline-flex items-center gap-1.5 text-[#EFE8DE]/90">
            <Clock className="w-3.5 h-3.5 text-[#B08968]" />
            Mon – Sat: 11:00 AM – 9:00 PM
          </span>
          <a
            href="https://wa.me/923009353482?text=Hello%20Insta%20Skin%20Clinic,%20I%20would%20like%20to%20inquire%20about%20a%20consultation."
            target="_blank"
            rel="noopener noreferrer"
            className="text-emerald-400 hover:text-emerald-300 font-semibold inline-flex items-center gap-1 transition-colors"
          >
            <Phone className="w-3.5 h-3.5" />
            +92 300 9353482
          </a>
        </div>
      </div>
    </div>
  );
}
