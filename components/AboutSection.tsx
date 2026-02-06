import Image from "next/image";
import Link from "next/link";
import AnimateIn from "./AnimateIn";

export default function AboutSection() {
  const points = [
    ["Curriculum-Aligned Kits", "Skills-Based Development"],
    ["Inclusive Education", "Local Manufacturing"],
  ];

  return (
    <AnimateIn className="container-fluid py-5" animation="fadeUp">
      <div className="container py-5">
        <div className="row g-5">
          <div className="col-lg-7">
            <div className="section-title position-relative pb-3 mb-5">
              <h5 className="fw-bold text-primary text-uppercase">About HonicLearn</h5>
              <h1 className="mb-0">
                Bridging Theory and Hands-On Learning in Tanzania
              </h1>
            </div>
            <p className="mb-4">
              We design and manufacture curriculum-based practical learning kits and skills development tools in Science, Engineering, and Technology. Part of Honic Company Limited—learn more on our About page.
            </p>
            <div className="row g-0 mb-3">
              {points.map((row, i) => (
                <div key={i} className="col-sm-6">
                  {row.map((text, j) => (
                    <h5 key={j} className="mb-3">
                      <i className="fa fa-check text-primary me-3" />
                      {text}
                    </h5>
                  ))}
                </div>
              ))}
            </div>
            <div className="d-flex align-items-center mb-4">
              <div
                className="bg-primary d-flex align-items-center justify-content-center rounded"
                style={{ width: 60, height: 60 }}
              >
                <i className="fa fa-phone-alt text-white" />
              </div>
              <div className="ps-4">
                <h5 className="mb-2">Get in touch for partnerships</h5>
                <h4 className="text-primary mb-0">Contact Us</h4>
              </div>
            </div>
            <Link href="/contact" className="btn btn-primary py-3 px-5 mt-3">
              Contact Us
            </Link>
          </div>
          <div className="col-lg-5" style={{ minHeight: 500 }}>
            <div className="position-relative h-100 rounded overflow-hidden">
              <Image
                src="/img/about.jpg"
                alt="About us"
                fill
                style={{ objectFit: "cover" }}
                sizes="(max-width: 992px) 100vw, 50vw"
                unoptimized
              />
            </div>
          </div>
        </div>
      </div>
    </AnimateIn>
  );
}
