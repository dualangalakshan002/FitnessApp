import { useState, useEffect } from "react";
import LogoBadge from "./LogoBadge";

const links = [
  { label: "About",    href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Plans",    href: "#plans" },
  { label: "Trainers", href: "#trainers" },
  { label: "Contact",  href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open,     setOpen]     = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const close = () => setOpen(false);

  return (
    <>
      {/* Mobile Menu */}
      {open && (
        <div
          className="fixed inset-0 z-[90] flex flex-col items-center justify-center gap-8"
          style={{ background: "var(--black)" }}
        >
          {links.map((l) => (
            <a key={l.href} href={l.href} className="mobile-link" onClick={close}>
              {l.label}
            </a>
          ))}
        </div>
      )}

      {/* Nav */}
      <nav
        className="fixed top-0 left-0 right-0 z-[100] flex items-center justify-between transition-all duration-300"
        style={{
          padding: scrolled ? "12px 60px" : "20px 60px",
          background: scrolled ? "rgba(5,5,5,0.95)" : "transparent",
          backdropFilter: scrolled ? "blur(16px)" : "none",
          borderBottom: scrolled ? "1px solid var(--border)" : "none",
        }}
      >
        {/* Logo */}
        <a href="#hero" className="flex items-center gap-3 no-underline">
          <LogoBadge size={50} />
          <div className="flex flex-col leading-none">
            <span
              style={{
                fontFamily: "var(--fd, 'Bebas Neue', sans-serif)",
                fontSize: "1.65rem",
                letterSpacing: "0.06em",
                color: "var(--white)",
              }}
            >
              FITNESS
            </span>
            <span
              style={{
                fontFamily: "var(--fc, 'Barlow Condensed', sans-serif)",
                fontSize: "0.58rem",
                fontWeight: 700,
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                color: "var(--gold)",
              }}
            >
              Sports Center · Est. 2023
            </span>
          </div>
        </a>

        {/* Desktop Links */}
        <ul className="hidden md:flex gap-8 list-none">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="nav-link-item">
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA + Hamburger */}
        <div className="flex items-center gap-4">
          <a
            href="#contact"
            className="hidden md:inline-block clip-skew-sm no-underline"
            style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              fontSize: "0.78rem",
              fontWeight: 800,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              background: "var(--gold)",
              color: "var(--black)",
              padding: "10px 26px",
              transition: "background 0.2s, transform 0.2s",
            }}
            onMouseEnter={(e) => { e.currentTarget.style.background = "var(--gold-lt)"; e.currentTarget.style.transform = "scale(1.03)"; }}
            onMouseLeave={(e) => { e.currentTarget.style.background = "var(--gold)"; e.currentTarget.style.transform = "scale(1)"; }}
          >
            Join Now
          </a>

          {/* Hamburger */}
          <button
            className="flex md:hidden flex-col gap-[5px] bg-transparent border-none p-1 cursor-none"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            <span
              className="block w-[26px] h-[2px] transition-all duration-300"
              style={{
                background: "var(--white)",
                transform: open ? "rotate(45deg) translate(5px,5px)" : "none",
              }}
            />
            <span
              className="block w-[26px] h-[2px] transition-all duration-300"
              style={{
                background: "var(--white)",
                opacity: open ? 0 : 1,
              }}
            />
            <span
              className="block w-[26px] h-[2px] transition-all duration-300"
              style={{
                background: "var(--white)",
                transform: open ? "rotate(-45deg) translate(5px,-5px)" : "none",
              }}
            />
          </button>
        </div>
      </nav>
    </>
  );
}
