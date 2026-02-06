import Image from "next/image";
import AnimateIn from "./AnimateIn";

const partners = [
  { src: "/img/vendor-1.jpg", alt: "Samsung" },
  { src: "/img/partner-dit.png", alt: "Dar es Salaam Institute of Technology" },
  { src: "/img/partner-dit-studio.png", alt: "DIT Design Studio" },
  { src: "/img/partner-swahili-dmakers.png", alt: "Swahili DMAKERS" },
  { src: "/img/partner-google-pixel.png", alt: "Google Pixel" },
];

export default function VendorsSection() {
  return (
    <AnimateIn className="container-fluid py-5" animation="fadeUp">
      <div className="container py-5 mb-5">
        <div className="bg-white">
          <div className="row g-4 align-items-center justify-content-center">
            {partners.map(({ src, alt }, i) => (
              <div key={i} className="col-6 col-md-4 col-lg text-center">
                <div
                  className="d-inline-block partner-logo-wrap"
                  style={{ height: 56, position: "relative", width: "100%", maxWidth: 140 }}
                >
                  <Image
                    src={src}
                    alt={alt}
                    fill
                    style={{ objectFit: "contain" }}
                    sizes="140px"
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
