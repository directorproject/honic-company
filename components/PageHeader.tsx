import Link from "next/link";

interface PageHeaderProps {
  title: string;
  currentPage: string;
}

export default function PageHeader({ title, currentPage }: PageHeaderProps) {
  return (
    <div className="container-fluid bg-primary py-5" style={{ marginBottom: 90 }}>
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
