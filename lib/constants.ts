// Personal Information
export const PERSONAL_INFO = {
  name: "Javier Muñoz Solano",
  title: "System Admin & Web Developer",
  description: "System admin and web developer who enjoys building things that work well",
  location: "Murcia, Spain",
  email: "javier@munozsolano.com",
  github: "https://github.com/JBibu",
  linkedin: "https://linkedin.com/in/jbibu",
  avatar: "/avatar.jpg",
} as const;

// Navigation Configuration
export const NAVBAR_CONFIG = {
  logo: {
    url: "/",
    src: "/favicon.ico",
    alt: "Portfolio Logo",
    title: "Javi Dev.",
  },
  menu: [
    { title: "Home", url: "#home" },
    { title: "About", url: "#about" },
    { title: "Projects", url: "#projects" },
    { title: "Skills", url: "#skills" },
    { title: "Contact", url: "#contact" },
  ],
  auth: {
    login: { title: "Resume", url: "#resume" },
    signup: { title: "Contact Me", url: "#contact" },
  },
} as const;

// Experience & Education Data
export const EXPERIENCE_DATA = [
  {
    title: "System Administrator",
    company: "C3i Servicios Informáticos",
    period: "Current (Part-time)",
    description: "Managing IT infrastructure and developing web applications",
  },
  {
    title: "Web Application Development",
    company: "CIFP Carlos III, Murcia",
    period: "2023 - 2025",
    description: "Full-stack web development program",
  },
  {
    title: "Microcomputer Systems and Networks",
    company: "IES Ingeniero De la Cierva",
    period: "2021 - 2023",
    description: "Foundational IT and networking coursework",
  },
] as const;

// Skills Data
export const SKILLS_DATA = {
  development: [
    "HTML", "CSS", "JavaScript", "TypeScript", "Tailwind",
    "React", "Next.js", "Node.js", "PHP", "Laravel",
    "Prisma", "PostgreSQL", "Java", "Python", "WordPress", "Electron", "Odoo"
  ],
  devops: [
    "Linux", "Bash", "PowerShell", "Docker", "Kubernetes",
    "Terraform", "Ansible", "Jenkins", "AWS", "Azure",
    "GCP", "Nginx", "S3", "Prometheus", "Grafana"
  ],
  learning: ["Rust", "Godot", "Wasm"]
} as const;

// Projects Data
export const PROJECTS_DATA = [
  {
    title: "E-commerce Platform",
    description: "A full-stack e-commerce platform built with Next.js, Tailwind CSS, and Stripe for payments.",
    image: "/project1.jpg",
    tags: ["Next.js", "React", "Tailwind CSS", "Stripe"],
    github: "#",
    demo: "#",
  },
  {
    title: "Portfolio Website",
    description: "A personal portfolio website showcasing my projects and skills, built with React and Three.js.",
    image: "/project2.jpg",
    tags: ["React", "Three.js", "GSAP", "Tailwind CSS"],
    github: "#",
    demo: "#",
  },
  {
    title: "Task Management App",
    description: "A productivity app for managing tasks and projects, with real-time collaboration features.",
    image: "/project3.jpg",
    tags: ["React", "Firebase", "Tailwind CSS", "TypeScript"],
    github: "#",
    demo: "#",
  },
] as const;

// Languages
export const LANGUAGES = [
  { name: "Spanish", level: "Native" },
  { name: "English", level: "Fluent" },
] as const;