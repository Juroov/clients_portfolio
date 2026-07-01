"use client";
import React from "react";
import { motion } from "framer-motion";

const items = [
  { count: "200+", label: "Families Served", desc: "Individuals and families with active financial plans" },
  { count: "50+", label: "School Talks", desc: "Financial literacy sessions in public & private schools" },
  { count: "30+", label: "Community Events", desc: "Barangay and community advocacy programs" },
  { count: "15+", label: "Corporate Partners", desc: "Companies reached through workplace wellness talks" },
];

export default function EngagementsSection() {
  return (
    <section
      id="engagements"
      style={{
        width: "100%",
        padding: "7rem 1.5rem",
        backgroundColor: "var(--color-green)",
        color: "var(--color-inverse)",
        overflow: "hidden",
        position: "relative",
      }}
    >
      {/* Background number */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          right: "-2rem",
          bottom: "-2rem",
          fontFamily: "'Anton', sans-serif",
          fontSize: "22rem",
          lineHeight: 1,
          color: "rgba(245,241,231,0.04)",
          userSelect: "none",
          pointerEvents: "none",
        }}
      >
        ∞
      </div>

      <div style={{ maxWidth: "80rem", margin: "0 auto" }}>
        <motion.div
          style={{ marginBottom: "4rem" }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <p
            style={{
              fontFamily: "'Anton', sans-serif",
              textTransform: "uppercase",
              letterSpacing: "0.15em",
              fontSize: "0.8rem",
              color: "rgba(245,241,231,0.5)",
              marginBottom: "0.75rem",
            }}
          >
            Impact & Reach
          </p>
          <h2
            style={{
              fontFamily: "'Playfair Display', serif",
              fontWeight: 900,
              fontSize: "clamp(2rem, 4vw, 3.25rem)",
              lineHeight: 1.1,
              margin: 0,
            }}
          >
            Building financial confidence,{" "}
            <span
              style={{
                fontFamily: "'Kaushan Script', cursive",
                color: "var(--color-accent-bright)",
                fontSize: "1.1em",
              }}
            >
              one family at a time.
            </span>
          </h2>
        </motion.div>

        {/* Stats cards */}
        <div
          style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: "1.25rem" }}
          className="eng-grid"
        >
          {items.map((item, i) => (
            <motion.div
              key={i}
              style={{
                padding: "2.25rem",
                border: "1px solid rgba(245,241,231,0.12)",
                borderRadius: "1.25rem",
                backgroundColor: "rgba(255,255,255,0.04)",
                backdropFilter: "blur(8px)",
                position: "relative",
                overflow: "hidden",
              }}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.55, delay: i * 0.09, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ backgroundColor: "rgba(255,255,255,0.08)", borderColor: "rgba(245,241,231,0.25)" }}
            >
              <div
                style={{
                  fontFamily: "'Anton', sans-serif",
                  fontSize: "clamp(3rem, 6vw, 4.5rem)",
                  color: "var(--color-accent-bright)",
                  lineHeight: 1,
                  marginBottom: "0.5rem",
                }}
              >
                {item.count}
              </div>
              <div
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontWeight: 700,
                  fontSize: "1.125rem",
                  marginBottom: "0.375rem",
                }}
              >
                {item.label}
              </div>
              <p
                style={{
                  fontSize: "0.875rem",
                  color: "rgba(245,241,231,0.6)",
                  lineHeight: 1.55,
                  margin: 0,
                }}
              >
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        @media (min-width: 768px) {
          .eng-grid { grid-template-columns: repeat(4,1fr) !important; }
        }
      `}</style>
    </section>
  );
}
