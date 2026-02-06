import Image from "next/image";
import Link from "next/link";
import AnimateIn from "./AnimateIn";

export default function AboutSection() {
  const points = [
    ["Award Winning", "Professional Staff"],
    ["24/7 Support", "Fair Prices"],
  ];

  return (
    <AnimateIn className="container-fluid py-5" animation="fadeUp">
      <div className="container py-5">
        <div className="row g-5">
          <div className="col-lg-7">
            <div className="section-title section-title-shimmer position-relative pb-3 mb-5">
              <h5 className="fw-bold text-primary text-uppercase">About Us</h5>
              <h1 className="mb-0">
                The Best IT Solution With 10 Years of Experience
              </h1>
            </div>
            <p className="mb-4">
              Tempor erat elitr rebum at clita. Diam dolor diam ipsum et tempor
              sit. Aliqu diam amet diam et eos labore. Clita erat ipsum et lorem
              et sit, sed stet no labore lorem sit. Sanctus clita duo justo et
              tempor eirmod magna dolore erat amet
            </p>
            <div className="row g-0 mb-3">
              {points.map((row, i) => (
                <div key={i} className="col-sm-6">
                  {row.map((text, j) => (
                    <h5 key={j} className="mb-3">
                      <i className="fa fa-check text-primary me-3" />
                      {text}
                    </h5>
                  ))}
                </div>
              ))}
            </div>
            <Link href="/contact" className="btn btn-primary py-3 px-5 mt-3">
              Get In Touch
            </Link>
          </div>
          <div className="col-lg-5" style={{ minHeight: 500 }}>
            <div className="position-relative h-100 rounded overflow-hidden">
              <Image
                src="/img/about.jpg"
                alt="About us"
                fill
                style={{ objectFit: "cover" }}
                sizes="(max-width: 992px) 100vw, 50vw"
                unoptimized
              />
            </div>
          </div>
        </div>
      </div>
    </AnimateIn>
  );
}
