"use client";

import React, { useEffect, useRef, useState } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useInView,
  animate,
  Variants,
} from "framer-motion";

export const luxuryEase = [0.22, 1, 0.36, 1] as const;

// 1. Top Champagne Gold Scroll Progress Bar (3px)
export function ScrollProgressBar() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      style={{ scaleX }}
      className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#B08968] via-[#D8C3A5] to-[#B08968] origin-left z-[9999] pointer-events-none shadow-sm"
    />
  );
}

// 2. Masked Upward Text Reveal
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
        initial={{ y: "100%", opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: 0.85,
          delay,
          ease: luxuryEase,
        }}
      >
        {children}
      </motion.div>
    </div>
  );
}

// 3. Fade In Up with Optional Viewport Trigger
export function FadeInUp({
  children,
  delay = 0,
  duration = 0.65,
  className = "",
  viewportOnce = true,
}: {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
  viewportOnce?: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: viewportOnce, margin: "-40px" }}
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

// 4. Stagger Container & Stagger Item for cards & grids
export const staggerContainerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.08,
    },
  },
};

export const staggerItemVariants: Variants = {
  hidden: { opacity: 0, y: 28 },
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
      viewport={{ once: true, margin: "-50px" }}
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

// 5. Luxury Card with Hover Lift & Champagne Gold Border Glow
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
        y: -6,
        boxShadow: "0 20px 32px -10px rgba(176, 137, 104, 0.22)",
        borderColor: "rgba(176, 137, 104, 0.75)",
      }}
      transition={{
        duration: 0.35,
        ease: luxuryEase,
      }}
      onClick={onClick}
      className={`transition-colors ${className}`}
    >
      {children}
    </motion.div>
  );
}

// 6. Smooth Scroll Parallax Wrapper for Hero / About Images
export function ParallaxImage({
  children,
  className = "",
  offset = 30,
}: {
  children: React.ReactNode;
  className?: string;
  offset?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [-offset, offset]);

  return (
    <div ref={ref} className={`overflow-hidden ${className}`}>
      <motion.div style={{ y }} className="w-full h-full">
        {children}
      </motion.div>
    </div>
  );
}

// 7. Animated Count-Up Number
export function AnimatedCounter({
  from = 0,
  to,
  decimals = 0,
  duration = 1.6,
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
  const inView = useInView(ref, { once: true, margin: "-20px" });
  const [displayValue, setDisplayValue] = useState<string>(
    from.toFixed(decimals)
  );

  useEffect(() => {
    if (!inView) return;

    const controls = animate(from, to, {
      duration,
      ease: [0.16, 1, 0.3, 1],
      onUpdate(value) {
        setDisplayValue(value.toFixed(decimals));
      },
    });

    return () => controls.stop();
  }, [inView, from, to, decimals, duration]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {displayValue}
      {suffix}
    </span>
  );
}

// 8. Infinite Smooth Pause-on-Hover Marquee
export function InfiniteMarquee({
  children,
  speed = 35,
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

// 9. Ambient Pulse Ring for WhatsApp button
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
        scale: [1, 1.45, 1],
        opacity: [0.65, 0, 0.65],
      }}
      transition={{
        duration: 2.4,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  );
}
