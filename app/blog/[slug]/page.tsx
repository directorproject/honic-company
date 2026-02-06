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

const posts: Record<
  string,
  { title: string; date: string; image: string; author: string; content: string }
> = {
  "creative-digital-solutions": {
    title: "Creative & Innovative Digital Solutions",
    date: "Jan 01, 2025",
    image: "/img/carousel-1.jpg",
    author: "Admin",
    content:
      "Tempor erat elitr rebum at clita. Diam dolor diam ipsum et tempor sit. Aliqu diam amet diam et eos labore. Clita erat ipsum et lorem et sit, sed stet no labore lorem sit. Sanctus clita duo justo et tempor eirmod magna dolore erat amet. Stet no labore lorem sit. Sanctus clita duo justo et tempor eirmod magna dolore erat amet.",
  },
  "it-solutions-for-business": {
    title: "Custom IT Solutions for Your Business",
    date: "Jan 02, 2025",
    image: "/img/carousel-2.jpg",
    author: "Admin",
    content:
      "Tempor erat elitr rebum at clita. Diam dolor diam ipsum et tempor sit. Aliqu diam amet diam et eos labore. Clita erat ipsum et lorem et sit, sed stet no labore lorem sit. Sanctus clita duo justo et tempor eirmod magna dolore erat amet.",
  },
  "grow-your-business": {
    title: "We Are Here to Grow Your Business",
    date: "Jan 03, 2025",
    image: "/img/feature.jpg",
    author: "Admin",
    content:
      "Tempor erat elitr rebum at clita. Diam dolor diam ipsum et tempor sit. Aliqu diam amet diam et eos labore. Clita erat ipsum et lorem et sit, sed stet no labore lorem sit.",
  },
  "cyber-security-tips": {
    title: "Cyber Security Best Practices in 2025",
    date: "Jan 04, 2025",
    image: "/img/about.jpg",
    author: "Admin",
    content:
      "Tempor erat elitr rebum at clita. Diam dolor diam ipsum et tempor sit. Aliqu diam amet diam et eos labore. Clita erat ipsum et lorem et sit.",
  },
  "web-development-trends": {
    title: "Web Development Trends to Watch",
    date: "Jan 05, 2025",
    image: "/img/team-1.jpg",
    author: "Admin",
    content:
      "Tempor erat elitr rebum at clita. Diam dolor diam ipsum et tempor sit. Aliqu diam amet diam et eos labore. Clita erat ipsum et lorem et sit, sed stet no labore lorem sit. Sanctus clita duo justo et tempor eirmod magna dolore erat amet.",
  },
  "digital-transformation": {
    title: "Digital Transformation for Startups",
    date: "Jan 06, 2025",
    image: "/img/team-2.jpg",
    author: "Admin",
    content:
      "Tempor erat elitr rebum at clita. Diam dolor diam ipsum et tempor sit. Aliqu diam amet diam et eos labore. Clita erat ipsum et lorem et sit.",
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
  if (!post) return { title: "Post - Honic" };
  return { title: `${post.title} - Honic`, description: post.content.slice(0, 160) };
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
                <div className="position-relative" style={{ height: 400 }}>
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
                  <p className="lead">{post.content}</p>
                  <p className="mb-0">{post.content}</p>
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
