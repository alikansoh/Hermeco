"use client";

import React, { useState, useRef, useEffect, useCallback, useMemo } from "react";
import issueTree from "./issues.json";

// ─── Types ────────────────────────────────────────────────────────────────────
interface IssueNode {
  id: string;
  label: string;
  icon?: string;
  color?: string;
  emergency?: boolean;
  children?: IssueNode[];
}

interface StackFrame {
  items: IssueNode[];
  selected: IssueNode | null;
  label: string;
}

interface FormData {
  fullName: string;
  telephone: string;
  details: string;
}

// ─── Constants ────────────────────────────────────────────────────────────────
const GOLD = "#c9a84c";
const GOLD_LIGHT = "#e8c96a";
const GOLD_TRANSPARENT = "rgba(201,168,76,0.12)";
const GOLD_BORDER = "rgba(201,168,76,0.25)";

const cn = (...classes: (string | false | null | undefined)[]) =>
  classes.filter(Boolean).join(" ");

// ─── SVG Preload Cache ────────────────────────────────────────────────────────
const svgCache = new Map<string, string>();
const svgPromises = new Map<string, Promise<string>>();

function loadSvg(iconName: string): Promise<string> {
  if (svgCache.has(iconName)) return Promise.resolve(svgCache.get(iconName)!);
  if (svgPromises.has(iconName)) return svgPromises.get(iconName)!;

  const p = fetch(`/icons/${iconName}.svg`)
    .then((r) => (r.ok ? r.text() : ""))
    .then((text) => {
      if (!text.trim()) return "";

      let cleaned = text;

      // 1. Normalise width/height to 100% so the parent wrapper controls the size
      cleaned = cleaned
        .replace(/(<svg[^>]*)\s+width="[^"]*"/i, '$1 width="100%"')
        .replace(/(<svg[^>]*)\s+height="[^"]*"/i, '$1 height="100%"');

      if (!/width="/i.test(cleaned)) {
        cleaned = cleaned.replace(/(<svg)/i, '$1 width="100%" height="100%"');
      }

      // 2. Strip ALL explicit fill/stroke colour attributes (keep "none" values).
      //    This lets fill="currentColor" on the root <svg> cascade everywhere,
      //    so the icon renders as a solid clean shape in whichever colour the
      //    parent wrapper sets via its CSS `color` property.
      cleaned = cleaned
        .replace(/\s+stroke="(?!none\b)[^"]*"/gi, "")
        .replace(/\s+fill="(?!none\b)[^"]*"/gi, "")
        // Also handle inline style="fill:#xxx" or style="stroke:#xxx"
        .replace(/style="([^"]*)fill\s*:\s*(?!none)[^;}"]+;?([^"]*)"/gi, 'style="$1$2"')
        .replace(/style="([^"]*)stroke\s*:\s*(?!none)[^;}"]+;?([^"]*)"/gi, 'style="$1$2"');

      // 3. Remove embedded <style> blocks and leftover class attributes
      cleaned = cleaned.replace(/<style[^>]*>[\s\S]*?<\/style>/gi, "");
      cleaned = cleaned.replace(/\s+class="[^"]*"/gi, "");

      // 4. Inject fill="currentColor" onto the root <svg> element so every
      //    child path inherits the colour set by the wrapper's CSS `color`.
      cleaned = cleaned.replace(/(<svg)([^>]*>)/i, '$1 fill="currentColor"$2');

      svgCache.set(iconName, cleaned);
      return cleaned;
    })
    .catch(() => {
      svgCache.set(iconName, "");
      return "";
    });

  svgPromises.set(iconName, p);
  return p;
}

function collectIcons(nodes: IssueNode[]): string[] {
  const names: string[] = [];
  const walk = (list: IssueNode[]) => {
    for (const n of list) {
      if (n.icon) names.push(n.icon);
      if (n.children) walk(n.children);
    }
  };
  walk(nodes);
  return [...new Set(names)];
}

function preloadAllIcons(nodes: IssueNode[]) {
  collectIcons(nodes).forEach(loadSvg);
}

preloadAllIcons(issueTree as IssueNode[]);

