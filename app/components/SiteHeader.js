"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { profile } from "../data/profile";
import ThemeToggle from "./ThemeToggle";

const nav = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
];

const brand = profile.name.split(" ").slice(0, 2).join(" ");

export default function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="main-header menu-absolute">
      <div className="header-upper">
        <div className="container container-1620 clearfix">
          <div className="header-inner rel d-flex align-items-center">
            <div className="logo-outer">
              <div className="logo">
                <Link href="/" className="brand-mark">
                  {brand}
                  <span>.</span>
                </Link>
              </div>
            </div>

            <div className="nav-outer clearfix mx-auto">
              <nav className="main-menu navbar-expand-lg">
                <div className="navbar-header">
                  <div className="mobile-logo my-15">
                    <Link href="/" className="brand-mark">
                      {brand}
                      <span>.</span>
                    </Link>
                  </div>
                  <button
                    type="button"
                    className="navbar-toggle me-4"
                    aria-label="Toggle navigation"
                    onClick={() => setOpen((v) => !v)}
                  >
                    <span className="icon-bar" />
                    <span className="icon-bar" />
                    <span className="icon-bar" />
                  </button>
                </div>

                <div className={`navbar-collapse collapse clearfix${open ? " show" : ""}`}>
                  <ul className="navigation clearfix">
                    {nav.map((item) => (
                      <li key={item.href} className={pathname === item.href ? "current" : undefined}>
                        <Link href={item.href} onClick={() => setOpen(false)}>
                          {item.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </nav>
            </div>

            <div className="menu-btns d-flex align-items-center gap-2">
              <ThemeToggle />
              <div className="menu-sidebar">
                <Link href="/contact" aria-label="Contact">
                  <img src="/assets/images/sidebar-tottler.svg" alt="" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
