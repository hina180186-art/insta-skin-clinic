import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { TREATMENTS } from "@/data/treatments";
import FaqAccordion from "@/components/FaqAccordion";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";
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

const COMPARISON_DATA: Record<
  string,
  {
    title: string;
    badge: string;
    description: string;
    beforeSrc: string;
    afterSrc: string;
    beforeLabel: string;
    afterLabel: string;
    beforeSub: string;
    afterSub: string;
    statLeftTitle: string;
    statLeftVal: string;
    statRightTitle: string;
    statRightVal: string;
  }
> = {
  "acne-scar-laser": {
    badge: "Verified Patient Outcome • Acne Scars",
    title: "Interactive Split-Slider: Atrophic Acne Scar Remodeling",
    description:
      "Interactive photographic comparison of a Pakistani female patient presenting with severe pitted, boxcar, and rolling scars across the cheek. Treated with multi-depth Fractional CO2 laser ablation and RF neocollagenesis at our Peoples Colony clinic. Notice the 85–90% scar elevation, textural remodeling, and natural skin glow.",
    beforeSrc: "/images/before-scars.jpg",
    afterSrc: "/images/after-scars.jpg",
    beforeLabel: "BEFORE",
    afterLabel: "AFTER",
    beforeSub: "ACTIVE PITTED & ROLLING SCARS",
    afterSub: "AFTER 3 SESSIONS (RF & LASER)",
    statLeftTitle: "Baseline Presentation",
    statLeftVal: "Severe Pitted & Boxcar Scars",
    statRightTitle: "3 Sessions Result",
    statRightVal: "85% - 90% Scar Elevation",
  },
  "laser-hair-removal": {
    badge: "Clinical Progress • Laser Hair Reduction",
    title: "Interactive Split-Slider: Triple Wavelength Clearance",
    description:
      "Witness follicle destruction and subsequent skin smoothing on stubborn facial hair. Treated with chilled sapphire contact triple-wavelength laser, leaving zero razor bumps or ingrown hairs.",
    beforeSrc:
      "https://images.unsplash.com/photo-1560750588-73207b1ef5b8?auto=format&fit=crop&w=1000&q=80",
    afterSrc:
      "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1000&q=80",
    beforeLabel: "BEFORE",
    afterLabel: "AFTER",
    beforeSub: "COARSE HORMONAL FOLLICLES",
    afterSub: "AFTER 6 SESSIONS (90% CLEARANCE)",
    statLeftTitle: "Baseline Density",
    statLeftVal: "Coarse Follicular Growth",
    statRightTitle: "Protocol Clearance",
    statRightVal: "90% Permanent Reduction",
  },
  hydrafacial: {
    badge: "Instant Glow • Vortex Extraction",
    title: "Interactive Split-Slider: Pore Clarification & Glass Glow",
    description:
      "Examine congested micro-comedones cleared via medical vortex suction, followed by deep hyaluronic acid and antioxidant saturation for a radiant finish.",
    beforeSrc:
      "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&w=1000&q=80",
    afterSrc:
      "https://images.unsplash.com/photo-1512290900672-1f0236a28189?auto=format&fit=crop&w=1000&q=80",
    beforeLabel: "BEFORE",
    afterLabel: "AFTER",
    beforeSub: "CONGESTED SEBUM & PORES",
    afterSub: "POST HYDRAFACIAL MD GLOW",
    statLeftTitle: "Baseline Epidermis",
    statLeftVal: "Dull, Congested Pores",
    statRightTitle: "Instant Result",
    statRightVal: "Glass Skin Hydration",
  },
  "prp-hair-restoration": {
    badge: "Trichology Medicine • Follicular Density",
    title: "Interactive Split-Slider: Scalp Density Regeneration",
    description:
      "Autologous growth factor micro-injections reactivate dormant root sheaths, reversing Norwood vertex thinning and increasing terminal strand caliper.",
    beforeSrc:
      "https://images.unsplash.com/photo-1585751119414-ef2636f8aede?auto=format&fit=crop&w=1000&q=80",
    afterSrc:
      "https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?auto=format&fit=crop&w=1000&q=80",
    beforeLabel: "BEFORE",
    afterLabel: "AFTER",
    beforeSub: "DIFFUSE VERTEX THINNING",
    afterSub: "AFTER 4 PRP SESSIONS",
    statLeftTitle: "Baseline Scalp",
    statLeftVal: "Miniaturized Vellus Hairs",
    statRightTitle: "Growth Outcome",
    statRightVal: "Terminal Follicle Density",
  },
};

