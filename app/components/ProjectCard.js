import Link from "next/link";
import ContentCard from "./ContentCard";

export default function ProjectCard({ project }) {
  return (
    <ContentCard>
      <div className="mb-3">
        <img src={project.image} alt={project.title} />
      </div>
      <span className="eyebrow">{project.tag ?? "Portfolio"}</span>
      <h3 className="mb-3">{project.title}</h3>
      {project.href ? (
        <Link href={project.href} className="theme-btn">
          View Project <i className="far fa-angle-right" />
        </Link>
      ) : null}
    </ContentCard>
  );
}
