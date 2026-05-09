import { useState } from "react";
import marketThisImg from "./assets/marketthis.webp";
import chiTixImg from "./assets/chitix.webp";
import validateThisImg from "./assets/validatethis.webp";
import portraitImg from "./assets/portrait.jpg";

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
  { href: "#work", label: "Work" },
  { href: "#about", label: "About" },
  { href: "https://substack.com/@edsenaysanchez", label: "Writing" },
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
            href="#about"
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
  { value: "20%", label: "YoY growth driven" },
  { value: "12", label: "Engineers, ML scientists, designers led" },
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

function PortraitSlot() {
  return (
    <div className="relative w-full aspect-[4/5] rounded-3xl overflow-hidden bg-gradient-to-br from-purple-100 via-warm-100 to-purple-200 border border-warm-200/70 shadow-sm shadow-purple-900/[0.04]">
      <img
        src={portraitImg}
        alt="Edward Senay-Sanchez"
        className="absolute inset-0 w-full h-full object-cover object-center"
      />
    </div>
  );
}

function Hero() {
  return (
    <section className="max-w-6xl mx-auto px-6 pt-20 pb-20 animate-fade-up">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
        <div className="lg:col-span-7">
          <a
            href="https://www.marketthis.io"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-50 border border-emerald-100 mb-8 hover:bg-emerald-100 transition-colors duration-200"
          >
            <span className="relative flex w-2 h-2">
              <span className="absolute inline-flex w-full h-full rounded-full bg-emerald-400 opacity-75 animate-ping" />
              <span className="relative inline-flex w-2 h-2 rounded-full bg-emerald-500" />
            </span>
            <span className="text-xs font-600 text-emerald-700 tracking-wide uppercase">
              Hiring for MarketThis
            </span>
          </a>
          <h1 className="font-display font-800 text-5xl sm:text-6xl lg:text-7xl tracking-tight leading-[1.05] text-ink-900 mb-6">
            Data leader.
            <br />
            <span className="text-purple-500">Product builder.</span>
          </h1>
          <p className="text-lg text-ink-500 leading-relaxed max-w-xl">
            Director of Data Operations at Scale Marketing. My team of
            engineers, ML scientists, and designers builds the pipelines,
            ML models, and platforms behind $200M+ in annual ad spend. I
            also ship my own products.
          </p>
        </div>
        <div className="lg:col-span-5 max-w-[360px] mx-auto lg:max-w-none w-full">
          <PortraitSlot />
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
    <span className="inline-flex items-center gap-1.5 text-[10px] font-600 tracking-wider uppercase text-white bg-black/45 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/10">
      <span className="relative flex w-1.5 h-1.5">
        <span className={`absolute inline-flex w-full h-full rounded-full ${pingClass} opacity-60 animate-ping`} />
        <span className={`relative inline-flex w-1.5 h-1.5 rounded-full ${dotClass}`} />
      </span>
      {status}
    </span>
  );
}

