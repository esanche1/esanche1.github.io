import { useState } from "react";
import chiTixImg from "./assets/chitix.webp";
import validateThisImg from "./assets/validatethis.webp";
import heroRidgeImg from "./assets/hero-ridge.webp";
import ctaSummitImg from "./assets/cta-summit.webp";

// Fire a GA4 event when the gtag.js tag is present (loaded in index.html).
// Safe no-op locally or when analytics is blocked.
function track(name, params = {}) {
  if (typeof window !== "undefined" && typeof window.gtag === "function") {
    window.gtag("event", name, params);
  }
}

const sideProjects = [
  {
    id: 1,
    title: "ChiTix",
    description:
      "Tracks ticket prices across marketplaces for Chicago events. Pick a show, set a target, get a text when it drops.",
    category: "Consumer",
    status: "Live",
    image: chiTixImg,
    imageAlt:
      "ChiTix dashboard comparing Chicago event ticket prices across marketplaces.",
    url: "https://chitix-production.up.railway.app/",
    stack: ["Next.js", "TypeScript", "Drizzle", "Twilio"],
    metrics: [
      { label: "Events", value: "50+ live" },
      { label: "Marketplaces", value: "6 tracked" },
    ],
  },
  {
    id: 2,
    title: "ValidateThis.io",
    description:
      "Plain-English data validation. Upload a dataset, describe the rules, and Bedrock turns them into checks that run in seconds. Built and deployed end to end, Stripe billing included.",
    category: "Data Quality",
    status: "Deployed",
    image: validateThisImg,
    imageAlt:
      "ValidateThis landing page for the plain-English data validation platform.",
    url: "https://www.validatethis.io",
    stack: ["Bedrock", "FastAPI", "React", "Stripe"],
    metrics: [
      { label: "Rules", value: "Plain English" },
      { label: "Infra", value: "AWS serverless" },
    ],
  },
];

const marketThisFeatures = [
  {
    label: "Signals",
    title: "BUY / HOLD / SELL, from a model.",
    description:
      "An attribution model fitted to your spend history prices every channel nightly: response curves, carryover, confidence scores. When it can't be confident yet, it says so.",
    icon: (
      <svg className="w-4.5 h-4.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M3 17l6-6 4 4 8-8" />
        <path d="M15 7h6v6" />
      </svg>
    ),
  },
  {
    label: "Chat",
    title: "Ask in plain language.",
    description:
      "An MCP server puts your portfolio in Claude, ChatGPT, or Cursor: 20 tools your AI can call to read performance and propose budget moves, backed by the model's signals.",
    icon: (
      <svg className="w-4.5 h-4.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M4 17l6-5-6-5" />
        <path d="M12 19h8" />
      </svg>
    ),
  },
  {
    label: "Approval",
    title: "Nothing executes without you.",
    description:
      "Every proposal lands with current vs. proposed and the rationale. One click to approve, and MarketThis pushes the change via your connected OAuth. Zero moves auto-executed.",
    icon: (
      <svg className="w-4.5 h-4.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 3l7 3v5c0 4.6-3 7.7-7 9-4-1.3-7-4.4-7-9V6l7-3z" />
        <path d="M9 12l2 2 4-4" />
      </svg>
    ),
  },
];

const deskFacts = [
  { value: "$300/mo", label: "Starting price, no retainer" },
  { value: "0", label: "Changes auto-executed" },
  { value: "1-click", label: "To approve a budget move" },
  { value: "20", label: "Tools your AI can call" },
];

