"use client";

import { motion } from "framer-motion";
import { useState } from "react";

// ─── Tokens (matches site palette) ───────────────────────────────────────────
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
  creamDeep:  "#f2ede2",
  white:      "#FFFFFF",
};

// ─── Data ─────────────────────────────────────────────────────────────────────
const reviews = [
  {
    id: 1,
    name: "Aaron Jibromah",
    time: "2 weeks ago",
    body: "Thanks guys! 10/10 service, quick communication, very reasonably priced, just a great experience overall. Would definitely recommend and will be using their services again!",
    rating: 5,
    initials: "AJ",
  },
  {
    id: 2,
    name: "Massa Hamade",
    time: "3 months ago",
    body: "I worked with them and it was a great experience. The work was neat and clean, they paid attention to every detail, and everything was delivered on time. The team is respectful, listens well, and gives helpful advice. I'd recommend them to anyone looking for quality and reliability.",
    rating: 5,
    initials: "MH",
  },
  {
    id: 3,
    name: "Othman Qeam",
    time: "3 months ago",
    body: "I had an excellent experience with Hermeco ltd. The team is professional, friendly, and truly dedicated to providing high-quality service. Everything was delivered on time, with great attention to detail. Highly recommended for anyone looking for reliability and top-notch service!",
    rating: 5,
    initials: "OQ",
  },
  {
    id: 4,
    name: "Susie Chan",
    time: "a month ago",
    body: "We are really glad to have found Hermeco ltd to do our fencing in the garden. Jobs completed to the highest satisfaction. Mohamed is very reliable and honest person. Highly recommended.",
    rating: 5,
    initials: "SC",
  },
  {
    id: 5,
    name: "Ali Kanso",
    time: "3 months ago",
    body: "Highly professional and reliable — Hermeco remodeled my kitchen with excellent quality and finished on time. Highly recommend.",
    rating: 5,
    initials: "AK",
  },
  {
    id: 6,
    name: "Hassanein Jawhari",
    time: "3 months ago",
    body: "I'm grateful for this excellent work. They fixed my boiler and the heating system, and they're working perfectly now. They also fixed the bathroom tiles, and they look fantastic. They painted my living room. Thank you for the great service.",
    rating: 5,
    initials: "HJ",
  },
  {
    id: 7,
    name: "Mostafa Alkyam",
    time: "3 months ago",
    body: "I thank the team for doing an excellent job — the bathroom is wonderful, the paint is excellent, and the renovation is more than wonderful.",
    rating: 5,
    initials: "MA",
  },
];

// ─── Star row ─────────────────────────────────────────────────────────────────
function Stars({ count = 5 }: { count?: number }) {
  return (
    <div style={{ display: "flex", gap: 3 }}>
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} width="13" height="13" viewBox="0 0 24 24"
          fill={C.gold} stroke="none">
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
        </svg>
      ))}
    </div>
  );
}

// ─── Avatar ───────────────────────────────────────────────────────────────────
function Avatar({ initials }: { initials: string }) {
  return (
    <div style={{
      width: 44,
      height: 44,
      borderRadius: "50%",
      background: `linear-gradient(135deg, ${C.gold}, ${C.goldLight})`,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexShrink: 0,
      boxShadow: `0 2px 8px rgba(184,147,58,0.25)`,
    }}>
      <span style={{
        fontFamily: "'Outfit', sans-serif",
        fontSize: 14,
        fontWeight: 700,
        color: C.white,
        letterSpacing: "0.02em",
      }}>
        {initials}
      </span>
    </div>
  );
}

