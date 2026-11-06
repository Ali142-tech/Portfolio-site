import Link from "next/link";
import PageBanner from "../../components/PageBanner";
import BgLines from "../../components/BgLines";
import { notFound } from "next/navigation";
import { profile } from "../../data/profile";

export default async function ProjectDetailsPage({ params }) {
  const { slug } = await params;
  const project = profile.projects.find((item) => item.slug === slug);
  if (!project) return notFound();

  const gallery = project.gallery?.length
    ? project.gallery
    : [{ src: project.image, label: project.title }];

  const highlights = project.highlights?.length
    ? project.highlights
    : profile.aboutHighlights;

  return (
    <main>
      <PageBanner title="Project Details" breadcrumb={project.title} />

      <section className="project-details-area pb-130 rpb-100 rel z-1">
        <div className="container">
          <div className="project-details-content">
            <div className="image mb-35">
              <img src={gallery[0].src} alt={gallery[0].label || project.title} />
            </div>

            {gallery.length > 1 ? (
              <div className="row mb-50">
                {gallery.slice(1).map((shot) => (
                  <div className="col-md-6 col-lg-4 mb-30" key={shot.src}>
                    <div className="project-gallery-item">
                      <img src={shot.src} alt={shot.label || project.title} />
                      {shot.label ? (
                        <span className="sub-title mt-15 d-block">{shot.label}</span>
                      ) : null}
                    </div>
                  </div>
                ))}
              </div>
            ) : null}

            <div className="section-title mb-30">
              <span className="sub-title mb-15">{project.tag}</span>
              <h2>{project.title}</h2>
              {project.url ? (
                <p className="mt-15 mb-0">
                  Live Project:{" "}
                  <a href={project.url} target="_blank" rel="noreferrer" className="live-link">
                    {project.url}
                  </a>
                </p>
              ) : null}
            </div>
            <p>{project.description}</p>
            <p className="mt-20">
              {project.details ||
                "This project reflects my full stack approach — practical UI, clean backend logic, and features that solve real user problems. Built with a focus on usability, maintainability, and delivery speed."}
            </p>
            <ul className="list-style-one two-column mt-30 mb-40">
              {highlights.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            {project.technologies?.length ? (
              <div className="mb-40">
                <h4 className="mb-20">Technologies Used</h4>
                <ul className="list-style-one two-column">
                  {project.technologies.map((tech) => (
                    <li key={tech}>{tech}</li>
                  ))}
                </ul>
              </div>
            ) : null}
            <div className="d-flex flex-wrap gap-3">
              {project.url ? (
                <a href={project.url} target="_blank" rel="noreferrer" className="theme-btn">
                  Visit Live Site <i className="far fa-angle-right" />
                </a>
              ) : null}
              <Link href="/contact" className="theme-btn style-two">
                Start A Project <i className="far fa-angle-right" />
              </Link>
            </div>
          </div>
        </div>
        <BgLines />
      </section>
    </main>
  );
}
