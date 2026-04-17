import { useState } from "react";
import marketThisImg from "./assets/marketthis.webp";
import chiTixImg from "./assets/chitix.webp";
import validateThisImg from "./assets/validatethis.webp";

const products = [
  {
    id: 1,
    title: "MarketThis.io",
    description:
      "Built for companies spending $10K to $200K/mo on ads. Connect your ad accounts and see what's working, what's not, and where to move budget. Handles attribution, signals, and budget moves so you're not bouncing between five tabs.",
    category: "Marketing",
    status: "Beta",
    image: marketThisImg,
    url: "https://www.marketthis.io",
    stack: ["React", "Vite", "TypeScript", "Tailwind v4", "FastAPI", "SQLModel", "Alembic", "Railway"],
    metrics: [
      { label: "Stage", value: "Beta" },
      { label: "Target Spend", value: "$10K–$200K/mo" },
      { label: "Ad Platforms", value: "4 connected" },
    ],
  },
  {
    id: 2,
    title: "ChiTix",
    description:
      "Tracks ticket prices across marketplaces and social media for Chicago events. Pick a show, set a target price, and get a text when it drops. Built after overpaying for concert tickets one too many times.",
    category: "Consumer",
    status: "Live",
    image: chiTixImg,
    url: "https://chitix-production.up.railway.app/",
    stack: ["Next.js", "TypeScript", "Drizzle ORM", "Twilio", "Docker", "Web Scraping"],
    metrics: [
      { label: "Events Live", value: "50+ today" },
      { label: "Marketplaces", value: "6 tracked" },
      { label: "Alerts", value: "SMS, real-time" },
    ],
  },
  {
    id: 3,
    title: "ValidateThis.io",
    description:
      "Catches bad data before it causes problems. Works across databases, APIs, spreadsheets, and CRMs. Set up rules that flag and fix errors automatically. Connects to Postgres, Snowflake, Salesforce, or just a CSV upload.",
    category: "Data",
    status: "Live",
    image: validateThisImg,
    url: "https://www.validatethis.io",
    stack: ["Next.js", "TypeScript", "PostgreSQL", "AI Rules Engine", "REST API"],
    metrics: [
      { label: "Rows Validated", value: "10B+" },
      { label: "Accuracy", value: "97.4%" },
      { label: "Teams", value: "20+" },
    ],
  },
];

const navLinks = [
  { href: "#work", label: "Products" },
  { href: "#about", label: "About" },
  { href: "https://github.com/esanche1", label: "GitHub" },
];

