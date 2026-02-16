import AnimateIn from "./AnimateIn";
import Link from "next/link";
import Image from "next/image";

const services = [
  {
    title: "Research & Development (R&D)",
    icon: "fa fa-flask",
    text: "Research, prototyping, and system optimization for practical education technologies.",
    image: "/img/feature.jpg",
    tags: ["R&D", "Prototyping", "Testing"],
  },
  {
    title: "Practical Learning Kits & Industry-Aligned Training Kits",
    icon: "fa fa-toolbox",
    text: "Hands-on kits aligned to curriculum and industry standards.",
    image: "/img/blog-resistor-kits.png",
    tags: ["Curriculum", "Industry", "Hands-on"],
  },
  {
    title: "Production-Ready Educational Technologies",
    icon: "fa fa-tools",
    text: "Production-capable systems for training and real application.",
    image: "/img/blog-pcb-workshop.png",
    tags: ["Production", "Systems", "Deployment"],
  },
  {
    title: "Workshops & Technical Training",
    icon: "fa fa-chalkboard-teacher",
    text: "Structured workshops to build practical skills and system operation.",
    image: "/img/blog-workshop-soldering.png",
    tags: ["Workshops", "Skills", "Operations"],
  },
  {
    title: "Maintenance & Technical Support",
    icon: "fa fa-tools",
    text: "Maintenance, calibration, upgrades, and technical support.",
    image: "/img/blog-learning-kits-resistors.png",
    tags: ["Maintenance", "Calibration", "Support"],
  },
  {
    title: "Digital Learning Programs",
    icon: "fa fa-universal-access",
    text: "Digital and blended learning tools that complement physical systems.",
    image: "/img/service-digital-kit.png",
    tags: ["Digital", "Blended", "Inclusive"],
  },
];

const models = [
  {
    title: "Institution Partnerships",
    type: "Long-term",
    bestFor: "Schools, universities, training centers",
    value: "Strategic collaboration to scale practical learning systems with phased implementation.",
    icon: "fa fa-handshake",
  },
  {
    title: "Program Delivery",
    type: "Project-based",
    bestFor: "Academic terms and funded initiatives",
    value: "Structured rollouts of kits, training, and follow-up support tied to measurable outcomes.",
    icon: "fa fa-project-diagram",
  },
  {
    title: "Service & Support",
    type: "Annual contract",
    bestFor: "Institutions operating practical labs",
    value: "Scheduled maintenance, calibration, and technical support for year-round reliability.",
    icon: "fa fa-tools",
  },
  {
    title: "Co-Development",
    type: "Custom model",
    bestFor: "Specialized curriculum and industry needs",
    value: "Joint design and deployment of custom systems aligned to local priorities.",
    icon: "fa fa-lightbulb",
  },
];

const slugify = (value: string) =>
  value
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

