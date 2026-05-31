import { ArrowUp } from "lucide-react";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative px-6 md:px-12 lg:px-24 py-12 border-t border-neutral-900">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-sm text-neutral-500 font-mono">
          © {year} Krishna Boreda. Built with Next.js, Tailwind.
        </div>

        <a href="#hero" className="group inline-flex items-center gap-2 text-sm font-mono text-neutral-400 hover:text-indigo-300 transition-colors">
          Back to top
          <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform" />
        </a>
      </div>
    </footer>
  );
}