const navLinks = [
  { href: "#marketthis", label: "MarketThis" },
  { href: "#also-building", label: "Also Shipped" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

const isExternal = (href) => /^https?:\/\//.test(href);
const externalProps = (href) =>
  isExternal(href)
    ? { target: "_blank", rel: "noopener noreferrer" }
    : {};

const primaryBtn =
  "inline-flex items-center justify-center gap-2 text-sm font-600 text-white bg-blue-600 hover:bg-blue-700 px-5 py-3 rounded-lg shadow-lg shadow-blue-600/25 hover:shadow-blue-600/35 transition-all duration-200";
const secondaryBtn =
  "inline-flex items-center justify-center gap-2 text-sm font-600 text-paper-50 bg-white/[0.04] hover:bg-white/[0.09] border border-white/15 hover:border-white/25 px-5 py-3 rounded-lg transition-colors duration-200";

const MARKETTHIS_URL = "https://www.marketthis.io";
const mtUrl = (placement, content, path = "/") =>
  `${MARKETTHIS_URL}${path}?utm_source=portfolio&utm_medium=referral&utm_campaign=founder_site&utm_content=${placement}_${content}`;

// The live MarketThis product is self-serve. Every product CTA on this page drives
// there (the /plan lead magnet or the /demo walkthrough) with UTMs + a GA4 outbound
// event so the handoff is measurable, and shared so the hero, spotlight, and closing
// band never drift apart.
function ProductCtas({ placement, align = "left", className = "" }) {
  return (
    <div className={`flex flex-col ${align === "center" ? "items-center" : ""} ${className}`}>
      <div className="flex flex-col sm:flex-row gap-3">
        <a
          href={mtUrl(placement, "plan_first_month", "/plan")}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => track("open_marketthis", { placement, cta: "plan_first_month" })}
          className={primaryBtn}
        >
          Plan my first month
          <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
            <path d="M7 17L17 7M17 7H7M17 7v10" />
          </svg>
        </a>
        <a
          href={mtUrl(placement, "live_demo", "/demo")}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => track("open_marketthis", { placement, cta: "live_demo" })}
          className={secondaryBtn}
        >
          See the live demo
        </a>
      </div>
      <p className="mt-3 text-sm font-500 text-mist-400">
        Free 30-second plan, no signup. 14-day trial, cancel anytime.
      </p>
    </div>
  );
}

function Eyebrow({ children, tone = "dark", className = "" }) {
  const toneClass =
    tone === "dark" ? "text-blue-300" : "text-blue-700";
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
          className="font-display font-800 text-lg text-paper-50 cursor-pointer"
        >
          Ed Senay
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
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              {menuOpen ? (
                <path d="M6 6l12 12M6 18L18 6" />
              ) : (
                <path d="M4 7h16M4 12h16M4 17h16" />
              )}
            </svg>
          </button>
          <a
            href={mtUrl("header", "plan_first_month", "/plan")}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() =>
              track("open_marketthis", { placement: "header", cta: "plan_first_month" })
            }
            className="text-sm font-600 text-white bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg shadow-lg shadow-blue-600/20 transition-all duration-200"
          >
            <span className="sm:hidden">Get my plan</span>
            <span className="hidden sm:inline">Plan my first month</span>
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
                className="text-sm font-500 text-mist-200 hover:text-blue-300 py-2 transition-colors duration-200"
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

