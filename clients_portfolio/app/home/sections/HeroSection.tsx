"use client";
import React, { useRef, useEffect } from "react";
import { motion, useScroll, useTransform, Variants } from "framer-motion";
import { ChevronRight } from "lucide-react";

function Ticker({ value, suffix = "" }: { value: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          let start = 0;
          const step = value / 80;
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

const container: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.3 } },
};
const line: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] } },
};

const stats = [
  { value: 200, suffix: "+", label: "Families Served" },
  { value: 50, suffix: "+", label: "School Talks" },
  { value: 30, suffix: "+", label: "Community Events" },
];

export default function HeroSection() {
  const { scrollY } = useScroll();
  const bgY = useTransform(scrollY, [0, 600], [0, 80]);
  const opacityOut = useTransform(scrollY, [0, 400], [1, 0]);

  return (
    <section
      id="home"
      style={{
        width: "100%",
        minHeight: "100vh",
        background: "var(--gradient-hero)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        overflow: "hidden",
        paddingTop: "5rem",
      }}
    >
      {/* ── Subtle grid texture ── */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)
          `,
          backgroundSize: "80px 80px",
          pointerEvents: "none",
          zIndex: 1,
        }}
      />

      {/* ── Crimson radial glow top ── */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          top: "-20%",
          left: "50%",
          transform: "translateX(-50%)",
          width: "80vw",
          height: "60vw",
          maxWidth: "900px",
          borderRadius: "9999px",
          background: "radial-gradient(ellipse, rgba(200,16,46,0.18) 0%, transparent 70%)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      {/* ── Rotating decorative ring ── */}
      <motion.div
        aria-hidden
        style={{
          position: "absolute",
          right: "-12%",
          top: "50%",
          translateY: "-50%",
          width: "60vw",
          height: "60vw",
          maxWidth: "650px",
          maxHeight: "650px",
          borderRadius: "9999px",
          border: "1px solid rgba(255,255,255,0.04)",
          pointerEvents: "none",
          zIndex: 1,
        }}
        animate={{ rotate: 360 }}
        transition={{ duration: 70, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        aria-hidden
        style={{
          position: "absolute",
          right: "-6%",
          top: "50%",
          translateY: "-50%",
          width: "42vw",
          height: "42vw",
          maxWidth: "460px",
          maxHeight: "460px",
          borderRadius: "9999px",
          border: "1px solid rgba(200,16,46,0.1)",
          pointerEvents: "none",
          zIndex: 1,
        }}
        animate={{ rotate: -360 }}
        transition={{ duration: 44, repeat: Infinity, ease: "linear" }}
      />

      {/* ── Main content ── */}
      <motion.div
        style={{
          opacity: opacityOut,
          y: bgY,
          maxWidth: "72rem",
          width: "100%",
          padding: "0 1.5rem",
          textAlign: "center",
          position: "relative",
          zIndex: 10,
        }}
      >
        <motion.div variants={container} initial="hidden" animate="visible">

          {/* ── Eyebrow badge ── */}
          <motion.div variants={line} style={{ marginBottom: "2.5rem" }}>
            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.625rem",
                background: "rgba(200,16,46,0.1)",
                border: "1px solid rgba(200,16,46,0.3)",
                borderRadius: "9999px",
                padding: "0.5rem 1.375rem",
                fontSize: "0.7rem",
                fontWeight: 700,
                fontFamily: "'Syne', sans-serif",
                textTransform: "uppercase",
                letterSpacing: "0.18em",
                color: "#E8112D",
              }}
            >
              <span
                style={{
                  width: "5px", height: "5px", borderRadius: "9999px",
                  backgroundColor: "#E8112D", display: "inline-block",
                  boxShadow: "0 0 6px rgba(232,17,45,0.8)",
                }}
              />
              Licensed Professional Teacher · Financial Advisor
            </span>
          </motion.div>

          {/* ── Pre-headline ── */}
          <motion.p
            variants={line}
            style={{
              fontFamily: "'Syne', sans-serif",
              fontSize: "clamp(0.8rem, 1.5vw, 0.9rem)",
              letterSpacing: "0.35em",
              textTransform: "uppercase",
              color: "rgba(255,255,255,0.35)",
              margin: "0 0 0.5rem",
              fontWeight: 600,
            }}
          >
            Plan With Your
          </motion.p>

          {/* ── FINANCIAL — white ── */}
          <motion.h1
            variants={line}
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontWeight: 700,
              fontStyle: "italic",
              fontSize: "clamp(5rem, 18vw, 15rem)",
              lineHeight: 0.85,
              margin: "0",
              letterSpacing: "-0.03em",
              color: "#FFFFFF",
              textShadow: "0 0 80px rgba(255,255,255,0.06)",
            }}
          >
            Financial
          </motion.h1>

          {/* ── KUYA — crimson ── */}
          <motion.div variants={line} style={{ lineHeight: 0.9, margin: "0.25rem 0 0" }}>
            <span
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontWeight: 700,
                fontStyle: "italic",
                fontSize: "clamp(3.5rem, 13vw, 11rem)",
                color: "#C8102E",
                display: "inline-block",
                letterSpacing: "-0.02em",
                filter: "drop-shadow(0 0 40px rgba(200,16,46,0.5))",
              }}
            >
              Kuya
            </span>
          </motion.div>

          {/* ── Name & tagline ── */}
          <motion.div variants={line} style={{ marginTop: "2.75rem" }}>
            <h2
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontWeight: 600,
                fontSize: "clamp(1.25rem, 3vw, 2rem)",
                color: "rgba(255,255,255,0.85)",
                margin: 0,
                letterSpacing: "0.02em",
              }}
            >
              Juan dela Cruz,{" "}
              <span style={{ color: "#C8102E", fontStyle: "italic" }}>LPT</span>
            </h2>
            <p
              style={{
                marginTop: "1rem",
                fontSize: "clamp(1rem, 1.8vw, 1.125rem)",
                color: "rgba(255,255,255,0.45)",
                maxWidth: "36rem",
                margin: "1rem auto 0",
                lineHeight: 1.85,
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontWeight: 400,
              }}
            >
              Helping Filipino individuals and families build financial security,
              protection, and confidence for the future.
            </p>
          </motion.div>

          {/* ── CTAs ── */}
          <motion.div
            variants={line}
            style={{ marginTop: "3rem", display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}
          >
            <motion.a
              href="#start-plan"
              style={{
                background: "#C8102E",
                color: "#fff",
                padding: "1rem 2.5rem",
                borderRadius: "9999px",
                fontWeight: 700,
                textDecoration: "none",
                fontSize: "0.9375rem",
                fontFamily: "'Syne', sans-serif",
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                boxShadow: "0 8px 32px rgba(200,16,46,0.45)",
                letterSpacing: "0.02em",
              }}
              whileHover={{ scale: 1.06, boxShadow: "0 16px 48px rgba(200,16,46,0.6)" }}
              whileTap={{ scale: 0.97 }}
            >
              Plan With Kuya Juan <ChevronRight size={18} />
            </motion.a>
            <motion.a
              href="#about"
              style={{
                background: "transparent",
                border: "1px solid rgba(255,255,255,0.2)",
                color: "rgba(255,255,255,0.8)",
                padding: "1rem 2.5rem",
                borderRadius: "9999px",
                fontWeight: 700,
                textDecoration: "none",
                fontSize: "0.9375rem",
                fontFamily: "'Syne', sans-serif",
                letterSpacing: "0.02em",
              }}
              whileHover={{
                borderColor: "rgba(255,255,255,0.5)",
                color: "#fff",
                scale: 1.04,
              }}
              whileTap={{ scale: 0.97 }}
            >
              Meet Kuya Juan
            </motion.a>
          </motion.div>

          {/* ── Stats ── */}
          <motion.div
            variants={line}
            style={{
              marginTop: "5rem",
              display: "flex",
              justifyContent: "center",
              gap: "clamp(2rem, 5vw, 6rem)",
              flexWrap: "wrap",
            }}
          >
            {stats.map((s, i) => (
              <div key={i} style={{ textAlign: "center" }}>
                <div
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontWeight: 700,
                    fontSize: "clamp(2.5rem, 5vw, 4rem)",
                    lineHeight: 1,
                    color: "#C8102E",
                  }}
                >
                  <Ticker value={s.value} suffix={s.suffix} />
                </div>
                <div
                  style={{
                    fontSize: "0.7rem",
                    fontWeight: 700,
                    color: "rgba(255,255,255,0.35)",
                    marginTop: "0.375rem",
                    textTransform: "uppercase",
                    letterSpacing: "0.14em",
                    fontFamily: "'Syne', sans-serif",
                  }}
                >
                  {s.label}
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>

      {/* ── Scroll indicator ── */}
      <motion.div
        style={{
          position: "absolute",
          bottom: "2.5rem",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "0.5rem",
          color: "rgba(255,255,255,0.25)",
          fontSize: "0.6rem",
          fontWeight: 700,
          letterSpacing: "0.25em",
          textTransform: "uppercase",
          fontFamily: "'Syne', sans-serif",
          zIndex: 10,
        }}
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
      >
        <span>Scroll</span>
        <div
          style={{
            width: "1px",
            height: "2.5rem",
            background: "linear-gradient(to bottom, rgba(200,16,46,0.7), transparent)",
          }}
        />
      </motion.div>
    </section>
  );
}
