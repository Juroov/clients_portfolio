"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BookOpen, ShieldCheck, Users, Landmark, ChevronLeft, ChevronRight, ArrowUpRight } from "lucide-react";

const cards = [
  {
    icon: BookOpen,
    title: "Digital Literacy & Skills Training",
    desc: "Equipping communities with practical digital skills to thrive in a rapidly changing economy. Bridging the gap between technology access and real-world application.",
    gradient: "linear-gradient(135deg, rgba(200,16,46,0.15) 0%, rgba(200,16,46,0.05) 100%)",
    iconBg: "linear-gradient(135deg, #C8102E, #E8112D)",
    accent: "#E8112D",
    tag: "Education",
  },
  {
    icon: ShieldCheck,
    title: "Insurance Talks & Financial Literacy",
    desc: "Delivering accessible, jargon-free sessions on insurance products, savings strategies, and retirement planning to help ordinary Filipinos make informed decisions.",
    gradient: "linear-gradient(135deg, rgba(200,16,46,0.12) 0%, rgba(200,16,46,0.04) 100%)",
    iconBg: "linear-gradient(135deg, #C8102E, #FFFFFF)",
    accent: "#FFFFFF",
    tag: "Finance",
  },
  {
    icon: Users,
    title: "Community & Youth Empowerment",
    desc: "Partnering with local organizations, schools, and community groups to deliver advocacy initiatives that promote financial security and responsible civic participation.",
    gradient: "linear-gradient(135deg, rgba(200,16,46,0.15) 0%, rgba(200,16,46,0.05) 100%)",
    iconBg: "linear-gradient(135deg, #C8102E, #E8112D)",
    accent: "#E8112D",
    tag: "Community",
  },
  {
    icon: Landmark,
    title: "Advocacy for Financial Security",
    desc: "Championing long-term financial preparedness through public talks, school visits, and corporate presentations — making financial planning a shared national priority.",
    gradient: "linear-gradient(135deg, rgba(200,16,46,0.12) 0%, rgba(200,16,46,0.04) 100%)",
    iconBg: "linear-gradient(135deg, #C8102E, #FFFFFF)",
    accent: "#FFFFFF",
    tag: "Advocacy",
  },
];

