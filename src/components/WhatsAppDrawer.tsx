"use client";

import React, { useState } from "react";
import { MessageCircle, X, Send } from "lucide-react";

export default function WhatsAppDrawer() {
  const [isOpen, setIsOpen] = useState(false);
  const [patientName, setPatientName] = useState("");
  const [concern, setConcern] = useState("Laser Hair Removal (Full Body / Face)");
  const [treatmentArea, setTreatmentArea] = useState("Full Face & Neck");
  const [preferredTime, setPreferredTime] = useState("Afternoon (11:00 AM – 3:00 PM)");
  const [notes, setNotes] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Hello Insta Skin Clinic! 🌿
I would like to book a clinical consultation with Dr. at your Gujranwala clinic (Kashmir Rd, Peoples Colony).

*Patient Name:* ${patientName || "Guest"}
*Primary Concern:* ${concern}
*Target Area:* ${treatmentArea}
*Preferred Time:* ${preferredTime}
*Details / Notes:* ${notes || "Please advise on doctor availability."}

Could you please confirm the earliest available consultation appointment? Thank you!`;

    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/923009353482?text=${encoded}`, "_blank");
    setIsOpen(false);
  };

  return (
    <>
      {/* Floating Action Button */}
      <div className="fixed bottom-6 right-6 z-40 flex items-center gap-3">
        <div className="hidden md:flex bg-[#1F2421]/90 backdrop-blur-md text-[#FAF8F5] text-xs font-medium py-1.5 px-3 rounded-full border border-[#B08968]/30 shadow-lg items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span>Doctor Available On WhatsApp</span>
        </div>
        <button
          onClick={() => setIsOpen(true)}
          aria-label="Open Quick Skin & Hair Assessment"
          className="relative w-14 h-14 rounded-full bg-[#1E6B52] hover:bg-[#16523F] text-white flex items-center justify-center shadow-2xl transition-transform hover:scale-110 ambient-pulse-ring focus:outline-none cursor-pointer"
        >
          <MessageCircle className="w-7 h-7" />
        </button>
      </div>

      {/* Drawer Overlay & Panel */}
      {isOpen && (
        <>
          <div
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 bg-black/60 z-50 backdrop-blur-sm transition-opacity"
          />
          <div className="fixed top-0 right-0 bottom-0 w-full sm:w-[450px] bg-[#FAF8F5] z-50 shadow-2xl flex flex-col justify-between p-6 sm:p-8 overflow-y-auto">
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-[#B08968]/20">
                <div>
                  <span className="text-[10px] uppercase font-bold tracking-widest text-[#B08968] block">
                    Instant Clinical Concierge
                  </span>
                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#1F2421]">
                    Skin & Hair Assessment
                  </h3>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  aria-label="Close Assessment Drawer"
                  className="p-2 rounded-lg text-[#5C5852] hover:text-[#1F2421] hover:bg-[#F2EDE4]"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <p className="text-xs text-[#5C5852] mt-4 mb-6 leading-relaxed">
                Select your areas of interest below. Our system will format a priority consultation request directly to our clinical WhatsApp desk at +92 300 9353482.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#1F2421] mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    value={patientName}
                    onChange={(e) => setPatientName(e.target.value)}
                    placeholder="e.g. Ayesha Khan"
                    className="w-full px-4 py-2.5 rounded-xl border border-[#B08968]/30 bg-white text-sm text-[#1F2421] focus:outline-none focus:border-[#B08968]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#1F2421] mb-1">
                    Primary Concern
                  </label>
                  <select
                    value={concern}
                    onChange={(e) => setConcern(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl border border-[#B08968]/30 bg-white text-sm text-[#1F2421] focus:outline-none focus:border-[#B08968]"
                  >
                    <option value="Laser Hair Removal (Full Body / Face)">Laser Hair Removal (Full Body / Face)</option>
                    <option value="Acne Scars & Texture (Fractional CO2)">Acne Scars & Texture (Fractional CO2)</option>
                    <option value="Signature HydraFacial MD (Pore Glow)">Signature HydraFacial MD (Pore Glow)</option>
                    <option value="PRP Hair Restoration (Thinning / Shedding)">PRP Hair Restoration (Thinning / Shedding)</option>
                    <option value="Melasma & Hyperpigmentation">Melasma & Hyperpigmentation</option>
                    <option value="Hollywood Carbon Laser Peel">Hollywood Carbon Laser Peel</option>
                    <option value="General Doctor Dermatology Consultation">General Doctor Dermatology Consultation</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#1F2421] mb-1">
                    Treatment Area
                  </label>
                  <select
                    value={treatmentArea}
                    onChange={(e) => setTreatmentArea(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl border border-[#B08968]/30 bg-white text-sm text-[#1F2421] focus:outline-none focus:border-[#B08968]"
                  >
                    <option value="Full Face & Neck">Full Face & Neck</option>
                    <option value="Cheeks & Forehead">Cheeks & Forehead</option>
                    <option value="Scalp & Crown (Hair)">Scalp & Crown (Hair)</option>
                    <option value="Full Body Laser">Full Body Laser</option>
                    <option value="Underarms & Arms">Underarms & Arms</option>
                    <option value="Beard Line / Neck (Men)">Beard Line / Neck (Men)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#1F2421] mb-1">
                    Preferred Time for Visit
                  </label>
                  <select
                    value={preferredTime}
                    onChange={(e) => setPreferredTime(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl border border-[#B08968]/30 bg-white text-sm text-[#1F2421] focus:outline-none focus:border-[#B08968]"
                  >
                    <option value="Afternoon (11:00 AM – 3:00 PM)">Afternoon (11:00 AM – 3:00 PM)</option>
                    <option value="Late Afternoon (3:00 PM – 6:00 PM)">Late Afternoon (3:00 PM – 6:00 PM)</option>
                    <option value="Evening (6:00 PM – 9:00 PM)">Evening (6:00 PM – 9:00 PM)</option>
                    <option value="Sunday By Appointment">Sunday By Appointment</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#1F2421] mb-1">
                    Notes / Previous Treatments
                  </label>
                  <textarea
                    rows={2}
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    placeholder="Any allergies, previous chemical peels or lasers..."
                    className="w-full px-4 py-2 rounded-xl border border-[#B08968]/30 bg-white text-sm text-[#1F2421] focus:outline-none focus:border-[#B08968]"
                  />
                </div>

                <button
                  type="submit"
                  className="btn-emerald w-full py-3.5 text-sm font-bold shadow-lg mt-2 cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Details to WhatsApp Desk</span>
                </button>
              </form>
            </div>

            <div className="mt-6 pt-4 border-t border-[#B08968]/20 text-center">
              <div className="text-[11px] text-[#5C5852]">
                Insta Skin Clinic • Kashmir Rd, Sector W Peoples Colony, Gujranwala
                <br />
                Direct Desk:{" "}
                <a href="tel:+923009353482" className="text-[#B08968] font-bold">
                  +92 300 9353482
                </a>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
