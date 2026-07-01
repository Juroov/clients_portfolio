"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  BookOpen,
  ShieldCheck,
  Users,
  Landmark,
  ChevronRight,
  Star,
} from "lucide-react";

/* ─── DESIGN TOKENS (inline for portability) ─── */
const styles = {
  bg: "var(--color-bg)",
  surface: "var(--color-bg-surface)",
  elevated: "var(--color-bg-elevated)",
  green: "var(--color-green)",
  accent: "var(--color-accent)",
  accentBright: "var(--color-accent-bright)",
  accentDark: "var(--color-accent-dark)",
  ink: "var(--color-text)",
  muted: "var(--color-text-muted)",
  inverse: "var(--color-inverse)",
  line: "var(--color-border)",
  lineStrong: "var(--color-border-strong)",
};

/* ─── ANIMATION VARIANTS ─── */
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  },
};

const stagger = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

/* ─── NAV ─── */
const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Engagements", href: "#engagements" },
  { label: "Join Our Team", href: "#join-team" },
];

function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        width: "100%",
        backgroundColor: "color-mix(in srgb, var(--color-bg) 85%, transparent)",
        backdropFilter: "blur(12px)",
        borderBottom: `1px solid ${styles.line}`,
      }}
    >
      <nav
        style={{
          maxWidth: "80rem",
          margin: "0 auto",
          padding: "1rem 1.5rem",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {/* Logo */}
        <a
          href="#home"
          style={{
            fontFamily: "'Playfair Display', serif",
            fontWeight: 900,
            fontSize: "1.5rem",
            letterSpacing: "-0.025em",
            color: styles.accent,
            textDecoration: "none",
          }}
        >
          Kuya Matt<span style={{ color: styles.green }}>.</span>
        </a>

        {/* Desktop links */}
        <div
          className="nav-links"
          style={{ display: "flex", gap: "2rem", alignItems: "center" }}
        >
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "0.875rem",
                fontWeight: 600,
                color: "color-mix(in srgb, var(--color-text) 70%, transparent)",
                textDecoration: "none",
                transition: "color 150ms",
              }}
              onMouseEnter={(e) =>
                ((e.target as HTMLElement).style.color = styles.accent)
              }
              onMouseLeave={(e) =>
                ((e.target as HTMLElement).style.color =
                  "color-mix(in srgb, var(--color-text) 70%, transparent)")
              }
            >
              {l.label}
            </a>
          ))}
          <a
            href="#start-plan"
            style={{
              backgroundColor: styles.accent,
              color: "#fff",
              padding: "0.625rem 1.5rem",
              borderRadius: "9999px",
              fontSize: "0.875rem",
              fontWeight: 600,
              textDecoration: "none",
              transition: "background-color 150ms",
              whiteSpace: "nowrap",
            }}
            onMouseEnter={(e) =>
              ((e.target as HTMLElement).style.backgroundColor = styles.accentDark)
            }
            onMouseLeave={(e) =>
              ((e.target as HTMLElement).style.backgroundColor = styles.accent)
            }
          >
            Plan With Kuya Matt
          </a>
        </div>

        {/* Mobile burger */}
        <button
          className="burger-btn"
          onClick={() => setOpen(true)}
          aria-label="Open menu"
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            color: styles.ink,
            display: "none",
          }}
        >
          <Menu size={24} />
        </button>
      </nav>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            style={{
              position: "fixed",
              inset: 0,
              zIndex: 60,
              backgroundColor: styles.green,
              color: styles.inverse,
              display: "flex",
              flexDirection: "column",
              padding: "1.5rem",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: "3rem",
              }}
            >
              <span
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontWeight: 900,
                  fontSize: "1.5rem",
                }}
              >
                Kuya Matt.
              </span>
              <button
                onClick={() => setOpen(false)}
                aria-label="Close menu"
                style={{
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  color: styles.inverse,
                }}
              >
                <X size={28} />
              </button>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "1.5rem",
              }}
            >
              {navLinks.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: "2rem",
                    fontWeight: 700,
                    color: styles.inverse,
                    textDecoration: "none",
                  }}
                >
                  {l.label}
                </a>
              ))}
            </div>
            <a
              href="#start-plan"
              onClick={() => setOpen(false)}
              style={{
                marginTop: "auto",
                backgroundColor: styles.accent,
                color: "#fff",
                textAlign: "center",
                padding: "1rem 1.5rem",
                borderRadius: "9999px",
                fontWeight: 600,
                textDecoration: "none",
              }}
            >
              Plan With Kuya Matt
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 768px) {
          .nav-links { display: none !important; }
          .burger-btn { display: block !important; }
        }
      `}</style>
    </header>
  );
}

/* ─── HERO ─── */
function Hero() {
  return (
    <section
      id="home"
      style={{
        width: "100%",
        position: "relative",
        overflow: "hidden",
        padding: "2rem 1.5rem 5rem",
        backgroundColor: styles.bg,
      }}
    >
      {/* Decorative swoosh */}
      <svg
        aria-hidden="true"
        style={{
          pointerEvents: "none",
          position: "absolute",
          right: 0,
          top: 0,
          height: "100%",
          width: "66%",
          opacity: 0.4,
        }}
        viewBox="0 0 600 700"
        fill="none"
        preserveAspectRatio="xMidYMid slice"
      >
        <path
          d="M-50 700 C 250 500, 250 200, 650 40"
          stroke={styles.lineStrong}
          strokeWidth="2"
          fill="none"
        />
      </svg>

      <div
        style={{
          maxWidth: "64rem",
          margin: "0 auto",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          minHeight: "85vh",
          justifyContent: "center",
          padding: "5rem 0 4rem",
        }}
      >
        {/* Hero text — full width, centred */}
        <motion.div
          style={{ position: "relative", zIndex: 10, width: "100%" }}
          variants={stagger}
          initial="hidden"
          animate="visible"
        >
          <motion.p
            variants={fadeUp}
            style={{
              fontFamily: "'Anton', sans-serif",
              color: styles.accent,
              fontSize: "clamp(2rem, 5vw, 3.5rem)",
              letterSpacing: "0.05em",
              lineHeight: 1,
              textTransform: "uppercase",
              margin: 0,
            }}
          >
            Plan With Your
          </motion.p>

          <motion.h1
            variants={fadeUp}
            style={{
              fontFamily: "'Kaushan Script', cursive",
              color: styles.accentBright,
              fontSize: "clamp(4rem, 10vw, 7rem)",
              lineHeight: 0.9,
              margin: "1rem 0",
              textShadow: "0 2px 8px rgba(0,0,0,0.08)",
            }}
          >
            Financial
            <br />
            Kuya
          </motion.h1>

          <motion.div variants={fadeUp} style={{ marginTop: "2rem" }}>
            <h2
              style={{
                fontFamily: "'Playfair Display', serif",
                fontWeight: 800,
                fontSize: "clamp(1.5rem, 3vw, 2rem)",
                color: styles.accentDark,
                letterSpacing: "-0.01em",
                margin: 0,
              }}
            >
              Matt Gaven Matibag,{" "}
              <span style={{ color: styles.accent }}>LPT</span>
            </h2>
            <p
              style={{
                marginTop: "0.75rem",
                fontSize: "clamp(1rem, 2vw, 1.125rem)",
                color: "color-mix(in srgb, var(--color-text) 80%, transparent)",
                maxWidth: "34rem",
                lineHeight: 1.7,
                margin: "0.75rem auto 0",
              }}
            >
              Helping Filipino individuals and families build financial security,
              protection, and confidence for the future.
            </p>
          </motion.div>

          <motion.div
            variants={fadeUp}
            style={{
              marginTop: "2.5rem",
              display: "flex",
              flexWrap: "wrap",
              gap: "1rem",
              justifyContent: "center",
            }}
          >
            <a
              href="#start-plan"
              style={{
                backgroundColor: styles.accent,
                color: "#fff",
                padding: "1rem 2rem",
                borderRadius: "9999px",
                fontWeight: 600,
                textDecoration: "none",
                transition: "all 150ms",
                boxShadow: "0 4px 12px rgba(176,23,39,0.3)",
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
              }}
            >
              Plan With Kuya Matt <ChevronRight size={16} />
            </a>
            <a
              href="#about"
              style={{
                border: `2px solid ${styles.accent}`,
                color: styles.accent,
                padding: "1rem 2rem",
                borderRadius: "9999px",
                fontWeight: 600,
                textDecoration: "none",
                transition: "all 150ms",
              }}
            >
              Meet Kuya Matt
            </a>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}

/* ─── ABOUT ─── */
function About() {
  return (
    <section
      id="about"
      style={{
        width: "100%",
        padding: "6rem 1.5rem",
        backgroundColor: styles.green,
        color: styles.inverse,
        overflow: "hidden",
      }}
    >
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
        {/* Polaroid collage */}
        <div
          style={{
            position: "relative",
            height: "420px",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <motion.figure
            style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: "62%",
              backgroundColor: "#fff",
              padding: "0.75rem",
              paddingBottom: "2.5rem",
              boxShadow: "0 25px 50px rgba(0,0,0,0.25)",
              margin: 0,
            }}
            initial={{ opacity: 0, y: 40, rotate: -12 }}
            whileInView={{ opacity: 1, y: 0, rotate: -5 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <span
              style={{
                position: "absolute",
                top: "-1rem",
                left: "50%",
                transform: "translateX(-50%) rotate(3deg)",
                width: "5rem",
                height: "1.75rem",
                backgroundColor: "rgba(254,249,195,0.7)",
                display: "block",
              }}
            />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1740&auto=format&fit=crop"
              alt="Kuya Matt at an event"
              style={{ width: "100%", height: "16rem", objectFit: "cover" }}
            />
          </motion.figure>

          <motion.figure
            style={{
              position: "absolute",
              right: 0,
              bottom: 0,
              width: "64%",
              backgroundColor: "#fff",
              padding: "0.75rem",
              paddingBottom: "2.5rem",
              boxShadow: "0 25px 50px rgba(0,0,0,0.25)",
              margin: 0,
            }}
            initial={{ opacity: 0, y: 40, rotate: 14 }}
            whileInView={{ opacity: 1, y: 0, rotate: 6 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          >
            <span
              style={{
                position: "absolute",
                top: "-1rem",
                left: "50%",
                transform: "translateX(-50%) rotate(-6deg)",
                width: "5rem",
                height: "1.75rem",
                backgroundColor: "rgba(254,249,195,0.7)",
                display: "block",
              }}
            />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1740&auto=format&fit=crop"
              alt="Kuya Matt speaking"
              style={{ width: "100%", height: "14rem", objectFit: "cover" }}
            />
          </motion.figure>
        </div>

        {/* Copy */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2
            style={{
              fontFamily: "'Playfair Display', serif",
              fontWeight: 900,
              fontSize: "clamp(2.5rem, 6vw, 3.5rem)",
              marginBottom: "2rem",
              lineHeight: 1.1,
            }}
          >
            Meet Kuya Matt
          </h2>
          <p
            style={{
              fontSize: "clamp(1rem, 1.5vw, 1.125rem)",
              lineHeight: 1.75,
              color: "color-mix(in srgb, var(--color-inverse) 80%, transparent)",
              maxWidth: "36rem",
            }}
          >
            A licensed professional working in financial services and education,
            focused on youth development, financial literacy, and community
            empowerment. Dedicated to helping individuals and families achieve
            financial protection, growth, and long-term security through service
            and advocacy.
          </p>

          <blockquote
            style={{
              marginTop: "2rem",
              borderLeft: `4px solid ${styles.accentBright}`,
              paddingLeft: "1.5rem",
              fontFamily: "'Playfair Display', serif",
              fontStyle: "italic",
              fontSize: "clamp(1.25rem, 2.5vw, 1.5rem)",
              lineHeight: 1.4,
            }}
          >
            "Protection first, growth second — that's how families stay
            standing."
          </blockquote>

          <a
            href="#start-plan"
            style={{
              marginTop: "2.5rem",
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              backgroundColor: "#fff",
              color: styles.green,
              padding: "0.875rem 2rem",
              borderRadius: "9999px",
              fontWeight: 700,
              textDecoration: "none",
              transition: "all 150ms",
            }}
          >
            Start Your Plan <ChevronRight size={16} />
          </a>
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

/* ─── SERVICES ─── */
const serviceCards = [
  {
    icon: BookOpen,
    title: "Digital Literacy and Skills Training",
    desc: "Equipping communities with practical digital skills to thrive in a rapidly changing economy. Bridging the gap between technology access and real-world application.",
  },
  {
    icon: ShieldCheck,
    title: "Insurance Talks and Financial Literacy Sessions",
    desc: "Delivering accessible, jargon-free sessions on insurance products, savings strategies, and retirement planning to help ordinary Filipinos make informed financial decisions.",
  },
  {
    icon: Users,
    title: "Community and Youth Empowerment",
    desc: "Partnering with local organizations, schools, and community groups to deliver advocacy initiatives that promote financial security and responsible civic participation.",
  },
  {
    icon: Landmark,
    title: "Advocacy for Financial Security",
    desc: "Championing long-term financial preparedness through public talks, school visits, and corporate presentations. Making financial planning a shared national priority, one family at a time.",
  },
];

function Services() {
  return (
    <section id="services" style={{ width: "100%", backgroundColor: styles.accent }}>
      <div
        style={{ display: "grid", gridTemplateColumns: "1fr" }}
        className="services-grid"
      >
        {/* Cards panel */}
        <div
          style={{
            backgroundColor: styles.bg,
            padding: "5rem 1.5rem",
          }}
          className="services-panel"
        >
          <motion.h2
            style={{
              fontFamily: "'Playfair Display', serif",
              fontWeight: 900,
              fontSize: "clamp(2rem, 4vw, 3rem)",
              color: styles.accent,
              marginBottom: "0.75rem",
            }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            What Kuya Matt Does
          </motion.h2>
          <p
            style={{
              color: "color-mix(in srgb, var(--color-text) 70%, transparent)",
              marginBottom: "3rem",
              maxWidth: "32rem",
              lineHeight: 1.6,
            }}
          >
            Straight-talking, jargon-free help — built for real Filipino families
            and the next generation.
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            {serviceCards.map((card, i) => (
              <motion.div
                key={i}
                style={{
                  display: "flex",
                  gap: "1.25rem",
                  backgroundColor: styles.surface,
                  borderRadius: "1rem",
                  padding: "1.5rem",
                  borderLeft: `4px solid ${styles.accent}`,
                  boxShadow: "0 1px 4px rgba(0,0,0,0.06)",
                  transition: "box-shadow 200ms",
                }}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: 0.5,
                  delay: i * 0.1,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                <div
                  style={{
                    flexShrink: 0,
                    width: "3.5rem",
                    height: "3.5rem",
                    backgroundColor: styles.accent,
                    borderRadius: "0.75rem",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#fff",
                  }}
                >
                  <card.icon size={28} />
                </div>
                <div>
                  <h3
                    style={{
                      fontFamily: "'Playfair Display', serif",
                      fontWeight: 700,
                      fontSize: "1.0625rem",
                      color: styles.accent,
                      marginBottom: "0.375rem",
                    }}
                  >
                    {card.title}
                  </h3>
                  <p
                    style={{
                      color: "color-mix(in srgb, var(--color-text) 75%, transparent)",
                      lineHeight: 1.65,
                      fontSize: "0.9375rem",
                    }}
                  >
                    {card.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Red photo panel */}
        <div
          className="services-photo"
          style={{
            position: "relative",
            minHeight: "400px",
            display: "none",
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://images.unsplash.com/photo-1573497491765-dccce02b29df?q=80&w=1740&auto=format&fit=crop"
            alt="Reviewing a financial plan"
            style={{
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
              mixBlendMode: "luminosity",
              opacity: 0.9,
            }}
          />
          <div
            style={{
              position: "absolute",
              inset: 0,
              backgroundColor: `color-mix(in srgb, ${styles.accent} 70%, transparent)`,
              mixBlendMode: "multiply",
            }}
          />
        </div>
      </div>

      <style>{`
        @media (min-width: 1024px) {
          .services-grid { grid-template-columns: 1fr 1fr !important; }
          .services-photo { display: block !important; }
          .services-panel { padding: 7rem 4rem !important; }
        }
      `}</style>
    </section>
  );
}

/* ─── WHY IT MATTERS ─── */
function WhyItMatters() {
  return (
    <section
      id="why"
      style={{
        width: "100%",
        padding: "7rem 1.5rem",
        backgroundColor: styles.accent,
        color: "#fff",
        overflow: "hidden",
        position: "relative",
      }}
    >
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
            color: "rgba(255,255,255,0.7)",
            marginBottom: "1.5rem",
            fontSize: "0.875rem",
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
            fontSize: "clamp(2rem, 5vw, 3.5rem)",
            lineHeight: 1.15,
            marginBottom: "2rem",
          }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          Only{" "}
          <span
            style={{
              fontFamily: "'Kaushan Script', cursive",
              fontSize: "clamp(3rem, 8vw, 5rem)",
              verticalAlign: "baseline",
            }}
          >
            1 in 5
          </span>{" "}
          Filipino families is financially prepared for the loss of an income
          earner.
        </motion.p>
        <motion.p
          style={{
            fontSize: "clamp(1.125rem, 2vw, 1.375rem)",
            color: "rgba(255,255,255,0.85)",
            fontWeight: 500,
          }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          Let&apos;s make sure your family is the one that is.
        </motion.p>
      </div>
    </section>
  );
}

/* ─── PROCESS ─── */
const processSteps = [
  { label: "Talk", desc: "A relaxed, zero-pressure kwentuhan to understand where you are." },
  { label: "Plan", desc: "I build a custom strategy around your real numbers and goals." },
  { label: "Protect", desc: "We lock in your coverage and set up the safety net." },
  { label: "Review", desc: "Regular check-ins to adjust as your life and income grow." },
];

function Process() {
  return (
    <section
      style={{
        width: "100%",
        padding: "6rem 1.5rem",
        backgroundColor: styles.elevated,
      }}
    >
      <div style={{ maxWidth: "80rem", margin: "0 auto" }}>
        <motion.h2
          style={{
            fontFamily: "'Playfair Display', serif",
            fontWeight: 900,
            fontSize: "clamp(2rem, 4vw, 3rem)",
            color: styles.accent,
            marginBottom: "4rem",
          }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          How it works
        </motion.h2>

        <div
          style={{ display: "grid", gridTemplateColumns: "1fr", gap: "2rem", position: "relative" }}
          className="process-grid"
        >
          {processSteps.map((step, i) => (
            <motion.div
              key={i}
              style={{ position: "relative", zIndex: 10 }}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              <div
                style={{
                  width: "3.5rem",
                  height: "3.5rem",
                  backgroundColor: styles.accent,
                  color: "#fff",
                  borderRadius: "9999px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontFamily: "'Playfair Display', serif",
                  fontWeight: 900,
                  fontSize: "1.25rem",
                  marginBottom: "1.5rem",
                  boxShadow: "0 4px 12px rgba(176,23,39,0.25)",
                }}
              >
                {i + 1}
              </div>
              <h3
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontWeight: 700,
                  fontSize: "1.375rem",
                  color: styles.ink,
                  marginBottom: "0.5rem",
                }}
              >
                {step.label}
              </h3>
              <p style={{ color: "color-mix(in srgb, var(--color-text) 70%, transparent)", lineHeight: 1.65 }}>
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        @media (min-width: 768px) {
          .process-grid { grid-template-columns: repeat(4, 1fr) !important; }
          .process-line { display: block !important; }
        }
      `}</style>
    </section>
  );
}

