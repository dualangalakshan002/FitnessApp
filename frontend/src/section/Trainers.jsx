const trainers = [
  { initial: "M", name: "Marcus Reid",  role: "Head Strength Coach",     sport: "Powerlifting",  years: "8",  clients: "340+" },
  { initial: "S", name: "Sofia Reyes",  role: "Conditioning Specialist", sport: "HIIT / Cardio", years: "5",  clients: "210+" },
  { initial: "D", name: "Devon Clark",  role: "Combat Fitness Coach",    sport: "Boxing",        years: "12", clients: "180+" },
  { initial: "A", name: "Aiko Tanaka",  role: "Mobility & Wellness Coach", sport: "Yoga / Recovery", years: "6", clients: "290+" },
];

function TrainerCard({ t }) {
  return (
    <div className="trainer-card reveal">
      {/* Visual */}
      <div className="relative overflow-hidden flex items-center justify-center" style={{ height: 250, background: "var(--mid)" }}>
        {/* Avatar */}
        <div
          className="flex items-center justify-center rounded-full"
          style={{
            width: 80,
            height: 80,
            background: "#1a1500",
            border: "2px solid var(--border-g)",
            fontFamily: "'Bebas Neue', sans-serif",
            fontSize: "2rem",
            color: "var(--gold)",
          }}
        >
          {t.initial}
        </div>

        {/* Overlay */}
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(to top, rgba(5,5,5,.95) 0%, transparent 55%)" }}
        />

        {/* Sport badge */}
        <span
          className="absolute top-[13px] right-[13px] clip-skew-xs"
          style={{
            fontFamily: "'Barlow Condensed', sans-serif",
            fontSize: "0.6rem",
            fontWeight: 800,
            letterSpacing: "0.16em",
            textTransform: "uppercase",
            background: "var(--gold)",
            color: "var(--black)",
            padding: "3px 10px",
          }}
        >
          {t.sport}
        </span>
      </div>

      {/* Info */}
      <div style={{ padding: "16px 18px 20px" }}>
        <div
          style={{
            fontFamily: "'Barlow Condensed', sans-serif",
            fontSize: "1.1rem",
            fontWeight: 800,
            letterSpacing: "0.06em",
            textTransform: "uppercase",
            marginBottom: 2,
          }}
        >
          {t.name}
        </div>
        <div style={{ fontSize: "0.76rem", color: "var(--muted)", marginBottom: 11 }}>
          {t.role}
        </div>
        <div className="flex gap-[13px]">
          {[{ val: t.years, lbl: "Yrs exp" }, { val: t.clients, lbl: "Clients" }].map((s) => (
            <div key={s.lbl}>
              <strong
                style={{
                  display: "block",
                  fontFamily: "'Bebas Neue', sans-serif",
                  fontSize: "1.4rem",
                  color: "var(--gold)",
                  lineHeight: 1,
                }}
              >
                {s.val}
              </strong>
              <span style={{ fontSize: "0.6rem", color: "var(--muted)", textTransform: "uppercase", letterSpacing: "0.1em" }}>
                {s.lbl}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Trainers() {
  return (
    <section id="trainers" style={{ background: "var(--black)", padding: "116px 60px" }}>
      <div
        className="inline-flex items-center gap-[10px] mb-4 reveal"
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
        Our Team
      </div>

      <h2
        className="reveal"
        style={{
          fontFamily: "'Bebas Neue', sans-serif",
          fontSize: "clamp(44px,7vw,84px)",
          lineHeight: 0.9,
          textTransform: "uppercase",
          marginBottom: 0,
        }}
      >
        Meet the<br />Coaches
      </h2>

      <div
        className="grid gap-4 mt-[52px]"
        style={{ gridTemplateColumns: "repeat(4,1fr)" }}
      >
        {trainers.map((t) => (
          <TrainerCard key={t.name} t={t} />
        ))}
      </div>
    </section>
  );
}
