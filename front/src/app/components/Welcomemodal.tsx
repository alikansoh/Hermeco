"use client";

import { useEffect, useState } from "react";

const C = {
  gold:       "#B8933A",
  goldLight:  "#D4AA55",
  goldBorder: "rgba(184,147,58,0.20)",
  goldBg:     "rgba(184,147,58,0.06)",
  ink:        "#111009",
  inkMid:     "#2A2416",
  muted:      "#6B6150",
  mutedLight: "#9A8E7E",
  white:      "#FFFFFF",
  cream:      "#FAFAF7",
};

const steps = [
  {
    number: "01",
    title: "Select your issue",
    desc: "Use the simple form below to tell us the area and type of problem — it takes under two minutes.",
  },
  {
    number: "02",
    title: "We call you directly",
    desc: "One of our qualified team will contact you to confirm the details and arrange a convenient time.",
  },
  {
    number: "03",
    title: "Your property is fixed",
    desc: "We carry out the work to a high standard, on time, with no hidden costs — and follow up to make sure you're satisfied.",
  },
];

export default function WelcomeModal() {
  const [visible, setVisible] = useState(false);
  const [closing, setClosing] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 700);
    return () => clearTimeout(t);
  }, []);

  const dismiss = () => {
    setClosing(true);
    setTimeout(() => setVisible(false), 340);
  };

  const goToForm = () => {
    dismiss();
    setTimeout(() => {
      const target =
        (document.getElementById("wizard") as HTMLElement | null) ??
        (document.querySelector("input, textarea") as HTMLElement | null);
      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "center" });
        setTimeout(() => (target as HTMLElement).focus?.(), 650);
      }
    }, 360);
  };

  if (!visible) return null;

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800&display=swap');

        @keyframes wm-fade-in  { from { opacity: 0 } to { opacity: 1 } }
        @keyframes wm-fade-out { from { opacity: 1 } to { opacity: 0 } }
        @keyframes wm-rise-in  {
          from { opacity: 0; transform: translateY(28px) scale(0.98); }
          to   { opacity: 1; transform: translateY(0) scale(1); }
        }
        @keyframes wm-rise-out {
          from { opacity: 1; transform: translateY(0) scale(1); }
          to   { opacity: 0; transform: translateY(16px) scale(0.98); }
        }

        .wm-backdrop { animation: ${closing ? "wm-fade-out" : "wm-fade-in"} 0.34s ease forwards; }
        .wm-card     { animation: ${closing ? "wm-rise-out" : "wm-rise-in"} 0.44s cubic-bezier(0.22,1,0.36,1) forwards; }

        .wm-primary { transition: all 0.22s ease; }
        .wm-primary:hover {
          background: linear-gradient(135deg, #a07830, #c9a040) !important;
          box-shadow: 0 12px 36px rgba(184,147,58,0.32) !important;
          transform: translateY(-1px);
        }
        .wm-close:hover   { color: ${C.inkMid} !important; }
        .wm-dismiss:hover { color: ${C.inkMid} !important; }
        .wm-tel:hover     { color: ${C.gold} !important; }
      `}</style>

      {/* Backdrop */}
      <div
        className="wm-backdrop"
        onClick={dismiss}
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 9999,
          background: "rgba(8,6,2,0.62)",
          backdropFilter: "blur(8px)",
          WebkitBackdropFilter: "blur(8px)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: 20,
          fontFamily: "'Outfit', sans-serif",
        }}
      >
        {/* Card */}
        <div
          className="wm-card"
          onClick={e => e.stopPropagation()}
          style={{
            background: C.white,
            borderRadius: 20,
            width: "100%",
            maxWidth: 500,
            maxHeight: "92vh",
            overflowY: "auto",
            boxShadow: "0 40px 100px rgba(0,0,0,0.22), 0 0 0 1px rgba(184,147,58,0.10)",
            position: "relative",
          }}
        >
          {/* Gold accent line */}
          <div style={{
            height: 3,
            background: `linear-gradient(90deg, transparent 0%, ${C.gold} 40%, ${C.goldLight} 60%, transparent 100%)`,
            flexShrink: 0,
          }} />

          {/* Close */}
          <button
            onClick={dismiss}
            aria-label="Close"
            className="wm-close"
            style={{
              position: "absolute", top: 16, right: 16,
              width: 30, height: 30,
              borderRadius: "50%", border: "none",
              background: "transparent", cursor: "pointer",
              display: "flex", alignItems: "center", justifyContent: "center",
              color: "#c0b8b0", zIndex: 2, transition: "color 0.15s", padding: 0,
            }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <line x1="18" y1="6" x2="6" y2="18"/>
              <line x1="6" y1="6" x2="18" y2="18"/>
            </svg>
          </button>

          <div style={{ padding: "28px 34px 20px" }}>

            {/* Eyebrow */}
            <div style={{ display: "inline-flex", alignItems: "center", gap: 8, marginBottom: 12 }}>
              <span style={{ display: "block", width: 20, height: 1, background: C.gold }} />
              <span style={{
                fontFamily: "'Outfit', sans-serif",
                fontSize: 10, fontWeight: 700,
                letterSpacing: "0.22em", textTransform: "uppercase",
                color: C.gold,
              }}>
                Hermeco Ltd · London
              </span>
            </div>

            {/* Heading */}
            <h2 style={{
              fontFamily: "'Outfit', sans-serif",
              fontSize: 23, fontWeight: 800,
              color: C.ink, margin: "0 0 8px",
              lineHeight: 1.15, letterSpacing: "-0.025em",
            }}>
              Getting your repair sorted is straightforward.
            </h2>

            {/* Intro */}
            <p style={{
              fontFamily: "'Outfit', sans-serif",
              fontSize: 14, fontWeight: 400,
              color: C.muted, lineHeight: 1.75,
              margin: "0 0 18px",
            }}>
              Whatever the maintenance issue — here&apos;s how we handle it.
            </p>

            {/* ── Process steps ── */}
            <div style={{
              display: "flex", flexDirection: "column", gap: 0,
              marginBottom: 20,
              border: `1px solid ${C.goldBorder}`,
              borderRadius: 12,
              overflow: "hidden",
            }}>
              {steps.map((step, i) => (
                <div
                  key={step.number}
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: 16,
                    padding: "14px 18px",
                    background: i % 2 === 0 ? C.white : C.cream,
                    borderBottom: i < steps.length - 1 ? `1px solid ${C.goldBorder}` : "none",
                  }}
                >
                  {/* Step number badge */}
                  <div style={{
                    width: 32, height: 32,
                    borderRadius: "50%",
                    background: `linear-gradient(135deg, ${C.gold}, ${C.goldLight})`,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    flexShrink: 0,
                    boxShadow: "0 2px 8px rgba(184,147,58,0.22)",
                  }}>
                    <span style={{
                      fontFamily: "'Outfit', sans-serif",
                      fontSize: 11, fontWeight: 800,
                      color: C.white, letterSpacing: "0.02em",
                    }}>
                      {step.number}
                    </span>
                  </div>

                  {/* Text */}
                  <div style={{ paddingTop: 2 }}>
                    <p style={{
                      fontFamily: "'Outfit', sans-serif",
                      fontSize: 13.5, fontWeight: 700,
                      color: C.inkMid, margin: "0 0 4px",
                      letterSpacing: "-0.01em",
                    }}>
                      {step.title}
                    </p>
                    <p style={{
                      fontFamily: "'Outfit', sans-serif",
                      fontSize: 13, fontWeight: 400,
                      color: C.muted, margin: 0,
                      lineHeight: 1.65,
                    }}>
                      {step.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* ── Trust row ── */}
            <div style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "6px 18px",
              marginBottom: 20,
              paddingBottom: 20,
              borderBottom: `1px solid rgba(0,0,0,0.06)`,
            }}>
              {[
                { icon: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z", label: "Fully qualified & insured team" },
                { icon: "M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm0 5v5l3 3", label: "Over 500 jobs completed" },
              ].map(t => (
                <div key={t.label} style={{ display: "flex", alignItems: "center", gap: 7 }}>
                  <div style={{
                    width: 20, height: 20, borderRadius: "50%",
                    background: C.goldBg, border: `1px solid ${C.goldBorder}`,
                    display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
                  }}>
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none"
                      stroke={C.gold} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <path d={t.icon} />
                    </svg>
                  </div>
                  <span style={{
                    fontFamily: "'Outfit', sans-serif",
                    fontSize: 12.5, fontWeight: 500,
                    color: C.inkMid,
                  }}>
                    {t.label}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <button
              onClick={goToForm}
              className="wm-primary"
              style={{
                width: "100%",
                padding: "15px 24px",
                borderRadius: 8, border: "none",
                background: `linear-gradient(135deg, ${C.gold}, ${C.goldLight})`,
                color: C.white,
                fontFamily: "'Outfit', sans-serif",
                fontWeight: 700, fontSize: 14,
                letterSpacing: "0.03em",
                cursor: "pointer",
                display: "flex", alignItems: "center", justifyContent: "center", gap: 9,
                boxShadow: `0 4px 20px rgba(184,147,58,0.24)`,
              }}
            >
              Get started — report a repair
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"/>
                <polyline points="12 5 19 12 12 19"/>
              </svg>
            </button>

            {/* Dismiss */}
            
          </div>

          {/* Footer */}
          <div style={{
            margin: "0 34px",
            paddingTop: 14, paddingBottom: 20,
            borderTop: `1px solid rgba(0,0,0,0.06)`,
            display: "flex", alignItems: "center",
            gap: 10, flexWrap: "wrap",
          }}>
            <span style={{ fontFamily: "'Outfit', sans-serif", fontSize: 12, color: C.mutedLight }}>
              Prefer to call?
            </span>
            <a
              href="tel:02074736366"
              className="wm-tel"
              style={{
                fontFamily: "'Outfit', sans-serif",
                fontSize: 14, fontWeight: 700,
                color: C.inkMid, textDecoration: "none",
                display: "inline-flex", alignItems: "center", gap: 7,
                letterSpacing: "-0.01em", transition: "color 0.18s",
              }}
            >
              <span style={{
                width: 28, height: 28, borderRadius: "50%",
                background: C.goldBg, border: `1px solid ${C.goldBorder}`,
                display: "inline-flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
              }}>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none"
                  stroke={C.gold} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.38 2 2 0 0 1 3.6 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.56a16 16 0 0 0 6.29 6.29l.95-.95a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
              </span>
              020 7473 6366
            </a>
            <span style={{ fontFamily: "'Outfit', sans-serif", fontSize: 11, color: "#c0b8b0" }}>
              · 24 / 7
            </span>
          </div>

        </div>
      </div>
    </>
  );
}