export default function ProductsServicesDetail() {
  return (
    <section className="container-fluid py-4 bg-light">
      <div className="container py-4">
        <AnimateIn animation="fadeUp">
          <div
            className="rounded p-4 p-lg-5 mb-5"
            style={{
              background: "linear-gradient(135deg, #091E3E 0%, #102A56 100%)",
              color: "#fff",
            }}
          >
            <div className="row g-4 align-items-center">
              <div className="col-lg-8">
                <h5 className="fw-bold text-uppercase mb-2" style={{ color: "#7dd3fc", letterSpacing: "0.08em" }}>
                  Products & Services
                </h5>
                <h2 className="fw-bold mb-3">A complete practical education delivery system</h2>
                <p className="mb-0" style={{ color: "rgba(255,255,255,0.86)", lineHeight: 1.7 }}>
                  HonicLearn combines solution design, kit deployment, technical training, and support
                  into one business-ready delivery model for institutions.
                </p>
              </div>
              <div className="col-lg-4">
                <div className="bg-white rounded p-3" style={{ color: "#091E3E" }}>
                  <div className="small text-muted mb-1">Service scope</div>
                  <div className="fw-semibold mb-2">Design to Deployment</div>
                  <div className="small text-muted mb-1">Coverage</div>
                  <div className="fw-semibold">B2C / B2B / B2G / Partnerships</div>
                </div>
              </div>
            </div>
          </div>
        </AnimateIn>

        <div className="row g-5">
          {services.map((service, i) => (
            <div key={service.title} className="col-md-6 col-xl-4">
              <AnimateIn animation="fadeUp" delay={i * 0.04}>
                <article className="blog-item bg-light rounded overflow-hidden h-100 d-flex flex-column">
                  <div className="position-relative overflow-hidden" style={{ height: 240 }}>
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      sizes="(max-width: 1200px) 50vw, 33vw"
                      style={{ objectFit: "cover" }}
                      unoptimized
                    />
                    <div className="bg-primary text-white position-absolute bottom-0 start-0 px-3 py-2" style={{ fontSize: "0.875rem" }}>
                      <i className={`${service.icon} me-1`} />
                      Service 0{i + 1}
                    </div>
                  </div>
                  <div className="p-4 d-flex flex-column flex-grow-1">
                    <div className="d-flex flex-wrap gap-2 mb-2">
                      {service.tags.slice(0, 2).map((tag) => (
                        <small key={tag} className="text-primary text-uppercase fw-semibold">
                          {tag}
                        </small>
                      ))}
                    </div>
                    <h5 className="fw-semibold text-dark mb-2">{service.title}</h5>
                    <p className="mb-3" style={{ color: "#3c4a63", lineHeight: 1.7 }}>
                      {service.text}
                    </p>
                    <div className="d-flex flex-wrap gap-2 mb-3">
                      <div
                        style={{
                          color: "#4b5b77",
                          fontSize: "0.8rem",
                          fontWeight: 600,
                          letterSpacing: "0.02em",
                        }}
                      >
                        {service.tags.join(" → ")}
                      </div>
                    </div>
                    <div className="mt-auto">
                      <Link href={`/service/${slugify(service.title)}`} className="text-primary fw-medium">
                        Explore Service <i className="bi bi-arrow-right ms-1" />
                      </Link>
                    </div>
                  </div>
                </article>
              </AnimateIn>
            </div>
          ))}
        </div>

        <AnimateIn animation="fadeUp" delay={0.2}>
          <div className="mt-5">
            <div className="section-title text-center position-relative pb-3 mb-4 mx-auto" style={{ maxWidth: 760 }}>
              <h5 className="fw-bold text-primary text-uppercase">Business Models</h5>
              <p className="mb-0 text-muted">
                Engagement structures designed for education institutions and strategic partners.
              </p>
            </div>
            <div className="row g-4">
              {models.map((model, i) => (
                <div key={model.title} className="col-md-6 col-lg-3">
                  <div
                    className="h-100 rounded p-4"
                    style={{
                      background: "#0b1f3a",
                      color: "#fff",
                      border: "1px solid rgba(9, 30, 62, 0.25)",
                      boxShadow: "0 16px 36px rgba(9, 30, 62, 0.2)",
                    }}
                  >
                    <div className="d-flex align-items-center gap-2 mb-3">
                      <div
                        className="d-inline-flex align-items-center justify-content-center rounded"
                        style={{ width: 34, height: 34, background: "rgba(255,255,255,0.14)" }}
                      >
                        <i className={`${model.icon} text-white`} />
                      </div>
                      <div className="fw-semibold">{model.title}</div>
                    </div>
                    <div
                      className="mb-2"
                      style={{
                        color: "rgba(255,255,255,0.74)",
                        fontSize: "0.78rem",
                        letterSpacing: "0.06em",
                        textTransform: "uppercase",
                      }}
                    >
                      {model.type}
                    </div>
                    <p className="mb-2" style={{ color: "rgba(255,255,255,0.9)", lineHeight: 1.6 }}>
                      {model.value}
                    </p>
                    <div style={{ color: "#9ed8ff", fontSize: "0.88rem" }}>
                      <span className="fw-semibold" style={{ color: "#c8ecff" }}>
                        Best for:
                      </span>{" "}
                      {model.bestFor}
                    </div>
                    <div className="small text-white-50 mt-2">Model 0{i + 1}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </AnimateIn>

        <div className="row mt-5 g-3 align-items-center justify-content-center">
          <div className="col-auto">
            <Link href="/contact" className="btn btn-primary btn-lg px-5 py-3">
              Get In Touch
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
