"use client";
import React from "react";
import { motion } from "framer-motion";

export default function WhySection() {
  return (
    <section
      id="why"
      style={{
        width: "100%",
        padding: "9rem 1.5rem",
        background: "linear-gradient(135deg, #111111 0%, #111111 40%, #111111 100%)",
        color: "#fff",
        overflow: "hidden",
        position: "relative",
      }}
    >
      {/* ── Gold line accent left ── */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          left: 0,
          top: "50%",
          transform: "translateY(-50%)",
          width: "4px",
          height: "60%",
          background: "linear-gradient(to bottom, transparent, #C8102E, #E8112D, transparent)",
          borderRadius: "9999px",
        }}
      />

      {/* ── Glowing orbs ── */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          left: "10%",
          top: "20%",
          width: "30vw",
          height: "30vw",
          borderRadius: "9999px",
          background: "radial-gradient(circle, rgba(200,16,46,0.12) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />
      <div
        aria-hidden
        style={{
          position: "absolute",
          right: "10%",
          bottom: "20%",
          width: "25vw",
          height: "25vw",
          borderRadius: "9999px",
          background: "radial-gradient(circle, rgba(200,16,46,0.1) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      {/* ── Background "WHY" text ── */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          pointerEvents: "none",
          overflow: "hidden",
        }}
      >
        <span
          style={{
            fontFamily: "'Syne', sans-serif",
            fontSize: "clamp(12rem, 35vw, 30rem)",
            lineHeight: 1,
            color: "#fff",
            opacity: 0.025,
            letterSpacing: "-0.05em",
            fontWeight: 800,
            userSelect: "none",
            whiteSpace: "nowrap",
          }}
        >
          WHY
        </span>
      </div>

      {/* ── Decorative lines ── */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `
            linear-gradient(rgba(200,16,46,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(200,16,46,0.03) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          maxWidth: "60rem",
          margin: "0 auto",
          textAlign: "center",
          position: "relative",
          zIndex: 10,
        }}
      >
        <motion.p
          style={{
            fontFamily: "'Syne', sans-serif",
            textTransform: "uppercase",
            letterSpacing: "0.25em",
            color: "#C8102E",
            fontSize: "0.7rem",
            marginBottom: "2rem",
            fontWeight: 700,
          }}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          Why it matters
        </motion.p>

        {/* ── Main stat ── */}
        <motion.div
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontWeight: 700,
            fontSize: "clamp(1.875rem, 4.5vw, 3.5rem)",
            lineHeight: 1.2,
            marginBottom: "1.75rem",
            color: "var(--color-text)",
          }}
          initial={{ opacity: 0, y: 36 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
        >
          Only{" "}
          <motion.span
            style={{
              display: "inline-block",
              fontStyle: "italic",
              fontSize: "1.6em",
              lineHeight: 1,
              background: "linear-gradient(135deg, #FFFFFF 0%, #C8102E 50%, #9B0C23 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              filter: "drop-shadow(0 0 30px rgba(200,16,46,0.4))",
            }}
            initial={{ scale: 0.6, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.35, duration: 0.7, ease: [0.34, 1.56, 0.64, 1] }}
          >
            1 in 5
          </motion.span>{" "}
          Filipino families is financially prepared for the loss of an income earner.
        </motion.div>

        <motion.p
          style={{
            fontSize: "clamp(1.0625rem, 2vw, 1.375rem)",
            color: "var(--color-text-muted)",
            fontWeight: 400,
            marginBottom: "4rem",
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            lineHeight: 1.8,
          }}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.25 }}
        >
          Let&apos;s make sure your family is the one that is.
        </motion.p>

        {/* ── CTA ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          style={{ marginBottom: "4rem" }}
        >
          <motion.a
            href="#start-plan"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.625rem",
              background: "linear-gradient(135deg, #C8102E 0%, #E8112D 100%)",
              color: "#fff",
              padding: "1.125rem 2.75rem",
              borderRadius: "9999px",
              fontWeight: 700,
              fontFamily: "'Syne', sans-serif",
              textDecoration: "none",
              fontSize: "0.9375rem",
              boxShadow: "0 8px 32px rgba(200,16,46,0.5)",
              letterSpacing: "0.04em",
            }}
            whileHover={{ scale: 1.06, boxShadow: "0 16px 48px rgba(200,16,46,0.6)" }}
            whileTap={{ scale: 0.97 }}
          >
            Protect Your Family Today
          </motion.a>
        </motion.div>

        {/* ── Tag pills ── */}
        <motion.div
          style={{ display: "flex", justifyContent: "center", gap: "0.75rem", flexWrap: "wrap" }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.45 }}
        >
          {[
            { label: "Protection", color: "#C8102E" },
            { label: "Education", color: "#C8102E" },
            { label: "Growth", color: "#C8102E" },
            { label: "Security", color: "#C8102E" },
          ].map((tag, i) => (
            <motion.span
              key={i}
              style={{
                background: `${tag.color}15`,
                border: `1px solid ${tag.color}35`,
                borderRadius: "9999px",
                padding: "0.5rem 1.25rem",
                fontSize: "0.75rem",
                fontWeight: 700,
                fontFamily: "'Syne', sans-serif",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                color: tag.color === "#C8102E" ? "#FFFFFF" : "#E8112D",
              }}
              whileHover={{ scale: 1.05, background: `${tag.color}25` }}
            >
              {tag.label}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
