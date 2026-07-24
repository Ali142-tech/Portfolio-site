import ContentCard from "./ContentCard";

export default function ServiceCard({ service }) {
  return (
    <ContentCard>
      <h4 className="mb-3">{service.title}</h4>
      <p className="mb-0">{service.text}</p>
    </ContentCard>
  );
}
