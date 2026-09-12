// ==============================================================================
// ADDING A NEW PROJECT:
// Copy one project object below, update the values, and assign a unique 'id' & 'slug'.
// The Projects section, project detail pages, and filters will automatically update.
// No component modifications required!
// ==============================================================================

export const projects = [
  {
    id: 1,
    title: "Jeevan Shanthi Website",
    slug: "jeevan-shanthi",
    shortDescription: "A comprehensive web portal providing elder care, healthcare assistance, and community welfare services.",
    description: "Jeevan Shanthi is a dedicated web platform designed to facilitate senior care, community wellness services, healthcare assistance, and social empowerment for elder populations and families seeking compassionate support services.",
    image: "/projects/jeevan-shanthi.webp",
    category: "Full Stack",
    technologies: ["React", "Node.js", "Express", "Tailwind CSS", "REST API"],
    github: "https://github.com/Srujana-deshpande/Jeevan-Shanthi",
    liveDemo: "https://www.jeevanshanthi.com/",
    featured: true,
    year: "2024",
    status: "Completed",
    problem: "Accessing centralized information and seamless booking for elder care, home health assistance, and senior community programs often remains fragmented and hard to navigate for families.",
    solution: "Developed a modern, accessible, and user-friendly digital web portal showcasing comprehensive senior healthcare services, inquiry request forms, and care program schedules.",
    features: [
      "Accessible & intuitive user interface tailored for senior citizens & families",
      "Service catalog detailing home care, medical assistance & community programs",
      "Online inquiry submission and consultation booking forms",
      "Responsive design optimized across mobile, tablet, and desktop viewports",
      "Fast, secure performance with structured SEO optimization"
    ],
    challenges: [
      "Ensuring high typography legibility, contrast accessibility compliance, and simplified navigation flows for elder users."
    ],
    screenshots: []
  },
  {
    id: 2,
    title: "IBM SkillsBuild AI & Cloud Showcase",
    slug: "ibm-skillsbuild-ai-showcase",
    shortDescription: "An AI & Cloud solution presented live on stage at the IBM SkillsBuild Impact Showcase Event 2025-26 in Bengaluru.",
    description: "An end-to-end AI & Cloud project developed and showcased during the IBM SkillsBuild Academia Guided Learning Experience (GLE) and stage presentation at the IBM SkillsBuild Impact Showcase Event 2025-26 in Bengaluru. Features intelligent cloud architecture, document parsing, and RAG solutioning.",
    image: "/projects/ibm-showcase.webp",
    category: "AI / Cloud",
    technologies: ["IBM SkillsBuild", "IBM Cloud", "AI Models", "Python", "LangChain", "PowerPoint PPTX"],
    github: "",
    liveDemo: "",
    presentationUrl: "/IBM_Project_Presentation.pptx",
    documentUrl: "/certificates/IBM_SkillsBuild_Impact_Showcase_Certificate.pdf",
    featured: true,
    year: "2026",
    status: "Completed",
    problem: "Designing production-ready AI solutions requires seamless integration of cloud pipelines, document retrieval frameworks, and visual presentation architecture.",
    solution: "Built and showcased an AI solution using IBM SkillsBuild platform, presenting full system design slides live on stage at the IBM Showcase Event in Bengaluru.",
    features: [
      "Official IBM SkillsBuild Impact Showcase Event 2025-26 stage presentation project",
      "Comprehensive system design presentation slides (PPTX download included)",
      "IBM Cloud & AI document retrieval pattern architecture",
      "Verified completion certificate & showcase recognition"
    ],
    challenges: [
      "Integrating cloud AI services with interactive presentation workflows under tight hackathon deadlines."
    ],
    screenshots: []
  },
  {
    id: 3,
    title: "Air Quality Monitoring System",
    slug: "air-quality-monitoring",
    shortDescription: "An IoT-integrated monitoring solution measuring atmospheric pollutant levels, humidity, and environmental metrics in real-time.",
    description: "An end-to-end Internet of Things (IoT) monitoring system that gathers data from micro-sensors measuring PM2.5, carbon monoxide, temperature, and relative humidity. The metrics are transmitted wirelessly to a live web dashboard providing health alerts and analytics.",
    image: "/projects/air-quality.webp",
    category: "IoT",
    technologies: ["IoT Sensors", "Embedded C++", "JavaScript", "HTML5/CSS3", "Chart.js"],
    github: "https://github.com/Srujana-deshpande/Air-Quality-Monitoring",
    liveDemo: "",
    documentUrl: "/Air Quality Monitoring.docx",
    featured: true,
    year: "2024",
    status: "Completed",
    problem: "Lack of hyper-local, real-time air quality metrics prevents individuals and facility managers from making timely health or ventilation decisions.",
    solution: "Created an IoT sensor payload linked with a real-time web telemetry dashboard that visualizes AQI shifts, humidity trends, and environmental warnings.",
    features: [
      "Live telemetry streaming with interactive temporal charts",
      "Color-coded Air Quality Index (AQI) threshold indicators",
      "Atmospheric humidity & temperature tracking",
      "Automated warning triggers when gas concentrations cross safety limits",
      "Historical data trends display"
    ],
    challenges: [
      "Calibration of raw sensor outputs into accurate AQI standard values and handling intermittent Wi-Fi connectivity from microcontrollers."
    ],
    screenshots: [
      "/projects/air-quality-1.webp"
    ]
  },
  {
    id: 4,
    title: "AI Object Currency Reader",
    slug: "ai-object-currency-reader",
    shortDescription: "An AI-powered computer vision web application designed to recognize objects and currency notes in real-time.",
    description: "AI-Object-Currency-Reader is an assistive web application using browser-based AI vision technology to identify real-world objects and currency notes, providing feedback to assist visually impaired users in daily navigation and transaction handling.",
    image: "/projects/ai-currency-reader.webp",
    category: "AI / Web",
    technologies: ["JavaScript", "TensorFlow.js", "Computer Vision", "HTML5", "CSS3"],
    github: "https://github.com/Srujana-deshpande/AI-Object-Currency-Reader",
    liveDemo: "",
    featured: true,
    year: "2025",
    status: "Completed",
    problem: "Visually impaired individuals face challenges identifying banknote denominations and recognizing immediate objects in everyday surroundings without assistance.",
    solution: "Engineered an accessible web interface leveraging computer vision and object detection models to classify objects and currency notes directly in-browser with low latency.",
    features: [
      "Real-time object recognition using webcam/camera feed",
      "Currency note classification for daily financial transactions",
      "Audio output / voice feedback prompts for accessibility",
      "Lightweight client-side processing without server delays",
      "Minimalist accessible UI layout with high contrast"
    ],
    challenges: [
      "Optimizing object detection frame rates in client-side JavaScript for low-spec mobile browser environments."
    ],
    screenshots: []
  },
  {
    id: 5,
    title: "Data Science Repository",
    slug: "data-science",
    shortDescription: "A comprehensive data science repository containing exploratory data analysis, data processing pipelines, and machine learning models.",
    description: "A centralized repository for Data Science research, exploratory data analysis (EDA), data cleaning, statistical modeling, and machine learning notebooks using Python and Jupyter environment.",
    image: "/projects/data-science.webp",
    category: "Data Science",
    technologies: ["Jupyter Notebook", "Python", "Pandas", "NumPy", "Matplotlib", "Scikit-Learn"],
    github: "https://github.com/Srujana-deshpande/Data-Science",
    liveDemo: "",
    featured: false,
    year: "2026",
    status: "Active",
    problem: "Analyzing complex datasets requires reproducible data processing pipelines, rigorous statistical validation, and clean visual exploration.",
    solution: "Developed structured Jupyter notebooks with modular data transformations, interactive statistical visualizations, and foundational ML implementations.",
    features: [
      "Exploratory Data Analysis (EDA) on structured datasets",
      "Data preprocessing, missing value imputation, and feature scaling",
      "Statistical plotting with Seaborn and Matplotlib",
      "Supervised & unsupervised machine learning model experiments"
    ],
    challenges: [
      "Handling heterogeneous data distributions and preventing model overfitting through cross-validation."
    ],
    screenshots: []
  },
  {
    id: 6,
    title: "Mini Project",
    slug: "mini-project",
    shortDescription: "A Python-driven software application implementing algorithmic logic, data processing, and modular architecture.",
    description: "A Python application developed to implement structured algorithms, file handling, data management, and clean object-oriented architecture for engineering challenges.",
    image: "/projects/mini-project.webp",
    category: "Python",
    technologies: ["Python", "Algorithms", "Data Structures", "OOP", "File I/O"],
    github: "https://github.com/Srujana-deshpande/Mini-Project",
    liveDemo: "",
    featured: false,
    year: "2025",
    status: "Completed",
    problem: "Building lightweight, reliable Python desktop/CLI utilities demands efficient algorithm choices and modular code design.",
    solution: "Constructed a well-structured Python project emphasizing object-oriented principles, efficient data storage, and clean separation of concerns.",
    features: [
      "Modular Python package architecture with re-usable utilities",
      "Robust input validation and exception handling",
      "Efficient data processing pipelines",
      "Clean command-line or programmatic API interface"
    ],
    challenges: [
      "Designing extensible class structures to easily incorporate new capabilities without breaking existing logic."
    ],
    screenshots: []
  },
  {
    id: 7,
    title: "Spotify Website Clone",
    slug: "spotify-clone",
    shortDescription: "A modern, highly responsive web player clone replicating Spotify's core layout, playback controls, and music discovery visual design.",
    description: "A pixel-perfect frontend replica of the Spotify web player focusing on clean UI architecture, dynamic sidebar navigation, interactive audio player controls, volume manipulation, and responsive track list views.",
    image: "/projects/spotify-clone.webp",
    category: "Frontend",
    technologies: ["JavaScript", "HTML5", "CSS3", "Flexbox/Grid", "Media API"],
    github: "https://github.com/Srujana-deshpande/Spotify-clone",
    liveDemo: "https://spotify-clone-teal-two.vercel.app/",
    featured: false,
    year: "2025",
    status: "Completed",
    problem: "Building a complex modern audio player UI with custom controls and scrollable layouts requires deep mastery of modern CSS & DOM events.",
    solution: "Recreated Spotify's iconic player interface with custom styled audio range bars, dynamic album cards, stateful play/pause hooks, and responsive dark aesthetics.",
    features: [
      "Interactive media controls (Play/Pause, Track Scrubbing, Volume control)",
      "Custom responsive CSS Grid playlists and album grids",
      "Dynamic hover effects with Spotify brand green accents",
      "Mobile navigation drawer and sticky footer player bar"
    ],
    challenges: [
      "Custom styling HTML5 range inputs across different browser engines to mimic standard Spotify scrub bars."
    ],
    screenshots: [
      "/projects/spotify-clone-1.webp"
    ]
  }
];
