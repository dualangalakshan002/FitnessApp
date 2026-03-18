import logo from "../assets/logo.png";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex items-end overflow-hidden"
      style={{ minHeight: "100vh" }}
    >
      {/* Backgrounds */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 55% 70% at 65% 55%, rgba(201,154,15,.09) 0%, transparent 65%), linear-gradient(160deg,#050505 0%,#1a1500 55%,#050505 100%)",
        }}
      />
      <div className="hero-grid" />
      <div
        className="absolute inset-0"
        style={{
          opacity: 0.03,
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        }}
      />

      {/* Watermark */}
      <img
        src={logo}
        alt=""
        className="absolute right-[15%] top-1/2 -translate-y-1/2 opacity-10 pointer-events-none hidden md:block"
        style={{ width: "clamp(400px,34vw,500px)" }}
      />

      {/* Scroll indicator */}
      <div className="absolute left-[60px] bottom-[88px] z-10 hidden md:flex flex-col items-center gap-2">
        <div className="scroll-line" />
        <span
          style={{
            fontFamily: "'Barlow Condensed', sans-serif",
            fontSize: "0.6rem",
            fontWeight: 700,
            letterSpacing: "0.24em",
            textTransform: "uppercase",
            color: "var(--muted)",
            writingMode: "vertical-rl",
          }}
        >
          Scroll
        </span>
      </div>

      {/* Hero Content */}
      <div
        className="relative z-10 px-[60px] pb-[88px] max-w-[820px]"
        style={{ paddingLeft: "clamp(26px,5vw,60px)", paddingRight: "clamp(26px,5vw,60px)" }}
      >
        <div
          className="hero-tag-anim inline-flex items-center gap-[10px] mb-[22px]"
          style={{
            fontFamily: "'Barlow Condensed', sans-serif",
            fontSize: "0.74rem",
            fontWeight: 700,
            letterSpacing: "0.24em",
            textTransform: "uppercase",
            color: "var(--gold)",
          }}
        >
          <span
            style={{ width: 28, height: 1.5, background: "var(--gold)", display: "inline-block" }}
          />
          Est. 2023 &nbsp;·&nbsp; Fitness Sports Center
        </div>

        <h1
          className="hero-title-anim mb-[26px]"
          style={{
            fontFamily: "'Bebas Neue', sans-serif",
            fontSize: "clamp(68px,11vw,150px)",
            lineHeight: 0.88,
            textTransform: "uppercase",
          }}
        >
          Push<br />Beyond<br />
          <span style={{ color: "var(--gold)" }}>Limits.</span>
        </h1>

        <p
          className="hero-sub-anim mb-[42px]"
          style={{
            fontSize: "1.02rem",
            fontWeight: 300,
            lineHeight: 1.76,
            color: "var(--muted)",
            maxWidth: 460,
          }}
        >
          Where dedication meets world-class training. More than a gym — your transformation starts here.
        </p>

        <div className="hero-acts-anim flex items-center gap-[18px] flex-wrap">
          <a
            href="#contact"
            className="clip-skew no-underline"
            style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              fontSize: "0.84rem",
              fontWeight: 800,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              background: "var(--gold)",
              color: "var(--black)",
              padding: "15px 38px",
              display: "inline-block",
              transition: "background 0.2s, transform 0.2s",
            }}
            onMouseEnter={(e) => { e.currentTarget.style.background = "var(--gold-lt)"; e.currentTarget.style.transform = "scale(1.03)"; }}
            onMouseLeave={(e) => { e.currentTarget.style.background = "var(--gold)"; e.currentTarget.style.transform = "scale(1)"; }}
          >
            Start Today
          </a>
          <a
            href="#services"
            className="clip-skew no-underline"
            style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              fontSize: "0.84rem",
              fontWeight: 700,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              background: "transparent",
              color: "var(--white)",
              border: "1.5px solid var(--border-g)",
              padding: "14px 36px",
              display: "inline-block",
              transition: "border-color 0.2s, color 0.2s",
            }}
            onMouseEnter={(e) => { e.currentTarget.style.borderColor = "var(--gold)"; e.currentTarget.style.color = "var(--gold)"; }}
            onMouseLeave={(e) => { e.currentTarget.style.borderColor = "var(--border-g)"; e.currentTarget.style.color = "var(--white)"; }}
          >
            Explore Programs
          </a>
        </div>
      </div>

      {/* Stats */}
      <div
        className="hero-stats-anim absolute right-[60px] bottom-[88px] z-10 hidden md:flex flex-col gap-[22px] items-end"
      >
        {[
          { num: "12", suffix: "K", label: "Members Strong" },
          { num: "48", suffix: "+", label: "Weekly Classes" },
          { num: "24", suffix: "/7", label: "Open Access" },
        ].map((s) => (
          <div key={s.label}>
            <div
              style={{
                fontFamily: "'Bebas Neue', sans-serif",
                fontSize: "2.5rem",
                lineHeight: 1,
                color: "var(--white)",
              }}
            >
              {s.num}
              <span style={{ color: "var(--gold)" }}>{s.suffix}</span>
            </div>
            <div
              style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontSize: "0.66rem",
                fontWeight: 600,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "var(--muted)",
                marginTop: 2,
                textAlign: "right",
              }}
            >
              {s.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
