import React from "react";
import { projects } from "@/data/projects";
import { notFound } from "next/navigation";
import Link from "next/link";
import { GithubIcon } from "@/components/ui/Icons";
import { ArrowLeft, ExternalLink, Sparkles, AlertCircle, CheckCircle2, Layers, FileText, Presentation } from "lucide-react";

export async function generateStaticParams() {
  return projects.map((p) => ({
    slug: p.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return { title: "Project Not Found" };
  return {
    title: `${project.title} | Srujana Deshpande Portfolio`,
    description: project.shortDescription,
  };
}

export default async function ProjectDetailPage({ params }) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  const relatedProjects = projects.filter((p) => p.id !== project.id).slice(0, 2);

  return (
    <main className="min-h-screen pt-28 pb-20 bg-[var(--background)] text-[var(--text-primary)]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Back Link */}
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 text-xs font-semibold text-[var(--text-muted)] hover:text-[var(--accent)] transition-colors mb-8"
        >
          <ArrowLeft size={16} />
          <span>Back to Projects</span>
        </Link>

        {/* Project Header */}
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <span className="px-3.5 py-1 text-xs font-bold rounded-full bg-[var(--accent-soft)] text-[var(--accent)] border border-[var(--accent)]/30">
              {project.category}
            </span>
            <span className="text-xs font-mono text-[var(--text-muted)]">
              {project.year} • {project.status}
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-[var(--text-primary)] tracking-tight">
            {project.title}
          </h1>

          <p className="text-lg text-[var(--text-secondary)] max-w-3xl leading-relaxed">
            {project.description}
          </p>

          {/* Action Links */}
          <div className="flex items-center gap-4 pt-4 flex-wrap">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[var(--surface-secondary)] hover:bg-[var(--border)] text-[var(--text-primary)] text-xs font-bold transition-all border border-[var(--border)]"
              >
                <GithubIcon size={16} />
                <span>Source Code</span>
              </a>
            )}

            {project.liveDemo && (
              <a
                href={project.liveDemo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[var(--accent)] hover:bg-[var(--accent-hover)] text-white text-xs font-bold shadow-lg shadow-[var(--accent)]/30 transition-all"
              >
                <ExternalLink size={16} />
                <span>Live Demo</span>
              </a>
            )}

            {project.documentUrl && (
              <a
                href={project.documentUrl}
                target="_blank"
                rel="noopener noreferrer"
                download
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[var(--surface-secondary)] hover:bg-[var(--border)] text-[var(--text-primary)] text-xs font-bold transition-all border border-[var(--border)]"
              >
                <FileText size={16} className="text-[var(--accent)]" />
                <span>Documentation (DOCX)</span>
              </a>
            )}

            {project.presentationUrl && (
              <a
                href={project.presentationUrl}
                target="_blank"
                rel="noopener noreferrer"
                download
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[var(--surface-secondary)] hover:bg-[var(--border)] text-[var(--text-primary)] text-xs font-bold transition-all border border-[var(--border)]"
              >
                <Presentation size={16} className="text-[var(--accent)]" />
                <span>Presentation Slides (PPTX)</span>
              </a>
            )}
          </div>
        </div>

        {/* Project Visual Banner Placeholder */}
        <div className="my-10 relative h-72 sm:h-96 w-full rounded-3xl bg-[var(--surface-secondary)] border border-[var(--border)] overflow-hidden flex items-center justify-center p-8 text-center shadow-[var(--card-shadow)]">
          <div className="space-y-2">
            <Sparkles className="w-10 h-10 text-[var(--accent)] mx-auto" />
            <h3 className="text-2xl font-bold text-[var(--text-primary)]">{project.title}</h3>
            <p className="text-xs text-[var(--text-muted)] font-mono">Case Study Showcase</p>
          </div>
        </div>

        {/* Problem vs Solution */}
        {(project.problem || project.solution) && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-10">
            {project.problem && (
              <div className="p-6 rounded-3xl bg-[var(--surface)] border border-[var(--border)] shadow-[var(--card-shadow)]">
                <div className="flex items-center gap-2 text-amber-600 dark:text-amber-400 font-bold text-sm mb-3">
                  <AlertCircle size={18} />
                  <span>The Problem</span>
                </div>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                  {project.problem}
                </p>
              </div>
            )}

            {project.solution && (
              <div className="p-6 rounded-3xl bg-[var(--surface)] border border-[var(--border)] shadow-[var(--card-shadow)]">
                <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 font-bold text-sm mb-3">
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

        {/* Features & Tech Stack */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 my-10">
          
          {/* Key Features */}
          {project.features && (
            <div className="md:col-span-7 p-6 rounded-3xl bg-[var(--surface)] border border-[var(--border)] shadow-[var(--card-shadow)]">
              <h3 className="text-lg font-bold text-[var(--text-primary)] mb-4 flex items-center gap-2">
                <Sparkles size={18} className="text-[var(--accent)]" />
                <span>Key Features</span>
              </h3>
              <ul className="space-y-2.5">
                {project.features.map((feat, i) => (
                  <li key={i} className="flex items-start gap-2 text-xs sm:text-sm text-[var(--text-secondary)]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] mt-2 shrink-0" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Tech Stack */}
          <div className="md:col-span-5 p-6 rounded-3xl bg-[var(--surface)] border border-[var(--border)] shadow-[var(--card-shadow)]">
            <h3 className="text-lg font-bold text-[var(--text-primary)] mb-4 flex items-center gap-2">
              <Layers size={18} className="text-[var(--accent)]" />
              <span>Technology Stack</span>
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((t) => (
                <span key={t} className="px-3 py-1.5 rounded-xl bg-[var(--surface-secondary)] text-xs font-semibold text-[var(--text-secondary)] border border-[var(--border-subtle)]">
                  {t}
                </span>
              ))}
            </div>
          </div>

        </div>

        {/* Related Projects */}
        {relatedProjects.length > 0 && (
          <div className="mt-16 pt-12 border-t border-[var(--border)]">
            <h3 className="text-xl font-bold text-[var(--text-primary)] mb-6">Explore Other Projects</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {relatedProjects.map((rp) => (
                <Link
                  key={rp.id}
                  href={`/projects/${rp.slug}`}
                  className="p-6 rounded-2xl bg-[var(--surface)] border border-[var(--border)] hover:border-[var(--accent)] transition-all group shadow-[var(--card-shadow)]"
                >
                  <span className="text-xs font-mono text-[var(--text-muted)]">{rp.category}</span>
                  <h4 className="text-lg font-bold text-[var(--text-primary)] group-hover:text-[var(--accent)] transition-colors mt-1">
                    {rp.title}
                  </h4>
                  <p className="text-xs text-[var(--text-secondary)] line-clamp-2 mt-2">
                    {rp.shortDescription}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        )}

      </div>
    </main>
  );
}
