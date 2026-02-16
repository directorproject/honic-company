import Image from "next/image";
import AnimateIn from "./AnimateIn";

export default function AboutHonicLearnIntro() {
  return (
    <section
      className="container-fluid py-5 about-honic-intro"
      style={{
        background: "linear-gradient(180deg, #f7f9fc 0%, #ffffff 65%)",
      }}
    >
      <div className="container py-5 about-honic-intro-inner">
        <div className="row g-5 align-items-center">
          <div className="col-lg-6">
            <AnimateIn animation="slideFromLeft">
              <div className="d-inline-flex align-items-center gap-2 text-uppercase fw-semibold mb-3">
                <span className="bg-primary" style={{ width: 26, height: 2, display: "inline-block" }} />
                <span className="text-primary">About HonicLearn</span>
              </div>
              <h2 className="display-6 fw-bold text-dark mb-4">Learn. Build. Innovate</h2>
              <p className="mb-4" style={{ lineHeight: 1.75, color: "#3c4a63" }}>
                People love and learn most effectively by working directly with actual
                machines, systems, and products. By using hands-on tools, they gain a
                deeper understanding of how systems operate, how problems are solved, and
                how innovations are developed and improved.
              </p>
              <p className="mb-4" style={{ lineHeight: 1.75, color: "#3c4a63" }}>
                As an innovation initiative under the HonicLearn department, we are
                committed to ensuring that learning is based on real systems, real
                devices, and real products, making education practical, industry-aligned,
                and directly applicable to technological advancement.
              </p>
              <p className="mb-4" style={{ lineHeight: 1.75, color: "#3c4a63" }}>
                We serve learners at all education levels primary, ordinary, advanced,
                and university along with trainees, technicians, innovators, and
                institutions seeking hands-on, skill based education. We prepare learners
                for real operational and production environments.
              </p>
              <p className="mb-4" style={{ lineHeight: 1.75, color: "#3c4a63" }}>
                We focus on developing practical learning systems and training devices
                that provide exposure to the fundamental concepts of technology,
                real-world applications, and production-ready solutions. Our offerings
                cover all levels from foundational tools and advanced kits to
                industrial-grade educational systems enabling learners to gain hands-on
                experience with real applications.
              </p>
              <div className="d-flex flex-wrap gap-3">
                <span className="badge bg-primary-subtle text-primary px-3 py-2">
                  Established March 2025
                </span>
                <span className="badge bg-dark-subtle text-dark px-3 py-2">
                  STEM Learning Kits
                </span>
                <span className="badge bg-secondary-subtle text-secondary px-3 py-2">
                  Skills Development
                </span>
                <span className="badge bg-info-subtle text-info px-3 py-2">
                  Industry-Aligned Kits
                </span>
              </div>
            </AnimateIn>
          </div>
          <div className="col-lg-6">
            <AnimateIn animation="fadeUp">
              <div
                className="position-relative rounded-4 overflow-hidden shadow"
                style={{ minHeight: 420, background: "#091E3E" }}
              >
                <Image
                  src="/img/about-soldering.png"
                  alt="HonicLearn practical learning"
                  fill
                  sizes="(max-width: 991px) 100vw, 50vw"
                  style={{ objectFit: "cover" }}
                  priority
                  unoptimized
                />
                <div
                  className="position-absolute bottom-0 start-0 w-100 p-4"
                  style={{
                    background:
                      "linear-gradient(180deg, rgba(9, 30, 62, 0) 0%, rgba(9, 30, 62, 0.85) 100%)",
                    color: "#fff",
                  }}
                >
                  <div className="row g-3">
                    <div className="col-6">
                      <div className="fw-bold fs-4">Curriculum-Aligned</div>
                      <div className="small opacity-75">Designed for schools and institutions</div>
                    </div>
                    <div className="col-6">
                      <div className="fw-bold fs-4">Hands-On First</div>
                      <div className="small opacity-75">Builds confidence through practice</div>
                    </div>
                  </div>
                </div>
              </div>
            </AnimateIn>
          </div>
        </div>
      </div>
    </section>
  );
}
