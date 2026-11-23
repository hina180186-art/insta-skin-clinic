import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { TREATMENTS } from "@/data/treatments";
import FaqAccordion from "@/components/FaqAccordion";
import {
  Clock,
  ShieldCheck,
  Calendar,
  Sparkles,
  CheckCircle2,
  MessageCircle,
  Phone,
  ChevronRight,
  ArrowRight,
  Check,
} from "lucide-react";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return Object.keys(TREATMENTS).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const treatment = TREATMENTS[slug];
  if (!treatment) {
    return {
      title: "Treatment Not Found | Insta Skin Clinic",
    };
  }
  return {
    title: `${treatment.title} | Insta Skin Clinic Gujranwala`,
    description: treatment.subtitle,
  };
}

export default async function TreatmentDetailPage({ params }: Props) {
  const { slug } = await params;
  const treatment = TREATMENTS[slug];

  if (!treatment) {
    notFound();
  }

  const encodedWhatsApp = `https://wa.me/923009353482?text=${encodeURIComponent(
    `Hi Insta Skin Clinic, I would like to consult about ${treatment.title}. Please provide appointment availability.`
  )}`;

  return (
    <div className="bg-[#FAF8F5] min-h-screen pt-28 sm:pt-32 pb-20">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
        <nav className="flex items-center space-x-2 text-xs sm:text-sm text-[#5C5852]">
          <Link href="/" className="hover:text-[#B08968] transition-colors">
            Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-[#B08968]/60" />
          <Link href="/#treatments" className="hover:text-[#B08968] transition-colors">
            Treatments
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-[#B08968]/60" />
          <span className="text-[#1F2421] font-semibold truncate">
            {treatment.title}
          </span>
        </nav>
      </div>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          <div className="lg:col-span-7">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-[#B08968]/15 text-[#8F6A48] border border-[#B08968]/30 mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              {treatment.heroBadge}
            </span>
            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1F2421] leading-tight mb-4">
              {treatment.title}
            </h1>
            <p className="text-base sm:text-lg text-[#5C5852] leading-relaxed mb-8">
              {treatment.subtitle}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-6">
              <a
                href={encodedWhatsApp}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-emerald inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full font-bold text-sm shadow-md transition-all"
              >
                <MessageCircle className="w-4 h-4" />
                Book via WhatsApp
              </a>
              <a
                href="tel:+923009353482"
                className="btn-outline-gold inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full font-bold text-sm transition-all"
              >
                <Phone className="w-4 h-4 text-[#B08968]" />
                Call +92 300 9353482
              </a>
            </div>

            <p className="text-xs text-[#5C5852] flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#1E6B52]" />
              Doctor-conducted consultation &bull; Kashmir Rd, Sector W Peoples Colony, Gujranwala
            </p>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="relative h-72 sm:h-96 lg:h-[420px] rounded-3xl overflow-hidden shadow-xl border border-[#B08968]/20 group">
              <Image
                src={treatment.heroImage}
                alt={treatment.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 40vw"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1F2421]/60 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 bg-[#FAF8F5]/90 backdrop-blur-md p-4 rounded-2xl border border-white/50 text-[#1F2421]">
                <p className="text-xs font-bold uppercase tracking-wider text-[#B08968]">
                  Insta Skin Clinical Protocol
                </p>
                <p className="text-xs sm:text-sm font-serif font-bold">
                  FDA-Approved Devices &bull; Highest Sterilization Hygiene
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Specs Bar (4 Columns) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="bg-[#F2EDE4] rounded-3xl p-6 sm:p-8 border border-[#B08968]/25 shadow-sm">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 divide-y md:divide-y-0 md:divide-x divide-[#B08968]/20">
            <div className="pt-4 md:pt-0 md:px-4">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-xl bg-[#FAF8F5] flex items-center justify-center text-[#B08968] shadow-sm">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs uppercase tracking-wider text-[#5C5852] font-semibold">
                    Duration
                  </span>
                  <p className="font-serif font-bold text-lg text-[#1F2421]">
                    {treatment.specs.duration}
                  </p>
                </div>
              </div>
              <p className="text-xs text-[#5C5852] pl-1">
                {treatment.specs.durationSub}
              </p>
            </div>

            <div className="pt-4 md:pt-0 md:px-4">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-xl bg-[#FAF8F5] flex items-center justify-center text-[#B08968] shadow-sm">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs uppercase tracking-wider text-[#5C5852] font-semibold">
                    Downtime
                  </span>
                  <p className="font-serif font-bold text-lg text-[#1F2421]">
                    {treatment.specs.downtime}
                  </p>
                </div>
              </div>
              <p className="text-xs text-[#5C5852] pl-1">
                {treatment.specs.downtimeSub}
              </p>
            </div>

            <div className="pt-4 md:pt-0 md:px-4">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-xl bg-[#FAF8F5] flex items-center justify-center text-[#B08968] shadow-sm">
                  <Calendar className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs uppercase tracking-wider text-[#5C5852] font-semibold">
                    Protocol
                  </span>
                  <p className="font-serif font-bold text-lg text-[#1F2421]">
                    {treatment.specs.sessions}
                  </p>
                </div>
              </div>
              <p className="text-xs text-[#5C5852] pl-1">
                {treatment.specs.sessionsSub}
              </p>
            </div>

            <div className="pt-4 md:pt-0 md:px-4">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-xl bg-[#FAF8F5] flex items-center justify-center text-[#1E6B52] shadow-sm">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs uppercase tracking-wider text-[#5C5852] font-semibold">
                    Results
                  </span>
                  <p className="font-serif font-bold text-lg text-[#1E6B52]">
                    {treatment.specs.results}
                  </p>
                </div>
              </div>
              <p className="text-xs text-[#5C5852] pl-1">
                {treatment.specs.resultsSub}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Clinical Overview */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="bg-[#FAF8F5] rounded-3xl p-8 sm:p-10 border border-[#B08968]/20 shadow-sm">
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#1F2421] mb-4">
            Clinical Overview
          </h2>
          <p className="text-base sm:text-lg text-[#5C5852] leading-relaxed">
            {treatment.overview}
          </p>
        </div>
      </section>

      {/* How It Works / Science */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-[#B08968]">
            The Science & Medical Mechanism
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1F2421] mt-2 mb-4">
            {treatment.howItWorksTitle}
          </h2>
          <p className="text-sm sm:text-base text-[#5C5852]">
            {treatment.howItWorksIntro}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {treatment.steps.map((step, idx) => (
            <div
              key={idx}
              className="bg-[#F2EDE4] rounded-3xl p-8 border border-[#B08968]/20 shadow-sm hover:border-[#B08968] transition-all"
            >
              <div className="w-12 h-12 rounded-2xl bg-[#1F2421] text-[#FAF8F5] font-serif font-bold text-lg flex items-center justify-center mb-6">
                {step.number}
              </div>
              <h3 className="font-serif font-bold text-xl text-[#1F2421] mb-3">
                {step.title}
              </h3>
              <p className="text-sm text-[#5C5852] leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Ideal Candidates */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="bg-[#1F2421] rounded-3xl p-8 sm:p-12 text-[#FAF8F5]">
          <div className="max-w-3xl mb-10">
            <span className="text-xs font-bold uppercase tracking-widest text-[#B08968]">
              Patient Suitability
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold mt-2 mb-4">
              Who Is an Ideal Candidate?
            </h2>
            <p className="text-sm sm:text-base text-[#FAF8F5]/75">
              Insta Skin Clinic customizes treatment parameters to your unique skin phototype, follicular thickness, and dermatological history.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {treatment.candidates.map((candidate, idx) => (
              <div
                key={idx}
                className="bg-white/5 rounded-2xl p-6 border border-white/10 hover:border-[#B08968]/50 transition-colors"
              >
                <div className="w-8 h-8 rounded-full bg-[#B08968]/20 text-[#B08968] flex items-center justify-center mb-4">
                  <Check className="w-4 h-4" />
                </div>
                <h3 className="font-serif font-bold text-lg mb-2 text-[#FAF8F5]">
                  {candidate.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#FAF8F5]/70 leading-relaxed">
                  {candidate.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pre & Post Care Protocol */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Pre-Care */}
          <div className="bg-[#F2EDE4] rounded-3xl p-8 border border-[#B08968]/20 shadow-sm">
            <h3 className="font-serif font-bold text-2xl text-[#1F2421] mb-6 flex items-center gap-3">
              <span className="w-9 h-9 rounded-xl bg-[#B08968]/20 text-[#8F6A48] flex items-center justify-center text-sm font-bold">
                01
              </span>
              Pre-Treatment Care
            </h3>
            <ul className="space-y-4">
              {treatment.preCare.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#B08968] shrink-0 mt-0.5" />
                  <span className="text-sm text-[#5C5852] leading-relaxed">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Post-Care */}
          <div className="bg-[#FAF8F5] rounded-3xl p-8 border border-[#1E6B52]/20 shadow-sm">
            <h3 className="font-serif font-bold text-2xl text-[#1F2421] mb-6 flex items-center gap-3">
              <span className="w-9 h-9 rounded-xl bg-[#1E6B52]/20 text-[#1E6B52] flex items-center justify-center text-sm font-bold">
                02
              </span>
              Post-Treatment Care
            </h3>
            <ul className="space-y-4">
              {treatment.postCare.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#1E6B52] shrink-0 mt-0.5" />
                  <span className="text-sm text-[#5C5852] leading-relaxed">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* FAQs (5 Questions) */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="text-center mb-10">
          <span className="text-xs font-bold uppercase tracking-widest text-[#B08968]">
            Got Questions?
          </span>
          <h2 className="font-serif text-3xl font-bold text-[#1F2421] mt-2 mb-3">
            Frequently Asked Questions
          </h2>
          <p className="text-sm text-[#5C5852]">
            Clinical answers from our board-certified dermatologists at Kashmir Road, Peoples Colony.
          </p>
        </div>

        <FaqAccordion items={treatment.faqs} defaultOpenIndex={0} />
      </section>

      {/* Bottom Conversion CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#1F2421] rounded-3xl p-8 sm:p-12 text-[#FAF8F5] text-center relative overflow-hidden border border-[#B08968]/30">
          <div className="relative z-10 max-w-2xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-widest text-[#B08968]">
              Personalized Evaluation
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold mt-2 mb-4">
              Begin Your Treatment at Insta Skin Clinic
            </h2>
            <p className="text-sm sm:text-base text-[#FAF8F5]/80 mb-8 leading-relaxed">
              Schedule your comprehensive skin and hair assessment with our doctor. Kashmir Rd, Sector W Peoples Colony, Gujranwala.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={encodedWhatsApp}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-emerald w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full font-bold text-sm shadow-lg transition-all"
              >
                <MessageCircle className="w-5 h-5" />
                Book via WhatsApp (+92 300 9353482)
              </a>
              <Link
                href="/contact"
                className="btn-outline-gold w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full font-bold text-sm text-[#FAF8F5] border-white/30 hover:border-[#B08968] transition-all"
              >
                View Clinic Directions
                <ArrowRight className="w-4 h-4 text-[#B08968]" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
