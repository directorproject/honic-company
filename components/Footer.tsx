import Link from "next/link";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Our Services", href: "/service" },
  { label: "Latest Blog", href: "/blog" },
  { label: "Contact Us", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="footer-wrapper">
      <div className="container-fluid bg-dark text-light mt-5">
        <div className="container">
          <div className="row gx-5">
            <div className="col-lg-4 col-md-6 footer-about">
              <div className="d-flex flex-column align-items-center justify-content-center text-center h-100 bg-primary p-4">
                <Link href="/" className="navbar-brand">
                  <h1 className="m-0 text-white">
                    <i className="fa fa-user-tie me-2" />Honic
                  </h1>
                </Link>
                <p className="mt-3 mb-4">
                  Personal subscription to our website: enter your email for updates, news, and offers.
                </p>
                <form action="">
                  <div className="input-group">
                    <input
                      type="email"
                      className="form-control border-white p-3"
                      placeholder="Your Email"
                      aria-label="Email"
                    />
                    <button className="btn btn-dark" type="submit">
                      Subscribe
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-lg-8 col-md-6">
              <div className="row gx-5">
                <div className="col-lg-6 col-md-12 pt-5 mb-5">
                  <div className="section-title section-title-sm section-title-shimmer position-relative pb-3 mb-4">
                    <h3 className="text-light mb-0">Quick Links</h3>
                  </div>
                  <div className="link-animated d-flex flex-column justify-content-start">
                    {quickLinks.map((link) => (
                      <Link
                        key={link.href + link.label}
                        className="text-light mb-2"
                        href={link.href}
                      >
                        <i className="bi bi-arrow-right text-primary me-2" />
                        {link.label}
                      </Link>
                    ))}
                  </div>
                </div>
                <div className="col-lg-6 col-md-12 pt-0 pt-lg-5 mb-5">
                  <div className="section-title section-title-sm section-title-shimmer position-relative pb-3 mb-4">
                    <h3 className="text-light mb-0">Popular Links</h3>
                  </div>
                  <div className="link-animated d-flex flex-column justify-content-start">
                    {quickLinks.map((link) => (
                      <Link
                        key={link.href + link.label}
                        className="text-light mb-2"
                        href={link.href}
                      >
                        <i className="bi bi-arrow-right text-primary me-2" />
                        {link.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid text-white" style={{ background: "#061429" }}>
        <div className="container text-center">
          <div className="row justify-content-end">
            <div className="col-lg-8 col-md-6">
              <div
                className="d-flex align-items-center justify-content-center"
                style={{ height: 75 }}
              >
                <p className="mb-0">
                  &copy; <span className="text-white border-bottom">Honic</span>. All Rights Reserved.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
