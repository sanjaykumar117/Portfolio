"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Send, Check, Copy } from "lucide-react";
import confetti from "canvas-confetti";

const Github = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    width="20"
    height="20"
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
    width="20"
    height="20"
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


export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSending, setIsSending] = useState(false);
  const [sentSuccess, setSentSuccess] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("sanjaykumar297836@gmail.com");
    setCopied(true);
    
    // Confetti burst for copying email
    confetti({
      particleCount: 40,
      angle: 60,
      spread: 55,
      origin: { x: 0 },
      colors: ["#2563EB", "#06B6D4"],
    });

    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSending(true);

    // Simulate sending message
    setTimeout(() => {
      setIsSending(false);
      setSentSuccess(true);
      
      confetti({
        particleCount: 80,
        spread: 60,
        origin: { y: 0.8 },
        colors: ["#2563EB", "#06B6D4", "#6366F1"],
      });

      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setSentSuccess(false), 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-xs font-bold uppercase tracking-widest text-primary">
            Contact
          </h2>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight mt-2">
            Let&apos;s Start a Conversation
          </h3>
          <div className="w-12 h-1 bg-gradient-to-r from-primary to-accent mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-5xl mx-auto">
          
          {/* Info cards (Left Column) */}
          <div className="lg:col-span-5 flex flex-col gap-6 justify-center">
            
            {/* Email Card */}
            <div className="glass p-5 rounded-2xl border border-white/60 flex items-center justify-between interactive shadow-sm">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Email Address</h4>
                  <a href="mailto:sanjaykumar297836@gmail.com" className="text-xs font-semibold text-gray-900 hover:text-primary transition-colors">
                    sanjaykumar297836@gmail.com
                  </a>
                </div>
              </div>
              <button
                onClick={handleCopyEmail}
                className="p-2 hover:bg-black/[0.03] rounded-lg text-gray-400 hover:text-gray-600 transition-colors interactive"
                title="Copy Email"
              >
                {copied ? <Check className="w-4 h-4 text-emerald-500 animate-scale" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            {/* LinkedIn Card */}
            <a
              href="https://linkedin.com/in/sanjay-kumar-t590"
              target="_blank"
              rel="noopener noreferrer"
              className="glass p-5 rounded-2xl border border-white/60 flex items-center gap-4 interactive shadow-sm group"
            >
              <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-500 group-hover:scale-105 transition-transform">
                <Linkedin className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">LinkedIn</h4>
                <span className="text-xs font-semibold text-gray-900 group-hover:text-primary transition-colors">
                  linkedin.com/in/sanjay-kumar-t590
                </span>
              </div>
            </a>

            {/* GitHub Card */}
            <a
              href="https://github.com/sanjaykumar117"
              target="_blank"
              rel="noopener noreferrer"
              className="glass p-5 rounded-2xl border border-white/60 flex items-center gap-4 interactive shadow-sm group"
            >
              <div className="w-10 h-10 rounded-xl bg-gray-950/10 flex items-center justify-center text-gray-950 group-hover:scale-105 transition-transform">
                <Github className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">GitHub</h4>
                <span className="text-xs font-semibold text-gray-900 group-hover:text-primary transition-colors">
                  github.com/sanjaykumar117
                </span>
              </div>
            </a>

            {/* Location Card */}
            <div className="glass p-5 rounded-2xl border border-white/60 flex items-center gap-4 shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-cyan-500/10 flex items-center justify-center text-accent">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Location</h4>
                <span className="text-xs font-semibold text-gray-900">
                  Chennai, Tamil Nadu
                </span>
              </div>
            </div>

          </div>

          {/* Form Card (Right Column) */}
          <div className="lg:col-span-7">
            <div className="glass p-6 md:p-8 rounded-3xl border border-white/60 shadow-sm relative overflow-hidden">
              <h4 className="text-base font-bold text-gray-900 mb-6">Send Me a Direct Message</h4>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="form-name" className="text-[10px] font-bold uppercase text-gray-400">Your Name</label>
                    <input
                      id="form-name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="John Doe"
                      className="text-xs border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-primary transition-all text-gray-800 bg-white"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="form-email" className="text-[10px] font-bold uppercase text-gray-400">Email Address</label>
                    <input
                      id="form-email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="johndoe@email.com"
                      className="text-xs border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-primary transition-all text-gray-800 bg-white"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="form-message" className="text-[10px] font-bold uppercase text-gray-400">Message</label>
                  <textarea
                    id="form-message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Hello Sanjay, I'd like to discuss software engineering opportunities..."
                    className="text-xs border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-primary transition-all text-gray-800 bg-white resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSending}
                  className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-primary text-white text-xs font-bold shadow-md hover:bg-blue-700 disabled:bg-gray-400 transition-colors interactive"
                >
                  {isSending ? (
                    <>
                      <span className="w-4 h-4 rounded-full border-2 border-white border-t-transparent animate-spin" />
                      Sending message...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      Send Message
                    </>
                  )}
                </button>
              </form>

              {/* Form Success Popup */}
              {sentSuccess && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="absolute inset-0 bg-white/95 backdrop-blur-sm flex flex-col items-center justify-center text-center p-6"
                >
                  <div className="w-12 h-12 rounded-full bg-emerald-500/15 flex items-center justify-center text-emerald-600 mb-4 animate-scale">
                    <Check className="w-6 h-6" />
                  </div>
                  <h4 className="text-sm font-bold text-gray-900">Message Sent Successfully!</h4>
                  <p className="text-xs text-gray-500 mt-2 max-w-xs leading-relaxed">
                    Thank you for reaching out. I&apos;ll read your email and reply as soon as possible.
                  </p>
                </motion.div>
              )}

            </div>
          </div>

        </div>

        {/* Footer info */}
        <div className="text-center border-t border-black/[0.03] mt-24 pt-8 text-[10px] text-gray-400 font-semibold uppercase tracking-widest print:hidden">
          © {new Date().getFullYear()} Sanjay Kumar T. Designed & Programmed with Full Stack Passion.
        </div>

      </div>
    </section>
  );
}
