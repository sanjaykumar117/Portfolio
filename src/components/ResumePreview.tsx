"use client";

import { X, Mail, Phone, MapPin, Printer } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
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

const Linkedin = (props: React.SVGProps<SVGSVGElement>) => (
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
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);


interface ResumePreviewProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ResumePreview({ isOpen, onClose }: ResumePreviewProps) {
  
  const handlePrint = () => {
    // Trigger confetti for a little touch of delight
    confetti({
      particleCount: 80,
      spread: 60,
      origin: { y: 0.8 },
      colors: ["#2563EB", "#06B6D4", "#6366F1"],
    });
    
    setTimeout(() => {
      window.print();
    }, 500);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop blur */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/35 backdrop-blur-md"
          />

          {/* Modal content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            className="relative w-full max-w-4xl h-[90vh] bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden z-10 print:h-auto print:static print:w-full print:shadow-none print:rounded-none"
          >
            {/* Header controls (hidden in print) */}
            <div className="flex items-center justify-between px-6 py-4 bg-gray-50 border-b border-gray-100 print:hidden shrink-0">
              <div className="flex items-center gap-2">
                <span className="h-3.5 w-3.5 rounded-full bg-primary/20 flex items-center justify-center">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary"></span>
                </span>
                <span className="text-xs font-semibold tracking-wider text-gray-400 uppercase">
                  Interactive Resume
                </span>
              </div>
              <div className="flex items-center gap-3">
                <button
                  onClick={handlePrint}
                  className="flex items-center gap-2 px-4 py-2 text-xs font-semibold bg-primary text-white rounded-lg hover:bg-blue-700 transition-all shadow-md interactive"
                >
                  <Printer className="w-3.5 h-3.5" />
                  Print / Save PDF
                </button>
                <button
                  onClick={onClose}
                  className="p-2 text-gray-400 hover:text-gray-600 rounded-lg hover:bg-black/[0.03] transition-colors interactive"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Resume paper preview */}
            <div className="flex-1 overflow-y-auto p-8 md:p-12 bg-gray-100/50 print:bg-white print:p-0">
              <div
                id="resume-print-area"
                className="max-w-[800px] mx-auto bg-white p-8 md:p-10 shadow-lg border border-gray-100 rounded-lg print:shadow-none print:border-none print:p-0 print:mx-0"
              >
                {/* Header */}
                <div className="text-center border-b pb-6 border-gray-200">
                  <h1 className="text-3xl font-bold tracking-tight text-gray-900 uppercase">
                    Sanjay Kumar T
                  </h1>
                  <p className="text-sm text-primary font-medium tracking-wide mt-1">
                    Full Stack Developer | Python Developer | MCA Graduate 2026
                  </p>

                  <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 mt-4 text-[11px] text-gray-600">
                    <span className="flex items-center gap-1.5">
                      <Mail className="w-3.5 h-3.5 text-gray-400 shrink-0" />
                      sanjaykumar297836@gmail.com
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Phone className="w-3.5 h-3.5 text-gray-400 shrink-0" />
                      +91-9400139590
                    </span>
                    <span className="flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-gray-400 shrink-0" />
                      Chennai, Tamil Nadu
                    </span>
                  </div>

                  <div className="flex justify-center gap-6 mt-3 text-[11px] text-gray-600">
                    <a
                      href="https://linkedin.com/in/sanjay-kumar-t590"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 hover:text-primary transition-colors"
                    >
                      <Linkedin className="w-3.5 h-3.5 text-gray-400 shrink-0" />
                      linkedin.com/in/sanjay-kumar-t590
                    </a>
                    <a
                      href="https://github.com/sanjaykumar117"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 hover:text-primary transition-colors"
                    >
                      <Github className="w-3.5 h-3.5 text-gray-400 shrink-0" />
                      github.com/sanjaykumar117
                    </a>
                  </div>
                </div>

                {/* Professional Summary */}
                <div className="mt-6">
                  <h2 className="text-xs font-bold tracking-wider uppercase text-gray-950 border-l-2 border-primary pl-2 mb-2.5">
                    Professional Summary
                  </h2>
                  <p className="text-xs text-gray-700 leading-relaxed text-justify">
                    MCA candidate (2026) with certified industry experience at Triops Infotech (5-month internship) and TCS iON Applied Industry Projects. Delivered 2 verified full-stack applications using Python, Django, React.js, and MySQL. Skilled in DBMS, REST APIs, and OOP — adaptable across Software Development, IT Trainee, Web Developer, Testing, and BPO/ITES roles.
                  </p>
                </div>

                {/* Technical Skills */}
                <div className="mt-6">
                  <h2 className="text-xs font-bold tracking-wider uppercase text-gray-950 border-l-2 border-primary pl-2 mb-3">
                    Technical Skills
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-2.5 text-xs text-gray-700">
                    <div>
                      <p className="font-semibold text-gray-900">Languages & Frameworks</p>
                      <p className="text-[11px] mt-0.5 text-gray-600">Python, JavaScript (ES6+), SQL, HTML5, CSS3, Django, React.js, REST APIs</p>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Database & Tools</p>
                      <p className="text-[11px] mt-0.5 text-gray-600">MySQL, Relational DB Design, Query Optimization, Normalization, Git, GitHub, VS Code, Postman</p>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Core Concepts</p>
                      <p className="text-[11px] mt-0.5 text-gray-600">OOP (Object Oriented Programming), DBMS, Data Structures, Agile Basics, Debugging, Unit Testing</p>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Architecture</p>
                      <p className="text-[11px] mt-0.5 text-gray-600">MVC Architecture, Client-Server Systems, RESTful Web Services</p>
                    </div>
                  </div>
                </div>

