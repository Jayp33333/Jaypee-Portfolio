import {
  FaHome,
  FaUser,
  FaEnvelope,
  FaGraduationCap,
  FaCode,
  FaProjectDiagram,
} from "react-icons/fa";
import {
  FaReact,
  FaHtml5,
  FaCss3,
  FaNodeJs,
  FaFacebook,
  FaInstagram,
  FaGithub,
} from "react-icons/fa";
import { BiLogoJavascript } from "react-icons/bi";
import {
  SiExpress,
  SiMongodb,
  SiMysql,
  SiTailwindcss,
  SiPostman,
} from "react-icons/si";
import { VscCode, VscTerminalPowershell } from "react-icons/vsc";

import { FaGitAlt, FaXTwitter } from "react-icons/fa6";
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
  {
    id: "04",
    label: "Projects",
    icon: FaProjectDiagram,
    path: "/projects",
    element: Projects,
  },
  {
    id: "05",
    label: "Education",
    icon: FaGraduationCap,
    path: "/education",
    element: Education,
  },
  // { id: "06", label: "Contact", icon: FaEnvelope, path: "/contact", element: Contact },
];

import classfund from "../assets/images/class-fund.png";
import eccomerce from "../assets/images/tech-shop-ecommerce.png";
import bhrs from "../assets/images/bhrs.png";
import zoolyst from "../assets/images/zoolyst.png";

export const SKILLS = [
  {
    id: "01",
    icon: FaHtml5,
    skill: "HTML5",
    type: "frontend",
  },
  {
    id: "02",
    icon: FaCss3,
    skill: "CSS",
    type: "frontend",
  },
  {
    id: "03",
    icon: BiLogoJavascript,
    skill: "JavaScript",
    type: "frontend",
  },
  {
    id: "04",
    icon: FaReact,
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

// import image1 from "../assets/images/elementary.jpg";
// import image2 from "../assets/images/junior-high.jpg";
// import image3 from "../assets/images/senior-high.jpg";
// import image4 from "../assets/images/college.jpg";
// import image5 from "../assets/images/graduation.jpg";
import pup from "../assets/images/pup.png";
import cnhs from "../assets/images/cnhs.png";
import sumilang from "../assets/images/sumilang.png";
import sumulong from "../assets/images/sumulong.png";

export const EDUCATION_TIMELINE = [
  {
    id: 1,
    title: "Elementary School (Grades 1-2)",
    institution: "Sumulong Elementary School",
    duration: "2011 - 2013",
    description:
      "Began formal education by learning basic literacy, numeracy, and classroom routines as a young learner.",
    image: sumulong
  },
  {
    id: 2,
    title: "Elementary School (Grades 3-6)",
    institution: "Sumilang Elementary School",
    duration: "2013 - 2017",
    description:
      "Continued developing core academic skills in reading, writing, and math while becoming more confident and independent in learning.",
    image: sumilang,
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
    title: "Senior High School - ICT Strand",
    institution: "Calauag National High School",
    duration: "2021 - 2023",
    description:
      "Learned basic IT concepts, programming, and digital tools while strengthening critical thinking and collaboration skills.",
    image: cnhs,
  },
  {
    id: 5,
    title: "College - Diploma in Information Technology",
    institution: "Polytechnic University of the Philippines, Lopez Branch",
    duration: "2023 - Present",
    description:
      "Currently pursuing a diploma in Information Technology, gaining hands-on experience in programming, web development, and problem-solving.",
    image: pup,
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
