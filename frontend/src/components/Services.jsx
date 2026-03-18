import { useState } from "react";

const services = [
  { num: "01", icon: "⚡", title: "HIIT & Functional Training", desc: "High-intensity interval sessions designed to torch calories and build explosive power in 45 minutes.", badge: "45 min sessions" },
  { num: "02", icon: "🏋️", title: "Strength & Powerlifting",    desc: "Dedicated platforms, bumper plates, and smart programming for beginners to competitive lifters.", badge: "All levels" },
  { num: "03", icon: "🥊", title: "Boxing & Combat Fitness",     desc: "Full boxing ring, heavy bags, and coach-led classes that forge discipline, coordination, and conditioning.", badge: "Group & private" },
  { num: "04", icon: "🧘", title: "Recovery & Mobility",         desc: "Yoga, stretching, and foam rolling sessions to keep your body pain-free between hard training days.", badge: "Daily classes" },
  { num: "05", icon: "🫀", title: "Cardio & Endurance",          desc: "State-of-the-art treadmills, rowers, and assault bikes — plus structured running and cycling programs.", badge: "Open 24/7" },
  { num: "06", icon: "🥗", title: "Nutrition Coaching",          desc: "Personalised meal plans and supplement guidance from qualified sports nutritionists.", badge: "1-on-1 sessions" },
];

function ServiceCard({ svc }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      className="svc-card relative overflow-hidden"
      style={{
        background: hovered ? "var(--mid)" : "var(--charcoal)",
        border: `1px solid ${hovered ? "var(--gold)" : "transparent"}`,
        padding: "38px 30px",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Gradient overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "linear-gradient(135deg, var(--gold-glow), transparent)",
          opacity: hovered ? 1 : 0,
          transition: "opacity 0.3s",
        }}
      />

      <span
        className="svc-num absolute top-4 right-5 select-none"
        style={{
          fontFamily: "'Bebas Neue', sans-serif",
          fontSize: "3.6rem",
          color: hovered ? "rgba(201,154,15,.1)" : "var(--mid)",
          lineHeight: 1,
          transition: "color 0.3s",
        }}
      >
        {svc.num}
      </span>

      <div
        className="svc-icon-inner relative flex items-center justify-center mb-[22px] clip-icon"
        style={{
          width: 48,
          height: 48,
          background: hovered ? "var(--gold)" : "var(--mid)",
          border: `1px solid ${hovered ? "var(--gold)" : "var(--border)"}`,
          fontSize: "1.35rem",
          transition: "background 0.3s, border-color 0.3s",
        }}
      >
        {svc.icon}
      </div>

      <h3
        className="relative mb-[10px]"
        style={{
          fontFamily: "'Barlow Condensed', sans-serif",
          fontSize: "1.15rem",
          fontWeight: 800,
          letterSpacing: "0.06em",
          textTransform: "uppercase",
        }}
      >
        {svc.title}
      </h3>

      <p
        className="relative"
        style={{ fontSize: "0.86rem", fontWeight: 300, lineHeight: 1.7, color: "var(--muted)" }}
      >
        {svc.desc}
      </p>

      <span
        className="relative inline-block mt-4"
        style={{
          fontFamily: "'Barlow Condensed', sans-serif",
          fontSize: "0.63rem",
          fontWeight: 800,
          letterSpacing: "0.18em",
          textTransform: "uppercase",
          color: "var(--gold)",
          border: "1px solid rgba(201,154,15,.26)",
          padding: "3px 11px",
        }}
      >
        {svc.badge}
      </span>
    </div>
  );
}

export default function Services() {
  return (
    <section id="services" style={{ background: "var(--black)", padding: "116px 60px" }}>
      {/* Header */}
      <div className="flex justify-between items-end mb-[50px] flex-wrap gap-4">
        <div>
          <div
            className="inline-flex items-center gap-[10px] mb-4"
            style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              fontSize: "0.7rem",
              fontWeight: 800,
              letterSpacing: "0.24em",
              textTransform: "uppercase",
              color: "var(--gold)",
            }}
          >
            <span style={{ width: 24, height: 1.5, background: "var(--gold)", display: "inline-block" }} />
            What We Offer
          </div>
          <h2
            className="reveal"
            style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: "clamp(44px,7vw,84px)",
              lineHeight: 0.9,
              textTransform: "uppercase",
            }}
          >
            Services &<br />Programs
          </h2>
        </div>
        <p
          className="reveal"
          style={{
            fontSize: "0.94rem",
            fontWeight: 300,
            lineHeight: 1.75,
            color: "var(--muted)",
            maxWidth: 400,
          }}
        >
          Every discipline, every goal — covered. Science-backed programs, not shortcuts.
        </p>
      </div>

      {/* Grid */}
      <div
        className="grid gap-[2px]"
        style={{ gridTemplateColumns: "repeat(3,1fr)" }}
      >
        {services.map((svc) => (
          <ServiceCard key={svc.num} svc={svc} />
        ))}
      </div>
    </section>
  );
}
