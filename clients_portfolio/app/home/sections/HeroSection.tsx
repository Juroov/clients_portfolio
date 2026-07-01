"use client";
import React, { useEffect, useRef } from "react";
import { motion, useAnimationControls } from "framer-motion";
import { ChevronRight, ArrowDown } from "lucide-react";

/* Animated number ticker */
function Ticker({ value, suffix = "" }: { value: number; suffix?: string }) {
  const controls = useAnimationControls();
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          let start = 0;
          const step = value / 60;
          const interval = setInterval(() => {
            start = Math.min(start + step, value);
            if (ref.current) ref.current.textContent = Math.round(start) + suffix;
            if (start >= value) clearInterval(interval);
          }, 16);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <span ref={ref}>0{suffix}</span>;
}

const container = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.14, delayChildren: 0.2 } },
};
const line = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
};

const stats = [
  { value: 200, suffix: "+", label: "Families Served" },
  { value: 50, suffix: "+", label: "School Talks" },
  { value: 30, suffix: "+", label: "Community Events" },
];

export default function HeroSection() {
  return (
    <section
      id="home"
      style={{
        width: "100%",
        minHeight: "100vh",
        backgroundColor: "var(--color-bg)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        overflow: "hidden",
        paddingTop: "5rem",
      }}
    >
      {/* Large decorative background letters */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
          pointerEvents: "none",
          userSelect: "none",
        }}
      >
        <span
          style={{
            fontFamily: "'Anton', sans-serif",
            fontSize: "clamp(16rem, 40vw, 36rem)",
            lineHeight: 1,
            color: "var(--color-accent)",
            opacity: 0.04,
            letterSpacing: "-0.05em",
            whiteSpace: "nowrap",
          }}
        >
          KM
        </span>
      </div>

      {/* Accent circle top-right */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          top: "-8rem",
          right: "-8rem",
          width: "32rem",
          height: "32rem",
          borderRadius: "9999px",
          backgroundColor: "var(--color-accent)",
          opacity: 0.05,
          filter: "blur(60px)",
          pointerEvents: "none",
        }}
      />
      {/* Green circle bottom-left */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          bottom: "-6rem",
          left: "-6rem",
          width: "28rem",
          height: "28rem",
          borderRadius: "9999px",
          backgroundColor: "var(--color-green)",
          opacity: 0.06,
          filter: "blur(60px)",
          pointerEvents: "none",
        }}
      />

      {/* Main content */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        style={{
          maxWidth: "64rem",
          width: "100%",
          padding: "0 1.5rem",
          textAlign: "center",
          position: "relative",
          zIndex: 10,
        }}
      >
        {/* Eyebrow */}
        <motion.div variants={line} style={{ marginBottom: "1.5rem" }}>
          <span
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              backgroundColor: "rgba(176,23,39,0.1)",
              color: "var(--color-accent)",
              borderRadius: "9999px",
              padding: "0.375rem 1rem",
              fontSize: "0.75rem",
              fontWeight: 700,
              fontFamily: "'DM Sans', sans-serif",
              textTransform: "uppercase",
              letterSpacing: "0.12em",
            }}
          >
            <span style={{ width: "6px", height: "6px", borderRadius: "9999px", backgroundColor: "var(--color-accent)", display: "inline-block" }} />
            Licensed Professional Teacher · Financial Advisor
          </span>
        </motion.div>

        {/* PLAN WITH YOUR */}
        <motion.p
          variants={line}
          style={{
            fontFamily: "'Anton', sans-serif",
            fontSize: "clamp(2.5rem, 8vw, 6rem)",
            lineHeight: 1,
            letterSpacing: "0.04em",
            textTransform: "uppercase",
            color: "var(--color-accent)",
            margin: 0,
          }}
        >
          Plan With Your
        </motion.p>

        {/* Financial */}
        <motion.h1
          variants={line}
          style={{
            fontFamily: "'Kaushan Script', cursive",
            fontSize: "clamp(4.5rem, 18vw, 14rem)",
            lineHeight: 0.88,
            color: "var(--color-accent)",
            margin: "0.25rem 0 0",
            letterSpacing: "-0.01em",
            textShadow: "0 4px 32px rgba(176,23,39,0.12)",
          }}
        >
          Financial
        </motion.h1>

        {/* Kuya — bold serif contrast */}
        <motion.div variants={line} style={{ lineHeight: 0.9, margin: "0.1rem 0 0" }}>
          <span
            style={{
              fontFamily: "'Kaushan Script', cursive",
              fontSize: "clamp(3.5rem, 14vw, 11rem)",
              color: "var(--color-accent-bright)",
              display: "inline-block",
            }}
          >
            Kuya
          </span>
        </motion.div>

        {/* Name + tagline */}
        <motion.div variants={line} style={{ marginTop: "2.5rem" }}>
          <h2
            style={{
              fontFamily: "'Playfair Display', serif",
              fontWeight: 800,
              fontSize: "clamp(1.25rem, 3vw, 2rem)",
              color: "var(--color-accent-dark)",
              margin: 0,
              letterSpacing: "-0.01em",
            }}
          >
            Matt Gaven Matibag,{" "}
            <span style={{ color: "var(--color-accent)" }}>LPT</span>
          </h2>
          <p
            style={{
              marginTop: "0.875rem",
              fontSize: "clamp(1rem, 1.8vw, 1.125rem)",
              color: "var(--color-text)",
              opacity: 0.75,
              maxWidth: "34rem",
              margin: "0.875rem auto 0",
              lineHeight: 1.75,
            }}
          >
            Helping Filipino individuals and families build financial security,
            protection, and confidence for the future.
          </p>
        </motion.div>

        {/* CTAs */}
        <motion.div
          variants={line}
          style={{ marginTop: "2.5rem", display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}
        >
          <motion.a
            href="#start-plan"
            style={{
              backgroundColor: "var(--color-accent)",
              color: "#fff",
              padding: "1rem 2.25rem",
              borderRadius: "9999px",
              fontWeight: 700,
              textDecoration: "none",
              fontSize: "1rem",
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              boxShadow: "0 8px 24px rgba(176,23,39,0.3)",
            }}
            whileHover={{ scale: 1.05, boxShadow: "0 12px 32px rgba(176,23,39,0.4)" }}
            whileTap={{ scale: 0.97 }}
          >
            Plan With Kuya Matt <ChevronRight size={18} />
          </motion.a>
          <motion.a
            href="#about"
            style={{
              border: "2px solid var(--color-accent)",
              color: "var(--color-accent)",
              padding: "1rem 2.25rem",
              borderRadius: "9999px",
              fontWeight: 700,
              textDecoration: "none",
              fontSize: "1rem",
            }}
            whileHover={{ backgroundColor: "var(--color-accent)", color: "#fff", scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
          >
            Meet Kuya Matt
          </motion.a>
        </motion.div>

        {/* Stats strip */}
        <motion.div
          variants={line}
          style={{
            marginTop: "4rem",
            display: "flex",
            justifyContent: "center",
            gap: "clamp(1.5rem, 4vw, 4rem)",
            flexWrap: "wrap",
          }}
        >
          {stats.map((s, i) => (
            <div key={i} style={{ textAlign: "center" }}>
              <div
                style={{
                  fontFamily: "'Anton', sans-serif",
                  fontSize: "clamp(2rem, 4vw, 3rem)",
                  color: "var(--color-accent)",
                  lineHeight: 1,
                }}
              >
                <Ticker value={s.value} suffix={s.suffix} />
              </div>
              <div
                style={{
                  fontSize: "0.8125rem",
                  fontWeight: 600,
                  color: "var(--color-text-muted)",
                  marginTop: "0.25rem",
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                }}
              >
                {s.label}
              </div>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        style={{
          position: "absolute",
          bottom: "2rem",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "0.5rem",
          color: "var(--color-text-muted)",
          fontSize: "0.75rem",
          fontWeight: 600,
          letterSpacing: "0.1em",
          textTransform: "uppercase",
        }}
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
      >
        <span>Scroll</span>
        <ArrowDown size={16} />
      </motion.div>
    </section>
  );
}
