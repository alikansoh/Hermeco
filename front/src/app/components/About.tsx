"use client";

import React, { useState } from "react";

// ─── Design tokens ────────────────────────────────────────────────────────────
const GOLD        = "#B8933A";
const GOLD_LIGHT  = "#D4AA55";
const GOLD_DARK   = "#96781e";
const GOLD_BG     = "rgba(184,147,58,0.07)";
const GOLD_BORDER = "rgba(184,147,58,0.18)";
const CREAM       = "#FAFAF7";
const CREAM_DEEP  = "#f2ede2";
const INK         = "#111009";
const INK_MID     = "#2A2416";
const MUTED       = "#6B6150";
const MUTED_LIGHT = "#9A8E7E";

// ─── Types ────────────────────────────────────────────────────────────────────
interface Step {
  number: string;
  title: string;
  body: string;
  badge: string;
  icon: React.ReactNode;
}

interface BadgeItem {
  label: string;
  icon: React.ReactNode;
}

// ─── Icons ────────────────────────────────────────────────────────────────────
const IconClipboard: React.FC = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/>
    <rect x="8" y="2" width="8" height="4" rx="1" ry="1"/>
    <line x1="9" y1="12" x2="15" y2="12"/>
    <line x1="9" y1="16" x2="13" y2="16"/>
  </svg>
);

const IconPhone: React.FC = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.38 2 2 0 0 1 3.6 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.56a16 16 0 0 0 6.29 6.29l.95-.95a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
  </svg>
);

const IconWrench: React.FC = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
  </svg>
);

const IconShield: React.FC = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
  </svg>
);

const IconClock: React.FC = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/>
    <polyline points="12 6 12 12 16 14"/>
  </svg>
);

const IconFire: React.FC = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"/>
  </svg>
);

const IconDrop: React.FC = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z"/>
  </svg>
);

const IconBolt: React.FC = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
  </svg>
);

const IconPin: React.FC = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
    <circle cx="12" cy="10" r="3"/>
  </svg>
);

const IconStar: React.FC = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
  </svg>
);

// ─── Data ─────────────────────────────────────────────────────────────────────
const steps: Step[] = [
  {
    number: "01",
    title: "Describe your repair",
    body: "Use our guided online form to tell us exactly what needs fixing — boiler fault, plumbing leak, electrical issue, damp, or structural damage. Takes under two minutes, day or night.",
    badge: "Online · 24/7",
    icon: <IconClipboard />,
  },
  {
    number: "02",
    title: "We call you within 24 hrs",
    body: "A qualified member of our London maintenance team will call you back to confirm the details and schedule a visit at a time that suits you. No automated systems — real people, every time.",
    badge: "Response within 24 hrs",
    icon: <IconPhone />,
  },
  {
    number: "03",
    title: "Your property is repaired",
    body: "Our Gas Safe, NICEIC-registered engineers carry out the repair to the highest standard — from emergency call-outs across Greater London to planned maintenance works. Followed up until resolved.",
    badge: "Qualified & insured",
    icon: <IconWrench />,
  },
];

const badgeItems: BadgeItem[] = [
  { label: "Emergency repairs London",  icon: <IconBolt /> },
  { label: "Gas Safe registered",       icon: <IconFire /> },
  { label: "Plumbing & heating",        icon: <IconDrop /> },
  { label: "Electrical & damp",         icon: <IconBolt /> },
  { label: "All London boroughs",       icon: <IconPin /> },
  { label: "Fully insured engineers",   icon: <IconShield /> },
  { label: "24/7 emergency line",       icon: <IconClock /> },
  { label: "Top-rated London service",  icon: <IconStar /> },
];

// ─── Step Card ────────────────────────────────────────────────────────────────
interface StepCardProps {
  step: Step;
  index: number;
  total: number;
}

