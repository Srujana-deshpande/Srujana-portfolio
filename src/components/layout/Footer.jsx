"use client";

import React from "react";
import { personalData } from "@/data/personal";
import { SocialLinks } from "@/components/ui/SocialLinks";
import { ArrowUp, Code2 } from "lucide-react";
import { motion } from "framer-motion";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-[var(--surface-secondary)] border-t border-[var(--border)] pt-16 pb-12 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-12 border-b border-[var(--border)]">
          {/* Brand info */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <a
              href="#hero"
              className="flex items-center gap-2.5 text-xl font-extrabold tracking-tight text-[var(--text-primary)] mb-2"
            >
              <div className="w-8 h-8 rounded-lg bg-[var(--accent-soft)] border border-[var(--accent)]/30 text-[var(--accent)] flex items-center justify-center">
                <Code2 size={18} />
              </div>
              <span>{personalData.name}</span>
            </a>
            <p className="text-sm text-[var(--text-secondary)] max-w-sm">
              {personalData.primaryRole} & Product Developer. Crafting scalable web solutions and digital growth strategies.
            </p>
          </div>

          {/* Socials & Back to Top */}
          <div className="flex flex-col items-center md:items-end gap-4">
            <SocialLinks iconSize={18} showLabels={false} />
            <motion.button
              onClick={scrollToTop}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Scroll back to top"
              className="inline-flex items-center gap-2 text-xs font-semibold text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors"
            >
              <span>Back to Top</span>
              <div className="p-2 rounded-full bg-[var(--surface)] border border-[var(--border)] text-[var(--accent)]">
                <ArrowUp size={14} />
              </div>
            </motion.button>
          </div>
        </div>

        {/* Copyright notice */}
        <div className="pt-8 text-center text-xs text-[var(--text-muted)]">
          <p>© {currentYear} {personalData.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
