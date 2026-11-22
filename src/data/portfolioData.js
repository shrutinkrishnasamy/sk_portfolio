export const portfolioData = {
  name: "Shrutin K",
  shortName: "Shrutin",
  tagline: "Full-Stack Developer & AI/ML Engineer",
  subTagline: "Pre-final year Information Technology student focused on full-stack development, backend REST APIs, and practical AI/ML solutions.",
  location: "Dindigul & Coimbatore, Tamil Nadu, India",
  email: "it.shrutin@gmail.com",
  phone: "+91 9791926032",
  phoneRaw: "919791926032",
  linkedin: "https://www.linkedin.com/in/shrutinkrishnasamy/",
  github: "https://github.com/shrutinkrishnasamy",
  leetcode: "https://leetcode.com/u/shrutink/",
  resumeLink: "https://drive.google.com/file/d/1W5_ipw8mcpbsHV2YvumsbJk7Hpyy4ntT/view",

  aboutSummary: "Pre-final year Information Technology student focused on full-stack development, backend development, and AI/ML. Experienced in building web applications and REST APIs using Java, Spring Boot, React.js, and Firebase. Worked on projects involving multilingual NLP and AI-based emergency response systems, with a focus on building practical software solutions and continuously improving my development skills.",

  quickStats: [
    { label: "LeetCode", value: "150+ Solved", desc: "Data Structures & Algorithms" },
    { label: "CGPA", value: "7.73 / 10.0", desc: "B.Tech IT (Karpagam College of Eng.)" },
    { label: "Research", value: "Co-Author", desc: "Multilingual NLP Disaster Response" },
    { label: "Certifications", value: "8+ Badges", desc: "Meta, Cisco CCNA, NPTEL" }
  ],

  education: [
    {
      institution: "Karpagam College of Engineering, Coimbatore",
      degree: "B.Tech. in Information Technology",
      period: "Sep 2024 – Present",
      score: "CGPA: 7.73 / 10.0",
      status: "Pre-final Year",
      highlights: [
        "Specializing in Software Architecture, Full-Stack Engineering, and AI/ML.",
        "Active contributor to academic research and departmental tech initiatives."
      ]
    },
    {
      institution: "SRV Innovative Public School (CBSE), Namakkal",
      degree: "Senior Secondary Education (Class XII)",
      period: "Jun 2021 – Mar 2023",
      score: "Percentage: 67.0%",
      highlights: [
        "Focused on Mathematics, Physics, Chemistry, and Biology foundation."
      ]
    },
    {
      institution: "Om Shanthi Higher Secondary School (CBSE), Dindigul",
      degree: "Higher Secondary Education (Class X)",
      period: "Jun 2020 – Mar 2021",
      score: "Percentage: 62.0%",
      highlights: [
        "Strong foundation in logical reasoning and analytical sciences."
      ]
    }
  ],

  skills: {
    programming: [
      { name: "Java", level: "Experienced" },
      { name: "Python", level: "Experienced" },
      { name: "SQL", level: "Intermediate" },
      { name: "C & C++", level: "Intermediate" },
      { name: "R", level: "Intermediate" }
    ],
    frontend: [
      { name: "React.js", level: "Experienced" },
      { name: "Next.js", level: "Intermediate" },
      { name: "HTML5 & CSS3", level: "Experienced" },
      { name: "JavaScript (ES6+)", level: "Experienced" },
      { name: "Bootstrap", level: "Experienced" }
    ],
    backend: [
      { name: "Spring Boot", level: "Experienced" },
      { name: "REST APIs", level: "Experienced" },
      { name: "FastAPI", level: "Intermediate" },
      { name: "Flask", level: "Intermediate" },
      { name: "Servlets", level: "Intermediate" }
    ],
    aiml: [
      { name: "XLM-RoBERTa", level: "Experienced" },
      { name: "NLP & Hugging Face", level: "Experienced" },
      { name: "PyTorch", level: "Intermediate" },
      { name: "LangChain & RAG", level: "Intermediate" },
      { name: "NumPy & Pandas", level: "Experienced" }
    ],
    databases: [
      { name: "MySQL", level: "Experienced" },
      { name: "MongoDB", level: "Intermediate" },
      { name: "Firebase", level: "Intermediate" },
      { name: "Supabase", level: "Intermediate" },
      { name: "Oracle", level: "Intermediate" }
    ],
    toolsAndCloud: [
      { name: "AWS", level: "Intermediate" },
      { name: "Git & GitHub", level: "Experienced" },
      { name: "Postman", level: "Experienced" },
      { name: "VS Code", level: "Experienced" },
      { name: "Google Colab & Jupyter", level: "Experienced" },
      { name: "OOP & DSA", level: "Experienced" },
      { name: "DBMS & OS", level: "Intermediate" },
      { name: "Computer Networks", level: "Intermediate" }
    ]
  },

  projects: [
    {
      id: "alert-government",
      title: "ALERT-GOVERNMENT",
      category: "Full-Stack Enterprise & Emergency Response",
      subtitle: "AI-Powered Government Emergency Alert Management System",
      techStack: ["Java", "Spring Boot", "MySQL", "Bootstrap", "Google Maps API", "REST APIs"],
      points: [
        "Designed a government emergency alert management system with role-based access control and a hierarchical multi-tier alert verification and approval workflow.",
        "Developed a responsive workflow for location-based emergency management, interactive map-based area selection, mobile tower coverage visualization, and multilingual alert generation.",
        "Engineered robust modules for emergency dashboards, alert history tracking, administrative oversight monitoring, and Cell Broadcast request dispatch workflows."
      ],
      github: "https://github.com/shrutinkrishnasamy/ALERT-GOVERNMENT",
      featured: true,
      tag: "Featured Project"
    },
    {
      id: "claf-net",
      title: "CLAF-Net: Cross-Lingual Asymmetric Focal Network",
      category: "AI / ML Research Paper & Disaster Response",
      subtitle: "Zero-Shot Disaster Response Classification Framework",
      techStack: ["Python", "PyTorch", "Hugging Face", "XLM-RoBERTa", "NLP", "Context Fusion"],
      points: [
        "Co-authored a research paper proposing a multilingual, multi-label disaster-message classification framework for English, Haitian Creole, Spanish, and Urdu.",
        "Combined XLM-RoBERTa with Context Fusion augmentation and Asymmetric Focal Loss to overcome translation latency and extreme class imbalance in disaster categories.",
        "Achieved a high Macro F1 score of 0.68 and an ultrafast 45 ms inference latency, outperforming the XLM-R BCE baseline (0.42 Macro F1) and translation-based BERT pipeline (450 ms latency)."
      ],
      github: "https://github.com/shrutinkrishnasamy",
      featured: true,
      tag: "Research Paper"
    }
  ],

  certifications: [
    {
      title: "150+ DSA Problems Solved",
      issuer: "LeetCode",
      date: "Ongoing",
      category: "Problem Solving",
      link: "https://leetcode.com/u/shrutink/",
      desc: "Demonstrated consistent algorithmic mastery across Arrays, Trees, Dynamic Programming, Graphs, and Hash Maps."
    },
    {
      title: "Meta Full Stack Developer: Front-End & Back-End from Scratch Specialization",
      issuer: "Coursera / Meta",
      date: "Jul 2026",
      category: "Full Stack",
      desc: "Comprehensive industry certification covering modern front-end React, back-end engineering, database architecture, and deployment."
    },
    {
      title: "CCNA: Switching, Routing, and Wireless Essentials",
      issuer: "Cisco Networking Academy",
      date: "Sep 2026",
      category: "Networking",
      desc: "VLANs, inter-VLAN routing, STP, EtherChannel, and wireless LAN configurations."
    },
    {
      title: "CCNA: Introduction to Networks",
      issuer: "Cisco Networking Academy",
      date: "Sep 2026",
      category: "Networking",
      desc: "Network architecture, IP addressing (IPv4/IPv6), protocols, and media."
    },
    {
      title: "22+ Front-End & Software Development Courses",
      issuer: "LinkedIn Learning",
      date: "Sep 2026",
      category: "Software Engineering",
      desc: "Extensive coursework covering modern JavaScript, React best practices, clean code, design patterns, and Git."
    },
    {
      title: "NPTEL: Introduction to Internet of Things (IoT)",
      issuer: "NPTEL / IIT",
      date: "Apr 2026",
      category: "IoT",
      desc: "Sensors, actuators, IoT protocols, fog computing, and cloud IoT integration."
    },
    {
      title: "NPTEL: Introduction to Industry 4.0 & IIoT",
      issuer: "NPTEL / IIT",
      date: "Oct 2026",
      category: "Industry 4.0",
      desc: "Cyber-physical systems, smart factories, predictive maintenance, and IIoT architectures."
    },
    {
      title: "NPTEL: Soft Skill Development",
      issuer: "NPTEL / IIT",
      date: "Mar 2025",
      category: "Professional Skills",
      desc: "Interpersonal communication, workplace leadership, team dynamics, and conflict resolution."
    },
    {
      title: "NPTEL: Public Speaking",
      issuer: "NPTEL / IIT",
      date: "Oct 2026",
      category: "Communication",
      desc: "Technical presentation skills, speech formulation, rhetoric, and executive communication."
    }
  ]
};
