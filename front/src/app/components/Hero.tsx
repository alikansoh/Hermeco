"use client";

import React, { useState, useEffect, useCallback, useMemo, useRef } from "react";
import issueTree from "./issues.json";

interface IssueNode {
  id: string;
  label: string;
  icon?: string;
  emergency?: boolean;
  children?: IssueNode[];
}

interface FormData {
  fullName: string;
  telephone: string;
  details: string;
}

const GOLD = "#B8933A";
const GOLD_LIGHT = "#D4AA55";
const GOLD_TRANSPARENT = "rgba(184,147,58,0.10)";
const GOLD_BORDER = "rgba(184,147,58,0.28)";

// ─── SVG Cache ────────────────────────────────────────────────────────────────
const svgCache = new Map<string, string>();
const svgPromises = new Map<string, Promise<string>>();

function loadSvg(iconName: string): Promise<string> {
  if (svgCache.has(iconName)) return Promise.resolve(svgCache.get(iconName)!);
  if (svgPromises.has(iconName)) return svgPromises.get(iconName)!;
  const p = fetch(`/icons/${iconName}.svg`)
    .then((r) => (r.ok ? r.text() : ""))
    .then((text) => {
      if (!text.trim()) return "";
      let c = text
        .replace(/(<svg[^>]*)\s+width="[^"]*"/i, '$1 width="100%"')
        .replace(/(<svg[^>]*)\s+height="[^"]*"/i, '$1 height="100%"');
      if (!/width="/i.test(c)) c = c.replace(/(<svg)/i, '$1 width="100%" height="100%"');
      c = c
        .replace(/\s+stroke="(?!none\b)[^"]*"/gi, "")
        .replace(/\s+fill="(?!none\b)[^"]*"/gi, "")
        .replace(/style="([^"]*)fill\s*:\s*(?!none)[^;}"]+;?([^"]*)"/gi, 'style="$1$2"')
        .replace(/style="([^"]*)stroke\s*:\s*(?!none)[^;}"]+;?([^"]*)"/gi, 'style="$1$2"')
        .replace(/<style[^>]*>[\s\S]*?<\/style>/gi, "")
        .replace(/\s+class="[^"]*"/gi, "")
        .replace(/(<svg)([^>]*>)/i, '$1 fill="currentColor"$2');
      svgCache.set(iconName, c);
      return c;
    })
    .catch(() => { svgCache.set(iconName, ""); return ""; });
  svgPromises.set(iconName, p);
  return p;
}

function preloadAllIcons(nodes: IssueNode[]) {
  const walk = (list: IssueNode[]) => {
    for (const n of list) { if (n.icon) loadSvg(n.icon); if (n.children) walk(n.children); }
  };
  walk(nodes);
}
preloadAllIcons(issueTree as IssueNode[]);

// ─── Icon ─────────────────────────────────────────────────────────────────────
const Icon: React.FC<{ name?: string; size?: number; color?: string }> = ({ name, size = 32, color = "#475569" }) => {
  const cached = name ? svgCache.get(name) : undefined;
  const [html, setHtml] = useState<string>(cached ?? "");
  useEffect(() => {
    if (!name) return;
    if (svgCache.has(name)) { setHtml(svgCache.get(name)!); return; }
    let cancelled = false;
    loadSvg(name).then((s) => { if (!cancelled) setHtml(s); });
    return () => { cancelled = true; };
  }, [name]);
  return (
    <span aria-hidden style={{ display: "block", width: size, height: size, minWidth: size, flexShrink: 0, color, lineHeight: 0 }}
      dangerouslySetInnerHTML={html ? { __html: html } : undefined} />
  );
};

