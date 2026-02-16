import AnimateIn from "./AnimateIn";
import CountUp from "./CountUp";

const lightBlueBox = {
  backgroundColor: "rgba(174, 214, 241, 0.45)",
  backgroundImage: "linear-gradient(135deg, rgba(174, 214, 241, 0.5) 0%, rgba(220, 235, 252, 0.5) 100%)",
  color: "#091E3E",
  borderRadius: 12,
  padding: "1.6rem 1.6rem",
  boxShadow: "0 10px 28px rgba(9, 30, 62, 0.12), 0 0 0 1px rgba(9, 30, 62, 0.08)",
};

const cardStyle = {
  background: "#ffffff",
  borderRadius: 14,
  padding: "1.4rem 1.4rem",
  boxShadow: "0 10px 24px rgba(9, 30, 62, 0.08)",
  border: "1px solid rgba(9, 30, 62, 0.08)",
  height: "100%",
};

const textStyle = { lineHeight: 1.7, color: "#3c4a63" };

const stats = [
  {
    value: 19,
    label: "Institutions Served",
    detail: "16 secondary schools and 3 universities",
    icon: "fa fa-school",
  },
  {
    value: 500,
    suffix: "+",
    label: "STEM Kits Delivered",
    detail: "Practical and skills-development kits distributed",
    icon: "fa fa-toolbox",
  },
  {
    value: 3,
    label: "Technical Workshops",
    detail: "189 students trained through hands-on sessions",
    icon: "fa fa-chalkboard-teacher",
  },
  {
    value: 37,
    label: "Kits Supported",
    detail: "Maintenance and support provided in secondary schools",
    icon: "fa fa-tools",
  },
  {
    value: 5,
    label: "Supplier Partnerships",
    detail: "Strengthening local production and innovation",
    icon: "fa fa-handshake",
  },
  {
    value: 1500,
    suffix: "+",
    label: "Students Reached",
    detail: "Learners impacted through practical STEM education",
    icon: "fa fa-users",
  },
];

const targetCard = {
  backgroundColor: "#091E3E",
  backgroundImage: "linear-gradient(135deg, #091E3E 0%, #102A56 100%)",
  color: "#ffffff",
  borderRadius: 16,
  padding: "2.2rem 2.6rem",
  boxShadow: "0 16px 40px rgba(9, 30, 62, 0.25)",
};

export default function AchievementsSection() {
  return (
    <div className="container-fluid py-5 bg-light">
      <div className="container py-5">
        <div className="section-title text-center position-relative pb-3 mb-5 mx-auto" style={{ maxWidth: 700 }}>
          <h5 className="fw-bold text-primary text-uppercase">Achievements & Impact</h5>
        </div>

        <AnimateIn className="rounded mx-auto mb-4 container-continuous" style={{ maxWidth: 1100, ...lightBlueBox }} animation="slideFromLeft">
          <div className="row g-4 align-items-center">
            <div className="col-12 col-lg-8">
              <h3 className="fw-bold mb-2" style={{ color: "#091E3E" }}>Achievements & Impact</h3>
              <p className="mb-0" style={textStyle}>
                Since March 2025, HonicLearn has delivered measurable progress in practical, skills-based education.
              </p>
            </div>
            <div className="col-12 col-lg-4 text-lg-end">
              <span className="badge bg-primary-subtle text-primary px-3 py-2">Updated February 2026</span>
            </div>
          </div>
        </AnimateIn>

        <div className="row g-4">
          {stats.map((stat, i) => (
            <div className="col-md-6 col-lg-4" key={stat.label}>
              <AnimateIn animation="fadeUp" delay={i * 0.06}>
                <div style={cardStyle}>
                  <div className="d-flex align-items-center gap-3 mb-3">
                    <div
                      className="d-inline-flex align-items-center justify-content-center rounded bg-primary"
                      style={{ width: 48, height: 48 }}
                    >
                      <i className={`${stat.icon} text-white`} />
                    </div>
                    <div>
                      <div className="fw-bold fs-4" style={{ color: "#091E3E" }}>
                        <CountUp end={stat.value} suffix={stat.suffix ?? ""} />
                      </div>
                      <div className="text-uppercase fw-semibold" style={{ letterSpacing: "0.08em", fontSize: "0.78rem", color: "#4b5b77" }}>
                        {stat.label}
                      </div>
                    </div>
                  </div>
                  <p className="mb-0" style={textStyle}>{stat.detail}</p>
                </div>
              </AnimateIn>
            </div>
          ))}
        </div>

        <div className="row mt-4">
          <div className="col-12">
            <AnimateIn animation="slideUp" delay={0.1}>
              <div style={targetCard}>
                <div className="row g-4 align-items-center">
                  <div className="col-lg-4">
                    <div className="d-inline-flex align-items-center justify-content-center rounded bg-white mb-3" style={{ width: 60, height: 60 }}>
                      <i className="fa fa-bullseye text-primary" />
                    </div>
                    <div className="text-uppercase fw-semibold mb-2" style={{ letterSpacing: "0.1em", color: "rgba(255,255,255,0.7)" }}>
                      Growth Target Year
                    </div>
                    <div className="display-4 fw-bold">2027</div>
                  </div>
                  <div className="col-lg-8">
                    <h3 className="fw-bold mb-3">Focused on expanding impact</h3>
                    <p className="mb-2" style={{ lineHeight: 1.7, color: "rgba(255,255,255,0.86)" }}>
                      Reach <strong>10,000+ students</strong> across Tanzania through practical kits,
                      workshops, and industry-aligned learning systems.
                    </p>
                    <div className="d-flex flex-wrap gap-3">
                      <span className="badge bg-light text-dark px-3 py-2">More schools equipped</span>
                      <span className="badge bg-light text-dark px-3 py-2">More hands-on training</span>
                      <span className="badge bg-light text-dark px-3 py-2">Wider regional reach</span>
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
