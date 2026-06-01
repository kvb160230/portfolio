"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Award } from "lucide-react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { certifications } from "@/src/content/certifications";
import { contact } from "@/src/content/contact";

export function CertificationsAndContact() {
  return (
    <section id="contact" className="relative py-24 md:py-32 px-6 md:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <p className="font-mono text-sm text-indigo-400 mb-3">
              05 — Certifications
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-8">
              Credentials
            </h2>

            <div className="space-y-4">
              {certifications.map((cert, idx) => (
                <motion.div
                  key={cert.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.4, delay: idx * 0.08 }}
                  className="flex items-start gap-4 p-4 rounded-xl bg-neutral-900/50 border border-neutral-800 hover:border-neutral-700 transition-all"
                >
                  <div className="p-2 rounded-lg bg-indigo-500/10 text-indigo-400 shrink-0">
                    <Award className="w-5 h-5" />
                  </div>
                  <div className="grow min-w-0">
                    <h3 className="text-white font-medium">{cert.name}</h3>
                    <p className="text-sm text-neutral-400 mt-1">
                      {cert.issuer}
                    </p>
                    <p className="font-mono text-xs text-neutral-500 mt-2">
                      {cert.date}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <p className="font-mono text-sm text-indigo-400 mb-3">
              06 — Contact
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-4">
              Let&apos;s talk
            </h2>
            <p className="text-neutral-400 leading-relaxed mb-8 max-w-md">
              I&apos;m open to interesting roles, side projects, and the
              occasional good conversation about engineering, debugging war
              stories, or product. Reach out — I reply to everything.
            </p>

            <a
              href={`mailto:${contact.email}`}
              className="group inline-flex items-center gap-3 px-6 py-4 rounded-2xl bg-linear-to-r from-indigo-500 to-violet-500 text-white font-medium hover:shadow-lg hover:shadow-indigo-500/25 transition-all mb-8"
            >
              <Mail className="w-5 h-5" />
              {contact.email}
            </a>

            <div className="flex items-center gap-2 text-neutral-400 mb-6">
              <MapPin className="w-4 h-4" />
              <span className="text-sm">{contact.location}</span>
            </div>

            <div className="flex items-center gap-3">
              {contact.socials.map((social) => {
                const Icon = social.name === "LinkedIn" ? FaLinkedin : FaGithub;
                return (
                  <a key={social.name} href={social.url} target="_blank" rel="noopener noreferrer" aria-label={`${social.name} — @${social.handle}`} className="group inline-flex items-center justify-center w-11 h-11 rounded-full border border-neutral-800 text-neutral-300 hover:border-neutral-600 hover:bg-neutral-900 hover:text-indigo-300 transition-all">
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}