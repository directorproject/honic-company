"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

const slides = [
  { src: "/img/hero-bg-1.png", alt: "Practical Learning - Analog Electronic Training Kit" },
  { src: "/img/hero-bg-2.png", alt: "Practical Learning - Students Working Together" },
  { src: "/img/hero-bg-3.png", alt: "Practical Learning - PCB Milling Workshop" },
  { src: "/img/hero-bg-4.png", alt: "Practical Learning - Electronics Soldering" },
];

export default function HeroCarousel() {
  const pathname = usePathname();
  const [activeIndex, setActiveIndex] = useState(0);
  const [isInitialized, setIsInitialized] = useState(false);

  // Determine starting index based on time and pathname to ensure different pages start with different images
  useEffect(() => {
    if (!isInitialized) {
      // Use pathname hash + current time to determine starting image (different for each page and visit)
      const pathHash = pathname?.split("").reduce((acc, char) => acc + char.charCodeAt(0), 0) || 0;
      const timeHash = Math.floor(Date.now() / 1000) % slides.length; // Changes every second
      const startIndex = (pathHash + timeHash) % slides.length;
      setActiveIndex(startIndex);
      setIsInitialized(true);
    }
  }, [pathname, isInitialized]);

  // Auto-rotate every 30 seconds
  useEffect(() => {
    if (!isInitialized) return;
    
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % slides.length);
    }, 30000); // 30 seconds

    return () => clearInterval(interval);
  }, [isInitialized]);

  const goToSlide = (index: number) => {
    setActiveIndex(index);
  };

  const goToPrevious = () => {
    setActiveIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToNext = () => {
    setActiveIndex((prev) => (prev + 1) % slides.length);
  };

  return (
    <div
      id="header-carousel"
      className="carousel slide carousel-fade"
    >
      <div className="carousel-inner">
        {slides.map((slide, i) => (
          <div
            key={i}
            className={`carousel-item ${i === activeIndex ? "active" : ""}`}
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
                priority={i === activeIndex}
              />
              {/* Dark blue transparent overlay */}
              <div
                className="position-absolute top-0 start-0 w-100 h-100"
                style={{
                  background: "rgba(9, 30, 62, 0.65)",
                  zIndex: 1,
                }}
              />
            </div>
            <div className="carousel-caption d-flex flex-column align-items-center justify-content-center" style={{ zIndex: 2 }}>
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
        onClick={goToPrevious}
        aria-label="Previous"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true" />
      </button>
      <button
        className="carousel-control-next"
        type="button"
        onClick={goToNext}
        aria-label="Next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true" />
      </button>
      {/* Carousel indicators */}
      <div className="carousel-indicators">
        {slides.map((_, i) => (
          <button
            key={i}
            type="button"
            className={i === activeIndex ? "active" : ""}
            onClick={() => goToSlide(i)}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
