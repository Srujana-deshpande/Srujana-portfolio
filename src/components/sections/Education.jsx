"use client";

import React from "react";
import { educationList } from "@/data/education";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GraduationCap, Calendar, MapPin, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

export function Education() {
  return (
    <section id="education" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Academic Background"
          title="Education & Training"
          subtitle="Foundational engineering studies, academic achievements, and continuous professional certifications."
        />

        <div className="grid grid-cols-1 gap-8">
          {educationList.map((edu, idx) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="p-6 sm:p-8 rounded-3xl bg-[var(--surface)] border border-[var(--border)] hover:border-[var(--accent)] hover:shadow-xl hover:shadow-[var(--accent)]/5 transition-all duration-300 flex flex-col md:flex-row md:items-start justify-between gap-6 shadow-[var(--card-shadow)]"
            >
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-xl bg-[var(--accent-soft)] border border-[var(--accent)]/20 text-[var(--accent)] flex items-center justify-center shrink-0">
                    <GraduationCap size={20} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[var(--text-primary)]">
                      {edu.degree}
                    </h3>
                    <p className="text-sm font-bold text-[var(--accent)]">
                      {edu.institution}
                    </p>
                  </div>
                </div>

                <p className="mt-4 text-sm text-[var(--text-secondary)] leading-relaxed">
                  {edu.description}
                </p>

                {edu.highlights && edu.highlights.length > 0 && (
                  <ul className="mt-4 space-y-1.5">
                    {edu.highlights.map((h, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs sm:text-sm text-[var(--text-secondary)]">
                        <CheckCircle2 size={14} className="text-[var(--accent)] shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              {/* Date & Location Pill */}
              <div className="flex flex-row md:flex-col items-center md:items-end gap-3 shrink-0">
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[var(--surface-secondary)] text-[var(--text-primary)] text-xs font-semibold border border-[var(--border-subtle)]">
                  <Calendar size={13} className="text-[var(--accent)]" />
                  {edu.startDate} – {edu.endDate}
                </span>
                {edu.location && (
                  <span className="text-xs text-[var(--text-muted)] flex items-center gap-1">
                    <MapPin size={12} />
                    {edu.location}
                  </span>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
