"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import {
  Search,
  X,
  ArrowRight,
  ListCollapse,
  AlertCircle,
  UserCheck,
  Palette,
  Award,
  Navigation,
  MousePointerClick,
  LayoutGrid,
  Tag,
  Binary,
  MousePointer,
  Columns,
  Layers,
  FormInput,
  KeyRound,
  Loader2,
  Sparkles,
  MessageSquare,
  CheckSquare,
  BarChart3,
  Star,
  ScrollText,
  LayoutTemplate,
  ToggleLeft,
  FolderTree,
  Type,
  GitBranch,
  SlidersHorizontal,
  HelpCircle,
  LucideIcon
} from "lucide-react";

const CATEGORY_ICONS: Record<string, LucideIcon> = {
  accordions: ListCollapse,
  alerts: AlertCircle,
  avatars: UserCheck,
  backgrounds: Palette,
  badges: Award,
  breadcrumbs: Navigation,
  buttons: MousePointerClick,
  cards: LayoutGrid,
  chips: Tag,
  counters: Binary,
  cursors: MousePointer,
  dividers: Columns,
  dock: Layers,
  inputs: FormInput,
  kbd: KeyRound,
  loaders: Loader2,
  marquee: Sparkles,
  modals: MessageSquare,
  pagination: CheckSquare,
  progress: BarChart3,
  ratings: Star,
  scroll: ScrollText,
  skeletons: LayoutTemplate,
  switches: ToggleLeft,
  tabs: FolderTree,
  "text-animations": Type,
  timeline: GitBranch,
  toggles: SlidersHorizontal,
  tooltips: HelpCircle,
};

interface CategoryItem {
  name: string;
  count: number;
}

interface CategorySectionProps {
  categories: CategoryItem[];
}

export function CategorySection({ categories }: CategorySectionProps) {
  const [query, setQuery] = useState("");

  const filteredCategories = useMemo(() => {
    if (!query.trim()) return categories;
    const q = query.toLowerCase().trim();
    return categories.filter((cat) => cat.name.toLowerCase().includes(q));
  }, [categories, query]);

  return (
    <section id="categories" className="relative pt-10 pb-16 md:pt-14 md:pb-24 overflow-hidden w-full scroll-mt-20">
      {/* Section background accent */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        <div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] rounded-full opacity-[0.05]"
          style={{ background: "radial-gradient(circle, var(--accent) 0%, transparent 70%)" }}
        />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 w-full">
        {/* Section Header */}
        <div className="text-center mb-10 max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">Browse by Category</h2>
          <p className="text-[var(--muted-foreground)] text-base md:text-lg mb-6">
            Find the perfect component for your next project across 29 specialized categories
          </p>

          {/* Quick Category Search Bar */}
          <div className="relative max-w-md mx-auto">
            <Search
              className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[var(--muted-foreground)] pointer-events-none"
              aria-hidden="true"
            />
            <input
              type="text"
              role="searchbox"
              aria-label="Search categories"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search 29 categories..."
              className="w-full h-11 pl-10 pr-10 rounded-xl border border-[var(--border)] bg-[var(--card)]/90 backdrop-blur-sm text-sm placeholder:text-[var(--muted-foreground)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)]/40 focus:border-[var(--primary)] transition-all shadow-sm"
            />
            {query && (
              <button
                onClick={() => setQuery("")}
                aria-label="Clear category search"
                className="absolute right-3 top-1/2 -translate-y-1/2 p-1 text-[var(--muted-foreground)] hover:text-[var(--foreground)] transition-colors rounded-md"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>

        {/* Categories Grid */}
        {filteredCategories.length === 0 ? (
          <div className="text-center py-16 rounded-2xl border border-dashed border-[var(--border)] bg-[var(--card)]/40 p-8">
            <p className="text-[var(--muted-foreground)] text-base">
              No categories found matching &quot;{query}&quot;
            </p>
            <button
              onClick={() => setQuery("")}
              className="mt-3 text-sm text-[var(--primary)] hover:underline font-medium"
            >
              Clear search filter
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredCategories.map(({ name: category, count }) => {
              const Icon = CATEGORY_ICONS[category] || Layers;
              return (
                <Link
                  key={category}
                  href={`/components/${category}`}
                  className="group relative flex items-center gap-4 rounded-xl border border-[var(--border)] bg-[var(--card)]/80 backdrop-blur-sm p-6 transition-all hover:border-[var(--primary)] hover:shadow-lg hover:shadow-[var(--primary)]/5"
                >
                  <div
                    className="flex h-12 w-12 items-center justify-center rounded-lg bg-[var(--primary)]/10 text-[var(--primary)] transition-transform duration-300 group-hover:scale-110"
                    aria-hidden="true"
                  >
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold capitalize text-lg text-[var(--foreground)]">{category}</h3>
                    <p className="text-sm text-[var(--muted-foreground)]">
                      {count} component{count !== 1 ? "s" : ""}
                    </p>
                  </div>
                  <ArrowRight
                    className="w-5 h-5 ml-auto text-[var(--muted-foreground)] transition-transform group-hover:translate-x-1 group-hover:text-[var(--primary)]"
                    aria-hidden="true"
                  />
                </Link>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
