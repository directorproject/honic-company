import Image from "next/image";
import Link from "next/link";
import { Analytics } from "@vercel/analytics/next";
import BootstrapClient from "@/components/BootstrapClient";
import Spinner from "@/components/Spinner";
import Topbar from "@/components/Topbar";
import Navbar from "@/components/Navbar";
import PageHeader from "@/components/PageHeader";
import SearchModal from "@/components/SearchModal";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";

const shorten = (value: string, limit = 38) =>
  value.length > limit ? `${value.slice(0, limit - 3).trim()}...` : value;

const services = {
  "research-and-development-r-and-d": {
    title: "Research & Development (R&D)",
    image: "/img/feature.jpg",
    intro:
      "Continuous research, innovation, and system development focused on advancing practical, skill-based, and industry-relevant education technologies.",
    details: [
      "Concept development, prototyping, and system testing.",
      "Product optimization for reliability and classroom readiness.",
      "Alignment with curriculum and industry requirements.",
    ],
    outcomes: ["Validated prototypes", "Improved learning systems", "Field-tested solutions"],
    audience: ["Curriculum teams", "Training centers", "Innovation partners"],
    deliverables: ["Prototype system", "Testing report", "Implementation roadmap"],
    process: ["Discovery & needs assessment", "Prototype & testing", "Pilot & optimization"],
    engagement: "Project-based or retainer R&D with shared milestones and review cycles.",
  },
  "practical-learning-kits-and-industry-aligned-training-kits": {
    title: "Practical Learning Kits & Industry-Aligned Training Kits",
    image: "/img/blog-resistor-kits.png",
    intro:
      "We design, engineer, and deploy hands-on learning kits that convert curriculum goals into measurable practical competencies. Each kit is aligned to real industry workflows so institutions can deliver structured, skills-based training from foundational to advanced levels.",
    details: [
      "Foundational, advanced, and professional-level kit pathways.",
      "Interactive, skill-based engagement for learners.",
      "Teacher guidance and structured activities.",
    ],
    outcomes: ["Curriculum-aligned delivery", "Hands-on mastery", "Scalable deployment"],
    audience: ["Primary schools", "Secondary schools", "TVET & universities"],
    deliverables: ["Complete kit set", "Teacher guide", "Student activities"],
    process: ["Curriculum alignment", "Kit design", "Training & rollout"],
    engagement:
      "Engagement options include bulk procurement for full-scale deployment or phased rollouts by term, campus, or program. Both models include trainer onboarding, implementation support, maintenance planning, and upgrade pathways for long-term program performance.",
  },
  "production-ready-educational-technologies": {
    title: "Production-Ready Educational Technologies",
    image: "/img/blog-pcb-workshop.png",
    intro:
      "Manufacturing of functional systems and devices that serve both as training platforms and operational, production-capable solutions.",
    details: [
      "Designed for real application, not only demonstration.",
      "Systems that mirror industry workflows.",
      "Deployment support and configuration guidance.",
    ],
    outcomes: ["Work-ready systems", "Real production exposure", "Operational confidence"],
    audience: ["Polytechnics", "Industry partners", "Advanced training centers"],
    deliverables: ["Operational system", "Setup & calibration", "Usage guide"],
    process: ["Specification & design", "Build & testing", "Deployment & training"],
    engagement: "Custom build with onsite commissioning and handover.",
  },
  "workshops-and-technical-training": {
    title: "Workshops & Technical Training",
    image: "/img/blog-workshop-soldering.png",
    intro:
      "Structured, hands-on workshops and technical training that strengthen practical skills and system operation knowledge.",
    details: [
      "Guided practice and troubleshooting techniques.",
      "Safety procedures and equipment handling.",
      "Innovation-focused problem solving.",
    ],
    outcomes: ["Stronger technical skills", "Operational competence", "Innovation mindset"],
    audience: ["Teachers", "Students", "Technicians"],
    deliverables: ["Training plan", "Hands-on sessions", "Assessment checklist"],
    process: ["Skill assessment", "Workshop delivery", "Evaluation & follow-up"],
    engagement: "Single workshop or multi-session training programs.",
  },
  "maintenance-and-technical-support": {
    title: "Maintenance & Technical Support",
    image: "/img/blog-learning-kits-resistors.png",
    intro:
      "Maintenance, calibration, upgrades, and technical assistance to ensure long-term reliability and safety of deployed systems.",
    details: [
      "Preventive maintenance and calibration services.",
      "Repairs, upgrades, and spare parts management.",
      "Usage support and troubleshooting help.",
    ],
    outcomes: ["Longer system lifespan", "Consistent performance", "Reduced downtime"],
    audience: ["Institutions with active labs", "Programs using practical kits"],
    deliverables: ["Maintenance plan", "Service logs", "Upgrade recommendations"],
    process: ["Inspection", "Service & repair", "Performance verification"],
    engagement: "Annual service contracts or on-demand support.",
  },
  "digital-learning-programs": {
    title: "Digital Learning Programs",
    image: "/img/team-3.jpg",
    intro:
      "Digital and blended learning platforms that complement physical systems with guided modules and inclusive resources.",
    details: [
      "Remote access and multimedia instruction.",
      "Guided learning modules for independent practice.",
      "Inclusive resources for wider participation.",
    ],
    outcomes: ["Flexible learning access", "Broader reach", "Enhanced support"],
    audience: ["Blended programs", "Remote learners", "Inclusive classrooms"],
    deliverables: ["Digital modules", "Remote access tools", "Inclusive resources"],
    process: ["Content design", "Platform setup", "Launch & support"],
    engagement: "Subscription or program-based delivery.",
  },
} as const;

