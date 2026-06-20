import SectionHeading from "./ui/SectionHeading";
import SectionPanel from "./ui/SectionPanel";
import TechStackList from "./TechStackList";
import { techStackPreview } from "../data/portfolio";

export default function TechStack() {
  return (
    <SectionPanel id="tech-stack">
      <SectionHeading title="Tech Stack" viewAllHref="/tech-stack" />
      <TechStackList groups={techStackPreview} compact />
    </SectionPanel>
  );
}
