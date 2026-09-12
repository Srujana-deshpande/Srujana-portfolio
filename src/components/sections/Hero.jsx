"use client";

import React, { useState, useEffect } from "react";
import { personalData } from "@/data/personal";
import { SocialLinks } from "@/components/ui/SocialLinks";
import { ArrowRight, Download, Sparkles, Code2, Terminal, Cpu } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % personalData.roles.length);
    }, 2800);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen pt-32 pb-20 flex items-center justify-center overflow-hidden bg-grid-pattern"
    >
      {/* Subtle red ambient glow background accent */}
      <div 
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-[120px] pointer-events-none"
        style={{ background: "var(--hero-glow)" }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column — Text & CTAs */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 flex flex-col items-start text-left"
          >
            {/* Availability status badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-[var(--surface-secondary)] text-[var(--text-primary)] border border-[var(--border)] shadow-sm mb-6">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span>{personalData.status}</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-[var(--text-primary)] tracking-tight leading-[1.1]">
              Hello, I&apos;m{" "}
              <span className="block text-gradient-red">
                {personalData.name}
              </span>
            </h1>

            {/* Animated Role Cycler */}
            <div className="h-10 sm:h-12 mt-3 flex items-center overflow-hidden">
              <span className="text-lg sm:text-2xl font-bold text-[var(--text-muted)] mr-2.5">
                I am a
              </span>
              <AnimatePresence mode="wait">
                <motion.span
                  key={roleIndex}
                  initial={{ y: 25, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -25, opacity: 0 }}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                  className="text-lg sm:text-2xl font-extrabold text-[var(--accent)] underline decoration-[var(--accent)]/40 underline-offset-4"
                >
                  {personalData.roles[roleIndex]}
                </motion.span>
              </AnimatePresence>
            </div>

            {/* Sub-headline bio */}
            <p className="mt-5 text-base sm:text-lg text-[var(--text-secondary)] max-w-2xl leading-relaxed">
              {personalData.bioHeadline}
            </p>

            {/* Action buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#projects"
                className="group inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-[var(--accent)] hover:bg-[var(--accent-hover)] text-white font-bold text-sm shadow-xl shadow-[var(--accent)]/20 hover:shadow-[var(--accent)]/35 hover:-translate-y-0.5 transition-all"
              >
                <span>View Projects</span>
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href={personalData.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-[var(--surface-secondary)] border border-[var(--border)] text-[var(--text-primary)] font-bold text-sm hover:border-[var(--accent)]/50 hover:text-[var(--accent)] hover:-translate-y-0.5 transition-all"
              >
                <Download size={16} />
                <span>Download Resume</span>
              </a>
            </div>

            {/* Social Links */}
            <div className="mt-10 pt-6 border-t border-[var(--border)] w-full flex items-center gap-4">
              <span className="text-xs font-bold uppercase tracking-wider text-[var(--text-muted)]">
                Connect With Me
              </span>
              <SocialLinks iconSize={18} showLabels={false} />
            </div>
          </motion.div>

          {/* Right Column — Developer Avatar Card & Floating Stats */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 relative flex justify-center"
          >
            {/* Tech Developer Visual Emblem Frame */}
            <div className="relative w-full max-w-md aspect-square rounded-3xl bg-[var(--surface)] border border-[var(--border)] shadow-[var(--card-shadow-hover)] overflow-hidden flex flex-col justify-between">
              
              {/* Top Code Window Header Bar */}
              <div className="px-4 py-3 bg-[var(--surface-secondary)] border-b border-[var(--border)] flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-[var(--accent)]" />
                  <span className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
                </div>
                <span className="text-[11px] font-mono text-[var(--text-muted)] flex items-center gap-1">
                  <Terminal size={12} className="text-[var(--accent)]" />
                  srujana.developer.js
                </span>
              </div>

              {/* Central Abstract Developer Presentation */}
              <div className="relative flex-1 p-6 flex flex-col items-center justify-center text-center">
                <div className="relative mb-6">
                  {/* Outer animated ring */}
                  <div className="absolute inset-0 rounded-full bg-[var(--accent)] blur-md opacity-30 animate-pulse" />
                  
                  {/* Avatar Container */}
                  <div className="relative w-28 h-28 rounded-full bg-[var(--surface-secondary)] border-2 border-[var(--accent)]/50 flex items-center justify-center text-[var(--accent)] shadow-inner">
                    <Code2 size={48} className="text-[var(--accent)]" />
                  </div>
                </div>

                <h3 className="text-xl font-extrabold text-[var(--text-primary)]">
                  {personalData.name}
                </h3>
                <p className="text-xs text-[var(--accent)] font-semibold mt-0.5">
                  {personalData.primaryRole}
                </p>

                <div className="mt-4 px-4 py-2.5 rounded-xl bg-[var(--surface-secondary)] border border-[var(--border)] text-left font-mono text-xs text-[var(--text-secondary)] w-full space-y-1">
                  <p className="text-[var(--text-muted)]">// MERN, C#/.NET & Growth</p>
                  <p><span className="text-[var(--accent)] font-bold">const</span> status = <span className="text-emerald-600 dark:text-emerald-400">&quot;Building & Scaling&quot;</span>;</p>
                  <p><span className="text-[var(--accent)] font-bold">const</span> location = <span className="text-amber-600 dark:text-amber-400">&quot;Bengaluru, IN&quot;</span>;</p>
                </div>
              </div>

              {/* Bottom Card Footer */}
              <div className="px-4 py-3 bg-[var(--surface-secondary)] border-t border-[var(--border)] flex items-center justify-between text-xs text-[var(--text-muted)] font-mono">
                <span className="flex items-center gap-1">
                  <Cpu size={12} className="text-[var(--accent)]" /> ISE Engineering &apos;27
                </span>
                <span className="text-emerald-600 dark:text-emerald-400 flex items-center gap-1 font-semibold">
                  <Sparkles size={12} /> Saatvik .NET Intern
                </span>
              </div>
            </div>

            {/* Floating Stats Badges */}
            <div className="absolute -bottom-6 -left-4 sm:left-0 bg-[var(--surface)] backdrop-blur-md border border-[var(--border)] p-3.5 rounded-2xl shadow-xl flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-[var(--accent-soft)] text-[var(--accent)] font-extrabold text-base">
                10+
              </div>
              <div>
                <p className="text-xs font-bold text-[var(--text-primary)]">Projects Completed</p>
                <p className="text-[10px] text-[var(--text-muted)]">Full Stack, .NET & Web Apps</p>
              </div>
            </div>

            <div className="absolute -top-4 -right-4 sm:right-0 bg-[var(--surface)] backdrop-blur-md border border-[var(--border)] p-3.5 rounded-2xl shadow-xl flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-amber-500/10 text-amber-600 dark:text-amber-400 font-extrabold text-base">
                .NET
              </div>
              <div>
                <p className="text-xs font-bold text-[var(--text-primary)]">Saatvik Solutions</p>
                <p className="text-[10px] text-[var(--text-muted)]">C# & .NET Dev Intern</p>
              </div>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}
