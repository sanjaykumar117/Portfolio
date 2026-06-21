"use client";

import { useState, useEffect } from "react";
import { ArrowDown, Download } from "lucide-react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import confetti from "canvas-confetti";

interface HeroProps {
  onOpenResume: () => void;
}

const ROLES = [
  "Building Modern Web Applications",
  "Python & Django Specialist",
  "React.js Developer",
  "Problem Solver",
  "Future Software Engineer",
];

export default function Hero({ onOpenResume }: HeroProps) {
  const [roleIndex, setRoleIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);

  // Typewriter effect logic
  useEffect(() => {
    let timer: NodeJS.Timeout;
    const fullText = ROLES[roleIndex];

    const handleType = () => {
      if (!isDeleting) {
        // Typing
        setCurrentText(fullText.substring(0, currentText.length + 1));
        setTypingSpeed(70);

        if (currentText === fullText) {
          // Pause at full text
          timer = setTimeout(() => setIsDeleting(true), 2000);
          return;
        }
      } else {
        // Deleting
        setCurrentText(fullText.substring(0, currentText.length - 1));
        setTypingSpeed(40);

        if (currentText === "") {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % ROLES.length);
          return;
        }
      }

      timer = setTimeout(handleType, typingSpeed);
    };

    timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, roleIndex, typingSpeed]);

  // 3D Photo Hover Tilt effect using Framer Motion
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 20 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["15deg", "-15deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-15deg", "15deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    
    const mouseX = e.clientX - rect.left - width / 2;
    const mouseY = e.clientY - rect.top - height / 2;
    
    x.set(mouseX / width);
    y.set(mouseY / height);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const triggerWorkScroll = () => {
    const projectsSection = document.querySelector("#projects");
    if (projectsSection) {
      window.scrollTo({
        top: (projectsSection as HTMLElement).offsetTop - 80,
        behavior: "smooth",
      });
    }
  };

  const triggerContactScroll = () => {
    const contactSection = document.querySelector("#contact");
    if (contactSection) {
      window.scrollTo({
        top: (contactSection as HTMLElement).offsetTop - 80,
        behavior: "smooth",
      });
    }
  };

  const handleResumeClick = () => {
    confetti({
      particleCount: 50,
      spread: 40,
      origin: { y: 0.8 },
      colors: ["#2563EB", "#06B6D4"],
    });
    onOpenResume();
  };

  return (
    <section
      id="home"
      className="relative min-h-[95vh] flex items-center justify-center pt-28 pb-16 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center w-full z-10">
        
        {/* Left Info Area */}
        <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left order-2 lg:order-1">
          
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-primary/20 bg-primary/5 mb-6 shadow-sm"
          >
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            <span className="text-[11px] font-bold tracking-widest text-primary uppercase">
              Actively Seeking Roles
            </span>
          </motion.div>

          {/* Name & Titles */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 tracking-tight leading-[1.05]"
          >
            SANJAY KUMAR T
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg sm:text-xl font-bold text-gray-500 tracking-wide mt-3 flex flex-wrap justify-center lg:justify-start gap-x-3 gap-y-1"
          >
            <span className="text-primary">Full Stack Developer</span>
            <span className="text-gray-300">•</span>
            <span className="text-secondary">Python Developer</span>
            <span className="text-gray-300">•</span>
            <span className="text-accent">MCA Graduate 2026</span>
          </motion.h2>

          {/* Typewriter */}
          <div className="h-8 mt-5 flex items-center justify-center lg:justify-start text-sm sm:text-base font-bold text-gray-700 font-mono">
            <span>{currentText}</span>
            <span className="w-1.5 h-4.5 bg-primary ml-1 animate-pulse shrink-0"></span>
          </div>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="text-xs sm:text-sm text-gray-500 max-w-xl leading-relaxed mt-6 italic border-l-2 border-primary/20 pl-4 text-left"
          >
            &ldquo;Turning ideas into scalable digital experiences through modern full-stack development.&rdquo;
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mt-10 w-full"
          >
            <button
              onClick={triggerWorkScroll}
              className="px-6 py-3 rounded-full bg-primary text-white text-xs font-bold shadow-lg shadow-primary/20 hover:bg-blue-700 hover:shadow-primary/30 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer interactive"
            >
              View My Work
            </button>
            <button
              onClick={handleResumeClick}
              className="flex items-center gap-1.5 px-6 py-3 rounded-full border border-gray-200 bg-white hover:bg-gray-50 text-gray-800 text-xs font-bold transition-all hover:scale-[1.02] active:scale-[0.98] cursor-pointer interactive"
            >
              <Download className="w-4 h-4 text-gray-400" />
              Download Resume
            </button>
            <button
              onClick={triggerContactScroll}
              className="px-6 py-3 rounded-full border border-primary/20 text-primary text-xs font-bold hover:bg-primary/5 transition-all cursor-pointer interactive"
            >
              Contact Me
            </button>
          </motion.div>
        </div>

        {/* Right 3D Photo Centerpiece */}
        <div className="lg:col-span-5 flex items-center justify-center order-1 lg:order-2">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring", damping: 20, stiffness: 100 }}
            className="relative"
          >
            {/* Outer animated ring */}
            <div className="absolute inset-[-15px] rounded-full border border-primary/20 animate-spin-slow" />
            <div className="absolute inset-[-8px] rounded-full border border-dashed border-accent/30 animate-spin-slow" style={{ animationDirection: "reverse" }} />
            
            {/* Pulsing halo ring */}
            <div className="absolute inset-[-2px] rounded-full bg-gradient-to-tr from-primary to-accent opacity-30 blur-md animate-pulse" />

            {/* Core Tilt Container */}
            <motion.div
              style={{
                rotateX: rotateX,
                rotateY: rotateY,
                transformStyle: "preserve-3d",
              }}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              className="relative w-[280px] h-[280px] sm:w-[320px] sm:h-[320px] rounded-full overflow-hidden border-4 border-white bg-white shadow-2xl group cursor-grab active:cursor-grabbing interactive"
            >
              {/* Profile Image */}
              <img
                src="/sanjay.jpg"
                alt="Sanjay Kumar T"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
              />
              
              {/* Dynamic glare shine overlay */}
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.div>
          </motion.div>
        </div>

      </div>

      {/* Down Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 opacity-60 hover:opacity-100 transition-opacity print:hidden">
        <span className="text-[9px] font-bold tracking-widest text-gray-400 uppercase">
          Explore Portfolio
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          onClick={triggerWorkScroll}
          className="w-7 h-7 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:text-primary hover:border-primary/30 shadow-sm cursor-pointer interactive"
        >
          <ArrowDown className="w-3.5 h-3.5" />
        </motion.div>
      </div>
    </section>
  );
}
