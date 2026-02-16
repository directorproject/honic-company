import { Analytics } from "@vercel/analytics/next";
import BootstrapClient from "@/components/BootstrapClient";
import Spinner from "@/components/Spinner";
import Topbar from "@/components/Topbar";
import Navbar from "@/components/Navbar";
import HeroCarousel from "@/components/HeroCarousel";
import SearchModal from "@/components/SearchModal";
import BlogSection from "@/components/BlogSection";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";

export const metadata = {
  title: "Blog - HonicLearn | News & Updates",
  description: "Latest articles and updates from HonicLearn and practical education in Tanzania.",
};

export default function BlogPage() {
  return (
    <>
      <BootstrapClient />
      <Spinner />
      <Topbar />
      <div className="container-fluid position-relative p-0">
        <Navbar />
        <HeroCarousel title="Our Blog" subtitle="Latest Articles & News" showButtons={false} currentPage="Blog" />
      </div>
      <SearchModal />
      <BlogSection />
      <Footer />
      <BackToTop />
      <Analytics />
    </>
  );
}
