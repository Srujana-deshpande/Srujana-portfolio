"use client";

import React from "react";
import { motion } from "framer-motion";

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  centered = true,
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={`mb-12 md:mb-16 ${centered ? "text-center" : "text-left"}`}
    >
      <div
        className={`inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-[var(--accent)] bg-[var(--accent-soft)] border border-[var(--accent)]/20 mb-3.5 ${
          centered ? "justify-center" : ""
        }`}
      >
        <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] animate-pulse" />
        {eyebrow}
      </div>

      <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[var(--text-primary)] tracking-tight">
        {title}
      </h2>

      {subtitle && (
        <p className="mt-4 text-base md:text-lg text-[var(--text-secondary)] max-w-2xl mx-auto font-normal leading-relaxed">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
