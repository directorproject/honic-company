import BootstrapClient from "@/components/BootstrapClient";
import Spinner from "@/components/Spinner";
import Topbar from "@/components/Topbar";
import Navbar from "@/components/Navbar";
import PageHeader from "@/components/PageHeader";
import SearchModal from "@/components/SearchModal";
import ContactSection from "@/components/ContactSection";
import VendorsSection from "@/components/VendorsSection";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";

export const metadata = {
  title: "Contact Us - Honic",
  description: "Get in touch with us",
};

export default function ContactPage() {
  return (
    <>
      <BootstrapClient />
      <Spinner />
      <Topbar />
      <div className="container-fluid position-relative p-0">
        <Navbar />
        <PageHeader title="Contact Us" currentPage="Contact" />
      </div>
      <SearchModal />
      <ContactSection />
      <VendorsSection />
      <Footer />
      <BackToTop />
    </>
  );
}
