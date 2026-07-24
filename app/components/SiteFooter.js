"use client";

import Link from "next/link";
import BgLines from "./BgLines";
import { profile } from "../data/profile";

export default function SiteFooter() {
  return (
    <footer className="main-footer rel z-1">
      <div className="footer-top-wrap bgc-black pt-100 pb-75">
        <div className="container">
          <div className="row">
            <div className="col-lg-2 col-md-12">
              <div className="footer-widget widget_logo wow fadeInUp delay-0-2s">
                <div className="footer-logo">
                  <Link href="/">
                    <img src="/assets/images/logo.png" alt={profile.name} />
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-7 col-md-7">
              <div className="footer-widget widget_nav_menu wow fadeInUp delay-0-4s">
                <h6 className="footer-title">Quick Link</h6>
                <ul>
                  <li>
                    <Link href="/services">Service</Link>
                  </li>
                  <li>
                    <Link href="/projects">Projects</Link>
                  </li>
                  <li>
                    <Link href="/about">About</Link>
                  </li>
                  <li>
                    <Link href="/contact">Contact</Link>
                  </li>
                </ul>
              </div>
              <div className="footer-widget widget_newsletter wow fadeInUp delay-0-4s">
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                  }}
                >
                  <label htmlFor="email-address">
                    <i className="far fa-envelope" />
                  </label>
                  <input id="email-address" type="email" placeholder="Email Address" required />
                  <button type="submit">
                    Sign Up <i className="far fa-angle-right" />
                  </button>
                </form>
              </div>
            </div>
            <div className="col-lg-3 col-md-5">
              <div className="footer-widget widget_contact_info wow fadeInUp delay-0-6s">
                <h6 className="footer-title">Address</h6>
                <ul>
                  <li>
                    <i className="far fa-map-marker-alt" /> {profile.location}
                  </li>
                  <li>
                    <i className="far fa-envelope" />{" "}
                    <a href={`mailto:${profile.email}`}>{profile.email}</a>
                  </li>
                  <li>
                    <i className="far fa-phone" />{" "}
                    <a href={`tel:${profile.phone}`}>{profile.phoneDisplay}</a>
                  </li>
                  <li>
                    <i className="fab fa-linkedin-in" />{" "}
                    <a href={profile.linkedin} target="_blank" rel="noreferrer">
                      LinkedIn Profile
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom pt-20 pb-5 rpt-25">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="copyright-text">
                <p>
                  Copyright @{new Date().getFullYear()}, <Link href="/">{profile.name}</Link> All
                  Rights Reserved
                </p>
              </div>
            </div>
            <div className="col-lg-6 text-lg-end">
              <ul className="footer-bottom-nav">
                <li>
                  <a href={profile.linkedin} target="_blank" rel="noreferrer">
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a href={`mailto:${profile.email}`}>Email</a>
                </li>
                <li>
                  <a href={`tel:${profile.phone}`}>Call</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <BgLines />
      </div>
    </footer>
  );
}