// A hand-built rendering of the same approval flow the live product demos on its
// homepage: Claude proposes a budget move over MCP, the human approves, MarketThis
// pushes it. Crisp at every viewport, unlike a scaled-down screenshot.
function HeroMock() {
  return (
    <a
      href={mtUrl("hero_mock", "live_demo", "/demo")}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="See the live MarketThis demo: Claude proposes a budget move, you approve it"
      onClick={() => track("open_marketthis", { placement: "hero_mock", cta: "live_demo" })}
      className="block relative group"
    >
      <div
        aria-hidden="true"
        className="absolute -inset-6 rounded-full bg-blue-500/15 blur-3xl opacity-70 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
      />
      <div className="relative rounded-xl overflow-hidden border border-white/15 bg-base-900/95 shadow-2xl shadow-black/50 ring-1 ring-blue-400/10 group-hover:ring-blue-400/30 group-hover:border-white/25 transition-all duration-300">
        <div className="flex items-center gap-2 px-4 py-3 border-b border-white/[0.07] bg-white/[0.03]">
          <span aria-hidden="true" className="flex gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-white/15" />
            <span className="w-2.5 h-2.5 rounded-full bg-white/15" />
            <span className="w-2.5 h-2.5 rounded-full bg-white/15" />
          </span>
          <span className="ml-1 font-mono text-xs text-mist-400">
            claude &middot; marketthis mcp
          </span>
          <span className="ml-auto font-mono text-[10px] font-500 tracking-wider uppercase text-amber-300 bg-amber-400/10 border border-amber-400/25 px-2 py-0.5 rounded-full">
            1 pending
          </span>
        </div>

        <div className="p-4 sm:p-5 font-mono text-xs sm:text-[13px] leading-relaxed">
          <p className="text-mist-200">
            <span className="text-mist-500">&gt;</span> CAC on Meta is climbing.
            Shift $200/wk to TikTok while ROAS holds.
          </p>
          <p className="mt-3 text-blue-300 break-words">
            propose_budget_change(
            <span className="text-paper-50">&quot;meta-prospecting&quot;</span>,{" "}
            <span className="text-paper-50">&quot;tiktok-creator&quot;</span>, 200)
          </p>

          <div className="mt-4 flex flex-col gap-2">
            <div className="flex items-center gap-2.5 rounded-lg border border-red-400/20 bg-red-400/[0.06] px-3 py-2.5">
              <span className="font-600 text-[10px] tracking-wider text-red-300 bg-red-400/15 border border-red-400/30 px-1.5 py-0.5 rounded">
                SELL
              </span>
              <span className="text-paper-50 font-500 truncate">Meta Prospecting</span>
              <span className="hidden sm:inline text-mist-500">2.1x</span>
              <span className="ml-auto hidden sm:inline text-mist-400 whitespace-nowrap">
                $1,200 <span className="text-mist-500">&rarr;</span> $1,000
              </span>
              <span className="ml-auto sm:ml-0 text-red-300 whitespace-nowrap">-$200</span>
            </div>
            <div className="flex items-center gap-2.5 rounded-lg border border-emerald-400/20 bg-emerald-400/[0.06] px-3 py-2.5">
              <span className="font-600 text-[10px] tracking-wider text-emerald-300 bg-emerald-400/15 border border-emerald-400/30 px-1.5 py-0.5 rounded">
                BUY
              </span>
              <span className="text-paper-50 font-500 truncate">TikTok Creator</span>
              <span className="hidden sm:inline text-mist-500">4.3x</span>
              <span className="ml-auto hidden sm:inline text-mist-400 whitespace-nowrap">
                $800 <span className="text-mist-500">&rarr;</span> $1,000
              </span>
              <span className="ml-auto sm:ml-0 text-emerald-300 whitespace-nowrap">+$200</span>
            </div>
          </div>

          <div className="mt-4 flex gap-2 font-body">
            <span className="flex-1 text-center text-xs font-600 text-white bg-blue-600 group-hover:bg-blue-500 px-3 py-2 rounded-md transition-colors duration-200">
              Approve &amp; push
            </span>
            <span className="text-center text-xs font-600 text-mist-300 border border-white/15 px-4 py-2 rounded-md">
              Reject
            </span>
          </div>
        </div>
      </div>
      <p className="mt-4 text-center font-mono text-[11px] leading-relaxed text-mist-500">
        The AI proposes. You approve. MarketThis pushes it via your connected OAuth.
      </p>
    </a>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Generated brand backdrop: market chart lines rendered as a mountain ridge.
          Scrims keep the headline column at full contrast and fade the image into
          the base surface before the next section starts. */}
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none select-none">
        <img
          src={heroRidgeImg}
          alt=""
          width={2400}
          height={1019}
          fetchPriority="high"
          decoding="async"
          className="absolute inset-0 w-full h-full object-cover object-bottom"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-base-950/90 via-base-950/45 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-base-950/70 via-transparent to-base-950/80" />
      </div>
      <div className="relative max-w-6xl mx-auto px-6 pt-16 lg:pt-24 pb-20 lg:pb-28 animate-fade-up">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          <div className="lg:col-span-6">
            <Eyebrow className="mb-5">The marketing trading desk</Eyebrow>
            <h1 className="font-display font-800 text-balance text-4xl sm:text-6xl leading-[1.02] sm:leading-[0.98] text-paper-50 mb-6">
              Your ad budget is a portfolio.{" "}
              <span className="text-blue-300">
                MarketThis is the trading desk.
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-mist-300 leading-relaxed max-w-xl mb-4">
              An attribution model fitted to your real spend prices every
              channel: P&amp;L, BUY / HOLD / SELL signals, and budget moves you
              push with one click from Claude, ChatGPT, or Cursor. You approve
              every move.
            </p>
            <p className="text-sm text-mist-400 leading-relaxed max-w-xl mb-8">
              The work of a $5-15K/mo agency, from $300/mo. No retainer, no
              six-month contract, no dashboards you stop opening.
            </p>

            <ProductCtas placement="hero" />

            <p className="mt-6 text-sm font-500 text-mist-400">
              I&apos;m Ed Senay, building MarketThis. I run the data and ML
              platform behind{" "}
              <span className="font-700 text-paper-50">$200M+/yr</span> in ad
              spend at Scale Marketing.
            </p>
          </div>

          <div className="lg:col-span-6 max-w-[560px] mx-auto lg:max-w-none w-full">
            <HeroMock />
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
      <div className="relative max-w-6xl mx-auto px-6 py-24 lg:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start mb-14">
          <div className="lg:col-span-8 max-w-3xl">
            <Eyebrow className="mb-4">What I&apos;m building</Eyebrow>
            <h2 className="font-display font-800 text-balance text-4xl sm:text-5xl lg:text-6xl leading-[1.02] text-paper-50 mb-6">
              Agency-grade analysis,{" "}
              <span className="text-blue-300">run like a trading desk</span>.
            </h2>
            <p className="text-lg text-mist-300 leading-relaxed">
              Teams spending $10K to $200K a month on paid either fly blind or
              pay a $5-15K/mo retainer. MarketThis replaces both: a real
              attribution model prices every channel, your AI proposes the
              moves, and nothing ships until you approve it.
            </p>
          </div>
          <dl className="lg:col-span-4 grid grid-cols-2 gap-px rounded-lg overflow-hidden border border-white/[0.08] bg-white/[0.06]">
            {deskFacts.map((fact) => (
              <div key={fact.label} className="flex flex-col bg-base-900 p-4 lg:p-5">
                <dt className="order-2 font-mono text-[10px] font-500 tracking-wide uppercase text-mist-400 leading-relaxed">
                  {fact.label}
                </dt>
                <dd className="order-1 font-display font-700 text-2xl text-paper-50 mb-1.5">
                  {fact.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6 mb-12">
          {marketThisFeatures.map((f, i) => (
            <div
              key={f.label}
              className="group relative p-6 lg:p-7 rounded-lg bg-base-800/80 border border-white/[0.08] hover:border-blue-400/35 hover:bg-base-800 transition-colors duration-300 animate-fade-up"
              style={{ animationDelay: `${i * 80}ms` }}
            >
              <div
                aria-hidden="true"
                className="absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-blue-400/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              />
              <div className="flex items-center justify-between mb-4">
                <span className="flex items-center justify-center w-9 h-9 rounded-md text-blue-300 bg-blue-500/10 border border-blue-400/20 group-hover:bg-blue-500/15 transition-colors duration-300">
                  {f.icon}
                </span>
                <p className="font-mono text-[11px] font-500 tracking-[0.18em] uppercase text-blue-300">
                  <span className="text-mist-400">0{i + 1} /</span> {f.label}
                </p>
              </div>
              <h3 className="font-display font-700 text-xl text-paper-50 mb-2">
                {f.title}
              </h3>
              <p className="text-sm text-mist-300 leading-relaxed">
                {f.description}
              </p>
            </div>
          ))}
        </div>

        <ProductCtas placement="spotlight" />
      </div>
    </section>
  );
}

const credibilityStats = [
  { value: "$200M+", label: "Annual ad spend guided by my team's data and ML platform" },
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
          <h2 className="font-display font-700 text-balance text-2xl sm:text-3xl text-inkwell-900 leading-snug">
            By day I run the data and ML platform behind{" "}
            <a
              href="https://www.scale-marketing.com"
              target="_blank"
              rel="noopener noreferrer"
              className="underline decoration-inkwell-900/25 underline-offset-2 hover:decoration-blue-700 transition-colors duration-200"
            >
              Scale Marketing
            </a>
            &apos;s ad spend. MarketThis is that machinery, rebuilt as a
            trading desk any team can run from $300 a month.
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
              <p className="font-display font-800 leading-[0.95] tracking-tight text-inkwell-900 text-5xl sm:text-6xl lg:text-7xl">
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
      className="group bg-base-800/80 rounded-lg border border-white/[0.08] overflow-hidden
                 transition-all duration-300 ease-out
                 hover:-translate-y-1 hover:shadow-2xl hover:shadow-black/40 hover:border-blue-400/35
                 animate-scale-in flex flex-col"
      style={{ animationDelay: `${index * 80}ms` }}
    >
      <div className="relative aspect-[16/9] overflow-hidden bg-base-900 border-b border-white/[0.06]">
        <img
          src={product.image}
          alt={product.imageAlt || `${product.title} screenshot`}
          width={1440}
          height={960}
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover object-top
                     transition-transform duration-500 ease-out group-hover:scale-[1.03]"
        />
        <div className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-black/15 to-transparent pointer-events-none" />
        <div className="absolute top-4 right-4">
          <StatusBadge status={product.status} />
        </div>
      </div>

      <div className="p-5 flex flex-col flex-1">
        <div className="flex items-center gap-2 mb-2">
          <span className="font-mono text-[11px] font-500 tracking-wide uppercase text-blue-300 bg-blue-500/10 border border-blue-400/20 px-2 py-0.5 rounded-md">
            {product.category}
          </span>
        </div>
        <h3 className="font-display font-700 text-lg text-paper-50 mb-2">
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
              <p className="font-mono text-[10px] uppercase tracking-wide text-mist-400 mt-0.5">
                {m.label}
              </p>
            </div>
          ))}
          <a
            href={product.url}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => track("open_side_project", { project: product.title })}
            className="ml-auto inline-flex items-center gap-1 text-xs font-600 text-blue-300 hover:text-blue-200 transition-colors duration-200 self-center"
          >
            Open
            <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
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
          <h2 className="font-display font-700 text-2xl sm:text-3xl text-paper-50">
            Two products I built end to end.
          </h2>
        </div>
        <p className="text-sm text-mist-400 max-w-md">
          ChiTix is live and tracking prices today. ValidateThis, a
          plain-English data validation SaaS, is built and deployed, parked
          while MarketThis gets the focus.
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

