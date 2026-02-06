import Image from "next/image";
import AnimateIn from "./AnimateIn";

const partnershipLogos = [
  { src: "/img/dit_company.png", alt: "DIT Company", large: true },
  { src: "/img/ds.png", alt: "DS", large: false },
  { src: "/img/sdm.png", alt: "SDM", large: true, height: 180, maxWidth: 405 },
];

export default function VendorsSection() {
  return (
    <AnimateIn className="container-fluid py-5" animation="fadeUp">
      <div className="container py-5 mb-5">
        <div className="bg-white">
          <div className="text-center mb-4">
            <h5 className="fw-bold text-primary text-uppercase">Our Partners</h5>
            <h2 className="mb-0">Trusted by Leading Organizations</h2>
          </div>
          <div className="row g-4 align-items-center justify-content-center">
            {partnershipLogos.map(({ src, alt, large, height: customHeight, maxWidth: customMaxWidth }, i) => (
              <div key={i} className="col-4 col-md-3 col-lg-2 text-center">
                <div
                  className="d-inline-block"
                  style={{
                    height: customHeight ?? (large ? 140 : 100),
                    position: "relative",
                    width: "100%",
                    maxWidth: customMaxWidth ?? (large ? 400 : 300),
                  }}
                >
                  <Image
                    src={src}
                    alt={alt}
                    fill
                    style={{ objectFit: "contain" }}
                    unoptimized
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </AnimateIn>
  );
}
