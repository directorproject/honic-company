import Image from "next/image";
import Link from "next/link";
import AnimateIn from "./AnimateIn";

const posts = [
  {
    slug: "creative-digital-solutions",
    title: "Creative & Innovative Digital Solutions",
    excerpt:
      "Diam dolor diam ipsum et tempor sit. Aliqu diam amet diam et eos labore. Clita erat ipsum et lorem et sit.",
    date: "Jan 01, 2025",
    image: "/img/carousel-1.jpg",
    author: "Admin",
  },
  {
    slug: "it-solutions-for-business",
    title: "Custom IT Solutions for Your Business",
    excerpt:
      "Diam dolor diam ipsum et tempor sit. Aliqu diam amet diam et eos labore. Clita erat ipsum et lorem et sit.",
    date: "Jan 02, 2025",
    image: "/img/carousel-2.jpg",
    author: "Admin",
  },
  {
    slug: "grow-your-business",
    title: "We Are Here to Grow Your Business",
    excerpt:
      "Diam dolor diam ipsum et tempor sit. Aliqu diam amet diam et eos labore. Clita erat ipsum et lorem et sit.",
    date: "Jan 03, 2025",
    image: "/img/feature.jpg",
    author: "Admin",
  },
  {
    slug: "cyber-security-tips",
    title: "Cyber Security Best Practices in 2025",
    excerpt:
      "Diam dolor diam ipsum et tempor sit. Aliqu diam amet diam et eos labore. Clita erat ipsum et lorem et sit.",
    date: "Jan 04, 2025",
    image: "/img/about.jpg",
    author: "Admin",
  },
  {
    slug: "web-development-trends",
    title: "Web Development Trends to Watch",
    excerpt:
      "Diam dolor diam ipsum et tempor sit. Aliqu diam amet diam et eos labore. Clita erat ipsum et lorem et sit.",
    date: "Jan 05, 2025",
    image: "/img/team-1.jpg",
    author: "Admin",
  },
  {
    slug: "digital-transformation",
    title: "Digital Transformation for Startups",
    excerpt:
      "Diam dolor diam ipsum et tempor sit. Aliqu diam amet diam et eos labore. Clita erat ipsum et lorem et sit.",
    date: "Jan 06, 2025",
    image: "/img/team-2.jpg",
    author: "Admin",
  },
];

export default function BlogSection() {
  return (
    <AnimateIn className="container-fluid py-5" animation="fadeUp">
      <div className="container py-5">
        <div
          className="section-title text-center position-relative pb-3 mb-5 mx-auto"
          style={{ maxWidth: 600 }}
        >
          <h5 className="fw-bold text-primary text-uppercase">Our Blog</h5>
          <h1 className="mb-0">Latest Articles & News</h1>
        </div>
        <div className="row g-5">
          {posts.map((post, i) => (
            <div key={post.slug} className="col-lg-4 col-md-6">
              <div className="blog-item bg-light rounded overflow-hidden h-100">
                <div className="position-relative overflow-hidden" style={{ height: 240 }}>
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    style={{ objectFit: "cover" }}
                    sizes="(max-width: 768px) 100vw, (max-width: 992px) 50vw, 33vw"
                    unoptimized
                  />
                  <div
                    className="bg-primary text-white position-absolute bottom-0 start-0 px-3 py-2"
                    style={{ fontSize: "0.875rem" }}
                  >
                    <i className="fa fa-calendar-alt me-1" />
                    {post.date}
                  </div>
                </div>
                <div className="p-4">
                  <div className="d-flex mb-2">
                    <small className="text-primary text-uppercase me-3">
                      <i className="fa fa-user me-1" />
                      {post.author}
                    </small>
                  </div>
                  <h5 className="mb-3">{post.title}</h5>
                  <p className="mb-3 text-muted">{post.excerpt}</p>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="text-primary fw-medium"
                  >
                    Read More <i className="bi bi-arrow-right ms-1" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </AnimateIn>
  );
}
