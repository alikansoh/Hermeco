"use client";

import { motion } from "framer-motion";
import { Phone, ArrowRight } from "lucide-react";

// ─── Tokens ───────────────────────────────────────────────────────────────────
const C = {
  gold:       "#B8933A",
  goldLight:  "#D4AA55",
  goldBorder: "rgba(184,147,58,0.18)",
  goldBg:     "rgba(184,147,58,0.07)",
  ink:        "#111009",
  inkMid:     "#2A2416",
  muted:      "#6B6150",
  mutedLight: "#9A8E7E",
  cream:      "#FAFAF7",
  white:      "#FFFFFF",
};

// ─── Data ─────────────────────────────────────────────────────────────────────
const reasons = [
  {
    n: "01",
    title: "Fast Response to Every Repair",
    body: "A leaking pipe or broken boiler can't wait. Our London maintenance team responds quickly — sending a qualified tradesperson to your property without unnecessary delay.",
    label: "Emergency repairs London",
  },
  {
    n: "02",
    title: "Expert Plumbing Across London",
    body: "Burst pipes, blocked drains, full bathroom installations — our professional plumbers cover every London borough with precision and lasting results.",
    label: "London plumber · All boroughs",
  },
  {
    n: "03",
    title: "Certified Electrical Work",
    body: "Part P-certified electricians for fault finding, consumer unit upgrades, rewires and lighting installations — safe, efficient and with minimal disruption.",
    label: "Domestic electrician London",
  },
  {
    n: "04",
    title: "Vetted Professionals, Every Visit",
    body: "Every tradesperson is background-checked and accountable. We treat your home with genuine respect — from arrival to sign-off.",
    label: "Trusted tradespeople London",
  },
  {
    n: "05",
    title: "Clear, Honest Pricing",
    body: "You receive a firm quote before any work begins. No surprise call-out fees, no inflated charges — straightforward pricing you can rely on.",
    label: "No hidden fees · Fixed pricing",
  },
  {
    n: "06",
    title: "All Trades, One Number",
    body: "Plumbing, electrics, heating, damp, plastering, decorating — we coordinate everything end-to-end, saving you time and reducing stress.",
    label: "Full property maintenance London",
  },
];

const stats = [
  { v: "24/7", l: "Emergency line"   },
  { v: "32",   l: "London boroughs"  },
  { v: "100%", l: "Fixed-price jobs" },
];

// ─── Animations ───────────────────────────────────────────────────────────────
const fadeUp = (delay = 0) => ({
  initial:     { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport:    { once: true, amount: 0.15 },
  transition:  { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] as const },
});

// ─── Reason Row ───────────────────────────────────────────────────────────────
function ReasonRow({ r, i }: { r: typeof reasons[0]; i: number }) {
  return (
    <motion.article
      {...fadeUp(i * 0.07)}
      style={{
        display: "grid",
        gridTemplateColumns: "36px 1fr",
        gap: "0 16px",
        padding: "24px 0",
        borderBottom: `1px solid ${C.goldBorder}`,
      }}
    >
      {/* Number */}
      <span style={{
        fontFamily: "'Outfit', sans-serif",
        fontSize: 11,
        fontWeight: 600,
        color: C.gold,
        letterSpacing: "0.10em",
        opacity: 0.65,
        paddingTop: 3,
      }}>
        {r.n}
      </span>

      {/* Content */}
      <div>
        <h3 style={{
          fontFamily: "'Outfit', sans-serif",
          fontSize: 16,
          fontWeight: 600,
          color: C.inkMid,
          margin: "0 0 7px",
          lineHeight: 1.3,
          letterSpacing: "-0.01em",
        }}>
          {r.title}
        </h3>

        <p style={{
          fontFamily: "'Outfit', sans-serif",
          fontSize: 14,
          fontWeight: 400,
          color: C.muted,
          lineHeight: 1.78,
          margin: "0 0 10px",
        }}>
          {r.body}
        </p>

        <span style={{
          fontFamily: "'Outfit', sans-serif",
          fontSize: 10,
          fontWeight: 600,
          letterSpacing: "0.10em",
          textTransform: "uppercase" as const,
          color: C.gold,
          background: C.goldBg,
          border: `1px solid ${C.goldBorder}`,
          borderRadius: 4,
          padding: "3px 10px",
          display: "inline-block",
        }}>
          {r.label}
        </span>
      </div>
    </motion.article>
  );
}

