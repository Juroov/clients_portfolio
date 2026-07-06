"use client";
import React from "react";
import { motion } from "framer-motion";
import { ChevronRight, Award, GraduationCap, Heart, Star } from "lucide-react";

const credentials = [
  { icon: GraduationCap, label: "Licensed Professional Teacher (LPT)", tag: "Education" },
  { icon: Award, label: "Certified Financial Advisor", tag: "Finance" },
  { icon: Heart, label: "Community & Youth Advocate", tag: "Advocacy" },
];

export default function AboutSection() {
  return (
    <section
      id="about"
      style={{
        width: "100%",
        padding: "8rem 1.5rem",
        background: "linear-gradient(180deg, #0A0A0A 0%, #111111 30%, #111111 100%)",
        overflow: "hidden",
        position: "relative",
      }}
    >
      {/* ── Background accent ── */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          left: "-20%",
          top: "20%",
          width: "60vw",
          height: "60vw",
          borderRadius: "9999px",
          background: "radial-gradient(circle, rgba(200,16,46,0.06) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />
      <div
        aria-hidden
        style={{
          position: "absolute",
          right: "-10%",
          bottom: "10%",
          width: "40vw",
          height: "40vw",
          borderRadius: "9999px",
          background: "radial-gradient(circle, rgba(200,16,46,0.08) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      {/* ── Decorative rotated text ── */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          top: "4rem",
          right: "-4rem",
          fontFamily: "'Syne', sans-serif",
          fontSize: "10rem",
          fontWeight: 800,
          color: "rgba(255,255,255,0.02)",
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
          maxWidth: "88rem",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1fr",
          gap: "5rem",
          alignItems: "center",
        }}
        className="about-grid"
      >
        {/* ── Left: Photo cards ── */}
        <div style={{ position: "relative", height: "480px" }}>
          {/* Back card */}
          <motion.div
            style={{
              position: "absolute",
              left: "8%",
              top: "8%",
              width: "55%",
              height: "76%",
              background: "linear-gradient(135deg, rgba(200,16,46,0.08) 0%, rgba(10,10,10,0.6) 100%)",
              borderRadius: "12px",
              border: "1px solid rgba(200,16,46,0.12)",
              transform: "rotate(-8deg)",
            }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          />

          {/* Main photo polaroid */}
          <motion.figure
            style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: "60%",
              background: "#111111",
              padding: "0.875rem",
              paddingBottom: "3.5rem",
              boxShadow: "0 40px 80px rgba(0,0,0,0.6), 0 0 0 1px rgba(200,16,46,0.1)",
              margin: 0,
              borderRadius: "8px",
            }}
            initial={{ opacity: 0, y: 60, rotate: -12 }}
            whileInView={{ opacity: 1, y: 0, rotate: -5 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ rotate: -3, scale: 1.02, boxShadow: "0 50px 100px rgba(0,0,0,0.7), 0 0 0 1px rgba(200,16,46,0.25)" }}
          >
            {/* Tape strip */}
            <span
              style={{
                position: "absolute",
                top: "-0.875rem",
                left: "50%",
                transform: "translateX(-50%) rotate(2deg)",
                width: "5rem",
                height: "1.25rem",
                background: "rgba(200,16,46,0.25)",
                backdropFilter: "blur(4px)",
                display: "block",
                borderRadius: "2px",
              }}
            />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1000&auto=format&fit=crop"
              alt="Kuya Juan speaking"
              style={{ width: "100%", height: "18rem", objectFit: "cover", display: "block", borderRadius: "4px" }}
            />
            <p
              style={{
                marginTop: "0.875rem",
                textAlign: "center",
                fontSize: "0.75rem",
                color: "var(--color-text-muted)",
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontStyle: "italic",
                letterSpacing: "0.04em",
              }}
            >
              Community Talk 2024
            </p>
          </motion.figure>

          {/* Second photo polaroid */}
          <motion.figure
            style={{
              position: "absolute",
              right: 0,
              bottom: 0,
              width: "62%",
              background: "#111111",
              padding: "0.875rem",
              paddingBottom: "3.5rem",
              boxShadow: "0 40px 80px rgba(0,0,0,0.6), 0 0 0 1px rgba(200,16,46,0.15)",
              margin: 0,
              borderRadius: "8px",
            }}
            initial={{ opacity: 0, y: 60, rotate: 14 }}
            whileInView={{ opacity: 1, y: 0, rotate: 6 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ rotate: 3, scale: 1.02, boxShadow: "0 50px 100px rgba(0,0,0,0.7), 0 0 0 1px rgba(200,16,46,0.35)" }}
          >
            <span
              style={{
                position: "absolute",
                top: "-0.875rem",
                left: "50%",
                transform: "translateX(-50%) rotate(-3deg)",
                width: "5rem",
                height: "1.25rem",
                background: "rgba(200,16,46,0.25)",
                backdropFilter: "blur(4px)",
                display: "block",
                borderRadius: "2px",
              }}
            />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1000&auto=format&fit=crop"
              alt="Financial planning session"
              style={{ width: "100%", height: "15rem", objectFit: "cover", display: "block", borderRadius: "4px" }}
            />
            <p
              style={{
                marginTop: "0.875rem",
                textAlign: "center",
                fontSize: "0.75rem",
                color: "var(--color-text-muted)",
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontStyle: "italic",
                letterSpacing: "0.04em",
              }}
            >
              Planning Session 2024
            </p>
          </motion.figure>
        </div>

        {/* ── Right: Copy ── */}
        <motion.div
          initial={{ opacity: 0, x: 48 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <p
            style={{
              fontFamily: "'Syne', sans-serif",
              textTransform: "uppercase",
              letterSpacing: "0.2em",
              fontSize: "0.7rem",
              color: "#C8102E",
              marginBottom: "1rem",
              fontWeight: 700,
            }}
          >
            Who is Kuya Juan?
          </p>

          <h2
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontWeight: 700,
              fontSize: "clamp(2.5rem, 5vw, 4rem)",
              lineHeight: 1.05,
              marginBottom: "1.75rem",
              color: "var(--color-text)",
            }}
          >
            Meet{" "}
            <span
              style={{
                fontStyle: "italic",
                background: "linear-gradient(135deg, #FFFFFF 0%, #C8102E 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Kuya Juan
            </span>
          </h2>

          <p
            style={{
              fontSize: "clamp(1rem, 1.5vw, 1.125rem)",
              lineHeight: 1.9,
              color: "var(--color-text-muted)",
              maxWidth: "36rem",
              marginBottom: "2.5rem",
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontWeight: 400,
            }}
          >
            A licensed professional working in financial services and education,
            focused on youth development, financial literacy, and community
            empowerment. Dedicated to helping individuals and families achieve
            financial protection, growth, and long-term security through service
            and advocacy.
          </p>

          {/* ── Credentials ── */}
          <div style={{ display: "flex", flexDirection: "column", gap: "0.875rem", marginBottom: "2.5rem" }}>
            {credentials.map((c, i) => (
              <motion.div
                key={i}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "1rem",
                  padding: "1rem 1.25rem",
                  background: "linear-gradient(135deg, rgba(200,16,46,0.06) 0%, rgba(10,10,10,0.8) 100%)",
                  borderRadius: "0.875rem",
                  border: "1px solid rgba(200,16,46,0.12)",
                  backdropFilter: "blur(10px)",
                }}
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 + i * 0.1 }}
                whileHover={{ borderColor: "rgba(200,16,46,0.28)", background: "linear-gradient(135deg, rgba(200,16,46,0.1) 0%, rgba(10,10,10,0.8) 100%)" }}
              >
                <div
                  style={{
                    width: "2.5rem",
                    height: "2.5rem",
                    borderRadius: "0.75rem",
                    background: "linear-gradient(135deg, rgba(200,16,46,0.2) 0%, rgba(200,16,46,0.08) 100%)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                    border: "1px solid rgba(200,16,46,0.2)",
                  }}
                >
                  <c.icon size={16} color="#C8102E" />
                </div>
                <span style={{ fontSize: "0.9375rem", fontWeight: 600, color: "var(--color-text)", flex: 1, fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                  {c.label}
                </span>
                <span
                  style={{
                    fontSize: "0.625rem",
                    fontWeight: 700,
                    fontFamily: "'Syne', sans-serif",
                    textTransform: "uppercase",
                    letterSpacing: "0.1em",
                    color: "#C8102E",
                    background: "rgba(200,16,46,0.1)",
                    padding: "0.25rem 0.625rem",
                    borderRadius: "9999px",
                    border: "1px solid rgba(200,16,46,0.2)",
                  }}
                >
                  {c.tag}
                </span>
              </motion.div>
            ))}
          </div>

          {/* ── Quote ── */}
          <blockquote
            style={{
              borderLeft: "3px solid #C8102E",
              paddingLeft: "1.5rem",
              fontFamily: "'Cormorant Garamond', serif",
              fontStyle: "italic",
              fontWeight: 500,
              fontSize: "clamp(1.125rem, 2vw, 1.5rem)",
              lineHeight: 1.55,
              color: "var(--color-text)",
              marginBottom: "2.5rem",
              background: "linear-gradient(135deg, rgba(200,16,46,0.04) 0%, transparent 100%)",
              padding: "1.25rem 1.25rem 1.25rem 1.75rem",
              borderRadius: "0 0.5rem 0.5rem 0",
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
              gap: "0.625rem",
              background: "linear-gradient(135deg, rgba(200,16,46,0.15) 0%, rgba(200,16,46,0.08) 100%)",
              border: "1px solid rgba(200,16,46,0.35)",
              color: "#FFFFFF",
              padding: "1rem 2.25rem",
              borderRadius: "9999px",
              fontWeight: 700,
              fontFamily: "'Syne', sans-serif",
              textDecoration: "none",
              fontSize: "0.9rem",
              backdropFilter: "blur(10px)",
              letterSpacing: "0.04em",
            }}
            whileHover={{
              scale: 1.05,
              background: "linear-gradient(135deg, rgba(200,16,46,0.25) 0%, rgba(200,16,46,0.15) 100%)",
              borderColor: "rgba(200,16,46,0.6)",
            }}
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