export default function ServicesSection() {
  const [active, setActive] = useState(0);
  const [hovered, setHovered] = useState<number | null>(null);

  const prev = () => setActive((p) => (p - 1 + cards.length) % cards.length);
  const next = () => setActive((p) => (p + 1) % cards.length);

  return (
    <section
      id="services"
      style={{
        width: "100%",
        padding: "8rem 1.5rem",
        background: "linear-gradient(180deg, #111111 0%, #111111 60%, #0A0A0A 100%)",
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
          right: "-15%",
          transform: "translateY(-50%)",
          width: "50vw",
          height: "50vw",
          borderRadius: "9999px",
          background: "radial-gradient(circle, rgba(200,16,46,0.05) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div style={{ maxWidth: "90rem", margin: "0 auto" }}>
        {/* ── Header ── */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            marginBottom: "4rem",
            flexWrap: "wrap",
            gap: "1.5rem",
          }}
        >
          <div>
            <p
              style={{
                fontFamily: "'Syne', sans-serif",
                textTransform: "uppercase",
                letterSpacing: "0.2em",
                fontSize: "0.7rem",
                color: "#C8102E",
                marginBottom: "0.75rem",
                fontWeight: 700,
              }}
            >
              What I Do
            </p>
            <motion.h2
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontWeight: 700,
                fontSize: "clamp(2rem, 4.5vw, 3.75rem)",
                lineHeight: 1.05,
                margin: 0,
                color: "var(--color-text)",
              }}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            >
              What Kuya Juan{" "}
              <span
                style={{
                  fontStyle: "italic",
                  background: "linear-gradient(135deg, #FFFFFF 0%, #C8102E 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Does
              </span>
            </motion.h2>
          </div>

          {/* Carousel controls */}
          <div style={{ display: "flex", gap: "0.75rem" }}>
            {[prev, next].map((fn, i) => (
              <motion.button
                key={i}
                onClick={fn}
                style={{
                  width: "3rem",
                  height: "3rem",
                  borderRadius: "9999px",
                  background: i === 0
                    ? "rgba(255,255,255,0.04)"
                    : "linear-gradient(135deg, #C8102E, #E8112D)",
                  color: "#fff",
                  border: i === 0 ? "1px solid rgba(255,255,255,0.1)" : "none",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: i === 1 ? "0 4px 16px rgba(200,16,46,0.4)" : "none",
                }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.93 }}
              >
                {i === 0 ? <ChevronLeft size={20} /> : <ChevronRight size={20} />}
              </motion.button>
            ))}
          </div>
        </div>

        {/* ── Desktop grid ── */}
        <div
          className="services-desktop"
          style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: "1.5rem" }}
        >
          {cards.map((card, i) => (
            <motion.div
              key={i}
              style={{
                background: hovered === i ? card.gradient : "linear-gradient(135deg, #141414 0%, #111111 100%)",
                borderRadius: "1.5rem",
                padding: "2.25rem",
                border: `1px solid ${hovered === i ? `${card.accent}30` : "rgba(255,255,255,0.06)"}`,
                display: "flex",
                flexDirection: "column",
                gap: "1.25rem",
                cursor: "default",
                position: "relative",
                overflow: "hidden",
                transition: "background 400ms, border-color 300ms",
              }}
              initial={{ opacity: 0, y: 36 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -8 }}
              onHoverStart={() => setHovered(i)}
              onHoverEnd={() => setHovered(null)}
            >
              {/* Hover glow */}
              {hovered === i && (
                <motion.div
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    height: "1px",
                    background: `linear-gradient(90deg, transparent, ${card.accent}80, transparent)`,
                  }}
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                />
              )}

              <div
                style={{
                  width: "3.25rem",
                  height: "3.25rem",
                  background: card.iconBg,
                  borderRadius: "1rem",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#fff",
                  flexShrink: 0,
                  boxShadow: `0 8px 20px ${card.accent}40`,
                }}
              >
                <card.icon size={22} />
              </div>

              <div>
                <div
                  style={{
                    display: "inline-block",
                    fontSize: "0.6rem",
                    fontFamily: "'Syne', sans-serif",
                    fontWeight: 700,
                    textTransform: "uppercase",
                    letterSpacing: "0.12em",
                    color: card.accent,
                    background: `${card.accent}15`,
                    border: `1px solid ${card.accent}30`,
                    borderRadius: "9999px",
                    padding: "0.2rem 0.6rem",
                    marginBottom: "0.625rem",
                  }}
                >
                  {card.tag}
                </div>
                <h3
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontWeight: 600,
                    fontSize: "1.125rem",
                    color: "var(--color-text)",
                    lineHeight: 1.3,
                    margin: 0,
                  }}
                >
                  {card.title}
                </h3>
              </div>

              <p
                style={{
                  fontSize: "0.875rem",
                  color: "var(--color-text-muted)",
                  lineHeight: 1.8,
                  margin: 0,
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  flex: 1,
                }}
              >
                {card.desc}
              </p>

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.375rem",
                  fontSize: "0.8125rem",
                  fontWeight: 700,
                  fontFamily: "'Syne', sans-serif",
                  color: card.accent,
                  opacity: hovered === i ? 1 : 0,
                  transition: "opacity 300ms",
                }}
              >
                Learn More <ArrowUpRight size={14} />
              </div>
            </motion.div>
          ))}
        </div>

        {/* ── Mobile carousel ── */}
        <div className="services-mobile" style={{ display: "none", position: "relative", overflow: "hidden" }}>
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -60 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              style={{
                background: "linear-gradient(135deg, #141414 0%, #111111 100%)",
                borderRadius: "1.5rem",
                padding: "2.25rem",
                border: "1px solid rgba(255,255,255,0.06)",
              }}
            >
              <div
                style={{
                  width: "3.25rem",
                  height: "3.25rem",
                  background: cards[active].iconBg,
                  borderRadius: "1rem",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#fff",
                  marginBottom: "1.25rem",
                  boxShadow: `0 8px 20px ${cards[active].accent}40`,
                }}
              >
                {React.createElement(cards[active].icon, { size: 22 })}
              </div>
              <span
                style={{
                  display: "inline-block",
                  fontSize: "0.6rem",
                  fontFamily: "'Syne', sans-serif",
                  fontWeight: 700,
                  textTransform: "uppercase",
                  letterSpacing: "0.12em",
                  color: cards[active].accent,
                  background: `${cards[active].accent}15`,
                  border: `1px solid ${cards[active].accent}30`,
                  borderRadius: "9999px",
                  padding: "0.2rem 0.6rem",
                  marginBottom: "0.75rem",
                }}
              >
                {cards[active].tag}
              </span>
              <h3
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontWeight: 600,
                  fontSize: "1.375rem",
                  color: "var(--color-text)",
                  marginBottom: "0.875rem",
                  lineHeight: 1.2,
                }}
              >
                {cards[active].title}
              </h3>
              <p style={{ fontSize: "0.9375rem", color: "var(--color-text-muted)", lineHeight: 1.8, fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                {cards[active].desc}
              </p>
            </motion.div>
          </AnimatePresence>

          <div style={{ display: "flex", justifyContent: "center", gap: "0.5rem", marginTop: "1.75rem" }}>
            {cards.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                style={{
                  width: i === active ? "2.25rem" : "0.5rem",
                  height: "0.5rem",
                  borderRadius: "9999px",
                  background: i === active
                    ? "linear-gradient(135deg, #C8102E, #FFFFFF)"
                    : "rgba(255,255,255,0.12)",
                  border: "none",
                  cursor: "pointer",
                  transition: "all 300ms",
                  padding: 0,
                }}
              />
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .services-desktop { display: none !important; }
          .services-mobile { display: block !important; }
        }
        @media (max-width: 900px) and (min-width: 601px) {
          .services-desktop { display: grid !important; grid-template-columns: repeat(2,1fr) !important; }
          .services-mobile { display: none !important; }
        }
      `}</style>
    </section>
  );
}
