import SectionHeading from "./ui/SectionHeading";
import SectionPanel from "./ui/SectionPanel";
import ProjectsList from "./ProjectsList";
import { projectsPreview } from "../data/portfolio";

export default function Projects() {
  return (
    <SectionPanel id="projects">
      <SectionHeading title="Recent Projects" viewAllHref="/projects" />
      <ProjectsList projects={projectsPreview} />
    </SectionPanel>
  );
}
