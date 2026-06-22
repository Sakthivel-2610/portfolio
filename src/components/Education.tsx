import { GraduationCap, Calendar, Award, BookOpen } from "lucide-react";
import { portfolioData } from "../data/portfolioData";

export default function Education() {
  return (
    <section id="education" className="py-20 bg-amber-50/20 dark:bg-slate-900/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="font-sans font-extrabold text-3xl sm:text-4xl text-slate-900 dark:text-white tracking-tight">
            Academic <span className="text-orange-500">Timeline</span>
          </h2>
          <div className="w-16 h-1 bg-orange-500 mx-auto mt-3 rounded-full" />
          <p className="text-slate-500 dark:text-slate-400 mt-4 max-w-lg mx-auto font-sans text-sm">
            Educating the core engineering parameters that enrich analytical mindset.
          </p>
        </div>

        {/* Timeline Path Container */}
        <div className="relative max-w-3xl mx-auto pl-6 sm:pl-0">
          
          {/* Vertical central rule (Desktop centered, Mobile aligned left) */}
          <div className="absolute left-1 sm:left-1/2 top-2 bottom-2 w-0.5 bg-gradient-to-b from-orange-500 via-blue-500 to-transparent -translate-x-1/2 pointer-events-none" />

          {portfolioData.education.map((edu, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <div
                key={idx}
                className={`relative flex flex-col sm:flex-row items-start sm:items-center justify-between mb-12 sm:mb-16 last:mb-0 ${
                  isEven ? "sm:flex-row-reverse" : ""
                }`}
              >
                {/* Visual node anchor (timeline dot) */}
                <div className="absolute left-1 sm:left-1/2 top-4 sm:top-1/2 -translate-y-1/2 -translate-x-1/2 w-6 h-6 rounded-full border-4 border-white dark:border-slate-950 bg-orange-500 shadow-md z-10 timeline-dot" />

                {/* Date card (displays opposite to main content) */}
                <div
                  className={`hidden sm:flex w-[45%] flex-col ${
                    isEven ? "items-start text-left" : "items-end text-right"
                  }`}
                >
                  <div className="flex items-center gap-2 text-orange-600 dark:text-orange-400 px-3 py-1 bg-orange-500/10 rounded-full font-mono text-xs font-bold w-fit">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{edu.period}</span>
                  </div>
                </div>

                {/* Primary Description Card */}
                <div className="w-full sm:w-[45%] glass-panel p-6 sm:p-8 rounded-3xl border border-slate-200/50 dark:border-slate-800/50 relative hover:translate-y-[-2px] transition duration-200 shadow-sm hover:shadow-md">
                  
                  {/* Mobile-only Date tag */}
                  <div className="flex sm:hidden items-center gap-2 text-orange-600 dark:text-orange-400 px-2.5 py-1 bg-orange-500/10 rounded-full font-mono text-xs font-semibold mb-4 w-fit">
                    <Calendar className="w-3 h-3" />
                    <span>{edu.period}</span>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-slate-100 dark:bg-slate-800 rounded-xl text-slate-700 dark:text-slate-300">
                      <GraduationCap className="w-6 h-6" />
                    </div>
                    
                    <div className="space-y-1">
                      <h3 className="font-sans font-extrabold text-base sm:text-lg text-slate-850 dark:text-white leading-tight">
                        {edu.institution}
                      </h3>
                      <p className="font-sans font-bold text-xs text-orange-600 dark:text-orange-400">
                        {edu.degree}
                      </p>
                    </div>
                  </div>

                  <div className="mt-4 pt-4 border-t border-slate-100 dark:border-slate-800 gap-4 flex flex-col justify-between">
                    <p className="font-sans text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                      {edu.description}
                    </p>

                    <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-200/30 dark:border-slate-750 w-fit">
                      <Award className="w-4 h-4 text-emerald-500" />
                      <span className="font-mono text-xs font-bold text-slate-700 dark:text-slate-250">
                        {edu.score}
                      </span>
                    </div>
                  </div>

                </div>
              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}
