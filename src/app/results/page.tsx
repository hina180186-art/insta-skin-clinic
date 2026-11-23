import React from "react";
import Link from "next/link";
import { Sparkles, ShieldCheck } from "lucide-react";
import ResultsFilter from "@/components/ResultsFilter";
import { MaskedReveal, FadeInUp } from "@/components/MotionPrimitives";

export const metadata = {
  title: "Before & After Clinical Transformations | Insta Skin Clinic Gujranwala",
  description:
    "Explore verified before and after clinical results for acne scars, laser hair removal, HydraFacial MD, and PRP hair restoration at Insta Skin Clinic Gujranwala.",
};

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
