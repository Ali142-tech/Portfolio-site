import Link from "next/link";
import BgLines from "./BgLines";

export default function PageBanner({ title, breadcrumb }) {
  return (
    <section className="page-banner-area pt-150 pb-80 rel z-1">
      <div className="container">
        <div className="banner-inner pt-25 text-white text-center">
          <h1 className="page-title wow fadeInUp delay-0-2s">{title}</h1>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb justify-content-center wow fadeInUp delay-0-4s">
              <li className="breadcrumb-item">
                <Link href="/">Home</Link>
              </li>
              <li className="breadcrumb-item active">{breadcrumb ?? title}</li>
            </ol>
          </nav>
        </div>
      </div>
      <BgLines />
    </section>
  );
}
