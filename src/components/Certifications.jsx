import { FaExternalLinkAlt } from "react-icons/fa";
import Reveal from "./ui/Reveal";
import SectionHeading from "./ui/SectionHeading";
import SectionPanel from "./ui/SectionPanel";
import { certifications } from "../data/portfolio";

export default function Certifications() {
  return (
    <SectionPanel id="certifications">
      <SectionHeading
        title="Recent Certifications"
        viewAllHref={certifications[0].link}
      />
      <Reveal>
        <div className="divide-y divide-gray-100 rounded-xl border border-gray-200/80 bg-gray-50/50 dark:divide-white/10 dark:border-white/10 dark:bg-white/[0.02]">
          {certifications.map((c) => (
            <a
              key={c.name}
              href={c.link}
              target="_blank"
              rel="noreferrer"
              className="group flex items-center justify-between gap-3 px-4 py-3 transition-colors first:rounded-t-xl last:rounded-b-xl hover:bg-white dark:hover:bg-white/[0.04]"
            >
              <div className="min-w-0">
                <p className="truncate text-[13.5px] font-semibold text-gray-900 dark:text-white">
                  {c.name}
                </p>
                <p className="text-[12px] text-gray-900 dark:text-gray-100">
                  {c.org} · {c.date}
                </p>
              </div>
              <FaExternalLinkAlt
                size={11}
                className="shrink-0 text-gray-300 transition-colors group-hover:text-brand-primary dark:group-hover:text-brand-secondary"
              />
            </a>
          ))}
        </div>
      </Reveal>
    </SectionPanel>
  );
}
