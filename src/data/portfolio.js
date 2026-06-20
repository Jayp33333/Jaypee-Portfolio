// Project & gallery images
import pup from "../assets/images/pup.png";
import cnhs from "../assets/images/cnhs.png";
import jaypee from "../assets/images/jaypee.jpg";

export const profile = {
  name: "John Paul Jamito",
  shortName: "Jaypee",
  location: "Calauag, Quezon, Philippines",
  titles: ["Full-Stack Developer", "3D Artist", "IT Student"],
  tagline:
    "I build full stack web applications and create 3D models for immersive digital experiences.",
  email: "johnpauljamito5@gmail.com",
  phone: "0970 655 3264",
  resume: "/resume.pdf",
  scheduleLink: "mailto:johnpauljamito5@gmail.com?subject=Let%27s%20schedule%20a%20call",
};

export const navItems = [
  { name: "About", href: "#about" },
  { name: "Tech Stack", href: "#tech-stack" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Certifications", href: "#certifications" },
  { name: "Contact", href: "#contact" },
];

export const about = [
  "I am currently studying Information Technology at the Polytechnic University of the Philippines Lopez Campus. I am a full stack developer who also works as a 3D artist, creating 3D models and building digital experiences that bring ideas to life.",
  "For my capstone project, I developed Iska Virtual Tour, a 3D campus tour that lets users explore the campus in an interactive and immersive way. I handled both the development side and the 3D modeling, from building the application to creating the 3D assets needed for the virtual environment.",
  "I work with tools and technologies for web development and 3D creation, including React, Node.js, MongoDB, Blender, and Three.js. I enjoy combining code and 3D design to build projects that are not only functional, but also visually engaging and meaningful.",
  "Right now, I am focused on improving my skills as a developer and 3D artist, taking on freelance work, and looking for opportunities where I can grow, collaborate, and continue building impactful projects.",
];

export const techStackFull = [
  {
    category: "Frontend",
    items: ["React", "JavaScript", "TypeScript", "Tailwind CSS", "Vite", "Three.js", "React Three Fiber"],
  },
  {
    category: "Backend",
    items: ["Node.js", "Express.js", "PHP", "Java", "C++", "MongoDB", "MySQL"],
  },
  {
    category: "3D & Design",
    items: ["Blender", "3D Modeling", "Texturing", "UV Mapping", "Figma", "Canva"],
  },
  {
    category: "Tools",
    items: ["Git", "GitHub", "VS Code", "Postman", "Vercel", "npm"],
  },
];

const PREVIEW_ITEMS = 4;

export const techStackPreview = techStackFull.map((group) => ({
  category: group.category,
  items: group.items.slice(0, PREVIEW_ITEMS),
}));

export const projectsFull = [
  {
    id: "01",
    title: "IskaVT",
    subtitle: "Capstone Project",
    description: "3D Virtual Campus Tour",
    tech: ["React", "Three.js", "Node.js", "Blender", "MongoDB"],
    domain: "iska-vt.vercel.app",
    image: pup,
    demo: "https://iska-vt.vercel.app/",
    github: "https://github.com/Jayp33333",
    featured: true,
  },
];

const PREVIEW_PROJECTS = 1;

export const projectsPreview = projectsFull.slice(0, PREVIEW_PROJECTS);

export const experience = [
  {
    role: "Freelancing",
    org: "Full Stack Development · 3D Modeling",
    year: "2026",
    current: true,
  },
  {
    role: "Hello World!",
    org: "First line of code",
    year: "2023",
  },
];

export const education = [
  {
    degree: "Diploma in Information Technology",
    school: "Polytechnic University of the Philippines Lopez Campus",
    year: "2023 — Present",
    current: true,
  },
  {
    degree: "Information and Communication Technology (ICT)",
    school: "Calauag National High School",
    year: "2021 — 2023",
  },
];

// NOTE: Update these with real credentials/links as you earn them.
export const certifications = [
  {
    name: "Responsive Web Design",
    org: "freeCodeCamp",
    date: "2024",
    link: "https://www.freecodecamp.org/",
  },
  {
    name: "JavaScript Algorithms & Data Structures",
    org: "freeCodeCamp",
    date: "2024",
    link: "https://www.freecodecamp.org/",
  },
  {
    name: "Frontend Development",
    org: "Coursera",
    date: "2023",
    link: "https://www.coursera.org/",
  },
  {
    name: "Git & GitHub Essentials",
    org: "Online Course",
    date: "2023",
    link: "https://github.com/",
  },
];

export const gallery = [
  { src: pup, caption: "PUP Lopez Campus" },
  { src: jaypee, caption: "Jaypee" },
  { src: cnhs, caption: "Senior High ICT" },
];

export const socials = [
  { name: "GitHub", href: "https://github.com/Jayp33333", icon: "github" },
  { name: "LinkedIn", href: "https://www.linkedin.com/", icon: "linkedin" },
  { name: "Facebook", href: "https://www.facebook.com/", icon: "facebook" },
  { name: "Instagram", href: "https://www.instagram.com/", icon: "instagram" },
];
