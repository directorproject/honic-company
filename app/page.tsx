import { Analytics } from "@vercel/analytics/next";
import BootstrapClient from "@/components/BootstrapClient";
import Spinner from "@/components/Spinner";
import Topbar from "@/components/Topbar";
import Navbar from "@/components/Navbar";
import HeroCarousel from "@/components/HeroCarousel";
import SearchModal from "@/components/SearchModal";
import Facts from "@/components/Facts";
import AboutSection from "@/components/AboutSection";
import FeaturesSection from "@/components/FeaturesSection";
import ServicesSection from "@/components/ServicesSection";
import QuoteSection from "@/components/QuoteSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import TeamSection from "@/components/TeamSection";
import VendorsSection from "@/components/VendorsSection";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";

export default function Home() {
  return (
    <>
      <BootstrapClient />
      <Spinner />
      <Topbar />
      <div className="container-fluid position-relative p-0">
        <Navbar />
        <HeroCarousel />
      </div>
      <SearchModal />
      <Facts />
      <AboutSection />
      <FeaturesSection />
      <ServicesSection />
      <QuoteSection />
      <TestimonialsSection />
      <TeamSection />
      <VendorsSection />
      <Footer />
      <BackToTop />
      <Analytics />
    </>
  );
}