/* ─── ENGAGEMENTS ─── */
const engagements = [
  { label: "School Talks", count: "50+", desc: "Financial literacy sessions in public & private schools" },
  { label: "Families Served", count: "200+", desc: "Individuals and families with active financial plans" },
  { label: "Community Events", count: "30+", desc: "Barangay and community advocacy programs" },
  { label: "Corporate Partners", count: "15+", desc: "Companies reached through workplace wellness talks" },
];

function Engagements() {
  return (
    <section
      id="engagements"
      style={{
        width: "100%",
        padding: "6rem 1.5rem",
        backgroundColor: styles.green,
        color: styles.inverse,
      }}
    >
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
              fontSize: "0.8125rem",
              color: "rgba(245,241,231,0.6)",
              marginBottom: "0.75rem",
            }}
          >
            Impact & Reach
          </p>
          <h2
            style={{
              fontFamily: "'Playfair Display', serif",
              fontWeight: 900,
              fontSize: "clamp(2rem, 4vw, 3rem)",
              lineHeight: 1.1,
            }}
          >
            Building financial confidence,{" "}
            <span style={{ color: styles.accentBright }}>one family at a time.</span>
          </h2>
        </motion.div>

        <div
          style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem" }}
          className="eng-grid"
        >
          {engagements.map((e, i) => (
            <motion.div
              key={i}
              style={{
                padding: "2rem",
                border: `1px solid rgba(245,241,231,0.15)`,
                borderRadius: "1rem",
                backgroundColor: "rgba(255,255,255,0.04)",
                backdropFilter: "blur(4px)",
              }}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
            >
              <div
                style={{
                  fontFamily: "'Anton', sans-serif",
                  fontSize: "clamp(2.5rem, 5vw, 3.5rem)",
                  color: styles.accentBright,
                  lineHeight: 1,
                  marginBottom: "0.5rem",
                }}
              >
                {e.count}
              </div>
              <div
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontWeight: 700,
                  fontSize: "1.125rem",
                  marginBottom: "0.375rem",
                }}
              >
                {e.label}
              </div>
              <p style={{ fontSize: "0.875rem", color: "rgba(245,241,231,0.65)", lineHeight: 1.5 }}>
                {e.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        @media (min-width: 768px) {
          .eng-grid { grid-template-columns: repeat(4, 1fr) !important; }
        }
      `}</style>
    </section>
  );
}

/* ─── TESTIMONIALS ─── */
const testimonials = [
  {
    quote:
      "Kuya Matt didn't try to sell me a package I didn't need. He looked at my freelance income and built something that actually made sense. First time a finance guy spoke my language.",
    name: "Dave",
    age: 28,
    role: "Software Engineer",
  },
  {
    quote:
      "I thought insurance was for titos and titas. Kuya Matt showed me the math on starting now vs later. No-brainer. Super clean, no pressure.",
    name: "Trisha",
    age: 26,
    role: "Agency Founder",
  },
];

function Testimonials() {
  return (
    <section
      style={{
        width: "100%",
        padding: "6rem 1.5rem",
        backgroundColor: styles.bg,
      }}
    >
      <div
        style={{
          maxWidth: "80rem",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1fr",
          gap: "3rem",
        }}
        className="test-grid"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2
            style={{
              fontFamily: "'Playfair Display', serif",
              fontWeight: 900,
              fontSize: "clamp(2rem, 4vw, 3rem)",
              color: styles.accent,
              lineHeight: 1.15,
            }}
          >
            Don&apos;t just take my word for it.
          </h2>
          <div style={{ display: "flex", gap: "0.25rem", marginTop: "1rem" }}>
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={20} fill={styles.accent} color={styles.accent} />
            ))}
          </div>
        </motion.div>

        <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              style={{
                backgroundColor: styles.surface,
                border: `1px solid ${styles.line}`,
                padding: "2.5rem",
                borderRadius: "1rem",
                boxShadow: "0 1px 4px rgba(0,0,0,0.06)",
              }}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              <p
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontStyle: "italic",
                  fontSize: "clamp(1.0625rem, 2vw, 1.25rem)",
                  lineHeight: 1.7,
                  color: styles.ink,
                  marginBottom: "2rem",
                }}
              >
                &ldquo;{t.quote}&rdquo;
              </p>
              <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                <div
                  style={{
                    width: "2.75rem",
                    height: "2.75rem",
                    backgroundColor: styles.accent,
                    color: "#fff",
                    borderRadius: "9999px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontFamily: "'Playfair Display', serif",
                    fontWeight: 700,
                    fontSize: "1.125rem",
                  }}
                >
                  {t.name.charAt(0)}
                </div>
                <div>
                  <div style={{ fontWeight: 700, color: styles.ink, fontSize: "0.9375rem" }}>
                    {t.name}, {t.age}
                  </div>
                  <div style={{ fontSize: "0.8125rem", color: styles.muted }}>{t.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        @media (min-width: 1024px) {
          .test-grid {
            grid-template-columns: 5fr 7fr !important;
            align-items: start !important;
          }
        }
      `}</style>
    </section>
  );
}

