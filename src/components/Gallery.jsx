import { useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Reveal from "./ui/Reveal";
import SectionPanel from "./ui/SectionPanel";
import { gallery } from "../data/portfolio";

export default function Gallery() {
  const trackRef = useRef(null);

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
              <img
                src={g.src}
                alt={g.caption}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-2 text-[11px] font-medium text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                {g.caption}
              </figcaption>
            </figure>
          ))}
        </div>
      </Reveal>
    </SectionPanel>
  );
}
