import { Briefcase, ArrowUpRight, Cpu, Code2, Sparkles } from "lucide-react";
import { portfolioData } from "../data/portfolioData";

export default function Internship() {
  return (
    <section id="internship" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-sans font-extrabold text-3xl sm:text-4xl text-slate-900 dark:text-white tracking-tight">
            Professional <span className="text-orange-500">Internships</span>
          </h2>
          <div className="w-16 h-1 bg-orange-500 mx-auto mt-3 rounded-full" />
          <p className="text-slate-500 dark:text-slate-400 mt-4 max-w-lg mx-auto font-sans text-sm">
            Gaining concrete, practical enterprise training in embedded microprocessors, web systems, and systems automation.
          </p>
        </div>

        {/* Internships Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch max-w-5xl mx-auto">
          {portfolioData.internships.map((intern, i) => {
            const isEmbedded = intern.company.toLowerCase().includes("code bind");
            return (
              <div
                key={i}
                className="group relative glass-panel p-8 rounded-[32px] border border-slate-200/50 dark:border-slate-800/50 flex flex-col justify-between hover:shadow-xl dark:hover:bg-slate-900/40 hover:translate-y-[-4px] transition-all duration-300"
              >
                {/* Floating corner ornament */}
                <div className="absolute top-6 right-6 opacity-40 group-hover:opacity-100 group-hover:scale-110 group-hover:rotate-12 transition-all text-slate-300 dark:text-slate-700">
                  <ArrowUpRight className="w-5 h-5" />
                </div>

                <div>
                  {/* Card Header (Badge & Company details) */}
                  <div className="flex items-center gap-3 mb-6">
                    <div className={`p-3.5 rounded-2xl ${
                      isEmbedded 
                        ? "bg-rose-500/10 text-rose-500" 
                        : "bg-blue-500/10 text-blue-500"
                    }`}>
                      {isEmbedded ? <Cpu className="w-6 h-6" /> : <Code2 className="w-6 h-6" />}
                    </div>
                    
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-sans font-black text-lg text-slate-850 dark:text-white leading-tight">
                          {intern.company}
                        </span>
                        {intern.grade && (
                          <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-lg bg-orange-500/10 text-orange-600 dark:text-orange-400 text-[10px] font-mono font-bold uppercase animate-pulse border border-orange-500/20">
                            <Sparkles className="w-2.5 h-2.5" />
                            {intern.grade}
                          </span>
                        )}
                      </div>
                      <p className="font-mono text-[10px] text-slate-400 dark:text-slate-500 font-bold uppercase tracking-wider mt-1 flex items-center gap-2">
                        {intern.period} | <span>{intern.role}</span>
                      </p>
                    </div>
                  </div>

                  {/* Descriptions Lists */}
                  <ul className="space-y-3.5 mb-8">
                    {intern.description.map((bullet, bIdx) => (
                      <li key={bIdx} className="flex items-start gap-2 text-slate-650 dark:text-slate-350 text-xs sm:text-sm font-sans leading-relaxed">
                        <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technology Badges bottom footer */}
                <div className="pt-4 border-t border-slate-100 dark:border-slate-800">
                  <div className="font-mono text-[9px] text-slate-400 uppercase tracking-widest mb-2 font-bold">
                    INTEGRATED_KNOWLEDGE_PILLS:
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {intern.techs.map((tech, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2.5 py-1 text-[10px] font-mono font-bold rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-205/30 dark:border-slate-750"
                      >
                        {tech}
                      </span>
                    ))}
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
