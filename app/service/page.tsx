import BootstrapClient from "@/components/BootstrapClient";
import Spinner from "@/components/Spinner";
import Topbar from "@/components/Topbar";
import Navbar from "@/components/Navbar";
import PageHeader from "@/components/PageHeader";
import SearchModal from "@/components/SearchModal";
import ServicesSection from "@/components/ServicesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import VendorsSection from "@/components/VendorsSection";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";

export const metadata = {
  title: "Our Services - Honic",
  description: "Custom IT solutions for your business",
};

export default function ServicePage() {
  return (
    <>
      <BootstrapClient />
      <Spinner />
      <Topbar />
      <div className="container-fluid position-relative p-0">
        <Navbar />
        <PageHeader title="Services" currentPage="Services" />
      </div>
      <SearchModal />
      <ServicesSection />
      <TestimonialsSection />
      <VendorsSection />
      <Footer />
      <BackToTop />
    </>
  );
}
