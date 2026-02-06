import Link from "next/link";
import AnimateIn from "./AnimateIn";

const services = [
  { icon: "fa fa-flask", title: "Research & Development", text: "Identifying gaps in practical learning, developing innovative solutions, and implementing projects in schools and communities." },
  { icon: "fa fa-chalkboard-teacher", title: "Workshops & Training", text: "Interactive sessions for students and teachers to develop practical skills and effective use of HonicLearn kits." },
  { icon: "fa fa-tools", title: "Maintenance Services", text: "Ongoing technical support for practical kits and educational tools for sustainable, long-term learning." },
  { icon: "fa fa-cubes", title: "Learning Kits", text: "Curriculum-aligned STEM kits in Science, Technology, Engineering, and Mathematics for hands-on experiments." },
  { icon: "fa fa-universal-access", title: "Inclusive Learning Programs", text: "Accessible kits, audio guidance, and video sign language for equitable participation in practical education." },
];

export default function ServicesSection() {
  return (
    <AnimateIn className="container-fluid py-5" animation="fadeUp">
      <div className="container py-5">
        <div
          className="section-title text-center position-relative pb-3 mb-5 mx-auto"
          style={{ maxWidth: 600 }}
        >
          <h5 className="fw-bold text-primary text-uppercase">Products & Services</h5>
          <h1 className="mb-0">
            Practical Learning Solutions for Education
          </h1>
        </div>
        <div className="row g-5">
          {services.map((s, i) => (
            <div key={i} className="col-lg-4 col-md-6">
              <div className="service-item bg-light rounded d-flex flex-column align-items-center justify-content-center text-center p-4">
                <div className="service-icon">
                  <i className={`${s.icon} text-white`} />
                </div>
                <h4 className="mb-3">{s.title}</h4>
                <p className="m-0">{s.text}</p>
                <Link className="btn btn-lg btn-primary rounded mt-3" href="/contact">
                  <i className="bi bi-arrow-right" />
                </Link>
              </div>
            </div>
          ))}
          <div className="col-lg-4 col-md-6">
            <div className="position-relative bg-primary rounded h-100 d-flex flex-column align-items-center justify-content-center text-center p-5">
              <h3 className="text-white mb-3">Partner With Us</h3>
              <p className="text-white mb-3">
                Schools and institutions: get practical STEM kits, workshops, and support for hands-on education.
              </p>
              <Link href="/contact" className="btn btn-dark btn-lg mt-2">
                Get In Touch
              </Link>
            </div>
          </div>
        </div>
      </div>
    </AnimateIn>
  );
}
