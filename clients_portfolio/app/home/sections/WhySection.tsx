"use client";
import React from "react";
import { motion } from "framer-motion";

export default function WhySection() {
  return (
    <section
      id="why"
      style={{
        width: "100%",
        padding: "8rem 1.5rem",
        backgroundColor: "var(--color-accent)",
        color: "#fff",
        overflow: "hidden",
        position: "relative",
      }}
    >
      {/* large background text */}
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
            fontFamily: "'Anton', sans-serif",
            fontSize: "clamp(12rem, 30vw, 26rem)",
            lineHeight: 1,
            color: "#fff",
            opacity: 0.05,
            letterSpacing: "-0.05em",
            userSelect: "none",
            whiteSpace: "nowrap",
          }}
        >
          WHY
        </span>
      </div>

      <div
        style={{
          maxWidth: "56rem",
          margin: "0 auto",
          textAlign: "center",
          position: "relative",
          zIndex: 10,
        }}
      >
        <motion.p
          style={{
            fontFamily: "'Anton', sans-serif",
            textTransform: "uppercase",
            letterSpacing: "0.2em",
            color: "rgba(255,255,255,0.6)",
            fontSize: "0.8125rem",
            marginBottom: "1.5rem",
          }}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          Why it matters
        </motion.p>

        <motion.p
          style={{
            fontFamily: "'Playfair Display', serif",
            fontWeight: 900,
            fontSize: "clamp(1.875rem, 4.5vw, 3.25rem)",
            lineHeight: 1.2,
            marginBottom: "1.5rem",
          }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
        >
          Only{" "}
          <motion.span
            style={{
              fontFamily: "'Kaushan Script', cursive",
              fontSize: "1.4em",
              display: "inline-block",
              verticalAlign: "baseline",
            }}
            initial={{ scale: 0.7, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6, ease: [0.34, 1.56, 0.64, 1] }}
          >
            1 in 5
          </motion.span>{" "}
          Filipino families is financially prepared for the loss of an income earner.
        </motion.p>

        <motion.p
          style={{
            fontSize: "clamp(1.0625rem, 2vw, 1.375rem)",
            color: "rgba(255,255,255,0.82)",
            fontWeight: 500,
            marginBottom: "3rem",
          }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Let&apos;s make sure your family is the one that is.
        </motion.p>

        {/* Divider pills */}
        <motion.div
          style={{ display: "flex", justifyContent: "center", gap: "0.5rem" }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.35 }}
        >
          {["Protection", "Education", "Growth", "Security"].map((tag, i) => (
            <span
              key={i}
              style={{
                backgroundColor: "rgba(255,255,255,0.14)",
                borderRadius: "9999px",
                padding: "0.375rem 1rem",
                fontSize: "0.8125rem",
                fontWeight: 600,
                letterSpacing: "0.04em",
                border: "1px solid rgba(255,255,255,0.2)",
              }}
            >
              {tag}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
