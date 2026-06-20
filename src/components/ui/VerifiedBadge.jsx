export default function VerifiedBadge({ size = 20, className = "" }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`inline-block shrink-0 text-brand-primary dark:text-brand-secondary ${className}`}
      role="img"
      aria-label="Verified"
    >
      <path
        fill="currentColor"
        d="M12 2c.45 0 .87.16 1.2.44l1.65 1.3 2.05-.27c.36-.05.72.08.99.33.27.25.41.61.38.98l-.27 2.05 1.3 1.65c.28.33.44.75.44 1.2s-.16.87-.44 1.2l-1.3 1.65.27 2.05c.03.37-.11.73-.38.98-.27.25-.63.38-.99.33l-2.05-.27-1.65 1.3c-.33.28-.75.44-1.2.44s-.87-.16-1.2-.44l-1.65-1.3-2.05.27c-.36.05-.72-.08-.99-.33-.27-.25-.41-.61-.38-.98l.27-2.05-1.3-1.65c-.28-.33-.44-.75-.44-1.2s.16-.87.44-1.2l1.3-1.65-.27-2.05c-.03-.37.11-.73.38-.98.27-.25.63-.38.99-.33l2.05.27 1.65-1.3C11.13 2.16 11.55 2 12 2z"
      />
      <g transform="translate(12 10) scale(0.62)">
        <path
          d="M-3.5 0.5 L-1 3 L 3.5 -3"
          stroke="white"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
      </g>
    </svg>
  );
}
