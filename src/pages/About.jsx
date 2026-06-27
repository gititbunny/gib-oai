import { Link } from "react-router-dom";
import "../styles/about.css";

const values = [
  {
    title: "Clarity First",
    text: "A website should help customers understand what you offer, how it works, and how to take the next step.",
  },
  {
    title: "Pretty With Purpose",
    text: "Good design should look polished, but it should also guide people toward inquiries, bookings, sales, or trust.",
  },
  {
    title: "Beginner-Friendly",
    text: "You do not need to know tech terms to start. The process is explained clearly from quote to launch.",
  },
  {
    title: "Launch-Ready Thinking",
    text: "A website works better when it connects with launch graphics, service explanations, and customer-facing content.",
  },
];

const audiences = [
  "Hair stylists",
  "Nail technicians",
  "Makeup artists",
  "Photographers",
  "Coaches",
  "Tutors",
  "Consultants",
  "Event planners",
  "Small businesses",
  "Product-based brands",
];

const capabilities = [
  "Landing pages",
  "Business websites",
  "Booking website flows",
  "Online store setup",
  "Social launch graphics",
  "Responsive design",
  "Contact forms",
  "Service page structure",
  "Website content direction",
  "Brand visual consistency",
];

function About() {
  return (
    <>
      <section className="page-section about-hero-section">
        <div className="container about-hero-grid">
          <div>
            <p className="eyebrow">About Get It Bunny</p>
            <h1>A creative web and design studio for businesses ready to look serious online.</h1>
            <p className="page-intro">
              Get It Bunny helps service-based and product-based businesses
              create clear, polished, mobile-friendly online spaces that make it
              easier for customers to understand, trust, and contact them.
            </p>

            <div className="about-hero-actions">
              <Link to="/services" className="btn btn-primary">
                View Services
              </Link>

              <Link to="/portfolio" className="btn btn-secondary">
                View Work
              </Link>
            </div>
          </div>

          <div className="about-hero-card">
            <img
              src="/logo.svg"
              alt="Get It Bunny logo"
              className="about-hero-logo"
            />
            <h2>Websites, visuals, and launch direction for modern small businesses.</h2>
            <p>
              Built for businesses that want to stop looking unfinished online
              and start showing up with confidence.
            </p>
          </div>
        </div>
      </section>

      <section className="section-block about-story-section">
        <div className="container about-story-grid">
    
            <img
              src="/logo.svg"
              alt="Git It Bunny logo"
              className="about-story-logo"
            />
       

          <div className="about-story-content">
            <p className="eyebrow">Brand Story</p>
            <h2>Playful name. Serious execution.</h2>
            <p>
              Get It Bunny blends a playful creative identity with practical web
              and design execution. The name carries a fun, memorable energy,
              while the work focuses on helping businesses look professional,
              organized, and ready for customers.
            </p>
            <p>
              The studio is built around a simple idea: your online presence
              should not feel confusing, scattered, or unfinished. It should
              clearly show what you do, who you help, how people can contact you,
              and why they should trust you.
            </p>
          </div>
        </div>
      </section>

      <section className="section-block about-values-section">
        <div className="container">
          <div className="section-heading section-heading-center">
            <p className="eyebrow">What GIB Believes</p>
            <h2>Design should help your business feel easier to choose.</h2>
            <p>
              Every page, button, section, and visual should support the
              customer journey — not just decorate the website.
            </p>
          </div>

          <div className="about-values-grid">
            {values.map((value) => (
              <article className="about-value-card" key={value.title}>
                <h3>{value.title}</h3>
                <p>{value.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-block about-audience-section">
        <div className="container about-audience-grid">
          <div>
            <p className="eyebrow">Who GIB Helps</p>
            <h2>Built for small businesses, service providers, and launch-ready brands.</h2>
            <p>
              Get It Bunny is especially useful for businesses that need a
              website, booking request flow, online store direction, or branded
              graphics to support a launch.
            </p>

            <Link to="/contact#project-form" className="btn btn-primary">
              Start a Project
            </Link>
          </div>

          <div className="about-audience-pills">
            {audiences.map((audience) => (
              <span key={audience}>{audience}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="section-block about-capabilities-section">
        <div className="container">
          <div className="section-heading section-heading-row">
            <div>
              <p className="eyebrow">Capabilities</p>
              <h2>What Get It Bunny can help with.</h2>
              <p>
                From website structure to launch visuals, the goal is to create
                an online presence that feels connected and ready to promote.
              </p>
            </div>

            <Link to="/pricing" className="btn btn-secondary">
              View Pricing
            </Link>
          </div>

          <div className="about-capabilities-grid">
            {capabilities.map((item) => (
              <div className="about-capability-item" key={item}>
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-block founder-note-section">
        <div className="container">
          <div className="founder-note-card">
            <div>
              <p className="eyebrow">Founder Note</p>
              <h2>For businesses that know they need to show up better online.</h2>
            </div>

            <div>
              <p>
                Get It Bunny was created for business owners who have the skill,
                service, or product, but need help turning it into a clear online
                presence. The focus is not just on making something look nice.
                It is about building a website and visual direction that makes
                the business easier to understand, easier to trust, and easier
                to contact.
              </p>
              <p>
                Whether you need a simple landing page, a full business website,
                a booking website, an online store setup, or launch graphics,
                the goal is to help your business look prepared and professional
                when customers find you.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="final-cta-section">
        <div className="container">
          <div className="final-cta-card">
            <div className="final-cta-content">
              <p className="eyebrow">Ready to Build?</p>
              <h2>Let’s shape your online presence with clarity.</h2>
              <p>
                Start with the project request form and share what your business
                needs. Get It Bunny can guide you toward the right service,
                package, timeline, and next step.
              </p>

              <div className="final-cta-actions">
                <Link to="/contact#project-form" className="btn btn-primary">
                  Start Your Project
                </Link>

                <Link to="/process" className="btn btn-secondary">
                  View Process
                </Link>
              </div>
            </div>

            <div className="final-cta-note">
              <span>Clear Design</span>
              <span>Websites</span>
              <span>Launch Support</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;