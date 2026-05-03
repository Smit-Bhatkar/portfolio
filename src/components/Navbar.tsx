"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#timeline", label: "Journey" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
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
        zIndex: 500,
        padding: "0 32px",
        height: "72px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        background: scrolled
          ? "rgba(5,5,15,0.85)"
          : "transparent",
        backdropFilter: scrolled ? "blur(16px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(255,255,255,0.06)" : "none",
        transition: "all 0.4s ease",
      }}
    >
      {/* Logo */}
      <Link
        href="#hero"
        style={{
          fontFamily: "Space Grotesk, sans-serif",
          fontWeight: 700,
          fontSize: "1.25rem",
          color: "var(--text)",
          textDecoration: "none",
          letterSpacing: "-0.03em",
          cursor: "none",
        }}
      >
        <span
          style={{
            background: "linear-gradient(135deg, var(--violet), var(--cyan))",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          SB
        </span>
        <span style={{ color: "var(--text)" }}>.</span>
      </Link>

      {/* Desktop Nav */}
      <nav
        style={{ display: "flex", gap: "32px", alignItems: "center" }}
        className="hidden md:flex"
      >
        {navLinks.map((link) => (
          <a key={link.href} href={link.href} className="nav-link">
            {link.label}
          </a>
        ))}
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-ghost"
          style={{ padding: "8px 20px", fontSize: "0.85rem" }}
        >
          Resume ↗
        </a>
      </nav>

      {/* Hamburger */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="md:hidden"
        aria-label="Toggle menu"
        style={{
          background: "transparent",
          border: "none",
          color: "var(--text)",
          cursor: "none",
          padding: "8px",
          display: "flex",
          flexDirection: "column",
          gap: "5px",
        }}
      >
        {[0, 1, 2].map((i) => (
          <span
            key={i}
            style={{
              display: "block",
              width: "22px",
              height: "2px",
              background: "var(--text)",
              borderRadius: "2px",
              transition: "all 0.3s",
              transform:
                menuOpen && i === 0
                  ? "rotate(45deg) translateY(7px)"
                  : menuOpen && i === 2
                  ? "rotate(-45deg) translateY(-7px)"
                  : menuOpen && i === 1
                  ? "scaleX(0)"
                  : "none",
            }}
          />
        ))}
      </button>

      {/* Mobile Menu */}
      {menuOpen && (
        <div
          style={{
            position: "fixed",
            top: "72px",
            left: 0,
            right: 0,
            background: "rgba(5,5,15,0.97)",
            backdropFilter: "blur(16px)",
            borderBottom: "1px solid var(--border)",
            padding: "24px 32px",
            display: "flex",
            flexDirection: "column",
            gap: "20px",
          }}
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="nav-link"
              style={{ fontSize: "1rem" }}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
