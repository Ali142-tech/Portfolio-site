import Link from "next/link";
import PageBanner from "../components/PageBanner";
import ProjectShowcase from "../components/ProjectShowcase";
import { profile } from "../data/profile";

export default function ProjectsPage() {
  return (
    <main>
      <PageBanner title="Projects" />

      <section className="projects-area pb-120 rpb-80 rel z-1">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-8">
              <div className="section-title text-center mb-70 wow fadeInUp delay-0-2s">
                <span className="sub-title mb-15">Portfolio</span>
                <h2>
                  Work I&apos;ve <span>shipped</span>
                </h2>
              </div>
            </div>
          </div>
          <ProjectShowcase projects={profile.projects} />
          <div className="project-btn text-center mt-70 wow fadeInUp delay-0-2s">
            <Link href="/contact" className="theme-btn">
              Start a Project <i className="far fa-angle-right" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
