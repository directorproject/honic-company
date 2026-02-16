import Image from "next/image";
import AnimateIn from "./AnimateIn";

const testimonials = [
  { img: "/img/home-three-students.png", name: "School Partner", role: "Secondary School" },
  { img: "/img/service-rnd-students.png", name: "Education Partner", role: "University" },
  { img: "/img/home-skills-soldering.png", name: "Institution Partner", role: "Education Institution" },
  { img: "/img/about-soldering.png", name: "Supplier Partner", role: "Local Partner" },
];

const quote =
  "HonicLearn kits and workshops have made a real difference in our students' engagement. Practical, curriculum-aligned, and easy for teachers to use.";

export default function TestimonialsSection() {
  return (
    <AnimateIn className="container-fluid py-5" animation="fadeUp">
      <div className="container py-5">
        <div
          className="section-title text-center position-relative pb-3 mb-4 mx-auto"
          style={{ maxWidth: 600 }}
        >
          <h5 className="fw-bold text-primary text-uppercase">Testimonials</h5>
          <h1 className="mb-0">
            What Schools & Partners Say About HonicLearn
          </h1>
        </div>
        <div className="row g-4">
          {testimonials.map((t, i) => (
            <div key={i} className="col-lg-6 col-xl-3">
              <div className="testimonial-item bg-light rounded my-4 p-0 overflow-hidden">
                <div className="d-flex align-items-center border-bottom pt-5 pb-4 px-5">
                  <div
                    className="rounded overflow-hidden flex-shrink-0"
                    style={{ width: 60, height: 60 }}
                  >
                    <Image
                      src={t.img}
                      alt={t.name}
                      width={60}
                      height={60}
                      style={{ objectFit: "cover" }}
                      unoptimized
                    />
                  </div>
                  <div className="ps-4">
                    <h4 className="text-primary mb-1">{t.name}</h4>
                    <small className="text-uppercase">{t.role}</small>
                  </div>
                </div>
                <div className="pt-4 pb-5 px-5">{quote}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </AnimateIn>
  );
}
