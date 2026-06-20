import { Link } from "react-router-dom";
import { FaChevronLeft } from "react-icons/fa";
import TechStackList from "../components/TechStackList";
import Footer from "../components/Footer";
import { techStackFull } from "../data/portfolio";

export default function TechStackPage() {
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
            Tech Stack
          </h1>
          <p className="mt-2 text-[14px] text-gray-900 dark:text-gray-100">
            All languages, frameworks, tools, and technologies I work with.
          </p>
        </div>

        <div className="section-panel">
          <TechStackList groups={techStackFull} />
        </div>
      </main>

      <Footer />
    </>
  );
}
