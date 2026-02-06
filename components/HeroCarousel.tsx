"use client";

import Image from "next/image";
import Link from "next/link";

const slides = [
  { src: "/img/carousel-1.jpg", alt: "Slide 1" },
  { src: "/img/carousel-2.jpg", alt: "Slide 2" },
];

export default function HeroCarousel() {
  return (
    <div
      id="header-carousel"
      className="carousel slide carousel-fade"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner">
        {slides.map((slide, i) => (
          <div
            key={i}
            className={`carousel-item ${i === 0 ? "active" : ""}`}
          >
            <div className="w-100" style={{ height: 600, position: "relative", background: "#091E3E" }}>
              <Image
                src={slide.src}
                alt={slide.alt}
                fill
                className="w-100"
                style={{ objectFit: "cover" }}
                sizes="100vw"
                unoptimized
              />
            </div>
            <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
              <div className="p-3" style={{ maxWidth: 900 }}>
                <h5 className="text-white text-uppercase mb-3 hero-animate hero-animate-slide-down">
                  Education-Focused Innovation
                </h5>
                <h1 className="display-1 text-white mb-md-4 hero-animate hero-animate-zoom-in">
                  Practical Learning for Every Student
                </h1>
                <Link
                  href="/service"
                  className="btn btn-primary py-md-3 px-md-5 me-3 hero-animate hero-animate-slide-left"
                >
                  Our Solutions
                </Link>
                <Link
                  href="/contact"
                  className="btn btn-outline-light py-md-3 px-md-5 hero-animate hero-animate-slide-right"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#header-carousel"
        data-bs-slide="prev"
        aria-label="Previous"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true" />
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#header-carousel"
        data-bs-slide="next"
        aria-label="Next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true" />
      </button>
    </div>
  );
}
