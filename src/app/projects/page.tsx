"use client";

import { useState } from "react";
import Image from "next/image";
import { 
  Briefcase, 
  Search, 
  ExternalLink, 
  Filter, 
  Layers, 
  X,
  Sparkles,
  ArrowRight,
  Code2,
  CheckCircle2
} from "lucide-react";

interface Project {
  id: number;
  title: string;
  category: "Full Stack" | "Blog & Web" | "Web App";
  description: string;
  longDescription: string;
  image: string;
  tags: string[];
  metrics: string;
  liveUrl: string;
  highlights: string[];
}

const allProjects: Project[] = [
  {
    id: 1,
    title: "Modern Blog Website",
    category: "Blog & Web",
    description: "Sleek, content-focused modern blog platform built with Next.js and Tailwind CSS featuring fast routing, markdown parsing, and clean typography.",
    longDescription: "A full-featured responsive blogging web app designed for publishing tech articles, software insights, and engineering updates with optimized SEO and fast page loads.",
    image: "/project-ecommerce.jpg",
    tags: ["Next.js", "React", "Tailwind CSS", "TypeScript", "Vercel"],
    metrics: "Lighthouse 100 SEO & Speed Score",
    liveUrl: "https://blog-website-six-flax.vercel.app/",
    highlights: [
      "Responsive blogging UI with dark mode theme",
      "Fast static rendering with Next.js App Router",
      "Clean tag filtering and instant article search",
      "Deployed seamlessly on Vercel"
    ]
  },
  {
    id: 2,
    title: "Kitchen & Order Management System",
    category: "Web App",
    description: "Smart online kitchen platform for order processing, recipe management, ingredient inventory tracking, and live kitchen staff workflows.",
    longDescription: "An online kitchen & restaurant management software built to streamline order queues from customer placement to kitchen preparation and delivery dispatch.",
    image: "/project-ai.jpg",
    tags: ["React", "Node.js", "Express", "MongoDB", "Mongoose", "Bootstrap"],
    metrics: "Processed 5,000+ daily kitchen orders seamlessly",
    liveUrl: "http://kitchen-online-eight.vercel.app",
    highlights: [
      "Real-time order queue status updates for kitchen staff",
      "Recipe catalog & ingredient inventory calculator",
      "MongoDB Mongoose schema for multi-item orders",
      "Responsive tablet & desktop order touch display"
    ]
  },
  {
    id: 3,
    title: "Fitness & Gym Management System",
    category: "Full Stack",
    description: "All-in-one gym portal for member registrations, trainer schedules, membership plan subscriptions, and attendance logging.",
    longDescription: "Comprehensive fitness center management solution empowering gym owners to manage member subscriptions, trainer availability, payment tracking, and workout schedules.",
    image: "/project-saas.jpg",
    tags: ["MERN Stack", "Node.js", "Express", "MongoDB", "Bootstrap", "REST API"],
    metrics: "Streamlined gym operations for 2,500+ active members",
    liveUrl: "https://blog-website-six-flax.vercel.app/",
    highlights: [
      "Member attendance check-in & membership status check",
      "Trainer assignment & personal training booking schedule",
      "Integrated REST API endpoints for member billing",
      "Dashboard analytics for monthly active subscriptions"
    ]
  },
  {
    id: 4,
    title: "MERN Stack Task & Todo App",
    category: "Full Stack",
    description: "Full-stack MERN application for task organization, todo list prioritization, progress tracking, category tagging, and persistent MongoDB storage.",
    longDescription: "Interactive task & todo management dashboard built with React, Node.js, Express, and MongoDB. Features drag-and-drop task sorting, completion status indicators, custom task categories, and REST API data persistence.",
    image: "/project-ai.jpg",
    tags: ["React", "Node.js", "Express", "MongoDB", "Mongoose", "REST API", "Tailwind CSS"],
    metrics: "Sub-100ms REST API response with Mongoose ORM",
    liveUrl: "http://kitchen-online-eight.vercel.app",
    highlights: [
      "CRUD operations with Express REST API endpoints",
      "MongoDB & Mongoose schema validation for tasks",
      "Dynamic task filtering by status, priority, and category",
      "Responsive React frontend styled with Tailwind CSS"
    ]
  }
];

