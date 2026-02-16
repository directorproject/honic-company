import Image from "next/image";
import AnimateIn from "./AnimateIn";

const leftFeatures = [
  { icon: "fa fa-cubes", title: "Curriculum-Aligned", text: "STEM and skills-development kits aligned with Tanzania Education and Training Policy (Elimu Amali) for practical, hands-on learning." },
  { icon: "fa fa-lightbulb", title: "Innovation & R&D", text: "Research and project implementation to identify gaps and develop innovative educational tools for schools and communities." },
];
const rightFeatures = [
  { icon: "fa fa-users-cog", title: "Workshops & Training", text: "Interactive sessions for students and teachers to build practical skills, technical competencies, and problem-solving abilities." },
  { icon: "fa fa-universal-access", title: "Inclusive Learning", text: "Programs for students with disabilities and underrepresented groups, with accessible kits and sign language support." },
];

export default function FeaturesSection() {
  return (
    <AnimateIn className="container-fluid py-5" animation="fadeUp">
      <div className="container py-5">
        <div className="section-title text-center position-relative pb-3 mb-5 mx-auto" style={{ maxWidth: 600 }}>
          <h5 className="fw-bold text-primary text-uppercase">Why HonicLearn</h5>
          <h1 className="mb-0">Practical Education That Empowers Every Student</h1>
        </div>
        <div className="row g-5">
          <div className="col-lg-4">
            <div className="row g-5">
              {leftFeatures.map((f, i) => (
                <div key={i} className="col-12">
                  <div
                    className="bg-primary rounded d-flex align-items-center justify-content-center mb-3"
                    style={{ width: 60, height: 60 }}
                  >
                    <i className={`${f.icon} text-white`} />
                  </div>
                  <h4>{f.title}</h4>
                  <p className="mb-0">{f.text}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="col-lg-4" style={{ minHeight: 400 }}>
            <div className="position-relative h-100 rounded overflow-hidden">
              <Image
                src="/img/home-three-students.png"
                alt="Practical Education - Students Learning"
                fill
                style={{ objectFit: "cover" }}
                sizes="(max-width: 992px) 100vw, 33vw"
                unoptimized
              />
            </div>
          </div>
          <div className="col-lg-4">
            <div className="row g-5">
              {rightFeatures.map((f, i) => (
                <div key={i} className="col-12">
                  <div
                    className="bg-primary rounded d-flex align-items-center justify-content-center mb-3"
                    style={{ width: 60, height: 60 }}
                  >
                    <i className={`${f.icon} text-white`} />
                  </div>
                  <h4>{f.title}</h4>
                  <p className="mb-0">{f.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </AnimateIn>
  );
}
