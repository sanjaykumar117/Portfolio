"use client";

import { motion } from "framer-motion";
import { ExternalLink, ShieldCheck, MapPin, Users } from "lucide-react";
import confetti from "canvas-confetti";

const Github = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    width="24"
    height="24"
    stroke="currentColor"
    strokeWidth="2"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);


const PROJECTS = [
  {
    title: "AI-Powered Personalized Trip Planner",
    description: "An end-to-end trip planning ecosystem that aggregates location metrics, user preferences, and real-time weather configurations to generate custom travel itineraries.",
    tech: ["Python", "Django", "React.js", "MySQL", "REST APIs"],
    demoUrl: "#",
    githubUrl: "https://github.com/sanjaykumar117",
    highlights: [
      "Generated personalized itineraries using real-time weather & location APIs.",
      "Designed a robust 5-table schema supporting 100+ trip records.",
      "Engineered recommendation systems for smart local attractions targeting.",
      "Developed a custom analytical React dashboard for booking metrics.",
    ],
    // CSS Mockup representation
    mockup: (
      <div className="w-full h-full bg-slate-50 rounded-2xl border border-gray-100 overflow-hidden relative flex flex-col p-4 shadow-inner">
        {/* Mock Top bar */}
        <div className="flex items-center gap-1.5 border-b border-gray-100 pb-2 mb-3">
          <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
          <div className="w-2.5 h-2.5 rounded-full bg-amber-400" />
          <div className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
          <div className="bg-gray-100 text-[9px] text-gray-400 px-3 py-0.5 rounded-md ml-4 w-40 truncate">
            https://tripai.sanjay.dev/dashboard
          </div>
        </div>
        
        {/* Mock App Interface */}
        <div className="flex-1 grid grid-cols-3 gap-2">
          {/* Left panel */}
          <div className="col-span-1 bg-white border border-gray-100 rounded-lg p-2.5 flex flex-col gap-1.5">
            <span className="text-[8px] font-bold text-gray-400 uppercase">Itinerary Settings</span>
            <div className="h-4 bg-blue-50 border border-blue-100 rounded flex items-center px-1.5 text-[7px] text-primary gap-1 font-semibold">
              <MapPin className="w-2 h-2" /> Chennai, India
            </div>
            <div className="h-4 bg-gray-50 rounded flex items-center px-1.5 text-[7px] text-gray-500">
              ⚡ Recommendation Active
            </div>
            <div className="flex-1 border border-dashed border-gray-200 rounded flex items-center justify-center text-[7px] text-gray-300 font-medium">
              5 Tables Synced
            </div>
          </div>
          
          {/* Main panel */}
          <div className="col-span-2 bg-white border border-gray-100 rounded-lg p-2.5 flex flex-col justify-between">
            <div className="flex justify-between items-center">
              <span className="text-[9px] font-extrabold text-gray-800">My Trip Plan</span>
              <span className="text-[7px] font-bold bg-emerald-50 text-emerald-600 border border-emerald-100 px-1.5 py-0.5 rounded">Weather: 28°C</span>
            </div>
            
            <div className="space-y-1.5 my-2">
              <div className="h-6 bg-slate-50 border border-gray-100 rounded-md p-1 flex items-center justify-between">
                <span className="text-[8px] font-bold text-gray-600">Day 1: Marina Beach Walk</span>
                <span className="text-[7px] text-gray-400 font-medium">Morning</span>
              </div>
              <div className="h-6 bg-slate-50 border border-gray-100 rounded-md p-1 flex items-center justify-between">
                <span className="text-[8px] font-bold text-gray-600">Day 2: Mahabalipuram Temples</span>
                <span className="text-[7px] text-gray-400 font-medium">Afternoon</span>
              </div>
            </div>

            <div className="h-5 bg-gradient-to-r from-primary/10 to-accent/10 rounded flex items-center justify-center text-[8px] text-primary font-bold">
              Itinerary Created Successfully
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "Community Volunteer Connect",
    description: "A secure industry-designed volunteer management web application that optimizes volunteer coordination, skill registration, and organization matchings.",
    tech: ["Python", "Django", "MySQL", "Database Normalization"],
    demoUrl: "#",
    githubUrl: "https://github.com/sanjaykumar117",
    highlights: [
      "Completed 90-hour TCS iON industry project building a volunteer management platform.",
      "Designed 4+ normalized database tables to eliminate redundant data.",
      "Engineered skill-based matching algorithms matching volunteers to NGOs.",
      "Developed secure CRUD dashboards for administrator role controls.",
    ],
    // CSS Mockup representation
    mockup: (
      <div className="w-full h-full bg-slate-50 rounded-2xl border border-gray-100 overflow-hidden relative flex flex-col p-4 shadow-inner">
        {/* Mock Top bar */}
        <div className="flex items-center gap-1.5 border-b border-gray-100 pb-2 mb-3">
          <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
          <div className="w-2.5 h-2.5 rounded-full bg-amber-400" />
          <div className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
          <div className="bg-gray-100 text-[9px] text-gray-400 px-3 py-0.5 rounded-md ml-4 w-40 truncate">
            https://volunteer.tcsion.com/app
          </div>
        </div>
        
        {/* Mock App Interface */}
        <div className="flex-1 grid grid-cols-12 gap-2">
          {/* Header/Stats banner */}
          <div className="col-span-12 h-6 bg-white border border-gray-100 rounded-md p-1.5 flex justify-between items-center">
            <span className="text-[8px] font-bold text-gray-800 flex items-center gap-1">
              <Users className="w-2.5 h-2.5 text-secondary" /> NGO Volunteer Portal
            </span>
            <span className="text-[7px] text-gray-400 font-semibold">TCS iON AIP Verified</span>
          </div>
          
          {/* Left details */}
          <div className="col-span-5 bg-white border border-gray-100 rounded-lg p-2 flex flex-col gap-1">
            <span className="text-[7px] font-bold text-gray-400 uppercase">Volunteer Match</span>
            <div className="h-4 bg-indigo-50 border border-indigo-100 rounded flex items-center justify-between px-1.5 text-[6.5px] text-indigo-700 font-semibold">
              <span>John Doe</span>
              <span className="text-emerald-600 bg-emerald-50 border border-emerald-100 px-1 rounded">React Dev</span>
            </div>
            <div className="h-4 bg-gray-50 rounded flex items-center px-1.5 text-[6.5px] text-gray-500">
              💡 Matches 3 Open Events
            </div>
          </div>
          
          {/* Right details */}
          <div className="col-span-7 bg-white border border-gray-100 rounded-lg p-2 flex flex-col justify-between">
            <span className="text-[7px] font-bold text-gray-400 uppercase">Database Norm</span>
            <div className="flex-1 grid grid-cols-2 gap-1 my-1">
              <div className="bg-slate-50 border border-gray-100 rounded p-1 flex flex-col justify-center items-center">
                <span className="text-[8px] font-bold text-primary">4+</span>
                <span className="text-[5.5px] text-gray-400 uppercase">Tables</span>
              </div>
              <div className="bg-slate-50 border border-gray-100 rounded p-1 flex flex-col justify-center items-center">
                <span className="text-[8px] font-bold text-secondary">50+</span>
                <span className="text-[5.5px] text-gray-400 uppercase">Profiles</span>
              </div>
            </div>
            <div className="h-4 bg-emerald-50 border border-emerald-100 rounded flex items-center justify-center text-[7px] text-emerald-600 font-bold">
              <ShieldCheck className="w-2.5 h-2.5 mr-1" /> Normalization Validated
            </div>
          </div>
        </div>
      </div>
    ),
  },
];

export default function Projects() {
  const handleDemoClick = (title: string) => {
    confetti({
      particleCount: 60,
      spread: 50,
      origin: { y: 0.8 },
      colors: ["#2563EB", "#6366F1"],
    });
    alert(`This is a verified academic/internship application for "${title}". The source repository and database schemas are referenced in Sanjay's resume. Click "GitHub Repository" to explore details!`);
  };

  return (
    <section id="projects" className="py-24 relative overflow-hidden bg-black/[0.01]">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-xs font-bold uppercase tracking-widest text-primary">
            Featured Projects
          </h2>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight mt-2">
            Verified Production Work
          </h3>
          <div className="w-12 h-1 bg-gradient-to-r from-primary to-accent mx-auto mt-4 rounded-full" />
        </div>

        {/* Project Layout (Large Apple-style cards) */}
        <div className="space-y-16">
          {PROJECTS.map((proj, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="glass p-6 md:p-10 rounded-3xl border border-white/60 shadow-lg grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center"
            >
              
              {/* Info Column */}
              <div className="lg:col-span-7 flex flex-col">
                {/* Tech Badges */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {proj.tech.map((t, techIdx) => (
                    <span
                      key={techIdx}
                      className="text-[9px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-primary/5 text-primary border border-primary/10"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Title & Desc */}
                <h4 className="text-xl md:text-2xl font-extrabold text-gray-900 tracking-tight leading-snug">
                  {proj.title}
                </h4>
                
                <p className="text-xs sm:text-sm text-gray-500 leading-relaxed mt-4">
                  {proj.description}
                </p>

                {/* Highlights List */}
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2.5 mt-6 border-t border-black/[0.03] pt-6 mb-8 text-[11px] text-gray-600 pl-1 font-medium">
                  {proj.highlights.map((bullet, bulletIdx) => (
                    <li key={bulletIdx} className="flex items-start gap-2 leading-relaxed">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0 mt-1.5" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>

                {/* Actions */}
                <div className="flex flex-wrap items-center gap-3">
                  <button
                    onClick={() => handleDemoClick(proj.title)}
                    className="flex items-center gap-1.5 px-5 py-2.5 rounded-full bg-primary text-white text-xs font-bold shadow-md hover:bg-blue-700 hover:shadow-lg transition-all interactive"
                  >
                    Live Demo
                    <ExternalLink className="w-3.5 h-3.5" />
                  </button>
                  <a
                    href={proj.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 px-5 py-2.5 rounded-full border border-gray-200 bg-white hover:bg-gray-50 text-gray-800 text-xs font-bold transition-all interactive"
                  >
                    <Github className="w-4 h-4 text-gray-400" />
                    GitHub Repository
                  </a>
                </div>
              </div>

              {/* Visual Mockup Column */}
              <div className="lg:col-span-5 h-[280px] sm:h-[320px] w-full flex items-center justify-center">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="w-full h-full"
                >
                  {proj.mockup}
                </motion.div>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
