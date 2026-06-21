"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Code, Server, Database, Wrench } from "lucide-react";

interface SkillNode {
  id: string;
  name: string;
  category: "frontend" | "backend" | "database" | "tools";
  x: number; // percentage
  y: number; // percentage
  level: string;
  connections: string[];
}

const SKILLS: SkillNode[] = [
  // Center Categories
  { id: "fe", name: "Frontend", category: "frontend", x: 25, y: 50, level: "Category", connections: ["html", "css", "js", "react"] },
  { id: "be", name: "Backend", category: "backend", x: 75, y: 50, level: "Category", connections: ["python", "django", "rest"] },
  { id: "db", name: "Database", category: "database", x: 50, y: 80, level: "Category", connections: ["mysql", "sql", "opt"] },
  { id: "tl", name: "Tools", category: "tools", x: 50, y: 20, level: "Category", connections: ["git", "github", "vscode", "postman"] },
  
  // Frontend Nodes
  { id: "html", name: "HTML5", category: "frontend", x: 10, y: 30, level: "Expert", connections: ["fe"] },
  { id: "css", name: "CSS3", category: "frontend", x: 10, y: 70, level: "Expert", connections: ["fe"] },
  { id: "js", name: "JavaScript", category: "frontend", x: 30, y: 25, level: "Advanced", connections: ["fe", "react"] },
  { id: "react", name: "React.js", category: "frontend", x: 35, y: 75, level: "Advanced", connections: ["fe", "js", "rest"] },
  
  // Backend Nodes
  { id: "python", name: "Python", category: "backend", x: 90, y: 30, level: "Advanced", connections: ["be", "django"] },
  { id: "django", name: "Django", category: "backend", x: 85, y: 70, level: "Advanced", connections: ["be", "python", "rest", "mysql"] },
  { id: "rest", name: "REST APIs", category: "backend", x: 60, y: 65, level: "Advanced", connections: ["be", "django", "react"] },
  
  // Database Nodes
  { id: "mysql", name: "MySQL", category: "database", x: 38, y: 90, level: "Intermediate", connections: ["db", "django", "sql"] },
  { id: "sql", name: "SQL", category: "database", x: 62, y: 90, level: "Advanced", connections: ["db", "mysql", "opt"] },
  { id: "opt", name: "Optimization", category: "database", x: 50, y: 95, level: "Intermediate", connections: ["db", "sql"] },

  // Tools Nodes
  { id: "git", name: "Git", category: "tools", x: 35, y: 12, level: "Advanced", connections: ["tl", "github"] },
  { id: "github", name: "GitHub", category: "tools", x: 65, y: 12, level: "Advanced", connections: ["tl", "git"] },
  { id: "vscode", name: "VS Code", category: "tools", x: 20, y: 15, level: "Expert", connections: ["tl"] },
  { id: "postman", name: "Postman", category: "tools", x: 80, y: 15, level: "Advanced", connections: ["tl"] },
];

