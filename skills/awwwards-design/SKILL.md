# Awwwards-Level Web Design — SKILL.md
# Award-Worthy Website Design & Animation Patterns | ClawMart Edition
# Version: 1.0.0

---

## OVERVIEW

This skill gives an AI agent the knowledge, patterns, and code templates to build websites that compete at the highest visual and interactive level. Awwwards, CSSDA, and FWA-winning sites share specific characteristics: intentional motion, typographic confidence, creative layouts that break conventions purposefully, and micro-interactions that reward curiosity.

This skill covers the full stack: design principles, animation frameworks, React/Next.js component patterns, performance guardrails, and production-ready code examples.

---

## DESIGN PHILOSOPHY

### What Separates Award-Winning Sites

```
CONVENTIONAL SITE:          AWARD-WINNING SITE:
- Predictable layout         - Layout as expression
- Scroll = content appears   - Scroll = narrative unfolds
- Hover = button changes     - Hover = world responds
- Loading = spinner          - Loading = first impression
- Above fold = hero image    - Above fold = a promise
- Typography = readable      - Typography = personality
```

### The Five Pillars

**1. Intentional Motion**
Every animation serves a purpose: orientation, delight, feedback, or storytelling. Nothing moves just because it can.

**2. Spatial Hierarchy**
The layout communicates priority before the user reads a word. White space is as designed as the content.

**3. Typography as Design Element**
Type is not just readable — it has weight, rhythm, scale, and personality. Headlines exist at display scale (100px–300px). Body copy earns its place.

**4. Sensory Coherence**
Color, motion speed, easing curves, and sound (if used) belong to the same world. Nothing feels imported.

**5. Performance as Feature**
A stunning site that loads in 8 seconds is not award-winning. Perceived performance is designed. Real performance is engineered.

---

## TECH STACK

```json
{
  "framework": "Next.js 14+ (App Router)",
  "styling": "Tailwind CSS + CSS custom properties",
  "animation": {
    "declarative": "Framer Motion 11+",
    "imperative": "GSAP 3.12+ with ScrollTrigger",
    "3d": "Three.js or React Three Fiber (optional)"
  },
  "fonts": "variable fonts via next/font",
  "images": "next/image with blur placeholders",
  "deployment": "Vercel (Edge Runtime)"
}
```

### Installation

```bash
# Create Next.js project
npx create-next-app@latest my-site \
  --typescript --tailwind --eslint --app --src-dir

# Animation libraries
npm install framer-motion gsap @gsap/react

# 3D (optional)
npm install three @react-three/fiber @react-three/drei

# Fonts (install via next/font — no npm package needed)
# Utility
npm install clsx tailwind-merge
```

### Tailwind Config (awwwards preset)

```js
// tailwind.config.ts
import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ["var(--font-display)"],
        body: ["var(--font-body)"],
        mono: ["var(--font-mono)"],
      },
      fontSize: {
        "display-2xl": ["clamp(4rem, 12vw, 14rem)", { lineHeight: "0.9" }],
        "display-xl":  ["clamp(3rem, 8vw, 9rem)",   { lineHeight: "0.95" }],
        "display-lg":  ["clamp(2.5rem, 6vw, 6rem)",  { lineHeight: "1" }],
      },
      transitionTimingFunction: {
        "expo-out": "cubic-bezier(0.16, 1, 0.3, 1)",
        "expo-in":  "cubic-bezier(0.7, 0, 0.84, 0)",
        "spring":   "cubic-bezier(0.34, 1.56, 0.64, 1)",
        "smooth":   "cubic-bezier(0.4, 0, 0.2, 1)",
      },
      animation: {
        "fade-up":    "fadeUp 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        "fade-in":    "fadeIn 0.5s ease forwards",
        "slide-left": "slideLeft 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards",
      },
      keyframes: {
        fadeUp: {
          from: { opacity: "0", transform: "translateY(40px)" },
          to:   { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          from: { opacity: "0" },
          to:   { opacity: "1" },
        },
        slideLeft: {
          from: { opacity: "0", transform: "translateX(60px)" },
          to:   { opacity: "1", transform: "translateX(0)" },
        },
      },
    },
  },
};

export default config;
```

