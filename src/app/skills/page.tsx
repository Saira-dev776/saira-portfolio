"use client";

import { useState } from "react";
import { 
  Cpu, 
  Code2, 
  Server, 
  Terminal, 
  Layers, 
  Zap, 
  CheckCircle2,
  Workflow,
  Sparkles,
  Search
} from "lucide-react";

interface SkillItem {
  name: string;
  level: number; // percentage
  category: "Frontend" | "Backend & MERN" | "API & Tools";
  iconText: string;
  description: string;
}

const skillList: SkillItem[] = [
  // Frontend
  { name: "HTML5 & CSS3", level: 98, category: "Frontend", iconText: "HTML", description: "Semantic web markup, modern CSS grid, flexbox, and animations" },
  { name: "JavaScript (ES6+)", level: 96, category: "Frontend", iconText: "JS", description: "Async/await, ES modules, DOM manipulation, clean code logic" },
  { name: "TypeScript", level: 94, category: "Frontend", iconText: "TS", description: "Strict typing, interface contracts, generics, type-safe development" },
  { name: "React & React Hooks", level: 96, category: "Frontend", iconText: "RC", description: "Reusable components, custom hooks, state management, virtual DOM" },
  { name: "Next.js & App Router", level: 95, category: "Frontend", iconText: "NX", description: "Server components, SSR, SSG, route handlers, performance optimization" },
  { name: "Tailwind CSS", level: 98, category: "Frontend", iconText: "TW", description: "Custom UI design systems, glassmorphic styling, responsive layout" },
  { name: "Bootstrap", level: 92, category: "Frontend", iconText: "BS", description: "Grid system, responsive utilities, rapid UI prototyping" },
  { name: "HeroUI & Material UI (MUI)", level: 94, category: "Frontend", iconText: "UI", description: "Modern React component libraries, dark theme customization" },

  // Backend & MERN
  { name: "MERN Stack Development", level: 94, category: "Backend & MERN", iconText: "MERN", description: "Full-stack integration using MongoDB, Express, React, and Node.js" },
  { name: "Node.js & Express.js", level: 92, category: "Backend & MERN", iconText: "NODE", description: "RESTful server endpoints, routing, authentication, middleware" },
  { name: "MongoDB & Mongoose", level: 90, category: "Backend & MERN", iconText: "MNG", description: "NoSQL schema design, queries, aggregation pipelines, models" },

  // API Integration & Tools
  { name: "API Integration & REST API", level: 96, category: "API & Tools", iconText: "API", description: "Connecting frontend UIs to complex backend endpoints & third-party services" },
  { name: "Swagger Documentation", level: 92, category: "API & Tools", iconText: "SWG", description: "Interactive OpenAPI documentation, API testing, schema inspection" },
  { name: "Postman", level: 95, category: "API & Tools", iconText: "PST", description: "API request testing, environment workflows, collection runner" },
  { name: "Git & GitHub", level: 94, category: "API & Tools", iconText: "GIT", description: "Version control, branching strategies, collaborative workflows" },
  { name: "Vercel & Deployment", level: 95, category: "API & Tools", iconText: "VRC", description: "Continuous integration, edge functions, serverless hosting" }
];

const processSteps = [
  { step: "01", title: "Discovery & Planning", desc: "Understanding product goals, UI/UX designs, component hierarchy, and API requirements." },
  { step: "02", title: "Architecture & Integration", desc: "Setting up frontend layout templates, state management, and defining REST API contracts." },
  { step: "03", title: "Clean Code Execution", desc: "Writing clean, modular React/Next.js code styled with Tailwind CSS, HeroUI, MUI, or Bootstrap." },
  { step: "04", title: "Testing & Deployment", desc: "Testing endpoints with Postman/Swagger, checking responsiveness, and deploying on Vercel." }
];

const skillCategories = ["All", "Frontend", "Backend & MERN", "API & Tools"];

export default function SkillsPage() {
  const [activeTab, setActiveTab] = useState("All");

  const filteredSkills = skillList.filter(
    (skill) => activeTab === "All" || skill.category === activeTab
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
      {/* Header Banner */}
      <section className="text-center max-w-3xl mx-auto space-y-4 pt-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold uppercase tracking-wider">
          <Cpu className="w-3.5 h-3.5" />
          Skills & Technologies
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
          My Technical <span className="text-gradient">Skill Stack</span>
        </h1>
        <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
          A comprehensive breakdown of the frameworks, programming languages, databases, and AI tooling I use to craft modern software.
        </p>
      </section>

      {/* Category Selection Bar */}
      <section className="space-y-8">
        <div className="flex flex-wrap items-center justify-center gap-2 max-w-2xl mx-auto p-2 rounded-2xl glass-panel border border-slate-800">
          {skillCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`px-5 py-2.5 rounded-xl text-xs font-semibold transition-all ${
                activeTab === cat
                  ? "bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-md shadow-indigo-600/20"
                  : "text-slate-400 hover:text-white hover:bg-slate-800/80"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, idx) => (
            <div
              key={idx}
              className="glass-panel p-6 rounded-2xl border border-slate-800 space-y-4 hover:border-indigo-500/40 transition-all"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-slate-800 border border-slate-700/80 flex items-center justify-center text-xs font-mono font-bold text-indigo-400">
                    {skill.iconText}
                  </div>
                  <div>
                    <h3 className="font-bold text-white text-base">{skill.name}</h3>
                    <span className="text-[10px] text-slate-400 font-mono uppercase">{skill.category}</span>
                  </div>
                </div>
                <span className="text-xs font-mono font-bold text-indigo-400">{skill.level}%</span>
              </div>

              <p className="text-slate-400 text-xs leading-relaxed">
                {skill.description}
              </p>

              {/* Progress Bar */}
              <div className="w-full bg-slate-800/80 rounded-full h-2 overflow-hidden border border-slate-700/50">
                <div
                  className="bg-gradient-to-r from-indigo-500 to-purple-500 h-full rounded-full transition-all duration-1000"
                  style={{ width: `${skill.level}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Development Workflow Steps */}
      <section className="space-y-10">
        <div className="text-center max-w-xl mx-auto space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-semibold uppercase tracking-wider">
            <Workflow className="w-3.5 h-3.5" /> Work Methodology
          </div>
          <h2 className="text-3xl font-bold text-white">How I Work & Build</h2>
          <p className="text-slate-400 text-sm">
            A battle-tested 4-step engineering workflow ensuring clean deliverables.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {processSteps.map((p, idx) => (
            <div
              key={idx}
              className="glass-panel p-6 rounded-2xl border border-slate-800/80 space-y-3 relative overflow-hidden group hover:border-purple-500/40 transition-all"
            >
              <span className="text-4xl font-extrabold text-slate-800 font-mono group-hover:text-purple-500/20 transition-colors">
                {p.step}
              </span>
              <h3 className="text-lg font-bold text-white">{p.title}</h3>
              <p className="text-slate-400 text-xs leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
