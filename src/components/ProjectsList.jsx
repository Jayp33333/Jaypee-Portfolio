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
            className="box box-hover group flex h-full cursor-pointer flex-col gap-4 p-4 no-underline sm:flex-row sm:items-center"
          >
            <div className="flex min-w-0 flex-1 flex-col">
              <h3 className="text-[14px] font-semibold text-gray-900 dark:text-white">
                {p.title}
              </h3>

              <p className="mt-1 text-[12.5px] leading-relaxed text-gray-900 dark:text-gray-100">
                {p.description}
              </p>

              <div className="mt-3">
                <code className="inline-block w-fit max-w-full truncate rounded-md bg-gray-100 px-2 py-1 font-mono text-[11px] text-gray-900 dark:bg-white/5 dark:text-gray-100">
                  {p.domain}
                </code>
              </div>
            </div>

            {p.image && (
              <div className="w-full max-w-[200px] shrink-0 self-start sm:w-40 sm:self-center">
                {/* Laptop screen */}
                <div className="rounded-t-lg bg-gray-800 p-1 shadow-sm dark:bg-gray-700">
                  <div className="aspect-video overflow-hidden rounded-sm bg-black">
                    <img
                      src={p.image}
                      alt={p.title}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                </div>
                {/* Laptop base / hinge */}
                <div className="relative -mx-1.5 h-1.5 rounded-b-md bg-gradient-to-b from-gray-300 to-gray-400 dark:from-gray-600 dark:to-gray-700">
                  <div className="absolute left-1/2 top-0 h-[3px] w-8 -translate-x-1/2 rounded-b-md bg-gray-400/80 dark:bg-gray-800/80" />
                </div>
              </div>
            )}
          </motion.a>
        </Reveal>
      ))}
    </div>
  );
}
