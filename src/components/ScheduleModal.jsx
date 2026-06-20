import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "framer-motion";
import {
  FaTimes,
  FaRegCalendarCheck,
  FaRegCalendarPlus,
  FaEnvelope,
  FaCheckCircle,
  FaSpinner,
} from "react-icons/fa";
import { profile } from "../data/portfolio";

const WEB3FORMS_KEY = import.meta.env.VITE_WEB3FORMS_KEY;

const ScheduleContext = createContext(null);

export function useSchedule() {
  const ctx = useContext(ScheduleContext);
  if (!ctx) throw new Error("useSchedule must be used within ScheduleProvider");
  return ctx;
}

const DURATION_MIN = 30;

function pad(n) {
  return String(n).padStart(2, "0");
}

// Google Calendar expects UTC timestamps like 20260620T010000Z
function toGCalUTC(date) {
  return (
    date.getUTCFullYear() +
    pad(date.getUTCMonth() + 1) +
    pad(date.getUTCDate()) +
    "T" +
    pad(date.getUTCHours()) +
    pad(date.getUTCMinutes()) +
    "00Z"
  );
}

function buildLinks({ name, email, date, time, topic }) {
  const start = new Date(`${date}T${time}`);
  const end = new Date(start.getTime() + DURATION_MIN * 60000);
  const pretty = start.toLocaleString(undefined, {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit",
  });

  const title = `Call with ${profile.shortName}${name ? ` & ${name}` : ""}`;
  const detailLines = [
    "Call request from the portfolio website.",
    name && `Name: ${name}`,
    email && `Email: ${email}`,
    `Preferred time: ${pretty}`,
    topic && `Topic: ${topic}`,
  ].filter(Boolean);

  const gcal =
    "https://calendar.google.com/calendar/render?action=TEMPLATE" +
    `&text=${encodeURIComponent(title)}` +
    `&dates=${toGCalUTC(start)}/${toGCalUTC(end)}` +
    `&details=${encodeURIComponent(detailLines.join("\n"))}` +
    `&add=${encodeURIComponent(profile.email)}`;

  const subject = `Call request${name ? ` from ${name}` : ""} — ${pretty}`;
  const body = [
    `Hi ${profile.shortName},`,
    "",
    "I'd like to schedule a call with you.",
    "",
    `Preferred time: ${pretty}`,
    topic ? `Topic: ${topic}` : null,
    name ? `Name: ${name}` : null,
    email ? `Email: ${email}` : null,
    "",
    "Thanks!",
  ]
    .filter((l) => l !== null)
    .join("\n");

  const mailto = `mailto:${profile.email}?subject=${encodeURIComponent(
    subject
  )}&body=${encodeURIComponent(body)}`;

  return { gcal, mailto, pretty };
}

const EMPTY = { name: "", email: "", date: "", time: "", topic: "" };

