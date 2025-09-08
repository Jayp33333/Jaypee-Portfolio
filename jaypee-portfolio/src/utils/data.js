import {
  FaHome,
  FaUser,
  FaCode,
  FaProjectDiagram,
  FaGithub,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaFigma,
  FaGit,
  FaJava,
  FaGamepad,
  FaMusic,
  FaTv,
  FaBasketballBall,
  FaBiking,
} from "react-icons/fa";

import {
  SiCanva,
  SiAdobephotoshop,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiPostman,
  SiMysql,
} from "react-icons/si";

import { VscVscode } from "react-icons/vsc";

import pup from "../assets/images/pup.png";
import cnhs from "../assets/images/cnhs.png";
import sumilang from "../assets/images/sumilang.png";
import sumulong from "../assets/images/sumulong.png";

import Home from "../pages/Home";
import About from "../pages/About";
import Projects from "../pages/Projects";

export const SideBarLinks = [
  { id: "01", label: "Home", icon: FaHome, path: "/", element: Home },
  { id: "02", label: "About", icon: FaUser, path: "/about", element: About },
  {
    id: "3",
    label: "Projects",
    icon: FaProjectDiagram,
    path: "/projects",
    element: Projects,
  },
  // { id: "06", label: "Contact", icon: FaEnvelope, path: "/contact", element: Contact },
];

export const navItems = [
  { name: "Introduction", href: "#introduction" },
  { name: "Skills", href: "#skills" },
  { name: "Education", href: "#education" },
];

import classfund from "../assets/images/class-fund.png";
import eccomerce from "../assets/images/tech-shop-ecommerce.png";
import bhrs from "../assets/images/bhrs.png";
import zoolyst from "../assets/images/zoolyst.png";

export const interests = [
  { name: "Coding", icon: FaCode },
  { name: "Gaming", icon: FaGamepad },
  { name: "Music", icon: FaMusic },
  { name: "Watching", icon: FaTv },
  { name: "Basketball", icon: FaBasketballBall },
  { name: "Biking", icon: FaBiking },
];

export const ABOUT_ME = {
  content: `
I’m just a guy who’s fascinated by technology and loves building cool things on the web. Currently, I’m diving deep into the world of web development, sharpening my skills in the MERN Stack (MongoDB, Express.js, React.js, Node.js) to create smooth, user-friendly applications.

I believe technology should make life easier, and that’s exactly what I aim to do—whether it's crafting a website, solving problems through code, or simply learning something new every day. Right now, I’m on a journey to level up my skills and turn my passion into something meaningful.`,
};

// Personal details data
export const personalDetails = {
  age: "20",
  birthdate: "January 15, 2005",
  phone: "09706553264",
  email: "johnpauljamito5@gmail.com",
  address: "Calauag, Quezon, Philippines",
};

// Skills data
export const skillsData = {
  webDevelopment: {
    title: "Website Development",
    technologies: [
      { name: "Java", icon: FaJava, color: "#007396" }, // Java official blue
      { name: "HTML", icon: FaHtml5, color: "#E34F26" }, // HTML5 orange
      { name: "CSS", icon: FaCss3Alt, color: "#1572B6" }, // CSS3 blue
      { name: "JavaScript", icon: FaJs, color: "#F7DF1E" }, // JS yellow
      { name: "React", icon: FaReact, color: "#61DAFB" }, // React cyan
      { name: "Node.js", icon: SiNodedotjs, color: "#339933" }, // Node.js green
      { name: "Express", icon: SiExpress, color: "gray" }, // Express is black
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" }, // Tailwind cyan
      { name: "MongoDB", icon: SiMongodb, color: "#47A248" }, // MongoDB green
      { name: "MySQL", icon: SiMysql, color: "#4479A1" }, // MySQL blue
      { name: "Postman", icon: SiPostman, color: "#FF6C37" }, // Postman orange
      { name: "Git", icon: FaGit, color: "#F05032" }, // Git orange
      { name: "GitHub", icon: FaGithub, color: "gray" }, // GitHub black
      { name: "VS Code", icon: VscVscode, color: "#007ACC" }, // VS Code blue
    ],
  },
  uiUxDesign: {
    title: "UI/UX Design",
    technologies: [
      { name: "Figma", icon: FaFigma, color: "#F24E1E" }, // Figma red/orange gradient base
      { name: "Canva", icon: SiCanva, color: "#00C4CC" }, // Canva teal
      { name: "Photoshop", icon: SiAdobephotoshop, color: "#31A8FF" }, // Photoshop blue
    ],
  },
};


export const EDUCATION_TIMELINE = [
  {
    id: 1,
    title: "College - Diploma in Information Technology",
    institution: "Polytechnic University of the Philippines, Lopez Campus",
    duration: "2023 - Present",
    description:
      "Currently pursuing a diploma in Information Technology, gaining hands-on experience in programming, web development, and problem-solving.",
    image: pup,
  },
  {
    id: 2,
    title: "Senior High School - ICT Strand",
    institution: "Calauag National High School",
    duration: "2021 - 2023",
    description:
      "Learned basic IT concepts, programming, and digital tools while strengthening critical thinking and collaboration skills.",
    image: cnhs,
  },
  {
    id: 3,
    title: "Junior High School",
    institution: "Calauag National High School",
    duration: "2017 - 2021",
    description:
      "Focused on academic subjects and built a strong foundation in mathematics, science, and communication skills.",
    image: cnhs,
  },
  {
    id: 4,
    title: "Elementary School (Grades 3-6)",
    institution: "Sumilang Elementary School",
    duration: "2013 - 2017",
    description:
      "Continued developing core academic skills in reading, writing, and math while becoming more confident and independent in learning.",
    image: sumilang,
  },
  {
    id: 5,
    title: "Elementary School (Grades 1-2)",
    institution: "Sumulong Elementary School",
    duration: "2011 - 2013",
    description:
      "Began formal education by learning basic literacy, numeracy, and classroom routines as a young learner.",
    image: sumulong,
  },
];

export const projectData = [
  {
    id: "01",
    title: "Animal Information Platform",
    description:
      "Zoolyst is a comprehensive animal information platform designed to showcase and manage a curated collection of 100 animal species across categories such as mammals, birds, reptiles, amphibians, and fish. The project combines an interactive dataset with a modern web application, providing users with an engaging way to explore the natural world.",
    image: zoolyst,
    link: "https://zoolyst.vercel.app/",
  },
  {
    id: "02",
    title: "Bording House Rental System",
    description:
      "Boarding House Rental System (BHRS) is a Java-based rental management application designed to simplify and digitalize the process of managing boarding houses. It supports hybrid rental options (either bed space or whole room) and includes gender-specific room categories to fit different tenant needs.",
    image: bhrs,
    link: "https://example.com/bhrs",
  },
  {
    id: "03",
    title: "E-commerce Website",
    description:
      "Tech Shop is a modern e-commerce website dedicated to providing a diverse selection of technology products through a clean, reliable, and user-friendly platform. The project emphasizes both variety and convenience, aiming to connect customers with the latest gadgets, accessories, and digital essentials in one accessible online store.",
    image: eccomerce,
    link: "https://example.com/eccomerce",
  },
  {
    id: "04",
    title: "Class Fund Application",
    description:
      "Class Fund Application is a project aimed at helping a class or organization manage collective funds more efficiently. It’s designed to keep track of contributions, expenses, and balances in a transparent and organized way, so that both students and class officers can monitor financial activities without relying on messy manual records.",
    image: classfund,
    link: "https://example.com/classfund",
  },
];
