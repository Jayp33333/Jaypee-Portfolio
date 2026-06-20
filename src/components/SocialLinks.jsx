import { FaGithub, FaLinkedin, FaFacebook, FaInstagram } from "react-icons/fa";
import Reveal from "./ui/Reveal";
import SectionPanel from "./ui/SectionPanel";
import { socials } from "../data/portfolio";

const socialIcons = {
  github: FaGithub,
  linkedin: FaLinkedin,
  facebook: FaFacebook,
  instagram: FaInstagram,
};

export default function SocialLinks() {
  return (
    <SectionPanel id="socials">
      <h2 className="eyebrow mb-4">Social Links</h2>
      <Reveal>
        <div className="flex flex-wrap gap-2">
          {socials.map((s) => {
            const Icon = socialIcons[s.icon];
            return (
              <a
                key={s.name}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                aria-label={s.name}
                title={s.name}
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-gray-200 text-gray-900 transition-colors hover:border-brand-primary/40 hover:text-brand-primary dark:border-white/10 dark:text-gray-100 dark:hover:border-brand-secondary/50 dark:hover:text-brand-secondary"
              >
                {Icon && <Icon size={15} />}
              </a>
            );
          })}
        </div>
      </Reveal>
    </SectionPanel>
  );
}