const StepCard: React.FC<StepCardProps> = ({ step, index, total }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <article
      aria-label={`Step ${step.number}: ${step.title}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: "white",
        borderRadius: "20px",
        padding: "40px 32px 36px",
        border: `1px solid ${hovered ? GOLD_BORDER : "rgba(0,0,0,0.06)"}`,
        boxShadow: hovered
          ? "0 24px 56px rgba(184,147,58,0.12), 0 4px 16px rgba(0,0,0,0.06)"
          : "0 2px 12px rgba(0,0,0,0.05)",
        transform: hovered ? "translateY(-8px)" : "translateY(0)",
        transition: "transform 0.3s cubic-bezier(0.4,0,0.2,1), box-shadow 0.3s ease, border-color 0.3s ease",
        position: "relative",
        display: "flex",
        flexDirection: "column",
        gap: "20px",
        height: "100%",
      }}
    >
      {/* Top row: icon + step number */}
      <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between" }}>
        <div style={{
          width: "60px",
          height: "60px",
          borderRadius: "16px",
          background: hovered
            ? `linear-gradient(135deg, ${GOLD}, ${GOLD_LIGHT})`
            : `linear-gradient(135deg, ${GOLD_BG}, rgba(184,147,58,0.14))`,
          border: `1.5px solid ${GOLD_BORDER}`,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: hovered ? "white" : GOLD_DARK,
          transition: "background 0.3s ease, color 0.3s ease",
          flexShrink: 0,
        }}>
          {step.icon}
        </div>

        <span style={{
          fontFamily: "'Outfit', sans-serif",
          fontSize: "11px",
          fontWeight: 800,
          letterSpacing: "0.12em",
          color: hovered ? GOLD_DARK : "#b0a898",
          transition: "color 0.3s ease",
          paddingTop: "4px",
        }}>
          {step.number}
        </span>
      </div>

      {/* Title */}
      <h3 style={{
        fontFamily: "'Outfit', sans-serif",
        fontSize: "22px",
        fontWeight: 700,
        color: INK,
        margin: 0,
        lineHeight: 1.2,
        letterSpacing: "-0.02em",
      }}>
        {step.title}
      </h3>

      {/* Body */}
      <p style={{
        fontFamily: "'Outfit', sans-serif",
        fontSize: "14.5px",
        fontWeight: 400,
        color: MUTED,
        lineHeight: 1.75,
        margin: 0,
        flexGrow: 1,
      }}>
        {step.body}
      </p>

      {/* Badge */}
      <div>
        <span style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "7px",
          fontFamily: "'Outfit', sans-serif",
          fontSize: "10px",
          fontWeight: 700,
          color: GOLD_DARK,
          background: GOLD_BG,
          border: `1px solid ${GOLD_BORDER}`,
          borderRadius: "100px",
          padding: "5px 13px",
          letterSpacing: "0.10em",
          textTransform: "uppercase",
        }}>
          <span style={{
            width: "5px",
            height: "5px",
            borderRadius: "50%",
            background: GOLD,
            display: "inline-block",
          }} aria-hidden="true" />
          {step.badge}
        </span>
      </div>

      {/* Arrow connector — desktop only */}
      {index < total - 1 && (
        <div
          aria-hidden="true"
          className="hiw-arrow"
          style={{
            position: "absolute",
            top: "56px",
            right: "-19px",
            width: "38px",
            height: "38px",
            borderRadius: "50%",
            background: "white",
            border: `1.5px solid ${GOLD_BORDER}`,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 2,
            boxShadow: "0 2px 8px rgba(0,0,0,0.07)",
          }}
        >
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none"
            stroke={GOLD} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </div>
      )}
    </article>
  );
};

// ─── CTA Button ───────────────────────────────────────────────────────────────
const CtaButton: React.FC = () => {
  const [hovered, setHovered] = useState(false);

  return (
    <a
      href="#wizard"
      aria-label="Report a property maintenance issue online"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "10px",
        background: hovered
          ? `linear-gradient(135deg, ${GOLD_DARK}, ${GOLD})`
          : `linear-gradient(135deg, ${GOLD}, ${GOLD_LIGHT})`,
        color: "white",
        fontFamily: "'Outfit', sans-serif",
        fontWeight: 700,
        fontSize: "13px",
        padding: "13px 28px",
        borderRadius: "6px",
        textDecoration: "none",
        letterSpacing: "0.04em",
        boxShadow: hovered
          ? "0 16px 48px rgba(184,147,58,0.4)"
          : "0 4px 18px rgba(184,147,58,0.22)",
        transform: hovered ? "translateY(-2px)" : "translateY(0)",
        transition: "all 0.25s cubic-bezier(0.4,0,0.2,1)",
      }}
    >
      Report a repair online
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
        stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
        aria-hidden="true">
        <line x1="5" y1="12" x2="19" y2="12"/>
        <polyline points="12 5 19 12 12 19"/>
      </svg>
    </a>
  );
};

// ─── Main Export ──────────────────────────────────────────────────────────────
export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      aria-labelledby="hiw-heading"
      style={{
        background: `linear-gradient(170deg, ${CREAM} 0%, ${CREAM_DEEP} 100%)`,
        fontFamily: "'Outfit', sans-serif",
        padding: "100px 24px 112px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800&display=swap');
        *, *::before, *::after { box-sizing: border-box; }

        @media (max-width: 860px) {
          .hiw-grid  { grid-template-columns: 1fr !important; max-width: 480px !important; }
          .hiw-arrow { display: none !important; }
          .hiw-divider-line { display: none !important; }
        }
      `}</style>

      {/* Background glows */}
      <div aria-hidden="true" style={{
        position: "absolute", inset: 0, pointerEvents: "none", overflow: "hidden",
      }}>
        <div style={{
          position: "absolute", top: "-160px", right: "-160px",
          width: "600px", height: "600px", borderRadius: "50%",
          background: "radial-gradient(circle, rgba(184,147,58,0.07) 0%, transparent 65%)",
        }} />
        <div style={{
          position: "absolute", bottom: "-100px", left: "-100px",
          width: "400px", height: "400px", borderRadius: "50%",
          background: "radial-gradient(circle, rgba(184,147,58,0.05) 0%, transparent 65%)",
        }} />
        <div style={{
          position: "absolute", top: 0, left: "50%",
          transform: "translateX(-50%)",
          width: "1px", height: "60px",
          background: `linear-gradient(to bottom, transparent, ${GOLD_BORDER})`,
        }} />
      </div>

      <div style={{ maxWidth: "1040px", margin: "0 auto", position: "relative" }}>

        {/* Header */}
        <header style={{ textAlign: "center", marginBottom: "72px" }}>
          <div style={{
            display: "inline-flex", alignItems: "center", gap: "8px",
            marginBottom: "24px",
          }}>
            <span style={{ display: "block", width: "28px", height: "1px", background: GOLD }} />
            <span style={{
              fontFamily: "'Outfit', sans-serif",
              fontSize: "10px",
              fontWeight: 700,
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: GOLD_DARK,
            }}>
              London Property Maintenance
            </span>
            <span style={{ display: "block", width: "28px", height: "1px", background: GOLD }} />
          </div>

          <h2
            id="hiw-heading"
            style={{
              fontFamily: "'Outfit', sans-serif",
              fontSize: "clamp(34px, 5.5vw, 58px)",
              fontWeight: 800,
              color: INK,
              margin: "0 0 20px",
              lineHeight: 1.08,
              letterSpacing: "-0.03em",
            }}
          >
            How our repair service works
          </h2>

          <p style={{
            fontFamily: "'Outfit', sans-serif",
            fontSize: "17px",
            fontWeight: 400,
            color: MUTED,
            maxWidth: "560px",
            margin: "0 auto",
            lineHeight: 1.75,
          }}>
            Trusted by{" "}
            <strong style={{ color: INK_MID, fontWeight: 700 }}>
              London homeowners, tenants and leaseholders
            </strong>{" "}
            — we make property repairs simple, fast and stress-free across every London borough.
          </p>
        </header>

        {/* Steps grid */}
        <div
          className="hiw-grid"
          role="list"
          aria-label="Steps to request a property repair in London"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "28px",
            maxWidth: "980px",
            margin: "0 auto 64px",
          }}
        >
          {steps.map((step, i) => (
            <div key={step.number} role="listitem">
              <StepCard step={step} index={i} total={steps.length} />
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="hiw-divider-line" style={{
          width: "100%",
          maxWidth: "680px",
          margin: "0 auto 48px",
          height: "1px",
          background: `linear-gradient(to right, transparent, ${GOLD_BORDER}, transparent)`,
        }} />

        {/* Keyword badges */}
        <div
          aria-label="Our London property maintenance services"
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "10px",
            justifyContent: "center",
            marginBottom: "64px",
          }}
        >
          {badgeItems.map((b) => (
            <span
              key={b.label}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "7px",
                fontFamily: "'Outfit', sans-serif",
                fontSize: "12px",
                fontWeight: 500,
                color: INK_MID,
                background: "white",
                border: "1px solid rgba(0,0,0,0.08)",
                borderRadius: "100px",
                padding: "8px 16px",
                boxShadow: "0 1px 4px rgba(0,0,0,0.04)",
              }}
            >
              <span style={{ color: GOLD_DARK }} aria-hidden="true">{b.icon}</span>
              {b.label}
            </span>
          ))}
        </div>

        {/* CTA */}
        <div style={{
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "16px",
        }}>
          <CtaButton />

          <p style={{
            fontFamily: "'Outfit', sans-serif",
            fontSize: "13px",
            fontWeight: 400,
            color: MUTED_LIGHT,
            margin: 0,
            letterSpacing: "0.01em",
          }}>
            For all London residents &nbsp;·&nbsp; Emergency line available 24/7 &nbsp;·&nbsp;{" "}
            <a
              href="tel:02074736366"
              style={{
                fontFamily: "'Outfit', sans-serif",
                color: GOLD_DARK,
                textDecoration: "none",
                fontWeight: 600,
              }}
              aria-label="Call our London emergency maintenance line"
            >
              020 7473 6366
            </a>
          </p>
        </div>

      </div>
    </section>
  );
}