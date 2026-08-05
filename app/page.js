import Link from "next/link";
import BgLines from "./components/BgLines";
import ProjectSlider from "./components/ProjectSlider";
import { profile } from "./data/profile";

export default function HomePage() {
  return (
    <main>
      <section className="main-hero-area pt-150 pb-100 rel z-1">
        <div className="hero-atmosphere" aria-hidden="true">
          <span className="hero-orb hero-orb-a" />
          <span className="hero-orb hero-orb-b" />
          <span className="hero-grid" />
        </div>
        <div className="container container-1620">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="hero-content rmb-55 wow fadeInUp delay-0-2s">
                <p className="hero-kicker">
                  <span className="hero-kicker-dot" />
                  {profile.title} · Lahore
                </p>
                <h1 className="hero-name">
                  Muhammad
                  <span>Ali Butt</span>
                </h1>
                <p className="hero-lede">{profile.heroText}</p>
                <div className="hero-btns">
                  <Link href="/contact" className="theme-btn">
                    Hire Me <i className="far fa-angle-right" />
                  </Link>
                  <a
                    href={profile.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-ghost"
                  >
                    View LinkedIn
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="author-image-part wow fadeIn delay-0-3s">
                <div className="portrait-glow" />
                <div className="portrait-ring" />
                <div className="bg-circle" />
                <img src={profile.photo} alt={profile.name} />
              </div>
            </div>
          </div>
          <div className="hero-metrics wow fadeInUp delay-0-4s">
            <div className="metric">
              <strong>{profile.stats.years}+</strong>
              <span>Years experience</span>
            </div>
            <div className="metric">
              <strong>{profile.stats.projects}+</strong>
              <span>Shipped projects</span>
            </div>
            <div className="metric">
              <strong>{profile.stats.satisfaction}%</strong>
              <span>Client satisfaction</span>
            </div>
          </div>
        </div>
      </section>

      <section className="about-area rel z-1">
        <div className="for-bgc-black py-130 rpy-100">
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
                  <div className="about-btn btn-one wow fadeInRight delay-0-4s">
                    <img src="/assets/images/btn-image1.png" alt={profile.title} />
                    <h6>{profile.title}</h6>
                    <i className="fas fa-arrow-right" />
                  </div>
                  <div className="about-btn btn-two wow fadeInRight delay-0-5s">
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

      <section className="resume-area pt-130 rpt-100 rel z-1">
        <div className="container">
          <div className="row">
            <div className="col-lg-3">
              <div className="big-icon mt-85 rmt-0 rmb-55 wow fadeInUp delay-0-2s">
                <i className="flaticon-asterisk-1" />
              </div>
            </div>
            <div className="col-lg-9">
              <div className="row">
                <div className="col-xl-8 col-lg-9">
                  <div className="section-title mb-60 wow fadeInUp delay-0-2s">
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
                      <div className="resume-item wow fadeInUp delay-0-3s">
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

              <div className="section-title mt-70 mb-60 wow fadeInUp delay-0-2s">
                <span className="sub-title mb-15">Education</span>
                <h2>
                  Academic <span>Background</span>
                </h2>
              </div>
              <div className="resume-items-wrap">
                <div className="row justify-content-between">
                  {profile.education.map((item) => (
                    <div className="col-xl-5 col-md-6" key={item.title + item.school}>
                      <div className="resume-item wow fadeInUp delay-0-3s">
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
            </div>
          </div>
        </div>
        <BgLines />
      </section>

      <section className="services-area pt-130 rpt-100 pb-100 rpb-70 rel z-1">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-6 col-lg-8">
              <div className="section-title text-center mb-60 wow fadeInUp delay-0-2s">
                <span className="sub-title mb-15">Popular Services</span>
                <h2>
                  My <span>Special Service</span> For Your Product Growth
                </h2>
              </div>
            </div>
          </div>
          <div className="row">
            {profile.services.map((service) => (
              <div className="col-lg-6" key={service.number}>
                <div className="service-item wow fadeInUp delay-0-2s">
                  <div className="number">{service.number}</div>
                  <div className="content">
                    <h4>{service.title}</h4>
                    <p>{service.text}</p>
                  </div>
                  <Link href="/services" className="details-btn">
                    <i className="fas fa-arrow-right" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
        <BgLines />
      </section>

      <section className="skill-area rel z-1">
        <div className="for-bgc-black pt-130 rpt-100 pb-100 rpb-70">
          <div className="container">
            <div className="row gap-100">
              <div className="col-lg-5">
                <div className="skill-content-part rel z-2 rmb-55 wow fadeInUp delay-0-2s">
                  <div className="section-title mb-40">
                    <span className="sub-title mb-15">My Skills</span>
                    <h2>
                      Let&apos;s Explore My <span>Skills &amp; Stack</span>
                    </h2>
                    <p>
                      My core stack is React.js, Node.js, Express, MongoDB, Laravel, PHP, MySQL,
                      and Docker — covering MERN and Laravel full stack builds end to end.
                    </p>
                  </div>
                  <Link href="/about" className="theme-btn">
                    Learn More <i className="far fa-angle-right" />
                  </Link>
                </div>
              </div>
              <div className="col-lg-7">
                <div className="skill-items-wrap">
                  <div className="row">
                    {profile.skills.map((skill) => (
                      <div
                        className="col-xl-3 col-lg-4 col-md-3 col-sm-4 col-6"
                        key={skill.name}
                      >
                        <div className="skill-item wow fadeInUp delay-0-2s">
                          <img src={skill.image} alt={skill.name} />
                          <h5>{skill.name}</h5>
                          <span className="percent">{skill.percent}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <BgLines />
      </section>

      <section className="projects-area pt-130 rpt-100 pb-100 rpb-70 rel z-1">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-10">
              <div className="section-title text-center mb-60 wow fadeInUp delay-0-2s">
                <span className="sub-title mb-15">Latest Works</span>
                <h2>
                  Selected <span>Projects</span>
                </h2>
              </div>
            </div>
          </div>
          <ProjectSlider projects={profile.projects} />
          <div className="project-btn text-center mt-50 wow fadeInUp delay-0-2s">
            <Link href="/projects" className="theme-btn">
              View All Projects <i className="far fa-angle-right" />
            </Link>
          </div>
        </div>
      </section>

      <section className="contact-area pt-95 pb-130 rpt-70 rpb-100 rel z-1">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div className="contact-content-part pt-5 rpt-0 rmb-55 wow fadeInUp delay-0-2s">
                <div className="section-title mb-40">
                  <span className="sub-title mb-15">Get In Touch</span>
                  <h2>
                    Let&apos;s Talk For your <span>Next Projects</span>
                  </h2>
                  <p>
                    Have an idea, product, or feature in mind? Reach out and let&apos;s build it
                    with a clean full stack approach.
                  </p>
                </div>
                <ul className="list-style-two">
                  {profile.contactPoints.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="col-lg-8">
              <div className="contact-form contact-form-wrap form-style-one wow fadeInUp delay-0-4s">
                <form action={`mailto:${profile.email}`} method="post" encType="text/plain">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <label htmlFor="name">Full Name</label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          className="form-control"
                          placeholder="Your name"
                          required
                        />
                        <label htmlFor="name" className="for-icon">
                          <i className="far fa-user" />
                        </label>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label htmlFor="email">Email Address</label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          className="form-control"
                          placeholder="you@email.com"
                          required
                        />
                        <label htmlFor="email" className="for-icon">
                          <i className="far fa-envelope" />
                        </label>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label htmlFor="phone_number">Phone Number</label>
                        <input
                          type="text"
                          id="phone_number"
                          name="phone_number"
                          className="form-control"
                          placeholder="Optional"
                        />
                        <label htmlFor="phone_number" className="for-icon">
                          <i className="far fa-phone" />
                        </label>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label htmlFor="subject">Subject</label>
                        <input
                          type="text"
                          id="subject"
                          name="subject"
                          className="form-control"
                          placeholder="Project inquiry"
                          required
                        />
                        <label htmlFor="subject" className="for-icon">
                          <i className="far fa-text" />
                        </label>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-group">
                        <label htmlFor="message">Message</label>
                        <textarea
                          name="message"
                          id="message"
                          className="form-control"
                          rows={4}
                          placeholder="Tell me about your project"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-group mb-0">
                        <button type="submit" className="theme-btn">
                          Send Us Message <i className="far fa-angle-right" />
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <BgLines />
      </section>

      <section className="blog-area rel z-1">
        <div className="for-bgc-black pt-130 pb-100 rpt-100 rpb-70">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-xl-12">
                <div className="section-title text-center mb-60 wow fadeInUp delay-0-2s">
                  <span className="sub-title mb-15">News &amp; Blog</span>
                  <h2>
                    Latest Learning &amp; <span>Notes</span>
                  </h2>
                </div>
              </div>
            </div>
            <div className="row">
              {profile.blogs.map((blog) => (
                <div className="col-lg-6" key={blog.title}>
                  <div className="blog-item wow fadeInUp delay-0-2s">
                    <div className="image">
                      <img src={blog.image} alt={blog.title} />
                    </div>
                    <div className="content">
                      <div className="blog-meta mb-35">
                        {blog.tags.map((tag) => (
                          <span className="tag" key={tag}>
                            {tag}
                          </span>
                        ))}
                      </div>
                      <h5>
                        <a href={profile.linkedin} target="_blank" rel="noreferrer">
                          {blog.title}
                        </a>
                      </h5>
                      <hr />
                      <div className="blog-meta mt-35">
                        <span className="date">
                          <i className="far fa-calendar-alt" /> From LinkedIn
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <BgLines />
      </section>

      <section className="tech-strip rel z-1 pt-80 pb-100">
        <div className="container">
          <div className="tech-strip-inner wow fadeInUp delay-0-2s">
            <p className="tech-strip-label">Building with</p>
            <ul className="tech-strip-list">
              {["React", "Next.js", "Laravel", "MySQL", "Node.js", "Tailwind"].map((tech) => (
                <li key={tech}>{tech}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
