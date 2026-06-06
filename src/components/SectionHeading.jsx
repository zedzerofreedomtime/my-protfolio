export default function SectionHeading({ label, title, children }) {
  return (
    <div className="section-heading">
      <p className="section-heading__label">{label}</p>
      <div className="section-heading__line" />
      <h2>{title}</h2>
      {children ? <p className="section-heading__copy">{children}</p> : null}
    </div>
  );
}
