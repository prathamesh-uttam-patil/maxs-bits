import Link from "next/link";
import { ArrowRight, Sparkles, Box, Layers } from "lucide-react";
import { getAllComponents, getCategories } from "@/lib/registry";
import { HeroHeadline } from "@/components/site/hero-headline";
import GradientWaves from "@/components/GradientWaves";

export default function HomePage() {
  const allComponents = getAllComponents();
  const categories = getCategories();
  const totalCount = allComponents.length;

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
      <section className="relative overflow-hidden min-h-[540px] md:min-h-[640px] flex flex-col justify-center items-center pt-24 pb-20 md:pt-36 md:pb-32 w-full">
        {/* Gradient Waves WebGL Background */}
        <div className="absolute inset-0 -z-10 w-full h-full overflow-hidden">
          <GradientWaves
            horizonColor="#5227FF"
            waveColor="#FF9FFC"
            crestColor="#FFFFFF"
            speed={0.4}
            amplitude={2.5}
            waveScale={0.6}
            waveRatio={0.9}
            swell={35}
            turbulence={20}
            tilt={1.11}
            zoom={1.0}
            height={5.5}
            fogDepth={15}
            detail="medium"
            brightness={1.0}
            opacity={0.88}
            mouseInteraction={true}
            parallaxStrength={0.5}
            grain={true}
            grainIntensity={0.05}
          />
          {/* Subtle gradient overlays for clean text contrast and smooth boundary blend */}
          <div className="absolute inset-0 bg-gradient-to-b from-[var(--background)]/40 via-transparent to-[var(--background)] pointer-events-none" />
          <div className="absolute inset-0 bg-black/25 pointer-events-none" />
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center w-full relative z-10">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-black/40 backdrop-blur-md px-4 py-1.5 text-sm text-white/90 mb-8 shadow-lg max-w-full">
            <Sparkles className="w-4 h-4 text-purple-400 shrink-0" />
            <span className="truncate">{totalCount} components and growing</span>
          </div>

          {/* Headline */}
          <HeroHeadline />

          {/* Subtitle */}
          <p className="text-base sm:text-lg md:text-xl text-neutral-200 max-w-2xl mx-auto leading-relaxed font-medium px-2 drop-shadow-sm">
            Premium interactions without the premium effort.
          </p>
        </div>

        {/* Decorative line */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--primary)]/30 to-transparent" />
      </section>

      {/* ===== STATS ===== */}
      <section className="relative border-y border-[var(--border)] bg-[var(--card)]/50 backdrop-blur-sm overflow-hidden w-full">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8 sm:py-12 w-full">
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

      {/* ===== CATEGORIES ===== */}
      <section className="relative py-16 md:py-28 overflow-hidden w-full">
        {/* Section background accent */}
        <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
          <div
            className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] rounded-full opacity-[0.05]"
            style={{ background: 'radial-gradient(circle, var(--accent) 0%, transparent 70%)' }}
          />
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 w-full">
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
      <section className="relative border-t border-[var(--border)] py-16 md:py-20 overflow-hidden w-full">
        {/* CTA glow */}
        <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] rounded-full opacity-[0.06]"
            style={{ background: 'radial-gradient(circle, var(--primary) 0%, transparent 70%)' }}
          />
        </div>

        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center w-full">
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
