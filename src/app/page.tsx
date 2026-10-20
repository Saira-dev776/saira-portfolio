import Image from "next/image";
import Link from "next/link";
import {
  Sparkles,
  ArrowRight,
  Code2,
  Layers,
  Cpu,
  Terminal,
  CheckCircle2,
  ExternalLink,
  Download,
  Star,
  Zap,
  Globe,
  ShieldCheck,
  Layout
} from "lucide-react";

const stats = [
  { label: "Years Experience", value: "2+" },
  { label: "Projects Completed", value: "20+" },
  { label: "Client Satisfaction", value: "99%" },
  { label: "Tech Stack Tools", value: "12+" },
];

const featuredTech = [
  { name: "Next.js 15", category: "Frontend", color: "border-slate-700 bg-slate-800/40" },
  { name: "React 19", category: "Frontend", color: "border-cyan-500/30 bg-cyan-500/10 text-cyan-400" },
  { name: "TypeScript", category: "Language", color: "border-blue-500/30 bg-blue-500/10 text-blue-400" },
  { name: "Tailwind CSS", category: "Styling", color: "border-sky-500/30 bg-sky-500/10 text-sky-400" },
  { name: "Node.js & Express", category: "Backend", color: "border-emerald-500/30 bg-emerald-500/10 text-emerald-400" },
  { name: "MongoDB & Mongoose", category: "Database", color: "border-green-500/30 bg-green-500/10 text-green-400" },
  { name: "HeroUI & MUI", category: "UI Library", color: "border-purple-500/30 bg-purple-500/10 text-purple-400" },
  { name: "API & Swagger", category: "Integration", color: "border-indigo-500/30 bg-indigo-500/10 text-indigo-400" },
];

const services = [
  {
    icon: Code2,
    title: "Frontend & Web Development",
    description: "Building fast, interactive Next.js and React web applications optimized for speed, accessibility, and modern aesthetics.",
    features: ["Next.js App Router", "TypeScript", "Responsive UI Components"],
    glow: "hover:border-indigo-500/50 hover:shadow-indigo-500/10",
  },
  {
    icon: Cpu,
    title: "API Integration & MERN Stack",
    description: "Integrating RESTful APIs, Swagger documentation, and Postman testing with Node.js, Express, and MongoDB backends.",
    features: ["REST API Integration", "Swagger & Postman", "MongoDB & Mongoose"],
    glow: "hover:border-purple-500/50 hover:shadow-purple-500/10",
  },
  {
    icon: Layout,
    title: "Modern UI Frameworks & Styling",
    description: "Designing sleek, component-driven user interfaces using Tailwind CSS, Bootstrap, HeroUI, Material UI (MUI), and CSS animations.",
    features: ["Tailwind & Bootstrap", "HeroUI & Material UI", "Glassmorphism & Themes"],
    glow: "hover:border-cyan-500/50 hover:shadow-cyan-500/10",
  },
  {
    icon: ShieldCheck,
    title: "Performance & Code Audits",
    description: "Optimizing Core Web Vitals, site accessibility, clean codebase architecture, and cross-browser responsiveness.",
    features: ["Lighthouse 95+ Score", "SEO Optimization", "Clean Code Standards"],
    glow: "hover:border-emerald-500/50 hover:shadow-emerald-500/10",
  },
];

const featuredProjects = [
  {
    id: 1,
    title: "Modern Blog Website",
    category: "Blog & Web App",
    description: "Sleek, content-driven blogging platform built with Next.js & Tailwind CSS featuring fast routing, dark mode, and high SEO scores.",
    image: "/project-ecommerce.jpg",
    tags: ["Next.js", "React", "Tailwind CSS", "Vercel"],
    liveUrl: "https://blog-website-six-flax.vercel.app/",
  },
  {
    id: 2,
    title: "Kitchen & Order Management System",
    category: "Web App",
    description: "Smart online kitchen platform for order processing, recipe management, ingredient inventory tracking, and live kitchen staff workflows.",
    image: "/project-ai.jpg",
    tags: ["React", "Node.js", "Express", "MongoDB"],
    liveUrl: "http://kitchen-online-eight.vercel.app",
  },
  {
    id: 3,
    title: "MERN Stack Task & Todo App",
    category: "Full Stack",
    description: "Full-stack MERN application for task organization, todo list prioritization, progress tracking, category tagging, and persistent MongoDB storage.",
    image: "/project-saas.jpg",
    tags: ["React", "Node.js", "Express", "MongoDB"],
    liveUrl: "http://kitchen-online-eight.vercel.app",
  },
];

