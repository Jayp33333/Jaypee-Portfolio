import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "framer-motion";
import { FaChevronLeft, FaChevronRight, FaTimes } from "react-icons/fa";
import Reveal from "./ui/Reveal";
import SectionPanel from "./ui/SectionPanel";
import { gallery } from "../data/portfolio";

function Lightbox({ images, index, onClose, onPrev, onNext }) {
  const image = images[index];
  const hasMultiple = images.length > 1;

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
      else if (e.key === "ArrowLeft") onPrev();
      else if (e.key === "ArrowRight") onNext();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose, onPrev, onNext]);

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

      {hasMultiple && (
        <>
          <button
            onClick={(e) => {
              e.stopPropagation();
              onPrev();
            }}
            aria-label="Previous image"
            className="absolute left-3 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 sm:left-5"
          >
            <FaChevronLeft size={16} />
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              onNext();
            }}
            aria-label="Next image"
            className="absolute right-3 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 sm:right-5"
          >
            <FaChevronRight size={16} />
          </button>
        </>
      )}

      <motion.figure
        key={index}
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 flex max-h-full max-w-3xl flex-col items-center"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={image.src}
          alt={image.caption}
          className="max-h-[80vh] w-auto max-w-full rounded-lg object-contain shadow-2xl"
        />
        {image.caption && (
          <figcaption className="mt-3 text-center text-[13px] font-medium text-white/90">
            {image.caption}
          </figcaption>
        )}
      </motion.figure>
    </motion.div>
  );
}

export default function Gallery() {
  const trackRef = useRef(null);
  const [active, setActive] = useState(null);

  const showPrev = () =>
    setActive((i) => (i === null ? i : (i - 1 + gallery.length) % gallery.length));
  const showNext = () =>
    setActive((i) => (i === null ? i : (i + 1) % gallery.length));

  const scroll = (dir) => {
    const el = trackRef.current;
    if (!el) return;
    el.scrollBy({ left: dir * (el.clientWidth * 0.8), behavior: "smooth" });
  };

  return (
    <SectionPanel id="gallery">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="eyebrow">Gallery</h2>
        <div className="flex gap-2">
          <button
            onClick={() => scroll(-1)}
            aria-label="Scroll left"
            className="flex h-7 w-7 items-center justify-center rounded-md border border-gray-200 text-gray-900 transition-colors hover:bg-gray-50 dark:border-white/10 dark:text-gray-100 dark:hover:bg-white/5"
          >
            <FaChevronLeft size={11} />
          </button>
          <button
            onClick={() => scroll(1)}
            aria-label="Scroll right"
            className="flex h-7 w-7 items-center justify-center rounded-md border border-gray-200 text-gray-900 transition-colors hover:bg-gray-50 dark:border-white/10 dark:text-gray-100 dark:hover:bg-white/5"
          >
            <FaChevronRight size={11} />
          </button>
        </div>
      </div>

      <Reveal>
        <div
          ref={trackRef}
          className="no-scrollbar flex snap-x snap-mandatory gap-3 overflow-x-auto pb-1"
        >
          {gallery.map((g, i) => (
            <figure
              key={i}
              className="group relative aspect-[4/3] w-44 shrink-0 snap-start overflow-hidden rounded-lg border border-gray-200 bg-gray-100 sm:w-52 dark:border-white/10 dark:bg-white/5"
            >
              <button
                type="button"
                onClick={() => setActive(i)}
                aria-label={`View ${g.caption}`}
                className="block h-full w-full cursor-pointer"
              >
                <img
                  src={g.src}
                  alt={g.caption}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </button>
              <figcaption className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-2 text-[11px] font-medium text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                {g.caption}
              </figcaption>
            </figure>
          ))}
        </div>
      </Reveal>

      {createPortal(
        <AnimatePresence>
          {active !== null && (
            <Lightbox
              images={gallery}
              index={active}
              onClose={() => setActive(null)}
              onPrev={showPrev}
              onNext={showNext}
            />
          )}
        </AnimatePresence>,
        document.body
      )}
    </SectionPanel>
  );
}
