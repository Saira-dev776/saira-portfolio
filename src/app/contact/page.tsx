"use client";

import { useState } from "react";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  Clock, 
  CheckCircle2, 
  MessageSquare, 
  Sparkles,
  HelpCircle,
  ChevronDown
} from "lucide-react";
import { GithubIcon, LinkedinIcon, TwitterIcon } from "@/components/SocialIcons";

const contactCards = [
  {
    icon: Mail,
    title: "Email",
    value: "sairamax0987@gmail.com",
    sub: "Direct message anytime",
    actionText: "Send Mail",
    href: "mailto:sairamax0987@gmail.com",
  },
  {
    icon: MapPin,
    title: "Location",
    value: "Remote Worldwide",
    sub: "Based in Pakistan (PKT / UTC+5)",
    actionText: "Check Timezone",
    href: "#",
  },
  {
    icon: Clock,
    title: "Response Time",
    value: "Under 24 Hours",
    sub: "Monday — Saturday",
    actionText: "Active Now",
    href: "#",
  },
];

const faqs = [
  {
    q: "What is your availability for new projects?",
    a: "I am currently open for full-time contracts, part-time freelance projects, and AI integration consulting. Turnaround time depends on scope.",
  },
  {
    q: "What tech stack do you recommend for web applications?",
    a: "For fast modern web apps, I strongly recommend Next.js 15 with TypeScript, Tailwind CSS, and PostgreSQL or Supabase. It guarantees great SEO and scalability.",
  },
  {
    q: "Do you sign Non-Disclosure Agreements (NDAs)?",
    a: "Yes, absolutely. I value confidentiality and am happy to sign an NDA before reviewing proprietary project specs.",
  },
  {
    q: "Can you assist with existing codebases or refactoring?",
    a: "Yes! In addition to building from scratch, I audit code quality, migrate legacy React projects to Next.js App Router, and optimize performance scores.",
  },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    budget: "$1,000 - $5,000",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate sending message API
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({
        name: "",
        email: "",
        subject: "",
        budget: "$1,000 - $5,000",
        message: "",
      });
    }, 1200);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
      {/* Header Banner */}
      <section className="text-center max-w-3xl mx-auto space-y-4 pt-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold uppercase tracking-wider">
          <MessageSquare className="w-3.5 h-3.5" />
          Get In Touch
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
          Let&apos;s Build Something <span className="text-gradient">Great Together</span>
        </h1>
        <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
          Have a project, feature request, job inquiry, or question? Send a message and I&apos;ll get back to you right away.
        </p>
      </section>

      {/* Info Cards */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {contactCards.map((card, idx) => {
          const Icon = card.icon;
          return (
            <div
              key={idx}
              className="glass-panel p-6 rounded-2xl border border-slate-800 space-y-3 hover:border-indigo-500/40 transition-all text-center sm:text-left"
            >
              <div className="w-10 h-10 rounded-xl bg-indigo-600/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 mx-auto sm:mx-0">
                <Icon className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs font-mono text-slate-400 uppercase tracking-wider">{card.title}</span>
                <h3 className="text-lg font-bold text-white mt-1">{card.value}</h3>
                <p className="text-slate-400 text-xs mt-1">{card.sub}</p>
              </div>
            </div>
          );
        })}
      </section>

      {/* Main Contact Form & Socials Grid */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left Form */}
        <div className="lg:col-span-7 glass-panel p-6 sm:p-10 rounded-3xl border border-slate-800 space-y-6">
          <div className="space-y-1">
            <h2 className="text-2xl font-bold text-white">Send Me a Message</h2>
            <p className="text-slate-400 text-xs sm:text-sm">
              Fill out the form below and I will reply within 24 hours.
            </p>
          </div>

          {submitted && (
            <div className="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-sm flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 shrink-0 mt-0.5" />
              <div>
                <strong className="font-semibold block text-white">Thank you! Message Sent.</strong>
                I have received your inquiry and will reach out to you shortly.
              </div>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-slate-300 font-mono">Your Name *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Alex Morgan"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-slate-900/80 border border-slate-800 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 transition-colors"
                />
              </div>
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-slate-300 font-mono">Your Email *</label>
                <input
                  type="email"
                  required
                  placeholder="alex@company.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-slate-900/80 border border-slate-800 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 transition-colors"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-slate-300 font-mono">Subject *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Next.js App Development"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-slate-900/80 border border-slate-800 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 transition-colors"
                />
              </div>
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-slate-300 font-mono">Estimated Budget</label>
                <select
                  value={formData.budget}
                  onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-slate-900/80 border border-slate-800 text-sm text-white focus:outline-none focus:border-indigo-500 transition-colors"
                >
                  <option value="<$1,000">Below $1,000</option>
                  <option value="$1,000 - $5,000">$1,000 - $5,000</option>
                  <option value="$5,000 - $10,000">$5,000 - $10,000</option>
                  <option value="$10,000+">$10,000+</option>
                </select>
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-slate-300 font-mono">Project Details / Message *</label>
              <textarea
                required
                rows={5}
                placeholder="Tell me about your goals, timelines, or features needed..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-slate-900/80 border border-slate-800 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 transition-colors resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-4 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-bold text-sm shadow-xl shadow-indigo-600/20 flex items-center justify-center gap-2 transition-all disabled:opacity-50"
            >
              {isSubmitting ? (
                <span>Sending Message...</span>
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  <span>Send Inquiry Now</span>
                </>
              )}
            </button>
          </form>
        </div>

        {/* Right Info & Socials */}
        <div className="lg:col-span-5 space-y-8">
          <div className="glass-panel p-8 rounded-3xl border border-slate-800 space-y-6">
            <h3 className="text-xl font-bold text-white">Direct Connect</h3>
            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
              Prefer direct messaging? Reach out via social channels or email. I&apos;m active daily on GitHub and LinkedIn.
            </p>

            <div className="space-y-3">
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="p-4 rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-between text-slate-300 hover:text-white hover:border-indigo-500/50 transition-all group"
              >
                <div className="flex items-center gap-3">
                  <GithubIcon className="w-5 h-5 text-indigo-400" />
                  <div>
                    <span className="font-semibold text-sm text-white block">GitHub Profile</span>
                    <span className="text-xs text-slate-400">View code repos & activity</span>
                  </div>
                </div>
                <span className="text-xs text-indigo-400 group-hover:translate-x-1 transition-transform">
                  &rarr;
                </span>
              </a>

              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="p-4 rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-between text-slate-300 hover:text-white hover:border-indigo-500/50 transition-all group"
              >
                <div className="flex items-center gap-3">
                  <LinkedinIcon className="w-5 h-5 text-indigo-400" />
                  <div>
                    <span className="font-semibold text-sm text-white block">LinkedIn Network</span>
                    <span className="text-xs text-slate-400">Professional profile & recommendations</span>
                  </div>
                </div>
                <span className="text-xs text-indigo-400 group-hover:translate-x-1 transition-transform">
                  &rarr;
                </span>
              </a>

              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="p-4 rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-between text-slate-300 hover:text-white hover:border-indigo-500/50 transition-all group"
              >
                <div className="flex items-center gap-3">
                  <TwitterIcon className="w-5 h-5 text-indigo-400" />
                  <div>
                    <span className="font-semibold text-sm text-white block">Twitter / X</span>
                    <span className="text-xs text-slate-400">Tech tweets & AI updates</span>
                  </div>
                </div>
                <span className="text-xs text-indigo-400 group-hover:translate-x-1 transition-transform">
                  &rarr;
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="space-y-8">
        <div className="text-center max-w-xl mx-auto space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-slate-300 text-xs font-semibold uppercase tracking-wider">
            <HelpCircle className="w-3.5 h-3.5 text-indigo-400" /> FAQ
          </div>
          <h2 className="text-3xl font-bold text-white">Frequently Asked Questions</h2>
        </div>

        <div className="max-w-3xl mx-auto space-y-3">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="glass-panel rounded-2xl border border-slate-800 overflow-hidden"
            >
              <button
                onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                className="w-full p-5 text-left font-bold text-white text-sm sm:text-base flex items-center justify-between gap-4 hover:bg-slate-800/40 transition-colors"
              >
                <span>{faq.q}</span>
                <ChevronDown
                  className={`w-5 h-5 text-indigo-400 transition-transform ${
                    activeFaq === idx ? "rotate-180" : ""
                  }`}
                />
              </button>
              {activeFaq === idx && (
                <div className="px-5 pb-5 text-slate-300 text-xs sm:text-sm leading-relaxed border-t border-slate-800/60 pt-3">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
