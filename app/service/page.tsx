import { Analytics } from "@vercel/analytics/next";
import BootstrapClient from "@/components/BootstrapClient";
import Spinner from "@/components/Spinner";
import Topbar from "@/components/Topbar";
import Navbar from "@/components/Navbar";
import PageHeader from "@/components/PageHeader";
import SearchModal from "@/components/SearchModal";
import ProductsServicesDetail from "@/components/ProductsServicesDetail";
import ServicesSection from "@/components/ServicesSection";
import VendorsSection from "@/components/VendorsSection";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";

export const metadata = {
  title: "Products & Services - HonicLearn | Practical Learning Solutions",
  description: "R&D, workshops & training, maintenance, STEM learning kits, and inclusive digital programs for Tanzania.",
};

export default function ServicePage() {
  return (
    <>
      <BootstrapClient />
      <Spinner />
      <Topbar />
      <div className="container-fluid position-relative p-0">
        <Navbar />
        <PageHeader title="Products & Services" currentPage="Services" />
      </div>
      <SearchModal />
      <section
        className="container-fluid py-4"
        style={{
          background: "linear-gradient(135deg, rgba(9, 30, 62, 0.05), rgba(9, 30, 62, 0.01))",
          borderBottom: "1px solid rgba(9, 30, 62, 0.08)",
        }}
      >
        <div className="container">
          <div className="row g-3 align-items-center">
            <div className="col-lg-8">
              <h5 className="fw-bold text-primary text-uppercase mb-2">Service Approach</h5>
              <p className="mb-0" style={{ color: "#3c4a63", lineHeight: 1.7 }}>
                End-to-end practical education delivery: solution design, kit deployment,
                training, and long-term technical support.
              </p>
            </div>
            <div className="col-lg-4 text-lg-end">
              <a href="#service-packages" className="btn btn-primary px-4 py-2">
                Explore Services
              </a>
            </div>
          </div>
        </div>
      </section>
      <section id="service-packages">
        <ProductsServicesDetail />
      </section>
      <section>
        <ServicesSection />
      </section>
      <section>
        <VendorsSection />
      </section>
      <Footer />
      <BackToTop />
      <Analytics />
    </>
  );
}
