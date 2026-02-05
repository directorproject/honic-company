import Image from "next/image";
import AnimateIn from "./AnimateIn";

const members = [
  { img: "/img/team-1.jpg", name: "Full Name", role: "Designation" },
  { img: "/img/team-2.jpg", name: "Full Name", role: "Designation" },
  { img: "/img/team-3.jpg", name: "Full Name", role: "Designation" },
];

const socials = [
  { icon: "fab fa-twitter", href: "#" },
  { icon: "fab fa-facebook-f", href: "#" },
  { icon: "fab fa-instagram", href: "#" },
  { icon: "fab fa-linkedin-in", href: "#" },
];

export default function TeamSection() {
  return (
    <AnimateIn className="container-fluid py-5" animation="fadeUp">
      <div className="container py-5">
        <div
          className="section-title text-center position-relative pb-3 mb-5 mx-auto"
          style={{ maxWidth: 600 }}
        >
          <h5 className="fw-bold text-primary text-uppercase">Team Members</h5>
          <h1 className="mb-0">
            Professional Stuffs Ready to Help Your Business
          </h1>
        </div>
        <div className="row g-5">
          {members.map((m, i) => (
            <AnimateIn key={i} className="col-lg-4" animation="slideUp" delay={i * 0.15}>
              <div className="team-item bg-light rounded overflow-hidden">
                <div className="team-img position-relative overflow-hidden">
                  <div style={{ position: "relative", height: 320 }}>
                    <Image
                      src={m.img}
                      alt={m.name}
                      fill
                      style={{ objectFit: "cover" }}
                      sizes="(max-width: 992px) 100vw, 33vw"
                      unoptimized
                    />
                  </div>
                  <div className="team-social">
                    {socials.map((s, j) => (
                      <a
                        key={j}
                        className="btn btn-lg btn-primary btn-lg-square rounded"
                        href={s.href}
                        aria-label={s.icon}
                      >
                        <i className={`${s.icon} fw-normal`} />
                      </a>
                    ))}
                  </div>
                </div>
                <div className="text-center py-4">
                  <h4 className="text-primary">{m.name}</h4>
                  <p className="text-uppercase m-0">{m.role}</p>
                </div>
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </AnimateIn>
  );
}
