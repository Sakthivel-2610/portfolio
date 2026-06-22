import { useEffect, useState, useRef } from "react";
import { Terminal, Globe, Database, Settings, Cpu, Layers } from "lucide-react";
import { portfolioData } from "../data/portfolioData";

export default function Skills() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const getIcon = (categoryName: string) => {
    switch (categoryName.toLowerCase()) {
      case "programming":
        return <Terminal className="w-5 h-5 text-orange-500" />;
      case "web development":
        return <Globe className="w-5 h-5 text-blue-500" />;
      case "database & analysis":
        return <Database className="w-5 h-5 text-green-500" />;
      case "tools & platfoms":
        return <Settings className="w-5 h-5 text-amber-500" />;
      default:
        return <Cpu className="w-5 h-5 text-rose-500" />;
    }
  };

  return (
    <section id="skills" ref={sectionRef} className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="font-sans font-extrabold text-3xl sm:text-4xl text-slate-900 dark:text-white tracking-tight">
            My <span className="text-orange-500">Technical Skills</span>
          </h2>
          <div className="w-16 h-1 bg-orange-500 mx-auto mt-3 rounded-full" />
          <p className="text-slate-500 dark:text-slate-400 mt-4 max-w-lg mx-auto font-sans text-sm">
            Fully responsive percentage bars signifying execution benchmarks across languages, databases, and IoT fundamentals.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
          {portfolioData.skillCategories.map((cat, index) => (
            <div
              key={index}
              className="glass-panel p-6 rounded-3xl border border-slate-200/60 dark:border-slate-800/60 transition-all hover:shadow-lg dark:hover:bg-slate-900/40 relative overflow-hidden group"
            >
              {/* Highlight Gradient backdrop on Hover */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-orange-400/5 to-transparent rounded-bl-full pointer-events-none group-hover:scale-110 transition-transform" />

              {/* Category Header */}
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-100 dark:border-slate-800/60">
                <div className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                  {getIcon(cat.category)}
                </div>
                <h3 className="font-sans font-bold text-lg text-slate-850 dark:text-white">
                  {cat.category}
                </h3>
              </div>

              {/* Skills Listing inside Category */}
              <div className="space-y-5">
                {cat.skills.map((skill, sIndex) => (
                  <div key={sIndex} className="space-y-2">
                    <div className="flex justify-between items-center text-sm font-sans">
                      <span className="font-semibold text-slate-700 dark:text-slate-300">
                        {skill.name}
                      </span>
                      <span className="font-mono text-xs font-bold text-slate-500 dark:text-slate-400">
                        {skill.level}%
                      </span>
                    </div>

                    {/* Progress Bar Track */}
                    <div className="h-2 w-full bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                      <div
                        className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out`}
                        style={{
                          width: isVisible ? `${skill.level}%` : "0%",
                          transitionDelay: `${sIndex * 100}ms`
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}

          {/* Special Bento Analytics Summary Card (100% Sivasakthivel Theme matching) */}
          <div className="glass-panel md:col-span-2 lg:col-span-3 p-8 rounded-3xl bg-linear-to-br from-slate-900 to-slate-950 dark:from-slate-950 dark:to-slate-950 border border-slate-800/80 text-white relative overflow-hidden shadow-xl mt-4">
            <div className="absolute top-0 right-0 w-96 h-96 bg-radial from-orange-500/10 via-transparent to-transparent pointer-events-none" />
            <div className="absolute bottom-[-100px] left-[-100px] w-96 h-96 bg-radial from-blue-500/10 via-transparent to-transparent pointer-events-none" />

            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center relative z-10">
              
              <div className="md:col-span-8 space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-orange-500/10 border border-orange-500/25 rounded-full">
                  <Layers className="w-4 h-4 text-orange-500" />
                  <span className="font-mono text-xs font-bold text-orange-400">HYBRID_ENGINEER_SPECTRUM</span>
                </div>
                
                <h3 className="font-sans font-extrabold text-2xl tracking-tight leading-snug">
                  Uniquely Positioned: High-fidelity hardware diagnostics blended with modern data analyst tools.
                </h3>
                
                <p className="font-sans text-sm text-slate-300 leading-relaxed">
                  As an Electronics undergraduate, I write firmware that is clean, optimal, and low-footprint. Simultaneously as a Data Specialist, I query structural databases, generate Power BI visualizations, and interpret statistics. This guarantees double efficacy for businesses spanning edge IoT and cloud reporting.
                </p>
              </div>

              <div className="md:col-span-4 flex justify-around">
                <div className="text-center p-4 bg-white/5 rounded-2xl border border-white/10 w-28 shadow-sm">
                  <div className="font-mono text-xs text-orange-400 font-bold uppercase tracking-wider mb-1">
                    ANALYTICS
                  </div>
                  <div className="font-sans font-black text-3xl">P_BI</div>
                  <div className="font-mono text-[9px] text-slate-400 mt-1">Excel & MySQL</div>
                </div>

                <div className="text-center p-4 bg-white/5 rounded-2xl border border-white/10 w-28 shadow-sm">
                  <div className="font-mono text-xs text-blue-400 font-bold uppercase tracking-wider mb-1">
                    HARDWARE
                  </div>
                  <div className="font-sans font-black text-3xl">C_MCU</div>
                  <div className="font-mono text-[9px] text-slate-400 mt-1">IoT Sensors</div>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
