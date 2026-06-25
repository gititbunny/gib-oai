import { Link } from "react-router-dom";
import "../styles/home.css";

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
    text: "A website with a booking request form and email or WhatsApp follow-up options.",
  },
  {
    title: "Social Launch Kits",
    image: "/images/services/social-launch-kit.jpg",
    text: "Branded graphics to announce your website, services, promos, or bookings.",
  },
 {
    title: "Online Store Setup",
    image: "/images/services/online-store.jpg",
    text: "Custom store setup for product-based businesses using Shopify, Wix, Squarespace, or similar platforms.",
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
      "Email or WhatsApp follow-up flow",
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

const processSteps = [
  {
    number: "01",
    title: "Send your project request",
    text: "Start by sending a WhatsApp message or filling in the project request form.",
  },
  {
    number: "02",
    title: "We discuss your business and needs",
    text: "We go through your services, goals, pages, style direction, booking needs, and content.",
  },
  {
    number: "03",
    title: "Design and build begins after deposit",
    text: "Once the quote is approved and the deposit is paid, the design and website build begins.",
  },
  {
    number: "04",
    title: "Website goes live after final approval",
    text: "You review the final website, request allowed revisions, make final payment, and then launch.",
  },
];

const portfolioPreviews = [
  {
    title: "Glow Studio Landing Page",
    type: "Beauty Service Landing Page",
    image: "/images/portfolio/landing-preview.jpg",
    text: "A focused landing page concept for a beauty studio promoting services, offers, and WhatsApp inquiries.",
  },
  {
    title: "Luxe Bookings Website",
    type: "Booking Website Concept",
    image: "/images/portfolio/booking-preview.jpg",
    text: "A booking-ready website concept with service details, request form direction, and WhatsApp confirmation flow.",
  },
  {
    title: "Soft Launch Graphics Kit",
    type: "Social Launch Kit",
    image: "/images/portfolio/social-preview.jpg",
    text: "A branded launch visuals concept for announcing services, bookings, and website launch updates.",
  },
];

const faqPreviews = [
  {
    question: "Do I need to have a domain before contacting you?",
    answer:
      "No. Get It Bunny can help you choose and set up a domain, but the domain should be bought under your own name or business account.",
  },
  {
  question: "Do booking websites confirm appointments automatically?",
  answer:
    "No. The booking form sends a request first. The business can then confirm the appointment directly through email, WhatsApp, or their preferred contact method.",
  },
  {
    question: "Do you offer refunds?",
    answer:
      "Refunds depend on the project stage. Once design or development work has started, deposits are generally non-refundable.",
  },
  {
    question: "Do you offer revisions?",
    answer:
      "Yes. Each package includes a set number of revisions. Extra revisions are charged separately.",
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
              Git It Bunny helps beauty professionals, creatives, consultants,
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
              <span>Email & form-ready</span>
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
              Git It Bunny is made for service-based businesses that need a
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


<section className="section-block process-preview-section">
  <div className="container">
    <div className="section-heading section-heading-center">
      <p className="eyebrow">How It Works</p>
      <h2>A simple process from first message to website launch.</h2>
      <p>
        You do not need to understand complicated tech. Get It Bunny guides you
        through each stage clearly, from your first request to going live.
      </p>
    </div>

    <div className="process-preview-grid">
      {processSteps.map((step) => (
        <article className="process-step-card" key={step.number}>
          <span className="process-number">{step.number}</span>
          <h3>{step.title}</h3>
          <p>{step.text}</p>
        </article>
      ))}
    </div>

    <div className="process-preview-cta">
      <Link to="/process" className="btn btn-primary">
        View Full Process
      </Link>
    </div>
  </div>
</section>

<section className="section-block portfolio-preview-section">
  <div className="container">
    <div className="section-heading section-heading-row">
      <div>
        <p className="eyebrow">Portfolio Preview</p>
        <h2>Preview the kind of online presence Get It Bunny creates.</h2>
        <p>
          Explore website and launch visual concepts made for service-based
          businesses that want to look professional, clear, and ready to book.
        </p>
      </div>

      <Link to="/portfolio" className="btn btn-secondary">
        View Portfolio
      </Link>
    </div>

    <div className="portfolio-preview-grid">
      {portfolioPreviews.map((project) => (
        <article className="portfolio-preview-card" key={project.title}>
          <div className="portfolio-preview-image">
            <img src={project.image} alt={`${project.title} preview`} />
          </div>

          <div className="portfolio-preview-content">
            <span>{project.type}</span>
            <h3>{project.title}</h3>
            <p>{project.text}</p>
          </div>
        </article>
      ))}
    </div>
  </div>
</section>

<section className="section-block faq-preview-section">
  <div className="container faq-preview-grid">
    <div className="faq-preview-content">
      <p className="eyebrow">FAQs</p>
      <h2>Questions clients usually ask before starting.</h2>
      <p>
        Here are a few quick answers about domains, booking flows, refunds, and
        revisions before you start a project.
      </p>

      <Link to="/contact" className="btn btn-primary">
        Ask a Question
      </Link>
    </div>

    <div className="faq-preview-list">
      {faqPreviews.map((item) => (
        <article className="faq-preview-item" key={item.question}>
          <h3>{item.question}</h3>
          <p>{item.answer}</p>
        </article>
      ))}
    </div>
  </div>
</section>

<section className="final-cta-section">
  <div className="container">
    <div className="final-cta-card">
      <div className="final-cta-content">
        <p className="eyebrow">Start Your Project</p>
        <h2>Ready to make your business look official online?</h2>
       <p>
  Whether you need a landing page, business website, booking website, or
  launch graphics, start with the project form or send an email so your
  inquiry is clear, professional, and easy to follow up on.
</p>

       <div className="final-cta-actions">
  <Link to="/contact" className="btn btn-primary">
    Start Your Project
  </Link>

  <a
    href="mailto:hello@getitbunny.co.za?subject=Website%20Project%20Inquiry&body=Hi%20Get%20It%20Bunny%2C%0D%0A%0D%0AI%E2%80%99m%20interested%20in%20starting%20a%20website%20project.%0D%0A%0D%0AMy%20business%20name%20is%3A%0D%0AI%20need%20help%20with%3A%0D%0AMy%20ideal%20deadline%20is%3A%0D%0A%0D%0AThank%20you."
    className="btn btn-secondary"
  >
    Email Get It Bunny
  </a>
</div>
      </div>

      <div className="final-cta-note">
  <span>Project Form</span>
  <span>Email First</span>
  <span>Quick Follow-up</span>
</div>
    </div>
  </div>
</section>

    </>
  );
}

export default Home;