import Image from "next/image";
import Link from "next/link";
import { Analytics } from "@vercel/analytics/next";
import BootstrapClient from "@/components/BootstrapClient";
import Spinner from "@/components/Spinner";
import Topbar from "@/components/Topbar";
import Navbar from "@/components/Navbar";
import PageHeader from "@/components/PageHeader";
import SearchModal from "@/components/SearchModal";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";

type BlogPost = {
  title: string;
  date: string;
  image: string;
  author: string;
  content: string[];
};

const posts: Record<string, BlogPost> = {
  "creative-digital-solutions": {
    title: "Creative & Innovative Digital Solutions",
    date: "Jan 01, 2025",
    image: "/img/blog-innovation-hexagon.png",
    author: "Admin",
    content: [
      "At HonicLearn, creative digital solutions connect curriculum goals with practical execution. We combine physical training systems, guided digital content, and structured delivery to move learners from theory to applied outcomes.",
      "Each solution starts with competency mapping, then translates targets into measurable activities. This gives teachers a clearer implementation path and gives institutions better visibility of learning progress.",
      "The result is a more reliable learning model that improves engagement, supports scale, and strengthens readiness for real technology environments.",
    ],
  },
  "it-solutions-for-business": {
    title: "Custom IT Solutions for Your Business",
    date: "Jan 02, 2025",
    image: "/img/blog-it-solutions.png",
    author: "Admin",
    content: [
      "Institutions and service-driven organizations often need systems that match their exact operations. Off-the-shelf tools may help initially, but custom IT solutions improve long-term efficiency and control.",
      "HonicLearn supports solution design for training management, reporting workflows, technical support tracking, and deployment planning. The focus is practical integration, not complexity for its own sake.",
      "With clear architecture and phased implementation, organizations can reduce operational risk while building a stable digital base for growth.",
    ],
  },
  "grow-your-business": {
    title: "Hands-On Workshops: Soldering & Electronics in Action",
    date: "Jan 03, 2025",
    image: "/img/blog-workshop-soldering.png",
    author: "HonicLearn",
    content: [
      "Our soldering and electronics workshops are built for direct technical skill development. Learners work on real circuit tasks using practical kits, tools, and instructor-guided procedures.",
      "Sessions cover safe handling, component preparation, soldering accuracy, and troubleshooting fundamentals. The process is structured so participants can understand both method and purpose at every stage.",
      "This approach builds confidence in practical operations and creates a clear bridge between classroom concepts and production-style tasks.",
    ],
  },
  "cyber-security-tips": {
    title: "Cyber Security Best Practices in 2025",
    date: "Jan 04, 2025",
    image: "/img/blog-cyber-security.png",
    author: "Admin",
    content: [
      "As schools and training centers expand digital learning, cyber security becomes a core operational requirement. Protecting devices, accounts, and learning data is now essential.",
      "High-impact basics include strong password policy, role-based access, regular patching, endpoint protection, and verified backup routines.",
      "When institutions standardize these controls, they reduce disruption risk and improve trust across learners, staff, and partners.",
    ],
  },
  "web-development-trends": {
    title: "Web Development Trends to Watch",
    date: "Jan 05, 2025",
    image: "/img/blog-web-development-trends.png",
    author: "Admin",
    content: [
      "Web platforms continue moving toward modular architecture, faster delivery, and stronger accessibility standards. For education-focused organizations, this directly improves user experience and adoption.",
      "Responsive-first design, clean content structure, and measurable analytics are now baseline requirements for modern service platforms.",
      "Teams that prioritize maintainability can adapt faster to changing program needs, stakeholder expectations, and new service models.",
    ],
  },
  "digital-transformation": {
    title: "Digital Transformation for Startups",
    date: "Jan 06, 2025",
    image: "/img/blog-digital-transformation.png",
    author: "Admin",
    content: [
      "Digital transformation works best when it addresses operational bottlenecks first. Startups should focus on systems that improve execution, reporting, and customer response time.",
      "A practical rollout model includes process mapping, platform selection, controlled implementation, and performance review with clear metrics.",
      "This creates a balanced path to scale where teams improve capability without losing speed or operational clarity.",
    ],
  },
  "pcb-milling-workshop": {
    title: "Practical Skills: PCB Milling & Precision Tools in the Workshop",
    date: "Feb 06, 2026",
    image: "/img/blog-pcb-workshop.png",
    author: "HonicLearn",
    content: [
      "In this workshop, learners use precision tools and rotary systems to work directly on circuit boards. The training emphasizes process discipline, safety, and technical accuracy.",
      "Participants move through setup, guided operation, inspection, and adjustment cycles. This builds stronger technical habits than theory-only learning.",
      "By the end of the session, learners gain practical competencies that are relevant for electronics labs, prototyping environments, and technical production tasks.",
    ],
  },
  "honiclearn-resistor-kits": {
    title: "HonicLearn Resistor Kits: Hands-On Components for STEM Learning",
    date: "Feb 06, 2026",
    image: "/img/blog-resistor-kits.png",
    author: "HonicLearn",
    content: [
      "HonicLearn resistor kits are designed for practical STEM instruction. Each module supports direct experimentation in electronics and physics with real components.",
      "Kits align with classroom outcomes and can be delivered across different learner levels, making practical sessions more consistent and measurable.",
      "Through wiring, measurement, and troubleshooting activities, students build applied understanding and stronger problem-solving capability.",
    ],
  },
};

export async function generateStaticParams() {
  return Object.keys(posts).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = posts[slug];
  if (!post) return { title: "Post - HonicLearn" };
  return {
    title: `${post.title} - HonicLearn`,
    description: post.content[0].slice(0, 160),
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = posts[slug];

  if (!post) {
    return (
      <>
        <BootstrapClient />
        <Topbar />
        <div className="container-fluid position-relative p-0">
          <Navbar />
        </div>
        <div className="container py-5 text-center">
          <h1>Post not found</h1>
          <Link href="/blog" className="btn btn-primary mt-3">
            Back to Blog
          </Link>
        </div>
        <Footer />
        <Analytics />
      </>
    );
  }

  return (
    <>
      <BootstrapClient />
      <Spinner />
      <Topbar />
      <div className="container-fluid position-relative p-0">
        <Navbar />
        <PageHeader title={post.title} currentPage="Blog" />
      </div>
      <SearchModal />
      <div className="container-fluid py-5">
        <div className="container py-5">
          <div className="row g-5">
            <div className="col-lg-8 mx-auto">
              <div className="bg-light rounded overflow-hidden mb-4">
                <div className="position-relative blog-post-image">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    style={{ objectFit: "cover" }}
                    sizes="(max-width: 992px) 100vw, 66vw"
                    unoptimized
                  />
                </div>
                <div className="p-5">
                  <div className="d-flex flex-wrap gap-3 mb-3">
                    <span className="text-primary">
                      <i className="fa fa-calendar-alt me-1" />
                      {post.date}
                    </span>
                    <span className="text-primary">
                      <i className="fa fa-user me-1" />
                      {post.author}
                    </span>
                  </div>
                  <h1 className="mb-4">{post.title}</h1>
                  {post.content.map((paragraph, index) => (
                    <p
                      key={`${post.title}-${index}`}
                      className={index === 0 ? "lead" : index === post.content.length - 1 ? "mb-0" : ""}
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
              <Link href="/blog" className="btn btn-primary">
                <i className="bi bi-arrow-left me-1" />
                Back to Blog
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
      <BackToTop />
      <Analytics />
    </>
  );
}