export default function Home() {
  return (
    <div className="space-y-24">
      {/* Hero Section */}
      <section className="relative pt-6 pb-12 overflow-hidden">
        {/* Glow ambient lights */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-indigo-600/20 via-purple-600/20 to-pink-500/10 blur-[130px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              {/* Status Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-800/80 border border-slate-700/80 text-xs font-medium text-slate-300 backdrop-blur-md">
                <Sparkles className="w-3.5 h-3.5 text-indigo-400 animate-pulse" />
                <span>Available for Freelance & Full-Time Roles</span>
              </div>

              {/* Main Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.15]">
                Crafting <span className="text-gradient">Next-Gen</span> Web Apps & <span className="text-gradient-cyan">API Integrations</span>
              </h1>

              {/* Subtitle */}
              <p className="text-slate-300 text-lg sm:text-xl leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Hi, I&apos;m <strong className="text-white">Saira</strong> — a passionate Frontend & MERN Stack Developer with 2+ years of experience. I specialize in building high-performing web applications with Next.js, React, Tailwind CSS, Bootstrap, HeroUI, MUI, Node.js, Express, MongoDB, and API integrations.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
                <Link
                  href="/projects"
                  className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-semibold text-sm shadow-xl shadow-indigo-600/25 hover:shadow-indigo-600/40 hover:-translate-y-0.5 transition-all"
                >
                  Explore My Projects
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-slate-900 border border-slate-700/80 hover:bg-slate-800 text-white font-semibold text-sm hover:-translate-y-0.5 transition-all"
                >
                  Contact Me
                </Link>

                <a
                  href="/Saira_Bibi.pdf"
                  download
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-3.5 rounded-xl bg-slate-900/60 border border-slate-800 text-slate-300 hover:text-white hover:border-slate-700 text-sm font-medium transition-all"
                >
                  <Download className="w-4 h-4 text-indigo-400" />
                  Download CV
                </a>
              </div>

              {/* Stats Bar */}
              <div className="pt-8 border-t border-slate-800/80 grid grid-cols-2 sm:grid-cols-4 gap-4">
                {stats.map((stat, idx) => (
                  <div key={idx} className="space-y-1">
                    <p className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                      {stat.value}
                    </p>
                    <p className="text-xs text-slate-400 uppercase tracking-wider font-mono">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Profile Card */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-md">
                {/* Glow border ring */}
                <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-500 opacity-40 blur-lg animate-pulse-slow" />

                <div className="relative glass-panel rounded-3xl p-6 sm:p-8 space-y-6">
                  {/* Avatar Container */}
                  <div className="relative w-full aspect-square rounded-2xl overflow-hidden border border-slate-700/80 shadow-2xl">
                    <Image
                      src="/avatar.jpg"
                      alt="Saira - Full Stack Developer"
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-500"
                      priority
                    />

                    {/* Live Status overlay */}
                    <div className="absolute bottom-3 left-3 right-3 p-3 rounded-xl bg-slate-900/90 border border-slate-800 backdrop-blur-md flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping" />
                        <span className="text-xs font-semibold text-white">Full Stack Dev</span>
                      </div>
                      <span className="text-[11px] font-mono text-indigo-300">Based in PK / Remote</span>
                    </div>
                  </div>

                  {/* Quick Info */}
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-slate-400">Specialization</span>
                      <span className="text-indigo-400 font-semibold">Frontend & MERN</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-slate-400">Code Quality</span>
                      <span className="text-emerald-400 font-semibold flex items-center gap-1">
                        <CheckCircle2 className="w-3.5 h-3.5" /> 100% Tested
                      </span>
                    </div>
                  </div>

                  {/* Floating Tech Badges */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    <span className="px-2.5 py-1 rounded-md bg-slate-800 text-xs text-slate-300 font-mono border border-slate-700">
                      React 19
                    </span>
                    <span className="px-2.5 py-1 rounded-md bg-slate-800 text-xs text-slate-300 font-mono border border-slate-700">
                      Next.js
                    </span>
                    <span className="px-2.5 py-1 rounded-md bg-slate-800 text-xs text-slate-300 font-mono border border-slate-700">
                      TypeScript
                    </span>
                    <span className="px-2.5 py-1 rounded-md bg-slate-800 text-xs text-slate-300 font-mono border border-slate-700">
                      AI APIs
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack Marquee / Chips */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-6 sm:p-8 rounded-2xl glass-panel border border-slate-800/80 space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <h2 className="text-xs uppercase tracking-widest text-slate-400 font-mono flex items-center gap-2">
              <Terminal className="w-4 h-4 text-indigo-400" />
              Technologies & Core Stack
            </h2>
            <span className="text-xs text-slate-500">Always learning next-gen tools</span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3 pt-2">
            {featuredTech.map((tech, idx) => (
              <div
                key={idx}
                className={`p-3 rounded-xl border flex flex-col items-center justify-center text-center gap-1 transition-transform hover:-translate-y-1 ${tech.color}`}
              >
                <span className="text-xs font-semibold">{tech.name}</span>
                <span className="text-[10px] opacity-75 font-mono">{tech.category}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services / Capabilities Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold uppercase tracking-wider">
            Services & Expertise
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            What I Can Build For You
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            From complete web software applications to smart AI agent workflows, here is how I deliver value to your business.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, idx) => {
            const Icon = service.icon;
            return (
              <div
                key={idx}
                className={`glass-panel p-8 rounded-2xl border border-slate-800/80 transition-all duration-300 space-y-4 ${service.glow}`}
              >
                <div className="w-12 h-12 rounded-xl bg-slate-800/80 border border-slate-700/80 flex items-center justify-center text-indigo-400">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white">{service.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-2 pt-2 border-t border-slate-800/60">
                  {service.features.map((feat, fIdx) => (
                    <li key={fIdx} className="text-xs text-slate-300 flex items-center gap-2 font-mono">
                      <CheckCircle2 className="w-3.5 h-3.5 text-indigo-400" />
                      {feat}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </section>

      {/* Featured Projects Preview */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-semibold uppercase tracking-wider">
              Portfolio Highlights
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Featured Projects
            </h2>
          </div>

          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-indigo-400 hover:text-indigo-300 font-semibold text-sm group"
          >
            View All Projects
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featuredProjects.map((project) => (
            <div
              key={project.id}
              className="glass-panel glass-panel-hover rounded-2xl overflow-hidden border border-slate-800/80 flex flex-col group"
            >
              {/* Image */}
              <div className="relative aspect-video w-full overflow-hidden bg-slate-900">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-slate-900/80 backdrop-blur-md text-[11px] font-semibold text-indigo-300 border border-slate-700/80">
                  {project.category}
                </div>
              </div>

              {/* Body */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <h3 className="text-lg font-bold text-white group-hover:text-indigo-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-slate-400 text-xs leading-relaxed line-clamp-3">
                    {project.description}
                  </p>
                </div>

                <div className="space-y-4 pt-2">
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2 py-0.5 rounded bg-slate-800/80 text-[10px] text-slate-300 font-mono border border-slate-700/50"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between pt-2 border-t border-slate-800/80">
                    <Link
                      href="/projects"
                      className="text-xs font-semibold text-indigo-400 hover:text-indigo-300 flex items-center gap-1"
                    >
                      Details <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                    <div className="flex items-center gap-2">
                      <a
                        href={project.liveUrl}
                        className="p-1.5 rounded-lg bg-slate-800 text-slate-400 hover:text-white transition-colors"
                        aria-label="Live Demo"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl bg-gradient-to-r from-indigo-900/60 via-purple-900/50 to-slate-900 p-8 sm:p-12 border border-indigo-500/30 overflow-hidden text-center space-y-6">
          <div className="absolute top-0 right-0 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-2xl mx-auto space-y-4">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
              Have a Project or Idea in Mind?
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Whether you need a brand-new Next.js web app, AI features integrated, or complete full-stack development, let&apos;s build it together.
            </p>

            <div className="pt-4 flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="px-8 py-3.5 rounded-xl bg-white text-slate-950 font-bold text-sm hover:bg-slate-100 hover:shadow-lg transition-all"
              >
                Let&apos;s Talk Now
              </Link>
              <Link
                href="/about"
                className="px-8 py-3.5 rounded-xl bg-slate-900 border border-slate-700 text-white font-semibold text-sm hover:bg-slate-800 transition-all"
              >
                Learn More About Me
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
