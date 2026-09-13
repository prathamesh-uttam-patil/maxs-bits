import { Sparkles } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-[var(--border)] bg-[var(--card)]">
      <div className="max-w-6xl mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-sm text-[var(--muted-foreground)]">
            <Sparkles className="w-4 h-4 text-[var(--primary)]" />
            <span>
              Built with ❤️ by{" "}
              <span className="font-semibold text-[var(--foreground)]">Max</span>
            </span>
          </div>
          <div className="flex items-center gap-6 text-sm text-[var(--muted-foreground)]">
            <a
              href="https://github.com/prathamesh-uttam-patil"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[var(--foreground)] transition-colors"
            >
              GitHub
            </a>
            <span>© {new Date().getFullYear()} Max&apos;s Bits</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
