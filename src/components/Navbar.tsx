"use client";

import { useState, useEffect } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface NavbarProps {
  onOpenResume: () => void;
}

const NAV_ITEMS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Certifications", href: "#certifications" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar({ onOpenResume }: NavbarProps) {
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // 1. Navbar shrink effect
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // 2. Active section detection
      const scrollPosition = window.scrollY + 150; // offset
      
      for (const item of NAV_ITEMS) {
        const el = document.querySelector(item.href);
        if (el) {
          const top = (el as HTMLElement).offsetTop;
          const height = (el as HTMLElement).offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(item.href.replace("#", ""));
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetEl = document.querySelector(href);
    if (targetEl) {
      window.scrollTo({
        top: (targetEl as HTMLElement).offsetTop - 80,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-40 transition-all duration-500 ${
          isScrolled
            ? "py-3 bg-white/75 backdrop-blur-md border-b border-black/[0.03] shadow-sm"
            : "py-6 bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#home"
            className="flex items-center gap-2 group cursor-pointer interactive"
            onClick={(e) => scrollToSection(e, "#home")}
          >
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-primary to-accent flex items-center justify-center text-white font-bold text-base shadow-md group-hover:scale-105 transition-transform">
              SK
            </div>
            <div className="hidden sm:block text-left">
              <span className="text-sm font-bold text-gray-900 tracking-tight block">
                Sanjay Kumar
              </span>
              <span className="text-[10px] text-gray-400 font-semibold uppercase tracking-wider block -mt-1">
                Portfolio
              </span>
            </div>
          </a>

          {/* Desktop Nav Items */}
          <nav className="hidden lg:flex items-center gap-1.5 glass px-4 py-1.5 rounded-full border border-white/60">
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.href.replace("#", "");
              return (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => scrollToSection(e, item.href)}
                  className={`relative text-xs font-semibold px-4 py-2 rounded-full transition-all interactive ${
                    isActive ? "text-primary" : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="activeNavBackground"
                      className="absolute inset-0 bg-primary/5 rounded-full"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  {item.label}
                </a>
              );
            })}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={onOpenResume}
              className="flex items-center gap-1.5 px-4.5 py-2 text-xs font-semibold border border-gray-200 hover:border-primary/20 rounded-full hover:bg-primary/5 hover:text-primary transition-all shadow-sm interactive"
            >
              Resume
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-gray-600 hover:text-gray-900 rounded-xl hover:bg-black/[0.03] transition-all interactive"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed top-[60px] left-0 w-full bg-white/95 backdrop-blur-lg border-b border-gray-100 shadow-xl z-30 lg:hidden flex flex-col p-6 space-y-4"
          >
            <div className="flex flex-col space-y-1">
              {NAV_ITEMS.map((item) => {
                const isActive = activeSection === item.href.replace("#", "");
                return (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={(e) => scrollToSection(e, item.href)}
                    className={`text-sm font-semibold py-3 px-4 rounded-xl transition-all ${
                      isActive ? "bg-primary/5 text-primary" : "text-gray-600 hover:text-gray-900 hover:bg-black/[0.02]"
                    }`}
                  >
                    {item.label}
                  </a>
                );
              })}
            </div>
            <div className="border-t border-gray-100 pt-4 flex flex-col gap-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenResume();
                }}
                className="w-full flex items-center justify-center gap-1.5 py-3 text-xs font-bold border border-gray-200 rounded-xl hover:bg-primary/5 text-gray-800 transition-all"
              >
                View Digital Resume
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
