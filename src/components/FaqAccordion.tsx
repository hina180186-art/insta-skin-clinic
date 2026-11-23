"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

interface FaqItem {
  question: string;
  answer: string;
}

interface FaqAccordionProps {
  items: FaqItem[];
  defaultOpenIndex?: number;
}

export default function FaqAccordion({ items, defaultOpenIndex = 0 }: FaqAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(defaultOpenIndex);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="space-y-4">
      {items.map((item, idx) => {
        const isOpen = openIndex === idx;
        return (
          <div
            key={idx}
            className="bg-[#FAF8F5] rounded-2xl border border-[#B08968]/30 overflow-hidden shadow-sm transition-all"
          >
            <button
              onClick={() => toggle(idx)}
              className="w-full px-6 py-4 text-left flex items-center justify-between font-serif font-bold text-base sm:text-lg text-[#1F2421] focus:outline-none cursor-pointer"
            >
              <span>{item.question}</span>
              <ChevronDown
                className={`w-5 h-5 text-[#B08968] shrink-0 transition-transform duration-300 ${
                  isOpen ? "rotate-180" : ""
                }`}
              />
            </button>
            {isOpen && (
              <div className="px-6 pb-5 text-xs sm:text-sm text-[#5C5852] leading-relaxed border-t border-[#B08968]/15 pt-3">
                {item.answer}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
