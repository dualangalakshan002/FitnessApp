const cards = [
  { num: "20K", label: "Sq ft of Premium Training Space" },
  { num: "95%", label: "Member Retention Rate" },
  { num: "14+", label: "Elite Certified Trainers" },
  { num: "7",   label: "Specialized Training Zones" },
];

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden"
      style={{ background: "var(--brown)", padding: "116px 60px" }}
    >
      {/* Watermark text */}
      <div
        className="absolute right-[-20px] top-1/2 -translate-y-1/2 pointer-events-none select-none"
        style={{
          fontFamily: "'Bebas Neue', sans-serif",
          fontSize: "clamp(100px,16vw,220px)",
          color: "transparent",
          WebkitTextStroke: "1px rgba(201,154,15,.05)",
        }}
      >
        PEAK
      </div>

      <div
        className="grid gap-[70px] items-center relative z-10"
        style={{ gridTemplateColumns: "1fr 1fr" }}
      >
        {/* Left */}
        <div className="reveal-l">
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
            Our Story
          </div>

          <h2
            className="mb-4"
            style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: "clamp(44px,7vw,84px)",
              lineHeight: 0.9,
              textTransform: "uppercase",
            }}
          >
            Built by<br />Athletes.
          </h2>

          <p style={{ fontSize: "0.98rem", fontWeight: 300, lineHeight: 1.84, color: "var(--muted)", marginBottom: 16 }}>
            FITNESS Sports Center was founded in 2023 with a single conviction: every person deserves a space engineered for real, measurable transformation — not casual strolls on a treadmill.
          </p>

          <div style={{ width: 34, height: 2, background: "var(--gold)", margin: "24px 0" }} />

          <p style={{ fontSize: "0.98rem", fontWeight: 300, lineHeight: 1.84, color: "var(--muted)", marginBottom: 24 }}>
            Our 20,000 sq ft facility features world-class equipment, certified coaches with elite credentials, and a community that refuses to settle for average.
          </p>

          <a
            href="#services"
            className="clip-skew no-underline inline-block"
            style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              fontSize: "0.84rem",
              fontWeight: 800,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              background: "var(--gold)",
              color: "var(--black)",
              padding: "15px 38px",
              transition: "background 0.2s, transform 0.2s",
            }}
            onMouseEnter={(e) => { e.currentTarget.style.background = "var(--gold-lt)"; e.currentTarget.style.transform = "scale(1.03)"; }}
            onMouseLeave={(e) => { e.currentTarget.style.background = "var(--gold)"; e.currentTarget.style.transform = "scale(1)"; }}
          >
            Explore Services
          </a>
        </div>

        {/* Right — stat cards */}
        <div className="about-cards reveal-r flex flex-col gap-4">
          {cards.map((c) => (
            <div
              key={c.label}
              className="about-card"
              style={{
                background: "rgba(5,5,5,.55)",
                border: "1px solid rgba(201,154,15,.14)",
                borderLeft: "3px solid var(--gold)",
                padding: "22px 26px",
                backdropFilter: "blur(6px)",
                transition: "transform 0.25s, box-shadow 0.25s",
              }}
            >
              <div
                style={{
                  fontFamily: "'Bebas Neue', sans-serif",
                  fontSize: "2.7rem",
                  color: "var(--gold)",
                  lineHeight: 1,
                  marginBottom: 3,
                }}
              >
                {c.num}
              </div>
              <div
                style={{
                  fontFamily: "'Barlow Condensed', sans-serif",
                  fontSize: "0.7rem",
                  fontWeight: 700,
                  letterSpacing: "0.16em",
                  textTransform: "uppercase",
                  color: "var(--muted)",
                }}
              >
                {c.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
