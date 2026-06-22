import { MapPin, GraduationCap, Award, BookOpen, Star } from "lucide-react";
import { portfolioData } from "../data/portfolioData";

export default function About() {
  const { location, degree, cgpa, aboutIntro } = portfolioData.personalInfo;

  return (
    <section id="about" className="py-20 bg-amber-50/20 dark:bg-slate-900/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="font-sans font-extrabold text-3xl sm:text-4xl text-slate-900 dark:text-white tracking-tight">
            About <span className="text-orange-500">Me</span>
          </h2>
          <div className="w-16 h-1 bg-orange-500 mx-auto mt-3 rounded-full" />
          <p className="text-slate-500 dark:text-slate-400 mt-4 max-w-lg mx-auto font-sans text-sm">
            Unifying hardware logic and analytical software algorithms to resolve problems.
          </p>
        </div>

        {/* Main Columns Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Left Column: Extensive Bio narrative */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <h3 className="font-sans font-bold text-2xl text-slate-800 dark:text-slate-100 mb-6 leading-tight">
              A motivated ECE mind on a mission to streamline <span className="text-blue-600">Complex Data Pathways</span>
            </h3>
            
            <p className="font-sans text-base text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
              {aboutIntro}
            </p>

            <p className="font-sans text-base text-slate-600 dark:text-slate-300 leading-relaxed mb-8">
              Having deep interest in Electronics and Communication Engineering (ECE), I see incredible potential in bridging the divide between IoT edge node sensors and downstream analytical dashboards. Whether configuring hardware registers for microcontrollers or coding MySQL query routines, my focal point remains the delivery of actionable data.
            </p>

            {/* Core Values / Focus Badges */}
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-orange-50 dark:bg-slate-800/40 border border-orange-100/30 dark:border-slate-850/30">
                <div className="flex items-center gap-3 mb-2">
                  <BookOpen className="w-5 h-5 text-orange-500" />
                  <span className="font-sans font-bold text-sm text-slate-800 dark:text-slate-200">Continuous Study</span>
                </div>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  Committed to learning machine learning algorithms and advanced regression methodologies.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-blue-50 dark:bg-slate-800/40 border border-blue-100/30 dark:border-slate-850/30">
                <div className="flex items-center gap-3 mb-2">
                  <Star className="w-5 h-5 text-blue-500" />
                  <span className="font-sans font-bold text-sm text-slate-800 dark:text-slate-200">Pragmatic Coder</span>
                </div>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  Prone to building actual telemetry hardware and testing it live instead of relying strictly on simulations.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Key details displayed as glassmorphic grid cards */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-6">
            
            {/* Location Card */}
            <div className="glass-panel p-6 rounded-2xl flex items-start gap-4 hover:translate-y-[-2px] transition-transform">
              <div className="p-3.5 rounded-xl bg-orange-500/10 text-orange-600 shrink-0">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-mono text-[10px] text-slate-500 dark:text-slate-400 font-bold uppercase tracking-wider">
                  CURRENT_LOCATION
                </h4>
                <p className="font-sans font-extrabold text-lg text-slate-850 dark:text-white mt-1">
                  {location}
                </p>
                <p className="font-sans text-xs text-slate-500 dark:text-slate-400 mt-1">
                  Tamil Nadu, ready for national and global relocation opportunities.
                </p>
              </div>
            </div>

            {/* Education Degree Card */}
            <div className="glass-panel p-6 rounded-2xl flex items-start gap-4 hover:translate-y-[-2px] transition-transform">
              <div className="p-3.5 rounded-xl bg-blue-500/10 text-blue-600 shrink-0">
                <GraduationCap className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-mono text-[10px] text-slate-500 dark:text-slate-400 font-bold uppercase tracking-wider">
                  ACADEMIC_CREDENTIAL
                </h4>
                <p className="font-sans font-extrabold text-base text-slate-850 dark:text-white mt-1 leading-tight">
                  {degree}
                </p>
                <p className="font-sans text-xs text-slate-500 dark:text-slate-400 mt-1">
                  Undergraduate Candidate in Electronics & Communication.
                </p>
              </div>
            </div>

            {/* Performance Metric Card */}
            <div className="glass-panel p-6 rounded-2xl flex items-start gap-4 hover:translate-y-[-2px] transition-transform">
              <div className="p-3.5 rounded-xl bg-green-500/10 text-green-600 shrink-0">
                <Award className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-mono text-[10px] text-slate-500 dark:text-slate-400 font-bold uppercase tracking-wider">
                  ACADEMIC_CGPA
                </h4>
                <p className="font-sans font-black text-2xl text-slate-850 dark:text-white mt-1 font-mono">
                  {cgpa} <span className="text-xs font-normal text-slate-500">/ 10.0 scale</span>
                </p>
                <p className="font-sans text-xs text-slate-500 dark:text-slate-400 mt-1">
                  Consistent high performance throughout engineering semesters.
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
