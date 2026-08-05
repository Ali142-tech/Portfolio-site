import Link from "next/link";

function hostLabel(url) {
  return url.replace(/^https?:\/\//, "").replace(/\/$/, "");
}

function BrowserFrame({ children, href }) {
  const inner = (
    <>
      <div className="browser-chrome" aria-hidden="true">
        <span />
        <span />
        <span />
      </div>
      <div className="browser-screen">{children}</div>
    </>
  );

  if (href) {
    return (
      <a
        className="browser-frame"
        href={href}
        target={href.startsWith("http") ? "_blank" : undefined}
        rel={href.startsWith("http") ? "noreferrer" : undefined}
      >
        {inner}
      </a>
    );
  }

  return <div className="browser-frame">{inner}</div>;
}

export function FeaturedProject({ project, index = 1 }) {
  const liveHref = project.url || `/projects/${project.slug}`;

  return (
    <article className="featured-project wow fadeInUp delay-0-2s">
      <div className="featured-project-media">
        <BrowserFrame href={liveHref}>
          <img src={project.image} alt={project.title} />
        </BrowserFrame>
      </div>
      <div className="featured-project-body">
        <div className="project-meta">
          <span className="project-index">{String(index).padStart(2, "0")}</span>
          <span className="project-tag">{project.tag}</span>
        </div>
        <h3>
          <Link href={`/projects/${project.slug}`}>{project.title}</Link>
        </h3>
        <p>{project.description}</p>
        {project.highlights?.length ? (
          <ul className="project-chips">
            {project.highlights.slice(0, 4).map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        ) : null}
        <div className="project-actions">
          <Link href={`/projects/${project.slug}`} className="theme-btn">
            Case Study <i className="far fa-angle-right" />
          </Link>
          {project.url ? (
            <a href={project.url} target="_blank" rel="noreferrer" className="btn-ghost">
              {hostLabel(project.url)}
            </a>
          ) : null}
        </div>
      </div>
    </article>
  );
}

export function ProjectCard({ project, index }) {
  return (
    <article className="project-card wow fadeInUp delay-0-2s">
      <BrowserFrame href={project.url || `/projects/${project.slug}`}>
        <img src={project.image} alt={project.title} />
      </BrowserFrame>
      <div className="project-card-body">
        <div className="project-meta">
          <span className="project-index">{String(index).padStart(2, "0")}</span>
          <span className="project-tag">{project.tag}</span>
        </div>
        <h3>
          <Link href={`/projects/${project.slug}`}>{project.title}</Link>
        </h3>
        <p>{project.description}</p>
        <div className="project-actions">
          <Link href={`/projects/${project.slug}`} className="read-more">
            View details <i className="far fa-angle-right" />
          </Link>
          {project.url ? (
            <a href={project.url} target="_blank" rel="noreferrer" className="read-more">
              Live <i className="far fa-external-link" />
            </a>
          ) : null}
        </div>
      </div>
    </article>
  );
}

export default function ProjectShowcase({ projects, featured = true }) {
  if (!projects?.length) return null;

  const lead = featured ? projects[0] : null;
  const rest = featured ? projects.slice(1) : projects;

  return (
    <div className="project-showcase">
      {lead ? <FeaturedProject project={lead} index={1} /> : null}
      {rest.length ? (
        <div className="project-grid">
          {rest.map((project, i) => (
            <ProjectCard
              key={project.slug}
              project={project}
              index={(featured ? 2 : 1) + i}
            />
          ))}
        </div>
      ) : null}
    </div>
  );
}
