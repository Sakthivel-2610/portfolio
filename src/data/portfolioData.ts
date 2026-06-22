export interface Skill {
  name: string;
  level: number; // percentage
  color: string;
}

export interface SkillCategory {
  category: string;
  icon: string;
  skills: Skill[];
}

export interface EducationItem {
  institution: string;
  degree: string;
  period: string;
  score: string;
  description?: string;
}

export interface InternshipItem {
  company: string;
  role: string;
  period: string;
  description: string[];
  grade?: string;
  techs: string[];
}

export interface ProjectItem {
  title: string;
  description: string;
  details: string[];
  technologies: string[];
  category: "IoT" | "Data Analytics" | "Web Dev";
  liveUrl?: string;
  githubUrl?: string;
}

export interface CertificationItem {
  name: string;
  issuer: string;
  year: string;
  badgeColor: string;
}

export interface AchievementItem {
  title: string;
  description: string;
  highlight?: string;
}

export const portfolioData = {
  personalInfo: {
    name: "Sivasakthivel",
    title: "Aspiring Data Analyst",
    tagline: "Transforming Data into Insights | ECE Undergraduate | Web Developer | IoT Enthusiast",
    aboutIntro: "Motivated ECE undergraduate with strong foundations in Data Analysis, Web Development, Embedded Systems, IoT, and Programming. Passionate about transforming complex datasets into meaningful, actionable insights and developing innovative hardware-software technology solutions.",
    location: "Tamil Nadu, India",
    degree: "BE Electronics and Communication Engineering",
    cgpa: "8.0",
    email: "gvss2610@gmail.com",
    phone: "+91 7339582092",
    linkedin: "https://www.linkedin.com/in/sivasakthivel-v-3824b7341",
    githubPlaceholder: "https://github.com/Sivasakthivel-v"
  },
  
  skillCategories: [
    {
      category: "Programming",
      icon: "Terminal",
      skills: [
        { name: "Python", level: 85, color: "from-blue-500 to-amber-500" },
        { name: "C++", level: 80, color: "from-blue-600 to-indigo-600" },
        { name: "C", level: 78, color: "from-slate-500 to-slate-700" },
        { name: "JavaScript", level: 82, color: "from-yellow-400 to-orange-500" }
      ]
    },
    {
      category: "Web Development",
      icon: "Globe",
      skills: [
        { name: "HTML & CSS", level: 90, color: "from-orange-500 to-red-500" },
        { name: "JavaScript", level: 82, color: "from-yellow-400 to-amber-500" },
        { name: "Tailwind CSS", level: 88, color: "from-sky-400 to-blue-500" }
      ]
    },
    {
      category: "Database & Analysis",
      icon: "Database",
      skills: [
        { name: "MySQL", level: 80, color: "from-blue-500 to-cyan-500" },
        { name: "Power BI", level: 85, color: "from-yellow-500 to-orange-500" },
        { name: "Excel Analytics", level: 88, color: "from-green-600 to-emerald-700" }
      ]
    },
    {
      category: "Tools & Platfoms",
      icon: "Cpu",
      skills: [
        { name: "Git & GitHub", level: 84, color: "from-slate-700 to-slate-900" },
        { name: "VS Code", level: 90, color: "from-blue-500 to-indigo-500" }
      ]
    },
    {
      category: "Embedded & IoT",
      icon: "Zap",
      skills: [
        { name: "Embedded C", level: 78, color: "from-red-500 to-rose-600" },
        { name: "IoT Fundamentals", level: 85, color: "from-orange-500 to-amber-500" }
      ]
    }
  ] as SkillCategory[],

  education: [
    {
      institution: "Dhanalakshmi Srinivasan Engineering College",
      degree: "B.E. Electronics and Communication Engineering",
      period: "2023 - 2027",
      score: "CGPA: 8.0",
      description: "Focused coursework in Signal Processing, Microcontrollers, Communication Networks, Embedded Systems, and Internet of Things (IoT). Active participant in tech-symposis."
    },
    {
      institution: "Little Flower Higher Secondary School",
      degree: "Higher Secondary Course (HSC)",
      period: "2022 - 2023",
      score: "Percentage: 71%",
      description: "Focus on Mathematics, Physics, Chemistry, and Computer Science."
    }
  ] as EducationItem[],

  internships: [
    {
      company: "CODE BIND TECHNOLOGY",
      role: "Embedded System Intern",
      period: "June 2024",
      description: [
        "Developed embedded projects using microcontrollers and IoT architectures.",
        "Performed sensor interfacing, analog-to-digital hardware readings, and integration with ESP boards.",
        "Programmed automation behaviors in Embedded C environment to trigger actions on temperature/motion alarms."
      ],
      techs: ["Embedded C", "Microcontrollers", "IoT", "Sensors Interfacing"]
    },
    {
      company: "GLOWLOGICS SOLUTION",
      role: "Web Development Intern",
      period: "August 2024",
      description: [
        "Designed and completed structured web developments.",
        "Implemented clean layouts using HTML, CSS, JavaScript alongside interactive forms and animations.",
        "Awarded Advanced Certification in Web Development with exceptional Grade A+."
      ],
      grade: "Grade A+",
      techs: ["HTML5", "CSS3", "JavaScript", "Responsive Design"]
    }
  ] as InternshipItem[],

  projects: [
    {
      title: "Smart Door Bell System Using IoT Supported Sensors",
      description: "Developed IoT-based visitor detection and notification system, implemented sensor interfacing and microcontroller automation, enhancing security monitoring.",
      details: [
        "Constructed custom event triggers linking ultrasonic and motion detectors.",
        "Successfully integrated real-time webhook triggers to notify users of incoming visitors.",
        "Developed low-power state cycles for autonomous remote hardware deployments."
      ],
      technologies: ["IoT", "Sensors Interfacing", "ESP8266/ESP32", "Microcontroller Automation"],
      category: "IoT"
    },
    {
      title: "Smart Space Allocation Using IoT Supported Sensors",
      description: "Developed an intelligent space allocation and monitoring system, integrating multi-sensor arrays and responsive analytics to optimize automated space management.",
      details: [
        "Programmed ultrasonic and optical sensors for precision structural space occupancy analysis.",
        "Configured wireless telemetry updates connecting local nodes to feedback dashboards.",
        "Designed an agile algorithm reducing resource scheduling delay times substantially."
      ],
      technologies: ["IoT", "Sensors", "Embedded Systems", "Wireless Telemetry"],
      category: "IoT"
    },
    {
      title: "Employee Management System",
      description: "Developed web application focusing on full employee records automation, featuring data queries, record addition, update configurations, and database query executions.",
      details: [
        "Engineered interface using modular responsive Web assets.",
        "Integrated structural MySQL workflows ensuring durable transactions.",
        "Coded active filtering mechanics allowing swift search sorting by division or rank."
      ],
      technologies: ["HTML5", "CSS3", "JavaScript", "MySQL", "Record Automation"],
      category: "Web Dev"
    }
  ] as ProjectItem[],

  certifications: [
    { name: "HDCA (Honours Diploma in Computer Applications)", issuer: "Computer Education Authority", year: "2023", badgeColor: "bg-orange-500/10 text-orange-600 border-orange-500/20" },
    { name: "Advanced Web Development (Grade A+)", issuer: "Glowlogics Solution", year: "2024", badgeColor: "bg-blue-500/10 text-blue-600 border-blue-500/20" },
    { name: "PCB Board Designing", issuer: "Technical Education Center", year: "2024", badgeColor: "bg-emerald-500/10 text-emerald-600 border-emerald-500/20" },
    { name: "Embedded Systems & Robotics", issuer: "Automation Labs", year: "2024", badgeColor: "bg-amber-500/10 text-amber-600 border-amber-500/20" }
  ] as CertificationItem[],

  achievements: [
    {
      title: "Multiple IoT Projects",
      description: "Successfully designed, built, and programmed multi-sensor smart hardware systems linking local hardware and cloud systems.",
      highlight: "IoT Innovation"
    },
    {
      title: "Advanced Certification (Grade A+)",
      description: "Acquired deep technical mastery in responsive client architectures, validated during GlowingLogics internship.",
      highlight: "Web Development"
    },
    {
      title: "Embedded Systems and Web Internships",
      description: "Gained invaluable field experience applying hardware design, analytical logging, and user interface architectures in industry settings.",
      highlight: "Practical Experience"
    }
  ] as AchievementItem[]
};

