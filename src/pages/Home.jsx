import Hero from "../components/Hero";
import About from "../components/About";
import TechStack from "../components/TechStack";
import Projects from "../components/Projects";
import Experience from "../components/Experience";
import Education from "../components/Education";
import SocialLinks from "../components/SocialLinks";
import Certifications from "../components/Certifications";
import Gallery from "../components/Gallery";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <main>
        <Hero />

        <div className="container-x mt-4 grid grid-cols-1 gap-6 lg:grid-cols-[1.7fr_1fr] lg:items-start">
          <div className="flex flex-col gap-6">
            <About />
            <TechStack />
            <Projects />
            <Certifications />
          </div>

          <div className="flex flex-col gap-6 lg:sticky lg:top-20">
            <Experience />
            <Education />
            <SocialLinks />
          </div>
        </div>

        <div className="container-x mt-6 flex flex-col gap-6">
          <Gallery />
        </div>
      </main>

      <Footer />
    </>
  );
}