/* ─── JOIN OUR TEAM ─── */
function JoinOurTeam() {
  return (
    <section
      id="join-team"
      style={{
        width: "100%",
        padding: "6rem 1.5rem",
        backgroundColor: styles.elevated,
      }}
    >
      <div
        style={{
          maxWidth: "80rem",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1fr",
          gap: "4rem",
          alignItems: "center",
        }}
        className="join-grid"
      >
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <p
            style={{
              fontFamily: "'Anton', sans-serif",
              textTransform: "uppercase",
              letterSpacing: "0.15em",
              fontSize: "0.8125rem",
              color: styles.muted,
              marginBottom: "0.75rem",
            }}
          >
            Opportunities
          </p>
          <h2
            style={{
              fontFamily: "'Playfair Display', serif",
              fontWeight: 900,
              fontSize: "clamp(2rem, 4vw, 3rem)",
              color: styles.ink,
              lineHeight: 1.1,
              marginBottom: "1.5rem",
            }}
          >
            Grow with Kuya Matt&apos;s{" "}
            <span style={{ color: styles.accent }}>team.</span>
          </h2>
          <p
            style={{
              color: "color-mix(in srgb, var(--color-text) 70%, transparent)",
              lineHeight: 1.75,
              maxWidth: "32rem",
              marginBottom: "2rem",
            }}
          >
            Whether you&apos;re looking to build a career in financial services or
            join as an advocate for financial literacy, there&apos;s a place for you.
            We&apos;re growing a team of passionate, mission-driven Filipinos.
          </p>
          <a
            href="#start-plan"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              backgroundColor: styles.accent,
              color: "#fff",
              padding: "0.875rem 2rem",
              borderRadius: "9999px",
              fontWeight: 600,
              textDecoration: "none",
              fontSize: "0.9375rem",
            }}
          >
            Express Interest <ChevronRight size={16} />
          </a>
        </motion.div>

        <motion.div
          style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          {[
            { title: "Financial Advisor Associate", type: "Part-time / Commission" },
            { title: "Financial Literacy Speaker", type: "Per Engagement" },
            { title: "Community Program Coordinator", type: "Volunteer / Paid" },
          ].map((role, i) => (
            <div
              key={i}
              style={{
                backgroundColor: styles.surface,
                border: `1px solid ${styles.line}`,
                borderRadius: "0.875rem",
                padding: "1.5rem",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                gap: "1rem",
              }}
            >
              <div>
                <div
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontWeight: 700,
                    fontSize: "1.0625rem",
                    color: styles.ink,
                  }}
                >
                  {role.title}
                </div>
                <div style={{ fontSize: "0.8125rem", color: styles.muted, marginTop: "0.25rem" }}>
                  {role.type}
                </div>
              </div>
              <ChevronRight size={20} color={styles.accent} />
            </div>
          ))}
        </motion.div>
      </div>

      <style>{`
        @media (min-width: 1024px) {
          .join-grid { grid-template-columns: 1fr 1fr !important; }
        }
      `}</style>
    </section>
  );
}

