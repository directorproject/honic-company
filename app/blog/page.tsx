import { Analytics } from "@vercel/analytics/next";
import BootstrapClient from "@/components/BootstrapClient";
import Spinner from "@/components/Spinner";
import Topbar from "@/components/Topbar";
import Navbar from "@/components/Navbar";
import PageHeader from "@/components/PageHeader";
import SearchModal from "@/components/SearchModal";
import BlogSection from "@/components/BlogSection";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";

export const metadata = {
  title: "Blog - Honic",
  description: "Latest articles and news from Honic",
};

export default function BlogPage() {
  return (
    <>
      <BootstrapClient />
      <Spinner />
      <Topbar />
      <div className="container-fluid position-relative p-0">
        <Navbar />
        <PageHeader title="Our Blog" currentPage="Blog" />
      </div>
      <SearchModal />
      <BlogSection />
      <Footer />
      <BackToTop />
      <Analytics />
    </>
  );
}
