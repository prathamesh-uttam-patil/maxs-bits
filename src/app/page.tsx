import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { getAllComponents, getCategories } from "@/lib/registry";
import { HeroHeadline } from "@/components/site/hero-headline";
import { CategorySection } from "@/components/site/category-section";
import Velaris from "@/components/ui/velaris";

export default function HomePage() {
  const allComponents = getAllComponents();
  const categories = getCategories();
  const totalCount = allComponents.length;

  const categoryItems = categories.map((cat) => ({
    name: cat,
    count: allComponents.filter((c) => c.category === cat).length,
  }));

  return (
    <div className="relative w-full overflow-x-hidden">
      {/* ===== BACKGROUND DESIGN ===== */}
      {/* Grid pattern overlay */}
      <div className="fixed inset-0 -z-20 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(var(--foreground) 1px, transparent 1px), linear-gradient(90deg, var(--foreground) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />

      {/* Animated gradient orbs */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        {/* Primary orb - top center */}
        <div
          className="absolute -top-[200px] left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full opacity-[0.14]"
          style={{
            background: 'radial-gradient(circle, var(--primary) 0%, transparent 70%)',
            animation: 'float 8s ease-in-out infinite',
          }}
        />
        {/* Accent orb - right */}
        <div
          className="absolute top-[40%] -right-[200px] w-[600px] h-[600px] rounded-full opacity-[0.10]"
          style={{
            background: 'radial-gradient(circle, var(--accent) 0%, transparent 70%)',
            animation: 'float 10s ease-in-out infinite reverse',
          }}
        />
        {/* Blue orb - bottom left */}
        <div
          className="absolute -bottom-[100px] -left-[200px] w-[500px] h-[500px] rounded-full opacity-[0.08]"
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
      <section className="relative overflow-hidden min-h-[75vh] md:min-h-[580px] flex flex-col justify-center items-center py-16 md:py-20 w-full">
        {/* Velaris purple WebGL living background */}
        <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none opacity-40 dark:opacity-75">
          <Velaris
            height="100%"
            colors={["#c084fc", "#a855f7", "#6d28d9", "#000000"]}
            bg="#000000"
            speed={1.5}
            grain={0.2}
            className="w-full h-full"
          />
        </div>

        {/* Radial spotlight */}
        <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
          <div
            className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1200px] h-[600px]"
            style={{
              background: 'radial-gradient(ellipse 80% 50% at 50% 0%, var(--primary) 0%, transparent 70%)',
              opacity: 0.16,
            }}
          />
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center w-full relative z-10 my-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--card)]/80 backdrop-blur-md px-4 py-1.5 text-sm text-[var(--foreground)] mb-6 shadow-sm max-w-full">
            <Sparkles className="w-4 h-4 text-[var(--primary)] shrink-0" />
            <span className="truncate">{totalCount} components and growing</span>
          </div>

          {/* Headline */}
          <HeroHeadline />

          {/* Subtitle */}
          <p className="text-base sm:text-lg md:text-xl text-[var(--muted-foreground)] max-w-2xl mx-auto leading-relaxed font-medium px-2 mb-8">
            Premium interactions without the premium effort.
          </p>

          {/* Primary CTA Button Group */}
          <div className="flex flex-wrap items-center justify-center gap-4 relative z-20">
            <Link
              href="#categories"
              className="inline-flex items-center gap-2 rounded-xl bg-[var(--primary)] text-[var(--primary-foreground)] px-7 py-3.5 text-sm sm:text-base font-semibold transition-all hover:opacity-90 shadow-lg shadow-[var(--primary)]/25 active:scale-95"
            >
              Browse Components
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="https://github.com/prathamesh-uttam-patil/maxs-bits"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-[var(--border)] bg-[var(--card)]/80 backdrop-blur-sm px-6 py-3.5 text-sm sm:text-base font-semibold text-[var(--foreground)] hover:bg-[var(--secondary)] transition-all active:scale-95"
            >
              GitHub
            </a>
          </div>
        </div>

        {/* Decorative line */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--primary)]/20 to-transparent" />
      </section>

      {/* ===== CATEGORIES (with search & unique icons) ===== */}
      <CategorySection categories={categoryItems} />

      {/* ===== STATS ===== */}
      <section className="relative border-y border-[var(--border)] bg-[var(--card)]/50 backdrop-blur-sm overflow-hidden w-full mb-12">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8 sm:py-10 w-full">
          <div className="grid grid-cols-3 gap-2 sm:gap-6 md:gap-8 text-center w-full">
            <div className="min-w-0">
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-[var(--primary)] truncate">{totalCount}</div>
              <div className="text-xs sm:text-sm text-[var(--muted-foreground)] mt-1 truncate">Components</div>
            </div>
            <div className="min-w-0">
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold truncate">{categories.length}</div>
              <div className="text-xs sm:text-sm text-[var(--muted-foreground)] mt-1 truncate">Categories</div>
            </div>
            <div className="min-w-0">
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold truncate">100%</div>
              <div className="text-xs sm:text-sm text-[var(--muted-foreground)] mt-1 truncate">Free & Open Source</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
