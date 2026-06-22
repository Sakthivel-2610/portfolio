import { useState } from "react";
import { FolderGit2, Cpu, Database, Eye, Terminal, Layers, Info } from "lucide-react";
import { portfolioData } from "../data/portfolioData";

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState<"All" | "IoT" | "Web Dev">("All");

  const filteredProjects = selectedCategory === "All"
    ? portfolioData.projects
    : portfolioData.projects.filter(p => p.category === selectedCategory);

  // Render high-fidelity SVG wireframe mockup headers depending on project
  const renderProjectWireframe = (title: string) => {
    if (title.toLowerCase().includes("door bell")) {
      return (
        <svg viewBox="0 0 400 180" className="w-full h-full bg-slate-900 dark:bg-slate-950 p-4 font-mono select-none">
          {/* Grid lines */}
          <line x1="20" y1="10" x2="20" y2="170" stroke="#334155" strokeWidth="0.5" strokeDasharray="3,3" />
          <line x1="100" y1="10" x2="100" y2="170" stroke="#334155" strokeWidth="0.5" strokeDasharray="3,3" />
          <line x1="200" y1="10" x2="200" y2="170" stroke="#334155" strokeWidth="0.5" strokeDasharray="3,3" />
          <line x1="300" y1="10" x2="300" y2="170" stroke="#334155" strokeWidth="0.5" strokeDasharray="3,3" />
          
          {/* Smart bell hub */}
          <rect x="50" y="40" width="80" height="100" rx="12" fill="#1e293b" stroke="#f97316" strokeWidth="1.5" />
          <circle cx="90" cy="70" r="14" fill="#334155" stroke="#f97316" strokeWidth="1" />
          <circle cx="90" cy="70" r="4" fill="#ef4444" className="animate-pulse" />
          {/* Signal waves leading to remote gateway */}
          <path d="M 150,90 Q 180,60 210,90 T 270,90" fill="none" stroke="#f97316" strokeWidth="2" strokeDasharray="4,4" />
          
          {/* Receiver database node */}
          <rect x="290" y="60" width="70" height="60" rx="8" fill="#1e293b" stroke="#3b82f6" strokeWidth="1" />
          <text x="325" y="80" fill="#3b82f6" fontSize="8" textAnchor="middle" fontWeight="bold">SERVER_API</text>
          <text x="325" y="95" fill="#10b981" fontSize="7" textAnchor="middle">ALERT: 200 OK</text>
          <text x="325" y="108" fill="#94a3b8" fontSize="6" textAnchor="middle">192.168.1.104</text>
          
          {/* Annotations */}
          <text x="60" y="155" fill="#f97316" fontSize="7" fontWeight="bold">ESP8266_BELL</text>
          <text x="290" y="155" fill="#3b82f6" fontSize="7" fontWeight="bold">CLOUD_ENDPOINT</text>
        </svg>
      );
    } else if (title.toLowerCase().includes("space allocation")) {
      return (
        <svg viewBox="0 0 400 180" className="w-full h-full bg-slate-900 dark:bg-slate-950 p-4 font-mono select-none">
          {/* Architectural structural grid */}
          <g stroke="#334155" strokeWidth="0.5">
            <line x1="10" y1="30" x2="390" y2="30" />
            <line x1="10" y1="90" x2="390" y2="90" />
            <line x1="10" y1="150" x2="390" y2="150" />
            <line x1="40" y1="10" x2="40" y2="170" />
            <line x1="160" y1="10" x2="160" y2="170" />
            <line x1="280" y1="10" x2="280" y2="170" />
          </g>

          {/* Space slot indicator boxes */}
          {/* Box 1: Busy */}
          <rect x="55" y="40" width="80" height="40" rx="6" fill="#ef4444" fillOpacity="0.25" stroke="#ef4444" strokeWidth="1" />
          <text x="95" y="58" fill="#ef4444" fontSize="8" textAnchor="middle" fontWeight="bold">ZONE_A: BUSY</text>
          <text x="95" y="72" fill="#fca5a5" fontSize="6" textAnchor="middle">OCCUPIED_TRIG_H</text>

          {/* Box 2: Vacant */}
          <rect x="175" y="40" width="80" height="40" rx="6" fill="#10b981" fillOpacity="0.25" stroke="#10b981" strokeWidth="1" />
          <text x="215" y="58" fill="#10b981" fontSize="8" textAnchor="middle" fontWeight="bold">ZONE_B: CLR</text>
          <text x="215" y="72" fill="#a7f3d0" fontSize="6" textAnchor="middle">VACANT_LOG_LOW</text>

          {/* Box 3: Automated space allocation graph line */}
          <rect x="295" y="40" width="80" height="100" rx="6" fill="#1e293b" stroke="#f97316" strokeWidth="1" />
          <text x="335" y="55" fill="#f97316" fontSize="7" textAnchor="middle" fontWeight="bold">SCHEDULER</text>
          {/* Mini line trend */}
          <path d="M 305,115 L 320,85 L 335,125 L 350,95 L 365,105" fill="none" stroke="#f97316" strokeWidth="1.5" />
          <text x="335" y="132" fill="#cbd5e1" fontSize="6" textAnchor="middle">DELAY: 1.4ms</text>

          {/* Central controller hub */}
          <rect x="110" y="110" width="100" height="30" rx="4" fill="#3b82f6" fillOpacity="0.3" stroke="#3b82f6" strokeWidth="1" />
          <text x="160" y="128" fill="#60a5fa" fontSize="8" textAnchor="middle" fontWeight="bold">MASTER_MCU</text>
        </svg>
      );
    } else {
      // Employee management database representation
      return (
        <svg viewBox="0 0 400 180" className="w-full h-full bg-slate-900 dark:bg-slate-950 p-4 font-mono select-none">
          {/* Database nodes */}
          <g stroke="#334155" strokeWidth="0.5">
            <rect x="30" y="30" width="100" height="100" rx="8" fill="#1e293b" stroke="#10b981" strokeWidth="1" />
            <rect x="240" y="30" width="120" height="100" rx="8" fill="#1e293b" stroke="#3b82f6" strokeWidth="1" />
          </g>

          {/* Table headers */}
          <path d="M 30,55 L 130,55" stroke="#10b981" strokeWidth="1" />
          <text x="80" y="46" fill="#10b981" fontSize="8" textAnchor="middle" fontWeight="bold">db.EMPLOYEES</text>
          
          <path d="M 240,55 L 360,55" stroke="#3b82f6" strokeWidth="1" />
          <text x="300" y="46" fill="#3b82f6" fontSize="8" textAnchor="middle" fontWeight="bold">db.DEPARTMENTS</text>

          {/* Column Names items */}
          <text x="40" y="70" fill="#94a3b8" fontSize="7">🔑 id (INT)</text>
          <text x="40" y="85" fill="#94a3b8" fontSize="7">👤 name (VARCHAR)</text>
          <text x="40" y="100" fill="#94a3b8" fontSize="7">💼 role_code (INT)</text>
          
          <text x="250" y="70" fill="#94a3b8" fontSize="7">🔑 dept_code (INT)</text>
          <text x="250" y="85" fill="#94a3b8" fontSize="7">🏢 division (VARCHAR)</text>
          <text x="250" y="100" fill="#94a3b8" fontSize="7">📍 floor_num (INT)</text>

          {/* Relation link connector line */}
          <path d="M 130,100 C 180,101 190,70 240,70" fill="none" stroke="#f97316" strokeWidth="1.5" strokeDasharray="3,3" />
          <circle cx="185" cy="85" r="4" fill="#f97316" />
          <text x="185" y="78" fill="#f97316" fontSize="6" textAnchor="middle" fontWeight="bold">FK_LNK</text>

          <text x="200" y="155" fill="#cbd5e1" fontSize="8" textAnchor="middle" fontWeight="bold">MySQL Database Record Schema Model</text>
        </svg>
      );
    }
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "All":
        return <Layers className="w-4 h-4" />;
      case "IoT":
        return <Cpu className="w-4 h-4" />;
      default:
        return <Database className="w-4 h-4" />;
    }
  };

  return (
    <section id="projects" className="py-20 bg-slate-50 dark:bg-slate-900/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="font-sans font-extrabold text-3xl sm:text-4xl text-slate-900 dark:text-white tracking-tight">
            Premium <span className="text-orange-500">Engineering Projects</span>
          </h2>
          <div className="w-16 h-1 bg-orange-500 mx-auto mt-3 rounded-full" />
          <p className="text-slate-500 dark:text-slate-400 mt-4 max-w-lg mx-auto font-sans text-sm">
            Explaining structural solutions linking active microcontrollers, communication hardware, and SQL relational tables.
          </p>
        </div>

        {/* Section categories selector filter bar */}
        <div className="flex justify-center items-center gap-3 mb-16">
          {(["All", "IoT", "Web Dev"] as const).map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer flex items-center gap-2 ${
                selectedCategory === cat
                  ? "bg-orange-500 text-white shadow-md shadow-orange-500/20"
                  : "bg-white dark:bg-slate-800 border border-slate-205 dark:border-slate-750 text-slate-650 dark:text-slate-350 hover:bg-slate-100/50"
              }`}
            >
              {getCategoryIcon(cat)}
              <span>{cat === "Web Dev" ? "Database & Web" : cat}</span>
            </button>
          ))}
        </div>

        {/* Projects Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {filteredProjects.map((proj, idx) => (
            <div
              key={idx}
              className="group glass-panel rounded-3xl border border-slate-200/55 dark:border-slate-800/55 overflow-hidden flex flex-col justify-between hover:shadow-xl dark:hover:bg-slate-950/20 transition-all duration-300"
            >
              
              {/* Card Wireframe Graphic Placeholder container */}
              <div className="relative overflow-hidden aspect-video border-b border-slate-200/40 dark:border-slate-800/40">
                {renderProjectWireframe(proj.title)}
                
                {/* Floating overlay chip on image header */}
                <span className="absolute top-4 left-4 px-2.5 py-1 text-[9px] font-mono font-bold rounded-md bg-[#0F172A]/80 text-[#FFF8EE] backdrop-blur-sm shadow border border-white/15 tracking-wider">
                  {proj.category === "IoT" ? "EMBEDDED_SYSTEM_NODE" : "SQL_WEB_SCHEMA"}
                </span>
              </div>

              {/* Card Summary details info body */}
              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-sans font-extrabold text-base sm:text-lg text-slate-850 dark:text-slate-105 leading-snug group-hover:text-orange-550 transition-colors">
                    {proj.title}
                  </h3>

                  <p className="font-sans text-xs text-slate-500 dark:text-slate-400 mt-3 leading-relaxed">
                    {proj.description}
                  </p>

                  {/* Bullet points info block */}
                  <div className="bg-slate-100/40 dark:bg-slate-900/10 rounded-2xl p-4 mt-5 border border-slate-200/10">
                    <div className="flex items-center gap-1 text-[9px] font-mono text-slate-400 font-extrabold mb-2">
                      <Info className="w-3.5 h-3.5" />
                      <span>DEVELOPMENT_BENCHMARKS:</span>
                    </div>
                    
                    <ul className="space-y-2">
                      {proj.details.map((det, dIdx) => (
                        <li key={dIdx} className="text-[11px] sm:text-xs text-slate-600 dark:text-slate-350 leading-relaxed font-sans flex items-start gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5 shrink-0" />
                          <span>{det}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Card footer containing technologist tags */}
                <div className="mt-8 pt-5 border-t border-slate-100 dark:border-slate-800/70">
                  <div className="flex flex-wrap gap-1.5">
                    {proj.technologies.slice(0, 3).map((tech, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2 py-0.5 rounded-md text-[9px] font-mono font-bold uppercase bg-slate-100 dark:bg-slate-800 text-slate-550 dark:text-slate-400 border border-slate-200/20 dark:border-slate-700/60"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
