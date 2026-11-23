import React from "react";
import Link from "next/link";
import { Check, ShieldCheck, Sparkles, Lock, ArrowRight, MessageCircle } from "lucide-react";

export const metadata = {
  title: "About Our Doctors & Clinic Standards | Insta Skin Clinic Gujranwala",
  description:
    "Learn about Insta Skin Clinic's PMDC certified doctors, FDA-approved laser technology, and hospital-grade sterilization standards in Gujranwala on Kashmir Rd.",
};

export default function AboutPage() {
  return (
    <>
      {/* Breadcrumbs */}
      <div className="bg-[#F2EDE4]/60 py-3 border-b border-[#B08968]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-xs text-[#5C5852] flex items-center gap-2">
          <Link href="/" className="hover:text-[#B08968]">Home</Link>
          <span>/</span>
          <span className="text-[#1F2421] font-semibold">About Us</span>
        </div>
      </div>

      {/* Hero Header */}
      <section className="py-16 lg:py-24 bg-gradient-to-b from-[#FAF8F5] to-[#F2EDE4]/50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F2EDE4] border border-[#B08968]/30">
                <span className="w-2 h-2 rounded-full bg-[#1E6B52]" />
                <span className="text-xs font-bold text-[#1F2421]">PMDC Verified Aesthetic Dermatology</span>
              </div>

              <h1 className="font-serif text-4xl sm:text-5xl font-bold text-[#1F2421] leading-tight">
                Setting the Benchmark for Medical Aesthetics in Gujranwala.
              </h1>

              <p className="text-base text-[#5C5852] leading-relaxed">
                Insta Skin Clinic was established with a singular medical conviction: that aesthetic transformations must never compromise biological safety. Situated in the heart of Peoples Colony on Kashmir Road, our practice bridges rigorous dermatology with tranquil quiet luxury.
              </p>

              <p className="text-sm text-[#5C5852] leading-relaxed">
                Unlike commercial spas that employ unqualified operators and unverified imported lasers, our clinic is governed strictly by licensed medical doctors. We invest exclusively in FDA-cleared energy devices and pharmaceutical-grade serums engineered specifically for Fitzpatrick Skin Types III through V.
              </p>

              <div className="pt-4 flex flex-wrap gap-4">
                <div className="flex items-center gap-2 text-xs font-semibold text-[#1F2421]">
                  <Check className="w-4 h-4 text-[#1E6B52]" />
                  <span>Over 15,000 Procedures</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-semibold text-[#1F2421]">
                  <Check className="w-4 h-4 text-[#1E6B52]" />
                  <span>4.9 ★ Rating (139 Google Reviews)</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-semibold text-[#1F2421]">
                  <Check className="w-4 h-4 text-[#1E6B52]" />
                  <span>Kashmir Rd, Peoples Colony</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-2 border-[#B08968]/30 bg-[#F2EDE4]">
                <img
                  src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1000&q=80"
                  alt="Insta Skin Clinic Reception and Consultation Ambiance Gujranwala"
                  className="w-full h-[450px] object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Doctors Section */}
      <section className="py-20 bg-[#FAF8F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs uppercase font-bold tracking-[0.25em] text-[#B08968] block mb-2">
              Our Clinical Faculty
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1F2421]">
              Directed by Certified Medical Doctors
            </h2>
            <div className="w-16 h-0.5 bg-[#B08968] mx-auto my-4" />
            <p className="text-sm text-[#5C5852]">
              Your skin is a vital organ. Every treatment at Insta Skin Clinic is supervised by medical practitioners with formal dermatological and laser credentials.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
            {/* Doctor 1 */}
            <div className="bg-[#F2EDE4] rounded-3xl p-8 border border-[#B08968]/30 shadow-lg luxury-card">
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
                <div className="w-32 h-32 rounded-2xl overflow-hidden border-2 border-[#B08968] shrink-0 shadow-md">
                  <img
                    src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=600&q=80"
                    alt="Lead Aesthetic Dermatologist Insta Skin Clinic Gujranwala"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="space-y-2 text-center sm:text-left">
                  <div className="inline-block px-2.5 py-0.5 rounded-full bg-[#1E6B52]/10 text-[#1E6B52] text-[11px] font-bold">
                    PMDC Verified Practitioner
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-[#1F2421]">Dr. M. S. Akhtar</h3>
                  <p className="text-xs text-[#B08968] font-bold uppercase tracking-wider">
                    Lead Aesthetic Physician & Laser Specialist
                  </p>
                  <p className="text-xs text-[#5C5852] leading-relaxed pt-2">
                    10+ years specializing in energy-based devices, Fractional CO2 scar remodeling, and autologous platelet trichology. Member of international aesthetic dermatological societies.
                  </p>
                  <div className="pt-3 text-xs text-[#1F2421] font-semibold flex flex-wrap gap-2 justify-center sm:justify-start">
                    <span className="bg-[#FAF8F5] px-2.5 py-1 rounded border border-[#B08968]/20">Fractional CO2</span>
                    <span className="bg-[#FAF8F5] px-2.5 py-1 rounded border border-[#B08968]/20">PRP Trichology</span>
                    <span className="bg-[#FAF8F5] px-2.5 py-1 rounded border border-[#B08968]/20">Laser Physics</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Doctor 2 */}
            <div className="bg-[#F2EDE4] rounded-3xl p-8 border border-[#B08968]/30 shadow-lg luxury-card">
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
                <div className="w-32 h-32 rounded-2xl overflow-hidden border-2 border-[#B08968] shrink-0 shadow-md">
                  <img
                    src="https://images.unsplash.com/photo-1594824813637-4467d58a8a30?auto=format&fit=crop&w=600&q=80"
                    alt="Senior Clinical Aesthetician Insta Skin Clinic"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="space-y-2 text-center sm:text-left">
                  <div className="inline-block px-2.5 py-0.5 rounded-full bg-[#1E6B52]/10 text-[#1E6B52] text-[11px] font-bold">
                    Certified Clinical Aesthetician
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-[#1F2421]">Dr. A. Noreen</h3>
                  <p className="text-xs text-[#B08968] font-bold uppercase tracking-wider">
                    Aesthetic Dermatology & Skin Health
                  </p>
                  <p className="text-xs text-[#5C5852] leading-relaxed pt-2">
                    Specialist in medical epidermal exfoliation, HydraFacial MD protocols, stubborn melasma peel therapy, and female laser hair management with complete clinical privacy.
                  </p>
                  <div className="pt-3 text-xs text-[#1F2421] font-semibold flex flex-wrap gap-2 justify-center sm:justify-start">
                    <span className="bg-[#FAF8F5] px-2.5 py-1 rounded border border-[#B08968]/20">HydraFacial MD</span>
                    <span className="bg-[#FAF8F5] px-2.5 py-1 rounded border border-[#B08968]/20">Chemical Peels</span>
                    <span className="bg-[#FAF8F5] px-2.5 py-1 rounded border border-[#B08968]/20">PCOS Hirsutism</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Comparison Table */}
      <section className="py-20 bg-[#1F2421] text-[#FAF8F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs uppercase font-bold tracking-[0.25em] text-[#D8C3A5] block mb-2">
              The Technology Distinction
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white">
              Why Medical Grade Laser Technology Matters
            </h2>
            <div className="w-16 h-0.5 bg-[#B08968] mx-auto my-4" />
            <p className="text-sm text-[#EFE8DE]/80">
              In Pakistan, many commercial salons market non-medical cosmetic lasers that risk thermal burns and paradoxical hair stimulation on brown skin. Here is how our hospital-grade systems compare:
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[640px]">
              <thead>
                <tr className="border-b-2 border-[#B08968]/40 text-xs font-bold uppercase tracking-wider text-[#D8C3A5]">
                  <th className="py-4 px-6 bg-[#272E2A]/70 rounded-tl-2xl">Safety & Efficacy Parameter</th>
                  <th className="py-4 px-6 bg-[#1E6B52]/40 text-white font-extrabold border-x border-[#B08968]/30">
                    Insta Skin Clinic (FDA-Approved Systems)
                  </th>
                  <th className="py-4 px-6 bg-[#272E2A]/40 text-gray-400 rounded-tr-2xl">
                    Standard Commercial Salons / Spas
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#B08968]/20 text-xs sm:text-sm">
                <tr className="hover:bg-white/5 transition-colors">
                  <td className="py-4 px-6 font-semibold text-[#EFE8DE]">Laser Wavelength Calibration</td>
                  <td className="py-4 px-6 bg-[#1E6B52]/20 font-bold text-emerald-300 border-x border-[#B08968]/20">
                    <Check className="w-4 h-4 inline mr-1 text-emerald-400" />
                    Triple wavelength (755nm + 808nm + 1064nm) targeting all hair depths safely
                  </td>
                  <td className="py-4 px-6 text-gray-400">Single uncalibrated diode or generic IPL with broad, scattered light</td>
                </tr>
                <tr className="hover:bg-white/5 transition-colors">
                  <td className="py-4 px-6 font-semibold text-[#EFE8DE]">Epidermal Cooling Protection</td>
                  <td className="py-4 px-6 bg-[#1E6B52]/20 font-bold text-emerald-300 border-x border-[#B08968]/20">
                    <Check className="w-4 h-4 inline mr-1 text-emerald-400" />
                    Integrated sub-zero (-10°C) Sapphire contact chilling prevents skin burns
                  </td>
                  <td className="py-4 px-6 text-gray-400">Basic external ice packs or weak fan cooling, high burn danger</td>
                </tr>
                <tr className="hover:bg-white/5 transition-colors">
                  <td className="py-4 px-6 font-semibold text-[#EFE8DE]">Practitioner Qualifications</td>
                  <td className="py-4 px-6 bg-[#1E6B52]/20 font-bold text-emerald-300 border-x border-[#B08968]/20">
                    <Check className="w-4 h-4 inline mr-1 text-emerald-400" />
                    Licensed medical doctors with specialized laser physics training
                  </td>
                  <td className="py-4 px-6 text-gray-400">Non-medical parlor staff with brief informal workshop certificates</td>
                </tr>
                <tr className="hover:bg-white/5 transition-colors">
                  <td className="py-4 px-6 font-semibold text-[#EFE8DE]">Pakistani Skin Safety (Fitzpatrick III-V)</td>
                  <td className="py-4 px-6 bg-[#1E6B52]/20 font-bold text-emerald-300 border-x border-[#B08968]/20">
                    <Check className="w-4 h-4 inline mr-1 text-emerald-400" />
                    Zero hyperpigmentation rebound; custom calibrated fluences for South Asian melanin
                  </td>
                  <td className="py-4 px-6 text-gray-400">Common post-inflammatory dark spots, blisters, or patchy results</td>
                </tr>
                <tr className="hover:bg-white/5 transition-colors">
                  <td className="py-4 px-6 font-semibold text-[#EFE8DE] rounded-bl-2xl">Sterilization & Single-Use Standards</td>
                  <td className="py-4 px-6 bg-[#1E6B52]/20 font-bold text-emerald-300 border-x border-[#B08968]/20">
                    <Check className="w-4 h-4 inline mr-1 text-emerald-400" />
                    Class-B medical autoclave + 100% disposable single-patient consumables
                  </td>
                  <td className="py-4 px-6 text-gray-400 rounded-br-2xl">Wipe-down with spirit only; reused tips and open serum bottles</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Sterile Protocols */}
      <section className="py-20 bg-[#FAF8F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs uppercase font-bold tracking-[0.25em] text-[#B08968] block mb-2">
              Hospital Standards
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1F2421]">Sterile Sanctuary Protocol</h2>
            <div className="w-16 h-0.5 bg-[#B08968] mx-auto my-4" />
            <p className="text-sm text-[#5C5852]">
              We adhere to strict hospital sterilization rules so you can experience pure rejuvenation with complete peace of mind.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[#F2EDE4] p-8 rounded-3xl border border-[#B08968]/30 shadow-md luxury-card">
              <div className="w-12 h-12 rounded-2xl bg-[#B08968] text-white flex items-center justify-center mb-6">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-xl font-bold text-[#1F2421] mb-2">Class-B Vacuum Autoclave</h3>
              <p className="text-xs text-[#5C5852] leading-relaxed">
                All metal clinical instruments, extraction tools, and micro-punches undergo high-pressure steam sterilization in medical autoclaves that destroy 100% of bacterial spores and viruses.
              </p>
            </div>

            <div className="bg-[#F2EDE4] p-8 rounded-3xl border border-[#B08968]/30 shadow-md luxury-card">
              <div className="w-12 h-12 rounded-2xl bg-[#1E6B52] text-white flex items-center justify-center mb-6">
                <Sparkles className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-xl font-bold text-[#1F2421] mb-2">100% Single-Use Disposables</h3>
              <p className="text-xs text-[#5C5852] leading-relaxed">
                Every HydraFacial tip, PRP vacuum tube, sterile insulin syringe, laser eye shield, and treatment drape is unsealed in front of the patient and discarded immediately after use.
              </p>
            </div>

            <div className="bg-[#F2EDE4] p-8 rounded-3xl border border-[#B08968]/30 shadow-md luxury-card">
              <div className="w-12 h-12 rounded-2xl bg-[#1F2421] text-white flex items-center justify-center mb-6">
                <Lock className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-xl font-bold text-[#1F2421] mb-2">Discrete Med-Spa Privacy</h3>
              <p className="text-xs text-[#5C5852] leading-relaxed">
                Soundproof private treatment suites with dedicated female staff for female patients. Private recovery lounges designed for zero cross-interaction and maximum discretion.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Box */}
      <section className="py-16 bg-[#F2EDE4] border-t border-[#B08968]/20">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-5">
          <h2 className="font-serif text-3xl font-bold text-[#1F2421]">Meet with Our Doctors on Kashmir Road</h2>
          <p className="text-sm text-[#5C5852] max-w-xl mx-auto">
            Schedule your comprehensive dermatological consultation today. Our medical team is ready to evaluate your skin and hair profile.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row justify-center items-center gap-4">
            <a
              href="https://wa.me/923009353482?text=Hello%20Insta%20Skin%20Clinic,%20I%20would%20like%20to%20book%20a%20doctor%20consultation%20appointment."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-emerald px-8 py-3.5 text-sm font-semibold"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Chat on WhatsApp (+92 300 9353482)</span>
            </a>
            <Link href="/contact" className="btn-outline-gold px-7 py-3.5 text-sm font-semibold">
              <span>View Clinic Location & Hours</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