// ─── Emergency Modal ──────────────────────────────────────────────────────────
const EmergencyModal: React.FC<{ node: IssueNode; onClose: () => void }> = ({ node, onClose }) => (
  <div className="fixed inset-0 z-[200] flex items-end sm:items-center justify-center p-4"
    style={{ background: "rgba(0,0,0,0.7)", backdropFilter: "blur(6px)" }}>
    <div className="w-full max-w-sm rounded-3xl p-8 text-center bg-white shadow-2xl" style={{ fontFamily: "'Outfit', sans-serif" }}>
      <div className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 bg-red-50">
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#b91c1c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"/>
          <line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/>
        </svg>
      </div>
      <h2 style={{ fontFamily: "'Outfit', sans-serif", fontSize: "18px", fontWeight: 700, color: "#0f172a", marginBottom: "8px" }}>
        {node.label}
      </h2>
      <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: "14px", lineHeight: 1.7, marginBottom: "24px", color: "#64748b" }}>
        This needs <span style={{ color: "#dc2626", fontWeight: 600 }}>immediate attention</span>. Call our emergency line now.
      </p>
      <a href="tel:02074736366"
        className="flex items-center justify-center gap-2 w-full py-4 rounded-2xl mb-3"
        style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 700, fontSize: "15px", color: "white", textDecoration: "none", background: "linear-gradient(135deg,#c0392b,#b91c1c)", boxShadow: "0 8px 24px rgba(185,28,28,0.3)" }}>
        📞 Call: 020 7473 6366
      </a>
      <button onClick={onClose}
        style={{ fontFamily: "'Outfit', sans-serif", width: "100%", padding: "12px", borderRadius: "16px", fontSize: "14px", fontWeight: 600, border: "1px solid #e2e8f0", color: "#64748b", background: "white", cursor: "pointer" }}>
        ← Go back
      </button>
    </div>
  </div>
);

// ─── Success Screen ───────────────────────────────────────────────────────────
const SuccessScreen: React.FC<{ onReset: () => void }> = ({ onReset }) => (
  <div style={{ display: "flex", flexDirection: "column", alignItems: "center", padding: "80px 24px", textAlign: "center", fontFamily: "'Outfit', sans-serif" }}>
    <div style={{
      width: "96px", height: "96px", borderRadius: "50%",
      display: "flex", alignItems: "center", justifyContent: "center",
      marginBottom: "24px",
      background: `linear-gradient(135deg, ${GOLD}, ${GOLD_LIGHT})`,
      boxShadow: "0 12px 32px rgba(184,147,58,0.3)",
    }}>
      <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/>
      </svg>
    </div>
    <h2 style={{ fontFamily: "'Outfit', sans-serif", fontSize: "32px", fontWeight: 800, color: "#111009", margin: "0 0 12px", letterSpacing: "-0.03em" }}>
      All done! 🎉
    </h2>
    <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: "15px", lineHeight: 1.75, maxWidth: "320px", color: "#6B6150", margin: "0 0 8px" }}>
      We&apos;ve received your request and will be in touch shortly to arrange a visit.
    </p>
    <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: "13px", color: "#9A8E7E", marginBottom: "40px" }}>
      Response within 24 hours on weekdays
    </p>
    <button onClick={onReset} style={{
      fontFamily: "'Outfit', sans-serif",
      fontSize: "13px", fontWeight: 700,
      padding: "12px 24px", borderRadius: "100px",
      border: `2px solid ${GOLD_BORDER}`,
      color: GOLD, background: "white", cursor: "pointer",
    }}>
      + Submit another request
    </button>
  </div>
);

