import Reveal from "./ui/Reveal";
import SectionPanel from "./ui/SectionPanel";
import Timeline from "./ui/Timeline";
import { experience } from "../data/portfolio";

export default function Experience() {
  return (
    <SectionPanel id="experience">
      <h2 className="eyebrow mb-4">Experience</h2>
      <Reveal>
        <Timeline
          items={experience}
          renderItem={(item) => (
            <div className="min-w-0 flex-1">
              <div className="flex items-baseline justify-between gap-3">
                <h3 className="text-[13.5px] font-semibold text-gray-900 dark:text-white">
                  {item.role}
                </h3>
                <span className="shrink-0 text-[10px] font-normal text-gray-500 dark:text-gray-400">
                  {item.year}
                </span>
              </div>
              <p className="text-[12.5px] text-gray-900 dark:text-gray-100">
                {item.org}
              </p>
            </div>
          )}
        />
      </Reveal>
    </SectionPanel>
  );
}
