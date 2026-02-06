import { Analytics } from "@vercel/analytics/next";
import BootstrapClient from "@/components/BootstrapClient";
import Spinner from "@/components/Spinner";
import Topbar from "@/components/Topbar";
import Navbar from "@/components/Navbar";
import PageHeader from "@/components/PageHeader";
import SearchModal from "@/components/SearchModal";
import AboutSection from "@/components/AboutSection";
import TeamSection from "@/components/TeamSection";
import VendorsSection from "@/components/VendorsSection";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";

export const metadata = {
  title: "About Us - Honic",
  description: "Learn about our IT solutions and team",
};

export default function AboutPage() {
  return (
    <>
      <BootstrapClient />
      <Spinner />
      <Topbar />
      <div className="container-fluid position-relative p-0">
        <Navbar />
        <PageHeader title="About Us" currentPage="About" />
      </div>
      <SearchModal />
      <AboutSection />
      <TeamSection />
      <VendorsSection />
      <Footer />
      <BackToTop />
      <Analytics />
    </>
  );
}
