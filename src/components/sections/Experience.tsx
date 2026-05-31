"use client";

import { motion } from "framer-motion";
import { experiences } from "@/src/content/experience";

export function Experience() {
  return (
    <section
      id="experience"
      className="relative py-24 md:py-32 px-6 md:px-12 lg:px-24"
    >
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="font-mono text-sm text-indigo-400 mb-3">
            02 — Experience
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
            Where I&apos;ve been
          </h2>
        </motion.div>

        <div className="relative">
          {/* Vertical line */}
          <div
            aria-hidden
            className="absolute left-0 md:left-1/2 top-2 bottom-2 w-px bg-linear-to-b from-indigo-500/30 via-neutral-800 to-transparent md:-translate-x-px"
          />

          <div className="space-y-12 md:space-y-16">
            {experiences.map((exp, idx) => (
              <motion.div
                key={`${exp.company}-${exp.period}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className="relative pl-8 md:pl-0 md:grid md:grid-cols-2 md:gap-12"
              >
                {/* Dot */}
                <div
                  aria-hidden
                  className="absolute left-0 md:left-1/2 top-2 w-3 h-3 rounded-full bg-indigo-500 md:-translate-x-1/2 ring-4 ring-neutral-950"
                />

                {/* Period (left side on desktop) */}
                <div className="md:text-right md:pr-8 mb-3 md:mb-0">
                  <p className="font-mono text-sm text-neutral-500">
                    {exp.period}
                  </p>
                  <p className="text-sm text-neutral-600 mt-1">
                    {exp.location}
                  </p>
                </div>

                {/* Content (right side on desktop) */}
                <div className="md:pl-8">
                  <div className="flex items-center gap-3 mb-2 flex-wrap">
                    <h3 className="text-xl md:text-2xl font-semibold text-white">
                      {exp.role}
                    </h3>
                    {exp.current && (
                      <span className="text-xs font-mono px-2 py-0.5 rounded-full bg-indigo-500/10 text-indigo-300 border border-indigo-500/20">
                        current
                      </span>
                    )}
                  </div>
                  <p className="text-indigo-400 mb-4 font-medium">
                    {exp.company}
                  </p>

                  <ul className="space-y-2 text-neutral-300 leading-relaxed mb-4">
                    {exp.bullets.map((bullet, bIdx) => (
                      <li key={bIdx} className="flex gap-3">
                        <span
                          aria-hidden
                          className="text-indigo-500 mt-2 shrink-0"
                        >
                          ▸
                        </span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>

                  {exp.tech && exp.tech.length > 0 && (
                    <div className="flex flex-wrap gap-2 mt-4">
                      {exp.tech.map((t) => (
                        <span
                          key={t}
                          className="text-xs font-mono px-2.5 py-1 rounded-md bg-neutral-900 text-neutral-400 border border-neutral-800"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}