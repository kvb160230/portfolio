"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";

export function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center px-6 md:px-12 lg:px-24 overflow-hidden">
      <div aria-hidden className="absolute top-1/4 -left-32 w-96 h-96 rounded-full bg-indigo-500/10 blur-3xl" />
      <div aria-hidden className="absolute bottom-1/4 -right-32 w-96 h-96 rounded-full bg-violet-500/10 blur-3xl" />

      <div className="relative max-w-5xl mx-auto w-full">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="font-mono text-sm text-indigo-400 mb-6"
        >
          Hi, my name is
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white mb-4"
        >
          Krishna Boreda
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="font-mono text-base md:text-lg text-neutral-400 mb-8"
        >
          Developer <span className="text-neutral-600">·</span> Problem solver <span className="text-neutral-600">·</span> Pragmatist
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="max-w-2xl text-lg md:text-xl text-neutral-300 leading-relaxed mb-10"
        >
          I build software for the people on the other side of it. The work I care about is the kind that makes something measurably better for someone, a workflow that stops being painful, a bug that stops costing people time, a system that finally just works.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-wrap gap-4"
        >
          <a href="#experience" className="group inline-flex items-center gap-2 px-6 py-3 rounded-full bg-linear-to-r from-indigo-500 to-violet-500 text-white font-medium hover:shadow-lg hover:shadow-indigo-500/25 transition-all">
            See my work
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
          <a href="#contact" className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-neutral-700 text-neutral-200 hover:border-neutral-500 hover:bg-neutral-900 transition-all">
            Get in touch
          </a>
          <a href="/KrishnaBoredaResume.pdf" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-neutral-400 hover:text-neutral-200 transition-all">
            <Download className="w-4 h-4" />
            Resume
          </a>
        </motion.div>
      </div>
    </section>
  );
}