import { useState, useRef } from "react";

const contactInfo = [
  { icon: "📍", label: "Location", value: "No. 45, Temple Road, Colombo 1, Sri Lanka" },
  { icon: "📞", label: "Phone",    value: "+94 (0) 1234 567 890" },
  { icon: "✉️", label: "Email",    value: "hello@fitnesssportscenter.com" },
  { icon: "🕐", label: "Hours",    value: "Open 24 / 7 — 365 Days a Year" },
];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [loading,   setLoading]   = useState(false);
  const [errors,    setErrors]    = useState({});

  const nameRef  = useRef();
  const emailRef = useRef();
  const msgRef   = useRef();

  const validate = () => {
    const e = {};
    if (!nameRef.current.value.trim())                            e.name  = "Please enter your full name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailRef.current.value.trim())) e.email = "Please enter a valid email address.";
    if (!msgRef.current.value.trim())                             e.msg   = "Please enter a message.";
    return e;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1500));
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <section id="contact" className="relative overflow-hidden" style={{ background: "var(--brown)", padding: "116px 60px" }}>
      {/* Glow */}
      <div
        className="absolute right-[-80px] bottom-[-100px] w-[500px] h-[500px] pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(201,154,15,.06) 0%, transparent 70%)" }}
      />

      <div className="grid gap-[68px] items-start relative z-10" style={{ gridTemplateColumns: "1fr 1.35fr" }}>
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
            Get In Touch
          </div>

          <h2
            style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: "clamp(44px,7vw,84px)",
              lineHeight: 0.9,
              textTransform: "uppercase",
              marginBottom: 18,
            }}
          >
            Start Your<br />Journey.
          </h2>

          <p style={{ fontSize: "0.96rem", fontWeight: 300, lineHeight: 1.78, color: "var(--muted)", marginBottom: 40 }}>
            Ready to transform? Send us a message and our team will respond within 24 hours to discuss your goals and the best plan for you.
          </p>

          <div className="flex flex-col gap-[18px]">
            {contactInfo.map((c) => (
              <div key={c.label} className="flex items-start gap-[13px]">
                <div
                  className="clip-skew-xs flex items-center justify-center flex-shrink-0"
                  style={{
                    width: 36,
                    height: 36,
                    background: "rgba(5,5,5,.55)",
                    border: "1px solid var(--border-g)",
                    fontSize: "0.9rem",
                  }}
                >
                  {c.icon}
                </div>
                <div>
                  <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "0.64rem", fontWeight: 700, letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--gold)", marginBottom: 2 }}>
                    {c.label}
                  </div>
                  <div style={{ fontSize: "0.9rem", color: "var(--white)" }}>
                    {c.value}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right — Form */}
        <div className="reveal-r">
          {submitted ? (
            <div
              style={{
                background: "rgba(201,154,15,.07)",
                border: "1px solid rgba(201,154,15,.28)",
                padding: "34px 30px",
                textAlign: "center",
              }}
            >
              <div style={{ fontSize: "2rem", marginBottom: 9 }}>✔</div>
              <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "1.25rem", fontWeight: 800, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--gold)", marginBottom: 7 }}>
                Message Received!
              </div>
              <p style={{ fontSize: "0.88rem", color: "var(--muted)" }}>
                Thanks for reaching out. Our team will contact you within 24 hours.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-[15px]" noValidate>
              {/* Name + Email row */}
              <div className="grid gap-[15px]" style={{ gridTemplateColumns: "1fr 1fr" }}>
                {/* Name */}
                <div className="flex flex-col gap-[6px]">
                  <label style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "0.66rem", fontWeight: 800, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--muted)" }}>
                    Name <span style={{ color: "var(--gold)" }}>*</span>
                  </label>
                  <input
                    ref={nameRef}
                    type="text"
                    placeholder="John Smith"
                    autoComplete="name"
                    className={`form-input${errors.name ? " err" : ""}`}
                    onChange={() => setErrors((p) => ({ ...p, name: "" }))}
                  />
                  {errors.name && <span style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "0.68rem", letterSpacing: "0.08em", color: "#e05555" }}>{errors.name}</span>}
                </div>

                {/* Email */}
                <div className="flex flex-col gap-[6px]">
                  <label style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "0.66rem", fontWeight: 800, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--muted)" }}>
                    Email <span style={{ color: "var(--gold)" }}>*</span>
                  </label>
                  <input
                    ref={emailRef}
                    type="email"
                    placeholder="john@example.com"
                    autoComplete="email"
                    className={`form-input${errors.email ? " err" : ""}`}
                    onChange={() => setErrors((p) => ({ ...p, email: "" }))}
                  />
                  {errors.email && <span style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "0.68rem", letterSpacing: "0.08em", color: "#e05555" }}>{errors.email}</span>}
                </div>
              </div>

              {/* Message */}
              <div className="flex flex-col gap-[6px]">
                <label style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "0.66rem", fontWeight: 800, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--muted)" }}>
                  Message <span style={{ color: "var(--gold)" }}>*</span>
                </label>
                <textarea
                  ref={msgRef}
                  placeholder="Tell us about your fitness goals…"
                  className={`form-ta${errors.msg ? " err" : ""}`}
                  onChange={() => setErrors((p) => ({ ...p, msg: "" }))}
                />
                {errors.msg && <span style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "0.68rem", letterSpacing: "0.08em", color: "#e05555" }}>{errors.msg}</span>}
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={loading}
                className="clip-skew self-start"
                style={{
                  fontFamily: "'Barlow Condensed', sans-serif",
                  fontSize: "0.86rem",
                  fontWeight: 800,
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  background: "var(--gold)",
                  color: "var(--black)",
                  border: "none",
                  padding: "16px 44px",
                  cursor: loading ? "not-allowed" : "none",
                  opacity: loading ? 0.65 : 1,
                  transition: "background 0.2s, transform 0.15s",
                }}
                onMouseEnter={(e) => { if (!loading) e.currentTarget.style.background = "var(--gold-lt)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.background = "var(--gold)"; }}
              >
                {loading ? "Sending…" : "Send Message →"}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
