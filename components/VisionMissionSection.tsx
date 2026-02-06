import AnimateIn from "./AnimateIn";

export default function VisionMissionSection() {
  return (
    <AnimateIn className="container-fluid py-5 bg-light" animation="fadeUp">
      <div className="container py-5">
        <div className="section-title text-center position-relative pb-3 mb-5 mx-auto" style={{ maxWidth: 700 }}>
          <h5 className="fw-bold text-primary text-uppercase">Vision & Mission</h5>
        </div>
        <div className="row g-5 mb-5">
          <div className="col-md-6">
            <div className="bg-white rounded p-5 shadow-sm h-100">
              <div className="d-inline-flex align-items-center justify-content-center bg-primary rounded mb-3" style={{ width: 60, height: 60 }}>
                <i className="fa fa-eye text-white" />
              </div>
              <h4 className="mb-3">Vision</h4>
              <p className="mb-0">
                To make practical education accessible and empower every student to be creative, skilled, and innovative.
              </p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="bg-white rounded p-5 shadow-sm h-100">
              <div className="d-inline-flex align-items-center justify-content-center bg-primary rounded mb-3" style={{ width: 60, height: 60 }}>
                <i className="fa fa-bullseye text-white" />
              </div>
              <h4 className="mb-3">Mission</h4>
              <p className="mb-0">
                To provide practical, hands-on learning tools that empower students to be creative, skilled, and innovative problem-solvers.
              </p>
            </div>
          </div>
        </div>
        <div className="section-title text-center position-relative pb-3 mb-4 mx-auto" style={{ maxWidth: 700 }}>
          <h5 className="fw-bold text-primary text-uppercase">Background & History</h5>
        </div>
        <div className="row">
          <div className="col-lg-10 mx-auto">
            <p className="mb-4">
              HonicLearn was established to address a major gap in Tanzania&apos;s education system, where learning remains heavily theory-based due to limited access to practical learning tools. Many schools face shortages of laboratory equipment, training kits, and hands-on instructional materials.
            </p>
            <p className="mb-4">
              Recognizing this challenge, <strong>Honic Company Limited</strong>, an innovation-driven organization focused on product development, initiated HonicLearn as a dedicated education innovation department. Its goal is to design and locally manufacture curriculum-aligned, inclusive, high-quality practical learning tools with a strong focus on skills-based development.
            </p>
            <p className="mb-0">
              Officially established on <strong>1st March 2025</strong>, HonicLearn promotes hands-on, skills-based learning in line with the Tanzania Education and Training Policy (ETP) 2014, 2023 Edition (Elimu Amali). Since its inception, HonicLearn has collaborated with educational institutions, suppliers, and local partners to deliver practical STEM learning kits, conduct technical workshops, and enhance schools&apos; capacity for hands-on education across Tanzania.
            </p>
          </div>
        </div>
      </div>
    </AnimateIn>
  );
}
