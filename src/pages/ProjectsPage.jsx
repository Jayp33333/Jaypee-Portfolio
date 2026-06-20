import { Link } from "react-router-dom";
import { FaChevronLeft } from "react-icons/fa";
import ProjectsList from "../components/ProjectsList";
import Footer from "../components/Footer";
import { projectsFull } from "../data/portfolio";

export default function ProjectsPage() {
  return (
    <>
      <main className="container-x py-10 sm:py-14">
        <Link
          to="/"
          className="mb-8 inline-flex items-center gap-2 text-[13px] font-medium text-gray-900 transition-colors hover:text-brand-primary dark:text-gray-100 dark:hover:text-white"
        >
          <FaChevronLeft size={11} /> Back to portfolio
        </Link>

        <div className="section-panel mb-8">
          <h1 className="font-heading text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Recent Projects
          </h1>
          <p className="mt-2 text-[14px] text-gray-900 dark:text-gray-100">
            All projects I have built and shipped.
          </p>
        </div>

        <div className="section-panel">
          <ProjectsList projects={projectsFull} columns={2} />
        </div>
      </main>

      <Footer />
    </>
  );
}
