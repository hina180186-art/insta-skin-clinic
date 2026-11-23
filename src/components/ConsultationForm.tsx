"use client";

import React, { useState } from "react";
import { MessageCircle, Send } from "lucide-react";

export default function ConsultationForm() {
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [concern, setConcern] = useState("Laser Hair Removal (Face / Full Body)");
  const [date, setDate] = useState("");
  const [timeSlot, setTimeSlot] = useState("Morning (11:00 AM – 2:00 PM)");
  const [notes, setNotes] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Hello Insta Skin Clinic! 🌿
I am requesting a personalized clinical consultation via your website form.

*Name:* ${fullName || "Patient"}
*Phone / WhatsApp:* ${phone || "Not provided"}
*Treatment Interest:* ${concern}
*Preferred Date:* ${date || "Earliest available date"}
*Preferred Time Slot:* ${timeSlot}
*Medical History / Specific Notes:* ${notes || "Looking for personalized treatment recommendation."}

Location: Insta Skin Clinic, Kashmir Rd, Sector W Peoples Colony, Gujranwala.`;

    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/923009353482?text=${encoded}`, "_blank");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-[#1F2421] mb-1.5">
            Full Name *
          </label>
          <input
            type="text"
            required
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            placeholder="e.g. Maryam Tariq"
            className="w-full px-4 py-3 rounded-xl border border-[#B08968]/30 bg-white text-sm text-[#1F2421] focus:outline-none focus:border-[#B08968]"
          />
        </div>
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-[#1F2421] mb-1.5">
            WhatsApp / Phone Number *
          </label>
          <input
            type="tel"
            required
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="+92 300 1234567"
            className="w-full px-4 py-3 rounded-xl border border-[#B08968]/30 bg-white text-sm text-[#1F2421] focus:outline-none focus:border-[#B08968]"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-[#1F2421] mb-1.5">
            Treatment or Concern *
          </label>
          <select
            value={concern}
            onChange={(e) => setConcern(e.target.value)}
            className="w-full px-4 py-3 rounded-xl border border-[#B08968]/30 bg-white text-sm text-[#1F2421] focus:outline-none focus:border-[#B08968]"
          >
            <option value="Laser Hair Removal (Face / Full Body)">Laser Hair Removal (Face / Full Body)</option>
            <option value="Fractional CO2 Laser (Acne Scars & Texture)">Fractional CO2 Laser (Acne Scars & Texture)</option>
            <option value="Signature Medical HydraFacial MD">Signature Medical HydraFacial MD</option>
            <option value="PRP & Exosome Hair Restoration">PRP & Exosome Hair Restoration</option>
            <option value="Stubborn Melasma & Chemical Peels">Stubborn Melasma & Chemical Peels</option>
            <option value="Hollywood Carbon Laser Glow Peel">Hollywood Carbon Laser Glow Peel</option>
            <option value="Comprehensive Doctor Skin Assessment">Comprehensive Doctor Skin Assessment</option>
          </select>
        </div>
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-[#1F2421] mb-1.5">
            Preferred Date
          </label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="w-full px-4 py-3 rounded-xl border border-[#B08968]/30 bg-white text-sm text-[#1F2421] focus:outline-none focus:border-[#B08968]"
          />
        </div>
      </div>

      <div>
        <label className="block text-xs font-bold uppercase tracking-wider text-[#1F2421] mb-1.5">
          Preferred Time Slot
        </label>
        <div className="grid grid-cols-3 gap-3">
          {[
            { label: "11am – 2pm", value: "Morning (11:00 AM – 2:00 PM)" },
            { label: "2pm – 6pm", value: "Afternoon (2:00 PM – 6:00 PM)" },
            { label: "6pm – 9pm", value: "Evening (6:00 PM – 9:00 PM)" },
          ].map((slot) => (
            <label
              key={slot.value}
              className={`flex items-center gap-2 text-xs font-medium p-3 rounded-xl border cursor-pointer transition-colors ${
                timeSlot === slot.value
                  ? "bg-[#FAF8F5] border-[#B08968] text-[#1F2421]"
                  : "bg-white border-[#B08968]/20 text-[#5C5852] hover:border-[#B08968]"
              }`}
            >
              <input
                type="radio"
                name="time_slot"
                checked={timeSlot === slot.value}
                onChange={() => setTimeSlot(slot.value)}
                className="text-[#1E6B52]"
              />
              <span>{slot.label}</span>
            </label>
          ))}
        </div>
      </div>

      <div>
        <label className="block text-xs font-bold uppercase tracking-wider text-[#1F2421] mb-1.5">
          Specific Concerns / Medical History
        </label>
        <textarea
          rows={3}
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          placeholder="Share any past treatments, active medications, or specific skin goals..."
          className="w-full px-4 py-3 rounded-xl border border-[#B08968]/30 bg-white text-sm text-[#1F2421] focus:outline-none focus:border-[#B08968]"
        />
      </div>

      <button
        type="submit"
        className="btn-emerald w-full py-4 text-base font-bold shadow-xl cursor-pointer"
      >
        <MessageCircle className="w-5 h-5" />
        <span>Compile & Send to Doctor via WhatsApp</span>
      </button>

      <p className="text-center text-[11px] text-[#5C5852]">
        Direct WhatsApp line: <strong className="text-[#1F2421]">+92 300 9353482</strong>. Your health details remain strictly confidential under PMDC medical privacy code.
      </p>
    </form>
  );
}