function Modal({ onClose }) {
  const [form, setForm] = useState(EMPTY);
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState(false);

  const today = new Date().toISOString().split("T")[0];
  const valid = form.date && form.time;

  const links = useMemo(
    () => (valid ? buildLinks(form) : null),
    [form, valid]
  );

  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  function set(field) {
    return (e) => setForm((f) => ({ ...f, [field]: e.target.value }));
  }

  async function onSubmit(e) {
    e.preventDefault();
    if (!valid || sending) return;
    setError(false);

    // No key configured: fall back to opening the visitor's email app.
    if (!WEB3FORMS_KEY) {
      window.location.href = links.mailto;
      setSent(true);
      return;
    }

    setSending(true);
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          subject: `New call request${form.name ? ` from ${form.name}` : ""} — ${links.pretty}`,
          from_name: form.name || "Portfolio visitor",
          ...(form.email ? { email: form.email, replyto: form.email } : {}),
          "Preferred time": links.pretty,
          Name: form.name || "—",
          "Visitor email": form.email || "—",
          Topic: form.topic || "—",
        }),
      });
      const data = await res.json();
      if (!data.success) throw new Error(data.message || "Failed");
      setSent(true);
    } catch (err) {
      setError(true);
    } finally {
      setSending(false);
    }
  }

  return (
    <motion.div
      className="fixed inset-0 z-[60] flex items-center justify-center p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div
        className="absolute inset-0 bg-gray-900/40 backdrop-blur-sm dark:bg-black/60"
        onClick={onClose}
      />

      <motion.div
        role="dialog"
        aria-modal="true"
        aria-label="Schedule a call"
        initial={{ opacity: 0, y: 24, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 24, scale: 0.97 }}
        transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 w-full max-w-md overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-2xl dark:border-white/10 dark:bg-[#111114]"
      >
        <div className="flex items-center justify-between border-b border-gray-100 px-5 py-4 dark:border-white/10">
          <div className="flex items-center gap-2.5">
            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-gray-900 text-white dark:bg-white dark:text-gray-900">
              <FaRegCalendarCheck size={15} />
            </span>
            <div>
              <h3 className="font-heading text-[15px] font-bold text-gray-900 dark:text-white">
                Schedule a Call
              </h3>
              <p className="text-[12px] text-gray-500 dark:text-gray-400">
                {DURATION_MIN}-minute call with {profile.shortName}
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            aria-label="Close"
            className="flex h-7 w-7 items-center justify-center rounded-md text-gray-400 transition-colors hover:bg-gray-100 hover:text-gray-700 dark:hover:bg-white/10 dark:hover:text-gray-200"
          >
            <FaTimes size={14} />
          </button>
        </div>

        {sent ? (
          <div className="px-5 py-7 text-center">
            <FaCheckCircle className="mx-auto text-green-500" size={36} />
            <h4 className="mt-3 font-heading text-[16px] font-bold text-gray-900 dark:text-white">
              Request sent!
            </h4>
            <p className="mx-auto mt-1.5 max-w-xs text-[13px] leading-relaxed text-gray-600 dark:text-gray-300">
              {WEB3FORMS_KEY
                ? `${profile.shortName} has received your request and will get back to you soon. You can also add this call to your calendar:`
                : `Your email request to ${profile.shortName} should have opened. You can also add this call to your calendar:`}
            </p>
            <div className="mt-4 flex flex-col gap-2">
              <a
                href={links.gcal}
                target="_blank"
                rel="noreferrer"
                className="btn-dark w-full"
              >
                <FaRegCalendarPlus size={13} /> Add to Google Calendar
              </a>
              <button onClick={onClose} className="btn-outline w-full">
                Done
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={onSubmit} className="px-5 py-4">
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              <Field label="Your name">
                <input
                  type="text"
                  value={form.name}
                  onChange={set("name")}
                  placeholder="Juan Dela Cruz"
                  className={inputCls}
                />
              </Field>
              <Field label="Your email">
                <input
                  type="email"
                  value={form.email}
                  onChange={set("email")}
                  placeholder="juandelacruz@gmail.com"
                  className={inputCls}
                />
              </Field>
              <Field label="Preferred date" required>
                <input
                  type="date"
                  min={today}
                  value={form.date}
                  onChange={set("date")}
                  required
                  className={inputCls}
                />
              </Field>
              <Field label="Preferred time" required>
                <input
                  type="time"
                  value={form.time}
                  onChange={set("time")}
                  required
                  className={inputCls}
                />
              </Field>
            </div>

            <div className="mt-3">
              <Field label="What's it about?">
                <textarea
                  rows={3}
                  value={form.topic}
                  onChange={set("topic")}
                  placeholder="Project collaboration, job opportunity, 3D work..."
                  className={`${inputCls} resize-none`}
                />
              </Field>
            </div>

            <button
              type="submit"
              disabled={!valid || sending}
              className="btn-dark mt-4 w-full disabled:opacity-40"
            >
              {sending ? (
                <>
                  <FaSpinner size={13} className="animate-spin" /> Sending...
                </>
              ) : (
                <>
                  <FaEnvelope size={13} /> Send Request
                </>
              )}
            </button>

            {error && (
              <p className="mt-2 text-center text-[12px] text-red-500">
                Couldn't send automatically.{" "}
                <a href={links.mailto} className="font-semibold underline">
                  Send via email instead
                </a>
              </p>
            )}

            <p className="mt-2 text-center text-[11px] text-gray-400">
              {WEB3FORMS_KEY
                ? `Sends your request straight to ${profile.shortName}`
                : `Opens a pre-filled email to ${profile.email}`}
            </p>
          </form>
        )}
      </motion.div>
    </motion.div>
  );
}

const inputCls =
  "w-full rounded-lg border border-gray-200 bg-gray-50 px-3 py-2 text-[13px] text-gray-900 outline-none transition-colors placeholder:text-gray-400 focus:border-gray-900 dark:border-white/10 dark:bg-white/[0.04] dark:text-gray-100 dark:focus:border-white/40";

function Field({ label, required, children }) {
  return (
    <label className="block">
      <span className="mb-1 block text-[12px] font-medium text-gray-700 dark:text-gray-300">
        {label}
        {required && <span className="text-red-500"> *</span>}
      </span>
      {children}
    </label>
  );
}

export function ScheduleProvider({ children }) {
  const [open, setOpen] = useState(false);
  const value = useMemo(
    () => ({ open: () => setOpen(true), close: () => setOpen(false) }),
    []
  );

  return (
    <ScheduleContext.Provider value={value}>
      {children}
      {createPortal(
        <AnimatePresence>
          {open && <Modal onClose={() => setOpen(false)} />}
        </AnimatePresence>,
        document.body
      )}
    </ScheduleContext.Provider>
  );
}