// Mock data-points for interactive Analytics simulator dashboard
// Allows visitors to "play" with data filters and see real ECE sensor data charts!
export const sensorAnalyticsData = {
  doorbellSensorsLog: [
    { timestamp: "08:00", distance_cm: 120, visitors: 0, battery_v: 3.9 },
    { timestamp: "10:00", distance_cm: 45, visitors: 1, battery_v: 3.88 },
    { timestamp: "12:00", distance_cm: 140, visitors: 0, battery_v: 3.85 },
    { timestamp: "14:00", distance_cm: 32, visitors: 2, battery_v: 3.82 },
    { timestamp: "16:00", distance_cm: 120, visitors: 0, battery_v: 3.8 },
    { timestamp: "18:00", distance_cm: 28, visitors: 3, battery_v: 3.75 },
    { timestamp: "20:00", distance_cm: 95, visitors: 1, battery_v: 3.73 },
  ],
  smartSpaceOccupancy: [
    { hour: "09:00", allocated_spaces: 15, available: 35, avg_temperature: 24.2 },
    { hour: "11:00", allocated_spaces: 29, available: 21, avg_temperature: 24.8 },
    { hour: "13:00", allocated_spaces: 42, available: 8, avg_temperature: 25.5 },
    { hour: "15:00", allocated_spaces: 38, available: 12, avg_temperature: 25.1 },
    { hour: "17:00", allocated_spaces: 26, available: 24, avg_temperature: 24.6 },
    { hour: "19:00", allocated_spaces: 12, available: 38, avg_temperature: 23.9 }
  ]
};
