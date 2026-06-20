import { Link } from "react-router-dom";

const audienceGroups = [
  {
    title: "Hair Stylists",
    image: "/images/audience/hair-stylist.jpg",
  },
  {
    title: "Nail Techs",
    image: "/images/audience/hair-stylist.jpg",
  },
  {
    title: "Makeup Artists",
    image: "/images/audience/hair-stylist.jpg",
  },
  {
    title: "Photographers",
    image: "/images/audience/hair-stylist.jpg",
  },
  {
    title: "Coaches",
    image: "/images/audience/hair-stylist.jpg",
  },
  {
    title: "Tutors",
    image: "/images/audience/hair-stylist.jpg",
  },
  {
    title: "Consultants",
    image: "/images/audience/hair-stylist.jpg",
  },
  {
    title: "Event Planners",
    image: "/images/audience/hair-stylist.jpg",
  },
  {
    title: "Small Local Businesses",
    image: "/images/audience/hair-stylist.jpg",
  },
];

const servicePreviews = [
  {
    title: "Landing Pages",
    image: "/images/services/landing-page.jpg",
    text: "One focused page for a service, promo, launch, event, or campaign.",
  },
  {
    title: "Business Websites",
    image: "/images/services/social-launch-kit.jpg",
    text: "A full website with pages like Home, About, Services, Gallery, and Contact.",
  },
  {
    title: "Booking Websites",
    image: "/images/services/landing-page.jpg",
    text: "A website with a booking request form and WhatsApp confirmation flow.",
  },
  {
    title: "Social Launch Kits",
    image: "/images/services/social-launch-kit.jpg",
    text: "Branded graphics to announce your website, services, promos, or bookings.",
  },
];

const packagePreviews = [
  {
    name: "Landing Page",
    price: "From R3,500",
    bestFor: "Best for one service, promo, campaign, event, or launch.",
    features: [
      "One-page website",
      "Mobile responsive design",
      "Contact or booking button",
      "WhatsApp button",
      "Basic SEO",
      "2 launch graphics",
    ],
  },
  {
    name: "Business Website",
    price: "From R8,500",
    bestFor: "Best for a full professional business website.",
    features: [
      "3–5 website pages",
      "Mobile responsive design",
      "Contact form",
      "WhatsApp button",
      "Google Maps embed",
      "4 launch graphics",
    ],
    featured: true,
  },
  {
    name: "Booking Website",
    price: "From R12,500",
    bestFor: "Best for service businesses that need booking requests.",
    features: [
      "5-page website",
      "Services/pricing page",
      "Booking request form",
      "WhatsApp confirmation flow",
      "Basic SEO",
      "6 launch graphics",
    ],
  },
];

const whyChooseItems = [
  {
    title: "Custom design",
    text: "Your website is designed around your business, services, style, and client journey.",
  },
  {
    title: "Mobile-friendly websites",
    text: "Your site is built to look clean and easy to use on phones, tablets, and desktops.",
  },
  {
    title: "WhatsApp-ready flow",
    text: "Customers can inquire or start booking through a simple WhatsApp-friendly process.",
  },
  {
    title: "Launch visuals included",
    text: "Your website does not launch alone. You also get branded graphics to promote it online.",
  },
  {
    title: "Beginner-friendly process",
    text: "Everything is explained clearly, without making you feel overwhelmed by tech language.",
  },
  {
    title: "Client-owned setup",
    text: "Where possible, your domain and important accounts stay under your own name or business.",
  },
];

