"use client";

import { motion } from "framer-motion";
import { ExternalLink, Clock } from "lucide-react";
import { projects } from "../../content/projects";

const statusLabels: Record<NonNullable<typeof projects[number]["status"]>, string> = {
  live: "Live",
  "case-study": "Case study",
  "coming-soon": "Coming soon",
};

export function Projects() {
  return (
    <section id="projects" className="relative py-24 md:py-32 px-6 md:px-12 lg:px-24">
      <div className="max-w-5xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.6 }} className="mb-16">
          <p className="font-mono text-sm text-indigo-400 mb-3">04 — Projects</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">Things I&apos;ve built</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, idx) => (
            <motion.div key={project.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.5, delay: idx * 0.08 }} className="group relative p-6 rounded-2xl bg-neutral-900/50 border border-neutral-800 hover:border-neutral-700 hover:bg-neutral-900 transition-all flex flex-col">
              <div className="flex items-start justify-between gap-3 mb-3">
                <h3 className="text-xl font-semibold text-white group-hover:text-indigo-300 transition-colors">{project.title}</h3>
                {project.status && (
                  <span className="text-xs font-mono px-2 py-0.5 rounded-full bg-neutral-950 text-neutral-400 border border-neutral-800 whitespace-nowrap flex items-center gap-1.5">
                    {project.status === "coming-soon" && <Clock className="w-3 h-3" />}
                    {statusLabels[project.status]}
                  </span>
                )}
              </div>

              <p className="text-neutral-400 mb-4 leading-relaxed flex-grow">{project.description}</p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((t) => (
                  <span key={t} className="text-xs font-mono px-2 py-1 rounded-md bg-neutral-950 text-neutral-400 border border-neutral-800">{t}</span>
                ))}
              </div>

              {(project.link || project.github) && (
                <div className="flex flex-wrap gap-4 pt-2 border-t border-neutral-800">
                  {project.link && (
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-sm text-neutral-400 hover:text-indigo-300 transition-colors">
                      <ExternalLink className="w-4 h-4" />
                      Visit
                    </a>
                  )}
                  {project.github && typeof project.github === "string" && (
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-sm text-neutral-400 hover:text-indigo-300 transition-colors">
                      <ExternalLink className="w-4 h-4" />
                      Visit
                    </a>
                  )}
                  {project.github && Array.isArray(project.github) && project.github.map((repo) => (
                    <a key={repo.url} href={repo.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-sm text-neutral-400 hover:text-indigo-300 transition-colors">
                      <ExternalLink className="w-4 h-4" />
                      Visit {repo.label}
                    </a>
                  ))}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}