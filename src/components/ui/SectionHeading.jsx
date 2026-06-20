import { Link } from "react-router-dom";
import { FaChevronRight } from "react-icons/fa";

export default function SectionHeading({ title, viewAllHref }) {
  const viewAll = viewAllHref && (
    <>
      View All <FaChevronRight size={7} />
    </>
  );

  return (
    <div className="mb-4 flex items-center justify-between">
      <h2 className="eyebrow">{title}</h2>
      {viewAllHref &&
        (viewAllHref.startsWith("/") ? (
          <Link to={viewAllHref} className="viewall">
            {viewAll}
          </Link>
        ) : (
          <a href={viewAllHref} className="viewall">
            {viewAll}
          </a>
        ))}
    </div>
  );
}
