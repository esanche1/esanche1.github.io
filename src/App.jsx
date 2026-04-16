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

const categories = ["All", "Marketing", "Consumer", "Data"];

function Header() {
  return (
    <header className="sticky top-0 z-50 bg-warm-50/80 backdrop-blur-xl border-b border-warm-200/60">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="font-display font-800 text-lg tracking-tight text-ink-900">
          E<span className="text-purple-500">.</span> Senay-Sanchez
        </a>
        <nav className="hidden sm:flex items-center gap-8">
          <a
            href="#work"
            className="text-sm font-500 text-ink-400 hover:text-ink-900 transition-colors duration-200"
          >
            Products
          </a>
          <a
            href="#about"
            className="text-sm font-500 text-ink-400 hover:text-ink-900 transition-colors duration-200"
          >
            About
          </a>
          <a
            href="https://github.com/esanche1"
            className="text-sm font-500 text-ink-400 hover:text-ink-900 transition-colors duration-200"
          >
            GitHub
          </a>
        </nav>
        <a
          href="mailto:edcsanchez@yahoo.com"
          className="text-sm font-600 text-white bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded-lg transition-colors duration-200"
        >
          Get in Touch
        </a>
      </div>
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

function FilterBar({ active, onChange }) {
  return (
    <div className="flex items-center gap-2">
      {categories.map((cat) => (
        <button
          type="button"
          key={cat}
          onClick={() => onChange(cat)}
          className={`
            px-4 py-2 rounded-lg text-sm font-500 transition-all duration-200 cursor-pointer
            ${
              active === cat
                ? "bg-purple-600 text-white shadow-sm shadow-purple-300/40 border border-purple-600"
                : "bg-white text-ink-500 hover:text-ink-900 hover:bg-warm-100 border border-warm-200/80"
            }
          `}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}

function ProductCard({ product, index }) {
  return (
    <article
      className="group bg-white rounded-2xl border border-warm-200/80 overflow-hidden
                 transition-all duration-300 ease-out
                 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-purple-900/[0.04] hover:border-purple-200/60
                 animate-scale-in flex flex-col"
      style={{ animationDelay: `${index * 70}ms` }}
    >
      {/* Image area - 3:2 ratio */}
      <div className="relative aspect-[3/2] overflow-hidden bg-ink-900">
        <img
          src={product.image}
          alt={`${product.title} product screenshot`}
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover object-top
                     transition-transform duration-500 ease-out group-hover:scale-[1.03]"
        />
        <div className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-black/30 to-transparent pointer-events-none" />
        {/* Status badge */}
        <div className="absolute top-4 right-4">
          <span className="text-[10px] font-600 tracking-wider uppercase text-white bg-black/40 backdrop-blur-sm px-2.5 py-1 rounded-full border border-white/10">
            {product.status}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-1">
        {/* Category tag */}
        <span className="inline-block self-start text-[11px] font-600 tracking-wide uppercase text-purple-600 bg-purple-50 px-2.5 py-1 rounded-md mb-3">
          {product.category}
        </span>
        {/* Title */}
        <h3 className="font-display font-700 text-lg text-ink-900 mb-2 tracking-tight">
          {product.title}
        </h3>
        {/* Description */}
        <p className="text-sm text-ink-400 leading-relaxed mb-4 line-clamp-3">
          {product.description}
        </p>

        {/* Tech stack */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {product.stack.map((tech) => (
            <span
              key={tech}
              className="text-[10px] font-500 text-ink-500 bg-warm-50 border border-warm-200/80 px-2 py-0.5 rounded"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Metrics */}
        <div className="flex gap-4 pt-4 mt-auto border-t border-warm-200/60">
          {product.metrics.map((m) => (
            <div key={m.label} className="min-w-0">
              <p className="text-[10px] font-500 uppercase tracking-wide text-ink-300 mb-0.5">
                {m.label}
              </p>
              <p className="text-xs font-600 text-ink-700 truncate">{m.value}</p>
            </div>
          ))}
        </div>

        {/* Button */}
        <a
          href={product.url}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 w-full text-center text-sm font-600 text-purple-600 bg-purple-50 hover:bg-purple-100 border border-purple-100 hover:border-purple-200 py-2.5 rounded-xl transition-all duration-200 cursor-pointer group-hover:bg-purple-600 group-hover:text-white group-hover:border-purple-600 block"
        >
          View Details
          <svg className="inline-block w-3.5 h-3.5 ml-1.5 -mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M7 17L17 7M17 7H7M17 7v10" />
          </svg>
        </a>
      </div>
    </article>
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
            className="text-xs text-ink-400 hover:text-purple-600 transition-colors duration-200"
          >
            GitHub
          </a>
          <a
            href="https://www.marketthis.io"
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
  const [activeFilter, setActiveFilter] = useState("All");

  const filtered =
    activeFilter === "All"
      ? products
      : products.filter((p) => p.category === activeFilter);

  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <StatBand />

      <section id="work" className="max-w-6xl mx-auto px-6 pt-24 pb-24">
        {/* Section header + filter bar */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div>
            <h2 className="font-display font-700 text-2xl text-ink-900 tracking-tight">
              Featured Work
            </h2>
            <p className="text-sm text-ink-400 mt-1">
              {filtered.length} {filtered.length === 1 ? "project" : "projects"}
              {activeFilter !== "All" ? ` in ${activeFilter}` : ""}
            </p>
          </div>
          <FilterBar active={activeFilter} onChange={setActiveFilter} />
        </div>

        {/* Product grid */}
        <div
          key={activeFilter}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filtered.map((product, i) => (
            <ProductCard key={product.id} product={product} index={i} />
          ))}
        </div>
      </section>

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
