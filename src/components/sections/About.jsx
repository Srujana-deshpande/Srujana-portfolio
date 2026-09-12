"use client";

import React from "react";
import { personalData } from "@/data/personal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Briefcase, GraduationCap, Code2, MapPin, CheckCircle, Rocket, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export function About() {
  const getIcon = (iconName) => {
    switch (iconName) {
      case "Briefcase": return <Briefcase className="w-5 h-5 text-[var(--accent)]" />;
      case "GraduationCap": return <GraduationCap className="w-5 h-5 text-[var(--accent)]" />;
      case "Code2": return <Code2 className="w-5 h-5 text-[var(--accent)]" />;
      case "MapPin": return <MapPin className="w-5 h-5 text-[var(--accent)]" />;
      default: return <Sparkles className="w-5 h-5 text-[var(--accent)]" />;
    }
  };

  return (
    <section id="about" className="py-24 relative bg-[var(--surface-secondary)]/50 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="About Me"
          title="Engineering Mindset & Product Vision"
          subtitle="Combining full-stack software development with C#/.NET architecture, UI/UX principles, and data-driven digital growth strategies."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Left Side — Narrative Bio */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 flex flex-col justify-between rounded-3xl bg-[var(--surface)] border border-[var(--border)] p-8 sm:p-10 shadow-[var(--card-shadow)]"
          >
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-[var(--accent-soft)] text-[var(--accent)] text-xs font-bold mb-6">
                <Rocket size={14} />
                <span>Full Stack, .NET & Product Developer</span>
              </div>

              <div className="space-y-4 text-base text-[var(--text-secondary)] leading-relaxed font-normal">
                {personalData.bioParagraphs.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </div>

            {/* Core Interest Pills */}
            <div className="mt-8 pt-6 border-t border-[var(--border)]">
              <h4 className="text-xs uppercase font-bold tracking-wider text-[var(--text-muted)] mb-3">
                Primary Disciplines
              </h4>
              <div className="flex flex-wrap gap-2">
                {[
                  "C# & .NET Core",
                  "Front-End Engineering",
                  "Back-End APIs",
                  "UI/UX Design",
                  "Product Strategy",
                  "Digital Marketing & SEO"
                ].map((item) => (
                  <span
                    key={item}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[var(--surface-secondary)] text-[var(--text-primary)] text-xs font-semibold border border-[var(--border-subtle)]"
                  >
                    <CheckCircle className="w-3.5 h-3.5 text-[var(--accent)]" />
                    <span>{item}</span>
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Side — Highlight Cards Grid */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {personalData.aboutCards.map((card, idx) => (
              <div
                key={idx}
                className="group p-6 rounded-2xl bg-[var(--surface)] border border-[var(--border)] hover:border-[var(--accent)] hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-[var(--accent-soft)] border border-[var(--accent)]/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    {getIcon(card.icon)}
                  </div>
                  <span className="text-xs font-bold text-[var(--text-muted)] uppercase tracking-wider">
                    {card.title}
                  </span>
                  <h3 className="text-lg font-bold text-[var(--text-primary)] mt-1">
                    {card.value}
                  </h3>
                </div>

                <p className="mt-3 text-xs text-[var(--text-secondary)] leading-relaxed">
                  {card.description}
                </p>
              </div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
