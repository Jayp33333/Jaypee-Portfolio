import { motion } from "framer-motion";
import Reveal from "./ui/Reveal";

export default function ProjectsList({ projects, columns = 1 }) {
  return (
    <div
      className={`grid gap-3 ${
        columns === 2 ? "grid-cols-1 sm:grid-cols-2" : "grid-cols-1"
      }`}
    >
      {projects.map((p, i) => (
        <Reveal key={p.id} delay={i * 0.05}>
          <motion.a
            href={p.demo || p.github}
            target="_blank"
            rel="noreferrer"
            whileHover={{ y: -3 }}
            transition={{ type: "spring", stiffness: 300, damping: 22 }}
            className="box box-hover group flex h-full cursor-pointer flex-col p-4 no-underline"
          >
            <h3 className="text-[14px] font-semibold text-gray-900 dark:text-white">
              {p.title}
            </h3>

            <p className="mt-1 text-[12.5px] leading-relaxed text-gray-900 dark:text-gray-100">
              {p.description}
            </p>

            <div className="mt-3">
              <code className="rounded-md bg-gray-100 px-2 py-1 font-mono text-[11px] text-gray-900 dark:bg-white/5 dark:text-gray-100">
                {p.domain}
              </code>
            </div>
          </motion.a>
        </Reveal>
      ))}
    </div>
  );
}
