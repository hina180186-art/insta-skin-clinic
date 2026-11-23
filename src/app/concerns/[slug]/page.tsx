import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { CONCERNS } from "@/data/concerns";
import FaqAccordion from "@/components/FaqAccordion";
import {
  ChevronRight,
  Sparkles,
  MessageCircle,
  Phone,
  ArrowRight,
  Dna,
  Droplets,
  Activity,
  Sun,
  Layers,
  Shuffle,
  AlertTriangle,
  CheckCircle2,
} from "lucide-react";
import {
  MaskedReveal,
  FadeInUp,
  StaggerContainer,
  StaggerItem,
  LuxuryCard,
  AnimatedImage,
} from "@/components/MotionPrimitives";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return Object.keys(CONCERNS).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const concern = CONCERNS[slug];
  if (!concern) {
    return {
      title: "Concern Not Found | Insta Skin Clinic",
    };
  }
  return {
    title: `${concern.title} | Insta Skin Clinic Gujranwala`,
    description: concern.subtitle,
  };
}

function getCauseIcon(iconName: string) {
  switch (iconName) {
    case "dna":
      return <Dna className="w-6 h-6 text-[#B08968]" />;
    case "droplet":
      return <Droplets className="w-6 h-6 text-[#B08968]" />;
    case "activity":
      return <Activity className="w-6 h-6 text-[#B08968]" />;
    case "sun":
      return <Sun className="w-6 h-6 text-[#B08968]" />;
    case "layers":
      return <Layers className="w-6 h-6 text-[#B08968]" />;
    case "shuffle":
      return <Shuffle className="w-6 h-6 text-[#B08968]" />;
    default:
      return <Sparkles className="w-6 h-6 text-[#B08968]" />;
  }
}

