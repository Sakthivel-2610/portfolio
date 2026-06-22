import { useState } from "react";
import { FolderGit2, Briefcase, Award, BadgeCheck, Activity, LineChart, Thermometer, Users, Battery, Zap, Clock } from "lucide-react";
import { sensorAnalyticsData } from "../data/portfolioData";

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState<"smart_space" | "doorbell">("smart_space");
  const [hoveredDataPoint, setHoveredDataPoint] = useState<any | null>(null);

  // Key metrics
  const stats = [
    { label: "Projects Completed", value: "3+", desc: "Full Stack & IoT Systems", icon: <FolderGit2 className="w-5 h-5 text-orange-500" /> },
    { label: "Professional Internships", value: "2", desc: "Embedded C & Web Systems", icon: <Briefcase className="w-5 h-5 text-blue-500" /> },
    { label: "Valid Certifications", value: "4", desc: "HDCA, Web, Embedded, PCB", icon: <Award className="w-5 h-5 text-amber-500" /> },
    { label: "Core Technical Skills", value: "10+", desc: "C++, SQL, Python, Excel", icon: <BadgeCheck className="w-5 h-5 text-emerald-500" /> },
  ];

  // Dynamic SVG plotting utilities for high-quality lightweight responsive charts
  const spaceData = sensorAnalyticsData.smartSpaceOccupancy;
  const doorbellData = sensorAnalyticsData.doorbellSensorsLog;

  // Let's compute SVG dimensions
  const chartHeight = 160;
  const paddingY = 20;
  const rangeY = chartHeight - paddingY * 2;

  // Render Smart Space occupancy chart points
  const spaceMaxVal = 50; 
  const spacePoints = spaceData.map((d, i) => {
    const x = 50 + (i * 90);
    // Occupied space mapping (invert for SVG top-left origin)
    const y = chartHeight - paddingY - ((d.allocated_spaces / spaceMaxVal) * rangeY);
    return { x, y, label: d.hour, val: d.allocated_spaces, raw: d };
  });

  const spacePathStr = `M ${spacePoints[0].x} ${spacePoints[0].y} ` + 
    spacePoints.slice(1).map(p => `L ${p.x} ${p.y}`).join(" ") + 
    ` L ${spacePoints[spacePoints.length-1].x} ${chartHeight - paddingY} L ${spacePoints[0].x} ${chartHeight - paddingY} Z`;

  const spaceLinePathStr = `M ${spacePoints[0].x} ${spacePoints[0].y} ` + 
    spacePoints.slice(1).map(p => `L ${p.x} ${p.y}`).join(" ");

  // Render Doorbell visitor counts chart points
  const doorbellMaxVal = 4;
  const doorbellPoints = doorbellData.map((d, i) => {
    const x = 50 + (i * 75);
    const y = chartHeight - paddingY - ((d.visitors / doorbellMaxVal) * rangeY);
    return { x, y, label: d.timestamp, val: d.visitors, raw: d };
  });

  const doorbellPathStr = `M ${doorbellPoints[0].x} ${doorbellPoints[0].y} ` + 
    doorbellPoints.slice(1).map(p => `L ${p.x} ${p.y}`).join(" ") + 
    ` L ${doorbellPoints[doorbellPoints.length-1].x} ${chartHeight - paddingY} L ${doorbellPoints[0].x} ${chartHeight - paddingY} Z`;

  const doorbellLinePathStr = `M ${doorbellPoints[0].x} ${doorbellPoints[0].y} ` + 
    doorbellPoints.slice(1).map(p => `L ${p.x} ${p.y}`).join(" ");

  const activePoints = activeTab === "smart_space" ? spacePoints : doorbellPoints;
  const activePath = activeTab === "smart_space" ? spacePathStr : doorbellPathStr;
  const activeLinePath = activeTab === "smart_space" ? spaceLinePathStr : doorbellLinePathStr;
  const activeColor = activeTab === "smart_space" ? "text-orange-500" : "text-blue-500";
  const activeGradientId = activeTab === "smart_space" ? "orangeGradient" : "blueGradient";

  return (
    <section id="dashboard" className="py-20 bg-slate-50 dark:bg-slate-900/40 relative overflow-hidden">
      
      {/* Background grids */}
      <div className="absolute top-1/2 left-0 right-0 h-40 bg-gradient-to-r from-orange-500/5 via-blue-500/5 to-transparent blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-sans font-extrabold text-3xl sm:text-4xl text-slate-900 dark:text-white tracking-tight">
            Education & Career <span className="text-orange-500">Analytics</span>
          </h2>
          <div className="w-16 h-1 bg-orange-500 mx-auto mt-3 rounded-full" />
          <p className="text-slate-500 dark:text-slate-400 mt-4 max-w-lg mx-auto font-sans text-sm">
            Core career metrics coupled with Sivasakthivel's real IoT telemetry datasets plotted on an interactive reporting canvas.
          </p>
        </div>

        {/* 4 Stat Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="glass-panel p-6 rounded-3xl flex gap-4 hover:translate-y-[-2px] transition duration-200"
            >
              <div className="p-3 bg-slate-100 dark:bg-slate-800 rounded-xl h-fit shrink-0">
                {stat.icon}
              </div>
              <div>
                <h3 className="font-mono text-[10px] text-slate-400 dark:text-slate-500 font-bold uppercase tracking-wider">
                  {stat.label}
                </h3>
                <div className="font-sans font-black text-2xl text-slate-850 dark:text-white mt-0.5">
                  {stat.value}
                </div>
                <p className="font-sans text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                  {stat.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Dashboard Analytics Panel */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch pt-4">
          
          {/* Dashboard Left Side: Explanations and Dataset selectors */}
          <div className="lg:col-span-4 flex flex-col justify-between glass-panel p-8 rounded-3xl border border-slate-200/60 dark:border-slate-800/60">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-blue-500/5 dark:bg-blue-500/10 border border-blue-500/10 text-xs font-mono text-blue-600 dark:text-blue-400">
                <LineChart className="w-3.5 h-3.5" />
                <span>INTERACTIVE_TELEMETRY</span>
              </div>
              
              <h3 className="font-sans font-bold text-xl text-slate-850 dark:text-white leading-tight">
                Sensor Logging Panel
              </h3>

              <p className="font-sans text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                Toggle below to load live structured records from Sivasakthivel's custom-built IoT hardware systems. Hover on chart coordinates to dissect operational peaks:
              </p>
            </div>

            {/* Selector Toggles */}
            <div className="space-y-3 mt-8">
              <button
                onClick={() => { setActiveTab("smart_space"); setHoveredDataPoint(null); }}
                className={`w-full text-left p-4 rounded-2xl border transition-all flex items-center justify-between cursor-pointer ${
                  activeTab === "smart_space"
                    ? "bg-orange-500/10 border-orange-500/25 text-orange-950 dark:text-orange-350"
                    : "bg-white/40 dark:bg-slate-900/20 border-slate-200/50 dark:border-slate-800/50 hover:bg-slate-50 dark:hover:bg-slate-800/20"
                }`}
              >
                <div className="flex items-center gap-3">
                  <Activity className="w-5 h-5 text-orange-500" />
                  <div>
                    <span className="font-sans font-extrabold text-xs block">Smart Space Occupancy</span>
                    <span className="font-mono text-[9px] text-slate-400">Ultrasonic Grid Sensors Log</span>
                  </div>
                </div>
                <div className="font-mono text-[9px] px-2 py-0.5 rounded bg-orange-500/10 text-orange-600 font-bold uppercase">
                  ACTIVE
                </div>
              </button>

              <button
                onClick={() => { setActiveTab("doorbell"); setHoveredDataPoint(null); }}
                className={`w-full text-left p-4 rounded-2xl border transition-all flex items-center justify-between cursor-pointer ${
                  activeTab === "doorbell"
                    ? "bg-blue-500/10 border-blue-500/25 text-blue-950 dark:text-blue-350"
                    : "bg-white/40 dark:bg-slate-900/20 border-slate-200/50 dark:border-slate-800/50 hover:bg-slate-50 dark:hover:bg-slate-800/20"
                }`}
              >
                <div className="flex items-center gap-3">
                  <Zap className="w-5 h-5 text-blue-500" />
                  <div>
                    <span className="font-sans font-extrabold text-xs block">Visitor Alerts</span>
                    <span className="font-mono text-[9px] text-slate-400">IoT Door Bell Notification Signals</span>
                  </div>
                </div>
                <div className="font-mono text-[9px] px-2 py-0.5 rounded bg-blue-500/10 text-blue-600 font-bold uppercase">
                  LOADED
                </div>
              </button>
            </div>
          </div>

          {/* Dashboard Right Side: Real Rendered SVG Graph */}
          <div className="lg:col-span-8 glass-panel p-8 rounded-3xl border border-slate-200/60 dark:border-slate-800/60 flex flex-col justify-between overflow-x-auto">
            
            {/* Graph Header */}
            <div className="flex flex-wrap items-center justify-between gap-4 mb-4 pb-4 border-b border-slate-105 dark:border-slate-800/60">
              <div>
                <h4 className="font-sans font-bold text-slate-800 dark:text-slate-100 text-sm">
                  {activeTab === "smart_space"
                    ? "Ultrasonic Smart Allocation (Space Usage Trend)"
                    : "Smart Door Bell (Hourly Alerts Pattern)"}
                </h4>
                <p className="font-mono text-[10px] text-slate-400 dark:text-slate-500 mt-0.5">
                  X: Time Increment Index | Y: Registered Data Value
                </p>
              </div>

              {/* Dynamic Legend / State display */}
              <div className="flex gap-4 text-xs font-mono">
                <div className="flex items-center gap-1.5">
                  <div className="w-2.5 h-2.5 rounded bg-orange-500" />
                  <span className="text-slate-550">Occupancy</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <div className="w-2.5 h-2.5 rounded bg-blue-600" />
                  <span className="text-slate-550">Voltage / Alerts</span>
                </div>
              </div>
            </div>

            {/* Custom SVG Coordinate Canvas (Aesthetic React SVG plotting) */}
            <div className="relative w-full h-[180px] bg-slate-100/50 dark:bg-slate-950/40 rounded-2xl border border-slate-200/20 dark:border-slate-800/30 p-2 flex items-center justify-center">
              
              <svg viewBox="0 0 550 160" className="w-full h-full overflow-visible select-none">
                <defs>
                  {/* Glowing orange area gradient */}
                  <linearGradient id="orangeGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#F97316" stopOpacity="0.45" />
                    <stop offset="100%" stopColor="#F97316" stopOpacity="0" />
                  </linearGradient>
                  
                  {/* Glowing blue area gradient */}
                  <linearGradient id="blueGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#2563EB" stopOpacity="0.45" />
                    <stop offset="100%" stopColor="#2563EB" stopOpacity="0" />
                  </linearGradient>
                </defs>

                {/* Horizontal reference markers */}
                <line x1="30" y1="20" x2="530" y2="20" stroke="currentColor" className="text-slate-200 dark:text-slate-800/50" strokeDasharray="3,3" />
                <line x1="30" y1="80" x2="530" y2="80" stroke="currentColor" className="text-slate-200 dark:text-slate-800/50" strokeDasharray="3,3" />
                <line x1="30" y1="140" x2="530" y2="140" stroke="currentColor" className="text-slate-200 dark:text-slate-800/50" strokeDasharray="3,3" />

                {/* Main Filled Area Path */}
                <path d={activePath} fill={`url(#${activeGradientId})`} className="transition-all duration-500" />

                {/* Top Border Line */}
                <path d={activeLinePath} fill="none" stroke="currentColor" className={`${activeColor} transition-all duration-500`} strokeWidth="3" />

                {/* Grid Dot Coordinates */}
                {activePoints.map((pt, i) => (
                  <g key={i}>
                    <circle
                      cx={pt.x}
                      cy={pt.y}
                      r={hoveredDataPoint?.x === pt.x ? 7 : 4}
                      fill="currentColor"
                      className={`${activeColor} cursor-pointer hover:scale-125 transition-all`}
                      onMouseEnter={() => setHoveredDataPoint(pt)}
                    />
                    {/* Tick labels */}
                    <text x={pt.x} y="155" fontSize="8" textAnchor="middle" className="fill-slate-400 dark:fill-slate-500 font-mono">
                      {pt.label}
                    </text>
                  </g>
                ))}
              </svg>

              {/* Float popover details triggered on hover */}
              {hoveredDataPoint && (
                <div
                  className="absolute p-3 rounded-xl border glass-panel-heavy shadow-xl text-left z-20 pointer-events-none"
                  style={{
                    left: `${Math.min(hoveredDataPoint.x / 5.5 + 4, 75)}%`,
                    top: `${Math.min(hoveredDataPoint.y / 1.6 - 15, 60)}%`
                  }}
                >
                  <p className="font-mono text-[9px] text-slate-400 uppercase">TELEMETRY_INDEX_TIME: {hoveredDataPoint.label}</p>
                  
                  {activeTab === "smart_space" ? (
                    <div>
                      <div className="font-sans text-xs font-extrabold text-orange-600 mt-0.5">
                        Spaces Allocated: {hoveredDataPoint.val}
                      </div>
                      <div className="flex gap-2 text-[10px] text-slate-500 mt-1 font-mono">
                        <span>💡 Avail: {hoveredDataPoint.raw.available}</span>
                        <span>🌡️ Temp: {hoveredDataPoint.raw.avg_temperature}°C</span>
                      </div>
                    </div>
                  ) : (
                    <div>
                      <div className="font-sans text-xs font-extrabold text-blue-600 mt-0.5">
                        Visitor count: {hoveredDataPoint.val} alerts
                      </div>
                      <div className="flex gap-2 text-[10px] text-slate-500 mt-1 font-mono">
                        <span>🔋 Cell: {hoveredDataPoint.raw.battery_v} V</span>
                        <span>📏 Ext: {hoveredDataPoint.raw.distance_cm} cm</span>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Under-dashboard Telemetry Metadata metrics */}
            <div className="grid grid-cols-3 gap-4 pt-4 mt-4 border-t border-slate-100 dark:border-slate-800/65 text-center">
              <div>
                <div className="text-xs text-slate-400 dark:text-slate-500 flex items-center justify-center gap-1">
                  <Users className="w-3.5 h-3.5 text-orange-500" />
                  <span>Avg Output</span>
                </div>
                <div className="font-sans font-extrabold text-base text-slate-800 dark:text-white mt-1">
                  {activeTab === "smart_space" ? "27 spaces" : "1.1 alerts / hr"}
                </div>
              </div>
              
              <div>
                <div className="text-xs text-slate-400 dark:text-slate-500 flex items-center justify-center gap-1">
                  <Thermometer className="w-3.5 h-3.5 text-blue-500" />
                  <span>Max Extent</span>
                </div>
                <div className="font-sans font-extrabold text-base text-slate-800 dark:text-white mt-1">
                  {activeTab === "smart_space" ? "42 occupied" : "3.0 visitors"}
                </div>
              </div>

              <div>
                <div className="text-xs text-slate-400 dark:text-slate-500 flex items-center justify-center gap-1">
                  <Clock className="w-3.5 h-3.5 text-amber-500" />
                  <span>System State</span>
                </div>
                <div className="font-sans font-extrabold text-xs text-emerald-500 mt-2 font-mono uppercase">
                  98.9% Uptime
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
