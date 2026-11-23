"use client";

import React, { useState } from "react";
import BeforeAfterSlider from "./BeforeAfterSlider";
import { MessageCircle } from "lucide-react";

interface CaseStudy {
  id: string;
  category: "scars" | "laser" | "hydrafacial" | "hair" | "melasma";
  categoryLabel: string;
  code: string;
  title: string;
  description: string;
  beforeImg: string;
  afterImg: string;
  specs: {
    protocol: string;
    downtime: string;
    patient: string;
    doctor: string;
  };
  whatsappText: string;
}

const CASES: CaseStudy[] = [
  {
    id: "co2-094",
    category: "scars",
    categoryLabel: "Acne Scars & Texture",
    code: "Case #CO2-094",
    title: "Fractional CO2 Laser + Subcision Protocol",
    description: "24-year-old male with persistent rolling & boxcar scars. 4 sessions scheduled 4 weeks apart combined with autologous growth factors. Significant 80%+ scar elevation and pore remodeling.",
    beforeImg: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=1000&q=80",
    afterImg: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=1000&q=80",
    specs: {
      protocol: "4 Treatments",
      downtime: "3 Days Erythema",
      patient: "Age 24 (Gujranwala)",
      doctor: "Dr. Akhtar",
    },
    whatsappText: "Hello Insta Skin Clinic, I am asking about Acne Scar Case CO2-094.",
  },
  {
    id: "lhr-312",
    category: "laser",
    categoryLabel: "Laser Hair Removal",
    code: "Case #LHR-312",
    title: "Full Facial & Neck Hirsutism Laser Protocol",
    description: "27-year-old female with coarse PCOS related chin and jawline hair. Treated using triple-wavelength 755/808/1064nm with sapphire contact cooling. Zero razor bumps and smooth skin.",
    beforeImg: "https://images.unsplash.com/photo-1560750588-73207b1ef5b8?auto=format&fit=crop&w=1000&q=80",
    afterImg: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1000&q=80",
    specs: {
      protocol: "6 Sessions",
      downtime: "Zero (Immediate Makeup)",
      patient: "Age 27 (Gujranwala)",
      doctor: "Dr. Noreen",
    },
    whatsappText: "Hello Insta Skin Clinic, I am asking about Laser Hair Case LHR-312.",
  },
  {
    id: "prp-188",
    category: "hair",
    categoryLabel: "PRP Hair Growth",
    code: "Case #PRP-188",
    title: "Crown Hair Density Restoration",
    description: "31-year-old male presenting with Norwood Scale III vertex thinning. 5 PRP sessions with microneedling and scalp biostimulation. Noticeable hair shaft thickening and dormant follicle reactivation.",
    beforeImg: "https://images.unsplash.com/photo-1585751119414-ef2636f8aede?auto=format&fit=crop&w=1000&q=80",
    afterImg: "https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?auto=format&fit=crop&w=1000&q=80",
    specs: {
      protocol: "5 Sessions",
      downtime: "12 Hours Sensitivity",
      patient: "Age 31 (Gujranwala)",
      doctor: "Dr. Akhtar",
    },
    whatsappText: "Hello Insta Skin Clinic, I am asking about Hair PRP Case PRP-188.",
  },
  {
    id: "mel-052",
    category: "melasma",
    categoryLabel: "Melasma & Dark Spots",
    code: "Case #MEL-052",
    title: "Targeted Pigmentation Laser + Peel",
    description: "36-year-old female with bilateral cheek melasma and sun freckles. Treated with low-fluence Q-switched laser toning and physician-formulated tranexamic acid peels. 85% clearance.",
    beforeImg: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=1000&q=80",
    afterImg: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format&fit=crop&w=1000&q=80",
    specs: {
      protocol: "Laser Toning + Peels",
      downtime: "Mild Flaking (2 Days)",
      patient: "Age 36 (Gujranwala)",
      doctor: "Dr. Noreen",
    },
    whatsappText: "Hello Insta Skin Clinic, I am inquiring about Melasma Case MEL-052.",
  },
  {
    id: "hyd-420",
    category: "hydrafacial",
    categoryLabel: "HydraFacial Glow",
    code: "Case #HYD-420",
    title: "Bridal Pore Clarification & Plumping",
    description: "25-year-old bride presenting with congested T-zone pores and dehydration lines. Signature HydraFacial MD Vortex-Extraction cleared blackheads followed by antioxidant infusion.",
    beforeImg: "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&w=1000&q=80",
    afterImg: "https://images.unsplash.com/photo-1512290900672-1f0236a28189?auto=format&fit=crop&w=1000&q=80",
    specs: {
      protocol: "50 Minutes Session",
      downtime: "Zero Downtime",
      patient: "Age 25 (Gujranwala)",
      doctor: "Dr. Noreen",
    },
    whatsappText: "Hello Insta Skin Clinic, I want to book a HydraFacial session like Case HYD-420.",
  },
];

export default function ResultsFilter() {
  const [activeFilter, setActiveFilter] = useState<string>("all");

  const filteredCases = activeFilter === "all" ? CASES : CASES.filter((c) => c.category === activeFilter);

  return (
    <div>
      {/* Category Filter Tabs */}
      <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-12">
        {[
          { label: "All Cases", value: "all" },
          { label: "Acne Scars & Texture", value: "scars" },
          { label: "Laser Hair Removal", value: "laser" },
          { label: "HydraFacial Glow", value: "hydrafacial" },
          { label: "PRP Hair Growth", value: "hair" },
          { label: "Melasma & Peels", value: "melasma" },
        ].map((tab) => (
          <button
            key={tab.value}
            onClick={() => setActiveFilter(tab.value)}
            className={`px-5 py-2 rounded-full border text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
              activeFilter === tab.value
                ? "bg-[#B08968] text-[#FAF8F5] border-[#B08968] shadow-md"
                : "border-[#B08968]/30 bg-[#F2EDE4] text-[#1F2421] hover:bg-[#FAF8F5]"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Grid of Cases */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {filteredCases.map((cs) => (
          <div
            key={cs.id}
            className="bg-[#F2EDE4] rounded-3xl p-6 border border-[#B08968]/30 shadow-lg luxury-card"
          >
            <BeforeAfterSlider
              beforeSrc={cs.beforeImg}
              afterSrc={cs.afterImg}
              beforeLabel="Before"
              afterLabel="After"
              className="h-80 sm:h-96 rounded-2xl mb-5"
            />

            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="inline-block px-2.5 py-1 rounded bg-[#B08968]/15 text-[#8C6848] text-xs font-bold uppercase">
                  {cs.categoryLabel}
                </span>
                <span className="text-xs text-[#5C5852] font-semibold">{cs.code}</span>
              </div>
              <h3 className="font-serif text-xl font-bold text-[#1F2421]">{cs.title}</h3>
              <p className="text-xs text-[#5C5852] leading-relaxed">{cs.description}</p>
              <div className="grid grid-cols-2 gap-2 text-[11px] text-[#5C5852] bg-[#FAF8F5] p-3 rounded-xl border border-[#B08968]/20">
                <div><strong>Protocol:</strong> {cs.specs.protocol}</div>
                <div><strong>Downtime:</strong> {cs.specs.downtime}</div>
                <div><strong>Patient:</strong> {cs.specs.patient}</div>
                <div><strong>Doctor:</strong> {cs.specs.doctor}</div>
              </div>
              <div className="pt-2">
                <a
                  href={`https://wa.me/923009353482?text=${encodeURIComponent(cs.whatsappText)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-emerald w-full py-2.5 text-xs font-bold"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>Consult on this Result via WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
