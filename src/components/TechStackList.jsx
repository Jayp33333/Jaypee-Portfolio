import Reveal from "./ui/Reveal";
import TechIcon from "./TechIcon";

export default function TechStackList({ groups, compact = false }) {
  return (
    <div className={compact ? "space-y-4" : "space-y-6"}>
      {groups.map((group) => (
        <Reveal key={group.category}>
          <div>
            <h3
              className={`mb-1.5 font-semibold text-gray-900 dark:text-gray-200 ${
                compact ? "text-[13px]" : "text-[15px]"
              }`}
            >
              {group.category}
            </h3>
            <div className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span key={item} className="tag">
                  <TechIcon name={item} size={14} className="text-gray-700 dark:text-gray-300" />
                  {item}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      ))}
    </div>
  );
}