function ProductCard({ product, index }) {
  const visibleStack = product.stack.slice(0, 4);
  const hiddenStackCount = product.stack.length - visibleStack.length;

  return (
    <article
      className="group bg-white rounded-2xl border border-warm-200/80 overflow-hidden
                 transition-all duration-300 ease-out
                 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-purple-900/[0.04] hover:border-purple-200/60
                 animate-scale-in flex flex-col"
      style={{ animationDelay: `${index * 70}ms` }}
    >
      <div className="relative aspect-[3/2] overflow-hidden bg-ink-900">
        <img
          src={product.image}
          alt={`${product.title} product screenshot`}
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
        <span className="inline-block self-start text-[11px] font-600 tracking-wide uppercase text-purple-600 bg-purple-50 px-2.5 py-1 rounded-md mb-3">
          {product.category}
        </span>
        <h3 className="font-display font-700 text-xl text-ink-900 mb-2 tracking-tight">
          {product.title}
        </h3>
        <p className="text-sm text-ink-500 leading-relaxed mb-4 line-clamp-3">
          {product.description}
        </p>

        <div className="flex flex-wrap items-center gap-1.5 mb-4">
          {visibleStack.map((tech) => (
            <span
              key={tech}
              className="text-[10px] font-500 text-ink-400 bg-warm-50 border border-warm-200/60 px-2 py-0.5 rounded"
            >
              {tech}
            </span>
          ))}
          {hiddenStackCount > 0 && (
            <span className="text-[10px] font-500 text-ink-400 px-1">
              +{hiddenStackCount}
            </span>
          )}
        </div>

        <div className="flex gap-4 pt-4 mt-auto border-t border-warm-200/60">
          {product.metrics.map((m) => (
            <div key={m.label} className="min-w-0 flex-1">
              <p className="font-display font-700 text-sm sm:text-base text-ink-900 leading-tight break-words">
                {m.value}
              </p>
              <p className="text-[10px] font-500 uppercase tracking-wide text-ink-400 mt-1">
                {m.label}
              </p>
            </div>
          ))}
        </div>

        <a
          href={product.url}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 w-full text-center text-sm font-600 text-purple-600 bg-purple-50 hover:bg-purple-100 border border-purple-100 hover:border-purple-200 py-2.5 rounded-xl transition-all duration-200 cursor-pointer group-hover:bg-purple-600 group-hover:text-white group-hover:border-purple-600 block"
        >
          Open live site
          <svg className="inline-block w-3.5 h-3.5 ml-1.5 -mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M7 17L17 7M17 7H7M17 7v10" />
          </svg>
        </a>
      </div>
    </article>
  );
}

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-warm-200/60 mt-12">
      <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3 flex-wrap justify-center">
          <span className="font-display font-800 text-sm tracking-tight text-ink-900">
            E<span className="text-purple-500">.</span> Senay-Sanchez
          </span>
          <span className="text-ink-300 text-xs">
            &middot; Chicago, IL &middot; &copy; {year}
          </span>
        </div>
        <div className="flex items-center gap-6 flex-wrap justify-center">
          <a
            href="https://www.linkedin.com/in/ed-senay-sanchez-2049402b9/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-ink-400 hover:text-purple-600 transition-colors duration-200"
          >
            LinkedIn
          </a>
          <a
            href="https://substack.com/@edsenaysanchez"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-ink-400 hover:text-purple-600 transition-colors duration-200"
          >
            Substack
          </a>
          <a
            href="https://github.com/esanche1"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-ink-400 hover:text-purple-600 transition-colors duration-200"
          >
            GitHub
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

      <section id="work" className="max-w-6xl mx-auto px-6 pt-24 pb-24">
        <div className="mb-10">
          <h2 className="font-display font-700 text-2xl text-ink-900 tracking-tight">
            Featured Work
          </h2>
          <p className="text-sm text-ink-500 mt-1">
            Products I have built outside of my day job.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, i) => (
            <ProductCard key={product.id} product={product} index={i} />
          ))}
        </div>
      </section>

      <section id="about" className="max-w-6xl mx-auto px-6 pb-24">
        <div className="border-t border-warm-200/60 pt-16">
          <h2 className="font-display font-700 text-2xl text-ink-900 tracking-tight mb-10">
            About
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-10 lg:gap-14 items-start">
            <div className="md:col-span-2">
              <div className="max-w-[280px]">
                <div className="relative w-full aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-purple-100 via-warm-100 to-purple-200 border border-warm-200/70">
                  <img
                    src={portraitImg}
                    alt="Edward Senay-Sanchez"
                    className="absolute inset-0 w-full h-full object-cover object-center"
                  />
                </div>
                <div className="mt-5">
                  <p className="font-display font-700 text-base text-ink-900">
                    Edward Senay-Sanchez
                  </p>
                  <p className="text-sm text-ink-500 mt-1 leading-relaxed">
                    Director of Data Operations
                    <br />
                    Chicago, IL
                  </p>
                </div>
              </div>
            </div>

            <div className="md:col-span-3 flex flex-col gap-5">
              <p className="text-ink-700 leading-relaxed">
                I lead data operations at Scale Marketing, a media agency
                managing $200M+ in annual ad spend through 20% YoY growth. My
                team of engineers, ML scientists, and designers builds the data
                pipelines, ML models, and internal platforms that power it all.
                From Airflow orchestration and EKS infrastructure to production
                Media Mix Models and causal analysis.
              </p>
              <p className="text-ink-700 leading-relaxed">
                On nights and weekends I ship my own products. MarketThis came
                from watching mid-market companies spend real money on ads with
                no good way to see what is working or act on it. ChiTix and
                ValidateThis solved problems I kept hitting personally and at
                work.
              </p>
              <p className="text-ink-700 leading-relaxed">
                I write about data operations, attribution, and shipping
                products on{" "}
                <a
                  href="https://substack.com/@edsenaysanchez"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-600 hover:text-purple-700 font-600 underline underline-offset-2 decoration-purple-200 hover:decoration-purple-400 transition-colors duration-200"
                >
                  Substack
                </a>
                .
              </p>

              <div className="mt-3 p-5 rounded-xl bg-purple-50 border border-purple-100">
                <p className="text-[11px] font-600 tracking-[0.18em] uppercase text-purple-700 mb-2">
                  Currently
                </p>
                <p className="text-sm text-ink-700 leading-relaxed">
                  Hiring engineers and designers for MarketThis. Open to
                  advisory conversations on data ops, attribution, and ML at
                  scale.
                </p>
              </div>

              <div className="flex flex-wrap gap-x-6 gap-y-2 mt-2">
                <a
                  href="https://www.linkedin.com/in/ed-senay-sanchez-2049402b9/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 text-sm text-ink-500 hover:text-purple-600 transition-colors duration-200 py-1.5"
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
                  className="flex items-center gap-2.5 text-sm text-ink-500 hover:text-purple-600 transition-colors duration-200 py-1.5"
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
                  className="flex items-center gap-2.5 text-sm text-ink-500 hover:text-purple-600 transition-colors duration-200 py-1.5"
                >
                  <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                  GitHub
                </a>
                <a
                  href="mailto:edcsanchez@yahoo.com"
                  className="flex items-center gap-2.5 text-sm text-ink-500 hover:text-purple-600 transition-colors duration-200 py-1.5"
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

      <Footer />
    </div>
  );
}
