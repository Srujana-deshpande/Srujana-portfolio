"use client";

import React from "react";
import { experiences } from "@/data/experience";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Calendar, MapPin, ExternalLink, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

export function Experience() {
  return (
    <section id="experience" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Work Experience"
          title="Professional Journey"
          subtitle="Real-world experience in C# & .NET software engineering, product development, and digital growth."
        />

        {/* Vertical Timeline Wrapper */}
        <div className="relative pl-6 sm:pl-8 md:pl-10 space-y-12 before:absolute before:left-2.5 sm:before:left-3.5 md:before:left-[19px] before:top-3 before:bottom-3 before:w-0.5 before:bg-[var(--border)]">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="relative group"
            >
              {/* Timeline Marker Dot */}
              <div className="absolute -left-[31px] sm:-left-[39px] md:-left-[47px] top-1.5 w-6 h-6 rounded-full bg-[var(--surface)] border-2 border-[var(--accent)] flex items-center justify-center group-hover:scale-125 group-hover:bg-[var(--accent)] transition-all duration-300 shadow-md shadow-[var(--accent)]/20">
                <span className="w-2 h-2 rounded-full bg-[var(--accent)] group-hover:bg-white transition-colors" />
              </div>

              {/* Experience Card */}
              <div className="p-6 sm:p-8 rounded-3xl bg-[var(--surface)] border border-[var(--border)] hover:border-[var(--accent)] shadow-[var(--card-shadow)] hover:shadow-[var(--card-shadow-hover)] transition-all duration-300">
                
                {/* Role Header */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-[var(--border)]">
                  <div>
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="text-xl sm:text-2xl font-extrabold text-[var(--text-primary)]">
                        {exp.role}
                      </h3>
                      {exp.companyUrl ? (
                        <a
                          href={exp.companyUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-md bg-[var(--accent-soft)] text-[var(--accent)] hover:underline text-xs font-bold"
                        >
                          <span>{exp.company}</span>
                          <ExternalLink size={12} />
                        </a>
                      ) : (
                        <span className="px-2.5 py-0.5 rounded-md bg-[var(--accent-soft)] text-[var(--accent)] text-xs font-bold">
                          {exp.company}
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="flex items-center gap-4 text-xs font-semibold text-[var(--text-muted)]">
                    <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-[var(--surface-secondary)] border border-[var(--border-subtle)] text-[var(--text-secondary)]">
                      <Calendar size={13} className="text-[var(--accent)]" />
                      {exp.startDate} – {exp.endDate}
                    </span>
                    {exp.location && (
                      <span className="hidden sm:flex items-center gap-1">
                        <MapPin size={13} />
                        {exp.location}
                      </span>
                    )}
                  </div>
                </div>

                {/* Description */}
                <p className="mt-4 text-sm text-[var(--text-secondary)] leading-relaxed">
                  {exp.description}
                </p>

                {/* Key Achievements Bullet List */}
                {exp.achievements && exp.achievements.length > 0 && (
                  <div className="mt-5 space-y-2">
                    <h4 className="text-xs uppercase font-bold tracking-wider text-[var(--text-muted)]">
                      Key Highlights & Contributions
                    </h4>
                    <ul className="space-y-1.5">
                      {exp.achievements.map((ach, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-[var(--text-secondary)]">
                          <CheckCircle2 className="w-4 h-4 text-[var(--accent)] shrink-0 mt-0.5" />
                          <span>{ach}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Technologies Used */}
                {exp.technologies && exp.technologies.length > 0 && (
                  <div className="mt-6 flex flex-wrap gap-2 pt-4 border-t border-[var(--border)]">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs font-semibold rounded-lg bg-[var(--surface-secondary)] text-[var(--text-secondary)] border border-[var(--border-subtle)]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                )}

              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
