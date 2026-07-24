export default function BgLines() {
  return (
    <div className="bg-lines">
      {Array.from({ length: 10 }).map((_, i) => (
        <span key={i} />
      ))}
    </div>
  );
}
