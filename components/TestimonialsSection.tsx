import Image from "next/image";
import AnimateIn from "./AnimateIn";

const testimonials = [
  { img: "/img/testimonial-1.jpg", name: "Client Name", role: "Profession" },
  { img: "/img/testimonial-2.jpg", name: "Client Name", role: "Profession" },
  { img: "/img/testimonial-3.jpg", name: "Client Name", role: "Profession" },
  { img: "/img/testimonial-4.jpg", name: "Client Name", role: "Profession" },
];

const quote =
  "Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam";

export default function TestimonialsSection() {
  return (
    <AnimateIn className="container-fluid py-5" animation="fadeUp">
      <div className="container py-5">
        <div
          className="section-title text-center position-relative pb-3 mb-4 mx-auto"
          style={{ maxWidth: 600 }}
        >
          <h5 className="fw-bold text-primary text-uppercase">Testimonial</h5>
          <h1 className="mb-0">
            What Our Clients Say About Our Digital Services
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
