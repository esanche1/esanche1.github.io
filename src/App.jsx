import { useState, useRef, useEffect } from "react";
import marketThisImg from "./assets/marketthis.webp";
import marketThisMobileImg from "./assets/marketthis-mobile.webp";
import chiTixImg from "./assets/chitix.webp";
import validateThisImg from "./assets/validatethis.webp";

const sideProjects = [
  {
    id: 1,
    title: "ChiTix",
    description:
      "Tracks ticket prices across marketplaces for Chicago events. Pick a show, set a target, get a text when it drops.",
    category: "Consumer",
    status: "Live",
    image: chiTixImg,
    url: "https://chitix-production.up.railway.app/",
    stack: ["Next.js", "TypeScript", "Drizzle", "Twilio"],
    metrics: [
      { label: "Events", value: "50+ live" },
      { label: "Markets", value: "6 tracked" },
    ],
  },
  {
    id: 2,
    title: "ValidateThis.io",
    description:
      "Catches bad data before it causes problems. Rules engine across databases, APIs, spreadsheets, and CRMs.",
    category: "Data",
    status: "Live",
    image: validateThisImg,
    url: "https://www.validatethis.io",
    stack: ["Next.js", "TypeScript", "Postgres", "AI rules"],
    metrics: [
      { label: "Rows", value: "10B+" },
      { label: "Rule precision", value: "97.4%" },
    ],
  },
];

const marketThisFeatures = [
  {
    label: "Brand",
    title: "Brand identity, in minutes.",
    description:
      "Naming, logo, palette, voice. A coherent brand stack you can ship straight to production or hand to a designer.",
  },
  {
    label: "Build",
    title: "Sites that ship themselves.",
    description:
      "Marketing site, landing pages, lifecycle email. Components that adapt to your brand and your data, not the other way around.",
  },
  {
    label: "Market",
    title: "Spend that moves like code.",
    description:
      "Connect your ad accounts. Plan, apply, and roll back budget across platforms instead of bouncing between five tabs.",
  },
];

const navLinks = [
  { href: "#marketthis", label: "MarketThis" },
  { href: "#also-building", label: "Also Building" },
  { href: "#about", label: "About" },
  { href: "https://substack.com/@edsenaysanchez", label: "Writing" },
];

const isExternal = (href) => /^https?:\/\//.test(href);
const externalProps = (href) =>
  isExternal(href)
    ? { target: "_blank", rel: "noopener noreferrer" }
    : {};

const primaryBtn =
  "inline-flex items-center justify-center gap-2 text-sm font-600 text-white bg-violet-600 hover:bg-violet-500 px-5 py-3 rounded-xl shadow-lg shadow-violet-600/25 hover:shadow-violet-500/35 transition-all duration-200";
const secondaryBtn =
  "inline-flex items-center justify-center gap-2 text-sm font-600 text-paper-50 bg-white/[0.04] hover:bg-white/[0.09] border border-white/15 hover:border-white/25 px-5 py-3 rounded-xl transition-colors duration-200";