// ─── Icon Component ───────────────────────────────────────────────────────────
// KEY FIX: renders the FULL cached SVG string via dangerouslySetInnerHTML on a
// wrapper <span>.  We no longer extract inner paths and re-wrap them — that old
// approach applied wrong defaults (fill="none", stroke="currentColor") that
// broke any icon using filled shapes instead of strokes.
//
// The `color` prop sets the CSS `color` on the wrapper span; because the SVG
// root now has fill="currentColor", every path inherits it automatically.
const Icon: React.FC<{
  name?: string;
  size?: number;
  className?: string;
  style?: React.CSSProperties;
  color?: string;
}> = ({ name, size = 48, className, style, color = "#1e293b" }) => {
  const cached = name ? svgCache.get(name) : undefined;
  const [svgHtml, setSvgHtml] = useState<string>(cached ?? "");

  useEffect(() => {
    if (!name) return;
    if (svgCache.has(name)) {
      setSvgHtml(svgCache.get(name)!);
      return;
    }
    let cancelled = false;
    loadSvg(name).then((s) => {
      if (!cancelled) setSvgHtml(s);
    });
    return () => {
      cancelled = true;
    };
  }, [name]);

  const wrapperStyle: React.CSSProperties = {
    display: "block",
    width: size,
    height: size,
    minWidth: size,
    minHeight: size,
    flexShrink: 0,
    lineHeight: 0,
    // CSS color → currentColor → SVG fill inherits it
    color,
    ...style,
  };

  if (!svgHtml) {
    // Same-size invisible placeholder to prevent layout shift while loading
    return <span style={wrapperStyle} className={className} aria-hidden />;
  }

  return (
    <span
      style={wrapperStyle}
      className={className}
      aria-hidden
      dangerouslySetInnerHTML={{ __html: svgHtml }}
    />
  );
};

// ─── Step Indicator ───────────────────────────────────────────────────────────
const StepIndicator: React.FC<{ step: number }> = ({ step }) => {
  const steps = ["Area", "Issue", "Details"];
  return (
    <div className="flex items-center gap-0">
      {steps.map((label, i) => {
        const s = i + 1;
        const done = step > s;
        const active = step === s;
        return (
          <React.Fragment key={label}>
            <div className="flex items-center gap-2">
              <div
                className={cn(
                  "w-7 h-7 rounded-full flex items-center justify-center text-[11px] font-bold transition-all duration-500",
                  !done && !active && "bg-slate-100 text-slate-400 border border-slate-200",
                  !done && active && "bg-white text-slate-800 border-2"
                )}
                style={
                  done
                    ? {
                        background: `linear-gradient(135deg,${GOLD},${GOLD_LIGHT})`,
                        color: "#1a1207",
                        boxShadow: `0 0 14px rgba(201,168,76,0.4)`,
                      }
                    : active
                    ? { borderColor: GOLD }
                    : {}
                }
              >
                {done ? "✓" : s}
              </div>
              <span
                className={cn(
                  "text-[10px] font-bold tracking-widest uppercase transition-all duration-300 hidden sm:block",
                  done ? "opacity-100" : active ? "text-slate-700" : "text-slate-400"
                )}
                style={done ? { color: GOLD } : {}}
              >
                {label}
              </span>
            </div>
            {i < 2 && (
              <div
                className={cn(
                  "w-10 h-px mx-2 transition-all duration-500",
                  !done && "bg-slate-200"
                )}
                style={done ? { background: GOLD, opacity: 0.6 } : {}}
              />
            )}
          </React.Fragment>
        );
      })}
    </div>
  );
};