export async function generateStaticParams() {
  return Object.keys(services).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = services[slug as keyof typeof services];
  if (!service) return { title: "Service - HonicLearn" };
  return {
    title: `${service.title} - HonicLearn`,
    description: service.intro,
  };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = services[slug as keyof typeof services];

  if (!service) {
    return (
      <>
        <BootstrapClient />
        <Topbar />
        <div className="container-fluid position-relative p-0">
          <Navbar />
        </div>
        <div className="container py-5 text-center">
          <h1>Service not found</h1>
          <Link href="/service" className="btn btn-primary mt-3">
            Back to Services
          </Link>
        </div>
        <Footer />
        <Analytics />
      </>
    );
  }

  const summaryCards = [
    {
      title: service.outcomes[0] ?? service.details[0],
      head: "Academic Alignment",
      icon: "fa fa-bullseye",
      accent: "#0d6efd",
    },
    {
      title: service.outcomes[1] ?? service.details[1] ?? service.details[0],
      head: "Practical Competence",
      icon: "fa fa-hand-paper",
      accent: "#0ea5e9",
    },
    {
      title: service.outcomes[2] ?? service.deliverables[0] ?? service.details[0],
      head: "Scale Readiness",
      icon: "fa fa-chart-line",
      accent: "#1d4ed8",
    },
    {
      title: service.audience[0] ? `For ${service.audience[0]}` : service.process[0],
      head: "Priority Segment",
      icon: "fa fa-users",
      accent: "#1e40af",
    },
  ] as const;

  const detailTiles = [
    { title: shorten(service.details[0] ?? service.outcomes[0]), image: service.image },
    {
      title: shorten(service.details[1] ?? service.process[0]),
      image: "/img/blog-workshop-soldering.png",
    },
    {
      title: shorten(service.outcomes[1] ?? service.process[1] ?? service.details[2] ?? service.details[0]),
      image: "/img/blog-pcb-workshop.png",
    },
    {
      title: shorten(service.process[service.process.length - 1] ?? service.outcomes[2]),
      image: "/img/blog-resistor-kits.png",
    },
  ];

  const deliverableDescriptions: Record<string, string> = {
    "Complete kit set":
      "A full package of learning hardware, components, and setup materials ready for direct classroom and lab deployment.",
    "Teacher guide":
      "A structured facilitation guide with lesson flow, practical instructions, and assessment checkpoints for instructors.",
    "Student activities":
      "Hands-on activities and project tasks designed to build measurable technical skills and applied understanding.",
  };

  const deliverableIcons: Record<string, string> = {
    "Complete kit set": "fa fa-box",
    "Teacher guide": "fa fa-book",
    "Student activities": "fa fa-graduation-cap",
  };

  const targetGroups = service.audience.length > 0 ? service.audience : [summaryCards[3].title];

  return (
    <>
      <BootstrapClient />
      <Spinner />
      <Topbar />
      <div className="container-fluid position-relative p-0">
        <Navbar />
        <PageHeader title={service.title} currentPage="Services" />
      </div>
      <SearchModal />

      <div className="container-fluid py-5" style={{ background: "#f3f4f6" }}>
        <div className="container py-4 py-lg-5">
          <div className="row g-5 align-items-start">
            <div className="col-lg-7">
              <div className="section-title position-relative pb-3 mb-4 mb-lg-5">
                <h5 className="fw-bold text-primary text-uppercase">Service Overview</h5>
                <h1 className="mb-0">{service.title}</h1>
              </div>
              <p className="mb-4" style={{ lineHeight: 1.75, color: "#3c4a63" }}>
                {service.intro}
              </p>
              <p className="mb-4" style={{ lineHeight: 1.75, color: "#3c4a63" }}>
                {service.engagement}
              </p>

              <div
                className="bg-white p-3 p-lg-4 mb-4"
                style={{
                  borderRadius: 14,
                  border: "1px solid rgba(9, 30, 62, 0.08)",
                  boxShadow: "0 10px 22px rgba(9, 30, 62, 0.07)",
                }}
              >
                <div className="row g-4">
                  <div className="col-md-7">
                    <div
                      className="text-uppercase fw-semibold mb-3"
                      style={{ fontSize: "0.7rem", letterSpacing: "0.09em", color: "#4b5b77" }}
                    >
                      Strategic Outcomes
                    </div>
                    <div className="d-flex flex-column gap-2">
                      {summaryCards.slice(0, 3).map((card) => (
                        <div
                          key={card.head}
                          className="d-flex align-items-start gap-3 p-2"
                          style={{
                            borderRadius: 10,
                            border: "1px solid rgba(9, 30, 62, 0.08)",
                            background: "rgba(255,255,255,0.95)",
                          }}
                        >
                          <span
                            className="d-inline-flex align-items-center justify-content-center text-white flex-shrink-0"
                            style={{ width: 30, height: 30, borderRadius: 8, background: card.accent }}
                          >
                            <i className={card.icon} />
                          </span>
                          <div>
                            <div className="fw-bold" style={{ color: "#12213f" }}>
                              {card.head}
                            </div>
                            <div style={{ color: "#1f3562", fontWeight: 600, lineHeight: 1.5 }}>
                              {card.title}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="col-md-5">
                    <div
                      className="text-uppercase fw-semibold mb-3"
                      style={{ fontSize: "0.7rem", letterSpacing: "0.09em", color: "#4b5b77" }}
                    >
                      Target Groups
                    </div>
                    <div className="fw-bold mb-2" style={{ color: "#12213f" }}>
                      {summaryCards[3].head}
                    </div>
                    <div className="d-flex flex-wrap gap-2">
                      {targetGroups.map((group) => (
                        <span
                          key={group}
                          className="fw-semibold px-3 py-2"
                          style={{
                            color: "#1f3562",
                            background: "rgba(30, 64, 175, 0.08)",
                            border: "1px solid rgba(30, 64, 175, 0.2)",
                            borderRadius: 8,
                          }}
                        >
                          {group}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="row g-3 mb-4">
                {detailTiles.map((tile) => (
                  <div key={`${tile.title}-${tile.image}`} className="col-6">
                    <div
                      className="overflow-hidden h-100"
                      style={{
                        borderRadius: 12,
                        background: "#ffffff",
                        boxShadow: "0 10px 22px rgba(9, 30, 62, 0.08)",
                        border: "1px solid rgba(9, 30, 62, 0.06)",
                      }}
                    >
                      <div className="position-relative" style={{ height: 130 }}>
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
                              "linear-gradient(180deg, rgba(9, 30, 62, 0) 0%, rgba(9, 30, 62, 0.86) 100%)",
                            padding: "0.55rem 0.7rem",
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
                  style={{ width: 58, height: 58 }}
                >
                  <i className="fa fa-phone-alt text-white" />
                </div>
                <div className="ps-4">
                  <h5 className="mb-1">Plan your deployment with our team</h5>
                  <h4 className="text-primary mb-0">Contact Us</h4>
                </div>
              </div>

              <div className="d-flex flex-wrap gap-2">
                <Link href="/contact" className="btn btn-primary py-3 px-5">
                  Get Consultation
                </Link>
                <Link href="/service" className="btn btn-outline-primary py-3 px-5">
                  Browse All Services
                </Link>
              </div>
            </div>

            <div className="col-lg-5">
              <div className="position-relative rounded overflow-hidden" style={{ height: 440 }}>
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  style={{ objectFit: "cover" }}
                  sizes="(max-width: 992px) 100vw, 45vw"
                  unoptimized
                />
              </div>
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
                  className="p-3 p-lg-4"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(9, 30, 62, 0.08), rgba(9, 30, 62, 0))",
                  }}
                >
                  <div className="d-flex align-items-center gap-3 mb-2">
                    <div
                      className="d-inline-flex align-items-center justify-content-center rounded bg-primary"
                      style={{ width: 44, height: 44 }}
                    >
                      <i className="fa fa-lightbulb text-white" />
                    </div>
                    <div>
                      <div
                        className="text-uppercase fw-semibold"
                        style={{ letterSpacing: "0.08em", fontSize: "0.72rem", color: "#4b5b77" }}
                      >
                        Practical Innovation
                      </div>
                      <div className="fw-bold text-dark">Real Systems, Real Skills</div>
                    </div>
                  </div>
                  <p className="mb-0 small" style={{ color: "#3c4a63", lineHeight: 1.6 }}>
                    {service.details[0]}
                  </p>
                </div>
              </div>

              <div
                className="mt-3"
                style={{
                  borderRadius: 14,
                  background: "#ffffff",
                  border: "1px solid rgba(9, 30, 62, 0.08)",
                  boxShadow: "0 10px 24px rgba(9, 30, 62, 0.06)",
                  overflow: "hidden",
                }}
              >
                <div
                  className="px-3 px-lg-4 py-2 d-flex align-items-center gap-2"
                  style={{
                    background: "rgba(13, 110, 253, 0.08)",
                    borderBottom: "1px solid rgba(9, 30, 62, 0.08)",
                  }}
                >
                  <i className="fa fa-box text-primary" />
                  <h6 className="mb-0 fw-bold">Deliverables</h6>
                </div>
                <div className="p-3 p-lg-4 d-flex flex-column gap-3">
                  {service.deliverables.map((item) => (
                    <div
                      key={item}
                      className="d-flex align-items-start gap-3"
                      style={{
                        border: "1px solid rgba(9, 30, 62, 0.08)",
                        borderRadius: 10,
                        padding: "0.75rem",
                        background: "#fff",
                      }}
                    >
                      <div
                        className="d-inline-flex align-items-center justify-content-center text-white flex-shrink-0"
                        style={{
                          width: 28,
                          height: 28,
                          borderRadius: 999,
                          background: "#0d6efd",
                          fontSize: "0.78rem",
                        }}
                      >
                        <i className={deliverableIcons[item] ?? "fa fa-check"} />
                      </div>
                      <div>
                        <div className="fw-semibold text-dark mb-1">{item}</div>
                        <div className="small" style={{ color: "#4a5873", lineHeight: 1.6 }}>
                          {deliverableDescriptions[item] ??
                            "A core deliverable included in this service package to support effective implementation."}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
      <BackToTop />
      <Analytics />
    </>
  );
}
