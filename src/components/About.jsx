import Reveal from "./ui/Reveal";
import SectionHeading from "./ui/SectionHeading";
import SectionPanel from "./ui/SectionPanel";
import { about } from "../data/portfolio";

export default function About() {
  return (
    <SectionPanel id="about">
      <SectionHeading title="About" />
      <Reveal>
        <div className="space-y-3.5">
          {about.map((para, i) => (
            <p
              key={i}
              className="text-[14px] leading-relaxed text-gray-900 dark:text-gray-100"
            >
              {para}
            </p>
          ))}
        </div>
      </Reveal>
    </SectionPanel>
  );
}
