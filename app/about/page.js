import PageBanner from "../components/PageBanner";
import BgLines from "../components/BgLines";
import Link from "next/link";
import { profile } from "../data/profile";

export default function AboutPage() {
  return (
    <main>
      <PageBanner title="About Me" />

      <section className="about-area page-about-area rel z-1">
        <div className="for-bgc-black pb-130 rpb-100">
          <div className="container">
            <div className="row gap-100 align-items-center">
              <div className="col-lg-7">
                <div className="about-content-part rel z-2 rmb-55">
                  <div className="section-title mb-35 wow fadeInUp delay-0-2s">
                    <span className="sub-title mb-15">About Me</span>
                    <h2>
                      Building <span>Scalable Web Apps</span> With React &amp; Laravel
                    </h2>
                    <p>{profile.aboutText}</p>
                  </div>
                  <ul className="list-style-one two-column wow fadeInUp delay-0-2s">
                    {profile.aboutHighlights.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  <div className="about-info-box mt-25 wow fadeInUp delay-0-2s">
                    <div className="info-box-item">
                      <i className="far fa-envelope" />
                      <div className="content">
                        <span>Email Us</span>
                        <br />
                        <a href={`mailto:${profile.email}`}>{profile.email}</a>
                      </div>
                    </div>
                    <div className="info-box-item">
                      <i className="far fa-phone" />
                      <div className="content">
                        <span>Make A Call</span>
                        <br />
                        <a href={`tel:${profile.phone}`}>{profile.phoneDisplay}</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-5">
                <div className="about-image-part wow fadeInUp delay-0-3s">
                  <img src={profile.photo} alt={profile.name} />
                  <div className="about-btn btn-one">
                    <img src="/assets/images/btn-image1.png" alt={profile.title} />
                    <h6>{profile.title}</h6>
                    <i className="fas fa-arrow-right" />
                  </div>
                  <div className="about-btn btn-two">
                    <img src={profile.photoAvatar || profile.photo} alt={profile.name} />
                    <h6>{profile.shortName}</h6>
                    <i className="fas fa-arrow-right" />
                  </div>
                  <div className="dot-shape">
                    <img src="/assets/images/about-dot.png" alt="Shape" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <BgLines />
      </section>

      <section className="resume-area pt-130 rpt-100 pb-100 rpb-70 rel z-1">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-6 col-lg-8">
              <div className="section-title text-center mb-60">
                <span className="sub-title mb-15">My Resume</span>
                <h2>
                  Real <span>Full Stack</span> Experience
                </h2>
              </div>
            </div>
          </div>
          <div className="resume-items-wrap">
            <div className="row justify-content-between">
              {profile.experience.map((item) => (
                <div className="col-xl-5 col-md-6" key={item.title + item.company + item.years}>
                  <div className="resume-item">
                    <div className="icon">
                      <i className="far fa-arrow-right" />
                    </div>
                    <div className="content">
                      <span className="years">{item.years}</span>
                      <h4>{item.title}</h4>
                      <span className="company">{item.company}</span>
                      {item.location ? (
                        <span className="resume-meta">{item.location}</span>
                      ) : null}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="section-title text-center mt-70 mb-60">
            <span className="sub-title mb-15">Education</span>
            <h2>
              Academic <span>Background</span>
            </h2>
          </div>
          <div className="resume-items-wrap">
            <div className="row justify-content-center">
              {profile.education.map((item) => (
                <div className="col-xl-5 col-md-6" key={item.title + item.school}>
                  <div className="resume-item">
                    <div className="icon">
                      <i className="far fa-graduation-cap" />
                    </div>
                    <div className="content">
                      <span className="years">{item.years}</span>
                      <h4>{item.title}</h4>
                      <span className="company">{item.school}</span>
                      {item.location ? (
                        <span className="resume-meta">{item.location}</span>
                      ) : null}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center mt-50">
            <Link href="/contact" className="theme-btn">
              Hire Me <i className="far fa-angle-right" />
            </Link>
          </div>
        </div>
        <BgLines />
      </section>
    </main>
  );
}
