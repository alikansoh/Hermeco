"use client";

import { useEffect, useState } from "react";

const C = {
  gold:       "#B8933A",
  goldLight:  "#D4AA55",
  goldBorder: "rgba(184,147,58,0.18)",
  goldBg:     "rgba(184,147,58,0.06)",
  ink:        "#111009",
  inkMid:     "#2A2416",
  muted:      "#6B6150",
  mutedLight: "#9A8E7E",
  white:      "#FFFFFF",
  cream:      "#FAFAF7",
};

const steps = [
  { n: "1", text: "Describe your issue using the simple form below" },
  { n: "2", text: "We call you directly to confirm and arrange a visit" },
  { n: "3", text: "Our team arrives and gets the job done properly" },
];

export default function WelcomeModal() {
  const [visible, setVisible] = useState(false);
  const [closing, setClosing] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 1200);
    return () => clearTimeout(t);
  }, []);

  const dismiss = () => {
    setClosing(true);
    setTimeout(() => setVisible(false), 300);
  };

  const goToForm = () => {
    dismiss();
    setTimeout(() => {
      const target =
        (document.getElementById("wizard") as HTMLElement | null) ??
        (document.querySelector("input, textarea") as HTMLElement | null);
      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "center" });
        setTimeout(() => (target as HTMLElement).focus?.(), 600);
      }
    }, 340);
  };

  if (!visible) return null;

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700;800&display=swap');

        @keyframes wm-in  {
          from { opacity: 0; transform: translateY(24px) scale(0.97); }
          to   { opacity: 1; transform: translateY(0) scale(1); }
        }
        @keyframes wm-out {
          from { opacity: 1; transform: translateY(0) scale(1); }
          to   { opacity: 0; transform: translateY(12px) scale(0.97); }
        }
        @keyframes wm-bg-in  { from { opacity: 0 } to { opacity: 1 } }
        @keyframes wm-bg-out { from { opacity: 1 } to { opacity: 0 } }

        .wm-bg   { animation: ${closing ? "wm-bg-out" : "wm-bg-in"} 0.3s ease forwards; }
        .wm-card { animation: ${closing ? "wm-out" : "wm-in"} 0.38s cubic-bezier(0.22,1,0.36,1) forwards; }

        .wm-btn {
          transition: opacity 0.18s, transform 0.18s;
        }
        .wm-btn:hover { opacity: 0.88; transform: translateY(-1px); }
        .wm-link:hover { color: ${C.inkMid} !important; }
        .wm-tel:hover  { color: ${C.gold} !important; }
      `}</style>

      {/* Backdrop */}
      <div
        className="wm-bg"
        onClick={dismiss}
        style={{
          position: "fixed", inset: 0, zIndex: 9999,
          background: "rgba(6,4,1,0.55)",
          backdropFilter: "blur(6px)",
          WebkitBackdropFilter: "blur(6px)",
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "center",
          padding: "0 0 0 0",
          fontFamily: "'Outfit', sans-serif",
        }}
        // On desktop: center it
        ref={el => {
          if (!el) return;
          const onResize = () => {
            el.style.alignItems = window.innerWidth >= 640 ? "center" : "flex-end";
            el.style.padding = window.innerWidth >= 640 ? "20px" : "0";
          };
          onResize();
          window.addEventListener("resize", onResize);
        }}
      >
        {/* Card */}
        <div
          className="wm-card"
          onClick={e => e.stopPropagation()}
          style={{
            background: C.white,
            width: "100%",
            maxWidth: 460,
            // Mobile: sheet from bottom; Desktop: rounded card
            borderRadius: "20px 20px 0 0",
            boxShadow: "0 -8px 40px rgba(0,0,0,0.18), 0 0 0 1px rgba(184,147,58,0.08)",
            overflow: "hidden",
            position: "relative",
          }}
          ref={el => {
            if (!el) return;
            const onResize = () => {
              el.style.borderRadius = window.innerWidth >= 640 ? "20px" : "20px 20px 0 0";
              el.style.boxShadow = window.innerWidth >= 640
                ? "0 32px 80px rgba(0,0,0,0.20), 0 0 0 1px rgba(184,147,58,0.08)"
                : "0 -8px 40px rgba(0,0,0,0.18), 0 0 0 1px rgba(184,147,58,0.08)";
            };
            onResize();
            window.addEventListener("resize", onResize);
          }}
        >
          {/* Gold line */}
          <div style={{
            height: 3,
            background: `linear-gradient(90deg, transparent, ${C.gold}, ${C.goldLight}, transparent)`,
          }} />

          {/* Mobile drag handle */}
          <div style={{
            width: 36, height: 4, borderRadius: 2,
            background: "#e2ddd8",
            margin: "12px auto 0",
          }} />

          {/* Close */}
          <button
            onClick={dismiss}
            aria-label="Close"
            style={{
              position: "absolute", top: 14, right: 16,
              width: 28, height: 28,
              border: "none", background: "transparent",
              cursor: "pointer", borderRadius: "50%",
              display: "flex", alignItems: "center", justifyContent: "center",
              color: "#bbb", transition: "color 0.15s", padding: 0, zIndex: 2,
            }}
            onMouseEnter={e => ((e.currentTarget as HTMLButtonElement).style.color = C.inkMid)}
            onMouseLeave={e => ((e.currentTarget as HTMLButtonElement).style.color = "#bbb")}
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <line x1="18" y1="6" x2="6" y2="18"/>
              <line x1="6" y1="6" x2="18" y2="18"/>
            </svg>
          </button>

          {/* Content */}
          <div style={{ padding: "16px 28px 20px" }}>

            {/* Eyebrow */}
            <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 10 }}>
              <span style={{ width: 16, height: 1, background: C.gold, display: "block" }} />
              <span style={{
                fontFamily: "'Outfit', sans-serif",
                fontSize: 9.5, fontWeight: 700,
                letterSpacing: "0.22em", textTransform: "uppercase", color: C.gold,
              }}>
                Hermeco Ltd · London
              </span>
            </div>

            {/* Heading */}
            <h2 style={{
              fontFamily: "'Outfit', sans-serif",
              fontSize: 22, fontWeight: 800,
              color: C.ink, margin: "0 0 6px",
              lineHeight: 1.18, letterSpacing: "-0.022em",
            }}>
              Need a property repair?
            </h2>

            <p style={{
              fontFamily: "'Outfit', sans-serif",
              fontSize: 13.5, color: C.muted,
              lineHeight: 1.7, margin: "0 0 18px", fontWeight: 400,
            }}>
              Here&apos;s how it works — takes under 2 minutes.
            </p>

            {/* Steps — horizontal on mobile, clean and fast to read */}
            <div style={{
              display: "flex",
              flexDirection: "column",
              gap: 0,
              borderRadius: 10,
              border: `1px solid ${C.goldBorder}`,
              overflow: "hidden",
              marginBottom: 18,
            }}>
              {steps.map((s, i) => (
                <div key={s.n} style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 14,
                  padding: "13px 16px",
                  background: i % 2 === 0 ? C.white : C.cream,
                  borderBottom: i < steps.length - 1 ? `1px solid ${C.goldBorder}` : "none",
                }}>
                  <div style={{
                    width: 26, height: 26, borderRadius: "50%",
                    background: `linear-gradient(135deg, ${C.gold}, ${C.goldLight})`,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    flexShrink: 0,
                    boxShadow: "0 2px 6px rgba(184,147,58,0.20)",
                  }}>
                    <span style={{
                      fontFamily: "'Outfit', sans-serif",
                      fontSize: 10, fontWeight: 800, color: C.white,
                    }}>{s.n}</span>
                  </div>
                  <span style={{
                    fontFamily: "'Outfit', sans-serif",
                    fontSize: 13, fontWeight: 500,
                    color: C.inkMid, lineHeight: 1.5,
                  }}>
                    {s.text}
                  </span>
                </div>
              ))}
            </div>

            {/* Two trust signals inline */}
            <div style={{
              display: "flex", gap: 16, marginBottom: 20,
              paddingBottom: 18,
              borderBottom: `1px solid rgba(0,0,0,0.06)`,
              flexWrap: "wrap",
            }}>
              {[
                "Fully qualified & insured engineers",
                "Over 500 completed jobs across London",
              ].map(t => (
                <div key={t} style={{ display: "flex", alignItems: "center", gap: 6 }}>
                  <div style={{
                    width: 18, height: 18, borderRadius: "50%",
                    background: C.goldBg, border: `1px solid ${C.goldBorder}`,
                    display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
                  }}>
                    <svg width="9" height="9" viewBox="0 0 24 24" fill="none"
                      stroke={C.gold} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                  </div>
                  <span style={{
                    fontFamily: "'Outfit', sans-serif",
                    fontSize: 12, fontWeight: 500, color: C.inkMid,
                  }}>
                    {t}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <button
              onClick={goToForm}
              className="wm-btn"
              style={{
                width: "100%", padding: "14px",
                borderRadius: 8, border: "none",
                background: `linear-gradient(135deg, ${C.gold}, ${C.goldLight})`,
                color: C.white,
                fontFamily: "'Outfit', sans-serif",
                fontWeight: 700, fontSize: 14,
                letterSpacing: "0.025em",
                cursor: "pointer",
                display: "flex", alignItems: "center", justifyContent: "center", gap: 8,
                boxShadow: "0 4px 18px rgba(184,147,58,0.24)",
              }}
            >
              Get started
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"/>
                <polyline points="12 5 19 12 12 19"/>
              </svg>
            </button>

            {/* Footer row */}
            <div style={{
              display: "flex", alignItems: "center",
              justifyContent: "space-between",
              marginTop: 12, flexWrap: "wrap", gap: 8,
            }}>
              <button
                onClick={dismiss}
                className="wm-link"
                style={{
                  border: "none", background: "transparent",
                  fontFamily: "'Outfit', sans-serif",
                  fontSize: 12.5, fontWeight: 400,
                  color: C.mutedLight, cursor: "pointer",
                  padding: 0, transition: "color 0.18s",
                }}
              >
                I&apos;ll look around first
              </button>

              <a
                href="tel:02074736366"
                className="wm-tel"
                style={{
                  fontFamily: "'Outfit', sans-serif",
                  fontSize: 13, fontWeight: 700,
                  color: C.inkMid, textDecoration: "none",
                  display: "inline-flex", alignItems: "center", gap: 6,
                  transition: "color 0.18s",
                }}
              >
                <span style={{
                  width: 24, height: 24, borderRadius: "50%",
                  background: C.goldBg, border: `1px solid ${C.goldBorder}`,
                  display: "inline-flex", alignItems: "center", justifyContent: "center",
                }}>
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none"
                    stroke={C.gold} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.38 2 2 0 0 1 3.6 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.56a16 16 0 0 0 6.29 6.29l.95-.95a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
                  </svg>
                </span>
                020 7473 6366
              </a>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}