---

## HERO SECTION PATTERNS

### Pattern 1: Full-Screen Text Hero with Scroll Reveal

```tsx
// components/HeroText.tsx
"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(SplitText);

export function HeroText({ headline, subline }: { headline: string; subline: string }) {
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const sublineRef  = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const split = new SplitText(headlineRef.current, { type: "lines,words" });

      gsap.from(split.words, {
        y: 80,
        opacity: 0,
        duration: 1,
        stagger: 0.04,
        ease: "expo.out",
        delay: 0.2,
      });

      gsap.from(sublineRef.current, {
        y: 20,
        opacity: 0,
        duration: 0.8,
        ease: "expo.out",
        delay: 0.8,
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col justify-center px-6 lg:px-20">
      <h1
        ref={headlineRef}
        className="text-display-2xl font-display font-black tracking-tighter text-white leading-none max-w-[14ch]"
      >
        {headline}
      </h1>
      <p
        ref={sublineRef}
        className="mt-8 text-lg text-white/60 max-w-md font-body"
      >
        {subline}
      </p>
    </section>
  );
}
```

### Pattern 2: Kinetic Typography Hero (Framer Motion)

```tsx
// components/KineticHero.tsx
"use client";

import { motion } from "framer-motion";

const WORDS = ["Build.", "Ship.", "Win."];

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.3 },
  },
};

const wordVariant = {
  hidden: { y: "100%", opacity: 0 },
  show: {
    y: "0%",
    opacity: 1,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  },
};

export function KineticHero() {
  return (
    <section className="min-h-screen bg-black flex items-center justify-center px-6">
      <motion.div
        className="flex flex-wrap gap-x-6 gap-y-2"
        variants={container}
        initial="hidden"
        animate="show"
      >
        {WORDS.map((word) => (
          <div key={word} className="overflow-hidden">
            <motion.span
              className="block text-display-2xl font-display font-black text-white tracking-tighter"
              variants={wordVariant}
            >
              {word}
            </motion.span>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
```

### Pattern 3: Video Hero with Masked Text

```tsx
// components/VideoHero.tsx
"use client";

import { useRef } from "react";
import { motion } from "framer-motion";

export function VideoHero({ videoSrc, title }: { videoSrc: string; title: string }) {
  const videoRef = useRef<HTMLVideoElement>(null);

  return (
    <section className="relative min-h-screen overflow-hidden bg-black">
      {/* Background video */}
      <video
        ref={videoRef}
        src={videoSrc}
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-60"
      />

      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/80" />

      {/* Text overlay — mix-blend-mode creates video-through-text effect */}
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.h1
          className="text-display-2xl font-display font-black text-white tracking-tighter text-center"
          style={{ mixBlendMode: "overlay" }}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        >
          {title}
        </motion.h1>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <span className="text-white/50 text-xs tracking-widest uppercase">Scroll</span>
        <motion.div
          className="w-px h-12 bg-white/40"
          animate={{ scaleY: [0, 1, 0], originY: 0 }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>
    </section>
  );
}
```

---

## SCROLL-TRIGGERED ANIMATIONS

### GSAP ScrollTrigger — Pinned Section Narrative

