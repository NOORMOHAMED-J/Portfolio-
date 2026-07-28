// ============================================================
// portfolioData.js — Centralized configuration for Md Yusuf's Portfolio
// All external links, personal info, and content in one place.
// Update this file to change any content across the entire site.
// ============================================================

export const personalInfo = {
  name: "Noor Mohamed",
  firstName: "Noor Mohamed",
  brandName: "Noor Mohamed",
  title: "Performance Marketing Executive",
  location: "Thanjavur, Tamil Nadu, India",
  phone: "+91 70945 95720 ",
  emails: {
    primary: "jalal15368@gmail.com",
    secondary: "thaheermohamed325@gmail.com",
  },
  summary:
    "Data Science graduate with a strong analytical, detail-oriented mindset and hand on experience in data entry, database management,and reporting,certified in AI powered data analystics,Python,and NoSQL databases. Seeking to bring data driven decision-making and dedication on a Performance Marleting Executive role at Biznet Consulting,supporting paid campaigns across LinkedIn,X,Snapchat,Google,and MetaAds.",
  resumeUrl: "/Md_Yusuf_Resume_2026.pdf",
};

export const socialLinks = {
  github: "https://github.com/mdyusuf0",
  linkedin: "https://linkedin.com/in/mdyusuf0",
  instagram: "https://instagram.com/heyyusuffff",
};

export const heroContent = {
  greeting: "Hi, I'm Noor Mohamed",
  titleHighlight: "Performance Marketing Executive",
  subtitle:
    "I build fast, scalable applications using Java, Spring Boot, MERN Stack, and Python.",
  ctaPrimary: { text: "View My Work", href: "#projects" },
  ctaSecondary: {
    text: "Contact Me",
    href: "mailto:jalal15368@gmail.com?subject=Hiring Inquiry – Portfolio&body=Hello Noor Mohamed,%0D%0A%0D%0AI came across your portfolio and would like to discuss an opportunity with you.%0D%0A%0D%0ALooking forward to hearing from you.%0D%0ABest Regards,",
  },
  ctaResume: { text: "Download Resume", href: "/Md_Yusuf_Resume_2026.pdf" },
};

export const aboutContent = {
  heading: "Hello!",
  bio: `Hi, my name is <span class="text-black text-xl font-black mx-1 tracking-wide uppercase">Noor Mohamed</span>, An aspiring software developer based in Thanjavur, India, dedicated to building clean, data-driven, and reliable applications using Python and database technologies.`,
  techStack: ["Java", "Spring Boot", "MERN Stack"],
};

export const skillsContent = {
  badge: "My Process",
  heading: "Here's how I turn ideas into real-world applications",
  description:
    "I follow a structured, analytical, and detail-oriented approach to turn raw data into accurate, actionable insights.",
  cards: [
    {
      number: "01",
      title: "Understand",
      text: "I start by understanding the business problem, data sources, and reporting requirements to lay a solid foundation for analysis.",
    },
    {
      number: "02",
      title: "Clean & Organize",
      text: "Structuring and cleaning raw data using databases and tools like Excel and Python, ensuring accuracy and consistency before analysis.",
    },
    {
      number: "03",
      title: "Analyze",
      text: "Applying analytical techniques and AI-powered tools to uncover patterns, trends, and actionable insights from the data.",
    },
    {
      number: "04",
      title: "Report & Deliver",
      text: "Building clear, accurate reports and dashboards, verifying every detail, and delivering insights that support confident decision-making.",
    },
  ],
  endText: "Ready to ship!",
};

// Brand New Technical Skills Data
export const technicalSkills = {
  categories: [
    {
      title: "Programming Languages",
      skills: [
        { name: "Python", level: 90 },
        { name: "SQL", level: 85 },
        { name: "C", level: 75 }
      ]
    },
    {
      title: "Databases",
      skills: [
        { name: "MongoDB/NoSQL", level: 80 },
        { name: "MySQL", level: 75 },
        { name: "DBMS", level: 82 },
      ]
    },
    {
      title: "Data & Reporting Tools",
      skills: [
        { name: "MS Excel", level: 90 },
        { name: "MS PowerPoint", level: 85 },
        { name: "MS Word", level: 88 }
        { name: "Data Entry & Verification", level: 92}
      ]
    },
    {
      title: "Analytics & AI Tools",
      skills: [
        { name: "AI-Powered Data Analytics", level: 78 },
        { name: "Data Visulization", level: 70 },
        { name: "Google Analytics (GA4)", level: 60}
      ]
    },
    {
      title: "Marketing Platforms (Familiar)",
      skills: [
        { name: "LinkedIn Ads / Campaign Manager", level: 55 },
        { name: "Google Ads", level: 55 },
        { name: "Meta Business Suite", level: 55 },
        { name: "Snapchat / X Ads Manager", level: 55 },
      ]
    },
    {
      title: "Core Concepts",
      skills: [
        { name: "Data Analysis", level: 85 },
        { name: "DBMS", level: 82 },
        { name: "Problem Solving", level: 88 }
      ]
    }
  ]
};

