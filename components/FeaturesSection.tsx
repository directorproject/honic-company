import Image from "next/image";
import AnimateIn from "./AnimateIn";

const leftFeatures = [
  { icon: "fa fa-cubes", title: "Best In Industry", text: "Magna sea eos sit dolor, ipsum amet lorem diam dolor eos et diam dolor" },
  { icon: "fa fa-award", title: "Award Winning", text: "Magna sea eos sit dolor, ipsum amet lorem diam dolor eos et diam dolor" },
];
const rightFeatures = [
  { icon: "fa fa-users-cog", title: "Professional Staff", text: "Magna sea eos sit dolor, ipsum amet lorem diam dolor eos et diam dolor" },
  { icon: "fa fa-phone-alt", title: "24/7 Support", text: "Magna sea eos sit dolor, ipsum amet lorem diam dolor eos et diam dolor" },
];

export default function FeaturesSection() {
  return (
    <AnimateIn className="container-fluid py-5" animation="fadeUp">
      <div className="container py-5">
        <div className="section-title text-center position-relative pb-3 mb-5 mx-auto" style={{ maxWidth: 600 }}>
          <h5 className="fw-bold text-primary text-uppercase">Why Choose Us</h5>
          <h1 className="mb-0">We Are Here to Grow Your Business Exponentially</h1>
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
          <div className="col-lg-4" style={{ minHeight: 350 }}>
            <div className="position-relative h-100 rounded overflow-hidden">
              <Image
                src="/img/feature.jpg"
                alt="Features"
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
