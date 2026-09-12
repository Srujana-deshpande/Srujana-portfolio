"use client";

import React from "react";
import { socialLinks } from "@/data/socials";
import { GithubIcon, LinkedinIcon } from "@/components/ui/Icons";
import { Mail, Globe } from "lucide-react";
import { motion } from "framer-motion";

export function SocialLinks({ className = "", iconSize = 18, showLabels = false }) {
  const getIcon = (iconName) => {
    switch (iconName.toLowerCase()) {
      case "github":
        return <GithubIcon size={iconSize} />;
      case "linkedin":
        return <LinkedinIcon size={iconSize} />;
      case "mail":
      case "email":
        return <Mail size={iconSize} />;
      default:
        return <Globe size={iconSize} />;
    }
  };

  const handleClick = (e, social) => {
    if (social.name.toLowerCase() === "email" || social.name.toLowerCase() === "mail") {
      const contactElem = document.getElementById("contact");
      if (contactElem) {
        contactElem.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <div className={`flex items-center gap-3 flex-wrap ${className}`}>
      {socialLinks.map((social) => (
        <motion.a
          key={social.name}
          href={social.url}
          onClick={(e) => handleClick(e, social)}
          target={social.url.startsWith("mailto:") ? "_self" : "_blank"}
          rel="noopener noreferrer"
          aria-label={social.name}
          title={social.name === "Email" ? "Send Email / Open Contact Form" : social.name}
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[var(--surface-secondary)] border border-[var(--border)] text-[var(--text-secondary)] hover:text-[var(--accent)] hover:border-[var(--accent)]/40 transition-colors shadow-sm text-xs font-semibold cursor-pointer"
        >
          {getIcon(social.icon)}
          {showLabels && <span>{social.name}</span>}
        </motion.a>
      ))}
    </div>
  );
}
