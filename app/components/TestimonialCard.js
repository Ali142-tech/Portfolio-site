import ContentCard from "./ContentCard";

export default function TestimonialCard({ testimonial }) {
  return (
    <ContentCard>
      <img src={testimonial.image} alt={testimonial.name} className="mb-3" />
      <p>{testimonial.quote}</p>
      <strong>{testimonial.name}</strong>
    </ContentCard>
  );
}
