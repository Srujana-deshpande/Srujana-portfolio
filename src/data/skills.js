// ==============================================================================
// ADDING A NEW SKILL OR SKILL CATEGORY:
// To add a new skill to an existing category, append `{ name: "SkillName", icon: "IconName" }` to `skills`.
// To add a new category, add a new object to `skillCategories`.
// ==============================================================================

export const skillCategories = [
  {
    category: "Frontend",
    description: "Building responsive, modern, dynamic web user interfaces",
    skills: [
      { name: "HTML5", icon: "Code" },
      { name: "CSS3", icon: "Palette" },
      { name: "JavaScript (ES6+)", icon: "FileCode" },
      { name: "React.js", icon: "Atom" },
      { name: "Next.js", icon: "Layers" },
      { name: "Tailwind CSS", icon: "Wind" }
    ]
  },
  {
    category: "Backend & .NET",
    description: "Creating secure, scalable server architecture, .NET modules & APIs",
    skills: [
      { name: "C#", icon: "FileCode2" },
      { name: ".NET / .NET Core", icon: "Cpu" },
      { name: "ASP.NET Core", icon: "Server" },
      { name: "Node.js", icon: "Server" },
      { name: "Express.js", icon: "Workflow" },
      { name: "REST APIs", icon: "Globe" }
    ]
  },
  {
    category: "Database",
    description: "Structuring and querying relational & non-relational data",
    skills: [
      { name: "SQL Server", icon: "Database" },
      { name: "MongoDB", icon: "HardDrive" },
      { name: "MySQL", icon: "Table" },
      { name: "PostgreSQL", icon: "Database" }
    ]
  },
  {
    category: "Tools & DevOps",
    description: "Version control, workflow tools, & cloud hosting",
    skills: [
      { name: "Git", icon: "GitBranch" },
      { name: "GitHub", icon: "Github" },
      { name: "VS Code / Visual Studio", icon: "Terminal" },
      { name: "Postman", icon: "Send" },
      { name: "Vercel", icon: "Cloud" }
    ]
  },
  {
    category: "UI/UX",
    description: "User research, wireframing, & interactive prototyping",
    skills: [
      { name: "Figma", icon: "Figma" },
      { name: "Responsive Design", icon: "Smartphone" },
      { name: "Wireframing", icon: "LayoutGrid" },
      { name: "User Journey", icon: "Compass" }
    ]
  },
  {
    category: "Digital Marketing",
    description: "Driving brand awareness, search visibility, & growth analytics",
    skills: [
      { name: "SEO Optimization", icon: "TrendingUp" },
      { name: "Content Strategy", icon: "PenTool" },
      { name: "Social Media Growth", icon: "Share2" },
      { name: "Brand Positioning", icon: "Target" }
    ]
  }
];
