import Link from "next/link";
import PageBanner from "../components/PageBanner";
import BgLines from "../components/BgLines";
import { profile } from "../data/profile";

export default function ServicesPage() {
  return (
    <main>
      <PageBanner title="Popular Services" />

      <section className="services-area pb-100 rpb-70 rel z-1">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-6 col-lg-8">
              <div className="section-title text-center mb-60">
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
                <div className="service-item">
                  <div className="number">{service.number}</div>
                  <div className="content">
                    <h4>{service.title}</h4>
                    <p>{service.text}</p>
                  </div>
                  <Link href="/contact" className="details-btn">
                    <i className="fas fa-arrow-right" />
                  </Link>
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