                {/* Experience */}
                <div className="mt-6">
                  <h2 className="text-xs font-bold tracking-wider uppercase text-gray-950 border-l-2 border-primary pl-2 mb-3">
                    Internship & Industry Experience
                  </h2>

                  {/* Triops */}
                  <div className="mb-4">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-bold text-gray-900 text-xs">Software Developer Intern</h3>
                        <p className="text-[11px] text-gray-600 font-medium">Triops Infotech, Chennai</p>
                      </div>
                      <span className="text-[10px] font-semibold text-gray-500 uppercase">Jan 2026 – May 2026</span>
                    </div>
                    <p className="text-[10px] text-primary italic mt-1 font-medium">
                      Project: AI-Powered Personalized Trip Planner | Python · Django · React.js · MySQL
                    </p>
                    <ul className="list-disc list-inside mt-1.5 space-y-1 text-[11px] text-gray-600 pl-1">
                      <li>Built end-to-end trip planning system generating personalized itineraries using real-time weather/location data across a 5-month industry engagement.</li>
                      <li>Designed relational database (5 tables: users, trips, destinations, hotels, preferences) for 100+ records; implemented recommendation algorithm to surface relevant activities.</li>
                      <li>Delivered responsive React.js dashboard integrated with REST APIs, eliminating manual lookup effort and streamlining itinerary creation.</li>
                    </ul>
                  </div>

                  {/* TCS iON */}
                  <div>
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-bold text-gray-900 text-xs">Industry Project (90 hrs)</h3>
                        <p className="text-[11px] text-gray-600 font-medium">TCS iON Applied Industry Projects (AIP), TCS</p>
                      </div>
                      <span className="text-[10px] font-semibold text-gray-500 uppercase">Apr 2026 – May 2026</span>
                    </div>
                    <p className="text-[10px] text-primary italic mt-1 font-medium">
                      Project: Community Volunteer Connect | Python · Django · MySQL | Cert. ID: 1174-27224343-1016
                    </p>
                    <ul className="list-disc list-inside mt-1.5 space-y-1 text-[11px] text-gray-600 pl-1">
                      <li>Completed 90-hour TCS iON industry project building a volunteer management platform connecting NGOs with community volunteers.</li>
                      <li>Designed 4+ normalized tables (volunteers, organizations, events, registrations); implemented skills-based matching supporting 50+ volunteer profiles with full CRUD operations.</li>
                    </ul>
                  </div>
                </div>

                {/* Education */}
                <div className="mt-6">
                  <h2 className="text-xs font-bold tracking-wider uppercase text-gray-950 border-l-2 border-primary pl-2 mb-3">
                    Education
                  </h2>

                  <div className="space-y-3.5">
                    <div className="flex justify-between items-start">
                      <div>
                        <p className="font-bold text-gray-950 text-xs">Master of Computer Applications (MCA) – 71%</p>
                        <p className="text-[11px] text-gray-600 mt-0.5">Vels Institute of Science, Technology & Advanced Studies (VISTAS), Pallavaram, Chennai</p>
                      </div>
                      <span className="text-[10px] font-semibold text-gray-500 uppercase">2024 – 2026</span>
                    </div>

                    <div className="flex justify-between items-start">
                      <div>
                        <p className="font-bold text-gray-950 text-xs">B.Com – Computer Application – 60%</p>
                        <p className="text-[11px] text-gray-600 mt-0.5 font-medium">Nair Service Society College, MG University</p>
                      </div>
                      <span className="text-[10px] font-semibold text-gray-500 uppercase">2021 – 2024</span>
                    </div>

                    <div className="flex justify-between items-start">
                      <div>
                        <p className="font-bold text-gray-950 text-xs">HSC – 83%</p>
                        <p className="text-[11px] text-gray-600 mt-0.5">Mar Basil Hr. Sec. School, Rajkumari</p>
                      </div>
                      <span className="text-[10px] font-semibold text-gray-500 uppercase">2020 – 2021</span>
                    </div>
                  </div>
                </div>

                {/* Certifications */}
                <div className="mt-6">
                  <h2 className="text-xs font-bold tracking-wider uppercase text-gray-950 border-l-2 border-primary pl-2 mb-2.5">
                    Certifications
                  </h2>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-1.5 list-disc list-inside text-[11px] text-gray-600 pl-1">
                    <li>TCS iON AIP – Certificate of Industry Project: Community Volunteer Connect (90 hrs) — May 2026</li>
                    <li>Project Completion Certificate – AI-Powered Personalized Trip Planner — Triops Infotech, May 2026</li>
                    <li>Full Stack Developer – Greens Technology, Chennai (2024)</li>
                    <li>NPTEL Online Course – Programming / Computer Science (IIT)</li>
                  </ul>
                </div>

              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
