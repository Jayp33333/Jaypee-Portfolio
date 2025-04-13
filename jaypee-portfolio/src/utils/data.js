import { FaHome, FaUser, FaEnvelope, FaGraduationCap, FaCode, FaProjectDiagram } from "react-icons/fa";
import{
  FaReact,
  FaHtml5,
  FaCss3,
  FaNodeJs,
  FaFacebook,
  FaInstagram,
  FaGithub,
} from "react-icons/fa";
import { BiLogoJavascript} from "react-icons/bi";
import { SiExpress, SiMongodb, SiMysql, SiTailwindcss, SiPostman } from "react-icons/si";
import {
  VscCode, 
  VscTerminalPowershell,
} from "react-icons/vsc";

import { FaGitAlt, FaXTwitter }  from "react-icons/fa6";
import Home from "../pages/Home";
import About from "../pages/About";
// import Contact from "../pages/Contact";
import Education from "../pages/Education";
import Skills from "../pages/Skills";
import Projects from "../pages/Projects";

export const SideBarLinks = [
  { id: "01", label: "Home", icon: FaHome, path: "/", element: Home },
  { id: "02", label: "About", icon: FaUser, path: "/about", element: About },
  { id: "03", label: "Skills", icon: FaCode, path: "/skills", element: Skills },
  { id: "04", label: "Projects", icon: FaProjectDiagram, path: "/projects", element: Projects },
  { id: "05", label: "Education", icon: FaGraduationCap, path: "/education", element: Education },
  // { id: "06", label: "Contact", icon: FaEnvelope, path: "/contact", element: Contact },
];

// import Image_1 from "../assets/images/project-1.jpg";
// import Image_2 from "../assets/images/project-2.jpg";
// import Image_3 from "../assets/images/project-3.jpg";
// import Image_4 from "../assets/images/project-4.jpg";
// import Image_5 from "../assets/images/project-5.jpg";
// import Image_6 from "../assets/images/project-6.jpg";
import SampleImg from "../assets/images/SampleImg.jpg";

export const SKILLS = [
  {
    id: "01",
    icon:FaHtml5,
    skill: "HTML5",
    type: "frontend",
  },
  {
    id: "02",
    icon:FaCss3,
    skill: "CSS",
    type: "frontend",
  },
  {
    id: "03",
    icon:BiLogoJavascript,
    skill: "JavaScript",
    type: "frontend",
  },
  {
    id: "04",
    icon:FaReact,
    skill: "React JS",
    type: "frontend",
  },
  {
    id: "05",
    icon: SiTailwindcss,
    skill: "Tailwind CSS",
    type: "frontend",
  },
  {
    id: "06",
    icon: FaNodeJs,
    skill: "Node.js",
    type: "backend",
  },
  {
    id: "07",
    icon: SiExpress,
    skill: "Express.js",
    type: "backend",
  },
  {
    id: "08",
    icon: SiMongodb,
    skill: "MongoDB",
    type: "backend",
  },
  {
    id: "09",
    icon: SiMysql,
    skill: "MySQL",
    type: "backend",
  },
  {
    id: "10",
    icon: FaGitAlt,
    skill: "Git",
    type: "tools",
  },
  {
    id: "11",
    icon: FaGithub,
    skill: "GitHub",
    type: "tools",
  },
  {
    id: "12",
    icon: VscCode,
    skill: "VS Code",
    type: "tools",
  },
  {
    id: "13",
    icon: SiPostman,
    skill: "Postman",
    type: "tools",
  },
];

export const ABOUT_ME = {
  content: `
I’m just a guy who’s fascinated by technology and loves building cool things on the web. Currently, I’m diving deep into the world of web development, sharpening my skills in the MERN stack (MongoDB, Express.js, React.js, Node.js) to create smooth, user-friendly applications.

I believe technology should make life easier, and that’s exactly what I aim to do—whether it's crafting a website, solving problems through code, or simply learning something new every day. Right now, I’m on a journey to level up my skills and turn my passion into something meaningful.`,

};

export const EDUCATION_TIMELINE = [
  {
    id: 1,
    title: "Elementary School (Grades 1-2)",
    institution: "Sumulong Elementary School",
    duration: "2011 - 2013",
    description: "Began formal education by learning basic literacy, numeracy, and classroom routines as a young learner.",
  },
  {
    id: 2,
    title: "Elementary School (Grades 3-6)",
    institution: "Sumilang Elementary School",
    duration: "2013 - 2017",
    description: "Continued developing core academic skills in reading, writing, and math while becoming more confident and independent in learning.",
  },
  {
    id: 3,
    title: "Junior High School",
    institution: "Calauag National High School",
    duration: "2017 - 2021",
    description: "Focused on academic subjects and built a strong foundation in mathematics, science, and communication skills.",
  },
  {
    id: 4,
    title: "Senior High School - ICT Strand",
    institution: "Calauag National High School",
    duration: "2021 - 2023",
    description: "Learned basic IT concepts, programming, and digital tools while strengthening critical thinking and collaboration skills.",
  },
  {
    id: 5,
    title: "College - Diploma in Information Technology",
    institution: "Polytechnic University of the Philippines, Lopez Branch",
    duration: "2023 - Present",
    description: "Currently pursuing a diploma in Information Technology, gaining hands-on experience in programming, web development, and problem-solving.",
  }
];


export const projectData = [
  {
    id: "01",
    title: "E-Commerce Website",
    description: "An online tech shop where users can buy gadgets and accessories.",
    image: SampleImg,
    link: "https://example.com/ecommerce"
  },
  {
    id: "02",
    title: "Voting System",
    description: "A secure and user-friendly voting platform for school elections.",
    image: SampleImg,
    link: "https://example.com/votingsystem"
  },
  {
    id: "03",
    title: "Daily Thoughts App",
    description: "Share your thoughts once a day. Built with MERN stack and social login.",
    image: SampleImg,
    link: "https://example.com/thoughtsapp"
  },
  {
    id: "04",
    title: "Portfolio Website",
    description: "A personal portfolio to showcase my projects and skills.",
    image: SampleImg,
    link: "https://example.com/portfolio"
  },
  {
    id: "05",
    title: "Chat Application",
    description: "A real-time chat application for seamless communication.",
    image: SampleImg,
    link: "https://example.com/chatapp"
  },
  {
    id: "06",
    title: "Blog Website",
    description: "A platform to share articles and insights on various topics.",
    image: SampleImg,
    link: "https://example.com/blogwebsite"
  },
];
