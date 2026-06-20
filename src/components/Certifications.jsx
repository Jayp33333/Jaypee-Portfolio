import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "framer-motion";
import { FaTimes, FaExpand } from "react-icons/fa";
import Reveal from "./ui/Reveal";
import SectionHeading from "./ui/SectionHeading";
import SectionPanel from "./ui/SectionPanel";
import { certifications } from "../data/portfolio";

function CertificateLightbox({ cert, onClose }) {
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <motion.div
      className="fixed inset-0 z-[70] flex items-center justify-center p-4 sm:p-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div
        className="absolute inset-0 bg-gray-900/70 backdrop-blur-sm dark:bg-black/80"
        onClick={onClose}
      />

      <button
        onClick={onClose}
        aria-label="Close"
        className="absolute right-4 top-4 z-20 flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
      >
        <FaTimes size={16} />
      </button>

      <motion.figure
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 flex max-h-full max-w-4xl flex-col items-center"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={cert.image}
          alt={`${cert.name} — ${cert.org}`}
          className="max-h-[82vh] w-auto max-w-full rounded-lg object-contain shadow-2xl"
        />
        <figcaption className="mt-3 text-center text-[13px] font-medium text-white/90">
          {cert.name} · {cert.org} · {cert.date}
        </figcaption>
      </motion.figure>
    </motion.div>
  );
}

export default function Certifications() {
  const [active, setActive] = useState(null);

  return (
    <SectionPanel id="certifications">
      <SectionHeading title="Certifications" />
      <Reveal>
        <div className="divide-y divide-gray-100 rounded-xl border border-gray-200/80 bg-gray-50/50 dark:divide-white/10 dark:border-white/10 dark:bg-white/[0.02]">
          {certifications.map((c, i) => (
            <button
              key={`${c.name}-${i}`}
              type="button"
              onClick={() => setActive(c)}
              className="group flex w-full items-center justify-between gap-3 px-4 py-3 text-left transition-colors first:rounded-t-xl last:rounded-b-xl hover:bg-white dark:hover:bg-white/[0.04]"
            >
              <div className="flex min-w-0 items-center gap-3">
                <div className="h-11 w-16 shrink-0 overflow-hidden rounded-md border border-gray-200 bg-white dark:border-white/10 dark:bg-white/5">
                  <img
                    src={c.image}
                    alt={c.name}
                    loading="lazy"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="min-w-0">
                  <p className="truncate text-[13.5px] font-semibold text-gray-900 dark:text-white">
                    {c.name}
                  </p>
                  <p className="text-[12px] text-gray-900 dark:text-gray-100">
                    {c.org} · {c.date}
                  </p>
                </div>
              </div>
              <FaExpand
                size={11}
                className="shrink-0 text-gray-300 transition-colors group-hover:text-brand-primary dark:group-hover:text-brand-secondary"
              />
            </button>
          ))}
        </div>
      </Reveal>

      {createPortal(
        <AnimatePresence>
          {active && (
            <CertificateLightbox cert={active} onClose={() => setActive(null)} />
          )}
        </AnimatePresence>,
        document.body
      )}
    </SectionPanel>
  );
}
