export default function SectionPanel({ id, className = "", children }) {
  return (
    <section id={id} className={`section-panel scroll-mt-20 ${className}`.trim()}>
      {children}
    </section>
  );
}
