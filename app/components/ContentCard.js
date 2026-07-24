export default function ContentCard({ children, className = "" }) {
  return <div className={`content-card ${className}`.trim()}>{children}</div>;
}