export default async function ConcernDetailPage({ params }: Props) {
  const { slug } = await params;
  const concern = CONCERNS[slug];

  if (!concern) {
    notFound();
  }

  const encodedWhatsApp = `https://wa.me/923009353482?text=${encodeURIComponent(
    `Hi Insta Skin Clinic, I would like to consult about ${concern.title}. Please provide appointment availability.`
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
          <Link
            href="/#concerns"
            className="hover:text-[#B08968] transition-colors"
          >
            Skin & Hair Concerns
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-[#B08968]/60" />
          <span className="text-[#1F2421] font-semibold truncate">
            {concern.title}
          </span>
        </nav>
      </div>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          <div className="lg:col-span-7">
            <FadeInUp delay={0.1}>
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-[#B08968]/15 text-[#8F6A48] border border-[#B08968]/30 mb-4">
                <Sparkles className="w-3.5 h-3.5" />
                {concern.heroBadge}
              </span>
            </FadeInUp>

            <MaskedReveal delay={0.2}>
              <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1F2421] leading-tight mb-4">
                {concern.title}
              </h1>
            </MaskedReveal>

            <FadeInUp delay={0.3}>
              <p className="text-base sm:text-lg text-[#5C5852] leading-relaxed mb-8">
                {concern.subtitle}
              </p>
            </FadeInUp>

            <FadeInUp delay={0.4}>
              <div className="flex flex-col sm:flex-row gap-4 mb-6">
                <a
                  href={encodedWhatsApp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-emerald inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full font-bold text-sm shadow-md transition-all"
                >
                  <MessageCircle className="w-4 h-4" />
                  Consult via WhatsApp
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
                PMDC-Verified Dermatologists &bull; Sector W Peoples Colony,
                Gujranwala
              </p>
            </FadeInUp>
          </div>

          <div className="lg:col-span-5 relative">
            <AnimatedImage
              src={concern.heroImage}
              alt={concern.title}
              className="h-72 sm:h-96 lg:h-[420px]"
              imgClassName="h-72 sm:h-96 lg:h-[420px]"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-[#1F2421]/60 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-4 left-4 right-4 bg-[#FAF8F5]/90 backdrop-blur-md p-4 rounded-2xl border border-white/50 text-[#1F2421] pointer-events-none">
                <p className="text-xs font-bold uppercase tracking-wider text-[#B08968]">
                  Evidence-Based Care
                </p>
                <p className="text-xs sm:text-sm font-serif font-bold">
                  Root-Cause Diagnostic Assessment &bull; Zero Steroids
                </p>
              </div>
            </AnimatedImage>
          </div>
        </div>
      </section>

      {/* Clinical Overview */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <FadeInUp>
          <div className="bg-[#F2EDE4] rounded-3xl p-8 sm:p-10 border border-[#B08968]/20 shadow-sm">
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#1F2421] mb-4">
              Understanding This Condition
            </h2>
            <p className="text-base sm:text-lg text-[#5C5852] leading-relaxed">
              {concern.overview}
            </p>
          </div>
        </FadeInUp>
      </section>

      {/* Root Causes Section with Stagger & LuxuryCard */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <FadeInUp>
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-[#B08968]">
              Medical Etiology
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1F2421] mt-2 mb-4">
              {concern.causesTitle}
            </h2>
            <p className="text-sm sm:text-base text-[#5C5852]">
              {concern.causesIntro}
            </p>
          </div>
        </FadeInUp>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {concern.causes.map((cause, idx) => (
            <StaggerItem key={idx}>
              <LuxuryCard className="bg-[#FAF8F5] rounded-3xl p-8 border border-[#B08968]/25 shadow-sm h-full">
                <div className="w-12 h-12 rounded-2xl bg-[#B08968]/15 flex items-center justify-center mb-6">
                  {getCauseIcon(cause.iconName)}
                </div>
                <h3 className="font-serif font-bold text-xl text-[#1F2421] mb-3">
                  {cause.title}
                </h3>
                <p className="text-sm text-[#5C5852] leading-relaxed">
                  {cause.description}
                </p>
              </LuxuryCard>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </section>

      {/* What Fails vs What Works */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* What Fails */}
          <FadeInUp delay={0.1}>
            <LuxuryCard className="bg-[#FAF8F5] rounded-3xl p-8 border border-red-200 shadow-sm relative overflow-hidden h-full">
              <div className="w-10 h-10 rounded-xl bg-red-100 text-red-600 flex items-center justify-center mb-4">
                <AlertTriangle className="w-5 h-5" />
              </div>
              <h3 className="font-serif font-bold text-2xl text-[#1F2421] mb-4">
                {concern.failsTitle}
              </h3>
              <p className="text-sm sm:text-base text-[#5C5852] leading-relaxed">
                {concern.failsDescription}
              </p>
            </LuxuryCard>
          </FadeInUp>

          {/* What Works */}
          <FadeInUp delay={0.2}>
            <LuxuryCard className="bg-[#FAF8F5] rounded-3xl p-8 border border-[#1E6B52]/40 shadow-sm relative overflow-hidden h-full">
              <div className="w-10 h-10 rounded-xl bg-[#1E6B52]/15 text-[#1E6B52] flex items-center justify-center mb-4">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <h3 className="font-serif font-bold text-2xl text-[#1F2421] mb-4">
                {concern.worksTitle}
              </h3>
              <p className="text-sm sm:text-base text-[#5C5852] leading-relaxed">
                {concern.worksDescription}
              </p>
            </LuxuryCard>
          </FadeInUp>
        </div>
      </section>

      {/* Recommended Clinical Treatment Card */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <FadeInUp>
          <LuxuryCard className="bg-[#1F2421] rounded-3xl p-8 sm:p-10 text-[#FAF8F5] border border-[#B08968]/30 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#B08968]">
                Recommended Clinical Protocol
              </span>
              <h3 className="font-serif font-bold text-2xl sm:text-3xl mt-1 text-[#FAF8F5]">
                {concern.relatedTreatmentName}
              </h3>
              <p className="text-xs sm:text-sm text-[#FAF8F5]/70 mt-2 max-w-xl">
                Target this concern directly at our Peoples Colony clinic with
                FDA-cleared technology and doctor-supervised treatment courses.
              </p>
            </div>
            <Link
              href={`/treatments/${concern.relatedTreatmentSlug}`}
              className="btn-emerald shrink-0 inline-flex items-center gap-2 px-6 py-3.5 rounded-full font-bold text-sm shadow-md"
            >
              Explore Treatment
              <ArrowRight className="w-4 h-4" />
            </Link>
          </LuxuryCard>
        </FadeInUp>
      </section>

      {/* FAQs */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <FadeInUp>
          <div className="text-center mb-10">
            <span className="text-xs font-bold uppercase tracking-widest text-[#B08968]">
              Dermatologist Insights
            </span>
            <h2 className="font-serif text-3xl font-bold text-[#1F2421] mt-2 mb-3">
              Common Questions & Clinical Answers
            </h2>
            <p className="text-sm text-[#5C5852]">
              Evidence-based medical advice for Gujranwala patients.
            </p>
          </div>
          <FaqAccordion items={concern.faqs} defaultOpenIndex={0} />
        </FadeInUp>
      </section>

      {/* Bottom Conversion CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeInUp>
          <div className="bg-[#F2EDE4] rounded-3xl p-8 sm:p-12 text-center border border-[#B08968]/30 shadow-sm">
            <div className="max-w-2xl mx-auto">
              <span className="text-xs font-bold uppercase tracking-widest text-[#B08968]">
                Get Started
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1F2421] mt-2 mb-4">
                Schedule Your In-Depth Assessment
              </h2>
              <p className="text-sm sm:text-base text-[#5C5852] mb-8 leading-relaxed">
                Meet our board-certified dermatologists at Insta Skin Clinic,
                Kashmir Rd, Sector W Peoples Colony, Gujranwala.
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
                  className="btn-outline-gold w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full font-bold text-sm text-[#1F2421] border-[#B08968] transition-all"
                >
                  View Clinic Location & Hours
                  <ArrowRight className="w-4 h-4 text-[#B08968]" />
                </Link>
              </div>
            </div>
          </div>
        </FadeInUp>
      </section>
    </div>
  );
}
