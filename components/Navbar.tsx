"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [sticky, setSticky] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setSticky(window.scrollY > 45);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/service", label: "Services" },
    { href: "/blog", label: "Blog" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav
      className={`navbar navbar-expand-lg navbar-dark px-5 py-3 py-lg-0 ${sticky ? "sticky-top shadow-sm" : ""}`}
    >
      <Link href="/" className="navbar-brand p-0">
        <h1 className="m-0">
          <i className="fa fa-graduation-cap me-2" />HonicLearn
        </h1>
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarCollapse"
        aria-controls="navbarCollapse"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="fa fa-bars" />
      </button>
      <div className="collapse navbar-collapse" id="navbarCollapse">
        <div className="navbar-nav ms-auto py-0">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`nav-item nav-link ${pathname === link.href ? "active" : ""}`}
            >
              {link.label}
            </Link>
          ))}
        </div>
        <button
          type="button"
          className="btn text-primary ms-3"
          data-bs-toggle="modal"
          data-bs-target="#searchModal"
          aria-label="Search"
        >
          <i className="fa fa-search" />
        </button>
        <Link href="/contact" className="btn btn-primary py-2 px-4 ms-3">
          Contact Us
        </Link>
      </div>
    </nav>
  );
}
