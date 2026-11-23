"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import { ChevronsLeftRight } from "lucide-react";

interface BeforeAfterSliderProps {
  beforeSrc: string;
  afterSrc: string;
  beforeAlt?: string;
  afterAlt?: string;
  beforeLabel?: string;
  afterLabel?: string;
  className?: string;
}

export default function BeforeAfterSlider({
  beforeSrc,
  afterSrc,
  beforeAlt = "Before Treatment",
  afterAlt = "After Treatment",
  beforeLabel = "Before",
  afterLabel = "After",
  className = "h-[400px] sm:h-[460px]",
}: BeforeAfterSliderProps) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  };

  const handlePointerDown = (e: React.PointerEvent) => {
    setIsDragging(true);
    e.currentTarget.setPointerCapture(e.pointerId);
    handleMove(e.clientX);
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  const handlePointerUp = (e: React.PointerEvent) => {
    setIsDragging(false);
    try {
      e.currentTarget.releasePointerCapture(e.pointerId);
    } catch {}
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") {
      e.preventDefault();
      setSliderPosition((prev) => Math.max(0, prev - 5));
    } else if (e.key === "ArrowRight") {
      e.preventDefault();
      setSliderPosition((prev) => Math.min(100, prev + 5));
    }
  };

  return (
    <div
      ref={containerRef}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerCancel={handlePointerUp}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      role="slider"
      aria-label="Before and After Image Comparison Slider"
      aria-valuenow={Math.round(sliderPosition)}
      aria-valuemin={0}
      aria-valuemax={100}
      className={`relative overflow-hidden select-none touch-none cursor-ew-resize rounded-2xl ${className}`}
    >
      {/* After Image (Base) */}
      <img
        src={afterSrc}
        alt={afterAlt}
        className="block w-full h-full object-cover pointer-events-none"
      />

      {/* Before Image (Clipped) */}
      <img
        src={beforeSrc}
        alt={beforeAlt}
        style={{ clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)` }}
        className="absolute top-0 left-0 w-full h-full object-cover pointer-events-none"
      />

      {/* Handle Divider Line */}
      <div
        style={{ left: `${sliderPosition}%` }}
        className="absolute top-0 bottom-0 w-[3px] bg-[#B08968] shadow-[0_0_14px_rgba(176,137,104,0.7)] pointer-events-none -translate-x-1/2 z-10"
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-[#FAF8F5] border-2 border-[#B08968] text-[#B08968] flex items-center justify-center shadow-lg">
          <ChevronsLeftRight className="w-4 h-4" />
        </div>
      </div>

      {/* Badges */}
      <div className="absolute top-3 left-3 bg-[#1F2421]/80 backdrop-blur-md text-[#FAF8F5] text-[10px] sm:text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full border border-white/20 pointer-events-none z-20">
        {beforeLabel}
      </div>
      <div className="absolute top-3 right-3 bg-[#1E6B52]/90 backdrop-blur-md text-[#FAF8F5] text-[10px] sm:text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full border border-white/20 pointer-events-none z-20">
        {afterLabel}
      </div>
    </div>
  );
}
