import Link from "next/link";
import { ArrowRight, Sparkles, Box, Layers } from "lucide-react";
import { getAllComponents, getCategories } from "@/lib/registry";
import { FadeWords } from "@/registry/text-animations/fade-words/component";

export default function HomePage() {
  const allComponents = getAllComponents();
  const categories = getCategories();
  const totalCount = allComponents.length;

  return (
    <div className="relative">
      {/* ===== BACKGROUND DESIGN ===== */}
      {/* Grid pattern overlay */}
      <div className="fixed inset-0 -z-20 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(var(--foreground) 1px, transparent 1px), linear-gradient(90deg, var(--foreground) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />

      {/* Animated gradient orbs */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        {/* Primary orb - top center */}
        <div
          className="absolute -top-[200px] left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full opacity-[0.12]"
          style={{
            background: 'radial-gradient(circle, var(--primary) 0%, transparent 70%)',
            animation: 'float 8s ease-in-out infinite',
          }}
        />
        {/* Accent orb - right */}
        <div
          className="absolute top-[40%] -right-[200px] w-[600px] h-[600px] rounded-full opacity-[0.08]"
          style={{
            background: 'radial-gradient(circle, var(--accent) 0%, transparent 70%)',
            animation: 'float 10s ease-in-out infinite reverse',
          }}
        />
        {/* Blue orb - bottom left */}
        <div
          className="absolute -bottom-[100px] -left-[200px] w-[500px] h-[500px] rounded-full opacity-[0.06]"
          style={{
            background: 'radial-gradient(circle, #3b82f6 0%, transparent 70%)',
            animation: 'float 12s ease-in-out infinite',
          }}
        />
      </div>

      {/* Keyframes for floating animation */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translate(-50%, 0) scale(1); }
          50% { transform: translate(-50%, -30px) scale(1.05); }
        }
        @keyframes float-right {
          0%, 100% { transform: translateY(0) scale(1); }
          50% { transform: translateY(-20px) scale(1.03); }
        }
      `}</style>

      {/* ===== HERO SECTION ===== */}
      <section className="relative overflow-hidden pt-24 pb-16 md:pt-36 md:pb-28">
        {/* Radial spotlight */}
        <div className="absolute inset-0 -z-10">
          <div
            className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1200px] h-[600px]"
            style={{
              background: 'radial-gradient(ellipse 80% 50% at 50% 0%, var(--primary) 0%, transparent 70%)',
              opacity: 0.1,
            }}
          />
        </div>

        <div className="max-w-5xl mx-auto px-6 text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--card)]/80 backdrop-blur-sm px-4 py-1.5 text-sm text-[var(--muted-foreground)] mb-8 shadow-sm">
            <Sparkles className="w-4 h-4 text-[var(--primary)]" />
            <span>{totalCount} components and growing</span>
          </div>

          {/* Heading with FadeWords */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.15] mb-6">
            Beautiful React{" "}
            <FadeWords
              words={["components", "animations", "interactions", "interfaces", "effects"]}
              className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--primary)] via-[var(--accent)] to-purple-400 text-4xl md:text-6xl lg:text-7xl font-bold"
            />
            <br />
            you can copy & paste
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-[var(--muted-foreground)] max-w-2xl mx-auto mb-10 leading-relaxed">
            A curated collection of animated, interactive & fully customizable
            React components. Browse, preview, and ship stunning UIs in minutes.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/components/buttons"
              className="inline-flex items-center gap-2 rounded-xl bg-[var(--primary)] text-[var(--primary-foreground)] px-8 py-3.5 text-base font-semibold transition-all hover:opacity-90 hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-[var(--primary)]/25"
            >
              Browse Components
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="https://github.com/prathamesh-uttam-patil"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-[var(--border)] bg-[var(--card)]/80 backdrop-blur-sm px-8 py-3.5 text-base font-semibold transition-all hover:bg-[var(--secondary)] hover:scale-[1.02] active:scale-[0.98]"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
              GitHub
            </a>
          </div>
        </div>

        {/* Decorative line */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--primary)]/20 to-transparent" />
      </section>

      {/* ===== STATS ===== */}
      <section className="relative border-y border-[var(--border)] bg-[var(--card)]/50 backdrop-blur-sm">
        <div className="max-w-5xl mx-auto px-6 py-12">
          <div className="grid grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-bold text-[var(--primary)]">{totalCount}</div>
              <div className="text-sm text-[var(--muted-foreground)] mt-1">Components</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold">{categories.length}</div>
              <div className="text-sm text-[var(--muted-foreground)] mt-1">Categories</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold">100%</div>
              <div className="text-sm text-[var(--muted-foreground)] mt-1">Free & Open Source</div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== CATEGORIES ===== */}
      <section className="relative py-20 md:py-28">
        {/* Section background accent */}
        <div className="absolute inset-0 -z-10">
          <div
            className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] rounded-full opacity-[0.05]"
            style={{ background: 'radial-gradient(circle, var(--accent) 0%, transparent 70%)' }}
          />
        </div>

        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Browse by Category</h2>
            <p className="text-[var(--muted-foreground)] text-lg">
              Find the perfect component for your next project
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {categories.map((category) => {
              const count = allComponents.filter((c) => c.category === category).length;
              return (
                <Link
                  key={category}
                  href={`/components/${category}`}
                  className="group relative flex items-center gap-4 rounded-xl border border-[var(--border)] bg-[var(--card)]/80 backdrop-blur-sm p-6 transition-all hover:border-[var(--primary)] hover:shadow-lg hover:shadow-[var(--primary)]/5"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[var(--primary)]/10 text-[var(--primary)]">
                    {category === "buttons" ? (
                      <Box className="w-6 h-6" />
                    ) : (
                      <Layers className="w-6 h-6" />
                    )}
                  </div>
                  <div>
                    <h3 className="font-semibold capitalize text-lg">{category}</h3>
                    <p className="text-sm text-[var(--muted-foreground)]">
                      {count} component{count !== 1 ? "s" : ""}
                    </p>
                  </div>
                  <ArrowRight className="w-5 h-5 ml-auto text-[var(--muted-foreground)] transition-transform group-hover:translate-x-1 group-hover:text-[var(--primary)]" />
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="relative border-t border-[var(--border)] py-20 overflow-hidden">
        {/* CTA glow */}
        <div className="absolute inset-0 -z-10">
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] rounded-full opacity-[0.06]"
            style={{ background: 'radial-gradient(circle, var(--primary) 0%, transparent 70%)' }}
          />
        </div>

        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Start building{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--primary)] via-[var(--accent)] to-purple-400">beautiful UIs</span>
          </h2>
          <p className="text-[var(--muted-foreground)] text-lg mb-8">
            New components added regularly. Just copy, paste, and customize.
          </p>
          <Link
            href="/components/buttons"
            className="inline-flex items-center gap-2 rounded-xl bg-[var(--primary)] text-[var(--primary-foreground)] px-8 py-3.5 text-base font-semibold transition-all hover:opacity-90 shadow-lg shadow-[var(--primary)]/25"
          >
            Explore All Components
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
