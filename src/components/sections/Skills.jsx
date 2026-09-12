"use client";

import React, { useState } from "react";
import { skillCategories } from "@/data/skills";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SkillBadge } from "@/components/ui/SkillBadge";
import { motion } from "framer-motion";

export function Skills() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", ...skillCategories.map((cat) => cat.category)];

  const filteredCategories =
    selectedCategory === "All"
      ? skillCategories
      : skillCategories.filter((cat) => cat.category === selectedCategory);

  return (
    <section id="skills" className="py-24 relative bg-[var(--surface-secondary)]/50 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Skills & Stack"
          title="Technical Capabilities"
          subtitle="A comprehensive toolkit across C# & .NET engineering, web front-ends, databases, UI design, and growth marketing."
        />

        {/* Category Tab Filters */}
        <div className="flex items-center justify-center flex-wrap gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs font-semibold transition-all ${
                selectedCategory === cat
                  ? "bg-[var(--accent)] text-white shadow-md shadow-[var(--accent)]/25"
                  : "bg-[var(--surface-secondary)] border border-[var(--border)] text-[var(--text-secondary)] hover:border-[var(--accent)]/40"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Category Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((categoryObj, idx) => (
            <motion.div
              key={categoryObj.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="flex flex-col justify-between p-6 sm:p-8 rounded-3xl bg-[var(--surface)] border border-[var(--border)] hover:border-[var(--accent)]/40 transition-all duration-300 shadow-[var(--card-shadow)]"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-bold text-[var(--text-primary)]">
                    {categoryObj.category}
                  </h3>
                  <span className="text-[11px] font-mono font-bold px-2.5 py-0.5 rounded-full bg-[var(--accent-soft)] text-[var(--accent)]">
                    {categoryObj.skills.length} Skills
                  </span>
                </div>

                <p className="text-xs text-[var(--text-muted)] mb-6">
                  {categoryObj.description}
                </p>

                {/* Skill Pills */}
                <div className="flex flex-wrap gap-2">
                  {categoryObj.skills.map((skill) => (
                    <SkillBadge key={skill.name} skill={skill} />
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
