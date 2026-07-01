"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BookOpen, ShieldCheck, Users, Landmark, ChevronLeft, ChevronRight } from "lucide-react";

const cards = [
  {
    icon: BookOpen,
    title: "Digital Literacy & Skills Training",
    desc: "Equipping communities with practical digital skills to thrive in a rapidly changing economy. Bridging the gap between technology access and real-world application.",
    color: "#B01727",
  },
  {
    icon: ShieldCheck,
    title: "Insurance Talks & Financial Literacy",
    desc: "Delivering accessible, jargon-free sessions on insurance products, savings strategies, and retirement planning to help ordinary Filipinos make informed decisions.",
    color: "#22362B",
  },
  {
    icon: Users,
    title: "Community & Youth Empowerment",
    desc: "Partnering with local organizations, schools, and community groups to deliver advocacy initiatives that promote financial security and responsible civic participation.",
    color: "#B01727",
  },
  {
    icon: Landmark,
    title: "Advocacy for Financial Security",
    desc: "Championing long-term financial preparedness through public talks, school visits, and corporate presentations — making financial planning a shared national priority.",
    color: "#22362B",
  },
];

export default function ServicesSection() {
  const [active, setActive] = useState(0);

  const prev = () => setActive((p) => (p - 1 + cards.length) % cards.length);
  const next = () => setActive((p) => (p + 1) % cards.length);

  return (
    <section
      id="services"
      style={{
        width: "100%",
        padding: "7rem 1.5rem",
        backgroundColor: "var(--color-bg)",
        overflow: "hidden",
      }}
    >
      <div style={{ maxWidth: "80rem", margin: "0 auto" }}>
        {/* Header */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            marginBottom: "3.5rem",
            flexWrap: "wrap",
            gap: "1rem",
          }}
        >
          <div>
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
              What I Do
            </p>
            <motion.h2
              style={{
                fontFamily: "'Playfair Display', serif",
                fontWeight: 900,
                fontSize: "clamp(2rem, 4vw, 3.25rem)",
                color: "var(--color-accent)",
                lineHeight: 1.1,
                margin: 0,
              }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              What Kuya Matt Does
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
                  backgroundColor: "var(--color-accent)",
                  color: "#fff",
                  border: "none",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.93 }}
              >
                {i === 0 ? <ChevronLeft size={20} /> : <ChevronRight size={20} />}
              </motion.button>
            ))}
          </div>
        </div>

        {/* Desktop — all 4 visible */}
        <div className="services-desktop" style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: "1.5rem" }}>
          {cards.map((card, i) => (
            <motion.div
              key={i}
              style={{
                backgroundColor: "#fff",
                borderRadius: "1.25rem",
                padding: "2rem",
                border: "1px solid var(--color-border)",
                boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
                cursor: "default",
              }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -6, boxShadow: "0 16px 40px rgba(176,23,39,0.14)" }}
            >
              <div
                style={{
                  width: "3.25rem",
                  height: "3.25rem",
                  backgroundColor: card.color,
                  borderRadius: "0.875rem",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#fff",
                  flexShrink: 0,
                }}
              >
                <card.icon size={22} />
              </div>
              <h3
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontWeight: 700,
                  fontSize: "1.0625rem",
                  color: "var(--color-accent)",
                  lineHeight: 1.3,
                  margin: 0,
                }}
              >
                {card.title}
              </h3>
              <p
                style={{
                  fontSize: "0.9rem",
                  color: "var(--color-text-muted)",
                  lineHeight: 1.7,
                  margin: 0,
                }}
              >
                {card.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Mobile carousel */}
        <div className="services-mobile" style={{ display: "none", position: "relative", overflow: "hidden" }}>
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -60 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              style={{
                backgroundColor: "#fff",
                borderRadius: "1.25rem",
                padding: "2rem",
                border: "1px solid var(--color-border)",
                boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
              }}
            >
              <div
                style={{
                  width: "3.25rem",
                  height: "3.25rem",
                  backgroundColor: cards[active].color,
                  borderRadius: "0.875rem",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#fff",
                  marginBottom: "1rem",
                }}
              >
                {React.createElement(cards[active].icon, { size: 22 })}
              </div>
              <h3
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontWeight: 700,
                  fontSize: "1.25rem",
                  color: "var(--color-accent)",
                  marginBottom: "0.75rem",
                }}
              >
                {cards[active].title}
              </h3>
              <p style={{ fontSize: "0.9375rem", color: "var(--color-text-muted)", lineHeight: 1.7 }}>
                {cards[active].desc}
              </p>
            </motion.div>
          </AnimatePresence>

          {/* Dot indicators */}
          <div style={{ display: "flex", justifyContent: "center", gap: "0.5rem", marginTop: "1.5rem" }}>
            {cards.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                style={{
                  width: i === active ? "2rem" : "0.5rem",
                  height: "0.5rem",
                  borderRadius: "9999px",
                  backgroundColor: i === active ? "var(--color-accent)" : "var(--color-border-strong)",
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