function Home() {
  return (
    <>
      <section className="page-section hero-section">
        <div className="container hero-grid">
          <div className="hero-content">
            <p className="eyebrow">Creative Web & Design Studio</p>

            <h1>
              Professional websites and launch graphics for service-based
              businesses.
            </h1>

            <p className="hero-text">
              Get It Bunny helps beauty professionals, creatives, consultants,
              and small businesses build a clean online presence through landing
              pages, business websites, booking websites, and branded launch
              visuals.
            </p>

            <div className="hero-actions">
              <Link to="/contact" className="btn btn-primary">
                Start a Project
              </Link>

              <Link to="/pricing" className="btn btn-secondary">
                View Packages
              </Link>
            </div>

            <div className="hero-trust-row">
              <span>Mobile-friendly</span>
              <span>WhatsApp-ready</span>
              <span>Launch graphics included</span>
            </div>
          </div>

          <div className="hero-media-wrap">
            <div className="hero-video-card">
              <video
                className="hero-video"
                src="/videos/hero-video.mp4"
                autoPlay
                muted
                loop
                playsInline
              />

              <div className="video-overlay"></div>

              <div className="floating-tag tag-top">Website Design</div>
              <div className="floating-tag tag-middle">Booking Flow</div>
              <div className="floating-tag tag-bottom">Launch Graphics</div>
            </div>

            <div className="hero-mini-card">
              <p>For service-based brands</p>
              <strong>
                Look official. Get inquiries. Launch with confidence.
              </strong>
            </div>
          </div>
        </div>
      </section>

      <section className="section-block audience-section">
        <div className="container">
          <div className="section-heading">
            <p className="eyebrow">Who It’s For</p>
            <h2>Built for businesses that need to look official online.</h2>
            <p>
              Get It Bunny is made for service-based businesses that need a
              professional online presence, clear service information, and an
              easier way for customers to inquire or book.
            </p>
          </div>

          <div className="audience-grid">
            {audienceGroups.map((group) => (
              <article className="audience-card" key={group.title}>
                <img src={group.image} alt={`${group.title} business`} />

                <div className="audience-card-overlay"></div>

                <div className="audience-card-content">
                  <span>{group.title}</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-block services-preview-section">
        <div className="container">
          <div className="section-heading section-heading-row">
            <div>
              <p className="eyebrow">Main Services</p>
              <h2>Everything your business needs to look ready online.</h2>
              <p>
                From a single landing page to a booking-ready website, Get It
                Bunny helps you create a professional online presence with
                matching launch visuals.
              </p>
            </div>

            <Link to="/services" className="btn btn-secondary">
              View All Services
            </Link>
          </div>

          <div className="services-preview-grid">
            {servicePreviews.map((service) => (
              <article className="service-preview-card" key={service.title}>
                <div className="service-preview-image">
                  <img src={service.image} alt={`${service.title} service`} />
                </div>

                <div className="service-preview-content">
                  <h3>{service.title}</h3>
                  <p>{service.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

    <section className="section-block packages-preview-section">
  <div className="container">
    <div className="section-heading section-heading-center">
      <p className="eyebrow">Featured Packages</p>
      <h2>Choose a package that fits where your business is right now.</h2>
      <p>
        Start with a simple landing page, build a full business website, or
        create a booking-ready site with launch graphics included.
      </p>
    </div>

    <div className="packages-preview-grid">
      {packagePreviews.map((item) => (
        <article
          className={`package-card ${item.featured ? "featured-package" : ""}`}
          key={item.name}
        >
          {item.featured && <span className="package-badge">Popular</span>}

          <div className="package-card-header">
            <h3>{item.name}</h3>
            <p>{item.bestFor}</p>
          </div>

          <div className="package-price">{item.price}</div>

          <ul className="package-features">
            {item.features.map((feature) => (
              <li key={feature}>{feature}</li>
            ))}
          </ul>

          <Link to="/pricing" className="btn btn-package">
            See Full Pricing
          </Link>
        </article>
      ))}
    </div>

    <p className="pricing-note">
      All prices are starting prices. Final pricing depends on the number of
      pages, design complexity, content needs, booking features, and extra brand
      assets.
    </p>
  </div>
</section>  

<section className="section-block why-section">
  <div className="container why-grid">
    <div className="why-content">
      <p className="eyebrow">Why Choose Get It Bunny</p>
      <h2>Not just a website. A cleaner way to launch your business online.</h2>
      <p>
        Get It Bunny helps you create a professional online presence that feels
        clear, trustworthy, and easy for customers to act on.
      </p>

      <Link to="/process" className="btn btn-primary">
        See The Process
      </Link>
    </div>

    <div className="why-card-grid">
      {whyChooseItems.map((item) => (
        <article className="why-card" key={item.title}>
          <div className="why-icon">✦</div>
          <h3>{item.title}</h3>
          <p>{item.text}</p>
        </article>
      ))}
    </div>
  </div>
</section>

    </>
  );
}

export default Home;