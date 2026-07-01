"use client";
import React from "react";
import { motion } from "framer-motion";

const steps = [
  { num: "01", label: "Talk", desc: "A relaxed, zero-pressure kwentuhan to understand where you are financially." },
  { num: "02", label: "Plan", desc: "A custom strategy built around your real numbers, income, and life goals." },
  { num: "03", label: "Protect", desc: "We lock in your coverage and set up the financial safety net your family needs." },
  { num: "04", label: "Review", desc: "Regular check-ins to adjust and optimize as your life and income grow." },
];

export default function ProcessSection() {
  return (
    <section
      id="process"
      style={{
        width: "100%",
        padding: "7rem 1.5rem",
        backgroundColor: "var(--color-bg-elevated)",
        overflow: "hidden",
      }}
    >
      <div style={{ maxWidth: "80rem", margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "5rem" }}>
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
            The Process
          </p>
          <motion.h2
            style={{
              fontFamily: "'Playfair Display', serif",
              fontWeight: 900,
              fontSize: "clamp(2rem, 4vw, 3.25rem)",
              color: "var(--color-text)",
              margin: 0,
            }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            How it{" "}
            <span
              style={{
                fontFamily: "'Kaushan Script', cursive",
                color: "var(--color-accent)",
                fontSize: "1.1em",
              }}
            >
              works
            </span>
          </motion.h2>
        </div>

        {/* Steps */}
        <div
          style={{ display: "grid", gridTemplateColumns: "1fr", gap: "0" }}
          className="process-steps"
        >
          {steps.map((s, i) => (
            <motion.div
              key={i}
              style={{
                display: "grid",
                gridTemplateColumns: "auto 1fr",
                gap: "2rem",
                alignItems: "flex-start",
                padding: "2.5rem 0",
                borderBottom: i < steps.length - 1 ? "1px solid var(--color-border)" : "none",
              }}
              initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
            >
              {/* Number */}
              <div style={{ width: "5rem", textAlign: "right", paddingTop: "0.25rem" }}>
                <span
                  style={{
                    fontFamily: "'Anton', sans-serif",
                    fontSize: "3.5rem",
                    lineHeight: 1,
                    color: "var(--color-accent)",
                    opacity: 0.18,
                  }}
                >
                  {s.num}
                </span>
              </div>
              {/* Content */}
              <div>
                <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "0.75rem" }}>
                  <div
                    style={{
                      width: "2.75rem",
                      height: "2.75rem",
                      backgroundColor: "var(--color-accent)",
                      color: "#fff",
                      borderRadius: "9999px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontFamily: "'Playfair Display', serif",
                      fontWeight: 900,
                      fontSize: "1rem",
                      flexShrink: 0,
                    }}
                  >
                    {i + 1}
                  </div>
                  <h3
                    style={{
                      fontFamily: "'Playfair Display', serif",
                      fontWeight: 700,
                      fontSize: "clamp(1.375rem, 2.5vw, 1.75rem)",
                      color: "var(--color-text)",
                      margin: 0,
                    }}
                  >
                    {s.label}
                  </h3>
                </div>
                <p
                  style={{
                    fontSize: "1rem",
                    color: "var(--color-text-muted)",
                    lineHeight: 1.75,
                    maxWidth: "36rem",
                    margin: 0,
                  }}
                >
                  {s.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        @media (min-width: 768px) {
          .process-steps { gap: 0 !important; }
        }
      `}</style>
    </section>
  );
}
