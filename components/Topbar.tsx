export default function Topbar() {
  return (
    <div className="container-fluid bg-dark px-5 d-none d-lg-block">
      <div className="row gx-0">
        <div className="col-lg-8 text-center text-lg-start mb-2 mb-lg-0">
          <div className="d-inline-flex align-items-center" style={{ height: 45 }}>
            <small className="me-3 text-light">
              <i className="fa fa-map-marker-alt me-2" />Tanzania
            </small>
            <small className="me-3 text-light">
              <i className="fa fa-envelope-open me-2" />info@honiclearn.com
            </small>
            <small className="text-light">
              <i className="fa fa-graduation-cap me-2" />HonicLearn · Practical Education
            </small>
          </div>
        </div>
        <div className="col-lg-4 text-center text-lg-end">
          <div className="d-inline-flex align-items-center" style={{ height: 45 }}>
            <a className="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2" href="#">
              <i className="fab fa-twitter fw-normal" />
            </a>
            <a className="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2" href="#">
              <i className="fab fa-facebook-f fw-normal" />
            </a>
            <a className="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2" href="#">
              <i className="fab fa-linkedin-in fw-normal" />
            </a>
            <a className="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2" href="#">
              <i className="fab fa-instagram fw-normal" />
            </a>
            <a className="btn btn-sm btn-outline-light btn-sm-square rounded-circle" href="#">
              <i className="fab fa-youtube fw-normal" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