function Eyebrow({ children, tone = "dark", className = "" }) {
  const toneClass =
    tone === "dark" ? "text-violet-300" : "text-violet-700";
  return (
    <p
      className={`font-mono text-[11px] font-500 tracking-[0.22em] uppercase ${toneClass} ${className}`}
    >
      {children}
    </p>
  );
}

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const scrollToTop = () => {
    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    window.scrollTo({ top: 0, behavior: reduce ? "auto" : "smooth" });
  };
  const navLinkClass =
    "text-sm font-500 text-mist-300 hover:text-paper-50 transition-colors duration-200";

  return (
    <header className="sticky top-0 z-40 bg-base-950/75 backdrop-blur-xl border-b border-white/[0.07]">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <button
          type="button"
          onClick={scrollToTop}
          aria-label="Ed Senay, back to top"
          className="font-display font-800 text-lg tracking-tight text-paper-50 cursor-pointer"
        >
          E<span className="text-violet-400">d</span> Senay
        </button>
        <nav className="hidden sm:flex items-center gap-8">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} className={navLinkClass} {...externalProps(l.href)}>
              {l.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
            className="sm:hidden p-2 -mr-2 rounded-lg text-mist-300 hover:text-paper-50 hover:bg-white/[0.06] transition-colors duration-200 cursor-pointer"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              {menuOpen ? (
                <path d="M6 6l12 12M6 18L18 6" />
              ) : (
                <path d="M4 7h16M4 12h16M4 17h16" />
              )}
            </svg>
          </button>
          <a
            href="#contact"
            className="text-sm font-600 text-white bg-violet-600 hover:bg-violet-500 px-4 py-2 rounded-lg shadow-lg shadow-violet-600/20 transition-all duration-200"
          >
            Get in Touch
          </a>
        </div>
      </div>
      {menuOpen && (
        <nav
          id="mobile-nav"
          className="sm:hidden border-t border-white/[0.07] bg-base-950/95 backdrop-blur-xl"
        >
          <div className="max-w-6xl mx-auto px-6 py-4 flex flex-col gap-1">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setMenuOpen(false)}
                className="text-sm font-500 text-mist-200 hover:text-violet-300 py-2 transition-colors duration-200"
                {...externalProps(l.href)}
              >
                {l.label}
              </a>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div aria-hidden="true" className="absolute inset-0 grid-lines pointer-events-none" />
      <div
        aria-hidden="true"
        className="absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[600px] pointer-events-none"
        style={{
          background:
            "radial-gradient(closest-side, rgba(138,95,255,0.22), transparent 70%)",
        }}
      />
      <div className="relative max-w-6xl mx-auto px-6 pt-16 lg:pt-24 pb-20 lg:pb-28 animate-fade-up">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          <div className="lg:col-span-6">
            <h1 className="font-display font-800 text-5xl sm:text-6xl lg:text-7xl tracking-tight leading-[0.98] text-paper-50 mb-6">
              Software has{" "}
              <span className="text-violet-400">Vercel</span> and{" "}
              <span className="text-violet-400">Terraform</span>.
              <br />
              Marketing has nothing.
            </h1>
            <p className="text-lg sm:text-xl text-mist-300 leading-relaxed max-w-xl mb-8">
              MarketThis is marketing infrastructure for builders. Brand, build,
              and market a product the way you ship code. Built for companies
              spending $10K to $200K per month on ads.
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="https://www.marketthis.io"
                target="_blank"
                rel="noopener noreferrer"
                className={primaryBtn}
              >
                Open MarketThis
                <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M7 17L17 7M17 7H7M17 7v10" />
                </svg>
              </a>
              <a href="#partner" className={secondaryBtn}>
                Become a design partner
              </a>
            </div>

            <p className="mt-6 text-sm font-500 text-mist-400">
              I&apos;m Ed Senay, building MarketThis. The operator behind{" "}
              <span className="font-700 text-paper-50">$200M+/yr</span> in managed
              ad spend at Scale Marketing.
            </p>
          </div>

          <div className="lg:col-span-6 max-w-[560px] mx-auto lg:max-w-none w-full">
            <a
              href="https://www.marketthis.io"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Open MarketThis"
              className="block relative group"
            >
              <div
                aria-hidden="true"
                className="absolute -inset-10 -z-10 rounded-full opacity-70 blur-3xl pointer-events-none"
                style={{
                  background:
                    "radial-gradient(closest-side, rgba(138,95,255,0.35), transparent 70%)",
                }}
              />
              <div className="relative aspect-[16/11] rounded-2xl overflow-hidden border border-white/15 bg-base-900 shadow-2xl shadow-black/50 ring-1 ring-violet-400/10 group-hover:ring-violet-400/30 group-hover:border-white/25 transition-all duration-300">
                <picture>
                  <source
                    media="(max-width: 640px)"
                    srcSet={marketThisMobileImg}
                  />
                  <img
                    src={marketThisImg}
                    alt="MarketThis generating a first-month paid plan across Meta and TikTok"
                    fetchPriority="high"
                    decoding="async"
                    className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-500 ease-out group-hover:scale-[1.02]"
                  />
                </picture>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function MarketThisSpotlight() {
  return (
    <section
      id="marketthis"
      className="relative overflow-hidden bg-base-900 border-y border-white/[0.07]"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(60% 50% at 90% 0%, rgba(138,95,255,0.12), transparent 70%)",
        }}
      />
      <div className="relative max-w-6xl mx-auto px-6 py-24 lg:py-28">
        <div className="max-w-3xl mb-14">
          <Eyebrow className="mb-4">What I&apos;m building</Eyebrow>
          <h2 className="font-display font-800 text-4xl sm:text-5xl lg:text-6xl tracking-tight leading-[1.02] text-paper-50 mb-6">
            Brand, build, and market{" "}
            <span className="text-violet-400">like you ship code</span>.
          </h2>
          <p className="text-lg text-mist-300 leading-relaxed">
            Dev infra made shipping software trivial. Concept to 1.0 to
            iteration, all on a credit card. Marketing has no equivalent.
            Once you have built something you still need to brand it, build
            it out, and market it. MarketThis is the stack that makes all
            three feel like infra, not a consulting engagement.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6 mb-12">
          {marketThisFeatures.map((f, i) => (
            <div
              key={f.label}
              className="group relative p-6 lg:p-7 rounded-2xl bg-base-800/80 border border-white/[0.08] hover:border-violet-400/35 hover:bg-base-800 transition-colors duration-300 animate-fade-up"
              style={{ animationDelay: `${i * 80}ms` }}
            >
              <p className="font-mono text-[11px] font-500 tracking-[0.18em] uppercase text-violet-300 mb-3">
                <span className="text-mist-500">0{i + 1} /</span> {f.label}
              </p>
              <h3 className="font-display font-700 text-xl text-paper-50 tracking-tight mb-2">
                {f.title}
              </h3>
              <p className="text-sm text-mist-300 leading-relaxed">
                {f.description}
              </p>
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-4">
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href="https://www.marketthis.io"
              target="_blank"
              rel="noopener noreferrer"
              className={primaryBtn}
            >
              Open MarketThis
              <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M7 17L17 7M17 7H7M17 7v10" />
              </svg>
            </a>
            <a href="#partner" className={secondaryBtn}>
              Become a design partner
            </a>
          </div>
          <span className="text-sm text-mist-400">
            Private beta. Onboarding a handful of design partners now.
          </span>
        </div>
      </div>
    </section>
  );
}

const credibilityStats = [
  { value: "$200M+", label: "Annual ad spend on platforms my team builds" },
  { value: "20%", label: "YoY growth at the agency where I lead data ops" },
  { value: "12", label: "Engineers, ML scientists, designers on my team" },
];

function CredibilityBand() {
  return (
    <section className="relative overflow-hidden bg-paper-50 text-inkwell-900">
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.05] pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, #15101f 1px, transparent 0)",
          backgroundSize: "28px 28px",
        }}
      />
      <div className="relative max-w-6xl mx-auto px-6 py-20 lg:py-28">
        <div className="max-w-2xl mx-auto text-center mb-14">
          <Eyebrow tone="light" className="mb-4">
            Why I can build this
          </Eyebrow>
          <h2 className="font-display font-700 text-2xl sm:text-3xl tracking-tight text-inkwell-900 leading-snug">
            By day I run the data and ML platform behind{" "}
            <a
              href="https://www.scale-marketing.com"
              target="_blank"
              rel="noopener noreferrer"
              className="underline decoration-inkwell-900/25 underline-offset-2 hover:decoration-violet-700 transition-colors duration-200"
            >
              Scale Marketing
            </a>
            &apos;s ad spend. MarketThis is what I wish my clients had.
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-y-14 md:gap-y-0">
          {credibilityStats.map((s, i) => (
            <div
              key={s.label}
              className={`text-center px-4 md:px-8 ${
                i > 0 ? "md:border-l md:border-inkwell-900/10" : ""
              }`}
            >
              <p className="font-display font-800 tracking-tight leading-[0.95] text-inkwell-900 text-6xl sm:text-7xl lg:text-8xl">
                {s.value}
              </p>
              <p className="mt-5 font-mono text-xs font-500 tracking-wide uppercase text-inkwell-500 max-w-[26ch] mx-auto leading-relaxed">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function StatusBadge({ status }) {
  const isLive = status === "Live";
  const dotClass = isLive ? "bg-emerald-400" : "bg-amber-400";
  const pingClass = isLive ? "bg-emerald-400" : "bg-amber-400";
  return (
    <span className="inline-flex items-center gap-1.5 font-mono text-[10px] font-500 tracking-wider uppercase text-white bg-black/45 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/10">
      <span className="relative flex w-1.5 h-1.5">
        <span className={`absolute inline-flex w-full h-full rounded-full ${pingClass} opacity-60 animate-ping`} />
        <span className={`relative inline-flex w-1.5 h-1.5 rounded-full ${dotClass}`} />
      </span>
      {status}
    </span>
  );
}

function SideProjectCard({ product, index }) {
  return (
    <article
      className="group bg-base-800/80 rounded-2xl border border-white/[0.08] overflow-hidden
                 transition-all duration-300 ease-out
                 hover:-translate-y-1 hover:shadow-2xl hover:shadow-black/40 hover:border-violet-400/35
                 animate-scale-in flex flex-col"
      style={{ animationDelay: `${index * 80}ms` }}
    >
      <div className="relative aspect-[16/9] overflow-hidden bg-base-900 border-b border-white/[0.06]">
        <img
          src={product.image}
          alt={`${product.title} screenshot`}
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover object-top
                     transition-transform duration-500 ease-out group-hover:scale-[1.03]"
        />
        <div className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-black/30 to-transparent pointer-events-none" />
        <div className="absolute top-4 right-4">
          <StatusBadge status={product.status} />
        </div>
      </div>

      <div className="p-5 flex flex-col flex-1">
        <div className="flex items-center gap-2 mb-2">
          <span className="font-mono text-[11px] font-500 tracking-wide uppercase text-violet-300 bg-violet-500/10 border border-violet-400/20 px-2 py-0.5 rounded-md">
            {product.category}
          </span>
        </div>
        <h3 className="font-display font-700 text-lg text-paper-50 mb-2 tracking-tight">
          {product.title}
        </h3>
        <p className="text-sm text-mist-300 leading-relaxed mb-4">
          {product.description}
        </p>

        <div className="flex flex-wrap items-center gap-1.5 mb-4">
          {product.stack.map((tech) => (
            <span
              key={tech}
              className="font-mono text-[10px] text-mist-400 bg-white/[0.04] border border-white/10 px-2 py-0.5 rounded"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex gap-6 pt-4 mt-auto border-t border-white/[0.07]">
          {product.metrics.map((m) => (
            <div key={m.label} className="min-w-0">
              <p className="font-display font-700 text-sm text-paper-50 leading-tight">
                {m.value}
              </p>
              <p className="font-mono text-[10px] uppercase tracking-wide text-mist-500 mt-0.5">
                {m.label}
              </p>
            </div>
          ))}
          <a
            href={product.url}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-auto inline-flex items-center gap-1 text-xs font-600 text-violet-300 hover:text-violet-200 transition-colors duration-200 self-center"
          >
            Open
            <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M7 17L17 7M17 7H7M17 7v10" />
            </svg>
          </a>
        </div>
      </div>
    </article>
  );
}

function AlsoBuilding() {
  return (
    <section id="also-building" className="max-w-6xl mx-auto px-6 pt-24 pb-24">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 mb-10">
        <div>
          <Eyebrow className="mb-2">Also shipped</Eyebrow>
          <h2 className="font-display font-700 text-2xl sm:text-3xl text-paper-50 tracking-tight">
            Two products I built and run end to end.
          </h2>
        </div>
        <p className="text-sm text-mist-400 max-w-md">
          Live and used by real people. ValidateThis runs rules across 10B+
          rows of production data.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {sideProjects.map((product, i) => (
          <SideProjectCard key={product.id} product={product} index={i} />
        ))}
      </div>
    </section>
  );
}

const spendRanges = ["$10K to $50K", "$50K to $200K", "$200K+"];

// Custom dropdown so the control matches the dark form. A native <select>
// renders an OS-styled popup that clashes with the card.
function SpendSelect({ value, onChange }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    if (!open) return;
    const onDoc = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    const onKey = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", onDoc);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDoc);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-labelledby="partner-spend-label"
        className={`w-full flex items-center justify-between gap-2 rounded-xl bg-white/5 border px-4 py-3 text-sm transition-colors duration-200 hover:bg-white/10 ${
          open ? "border-violet-400" : "border-white/15"
        } ${value ? "text-paper-50" : "text-mist-400"}`}
      >
        {value || "Select a range"}
        <svg
          className={`w-4 h-4 shrink-0 text-mist-400 transition-transform duration-200 ${
            open ? "rotate-180" : ""
          }`}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M6 9l6 6 6-6" />
        </svg>
      </button>
      {open && (
        <div
          role="listbox"
          aria-labelledby="partner-spend-label"
          className="absolute z-20 mt-2 w-full rounded-xl border border-white/10 bg-base-700 shadow-xl shadow-black/40 p-1"
        >
          {spendRanges.map((r) => (
            <button
              key={r}
              type="button"
              role="option"
              aria-selected={value === r}
              onClick={() => {
                onChange(r);
                setOpen(false);
              }}
              className={`w-full text-left text-sm px-3 py-2.5 rounded-lg transition-colors duration-200 ${
                value === r
                  ? "bg-violet-600 text-white"
                  : "text-paper-50/80 hover:bg-white/10 hover:text-paper-50"
              }`}
            >
              {r}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

function DesignPartners() {
  const [email, setEmail] = useState("");
  const [spend, setSpend] = useState("");

  const submit = (e) => {
    e.preventDefault();
    // Static site, no backend: compose a prefilled email to support@marketthis.io.
    // To capture asynchronously instead, point this at a Formspree/Tally endpoint
    // (swap window.location for a fetch POST, or set the form action + method).
    const subject = encodeURIComponent("MarketThis design partner");
    const body = encodeURIComponent(
      "I would like to explore becoming a MarketThis design partner.\n\n" +
        `Email: ${email}\n` +
        `Monthly ad spend: ${spend || "not specified"}\n`
    );
    window.location.href = `mailto:support@marketthis.io?subject=${subject}&body=${body}`;
  };

  return (
    <section id="partner" className="scroll-mt-24 max-w-6xl mx-auto px-6 py-24">
      <div className="relative rounded-3xl bg-base-800 border border-violet-400/20 px-6 py-14 sm:px-12 lg:px-16">
        <div
          aria-hidden="true"
          className="absolute inset-0 rounded-3xl overflow-hidden pointer-events-none"
        >
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(60% 85% at 88% 0%, rgba(138,95,255,0.22), transparent 70%), radial-gradient(45% 60% at 5% 100%, rgba(138,95,255,0.1), transparent 70%)",
            }}
          />
        </div>
        <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div>
            <Eyebrow className="mb-4">Design partners</Eyebrow>
            <h2 className="font-display font-800 text-3xl sm:text-4xl lg:text-5xl tracking-tight leading-[1.05] text-paper-50 mb-5">
              Onboarding a handful of design partners now.
            </h2>
            <p className="text-mist-300 leading-relaxed max-w-md">
              If you spend $10K to $200K a month on ads, you can help shape
              MarketThis and get the brand, site, and budget stack built around
              how you actually work. Tell me where you are and I will reach out.
            </p>
          </div>

          <form onSubmit={submit} className="flex flex-col gap-2">
            <label
              htmlFor="partner-email"
              className="font-mono text-[11px] font-500 tracking-[0.18em] uppercase text-violet-300"
            >
              Work email
            </label>
            <input
              id="partner-email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@company.com"
              className="w-full rounded-xl bg-white/5 border border-white/15 px-4 py-3 text-sm text-paper-50 placeholder:text-mist-500 focus:border-violet-400 focus:bg-white/10 outline-none transition-colors duration-200 mb-2"
            />
            <span
              id="partner-spend-label"
              className="font-mono text-[11px] font-500 tracking-[0.18em] uppercase text-violet-300"
            >
              Monthly ad spend
            </span>
            <SpendSelect value={spend} onChange={setSpend} />
            <button type="submit" className={`mt-4 ${primaryBtn}`}>
              Apply for design partner access
              <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </button>
            <p className="text-xs text-mist-400 mt-2">
              Opens your email client, prefilled. Goes straight to me.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="max-w-6xl mx-auto px-6 pb-24">
      <div className="border-t border-white/[0.07] pt-16">
        <Eyebrow className="mb-2">About</Eyebrow>
        <h2 className="font-display font-700 text-2xl sm:text-3xl text-paper-50 tracking-tight mb-10">
          The founder behind it.
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10 lg:gap-14 items-start">
          <div className="md:col-span-2">
            <div className="max-w-[280px]">
              <div className="relative w-full aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-violet-600/25 via-base-800 to-base-900 border border-white/10">
                {/* TODO: replace this monogram with a real headshot of Ed.
                    Add the image to src/assets, import it, and render:
                    <img src={portrait} alt="Ed Senay" loading="lazy" decoding="async"
                         className="absolute inset-0 w-full h-full object-cover object-center" /> */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="font-display font-800 text-7xl tracking-tight text-violet-400/80 select-none">
                    ES
                  </span>
                </div>
              </div>
              <div className="mt-5">
                <p className="font-display font-700 text-base text-paper-50">
                  Ed Senay
                </p>
                <p className="text-sm text-mist-400 mt-1 leading-relaxed">
                  Founder, MarketThis
                  <br />
                  Director of Data Operations, Scale Marketing
                  <br />
                  Chicago, IL
                </p>
              </div>
            </div>
          </div>

          <div className="md:col-span-3 flex flex-col gap-5">
            <p className="text-mist-200 leading-relaxed">
              I&apos;m building MarketThis because I watched the problem from
              the inside. By day I lead data operations at Scale Marketing, a
              media agency growing 20% YoY on $200M+ of annual ad spend. My
              team of engineers, ML scientists, and designers builds the
              pipelines, ML models, and platforms that make that work.
              Airflow, EKS, production media mix models, causal analysis, the
              full stack.
            </p>
            <p className="text-mist-200 leading-relaxed">
              The pattern I keep seeing: mid-market companies spending real
              money on ads with no infrastructure to brand, build, or act on
              what their data is telling them. They patch it together across
              five tools and a Notion doc. MarketThis is the stack I wish my
              clients had.
            </p>
            <p className="text-mist-200 leading-relaxed">
              I write about data operations, attribution, and shipping
              products on{" "}
              <a
                href="https://substack.com/@edsenaysanchez"
                target="_blank"
                rel="noopener noreferrer"
                className="text-violet-300 hover:text-violet-200 font-600 underline underline-offset-2 decoration-violet-400/40 hover:decoration-violet-300 transition-colors duration-200"
              >
                Substack
              </a>
              .
            </p>

            <div className="mt-3 p-5 rounded-xl bg-violet-500/[0.08] border border-violet-400/20">
              <p className="font-mono text-[11px] font-500 tracking-[0.18em] uppercase text-violet-300 mb-2">
                Currently
              </p>
              <p className="text-sm text-mist-200 leading-relaxed">
                Building MarketThis from zero as a data-ops founder. Open to
                advisory conversations on data ops, attribution, and ML at
                scale.
              </p>
            </div>

            <div id="contact" className="scroll-mt-24 mt-4">
              <a
                href="mailto:support@marketthis.io?subject=MarketThis"
                className={primaryBtn}
              >
                <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 01-2.06 0L2 7" />
                </svg>
                Email Ed
              </a>
            </div>

            <div className="flex flex-wrap gap-x-6 gap-y-2 mt-4">
              <a
                href="https://www.linkedin.com/in/ed-senay-sanchez-2049402b9/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-sm text-mist-400 hover:text-violet-300 transition-colors duration-200 py-1.5"
              >
                <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.063 2.063 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
                LinkedIn
              </a>
              <a
                href="https://substack.com/@edsenaysanchez"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-sm text-mist-400 hover:text-violet-300 transition-colors duration-200 py-1.5"
              >
                <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M22.539 8.242H1.46V5.406h21.08v2.836zM1.46 10.812V24L12 18.11 22.54 24V10.812H1.46zM22.54 0H1.46v2.836h21.08V0z" />
                </svg>
                Substack
              </a>
              <a
                href="https://github.com/esanche1"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-sm text-mist-400 hover:text-violet-300 transition-colors duration-200 py-1.5"
              >
                <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
                GitHub
              </a>
              <a
                href="mailto:support@marketthis.io"
                className="flex items-center gap-2.5 text-sm text-mist-400 hover:text-violet-300 transition-colors duration-200 py-1.5"
              >
                <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 01-2.06 0L2 7" />
                </svg>
                Email
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-white/[0.07] mt-12">
      <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3 flex-wrap justify-center">
          <span className="font-display font-800 text-sm tracking-tight text-paper-50">
            E<span className="text-violet-400">d</span> Senay
          </span>
          <span className="text-mist-500 text-xs">
            &middot; Building MarketThis &middot; Chicago, IL &middot; &copy; {year}
          </span>
        </div>
        <div className="flex items-center gap-6 flex-wrap justify-center">
          <a
            href="https://www.marketthis.io"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-600 text-violet-300 hover:text-violet-200 transition-colors duration-200"
          >
            MarketThis
          </a>
          <a
            href="https://www.linkedin.com/in/ed-senay-sanchez-2049402b9/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-mist-400 hover:text-violet-300 transition-colors duration-200"
          >
            LinkedIn
          </a>
          <a
            href="https://substack.com/@edsenaysanchez"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-mist-400 hover:text-violet-300 transition-colors duration-200"
          >
            Substack
          </a>
          <a
            href="https://github.com/esanche1"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-mist-400 hover:text-violet-300 transition-colors duration-200"
          >
            GitHub
          </a>
          <a
            href="mailto:support@marketthis.io"
            className="text-xs text-mist-400 hover:text-violet-300 transition-colors duration-200"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="min-h-screen overflow-x-clip">
      <Header />
      <Hero />
      <MarketThisSpotlight />
      <CredibilityBand />
      <AlsoBuilding />
      <DesignPartners />
      <About />
      <Footer />
    </div>
  );
}
