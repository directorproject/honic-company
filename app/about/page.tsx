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
import TypewriterText from "@/components/TypewriterText";

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
      <div className="container py-0 about-quote-wrap" style={{ marginTop: "-2.5rem", marginBottom: 0 }}>
        <div className="row justify-content-center">
          <div className="col-12">
            <p
              className="about-quote mb-0 text-start text-lg-center fw-bold fst-italic"
              style={{
                color: "#0b4aa0",
                lineHeight: 1.7,
                background: "transparent",
                border: "none",
                padding: "0.9rem 1.1rem",
                borderRadius: 0,
                position: "relative",
                overflow: "hidden",
              }}
            >
              <span
                style={{
                  position: "absolute",
                  inset: 0,
                  background: "transparent",
                  pointerEvents: "none",
                }}
              />
              <TypewriterText text="Because we believe learning should open doors to the future, we bring learning experiences to life through practical systems." />
            </p>
          </div>
        </div>
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