// Brand New Internships Data
export const internshipsList = [
  {
    organization: "Computer Age Management Service (CAMS), CHENNAI",
    role: "Data Entry & Administrative Executive",
    duration: "May 2026 - Present",
    skills: ["Data Entry", "Data Verification", "Discrepancy Resolution", "Reporting"],
    tech: ["MS Excel", "MySQL", "Excel", "BI Tools"]
  },
];

// Brand New Soft Skills Data
export const softSkillsList = [
  { name: "Leadership", icon: "👑", desc: "Guiding teams, managing tasks, and driving project completion with shared vision." },
  { name: "Public Speaking", icon: "🎤", desc: "Confident stage presence, anchoring summits, and delivering articulate technical ideas." },
  { name: "Team Collaboration", icon: "🤝", desc: "Collaborating across fields, building racing carts, and engineering code in sync." },
  { name: "Communication", icon: "💬", desc: "Clear, concise, and structured interactions in both business and technical contexts." },
  { name: "Problem Solving", icon: "🧩", desc: "Breaking down complex engineering tasks into clean, logical, and modular pieces." },
  { name: "Adaptability", icon: "🌟", desc: "Quick to pick up new frameworks like FastAPI, Spring Boot, or automation tools like n8n." },
  { name: "Creativity", icon: "🎨", desc: "Blending cinematic aesthetics with software structure to build premium experiences." },
  { name: "Time Management", icon: "⏰", desc: "Balancing B.Tech studies, event hosting, and developing robust software platforms." }
];

export const projects = [
  {
    id: "watermarking-security",
    number: "01",
    badge: "🔒 Flagship Project",
    title: "Spread Spectrum Watermarking Security",
    description:
      "Developed a digital watermarking system using spread spectrum techniques to enhance data security and protect multimedia content from unauthorized access and copyright infringement. Implemented watermark embedding and extraction processes to ensure secure and reliable information protection.",
    techTags: [
      "Python",
      "Signal Processing",
      "Data Security",
      "Watermarking",
    ],
    links: {
      github: "https://github.com/ersamirsingh/UrbanPiper",
      demo: null,
    },
    isFlagship: true,
  },
  {
    id: "smart-city-assistant",
    number: "02",
    badge: null,
    title: "Sustainable Smart City Assistant using IBM Granite LLM",
    description:
      "Built an AI-based assistant using IBM Granite LLM to provide real-time city insights on energy, traffic, and environment. Implemented NLP features for user queries and delivered data-driven recommendations to improve sustainability and resource management.",
    techTags: ["IBM Granite LLM",
               "NLP",
               "Python", 
               "AI / ML", 
               "Data Analysis"
        ],
    links: {
      github: "https://github.com/mdyusuf0/Karigar",
    },
    isFlagship: false,
  },
];

export const certificates = {
  featured: [
    {
      name: "GenAI-Powered Data Analytics Job Simulation",
      issuer: "Forage",
      icon: "🤖",
    },
    {
      name: "MongoDB Basics for Students",
      issuer: "MongoDB",
      icon: "🍃",
    },
    {
      name: "Python for Programmers",
      issuer: "IBM",
      icon: "🐍",
    },
    {
      name: "Google Ads Display Certification",
      issuer: "Google",
      icon: "📢",
    },
    {
      name: "Career Edge – IT Primer",
      issuer: "TCS iON",
      icon: "🎓",
    },
    {
      name: "Fundamentals of BI & Analytics",
      issuer: "Lumenore",
      icon: "📊",
    },
  ],
  viewAllUrl:
    "https://drive.google.com/drive/folders/1yjPYxE62-x6UP2IOBTbd6tnN8nVg16fM?usp=drive_link",
};

export const education = {
  degree: "B.Sc., Data Science",
  institution: "Annai College of Arts & Science",
  cgpa: "7.25",
  graduation: "2026",
};

export const footerContent = {
  taglines: [
    "Performance Marketing Executive",
    "Python · SQL · MongoDB",
    "Performance Marketing Executive",
  ],
  credential: "B.Sc., Data Science · CGPA 7.25",
  copyright: `© ${new Date().getFullYear()} Noor Mohamed | Built with React`,
};

// EmailJS Configuration
// Will read directly from environment variables in Vite (starting with VITE_)
export const emailjsConfig = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID || "YOUR_EMAILJS_SERVICE_ID",
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "YOUR_EMAILJS_TEMPLATE_ID",
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "YOUR_EMAILJS_PUBLIC_KEY",
};
