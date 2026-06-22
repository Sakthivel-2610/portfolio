import { useState, useEffect } from "react";
import { ArrowUp, Terminal, Activity, Linkedin, Github, Mail, Phone, ExternalLink } from "lucide-react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Dashboard from "./components/Dashboard";
import Education from "./components/Education";
import Internship from "./components/Internship";
import Projects from "./components/Projects";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";
import { portfolioData } from "./data/portfolioData";

export default function App() {
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem("sivasakthivel_dark_mode");
    if (saved) return saved === "true";
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Sync Dark Mode with document element
  useEffect(() => {
    localStorage.setItem("sivasakthivel_dark_mode", String(darkMode));
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  // Loading animation simulation
  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress >= 100) {
          clearInterval(timer);
          setTimeout(() => setLoading(false), 300);
          return 100;
        }
        const increment = Math.floor(Math.random() * 25) + 15;
        return Math.min(oldProgress + increment, 100);
      });
    }, 120);

    return () => clearInterval(timer);
  }, []);

  // Back to top visibility listener
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  if (loading) {
    return (
      <div className="fixed inset-0 z-50 bg-slate-900 flex flex-col items-center justify-center font-mono text-[#FFF8EE] p-6 selection:bg-orange-500">
        <div className="absolute inset-0 pointer-events-none opacity-5">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="load-grid" width="30" height="30" patternUnits="userSpaceOnUse">
                <path d="M 30 0 L 0 0 0 30" fill="none" stroke="white" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#load-grid)" />
          </svg>
        </div>

        <div className="max-w-md w-full space-y-6 text-center select-none">
          {/* Logo element loading */}
          <div className="w-14 h-14 rounded-2xl bg-orange-500 flex items-center justify-center text-white font-mono font-black text-2xl mx-auto shadow-lg shadow-orange-500/30 animate-pulse">
            S
          </div>

          <div className="space-y-2">
            <h1 className="font-sans font-extrabold text-2xl tracking-tight uppercase">Sivasakthivel</h1>
            <p className="text-xs text-orange-500 font-bold uppercase tracking-widest flex items-center justify-center gap-1.5">
              <Terminal className="w-3.5 h-3.5" /> INITIALIZING_TELEMETRY_ENGINE
            </p>
          </div>

          {/* Loader bar */}
          <div className="space-y-2 max-w-xs mx-auto">
            <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden p-0.5 border border-slate-705">
              <div
                className="h-full bg-linear-to-r from-orange-500 to-blue-500 rounded-full transition-all duration-300"
                style={{ width: `${progress}%` }}
              />
            </div>
            <div className="flex justify-between text-[10px] text-slate-400 font-mono">
              <span>BUFF_DATA_STREAM_OK</span>
              <span>{progress}%</span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`min-h-screen text-slate-800 transition-colors duration-300 dark:bg-[#0F172A] dark:text-slate-100 ${
      darkMode ? "dark bg-slate-950 gradient-bg-dark" : "bg-[#FFF8EE]/20 gradient-bg-light"
    }`}>
      {/* Absolute floating glowing elements */}
      <div className="absolute top-[20%] left-[-15%] w-[40%] aspect-square bg-orange-400/5 dark:bg-orange-500/5 rounded-full filter blur-3xl pointer-events-none" />
      <div className="absolute top-[60%] right-[-15%] w-[40%] aspect-square bg-blue-400/5 dark:bg-blue-500/5 rounded-full filter blur-3xl pointer-events-none" />

      {/* Primary Sticky Header */}
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

      {/* Main Single Page Sections */}
      <main className="relative">
        <Hero />
        <About />
        <Skills />
        <Dashboard />
        <Education />
        <Internship />
        <Projects />
        <Certifications />
        <Contact />
      </main>

      {/* Sticky float back-to-top button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-6 right-6 z-40 p-3 rounded-xl bg-orange-500 hover:bg-orange-600 text-white shadow-lg shadow-orange-500/20 active:scale-95 transition-all duration-300 cursor-pointer ${
          showScrollTop ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12 pointer-events-none"
        }`}
        aria-label="Back to top"
      >
        <ArrowUp className="w-5 h-5" />
      </button>

      {/* Professional Footer */}
      <footer className="bg-slate-900 dark:bg-slate-950 border-t border-slate-800 text-white py-16 font-sans">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-12 border-b border-slate-800">
            
            {/* Column 1: Sivasakthivel */}
            <div className="md:col-span-5 space-y-4">
              <div className="flex items-center space-x-2 text-left">
                <div className="w-10 h-10 rounded-xl bg-orange-500 flex items-center justify-center text-white font-mono font-bold text-lg">
                  S
                </div>
                <div>
                  <span className="font-sans font-bold text-white text-lg tracking-tight block">
                    Sivasakthivel
                  </span>
                  <span className="font-mono text-[10px] text-orange-400 font-bold uppercase tracking-wider">
                    Data Analyst Portfolio
                  </span>
                </div>
              </div>

              <p className="text-slate-400 text-xs sm:text-sm leading-relaxed max-w-sm">
                Aspiring Data Analyst and Electronics Undergraduate. Bridging the physical logics of microprocessors and signal components with cloud-hosted relational tables and Power BI reports.
              </p>

              {/* Handheld social quicklinks */}
              <div className="flex gap-3.5 pt-2">
                <a
                  href={portfolioData.personalInfo.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2.5 rounded-xl bg-slate-800 text-slate-400 hover:text-white hover:bg-orange-500 transition-all cursor-pointer"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href={portfolioData.personalInfo.githubPlaceholder}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2.5 rounded-xl bg-slate-800 text-slate-400 hover:text-white hover:bg-orange-500 transition-all cursor-pointer"
                  aria-label="GitHub Profile"
                >
                  <Github className="w-4 h-4" />
                </a>
                <a
                  href={`mailto:${portfolioData.personalInfo.email}`}
                  className="p-2.5 rounded-xl bg-slate-800 text-slate-400 hover:text-white hover:bg-orange-500 transition-all cursor-pointer"
                  aria-label="Email Me"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Column 2: Quick anchor routing links */}
            <div className="md:col-span-3 space-y-4">
              <h4 className="font-mono text-[10px] text-slate-400 font-bold uppercase tracking-widest">
                DIRECTORY_INDEX
              </h4>
              <ul className="grid grid-cols-2 gap-y-2.5 gap-x-4 text-xs font-semibold text-slate-400">
                <li>
                  <a href="#home" className="hover:text-orange-500 transition-colors">Home</a>
                </li>
                <li>
                  <a href="#about" className="hover:text-orange-500 transition-colors">About</a>
                </li>
                <li>
                  <a href="#skills" className="hover:text-orange-500 transition-colors">Skills</a>
                </li>
                <li>
                  <a href="#dashboard" className="hover:text-orange-500 transition-colors">Dashboard</a>
                </li>
                <li>
                  <a href="#education" className="hover:text-orange-500 transition-colors">Education</a>
                </li>
                <li>
                  <a href="#internship" className="hover:text-orange-500 transition-colors">Internship</a>
                </li>
                <li>
                  <a href="#projects" className="hover:text-orange-500 transition-colors">Projects</a>
                </li>
                <li>
                  <a href="#contact" className="hover:text-orange-500 transition-colors">Contact</a>
                </li>
              </ul>
            </div>

            {/* Column 3: Telemetry info */}
            <div className="md:col-span-4 space-y-4">
              <h4 className="font-mono text-[10px] text-slate-400 font-bold uppercase tracking-widest">
                SYSTEM_METRICS
              </h4>
              <div className="space-y-2 text-xs font-mono text-slate-400 bg-slate-950/50 rounded-2xl p-4 border border-slate-800">
                <div className="flex items-center justify-between">
                  <span>Engine status:</span>
                  <span className="text-emerald-500 font-bold">ONLINE</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Platform:</span>
                  <span className="text-orange-500">React + ViteSPA</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Response parameter:</span>
                  <span className="text-blue-400">AJAX Secure</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>CGPA index:</span>
                  <span className="text-yellow-400">8.0 / 10.0</span>
                </div>
              </div>
            </div>

          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between pt-8 text-[11px] font-mono text-slate-500 gap-4">
            <p>© {new Date().getFullYear()} Sivasakthivel. All rights reserved.</p>
            <p className="flex items-center gap-1">
              Made for <span>Sivasakthivel (gvss2610@gmail.com)</span>
            </p>
          </div>

        </div>
      </footer>

    </div>
  );
}
