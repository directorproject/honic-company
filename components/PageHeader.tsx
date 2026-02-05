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
        marginBottom: 90,
        background: `linear-gradient(rgba(9, 30, 62, 0.85), rgba(9, 30, 62, 0.85)), url(${image}) center center no-repeat`,
        backgroundSize: "cover",
      }}
    >
      <div className="row py-5">
        <div className="col-12 pt-lg-5 mt-lg-5 text-center">
          <h1 className="display-4 text-white">{title}</h1>
          <Link href="/" className="h5 text-white">
            Home
          </Link>
          <i className="far fa-circle text-white px-2" />
          <span className="h5 text-white">{currentPage}</span>
        </div>
      </div>
    </div>
  );
}
