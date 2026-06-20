import { motion } from "framer-motion";
import {
  FaMapMarkerAlt,
  FaRegCalendarCheck,
  FaEnvelope,
  // FaDownload,
  FaChevronRight,
} from "react-icons/fa";
import VerifiedBadge from "./ui/VerifiedBadge";
import { profile } from "../data/portfolio";
import { useSchedule } from "./ScheduleModal";
import avatar from "../assets/images/jaypee.jpg";
import morningAvatar from "../assets/images/jaypee-morning.jpg";

export default function Hero() {
  const { open } = useSchedule();

  return (
    <section id="top" className="container-x pt-8 sm:pt-10">
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="flex flex-col gap-5 sm:flex-row sm:items-start">
          <div className="relative h-36 w-36 shrink-0 overflow-hidden rounded-2xl bg-gray-100 ring-1 ring-gray-200 sm:h-44 sm:w-44 dark:bg-white/5 dark:ring-white/10">
            {/* Light mode: morning photo. Dark mode: normal photo. Crossfades on toggle. */}
            <img
              src={morningAvatar}
              alt={`${profile.name} (morning)`}
              className="absolute inset-0 h-full w-full object-cover opacity-100 transition-opacity duration-700 ease-in-out dark:opacity-0"
            />
            <img
              src={avatar}
              alt={profile.name}
              className="absolute inset-0 h-full w-full object-cover opacity-0 transition-opacity duration-700 ease-in-out dark:opacity-100"
            />
          </div>

          <div className="min-w-0 flex-1">
            <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1">
              <h1 className="font-heading text-[26px] font-bold tracking-tight text-gray-900 sm:text-[30px] dark:text-white">
                {profile.name}
              </h1>
              <VerifiedBadge className="relative top-px" />
            </div>

            <p className="mt-1 flex items-center gap-1.5 text-[13px] text-gray-900 dark:text-gray-100">
              <FaMapMarkerAlt size={11} /> {profile.location}
            </p>

            <p className="mt-1.5 text-[14px] font-medium text-gray-900 dark:text-gray-100">
              {profile.titles.join("  \\  ")}
            </p>

            <div className="mt-4 flex flex-wrap gap-2.5">
              <button type="button" onClick={open} className="btn-dark">
                <FaRegCalendarCheck size={12} /> Schedule a Call
                <FaChevronRight size={9} className="opacity-70" />
              </button>
              <a href={`mailto:${profile.email}`} className="btn-outline">
                <FaEnvelope size={12} /> Send Email
              </a>
              {/* Download Resume — re-enable when resume is ready
              <a href={profile.resume} download className="btn-outline">
                <FaDownload size={12} /> Download Resume
                <FaChevronRight size={9} className="opacity-50" />
              </a>
              */}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
