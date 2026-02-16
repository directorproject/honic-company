import { Analytics } from "@vercel/analytics/next";
import BootstrapClient from "@/components/BootstrapClient";
import Spinner from "@/components/Spinner";
import Topbar from "@/components/Topbar";
import Navbar from "@/components/Navbar";
import HeroCarousel from "@/components/HeroCarousel";
import SearchModal from "@/components/SearchModal";
import ContactSection from "@/components/ContactSection";
import VendorsSection from "@/components/VendorsSection";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";

export const metadata = {
  title: "Contact HonicLearn - Schools, Institutions & Partners | Honic Company",
  description: "Partner with HonicLearn for STEM kits, workshops, maintenance, or supply. Get in touch.",
};

export default function ContactPage() {
  return (
    <>
      <BootstrapClient />
      <Spinner />
      <Topbar />
      <div className="container-fluid position-relative p-0">
        <Navbar />
        <HeroCarousel title="Contact Us" subtitle="Get In Touch" showButtons={false} currentPage="Contact" />
      </div>
      <SearchModal />
      <ContactSection />
      <VendorsSection />
      <Footer />
      <BackToTop />
      <Analytics />
    </>
  );
}
