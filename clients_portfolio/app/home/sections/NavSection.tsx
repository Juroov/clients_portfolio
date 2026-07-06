"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Engagements", href: "#engagements" },
  { label: "Join Our Team", href: "#join-team" },
];

export default function NavSection() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState("#home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        width: "100%",
        transition: "all 400ms cubic-bezier(0.16,1,0.3,1)",
        background: scrolled
          ? "rgba(8, 12, 20, 0.85)"
          : "transparent",
        backdropFilter: scrolled ? "blur(24px) saturate(180%)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(24px) saturate(180%)" : "none",
        borderBottom: scrolled
          ? "1px solid rgba(200,16,46,0.12)"
          : "1px solid transparent",
        boxShadow: scrolled
          ? "0 4px 30px rgba(0,0,0,0.4), 0 1px 0 rgba(200,16,46,0.08)"
          : "none",
      }}
    >
      <nav
        style={{
          maxWidth: "90rem",
          margin: "0 auto",
          padding: "1.125rem 2rem",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {/* ── Logo ── */}
        <motion.a
          href="#home"
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontWeight: 700,
            fontStyle: "italic",
            fontSize: "1.5rem",
            textDecoration: "none",
            letterSpacing: "-0.02em",
            display: "flex",
            alignItems: "center",
            gap: "0.25rem",
          }}
          whileHover={{ scale: 1.03 }}
        >
          <span style={{ color: "#FFFFFF" }}>
            Kuya Juan
          </span>
          <span style={{ color: "#C8102E", fontStyle: "normal", fontWeight: 900 }}>
            .
          </span>
        </motion.a>

        {/* ── Desktop links ── */}
        <div className="nav-desktop" style={{ display: "flex", gap: "2.5rem", alignItems: "center" }}>
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setActiveLink(l.href)}
              style={{
                fontFamily: "'Syne', sans-serif",
                fontSize: "0.8125rem",
                fontWeight: 600,
                color: activeLink === l.href ? "#FFFFFF" : "rgba(255,255,255,0.45)",
                textDecoration: "none",
                transition: "all 200ms",
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                position: "relative",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.color = "#FFFFFF";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.color =
                  activeLink === l.href ? "#FFFFFF" : "rgba(255,255,255,0.45)";
              }}
            >
              {l.label}
            </a>
          ))}

          <motion.a
            href="#start-plan"
            style={{
              background: "#C8102E",
              color: "#fff",
              padding: "0.625rem 1.625rem",
              borderRadius: "9999px",
              fontSize: "0.8125rem",
              fontWeight: 700,
              fontFamily: "'Syne', sans-serif",
              textDecoration: "none",
              whiteSpace: "nowrap",
              boxShadow: "0 4px 20px rgba(200,16,46,0.4)",
              letterSpacing: "0.04em",
            }}
            whileHover={{ scale: 1.06, boxShadow: "0 8px 30px rgba(200,16,46,0.55)" }}
            whileTap={{ scale: 0.97 }}
          >
            Plan With Kuya Juan
          </motion.a>
        </div>

        {/* ── Burger ── */}
        <button
          className="nav-burger"
          onClick={() => setOpen(true)}
          aria-label="Open menu"
          style={{
            background: "rgba(255,255,255,0.06)",
            border: "1px solid rgba(255,255,255,0.12)",
            borderRadius: "0.5rem",
            cursor: "pointer",
            color: "#fff",
            display: "none",
            padding: "0.5rem",
          }}
        >
          <Menu size={22} />
        </button>
      </nav>

      {/* ── Mobile drawer ── */}
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
              style={{
                position: "fixed",
                inset: 0,
                zIndex: 98,
                backgroundColor: "rgba(0,0,0,0.7)",
                backdropFilter: "blur(8px)",
              }}
            />
            <motion.div
              key="drawer"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 32, stiffness: 300 }}
              style={{
                position: "fixed",
                top: 0,
                right: 0,
                bottom: 0,
                width: "min(340px, 88vw)",
                zIndex: 99,
                background: "#111111",
                borderLeft: "1px solid rgba(255,255,255,0.08)",
                color: "var(--color-text)",
                display: "flex",
                flexDirection: "column",
                padding: "2rem 1.75rem",
              }}
            >
              {/* Drawer header */}
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "3.5rem" }}>
                <span
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontWeight: 700,
                    fontStyle: "italic",
                    fontSize: "1.375rem",
                    color: "#FFFFFF",
                  }}
                >
                  Kuya Juan.
                </span>
                <button
                  onClick={() => setOpen(false)}
                  style={{
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.08)",
                    borderRadius: "0.5rem",
                    cursor: "pointer",
                    color: "var(--color-text-muted)",
                    padding: "0.5rem",
                  }}
                >
                  <X size={22} />
                </button>
              </div>

              {/* Drawer links */}
              <div style={{ display: "flex", flexDirection: "column", gap: "0.25rem" }}>
                {navLinks.map((l, i) => (
                  <motion.a
                    key={l.href}
                    href={l.href}
                    onClick={() => setOpen(false)}
                    style={{
                      fontFamily: "'Cormorant Garamond', serif",
                      fontSize: "2rem",
                      fontWeight: 600,
                      fontStyle: "italic",
                      color: "var(--color-text)",
                      textDecoration: "none",
                      padding: "0.625rem 0",
                      borderBottom: "1px solid rgba(255,255,255,0.04)",
                      transition: "color 200ms",
                    }}
                    initial={{ opacity: 0, x: 24 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.07 }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.color = "#C8102E";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.color = "var(--color-text)";
                    }}
                  >
                    {l.label}
                  </motion.a>
                ))}
              </div>

              <motion.a
                href="#start-plan"
                onClick={() => setOpen(false)}
                style={{
                  marginTop: "auto",
                  background: "#C8102E",
                  color: "#fff",
                  textAlign: "center",
                  padding: "1rem",
                  borderRadius: "9999px",
                  fontWeight: 700,
                  fontFamily: "'Syne', sans-serif",
                  textDecoration: "none",
                  fontSize: "0.9375rem",
                  boxShadow: "0 8px 24px rgba(200,16,46,0.4)",
                }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                Plan With Kuya Juan
              </motion.a>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 768px) {
          .nav-desktop { display: none !important; }
          .nav-burger { display: flex !important; }
        }
      `}</style>
    </header>
  );
}