/* ─── CTA SECTION ─── */
function CTASection() {
  return (
    <section
      id="start-plan"
      style={{
        width: "100%",
        padding: "6rem 1.5rem",
        backgroundColor: styles.accent,
        color: "#fff",
        textAlign: "center",
      }}
    >
      <div style={{ maxWidth: "48rem", margin: "0 auto" }}>
        <motion.p
          style={{
            fontFamily: "'Anton', sans-serif",
            textTransform: "uppercase",
            letterSpacing: "0.2em",
            fontSize: "0.8125rem",
            color: "rgba(255,255,255,0.65)",
            marginBottom: "1rem",
          }}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Get Started Today
        </motion.p>
        <motion.h2
          style={{
            fontFamily: "'Playfair Display', serif",
            fontWeight: 900,
            fontSize: "clamp(2rem, 5vw, 3.25rem)",
            lineHeight: 1.15,
            marginBottom: "1.5rem",
          }}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          Your family deserves a plan.{" "}
          <span style={{ fontFamily: "'Kaushan Script', cursive", fontSize: "1.15em" }}>
            Let&apos;s build one.
          </span>
        </motion.h2>
        <motion.p
          style={{
            fontSize: "1.0625rem",
            color: "rgba(255,255,255,0.8)",
            lineHeight: 1.7,
            marginBottom: "2.5rem",
          }}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Book a free, no-pressure consultation with Kuya Matt. We&apos;ll talk about
          where you are, where you want to be, and how to get there.
        </motion.p>
        <motion.div
          style={{ display: "flex", justifyContent: "center", flexWrap: "wrap", gap: "1rem" }}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <a
            href="mailto:matt@kuyamatt.com"
            style={{
              backgroundColor: "#fff",
              color: styles.accent,
              padding: "1rem 2.5rem",
              borderRadius: "9999px",
              fontWeight: 700,
              textDecoration: "none",
              fontSize: "1rem",
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
            }}
          >
            Book a Free Session <ChevronRight size={16} />
          </a>
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              border: "2px solid rgba(255,255,255,0.5)",
              color: "#fff",
              padding: "1rem 2rem",
              borderRadius: "9999px",
              fontWeight: 600,
              textDecoration: "none",
              fontSize: "1rem",
            }}
          >
            Message on Facebook
          </a>
        </motion.div>
      </div>
    </section>
  );
}

