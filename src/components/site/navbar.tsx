"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

function GithubIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
    </svg>
  );
}
import { useState } from "react";
import { ThemeToggle } from "./theme-toggle";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/components/buttons", label: "Buttons" },
  { href: "/components/text-animations", label: "Text" },
  { href: "/components/cards", label: "Cards" },
  { href: "/components/inputs", label: "Inputs" },
  { href: "/components/badges", label: "Badges" },
  { href: "/components/avatars", label: "Avatars" },
  { href: "/components/tabs", label: "Tabs" },
  { href: "/components/tooltips", label: "Tooltips" },
  { href: "/components/modals", label: "Modals" },
  { href: "/components/alerts", label: "Alerts" },
  { href: "/components/accordions", label: "Accordions" },
  { href: "/components/progress", label: "Progress" },
  { href: "/components/ratings", label: "Ratings" },
  { href: "/components/chips", label: "Chips" },
  { href: "/components/switches", label: "Switches" },
  { href: "/components/backgrounds", label: "Backgrounds" },
  { href: "/components/loaders", label: "Loaders" },
  { href: "/components/toggles", label: "Toggles" },
  { href: "/components/scroll", label: "Scroll" },
  { href: "/components/marquee", label: "Marquee" },
  { href: "/components/cursors", label: "Cursors" },
  { href: "/components/dividers", label: "Dividers" },
  { href: "/components/skeletons", label: "Skeletons" },
  { href: "/components/breadcrumbs", label: "Breadcrumbs" },
  { href: "/components/pagination", label: "Pagination" },
  { href: "/components/kbd", label: "KBD" },
  { href: "/components/timeline", label: "Timeline" },
  { href: "/components/counters", label: "Counters" },
];

export function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[var(--background)]/80 backdrop-blur-xl">
      {/* Top bar: Logo + actions */}
      <div className="border-b border-[var(--border)]">
        <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[var(--primary)] text-white font-bold text-sm">
              M
            </div>
            <span className="font-bold text-lg tracking-tight">
              Max&apos;s{" "}
              <span className="text-[var(--primary)]">Bits</span>
            </span>
          </Link>

          {/* Right side */}
          <div className="flex items-center gap-2">
            <a
              href="https://github.com/prathamesh-uttam-patil"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-9 w-9 items-center justify-center rounded-lg text-[var(--muted-foreground)] hover:text-[var(--foreground)] hover:bg-[var(--secondary)] transition-colors"
              aria-label="GitHub Repository"
            >
              <GithubIcon className="w-5 h-5" />
            </a>
            <ThemeToggle />

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden h-9 w-9 flex items-center justify-center rounded-lg text-[var(--muted-foreground)] hover:text-[var(--foreground)] hover:bg-[var(--secondary)] transition-colors"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Category nav bar — horizontally scrollable */}
      <div className="hidden md:block border-b border-[var(--border)] bg-[var(--background)]/60">
        <div className="max-w-6xl mx-auto px-6">
          <nav className="flex items-center gap-0.5 overflow-x-auto scrollbar-hide py-2" style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}>
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "px-3 py-1.5 rounded-md text-xs font-medium whitespace-nowrap transition-colors shrink-0",
                  pathname?.startsWith(link.href)
                    ? "text-[var(--primary)] bg-[var(--primary)]/10"
                    : "text-[var(--muted-foreground)] hover:text-[var(--foreground)] hover:bg-[var(--secondary)]"
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden border-b border-[var(--border)] bg-[var(--background)] p-4 max-h-[70vh] overflow-y-auto">
          <nav className="grid grid-cols-2 gap-1.5">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={cn(
                  "px-3 py-2 rounded-lg text-sm font-medium transition-colors",
                  pathname?.startsWith(link.href)
                    ? "text-[var(--primary)] bg-[var(--primary)]/10"
                    : "text-[var(--muted-foreground)] hover:text-[var(--foreground)] hover:bg-[var(--secondary)]"
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
