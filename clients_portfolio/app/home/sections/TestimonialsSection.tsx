"use client";
import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    quote: "Kuya Matt didn't try to sell me a package I didn't need. He looked at my freelance income and built something that actually made sense. First time a finance guy spoke my language.",
    name: "Dave",
    age: 28,
    role: "Software Engineer",
    initials: "D",
  },
  {
    quote: "I thought insurance was for titos and titas. Kuya Matt showed me the math on starting now vs later. No-brainer. Super clean, no pressure.",
    name: "Trisha",
    age: 26,
    role: "Agency Founder",
    initials: "T",
  },
  {
    quote: "As a fresh grad I had zero clue about money. Kuya Matt walked me through everything step by step. Now I have a plan before even my first paycheck.",
    name: "Marco",
    age: 23,
    role: "Fresh Graduate",
    initials: "M",
  },
  {
    quote: "His approach is so different — he educates first, sells second. That immediately built my trust. My whole family is now covered thanks to Kuya Matt.",
    name: "Carla",
    age: 34,
    role: "OFW Spouse",
    initials: "C",
  },
];

const AUTOPLAY_INTERVAL = 5000;

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

  // Autoplay
  useEffect(() => {
    if (paused) return;
    const id = setInterval(next, AUTOPLAY_INTERVAL);
    return () => clearInterval(id);
  }, [paused, next]);

  const variants = {
    enter: (dir: number) => ({ opacity: 0, x: dir > 0 ? 80 : -80 }),
    center: { opacity: 1, x: 0 },
    exit: (dir: number) => ({ opacity: 0, x: dir > 0 ? -80 : 80 }),
  };

  return (
    <section
      id="testimonials"
      style={{
        width: "100%",
        padding: "7rem 1.5rem",
        backgroundColor: "var(--color-bg)",
        overflow: "hidden",
      }}
    >
      <div style={{ maxWidth: "80rem", margin: "0 auto" }}>
        {/* Header row */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            marginBottom: "3.5rem",
            flexWrap: "wrap",
            gap: "1rem",
          }}
        >
          <div>
            <p
              style={{
                fontFamily: "'Anton', sans-serif",
                textTransform: "uppercase",
                letterSpacing: "0.15em",
                fontSize: "0.8rem",
                color: "var(--color-text-muted)",
                marginBottom: "0.5rem",
              }}
            >
              Client Stories
            </p>
            <motion.h2
              style={{
                fontFamily: "'Playfair Display', serif",
                fontWeight: 900,
                fontSize: "clamp(2rem, 4vw, 3.25rem)",
                color: "var(--color-accent)",
                lineHeight: 1.1,
                margin: 0,
              }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              Don&apos;t just take{" "}
              <span
                style={{
                  fontFamily: "'Kaushan Script', cursive",
                  fontSize: "1.05em",
                  color: "var(--color-accent-bright)",
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
                backgroundColor: "#fff",
                border: "2px solid var(--color-border-strong)",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "var(--color-accent)",
              }}
              whileHover={{ scale: 1.1, borderColor: "var(--color-accent)", backgroundColor: "var(--color-accent)", color: "#fff" }}
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
                backgroundColor: "var(--color-accent)",
                border: "2px solid var(--color-accent)",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#fff",
              }}
              whileHover={{ scale: 1.1, backgroundColor: "var(--color-accent-dark)" }}
              whileTap={{ scale: 0.93 }}
            >
              <ChevronRight size={20} />
            </motion.button>
          </div>
        </div>

        {/* Carousel */}
        <div
          style={{ position: "relative", minHeight: "18rem" }}
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
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              style={{
                backgroundColor: "#fff",
                border: "1px solid var(--color-border)",
                borderRadius: "1.5rem",
                padding: "clamp(2rem, 4vw, 3rem)",
                boxShadow: "0 4px 30px rgba(0,0,0,0.07)",
                position: "relative",
              }}
            >
              {/* Quote icon */}
              <div
                style={{
                  position: "absolute",
                  top: "2rem",
                  right: "2.5rem",
                  color: "var(--color-accent)",
                  opacity: 0.12,
                }}
              >
                <Quote size={72} fill="currentColor" />
              </div>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr",
                  gap: "2rem",
                  alignItems: "center",
                }}
                className="test-inner"
              >
                {/* Avatar */}
                <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                  <div
                    style={{
                      width: "4rem",
                      height: "4rem",
                      backgroundColor: "var(--color-accent)",
                      color: "#fff",
                      borderRadius: "9999px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontFamily: "'Playfair Display', serif",
                      fontWeight: 900,
                      fontSize: "1.5rem",
                      flexShrink: 0,
                    }}
                  >
                    {testimonials[current].initials}
                  </div>
                  <div>
                    <div
                      style={{
                        fontWeight: 700,
                        color: "var(--color-text)",
                        fontSize: "1rem",
                      }}
                    >
                      {testimonials[current].name}, {testimonials[current].age}
                    </div>
                    <div style={{ fontSize: "0.8125rem", color: "var(--color-text-muted)" }}>
                      {testimonials[current].role}
                    </div>
                    {/* Stars */}
                    <div style={{ display: "flex", gap: "2px", marginTop: "4px" }}>
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="var(--color-accent)">
                          <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" />
                        </svg>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Quote text */}
                <p
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontStyle: "italic",
                    fontSize: "clamp(1.125rem, 2.2vw, 1.375rem)",
                    lineHeight: 1.75,
                    color: "var(--color-text)",
                    margin: 0,
                  }}
                >
                  &ldquo;{testimonials[current].quote}&rdquo;
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Dot + progress indicators */}
        <div
          style={{ display: "flex", gap: "0.5rem", justifyContent: "center", marginTop: "2rem" }}
        >
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => go(i)}
              style={{
                width: i === current ? "2.5rem" : "0.5rem",
                height: "0.5rem",
                borderRadius: "9999px",
                backgroundColor: i === current ? "var(--color-accent)" : "var(--color-border-strong)",
                border: "none",
                cursor: "pointer",
                padding: 0,
                transition: "all 350ms ease",
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
                    backgroundColor: "rgba(255,255,255,0.45)",
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
