"use client";
import React from "react";
import { motion } from "framer-motion";
import { MessageCircle, FileText, Shield, RefreshCw } from "lucide-react";

const steps = [
  {
    num: "01",
    label: "Talk",
    icon: MessageCircle,
    desc: "A relaxed, zero-pressure kwentuhan to understand where you are financially.",
    accent: "#C8102E",
  },
  {
    num: "02",
    label: "Plan",
    icon: FileText,
    desc: "A custom strategy built around your real numbers, income, and life goals.",
    accent: "#E8112D",
  },
  {
    num: "03",
    label: "Protect",
    icon: Shield,
    desc: "We lock in your coverage and set up the financial safety net your family needs.",
    accent: "#C8102E",
  },
  {
    num: "04",
    label: "Review",
    icon: RefreshCw,
    desc: "Regular check-ins to adjust and optimize as your life and income grow.",
    accent: "#E8112D",
  },
];

export default function ProcessSection() {
  return (
    <section
      id="process"
      style={{
        width: "100%",
        padding: "8rem 1.5rem",
        background: "linear-gradient(180deg, #0A0A0A 0%, #111111 100%)",
        overflow: "hidden",
        position: "relative",
      }}
    >
      {/* Background elements */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          top: "50%",
          left: "-10%",
          transform: "translateY(-50%)",
          width: "40vw",
          height: "40vw",
          borderRadius: "9999px",
          background: "radial-gradient(circle, rgba(200,16,46,0.06) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div style={{ maxWidth: "90rem", margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "5.5rem" }}>
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
            The Process
          </p>
          <motion.h2
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontWeight: 700,
              fontSize: "clamp(2rem, 4.5vw, 3.75rem)",
              color: "var(--color-text)",
              margin: 0,
            }}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            How it{" "}
            <span
              style={{
                fontStyle: "italic",
                background: "linear-gradient(135deg, #FFFFFF 0%, #C8102E 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              works
            </span>
          </motion.h2>
        </div>

        {/* Steps */}
        <div className="process-grid" style={{ display: "grid", gridTemplateColumns: "1fr", gap: "0" }}>
          {steps.map((s, i) => (
            <motion.div
              key={i}
              style={{
                display: "grid",
                gridTemplateColumns: "5rem 1fr",
                gap: "2.5rem",
                alignItems: "flex-start",
                padding: "2.75rem 0",
                borderBottom: i < steps.length - 1 ? "1px solid rgba(255,255,255,0.05)" : "none",
                position: "relative",
              }}
              initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.7, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              {/* Step number */}
              <div style={{ textAlign: "right", paddingTop: "0.5rem", position: "relative" }}>
                <span
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontWeight: 700,
                    fontSize: "4.5rem",
                    lineHeight: 1,
                    background: `linear-gradient(135deg, ${s.accent} 0%, transparent 100%)`,
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                    opacity: 0.25,
                  }}
                >
                  {s.num}
                </span>
              </div>

              {/* Content */}
              <div>
                <div style={{ display: "flex", alignItems: "center", gap: "1.25rem", marginBottom: "1rem" }}>
                  <motion.div
                    style={{
                      width: "3rem",
                      height: "3rem",
                      background: `linear-gradient(135deg, ${s.accent}20 0%, ${s.accent}08 100%)`,
                      border: `1px solid ${s.accent}35`,
                      borderRadius: "1rem",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: s.accent,
                      flexShrink: 0,
                    }}
                    whileHover={{ scale: 1.1, background: `${s.accent}30` }}
                  >
                    <s.icon size={18} />
                  </motion.div>
                  <h3
                    style={{
                      fontFamily: "'Cormorant Garamond', serif",
                      fontWeight: 700,
                      fontSize: "clamp(1.5rem, 3vw, 2rem)",
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
                    lineHeight: 1.85,
                    maxWidth: "36rem",
                    margin: 0,
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    fontWeight: 400,
                  }}
                >
                  {s.desc}
                </p>
              </div>

              {/* Vertical connector line */}
              {i < steps.length - 1 && (
                <div
                  style={{
                    position: "absolute",
                    left: "5rem",
                    bottom: 0,
                    transform: "translateX(calc(50% + 1.25rem))",
                    width: "1px",
                    height: "2.75rem",
                    background: `linear-gradient(to bottom, ${s.accent}50, transparent)`,
                  }}
                />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
