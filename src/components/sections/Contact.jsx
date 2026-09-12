"use client";

import React, { useState } from "react";
import { personalData } from "@/data/personal";
import { SocialLinks } from "@/components/ui/SocialLinks";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Mail, MapPin, Copy, Check, Send, Sparkles, MessageSquare } from "lucide-react";
import { motion } from "framer-motion";

export function Contact() {
  const [copied, setCopied] = useState(false);
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalData.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) {
      setErrorMsg("Please fill out all required fields.");
      return;
    }
    setErrorMsg("");
    setIsSubmitting(true);

    try {
      // Send form data directly to srujanadeshpande84@gmail.com via FormSubmit endpoint with unique token
      const response = await fetch("https://formsubmit.co/ajax/e763a8d82eaf3098cc567932245ba8ff", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          name: formState.name,
          email: formState.email,
          _subject: `[Portfolio Message] ${formState.subject || "New inquiry from " + formState.name}`,
          message: formState.message
        })
      });

      if (response.ok) {
        setSubmitted(true);
        setFormState({ name: "", email: "", subject: "", message: "" });
      } else {
        // Fallback to mailto link trigger if service is unavailable
        window.location.href = `mailto:srujanadeshpande84@gmail.com?subject=${encodeURIComponent(formState.subject || "Portfolio Inquiry")}&body=${encodeURIComponent(`Name: ${formState.name}\nEmail: ${formState.email}\n\nMessage:\n${formState.message}`)}`;
        setSubmitted(true);
      }
    } catch (err) {
      // Fallback to mailto link trigger
      window.location.href = `mailto:srujanadeshpande84@gmail.com?subject=${encodeURIComponent(formState.subject || "Portfolio Inquiry")}&body=${encodeURIComponent(`Name: ${formState.name}\nEmail: ${formState.email}\n\nMessage:\n${formState.message}`)}`;
      setSubmitted(true);
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitted(false), 6000);
    }
  };

  return (
    <section id="contact" className="py-24 relative bg-[var(--surface-secondary)]/50 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Get In Touch"
          title="Let's Work Together"
          subtitle="Have a project in mind, a C#/.NET engineering role, an internship opportunity, or want to discuss digital strategy? Drop me a message below!"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column — Contact Info & Quick Actions */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 space-y-6"
          >
            <div className="p-8 rounded-3xl bg-[var(--surface)] border border-[var(--border)] shadow-[var(--card-shadow)] space-y-6">
              <div className="inline-flex p-3 rounded-2xl bg-[var(--accent-soft)] text-[var(--accent)] border border-[var(--accent)]/30">
                <Sparkles size={24} />
              </div>

              <div>
                <h3 className="text-2xl font-extrabold text-[var(--text-primary)]">
                  Contact Information
                </h3>
                <p className="mt-2 text-sm text-[var(--text-secondary)] leading-relaxed">
                  I&apos;m currently available for C# & .NET software engineering roles, full-stack product development projects, and digital growth consulting.
                </p>
              </div>

              {/* Direct Email Pill with Copy Button */}
              <div className="p-4 rounded-2xl bg-[var(--surface-secondary)] border border-[var(--border)] flex items-center justify-between gap-3">
                <div className="flex items-center gap-3 overflow-hidden">
                  <div className="w-10 h-10 rounded-xl bg-[var(--accent-soft)] text-[var(--accent)] flex items-center justify-center shrink-0">
                    <Mail size={18} />
                  </div>
                  <div className="truncate">
                    <p className="text-[10px] uppercase font-bold tracking-wider text-[var(--text-muted)]">
                      Direct Email
                    </p>
                    <a
                      href={`mailto:${personalData.email}`}
                      className="text-sm font-bold text-[var(--text-primary)] hover:text-[var(--accent)] transition-colors truncate block"
                    >
                      {personalData.email}
                    </a>
                  </div>
                </div>

                <button
                  onClick={handleCopyEmail}
                  aria-label="Copy email address"
                  className="p-2.5 rounded-xl bg-[var(--surface)] hover:bg-[var(--accent)] hover:text-white text-[var(--text-primary)] border border-[var(--border)] transition-colors shrink-0"
                  title="Copy Email"
                >
                  {copied ? <Check size={16} className="text-emerald-600 dark:text-emerald-400" /> : <Copy size={16} />}
                </button>
              </div>

              {/* Location Card */}
              <div className="flex items-center gap-3 p-4 rounded-2xl bg-[var(--surface-secondary)] border border-[var(--border)]">
                <div className="w-10 h-10 rounded-xl bg-[var(--accent-soft)] text-[var(--accent)] flex items-center justify-center shrink-0">
                  <MapPin size={18} />
                </div>
                <div>
                  <p className="text-[10px] uppercase font-bold tracking-wider text-[var(--text-muted)]">
                    Based In
                  </p>
                  <p className="text-sm font-bold text-[var(--text-primary)]">
                    {personalData.location}
                  </p>
                </div>
              </div>

              {/* Social Links */}
              <div className="pt-4 border-t border-[var(--border)]">
                <p className="text-xs uppercase font-bold tracking-wider text-[var(--text-muted)] mb-3">
                  Connect Online
                </p>
                <SocialLinks iconSize={18} showLabels={true} />
              </div>

            </div>
          </motion.div>

          {/* Right Column — Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-7"
          >
            <form
              onSubmit={handleSubmit}
              className="p-8 sm:p-10 rounded-3xl bg-[var(--surface)] border border-[var(--border)] shadow-[var(--card-shadow)] space-y-6"
            >
              <div className="flex items-center gap-2 mb-2">
                <MessageSquare className="w-5 h-5 text-[var(--accent)]" />
                <h3 className="text-xl font-bold text-[var(--text-primary)]">
                  Send a Message
                </h3>
              </div>

              {errorMsg && (
                <div className="p-3.5 rounded-xl bg-[var(--accent-soft)] border border-[var(--accent)]/30 text-[var(--accent)] text-xs font-bold">
                  {errorMsg}
                </div>
              )}

              {submitted && (
                <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400 text-sm font-bold flex items-center gap-2">
                  <Check size={18} />
                  <span>Thank you! Your message has been sent directly to srujanadeshpande84@gmail.com.</span>
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold text-[var(--text-primary)] mb-2">
                    Your Name <span className="text-[var(--accent)]">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    placeholder="John Doe"
                    className="w-full px-4 py-3 rounded-xl bg-[var(--surface-secondary)] border border-[var(--border)] text-[var(--text-primary)] placeholder-[var(--text-muted)] focus:outline-none focus:border-[var(--accent)] text-sm transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-[var(--text-primary)] mb-2">
                    Your Email <span className="text-[var(--accent)]">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    placeholder="john@example.com"
                    className="w-full px-4 py-3 rounded-xl bg-[var(--surface-secondary)] border border-[var(--border)] text-[var(--text-primary)] placeholder-[var(--text-muted)] focus:outline-none focus:border-[var(--accent)] text-sm transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-[var(--text-primary)] mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  value={formState.subject}
                  onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                  placeholder="Project Opportunity / Inquiry"
                  className="w-full px-4 py-3 rounded-xl bg-[var(--surface-secondary)] border border-[var(--border)] text-[var(--text-primary)] placeholder-[var(--text-muted)] focus:outline-none focus:border-[var(--accent)] text-sm transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-[var(--text-primary)] mb-2">
                  Message <span className="text-[var(--accent)]">*</span>
                </label>
                <textarea
                  required
                  rows={5}
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  placeholder="Hi Srujana, I'd love to discuss..."
                  className="w-full px-4 py-3 rounded-xl bg-[var(--surface-secondary)] border border-[var(--border)] text-[var(--text-primary)] placeholder-[var(--text-muted)] focus:outline-none focus:border-[var(--accent)] text-sm transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-[var(--accent)] hover:bg-[var(--accent-hover)] text-white font-bold text-sm shadow-lg shadow-[var(--accent)]/25 transition-all disabled:opacity-50"
              >
                {isSubmitting ? (
                  <span>Sending Message...</span>
                ) : (
                  <>
                    <Send size={16} />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
