import LogoBadge from "./LogoBadge";

const links = ["About", "Services", "Plans", "Trainers", "Contact"];

export default function Footer() {
  return (
    <footer
      className="flex items-center justify-between flex-wrap gap-5"
      style={{
        background: "var(--black)",
        borderTop: "1px solid var(--border)",
        padding: "42px 60px",
      }}
    >
      {/* Brand */}
      <div className="flex items-center gap-[10px]">
        <LogoBadge size={38} />
        <div
          style={{
            fontFamily: "'Bebas Neue', sans-serif",
            fontSize: "1.45rem",
            color: "var(--white)",
          }}
        >
          FITNESS <span style={{ color: "var(--gold)" }}>SC</span>
        </div>
      </div>

      {/* Links */}
      <ul className="flex flex-wrap gap-6 list-none">
        {links.map((l) => (
          <li key={l}>
            <a href={`#${l.toLowerCase()}`} className="footer-link">
              {l}
            </a>
          </li>
        ))}
      </ul>

      {/* Copy */}
      <div style={{ fontSize: "0.72rem", color: "rgba(160,152,128,.36)" }}>
        © 2023 FITNESS Sports Center. All rights reserved.
      </div>
    </footer>
  );
}
