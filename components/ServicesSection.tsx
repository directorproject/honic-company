"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import AnimateIn from "./AnimateIn";

const highlights = [
  {
    icon: "fa fa-industry",
    title: "Industry-Aligned Systems",
    text: "Built to mirror real production environments so learners gain job-ready skills.",
    image: "/img/blog-pcb-workshop.png",
  },
  {
    icon: "fa fa-toolbox",
    title: "Curriculum-Ready Kits",
    text: "Structured kits that map to classroom outcomes and measurable competencies.",
    image: "/img/blog-resistor-kits.png",
  },
  {
    icon: "fa fa-users",
    title: "Inclusive Access",
    text: "Tools and content designed for diverse learners and accessibility needs.",
    image: "/img/home-three-students.png",
  },
  {
    icon: "fa fa-cogs",
    title: "End-to-End Support",
    text: "Training, maintenance, and upgrades that keep labs running year-round.",
    image: "/img/blog-learning-kits-resistors.png",
  },
];

export default function ServicesSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [typedLength, setTypedLength] = useState(0);
  const [cardTypedLength, setCardTypedLength] = useState(0);
  const activeItem = highlights[activeIndex];
  const typeTarget = useMemo(
    () => `${activeItem.title} ${activeItem.text}`,
    [activeItem.title, activeItem.text]
  );

  useEffect(() => {
    const rotateTimer = window.setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % highlights.length);
    }, 4200);
    return () => window.clearInterval(rotateTimer);
  }, []);

  useEffect(() => {
    setTypedLength(0);
    const typeTimer = window.setInterval(() => {
      setTypedLength((prev) => {
        if (prev >= typeTarget.length) return prev;
        return prev + 1;
      });
    }, 18);
    return () => window.clearInterval(typeTimer);
  }, [typeTarget]);

  useEffect(() => {
    setCardTypedLength(0);
    const cardTimer = window.setInterval(() => {
      setCardTypedLength((prev) => {
        if (prev >= activeItem.text.length) return prev;
        return prev + 1;
      });
    }, 16);
    return () => window.clearInterval(cardTimer);
  }, [activeItem.text]);

  return (
    <AnimateIn className="container-fluid py-5" animation="fadeUp">
      <div className="container py-5">
        <div
          className="section-title text-center position-relative pb-3 mb-5 mx-auto"
          style={{ maxWidth: 700 }}
        >
          <h5 className="fw-bold text-primary text-uppercase">Why Choose HonicLearn</h5>
          <p className="mb-0 text-muted">
            Practical education that is measurable, industry-relevant, and scalable across institutions.
          </p>
        </div>
        <div className="row g-4 align-items-stretch">
          <div className="col-lg-12">
            <div className="row g-4">
              {highlights.map((h, i) => (
                <div key={i} className="col-md-6">
                  <div
                    className="bg-light h-100 p-4"
                    style={{
                      borderRadius: "12px",
                      opacity: i === activeIndex ? 1 : 0.45,
                      border: i === activeIndex ? "1px solid rgba(6, 163, 218, 0.5)" : "1px solid rgba(9, 30, 62, 0.08)",
                      transition: "all 0.35s ease",
                    }}
                  >
                    <div
                      className="d-inline-flex align-items-center justify-content-center rounded bg-primary mb-3"
                      style={{ width: 50, height: 50 }}
                    >
                      <i className={`${h.icon} text-white`} />
                    </div>
                    <h5 className="mb-2">{h.title}</h5>
                    <p className="mb-0">
                      {i === activeIndex ? h.text.slice(0, cardTypedLength) : h.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="col-lg-12">
            <div className="position-relative bg-primary rounded h-100 d-flex flex-column flex-lg-row align-items-center justify-content-between text-center text-lg-start p-4">
              <div className="text-white mb-3 mb-lg-0">
                <h3 className="mb-1">Partner With Us</h3>
                <p className="mb-0">
                  Let’s equip your institution with practical systems, kits, and training.
                </p>
              </div>
              <Link href="/contact" className="btn btn-light btn-lg">
                Get In Touch
              </Link>
            </div>
          </div>
        </div>
      </div>
    </AnimateIn>
  );
}
