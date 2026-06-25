import { Link } from "react-router-dom";
import "../styles/portfolio.css";

const categories = [
  "Landing Pages",
  "Business Websites",
  "Booking Websites",
  "Online Stores",
  "Brand Graphics",
  "Social Launch Kits",
];

const projects = [
  {
    title: "Glow Studio Landing Page",
    type: "Beauty Service Landing Page",
    service: "Landing Page",
    image: "/images/portfolio/landing-preview.jpg",
    text: "A focused landing page concept for a beauty studio promoting services, offers, and clear inquiries.",
  },
  {
    title: "Luxe Bookings Website",
    type: "Appointment-Based Service Brand",
    service: "Booking Website",
    image: "/images/portfolio/booking-preview.jpg",
    text: "A booking-ready website concept with service details, inquiry form direction, and follow-up options.",
  },
  {
    title: "Soft Launch Graphics Kit",
    type: "Brand Launch Visuals",
    service: "Social Launch Kit",
    image: "/images/portfolio/social-preview.jpg",
    text: "A branded launch visuals concept for announcing services, bookings, and website launch updates.",
  },
  {
    title: "Bloom Online Store Setup",
    type: "Product-Based Business",
    service: "Online Store Setup",
    image: "/images/portfolio/store-preview.jpg",
    text: "A custom online store setup concept for a product-based business preparing to sell through a store platform.",
  },
];

const caseStudies = [
  {
    title: "Landing Page Concept",
    problem:
      "The business needed a simple online page to explain one main service and receive inquiries.",
    goal:
      "Create a clean landing page that quickly explains the offer and guides visitors toward contacting the business.",
    created:
      "Landing page structure, mobile layout, inquiry button direction, and matching launch graphics.",
    result:
      "A focused online presence that feels professional and easy for customers to understand.",
  },
  {
    title: "Booking Website Concept",
    problem:
      "The business needed a clearer way for customers to request appointments without confusion.",
    goal:
      "Build a service-focused website with a booking request flow and clear follow-up process.",
    created:
      "Service sections, booking request structure, contact form direction, and follow-up messaging.",
    result:
      "A booking-friendly website concept that helps customers take the next step with confidence.",
  },
  {
    title: "Launch Graphics Concept",
    problem:
      "The business had an online presence but needed visuals to announce services and website launch updates.",
    goal:
      "Create branded graphics that match the website and help promote the business on social platforms.",
    created:
      "Social posts, story graphics, promo visuals, and launch announcement direction.",
    result:
      "A more consistent brand launch that connects the website with the business’s social presence.",
  },
];

function Portfolio() {
  return (
    <>
      <section className="page-section portfolio-hero-section">
        <div className="container portfolio-hero-grid">
          <div>
            <p className="eyebrow">Portfolio / Work</p>
            <h1>Work that shows how service-based businesses can look online.</h1>
            <p className="page-intro">
              Explore website concepts, booking flows, launch graphics, and
              online presence ideas created to help businesses look professional,
              clear, and ready to receive inquiries.
            </p>
          </div>

          <div className="portfolio-hero-video-card">
            <video
              src="/videos/portfolio-hero.mp4"
              autoPlay
              muted
              loop
              playsInline
            />

            <div className="portfolio-video-overlay"></div>

            <div className="portfolio-video-label">
              <span>Website Concepts</span>
              <strong>Visual work for brands ready to launch.</strong>
            </div>
          </div>
        </div>
      </section>

      <section className="section-block portfolio-categories-section">
        <div className="container">
          <div className="portfolio-category-pills">
            {categories.map((category) => (
              <span key={category}>{category}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="section-block featured-work-section">
        <div className="container">
          <div className="section-heading section-heading-row">
            <div>
              <p className="eyebrow">Featured Work</p>
              <h2>Portfolio previews built around clarity, trust, and action.</h2>
              <p>
                These concepts show the kind of structure, style, and launch
                support Get It Bunny can create for service-based and
                product-based businesses.
              </p>
            </div>

            <Link to="/contact" className="btn btn-secondary">
              Start a Similar Project
            </Link>
          </div>

          <div className="featured-work-grid">
            {projects.map((project) => (
              <article className="featured-work-card" key={project.title}>
                <div className="featured-work-image">
                  <img src={project.image} alt={`${project.title} preview`} />
                </div>

                <div className="featured-work-content">
                  <span>{project.service}</span>
                  <h2>{project.title}</h2>
                  <p className="project-type">{project.type}</p>
                  <p>{project.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-block portfolio-showcase-section">
        <div className="container portfolio-showcase-grid">
          <div className="portfolio-showcase-video">
            <video
              src="/videos/portfolio-showcase.mp4"
              autoPlay
              muted
              loop
              playsInline
            />

            <div className="portfolio-video-overlay"></div>
          </div>

          <div className="portfolio-showcase-content">
            <p className="eyebrow">What the work focuses on</p>
            <h2>Design that helps customers understand and take action.</h2>
            <p>
              Get It Bunny projects are not just about making pages look pretty.
              Each layout is designed to help customers quickly understand the
              business, view services, trust the brand, and know how to inquire
              or start a project.
            </p>

            <div className="portfolio-focus-list">
              <span>Clean design</span>
              <span>Mobile responsiveness</span>
              <span>Clear service communication</span>
              <span>Inquiry and booking flows</span>
              <span>Launch-ready visuals</span>
              <span>Brand consistency</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section-block case-study-preview-section">
        <div className="container">
          <div className="section-heading section-heading-center">
            <p className="eyebrow">Case Study Style</p>
            <h2>Each project is planned around the business goal.</h2>
            <p>
              A strong portfolio should show the thinking behind the design, not
              just the final visuals.
            </p>
          </div>

          <div className="case-study-preview-grid">
            {caseStudies.map((study) => (
              <article className="case-study-preview-card" key={study.title}>
                <h3>{study.title}</h3>

                <div>
                  <strong>Problem</strong>
                  <p>{study.problem}</p>
                </div>

                <div>
                  <strong>Goal</strong>
                  <p>{study.goal}</p>
                </div>

                <div>
                  <strong>Created</strong>
                  <p>{study.created}</p>
                </div>

                <div>
                  <strong>Result</strong>
                  <p>{study.result}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="final-cta-section">
        <div className="container">
          <div className="final-cta-card">
            <div className="final-cta-content">
              <p className="eyebrow">Like This Direction?</p>
              <h2>Let’s create a professional online presence for your business.</h2>
              <p>
                Start with the project request form and share what you need.
                Get It Bunny can help you choose the right website, booking,
                store, or launch visual direction.
              </p>

              <div className="final-cta-actions">
                <Link to="/contact" className="btn btn-primary">
                  Start Your Project
                </Link>

                <Link to="/pricing" className="btn btn-secondary">
                  View Pricing
                </Link>
              </div>
            </div>

            <div className="final-cta-note">
              <span>Websites</span>
              <span>Store Setup</span>
              <span>Launch Visuals</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Portfolio;