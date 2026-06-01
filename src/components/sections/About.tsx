"use client";

import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

export function About() {
  return (
    <section
      id="about"
      className="relative py-24 md:py-32 px-6 md:px-12 lg:px-24"
    >
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <p className="font-mono text-sm text-indigo-400 mb-3">01 — About</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
            A little about me
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="space-y-6 text-lg text-neutral-300 leading-relaxed"
        >
          <p>
            I&apos;m a computer science grad from UT Dallas who genuinely enjoys
            the craft of building software - designing solutions, writing code,
            hunting bugs, and the small satisfaction of watching something I
            built land well with the people using it.
          </p>
          <p>
            What I care about is impact. Code is only interesting to me when it
            makes something measurably better for someone — a workflow that used
            to be painful, a bug that used to lose people time, an integration
            that finally just works. That&apos;s the loop I want to keep being
            part of.
          </p>
          <p>
            Five years in, my path has taken me from{" "}
            <span className="text-white font-medium">
              American First Finance
            </span>{" "}
            , where I worked across an AS/400 backbone, PHP services, and a Vue frontend, to
            {" "} <span className="text-white font-medium">Sprinto</span>, a modern SaaS compliance platform.  
            The throughline has been spending more and more of my time close to the customer. That proximity has shaped 
            how I think as an engineer. I've seen which kinds of bugs actually hurt users, which design choices cause 
            confusion at scale, and what observability looks like when it's good. It's made me sharper about edge cases, 
            more skeptical of happy paths, and more deliberate about the systems I help build.
          </p>
          <p>
            Now I&apos;m looking to bring that perspective back to building products that actually work for the people using them.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-10 flex items-center gap-2 text-neutral-400"
        >
          <MapPin className="w-4 h-4" />
          <span className="text-sm">
            Based in Hyderabad, India · Open to roles globally
          </span>
        </motion.div>
      </div>
    </section>
  );
}