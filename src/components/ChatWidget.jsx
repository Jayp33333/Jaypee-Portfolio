import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FaTimes, FaPaperPlane, FaRegCommentDots } from "react-icons/fa";
import avatar from "../assets/images/jaypee.jpg";

const SUGGESTIONS = [
  "What do you do?",
  "Tell me about IskaVT",
  "What's your tech stack?",
  "How can I contact you?",
];

const GREETING = {
  role: "assistant",
  content: "Hi! I'm Jaypee's assistant. Ask me anything about his work, projects, or skills.",
};

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([GREETING]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, loading, open]);

  useEffect(() => {
    if (open) inputRef.current?.focus();
  }, [open]);

  async function send(text) {
    const content = (text ?? input).trim();
    if (!content || loading) return;

    const next = [...messages, { role: "user", content }];
    setMessages(next);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: next.filter((m) => m !== GREETING),
        }),
      });
      const data = await res.json();

      if (!res.ok) {
        throw new Error(data?.error || "Request failed");
      }

      setMessages((prev) => [...prev, { role: "assistant", content: data.reply }]);
    } catch (err) {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content:
            "Sorry, I'm having trouble responding right now. You can reach Jaypee directly at johnpauljamito5@gmail.com.",
          error: true,
        },
      ]);
    } finally {
      setLoading(false);
    }
  }

  function onSubmit(e) {
    e.preventDefault();
    send();
  }

  return (
    <>
      {/* Launcher button */}
      <motion.button
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? "Close chat" : "Chat with Jaypee"}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.6, type: "spring", stiffness: 260, damping: 20 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className={`fixed bottom-5 right-5 z-50 flex h-14 items-center justify-center gap-2.5 rounded-full bg-gray-900 text-white shadow-lg shadow-gray-900/20 transition-colors hover:bg-gray-800 sm:bottom-6 sm:right-6 dark:bg-white dark:text-gray-900 dark:hover:bg-gray-100 ${
          open ? "w-14" : "px-5"
        }`}
      >
        <AnimatePresence mode="wait" initial={false}>
          {open ? (
            <motion.span
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.15 }}
            >
              <FaTimes size={20} />
            </motion.span>
          ) : (
            <motion.span
              key="open"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.15 }}
              className="flex items-center gap-2.5"
            >
              <FaRegCommentDots size={22} />
              <span className="font-heading text-[14px] font-semibold">
                Chat with Jaypee
              </span>
            </motion.span>
          )}
        </AnimatePresence>
      </motion.button>

      {/* Chat panel */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.96 }}
            transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="fixed bottom-24 right-4 z-50 flex h-[min(560px,75vh)] w-[calc(100vw-2rem)] max-w-[380px] flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-2xl shadow-gray-900/10 sm:right-6 dark:border-white/10 dark:bg-[#111114]"
          >
            {/* Header */}
            <div className="flex items-center gap-3 border-b border-gray-100 px-4 py-3 dark:border-white/10">
              <img
                src={avatar}
                alt="Jaypee"
                className="h-9 w-9 rounded-full object-cover ring-1 ring-gray-200 dark:ring-white/10"
              />
              <div className="min-w-0 flex-1">
                <h3 className="font-heading text-[14px] font-bold text-gray-900 dark:text-white">
                  John Paul Jamito
                </h3>
                <p className="flex items-center gap-1.5 text-[11px] text-gray-500 dark:text-gray-400">
                  <span className="h-1.5 w-1.5 rounded-full bg-green-500" /> Online
                </p>
              </div>
              <button
                onClick={() => setOpen(false)}
                aria-label="Close chat"
                className="flex h-7 w-7 items-center justify-center rounded-md text-gray-400 transition-colors hover:bg-gray-100 hover:text-gray-700 dark:hover:bg-white/10 dark:hover:text-gray-200"
              >
                <FaTimes size={14} />
              </button>
            </div>

            {/* Messages */}
            <div ref={scrollRef} className="flex-1 space-y-3 overflow-y-auto px-4 py-4">
              {messages.map((m, i) => (
                <div
                  key={i}
                  className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[85%] whitespace-pre-wrap rounded-2xl px-3.5 py-2 text-[13px] leading-relaxed ${
                      m.role === "user"
                        ? "rounded-br-sm bg-gray-900 text-white dark:bg-white dark:text-gray-900"
                        : m.error
                        ? "rounded-bl-sm bg-red-50 text-red-700 dark:bg-red-500/10 dark:text-red-300"
                        : "rounded-bl-sm bg-gray-100 text-gray-900 dark:bg-white/[0.07] dark:text-gray-100"
                    }`}
                  >
                    {m.content}
                  </div>
                </div>
              ))}

              {loading && (
                <div className="flex justify-start">
                  <div className="flex items-center gap-1 rounded-2xl rounded-bl-sm bg-gray-100 px-4 py-3 dark:bg-white/[0.07]">
                    {[0, 1, 2].map((d) => (
                      <motion.span
                        key={d}
                        className="h-1.5 w-1.5 rounded-full bg-gray-400 dark:bg-gray-500"
                        animate={{ opacity: [0.3, 1, 0.3] }}
                        transition={{ duration: 1, repeat: Infinity, delay: d * 0.2 }}
                      />
                    ))}
                  </div>
                </div>
              )}

              {/* Suggestions (only before the first user message) */}
              {messages.length === 1 && !loading && (
                <div className="flex flex-wrap gap-2 pt-1">
                  {SUGGESTIONS.map((s) => (
                    <button
                      key={s}
                      onClick={() => send(s)}
                      className="rounded-full border border-gray-200 px-3 py-1.5 text-[12px] font-medium text-gray-700 transition-colors hover:border-gray-900 hover:text-gray-900 dark:border-white/15 dark:text-gray-300 dark:hover:border-white dark:hover:text-white"
                    >
                      {s}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Input */}
            <form
              onSubmit={onSubmit}
              className="flex items-center gap-2 border-t border-gray-100 p-3 dark:border-white/10"
            >
              <input
                ref={inputRef}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask me anything..."
                className="min-w-0 flex-1 rounded-lg border border-gray-200 bg-gray-50 px-3 py-2 text-[13px] text-gray-900 outline-none transition-colors placeholder:text-gray-400 focus:border-gray-900 dark:border-white/10 dark:bg-white/[0.04] dark:text-gray-100 dark:focus:border-white/40"
              />
              <button
                type="submit"
                disabled={!input.trim() || loading}
                aria-label="Send message"
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-gray-900 text-white transition-colors hover:bg-gray-800 disabled:opacity-40 dark:bg-white dark:text-gray-900 dark:hover:bg-gray-100"
              >
                <FaPaperPlane size={13} />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
