"use client";

import React, { useEffect, useRef, useState } from "react";

export const luxuryEase = [0.22, 1, 0.36, 1] as const;
export const luxuryEaseCSS = "cubic-bezier(0.22, 1, 0.36, 1)";

// Custom bulletproof useInView hook (threshold: 0.1, triggerOnce: true)
export function useInView<T extends HTMLElement = HTMLDivElement>(
  options: {
    threshold?: number;
    rootMargin?: string;
    triggerOnce?: boolean;
  } = {}
) {
  const { threshold = 0.1, rootMargin = "0px", triggerOnce = true } = options;
  const ref = useRef<T>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    if (typeof IntersectionObserver === "undefined") {
      setIsInView(true);
      return;
    }

    // Check if element is already within viewport on mount (e.g., above-the-fold Hero content)
    if (typeof window !== "undefined") {
      const rect = node.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        setIsInView(true);
        if (triggerOnce) return;
      }
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          if (triggerOnce) {
            observer.unobserve(node);
          }
        } else if (!triggerOnce) {
          setIsInView(false);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [threshold, rootMargin, triggerOnce]);

  return { ref, isInView };
}

// 1. ScrollProgressBar: Fixed 4px Champagne Gold (#B08968) top bar driven by window.scroll listener
export function ScrollProgressBar() {
  const [scaleX, setScaleX] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (scrollHeight <= 0) {
        setScaleX(0);
        return;
      }
      const progress = Math.min(Math.max(window.scrollY / scrollHeight, 0), 1);
      setScaleX(progress);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      style={{
        transform: `scaleX(${scaleX})`,
        transformOrigin: "left",
        transition: "transform 0.08s linear",
      }}
      className="fixed top-0 left-0 right-0 h-[4px] bg-[#B08968] z-50 pointer-events-none shadow-sm"
    />
  );
}