// ─── Category Card ────────────────────────────────────────────────────────────
const CategoryCard: React.FC<{
  item: IssueNode;
  selected: IssueNode | null;
  onSelect: (item: IssueNode) => void;
}> = ({ item, selected, onSelect }) => {
  const isSel = selected?.id === item.id;

  if (item.emergency) {
    return (
      <button
        onClick={() => onSelect(item)}
        aria-pressed={isSel}
        className={cn(
          "group relative flex flex-col items-center gap-4 pt-8 pb-6 px-4 rounded-2xl border transition-all duration-200 cursor-pointer overflow-hidden focus:outline-none",
          isSel
            ? "border-red-400 bg-red-50 shadow-lg"
            : "border-red-200 bg-red-50/30 hover:border-red-300 hover:shadow-md hover:-translate-y-0.5"
        )}
      >
        <div className="absolute top-3 right-3 flex h-2.5 w-2.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-60" />
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-red-500" />
        </div>
        {/* Larger icon container: 88×88 px */}
        <div
          className={cn(
            "rounded-2xl flex items-center justify-center transition-all",
            isSel ? "bg-red-100" : "bg-red-50/80"
          )}
          style={{ width: 88, height: 88 }}
        >
          <Icon name={item.icon} size={54} color="#ef4444" />
        </div>
        <span className="text-[12px] font-bold text-center text-red-500 leading-snug">
          {item.label}
        </span>
      </button>
    );
  }

  return (
    <button
      onClick={() => onSelect(item)}
      aria-pressed={isSel}
      className={cn(
        "group relative flex flex-col items-center gap-4 pt-8 pb-6 px-4 rounded-2xl border transition-all duration-200 cursor-pointer overflow-hidden focus:outline-none",
        !isSel &&
          "border-slate-100 bg-white hover:shadow-md hover:-translate-y-0.5 hover:border-[rgba(201,168,76,0.3)]"
      )}
      style={
        isSel
          ? {
              borderColor: GOLD,
              background: GOLD_TRANSPARENT,
              boxShadow: `0 8px 24px rgba(201,168,76,0.15)`,
              transform: "translateY(-2px)",
            }
          : {}
      }
    >
      {isSel && (
        <div
          className="absolute top-3 right-3 w-3 h-3 rounded-full shadow"
          style={{ background: GOLD }}
        />
      )}
      {/* Larger icon container: 88×88 px */}
      <div
        className={cn(
          "rounded-2xl flex items-center justify-center transition-all duration-200",
          isSel
            ? "bg-[rgba(201,168,76,0.15)]"
            : "bg-slate-50 group-hover:bg-amber-50/60"
        )}
        style={{ width: 88, height: 88 }}
      >
        {/*
          Color:
          - Selected  → gold accent
          - Default   → clean near-black (#1e293b) — crisp, legible, no blue tint
        */}
        <Icon name={item.icon} size={54} color={isSel ? GOLD : "#1e293b"} />
      </div>
      <span
        className={cn(
          "text-[12px] font-semibold text-center leading-snug px-0.5 transition-colors",
          isSel ? "text-slate-900" : "text-slate-600"
        )}
      >
        {item.label}
      </span>
    </button>
  );
};

// ─── Leaf Row ─────────────────────────────────────────────────────────────────
const LeafRow: React.FC<{
  items: IssueNode[];
  selected: IssueNode | null;
  onSelect: (item: IssueNode) => void;
}> = ({ items, selected, onSelect }) => (
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
    {items.map((item, idx) => {
      const isSel = selected?.id === item.id;
      return (
        <button
          key={item.id}
          onClick={() => onSelect(item)}
          aria-pressed={isSel}
          className={cn(
            "group flex items-center gap-3.5 px-4 py-4 rounded-2xl border text-left transition-all duration-150 focus:outline-none",
            isSel
              ? "shadow-md -translate-y-0.5"
              : "border-slate-100 bg-white hover:border-[rgba(201,168,76,0.3)] hover:shadow-sm"
          )}
          style={isSel ? { borderColor: GOLD, background: GOLD_TRANSPARENT } : {}}
        >
          <span
            className={cn(
              "shrink-0 w-9 h-9 rounded-xl flex items-center justify-center text-[12px] font-bold transition-all",
              !isSel && "bg-slate-50 text-slate-400 group-hover:bg-amber-50"
            )}
            style={
              isSel
                ? {
                    background: `linear-gradient(135deg,${GOLD},${GOLD_LIGHT})`,
                    color: "#1a1207",
                  }
                : {}
            }
          >
            {idx + 1}
          </span>
          <span
            className={cn(
              "flex-1 text-[13.5px] font-medium leading-snug transition-colors",
              isSel ? "text-slate-900" : "text-slate-600"
            )}
          >
            {item.label}
          </span>
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="shrink-0 transition-all"
            style={{ color: isSel ? GOLD : "rgba(0,0,0,0.2)" }}
          >
            {isSel ? (
              <>
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                <polyline points="22 4 12 14.01 9 11.01" />
              </>
            ) : (
              <polyline points="9 18 15 12 9 6" />
            )}
          </svg>
        </button>
      );
    })}
  </div>
);