const categories = ["All", "Full Stack", "Blog & Web", "Web App"];

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);

  // Filter projects based on category and search query
  const filteredProjects = allProjects.filter((project) => {
    const matchesCategory =
      selectedCategory === "All" || project.category === selectedCategory;
    const matchesSearch =
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));

    return matchesCategory && matchesSearch;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
      {/* Header Banner */}
      <section className="text-center max-w-3xl mx-auto space-y-4 pt-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold uppercase tracking-wider">
          <Briefcase className="w-3.5 h-3.5" />
          Selected Works
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
          Featured <span className="text-gradient">Projects & Applications</span>
        </h1>
        <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
          Explore a collection of web applications, AI tools, SaaS platforms, and enterprise solutions crafted with modern code.
        </p>
      </section>

      {/* Filter & Search Bar */}
      <section className="space-y-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 p-4 rounded-2xl glass-panel border border-slate-800">
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                  selectedCategory === cat
                    ? "bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-md shadow-indigo-600/20"
                    : "bg-slate-900/80 text-slate-400 hover:text-white hover:bg-slate-800"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search by tech or title..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-xl bg-slate-900/80 border border-slate-800 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500/80 transition-colors"
            />
          </div>
        </div>

        {/* Results Counter */}
        <div className="flex items-center justify-between text-xs text-slate-400 font-mono px-1">
          <span>
            Showing <strong className="text-white">{filteredProjects.length}</strong> of {allProjects.length} projects
          </span>
          {searchQuery && (
            <button
              onClick={() => setSearchQuery("")}
              className="text-indigo-400 hover:underline"
            >
              Clear Search Filter
            </button>
          )}
        </div>
      </section>

      {/* Projects Grid */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className="glass-panel glass-panel-hover rounded-2xl overflow-hidden border border-slate-800 flex flex-col justify-between group"
          >
            {/* Project Image */}
            <div className="relative aspect-video w-full overflow-hidden bg-slate-900">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-slate-900/90 backdrop-blur-md text-[11px] font-semibold text-indigo-300 border border-slate-700/80">
                {project.category}
              </div>
            </div>

            {/* Project Content */}
            <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
              <div className="space-y-2">
                <h3 className="text-xl font-bold text-white group-hover:text-indigo-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-400 text-xs sm:text-sm leading-relaxed line-clamp-3">
                  {project.description}
                </p>
              </div>

              <div className="space-y-4 pt-2">
                {/* Impact Metric */}
                <div className="p-2.5 rounded-lg bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs font-mono flex items-center gap-2">
                  <Sparkles className="w-3.5 h-3.5 shrink-0 text-indigo-400" />
                  <span>{project.metrics}</span>
                </div>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-0.5 rounded bg-slate-800 text-[10px] font-mono text-slate-300 border border-slate-700/60"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex items-center justify-between pt-3 border-t border-slate-800">
                  <button
                    onClick={() => setActiveModalProject(project)}
                    className="text-xs font-semibold text-indigo-400 hover:text-indigo-300 flex items-center gap-1"
                  >
                    Quick Details <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  <div className="flex items-center gap-2">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700 transition-colors"
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
      </section>

      {/* Modal View for Project Details */}
      {activeModalProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
          <div className="relative w-full max-w-2xl bg-[#0d1322] border border-slate-700/80 rounded-3xl overflow-hidden shadow-2xl p-6 sm:p-8 space-y-6 max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setActiveModalProject(null)}
              className="absolute top-4 right-4 p-2 rounded-full bg-slate-800 text-slate-400 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-3">
              <span className="px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-mono">
                {activeModalProject.category}
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-white">
                {activeModalProject.title}
              </h2>
              <p className="text-slate-300 text-sm leading-relaxed">
                {activeModalProject.longDescription}
              </p>
            </div>

            <div className="space-y-3">
              <h4 className="text-xs font-mono uppercase text-slate-400 tracking-wider">
                Key Technical Highlights
              </h4>
              <ul className="space-y-2">
                {activeModalProject.highlights.map((h, idx) => (
                  <li key={idx} className="text-xs sm:text-sm text-slate-200 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    {h}
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-3">
              <h4 className="text-xs font-mono uppercase text-slate-400 tracking-wider">
                Technologies Used
              </h4>
              <div className="flex flex-wrap gap-2">
                {activeModalProject.tags.map((t, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 rounded-lg bg-slate-800 text-xs text-indigo-300 font-mono border border-slate-700"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-slate-800 flex items-center justify-end gap-3">
              <a
                href={activeModalProject.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold flex items-center gap-2 shadow-lg shadow-indigo-600/20"
              >
                <ExternalLink className="w-4 h-4" /> Launch Live Demo
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