// ─── Main Wizard ──────────────────────────────────────────────────────────────
export default function MaintenanceWizard() {
  const tree = useMemo(() => issueTree as IssueNode[], []);
  const topRef = useRef<HTMLDivElement>(null);

  const [stack, setStack] = useState<IssueNode[][]>([tree]);
  const [breadcrumbs, setBreadcrumbs] = useState<IssueNode[]>([]);
  const [phase, setPhase] = useState<"pick" | "form" | "done">("pick");
  const [emergencyNode, setEmergencyNode] = useState<IssueNode | null>(null);
  const [formData, setFormData] = useState<FormData>({ fullName: "", telephone: "", details: "" });
  const [loading, setLoading] = useState(false);
  const [slide, setSlide] = useState<"in-right" | "in-left" | "idle">("idle");

  const currentItems = stack[stack.length - 1];
  const isLeaf = currentItems.every(n => !n.children?.length);

  const animateIn = (dir: "in-right" | "in-left") => {
    setSlide(dir);
    requestAnimationFrame(() => requestAnimationFrame(() => setSlide("idle")));
  };

  // Scroll only to the top of the wizard component, not the page
  const scrollToTop = () => {
    topRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const handlePick = useCallback((node: IssueNode) => {
    if (node.emergency) { setEmergencyNode(node); return; }
    if (node.children?.length) {
      setStack(s => [...s, node.children!]);
      setBreadcrumbs(b => [...b, node]);
      animateIn("in-right");
      scrollToTop();
    } else {
      setBreadcrumbs(b => [...b, node]);
      setPhase("form");
      // Only scroll to top of wizard when moving to the form
      scrollToTop();
    }
  }, []);

  const handleBack = useCallback(() => {
    if (phase === "form") {
      setPhase("pick");
      setBreadcrumbs(b => b.slice(0, -1));
      animateIn("in-left");
      scrollToTop();
      return;
    }
    if (stack.length > 1) {
      setStack(s => s.slice(0, -1));
      setBreadcrumbs(b => b.slice(0, -1));
      animateIn("in-left");
      scrollToTop();
    }
  }, [phase, stack.length]);

  const handleReset = useCallback(() => {
    setStack([tree]);
    setBreadcrumbs([]);
    setPhase("pick");
    setFormData({ fullName: "", telephone: "", details: "" });
    setSlide("in-left");
    requestAnimationFrame(() => requestAnimationFrame(() => setSlide("idle")));
    scrollToTop();
  }, [tree]);

  const handleSubmit = useCallback(async () => {
    if (!formData.fullName || !formData.telephone) return;
    setLoading(true);
    await new Promise<void>((r) => setTimeout(r, 1400));
    setLoading(false);
    setPhase("done");
  }, [formData]);

  const slideStyle: React.CSSProperties = {
    transition: slide === "idle" ? "transform 300ms cubic-bezier(0.4,0,0.2,1), opacity 300ms ease" : "none",
    transform: slide === "idle" ? "translateX(0)" : slide === "in-right" ? "translateX(40px)" : "translateX(-40px)",
    opacity: slide === "idle" ? 1 : 0,
  };

  const FONT = "'Outfit', sans-serif";

  if (phase === "done") {
    return (
      <div className="min-h-screen flex items-center justify-center p-6"
        style={{ background: "linear-gradient(160deg,#FAFAF7,#f2ede2)", fontFamily: FONT }}>
        <style>{`@import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800&display=swap');*{box-sizing:border-box}`}</style>
        <div className="w-full max-w-md bg-white rounded-3xl shadow-xl overflow-hidden" style={{ border: "1px solid rgba(0,0,0,0.05)" }}>
          <SuccessScreen onReset={handleReset} />
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen" style={{ background: "linear-gradient(160deg,#FAFAF7,#f2ede2)", fontFamily: FONT }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800&display=swap');
        * { box-sizing: border-box; } body { margin: 0; }
        .pick-card:hover { transform: translateY(-3px) !important; box-shadow: 0 12px 32px rgba(0,0,0,0.10) !important; border-color: ${GOLD_BORDER} !important; }
        .pick-card:active { transform: translateY(-1px) scale(0.98) !important; }
        .leaf-row:hover { background: rgba(184,147,58,0.06) !important; border-color: ${GOLD_BORDER} !important; transform: translateX(3px) !important; }
        .leaf-row:active { transform: scale(0.99) !important; }
      `}</style>

      {emergencyNode && <EmergencyModal node={emergencyNode} onClose={() => setEmergencyNode(null)} />}

      {/* ── Top bar ── */}
      {/* Scroll anchor — sits above the sticky bar so scrollIntoView lands cleanly */}
      <div ref={topRef} style={{ position: "relative", top: -80 }} />

      <div className="sticky top-0 z-50 flex items-center justify-between px-5 py-3.5"
        style={{ background: "rgba(250,250,247,0.95)", backdropFilter: "blur(12px)", borderBottom: `1px solid ${GOLD_BORDER}` }}>
        <span style={{ fontFamily: FONT, fontSize: "11px", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "#64748b" }}>
          Maintenance Request
        </span>
        <a href="tel:02074736366"
          className="flex items-center gap-1.5"
          style={{ fontFamily: FONT, fontSize: "12px", fontWeight: 700, padding: "8px 12px", borderRadius: "100px", color: "#dc2626", background: "rgba(239,68,68,0.07)", border: "1px solid rgba(239,68,68,0.2)", textDecoration: "none" }}>
          📞 020 7473 6366
        </a>
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 pt-6 pb-24">

        {/* ── Progress / Nav ── */}
        <div className="mb-6">
          {(stack.length > 1 || phase === "form") && (
            <button onClick={handleBack}
              className="flex items-center gap-2 mb-4 py-2 px-3 rounded-xl"
              style={{ fontFamily: FONT, fontSize: "14px", fontWeight: 700, color: "#475569", background: "transparent", border: "1.5px solid transparent", cursor: "pointer", transition: "all 0.15s" }}
              onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.borderColor = "#e2e8f0"; (e.currentTarget as HTMLButtonElement).style.background = "white"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.borderColor = "transparent"; (e.currentTarget as HTMLButtonElement).style.background = "transparent"; }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="15 18 9 12 15 6"/>
              </svg>
              Back
            </button>
          )}

          {breadcrumbs.length > 0 && (
            <div className="flex flex-wrap items-center gap-1.5 mb-4 px-1">
              <span style={{ fontFamily: FONT, fontSize: "12px", color: "#94a3b8", fontWeight: 500 }}>You selected:</span>
              {breadcrumbs.map((b, i) => (
                <React.Fragment key={b.id}>
                  {i > 0 && <span style={{ color: "#cbd5e1", fontSize: "12px" }}>›</span>}
                  <span className="inline-flex items-center gap-1"
                    style={{ fontFamily: FONT, fontSize: "12px", fontWeight: 700, padding: "4px 10px", borderRadius: "100px", background: GOLD_TRANSPARENT, color: "#7a5c1e", border: `1px solid ${GOLD_BORDER}` }}>
                    <Icon name={b.icon} size={12} color={GOLD} />
                    {b.label}
                  </span>
                </React.Fragment>
              ))}
            </div>
          )}

          {/* Question prompt card */}
          <div className="bg-white rounded-2xl px-6 py-5 shadow-sm" style={{ border: "1px solid rgba(0,0,0,0.05)" }}>
            {phase === "pick" && stack.length === 1 && (
              <>
                <p style={{ fontFamily: FONT, fontSize: "11px", fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.18em", color: "#94a3b8", marginBottom: "4px" }}>Step 1 of 3</p>
                <h1 style={{ fontFamily: FONT, fontSize: "clamp(20px,4vw,26px)", fontWeight: 800, color: "#111009", margin: "0 0 4px", letterSpacing: "-0.02em" }}>
                  👋 Where is the problem?
                </h1>
                <p style={{ fontFamily: FONT, fontSize: "14px", color: "#6B6150", margin: 0 }}>Tap the area that best matches your issue.</p>
              </>
            )}
            {phase === "pick" && stack.length === 2 && (
              <>
                <p style={{ fontFamily: FONT, fontSize: "11px", fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.18em", color: "#94a3b8", marginBottom: "4px" }}>Step 2 of 3</p>
                <h1 style={{ fontFamily: FONT, fontSize: "clamp(20px,4vw,26px)", fontWeight: 800, color: "#111009", margin: "0 0 4px", letterSpacing: "-0.02em" }}>
                  👇 Now pick the specific issue
                </h1>
                <p style={{ fontFamily: FONT, fontSize: "14px", color: "#6B6150", margin: 0 }}>Choose the one that best describes what you&apos;re seeing.</p>
              </>
            )}
            {phase === "pick" && stack.length > 2 && (
              <>
                <p style={{ fontFamily: FONT, fontSize: "11px", fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.18em", color: "#94a3b8", marginBottom: "4px" }}>Almost there!</p>
                <h1 style={{ fontFamily: FONT, fontSize: "clamp(20px,4vw,26px)", fontWeight: 800, color: "#111009", margin: "0 0 4px", letterSpacing: "-0.02em" }}>
                  👇 One more choice
                </h1>
                <p style={{ fontFamily: FONT, fontSize: "14px", color: "#6B6150", margin: 0 }}>Pick the option that fits best.</p>
              </>
            )}
            {phase === "form" && (
              <>
                <p style={{ fontFamily: FONT, fontSize: "11px", fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.18em", color: "#94a3b8", marginBottom: "4px" }}>Step 3 of 3 — Last step!</p>
                <h1 style={{ fontFamily: FONT, fontSize: "clamp(20px,4vw,26px)", fontWeight: 800, color: "#111009", margin: "0 0 4px", letterSpacing: "-0.02em" }}>
                  ✅ Just your contact details
                </h1>
                <p style={{ fontFamily: FONT, fontSize: "14px", color: "#6B6150", margin: 0 }}>We&apos;ll call you to arrange a visit — only takes 30 seconds.</p>
              </>
            )}
          </div>
        </div>

        {/* ── Animated content ── */}
        <div style={slideStyle}>

          {/* PICK PHASE */}
          {phase === "pick" && (
            isLeaf ? (
              <div className="flex flex-col gap-3">
                {currentItems.map((item) => (
                  <button key={item.id} onClick={() => handlePick(item)}
                    className="leaf-row flex items-center gap-4 w-full px-5 py-5 rounded-2xl bg-white text-left transition-all duration-150"
                    style={{ border: "1.5px solid #f1f5f9", boxShadow: "0 1px 4px rgba(0,0,0,0.04)", cursor: "pointer", fontFamily: FONT }}>
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
                      style={{ background: GOLD_TRANSPARENT }}>
                      <Icon name={item.icon} size={26} color={GOLD} />
                    </div>
                    <span style={{ flex: 1, fontFamily: FONT, fontSize: "16px", fontWeight: 600, color: "#334155", lineHeight: 1.4 }}>{item.label}</span>
                    <div className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0"
                      style={{ background: "rgba(184,147,58,0.08)" }}>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={GOLD} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="9 18 15 12 9 6"/>
                      </svg>
                    </div>
                  </button>
                ))}
              </div>
            ) : (
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {currentItems.map((item) => (
                  item.emergency ? (
                    <button key={item.id} onClick={() => handlePick(item)}
                      className="pick-card relative flex flex-col items-center gap-3 pt-7 pb-6 px-3 rounded-2xl transition-all duration-200"
                      style={{ border: "1.5px solid #fecaca", background: "rgba(254,242,242,0.7)", boxShadow: "0 1px 4px rgba(0,0,0,0.04)", cursor: "pointer", fontFamily: FONT }}>
                      <div className="absolute top-3 right-3 flex h-2.5 w-2.5">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75" />
                        <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-red-500" />
                      </div>
                      <div className="w-16 h-16 rounded-2xl flex items-center justify-center bg-red-50">
                        <Icon name={item.icon} size={38} color="#ef4444" />
                      </div>
                      <span style={{ fontFamily: FONT, fontSize: "13px", fontWeight: 700, color: "#ef4444", textAlign: "center", lineHeight: 1.3 }}>{item.label}</span>
                    </button>
                  ) : (
                    <button key={item.id} onClick={() => handlePick(item)}
                      className="pick-card flex flex-col items-center gap-3 pt-7 pb-6 px-3 rounded-2xl bg-white transition-all duration-200"
                      style={{ border: "1.5px solid #f1f5f9", boxShadow: "0 2px 8px rgba(0,0,0,0.05)", cursor: "pointer", fontFamily: FONT }}>
                      <div className="w-16 h-16 rounded-2xl flex items-center justify-center" style={{ background: "#f8fafc" }}>
                        <Icon name={item.icon} size={38} color="#475569" />
                      </div>
                      <span style={{ fontFamily: FONT, fontSize: "13px", fontWeight: 600, color: "#475569", textAlign: "center", lineHeight: 1.3, padding: "0 4px" }}>{item.label}</span>
                      {item.children?.length && (
                        <span style={{ fontFamily: FONT, fontSize: "10px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.10em", padding: "3px 10px", borderRadius: "100px", background: "rgba(184,147,58,0.10)", color: GOLD }}>
                          {item.children.length} options →
                        </span>
                      )}
                    </button>
                  )
                ))}
              </div>
            )
          )}

          {/* FORM PHASE */}
          {phase === "form" && (
            <div className="bg-white rounded-3xl shadow-sm" style={{ padding: "24px 24px 32px", border: "1px solid rgba(0,0,0,0.05)" }}>

              {/* Reporting summary */}
              <div className="flex items-start gap-3 rounded-2xl px-4 py-4 mb-6"
                style={{ background: GOLD_TRANSPARENT, border: `1.5px solid ${GOLD_BORDER}` }}>
                <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                  style={{ background: `linear-gradient(135deg,${GOLD},${GOLD_LIGHT})` }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                    <polyline points="14 2 14 8 20 8"/>
                    <line x1="16" y1="13" x2="8" y2="13"/>
                    <line x1="16" y1="17" x2="8" y2="17"/>
                    <polyline points="10 9 9 9 8 9"/>
                  </svg>
                </div>
                <div>
                  <p style={{ fontFamily: FONT, fontSize: "10px", fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.18em", color: "#94a3b8", marginBottom: "4px" }}>Reporting</p>
                  <div className="flex flex-wrap items-center gap-1.5">
                    {breadcrumbs.map((n, i) => (
                      <React.Fragment key={n.id}>
                        {i > 0 && <span style={{ color: "#cbd5e1", fontSize: "12px" }}>›</span>}
                        <span style={{ fontFamily: FONT, fontSize: "13px", fontWeight: 700, color: "#334155" }}>{n.label}</span>
                      </React.Fragment>
                    ))}
                  </div>
                </div>
              </div>

              {/* Fields */}
              <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                <div>
                  <label style={{ display: "block", fontFamily: FONT, fontSize: "13px", fontWeight: 700, color: "#334155", marginBottom: "8px" }}>
                    Your name <span style={{ color: "#f87171" }}>*</span>
                  </label>
                  <input type="text" placeholder="e.g. Sarah Johnson" value={formData.fullName}
                    onChange={(e) => setFormData(p => ({ ...p, fullName: e.target.value }))}
                    style={{ width: "100%", fontFamily: FONT, fontSize: "16px", fontWeight: 400, color: "#1e293b", background: "#fafafa", border: "2px solid #e2e8f0", borderRadius: "16px", padding: "14px 16px", outline: "none", transition: "border-color 0.15s" }}
                    onFocus={e => (e.target.style.borderColor = GOLD)}
                    onBlur={e => (e.target.style.borderColor = "#e2e8f0")} />
                </div>

                <div>
                  <label style={{ display: "block", fontFamily: FONT, fontSize: "13px", fontWeight: 700, color: "#334155", marginBottom: "8px" }}>
                    Best phone number <span style={{ color: "#f87171" }}>*</span>
                  </label>
                  <input type="tel" placeholder="e.g. 020 7473 6366" value={formData.telephone}
                    onChange={(e) => setFormData(p => ({ ...p, telephone: e.target.value }))}
                    style={{ width: "100%", fontFamily: FONT, fontSize: "16px", fontWeight: 400, color: "#1e293b", background: "#fafafa", border: "2px solid #e2e8f0", borderRadius: "16px", padding: "14px 16px", outline: "none", transition: "border-color 0.15s" }}
                    onFocus={e => (e.target.style.borderColor = GOLD)}
                    onBlur={e => (e.target.style.borderColor = "#e2e8f0")} />
                </div>

                <div>
                  <label style={{ display: "block", fontFamily: FONT, fontSize: "13px", fontWeight: 700, color: "#334155", marginBottom: "8px" }}>
                    Extra details <span style={{ fontFamily: FONT, fontWeight: 400, color: "#94a3b8" }}>(optional)</span>
                  </label>
                  <textarea rows={4} value={formData.details}
                    onChange={(e) => setFormData(p => ({ ...p, details: e.target.value }))}
                    placeholder="When did it start? How bad is it? Any preferred times for a visit?"
                    style={{ width: "100%", fontFamily: FONT, fontSize: "16px", fontWeight: 400, color: "#1e293b", background: "#fafafa", border: "2px solid #e2e8f0", borderRadius: "16px", padding: "14px 16px", outline: "none", resize: "none", lineHeight: 1.6, transition: "border-color 0.15s" }}
                    onFocus={e => (e.target.style.borderColor = GOLD)}
                    onBlur={e => (e.target.style.borderColor = "#e2e8f0")} />
                </div>

                <button onClick={handleSubmit}
                  disabled={loading || !formData.fullName || !formData.telephone}
                  className="flex items-center justify-center gap-2.5 w-full rounded-2xl mt-2"
                  style={{
                    fontFamily: FONT, fontWeight: 700, fontSize: "16px",
                    padding: "18px",
                    background: formData.fullName && formData.telephone && !loading
                      ? `linear-gradient(135deg,${GOLD},${GOLD_LIGHT})` : "rgba(184,147,58,0.15)",
                    color: formData.fullName && formData.telephone && !loading ? "#111009" : "rgba(0,0,0,0.3)",
                    boxShadow: formData.fullName && formData.telephone && !loading ? "0 8px 32px rgba(184,147,58,0.3)" : "none",
                    cursor: loading || !formData.fullName || !formData.telephone ? "not-allowed" : "pointer",
                    border: "none",
                    transition: "all 0.2s",
                  }}>
                  {loading ? (
                    <>
                      <svg className="animate-spin w-5 h-5" viewBox="0 0 24 24" fill="none">
                        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" strokeDasharray="42" strokeDashoffset="20" opacity=".3"/>
                        <path d="M4 12a8 8 0 018-8" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
                      </svg>
                      Sending…
                    </>
                  ) : (
                    <>
                      <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/>
                      </svg>
                      Send my request
                    </>
                  )}
                </button>

                <p style={{ fontFamily: FONT, textAlign: "center", fontSize: "12px", color: "#94a3b8", margin: 0 }}>
                  No spam. We&apos;ll only call to arrange your visit. 🤝
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <p style={{ fontFamily: FONT, textAlign: "center", fontSize: "13px", color: "#6B6150", marginTop: "40px" }}>
          Gas leak, fire or flood?{" "}
          <a href="tel:02074736366" style={{ fontFamily: FONT, fontWeight: 700, color: GOLD, textDecoration: "underline", textUnderlineOffset: "2px" }}>
            Call 020 7473 6366
          </a>{" "}
          — available 24/7
        </p>
      </div>
    </div>
  );
}