"use client";

import React, { useState } from "react";
import BeforeAfterSlider from "./BeforeAfterSlider";
import { MessageCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { luxuryEase } from "@/components/MotionPrimitives";

interface CaseStudy {
  id: string;
  category: "scars" | "laser" | "hydrafacial" | "hair" | "melasma";
  categoryLabel: string;
  code: string;
  title: string;
  description: string;
  beforeImg: string;
  afterImg: string;
  beforeLabel?: string;
  afterLabel?: string;
  beforeSub?: string;
  afterSub?: string;
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
    title: "Fractional CO2 + RF Microneedling Protocol",
    description:
      "Pakistani female patient presenting with severe pitted, boxcar, and rolling scars on cheek and jawline. Treated with combined Fractional CO2 Laser Resurfacing and Microneedling Radiofrequency. Clinical outcome after 3 sessions demonstrating 85-90% scar elevation, textural remodeling, and healthy dermal regeneration.",
    beforeImg: "/images/before-scars.jpg",
    afterImg: "/images/after-scars.jpg",
    beforeLabel: "BEFORE",
    afterLabel: "AFTER",
    beforeSub: "ACTIVE PITTED & ROLLING SCARS",
    afterSub: "AFTER 3 SESSIONS (RF & LASER)",
    specs: {
      protocol: "3 Sessions",
      downtime: "3 Days Micro-Crusting",
      patient: "Female (Gujranwala)",
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
    description:
      "27-year-old female with coarse PCOS related chin and jawline hair. Treated using triple-wavelength 755/808/1064nm with sapphire contact cooling. Zero razor bumps and smooth skin.",
    beforeImg:
      "https://images.unsplash.com/photo-1560750588-73207b1ef5b8?auto=format&fit=crop&w=1000&q=80",
    afterImg:
      "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1000&q=80",
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
    description:
      "31-year-old male presenting with Norwood Scale III vertex thinning. 5 PRP sessions with microneedling and scalp biostimulation. Noticeable hair shaft thickening and dormant follicle reactivation.",
    beforeImg:
      "https://images.unsplash.com/photo-1585751119414-ef2636f8aede?auto=format&fit=crop&w=1000&q=80",
    afterImg:
      "https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?auto=format&fit=crop&w=1000&q=80",
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
    description:
      "36-year-old female with bilateral cheek melasma and sun freckles. Treated with low-fluence Q-switched laser toning and physician-formulated tranexamic acid peels. 85% clearance.",
    beforeImg:
      "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=1000&q=80",
    afterImg:
      "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format&fit=crop&w=1000&q=80",
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
    description:
      "25-year-old bride presenting with congested T-zone pores and dehydration lines. Signature HydraFacial MD Vortex-Extraction cleared blackheads followed by antioxidant infusion.",
    beforeImg:
      "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&w=1000&q=80",
    afterImg:
      "https://images.unsplash.com/photo-1512290900672-1f0236a28189?auto=format&fit=crop&w=1000&q=80",
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

  const filteredCases =
    activeFilter === "all"
      ? CASES
      : CASES.filter((c) => c.category === activeFilter);

  return (
    <div>
      {/* Category Filter Tabs with layoutId smooth pill indicator */}
      <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-12">
        {[
          { label: "All Results", value: "all" },
          { label: "Laser Hair Removal", value: "laser" },
          { label: "HydraFacial", value: "hydrafacial" },
          { label: "PRP Hair", value: "hair" },
          { label: "Acne Scars", value: "scars" },
          { label: "Melasma & Peels", value: "melasma" },
        ].map((tab) => {
          const isActive = activeFilter === tab.value;
          return (
            <button
              key={tab.value}
              onClick={() => setActiveFilter(tab.value)}
              className="relative px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-colors cursor-pointer focus:outline-none"
            >
              {isActive && (
                <motion.div
                  layoutId="activeFilterPill"
                  className="absolute inset-0 bg-[#B08968] rounded-full shadow-md -z-10"
                  transition={{ type: "spring", stiffness: 350, damping: 30 }}
                />
              )}
              <span
                className={
                  isActive
                    ? "text-[#FAF8F5]"
                    : "text-[#5C5852] hover:text-[#1F2421]"
                }
              >
                {tab.label}
              </span>
            </button>
          );
        })}
      </div>

      {/* Grid of Cases with Animated Transitions and Luxury Hover Lift */}
      <motion.div
        layout
        className="grid grid-cols-1 md:grid-cols-2 gap-10"
      >
        <AnimatePresence mode="popLayout">
          {filteredCases.map((cs) => (
            <motion.div
              layout
              key={cs.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4, ease: luxuryEase }}
              whileHover={{
                y: -6,
                boxShadow: "0 22px 36px -10px rgba(176, 137, 104, 0.25)",
                borderColor: "rgba(176, 137, 104, 0.8)",
              }}
              className="bg-[#F2EDE4] rounded-3xl p-6 border border-[#B08968]/30 shadow-md transition-colors"
            >
              <BeforeAfterSlider
                beforeSrc={cs.beforeImg}
                afterSrc={cs.afterImg}
                beforeLabel={cs.beforeLabel || "BEFORE"}
                afterLabel={cs.afterLabel || "AFTER"}
                beforeSub={cs.beforeSub}
                afterSub={cs.afterSub}
                aspectRatio="aspect-[4/3] sm:aspect-[4/5]"
                className="mb-5 rounded-2xl"
              />

              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="inline-block px-2.5 py-1 rounded-full bg-[#B08968]/15 text-[#8C6848] text-xs font-bold uppercase">
                    {cs.categoryLabel}
                  </span>
                  <span className="text-xs text-[#5C5852] font-semibold">
                    {cs.code}
                  </span>
                </div>
                <h3 className="font-serif text-xl font-bold text-[#1F2421]">
                  {cs.title}
                </h3>
                <p className="text-xs text-[#5C5852] leading-relaxed">
                  {cs.description}
                </p>
                <div className="grid grid-cols-2 gap-2 text-[11px] text-[#5C5852] bg-[#FAF8F5] p-3 rounded-xl border border-[#B08968]/20">
                  <div>
                    <strong>Protocol:</strong> {cs.specs.protocol}
                  </div>
                  <div>
                    <strong>Downtime:</strong> {cs.specs.downtime}
                  </div>
                  <div>
                    <strong>Patient:</strong> {cs.specs.patient}
                  </div>
                  <div>
                    <strong>Doctor:</strong> {cs.specs.doctor}
                  </div>
                </div>
                <div className="pt-2">
                  <a
                    href={`https://wa.me/923009353482?text=${encodeURIComponent(
                      cs.whatsappText
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-emerald w-full py-2.5 text-xs font-bold"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>Consult on this Result via WhatsApp</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
