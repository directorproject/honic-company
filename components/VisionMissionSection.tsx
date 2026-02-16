import AnimateIn from "./AnimateIn";
import CountUp from "./CountUp";

const lightBlueBox = {
  backgroundColor: "rgba(174, 214, 241, 0.45)",
  backgroundImage: "linear-gradient(135deg, rgba(174, 214, 241, 0.5) 0%, rgba(220, 235, 252, 0.5) 100%)",
  color: "#091E3E",
  borderRadius: 14,
  padding: "2.5rem 3rem",
  boxShadow: "0 10px 28px rgba(9, 30, 62, 0.12), 0 0 0 1px rgba(9, 30, 62, 0.08)",
};

const darkBlueBox = {
  backgroundColor: "#091E3E",
  backgroundImage: "linear-gradient(135deg, #091E3E 0%, #102A56 100%)",
  color: "#ffffff",
  borderRadius: 14,
  padding: "2.5rem 3rem",
  boxShadow: "0 12px 32px rgba(9, 30, 62, 0.28)",
};

export default function VisionMissionSection() {
  return (
    <div className="container-fluid py-4 bg-light">
      <div className="container py-3">
        <div className="section-title text-center position-relative pb-2 mb-3 mx-auto" style={{ maxWidth: 760 }}>
          <h5 className="fw-bold text-primary text-uppercase">Vision & Mission</h5>
          <p className="mb-0 text-muted">
            A focused vision, real-world impact, and a mission grounded in practical learning.
          </p>
        </div>
        <div className="row g-4 mb-4">
          <div className="col-12">
            <AnimateIn
              className="rounded h-100 container-continuous"
              style={{
                ...lightBlueBox,
                padding: "1.2rem",
                backgroundImage:
                  "linear-gradient(135deg, rgba(174, 214, 241, 0.65) 0%, rgba(255, 255, 255, 0.9) 55%, rgba(220, 235, 252, 0.7) 100%)",
              }}
              animation="slideFromLeft"
              delay={0.1}
            >
              <div className="row g-3 align-items-stretch">
                <div className="col-12 col-lg-7">
                  <div className="d-inline-flex align-items-center justify-content-center rounded mb-3 bg-primary" style={{ width: 60, height: 60 }}>
                    <i className="fa fa-eye text-white" />
                  </div>
                  <div className="text-uppercase fw-semibold mb-2" style={{ letterSpacing: "0.12em", color: "#4b5b77" }}>
                    Our Vision
                  </div>
                  <h4 className="mb-3" style={{ color: "#091E3E" }}>Vision</h4>
                  <p className="mb-3 fw-bold" style={{ lineHeight: 1.7, color: "#091E3E", fontSize: "clamp(1rem, 1vw + 0.9rem, 1.15rem)" }}>
                    To make practical education accessible and empower every student to be creative, skilled, and innovative.
                  </p>
                  <div className="d-flex flex-wrap gap-3">
                    <span className="badge bg-primary-subtle text-primary px-3 py-2">Practical Education</span>
                    <span className="badge bg-dark-subtle text-dark px-3 py-2">Innovation-Driven</span>
                    <span className="badge bg-secondary-subtle text-secondary px-3 py-2">Inclusive Access</span>
                  </div>
                </div>
                <div className="col-12 col-lg-4 mt-2 mt-lg-0">
                  <div
                    className="overflow-hidden shadow-sm position-relative h-100"
                    style={{
                      background: "#091E3E",
                      aspectRatio: "2 / 1",
                      border: "none",
                      borderRadius: 8,
                    }}
                  >
                    <video
                      className="w-100 h-100"
                      controls
                      playsInline
                      preload="metadata"
                      poster="/img/about.jpg"
                      style={{ objectFit: "cover" }}
                    >
                      <source src="/videos/vision.mp4" type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                </div>
              </div>
            </AnimateIn>
          </div>
        </div>
        <div className="row g-4 mb-3">
          <div className="col-12">
            <AnimateIn className="rounded h-100 container-continuous" style={darkBlueBox} animation="slideFromLeft" delay={0.2}>
              <div className="row g-4 align-items-center">
                <div className="col-lg-8">
                  <div className="d-inline-flex align-items-center justify-content-center rounded mb-3 bg-white" style={{ width: 60, height: 60 }}>
                    <i className="fa fa-bullseye text-primary" />
                  </div>
                  <h4 className="mb-3 text-white">Mission</h4>
                  <p className="mb-0 fw-bold" style={{ lineHeight: 1.75, color: "rgba(255,255,255,0.92)" }}>
                    To provide practical tools, hands-on experiences, and real-world systems that
                    prepare learners to shape the future of technology and industry.
                  </p>
                </div>
                <div className="col-lg-4">
                  <div className="bg-white rounded-4 p-4 h-100" style={{ color: "#091E3E" }}>
                    <div className="d-flex align-items-center gap-2 mb-2">
                      <i className="fa fa-rocket text-primary" />
                      <div className="text-uppercase fw-semibold" style={{ letterSpacing: "0.08em", fontSize: "0.85rem" }}>
                        Mission Acceleration
                      </div>
                    </div>
                    <div className="display-6 fw-bold mb-1">
                      <CountUp end={500} suffix="+" />
                    </div>
                    <div className="fw-semibold mb-2">Training Kits Delivered</div>
                    <div className="small text-muted">
                      Real tools deployed to speed up practical, industry-aligned learning.
                    </div>
                  </div>
                </div>
              </div>
            </AnimateIn>
          </div>
        </div>
      </div>
    </div>
  );
}
