import { Award, Medal, ShieldAlert, Sparkles, Milestone, ArrowRight } from "lucide-react";
import { portfolioData } from "../data/portfolioData";

export default function Certifications() {
  return (
    <section id="certifications" className="py-20 bg-linear-to-b from-slate-50 to-white dark:from-slate-900/10 dark:to-slate-950/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Core Layout Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Left Block: Technical Certifications */}
          <div className="lg:col-span-7 space-y-12">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-amber-500/10 border border-amber-500/25 rounded-full mb-4">
                <Award className="w-4 h-4 text-amber-500 animate-[spin_6s_linear_infinite]" />
                <span className="font-mono text-xs font-bold text-amber-600 dark:text-amber-400">CREDENTIALS_AND_METRICS</span>
              </div>
              
              <h2 className="font-sans font-extrabold text-3xl sm:text-4xl text-slate-900 dark:text-white tracking-tight leading-none">
                Validated <span className="text-orange-500">Certifications</span>
              </h2>
              <p className="text-slate-550 dark:text-slate-400 mt-3 font-sans text-sm">
                Industry-standard diplomas and honors validating database management, circuit layouts, and advanced frontend structures.
              </p>
            </div>

            {/* Certifications Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {portfolioData.certifications.map((cert, i) => (
                <div
                  key={i}
                  className="group relative glass-panel p-6 rounded-3xl border border-slate-205/50 dark:border-slate-805/50 flex flex-col justify-between hover:shadow-md hover:translate-y-[-2px] transition duration-200"
                >
                  <div className="space-y-4">
                    {/* Badge Indicator */}
                    <div className="flex items-center justify-between">
                      <span className={`px-2.5 py-1 text-[8px] font-mono font-bold rounded-lg uppercase border ${cert.badgeColor}`}>
                        VERIFIED_CERT
                      </span>
                      <Award className="w-4 h-4 text-amber-500 group-hover:scale-110 transition-transform" />
                    </div>

                    <div>
                      <h3 className="font-sans font-bold text-slate-850 dark:text-slate-105 text-sm sm:text-base leading-snug group-hover:text-orange-500 transition-colors">
                        {cert.name}
                      </h3>
                      <p className="font-mono text-[10px] text-slate-400 dark:text-slate-500 mt-1.5">
                        Issuer: {cert.issuer}
                      </p>
                    </div>
                  </div>

                  <div className="mt-6 pt-3 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between text-[11px] font-mono text-slate-450 dark:text-slate-500">
                    <span>Valid Lifetime</span>
                    <span className="font-bold text-slate-700 dark:text-slate-350">{cert.year}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Block: Core Career Achievements */}
          <div className="lg:col-span-5 space-y-12">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-emerald-500/10 border border-emerald-500/25 rounded-full mb-4">
                <Medal className="w-4 h-4 text-emerald-500" />
                <span className="font-mono text-xs font-bold text-emerald-600 dark:text-emerald-400">KEY_MILESTONES</span>
              </div>

              <h2 className="font-sans font-extrabold text-3xl sm:text-4xl text-slate-900 dark:text-white tracking-tight leading-none">
                Distinguished <span className="text-blue-600">Achievements</span>
              </h2>
              <p className="text-slate-550 dark:text-slate-400 mt-3 font-sans text-sm">
                Proving active competence inside university labs and physical hardware testing environments:
              </p>
            </div>

            {/* Achievements Vertical Stack */}
            <div className="space-y-6">
              {portfolioData.achievements.map((ach, i) => (
                <div
                  key={i}
                  className="relative glass-panel p-6 rounded-3xl border border-slate-205/50 dark:border-slate-805/50 flex gap-4 hover:translate-x-1 duration-200 transition-transform group"
                >
                  <div className="p-3 bg-slate-100 dark:bg-slate-800 rounded-2xl h-fit shrink-0 text-orange-500 group-hover:scale-110 transition-transform">
                    <Milestone className="w-5 h-5" />
                  </div>

                  <div className="space-y-2">
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="font-sans font-extrabold text-slate-850 dark:text-white text-base">
                        {ach.title}
                      </h3>
                      {ach.highlight && (
                        <span className="px-2 py-0.5 rounded bg-blue-500/10 text-blue-600 dark:text-blue-400 text-[9px] font-mono font-bold tracking-wider uppercase border border-blue-500/20">
                          {ach.highlight}
                        </span>
                      )}
                    </div>
                    
                    <p className="font-sans text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                      {ach.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
