"use client";

import React, { useState, useRef, useCallback } from "react";

export interface BeforeAfterSliderProps {
  beforeSrc?: string;
  afterSrc?: string;
  beforeAlt?: string;
  afterAlt?: string;
  beforeLabel?: string;
  afterLabel?: string;
  beforeSub?: string;
  afterSub?: string;
  className?: string;
  aspectRatio?: string;
  initialPosition?: number;
}

export default function BeforeAfterSlider({
  beforeSrc = "/images/before-scars.jpg",
  afterSrc = "/images/after-scars.jpg",
  beforeAlt = "Before Acne Scar Treatment - Active Pitted & Rolling Scars",
  afterAlt = "After Acne Scar Treatment - Remodeled Smooth Skin Texture",
  beforeLabel = "BEFORE",
  afterLabel = "AFTER",
  beforeSub = "ACTIVE PITTED & ROLLING SCARS",
  afterSub = "AFTER 3 SESSIONS (RF & LASER)",
  className = "",
  aspectRatio = "aspect-[4/3] sm:aspect-[4/5]",
  initialPosition = 50,
}: BeforeAfterSliderProps) {
  const [sliderPosition, setSliderPosition] = useState(initialPosition);
  const containerRef = useRef<HTMLDivElement>(null);

  const updatePosition = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  }, []);

  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    containerRef.current?.setPointerCapture(e.pointerId);
    updatePosition(e.clientX);
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (e.buttons === 1) {
      updatePosition(e.clientX);
    }
  };

  const handlePointerUp = (e: React.PointerEvent<HTMLDivElement>) => {
    try {
      containerRef.current?.releasePointerCapture(e.pointerId);
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
      aria-label="Interactive Before and After Scar Comparison Slider"
      aria-valuenow={Math.round(sliderPosition)}
      aria-valuemin={0}
      aria-valuemax={100}
      className={`relative w-full ${aspectRatio} overflow-hidden rounded-3xl select-none touch-none cursor-ew-resize border-2 border-[#B08968]/30 shadow-2xl bg-[#1F2421] ${className}`}
    >
      {/* After Image (Base Layer - visible on the right) */}
      <img
        src={afterSrc}
        alt={afterAlt}
        className="absolute inset-0 w-full h-full object-cover select-none pointer-events-none"
      />

      {/* Before Image (Top Layer - visible on the left, clipped by inset from the right) */}
      <div
        className="absolute inset-0 w-full h-full overflow-hidden select-none pointer-events-none"
        style={{
          clipPath: `inset(0 ${100 - sliderPosition}% 0 0)`,
          WebkitClipPath: `inset(0 ${100 - sliderPosition}% 0 0)`,
        }}
      >
        <img
          src={beforeSrc}
          alt={beforeAlt}
          className="absolute inset-0 w-full h-full object-cover select-none pointer-events-none"
        />
      </div>

      {/* Vertical Golden Divider Line Tracking precisely at sliderPosition */}
      <div
        style={{ left: `${sliderPosition}%` }}
        className="absolute top-0 bottom-0 w-[3px] bg-[#B08968] shadow-[0_0_14px_rgba(176,137,104,0.7)] pointer-events-none -translate-x-1/2 z-30"
      >
        {/* Intuitive drag-friendly circle carrying the gold double-arrow symbol (↔) */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#FAF8F5] border-2 border-[#B08968] text-[#B08968] flex items-center justify-center shadow-xl transition-transform active:scale-95">
          <span className="text-base sm:text-lg font-bold select-none leading-none text-[#B08968]">
            ↔
          </span>
        </div>
      </div>

      {/* Luxury Corner Badges: "BEFORE" on left, "AFTER" on right */}
      <div className="absolute top-3.5 left-3.5 sm:top-4 sm:left-4 bg-[#1F2421]/80 backdrop-blur-md text-[#FAF8F5] border border-[#B08968]/50 px-3 py-1 rounded-md text-[10px] sm:text-xs font-bold tracking-widest uppercase shadow-md pointer-events-none z-20">
        {beforeLabel}
      </div>
      <div className="absolute top-3.5 right-3.5 sm:top-4 sm:right-4 bg-[#1E6B52]/85 backdrop-blur-md text-[#FAF8F5] border border-[#B08968]/50 px-3 py-1 rounded-md text-[10px] sm:text-xs font-bold tracking-widest uppercase shadow-md pointer-events-none z-20">
        {afterLabel}
      </div>

      {/* Bottom Corner Labels: Clinical Details */}
      {beforeSub && (
        <div className="absolute bottom-3.5 left-3.5 sm:bottom-4 sm:left-4 max-w-[48%] bg-[#1F2421]/85 backdrop-blur-md text-[#D8C3A5] border border-[#B08968]/40 px-2.5 sm:px-3 py-1 rounded text-[9px] sm:text-[11px] font-semibold tracking-wider uppercase shadow-md pointer-events-none z-20 leading-tight">
          {beforeSub}
        </div>
      )}
      {afterSub && (
        <div className="absolute bottom-3.5 right-3.5 sm:bottom-4 sm:right-4 max-w-[48%] text-right bg-[#1F2421]/85 backdrop-blur-md text-[#FAF8F5] border border-[#B08968]/40 px-2.5 sm:px-3 py-1 rounded text-[9px] sm:text-[11px] font-semibold tracking-wider uppercase shadow-md pointer-events-none z-20 leading-tight">
          {afterSub}
        </div>
      )}

      {/* Invisible Range Slider for Smooth Accessibility and Mobile Touch */}
      <input
        type="range"
        min="0"
        max="100"
        value={sliderPosition}
        onChange={(e) => setSliderPosition(Number(e.target.value))}
        className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-40"
        aria-hidden="true"
        tabIndex={-1}
      />
    </div>
  );
}