export default async function TreatmentDetailPage({ params }: Props) {
  const { slug } = await params;
  const treatment = TREATMENTS[slug];

  if (!treatment) {
    notFound();
  }

  const comparison = COMPARISON_DATA[slug];

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
          <Link
            href="/#treatments"
            className="hover:text-[#B08968] transition-colors"
          >
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
            <FadeInUp delay={0.1}>
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-[#B08968]/15 text-[#8F6A48] border border-[#B08968]/30 mb-4">
                <Sparkles className="w-3.5 h-3.5" />
                {treatment.heroBadge}
              </span>
            </FadeInUp>

            <MaskedReveal delay={0.2}>
              <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1F2421] leading-tight mb-4">
                {treatment.title}
              </h1>
            </MaskedReveal>

            <FadeInUp delay={0.3}>
              <p className="text-base sm:text-lg text-[#5C5852] leading-relaxed mb-8">
                {treatment.subtitle}
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
                Doctor-conducted consultation &bull; Kashmir Rd, Sector W
                Peoples Colony, Gujranwala
              </p>
            </FadeInUp>
          </div>

          <div className="lg:col-span-5 relative">
            <AnimatedImage
              src={treatment.heroImage}
              alt={treatment.title}
              className="h-72 sm:h-96 lg:h-[420px]"
              imgClassName="h-72 sm:h-96 lg:h-[420px]"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-[#1F2421]/60 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-4 left-4 right-4 bg-[#FAF8F5]/90 backdrop-blur-md p-4 rounded-2xl border border-white/50 text-[#1F2421] pointer-events-none">
                <p className="text-xs font-bold uppercase tracking-wider text-[#B08968]">
                  Insta Skin Clinical Protocol
                </p>
                <p className="text-xs sm:text-sm font-serif font-bold">
                  FDA-Approved Devices &bull; Highest Sterilization Hygiene
                </p>
              </div>
            </AnimatedImage>
          </div>
        </div>
      </section>

      {/* Quick Specs Bar (4 Columns with Stagger & LuxuryCard) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          <StaggerItem>
            <LuxuryCard className="bg-[#F2EDE4] rounded-3xl p-6 border border-[#B08968]/25 shadow-sm h-full flex flex-col justify-between">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-xl bg-[#FAF8F5] flex items-center justify-center text-[#B08968] shadow-sm shrink-0">
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
            </LuxuryCard>
          </StaggerItem>

          <StaggerItem>
            <LuxuryCard className="bg-[#F2EDE4] rounded-3xl p-6 border border-[#B08968]/25 shadow-sm h-full flex flex-col justify-between">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-xl bg-[#FAF8F5] flex items-center justify-center text-[#B08968] shadow-sm shrink-0">
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
            </LuxuryCard>
          </StaggerItem>

          <StaggerItem>
            <LuxuryCard className="bg-[#F2EDE4] rounded-3xl p-6 border border-[#B08968]/25 shadow-sm h-full flex flex-col justify-between">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-xl bg-[#FAF8F5] flex items-center justify-center text-[#B08968] shadow-sm shrink-0">
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
            </LuxuryCard>
          </StaggerItem>

          <StaggerItem>
            <LuxuryCard className="bg-[#F2EDE4] rounded-3xl p-6 border border-[#B08968]/25 shadow-sm h-full flex flex-col justify-between">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-xl bg-[#FAF8F5] flex items-center justify-center text-[#1E6B52] shadow-sm shrink-0">
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
            </LuxuryCard>
          </StaggerItem>
        </StaggerContainer>
      </section>

      {/* Clinical Overview */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <FadeInUp>
          <div className="bg-[#FAF8F5] rounded-3xl p-8 sm:p-10 border border-[#B08968]/20 shadow-sm">
            <MaskedReveal>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#1F2421] mb-4">
                Clinical Overview
              </h2>
            </MaskedReveal>
            <p className="text-base sm:text-lg text-[#5C5852] leading-relaxed">
              {treatment.overview}
            </p>
          </div>
        </FadeInUp>
      </section>

      {/* Interactive Split-Slider Comparative Section */}
      {comparison && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
          <FadeInUp>
            <div className="bg-[#F2EDE4] rounded-3xl p-6 sm:p-10 lg:p-12 border border-[#B08968]/30 shadow-xl">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                <div className="lg:col-span-6 space-y-5">
                  <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1E6B52]/10 border border-[#1E6B52]/20">
                    <span className="w-2 h-2 rounded-full bg-[#1E6B52]" />
                    <span className="text-xs font-bold text-[#1E6B52] uppercase tracking-wider">
                      {comparison.badge}
                    </span>
                  </div>
                  <MaskedReveal>
                    <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1F2421]">
                      {comparison.title}
                    </h2>
                  </MaskedReveal>
                  <p className="text-sm sm:text-base text-[#5C5852] leading-relaxed">
                    {comparison.description}
                  </p>
                  <div className="grid grid-cols-2 gap-3 text-xs text-[#1F2421] pt-2">
                    <div className="p-3.5 bg-[#FAF8F5] rounded-xl border border-[#B08968]/20 shadow-sm">
                      <span className="text-[10px] text-[#B08968] font-bold uppercase block tracking-wider">
                        {comparison.statLeftTitle}
                      </span>
                      <strong className="text-xs sm:text-sm text-[#1F2421] mt-0.5 block">
                        {comparison.statLeftVal}
                      </strong>
                    </div>
                    <div className="p-3.5 bg-[#FAF8F5] rounded-xl border border-[#1E6B52]/30 shadow-sm">
                      <span className="text-[10px] text-[#1E6B52] font-bold uppercase block tracking-wider">
                        {comparison.statRightTitle}
                      </span>
                      <strong className="text-xs sm:text-sm text-[#1E6B52] mt-0.5 block">
                        {comparison.statRightVal}
                      </strong>
                    </div>
                  </div>
                  <div className="pt-2">
                    <a
                      href={encodedWhatsApp}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-emerald px-7 py-3.5 text-xs font-bold inline-flex items-center gap-2 shadow-lg"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>Consult Doctor on Similar Results</span>
                    </a>
                  </div>
                </div>
                <div className="lg:col-span-6">
                  <div className="relative bg-[#FAF8F5] p-2 sm:p-3 rounded-3xl border border-[#B08968]/30 shadow-2xl">
                    <BeforeAfterSlider
                      beforeSrc={comparison.beforeSrc}
                      afterSrc={comparison.afterSrc}
                      beforeLabel={comparison.beforeLabel}
                      afterLabel={comparison.afterLabel}
                      beforeSub={comparison.beforeSub}
                      afterSub={comparison.afterSub}
                      aspectRatio="aspect-[4/3] sm:aspect-[4/5]"
                    />
                    <p className="text-center text-xs text-[#5C5852] mt-2.5 font-medium">
                      ↔ Drag the golden slider left & right to examine texture elevation
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </FadeInUp>
        </section>
      )}

      {/* How It Works / Science with Stagger & LuxuryCard */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <FadeInUp>
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-[#B08968]">
              The Science & Medical Mechanism
            </span>
            <MaskedReveal>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1F2421] mt-2 mb-4">
                {treatment.howItWorksTitle}
              </h2>
            </MaskedReveal>
            <p className="text-sm sm:text-base text-[#5C5852]">
              {treatment.howItWorksIntro}
            </p>
          </div>
        </FadeInUp>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {treatment.steps.map((step, idx) => (
            <StaggerItem key={idx}>
              <LuxuryCard className="bg-[#F2EDE4] rounded-3xl p-8 border border-[#B08968]/20 shadow-sm h-full">
                <div className="w-12 h-12 rounded-2xl bg-[#1F2421] text-[#FAF8F5] font-serif font-bold text-lg flex items-center justify-center mb-6">
                  {step.number}
                </div>
                <h3 className="font-serif font-bold text-xl text-[#1F2421] mb-3">
                  {step.title}
                </h3>
                <p className="text-sm text-[#5C5852] leading-relaxed">
                  {step.description}
                </p>
              </LuxuryCard>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </section>

      {/* Ideal Candidates */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <FadeInUp>
          <div className="bg-[#1F2421] rounded-3xl p-8 sm:p-12 text-[#FAF8F5]">
            <div className="max-w-3xl mb-10">
              <span className="text-xs font-bold uppercase tracking-widest text-[#B08968]">
                Patient Suitability
              </span>
              <MaskedReveal>
                <h2 className="font-serif text-3xl sm:text-4xl font-bold mt-2 mb-4">
                  Who Is an Ideal Candidate?
                </h2>
              </MaskedReveal>
              <p className="text-sm sm:text-base text-[#FAF8F5]/75">
                Insta Skin Clinic customizes treatment parameters to your unique
                skin phototype, follicular thickness, and dermatological history.
              </p>
            </div>

            <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {treatment.candidates.map((candidate, idx) => (
                <StaggerItem key={idx}>
                  <LuxuryCard className="bg-white/5 rounded-2xl p-6 border border-white/10 h-full">
                    <div className="w-8 h-8 rounded-full bg-[#B08968]/20 text-[#B08968] flex items-center justify-center mb-4">
                      <Check className="w-4 h-4" />
                    </div>
                    <h3 className="font-serif font-bold text-lg mb-2 text-[#FAF8F5]">
                      {candidate.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#FAF8F5]/70 leading-relaxed">
                      {candidate.description}
                    </p>
                  </LuxuryCard>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </FadeInUp>
      </section>

      {/* Pre & Post Care Protocol */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Pre-Care */}
          <FadeInUp delay={0.1}>
            <LuxuryCard className="bg-[#F2EDE4] rounded-3xl p-8 border border-[#B08968]/20 shadow-sm h-full">
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
            </LuxuryCard>
          </FadeInUp>

          {/* Post-Care */}
          <FadeInUp delay={0.2}>
            <LuxuryCard className="bg-[#FAF8F5] rounded-3xl p-8 border border-[#1E6B52]/20 shadow-sm h-full">
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
            </LuxuryCard>
          </FadeInUp>
        </div>
      </section>

      {/* FAQs (5 Questions) */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <FadeInUp>
          <div className="text-center mb-10">
            <span className="text-xs font-bold uppercase tracking-widest text-[#B08968]">
              Got Questions?
            </span>
            <MaskedReveal>
              <h2 className="font-serif text-3xl font-bold text-[#1F2421] mt-2 mb-3">
                Frequently Asked Questions
              </h2>
            </MaskedReveal>
            <p className="text-sm text-[#5C5852]">
              Clinical answers from our board-certified dermatologists at Kashmir
              Road, Peoples Colony.
            </p>
          </div>
          <FaqAccordion items={treatment.faqs} defaultOpenIndex={0} />
        </FadeInUp>
      </section>

      {/* Bottom Conversion CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeInUp>
          <div className="bg-[#1F2421] rounded-3xl p-8 sm:p-12 text-[#FAF8F5] text-center relative overflow-hidden border border-[#B08968]/30">
            <div className="relative z-10 max-w-2xl mx-auto">
              <span className="text-xs font-bold uppercase tracking-widest text-[#B08968]">
                Personalized Evaluation
              </span>
              <MaskedReveal>
                <h2 className="font-serif text-3xl sm:text-4xl font-bold mt-2 mb-4">
                  Begin Your Treatment at Insta Skin Clinic
                </h2>
              </MaskedReveal>
              <p className="text-sm sm:text-base text-[#FAF8F5]/80 mb-8 leading-relaxed">
                Schedule your comprehensive skin and hair assessment with our
                doctor. Kashmir Rd, Sector W Peoples Colony, Gujranwala.
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
        </FadeInUp>
      </section>
    </div>
  );
}
