"use client";

import { useState, useEffect } from "react";
import Loader from "@/components/Loader";
import CustomCursor from "@/components/CustomCursor";
import Canvas3D from "@/components/Canvas3D";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Certifications from "@/components/Certifications";
import RecruiterStats from "@/components/RecruiterStats";
import Contact from "@/components/Contact";
import AIAssistant from "@/components/AIAssistant";
import ResumePreview from "@/components/ResumePreview";

export default function Home() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <main className="relative min-h-screen w-full selection:bg-primary/20 selection:text-primary">
      {/* Dynamic Interactive Cursor (Hidden on touch devices) */}
      <CustomCursor />

      {/* Entry Page Loader */}
      <Loader />

      {/* Three.js Interactive 3D shapes & floating particles background */}
      <Canvas3D />

      {/* Floating Glassmorphic Header */}
      <Navbar onOpenResume={() => setIsResumeOpen(true)} />

      {/* Sections */}
      <div className="relative z-10 w-full">
        {/* 1. Hero Folder */}
        <Hero onOpenResume={() => setIsResumeOpen(true)} />

        {/* 2. Recruiter Summary & Counts */}
        <RecruiterStats />

        {/* 3. About & Achievements */}
        <About />

        {/* 4. Skills Showcase & Graphic Map */}
        <Skills />

        {/* 5. Experience Timeline */}
        <Experience />

        {/* 6. Featured Projects (Apple Style) */}
        <Projects />

        {/* 7. Credentials & Certifications Carousel */}
        <Certifications />

        {/* 8. Contact & Simulated Chat Mail */}
        <Contact />
      </div>

      {/* Floating AI Assistant Chat Widget */}
      <AIAssistant />

      {/* Full Sheet Digital Resume (Print-to-PDF ready) */}
      <ResumePreview isOpen={isResumeOpen} onClose={() => setIsResumeOpen(false)} />
    </main>
  );
}
