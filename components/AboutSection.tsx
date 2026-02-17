import Image from "next/image";
import Link from "next/link";
import AnimateIn from "./AnimateIn";

export default function AboutSection() {
  const points = [
    ["Hands-On Learning", "Industry-Aligned Systems"],
    ["Curriculum-Based Kits", "Skills Development"],
  ];
  const featureTiles = [
    { title: "Hands-On Learning", image: "/img/blog-workshop-soldering.png" },
    { title: "Industry-Aligned Systems", image: "/img/blog-pcb-workshop.png" },
    { title: "Curriculum-Based Kits", image: "/img/blog-resistor-kits.png" },
  ];

  return (
    <AnimateIn className="container-fluid py-5" animation="fadeUp">
      <div className="container py-5">
        <div className="row g-5">
          <div className="col-lg-7">
            <div className="section-title position-relative pb-3 mb-5">
              <h5 className="fw-bold text-primary text-uppercase">About HonicLearn</h5>
              <h1 className="mb-0">
                Turning Curiosity Into Practical, Real-World Skills
              </h1>
            </div>
            <p className="mb-4">
              Imagine learning by using real systems whether to demonstrate basic concepts
              or to explore advanced system operations while being able to interact,
              observe, and practice in a hands-on environment.
            </p>
            <p className="mb-4">
              HonicLearn designs and develops practical learning systems and training
              devices for skill-based, industry-oriented education. We provide real world
              technology platforms and production ready solutions that allow learners to
              gain meaningful, applied experience.
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
            <div className="row g-3 mb-4">
              {featureTiles.map((tile) => (
                <div key={tile.title} className="col-6">
                  <div
                    className="overflow-hidden h-100"
                    style={{
                      borderRadius: 12,
                      background: "#ffffff",
                      boxShadow: "0 10px 22px rgba(9, 30, 62, 0.08)",
                      border: "1px solid rgba(9, 30, 62, 0.06)",
                    }}
                  >
                    <div className="position-relative" style={{ height: 150, minHeight: 130 }}>
                      <Image
                        src={tile.image}
                        alt={tile.title}
                        fill
                        sizes="(max-width: 992px) 50vw, 25vw"
                        style={{ objectFit: "cover" }}
                        unoptimized
                      />
                      <div
                        className="position-absolute bottom-0 start-0 w-100"
                        style={{
                          background:
                            "linear-gradient(180deg, rgba(9, 30, 62, 0) 0%, rgba(9, 30, 62, 0.85) 100%)",
                          padding: "0.6rem 0.75rem",
                        }}
                      >
                        <div className="fw-semibold text-white small">{tile.title}</div>
                      </div>
                    </div>
                  </div>
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
          <div className="col-lg-5">
            <div
              className="mt-3"
              style={{
                borderRadius: 14,
                background: "#ffffff",
                border: "1px solid rgba(9, 30, 62, 0.08)",
                boxShadow: "0 12px 28px rgba(9, 30, 62, 0.08)",
                overflow: "hidden",
              }}
            >
              <div
                className="p-3"
                style={{
                  background: "linear-gradient(135deg, rgba(9, 30, 62, 0.08), rgba(9, 30, 62, 0))",
                }}
              >
                <div className="d-flex align-items-center gap-3">
                  <div
                    className="d-inline-flex align-items-center justify-content-center rounded bg-primary"
                    style={{ width: 46, height: 46 }}
                  >
                    <i className="fa fa-lightbulb text-white" />
                  </div>
                  <div>
                    <div className="text-uppercase fw-semibold" style={{ letterSpacing: "0.08em", fontSize: "0.72rem", color: "#4b5b77" }}>
                      Practical Innovation
                    </div>
                    <div className="fw-bold text-dark">Real Systems, Real Skills</div>
                  </div>
                </div>
                <p className="mb-0 mt-2 small" style={{ color: "#3c4a63", lineHeight: 1.6 }}>
                  We design systems that mirror real production environments, helping learners
                  build confidence with tools, processes, and technologies used in industry.
                </p>
              </div>
              <div className="p-3">
                <div className="row g-2">
                  <div className="col-6">
                    <div className="small text-muted">Focus</div>
                    <div className="fw-semibold text-dark">Hands-On Learning</div>
                  </div>
                  <div className="col-6">
                    <div className="small text-muted">Outcome</div>
                    <div className="fw-semibold text-dark">Industry Readiness</div>
                  </div>
                  <div className="col-6">
                    <div className="small text-muted">Approach</div>
                    <div className="fw-semibold text-dark">Curriculum-Based Kits</div>
                  </div>
                  <div className="col-6">
                    <div className="small text-muted">Audience</div>
                    <div className="fw-semibold text-dark">All Learning Levels</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AnimateIn>
  );
}
