"use client";
import React from "react";
import { motion } from "framer-motion";
import { TrendingUp, ArrowUpRight } from "lucide-react";

const items = [
  { count: "200+", label: "Families Served", desc: "Individuals and families with active financial plans", color: "#C8102E" },
  { count: "50+", label: "School Talks", desc: "Financial literacy sessions in public & private schools", color: "#E8112D" },
  { count: "30+", label: "Community Events", desc: "Barangay and community advocacy programs", color: "#C8102E" },
  { count: "15+", label: "Corporate Partners", desc: "Companies reached through workplace wellness talks", color: "#E8112D" },
];

export default function EngagementsSection() {
  return (
    <section
      id="engagements"
      style={{
        width: "100%",
        padding: "8rem 1.5rem",
        background: "linear-gradient(135deg, #111111 0%, #141414 50%, #111111 100%)",
        overflow: "hidden",
        position: "relative",
      }}
    >
      {/* ── Background glow ── */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          right: "-5%",
          bottom: "-5%",
          width: "50vw",
          height: "50vw",
          borderRadius: "9999px",
          background: "radial-gradient(circle, rgba(200,16,46,0.08) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />
      <div
        aria-hidden
        style={{
          position: "absolute",
          left: "-5%",
          top: "30%",
          width: "35vw",
          height: "35vw",
          borderRadius: "9999px",
          background: "radial-gradient(circle, rgba(200,16,46,0.06) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      {/* ── Background large number ── */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          right: "-2rem",
          bottom: "-2rem",
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: "22rem",
          lineHeight: 1,
          color: "rgba(255,255,255,0.02)",
          userSelect: "none",
          pointerEvents: "none",
          fontWeight: 700,
        }}
      >
        ∞
      </div>

      <div style={{ maxWidth: "90rem", margin: "0 auto" }}>
        <motion.div
          style={{ marginBottom: "5rem" }}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
        >
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
            Impact & Reach
          </p>
          <h2
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontWeight: 700,
              fontSize: "clamp(2rem, 4.5vw, 3.75rem)",
              lineHeight: 1.1,
              margin: 0,
              color: "var(--color-text)",
            }}
          >
            Building financial confidence,{" "}
            <span
              style={{
                fontStyle: "italic",
                background: "linear-gradient(135deg, #FFFFFF 0%, #C8102E 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              one family at a time.
            </span>
          </h2>
        </motion.div>

        {/* ── Stats grid ── */}
        <div
          style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: "1.5rem" }}
          className="eng-grid"
        >
          {items.map((item, i) => (
            <motion.div
              key={i}
              style={{
                padding: "2.5rem",
                border: `1px solid ${item.color}20`,
                borderRadius: "1.5rem",
                background: "linear-gradient(135deg, rgba(20,20,20,0.8) 0%, rgba(10,10,10,0.9) 100%)",
                backdropFilter: "blur(16px)",
                position: "relative",
                overflow: "hidden",
                cursor: "default",
              }}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{
                borderColor: `${item.color}45`,
                y: -6,
              }}
            >
              {/* Top accent line */}
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: "2.5rem",
                  right: "2.5rem",
                  height: "2px",
                  background: `linear-gradient(90deg, transparent, ${item.color}60, transparent)`,
                  borderRadius: "9999px",
                }}
              />

              {/* Corner icon */}
              <div
                style={{
                  position: "absolute",
                  top: "1.75rem",
                  right: "1.75rem",
                  width: "2rem",
                  height: "2rem",
                  borderRadius: "0.5rem",
                  background: `${item.color}15`,
                  border: `1px solid ${item.color}25`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: item.color,
                }}
              >
                <ArrowUpRight size={14} />
              </div>

              <div
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontWeight: 700,
                  fontSize: "clamp(3rem, 7vw, 5rem)",
                  color: item.color,
                  lineHeight: 1,
                  marginBottom: "0.625rem",
                  filter: `drop-shadow(0 0 20px ${item.color}40)`,
                }}
              >
                {item.count}
              </div>
              <div
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontWeight: 600,
                  fontSize: "1.25rem",
                  color: "var(--color-text)",
                  marginBottom: "0.5rem",
                }}
              >
                {item.label}
              </div>
              <p
                style={{
                  fontSize: "0.875rem",
                  color: "var(--color-text-muted)",
                  lineHeight: 1.6,
                  margin: 0,
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
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
