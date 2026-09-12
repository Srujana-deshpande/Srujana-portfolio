"use client";

import React from "react";
import { achievements } from "@/data/achievements";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Trophy, Calendar, FileText } from "lucide-react";
import { motion } from "framer-motion";

export function Achievements() {
  // If achievements array is empty, hide section automatically
  if (!achievements || achievements.length === 0) {
    return null;
  }

  return (
    <section id="achievements" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Milestones"
          title="Key Achievements"
          subtitle="Notable accomplishments, project recognitions, and competitive milestones."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {achievements.map((ach, idx) => (
            <motion.div
              key={ach.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="p-6 rounded-3xl bg-[var(--surface)] border border-[var(--border)] hover:border-[var(--accent)] transition-all shadow-[var(--card-shadow)] hover:shadow-[var(--card-shadow-hover)] flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-600 dark:text-amber-400 flex items-center justify-center">
                    <Trophy size={20} />
                  </div>
                  <span className="text-xs font-semibold text-[var(--text-muted)] flex items-center gap-1">
                    <Calendar size={12} />
                    {ach.date}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-[var(--text-primary)]">
                  {ach.title}
                </h3>
                <p className="text-xs font-bold text-amber-600 dark:text-amber-400 mt-1">
                  {ach.organization}
                </p>
                <p className="mt-3 text-sm text-[var(--text-secondary)] leading-relaxed">
                  {ach.description}
                </p>
              </div>

              {ach.certificateUrl && (
                <div className="mt-6 pt-4 border-t border-[var(--border)]">
                  <a
                    href={ach.certificateUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[var(--accent)] hover:underline"
                  >
                    <FileText size={14} />
                    <span>View Official Certificate (PDF)</span>
                  </a>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
