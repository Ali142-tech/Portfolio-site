import PageBanner from "../components/PageBanner";
import BgLines from "../components/BgLines";
import { profile } from "../data/profile";

export default function ContactPage() {
  return (
    <main>
      <PageBanner title="Contact Us" />

      <section className="contact-area pb-130 rpb-100 rel z-1">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div className="contact-content-part pt-5 rpt-0 rmb-55">
                <div className="section-title mb-40">
                  <span className="sub-title mb-15">Get In Touch</span>
                  <h2>
                    Let&apos;s Talk For your <span>Next Projects</span>
                  </h2>
                  <p>
                    Email me at <a href={`mailto:${profile.email}`}>{profile.email}</a> or call{" "}
                    <a href={`tel:${profile.phone}`}>{profile.phoneDisplay}</a>.
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
              <div className="contact-form contact-form-wrap form-style-one">
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
    </main>
  );
}