// ─── Emergency Modal ──────────────────────────────────────────────────────────
const EmergencyModal: React.FC<{ node: IssueNode; onClose: () => void }> = ({
  node,
  onClose,
}) => (
  <div
    className="fixed inset-0 z-[200] flex items-center justify-center p-5"
    style={{ background: "rgba(10,8,4,0.7)", backdropFilter: "blur(4px)" }}
  >
    <div
      className="w-full max-w-sm rounded-3xl p-8 text-center bg-white shadow-2xl border"
      style={{ borderColor: "rgba(0,0,0,0.06)" }}
    >
      <div className="w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-5 bg-red-50">
        <svg
          width="36"
          height="36"
          viewBox="0 0 24 24"
          fill="none"
          stroke="rgb(185,60,60)"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" />
          <line x1="12" y1="9" x2="12" y2="13" />
          <line x1="12" y1="17" x2="12.01" y2="17" />
        </svg>
      </div>
      <h2 className="text-xl font-bold text-slate-900 mb-2">{node.label}</h2>
      <p className="text-[13px] leading-relaxed mb-7 text-slate-600">
        This needs{" "}
        <span className="text-red-600 font-semibold">immediate attention</span>. Please
        don&apos;t wait — call our emergency line right now and we&apos;ll be there fast.
      </p>
      <a
        href="tel:02074736366"
        className="flex items-center justify-center gap-2.5 w-full py-4 rounded-xl font-bold text-sm text-white mb-3"
        style={{
          background: "linear-gradient(135deg,#c0392b,#b91c1c)",
          boxShadow: "0 8px 24px rgba(185,28,28,0.3)",
        }}
      >
        <svg
          width="15"
          height="15"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13.5a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.77 2.5h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 10.6a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
        </svg>
        Call Emergency: 020 7473 6366
      </a>
      <button
        onClick={onClose}
        className="w-full py-3 rounded-xl text-sm font-semibold border border-slate-200 text-slate-600 hover:bg-slate-50 transition-colors"
      >
        ← Go back
      </button>
    </div>
  </div>
);

// ─── Success Screen ───────────────────────────────────────────────────────────
const SuccessScreen: React.FC<{ onReset: () => void }> = ({ onReset }) => (
  <div className="flex flex-col items-center py-16 px-6 text-center">
    <div
      className="w-28 h-28 rounded-full flex items-center justify-center mb-6 shadow-lg"
      style={{ background: `linear-gradient(135deg,${GOLD},${GOLD_LIGHT})` }}
    >
      <svg
        width="52"
        height="52"
        viewBox="0 0 24 24"
        fill="none"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
        <polyline points="22 4 12 14.01 9 11.01" />
      </svg>
    </div>
    <h2
      className="text-3xl font-bold text-slate-900 mb-3"
      style={{ fontFamily: "Georgia, serif" }}
    >
      You&apos;re all set! 🎉
    </h2>
    <p className="text-[14px] leading-relaxed max-w-sm text-slate-600 mb-2">
      Your maintenance request has been received. Our friendly team will review it and reach
      out shortly to schedule a convenient visit.
    </p>
    <p className="text-[12px] text-slate-400 mb-10">
      Typical response time: within 24 hours on weekdays
    </p>
    <button
      onClick={onReset}
      className="text-[12px] font-semibold px-5 py-2.5 rounded-full border transition-all hover:shadow-sm"
      style={{ borderColor: GOLD_BORDER, color: GOLD }}
    >
      + Submit another request
    </button>
  </div>
);