```tsx
// components/PinnedScrollNarrative.tsx
"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const PANELS = [
  { label: "01", title: "Discover",    body: "Map the territory before building in it." },
  { label: "02", title: "Architect",   body: "Structure that serves both users and systems." },
  { label: "03", title: "Build",       body: "Precision execution. No shortcuts." },
  { label: "04", title: "Ship",        body: "Launch. Learn. Iterate relentlessly." },
];

export function PinnedScrollNarrative() {
  const containerRef = useRef<HTMLDivElement>(null);
  const panelsRef    = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Pin the container for horizontal scroll effect
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          pin: true,
          scrub: 1,
          snap: 1 / (PANELS.length - 1),
          end: `+=${window.innerWidth * PANELS.length}`,
        },
      });

      tl.to(panelsRef.current, {
        xPercent: -100 * (PANELS.length - 1),
        ease: "none",
      });

      // Animate each panel's content as it comes into view
      panelsRef.current.forEach((panel) => {
        const title = panel.querySelector("h2");
        const body  = panel.querySelector("p");

        gsap.from([title, body], {
          scrollTrigger: {
            trigger: panel,
            containerAnimation: tl,
            start: "left center",
            toggleActions: "play none none reverse",
          },
          y: 40,
          opacity: 0,
          stagger: 0.1,
          duration: 0.8,
          ease: "expo.out",
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="overflow-hidden w-full h-screen">
      <div className="flex h-screen" style={{ width: `${PANELS.length * 100}vw` }}>
        {PANELS.map((panel, i) => (
          <div
            key={panel.label}
            ref={(el) => { if (el) panelsRef.current[i] = el; }}
            className="w-screen h-screen flex flex-col justify-center px-20 bg-black border-r border-white/10"
          >
            <span className="text-white/30 font-mono text-sm mb-6">{panel.label}</span>
            <h2 className="text-display-xl font-display font-black text-white tracking-tighter">
              {panel.title}
            </h2>
            <p className="mt-4 text-white/60 text-lg max-w-sm">{panel.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
```

### Parallax Text Banner

```tsx
// components/ParallaxBanner.tsx
"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface ParallaxBannerProps {
  text: string;
  direction?: "left" | "right";
  speed?: number;
}

export function ParallaxBanner({ text, direction = "left", speed = 0.5 }: ParallaxBannerProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });

  const x = useTransform(
    scrollYProgress,
    [0, 1],
    direction === "left" ? ["0%", `-${speed * 100}%`] : [`-${speed * 100}%`, "0%"]
  );

  const repeatedText = Array(8).fill(text).join(" · ");

  return (
    <div ref={ref} className="overflow-hidden py-8 border-y border-white/10">
      <motion.div style={{ x }} className="whitespace-nowrap">
        <span className="text-display-lg font-display font-black text-white/20 tracking-tight">
          {repeatedText}
        </span>
      </motion.div>
    </div>
  );
}
```

---

## CURSOR EFFECTS

### Custom Cursor with Magnetic Attraction

```tsx
// components/MagneticCursor.tsx
"use client";

import { useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export function MagneticCursor() {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 300 };
  const x = useSpring(cursorX, springConfig);
  const y = useSpring(cursorY, springConfig);

  const dotX = useSpring(cursorX, { damping: 50, stiffness: 600 });
  const dotY = useSpring(cursorY, { damping: 50, stiffness: 600 });

  const isHovering = useRef(false);
  const scaleSpring = useSpring(1, { damping: 20, stiffness: 300 });

  useEffect(() => {
    // Hide default cursor
    document.body.style.cursor = "none";

    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX - 20);
      cursorY.set(e.clientY - 20);
    };

    const handleHoverIn = () => {
      isHovering.current = true;
      scaleSpring.set(2.5);
    };
    const handleHoverOut = () => {
      isHovering.current = false;
      scaleSpring.set(1);
    };

    window.addEventListener("mousemove", moveCursor);

    // Attach to all interactive elements
    const interactives = document.querySelectorAll("a, button, [data-cursor-hover]");
    interactives.forEach((el) => {
      el.addEventListener("mouseenter", handleHoverIn);
      el.addEventListener("mouseleave", handleHoverOut);
    });

    return () => {
      document.body.style.cursor = "";
      window.removeEventListener("mousemove", moveCursor);
      interactives.forEach((el) => {
        el.removeEventListener("mouseenter", handleHoverIn);
        el.removeEventListener("mouseleave", handleHoverOut);
      });
    };
  }, [cursorX, cursorY, scaleSpring]);

  return (
    <>
      {/* Outer ring — follows with lag */}
      <motion.div
        className="fixed top-0 left-0 w-10 h-10 rounded-full border border-white/60 pointer-events-none z-[9999] mix-blend-difference"
        style={{ x, y, scale: scaleSpring }}
      />
      {/* Inner dot — snappy */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 rounded-full bg-white pointer-events-none z-[9999] translate-x-4 translate-y-4 mix-blend-difference"
        style={{ x: dotX, y: dotY }}
      />
    </>
  );
}
```

