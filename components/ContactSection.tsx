import AnimateIn from "./AnimateIn";

const contactItems = [
  {
    icon: "fa fa-phone-alt",
    title: "Call to ask any question",
    value: "+012 345 6789",
  },
  {
    icon: "fa fa-envelope-open",
    title: "Email to get free quote",
    value: "info@example.com",
  },
  {
    icon: "fa fa-map-marker-alt",
    title: "Visit our office",
    value: "123 Street, NY, USA",
  },
];

export default function ContactSection() {
  return (
    <AnimateIn className="container-fluid py-5" animation="fadeUp">
      <div className="container py-5">
        <div
          className="section-title text-center position-relative pb-3 mb-5 mx-auto"
          style={{ maxWidth: 600 }}
        >
          <h5 className="fw-bold text-primary text-uppercase">Contact Us</h5>
          <h1 className="mb-0">
            If You Have Any Query, Feel Free To Contact Us
          </h1>
        </div>
        <div className="row g-5 mb-5">
          {contactItems.map((item, i) => (
            <div key={i} className="col-lg-4">
              <div className="d-flex align-items-center">
                <div
                  className="bg-primary d-flex align-items-center justify-content-center rounded"
                  style={{ width: 60, height: 60 }}
                >
                  <i className={`${item.icon} text-white`} />
                </div>
                <div className="ps-4">
                  <h5 className="mb-2">{item.title}</h5>
                  <h4 className="text-primary mb-0">{item.value}</h4>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="row g-5">
          <div className="col-lg-6">
            <h4 className="mb-4">
              Send us a message and we will get back to you as soon as possible.
            </h4>
            <form>
              <div className="row g-3">
                <div className="col-md-6">
                  <input
                    type="text"
                    className="form-control border-0 bg-light px-4"
                    placeholder="Your Name"
                    style={{ height: 55 }}
                  />
                </div>
                <div className="col-md-6">
                  <input
                    type="email"
                    className="form-control border-0 bg-light px-4"
                    placeholder="Your Email"
                    style={{ height: 55 }}
                  />
                </div>
                <div className="col-12">
                  <input
                    type="text"
                    className="form-control border-0 bg-light px-4"
                    placeholder="Subject"
                    style={{ height: 55 }}
                  />
                </div>
                <div className="col-12">
                  <textarea
                    className="form-control border-0 bg-light px-4 py-3"
                    rows={4}
                    placeholder="Message"
                  />
                </div>
                <div className="col-12">
                  <button className="btn btn-primary w-100 py-3" type="submit">
                    Send Message
                  </button>
                </div>
              </div>
            </form>
          </div>
          <div className="col-lg-6">
            <iframe
              className="position-relative rounded w-100"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3001156.4288297426!2d-78.01371936852176!3d42.72876761954724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4ccc4bf0f123a5a9%3A0xddcfc6c1de189567!2sNew%20York%2C%20USA!5e0!3m2!1sen!2sbd!4v1603794290143!5m2!1sen!2sbd"
              width="100%"
              height="350"
              style={{ border: 0, minHeight: 350 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Office location map"
            />
          </div>
        </div>
      </div>
    </AnimateIn>
  );
}
