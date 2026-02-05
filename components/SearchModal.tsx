export default function SearchModal() {
  return (
    <div
      className="modal fade"
      id="searchModal"
      tabIndex={-1}
      aria-labelledby="searchModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-fullscreen">
        <div
          className="modal-content"
          style={{ background: "rgba(9, 30, 62, 0.7)" }}
        >
          <div className="modal-header border-0">
            <button
              type="button"
              className="btn bg-white btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            />
          </div>
          <div className="modal-body d-flex align-items-center justify-content-center">
            <div className="input-group" style={{ maxWidth: 600 }}>
              <input
                type="text"
                className="form-control bg-transparent border-primary p-3 text-white"
                placeholder="Type search keyword"
                aria-label="Search"
              />
              <button className="btn btn-primary px-4" type="button">
                <i className="bi bi-search" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
