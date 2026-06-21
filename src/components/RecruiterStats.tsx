"use client";

import { useEffect, useState, useRef } from "react";
import { useInView } from "framer-motion";

interface StatItem {
  value: number;
  suffix: string;
  label: string;
}

const STATS: StatItem[] = [
  { value: 2, suffix: "+", label: "Real-World Projects" },
  { value: 5, suffix: " Months", label: "Industry Internship" },
  { value: 90, suffix: " Hours", label: "Industry Experience" },
  { value: 10, suffix: "+", label: "Core Technologies" },
  { value: 2026, suffix: "", label: "MCA Grad Year" },
];

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    // Adapt speed based on value size
    const duration = 2000;
    const end = value;
    const stepTime = Math.max(Math.floor(duration / end), 15);
    
    // For large values like 2026, jump faster
    const increment = end > 500 ? Math.ceil(end / 100) : 1;

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [isInView, value]);

  return (
    <span ref={ref} className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gradient">
      {count}
      {suffix}
    </span>
  );
}

export default function RecruiterStats() {
  return (
    <section className="py-16 relative overflow-hidden bg-black/[0.01]">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Recruiter Stats Board */}
        <div className="glass p-8 md:p-12 rounded-3xl border border-white/60 shadow-lg grid grid-cols-2 md:grid-cols-5 gap-8 items-center text-center">
          {STATS.map((stat, idx) => (
            <div key={idx} className="flex flex-col items-center justify-center">
              <Counter value={stat.value} suffix={stat.suffix} />
              <span className="text-[11px] font-bold text-gray-400 uppercase mt-2 tracking-widest leading-tight">
                {stat.label}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
