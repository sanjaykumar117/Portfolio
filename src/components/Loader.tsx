"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Loader() {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [loadMessage, setLoadMessage] = useState("Initializing environment...");

  useEffect(() => {
    const messages = [
      "Initializing environment...",
      "Compiling full-stack architecture...",
      "Loading 3D materials...",
      "Connecting relational datasets...",
      "Optimizing interface responsiveness...",
      "Welcome to Sanjay's space.",
    ];

    let currentMsgIdx = 0;
    const msgInterval = setInterval(() => {
      if (currentMsgIdx < messages.length - 1) {
        currentMsgIdx++;
        setLoadMessage(messages[currentMsgIdx]);
      }
    }, 300);

    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          clearInterval(msgInterval);
          setTimeout(() => setIsVisible(false), 300);
          return 100;
        }
        // Increment exponentially/variably for a natural load feel
        const diff = Math.floor(Math.random() * 8) + 4;
        return Math.min(prev + diff, 100);
      });
    }, 80);

    return () => {
      clearInterval(progressInterval);
      clearInterval(msgInterval);
    };
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#FAFAFA]"
        >
          {/* Main Logo Sphere */}
          <div className="relative flex items-center justify-center w-28 h-28 mb-8">
            {/* Spinning background rings */}
            <div className="absolute inset-0 rounded-full border-t border-r border-primary/20 animate-spin-slow" />
            <div className="absolute inset-2 rounded-full border-b border-l border-accent/20 animate-spin-slow" style={{ animationDirection: "reverse" }} />
            
            {/* Pulsing ring */}
            <div className="absolute inset-0 rounded-full border border-primary/40 animate-ping-slow" />

            {/* Core logo badge */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="w-20 h-20 rounded-2xl bg-gradient-to-tr from-primary to-accent flex items-center justify-center shadow-lg text-white font-bold text-3xl"
            >
              SK
            </motion.div>
          </div>

          {/* Progress Percent */}
          <div className="flex flex-col items-center gap-1 max-w-[280px] w-full px-4">
            <span className="text-[11px] font-bold tracking-widest text-primary uppercase">
              {progress}% Loaded
            </span>
            
            {/* Progress Bar Container */}
            <div className="w-full h-[3px] bg-gray-100 rounded-full overflow-hidden mt-1.5 shadow-inner">
              <motion.div
                className="h-full bg-gradient-to-r from-primary via-secondary to-accent"
                style={{ width: `${progress}%` }}
                transition={{ duration: 0.1 }}
              />
            </div>

            {/* Load Message */}
            <AnimatePresence mode="wait">
              <motion.span
                key={loadMessage}
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -5 }}
                transition={{ duration: 0.15 }}
                className="text-[10px] text-gray-400 font-semibold tracking-wider uppercase text-center mt-3 h-4"
              >
                {loadMessage}
              </motion.span>
            </AnimatePresence>
          </div>

          <div className="absolute bottom-6 text-[10px] text-gray-300 font-semibold uppercase tracking-widest">
            Sanjay Kumar T • MCA Graduate
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
