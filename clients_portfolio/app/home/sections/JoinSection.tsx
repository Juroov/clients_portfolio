"use client";
import React from "react";
import { motion } from "framer-motion";
import { ChevronRight, TrendingUp, Mic, Users, ArrowUpRight } from "lucide-react";

const roles = [
  {
    icon: TrendingUp,
    title: "Financial Advisor Associate",
    type: "Part-time / Commission-based",
    desc: "Help families protect their future while building your own career in financial services.",
    color: "#C8102E",
  },
  {
    icon: Mic,
    title: "Financial Literacy Speaker",
    type: "Per Engagement",
    desc: "Share knowledge in schools, communities, and corporate events around the Philippines.",
    color: "#E8112D",
  },
  {
    icon: Users,
    title: "Community Program Coordinator",
    type: "Volunteer / Paid",
    desc: "Organize and lead financial empowerment programs for local barangays and communities.",
    color: "#C8102E",
  },
];

export default function JoinSection() {
  return (
    <section
      id="join-team"
      style={{
        width: "100%",
        padding: "8rem 1.5rem",
        background: "linear-gradient(180deg, #0A0A0A 0%, #111111 60%, #111111 100%)",
        overflow: "hidden",
        position: "relative",
      }}
    >
      {/* Background accent */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          right: "-10%",
          top: "20%",
          width: "40vw",
          height: "40vw",
          borderRadius: "9999px",
          background: "radial-gradient(circle, rgba(200,16,46,0.07) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />
      <div
        aria-hidden
        style={{
          position: "absolute",
          left: "-10%",
          bottom: "20%",
          width: "35vw",
          height: "35vw",
          borderRadius: "9999px",
          background: "radial-gradient(circle, rgba(200,16,46,0.06) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div style={{ maxWidth: "90rem", margin: "0 auto" }}>
        {/* ── Section header ── */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "5rem",
            alignItems: "center",
            marginBottom: "5rem",
          }}
          className="join-header"
        >
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
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
              Opportunities
            </p>
            <h2
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontWeight: 700,
                fontSize: "clamp(2rem, 4.5vw, 3.75rem)",
                color: "var(--color-text)",
                lineHeight: 1.08,
                margin: "0 0 1.5rem",
              }}
            >
              Grow with Kuya Juan&apos;s{" "}
              <span
                style={{
                  fontStyle: "italic",
                  background: "linear-gradient(135deg, #FFFFFF 0%, #C8102E 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                team.
              </span>
            </h2>
            <p
              style={{
                color: "var(--color-text-muted)",
                lineHeight: 1.9,
                maxWidth: "36rem",
                fontSize: "1rem",
                margin: "0 0 2rem",
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontWeight: 400,
              }}
            >
              Whether you&apos;re looking to build a career in financial services or
              join as an advocate for financial literacy, there&apos;s a place for you.
              We&apos;re growing a team of passionate, mission-driven Filipinos.
            </p>
            <motion.a
              href="#start-plan"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.625rem",
                background: "linear-gradient(135deg, #C8102E 0%, #E8112D 100%)",
                color: "#fff",
                padding: "1rem 2.25rem",
                borderRadius: "9999px",
                fontWeight: 700,
                fontFamily: "'Syne', sans-serif",
                textDecoration: "none",
                fontSize: "0.9375rem",
                boxShadow: "0 8px 24px rgba(200,16,46,0.4)",
                letterSpacing: "0.04em",
              }}
              whileHover={{ scale: 1.06, boxShadow: "0 16px 40px rgba(200,16,46,0.55)" }}
              whileTap={{ scale: 0.97 }}
            >
              Express Interest <ChevronRight size={16} />
            </motion.a>
          </motion.div>
        </div>

        {/* ── Role cards ── */}
        <div
          style={{ display: "grid", gridTemplateColumns: "1fr", gap: "1.25rem" }}
          className="join-roles"
        >
          {roles.map((role, i) => (
            <motion.div
              key={i}
              style={{
                background: "linear-gradient(135deg, #141414 0%, #111111 100%)",
                border: `1px solid ${role.color}18`,
                borderRadius: "1.5rem",
                padding: "2.25rem",
                display: "flex",
                gap: "1.75rem",
                alignItems: "flex-start",
                cursor: "default",
                position: "relative",
                overflow: "hidden",
              }}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{
                y: -6,
                borderColor: `${role.color}40`,
                boxShadow: `0 20px 40px rgba(0,0,0,0.4)`,
              }}
            >
              {/* Top accent line */}
              <motion.div
                style={{
                  position: "absolute",
                  top: 0,
                  left: "2.25rem",
                  right: "2.25rem",
                  height: "2px",
                  background: `linear-gradient(90deg, transparent, ${role.color}50, transparent)`,
                  borderRadius: "9999px",
                }}
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 + i * 0.1 }}
              />

              {/* Icon */}
              <div
                style={{
                  width: "3.5rem",
                  height: "3.5rem",
                  background: `linear-gradient(135deg, ${role.color}20 0%, ${role.color}08 100%)`,
                  border: `1px solid ${role.color}30`,
                  borderRadius: "1.125rem",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: role.color,
                  flexShrink: 0,
                }}
              >
                <role.icon size={22} />
              </div>

              {/* Content */}
              <div style={{ flex: 1 }}>
                <div
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontWeight: 600,
                    fontSize: "1.1875rem",
                    color: "var(--color-text)",
                    marginBottom: "0.25rem",
                  }}
                >
                  {role.title}
                </div>
                <div
                  style={{
                    fontSize: "0.7rem",
                    color: role.color,
                    fontWeight: 700,
                    marginBottom: "0.75rem",
                    textTransform: "uppercase",
                    letterSpacing: "0.1em",
                    fontFamily: "'Syne', sans-serif",
                    background: `${role.color}15`,
                    border: `1px solid ${role.color}25`,
                    borderRadius: "9999px",
                    padding: "0.25rem 0.75rem",
                    display: "inline-block",
                  }}
                >
                  {role.type}
                </div>
                <p
                  style={{
                    fontSize: "0.9rem",
                    color: "var(--color-text-muted)",
                    lineHeight: 1.75,
                    margin: 0,
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                  }}
                >
                  {role.desc}
                </p>
              </div>

              <ArrowUpRight size={20} style={{ color: role.color, flexShrink: 0, marginTop: "0.25rem", opacity: 0.6 }} />
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        @media (min-width: 1024px) {
          .join-roles { grid-template-columns: repeat(3,1fr) !important; }
        }
        @media (min-width: 640px) and (max-width: 1023px) {
          .join-roles { grid-template-columns: repeat(2,1fr) !important; }
        }
      `}</style>
    </section>
  );
}