---

## PAGE TRANSITIONS

### Smooth Page Transitions (App Router)

```tsx
// components/PageTransition.tsx
"use client";

import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

const variants = {
  initial: { opacity: 0, y: 20 },
  enter:   { opacity: 1, y: 0,  transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
  exit:    { opacity: 0, y: -20, transition: { duration: 0.3, ease: [0.7, 0, 0.84, 0] } },
};

export function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname}
        variants={variants}
        initial="initial"
        animate="enter"
        exit="exit"
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}

// Curtain-style transition (more dramatic)
export function CurtainTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <AnimatePresence mode="wait">
      <motion.div key={pathname}>
        {/* Curtain overlay */}
        <motion.div
          className="fixed inset-0 bg-black z-50 origin-bottom"
          initial={{ scaleY: 1 }}
          animate={{ scaleY: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.1 } }}
          exit={{ scaleY: 1, transformOrigin: "top", transition: { duration: 0.5, ease: [0.7, 0, 0.84, 0] } }}
        />
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
```

---

## MICRO-INTERACTIONS

### Magnetic Button

```tsx
// components/MagneticButton.tsx
"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";

export function MagneticButton({ children, className }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLButtonElement>(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = ref.current!.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const dx = e.clientX - centerX;
    const dy = e.clientY - centerY;

    setPos({ x: dx * 0.35, y: dy * 0.35 });
  };

  const handleMouseLeave = () => setPos({ x: 0, y: 0 });

  return (
    <motion.button
      ref={ref}
      className={className}
      animate={{ x: pos.x, y: pos.y }}
      transition={{ type: "spring", damping: 20, stiffness: 300 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </motion.button>
  );
}
```

### Text Reveal on Hover (Link)

```tsx
// components/HoverRevealLink.tsx
"use client";

import { motion } from "framer-motion";

export function HoverRevealLink({ href, label }: { href: string; label: string }) {
  return (
    <a href={href} className="group relative inline-block overflow-hidden">
      {/* Primary text */}
      <motion.span
        className="block font-display font-bold text-xl"
        initial={{ y: 0 }}
        whileHover={{ y: "-100%" }}
        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
      >
        {label}
      </motion.span>

      {/* Hover text (offset color) */}
      <motion.span
        className="absolute inset-0 block font-display font-bold text-xl text-accent"
        initial={{ y: "100%" }}
        whileHover={{ y: "0%" }}
        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
        aria-hidden
      >
        {label}
      </motion.span>
    </a>
  );
}
```

### Count-Up Statistic

```tsx
// components/CountUpStat.tsx
"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

function useCountUp(target: number, duration = 2000) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      // Ease out expo
      const eased = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [target, duration]);

  return count;
}

export function CountUpStat({ value, suffix = "", label }: { value: number; suffix?: string; label: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const count = isInView ? useCountUp(value) : 0;

  return (
    <div ref={ref} className="flex flex-col">
      <span className="text-display-xl font-display font-black text-white tabular-nums">
        {count.toLocaleString()}{suffix}
      </span>
      <span className="text-white/50 text-sm tracking-widest uppercase mt-2">{label}</span>
    </div>
  );
}
```

---

## CREATIVE LAYOUT PATTERNS

### Asymmetric Grid

```tsx
// Asymmetric 12-column bento-style grid
export function AsymmetricGrid({ items }: { items: GridItem[] }) {
  return (
    <div className="grid grid-cols-12 gap-4 auto-rows-[200px]">
      {/* Large feature card */}
      <div className="col-span-7 row-span-2 bg-neutral-900 rounded-2xl p-8 flex flex-col justify-end">
        {/* Main content */}
      </div>

      {/* Tall narrow card */}
      <div className="col-span-5 row-span-2 bg-neutral-800 rounded-2xl overflow-hidden">
        {/* Tall image or content */}
      </div>

      {/* Wide short card */}
      <div className="col-span-12 row-span-1 bg-neutral-900 rounded-2xl p-6">
        {/* Horizontal content */}
      </div>

      {/* Two equal cards */}
      <div className="col-span-6 row-span-2 bg-neutral-800 rounded-2xl p-6">
      </div>
      <div className="col-span-6 row-span-2 bg-neutral-800 rounded-2xl p-6">
      </div>
    </div>
  );
}
```

