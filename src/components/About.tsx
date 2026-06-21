"use client";

import { motion } from "framer-motion";
import { GraduationCap, Briefcase, Trophy, Code2 } from "lucide-react";

const ACHIEVEMENTS = [
  {
    icon: <GraduationCap className="w-6 h-6 text-primary" />,
    title: "MCA Graduate (2026)",
    description: "Postgrad degree in Computer Applications with 71% score at VISTAS, Chennai.",
  },
  {
    icon: <Briefcase className="w-6 h-6 text-secondary" />,
    title: "5 Months Internship",
    description: "Hands-on software development experience building full-stack products at Triops Infotech.",
  },
  {
    icon: <Trophy className="w-6 h-6 text-accent" />,
    title: "TCS iON Industry Project",
    description: "Completed 90 hours of industry project work on Volunteer Management platforms.",
  },
  {
    icon: <Code2 className="w-6 h-6 text-emerald-500" />,
    title: "Full Stack Developer",
    description: "Specialize in Django, React.js, and MySQL. Certified by Greens Technology.",
  },
];

export default function About() {
  return (
    <section id="about" className="py-24 relative overflow-hidden bg-black/[0.01]">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-xs font-bold uppercase tracking-widest text-primary">
            About Me
          </h2>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight mt-2">
            My Professional Narrative
          </h3>
          <div className="w-12 h-1 bg-gradient-to-r from-primary to-accent mx-auto mt-4 rounded-full" />
        </div>

        {/* Narrative Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text Narrative */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <motion.h4
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-lg font-bold text-gray-800 leading-snug"
            >
              Hello, I&apos;m Sanjay Kumar T.
            </motion.h4>
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-xs sm:text-sm text-gray-500 leading-relaxed mt-4 text-justify"
            >
              I am an MCA Graduate passionate about designing and creating modern, high-performance web applications. Through my software engineering internship at Triops Infotech and TCS iON Industry Projects, I have gained valuable practical experience building scalable full-stack applications using Python, Django, React.js, and MySQL databases.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-xs sm:text-sm text-gray-500 leading-relaxed mt-4 text-justify"
            >
              I thrive on bridging the gap between elegant client interfaces and highly optimized database backends. Whether designing relational schemas or writing clean RESTful integrations, my focus is always on delivering premium digital experiences that solve real-world problems.
            </motion.p>
          </div>

          {/* Right Cards Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {ACHIEVEMENTS.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="glass p-6 rounded-2xl flex flex-col items-start gap-4 interactive-card interactive"
              >
                <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center shadow-md border border-gray-100">
                  {item.icon}
                </div>
                <div>
                  <h4 className="text-sm font-bold text-gray-900">{item.title}</h4>
                  <p className="text-[11px] text-gray-500 leading-relaxed mt-1.5">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
