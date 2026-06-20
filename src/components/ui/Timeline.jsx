import { motion } from "framer-motion";

export default function Timeline({ items, renderItem, getCurrent = (item) => item.current }) {
  return (
    <ol className="relative ml-0.5 space-y-5 border-l border-gray-200 pl-5 dark:border-white/15">
      {items.map((item, i) => {
        const isCurrent = getCurrent(item);
        return (
          <motion.li
            key={i}
            initial={{ opacity: 0, x: 8 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35, delay: i * 0.07 }}
            className="relative"
          >
            <span
              className={`absolute -left-5 top-1.5 z-10 h-2.5 w-2.5 -translate-x-1/2 rounded-[3px] border ${
                isCurrent
                  ? "border-gray-900 bg-gray-900 dark:border-white dark:bg-white"
                  : "border-gray-300 bg-white dark:border-white/30 dark:bg-[#0a0a0c]"
              }`}
            />
            {renderItem(item, isCurrent)}
          </motion.li>
        );
      })}
    </ol>
  );
}
