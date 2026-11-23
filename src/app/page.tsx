"use client";

import React from "react";
import Link from "next/link";
import {
  Star,
  ShieldCheck,
  Zap,
  Sparkles,
  CheckCircle2,
  Award,
  Activity,
  Sun,
  Layers,
  Droplets,
  UserCheck,
  Clock,
  Repeat,
  ArrowRight,
  MessageCircle,
  MapPin,
  PhoneCall,
  Touchpad,
} from "lucide-react";
import { motion } from "framer-motion";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";
import {
  MaskedReveal,
  FadeInUp,
  StaggerContainer,
  StaggerItem,
  LuxuryCard,
  AnimatedImage,
  AnimatedCounter,
  CountUpNumber,
  InfiniteMarquee,
} from "@/components/MotionPrimitives";

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-12 pb-20 lg:pt-20 lg:pb-32 bg-gradient-to-b from-[#FAF8F5] via-[#F2EDE4]/40 to-[#FAF8F5]">
        <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-[#B08968]/10 blur-3xl pointer-events-none" />
        <div className="absolute top-1/2 -left-32 w-80 h-80 rounded-full bg-[#1E6B52]/5 blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Column: Copy & CTAs */}
            <div className="lg:col-span-7 space-y-6">
              {/* Rating Pill Badge */}
              <FadeInUp delay={0.1}>
                <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#F2EDE4] border border-[#B08968]/30 shadow-sm">
                  <span className="flex items-center text-amber-500">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-amber-400 text-amber-400"
                      />
                    ))}
                  </span>
                  <span className="text-xs font-bold text-[#1F2421]">
                    4.9 ★ Rating
                  </span>
                  <span className="text-xs text-[#5C5852]">
                    based on 139 Google Reviews
                  </span>
                </div>
              </FadeInUp>

              {/* Masked Upward Line Reveal Headline */}
              <div className="space-y-1">
                <MaskedReveal delay={0.15}>
                  <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#1F2421] leading-[1.12]">
                    Where Clinical Science
                  </h1>
                </MaskedReveal>
                <MaskedReveal delay={0.25}>
                  <span className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#B08968] italic leading-[1.12] block">
                    Meets Quiet Luxury.
                  </span>
                </MaskedReveal>
              </div>

              {/* Subtitle */}
              <FadeInUp delay={0.35}>
                <p className="text-base sm:text-lg text-[#5C5852] max-w-2xl leading-relaxed">
                  Gujranwala&apos;s premier medical aesthetics, laser
                  dermatology, and hair restoration clinic. Directed by
                  certified aesthetic physicians providing FDA-approved
                  clinical technologies in a discrete, tranquil med-spa
                  environment on Kashmir Road.
                </p>
              </FadeInUp>

              {/* Action Buttons */}
              <FadeInUp delay={0.45}>
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
                  <motion.a
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    href="https://wa.me/923009353482?text=Hello%20Insta%20Skin%20Clinic,%20I%20would%20like%20to%20book%20a%20consultation%20appointment%20with%20the%20doctor."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-emerald px-8 py-4 text-base font-semibold shadow-lg inline-flex items-center justify-center gap-2"
                  >
                    <MessageCircle className="w-5 h-5" />
                    <span>Book Doctor Consultation</span>
                  </motion.a>
                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Link
                      href="/contact"
                      className="btn-outline-gold px-7 py-4 text-base font-semibold inline-flex items-center justify-center"
                    >
                      <span>Consultation Builder</span>
                    </Link>
                  </motion.div>
                </div>
              </FadeInUp>

              {/* Clinical Badges */}
              <FadeInUp delay={0.55}>
                <div className="pt-6 border-t border-[#B08968]/20 grid grid-cols-3 gap-4 text-left">
                  <div>
                    <div className="flex items-center gap-1.5 text-xs font-bold text-[#1F2421]">
                      <ShieldCheck className="w-4 h-4 text-[#B08968]" />
                      PMDC Verified
                    </div>
                    <p className="text-[11px] text-[#5C5852] mt-0.5">
                      Certified Medical Doctors
                    </p>
                  </div>
                  <div>
                    <div className="flex items-center gap-1.5 text-xs font-bold text-[#1F2421]">
                      <Zap className="w-4 h-4 text-[#B08968]" />
                      FDA-Approved
                    </div>
                    <p className="text-[11px] text-[#5C5852] mt-0.5">
                      Gold Standard Laser Systems
                    </p>
                  </div>
                  <div>
                    <div className="flex items-center gap-1.5 text-xs font-bold text-[#1F2421]">
                      <Sparkles className="w-4 h-4 text-[#B08968]" />
                      100% Sterile
                    </div>
                    <p className="text-[11px] text-[#5C5852] mt-0.5">
                      Medical Spa Hygiene Protocols
                    </p>
                  </div>
                </div>
              </FadeInUp>
            </div>

            {/* Right Column: Visual Frame with Animated Image */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                <AnimatedImage
                  src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1200&q=80"
                  alt="Insta Skin Clinic Gujranwala State-of-the-Art Treatment Suite"
                  className="w-full h-[480px]"
                  imgClassName="w-full h-[480px]"
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1F2421]/60 via-transparent to-transparent pointer-events-none" />
                  <div className="absolute bottom-6 left-6 right-6 pl-4 sm:pl-48 text-white pointer-events-none z-10">
                    <span className="inline-block px-2.5 py-1 rounded bg-[#B08968] text-white text-[11px] font-bold uppercase tracking-wider mb-1">
                      Clinic Ambiance
                    </span>
                    <p className="font-serif text-lg font-semibold text-[#FAF8F5]">
                      Kashmir Rd, Sector W Peoples Colony
                    </p>
                    <p className="text-xs text-[#EFE8DE]/80">
                      Designed for ultimate privacy, safety, and comfort.
                    </p>
                  </div>
                </AnimatedImage>

                {/* Floating Card 1: 15,000+ Patients */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{
                    opacity: 1,
                    y: [0, 6, 0],
                  }}
                  transition={{
                    opacity: { delay: 0.6, duration: 0.6 },
                    y: { repeat: Infinity, duration: 4, ease: "easeInOut" },
                  }}
                  className="absolute -bottom-4 -left-4 sm:-bottom-5 sm:-left-5 bg-[#FAF8F5]/95 backdrop-blur-md border border-[#B08968]/40 rounded-2xl p-4 shadow-xl max-w-[210px] hidden sm:block z-20"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#1E6B52]/10 text-[#1E6B52] flex items-center justify-center font-bold shrink-0">
                      <CheckCircle2 className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="font-serif font-bold text-lg text-[#1F2421] leading-none">
                        <CountUpNumber end={15000} formatCommas={true} suffix="+" />
                      </div>
                      <div className="text-[11px] text-[#5C5852] mt-0.5 font-medium leading-tight">
                        Satisfied Gujranwala Patients
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Floating Card 2: 4.9 Rating */}
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{
                    opacity: 1,
                    y: [0, -6, 0],
                  }}
                  transition={{
                    opacity: { delay: 0.7, duration: 0.6 },
                    y: { repeat: Infinity, duration: 3.5, ease: "easeInOut" },
                  }}
                  className="absolute -top-5 -right-3 sm:-top-6 sm:-right-4 bg-[#FAF8F5]/95 backdrop-blur-md border border-[#B08968]/40 rounded-2xl p-4 shadow-xl hidden sm:flex items-center gap-3 z-20"
                >
                  <div className="w-10 h-10 rounded-full bg-amber-500/10 text-amber-600 flex items-center justify-center font-bold shrink-0">
                    <Award className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-[#1F2421]">
                      Gujranwala&apos;s Choice
                    </div>
                    <div className="text-[11px] text-[#5C5852] font-semibold flex items-center gap-1 mt-0.5">
                      <span className="text-[#1F2421]">
                        <CountUpNumber end={4.9} decimals={1} suffix=" ★" />
                      </span>
                      <span>
                        (<CountUpNumber end={139} /> Reviews)
                      </span>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Bar with Animated Counter */}
      <section className="bg-[#1F2421] text-[#FAF8F5] py-10 border-y border-[#B08968]/20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center divide-y lg:divide-y-0 lg:divide-x divide-[#B08968]/20">
            <div className="p-4">
              <div className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#D8C3A5]">
                <CountUpNumber end={4.9} decimals={1} suffix=" ★" />
              </div>
              <p className="text-xs sm:text-sm text-[#EFE8DE]/80 mt-1 uppercase tracking-wider font-medium">
                Google Rating
              </p>
              <span className="text-[11px] text-[#B08968]">
                <CountUpNumber end={139} suffix="+ Verified Reviews" />
              </span>
            </div>
            <div className="p-4">
              <div className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#D8C3A5]">
                <CountUpNumber end={15000} formatCommas={true} suffix="+" />
              </div>
              <p className="text-xs sm:text-sm text-[#EFE8DE]/80 mt-1 uppercase tracking-wider font-medium">
                Procedures Completed
              </p>
              <span className="text-[11px] text-[#B08968]">
                Skin, Hair & Laser
              </span>
            </div>
            <div className="p-4">
              <div className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#D8C3A5]">
                <CountUpNumber end={10} suffix="+" />
              </div>
              <p className="text-xs sm:text-sm text-[#EFE8DE]/80 mt-1 uppercase tracking-wider font-medium">
                Years Clinical Mastery
              </p>
              <span className="text-[11px] text-[#B08968]">
                PMDC Certified Doctors
              </span>
            </div>
            <div className="p-4">
              <div className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#D8C3A5]">
                <CountUpNumber end={100} suffix="%" />
              </div>
              <p className="text-xs sm:text-sm text-[#EFE8DE]/80 mt-1 uppercase tracking-wider font-medium">
                FDA-Approved Lasers
              </p>
              <span className="text-[11px] text-[#B08968]">
                Zero Compromise Safety
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Browse by Concern Section with Stagger Reveal & Luxury Lift */}
      <section className="py-20 lg:py-28 bg-[#FAF8F5]" id="concerns">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInUp>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-xs uppercase font-bold tracking-[0.25em] text-[#B08968] block mb-2">
                Personalized Dermatology
              </span>
              <MaskedReveal>
                <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1F2421]">
                  Browse by Your Concern
                </h2>
              </MaskedReveal>
              <div className="w-16 h-0.5 bg-[#B08968] mx-auto my-4" />
              <p className="text-[#5C5852] text-base">
                Select your primary concern to discover our customized medical
                protocols designed specifically for South Asian skin and hair
                biology.
              </p>
            </div>
          </FadeInUp>

          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <StaggerItem>
              <LuxuryCard className="rounded-2xl p-7 bg-[#F2EDE4] border border-[#B08968]/30 block group relative overflow-hidden h-full">
                <Link href="/concerns/hair-fall-thinning" className="block h-full">
                  <div className="w-12 h-12 rounded-xl bg-[#FAF8F5] border border-[#B08968]/30 flex items-center justify-center text-[#B08968] mb-5 group-hover:scale-110 transition-transform duration-300">
                    <Activity className="w-6 h-6" />
                  </div>
                  <h3 className="font-serif text-xl font-bold text-[#1F2421] mb-2 group-hover:text-[#B08968] transition-colors">
                    Hair Fall & Thinning
                  </h3>
                  <p className="text-sm text-[#5C5852] mb-4">
                    Crown thinning, male/female pattern alopecia, and postpartum
                    hair loss addressed with regenerative PRP & exosome therapies.
                  </p>
                  <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#B08968] group-hover:translate-x-1 transition-transform">
                    <span>Explore Hair Restoration Protocols</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </Link>
              </LuxuryCard>
            </StaggerItem>

            <StaggerItem>
              <LuxuryCard className="rounded-2xl p-7 bg-[#F2EDE4] border border-[#B08968]/30 block group relative overflow-hidden h-full">
                <Link href="/concerns/pigmentation-melasma" className="block h-full">
                  <div className="w-12 h-12 rounded-xl bg-[#FAF8F5] border border-[#B08968]/30 flex items-center justify-center text-[#B08968] mb-5 group-hover:scale-110 transition-transform duration-300">
                    <Sun className="w-6 h-6" />
                  </div>
                  <h3 className="font-serif text-xl font-bold text-[#1F2421] mb-2 group-hover:text-[#B08968] transition-colors">
                    Melasma & Dark Spots
                  </h3>
                  <p className="text-sm text-[#5C5852] mb-4">
                    Stubborn dermal melasma, sun freckles, and post-inflammatory
                    hyperpigmentation safely targeted with specialized Q-switched
                    lasers and medical peels.
                  </p>
                  <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#B08968] group-hover:translate-x-1 transition-transform">
                    <span>Explore Pigmentation Protocols</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </Link>
              </LuxuryCard>
            </StaggerItem>

            <StaggerItem>
              <LuxuryCard className="rounded-2xl p-7 bg-[#F2EDE4] border border-[#B08968]/30 block group relative overflow-hidden h-full">
                <Link href="/concerns/acne-scars-texture" className="block h-full">
                  <div className="w-12 h-12 rounded-xl bg-[#FAF8F5] border border-[#B08968]/30 flex items-center justify-center text-[#B08968] mb-5 group-hover:scale-110 transition-transform duration-300">
                    <Layers className="w-6 h-6" />
                  </div>
                  <h3 className="font-serif text-xl font-bold text-[#1F2421] mb-2 group-hover:text-[#B08968] transition-colors">
                    Acne Scars & Texture
                  </h3>
                  <p className="text-sm text-[#5C5852] mb-4">
                    Rolling, boxcar, and icepick scars resurfaced via Fractional
                    CO2 laser ablation combined with subcision and collagen
                    stimulation.
                  </p>
                  <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#B08968] group-hover:translate-x-1 transition-transform">
                    <span>Explore Acne Laser Protocols</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </Link>
              </LuxuryCard>
            </StaggerItem>

            <StaggerItem>
              <LuxuryCard className="rounded-2xl p-7 bg-[#F2EDE4] border border-[#B08968]/30 block group relative overflow-hidden h-full">
                <Link href="/treatments/laser-hair-removal" className="block h-full">
                  <div className="w-12 h-12 rounded-xl bg-[#FAF8F5] border border-[#B08968]/30 flex items-center justify-center text-[#B08968] mb-5 group-hover:scale-110 transition-transform duration-300">
                    <Sparkles className="w-6 h-6" />
                  </div>
                  <h3 className="font-serif text-xl font-bold text-[#1F2421] mb-2 group-hover:text-[#B08968] transition-colors">
                    Unwanted Facial & Body Hair
                  </h3>
                  <p className="text-sm text-[#5C5852] mb-4">
                    PCOS-induced facial hirsutism, full body, underarms, and
                    beard contouring with painless contact-cooled triple
                    wavelength laser technology.
                  </p>
                  <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#B08968] group-hover:translate-x-1 transition-transform">
                    <span>Explore Laser Hair Packages</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </Link>
              </LuxuryCard>
            </StaggerItem>

            <StaggerItem>
              <LuxuryCard className="rounded-2xl p-7 bg-[#F2EDE4] border border-[#B08968]/30 block group relative overflow-hidden h-full">
                <Link href="/treatments/hydrafacial" className="block h-full">
                  <div className="w-12 h-12 rounded-xl bg-[#FAF8F5] border border-[#B08968]/30 flex items-center justify-center text-[#B08968] mb-5 group-hover:scale-110 transition-transform duration-300">
                    <Droplets className="w-6 h-6" />
                  </div>
                  <h3 className="font-serif text-xl font-bold text-[#1F2421] mb-2 group-hover:text-[#B08968] transition-colors">
                    Dull & Congested Skin
                  </h3>
                  <p className="text-sm text-[#5C5852] mb-4">
                    Clogged pores, stubborn blackheads, and environmental
                    pollution damage clarified instantly with signature Medical
                    HydraFacial MD infusion.
                  </p>
                  <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#B08968] group-hover:translate-x-1 transition-transform">
                    <span>Explore HydraFacial Experience</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </Link>
              </LuxuryCard>
            </StaggerItem>

            <StaggerItem>
              <LuxuryCard className="rounded-2xl p-7 bg-[#F2EDE4] border border-[#B08968]/30 block group relative overflow-hidden h-full">
                <Link href="/contact" className="block h-full">
                  <div className="w-12 h-12 rounded-xl bg-[#FAF8F5] border border-[#B08968]/30 flex items-center justify-center text-[#B08968] mb-5 group-hover:scale-110 transition-transform duration-300">
                    <UserCheck className="w-6 h-6" />
                  </div>
                  <h3 className="font-serif text-xl font-bold text-[#1F2421] mb-2 group-hover:text-[#B08968] transition-colors">
                    Custom Doctor Assessment
                  </h3>
                  <p className="text-sm text-[#5C5852] mb-4">
                    Unsure which protocol fits your skin type? Meet with our
                    clinical doctors for a comprehensive dermatological skin
                    analysis on Kashmir Road.
                  </p>
                  <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#B08968] group-hover:translate-x-1 transition-transform">
                    <span>Book Clinic Consultation</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </Link>
              </LuxuryCard>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      {/* Featured Treatments Grid with Stagger & Luxury Lift */}
      <section className="py-20 lg:py-28 bg-[#F2EDE4]/60 border-t border-[#B08968]/20" id="treatments">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInUp>
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
              <div>
                <span className="text-xs uppercase font-bold tracking-[0.25em] text-[#B08968] block mb-2">
                  Our Signature Procedures
                </span>
                <MaskedReveal>
                  <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1F2421]">
                    Clinical Treatments
                  </h2>
                </MaskedReveal>
              </div>
              <p className="text-sm sm:text-base text-[#5C5852] max-w-md">
                Administered exclusively with international FDA-cleared devices
                and medically backed regenerative serums.
              </p>
            </div>
          </FadeInUp>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Treatment 1: Laser Hair Removal */}
            <StaggerItem>
              <LuxuryCard className="bg-[#FAF8F5] rounded-3xl overflow-hidden border border-[#B08968]/30 shadow-md flex flex-col justify-between h-full">
                <div>
                  <div className="relative h-64 overflow-hidden">
                    <AnimatedImage
                      src="https://images.unsplash.com/photo-1560750588-73207b1ef5b8?auto=format&fit=crop&w=800&q=80"
                      alt="Triple Wavelength Laser Hair Removal Gujranwala"
                      className="h-64 rounded-none border-0 shadow-none"
                      imgClassName="h-64"
                    />
                    <div className="absolute top-4 left-4 bg-[#1F2421]/80 backdrop-blur-md text-[#FAF8F5] text-xs font-semibold px-3 py-1 rounded-full border border-[#B08968]/30 z-10 pointer-events-none">
                      Painless Ice-Cooling
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between text-xs text-[#5C5852] mb-2">
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5 text-[#B08968]" /> 30–60 Mins
                      </span>
                      <span className="flex items-center gap-1">
                        <Repeat className="w-3.5 h-3.5 text-[#B08968]" /> 6–8 Sessions
                      </span>
                    </div>
                    <h3 className="font-serif text-2xl font-bold text-[#1F2421] mb-2">
                      Laser Hair Removal
                    </h3>
                    <p className="text-sm text-[#5C5852] leading-relaxed mb-4">
                      State-of-the-art Alexandrite, Diode & Nd:YAG triple
                      wavelength laser for permanent reduction on all Pakistani
                      skin tones with sub-zero chilled sapphire tips.
                    </p>
                  </div>
                </div>
                <div className="p-6 pt-0 flex items-center justify-between border-t border-[#B08968]/15 mt-2">
                  <Link
                    href="/treatments/laser-hair-removal"
                    className="text-sm font-bold text-[#B08968] hover:text-[#9A7454] inline-flex items-center gap-1"
                  >
                    <span>View Treatment Guide</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <a
                    href="https://wa.me/923009353482?text=Hello%20Insta%20Skin%20Clinic,%20I%20am%20inquiring%20about%20Laser%20Hair%20Removal%20packages."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-emerald-700 hover:text-emerald-800 text-sm font-semibold inline-flex items-center gap-1"
                  >
                    <MessageCircle className="w-4 h-4" /> WhatsApp
                  </a>
                </div>
              </LuxuryCard>
            </StaggerItem>

            {/* Treatment 2: HydraFacial MD */}
            <StaggerItem>
              <LuxuryCard className="bg-[#FAF8F5] rounded-3xl overflow-hidden border border-[#B08968]/30 shadow-md flex flex-col justify-between h-full">
                <div>
                  <div className="relative h-64 overflow-hidden">
                    <AnimatedImage
                      src="https://images.unsplash.com/photo-1512290900672-1f0236a28189?auto=format&fit=crop&w=800&q=80"
                      alt="Signature Medical HydraFacial MD at Insta Skin Clinic"
                      className="h-64 rounded-none border-0 shadow-none"
                      imgClassName="h-64"
                    />
                    <div className="absolute top-4 left-4 bg-[#1F2421]/80 backdrop-blur-md text-[#FAF8F5] text-xs font-semibold px-3 py-1 rounded-full border border-[#B08968]/30 z-10 pointer-events-none">
                      Zero Downtime Glow
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between text-xs text-[#5C5852] mb-2">
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5 text-[#B08968]" /> 45–60 Mins
                      </span>
                      <span className="flex items-center gap-1">
                        <Repeat className="w-3.5 h-3.5 text-[#B08968]" /> Monthly Care
                      </span>
                    </div>
                    <h3 className="font-serif text-2xl font-bold text-[#1F2421] mb-2">
                      Signature HydraFacial MD
                    </h3>
                    <p className="text-sm text-[#5C5852] leading-relaxed mb-4">
                      Patented 4-step Vortex-Fusion technology: deep cleanse,
                      chemical peel exfoliation, painless vacuum extraction, and
                      intense hyaluronic hydration infusion.
                    </p>
                  </div>
                </div>
                <div className="p-6 pt-0 flex items-center justify-between border-t border-[#B08968]/15 mt-2">
                  <Link
                    href="/treatments/hydrafacial"
                    className="text-sm font-bold text-[#B08968] hover:text-[#9A7454] inline-flex items-center gap-1"
                  >
                    <span>View Treatment Guide</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <a
                    href="https://wa.me/923009353482?text=Hello%20Insta%20Skin%20Clinic,%20I%20would%20like%20to%20book%20a%20Signature%20HydraFacial%20MD%20session."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-emerald-700 hover:text-emerald-800 text-sm font-semibold inline-flex items-center gap-1"
                  >
                    <MessageCircle className="w-4 h-4" /> WhatsApp
                  </a>
                </div>
              </LuxuryCard>
            </StaggerItem>

            {/* Treatment 3: PRP Hair Restoration */}
            <StaggerItem>
              <LuxuryCard className="bg-[#FAF8F5] rounded-3xl overflow-hidden border border-[#B08968]/30 shadow-md flex flex-col justify-between h-full">
                <div>
                  <div className="relative h-64 overflow-hidden">
                    <AnimatedImage
                      src="https://images.unsplash.com/photo-1585751119414-ef2636f8aede?auto=format&fit=crop&w=800&q=80"
                      alt="PRP Scalp & Hair Restoration Therapy Gujranwala"
                      className="h-64 rounded-none border-0 shadow-none"
                      imgClassName="h-64"
                    />
                    <div className="absolute top-4 left-4 bg-[#1F2421]/80 backdrop-blur-md text-[#FAF8F5] text-xs font-semibold px-3 py-1 rounded-full border border-[#B08968]/30 z-10 pointer-events-none">
                      Autologous Growth Factors
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between text-xs text-[#5C5852] mb-2">
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5 text-[#B08968]" /> 45 Mins
                      </span>
                      <span className="flex items-center gap-1">
                        <Repeat className="w-3.5 h-3.5 text-[#B08968]" /> 4–6 Sessions
                      </span>
                    </div>
                    <h3 className="font-serif text-2xl font-bold text-[#1F2421] mb-2">
                      PRP Hair Restoration
                    </h3>
                    <p className="text-sm text-[#5C5852] leading-relaxed mb-4">
                      High-concentration Platelet-Rich Plasma microinjected
                      directly into dormant follicles to halt thinning, reverse
                      miniaturization, and spark new density.
                    </p>
                  </div>
                </div>
                <div className="p-6 pt-0 flex items-center justify-between border-t border-[#B08968]/15 mt-2">
                  <Link
                    href="/treatments/prp-hair-restoration"
                    className="text-sm font-bold text-[#B08968] hover:text-[#9A7454] inline-flex items-center gap-1"
                  >
                    <span>View Treatment Guide</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <a
                    href="https://wa.me/923009353482?text=Hello%20Insta%20Skin%20Clinic,%20I%20would%20like%20to%20inquire%20about%20PRP%20Hair%20Therapy."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-emerald-700 hover:text-emerald-800 text-sm font-semibold inline-flex items-center gap-1"
                  >
                    <MessageCircle className="w-4 h-4" /> WhatsApp
                  </a>
                </div>
              </LuxuryCard>
            </StaggerItem>

            {/* Treatment 4: Fractional CO2 */}
            <StaggerItem>
              <LuxuryCard className="bg-[#FAF8F5] rounded-3xl overflow-hidden border border-[#B08968]/30 shadow-md flex flex-col justify-between h-full">
                <div>
                  <div className="relative h-64 overflow-hidden">
                    <AnimatedImage
                      src="https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=800&q=80"
                      alt="Fractional CO2 Laser for Acne Scars Gujranwala"
                      className="h-64 rounded-none border-0 shadow-none"
                      imgClassName="h-64"
                    />
                    <div className="absolute top-4 left-4 bg-[#1F2421]/80 backdrop-blur-md text-[#FAF8F5] text-xs font-semibold px-3 py-1 rounded-full border border-[#B08968]/30 z-10 pointer-events-none">
                      Deep Scar Remodeling
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between text-xs text-[#5C5852] mb-2">
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5 text-[#B08968]" /> 60 Mins
                      </span>
                      <span className="flex items-center gap-1">
                        <Repeat className="w-3.5 h-3.5 text-[#B08968]" /> 3–5 Sessions
                      </span>
                    </div>
                    <h3 className="font-serif text-2xl font-bold text-[#1F2421] mb-2">
                      Fractional CO2 Resurfacing
                    </h3>
                    <p className="text-sm text-[#5C5852] leading-relaxed mb-4">
                      Micro-ablative fractional carbon dioxide laser precisely
                      breaks fibrotic scar tissue, tightening enlarged pores and
                      inducing massive neocollagenesis.
                    </p>
                  </div>
                </div>
                <div className="p-6 pt-0 flex items-center justify-between border-t border-[#B08968]/15 mt-2">
                  <Link
                    href="/treatments/acne-scar-laser"
                    className="text-sm font-bold text-[#B08968] hover:text-[#9A7454] inline-flex items-center gap-1"
                  >
                    <span>View Treatment Guide</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <a
                    href="https://wa.me/923009353482?text=Hello%20Insta%20Skin%20Clinic,%20I%20am%20interested%20in%20Fractional%20CO2%20Laser%20for%20Acne%20Scars."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-emerald-700 hover:text-emerald-800 text-sm font-semibold inline-flex items-center gap-1"
                  >
                    <MessageCircle className="w-4 h-4" /> WhatsApp
                  </a>
                </div>
              </LuxuryCard>
            </StaggerItem>

            {/* Treatment 5: Carbon Peel */}
            <StaggerItem>
              <LuxuryCard className="bg-[#FAF8F5] rounded-3xl overflow-hidden border border-[#B08968]/30 shadow-md flex flex-col justify-between h-full">
                <div>
                  <div className="relative h-64 overflow-hidden">
                    <AnimatedImage
                      src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=800&q=80"
                      alt="Hollywood Carbon Laser Peel Gujranwala"
                      className="h-64 rounded-none border-0 shadow-none"
                      imgClassName="h-64"
                    />
                    <div className="absolute top-4 left-4 bg-[#1F2421]/80 backdrop-blur-md text-[#FAF8F5] text-xs font-semibold px-3 py-1 rounded-full border border-[#B08968]/30 z-10 pointer-events-none">
                      Pore Shrinking & Radiance
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between text-xs text-[#5C5852] mb-2">
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5 text-[#B08968]" /> 45 Mins
                      </span>
                      <span className="flex items-center gap-1">
                        <Repeat className="w-3.5 h-3.5 text-[#B08968]" /> 3–4 Sessions
                      </span>
                    </div>
                    <h3 className="font-serif text-2xl font-bold text-[#1F2421] mb-2">
                      Carbon Laser Peel
                    </h3>
                    <p className="text-sm text-[#5C5852] leading-relaxed mb-4">
                      Activated liquid carbon paste blasted with Q-switched Nd:YAG
                      laser. Clears deep trapped sebum, refines stubborn pore
                      texture, and delivers instant red-carpet brightness.
                    </p>
                  </div>
                </div>
                <div className="p-6 pt-0 flex items-center justify-between border-t border-[#B08968]/15 mt-2">
                  <Link
                    href="/contact"
                    className="text-sm font-bold text-[#B08968] hover:text-[#9A7454] inline-flex items-center gap-1"
                  >
                    <span>Book Appointment</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <a
                    href="https://wa.me/923009353482?text=Hello%20Insta%20Skin%20Clinic,%20I%20want%20to%20book%20a%20Carbon%20Laser%20Peel."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-emerald-700 hover:text-emerald-800 text-sm font-semibold inline-flex items-center gap-1"
                  >
                    <MessageCircle className="w-4 h-4" /> WhatsApp
                  </a>
                </div>
              </LuxuryCard>
            </StaggerItem>

            {/* Treatment 6: Peels & Pigmentation */}
            <StaggerItem>
              <LuxuryCard className="bg-[#FAF8F5] rounded-3xl overflow-hidden border border-[#B08968]/30 shadow-md flex flex-col justify-between h-full">
                <div>
                  <div className="relative h-64 overflow-hidden">
                    <AnimatedImage
                      src="https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=800&q=80"
                      alt="Medical Chemical Peels and Melasma Care"
                      className="h-64 rounded-none border-0 shadow-none"
                      imgClassName="h-64"
                    />
                    <div className="absolute top-4 left-4 bg-[#1F2421]/80 backdrop-blur-md text-[#FAF8F5] text-xs font-semibold px-3 py-1 rounded-full border border-[#B08968]/30 z-10 pointer-events-none">
                      Even Skin Tone
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between text-xs text-[#5C5852] mb-2">
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5 text-[#B08968]" /> 30 Mins
                      </span>
                      <span className="flex items-center gap-1">
                        <Repeat className="w-3.5 h-3.5 text-[#B08968]" /> 3–6 Sessions
                      </span>
                    </div>
                    <h3 className="font-serif text-2xl font-bold text-[#1F2421] mb-2">
                      Dermatological Peels
                    </h3>
                    <p className="text-sm text-[#5C5852] leading-relaxed mb-4">
                      Physician-strength TCA, Glycolic, Mandelic, and modified
                      Jessner cocktails that safely eliminate stubborn
                      hyperpigmentation without post-inflammatory rebound.
                    </p>
                  </div>
                </div>
                <div className="p-6 pt-0 flex items-center justify-between border-t border-[#B08968]/15 mt-2">
                  <Link
                    href="/concerns/pigmentation-melasma"
                    className="text-sm font-bold text-[#B08968] hover:text-[#9A7454] inline-flex items-center gap-1"
                  >
                    <span>View Pigmentation Guide</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <a
                    href="https://wa.me/923009353482?text=Hello%20Insta%20Skin%20Clinic,%20I%20am%20consulting%20regarding%20Melasma%20Chemical%20Peels."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-emerald-700 hover:text-emerald-800 text-sm font-semibold inline-flex items-center gap-1"
                  >
                    <MessageCircle className="w-4 h-4" /> WhatsApp
                  </a>
                </div>
              </LuxuryCard>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      {/* Interactive Draggable Before & After Showcase */}
      <section className="py-20 lg:py-28 bg-[#FAF8F5] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <FadeInUp className="lg:col-span-5 space-y-6">
              <span className="text-xs uppercase font-bold tracking-[0.25em] text-[#B08968] block">
                Verified Clinical Transformation
              </span>
              <MaskedReveal>
                <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1F2421]">
                  Interactive Before & After
                </h2>
              </MaskedReveal>
              <p className="text-[#5C5852] leading-relaxed">
                Drag the golden divider left or right to inspect the dramatic
                epidermal regeneration achieved with our specialized Fractional
                CO2 Laser & PRP protocol on Kashmir Road.
              </p>

              <div className="bg-[#F2EDE4] p-5 rounded-2xl border border-[#B08968]/30 space-y-3">
                <div className="text-xs font-bold text-[#1F2421] uppercase tracking-wider flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#1E6B52]" />
                  Case Study: Deep Acne Scars & Enlarged Pores
                </div>
                <div className="grid grid-cols-2 gap-3 text-xs text-[#5C5852]">
                  <div>
                    <strong>Protocol:</strong> 4x Fractional CO2 + PRP
                  </div>
                  <div>
                    <strong>Interval:</strong> 4 Weeks Apart
                  </div>
                  <div>
                    <strong>Downtime:</strong> 3–4 Days Mild Pinkness
                  </div>
                  <div>
                    <strong>Patient Age:</strong> 26 (Gujranwala)
                  </div>
                </div>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-center gap-4">
                <Link
                  href="/results"
                  className="btn-gold px-6 py-3.5 text-sm font-semibold w-full sm:w-auto"
                >
                  <span>View Full Gallery (15+ Cases)</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <a
                  href="https://wa.me/923009353482?text=Hello%20Insta%20Skin%20Clinic,%20I%20saw%20your%20Before%20and%20After%20results%20and%20want%20to%20know%20if%20my%20scars%20can%20be%20treated."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline-gold px-6 py-3.5 text-sm font-semibold w-full sm:w-auto"
                >
                  <MessageCircle className="w-4 h-4 text-[#1E6B52]" />
                  <span>Ask Doctor About Scars</span>
                </a>
              </div>
            </FadeInUp>

            <FadeInUp delay={0.2} className="lg:col-span-7">
              <div className="relative bg-[#F2EDE4] p-3 rounded-3xl border-2 border-[#B08968]/30 shadow-2xl">
                <BeforeAfterSlider
                  beforeSrc="/images/before-scars.jpg"
                  afterSrc="/images/after-scars.jpg"
                  beforeLabel="BEFORE"
                  afterLabel="AFTER"
                  beforeSub="ACTIVE PITTED & ROLLING SCARS"
                  afterSub="AFTER 3 SESSIONS (RF & LASER)"
                  aspectRatio="aspect-[4/3] sm:aspect-[4/5]"
                />
                <p className="text-center text-xs text-[#5C5852] mt-3">
                  <Touchpad className="w-3.5 h-3.5 inline text-[#B08968] mr-1" />
                  Interactive: Click and drag slider left/right to compare
                </p>
              </div>
            </FadeInUp>
          </div>
        </div>
      </section>

      {/* Infinite Google Reviews Marquee with Smooth Pause-on-Hover */}
      <section className="py-20 bg-[#1F2421] text-[#FAF8F5] overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 text-center">
          <FadeInUp>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FAF8F5]/10 border border-[#B08968]/40 mb-3">
              <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
              <span className="text-xs font-bold text-[#EFE8DE]">
                Google Rating 4.9 ★ (139 Verified Reviews)
              </span>
            </div>
            <MaskedReveal>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#FAF8F5]">
                Real Voices from Gujranwala
              </h2>
            </MaskedReveal>
            <p className="text-sm text-[#EFE8DE]/70 mt-2 max-w-xl mx-auto">
              Read authentic patient experiences from Kashmir Road, Peoples Colony.
              Hover cursor over any review to pause.
            </p>
          </FadeInUp>
        </div>

        <div className="relative w-full overflow-hidden py-4">
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#1F2421] to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#1F2421] to-transparent z-10 pointer-events-none" />

          <InfiniteMarquee speed={45}>
            {[
              {
                text: "Best laser clinic in Gujranwala without a doubt! I took 6 sessions of laser hair removal on Kashmir Rd. The staff is so gentle and the machine has zero pain. My skin is completely smooth now.",
                author: "Fatima Aslam",
                sub: "Laser Hair Removal Patient",
                initials: "FA",
              },
              {
                text: "I had severe acne scars from college days. The doctor evaluated my skin thoroughly and recommended 4 sessions of Fractional CO2 laser with PRP. The results are unbelievable. My scars are 80% filled.",
                author: "Usman Bilal",
                sub: "Fractional CO2 Laser Patient",
                initials: "UB",
              },
              {
                text: "Got their Signature HydraFacial before my wedding. The clinic is spotless, smells like a luxury spa in Lahore or Dubai, and my skin glowed for 3 weeks straight! Highly recommended to every bride.",
                author: "Zainab Qureshi",
                sub: "HydraFacial MD Patient",
                initials: "ZQ",
              },
              {
                text: "Suffered from crown hair thinning. Started PRP sessions here 3 months ago. The doctor takes blood under complete sterile conditions. Hair shedding stopped completely and new baby hair is coming.",
                author: "Hamza Riaz",
                sub: "PRP Hair Restoration",
                initials: "HR",
              },
              {
                text: "Honest advice and genuine FDA machines. Most salons in Gujranwala use cheap Chinese lasers that burn skin. Insta Skin Clinic is fully professional with certified doctors. 5 stars well deserved.",
                author: "Dr. Sarah Khan",
                sub: "Medical Colleague & Patient",
                initials: "SK",
              },
            ].map((rev, i) => (
              <div
                key={i}
                className="w-[360px] bg-[#272E2A] p-6 rounded-2xl border border-[#B08968]/30 shrink-0 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex text-amber-400">
                      {[...Array(5)].map((_, s) => (
                        <Star key={s} className="w-4 h-4 fill-amber-400" />
                      ))}
                    </div>
                    <span className="text-[11px] text-[#B08968] font-semibold">
                      Google Review
                    </span>
                  </div>
                  <p className="text-sm text-[#EFE8DE]/90 leading-relaxed italic">
                    &ldquo;{rev.text}&rdquo;
                  </p>
                </div>
                <div className="mt-4 pt-4 border-t border-[#B08968]/20 flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-[#B08968]/20 text-[#D8C3A5] font-bold flex items-center justify-center text-xs">
                    {rev.initials}
                  </div>
                  <div>
                    <div className="text-sm font-bold text-white">
                      {rev.author}
                    </div>
                    <div className="text-[11px] text-[#B08968]">{rev.sub}</div>
                  </div>
                </div>
              </div>
            ))}
          </InfiniteMarquee>
        </div>
      </section>

      {/* Location, Map & Hours Section */}
      <section className="py-20 bg-[#F2EDE4]/60 border-t border-[#B08968]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInUp>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-xs uppercase font-bold tracking-[0.25em] text-[#B08968] block mb-2">
                Visit Our Gujranwala Clinic
              </span>
              <MaskedReveal>
                <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1F2421]">
                  Location & Clinic Hours
                </h2>
              </MaskedReveal>
              <div className="w-16 h-0.5 bg-[#B08968] mx-auto my-4" />
              <p className="text-sm text-[#5C5852]">
                Conveniently situated in Sector W, Peoples Colony on Kashmir Road.
                Easy access with private parking.
              </p>
            </div>
          </FadeInUp>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {/* Info Cards with Stagger */}
            <StaggerContainer className="lg:col-span-5 space-y-5">
              <StaggerItem>
                <LuxuryCard className="bg-[#FAF8F5] p-6 rounded-2xl border border-[#B08968]/30 shadow-sm space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#B08968]/15 text-[#B08968] flex items-center justify-center shrink-0">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-serif font-bold text-lg text-[#1F2421]">
                        Clinic Address
                      </h4>
                      <p className="text-sm text-[#5C5852] mt-1 leading-relaxed">
                        Kashmir Rd, Sector W Peoples Colony, Gujranwala, Punjab
                        52250, Pakistan.
                      </p>
                    </div>
                  </div>
                </LuxuryCard>
              </StaggerItem>

              <StaggerItem>
                <LuxuryCard className="bg-[#FAF8F5] p-6 rounded-2xl border border-[#B08968]/30 shadow-sm space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#1E6B52]/15 text-[#1E6B52] flex items-center justify-center shrink-0">
                      <Clock className="w-5 h-5" />
                    </div>
                    <div className="w-full">
                      <h4 className="font-serif font-bold text-lg text-[#1F2421]">
                        Operating Hours
                      </h4>
                      <div className="mt-2 space-y-1 text-sm text-[#5C5852]">
                        <div className="flex justify-between border-b border-[#B08968]/15 pb-1">
                          <span>Monday – Saturday:</span>
                          <strong className="text-[#1F2421]">
                            11:00 AM – 9:00 PM
                          </strong>
                        </div>
                        <div className="flex justify-between pt-1">
                          <span>Sunday:</span>
                          <strong className="text-[#B08968]">
                            By Appointment Only
                          </strong>
                        </div>
                      </div>
                    </div>
                  </div>
                </LuxuryCard>
              </StaggerItem>

              <StaggerItem>
                <LuxuryCard className="bg-[#FAF8F5] p-6 rounded-2xl border border-[#B08968]/30 shadow-sm space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#1E6B52]/15 text-[#1E6B52] flex items-center justify-center shrink-0">
                      <PhoneCall className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-serif font-bold text-lg text-[#1F2421]">
                        Direct Contact
                      </h4>
                      <p className="text-xs text-[#5C5852] mt-0.5">
                        Call or WhatsApp our patient coordination desk.
                      </p>
                      <div className="mt-3 flex flex-wrap gap-2">
                        <a
                          href="tel:+923009353482"
                          className="btn-outline-gold px-4 py-2 text-xs font-bold"
                        >
                          Call +92 300 9353482
                        </a>
                        <a
                          href="https://wa.me/923009353482?text=Hello%20Insta%20Skin%20Clinic,%20I%20would%20like%20directions%20and%20consultation%20timings."
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-emerald px-4 py-2 text-xs font-bold inline-flex items-center gap-1.5"
                        >
                          <MessageCircle className="w-3.5 h-3.5" /> WhatsApp Desk
                        </a>
                      </div>
                    </div>
                  </div>
                </LuxuryCard>
              </StaggerItem>
            </StaggerContainer>

            {/* Google Map */}
            <FadeInUp delay={0.2} className="lg:col-span-7">
              <div className="h-full min-h-[380px] rounded-3xl overflow-hidden border-2 border-[#B08968]/30 shadow-xl relative bg-[#FAF8F5]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3377.1633519539356!2d74.1923292!3d32.1728282!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391f298cb3d21b71%3A0xe552ff90df111718!2sPeoples%20Colony%2C%20Gujranwala%2C%20Punjab!5e0!3m2!1sen!2s!4v1700000000000!5m2!1sen!2s"
                  className="w-full h-full min-h-[380px] border-0"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Insta Skin Clinic Kashmir Rd Peoples Colony Gujranwala Map"
                />
              </div>
            </FadeInUp>
          </div>
        </div>
      </section>
    </>
  );
}