export default function SkillGraph() {
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);
  const [selectedNode, setSelectedNode] = useState<string | null>(null);

  const activeNode = hoveredNode || selectedNode;

  // Determine if a connection line should be highlighted
  const isLineActive = (from: string, to: string) => {
    if (!activeNode) return false;
    if (activeNode === from || activeNode === to) {
      const node = SKILLS.find((n) => n.id === activeNode);
      return node?.connections.includes(from) || node?.connections.includes(to);
    }
    return false;
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "frontend": return <Code className="w-4 h-4" />;
      case "backend": return <Server className="w-4 h-4" />;
      case "database": return <Database className="w-4 h-4" />;
      case "tools": return <Wrench className="w-4 h-4" />;
      default: return null;
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto glass p-6 md:p-8 rounded-2xl relative overflow-hidden h-[600px] md:h-[650px]">
      <div className="absolute top-4 left-4 z-10">
        <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400">
          Interactive Architecture Map
        </h4>
        <p className="text-[11px] text-gray-500 mt-1">
          Hover or click nodes to explore dependencies & skill mappings.
        </p>
      </div>

      <div className="absolute top-4 right-4 flex gap-4 text-[10px] font-semibold uppercase tracking-wider">
        <span className="flex items-center gap-1.5 text-blue-600">
          <span className="w-2.5 h-2.5 rounded-full bg-primary/20 flex items-center justify-center">
            <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
          </span>
          Frontend
        </span>
        <span className="flex items-center gap-1.5 text-indigo-600">
          <span className="w-2.5 h-2.5 rounded-full bg-indigo-500/20 flex items-center justify-center">
            <span className="w-1.5 h-1.5 rounded-full bg-indigo-500"></span>
          </span>
          Backend
        </span>
        <span className="flex items-center gap-1.5 text-cyan-600">
          <span className="w-2.5 h-2.5 rounded-full bg-cyan-500/20 flex items-center justify-center">
            <span className="w-1.5 h-1.5 rounded-full bg-accent"></span>
          </span>
          Database
        </span>
      </div>

      {/* SVG Connections Layer */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none">
        {SKILLS.map((node) => {
          return node.connections.map((targetId) => {
            const target = SKILLS.find((n) => n.id === targetId);
            if (!target) return null;

            // Avoid double rendering lines by comparing IDs
            if (node.id > target.id) return null;

            const active = isLineActive(node.id, target.id);

            return (
              <line
                key={`${node.id}-${target.id}`}
                x1={`${node.x}%`}
                y1={`${node.y}%`}
                x2={`${target.x}%`}
                y2={`${target.y}%`}
                stroke={active ? "url(#activeGrad)" : "rgba(229, 231, 235, 0.5)"}
                strokeWidth={active ? 2.5 : 1.2}
                strokeDasharray={active ? "none" : node.level === "Category" || target.level === "Category" ? "4" : "0"}
                className="transition-all duration-300"
              />
            );
          });
        })}

        {/* Gradients */}
        <defs>
          <linearGradient id="activeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#2563EB" />
            <stop offset="50%" stopColor="#6366F1" />
            <stop offset="100%" stopColor="#06B6D4" />
          </linearGradient>
        </defs>
      </svg>

      {/* Nodes layer */}
      <div className="absolute inset-0 w-full h-full">
        {SKILLS.map((node) => {
          const isCategory = node.level === "Category";
          const isHovered = hoveredNode === node.id;
          const isSelected = selectedNode === node.id;
          const isActive = isHovered || isSelected;

          // Check if connected to active node
          let isConnected = false;
          if (activeNode) {
            isConnected = activeNode === node.id || node.connections.includes(activeNode) || 
                          (SKILLS.find((n) => n.id === activeNode)?.connections.includes(node.id) || false);
          }

          let categoryStyles = "";
          if (node.category === "frontend") categoryStyles = "border-blue-200 text-blue-700 bg-blue-50/70 hover:border-blue-400";
          else if (node.category === "backend") categoryStyles = "border-indigo-200 text-indigo-700 bg-indigo-50/70 hover:border-indigo-400";
          else if (node.category === "database") categoryStyles = "border-cyan-200 text-cyan-700 bg-cyan-50/70 hover:border-cyan-400";
          else categoryStyles = "border-gray-200 text-gray-700 bg-gray-50/70 hover:border-gray-400";

          if (isCategory) {
            categoryStyles += " font-semibold text-xs tracking-wider uppercase px-4 py-2 border-2 shadow-sm rounded-xl";
          } else {
            categoryStyles += " text-[10px] md:text-xs px-2.5 py-1.5 border rounded-full";
          }

          return (
            <motion.div
              key={node.id}
              style={{
                position: "absolute",
                left: `${node.x}%`,
                top: `${node.y}%`,
                transform: "translate(-50%, -50%)",
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="z-10 cursor-pointer"
            >
              <button
                onMouseEnter={() => setHoveredNode(node.id)}
                onMouseLeave={() => setHoveredNode(null)}
                onClick={() => setSelectedNode(selectedNode === node.id ? null : node.id)}
                className={`flex items-center gap-1.5 shadow-sm transition-all duration-300 font-medium ${categoryStyles} ${
                  isActive
                    ? "bg-primary text-white border-primary hover:border-primary ring-4 ring-primary/10 shadow-lg scale-105 z-20"
                    : activeNode && !isConnected
                    ? "opacity-30 scale-95"
                    : "opacity-100"
                }`}
              >
                {isCategory && getCategoryIcon(node.category)}
                <span>{node.name}</span>
                {isActive && !isCategory && (
                  <span className="text-[9px] bg-white/20 text-white px-1.5 py-0.5 rounded-full font-bold ml-1 uppercase">
                    {node.level}
                  </span>
                )}
              </button>
            </motion.div>
          );
        })}
      </div>

      {/* Interactive Info Panel */}
      <div className="absolute bottom-4 left-4 right-4 glass px-4 py-3.5 rounded-xl border border-white/60 text-xs flex flex-col md:flex-row justify-between items-start md:items-center gap-2 pointer-events-none">
        <div>
          {activeNode ? (
            <div>
              <p className="font-semibold text-gray-900 flex items-center gap-1.5">
                <span className={`w-2 h-2 rounded-full ${
                  SKILLS.find(n => n.id === activeNode)?.category === "frontend" ? "bg-blue-500" :
                  SKILLS.find(n => n.id === activeNode)?.category === "backend" ? "bg-indigo-500" :
                  SKILLS.find(n => n.id === activeNode)?.category === "database" ? "bg-cyan-500" : "bg-gray-500"
                }`}></span>
                Active Node: {SKILLS.find(n => n.id === activeNode)?.name} ({SKILLS.find(n => n.id === activeNode)?.level})
              </p>
              <p className="text-[11px] text-gray-500 mt-0.5">
                Connected to: {SKILLS.find(n => n.id === activeNode)?.connections.map(id => SKILLS.find(n => n?.id === id)?.name).join(", ")}
              </p>
            </div>
          ) : (
            <p className="text-gray-500 italic">Hover over any node above to visualize skill relationships...</p>
          )}
        </div>
        <div className="text-[10px] text-gray-400 font-semibold uppercase tracking-wider shrink-0">
          Sanjay Kumar T • Full Stack Web Graph
        </div>
      </div>
    </div>
  );
}
