import Link from "next/link";
import AnimateIn from "./AnimateIn";

export default function QuoteSection() {
  return (
    <AnimateIn className="container-fluid py-5" animation="fadeUp">
      <div className="container py-5">
        <div className="row g-5">
          <div className="col-lg-7">
            <div className="section-title section-title-shimmer position-relative pb-3 mb-5">
              <h5 className="fw-bold text-primary text-uppercase">
                Request A Quote
              </h5>
              <h1 className="mb-0">
                Need A Free Quote? Please Feel Free to Contact Us
              </h1>
            </div>
            <div className="row gx-3">
              <div className="col-sm-6">
                <h5 className="mb-4">
                  <i className="fa fa-reply text-primary me-3" />Reply within 24
                  hours
                </h5>
              </div>
              <div className="col-sm-6">
                <h5 className="mb-4">
                  <i className="fa fa-phone-alt text-primary me-3" />24 hrs
                  telephone support
                </h5>
              </div>
            </div>
            <p className="mb-4">
              Eirmod sed tempor lorem ut dolores. Aliquyam sit sadipscing kasd
              ipsum. Dolor ea et dolore et at sea ea at dolor, justo ipsum duo
              rebum sea invidunt voluptua. Eos vero eos vero ea et dolore eirmod
              et. Dolores diam duo invidunt lorem. Elitr ut dolores magna sit.
              Sea dolore sanctus sed et. Takimata takimata sanctus sed.
            </p>
            <p className="mb-0 mt-2">
              For any questions or to get in touch, please visit our{" "}
              <Link href="/contact" className="text-primary fw-bold">Contact page</Link>.
            </p>
          </div>
          <div className="col-lg-5">
            <div className="bg-primary rounded h-100 d-flex align-items-center p-5">
              <form>
                <div className="row g-3">
                  <div className="col-12">
                    <input
                      type="text"
                      className="form-control bg-light border-0"
                      placeholder="Your Name"
                      style={{ height: 55 }}
                    />
                  </div>
                  <div className="col-12">
                    <input
                      type="email"
                      className="form-control bg-light border-0"
                      placeholder="Your Email"
                      style={{ height: 55 }}
                    />
                  </div>
                  <div className="col-12">
                    <select
                      className="form-select bg-light border-0"
                      style={{ height: 55 }}
                    >
                      <option value="">Select A Service</option>
                      <option value="1">Service 1</option>
                      <option value="2">Service 2</option>
                      <option value="3">Service 3</option>
                    </select>
                  </div>
                  <div className="col-12">
                    <textarea
                      className="form-control bg-light border-0"
                      rows={3}
                      placeholder="Message"
                    />
                  </div>
                  <div className="col-12">
                    <button className="btn btn-dark w-100 py-3" type="submit">
                      Request A Quote
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </AnimateIn>
  );
}
