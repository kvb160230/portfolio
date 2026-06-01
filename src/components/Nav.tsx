"use client";

import { useEffect, useState } from "react";
import { cn } from "../lib/cn";

const sections = [
  { id: "about", label: "About", number: "01" },
  { id: "experience", label: "Experience", number: "02" },
  { id: "skills", label: "Skills", number: "03" },
  { id: "projects", label: "Projects", number: "04" },
  { id: "contact", label: "Contact", number: "06" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={cn("fixed top-0 left-0 right-0 z-50 transition-all duration-300", scrolled ? "bg-neutral-950/70 backdrop-blur-md border-b border-neutral-900" : "bg-transparent")}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 py-4 flex items-center justify-between">
        <a href="#hero" className="font-mono text-sm text-white hover:text-indigo-300 transition-colors">
          <span className="text-indigo-400">{"<"}</span>Me<span className="text-indigo-400">{" />"}</span>
        </a>

        <div className="hidden md:flex items-center gap-1">
          {sections.map((s) => (
            <a key={s.id} href={`#${s.id}`} className="group px-3 py-2 text-sm text-neutral-400 hover:text-white transition-colors">
              <span className="font-mono text-xs text-indigo-400 mr-1.5 group-hover:text-indigo-300">{s.number}.</span>
              {s.label}
            </a>
          ))}
        </div>

        <a href="/KrishnaBoredaResume.pdf" target="_blank" rel="noopener noreferrer" className="text-sm font-mono px-4 py-2 rounded-full border border-indigo-500/30 text-indigo-300 hover:bg-indigo-500/10 hover:border-indigo-500/50 transition-all">
          Resume
        </a>
      </div>
    </nav>
  );
}