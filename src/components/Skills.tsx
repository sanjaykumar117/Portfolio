"use client";

import { motion } from "framer-motion";
import { Monitor, Cpu, Database, Wrench, CheckCircle } from "lucide-react";
import SkillGraph from "./SkillGraph";

const SKILL_CATEGORIES = [
  {
    title: "Frontend",
    icon: <Monitor className="w-5 h-5 text-blue-600" />,
    color: "bg-blue-50/50 text-blue-700 border-blue-100",
    skills: ["HTML5", "CSS3", "JavaScript (ES6+)", "React.js"],
  },
  {
    title: "Backend",
    icon: <Cpu className="w-5 h-5 text-indigo-600" />,
    color: "bg-indigo-50/50 text-indigo-700 border-indigo-100",
    skills: ["Python", "Django", "REST APIs", "MVC Architecture"],
  },
  {
    title: "Database",
    icon: <Database className="w-5 h-5 text-cyan-600" />,
    color: "bg-cyan-50/50 text-cyan-700 border-cyan-100",
    skills: ["MySQL", "SQL Queries", "Query Optimization", "Relational Design"],
  },
  {
    title: "Tools & Concepts",
    icon: <Wrench className="w-5 h-5 text-emerald-600" />,
    color: "bg-emerald-50/50 text-emerald-700 border-emerald-100",
    skills: ["Git & GitHub", "VS Code & Postman", "OOP & DBMS", "Debugging & Testing"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-xs font-bold uppercase tracking-widest text-primary">
            Skills Showcase
          </h2>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight mt-2">
            My Technological Toolkit
          </h3>
          <div className="w-12 h-1 bg-gradient-to-r from-primary to-accent mx-auto mt-4 rounded-full" />
        </div>

        {/* Skill Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {SKILL_CATEGORIES.map((category, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="glass p-6 rounded-2xl border border-white/60 flex flex-col justify-between interactive-card interactive"
            >
              <div>
                <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-xl border ${category.color} mb-5 shadow-sm`}>
                  {category.icon}
                  <span className="text-xs font-bold uppercase tracking-wider">{category.title}</span>
                </div>
                
                <ul className="space-y-3">
                  {category.skills.map((skill, skillIdx) => (
                    <li key={skillIdx} className="flex items-center gap-2.5 text-xs text-gray-600 font-medium">
                      <CheckCircle className="w-4 h-4 text-primary shrink-0 opacity-70" />
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Dynamic Skill Graph */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="w-full mt-4"
        >
          <SkillGraph />
        </motion.div>

      </div>
    </section>
  );
}
