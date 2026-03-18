const items = [
  "Strength Training", "CrossFit", "HIIT", "Boxing",
  "Yoga", "Nutrition Coaching", "Open 24/7", "Personal Training", "Recovery",
  "Strength Training", "CrossFit", "HIIT", "Boxing",
  "Yoga", "Nutrition Coaching", "Open 24/7", "Personal Training", "Recovery",
];

export default function Marquee() {
  return (
    <div
      style={{ background: "var(--gold)", padding: "13px 0", overflow: "hidden", whiteSpace: "nowrap" }}
    >
      <div className="marquee-track">
        {items.map((item, i) => (
          <span
            key={i}
            style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              fontSize: "0.74rem",
              fontWeight: 800,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "var(--black)",
              padding: "0 30px",
            }}
          >
            <span style={{ marginRight: 30, fontSize: "0.52rem", opacity: 0.6 }}>★</span>
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
