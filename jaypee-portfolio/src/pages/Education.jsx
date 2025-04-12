import React from "react";
import { EDUCATION_TIMELINE } from "../utils/data";
import TimelineCard from "../components/TimelineCard";
import { useInView } from "react-intersection-observer";

const Education = () => {
  const { ref: introRef, inView: isIntroVisible } = useInView({
    threshold: 0.6,
  });
  const { ref: lastCardRef, inView: isLastCardVisible } = useInView({
    threshold: 0.6,
  });

  return (
    <section className="w-full h-screen overflow-y-scroll snap-y snap-mandatory scroll-smooth">
      {/* Header */}
      <div
        ref={introRef}
        className="snap-center h-screen flex flex-col justify-center items-center px-4 sm:px-8 md:px-16 relative"
      >
        <h1 className="text-yellow-500 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-center mb-4">
          EDUCATION
        </h1>
        <p className="text-gray-400 text-center max-w-xl">
          Scroll down to explore the timeline of my educational journey.
        </p>

        {/* Scroll Button */}
        {isIntroVisible && !isLastCardVisible && (
          <button
            onClick={() => {
              const nextSection = document.getElementById("timeline-start");
              if (nextSection) nextSection.scrollIntoView({ behavior: "smooth" });
            }}
            className="absolute bottom-10 flex flex-col items-center animate-bounce"
          >
            <span className="text-gray-300 text-sm mb-1">Scroll</span>
            <svg
              className="w-6 h-6 text-yellow-500"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        )}
      </div>

      {/* Timeline Journey Cards */}
      {EDUCATION_TIMELINE.map((timeline, index) => (
        <div
          key={timeline.id}
          id={index === 0 ? "timeline-start" : undefined}
          ref={index === EDUCATION_TIMELINE.length - 1 ? lastCardRef : null}
          className="snap-center h-screen flex justify-center items-center px-4 sm:px-8 md:px-16"
        >
          <TimelineCard
            title={timeline.title}
            institution={timeline.institution}
            date={timeline.duration}
            description={timeline.description}
          />
        </div>
      ))}
    </section>
  );
};

export default Education;