function GetStarted() {
  return (
    <section id="get-started" className="scroll-mt-24 max-w-6xl mx-auto px-6 py-24">
      <div className="relative overflow-hidden rounded-lg bg-base-900 border border-blue-400/25 px-6 py-16 sm:px-12 lg:px-16 text-center">
        {/* Same generated shoot as the hero: one lit summit, centered under the
            headline. The scrim holds contrast for the centered copy and buttons. */}
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none select-none">
          <img
            src={ctaSummitImg}
            alt=""
            width={1800}
            height={764}
            loading="lazy"
            decoding="async"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-base-950/85 via-base-950/45 to-base-950/85" />
        </div>
        <div className="relative">
          <Eyebrow className="mb-4">Get started</Eyebrow>
          <h2 className="font-display font-800 text-balance text-3xl sm:text-4xl lg:text-5xl leading-[1.05] text-paper-50 mb-5 max-w-2xl mx-auto">
            Get a first-month ad plan in{" "}
            <span className="text-blue-300">30 seconds</span>.
          </h2>
          <p className="text-mist-300 leading-relaxed max-w-lg mx-auto mb-8">
            Generate a free plan, no signup: where to spend, what to bid, what
            to post. Then connect your ad accounts and the desk prices your
            real channels: P&amp;L, BUY / HOLD / SELL, one-click budget moves.
          </p>
          <ProductCtas placement="cta_band" align="center" />
          <p className="mt-4 text-sm text-mist-400">
            The full desk starts at $300/mo. No retainer.
          </p>
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
        <h2 className="font-display font-700 text-2xl sm:text-3xl text-paper-50 mb-10">
          The founder behind it.
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10 lg:gap-14 items-start">
          <div className="md:col-span-2">
            <div className="max-w-[280px]">
              <div className="relative w-full aspect-square rounded-lg overflow-hidden bg-base-900 border border-white/10">
                {/* TODO: replace this monogram with a real headshot of Ed.
                    Add the image to src/assets, import it, and render:
                    <img src={portrait} alt="Ed Senay" loading="lazy" decoding="async"
                         className="absolute inset-0 w-full h-full object-cover object-center" /> */}
                <img
                  src={heroRidgeImg}
                  alt=""
                  aria-hidden="true"
                  loading="lazy"
                  decoding="async"
                  className="absolute inset-0 w-full h-full object-cover object-[70%_85%] opacity-70"
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-t from-base-950/85 via-base-950/35 to-base-950/55"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="font-display font-800 text-7xl text-blue-400/80 select-none">
                    ES
                  </span>
                </div>
                <span className="absolute bottom-4 left-4 font-mono text-[10px] font-500 tracking-[0.18em] uppercase text-mist-400">
                  Chicago, IL
                </span>
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
              The pattern I keep seeing: founders who can ship a product but
              have no marketing playbook, and companies with real ad budgets
              and no infrastructure to act on what their data is telling them.
              They patch it together across five tools and a Notion doc.
              MarketThis is the desk I wish they all had.
            </p>
            <div className="mt-3 p-5 rounded-lg bg-blue-500/[0.08] border border-blue-400/20">
              <p className="font-mono text-[11px] font-500 tracking-[0.18em] uppercase text-blue-300 mb-2">
                Currently
              </p>
              <p className="text-sm text-mist-200 leading-relaxed">
                Building MarketThis from zero as a data-ops founder. It gets
                my focus. ChiTix and ValidateThis run themselves. Open to
                advisory conversations on data ops, attribution, and ML at
                scale.
              </p>
            </div>

            <div id="contact" className="scroll-mt-24 mt-4">
              <p className="font-mono text-[11px] font-500 tracking-[0.18em] uppercase text-blue-300 mb-2">
                Contact
              </p>
              <p className="text-sm text-mist-300 leading-relaxed mb-4">
                Advisory, investing, or product questions. Email is fastest.
              </p>
              <a
                href="mailto:support@marketthis.io?subject=MarketThis"
                className={primaryBtn}
                onClick={() => track("contact_email", { location: "email_ed" })}
              >
                <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 01-2.06 0L2 7" />
                </svg>
                Email Ed
              </a>

              <div className="flex flex-wrap gap-x-6 gap-y-2 mt-6">
              <a
                href="https://www.linkedin.com/in/ed-senay-sanchez-2049402b9/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-sm text-mist-400 hover:text-blue-300 transition-colors duration-200 py-1.5"
              >
                <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.063 2.063 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
                LinkedIn
              </a>
              <a
                href="https://github.com/esanche1"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-sm text-mist-400 hover:text-blue-300 transition-colors duration-200 py-1.5"
              >
                <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
                GitHub
              </a>
              <a
                href="mailto:support@marketthis.io"
                className="flex items-center gap-2.5 text-sm text-mist-400 hover:text-blue-300 transition-colors duration-200 py-1.5"
                onClick={() => track("contact_email", { location: "about_links" })}
              >
                <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 01-2.06 0L2 7" />
                </svg>
                Email
              </a>
              </div>
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
          <span className="font-display font-800 text-sm text-paper-50">
            Ed Senay
          </span>
          <span className="text-mist-400 text-xs">
            &middot; Building MarketThis &middot; Chicago, IL &middot; &copy; {year}
          </span>
        </div>
        <div className="flex items-center gap-6 flex-wrap justify-center">
          <a
            href="https://www.marketthis.io"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-600 text-blue-300 hover:text-blue-200 transition-colors duration-200"
          >
            MarketThis
          </a>
          <a
            href="https://www.linkedin.com/in/ed-senay-sanchez-2049402b9/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-mist-400 hover:text-blue-300 transition-colors duration-200"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/esanche1"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-mist-400 hover:text-blue-300 transition-colors duration-200"
          >
            GitHub
          </a>
          <a
            href="mailto:support@marketthis.io"
            className="text-xs text-mist-400 hover:text-blue-300 transition-colors duration-200"
            onClick={() => track("contact_email", { location: "footer" })}
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
      <GetStarted />
      <AlsoBuilding />
      <About />
      <Footer />
    </div>
  );
}
