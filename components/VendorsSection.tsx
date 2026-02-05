import Image from "next/image";
import AnimateIn from "./AnimateIn";

const vendors = Array.from({ length: 9 }, (_, i) => `/img/vendor-${i + 1}.jpg`);

export default function VendorsSection() {
  return (
    <AnimateIn className="container-fluid py-5" animation="fadeUp">
      <div className="container py-5 mb-5">
        <div className="bg-white">
          <div className="row g-4 align-items-center justify-content-center">
            {vendors.map((src, i) => (
              <div key={i} className="col-4 col-md-3 col-lg-2 text-center">
                <div
                  className="d-inline-block"
                  style={{ height: 60, position: "relative", width: "100%", maxWidth: 120 }}
                >
                  <Image
                    src={src}
                    alt={`Vendor ${i + 1}`}
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
