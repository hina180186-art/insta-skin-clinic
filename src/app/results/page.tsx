import React from "react";
import Link from "next/link";
import { Sparkles, ShieldCheck, Star } from "lucide-react";
import ResultsFilter from "@/components/ResultsFilter";
import {
  MaskedReveal,
  FadeInUp,
  InfiniteMarquee,
} from "@/components/MotionPrimitives";

export const metadata = {
  title: "Before & After Clinical Transformations | Insta Skin Clinic Gujranwala",
  description:
    "Explore verified before and after clinical results for acne scars, laser hair removal, HydraFacial MD, and PRP hair restoration at Insta Skin Clinic Gujranwala.",
};

const REVIEWS = [
  {
    text: "The acne scar results speak for themselves. After 4 sessions of Fractional CO2, my skin is smoother than it's ever been. Dr. Akhtar is an expert.",
    author: "Usman Bilal",
    sub: "Fractional CO2 Patient",
    initials: "UB",
  },
  {
    text: "Painless laser hair removal! Best machine in Gujranwala, very gentle and sterile. Highly recommend to everyone on Kashmir Road.",
    author: "Fatima Aslam",
    sub: "Laser Hair Removal",
    initials: "FA",
  },
  {
    text: "Bridal HydraFacial gave me glass skin for my wedding. The glow lasted for weeks without any irritation.",
    author: "Zainab Q.",
    sub: "HydraFacial MD",
    initials: "ZQ",
  },
  {
    text: "Hair shedding stopped completely after PRP session 3. Real doctors, real clinical protocol. Worth every rupee.",
    author: "Hamza Riaz",
    sub: "PRP Hair Therapy",
    initials: "HR",
  },
];

export default function ResultsPage() {
  return (
    <>
      {/* Breadcrumbs */}
      <div className="bg-[#F2EDE4]/60 py-3 border-b border-[#B08968]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-xs text-[#5C5852] flex items-center gap-2">
          <Link href="/" className="hover:text-[#B08968]">
            Home
          </Link>
          <span>/</span>
          <span className="text-[#1F2421] font-semibold">
            Before & After Results
          </span>
        </div>
      </div>

      {/* Header Section */}
      <section className="py-16 lg:py-20 bg-gradient-to-b from-[#FAF8F5] to-[#F2EDE4]/40 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <FadeInUp delay={0.1}>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F2EDE4] border border-[#B08968]/30">
              <Sparkles className="w-3.5 h-3.5 text-[#B08968]" />
              <span className="text-xs font-bold text-[#1F2421]">
                Authentic Patient Case Studies
              </span>
            </div>
          </FadeInUp>

          <MaskedReveal delay={0.2}>
            <h1 className="font-serif text-4xl sm:text-5xl font-bold text-[#1F2421]">
              Before & After Gallery
            </h1>
          </MaskedReveal>

          <FadeInUp delay={0.3}>
            <p className="text-base text-[#5C5852] max-w-2xl mx-auto">
              Genuine clinical outcomes achieved at Insta Skin Clinic on Kashmir
              Rd, Peoples Colony, Gujranwala. Use interactive sliders to examine
              epidermal texture and density restorations.
            </p>
          </FadeInUp>
        </div>
      </section>

      {/* Filterable Gallery Grid (Animated with layoutId tabs & layout animations) */}
      <section className="py-16 bg-[#FAF8F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ResultsFilter />
        </div>
      </section>

      {/* Infinite Google Reviews Marquee on Results Page */}
      <section className="py-16 bg-[#1F2421] text-[#FAF8F5] overflow-hidden relative border-t border-[#B08968]/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 text-center">
          <FadeInUp>
            <span className="text-xs font-bold uppercase tracking-widest text-[#B08968] block mb-2">
              Verified Feedback
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#FAF8F5]">
              Real Patients Behind The Results
            </h2>
          </FadeInUp>
        </div>
        <InfiniteMarquee speed={40}>
          {REVIEWS.map((rev, i) => (
            <div
              key={i}
              className="w-[340px] bg-[#272E2A] p-5 rounded-2xl border border-[#B08968]/30 shrink-0 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <div className="flex text-amber-400">
                    {[...Array(5)].map((_, s) => (
                      <Star key={s} className="w-3.5 h-3.5 fill-amber-400" />
                    ))}
                  </div>
                  <span className="text-[10px] text-[#B08968] font-bold">
                    4.9 ★ Verified
                  </span>
                </div>
                <p className="text-xs text-[#EFE8DE]/90 leading-relaxed italic">
                  &ldquo;{rev.text}&rdquo;
                </p>
              </div>
              <div className="mt-3 pt-3 border-t border-[#B08968]/20 flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-[#B08968]/20 text-[#D8C3A5] font-bold flex items-center justify-center text-xs">
                  {rev.initials}
                </div>
                <div>
                  <div className="text-xs font-bold text-white">{rev.author}</div>
                  <div className="text-[10px] text-[#B08968]">{rev.sub}</div>
                </div>
              </div>
            </div>
          ))}
        </InfiniteMarquee>
      </section>

      {/* Confidentiality Notice */}
      <section className="py-12 bg-[#F2EDE4]/60 border-t border-[#B08968]/20">
        <FadeInUp className="max-w-4xl mx-auto px-4 text-center space-y-3">
          <div className="flex items-center justify-center gap-2 text-xs font-bold text-[#1F2421]">
            <ShieldCheck className="w-4 h-4 text-[#B08968]" />
            <span>Clinical Ethics & Patient Confidentiality</span>
          </div>
          <p className="text-xs text-[#5C5852] leading-relaxed">
            All case studies are displayed with patient consent. Photos are
            un-retouched and taken under standardized clinical lighting at Insta
            Skin Clinic, Kashmir Rd, Sector W Peoples Colony, Gujranwala.
            Individual results depend on metabolic factors, skin phototype, and
            patient compliance with prescribed homecare.
          </p>
        </FadeInUp>
      </section>
    </>
  );
}
