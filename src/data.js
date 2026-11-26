export const profile = {
  name: "Shubham Kumar Singh",
  role: "Software Development Engineer",
  location: "Surat / Ahmedabad, Gujarat, India",
  avatar: "https://github.com/SinghShubhamkumarkrishnadev.png",
  email: "singhshubhamk287@gmail.com",
  github: "https://github.com/SinghShubhamkumarkrishnadev",
  linkedin: "https://www.linkedin.com/in/singh-shubhamkumar-krishnadev-b581952a9/",
  x: "https://x.com/SinghShubh66309",
  medium: "https://medium.com/@singhshubhamk287",
  substack: "https://substack.com/@shubham7041",
  taglines: [
    "Software Development Engineer | 4+ Years",
    "FastAPI + Next.js + AWS",
    "I build AI-powered document pipelines",
    "Scalable APIs | Cloud | Clean Architecture",
  ],
};

export const stats = [
  { value: 4, suffix: "+", label: "Years of experience" },
  { value: 75, suffix: "%", label: "Faster review turnaround" },
  { value: 3, suffix: "x", label: "Faster dependency resolution" },
  { value: 8.64, suffix: "", label: "CGPA, B.E. CSE (GTU)", decimals: 2 },
];

export const facts = [
  ["Current Role", "SDE @ Lanet Software Solutions, Surat (Jan 2026 - Present)"],
  ["Experience", "Freelance (2022) > Intern (2024) > Full-Time SDE (2026)"],
  ["Education", "B.E. Computer Science & Engineering, GTU (2022 - June 2026)"],
  ["Focus", "Microservices, AI execution pipelines, high-concurrency APIs"],
  ["Also", "Microsoft Entra ID (RBAC), anti-bot-resilient scraping, Turborepo"],
  ["Hackathon", "Smart India Hackathon 2024, Team CodeSweepers"],
];

export const experience = [
  {
    title: "Software Development Engineer",
    org: "Lanet Software Solutions, Surat",
    period: "Jan 2026 - Present",
    type: "Full-time",
    points: [
      "Own design and delivery of the AI-Based Document Reviewer System: backend services, frontend and cloud deployment.",
      "Build scalable FastAPI microservices and Next.js interfaces inside a Turborepo monorepo.",
      "Deploy and operate containerized workloads on AWS (ECS, S3, Secrets Manager) with enterprise RBAC via Microsoft Entra ID.",
    ],
  },
  {
    title: "Full-Stack & AI Integration Developer Intern",
    org: "Lanet Team",
    period: "Jun 2024 - Dec 2025",
    type: "Internship",
    points: [
      "Engineered the modular 7-step AI execution pipeline that became the core of the Document Reviewer product.",
      "Cut manual review turnaround by 75% and sped up Python dependency resolution 3x by adopting uv.",
    ],
  },
  {
    title: "Freelance Full-Stack Developer",
    org: "Independent",
    period: "2022 - 2024",
    type: "Freelance",
    points: [
      "Delivered custom web applications, APIs and data-scraping solutions for independent clients.",
      "Handled the full lifecycle: requirements, architecture, development, deployment and maintenance.",
    ],
  },
];

export const skills = {
  Languages: ["Python", "TypeScript", "JavaScript", "SQL", "Java", "Kotlin"],
  Backend: ["FastAPI", "SQLAlchemy", "Spring Boot", "Node.js", "Express.js", "LangGraph"],
  Frontend: ["React", "Next.js", "Tailwind CSS", "Radix UI", "Framer Motion"],
  Data: ["PostgreSQL", "MongoDB", "Redis", "MySQL", "pgvector", "Pinecone"],
  "Cloud & DevOps": ["AWS (ECS, S3, Secrets Manager)", "Docker", "Kubernetes", "GitHub Actions", "Turborepo", "uv", "Vercel", "Render"],
  Concepts: ["Microservices", "Monorepo Architecture", "RBAC / IAM", "System Design", "DSA", "Hexagonal Architecture"],
};

export const pipeline = [
  { name: "Splitting", desc: "Breaks large source documents into logical sections." },
  { name: "Chunking", desc: "Produces token-bounded chunks that preserve context." },
  { name: "First Analyzer", desc: "Fast first pass to classify content and flag areas of interest." },
  { name: "Deep Reviewer", desc: "Detailed LLM review of each section against reference documents." },
  { name: "Critical Issue Checker", desc: "Re-verifies findings and isolates high-severity issues." },
  { name: "Summarizer", desc: "Condenses findings into a coherent, prioritised summary." },
  { name: "Report Generation", desc: "Assembles the final structured review report." },
];

export const projects = [
  {
    title: "AI-Based Document Reviewer System",
    period: "Jun 2024 - Present",
    category: "AI",
    featured: true,
    desc: "Modular 7-step AI pipeline that splits, analyzes, reviews and summarizes long documents, with role-based access through Microsoft Entra ID. Cut review turnaround by 75%.",
    tags: ["Next.js", "FastAPI", "Turborepo", "uv", "PostgreSQL", "AWS ECS", "S3", "Secrets Manager"],
  },
  {
    title: "AI Workflow Builder",
    category: "AI",
    desc: "Visual workflow builder for composing prompt, tool and conditional execution chains with live execution logs and an agent-based Python execution engine.",
    tags: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Radix UI", "FastAPI", "LangGraph", "WebSocket"],
  },
  {
    title: "MCP Server with Dynamic Tool Loading",
    category: "AI",
    desc: "Model Context Protocol server that discovers and registers tools dynamically, so new capabilities ship without modifying the core application.",
    tags: ["Python", "FastAPI", "MCP", "OAuth 2.1", "PostgreSQL", "Kubernetes"],
  },
  {
    title: "RAG-Powered Support Chatbot",
    category: "AI",
    desc: "Chatbot that processes PDFs, documents and support tickets, builds embeddings, retrieves relevant context and answers with grounded responses and source references.",
    tags: ["Python", "FastAPI", "LangGraph", "pgvector", "Pinecone", "Claude", "OpenAI", "Redis", "Docker"],
  },
  {
    title: "Student Attendance App (SattApp)",
    period: "Feb 2025 - Apr 2025",
    category: "Mobile",
    image: "/sattapp.png",
    desc: "Mobile-first attendance app for HODs and Professors: class and student management, real-time attendance with date tracking, Firebase Remote Config for AdMob units, REST backend tested with Postman.",
    tags: ["Kotlin", "Firebase", "Node.js", "Express.js", "MongoDB"],
  },
];