// ─── Card ─────────────────────────────────────────────────────────────────────
function ReviewCard({ review, delay }: { review: typeof reviews[0]; delay: number }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: C.white,
        borderRadius: 20,
        padding: "28px 28px 24px",
        border: `1px solid ${hovered ? C.goldBorder : "rgba(0,0,0,0.06)"}`,
        boxShadow: hovered
          ? "0 20px 48px rgba(184,147,58,0.10), 0 4px 16px rgba(0,0,0,0.05)"
          : "0 2px 12px rgba(0,0,0,0.04)",
        transform: hovered ? "translateY(-6px)" : "translateY(0)",
        transition: "transform 0.3s cubic-bezier(0.4,0,0.2,1), box-shadow 0.3s ease, border-color 0.3s ease",
        display: "flex",
        flexDirection: "column",
        gap: 16,
        breakInside: "avoid",
      }}
    >
      {/* Stars */}
      <Stars count={review.rating} />

      {/* Quote mark */}
      <div style={{
        fontFamily: "Georgia, serif",
        fontSize: 48,
        lineHeight: 0.6,
        color: C.goldBorder,
        userSelect: "none",
        marginBottom: 4,
      }} aria-hidden>
        
      </div>

      {/* Body */}
      <p style={{
        fontFamily: "'Outfit', sans-serif",
        fontSize: 14.5,
        fontWeight: 400,
        color: C.muted,
        lineHeight: 1.78,
        margin: 0,
        flexGrow: 1,
      }}>
        {review.body}
      </p>

      {/* Divider */}
      <div style={{
        height: 1,
        background: `linear-gradient(to right, ${C.goldBorder}, transparent)`,
      }} />

      {/* Reviewer */}
      <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
        <Avatar initials={review.initials} />
        <div>
          <p style={{
            fontFamily: "'Outfit', sans-serif",
            fontSize: 14,
            fontWeight: 700,
            color: C.inkMid,
            margin: "0 0 2px",
            letterSpacing: "-0.01em",
          }}>
            {review.name}
          </p>
          <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
            {/* Google G icon */}
            <svg width="11" height="11" viewBox="0 0 24 24" fill="none">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
            </svg>
            <span style={{
              fontFamily: "'Outfit', sans-serif",
              fontSize: 11,
              fontWeight: 500,
              color: C.mutedLight,
            }}>
              Google · {review.time}
            </span>
          </div>
        </div>

        {/* Heart like */}
        <div style={{
          marginLeft: "auto",
          display: "flex",
          alignItems: "center",
          gap: 4,
        }}>
          <svg width="13" height="13" viewBox="0 0 24 24" fill={C.gold} stroke="none">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
          </svg>
          <span style={{
            fontFamily: "'Outfit', sans-serif",
            fontSize: 11,
            fontWeight: 600,
            color: C.gold,
          }}>1</span>
        </div>
      </div>
    </motion.article>
  );
}

