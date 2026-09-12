"use client";

import React from "react";
import { services } from "@/data/services";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Code2, Layout, Megaphone, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

export function Services() {
  const getIcon = (iconName) => {
    switch (iconName) {
      case "Code2":
        return <Code2 className="w-7 h-7 text-[var(--accent)]" />;
      case "Layout":
        return <Layout className="w-7 h-7 text-[var(--accent)]" />;
      case "Megaphone":
        return <Megaphone className="w-7 h-7 text-[var(--accent)]" />;
      default:
        return <Code2 className="w-7 h-7 text-[var(--accent)]" />;
    }
  };

  return (
    <section id="services" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Core Expertise"
          title="Services & Capabilities"
          subtitle="Delivering end-to-end digital solutions spanning C#/.NET enterprise engineering, human-centered UI/UX, and growth marketing."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              whileHover={{ y: -8 }}
              className="group relative flex flex-col justify-between p-8 rounded-3xl bg-[var(--surface)] border border-[var(--border)] hover:border-[var(--accent)] hover:shadow-xl hover:shadow-[var(--accent)]/10 transition-all duration-300 shadow-[var(--card-shadow)]"
            >
              <div>
                {/* Service Icon Badge */}
                <div className="w-14 h-14 rounded-2xl bg-[var(--accent-soft)] border border-[var(--accent)]/20 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-[var(--accent)] group-hover:text-white transition-all duration-300">
                  {getIcon(service.icon)}
                </div>

                <h3 className="text-2xl font-extrabold text-[var(--text-primary)] group-hover:text-[var(--accent)] transition-colors">
                  {service.title}
                </h3>

                <p className="mt-3 text-sm text-[var(--text-secondary)] leading-relaxed">
                  {service.description}
                </p>
              </div>

              {/* Service Skill Highlights */}
              <div className="mt-8 pt-6 border-t border-[var(--border)]">
                <h4 className="text-xs uppercase font-bold tracking-wider text-[var(--text-muted)] mb-3">
                  Key Deliverables
                </h4>
                <div className="flex flex-wrap gap-2">
                  {service.skills.map((skill) => (
                    <span
                      key={skill}
                      className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-[var(--surface-secondary)] text-[var(--text-primary)] text-xs font-semibold border border-[var(--border-subtle)]"
                    >
                      <CheckCircle2 size={12} className="text-[var(--accent)]" />
                      <span>{skill}</span>
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
