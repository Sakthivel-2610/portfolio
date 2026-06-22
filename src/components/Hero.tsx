import { ArrowRight, FileText, Mail, BarChart2, Cpu, TrendingUp } from "lucide-react";

const avatarImg = "/src/assets/images/sivasakthivel_avatar_1781876852507.jpg";

export default function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  const handleDownloadResume = () => {
    // Generate a beautiful system simulated Resume view or a prompt
    // For now we will trigger a PDF print or open a custom styled clean window for Sivasakthivel's summary
    const win = window.open("", "_blank");
    if (win) {
      win.document.write(`
        <html>
          <head>
            <title>Sivasakthivel - Resume</title>
            <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
            <style>
              body { font-family: 'Inter', sans-serif; background-color: #FFF8EE; }
            </style>
          </head>
          <body class="p-8 md:p-16 max-w-4xl mx-auto">
            <div class="bg-white p-8 md:p-12 rounded-3xl border border-orange-100 shadow-xl">
              <header class="border-b-2 border-orange-500 pb-6 mb-8">
                <h1 class="text-4xl font-extrabold text-slate-900">Sivasakthivel</h1>
                <p class="text-xl font-medium text-orange-600 mt-1">Aspiring Data Analyst & ECE Student</p>
                <div class="mt-4 flex flex-wrap gap-x-6 gap-y-2 text-sm text-slate-600">
                  <span>📍 Tamil Nadu, India</span>
                  <span>📧 gvss2610@gmail.com</span>
                  <span>📞 +91 7339582092</span>
                  <span>🔗 linkedin.com/in/sivasakthivel-v-3824b7341</span>
                </div>
              </header>

              <section class="mb-8">
                <h2 class="text-lg font-bold text-slate-800 uppercase tracking-wider mb-3">Professional Summary</h2>
                <p class="text-slate-600 leading-relaxed">
                  Highly motivated Electronics and Communication Engineering undergraduate with robust training in Data Analysis, Database Management, and Web Technologies. Passionate about transforming raw transactional or hardware data into interactive BI insights. Done internships across IoT and web technologies, achieving exemplary Grade A+ certifications is web programming.
                </p>
              </section>

              <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h2 class="text-lg font-bold text-slate-800 uppercase tracking-wider mb-3">Education</h2>
                  <div class="mb-4">
                    <h3 class="font-bold text-slate-900">Dhanalakshmi Srinivasan Engineering College</h3>
                    <p class="text-sm text-orange-600">B.E. Electronics & Communication (2023 - 2027)</p>
                    <p class="text-sm font-semibold text-slate-700 mt-1">CGPA: 8.0</p>
                  </div>
                  <div>
                    <h3 class="font-bold text-slate-900">Little Flower Higher Secondary School</h3>
                    <p class="text-sm text-slate-500">HSC Class XII (2022 - 2023)</p>
                    <p class="text-sm font-semibold text-slate-700 mt-1">Percentage: 71%</p>
                  </div>
                </div>

                <div>
                  <h2 class="text-lg font-bold text-slate-800 uppercase tracking-wider mb-3">Work History</h2>
                  <div class="mb-4">
                    <h3 class="font-bold text-slate-900">Embedded System Intern</h3>
                    <p class="text-xs text-orange-600">CODE BIND TECHNOLOGY | Jun 2024</p>
                    <p class="text-sm text-slate-600 mt-1">Worked on hardware sensors, ESP interfacing, and microcontroller coding.</p>
                  </div>
                  <div>
                    <h3 class="font-bold text-slate-900">Web Development Intern (Grade A+)</h3>
                    <p class="text-xs text-blue-600">GLOWLOGICS SOLUTION | Aug 2024</p>
                    <p class="text-sm text-slate-600 mt-1">Designed layouts, forms, and database record components.</p>
                  </div>
                </div>
              </div>

              <section class="mb-8">
                <h2 class="text-lg font-bold text-slate-800 uppercase tracking-wider mb-3">Key Project Highlight</h2>
                <div class="border-l-4 border-orange-500 pl-4">
                  <h3 class="font-extrabold text-slate-900">Smart Space Allocation Using IoT supported Sensors</h3>
                  <p class="text-sm text-slate-600 mb-1">Coded adaptive scheduling algorithms linking sensor inputs to telemetry analytics dashboard outputs.</p>
                  <p class="text-xs font-mono text-orange-500">Technologies: IoT, Microcontrollers, Live Telemetry, Sensor Interfacing</p>
                </div>
              </section>

              <button onclick="window.print()" class="no-print mt-4 bg-orange-500 text-white font-bold py-2 px-6 rounded-xl hover:bg-orange-600 transition shadow">
                Print Resume / Save PDF
              </button>
            </div>
          </body>
        </html>
      `);
      win.document.close();
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-[92vh] flex items-center pt-24 pb-16 overflow-hidden select-none"
    >
      {/* Dynamic Animated ECE & Data Analytics Background Element */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-20 dark:opacity-30">
        {/* Connection Network Lines */}
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-slate-200 dark:text-slate-800" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
          
          {/* Wave Signal Line (Oscilloscope representation) */}
          <path
            d="M 0,250 Q 150,120 300,250 T 600,250 T 900,250 T 1200,250 T 1600,250"
            fill="none"
            stroke="url(#gradient-line)"
            strokeWidth="2"
            strokeDasharray="4, 4"
            className="animate-[dash_40s_linear_infinite]"
          />
          <linearGradient id="gradient-line" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#F97316" />
            <stop offset="50%" stopColor="#2563EB" />
            <stop offset="100%" stopColor="#FB923C" />
          </linearGradient>

          {/* Floating Telemetry Dots */}
          <circle cx="150" cy="180" r="4" className="fill-orange-500 animate-pulse" />
          <circle cx="450" cy="250" r="5" className="fill-blue-500 animate-bounce" style={{ animationDuration: "3s" }} />
          <circle cx="750" cy="120" r="3" className="fill-orange-400 animate-pulse" style={{ animationDuration: "5s" }} />
          <circle cx="1050" cy="220" r="4" className="fill-blue-400 animate-bounce" style={{ animationDuration: "4s" }} />
        </svg>

        {/* Ambient floating circles with blurred filters */}
        <div className="absolute top-1/4 left-1/3 w-64 h-64 bg-orange-500/10 dark:bg-orange-500/5 rounded-full filter blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-500/10 dark:bg-blue-500/5 rounded-full filter blur-3xl animate-pulse" style={{ animationDuration: "8s" }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Hero Content */}
          <div className="lg:col-span-7 flex flex-col justify-center text-center lg:text-left">
            {/* Tag / Badge */}
            <div className="inline-flex items-center self-center lg:self-start space-x-2 bg-orange-100 dark:bg-orange-500/10 border border-orange-200 dark:border-orange-500/20 px-3 py-1.5 rounded-full mb-6">
              <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
              <span className="font-mono text-xs font-semibold text-orange-600 dark:text-orange-400 uppercase tracking-widest">
                Data Analyst & ECE Coder
              </span>
            </div>

            {/* Main Name */}
            <h1 className="font-sans font-extrabold text-5xl sm:text-6xl md:text-7xl text-slate-900 dark:text-white tracking-tight leading-none mb-3">
              Hello, I'm <br className="sm:hidden" />
              <span className="text-gradient">Sivasakthivel</span>
            </h1>

            {/* Professional Title */}
            <div className="flex items-center justify-center lg:justify-start gap-3 mb-6">
              <BarChart2 className="w-7 h-7 text-orange-500 shrink-0" />
              <h2 className="font-sans font-bold text-2xl sm:text-3xl text-slate-700 dark:text-slate-100">
                Aspiring Data Analyst
              </h2>
            </div>

            {/* Tagline sentence */}
            <p className="font-sans text-base sm:text-lg md:text-xl text-slate-600 dark:text-slate-300 leading-relaxed max-w-xl mb-10 mx-auto lg:mx-0">
              Transforming complex hardware or transaction data into clear interactive insights. ECE undergraduate, skilled in IoT platforms, database queries, and custom front-end development portfolios.
            </p>

            {/* Portfolio CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <button
                id="btn-view-projects"
                onClick={() => scrollToSection("projects")}
                className="group w-full sm:w-auto px-6 py-3.5 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-semibold flex items-center justify-center space-x-2 shadow-lg shadow-orange-500/20 hover:shadow-orange-500/35 active:scale-98 transition-all cursor-pointer glow-on-hover"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                id="btn-download-resume"
                onClick={handleDownloadResume}
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold flex items-center justify-center space-x-2 shadow-lg shadow-blue-500/20 hover:shadow-blue-500/30 active:scale-98 transition-all cursor-pointer glow-blue-on-hover"
              >
                <FileText className="w-4 h-4" />
                <span>Download Resume</span>
              </button>

              <button
                id="btn-contact-me"
                onClick={() => scrollToSection("contact")}
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl glass-panel text-slate-800 dark:text-slate-250 font-semibold flex items-center justify-center space-x-2 hover:bg-orange-500/10 hover:text-orange-500 border border-slate-250 dark:border-slate-800 active:scale-98 transition-all cursor-pointer"
              >
                <Mail className="w-4 h-4" />
                <span>Contact Me</span>
              </button>
            </div>

            {/* Quick Micro Tech-Tags */}
            <div className="mt-12 pt-8 border-t border-slate-200/50 dark:border-slate-800/50 flex flex-wrap justify-center lg:justify-start gap-y-4 gap-x-8 text-xs text-slate-600 dark:text-slate-400 font-mono">
              <div className="flex items-center gap-2">
                <Cpu className="w-4 h-4 text-orange-500" />
                <span>Embedded IoT</span>
              </div>
              <div className="flex items-center gap-2">
                <BarChart2 className="w-4 h-4 text-orange-500" />
                <span>Power BI & Excel</span>
              </div>
              <div className="flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-orange-500" />
                <span>MySQL Records</span>
              </div>
            </div>

          </div>

          {/* Right Hero Side - Sophisticated Image Display with telemetry borders */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative group p-4 w-full max-w-sm sm:max-w-md">
              {/* Outer Glowing Cyber Borders */}
              <div className="absolute inset-0 bg-gradient-to-tr from-orange-500 to-blue-600 rounded-[32px] opacity-10 group-hover:opacity-20 blur-xl transition-opacity animate-pulse duration-[6000ms]" />
              
              {/* Frame Accents (Corner tech markings) */}
              <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-orange-500 rounded-tl-3xl z-20" />
              <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-orange-500 rounded-tr-3xl z-20" />
              <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-blue-500 rounded-bl-3xl z-20" />
              <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-blue-500 rounded-br-3xl z-20" />

              {/* Main Avatar Container */}
              <div className="relative overflow-hidden bg-white dark:bg-slate-900 rounded-[28px] border-2 border-slate-200/40 dark:border-slate-800/40 shadow-2xl p-3 z-10">
                <img
                  src={avatarImg}
                  alt="Sivasakthivel - Professional Presentation Avatar"
                  className="w-full h-auto aspect-square rounded-[22px] object-cover object-center group-hover:scale-102 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />

                {/* Simulated Floating Telemetry Box (Data Analyst Theme) */}
                <div className="absolute bottom-6 left-6 right-6 p-4 glass-panel-heavy rounded-2xl border border-white/20 dark:border-slate-800/60 shadow-lg text-left">
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-mono text-[9px] text-orange-500 font-bold uppercase tracking-wider">
                      STATISTICS_ENGINE_ACTIVE
                    </span>
                    <div className="flex gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-ping" />
                      <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
                    </div>
                  </div>
                  <div className="font-sans text-xs font-extrabold text-slate-900 dark:text-white">
                    Data Insights: Compiled & Loaded
                  </div>
                  <div className="grid grid-cols-3 gap-2 mt-2 pt-2 border-t border-slate-200/50 dark:border-slate-700/50 text-[10px] font-mono text-slate-500 dark:text-slate-400">
                    <div>
                      <div className="font-bold text-orange-500">CGPA:</div>
                      <div>8.0 / 10</div>
                    </div>
                    <div>
                      <div className="font-bold text-blue-500">Projects:</div>
                      <div>3+ Ready</div>
                    </div>
                    <div>
                      <div className="font-bold text-slate-800 dark:text-slate-100">Grade:</div>
                      <div>A+ Web</div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
