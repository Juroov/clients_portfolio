"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, Mail, MessageCircle, Phone, CheckCircle2, Send } from "lucide-react";

const contactMethods = [
  {
    icon: MessageCircle,
    label: "Chat on Facebook",
    href: "https://facebook.com",
    color: "#1877F2",
    desc: "Fastest response",
  },
  {
    icon: Mail,
    label: "Send an Email",
    href: "mailto:kuya.juan@example.com",
    color: "#C8102E",
    desc: "Detailed inquiries",
  },
  {
    icon: Phone,
    label: "Call or Text",
    href: "tel:+639000000000",
    color: "#E8112D",
    desc: "Direct consultation",
  },
];

const benefits = [
  "Zero pressure, 100% educational",
  "Tailored to your income & goals",
  "Coverage from ₱1,000/month",
  "Free financial health check",
];

export default function StartPlanSection() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section
      id="start-plan"
      style={{
        width: "100%",
        padding: "0",
        background: "#0A0A0A",
        overflow: "hidden",
        position: "relative",
      }}
    >
      {/* ── Main CTA band ── */}
      <div
        style={{
          padding: "8rem 1.5rem",
          background: "linear-gradient(135deg, #111111 0%, #141414 50%, #111111 100%)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Glows */}
        <div
          aria-hidden
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "80vw",
            height: "60vw",
            borderRadius: "9999px",
            background: "radial-gradient(ellipse, rgba(200,16,46,0.12) 0%, rgba(200,16,46,0.06) 40%, transparent 70%)",
            pointerEvents: "none",
          }}
        />
        <motion.div
          aria-hidden
          style={{
            position: "absolute",
            top: "30%",
            right: "10%",
            width: "20vw",
            height: "20vw",
            borderRadius: "9999px",
            background: "radial-gradient(circle, rgba(200,16,46,0.08) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
          animate={{ scale: [1, 1.15, 1] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        />

        <div
          style={{
            maxWidth: "90rem",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "5rem",
            alignItems: "start",
            position: "relative",
            zIndex: 10,
          }}
          className="cta-grid"
        >
          {/* ── Left copy ── */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <p
              style={{
                fontFamily: "'Syne', sans-serif",
                textTransform: "uppercase",
                letterSpacing: "0.22em",
                fontSize: "0.7rem",
                color: "#C8102E",
                marginBottom: "1.25rem",
                fontWeight: 700,
              }}
            >
              Start Your Journey
            </p>

            <h2
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontWeight: 700,
                fontSize: "clamp(2.5rem, 5.5vw, 4.5rem)",
                lineHeight: 1.05,
                color: "var(--color-text)",
                margin: "0 0 1.75rem",
              }}
            >
              Ready to{" "}
              <span
                style={{
                  fontStyle: "italic",
                  background: "linear-gradient(135deg, #FFFFFF 0%, #C8102E 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                protect
              </span>{" "}
              your family?
            </h2>

            <p
              style={{
                fontSize: "1.0625rem",
                color: "var(--color-text-muted)",
                lineHeight: 1.9,
                maxWidth: "34rem",
                margin: "0 0 2.5rem",
                fontFamily: "'Plus Jakarta Sans', sans-serif",
              }}
            >
              Schedule a free, no-pressure session with Kuya Juan today. Get personalized
              advice built around your real income, goals, and the future you want for your family.
            </p>

            {/* Benefits list */}
            <div style={{ display: "flex", flexDirection: "column", gap: "0.875rem", marginBottom: "3rem" }}>
              {benefits.map((b, i) => (
                <motion.div
                  key={i}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.875rem",
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    fontSize: "0.9375rem",
                    color: "var(--color-text)",
                    fontWeight: 500,
                  }}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 + i * 0.08 }}
                >
                  <CheckCircle2
                    size={18}
                    style={{
                      color: "#C8102E",
                      flexShrink: 0,
                    }}
                  />
                  {b}
                </motion.div>
              ))}
            </div>

            {/* Contact methods */}
            <div style={{ display: "flex", flexDirection: "column", gap: "0.875rem" }}>
              {contactMethods.map((m, i) => (
                <motion.a
                  key={i}
                  href={m.href}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "1rem",
                    padding: "1rem 1.25rem",
                    background: `linear-gradient(135deg, ${m.color}10 0%, ${m.color}05 100%)`,
                    border: `1px solid ${m.color}25`,
                    borderRadius: "1rem",
                    textDecoration: "none",
                    backdropFilter: "blur(10px)",
                    transition: "all 250ms",
                  }}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  whileHover={{
                    scale: 1.02,
                    borderColor: `${m.color}50`,
                    background: `linear-gradient(135deg, ${m.color}18 0%, ${m.color}08 100%)`,
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div
                    style={{
                      width: "2.75rem",
                      height: "2.75rem",
                      borderRadius: "0.75rem",
                      background: `${m.color}20`,
                      border: `1px solid ${m.color}30`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: m.color,
                      flexShrink: 0,
                    }}
                  >
                    <m.icon size={18} />
                  </div>
                  <div style={{ flex: 1 }}>
                    <div
                      style={{
                        fontFamily: "'Plus Jakarta Sans', sans-serif",
                        fontWeight: 700,
                        fontSize: "0.9375rem",
                        color: "var(--color-text)",
                      }}
                    >
                      {m.label}
                    </div>
                    <div
                      style={{
                        fontFamily: "'Syne', sans-serif",
                        fontSize: "0.7rem",
                        color: m.color,
                        fontWeight: 600,
                        textTransform: "uppercase",
                        letterSpacing: "0.08em",
                        marginTop: "0.125rem",
                      }}
                    >
                      {m.desc}
                    </div>
                  </div>
                  <ChevronRight size={16} style={{ color: m.color, opacity: 0.6 }} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* ── Right: Contact form ── */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            style={{
              background: "linear-gradient(135deg, rgba(20,20,20,0.9) 0%, rgba(10,10,10,0.95) 100%)",
              border: "1px solid rgba(200,16,46,0.15)",
              borderRadius: "2rem",
              padding: "3rem",
              backdropFilter: "blur(20px)",
              position: "relative",
              overflow: "hidden",
            }}
          >
            {/* Card top accent */}
            <div
              style={{
                position: "absolute",
                top: 0,
                left: "3rem",
                right: "3rem",
                height: "2px",
                background: "linear-gradient(90deg, transparent, rgba(200,16,46,0.5), rgba(200,16,46,0.5), transparent)",
                borderRadius: "9999px",
              }}
            />

            <AnimatePresence mode="wait">
              {!submitted ? (
                <motion.form
                  key="form"
                  onSubmit={handleSubmit}
                  style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0, y: -20 }}
                >
                  <div>
                    <h3
                      style={{
                        fontFamily: "'Cormorant Garamond', serif",
                        fontWeight: 700,
                        fontSize: "clamp(1.5rem, 3vw, 2.25rem)",
                        color: "var(--color-text)",
                        margin: "0 0 0.5rem",
                        lineHeight: 1.1,
                      }}
                    >
                      Book a Free Session
                    </h3>
                    <p
                      style={{
                        fontFamily: "'Plus Jakarta Sans', sans-serif",
                        fontSize: "0.9rem",
                        color: "var(--color-text-muted)",
                        margin: 0,
                      }}
                    >
                      Fill this out and Kuya Juan will get back to you within 24 hours.
                    </p>
                  </div>

                  {[
                    { key: "name", label: "Full Name", type: "text", placeholder: "Juan dela Cruz" },
                    { key: "email", label: "Email Address", type: "email", placeholder: "juan@email.com" },
                  ].map((field) => (
                    <div key={field.key} style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                      <label
                        style={{
                          fontFamily: "'Syne', sans-serif",
                          fontSize: "0.75rem",
                          fontWeight: 700,
                          color: "var(--color-text-muted)",
                          textTransform: "uppercase",
                          letterSpacing: "0.1em",
                        }}
                      >
                        {field.label}
                      </label>
                      <input
                        type={field.type}
                        placeholder={field.placeholder}
                        value={form[field.key as keyof typeof form]}
                        onChange={(e) => setForm({ ...form, [field.key]: e.target.value })}
                        required
                        style={{
                          background: "rgba(255,255,255,0.04)",
                          border: "1px solid rgba(255,255,255,0.1)",
                          borderRadius: "0.875rem",
                          padding: "0.875rem 1.125rem",
                          color: "var(--color-text)",
                          fontFamily: "'Plus Jakarta Sans', sans-serif",
                          fontSize: "0.9375rem",
                          outline: "none",
                          transition: "border-color 200ms",
                          width: "100%",
                        }}
                        onFocus={(e) => {
                          (e.target as HTMLInputElement).style.borderColor = "rgba(200,16,46,0.5)";
                        }}
                        onBlur={(e) => {
                          (e.target as HTMLInputElement).style.borderColor = "rgba(255,255,255,0.1)";
                        }}
                      />
                    </div>
                  ))}

                  <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                    <label
                      style={{
                        fontFamily: "'Syne', sans-serif",
                        fontSize: "0.75rem",
                        fontWeight: 700,
                        color: "var(--color-text-muted)",
                        textTransform: "uppercase",
                        letterSpacing: "0.1em",
                      }}
                    >
                      What are your goals?
                    </label>
                    <textarea
                      placeholder="I want to protect my family, start saving, get insurance..."
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      rows={4}
                      style={{
                        background: "rgba(255,255,255,0.04)",
                        border: "1px solid rgba(255,255,255,0.1)",
                        borderRadius: "0.875rem",
                        padding: "0.875rem 1.125rem",
                        color: "var(--color-text)",
                        fontFamily: "'Plus Jakarta Sans', sans-serif",
                        fontSize: "0.9375rem",
                        outline: "none",
                        resize: "vertical",
                        transition: "border-color 200ms",
                        width: "100%",
                      }}
                      onFocus={(e) => {
                        (e.target as HTMLTextAreaElement).style.borderColor = "rgba(200,16,46,0.5)";
                      }}
                      onBlur={(e) => {
                        (e.target as HTMLTextAreaElement).style.borderColor = "rgba(255,255,255,0.1)";
                      }}
                    />
                  </div>

                  <motion.button
                    type="submit"
                    style={{
                      background: "linear-gradient(135deg, #C8102E 0%, #E8112D 100%)",
                      color: "#fff",
                      border: "none",
                      borderRadius: "9999px",
                      padding: "1.125rem",
                      fontFamily: "'Syne', sans-serif",
                      fontWeight: 700,
                      fontSize: "0.9375rem",
                      letterSpacing: "0.04em",
                      cursor: "pointer",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: "0.5rem",
                      boxShadow: "0 8px 28px rgba(200,16,46,0.4)",
                      width: "100%",
                    }}
                    whileHover={{ scale: 1.03, boxShadow: "0 14px 40px rgba(200,16,46,0.55)" }}
                    whileTap={{ scale: 0.97 }}
                  >
                    Book My Free Session <Send size={16} />
                  </motion.button>
                </motion.form>
              ) : (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  style={{ textAlign: "center", padding: "4rem 0" }}
                >
                  <motion.div
                    style={{
                      width: "5rem",
                      height: "5rem",
                      background: "linear-gradient(135deg, rgba(200,16,46,0.2), rgba(200,16,46,0.08))",
                      border: "1px solid rgba(200,16,46,0.4)",
                      borderRadius: "9999px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      margin: "0 auto 1.5rem",
                    }}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", damping: 15, stiffness: 200 }}
                  >
                    <CheckCircle2 size={36} style={{ color: "#C8102E" }} />
                  </motion.div>
                  <h3
                    style={{
                      fontFamily: "'Cormorant Garamond', serif",
                      fontWeight: 700,
                      fontSize: "2rem",
                      color: "var(--color-text)",
                      margin: "0 0 0.75rem",
                    }}
                  >
                    Message Sent!
                  </h3>
                  <p
                    style={{
                      fontFamily: "'Plus Jakarta Sans', sans-serif",
                      color: "var(--color-text-muted)",
                      fontSize: "0.9375rem",
                      lineHeight: 1.7,
                    }}
                  >
                    Thanks, {form.name || "friend"}! Kuya Juan will reach out within 24 hours to schedule your free session.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>

      {/* ── Footer ── */}
      <footer
        style={{
          background: "#040810",
          borderTop: "1px solid rgba(200,16,46,0.1)",
          padding: "2.5rem 1.5rem",
        }}
      >
        <div
          style={{
            maxWidth: "90rem",
            margin: "0 auto",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "1rem",
          }}
        >
          <span
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontWeight: 700,
              fontStyle: "italic",
              fontSize: "1.25rem",
              background: "linear-gradient(135deg, #FFFFFF 0%, #FFFFFF 60%, #C8102E 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Kuya Juan.
          </span>
          <p
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontSize: "0.8rem",
              color: "var(--color-text-subtle)",
              margin: 0,
            }}
          >
            © {new Date().getFullYear()} Juan dela Cruz, LPT · All rights reserved.
          </p>
          <p
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontSize: "0.8rem",
              color: "var(--color-text-subtle)",
              margin: 0,
            }}
          >
            Financial Advisor · Educator · Community Advocate
          </p>
        </div>
      </footer>

      <style>{`
        @media (min-width: 1024px) {
          .cta-grid { grid-template-columns: 1fr 1fr !important; }
        }
        input::placeholder, textarea::placeholder {
          color: rgba(138, 148, 166, 0.5);
        }
      `}</style>
    </section>
  );
}
