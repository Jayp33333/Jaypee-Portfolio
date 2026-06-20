// Project & gallery images
import jaypee from "../assets/images/jaypee.jpg";
import ojt1 from "../assets/images/OJT1.jpg";
import ojt2 from "../assets/images/OJT2.jpg";
import selfie1 from "../assets/images/selfie1.jpg";
import selfie2 from "../assets/images/selfie2.jpg";
import stellarsatFam from "../assets/images/stellarsat-fam.jpg";
import ditGroupPic1 from "../assets/images/dit-group-pic.jpg";
import ditGroupPic2 from "../assets/images/dit-group-pic2.jpg";
import orgDay from "../assets/images/org-day.jpg";
import gabBirthday from "../assets/images/gab-birthday.jpg";
import thanksgiving from "../assets/images/thanksgiving.jpg";

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
  "I'm Jaypee, a developer and 3D artist who enjoys building digital products from start to finish, handling both how they look and how they work.",
  "As a 3D artist, I create models, textures, and interactive environments using Blender and Three.js, with a focus on real-time WebGL experiences that run directly in the browser.",
  "As a full stack developer, I build complete web applications end to end with React, Node.js, and MongoDB, prioritizing clean interfaces, reliable APIs, and a polished user experience.",
  "I'm also passionate about AI integration, bringing intelligent features such as chat assistants, smart search, and automation into real products to make them more capable and intuitive. I'm always looking for opportunities to grow, collaborate, and deliver meaningful work.",
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
    demo: "https://iska-vt.vercel.app/",
    featured: true,
  },
];

const PREVIEW_PROJECTS = 1;

export const projectsPreview = projectsFull.slice(0, PREVIEW_PROJECTS);

export const experience = [
  {
    role: "Freelancing",
    org: "Full Stack & 3D Web Projects",
    year: "2026",
    current: true,
  },
  {
    role: "Technical Support Intern",
    org: "IT Avenue Lucena",
    year: "2026",
  },
  {
    role: "Network Documentation Assistant Intern",
    org: "StellarSat Solutions Inc.",
    year: "2025",
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
  { src: ditGroupPic2, caption: "DIT Group Picture 2" },
  { src: ojt2, caption: "OJT 2" },
  { src: stellarsatFam, caption: "StellarSat Family" },
  { src: ditGroupPic1, caption: "DIT Group Picture" },

  { src: orgDay, caption: "Org Day" },
  { src: ojt1, caption: "OJT 1" },
  { src: gabBirthday, caption: "Gab's Birthday" },
  { src: thanksgiving, caption: "Thanksgiving" }, 
  { src: selfie1, caption: "Selfie with Bert" },
  { src: selfie2, caption: "Selfie with Sy and Drey" },
];

export const socials = [
  { name: "GitHub", href: "https://github.com/Jayp33333", icon: "github" },
  { name: "LinkedIn", href: "https://www.linkedin.com/", icon: "linkedin" },
  { name: "Facebook", href: "https://www.facebook.com/", icon: "facebook" },
  { name: "Instagram", href: "https://www.instagram.com/", icon: "instagram" },
];
