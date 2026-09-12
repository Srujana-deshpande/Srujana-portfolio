"use client";

import React, { useEffect } from "react";
import { GithubIcon } from "@/components/ui/Icons";
import { X, ExternalLink, Sparkles, CheckCircle2, AlertCircle, FileText, Presentation } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function ProjectModal({ project, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    if (project) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/75 backdrop-blur-md"
        />

        {/* Modal Window Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3 }}
          className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto z-10 rounded-3xl bg-[var(--surface)] text-[var(--text-primary)] border border-[var(--border)] shadow-2xl shadow-black/20 p-6 sm:p-8"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            aria-label="Close project detail modal"
            className="absolute top-5 right-5 p-2 rounded-full bg-[var(--surface-secondary)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--accent-soft)] transition-colors"
          >
            <X size={20} />
          </button>

          {/* Modal Header */}
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="px-3 py-1 text-xs font-bold rounded-full bg-[var(--accent-soft)] text-[var(--accent)] border border-[var(--accent)]/30">
              {project.category}
            </span>
            <span className="text-xs text-[var(--text-muted)] font-mono">
              Year: {project.year} • Status: {project.status}
            </span>
          </div>

          <h3 className="text-2xl sm:text-4xl font-extrabold text-[var(--text-primary)] tracking-tight">
            {project.title}
          </h3>

          <p className="mt-3 text-base text-[var(--text-secondary)] leading-relaxed">
            {project.description}
          </p>

          {/* Tech stack badges */}
          <div className="mt-6">
            <h4 className="text-xs uppercase font-bold tracking-wider text-[var(--text-muted)] mb-2">
              Technologies Used
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 text-xs font-semibold rounded-lg bg-[var(--surface-secondary)] border border-[var(--border)] text-[var(--text-secondary)]"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Problem & Solution Grid */}
          {(project.problem || project.solution) && (
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
              {project.problem && (
                <div className="p-5 rounded-2xl bg-[var(--surface-secondary)] border border-[var(--border)]">
                  <div className="flex items-center gap-2 text-amber-600 dark:text-amber-400 font-bold text-sm mb-2">
                    <AlertCircle size={18} />
                    <span>The Problem</span>
                  </div>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                    {project.problem}
                  </p>
                </div>
              )}

              {project.solution && (
                <div className="p-5 rounded-2xl bg-[var(--surface-secondary)] border border-[var(--border)]">
                  <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 font-bold text-sm mb-2">
                    <CheckCircle2 size={18} />
                    <span>The Solution</span>
                  </div>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                    {project.solution}
                  </p>
                </div>
              )}
            </div>
          )}

          {/* Features List */}
          {project.features && project.features.length > 0 && (
            <div className="mt-8">
              <h4 className="text-base font-bold text-[var(--text-primary)] mb-3 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-[var(--accent)]" />
                <span>Key Features</span>
              </h4>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {project.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] mt-2 shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Modal Action Buttons */}
          <div className="mt-8 pt-6 border-t border-[var(--border)] flex items-center gap-4 flex-wrap">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[var(--surface-secondary)] hover:bg-[var(--border)] text-[var(--text-primary)] font-bold text-sm transition-colors border border-[var(--border)]"
              >
                <GithubIcon size={18} />
                <span>GitHub Repository</span>
              </a>
            )}

            {project.liveDemo && (
              <a
                href={project.liveDemo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[var(--accent)] hover:bg-[var(--accent-hover)] text-white font-bold text-sm shadow-lg shadow-[var(--accent)]/25 transition-all"
              >
                <ExternalLink size={18} />
                <span>Live Demo Website</span>
              </a>
            )}

            {project.documentUrl && (
              <a
                href={project.documentUrl}
                target="_blank"
                rel="noopener noreferrer"
                download
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[var(--surface-secondary)] hover:bg-[var(--border)] text-[var(--text-primary)] font-bold text-sm transition-colors border border-[var(--border)]"
              >
                <FileText size={18} className="text-[var(--accent)]" />
                <span>Documentation (DOCX)</span>
              </a>
            )}

            {project.presentationUrl && (
              <a
                href={project.presentationUrl}
                target="_blank"
                rel="noopener noreferrer"
                download
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[var(--surface-secondary)] hover:bg-[var(--border)] text-[var(--text-primary)] font-bold text-sm transition-colors border border-[var(--border)]"
              >
                <Presentation size={18} className="text-[var(--accent)]" />
                <span>Presentation Slides (PPTX)</span>
              </a>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