/* ─── FOOTER ─── */
function Footer() {
  return (
    <footer
      style={{
        backgroundColor: styles.ink,
        color: "rgba(245,241,231,0.65)",
        padding: "3rem 1.5rem",
        textAlign: "center",
      }}
    >
      <div style={{ maxWidth: "80rem", margin: "0 auto" }}>
        <p
          style={{
            fontFamily: "'Playfair Display', serif",
            fontWeight: 900,
            fontSize: "1.5rem",
            color: styles.inverse,
            marginBottom: "0.5rem",
          }}
        >
          Kuya Matt<span style={{ color: styles.accentBright }}>.</span>
        </p>
        <p style={{ fontSize: "0.875rem", marginBottom: "1.5rem" }}>
          Matt Gaven Matibag, LPT — Licensed Financial Advisor
        </p>
        <div
          style={{
            borderTop: `1px solid rgba(245,241,231,0.1)`,
            paddingTop: "1.5rem",
            fontSize: "0.8125rem",
          }}
        >
          © {new Date().getFullYear()} Kuya Matt. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

/* ─── PAGE EXPORT ─── */
export default function HomePage() {
  return (
    <div style={{ width: "100%", minHeight: "100vh", backgroundColor: styles.bg }}>
      <Nav />
      <main>
        <Hero />
        <About />
        <Services />
        <WhyItMatters />
        <Process />
        <Engagements />
        <Testimonials />
        <JoinOurTeam />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