// 2. MaskedReveal: Starts at opacity: 0; transform: translateY(36px) and animates to opacity: 1; transform: translateY(0)
export function MaskedReveal({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const { ref, isInView } = useInView<HTMLDivElement>({ threshold: 0.1, triggerOnce: true });

  return (
    <div ref={ref} className={`overflow-hidden ${className}`}>
      <div
        style={{
          opacity: isInView ? 1 : 0,
          transform: isInView ? "translateY(0)" : "translateY(36px)",
          transition: `opacity 0.8s ${luxuryEaseCSS} ${delay}s, transform 0.8s ${luxuryEaseCSS} ${delay}s`,
          willChange: "opacity, transform",
        }}
      >
        {children}
      </div>
    </div>
  );
}

// 3. FadeInUp: Starts at opacity: 0; transform: translateY(32px) and animates to translateY(0)
export function FadeInUp({
  children,
  delay = 0,
  duration = 0.65,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
}) {
  const { ref, isInView } = useInView<HTMLDivElement>({ threshold: 0.1, triggerOnce: true });

  return (
    <div
      ref={ref}
      style={{
        opacity: isInView ? 1 : 0,
        transform: isInView ? "translateY(0)" : "translateY(32px)",
        transition: `opacity ${duration}s ${luxuryEaseCSS} ${delay}s, transform ${duration}s ${luxuryEaseCSS} ${delay}s`,
        willChange: "opacity, transform",
      }}
      className={className}
    >
      {children}
    </div>
  );
}

// 4. AnimatedImage: Starts at opacity: 0; transform: scale(1.07) and smoothly reveals to opacity: 1; transform: scale(1)
export function AnimatedImage({
  src,
  alt = "",
  className = "",
  imgClassName = "",
  delay = 0,
  children,
}: {
  src?: string;
  alt?: string;
  className?: string;
  imgClassName?: string;
  delay?: number;
  children?: React.ReactNode;
}) {
  const { ref, isInView } = useInView<HTMLDivElement>({ threshold: 0.1, triggerOnce: true });

  return (
    <div
      ref={ref}
      style={{
        opacity: isInView ? 1 : 0,
        transform: isInView ? "scale(1)" : "scale(1.07)",
        transition: `opacity 0.85s ${luxuryEaseCSS} ${delay}s, transform 0.85s ${luxuryEaseCSS} ${delay}s`,
        willChange: "opacity, transform",
      }}
      className={`relative overflow-hidden rounded-3xl border-2 border-[#B08968]/30 shadow-xl group hover:border-[#B08968] hover:shadow-[0_20px_40px_-15px_rgba(176,137,104,0.3)] transition-all duration-500 ${className}`}
    >
      {src && (
        <img
          src={src}
          alt={alt}
          className={`w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 ${imgClassName}`}
        />
      )}
      {children}
    </div>
  );
}

// 5. StaggerContainer & StaggerItem: Each card delays by index * 110ms, sliding up 32px
const StaggerContext = React.createContext<{
  isInView: boolean;
  parentDelay: number;
}>({ isInView: false, parentDelay: 0 });

export function StaggerContainer({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const { ref, isInView } = useInView<HTMLDivElement>({ threshold: 0.1, triggerOnce: true });

  let itemCounter = 0;

  return (
    <div ref={ref} className={className}>
      <StaggerContext.Provider value={{ isInView, parentDelay: delay }}>
        {React.Children.map(children, (child) => {
          if (React.isValidElement(child)) {
            const index = itemCounter++;
            return React.cloneElement(child as React.ReactElement<any>, { index });
          }
          return child;
        })}
      </StaggerContext.Provider>
    </div>
  );
}

export function StaggerItem({
  children,
  className = "",
  index = 0,
}: {
  children: React.ReactNode;
  className?: string;
  index?: number;
}) {
  const { isInView, parentDelay } = React.useContext(StaggerContext);
  const computedDelay = parentDelay + (index || 0) * 0.11;

  return (
    <div
      style={{
        opacity: isInView ? 1 : 0,
        transform: isInView ? "translateY(0)" : "translateY(32px)",
        transition: `opacity 0.65s ${luxuryEaseCSS} ${computedDelay}s, transform 0.65s ${luxuryEaseCSS} ${computedDelay}s`,
        willChange: "opacity, transform",
      }}
      className={className}
    >
      {children}
    </div>
  );
}

// 6. LuxuryCard: Smooth hover:-translate-y-2 hover:shadow-2xl hover:border-[#B08968]
export function LuxuryCard({
  children,
  className = "",
  onClick,
}: {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}) {
  return (
    <div
      onClick={onClick}
      className={`transition-all duration-300 ease-out hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(176,137,104,0.25)] hover:border-[#B08968] ${className}`}
    >
      {children}
    </div>
  );
}

// 7. CountUpNumber: Bulletproof requestAnimationFrame counter with easeOutExpo over 2000ms
export interface CountUpNumberProps {
  end: number;
  start?: number;
  decimals?: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
  formatCommas?: boolean;
  className?: string;
}

export function CountUpNumber({
  end,
  start = 0,
  decimals = 0,
  duration = 2000,
  prefix = "",
  suffix = "",
  formatCommas = true,
  className = "",
}: CountUpNumberProps) {
  const { ref, isInView } = useInView<HTMLSpanElement>({ threshold: 0.1, triggerOnce: true });

  const formatValue = (val: number): string => {
    if (decimals > 0) {
      if (formatCommas) {
        const parts = val.toFixed(decimals).split(".");
        parts[0] = Number(parts[0]).toLocaleString();
        return parts.join(".");
      }
      return val.toFixed(decimals);
    }
    const rounded = Math.round(val);
    return formatCommas ? rounded.toLocaleString() : rounded.toString();
  };

  const [displayValue, setDisplayValue] = useState<string>(() => formatValue(start));

  useEffect(() => {
    if (!isInView) return;

    let startTime: number | null = null;
    let animId: number;

    // Normalize duration if user passed small seconds value (e.g., 1.8 -> 1800ms)
    const effectiveDuration = duration < 50 ? duration * 1000 : duration;

    // easeOutExpo for smooth deceleration
    const easeOutExpo = (x: number): number => {
      return x === 1 ? 1 : 1 - Math.pow(2, -10 * x);
    };

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / effectiveDuration, 1);
      const eased = easeOutExpo(progress);
      const current = start + (end - start) * eased;

      setDisplayValue(formatValue(current));

      if (progress < 1) {
        animId = requestAnimationFrame(step);
      } else {
        setDisplayValue(formatValue(end));
      }
    };

    animId = requestAnimationFrame(step);

    return () => {
      if (animId) cancelAnimationFrame(animId);
    };
  }, [isInView, end, start, decimals, duration, formatCommas]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {displayValue}
      {suffix}
    </span>
  );
}

// Backward-compatibility alias for AnimatedCounter
export function AnimatedCounter({
  from = 0,
  to,
  decimals = 0,
  duration = 2000,
  prefix = "",
  suffix = "",
  className = "",
}: {
  from?: number;
  to: number;
  decimals?: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
  className?: string;
}) {
  return (
    <CountUpNumber
      start={from}
      end={to}
      decimals={decimals}
      duration={duration}
      prefix={prefix}
      suffix={suffix}
      formatCommas={decimals === 0}
      className={className}
    />
  );
}

// 8. InfiniteMarquee: 60fps horizontal continuous ticker with pause-on-hover
export function InfiniteMarquee({
  children,
  speed = 40,
  className = "",
}: {
  children: React.ReactNode;
  speed?: number;
  className?: string;
}) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`relative w-full overflow-hidden ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className="flex gap-6 w-max marquee-animation"
        style={{
          animationDuration: `${speed}s`,
          animationPlayState: isHovered ? "paused" : "running",
        }}
      >
        {children}
        {children}
      </div>
    </div>
  );
}

// 9. AmbientPulseRing: outward-expanding emerald pulse ring
export function AmbientPulseRing({
  color = "bg-[#1E6B52]",
  className = "",
}: {
  color?: string;
  className?: string;
}) {
  return (
    <span
      className={`absolute inset-0 rounded-full ${color} -z-10 animate-ping opacity-60 pointer-events-none ${className}`}
      style={{ animationDuration: "2s" }}
    />
  );
}
