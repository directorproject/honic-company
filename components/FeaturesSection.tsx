"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import AnimateIn from "./AnimateIn";

const leftFeatures = [
  { icon: "fa fa-cubes", title: "Industry-Aligned Systems", text: "Hands-on systems modeled on real workflows to build practical competence." },
  { icon: "fa fa-box-open", title: "Curriculum-Ready Kits", text: "Structured kits prepared for guided classroom and lab delivery." },
];
const rightFeatures = [
  { icon: "fa fa-universal-access", title: "Inclusive Access", text: "Learning access designed for broader participation across institutions." },
  { icon: "fa fa-life-ring", title: "End-to-End Support", text: "Support from setup and training through implementation follow-up." },
];

export default function FeaturesSection() {
  const rotatingImages = [
    "/img/automation.png",
    "/img/background%20removed%20electroscope.png",
    "/img/breadboard.jpg",
    "/img/meterbridge%20copy.png",
  ];
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveImageIndex((prev) => (prev + 1) % rotatingImages.length);
    }, 3000);

    return () => clearInterval(timer);
  }, [rotatingImages.length]);

  return (
    <AnimateIn className="container-fluid py-5" animation="fadeUp">
      <div className="container py-5">
        <div className="section-title text-center position-relative pb-3 mb-5 mx-auto" style={{ maxWidth: 600 }}>
          <h5 className="fw-bold text-primary text-uppercase">Why Choose HonicLearn</h5>
          <h1 className="mb-0">Practical Education That Empowers Every Student</h1>
        </div>
        <div className="row g-5">
          <div className="col-lg-4">
            <div className="row g-5">
              {leftFeatures.map((f, i) => (
                <div key={i} className="col-12">
                  <div
                    className="bg-primary rounded d-flex align-items-center justify-content-center mb-3"
                    style={{ width: 60, height: 60 }}
                  >
                    <i className={`${f.icon} text-white`} />
                  </div>
                  <h4>{f.title}</h4>
                  <p className="mb-0">{f.text}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="col-lg-4" style={{ minHeight: 400 }}>
            <div
              className="position-relative rounded overflow-hidden"
              style={{ minHeight: 400, background: "#ffffff", border: "1px solid rgba(9, 30, 62, 0.08)" }}
            >
              <Image
                src={rotatingImages[activeImageIndex]}
                alt="Practical Education Showcase"
                fill
                style={{ objectFit: "contain", padding: "0.75rem" }}
                sizes="(max-width: 992px) 100vw, 33vw"
                unoptimized
              />
            </div>
          </div>
          <div className="col-lg-4">
            <div className="row g-5">
              {rightFeatures.map((f, i) => (
                <div key={i} className="col-12">
                  <div
                    className="bg-primary rounded d-flex align-items-center justify-content-center mb-3"
                    style={{ width: 60, height: 60 }}
                  >
                    <i className={`${f.icon} text-white`} />
                  </div>
                  <h4>{f.title}</h4>
                  <p className="mb-0">{f.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </AnimateIn>
  );
}