// ─── Main ─────────────────────────────────────────────────────────────────────
export default function Testimonials() {
  // Split into 3 columns for masonry feel
  const col1 = reviews.filter((_, i) => i % 3 === 0);
  const col2 = reviews.filter((_, i) => i % 3 === 1);
  const col3 = reviews.filter((_, i) => i % 3 === 2);

  return (
    <section
      id="testimonials"
      aria-labelledby="testimonials-heading"
      style={{
        background: `linear-gradient(170deg, ${C.creamDeep} 0%, ${C.cream} 100%)`,
        padding: "100px 24px 112px",
        position: "relative",
        overflow: "hidden",
        fontFamily: "'Outfit', sans-serif",
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800&display=swap');
        *, *::before, *::after { box-sizing: border-box; }

        .testimonials-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
          align-items: start;
        }

        @media (max-width: 960px) {
          .testimonials-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 600px) {
          .testimonials-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>

      {/* Background glows */}
      <div aria-hidden style={{ position: "absolute", inset: 0, pointerEvents: "none", overflow: "hidden" }}>
        <div style={{
          position: "absolute", top: "-120px", left: "-120px",
          width: "500px", height: "500px", borderRadius: "50%",
          background: "radial-gradient(circle, rgba(184,147,58,0.06) 0%, transparent 65%)",
        }} />
        <div style={{
          position: "absolute", bottom: "-100px", right: "-100px",
          width: "400px", height: "400px", borderRadius: "50%",
          background: "radial-gradient(circle, rgba(184,147,58,0.05) 0%, transparent 65%)",
        }} />
      </div>

      <div style={{ maxWidth: 1100, margin: "0 auto", position: "relative" }}>

        {/* ── Header ── */}
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          style={{ textAlign: "center", marginBottom: 72 }}
        >
          {/* Eyebrow */}
          <div style={{ display: "inline-flex", alignItems: "center", gap: 8, marginBottom: 24 }}>
            <span style={{ display: "block", width: 28, height: 1, background: C.gold }} />
            <span style={{
              fontFamily: "'Outfit', sans-serif",
              fontSize: 10, fontWeight: 700,
              letterSpacing: "0.22em", textTransform: "uppercase",
              color: C.gold,
            }}>
              Customer Reviews
            </span>
            <span style={{ display: "block", width: 28, height: 1, background: C.gold }} />
          </div>

          <h2
            id="testimonials-heading"
            style={{
              fontFamily: "'Outfit', sans-serif",
              fontSize: "clamp(32px, 5vw, 54px)",
              fontWeight: 800,
              color: C.ink,
              margin: "0 0 20px",
              lineHeight: 1.08,
              letterSpacing: "-0.03em",
            }}
          >
            What our clients say
          </h2>

          <p style={{
            fontFamily: "'Outfit', sans-serif",
            fontSize: 17, fontWeight: 400,
            color: C.muted,
            maxWidth: 520,
            margin: "0 auto 28px",
            lineHeight: 1.75,
          }}>
            Real reviews from{" "}
            <strong style={{ color: C.inkMid, fontWeight: 700 }}>
              London homeowners and tenants
            </strong>{" "}
            who trusted us with their homes.
          </p>

          {/* Aggregate rating pill */}
          <div style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 10,
            background: C.white,
            border: `1px solid ${C.goldBorder}`,
            borderRadius: 100,
            padding: "10px 20px",
            boxShadow: "0 2px 12px rgba(0,0,0,0.05)",
          }}>
            <Stars count={5} />
            <span style={{
              fontFamily: "'Outfit', sans-serif",
              fontSize: 13, fontWeight: 700,
              color: C.inkMid,
            }}>
              5.0
            </span>
            <span style={{
              width: 1, height: 14,
              background: C.goldBorder,
              display: "inline-block",
            }} />
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
            </svg>
            <span style={{
              fontFamily: "'Outfit', sans-serif",
              fontSize: 12, fontWeight: 500,
              color: C.mutedLight,
            }}>
              {reviews.length} Google reviews
            </span>
          </div>
        </motion.header>

        {/* ── Masonry grid ── */}
        <div className="testimonials-grid">
          {/* Column 1 */}
          <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
            {col1.map((r, i) => <ReviewCard key={r.id} review={r} delay={i * 0.08} />)}
          </div>
          {/* Column 2 — offset down slightly for masonry feel */}
          <div style={{ display: "flex", flexDirection: "column", gap: 24, marginTop: 40 }}>
            {col2.map((r, i) => <ReviewCard key={r.id} review={r} delay={0.05 + i * 0.08} />)}
          </div>
          {/* Column 3 */}
          <div style={{ display: "flex", flexDirection: "column", gap: 24, marginTop: 20 }}>
            {col3.map((r, i) => <ReviewCard key={r.id} review={r} delay={0.10 + i * 0.08} />)}
          </div>
        </div>

        {/* ── Bottom CTA ── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          style={{
            textAlign: "center",
            marginTop: 72,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 16,
          }}
        >
          <a
            href="#wizard"
            aria-label="Report a repair and join our happy customers"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 10,
              background: `linear-gradient(135deg, ${C.gold}, ${C.goldLight})`,
              color: C.white,
              fontFamily: "'Outfit', sans-serif",
              fontWeight: 700,
              fontSize: 13,
              padding: "13px 28px",
              borderRadius: 6,
              textDecoration: "none",
              letterSpacing: "0.04em",
              boxShadow: "0 4px 18px rgba(184,147,58,0.22)",
              transition: "all 0.22s",
            }}
          >
            Join our happy customers
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"/>
              <polyline points="12 5 19 12 12 19"/>
            </svg>
          </a>
          <p style={{
            fontFamily: "'Outfit', sans-serif",
            fontSize: 13, fontWeight: 400,
            color: C.mutedLight,
            margin: 0,
          }}>
            All 32 London boroughs &nbsp;·&nbsp; 24/7 emergency line &nbsp;·&nbsp;{" "}
            <a href="tel:02074736366" style={{
              fontFamily: "'Outfit', sans-serif",
              color: C.gold, textDecoration: "none", fontWeight: 600,
            }}>
              020 7473 6366
            </a>
          </p>
        </motion.div>

      </div>
    </section>
  );
}