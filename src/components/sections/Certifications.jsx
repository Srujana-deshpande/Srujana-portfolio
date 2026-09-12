"use client";

import React from "react";
import { certifications } from "@/data/certifications";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Award, ExternalLink, Calendar, FileText } from "lucide-react";
import { motion } from "framer-motion";

export function Certifications() {
  // If certification array is empty, hide the entire section automatically
  if (!certifications || certifications.length === 0) {
    return null;
  }

  return (
    <section id="certifications" className="py-20 relative bg-[var(--surface-secondary)]/50 transition-colors">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Credentials"
          title="Certifications & Honors"
          subtitle="Verified technical badges, professional IBM & AICTE certifications, and internship credentials."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {certifications.map((cert, idx) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="p-6 rounded-3xl bg-[var(--surface)] border border-[var(--border)] hover:border-[var(--accent)] transition-all flex flex-col justify-between shadow-[var(--card-shadow)] hover:shadow-[var(--card-shadow-hover)]"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-[var(--accent-soft)] border border-[var(--accent)]/20 text-[var(--accent)] flex items-center justify-center">
                    <Award size={20} />
                  </div>
                  <span className="text-xs font-semibold text-[var(--text-muted)] flex items-center gap-1">
                    <Calendar size={12} />
                    {cert.date}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-[var(--text-primary)] leading-snug">
                  {cert.title}
                </h3>
                <p className="text-xs font-bold text-[var(--accent)] mt-1.5">
                  Issued by: {cert.issuer}
                </p>

                {cert.skills && (
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {cert.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-2.5 py-0.5 text-[11px] font-semibold rounded-md bg-[var(--surface-secondary)] text-[var(--text-secondary)] border border-[var(--border-subtle)]"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              <div className="mt-6 pt-4 border-t border-[var(--border)] flex items-center gap-4 flex-wrap">
                {cert.credentialUrl && cert.credentialUrl.startsWith("http") && (
                  <a
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[var(--accent)] hover:underline"
                  >
                    <span>Verify Credential</span>
                    <ExternalLink size={12} />
                  </a>
                )}

                {cert.pdfUrl && (
                  <a
                    href={cert.pdfUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[var(--text-secondary)] hover:text-[var(--accent)] hover:underline"
                  >
                    <FileText size={13} className="text-[var(--accent)]" />
                    <span>View Certificate PDF</span>
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
