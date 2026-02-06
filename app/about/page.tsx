import { Analytics } from "@vercel/analytics/next";
import BootstrapClient from "@/components/BootstrapClient";
import Spinner from "@/components/Spinner";
import Topbar from "@/components/Topbar";
import Navbar from "@/components/Navbar";
import PageHeader from "@/components/PageHeader";
import SearchModal from "@/components/SearchModal";
import AboutHonicLearnIntro from "@/components/AboutHonicLearnIntro";
import VisionMissionSection from "@/components/VisionMissionSection";
import AchievementsSection from "@/components/AchievementsSection";
import TeamSection from "@/components/TeamSection";
import VendorsSection from "@/components/VendorsSection";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";

export const metadata = {
  title: "About HonicLearn - Vision, Mission & History | Honic Company",
  description: "HonicLearn bridges theory and hands-on learning in Tanzania. Established March 2025. Vision, mission, and background.",
};

export default function AboutPage() {
  return (
    <>
      <BootstrapClient />
      <Spinner />
      <Topbar />
      <div className="container-fluid position-relative p-0">
        <Navbar />
        <PageHeader title="About HonicLearn" currentPage="About" />
      </div>
      <SearchModal />
      <AboutHonicLearnIntro />
      <VisionMissionSection />
      <AchievementsSection />
      <TeamSection />
      <VendorsSection />
      <Footer />
      <BackToTop />
      <Analytics />
    </>
  );
}
