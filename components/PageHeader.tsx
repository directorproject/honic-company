import Link from "next/link";

interface PageHeaderProps {
  title: string;
  currentPage: string;
  image?: string;
}

export default function PageHeader({ title, currentPage, image = "/img/carousel-1.jpg" }: PageHeaderProps) {
  return (
    <div
      className="page-header-hero container-fluid py-5"
      style={{
        marginBottom: 50,
        background: `linear-gradient(rgba(9, 30, 62, 0.85), rgba(9, 30, 62, 0.85)), url(${image}) center center no-repeat`,
        backgroundSize: "cover",
      }}
    >
      <div className="row py-5 justify-content-center">
        <div className="col-12 pt-lg-5 mt-lg-5 text-center">
          <h1 className="display-4 text-white">{title}</h1>
          <div className="d-flex justify-content-center align-items-center flex-wrap gap-1 pt-1">
            <Link href="/" className="h5 text-white text-decoration-none">
              Home
            </Link>
            <i className="far fa-circle text-white px-2 small" />
            <span className="h5 text-white">{currentPage}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