// ─── Main Wizard ──────────────────────────────────────────────────────────────
export default function MaintenanceWizard() {
  const tree = useMemo(() => issueTree as IssueNode[], []);

  const [stack, setStack] = useState<StackFrame[]>([
    { items: tree, selected: null, label: "Where is the issue?" },
  ]);
  const [step, setStep] = useState(1);
  const [emergencyNode, setEmergencyNode] = useState<IssueNode | null>(null);
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    telephone: "",
    details: "",
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [search, setSearch] = useState("");
  const bodyRef = useRef<HTMLDivElement>(null);
  const [showTopShadow, setShowTopShadow] = useState(false);
  const [showBottomShadow, setShowBottomShadow] = useState(false);

  const depth = stack.length - 1;
  const current = stack[depth];
  const selectedPath = stack
    .map((s) => s.selected)
    .filter((n): n is IssueNode => n !== null);
  const isLeafLevel =
    current.items.length > 0 &&
    current.items.every((n) => !n.children?.length);
  const showSearch = step !== 3 && current.items.length > 8;
  const filtered = useMemo(
    () =>
      search.trim()
        ? current.items.filter((n) =>
            n.label.toLowerCase().includes(search.toLowerCase())
          )
        : current.items,
    [search, current.items]
  );

  const scrollTop = useCallback(() => {
    setTimeout(() => {
      if (bodyRef.current) bodyRef.current.scrollTop = 0;
    }, 20);
  }, []);

  const updateShadows = useCallback(() => {
    const el = bodyRef.current;
    if (!el) return;
    setShowTopShadow(el.scrollTop > 8);
    setShowBottomShadow(el.scrollTop + el.clientHeight < el.scrollHeight - 8);
  }, []);

  useEffect(() => {
    updateShadows();
  }, [step, filtered.length, stack.length, updateShadows]);

  const handleWheel = useCallback((e: React.WheelEvent<HTMLDivElement>) => {
    const el = bodyRef.current;
    if (!el) return;
    const atTop = el.scrollTop === 0;
    const atBottom = el.scrollTop + el.clientHeight >= el.scrollHeight - 1;
    if ((atTop && e.deltaY < 0) || (atBottom && e.deltaY > 0)) {
      e.preventDefault();
      window.scrollBy({ top: e.deltaY, behavior: "auto" });
    }
  }, []);

  const pick = useCallback(
    (node: IssueNode) => {
      if (node.emergency) {
        setEmergencyNode(node);
        return;
      }
      setSearch("");
      const updated = stack.map((e, i) =>
        i === depth ? { ...e, selected: node } : e
      );
      if (node.children?.length) {
        setStack([
          ...updated,
          { items: node.children, selected: null, label: node.label },
        ]);
        setStep(2);
      } else {
        setStack(updated);
        setStep(3);
      }
      scrollTop();
    },
    [stack, depth, scrollTop]
  );

  const goToDepth = useCallback(
    (d: number) => {
      setSearch("");
      setStack(
        stack
          .slice(0, d + 1)
          .map((e, i) => (i === d ? { ...e, selected: null } : e))
      );
      setStep(d === 0 ? 1 : 2);
      scrollTop();
    },
    [stack, scrollTop]
  );

  const goBack = useCallback(() => {
    setSearch("");
    if (step === 3) {
      setStep(depth > 0 ? 2 : 1);
      return;
    }
    if (depth === 0) return;
    goToDepth(depth - 1);
  }, [step, depth, goToDepth]);

  const reset = useCallback(() => {
    setSearch("");
    setStack([{ items: tree, selected: null, label: "Where is the issue?" }]);
    setStep(1);
    scrollTop();
  }, [tree, scrollTop]);

  const handleSubmit = useCallback(async () => {
    if (!formData.fullName || !formData.telephone) return;
    setLoading(true);
    await new Promise<void>((r) => setTimeout(r, 1400));
    setLoading(false);
    setSubmitted(true);
  }, [formData.fullName, formData.telephone]);

  const handleFullReset = useCallback(() => {
    setSubmitted(false);
    reset();
    setFormData({ fullName: "", telephone: "", details: "" });
  }, [reset]);

  const showBack = step > 1 || depth > 0;
  // Fewer columns → each card is wider and more prominent
  const gridCols =
    depth === 0
      ? "grid-cols-2 sm:grid-cols-3 lg:grid-cols-4"
      : "grid-cols-2 sm:grid-cols-3";

  const headerCopy: Record<number, { h: string; sub: string }> = {
    1: {
      h: "Hello! What needs attention? 👋",
      sub: "Don't worry — we've got you covered. Just pick the area where the problem is and we'll take care of the rest.",
    },
    2: {
      h: isLeafLevel
        ? "Great, now narrow it down a bit"
        : "Getting closer — one more step!",
      sub: isLeafLevel
        ? "Choose the option that best describes what you're seeing."
        : "Let's find exactly the right category for your issue.",
    },
    3: {
      h: "Almost done — just your details!",
      sub: "We only need a couple of things so we can get back to you and arrange a visit at a time that suits you.",
    },
  };
  const hc = headerCopy[step] ?? headerCopy[2];

  if (submitted) {
    return (
      <div
        className="min-h-screen flex items-center justify-center p-6 pt-16"
        style={{
          background: "linear-gradient(160deg,#faf8f3 0%,#f2ede2 100%)",
          fontFamily: "'Georgia', serif",
        }}
      >
        <div
          className="w-full max-w-4xl rounded-3xl overflow-hidden"
          style={{
            background: "white",
            border: "1px solid rgba(0,0,0,0.05)",
            boxShadow: "0 40px 100px rgba(10,10,4,0.09)",
          }}
        >
          <div className="px-8 pt-7 pb-5 flex items-center justify-between border-b border-slate-100">
            <StepIndicator step={4} />
          </div>
          <SuccessScreen onReset={handleFullReset} />
        </div>
      </div>
    );
  }

  return (
    <div
      className="min-h-screen flex items-center justify-center p-4 sm:p-6 pt-10 sm:pt-16 relative overflow-hidden"
      style={{
        background: "linear-gradient(160deg,#faf8f3 0%,#f2ede2 100%)",
        fontFamily: "'Georgia', serif",
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display&family=DM+Sans:wght@400;500;600;700&display=swap');
        .wiz-body { font-family: 'DM Sans', sans-serif; }
        .wiz-serif { font-family: 'DM Serif Display', Georgia, serif; }
        .wizard-scroll { scrollbar-width: thin; scrollbar-color: ${GOLD} transparent; }
        .wizard-scroll::-webkit-scrollbar { height: 8px; width: 8px; }
        .wizard-scroll::-webkit-scrollbar-thumb { background: ${GOLD}; border-radius: 999px; }
        .wizard-scroll::-webkit-scrollbar-track { background: transparent; }
      `}</style>

      {emergencyNode && (
        <EmergencyModal
          node={emergencyNode}
          onClose={() => setEmergencyNode(null)}
        />
      )}

      <div className="relative z-10 w-full max-w-6xl flex flex-col gap-5 wiz-body">
        {/* Top bar */}
        <div className="flex items-center justify-between px-1">
          <div className="flex items-center gap-2.5">
            <div className="relative flex h-2.5 w-2.5">
              <span
                className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-60"
                style={{ background: GOLD }}
              />
              <span
                className="relative inline-flex rounded-full h-2.5 w-2.5"
                style={{ background: GOLD }}
              />
            </div>
            <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-slate-500">
              Maintenance Request
            </span>
          </div>
          <a
            href="tel:02074736366"
            className="flex items-center gap-1.5 text-[11px] font-semibold text-slate-500 hover:text-red-600 transition-colors"
          >
            <svg
              width="11"
              height="11"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13.5a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.77 2.5h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 10.6a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
            Emergency: 020 7473 6366
          </a>
        </div>

        {/* Main card */}
        <div
          className="flex flex-col rounded-3xl overflow-hidden relative"
          style={{
            background: "white",
            border: "1px solid rgba(0,0,0,0.05)",
            boxShadow: "0 32px 100px rgba(10,10,4,0.09)",
            minHeight: 580,
          }}
        >
          <div className="flex-1 flex flex-col min-w-0">
            {/* Step indicator */}
            <div className="px-7 pt-6 pb-5 flex items-center justify-between border-b border-slate-100">
              <StepIndicator step={step} />
              {selectedPath.length > 0 && (
                <button
                  onClick={reset}
                  title="Start over"
                  className="p-2 rounded-xl text-slate-400 hover:text-slate-600 hover:bg-slate-50 transition-all"
                >
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </svg>
                </button>
              )}
            </div>

            {/* Panel header */}
            <div className="px-7 pt-5 pb-3">
              <div className="flex items-start gap-3">
                {showBack && (
                  <button
                    onClick={goBack}
                    className="shrink-0 mt-1 flex items-center gap-1 rounded-xl px-3 py-1.5 text-[11px] font-semibold transition-all text-slate-500 hover:text-slate-700 bg-slate-50 hover:bg-slate-100 border border-slate-100"
                  >
                    <svg
                      width="11"
                      height="11"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="15 18 9 12 15 6" />
                    </svg>
                    Back
                  </button>
                )}
                <div className="flex-1 min-w-0">
                  <h2 className="wiz-serif text-xl leading-tight text-slate-900">
                    {hc.h}
                  </h2>
                  <p className="text-[12.5px] mt-1 text-slate-500 leading-relaxed">
                    {hc.sub}
                  </p>
                </div>
              </div>

              {/* Breadcrumbs */}
              {selectedPath.length > 0 && (
                <div className="flex flex-wrap items-center gap-1.5 mt-3">
                  {selectedPath.map((node, i) => (
                    <React.Fragment key={node.id}>
                      {i > 0 && (
                        <svg
                          width="9"
                          height="9"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke={GOLD}
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <polyline points="9 18 15 12 9 6" />
                        </svg>
                      )}
                      <button
                        onClick={() => goToDepth(i)}
                        className="text-[10.5px] font-semibold rounded-full px-2.5 py-1 transition-all hover:opacity-80"
                        style={{
                          background: GOLD_TRANSPARENT,
                          color: "rgba(34,34,34,0.7)",
                          border: `1px solid ${GOLD_BORDER}`,
                        }}
                      >
                        {node.label}
                      </button>
                    </React.Fragment>
                  ))}
                </div>
              )}
            </div>

            {/* Search */}
            {showSearch && (
              <div className="px-7 pb-3">
                <div className="relative">
                  <svg
                    width="13"
                    height="13"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke={GOLD}
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none"
                  >
                    <circle cx="11" cy="11" r="8" />
                    <path d="m21 21-4.35-4.35" />
                  </svg>
                  <input
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="Search for an issue…"
                    className="w-full rounded-xl pl-10 pr-9 py-2.5 text-[13px] placeholder-slate-400 outline-none transition-all"
                    style={{
                      background: "rgba(0,0,0,0.03)",
                      border: "1px solid rgba(0,0,0,0.05)",
                      color: "rgba(34,34,34,0.85)",
                    }}
                  />
                  {search && (
                    <button
                      onClick={() => setSearch("")}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                    >
                      <svg
                        width="13"
                        height="13"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <line x1="18" y1="6" x2="6" y2="18" />
                        <line x1="6" y1="6" x2="18" y2="18" />
                      </svg>
                    </button>
                  )}
                </div>
              </div>
            )}

            <div className="h-px mx-7 bg-slate-100" />

            {/* Body */}
            <div className="relative flex-1">
              <div
                aria-hidden
                style={{
                  pointerEvents: "none",
                  position: "absolute",
                  left: 0,
                  right: 0,
                  top: 0,
                  height: 24,
                  background: "linear-gradient(to bottom, rgba(0,0,0,0.04), transparent)",
                  opacity: showTopShadow ? 1 : 0,
                  transition: "opacity 180ms",
                  zIndex: 10,
                }}
              />
              <div
                aria-hidden
                style={{
                  pointerEvents: "none",
                  position: "absolute",
                  left: 0,
                  right: 0,
                  bottom: 0,
                  height: 28,
                  background: "linear-gradient(to top, rgba(0,0,0,0.04), transparent)",
                  opacity: showBottomShadow ? 1 : 0,
                  transition: "opacity 180ms",
                  zIndex: 10,
                }}
              />

              <div
                ref={bodyRef}
                onScroll={updateShadows}
                onWheel={handleWheel}
                className="overflow-y-auto px-7 py-6 wizard-scroll"
                style={{ maxHeight: 640 }}
              >
                {step !== 3 ? (
                  <>
                    {isLeafLevel ? (
                      <LeafRow
                        items={filtered}
                        selected={current.selected}
                        onSelect={pick}
                      />
                    ) : (
                      <div className={`grid gap-4 ${gridCols}`}>
                        {filtered.map((item) => (
                          <CategoryCard
                            key={item.id}
                            item={item}
                            selected={current.selected}
                            onSelect={pick}
                          />
                        ))}
                      </div>
                    )}
                    {filtered.length === 0 && (
                      <div className="flex flex-col items-center py-16 gap-3 text-slate-400">
                        <svg
                          width="32"
                          height="32"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <circle cx="11" cy="11" r="8" />
                          <path d="m21 21-4.35-4.35" />
                          <line x1="8" y1="11" x2="14" y2="11" />
                        </svg>
                        <span className="text-sm font-semibold">
                          No results for &quot;{search}&quot;
                        </span>
                        <span className="text-[12px]">Try a different search term</span>
                      </div>
                    )}
                  </>
                ) : (
                  /* Contact form */
                  <div className="w-full lg:max-w-none max-w-2xl">
                    {/* Issue recap */}
                    {selectedPath.length > 0 && (
                      <div
                        className="rounded-2xl px-5 py-4 mb-6"
                        style={{
                          background: GOLD_TRANSPARENT,
                          border: `1px solid ${GOLD_BORDER}`,
                        }}
                      >
                        <p className="text-[9px] font-black uppercase tracking-widest mb-2.5 text-slate-500">
                          You&apos;re reporting
                        </p>
                        <div className="flex flex-wrap items-center gap-1.5">
                          {selectedPath.map((n, i) => (
                            <React.Fragment key={n.id}>
                              {i > 0 && (
                                <svg
                                  width="9"
                                  height="9"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke={GOLD}
                                  strokeWidth="2.5"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                >
                                  <polyline points="9 18 15 12 9 6" />
                                </svg>
                              )}
                              <span
                                className="inline-flex items-center gap-1.5 text-[12px] font-semibold rounded-full px-3 py-1"
                                style={{
                                  background: "rgba(201,168,76,0.14)",
                                  color: "rgba(34,34,34,0.8)",
                                }}
                              >
                                <Icon name={n.icon} size={16} color="#92400e" />
                                {n.label}
                              </span>
                            </React.Fragment>
                          ))}
                        </div>
                      </div>
                    )}

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
                      {(
                        [
                          {
                            key: "fullName" as const,
                            label: "Your full name",
                            type: "text",
                            placeholder: "e.g. Sarah Johnson",
                            hasIcon: false,
                          },
                          {
                            key: "telephone" as const,
                            label: "Best phone number",
                            type: "tel",
                            placeholder: "e.g. 020 7473 6366",
                            hasIcon: true,
                          },
                        ] as const
                      ).map(({ key, label, type, placeholder, hasIcon }) => (
                        <div key={key}>
                          <label className="block text-[9.5px] font-black uppercase tracking-widest mb-2 text-slate-500">
                            {label}
                          </label>
                          <div className="relative">
                            {hasIcon && (
                              <svg
                                width="13"
                                height="13"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke={GOLD}
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none"
                              >
                                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13.5a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.77 2.5h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 10.6a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                              </svg>
                            )}
                            <input
                              type={type}
                              placeholder={placeholder}
                              value={formData[key]}
                              onChange={(e) =>
                                setFormData((p) => ({ ...p, [key]: e.target.value }))
                              }
                              className={`w-full rounded-xl py-3.5 text-[14px] outline-none transition-all ${
                                hasIcon ? "pl-10 pr-4" : "px-4"
                              }`}
                              style={{
                                background: "white",
                                border: "1.5px solid rgba(0,0,0,0.07)",
                                caretColor: GOLD,
                                color: "rgba(34,34,34,0.9)",
                                boxShadow: "inset 0 1px 3px rgba(0,0,0,0.03)",
                                fontFamily: "'DM Sans', sans-serif",
                              }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>

                    <div>
                      <label className="block text-[9.5px] font-black uppercase tracking-widest mb-2 text-slate-500">
                        Additional details{" "}
                        <span className="normal-case font-normal text-slate-400">
                          (optional but helpful!)
                        </span>
                      </label>
                      <textarea
                        rows={5}
                        value={formData.details}
                        onChange={(e) =>
                          setFormData((p) => ({ ...p, details: e.target.value }))
                        }
                        placeholder="Tell us anything that might help — when it started, how bad it is, any access notes, preferred times…"
                        className="w-full rounded-xl px-4 py-3.5 text-[13.5px] outline-none transition-all resize-none"
                        style={{
                          background: "white",
                          border: "1.5px solid rgba(0,0,0,0.07)",
                          caretColor: GOLD,
                          color: "rgba(34,34,34,0.9)",
                          boxShadow: "inset 0 1px 3px rgba(0,0,0,0.03)",
                          fontFamily: "'DM Sans', sans-serif",
                        }}
                      />
                    </div>

                    <div className="mt-5">
                      <button
                        onClick={handleSubmit}
                        disabled={loading || !formData.fullName || !formData.telephone}
                        className="flex items-center justify-center gap-2.5 w-full py-4 rounded-2xl font-bold text-[14px] transition-all"
                        style={{
                          background:
                            !loading && formData.fullName && formData.telephone
                              ? `linear-gradient(135deg, ${GOLD}, ${GOLD_LIGHT})`
                              : "rgba(201,168,76,0.18)",
                          color:
                            !loading && formData.fullName && formData.telephone
                              ? "#1a1207"
                              : "rgba(34,34,34,0.4)",
                          boxShadow:
                            !loading && formData.fullName && formData.telephone
                              ? "0 8px 32px rgba(201,168,76,0.25)"
                              : "none",
                          cursor:
                            loading || !formData.fullName || !formData.telephone
                              ? "not-allowed"
                              : "pointer",
                        }}
                      >
                        {loading ? (
                          <>
                            <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
                              <circle
                                cx="12"
                                cy="12"
                                r="10"
                                stroke="currentColor"
                                strokeWidth="3"
                                strokeDasharray="42"
                                strokeDashoffset="20"
                                opacity=".25"
                              />
                              <path
                                d="M4 12a8 8 0 018-8"
                                stroke="currentColor"
                                strokeWidth="3"
                                strokeLinecap="round"
                              />
                            </svg>
                            Sending your request…
                          </>
                        ) : (
                          <>
                            <svg
                              width="15"
                              height="15"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2.2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <line x1="22" y1="2" x2="11" y2="13" />
                              <polygon points="22 2 15 22 11 13 2 9 22 2" />
                            </svg>
                            Send my request — it&apos;s quick!
                          </>
                        )}
                      </button>
                    </div>

                    <p className="text-center text-[11px] mt-3 text-slate-400">
                      We&apos;ll only use your number to arrange your visit. No spam, ever. 🤝
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <p className="text-center text-[11.5px] font-medium text-slate-500">
          Gas leak, fire, or flooding?{" "}
          <a
            href="tel:02074736366"
            className="underline underline-offset-2 font-semibold"
            style={{ color: GOLD }}
          >
            Call 020 7473 6366
          </a>{" "}
          immediately — available 24/7
        </p>
      </div>
    </div>
  );
}