"use client";

import React from "react";
import { GithubIcon } from "@/components/ui/Icons";
import { ExternalLink, ArrowRight, Sparkles, FileText, Presentation } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

export function ProjectCard({ project, onOpenModal }) {
  const getCategoryColor = (cat) => {
    switch (cat.toLowerCase()) {
      case "full stack":
        return "bg-[var(--accent-soft)] text-[var(--accent)] border-[var(--accent)]/30";
      case "frontend":
        return "bg-sky-500/10 text-sky-600 dark:text-sky-400 border-sky-500/30";
      case "iot":
        return "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/30";
      case "ui/ux":
        return "bg-purple-500/10 text-purple-600 dark:text-purple-400 border-purple-500/30";
      default:
        return "bg-neutral-500/10 text-neutral-600 dark:text-neutral-400 border-neutral-500/30";
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -6 }}
      transition={{ duration: 0.3 }}
      className="group relative flex flex-col h-full rounded-2xl bg-[var(--surface)] border border-[var(--border)] overflow-hidden hover:border-[var(--accent)] shadow-[var(--card-shadow)] hover:shadow-[var(--card-shadow-hover)] transition-all duration-300"
    >
      {/* Project Visual Cover Header */}
      <div className="relative h-48 md:h-52 w-full overflow-hidden bg-neutral-900 dark:bg-neutral-950 flex items-center justify-center">
        {/* Decorative Grid & Glow in background */}
        <div className="absolute inset-0 bg-grid-pattern opacity-10" />
        <div className="absolute -top-12 -left-12 w-40 h-40 bg-[var(--accent)]/20 rounded-full blur-2xl group-hover:scale-110 transition-transform" />

        {/* Dynamic Project Graphic Representation */}
        <div className="relative z-10 p-6 text-center transform group-hover:scale-105 transition-transform duration-500">
          <div className="inline-flex p-3 rounded-2xl bg-[var(--accent-soft)] border border-[var(--accent)]/30 text-[var(--accent)] mb-2">
            <Sparkles className="w-6 h-6 animate-pulse" />
          </div>
          <h3 className="text-xl font-bold text-white tracking-wide drop-shadow-md">
            {project.title}
          </h3>
          <p className="text-xs text-neutral-300 mt-1 font-mono">{project.year} • {project.category}</p>
        </div>

        {/* Floating Category Badge */}
        <div className="absolute top-4 left-4 z-20">
          <span className={`inline-block px-3 py-1 text-xs font-semibold rounded-full border ${getCategoryColor(project.category)}`}>
            {project.category}
          </span>
        </div>

        {/* Featured Badge if applicable */}
        {project.featured && (
          <div className="absolute top-4 right-4 z-20">
            <span className="inline-flex items-center gap-1 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider rounded-full bg-amber-500/20 text-amber-500 dark:text-amber-400 border border-amber-500/30">
              ★ Featured
            </span>
          </div>
        )}
      </div>

      {/* Card Content Body */}
      <div className="flex flex-col flex-1 p-6">
        <h4 className="text-xl font-bold text-[var(--text-primary)] group-hover:text-[var(--accent)] transition-colors">
          {project.title}
        </h4>

        <p className="mt-2 text-sm text-[var(--text-secondary)] line-clamp-3 leading-relaxed flex-1">
          {project.shortDescription}
        </p>

        {/* Technologies Pills */}
        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.technologies.slice(0, 5).map((tech) => (
            <span
              key={tech}
              className="px-2.5 py-1 text-xs font-semibold rounded-lg bg-[var(--surface-secondary)] text-[var(--text-secondary)] border border-[var(--border-subtle)]"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 5 && (
            <span className="px-2 py-1 text-xs font-medium text-[var(--text-muted)]">
              +{project.technologies.length - 5} more
            </span>
          )}
        </div>

        {/* Card Actions Footer */}
        <div className="mt-6 pt-4 border-t border-[var(--border)] flex items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            {/* GitHub Button */}
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View ${project.title} source code on GitHub`}
                className="p-2 rounded-lg bg-[var(--surface-secondary)] text-[var(--text-secondary)] hover:text-[var(--accent)] hover:bg-[var(--accent-soft)] border border-transparent hover:border-[var(--accent)]/30 transition-all"
                title="Source Code"
              >
                <GithubIcon size={16} />
              </a>
            )}

            {/* Live Demo Button */}
            {project.liveDemo && (
              <a
                href={project.liveDemo}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Visit live demo for ${project.title}`}
                className="p-2 rounded-lg bg-[var(--surface-secondary)] text-[var(--text-secondary)] hover:text-[var(--accent)] hover:bg-[var(--accent-soft)] border border-transparent hover:border-[var(--accent)]/30 transition-all"
                title="Live Demo"
              >
                <ExternalLink size={16} />
              </a>
            )}

            {/* Document Reference Button */}
            {project.documentUrl && (
              <a
                href={project.documentUrl}
                target="_blank"
                rel="noopener noreferrer"
                download
                aria-label={`Download reference document for ${project.title}`}
                className="p-2 rounded-lg bg-[var(--surface-secondary)] text-[var(--text-secondary)] hover:text-[var(--accent)] hover:bg-[var(--accent-soft)] border border-transparent hover:border-[var(--accent)]/30 transition-all"
                title="Project Documentation (DOCX)"
              >
                <FileText size={16} />
              </a>
            )}

            {/* Presentation PPTX Button */}
            {project.presentationUrl && (
              <a
                href={project.presentationUrl}
                target="_blank"
                rel="noopener noreferrer"
                download
                aria-label={`Download presentation slides for ${project.title}`}
                className="p-2 rounded-lg bg-[var(--surface-secondary)] text-[var(--text-secondary)] hover:text-[var(--accent)] hover:bg-[var(--accent-soft)] border border-transparent hover:border-[var(--accent)]/30 transition-all"
                title="Presentation (PPTX)"
              >
                <Presentation size={16} />
              </a>
            )}
          </div>

          <div className="flex items-center gap-2">
            {onOpenModal ? (
              <button
                onClick={() => onOpenModal(project)}
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[var(--accent)] hover:text-[var(--accent-hover)] group-hover:translate-x-0.5 transition-all"
              >
                <span>Details</span>
                <ArrowRight size={14} />
              </button>
            ) : (
              <Link
                href={`/projects/${project.slug}`}
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[var(--accent)] hover:text-[var(--accent-hover)] group-hover:translate-x-0.5 transition-all"
              >
                <span>Case Study</span>
                <ArrowRight size={14} />
              </Link>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
