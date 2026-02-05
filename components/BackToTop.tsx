"use client";

import { useState, useEffect } from "react";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 100);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <a
      href="#"
      className="btn btn-lg btn-primary btn-lg-square rounded back-to-top"
      onClick={scrollToTop}
      style={{ display: visible ? "block" : "none" }}
      aria-label="Back to top"
    >
      <i className="bi bi-arrow-up" />
    </a>
  );
}
