import {
  SiReact,
  SiJavascript,
  SiTypescript,
  SiTailwindcss,
  SiVite,
  SiThreedotjs,
  SiNodedotjs,
  SiExpress,
  SiPhp,
  SiMongodb,
  SiMysql,
  SiBlender,
  SiFigma,
  SiGit,
  SiGithub,
  SiPostman,
  SiVercel,
  SiNpm,
  SiCplusplus,
  SiCanva,
  SiVscodium,
} from "react-icons/si";
import { LiaJava } from "react-icons/lia";
import { DiVisualstudio } from "react-icons/di";
import { TbBoxModel, TbTexture, TbUvIndex } from "react-icons/tb";

const icons = {
  React: SiReact,
  JavaScript: SiJavascript,
  TypeScript: SiTypescript,
  "Tailwind CSS": SiTailwindcss,
  Vite: SiVite,
  "Three.js": SiThreedotjs,
  "React Three Fiber": SiThreedotjs,
  "Node.js": SiNodedotjs,
  "Express.js": SiExpress,
  PHP: SiPhp,
  Java: LiaJava,
  "C++": SiCplusplus,
  MongoDB: SiMongodb,
  MySQL: SiMysql,
  Blender: SiBlender,
  "3D Modeling": TbBoxModel,
  Texturing: TbTexture,
  "UV Mapping": TbUvIndex,
  Figma: SiFigma,
  Canva: SiCanva,
  Git: SiGit,
  GitHub: SiGithub,
  "VS Code": DiVisualstudio,
  Postman: SiPostman,
  Vercel: SiVercel,
  npm: SiNpm,
};

export default function TechIcon({ name, size = 14, className = "" }) {
  const Icon = icons[name];
  if (!Icon) return null;

  return <Icon size={size} className={`shrink-0 ${className}`} aria-hidden />;
}