const isExternal = (href) => /^https?:\/\//.test(href);
const externalProps = (href) =>
  isExternal(href)
    ? { target: "_blank", rel: "noopener noreferrer" }
    : {};

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const scrollToTop = () =>
    window.scrollTo({ top: 0, behavior: "smooth" });
  const navLinkClass =
    "text-sm font-500 text-ink-400 hover:text-ink-900 transition-colors duration-200";

  return (
    <header className="sticky top-0 z-50 bg-warm-50/80 backdrop-blur-xl border-b border-warm-200/60">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <button
          type="button"
          onClick={scrollToTop}
          className="font-display font-800 text-lg tracking-tight text-ink-900 cursor-pointer"
        >
          E<span className="text-purple-500">.</span> Senay-Sanchez
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
            className="sm:hidden p-2 -mr-2 rounded-lg text-ink-700 hover:bg-warm-100 transition-colors duration-200 cursor-pointer"
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
            href="mailto:edcsanchez@yahoo.com"
            className="text-sm font-600 text-white bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded-lg transition-colors duration-200"
          >
            Get in Touch
          </a>
        </div>
      </div>
      {menuOpen && (
        <nav
          id="mobile-nav"
          className="sm:hidden border-t border-warm-200/60 bg-warm-50/95 backdrop-blur-xl"
        >
          <div className="max-w-6xl mx-auto px-6 py-4 flex flex-col gap-1">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setMenuOpen(false)}
                className="text-sm font-500 text-ink-700 hover:text-purple-600 py-2 transition-colors duration-200"
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

const stats = [
  { value: "$200M+", label: "Ad spend managed annually" },
  { value: "20%", label: "Year-over-year growth driven" },
  { value: "3", label: "Products shipped solo" },
];

function StatBand() {
  return (
    <section className="relative overflow-hidden bg-ink-900 text-white">
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(55% 75% at 50% 50%, rgba(155,109,255,0.28), transparent 70%)",
        }}
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.06] pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
          backgroundSize: "28px 28px",
        }}
      />
      <div className="relative max-w-6xl mx-auto px-6 py-20 lg:py-28">
        <p className="text-[11px] font-600 tracking-[0.22em] uppercase text-purple-300 mb-12 text-center">
          By the numbers
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-y-14 md:gap-y-0">
          {stats.map((s, i) => (
            <div
              key={s.label}
              className={`text-center px-4 md:px-8 ${
                i > 0 ? "md:border-l md:border-white/10" : ""
              }`}
            >
              <p className="font-display font-800 tracking-tight leading-[0.95] bg-gradient-to-b from-white to-purple-200 bg-clip-text text-transparent text-6xl sm:text-7xl lg:text-8xl">
                {s.value}
              </p>
              <p className="mt-5 text-sm font-500 tracking-wide text-ink-300 max-w-[22ch] mx-auto">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Hero() {
  return (
    <section className="max-w-6xl mx-auto px-6 pt-24 pb-20 animate-fade-up">
      <div className="max-w-2xl">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-purple-50 border border-purple-100 mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-purple-500 animate-pulse" />
          <span className="text-xs font-600 text-purple-700 tracking-wide uppercase">
            Product Portfolio
          </span>
        </div>
        <h1 className="font-display font-800 text-5xl sm:text-6xl lg:text-7xl tracking-tight leading-[1.05] text-ink-900 mb-6">
          Data leader
          <br />
          by day. <span className="text-purple-500">Building</span>
          <br />
          <span className="text-purple-500">products</span> at night.
        </h1>
        <p className="text-lg text-ink-500 leading-relaxed max-w-lg">
          Director of Data Operations at a $200M+ media agency. I lead a team
          of engineers, ML scientists, and designers building the pipelines,
          models, and platforms that power 20% YoY growth. Nights and weekends
          I ship my own products.
        </p>
      </div>
    </section>
  );
}

const cleanHost = (url) =>
  url.replace(/^https?:\/\/(www\.)?/, "").replace(/\/.*$/, "");

function WorkMasthead() {
  return (
    <div className="max-w-6xl mx-auto px-6 mb-16 md:mb-24">
      <div className="flex items-baseline justify-between border-t border-ink-900/90 pt-5">
        <span className="text-[11px] font-600 tracking-[0.3em] uppercase text-ink-700 tabular-nums">
          Selected Work — Vol. 01
        </span>
        <span className="text-[11px] font-500 tracking-[0.22em] uppercase text-ink-400 tabular-nums">
          Three Titles · 2024–2025
        </span>
      </div>
      <div className="mt-10 grid grid-cols-12 items-end gap-x-8 gap-y-8">
        <h2 className="col-span-12 md:col-span-8 font-display font-800 tracking-[-0.045em] leading-[0.86] text-ink-900 text-6xl sm:text-7xl lg:text-[8.5rem]">
          After<br />
          Hours<span className="text-purple-500">.</span>
        </h2>
        <p className="col-span-12 md:col-span-4 text-[15px] leading-relaxed text-ink-500 md:pb-3 max-w-xs md:ml-auto">
          A short archive of products shipped solo, after the day job. One cover feature — two in support.
        </p>
      </div>
    </div>
  );
}

function FeatureCaseStudy({ product }) {
  const host = cleanHost(product.url);
  return (
    <article className="relative mb-24 md:mb-32 animate-fade-up">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-baseline justify-between border-t border-ink-900/90 pt-5 mb-10">
          <span className="text-[11px] font-600 tracking-[0.3em] uppercase text-ink-700 tabular-nums">
            № 01 — Cover Feature
          </span>
          <span className="text-[11px] font-500 tracking-[0.22em] uppercase text-ink-400">
            {product.category} / {product.status}
          </span>
        </div>
      </div>

      <div className="mx-auto w-full max-w-[1600px] px-4 md:px-10">
        <a
          href={product.url}
          target="_blank"
          rel="noopener noreferrer"
          className="group block"
          aria-label={`Visit ${product.title}`}
        >
          <div className="relative aspect-[16/9] overflow-hidden rounded-sm bg-ink-900 shadow-[0_40px_100px_-30px_rgba(26,22,37,0.4)]">
            <img
              src={product.image}
              alt={`${product.title} product screenshot`}
              className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-[900ms] ease-out group-hover:scale-[1.02]"
            />
            <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-black/20 to-transparent pointer-events-none" />
            <div className="absolute bottom-5 left-5 right-5 flex items-baseline justify-between text-white/80 text-[10px] font-500 tracking-[0.3em] uppercase">
              <span className="tabular-nums">{product.title}</span>
              <span className="hidden sm:inline opacity-60 tabular-nums">
                {host} ↗
              </span>
            </div>
          </div>
        </a>
      </div>

      <div className="max-w-6xl mx-auto px-6 mt-12 md:mt-20">
        <div className="grid grid-cols-12 gap-x-8 gap-y-12">
          <div className="col-span-12 md:col-span-7">
            <h3 className="font-display font-800 tracking-[-0.035em] leading-[0.95] text-ink-900 text-5xl sm:text-6xl lg:text-[5.5rem]">
              {product.title.replace(".io", "")}
              <span className="text-ink-300">.io</span>
            </h3>
            <p className="mt-8 text-[17px] leading-[1.7] text-ink-700 max-w-xl first-letter:font-display first-letter:font-800 first-letter:text-[4.5rem] first-letter:leading-[0.82] first-letter:text-purple-500 first-letter:float-left first-letter:mr-3 first-letter:mt-1.5">
              {product.description}
            </p>
            <a
              href={product.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-10 text-sm font-600 tracking-wide text-ink-900 border-b border-ink-900 pb-1 hover:text-purple-600 hover:border-purple-600 transition-colors duration-200"
            >
              Continue on {host}
              <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M7 17L17 7M17 7H7M17 7v10" />
              </svg>
            </a>
          </div>

          <aside className="col-span-12 md:col-span-4 md:col-start-9">
            <p className="text-[10px] font-600 tracking-[0.3em] uppercase text-ink-400 mb-4">
              Data Sheet
            </p>
            <dl className="border-t border-ink-900/80">
              {product.metrics.map((m) => (
                <div
                  key={m.label}
                  className="flex items-baseline justify-between gap-4 border-b border-warm-200 py-3.5"
                >
                  <dt className="text-[10px] font-600 tracking-[0.2em] uppercase text-ink-400">
                    {m.label}
                  </dt>
                  <dd className="font-display font-700 text-ink-900 text-[15px] tabular-nums text-right">
                    {m.value}
                  </dd>
                </div>
              ))}
            </dl>

            <div className="mt-8">
              <p className="text-[10px] font-600 tracking-[0.3em] uppercase text-ink-400 mb-3">
                Built With
              </p>
              <p className="text-[13px] text-ink-700 leading-[1.9]">
                {product.stack.map((t, i) => (
                  <span key={t}>
                    {i > 0 && <span className="text-ink-300 mx-1.5">·</span>}
                    {t}
                  </span>
                ))}
              </p>
            </div>
          </aside>
        </div>
      </div>
    </article>
  );
}

function SupportingItem({ product, index }) {
  const isSecond = index === 1;
  const host = cleanHost(product.url);
  return (
    <article
      className={`col-span-12 md:col-span-6 group ${isSecond ? "md:mt-20" : ""}`}
    >
      <div className="flex items-baseline justify-between mb-5">
        <span className="font-display font-800 text-ink-300 text-[3.25rem] leading-none tabular-nums tracking-[-0.04em]">
          {String(index + 2).padStart(2, "0")}
        </span>
        <span className="text-[10px] font-600 tracking-[0.3em] uppercase text-ink-400">
          {product.category} · {product.status}
        </span>
      </div>

      <a
        href={product.url}
        target="_blank"
        rel="noopener noreferrer"
        className="block"
        aria-label={`Visit ${product.title}`}
      >
        <div className="relative aspect-[4/3] overflow-hidden bg-ink-900 rounded-sm transition-shadow duration-500 group-hover:shadow-[0_24px_60px_-20px_rgba(26,22,37,0.3)]">
          <img
            src={product.image}
            alt={`${product.title} product screenshot`}
            loading="lazy"
            className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-[900ms] ease-out group-hover:scale-[1.03]"
          />
        </div>
      </a>

      <div className="mt-6">
        <h3 className="font-display font-700 text-3xl text-ink-900 tracking-[-0.02em]">
          {product.title}
        </h3>
        <p className="mt-3 text-[14px] leading-[1.65] text-ink-500 max-w-md">
          {product.description}
        </p>

        <dl className="mt-6 flex flex-wrap gap-x-8 gap-y-3 border-t border-warm-200 pt-5">
          {product.metrics.map((m) => (
            <div key={m.label}>
              <dt className="text-[9px] font-600 tracking-[0.22em] uppercase text-ink-400 mb-0.5">
                {m.label}
              </dt>
              <dd className="text-[15px] font-700 font-display text-ink-900 tabular-nums">
                {m.value}
              </dd>
            </div>
          ))}
        </dl>

        <div className="mt-5 flex flex-wrap items-center justify-between gap-3 pt-4">
          <p className="text-[11px] text-ink-400 font-500 tracking-wide max-w-[70%]">
            {product.stack.slice(0, 4).join(" · ")}
            {product.stack.length > 4 ? " · …" : ""}
          </p>
          <a
            href={product.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[11px] font-600 tracking-[0.18em] uppercase text-ink-700 border-b border-ink-300 pb-0.5 hover:text-purple-600 hover:border-purple-600 transition-colors"
          >
            {host} ↗
          </a>
        </div>
      </div>
    </article>
  );
}

function SupportingWork({ items }) {
  return (
    <div className="max-w-6xl mx-auto px-6">
      <div className="flex items-baseline justify-between border-t border-ink-900/90 pt-5 mb-14 md:mb-16">
        <span className="text-[11px] font-600 tracking-[0.3em] uppercase text-ink-700">
          Also Shipped — In Support
        </span>
        <span className="text-[11px] font-500 tracking-[0.22em] uppercase text-ink-400 tabular-nums">
          № 02 / 03
        </span>
      </div>
      <div className="grid grid-cols-12 gap-x-10 gap-y-16">
        {items.map((p, i) => (
          <SupportingItem key={p.id} product={p} index={i} />
        ))}
      </div>
    </div>
  );
}

function WorkSection() {
  const [feature, ...rest] = products;
  return (
    <section id="work" className="pt-24 pb-28">
      <WorkMasthead />
      <FeatureCaseStudy product={feature} />
      <SupportingWork items={rest} />
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-warm-200/60 mt-12">
      <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <span className="font-display font-800 text-sm tracking-tight text-ink-900">
            E<span className="text-purple-500">.</span> Senay-Sanchez
          </span>
          <span className="text-ink-300 text-xs">
            &middot; Chicago, IL
          </span>
        </div>
        <div className="flex items-center gap-6">
          <a
            href="https://github.com/esanche1"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-ink-400 hover:text-purple-600 transition-colors duration-200"
          >
            GitHub
          </a>
          <a
            href="https://www.marketthis.io"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-ink-400 hover:text-purple-600 transition-colors duration-200"
          >
            MarketThis.io
          </a>
          <a
            href="mailto:edcsanchez@yahoo.com"
            className="text-xs text-ink-400 hover:text-purple-600 transition-colors duration-200"
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
    <div className="min-h-screen">
      <Header />
      <Hero />
      <StatBand />

      <WorkSection />

      <section id="about" className="max-w-6xl mx-auto px-6 pb-24">
        <div className="border-t border-warm-200/60 pt-16">
          <h2 className="font-display font-700 text-2xl text-ink-900 tracking-tight mb-8">
            About
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <p className="text-ink-500 leading-relaxed">
              I lead data operations at Scale Marketing, a media agency managing
              $200M+ in annual ad spend through 20% YoY growth. My team of
              engineers, ML scientists, and designers builds the data pipelines,
              ML models, and internal platforms that power it all. From Airflow
              orchestration and EKS infrastructure to production Media Mix Models
              and causal analysis. Nights and weekends I ship my own products.
              MarketThis came from watching mid-market companies spend real money
              on ads with no good way to see what's working or act on it.
            </p>
            <div className="flex flex-col gap-3">
              <a
                href="https://github.com/esanche1"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm text-ink-500 hover:text-purple-600 transition-colors duration-200 py-2"
              >
                <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
                github.com/esanche1
              </a>
              <a
                href="https://www.marketthis.io"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm text-ink-500 hover:text-purple-600 transition-colors duration-200 py-2"
              >
                <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10A15.3 15.3 0 0112 2z" />
                </svg>
                marketthis.io
              </a>
              <a
                href="mailto:edcsanchez@yahoo.com"
                className="flex items-center gap-3 text-sm text-ink-500 hover:text-purple-600 transition-colors duration-200 py-2"
              >
                <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 01-2.06 0L2 7" />
                </svg>
                edcsanchez@yahoo.com
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
