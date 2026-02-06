import AnimateIn from "./AnimateIn";

export default function QuoteSection() {
  return (
    <AnimateIn className="container-fluid py-5" animation="fadeUp">
      <div className="container py-5">
        <div className="row g-5">
          <div className="col-lg-7">
            <div className="section-title position-relative pb-3 mb-5">
              <h5 className="fw-bold text-primary text-uppercase">
                Get In Touch
              </h5>
              <h1 className="mb-0">
                Partner With HonicLearn for Practical Education
              </h1>
            </div>
            <div className="row gx-3">
              <div className="col-sm-6">
                <h5 className="mb-4">
                  <i className="fa fa-school text-primary me-3" />Schools & institutions
                </h5>
              </div>
              <div className="col-sm-6">
                <h5 className="mb-4">
                  <i className="fa fa-handshake text-primary me-3" />Suppliers & partners
                </h5>
              </div>
            </div>
            <p className="mb-4">
              Whether you are a school seeking STEM kits and workshops, a supplier interested in collaboration, or an institution wanting to strengthen hands-on education—we would like to hear from you. HonicLearn works with educational institutions across Tanzania to deliver practical, skills-based learning.
            </p>
            <div className="d-flex align-items-center mt-2">
              <div
                className="bg-primary d-flex align-items-center justify-content-center rounded"
                style={{ width: 60, height: 60 }}
              >
                <i className="fa fa-envelope text-white" />
              </div>
              <div className="ps-4">
                <h5 className="mb-2">Send us a message</h5>
                <h4 className="text-primary mb-0">Contact form below</h4>
              </div>
            </div>
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
                      <option value="">I am interested in...</option>
                      <option value="kits">Learning Kits</option>
                      <option value="workshops">Workshops & Training</option>
                      <option value="maintenance">Maintenance & Support</option>
                      <option value="partnership">Partnership / Supply</option>
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
                      Send Message
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
