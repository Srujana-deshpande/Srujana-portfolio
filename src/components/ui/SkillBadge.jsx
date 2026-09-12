"use client";

import React from "react";
import { GithubIcon, FigmaIcon } from "@/components/ui/Icons";
import {
  Code,
  Palette,
  FileCode,
  Atom,
  Layers,
  FileCode2,
  Wind,
  Server,
  Cpu,
  Globe,
  Workflow,
  Database,
  HardDrive,
  Table,
  GitBranch,
  Terminal,
  Send,
  Cloud,
  Smartphone,
  LayoutGrid,
  Compass,
  TrendingUp,
  PenTool,
  Share2,
  Target,
  CheckCircle2
} from "lucide-react";
import { motion } from "framer-motion";

export function SkillBadge({ skill }) {
  const renderIcon = (name) => {
    switch (name) {
      case "Code": return <Code className="w-4 h-4 text-[var(--accent)]" />;
      case "Palette": return <Palette className="w-4 h-4 text-[var(--accent)]" />;
      case "FileCode": return <FileCode className="w-4 h-4 text-[var(--accent)]" />;
      case "Atom": return <Atom className="w-4 h-4 text-[var(--accent)]" />;
      case "Layers": return <Layers className="w-4 h-4 text-[var(--accent)]" />;
      case "FileCode2": return <FileCode2 className="w-4 h-4 text-[var(--accent)]" />;
      case "Wind": return <Wind className="w-4 h-4 text-[var(--accent)]" />;
      case "Server": return <Server className="w-4 h-4 text-[var(--accent)]" />;
      case "Cpu": return <Cpu className="w-4 h-4 text-[var(--accent)]" />;
      case "Globe": return <Globe className="w-4 h-4 text-[var(--accent)]" />;
      case "Workflow": return <Workflow className="w-4 h-4 text-[var(--accent)]" />;
      case "Database": return <Database className="w-4 h-4 text-[var(--accent)]" />;
      case "HardDrive": return <HardDrive className="w-4 h-4 text-[var(--accent)]" />;
      case "Table": return <Table className="w-4 h-4 text-[var(--accent)]" />;
      case "GitBranch": return <GitBranch className="w-4 h-4 text-[var(--accent)]" />;
      case "Github": return <GithubIcon size={16} className="text-[var(--accent)]" />;
      case "Terminal": return <Terminal className="w-4 h-4 text-[var(--accent)]" />;
      case "Send": return <Send className="w-4 h-4 text-[var(--accent)]" />;
      case "Cloud": return <Cloud className="w-4 h-4 text-[var(--accent)]" />;
      case "Figma": return <FigmaIcon size={16} className="text-[var(--accent)]" />;
      case "Smartphone": return <Smartphone className="w-4 h-4 text-[var(--accent)]" />;
      case "LayoutGrid": return <LayoutGrid className="w-4 h-4 text-[var(--accent)]" />;
      case "Compass": return <Compass className="w-4 h-4 text-[var(--accent)]" />;
      case "TrendingUp": return <TrendingUp className="w-4 h-4 text-[var(--accent)]" />;
      case "PenTool": return <PenTool className="w-4 h-4 text-[var(--accent)]" />;
      case "Share2": return <Share2 className="w-4 h-4 text-[var(--accent)]" />;
      case "Target": return <Target className="w-4 h-4 text-[var(--accent)]" />;
      default: return <CheckCircle2 className="w-4 h-4 text-[var(--accent)]" />;
    }
  };

  return (
    <motion.div
      whileHover={{ scale: 1.04, y: -2 }}
      transition={{ duration: 0.2 }}
      className="flex items-center gap-2.5 px-3.5 py-2.5 rounded-xl bg-[var(--surface)] border border-[var(--border)] text-[var(--text-primary)] text-sm font-medium hover:bg-[var(--accent-soft)] hover:border-[var(--accent)] transition-all shadow-sm"
    >
      {renderIcon(skill.icon)}
      <span>{skill.name}</span>
    </motion.div>
  );
}
