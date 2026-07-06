"use client";
import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";

const testimonials = [
  {
    quote: "Kuya Juan didn't try to sell me a package I didn't need. He looked at my freelance income and built something that actually made sense. First time a finance guy spoke my language.",
    name: "Dave",
    age: 28,
    role: "Software Engineer",
    initials: "D",
    color: "#C8102E",
  },
  {
    quote: "I thought insurance was for titos and titas. Kuya Juan showed me the math on starting now vs later. No-brainer. Super clean, no pressure.",
    name: "Trisha",
    age: 26,
    role: "Agency Founder",
    initials: "T",
    color: "#E8112D",
  },
  {
    quote: "As a fresh grad I had zero clue about money. Kuya Juan walked me through everything step by step. Now I have a plan before even my first paycheck.",
    name: "Marco",
    age: 23,
    role: "Fresh Graduate",
    initials: "M",
    color: "#C8102E",
  },
  {
    quote: "His approach is so different — he educates first, sells second. That immediately built my trust. My whole family is now covered thanks to Kuya Juan.",
    name: "Carla",
    age: 34,
    role: "OFW Spouse",
    initials: "C",
    color: "#E8112D",
  },
];

const AUTOPLAY_INTERVAL = 5500;

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);
  const [paused, setPaused] = useState(false);

  const go = useCallback(
    (idx: number) => {
      setDirection(idx > current ? 1 : -1);
      setCurrent(idx);
    },
    [current]
  );

  const next = useCallback(() => {
    setDirection(1);
    setCurrent((p) => (p + 1) % testimonials.length);
  }, []);

  const prev = useCallback(() => {
    setDirection(-1);
    setCurrent((p) => (p - 1 + testimonials.length) % testimonials.length);
  }, []);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(next, AUTOPLAY_INTERVAL);
    return () => clearInterval(id);
  }, [paused, next]);

  const variants = {
    enter: (dir: number) => ({ opacity: 0, x: dir > 0 ? 100 : -100, scale: 0.97 }),
    center: { opacity: 1, x: 0, scale: 1 },
    exit: (dir: number) => ({ opacity: 0, x: dir > 0 ? -100 : 100, scale: 0.97 }),
  };

  const t = testimonials[current];

  return (
    <section
      id="testimonials"
      style={{
        width: "100%",
        padding: "8rem 1.5rem",
        background: "linear-gradient(180deg, #111111 0%, #0A0A0A 100%)",
        overflow: "hidden",
        position: "relative",
      }}
    >
      {/* Background glow */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "60vw",
          height: "40vw",
          borderRadius: "9999px",
          background: `radial-gradient(ellipse, ${t.color}08 0%, transparent 70%)`,
          pointerEvents: "none",
          transition: "background 600ms ease",
        }}
      />

      <div style={{ maxWidth: "90rem", margin: "0 auto" }}>
        {/* ── Header ── */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            marginBottom: "4rem",
            flexWrap: "wrap",
            gap: "1.5rem",
          }}
        >
          <div>
            <p
              style={{
                fontFamily: "'Syne', sans-serif",
                textTransform: "uppercase",
                letterSpacing: "0.2em",
                fontSize: "0.7rem",
                color: "#C8102E",
                marginBottom: "0.875rem",
                fontWeight: 700,
              }}
            >
              Client Stories
            </p>
            <motion.h2
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontWeight: 700,
                fontSize: "clamp(2rem, 4.5vw, 3.75rem)",
                color: "var(--color-text)",
                lineHeight: 1.05,
                margin: 0,
              }}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            >
              Don&apos;t just take{" "}
              <span
                style={{
                  fontStyle: "italic",
                  background: "linear-gradient(135deg, #FFFFFF 0%, #C8102E 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                my word
              </span>{" "}
              for it.
            </motion.h2>
          </div>

          {/* Controls */}
          <div style={{ display: "flex", gap: "0.75rem" }}>
            <motion.button
              onClick={prev}
              style={{
                width: "3rem",
                height: "3rem",
                borderRadius: "9999px",
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.1)",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "var(--color-text-muted)",
              }}
              whileHover={{ scale: 1.1, borderColor: "rgba(200,16,46,0.4)", color: "#FFFFFF" }}
              whileTap={{ scale: 0.93 }}
            >
              <ChevronLeft size={20} />
            </motion.button>
            <motion.button
              onClick={next}
              style={{
                width: "3rem",
                height: "3rem",
                borderRadius: "9999px",
                background: "linear-gradient(135deg, #C8102E, #E8112D)",
                border: "none",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#fff",
                boxShadow: "0 4px 16px rgba(200,16,46,0.4)",
              }}
              whileHover={{ scale: 1.1, boxShadow: "0 8px 24px rgba(200,16,46,0.55)" }}
              whileTap={{ scale: 0.93 }}
            >
              <ChevronRight size={20} />
            </motion.button>
          </div>
        </div>

        {/* ── Carousel ── */}
        <div
          style={{ position: "relative", minHeight: "20rem" }}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <AnimatePresence custom={direction} mode="wait">
            <motion.div
              key={current}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
              style={{
                background: "linear-gradient(135deg, #141414 0%, #111111 100%)",
                border: `1px solid ${t.color}20`,
                borderRadius: "2rem",
                padding: "clamp(2.25rem, 4.5vw, 3.5rem)",
                position: "relative",
                overflow: "hidden",
              }}
            >
              {/* Top accent line */}
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: "3rem",
                  right: "3rem",
                  height: "2px",
                  background: `linear-gradient(90deg, transparent, ${t.color}70, transparent)`,
                  borderRadius: "9999px",
                }}
              />

              {/* Quote mark */}
              <div
                style={{
                  position: "absolute",
                  top: "2.25rem",
                  right: "2.75rem",
                  color: t.color,
                  opacity: 0.08,
                }}
              >
                <Quote size={80} fill="currentColor" />
              </div>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr",
                  gap: "2.5rem",
                  alignItems: "center",
                }}
                className="test-inner"
              >
                {/* ── Avatar + info ── */}
                <div style={{ display: "flex", alignItems: "center", gap: "1.25rem" }}>
                  <div
                    style={{
                      width: "4.5rem",
                      height: "4.5rem",
                      background: `linear-gradient(135deg, ${t.color} 0%, ${t.color}80 100%)`,
                      color: "#fff",
                      borderRadius: "9999px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontFamily: "'Cormorant Garamond', serif",
                      fontWeight: 700,
                      fontStyle: "italic",
                      fontSize: "1.75rem",
                      flexShrink: 0,
                      boxShadow: `0 8px 24px ${t.color}40`,
                    }}
                  >
                    {t.initials}
                  </div>
                  <div>
                    <div
                      style={{
                        fontWeight: 700,
                        color: "var(--color-text)",
                        fontSize: "1.0625rem",
                        fontFamily: "'Cormorant Garamond', serif",
                        marginBottom: "0.125rem",
                      }}
                    >
                      {t.name}, {t.age}
                    </div>
                    <div
                      style={{
                        fontSize: "0.8125rem",
                        color: "var(--color-text-muted)",
                        fontFamily: "'Plus Jakarta Sans', sans-serif",
                        fontWeight: 500,
                        marginBottom: "0.5rem",
                      }}
                    >
                      {t.role}
                    </div>
                    {/* Stars */}
                    <div style={{ display: "flex", gap: "3px" }}>
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={13} fill={t.color} color={t.color} />
                      ))}
                    </div>
                  </div>
                </div>

                {/* ── Quote text ── */}
                <p
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontStyle: "italic",
                    fontWeight: 500,
                    fontSize: "clamp(1.25rem, 2.5vw, 1.625rem)",
                    lineHeight: 1.7,
                    color: "var(--color-text)",
                    margin: 0,
                    opacity: 0.9,
                  }}
                >
                  &ldquo;{t.quote}&rdquo;
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* ── Progress dots ── */}
        <div style={{ display: "flex", gap: "0.5rem", justifyContent: "center", marginTop: "2.5rem" }}>
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => go(i)}
              style={{
                width: i === current ? "2.75rem" : "0.5rem",
                height: "0.5rem",
                borderRadius: "9999px",
                background: i === current
                  ? "linear-gradient(90deg, #C8102E, #FFFFFF)"
                  : "rgba(255,255,255,0.1)",
                border: "none",
                cursor: "pointer",
                padding: 0,
                transition: "all 400ms ease",
                position: "relative",
                overflow: "hidden",
              }}
            >
              {i === current && !paused && (
                <motion.span
                  style={{
                    position: "absolute",
                    left: 0,
                    top: 0,
                    height: "100%",
                    backgroundColor: "rgba(255,255,255,0.4)",
                    borderRadius: "9999px",
                  }}
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{ duration: AUTOPLAY_INTERVAL / 1000, ease: "linear" }}
                  key={current}
                />
              )}
            </button>
          ))}
        </div>
      </div>

      <style>{`
        @media (min-width: 768px) {
          .test-inner { grid-template-columns: auto 1fr !important; }
        }
      `}</style>
    </section>
  );
}
