"use client";
import React from "react";
import { motion } from "framer-motion";
import { ChevronRight, Award, GraduationCap, Heart } from "lucide-react";

const credentials = [
  { icon: GraduationCap, label: "Licensed Professional Teacher (LPT)" },
  { icon: Award, label: "Certified Financial Advisor" },
  { icon: Heart, label: "Community & Youth Advocate" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 36 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.75, ease: [0.16, 1, 0.3, 1] } },
};

export default function AboutSection() {
  return (
    <section
      id="about"
      style={{
        width: "100%",
        padding: "7rem 1.5rem",
        backgroundColor: "var(--color-green)",
        color: "var(--color-inverse)",
        overflow: "hidden",
        position: "relative",
      }}
    >
      {/* Decorative rotated label */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          top: "3rem",
          right: "-3rem",
          fontFamily: "'Anton', sans-serif",
          fontSize: "8rem",
          color: "rgba(245,241,231,0.04)",
          textTransform: "uppercase",
          letterSpacing: "0.1em",
          transform: "rotate(90deg)",
          transformOrigin: "right center",
          userSelect: "none",
          pointerEvents: "none",
          whiteSpace: "nowrap",
        }}
      >
        About
      </div>

      <div
        style={{
          maxWidth: "80rem",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1fr",
          gap: "4rem",
          alignItems: "center",
        }}
        className="about-grid"
      >
        {/* Left: polaroid stack */}
        <div style={{ position: "relative", height: "440px" }}>
          {/* Back card (shadow card) */}
          <div
            style={{
              position: "absolute",
              left: "5%",
              top: "5%",
              width: "58%",
              height: "78%",
              backgroundColor: "rgba(255,255,255,0.06)",
              borderRadius: "4px",
              transform: "rotate(-8deg)",
            }}
          />
          <motion.figure
            style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: "60%",
              backgroundColor: "#fff",
              padding: "0.75rem",
              paddingBottom: "3rem",
              boxShadow: "0 30px 60px rgba(0,0,0,0.3)",
              margin: 0,
              borderRadius: "2px",
            }}
            initial={{ opacity: 0, y: 50, rotate: -10 }}
            whileInView={{ opacity: 1, y: 0, rotate: -5 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ rotate: -3, scale: 1.02 }}
          >
            {/* tape strip */}
            <span
              style={{
                position: "absolute",
                top: "-1rem",
                left: "50%",
                transform: "translateX(-50%) rotate(2deg)",
                width: "5rem",
                height: "1.5rem",
                background: "rgba(254,252,220,0.75)",
                display: "block",
              }}
            />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1000&auto=format&fit=crop"
              alt="Kuya Matt speaking"
              style={{ width: "100%", height: "18rem", objectFit: "cover", display: "block" }}
            />
            <p style={{ marginTop: "0.75rem", textAlign: "center", fontSize: "0.8rem", color: "#555", fontFamily: "'DM Sans', sans-serif" }}>
              Community Talk 2024
            </p>
          </motion.figure>

          <motion.figure
            style={{
              position: "absolute",
              right: 0,
              bottom: 0,
              width: "62%",
              backgroundColor: "#fff",
              padding: "0.75rem",
              paddingBottom: "3rem",
              boxShadow: "0 30px 60px rgba(0,0,0,0.3)",
              margin: 0,
              borderRadius: "2px",
            }}
            initial={{ opacity: 0, y: 50, rotate: 12 }}
            whileInView={{ opacity: 1, y: 0, rotate: 6 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, delay: 0.18, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ rotate: 3, scale: 1.02 }}
          >
            <span
              style={{
                position: "absolute",
                top: "-1rem",
                left: "50%",
                transform: "translateX(-50%) rotate(-4deg)",
                width: "5rem",
                height: "1.5rem",
                background: "rgba(254,252,220,0.75)",
                display: "block",
              }}
            />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1000&auto=format&fit=crop"
              alt="Financial planning session"
              style={{ width: "100%", height: "15rem", objectFit: "cover", display: "block" }}
            />
            <p style={{ marginTop: "0.75rem", textAlign: "center", fontSize: "0.8rem", color: "#555", fontFamily: "'DM Sans', sans-serif" }}>
              Planning Session 2024
            </p>
          </motion.figure>
        </div>

        {/* Right: copy */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
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
            Who is Kuya Matt?
          </p>
          <h2
            style={{
              fontFamily: "'Playfair Display', serif",
              fontWeight: 900,
              fontSize: "clamp(2.5rem, 5vw, 3.75rem)",
              lineHeight: 1.1,
              marginBottom: "1.5rem",
            }}
          >
            Meet{" "}
            <span
              style={{
                fontFamily: "'Kaushan Script', cursive",
                color: "var(--color-accent-bright)",
                fontSize: "1.15em",
              }}
            >
              Kuya Matt
            </span>
          </h2>
          <p
            style={{
              fontSize: "clamp(1rem, 1.5vw, 1.125rem)",
              lineHeight: 1.8,
              color: "rgba(245,241,231,0.8)",
              maxWidth: "36rem",
              marginBottom: "2rem",
            }}
          >
            A licensed professional working in financial services and education,
            focused on youth development, financial literacy, and community
            empowerment. Dedicated to helping individuals and families achieve
            financial protection, growth, and long-term security through service
            and advocacy.
          </p>

          {/* Credentials */}
          <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem", marginBottom: "2rem" }}>
            {credentials.map((c, i) => (
              <motion.div
                key={i}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.75rem",
                  padding: "0.75rem 1rem",
                  backgroundColor: "rgba(255,255,255,0.07)",
                  borderRadius: "0.5rem",
                  border: "1px solid rgba(255,255,255,0.1)",
                }}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 + i * 0.08 }}
              >
                <c.icon size={18} color="var(--color-accent-bright)" />
                <span style={{ fontSize: "0.9375rem", fontWeight: 600 }}>{c.label}</span>
              </motion.div>
            ))}
          </div>

          <blockquote
            style={{
              borderLeft: "3px solid var(--color-accent-bright)",
              paddingLeft: "1.25rem",
              fontFamily: "'Playfair Display', serif",
              fontStyle: "italic",
              fontSize: "clamp(1.125rem, 2vw, 1.375rem)",
              lineHeight: 1.5,
              color: "rgba(245,241,231,0.9)",
              marginBottom: "2rem",
            }}
          >
            &ldquo;Protection first, growth second — that&apos;s how families stay
            standing.&rdquo;
          </blockquote>

          <motion.a
            href="#start-plan"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              backgroundColor: "#fff",
              color: "var(--color-green)",
              padding: "0.875rem 2rem",
              borderRadius: "9999px",
              fontWeight: 700,
              textDecoration: "none",
              fontSize: "0.9375rem",
            }}
            whileHover={{ scale: 1.04, backgroundColor: "var(--color-accent)", color: "#fff" }}
            whileTap={{ scale: 0.97 }}
          >
            Start Your Plan <ChevronRight size={16} />
          </motion.a>
        </motion.div>
      </div>

      <style>{`
        @media (min-width: 1024px) {
          .about-grid { grid-template-columns: 1fr 1fr !important; }
        }
      `}</style>
    </section>
  );
}
