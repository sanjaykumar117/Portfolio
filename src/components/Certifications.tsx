"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Award, ChevronLeft, ChevronRight, CheckCircle2 } from "lucide-react";

const CERTIFICATES = [
  {
    title: "Certificate of Industry Project (90 hrs)",
    issuer: "TCS iON Applied Industry Projects (AIP)",
    date: "May 2026",
    credentialId: "1174-27224343-1016",
    description: "Built the verified Volunteer Management web application connecting NGOs with volunteers.",
  },
  {
    title: "Project Completion Certificate",
    issuer: "Triops Infotech, Chennai",
    date: "May 2026",
    credentialId: "TI-SDI-2026-05",
    description: "Completed 5 months internship building the full-stack AI Personalized Trip Planner using Python/Django/React/MySQL.",
  },
  {
    title: "Full Stack Developer Certificate",
    issuer: "Greens Technology, Chennai",
    date: "2024",
    credentialId: "GT-FSD-2024-893",
    description: "Completed intensive training program covering React.js, Python/Django, SQL and web architectures.",
  },
  {
    title: "NPTEL Online Course Certificate",
    issuer: "Programming / Computer Science (IIT)",
    date: "2023",
    credentialId: "NPTEL-IIT-CS-23-45",
    description: "Successfully completed computer science curriculum with certifications in programming algorithms.",
  },
];

export default function Certifications() {
  const [index, setIndex] = useState(0);

  const handleNext = () => {
    setIndex((prev) => (prev + 1) % CERTIFICATES.length);
  };

  const handlePrev = () => {
    setIndex((prev) => (prev - 1 + CERTIFICATES.length) % CERTIFICATES.length);
  };

  return (
    <section id="certifications" className="py-24 relative overflow-hidden bg-black/[0.01]">
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-xs font-bold uppercase tracking-widest text-primary">
            Certifications
          </h2>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight mt-2">
            Verified Credentials
          </h3>
          <div className="w-12 h-1 bg-gradient-to-r from-primary to-accent mx-auto mt-4 rounded-full" />
        </div>

        {/* Carousel Container */}
        <div className="relative flex items-center justify-center min-h-[250px]">
          
          {/* Nav arrows (hidden in print) */}
          <div className="absolute left-[-15px] sm:left-[-40px] z-20 print:hidden">
            <button
              onClick={handlePrev}
              className="w-10 h-10 rounded-full border border-gray-200 bg-white hover:bg-gray-50 flex items-center justify-center text-gray-500 hover:text-primary transition-all shadow-md interactive"
              aria-label="Previous Certification"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
          </div>

          <div className="absolute right-[-15px] sm:right-[-40px] z-20 print:hidden">
            <button
              onClick={handleNext}
              className="w-10 h-10 rounded-full border border-gray-200 bg-white hover:bg-gray-50 flex items-center justify-center text-gray-500 hover:text-primary transition-all shadow-md interactive"
              aria-label="Next Certification"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Cards Frame */}
          <div className="w-full max-w-2xl overflow-hidden px-2 py-4">
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.35, ease: "easeInOut" }}
                className="glass p-8 rounded-3xl border border-white/60 shadow-lg relative flex flex-col justify-between"
              >
                {/* Certificate Icon Overlay */}
                <div className="absolute top-6 right-8 opacity-10 text-primary">
                  <Award className="w-24 h-24" />
                </div>

                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                      <Award className="w-4 h-4" />
                    </div>
                    <span className="text-[10px] font-extrabold uppercase tracking-widest text-primary">
                      {CERTIFICATES[index].issuer}
                    </span>
                  </div>

                  <h4 className="text-base sm:text-lg font-extrabold text-gray-900 leading-snug">
                    {CERTIFICATES[index].title}
                  </h4>
                  
                  <p className="text-xs text-gray-500 leading-relaxed mt-3 max-w-md">
                    {CERTIFICATES[index].description}
                  </p>
                </div>

                {/* Footer details */}
                <div className="flex flex-wrap items-center justify-between gap-4 mt-8 pt-4 border-t border-black/[0.03]">
                  <div className="flex items-center gap-1.5 text-xs text-emerald-600 font-bold">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>Credential Verified</span>
                  </div>
                  
                  <div className="text-[10px] text-gray-400 font-semibold uppercase">
                    ID: {CERTIFICATES[index].credentialId} | Date: {CERTIFICATES[index].date}
                  </div>
                </div>

              </motion.div>
            </AnimatePresence>
          </div>

        </div>

        {/* Dot indicators */}
        <div className="flex items-center justify-center gap-1.5 mt-8 print:hidden">
          {CERTIFICATES.map((_, dotIdx) => (
            <button
              key={dotIdx}
              onClick={() => setIndex(dotIdx)}
              className={`w-2 h-2 rounded-full transition-all interactive ${
                index === dotIdx ? "w-6 bg-primary" : "bg-gray-200"
              }`}
              aria-label={`Go to slide ${dotIdx + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
