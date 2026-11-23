import React from "react";
import Link from "next/link";
import {
  MapPin,
  Clock,
  PhoneCall,
  MessageCircle,
  Navigation,
} from "lucide-react";
import ConsultationForm from "@/components/ConsultationForm";
import {
  MaskedReveal,
  FadeInUp,
  StaggerContainer,
  StaggerItem,
  LuxuryCard,
} from "@/components/MotionPrimitives";

export const metadata = {
  title: "Contact & Clinic Location | Insta Skin Clinic Gujranwala",
  description:
    "Contact Insta Skin Clinic on Kashmir Rd, Sector W Peoples Colony, Gujranwala. Book an aesthetic dermatology consultation via our interactive WhatsApp builder.",
};

export default function ContactPage() {
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
            Contact & Location
          </span>
        </div>
      </div>

      {/* Hero Header */}
      <section className="py-16 bg-gradient-to-b from-[#FAF8F5] to-[#F2EDE4]/40 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <FadeInUp delay={0.1}>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F2EDE4] border border-[#B08968]/30">
              <MapPin className="w-3.5 h-3.5 text-[#B08968]" />
              <span className="text-xs font-bold text-[#1F2421]">
                Kashmir Rd, Sector W Peoples Colony, Gujranwala
              </span>
            </div>
          </FadeInUp>

          <MaskedReveal delay={0.2}>
            <h1 className="font-serif text-4xl sm:text-5xl font-bold text-[#1F2421]">
              Connect with Our Clinic
            </h1>
          </MaskedReveal>

          <FadeInUp delay={0.3}>
            <p className="text-base text-[#5C5852] max-w-2xl mx-auto">
              Build your personalized consultation request below or connect
              directly with our medical desk via WhatsApp (+92 300 9353482).
            </p>
          </FadeInUp>
        </div>
      </section>

      {/* Main Content Grid */}
      <section className="py-16 bg-[#FAF8F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left: Consultation Builder Form */}
            <FadeInUp className="lg:col-span-7 bg-[#F2EDE4] rounded-3xl p-8 sm:p-10 border border-[#B08968]/30 shadow-xl">
              <div className="mb-8">
                <span className="text-xs uppercase font-bold tracking-[0.25em] text-[#B08968] block mb-1">
                  Fast-Track Clinical Appointment
                </span>
                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#1F2421]">
                  Skin & Hair Consultation Builder
                </h2>
                <p className="text-xs sm:text-sm text-[#5C5852] mt-2">
                  Fill in your treatment preferences. Submitting compiles a
                  formatted briefing directly to our senior doctor on WhatsApp
                  for immediate priority review.
                </p>
              </div>

              <ConsultationForm />
            </FadeInUp>

            {/* Right: Clinic Details */}
            <StaggerContainer className="lg:col-span-5 space-y-6">
              <StaggerItem>
                <LuxuryCard className="bg-[#FAF8F5] p-7 rounded-3xl border border-[#B08968]/30 shadow-md space-y-4">
                  <h3 className="font-serif text-xl font-bold text-[#1F2421] flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-[#B08968]" />
                    Clinic Location
                  </h3>
                  <p className="text-sm text-[#5C5852] leading-relaxed">
                    <strong>Insta Skin Clinic</strong>
                    <br />
                    Kashmir Rd, Sector W Peoples Colony,
                    <br />
                    Gujranwala, 52250, Punjab, Pakistan.
                  </p>
                  <div className="pt-2 text-xs text-[#5C5852] border-t border-[#B08968]/15 space-y-1">
                    <p>&bull; Landmark: Main Kashmir Road, central commercial avenue.</p>
                    <p>&bull; Dedicated on-site patient parking with security personnel.</p>
                    <p>&bull; Discrete quiet entrance designed for private patient arrivals.</p>
                  </div>
                  <a
                    href="https://maps.google.com/?q=Peoples+Colony+Gujranwala+Pakistan"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-outline-gold w-full py-2.5 text-xs font-bold mt-2 inline-flex items-center justify-center gap-2"
                  >
                    <Navigation className="w-4 h-4" />
                    <span>Open in Google Maps Navigation</span>
                  </a>
                </LuxuryCard>
              </StaggerItem>

              <StaggerItem>
                <LuxuryCard className="bg-[#FAF8F5] p-7 rounded-3xl border border-[#B08968]/30 shadow-md space-y-4">
                  <h3 className="font-serif text-xl font-bold text-[#1F2421] flex items-center gap-2">
                    <Clock className="w-5 h-5 text-[#B08968]" />
                    Consultation & Treatment Hours
                  </h3>
                  <div className="space-y-2 text-xs sm:text-sm text-[#5C5852]">
                    <div className="flex justify-between border-b border-[#B08968]/15 pb-2">
                      <span>Monday – Saturday:</span>
                      <strong className="text-[#1F2421]">
                        11:00 AM – 9:00 PM
                      </strong>
                    </div>
                    <div className="flex justify-between border-b border-[#B08968]/15 pb-2">
                      <span>Sunday:</span>
                      <strong className="text-[#B08968]">
                        By Exclusive Appointment
                      </strong>
                    </div>
                    <div className="flex justify-between pt-1">
                      <span>Doctor Consultation:</span>
                      <strong className="text-[#1E6B52]">
                        Daily Slot Availability
                      </strong>
                    </div>
                  </div>
                </LuxuryCard>
              </StaggerItem>

              <StaggerItem>
                <LuxuryCard className="bg-[#FAF8F5] p-7 rounded-3xl border border-[#B08968]/30 shadow-md space-y-3">
                  <h3 className="font-serif text-xl font-bold text-[#1F2421] flex items-center gap-2">
                    <PhoneCall className="w-5 h-5 text-[#1E6B52]" />
                    Direct Phone & WhatsApp
                  </h3>
                  <p className="text-xs text-[#5C5852]">
                    Have an urgent question regarding post-treatment care or upcoming doctor availability?
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3 pt-2">
                    <a
                      href="tel:+923009353482"
                      className="btn-gold py-2.5 px-4 text-xs font-bold flex-1 text-center"
                    >
                      Call Direct
                    </a>
                    <a
                      href="https://wa.me/923009353482"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-emerald py-2.5 px-4 text-xs font-bold flex-1 text-center inline-flex items-center justify-center gap-1.5"
                    >
                      <MessageCircle className="w-3.5 h-3.5" /> WhatsApp Desk
                    </a>
                  </div>
                </LuxuryCard>
              </StaggerItem>
            </StaggerContainer>
          </div>

          {/* Embedded Google Map */}
          <FadeInUp delay={0.2} className="mt-16 rounded-3xl overflow-hidden border-2 border-[#B08968]/30 shadow-2xl h-[420px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3377.1633519539356!2d74.1923292!3d32.1728282!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391f298cb3d21b71%3A0xe552ff90df111718!2sPeoples%20Colony%2C%20Gujranwala%2C%20Punjab!5e0!3m2!1sen!2s!4v1700000000000!5m2!1sen!2s"
              className="w-full h-full border-0"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Insta Skin Clinic Kashmir Rd Peoples Colony Gujranwala Map Location"
            />
          </FadeInUp>
        </div>
      </section>
    </>
  );
}
