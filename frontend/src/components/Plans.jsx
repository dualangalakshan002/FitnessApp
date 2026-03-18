const plans = [
  {
    name: "Starter",
    price: "39",
    featured: false,
    badge: null,
    features: [
      { text: "Full gym floor access",    on: true },
      { text: "Cardio equipment",         on: true },
      { text: "Locker room",              on: true },
      { text: "Group classes",            on: false },
      { text: "Personal training",        on: false },
      { text: "Nutrition coaching",       on: false },
    ],
    btnLabel: "Get Started",
  },
  {
    name: "Athlete",
    price: "79",
    featured: true,
    badge: "Most Popular",
    features: [
      { text: "Full facility access",     on: true },
      { text: "Unlimited group classes",  on: true },
      { text: "Locker room + towel service", on: true },
      { text: "2 PT sessions / month",    on: true },
      { text: "App & progress tracking",  on: true },
      { text: "Nutrition coaching",       on: false },
    ],
    btnLabel: "Join Now",
  },
  {
    name: "Elite",
    price: "149",
    featured: false,
    badge: null,
    features: [
      { text: "Everything in Athlete",    on: true },
      { text: "Unlimited PT sessions",    on: true },
      { text: "Full nutrition coaching",  on: true },
      { text: "Priority class booking",   on: true },
      { text: "Recovery suite access",    on: true },
      { text: "2 Guest passes / month",   on: true },
    ],
    btnLabel: "Go Elite",
  },
];

function PlanCard({ plan }) {
  const scrollToContact = () =>
    document.getElementById("contact").scrollIntoView({ behavior: "smooth" });

  return (
    <div className={`plan-card${plan.featured ? " featured" : ""}`}>
      {plan.badge && (
        <div
          className="clip-skew-xs inline-block mb-4"
          style={{
            fontFamily: "'Barlow Condensed', sans-serif",
            fontSize: "0.62rem",
            fontWeight: 800,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            background: "var(--gold)",
            color: "var(--black)",
            padding: "4px 14px",
          }}
        >
          {plan.badge}
        </div>
      )}

      <div
        style={{
          fontFamily: "'Barlow Condensed', sans-serif",
          fontSize: "0.86rem",
          fontWeight: 800,
          letterSpacing: "0.2em",
          textTransform: "uppercase",
          color: "var(--muted)",
          marginBottom: 5,
        }}
      >
        {plan.name}
      </div>

      <div
        style={{
          fontFamily: "'Bebas Neue', sans-serif",
          fontSize: "4.2rem",
          lineHeight: 1,
          marginBottom: 4,
        }}
      >
        <sup style={{ fontSize: "1.6rem", verticalAlign: "top", marginTop: 9, color: "var(--gold)" }}>$</sup>
        {plan.price}
      </div>

      <div style={{ fontSize: "0.78rem", color: "var(--muted)", marginBottom: 26 }}>per month</div>

      <div style={{ height: 1, background: "rgba(201,154,15,.16)", marginBottom: 24 }} />

      <ul className="list-none flex flex-col gap-[11px] mb-8">
        {plan.features.map((f, i) => (
          <li
            key={i}
            className="flex items-center gap-[11px]"
            style={{
              fontSize: "0.86rem",
              color: "var(--muted)",
              opacity: f.on ? 1 : 0.3,
            }}
          >
            <span style={{ color: f.on ? "var(--gold)" : "var(--muted)", fontWeight: 800, flexShrink: 0 }}>
              {f.on ? "✓" : "✕"}
            </span>
            {f.text}
          </li>
        ))}
      </ul>

      <button
        onClick={scrollToContact}
        className="w-full clip-skew-sm"
        style={{
          padding: "14px",
          fontFamily: "'Barlow Condensed', sans-serif",
          fontSize: "0.8rem",
          fontWeight: 800,
          letterSpacing: "0.14em",
          textTransform: "uppercase",
          cursor: "none",
          border: plan.featured ? "none" : "1.5px solid rgba(201,154,15,.28)",
          background: plan.featured ? "var(--gold)" : "transparent",
          color: plan.featured ? "var(--black)" : "var(--white)",
          transition: "all 0.25s",
        }}
        onMouseEnter={(e) => {
          if (plan.featured) e.currentTarget.style.background = "var(--gold-lt)";
          else { e.currentTarget.style.borderColor = "var(--gold)"; e.currentTarget.style.color = "var(--gold)"; }
        }}
        onMouseLeave={(e) => {
          if (plan.featured) e.currentTarget.style.background = "var(--gold)";
          else { e.currentTarget.style.borderColor = "rgba(201,154,15,.28)"; e.currentTarget.style.color = "var(--white)"; }
        }}
      >
        {plan.btnLabel}
      </button>
    </div>
  );
}

export default function Plans() {
  return (
    <section id="plans" style={{ background: "var(--brown)", padding: "116px 60px" }}>
      {/* Header */}
      <div className="text-center mb-[52px]">
        <div
          className="inline-flex items-center justify-center gap-[10px] mb-4"
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
          Membership
          <span style={{ width: 24, height: 1.5, background: "var(--gold)", display: "inline-block" }} />
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
          Choose<br />Your Plan
        </h2>
      </div>

      {/* Cards */}
      <div
        className="grid gap-[2px] mx-auto"
        style={{ gridTemplateColumns: "repeat(3,1fr)", maxWidth: 960 }}
      >
        {plans.map((p) => (
          <PlanCard key={p.name} plan={p} />
        ))}
      </div>
    </section>
  );
}
