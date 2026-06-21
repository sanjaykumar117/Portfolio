"use client";

import { useState, useEffect, useRef } from "react";
import { MessageSquare, X, Send, Sparkles, User, Bot } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface Message {
  id: string;
  sender: "user" | "bot";
  text: string;
  timestamp: Date;
}

const PRESETS = [
  { label: "⚡ Core Tech Stack", query: "What is your technical stack?" },
  { label: "💼 Internship Experience", query: "Tell me about your internship at Triops." },
  { label: "🎓 Education Details", query: "What is your academic background?" },
  { label: "🚀 Featured Projects", query: "What projects have you built?" },
  { label: "📞 Contact Info", query: "How can I contact Sanjay?" },
];

export default function AIAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);

  // Initialize with greeting
  useEffect(() => {
    setMessages([
      {
        id: "1",
        sender: "bot",
        text: "Hi there! I'm Sanjay's AI assistant. 🚀 I can tell you about his projects, skills, education, or work experience. What would you like to know?",
        timestamp: new Date(),
      },
    ]);
  }, []);

  // Auto-scroll to bottom
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  const handleResponse = (query: string) => {
    setIsTyping(true);

    setTimeout(() => {
      const q = query.toLowerCase();
      let reply = "";

      if (q.includes("stack") || q.includes("skill") || q.includes("language") || q.includes("tech") || q.includes("tool")) {
        reply = "Sanjay is a Full Stack Developer specializing in **Python** & **Django** for backend, and **React.js** for frontend. He is highly proficient in **MySQL** database design, REST APIs, MVC architecture, Git, GitHub, VS Code, and Postman.";
      } else if (q.includes("internship") || q.includes("triops") || q.includes("experience") || q.includes("work")) {
        reply = "Sanjay worked as a **Software Developer Intern** at **Triops Infotech, Chennai** from Jan 2026 to May 2026 (5 months). He built the full-stack *AI-Powered Personalized Trip Planner* using Django, React.js, and MySQL, implementing real-time weather and location integrations and recommendation algorithms.";
      } else if (q.includes("education") || q.includes("mca") || q.includes("college") || q.includes("academic") || q.includes("study") || q.includes("degree")) {
        reply = "Sanjay is currently completing his **Master of Computer Applications (MCA)** at **Vels Institute of Science, Technology & Advanced Studies (VISTAS)**, Chennai, graduating in 2026 with a **71%** aggregate. Prior to that, he completed his **B.Com in Computer Application** (2021-2024) with **60%** at NSS College.";
      } else if (q.includes("project") || q.includes("portfolio") || q.includes("build") || q.includes("volunteer") || q.includes("trip planner")) {
        reply = "Sanjay has built two notable full-stack applications:\n\n1. **AI-Powered Personalized Trip Planner** (Django, React.js, MySQL): An end-to-end trip planning platform with weather data integrations and a relational database for 100+ records.\n2. **Community Volunteer Connect** (TCS iON AIP): A volunteer platform mapping NGOs with volunteers, supporting full CRUD operations and a skills-based matching system.";
      } else if (q.includes("contact") || q.includes("email") || q.includes("phone") || q.includes("reach") || q.includes("hire") || q.includes("location") || q.includes("linkedin")) {
        reply = "Here is how you can reach Sanjay directly:\n\n- **Email**: [sanjaykumar297836@gmail.com](mailto:sanjaykumar297836@gmail.com)\n- **Phone**: [+91-9400139590](tel:+919400139590)\n- **Location**: Chennai, Tamil Nadu\n- **LinkedIn**: [linkedin.com/in/sanjay-kumar-t590](https://linkedin.com/in/sanjay-kumar-t590)\n- **GitHub**: [github.com/sanjaykumar117](https://github.com/sanjaykumar117)";
      } else if (q.includes("reloc") || q.includes("locat") || q.includes("chennai") || q.includes("where")) {
        reply = "Sanjay is currently based in **Chennai, Tamil Nadu**, and is open to local software developer, web developer, IT trainee, and testing roles, as well as relocation or remote positions.";
      } else if (q.includes("hello") || q.includes("hi") || q.includes("hey") || q.includes("greetings")) {
        reply = "Hello! Nice to meet you. Ask me anything about Sanjay's coding journey, projects, or professional resume. I'm here to help!";
      } else {
        reply = "That's a great question! While I'm just a simple assistant, I can tell you that Sanjay is an MCA graduate (2026) with solid hands-on experience in full-stack Python/Django and React.js development. For this specific query, you can reach out to him directly at **sanjaykumar297836@gmail.com** or call **+91-9400139590**.";
      }

      setMessages((prev) => [
        ...prev,
        {
          id: Date.now().toString(),
          sender: "bot",
          text: reply,
          timestamp: new Date(),
        },
      ]);
      setIsTyping(false);
    }, 900);
  };

  const handleSend = (text: string) => {
    if (!text.trim()) return;

    const userMsg: Message = {
      id: Date.now().toString(),
      sender: "user",
      text,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputValue("");
    handleResponse(text);
  };

  return (
    <>
      {/* Floating Chat Bubble */}
      <div className="fixed bottom-6 right-6 z-50">
        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          className="relative flex items-center justify-center w-14 h-14 rounded-full bg-primary text-white shadow-xl hover:bg-blue-700 transition-colors focus:outline-none interactive"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          aria-label="Toggle AI Assistant"
        >
          <AnimatePresence mode="wait">
            {isOpen ? (
              <motion.div
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <X className="w-6 h-6" />
              </motion.div>
            ) : (
              <motion.div
                key="open"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="flex items-center justify-center"
              >
                <MessageSquare className="w-6 h-6" />
                <span className="absolute -top-1 -right-1 flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-accent"></span>
                </span>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.button>
      </div>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed bottom-24 right-6 w-[90vw] md:w-[400px] h-[550px] rounded-2xl glass-darker shadow-2xl border border-white/60 z-50 flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="p-4 bg-gradient-to-r from-primary/10 to-accent/10 border-b border-black/[0.05] flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                  <Sparkles className="w-5 h-5 animate-pulse" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 text-sm flex items-center gap-1.5">
                    Sanjay&apos;s AI Bot
                  </h3>
                  <span className="text-[11px] text-primary font-medium flex items-center gap-1">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                    Online & Ready
                  </span>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-400 hover:text-gray-600 p-1 rounded-lg hover:bg-black/[0.03] transition-colors interactive"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Conversation Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex gap-2.5 ${
                    msg.sender === "user" ? "flex-row-reverse" : "flex-row"
                  }`}
                >
                  <div
                    className={`w-7 h-7 rounded-full flex items-center justify-center text-[10px] shrink-0 ${
                      msg.sender === "user"
                        ? "bg-primary text-white"
                        : "bg-gray-100 text-gray-600 border border-gray-200"
                    }`}
                  >
                    {msg.sender === "user" ? <User className="w-3.5 h-3.5" /> : <Bot className="w-3.5 h-3.5" />}
                  </div>
                  <div
                    className={`max-w-[75%] rounded-2xl px-4 py-2.5 text-xs leading-relaxed ${
                      msg.sender === "user"
                        ? "bg-primary text-white rounded-tr-none"
                        : "bg-white text-gray-800 border border-gray-100 shadow-sm rounded-tl-none"
                    }`}
                  >
                    {/* Basic Markdown Parser for bolding and links */}
                    {msg.text.split("\n\n").map((para, i) => (
                      <p key={i} className={i > 0 ? "mt-2" : ""}>
                        {para.split("**").map((chunk, j) => {
                          if (j % 2 === 1) {
                            return <strong key={j} className="font-semibold">{chunk}</strong>;
                          }
                          // Check for links
                          const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
                          const matches = Array.from(chunk.matchAll(linkRegex));
                          if (matches.length > 0) {
                            let lastIdx = 0;
                            const elements: React.ReactNode[] = [];
                            matches.forEach((match, matchIdx) => {
                              const text = match[1];
                              const url = match[2];
                              const start = match.index!;
                              if (start > lastIdx) {
                                elements.push(chunk.substring(lastIdx, start));
                              }
                              elements.push(
                                <a
                                  key={matchIdx}
                                  href={url}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="underline text-accent font-medium hover:text-cyan-400 transition-colors"
                                >
                                  {text}
                                </a>
                              );
                              lastIdx = start + match[0].length;
                            });
                            if (lastIdx < chunk.length) {
                              elements.push(chunk.substring(lastIdx));
                            }
                            return <span key={j}>{elements}</span>;
                          }
                          return chunk;
                        })}
                      </p>
                    ))}
                  </div>
                </div>
              ))}

              {isTyping && (
                <div className="flex gap-2.5">
                  <div className="w-7 h-7 rounded-full bg-gray-100 border border-gray-200 flex items-center justify-center text-[10px] shrink-0 text-gray-600">
                    <Bot className="w-3.5 h-3.5" />
                  </div>
                  <div className="bg-white border border-gray-100 rounded-2xl rounded-tl-none px-4 py-3 shadow-sm flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: "0ms" }}></span>
                    <span className="w-1.5 h-1.5 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: "150ms" }}></span>
                    <span className="w-1.5 h-1.5 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: "300ms" }}></span>
                  </div>
                </div>
              )}
              <div ref={chatEndRef} />
            </div>

            {/* Presets Chips */}
            <div className="px-4 py-2 border-t border-black/[0.03] bg-black/[0.01] overflow-x-auto flex gap-1.5 scrollbar-thin scrollbar-none whitespace-nowrap">
              {PRESETS.map((preset, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSend(preset.query)}
                  className="text-[10px] font-medium px-2.5 py-1.5 rounded-full bg-white hover:bg-primary/5 hover:text-primary border border-gray-200 hover:border-primary/20 text-gray-600 transition-all shadow-sm shrink-0 interactive"
                >
                  {preset.label}
                </button>
              ))}
            </div>

            {/* Input Form */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSend(inputValue);
              }}
              className="p-3 border-t border-black/[0.05] bg-white flex items-center gap-2"
            >
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Ask me a question..."
                className="flex-1 text-xs border border-gray-200 rounded-xl px-3.5 py-2.5 focus:outline-none focus:border-primary transition-all text-gray-800 bg-gray-50/50"
              />
              <button
                type="submit"
                className="p-2.5 rounded-xl bg-primary text-white hover:bg-blue-700 transition-colors focus:outline-none interactive"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