---

## PERFORMANCE RULES

```
BUDGET:
├── Total bundle: < 500 KB gzipped
├── First Contentful Paint: < 1.2s
├── Largest Contentful Paint: < 2.5s
├── Time to Interactive: < 3.5s
└── Cumulative Layout Shift: < 0.1

GSAP:
✅ Register plugins once at module level
✅ Always use gsap.context() for cleanup
✅ Use gsap.matchMedia() for responsive animation
❌ Never animate width/height — use transform + scale
❌ Never animate top/left — use translateX/translateY

FRAMER MOTION:
✅ Use LazyMotion with domAnimation for bundle savings
✅ Use useReducedMotion() hook — respect accessibility
✅ Animate transform, opacity only (GPU-composited)
❌ Don't wrap every element in motion.div
❌ Avoid layout animations on long lists

IMAGES:
✅ Always use next/image with explicit width/height
✅ Always provide blurDataURL placeholder
✅ Use priority={true} for above-fold images
✅ Use sizes prop for responsive images

FONTS:
✅ Use next/font for zero-CLS font loading
✅ Prefer variable fonts (one file, all weights)
✅ Preload critical fonts in layout.tsx
```

---

## ANIMATION EASING REFERENCE

```css
/* Easing cheat sheet */
--ease-expo-out:    cubic-bezier(0.16, 1, 0.3, 1);    /* Snappy entries */
--ease-expo-in:     cubic-bezier(0.7, 0, 0.84, 0);    /* Quick exits */
--ease-spring:      cubic-bezier(0.34, 1.56, 0.64, 1); /* Playful bounce */
--ease-smooth:      cubic-bezier(0.4, 0, 0.2, 1);     /* Material smooth */
--ease-circ-out:    cubic-bezier(0, 0.55, 0.45, 1);   /* Slightly bouncy */
--ease-back-out:    cubic-bezier(0.34, 1.56, 0.64, 1); /* Slight overshoot */

/* Duration guidelines */
--duration-instant: 100ms;   /* Hover state micro-changes */
--duration-fast:    200ms;   /* Button states, tooltips */
--duration-normal:  350ms;   /* Standard transitions */
--duration-slow:    600ms;   /* Page sections */
--duration-deliberate: 1000ms; /* Hero animations, reveals */
```

---

## DESIGN CHECKLIST

```
PRE-LAUNCH:
[ ] Custom cursor (desktop)
[ ] Page transition (not a hard cut)
[ ] Hero animation (first impression polished)
[ ] At least 1 scroll-triggered animation
[ ] Hover states on all interactive elements
[ ] Loading state / page loader
[ ] Reduced motion media query respected
[ ] Mobile animations simplified (not disabled)

TYPOGRAPHY:
[ ] Display size type used in at least one section
[ ] Type hierarchy clear at a glance (no more than 3 sizes)
[ ] Line height tight for display, comfortable for body (1.5–1.6)
[ ] Tracking adjusted per size (tighter for large, normal for small)

LAYOUT:
[ ] Not all sections are centered or symmetric
[ ] At least one element bleeds to edge or overlaps
[ ] Grid is 12-column based (even if asymmetrically used)
[ ] Generous whitespace between sections

PERFORMANCE:
[ ] Lighthouse Performance > 90 on desktop
[ ] No layout shift on font load
[ ] Images have explicit dimensions
[ ] GSAP contexts properly cleaned up
```

---

*Awwwards-Level Web Design — Available on ClawMart*
*Deploy this SKILL.md to any OpenClaw agent to activate award-level design mode.*
