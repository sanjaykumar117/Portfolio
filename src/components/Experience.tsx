"use client";

import { motion } from "framer-motion";
import { Briefcase, Calendar, Award, CheckCircle } from "lucide-react";

const EXPERIENCES = [
  {
    role: "Software Developer Intern",
    company: "Triops Infotech, Chennai",
    duration: "Jan 2026 – May 2026",
    project: "AI-Powered Personalized Trip Planner",
    tech: "Python | Django | React.js | MySQL",
    highlights: [
      "Built end-to-end trip planning system generating personalized itineraries using real-time weather and location data across a 5-month engagement.",
      "Designed relational database containing 5 tables (users, trips, destinations, hotels, preferences) for 100+ records.",
      "Implemented recommendation algorithm to surface relevant activities based on user settings.",
      "Delivered responsive React.js dashboard integrated with REST APIs, eliminating manual lookup effort and streamlining itinerary creation.",
    ],
  },
  {
    role: "Industry Project (90 Hours)",
    company: "TCS iON Applied Industry Projects (AIP), TCS",
    duration: "Apr 2026 – May 2026",
    project: "Community Volunteer Connect",
    tech: "Python | Django | MySQL | Cert ID: 1174-27224343-1016",
    highlights: [
      "Completed 90-hour TCS iON industry project building a volunteer management platform connecting NGOs with community volunteers.",
      "Designed 4+ normalized database tables (volunteers, organizations, events, registrations) supporting 50+ profiles.",
      "Implemented skills-based volunteer matching and full CRUD operations.",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 relative overflow-hidden bg-black/[0.01]">
      <div className="max-w-5xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-xs font-bold uppercase tracking-widest text-primary">
            Experience Timeline
          </h2>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight mt-2">
            My Professional Path
          </h3>
          <div className="w-12 h-1 bg-gradient-to-r from-primary to-accent mx-auto mt-4 rounded-full" />
        </div>

        {/* Timeline Path */}
        <div className="relative border-l-2 border-gray-200 pl-6 md:pl-10 space-y-12 max-w-3xl mx-auto">
          {EXPERIENCES.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="relative"
            >
              {/* Timeline dot */}
              <div className="absolute -left-[35px] md:-left-[51px] top-1.5 w-6 h-6 rounded-full bg-white border-4 border-primary flex items-center justify-center shadow-md">
                <Briefcase className="w-2.5 h-2.5 text-primary" />
              </div>

              {/* Card Container */}
              <div className="glass p-6 md:p-8 rounded-2xl relative border border-white/60 shadow-sm hover:shadow-md transition-shadow">
                
                {/* Meta details */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 border-b border-black/[0.03] pb-4 mb-4">
                  <div>
                    <h4 className="text-base font-extrabold text-gray-900 leading-snug">
                      {exp.role}
                    </h4>
                    <span className="text-xs font-bold text-primary tracking-wide">
                      {exp.company}
                    </span>
                  </div>
                  
                  <div className="flex items-center gap-1.5 text-xs text-gray-400 font-semibold shrink-0">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{exp.duration}</span>
                  </div>
                </div>

                {/* Project details */}
                <div className="mb-4 bg-gray-50/50 border border-gray-100 rounded-xl p-4">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-gray-800">
                    <Award className="w-4 h-4 text-accent shrink-0" />
                    <span>Project: {exp.project}</span>
                  </div>
                  <div className="text-[10px] font-semibold text-gray-400 uppercase mt-1 tracking-wider">
                    Stack: {exp.tech}
                  </div>
                </div>

                {/* Highlights */}
                <ul className="space-y-3.5 pl-1">
                  {exp.highlights.map((bullet, bulletIdx) => (
                    <li key={bulletIdx} className="flex items-start gap-3 text-xs text-gray-600 leading-relaxed">
                      <CheckCircle className="w-4 h-4 text-primary mt-0.5 shrink-0 opacity-75" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>

              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
