import AnimateIn from "./AnimateIn";

const achievements = [
  { value: "19+", label: "Institutions Served", sub: "16 schools, 3 universities" },
  { value: "1,500+", label: "Students Impacted" },
  { value: "500+", label: "STEM Kits Delivered" },
  { value: "189", label: "Students in Workshops" },
  { value: "37", label: "Kits Supported (Maintenance)" },
  { value: "5", label: "Supplier Partnerships" },
];

export default function AchievementsSection() {
  return (
    <AnimateIn className="container-fluid py-5" animation="fadeUp">
      <div className="container py-5">
        <div className="section-title text-center position-relative pb-3 mb-5 mx-auto" style={{ maxWidth: 600 }}>
          <h5 className="fw-bold text-primary text-uppercase">Achievements & Impact</h5>
          <h1 className="mb-0">Our Progress Since March 2025</h1>
        </div>
        <p className="text-center mb-5 mx-auto" style={{ maxWidth: 700 }}>
          HonicLearn aims to reach <strong>10,000+ students by 2027</strong>, expanding access to practical, hands-on, and skills-based education across Tanzania.
        </p>
        <div className="row g-4">
          {achievements.map((item, i) => (
            <div key={i} className="col-lg-4 col-md-6">
              <div className="bg-light rounded p-4 text-center h-100">
                <h2 className="text-primary mb-2">{item.value}</h2>
                <h5 className="mb-0">{item.label}</h5>
                {item.sub && <small className="text-muted">{item.sub}</small>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </AnimateIn>
  );
}
