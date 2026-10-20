import Image from "next/image";
import Link from "next/link";
import { 
  User, 
  Briefcase, 
  GraduationCap, 
  Award, 
  Heart, 
  Target, 
  CheckCircle2, 
  Download, 
  ArrowRight,
  Sparkles,
  Terminal,
  Code2
} from "lucide-react";

const timeline = [
  {
    period: "Jan - Present",
    role: "Frontend Developer & API Integration",
    company: "MaxRemind",
    description: "Frontend Developer working across all software products at MaxRemind. Responsible for API integration work (REST APIs, Swagger, Postman), building scalable web components with Next.js, React, Tailwind CSS, HeroUI, and Material UI (MUI).",
    type: "work",
  },
  {
    period: "Sep - Dec",
    role: "Frontend Developer",
    company: "CodeBotx",
    description: "Hands-on software project development utilizing Next.js and Tailwind CSS. Built custom responsive user interfaces, modular React components, and optimized client workflows.",
    type: "work",
  },
  {
    period: "May - Aug",
    role: "Frontend Developer Intern",
    company: "MaxRemind",
    description: "Frontend Developer Internship at MaxRemind. Focused on HTML, CSS, JavaScript, responsive web UI layouts, component styling, and cross-browser testing.",
    type: "work",
  },
];

const values = [
  {
    icon: Target,
    title: "Precision & Quality",
    description: "I write clean, modular, and self-documenting code. Every feature is thoroughly tested and optimized for speed.",
  },
  {
    icon: Heart,
    title: "User-Centric Empathy",
    description: "Technology should be intuitive. I focus heavily on UX, accessible design patterns, and seamless interactions.",
  },
  {
    icon: Sparkles,
    title: "Innovation First",
    description: "I actively adopt modern frameworks, UI libraries, and clean API standards to give products a competitive edge.",
  },
];

export default function AboutPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
      {/* Header Banner */}
      <section className="text-center max-w-3xl mx-auto space-y-4 pt-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold uppercase tracking-wider">
          <User className="w-3.5 h-3.5" />
          About Saira
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
          Passionate About Building <span className="text-gradient">Impactful Software</span>
        </h1>
        <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
          I am a Frontend & MERN Stack Developer with over 2+ years of hands-on experience crafting high-performance web applications, API integrations, and responsive digital products.
        </p>
      </section>

      {/* Main Bio Grid */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Avatar Image */}
        <div className="lg:col-span-5 flex justify-center">
          <div className="relative w-full max-w-md">
            <div className="absolute -inset-1 rounded-3xl bg-gradient-to-tr from-indigo-600 via-purple-600 to-pink-500 opacity-30 blur-xl" />
            <div className="relative glass-panel rounded-3xl p-4 sm:p-6 border border-slate-800 space-y-4">
              <div className="relative aspect-square w-full rounded-2xl overflow-hidden">
                <Image
                  src="/avatar.jpg"
                  alt="Saira Profile"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 space-y-2">
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-slate-400">Current Focus:</span>
                  <span className="text-indigo-400 font-semibold">Next.js & API Integrations</span>
                </div>
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-slate-400">Location:</span>
                  <span className="text-slate-200">Available Worldwide (Remote)</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bio Text */}
        <div className="lg:col-span-7 space-y-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-white">
            Transforming Ideas into Functional & Beautiful Code
          </h2>
          
          <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed">
            <p>
              My journey into software development started with a curiosity for building interactive web platforms. Over 2+ years, I have built web applications using the <strong className="text-white">React & Next.js ecosystem</strong> alongside <strong className="text-white">TypeScript, Tailwind CSS, Bootstrap, HeroUI, and Material UI (MUI)</strong>.
            </p>
            <p>
              As a <strong className="text-white">MERN Stack Developer</strong>, I build backend endpoints and data flows with Node.js, Express, MongoDB, and Mongoose, backed by extensive experience in <strong className="text-white">API Integrations</strong> using Swagger, Postman, and REST API architectures.
            </p>
            <p>
              From my frontend internship at MaxRemind to hands-on Next.js work at CodeBotx and full frontend developer & API integration roles at MaxRemind, I deliver clean, maintainable, and responsive web solutions.
            </p>
          </div>

          {/* Quick Highlights list */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
            <div className="flex items-center gap-2 text-sm text-slate-200">
              <CheckCircle2 className="w-4 h-4 text-indigo-400 shrink-0" />
              <span>2+ Years Industry Experience</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-slate-200">
              <CheckCircle2 className="w-4 h-4 text-indigo-400 shrink-0" />
              <span>Next.js & React Specialist</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-slate-200">
              <CheckCircle2 className="w-4 h-4 text-indigo-400 shrink-0" />
              <span>API Integration (Swagger/Postman)</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-slate-200">
              <CheckCircle2 className="w-4 h-4 text-indigo-400 shrink-0" />
              <span>MERN Stack (Node, Express, Mongo)</span>
            </div>
          </div>

          <div className="pt-4 flex items-center gap-4">
            <Link
              href="/contact"
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-semibold text-sm shadow-lg shadow-indigo-600/20 transition-all"
            >
              Get In Touch
            </Link>
            <a
              href="/contact"
              className="px-6 py-3 rounded-xl bg-slate-900 border border-slate-700 text-slate-200 hover:text-white text-sm font-semibold flex items-center gap-2 transition-all"
            >
              <Download className="w-4 h-4 text-indigo-400" />
              Download Resume
            </a>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="space-y-8">
        <div className="text-center max-w-xl mx-auto space-y-2">
          <h2 className="text-2xl sm:text-3xl font-bold text-white">
            Engineering Principles
          </h2>
          <p className="text-slate-400 text-sm">
            The core values that guide my code quality and professional collaboration.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {values.map((v, idx) => {
            const Icon = v.icon;
            return (
              <div
                key={idx}
                className="glass-panel p-6 rounded-2xl border border-slate-800 space-y-3"
              >
                <div className="w-10 h-10 rounded-xl bg-indigo-600/20 border border-indigo-500/30 flex items-center justify-center text-indigo-400">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-white">{v.title}</h3>
                <p className="text-slate-400 text-xs leading-relaxed">{v.description}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Experience & Education Timeline */}
      <section className="space-y-8">
        <div className="text-center max-w-xl mx-auto space-y-2">
          <h2 className="text-2xl sm:text-3xl font-bold text-white">
            Career Journey & Timeline
          </h2>
          <p className="text-slate-400 text-sm">
            My professional milestone roadmap in software engineering.
          </p>
        </div>

        <div className="max-w-3xl mx-auto relative pl-6 sm:pl-8 border-l-2 border-slate-800 space-y-10">
          {timeline.map((item, idx) => (
            <div key={idx} className="relative group">
              {/* Point icon */}
              <div className="absolute -left-[31px] sm:-left-[39px] top-0 w-8 h-8 rounded-full bg-slate-900 border-2 border-indigo-500 flex items-center justify-center text-indigo-400 shadow-md">
                {item.type === "work" ? (
                  <Briefcase className="w-3.5 h-3.5" />
                ) : (
                  <GraduationCap className="w-3.5 h-3.5" />
                )}
              </div>

              <div className="glass-panel p-6 rounded-2xl border border-slate-800/80 hover:border-indigo-500/40 transition-all space-y-2">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="text-xs font-mono font-semibold px-2.5 py-1 rounded bg-indigo-500/10 border border-indigo-500/20 text-indigo-400">
                    {item.period}
                  </span>
                  <span className="text-xs font-mono text-slate-400">{item.company}</span>
                </div>
                <h3 className="text-lg font-bold text-white">{item.role}</h3>
                <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