// ─── Main ─────────────────────────────────────────────────────────────────────
export default function WhyChooseUs() {
  return (
    <section
      id="why-choose-us"
      aria-labelledby="wcu-heading"
      itemScope
      itemType="https://schema.org/LocalBusiness"
      style={{ background: C.cream, position: "relative" }}
    >
      {/* Schema.org */}
      <meta itemProp="name"        content="London Property Maintenance — Plumbing, Electrical & All Trades" />
      <meta itemProp="description" content="Fast professional property maintenance across London. Expert plumbers and electricians serving all 32 London boroughs. 24/7 emergency line, fixed pricing, no hidden fees." />
      <meta itemProp="telephone"   content="+442074736366" />
      <meta itemProp="areaServed"  content="Greater London" />

      {/* ── Scoped styles — NO global reset ─────────────────────────────── */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800&display=swap');

        #why-choose-us,
        #why-choose-us * {
          box-sizing: border-box;
        }

        #why-choose-us .wcu-grid {
          display: grid;
          grid-template-columns: 400px 1fr;
          min-height: 100vh;
          align-items: stretch;
        }

        #why-choose-us .wcu-sticky {
          position: sticky;
          top: 0;
          height: 100vh;
          overflow: hidden;
          flex-shrink: 0;
        }

        #why-choose-us .wcu-cta-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: ${C.gold};
          color: #fff;
          font-family: 'Outfit', sans-serif;
          font-weight: 700;
          font-size: 13px;
          letter-spacing: 0.04em;
          padding: 13px 28px;
          border-radius: 6px;
          text-decoration: none;
          transition: background 0.22s, transform 0.22s, box-shadow 0.22s;
          box-shadow: 0 4px 18px rgba(184,147,58,0.22);
        }
        #why-choose-us .wcu-cta-btn:hover {
          background: ${C.goldLight};
          transform: translateY(-2px);
          box-shadow: 0 8px 28px rgba(184,147,58,0.32);
        }

        #why-choose-us .wcu-tel-link {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          font-family: 'Outfit', sans-serif;
          font-size: 17px;
          font-weight: 600;
          color: ${C.inkMid};
          text-decoration: none;
          letter-spacing: -0.01em;
          transition: color 0.2s;
        }
        #why-choose-us .wcu-tel-link:hover { color: ${C.gold}; }

        @media (max-width: 960px) {
          #why-choose-us .wcu-grid    { grid-template-columns: 1fr !important; }
          #why-choose-us .wcu-sticky  { position: relative !important; height: 50vw !important; min-height: 300px !important; max-height: 440px !important; }
          #why-choose-us .wcu-content { padding: 48px 28px 72px !important; }
        }
      `}</style>

      <div className="wcu-grid">

        {/* ── LEFT: Sticky image panel ──────────────────────────────────────── */}
        <aside className="wcu-sticky" aria-label="London property maintenance overview">

          {/* Photo */}
          <div style={{
            position: "absolute", inset: 0,
            backgroundImage: "url('/about.webp')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }} />

          {/* Dark overlay */}
          <div style={{
            position: "absolute", inset: 0,
            background: "linear-gradient(165deg, rgba(17,16,9,0.52) 0%, rgba(17,16,9,0.87) 100%)",
          }} />

          {/* Corner accents */}
          <div aria-hidden="true" style={{
            position: "absolute", top: 24, left: 24, width: 40, height: 40,
            borderTop: `1px solid ${C.goldBorder}`,
            borderLeft: `1px solid ${C.goldBorder}`,
          }} />
          <div aria-hidden="true" style={{
            position: "absolute", bottom: 24, right: 24, width: 40, height: 40,
            borderBottom: `1px solid ${C.goldBorder}`,
            borderRight: `1px solid ${C.goldBorder}`,
          }} />

          {/* Panel copy */}
          <div style={{
            position: "absolute", inset: 0,
            display: "flex", flexDirection: "column",
            justifyContent: "flex-end",
            padding: "48px 44px",
            zIndex: 2,
          }}>
            {/* Eyebrow */}
            <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 16 }}>
              <div style={{ width: 20, height: 1, background: C.gold, flexShrink: 0 }} />
              <span style={{
                fontFamily: "'Outfit', sans-serif",
                fontSize: 10, fontWeight: 700,
                letterSpacing: "0.22em", textTransform: "uppercase",
                color: C.gold,
              }}>
                Why Choose Us
              </span>
            </div>

            {/* Heading */}
            <h2
              id="wcu-heading"
              style={{
                fontFamily: "'Outfit', sans-serif",
                fontSize: "clamp(28px, 3.2vw, 44px)",
                fontWeight: 800,
                color: C.white,
                lineHeight: 1.1,
                letterSpacing: "-0.03em",
                margin: "0 0 14px",
              }}
            >
              London property<br />
              maintenance{" "}
              <span style={{ color: C.goldLight, fontWeight: 700 }}>done right.</span>
            </h2>

            <p style={{
              fontFamily: "'Outfit', sans-serif",
              fontSize: 14, fontWeight: 300,
              color: "rgba(255,255,255,0.50)",
              lineHeight: 1.75,
              margin: "0 0 36px",
              maxWidth: 310,
            }}>
              Plumbing, electrics and full home repairs — professional tradespeople across all London boroughs.
            </p>

            {/* Stats */}
            <div style={{ display: "flex" }}>
              {stats.map((s, i) => (
                <div key={s.l} style={{
                  paddingRight: i < stats.length - 1 ? 22 : 0,
                  marginRight:  i < stats.length - 1 ? 22 : 0,
                  borderRight:  i < stats.length - 1 ? "1px solid rgba(184,147,58,0.22)" : "none",
                }}>
                  <div style={{
                    fontFamily: "'Outfit', sans-serif",
                    fontSize: 24, fontWeight: 800,
                    color: C.goldLight, letterSpacing: "-0.03em",
                    lineHeight: 1, marginBottom: 4,
                  }}>{s.v}</div>
                  <div style={{
                    fontFamily: "'Outfit', sans-serif",
                    fontSize: 9, fontWeight: 600,
                    color: "rgba(255,255,255,0.36)",
                    textTransform: "uppercase", letterSpacing: "0.14em",
                  }}>{s.l}</div>
                </div>
              ))}
            </div>
          </div>
        </aside>

        {/* ── RIGHT: Content panel ──────────────────────────────────────────── */}
        <main
          className="wcu-content"
          style={{ padding: "72px 60px 84px 68px", background: C.cream }}
        >
          {/* Intro */}
          <motion.div {...fadeUp(0)} style={{ marginBottom: 44 }}>
            <p style={{
              fontFamily: "'Outfit', sans-serif",
              fontSize: 11, fontWeight: 700,
              letterSpacing: "0.20em", textTransform: "uppercase",
              color: C.gold, marginBottom: 14,
              display: "flex", alignItems: "center", gap: 8,
            }}>
              <span style={{ width: 16, height: 1, background: C.gold, display: "inline-block", flexShrink: 0 }} />
              Property Maintenance Specialists · Greater London
            </p>

            <p style={{
              fontFamily: "'Outfit', sans-serif",
              fontSize: 18, fontWeight: 400,
              color: C.inkMid,
              lineHeight: 1.72,
              maxWidth: 560,
              borderLeft: `3px solid ${C.gold}`,
              paddingLeft: 20,
              margin: 0,
            }}>
              We help{" "}
              <strong style={{ fontWeight: 700, color: C.ink }}>
                homeowners, tenants and leaseholders
              </strong>{" "}
              across all 32 London boroughs get repairs done fast, cleanly and without hassle — every trade under one roof.
            </p>
          </motion.div>

          {/* Top divider */}
          <div style={{ height: 1, background: `linear-gradient(to right, ${C.goldBorder}, transparent)` }} />

          {/* Reason rows */}
          <div>
            {reasons.map((r, i) => <ReasonRow key={r.n} r={r} i={i} />)}
          </div>

          {/* Bottom divider */}
          <div style={{
            height: 1,
            background: `linear-gradient(to right, ${C.goldBorder}, transparent)`,
            margin: "0 0 44px",
          }} />

          {/* CTA */}
          <motion.div {...fadeUp(0.15)}>
            <p style={{
              fontFamily: "'Outfit', sans-serif",
              fontSize: 13, fontWeight: 500,
              color: C.mutedLight,
              margin: "0 0 18px",
            }}>
              Ready to get started? Book a repair or call us directly.
            </p>

            <div style={{ display: "flex", alignItems: "center", gap: 18, flexWrap: "wrap" }}>
              <a
                href="#wizard"
                aria-label="Request a property repair across London"
                className="wcu-cta-btn"
              >
                Request a repair
                <ArrowRight size={14} strokeWidth={2.5} aria-hidden />
              </a>

              <a
                href="tel:02074736366"
                aria-label="Call our London property maintenance team on 020 7473 6366"
                className="wcu-tel-link"
              >
                <span style={{
                  width: 38, height: 38, borderRadius: "50%",
                  background: C.goldBg,
                  border: `1px solid ${C.goldBorder}`,
                  display: "inline-flex", alignItems: "center", justifyContent: "center",
                  flexShrink: 0,
                }}>
                  <Phone size={14} color={C.gold} strokeWidth={2} aria-hidden />
                </span>
                020 7473 6366
              </a>
            </div>

            {/* Trust signals */}
            <div style={{
              marginTop: 22,
              display: "flex", flexWrap: "wrap", gap: "8px 20px",
            }}>
              {[
                "All 32 London boroughs",
                "24/7 emergency line",
                "No hidden fees",
                "Plumbing & electrics",
                "Same-day response",
              ].map(t => (
                <span key={t} style={{
                  fontFamily: "'Outfit', sans-serif",
                  fontSize: 11, fontWeight: 500,
                  color: C.mutedLight,
                  display: "inline-flex", alignItems: "center", gap: 5,
                }}>
                  <span style={{
                    width: 4, height: 4, borderRadius: "50%",
                    background: C.gold, display: "inline-block", flexShrink: 0,
                  }} />
                  {t}
                </span>
              ))}
            </div>
          </motion.div>
        </main>

      </div>
    </section>
  );
}