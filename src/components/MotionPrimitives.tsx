"use client";

import React, { useEffect, useRef, useState } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useInView,
  useMotionValue,
  animate,
  Variants,
} from "framer-motion";

export const luxuryEase = [0.22, 1, 0.36, 1] as const;

// 1. Top Champagne Gold Scroll Progress Bar (4px height, fixed z-50)
export function ScrollProgressBar() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 24,
    restDelta: 0.001,
  });

  return (
    <motion.div
      style={{ scaleX }}
      className="fixed top-0 left-0 right-0 h-[4px] bg-[#B08968] origin-left z-50 pointer-events-none shadow-sm"
    />
  );
}

// 2. Hero Headline Masked Upward Reveal (y: 48 -> 0, opacity: 0 -> 1 over 0.8s)
export function MaskedReveal({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <div className={`overflow-hidden ${className}`}>
      <motion.div
        initial={{ y: 48, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{
          duration: 0.8,
          delay,
          ease: luxuryEase,
        }}
      >
        {children}
      </motion.div>
    </div>
  );
}

// 3. Fade In Up with robust amount: 0.15 viewport
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
  return (
    <motion.div
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration,
        delay,
        ease: luxuryEase,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// 4. Hero & Section Image Reveal + Hover Zoom (scale: 1.08 -> 1.0, opacity: 0 -> 1, duration: 0.85s)
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
  return (
    <motion.div
      initial={{ scale: 1.08, opacity: 0 }}
      whileInView={{ scale: 1.0, opacity: 1 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.85, delay, ease: luxuryEase }}
      className={`relative overflow-hidden rounded-3xl border-2 border-[#B08968]/30 shadow-xl group hover:border-[#B08968] hover:shadow-[0_20px_40px_-15px_rgba(176,137,104,0.3)] transition-all duration-500 ${className}`}
    >
      {src ? (
        <img
          src={src}
          alt={alt}
          className={`w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 ${imgClassName}`}
        />
      ) : (
        children
      )}
    </motion.div>
  );
}

// 5. Stagger Container & Stagger Item (0.12s stagger, y: 36 -> 0, duration: 0.65s)
export const staggerContainerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.05,
    },
  },
};

export const staggerItemVariants: Variants = {
  hidden: { opacity: 0, y: 36 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: luxuryEase,
    },
  },
};

export function StaggerContainer({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0 },
        show: {
          opacity: 1,
          transition: {
            staggerChildren: 0.12,
            delayChildren: delay,
          },
        },
      }}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.15 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.div variants={staggerItemVariants} className={className}>
      {children}
    </motion.div>
  );
}

// 6. Luxury Card Hover Lift & Champagne Gold Glow (y: -8, scale: 1.015, border glow & warm shadow)
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
    <motion.div
      whileHover={{
        y: -8,
        scale: 1.015,
        boxShadow: "0 20px 40px -15px rgba(176, 137, 104, 0.25)",
        borderColor: "#B08968",
      }}
      transition={{ type: "spring", stiffness: 300, damping: 22 }}
      onClick={onClick}
      className={`transition-colors duration-300 ${className}`}
    >
      {children}
    </motion.div>
  );
}

// 7. Animated Number Counters (useInView + useMotionValue + animate over 1.8s)
export function AnimatedCounter({
  from = 0,
  to,
  decimals = 0,
  duration = 1.8,
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
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.15 });
  const count = useMotionValue(from);
  const [displayValue, setDisplayValue] = useState<string>(
    from.toFixed(decimals)
  );

  useEffect(() => {
    if (!inView) return;

    const controls = animate(count, to, {
      duration,
      ease: [0.16, 1, 0.3, 1],
      onUpdate(value) {
        setDisplayValue(
          decimals > 0
            ? value.toFixed(decimals)
            : Math.floor(value).toLocaleString()
        );
      },
    });

    return () => controls.stop();
  }, [inView, count, to, decimals, duration]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {displayValue}
      {suffix}
    </span>
  );
}

// 8. Infinite Smooth Google Reviews Marquee (60fps continuous scroll with pause-on-hover)
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
      <motion.div
        className="flex gap-6 w-max"
        animate={{
          x: isHovered ? undefined : ["0%", "-50%"],
        }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: speed,
            ease: "linear",
          },
        }}
        style={{
          animationPlayState: isHovered ? "paused" : "running",
        }}
      >
        {children}
        {children}
      </motion.div>
    </div>
  );
}

// 9. Floating WhatsApp Pulse Ring (scale: [1, 1.45], opacity: [0.6, 0], repeat: Infinity, duration: 2s)
export function AmbientPulseRing({
  color = "bg-[#1E6B52]",
  className = "",
}: {
  color?: string;
  className?: string;
}) {
  return (
    <motion.span
      className={`absolute inset-0 rounded-full ${color} -z-10 ${className}`}
      animate={{
        scale: [1, 1.45],
        opacity: [0.6, 0],
      }}
      transition={{
        duration: 2.0,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  );
}
