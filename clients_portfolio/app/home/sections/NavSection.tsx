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

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
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
        transition: "all 300ms",
        backgroundColor: scrolled
          ? "rgba(245,241,231,0.92)"
          : "transparent",
        backdropFilter: scrolled ? "blur(16px)" : "none",
        borderBottom: scrolled ? "1px solid var(--color-border)" : "1px solid transparent",
        boxShadow: scrolled ? "0 2px 20px rgba(31,27,22,0.06)" : "none",
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
        <motion.a
          href="#home"
          style={{
            fontFamily: "'Playfair Display', serif",
            fontWeight: 900,
            fontSize: "1.375rem",
            color: "var(--color-accent)",
            textDecoration: "none",
            letterSpacing: "-0.02em",
          }}
          whileHover={{ scale: 1.02 }}
        >
          Kuya Matt<span style={{ color: "var(--color-green)" }}>.</span>
        </motion.a>

        {/* Desktop links */}
        <div className="nav-desktop" style={{ display: "flex", gap: "2rem", alignItems: "center" }}>
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "0.875rem",
                fontWeight: 600,
                color: "var(--color-text)",
                textDecoration: "none",
                transition: "color 150ms",
                opacity: 0.7,
              }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.opacity = "1"; (e.currentTarget as HTMLElement).style.color = "var(--color-accent)"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.opacity = "0.7"; (e.currentTarget as HTMLElement).style.color = "var(--color-text)"; }}
            >
              {l.label}
            </a>
          ))}
          <motion.a
            href="#start-plan"
            style={{
              backgroundColor: "var(--color-accent)",
              color: "#fff",
              padding: "0.625rem 1.5rem",
              borderRadius: "9999px",
              fontSize: "0.875rem",
              fontWeight: 600,
              textDecoration: "none",
              whiteSpace: "nowrap",
              boxShadow: "0 4px 14px rgba(176,23,39,0.25)",
            }}
            whileHover={{ scale: 1.04, backgroundColor: "var(--color-accent-dark)" }}
            whileTap={{ scale: 0.97 }}
          >
            Plan With Kuya Matt
          </motion.a>
        </div>

        {/* Burger */}
        <button
          className="nav-burger"
          onClick={() => setOpen(true)}
          aria-label="Open menu"
          style={{ background: "none", border: "none", cursor: "pointer", color: "var(--color-text)", display: "none" }}
        >
          <Menu size={24} />
        </button>
      </nav>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
              style={{ position: "fixed", inset: 0, zIndex: 98, backgroundColor: "rgba(0,0,0,0.4)", backdropFilter: "blur(4px)" }}
            />
            <motion.div
              key="drawer"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              style={{
                position: "fixed",
                top: 0,
                right: 0,
                bottom: 0,
                width: "min(320px, 85vw)",
                zIndex: 99,
                backgroundColor: "var(--color-green)",
                color: "var(--color-inverse)",
                display: "flex",
                flexDirection: "column",
                padding: "2rem 1.5rem",
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "3rem" }}>
                <span style={{ fontFamily: "'Playfair Display', serif", fontWeight: 900, fontSize: "1.25rem" }}>
                  Kuya Matt.
                </span>
                <button onClick={() => setOpen(false)} style={{ background: "none", border: "none", cursor: "pointer", color: "var(--color-inverse)" }}>
                  <X size={24} />
                </button>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
                {navLinks.map((l, i) => (
                  <motion.a
                    key={l.href}
                    href={l.href}
                    onClick={() => setOpen(false)}
                    style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.75rem", fontWeight: 700, color: "var(--color-inverse)", textDecoration: "none" }}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.06 }}
                  >
                    {l.label}
                  </motion.a>
                ))}
              </div>
              <a
                href="#start-plan"
                onClick={() => setOpen(false)}
                style={{ marginTop: "auto", backgroundColor: "var(--color-accent)", color: "#fff", textAlign: "center", padding: "1rem", borderRadius: "9999px", fontWeight: 600, textDecoration: "none" }}
              >
                Plan With Kuya Matt
              </a>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 768px) {
          .nav-desktop { display: none !important; }
          .nav-burger { display: block !important; }
        }
      `}</style>
    </header>
  );
}
