"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { luxuryEase } from "@/components/MotionPrimitives";

interface FaqItem {
  question: string;
  answer: string;
}

interface FaqAccordionProps {
  items: FaqItem[];
  defaultOpenIndex?: number;
}

export default function FaqAccordion({
  items,
  defaultOpenIndex = 0,
}: FaqAccordionProps) {
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
            className="bg-[#FAF8F5] rounded-2xl border border-[#B08968]/30 overflow-hidden shadow-sm transition-all hover:border-[#B08968]"
          >
            <button
              onClick={() => toggle(idx)}
              className="w-full px-6 py-4 text-left flex items-center justify-between font-serif font-bold text-base sm:text-lg text-[#1F2421] focus:outline-none cursor-pointer"
            >
              <span>{item.question}</span>
              <motion.div
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ duration: 0.35, ease: luxuryEase }}
                className="shrink-0 text-[#B08968]"
              >
                <ChevronDown className="w-5 h-5" />
              </motion.div>
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  key="content"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.35, ease: luxuryEase }}
                  className="overflow-hidden"
                >
                  <div className="px-6 pb-5 text-xs sm:text-sm text-[#5C5852] leading-relaxed border-t border-[#B08968]/15 pt-3">
                    {item.answer}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
