"use client";
import React from "react";
import { motion } from "framer-motion";
import { ChevronRight, TrendingUp, Mic, Users } from "lucide-react";

const roles = [
  {
    icon: TrendingUp,
    title: "Financial Advisor Associate",
    type: "Part-time / Commission-based",
    desc: "Help families protect their future while building your own career in financial services.",
  },
  {
    icon: Mic,
    title: "Financial Literacy Speaker",
    type: "Per Engagement",
    desc: "Share knowledge in schools, communities, and corporate events around the Philippines.",
  },
  {
    icon: Users,
    title: "Community Program Coordinator",
    type: "Volunteer / Paid",
    desc: "Organize and lead financial empowerment programs for local barangays and communities.",
  },
];

export default function JoinSection() {
  return (
    <section
      id="join-team"
      style={{
        width: "100%",
        padding: "7rem 1.5rem",
        backgroundColor: "var(--color-bg-elevated)",
        overflow: "hidden",
      }}
    >
      <div style={{ maxWidth: "80rem", margin: "0 auto" }}>
        {/* Section header */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "4rem",
            alignItems: "center",
            marginBottom: "4rem",
          }}
          className="join-header"
        >
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          >
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
              Opportunities
            </p>
            <h2
              style={{
                fontFamily: "'Playfair Display', serif",
                fontWeight: 900,
                fontSize: "clamp(2rem, 4vw, 3.25rem)",
                color: "var(--color-text)",
                lineHeight: 1.1,
                margin: "0 0 1.25rem",
              }}
            >
              Grow with Kuya Matt&apos;s{" "}
              <span
                style={{
                  fontFamily: "'Kaushan Script', cursive",
                  color: "var(--color-accent)",
                  fontSize: "1.08em",
                }}
              >
                team.
              </span>
            </h2>
            <p
              style={{
                color: "var(--color-text-muted)",
                lineHeight: 1.8,
                maxWidth: "34rem",
                fontSize: "1rem",
                margin: "0 0 1.75rem",
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
                gap: "0.5rem",
                backgroundColor: "var(--color-accent)",
                color: "#fff",
                padding: "0.9rem 2rem",
                borderRadius: "9999px",
                fontWeight: 700,
                textDecoration: "none",
                fontSize: "0.9375rem",
                boxShadow: "0 6px 20px rgba(176,23,39,0.25)",
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
            >
              Express Interest <ChevronRight size={16} />
            </motion.a>
          </motion.div>
        </div>

        {/* Role cards */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "1.25rem" }} className="join-roles">
          {roles.map((role, i) => (
            <motion.div
              key={i}
              style={{
                backgroundColor: "#fff",
                border: "1px solid var(--color-border)",
                borderRadius: "1.25rem",
                padding: "2rem",
                display: "flex",
                gap: "1.5rem",
                alignItems: "flex-start",
                boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
              }}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -4, boxShadow: "0 12px 32px rgba(176,23,39,0.1)" }}
            >
              <div
                style={{
                  width: "3.25rem",
                  height: "3.25rem",
                  backgroundColor: "rgba(176,23,39,0.08)",
                  borderRadius: "0.875rem",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "var(--color-accent)",
                  flexShrink: 0,
                }}
              >
                <role.icon size={22} />
              </div>
              <div style={{ flex: 1 }}>
                <div
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontWeight: 700,
                    fontSize: "1.0625rem",
                    color: "var(--color-text)",
                    marginBottom: "0.25rem",
                  }}
                >
                  {role.title}
                </div>
                <div
                  style={{
                    fontSize: "0.8125rem",
                    color: "var(--color-accent)",
                    fontWeight: 600,
                    marginBottom: "0.625rem",
                    textTransform: "uppercase",
                    letterSpacing: "0.06em",
                  }}
                >
                  {role.type}
                </div>
                <p
                  style={{
                    fontSize: "0.9rem",
                    color: "var(--color-text-muted)",
                    lineHeight: 1.65,
                    margin: 0,
                  }}
                >
                  {role.desc}
                </p>
              </div>
              <ChevronRight size={20} color="var(--color-accent)" style={{ flexShrink: 0, marginTop: "0.25rem" }} />
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        @media (min-width: 1024px) {
          .join-header { grid-template-columns: 1fr !important; }
          .join-roles { grid-template-columns: repeat(3,1fr) !important; }
        }
        @media (min-width: 640px) and (max-width: 1023px) {
          .join-roles { grid-template-columns: repeat(2,1fr) !important; }
        }
      `}</style>
    </section>
  );
}
