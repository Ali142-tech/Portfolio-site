import Link from "next/link";
import PageBanner from "../components/PageBanner";
import BgLines from "../components/BgLines";
import { profile } from "../data/profile";

export default function ProjectsPage() {
  return (
    <main>
      <PageBanner title="Projects Grid" />

      <section className="projects-area pb-100 rpb-70 rel z-1">
        <div className="container">
          <div className="row">
            {profile.projects.map((project) => (
              <div className="col-lg-6 mb-50" key={project.slug}>
                <div className="project-item style-two">
                  <div className="project-image">
                    <img src={project.image} alt={project.title} />
                    <Link href={`/projects/${project.slug}`} className="details-btn">
                      <i className="far fa-arrow-right" />
                    </Link>
                  </div>
                  <div className="project-content">
                    <span className="sub-title">{project.tag}</span>
                    <h3>
                      <Link href={`/projects/${project.slug}`}>{project.title}</Link>
                    </h3>
                    {project.url ? (
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noreferrer"
                        className="read-more mt-15 d-inline-block"
                      >
                        {project.url.replace(/^https?:\/\//, "").replace(/\/$/, "")}{" "}
                        <i className="far fa-external-link" />
                      </a>
                    ) : null}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <BgLines />
      </section>
    </main>
  );
}
