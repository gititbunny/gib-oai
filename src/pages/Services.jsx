import { Link } from "react-router-dom";
import "../styles/services.css";

const services = [
  {
    title: "Landing Pages",
    image: "/images/services/landing-page.jpg",
    forText:
      "Best for promotions, events, one service, campaigns, special offers, and personal brand offers.",
    includes: [
      "One-page website",
      "Mobile responsive design",
      "Contact or inquiry button",
      "Basic SEO setup",
      "Contact form",
      "2 launch graphics",
    ],
  },
  {
    title: "Business Websites",
    image: "/images/services/landing-page.jpg",
    forText:
      "Best for businesses that need a full online presence with clear pages and professional structure.",
    includes: [
      "Home page",
      "About page",
      "Services page",
      "Gallery or testimonials section",
      "Contact page",
      "Contact form",
      "Google Maps embed where needed",
      "Basic SEO setup",
      "Mobile responsive design",
      "4 launch graphics",
    ],
  },
  {
    title: "Booking Websites",
    image: "/images/services/landing-page.jpg",
    forText:
      "Best for service providers who need clients to send booking requests or appointment inquiries.",
    includes: [
      "Full website",
      "Services or pricing page",
      "Booking request form",
      "Email or WhatsApp follow-up options",
      "Customer submits booking details",
      "Business confirms appointment directly",
      "Basic SEO setup",
      "Mobile responsive design",
      "6 launch graphics",
    ],
  },
  {
    title: "Social Launch Kits",
    image: "/images/services/social-launch-kit.jpg",
    forText:
      "Best for businesses that need branded visuals to announce their website, services, promos, or bookings.",
    includes: [
      "Social media posts",
      "WhatsApp status graphics",
      "Promo posters",
      "Service menu graphics",
      "Website launch graphics",
      "Booking announcement graphics",
    ],
  },
  {
  title: "Online Store Setup",
  image: "/images/services/online-store.jpg",
  forText:
    "Best for product-based businesses that want to sell online using Shopify, Wix, Squarespace, or similar store platforms.",
  includes: [
    "Store platform setup",
    "Homepage or storefront design",
    "Product page setup",
    "Basic product upload guidance",
    "Payment and shipping setup guidance",
    "Policy page structure",
    "Mobile-friendly layout",
    "Launch graphics optional",
  ],
},
];

const addOns = [
  "Extra website page",
  "Extra social media post",
  "Promo poster",
  "Price list design",
  "Service menu design",
  "Logo refresh",
  "Mini brand kit",
  "Domain or hosting setup",
  "Monthly support",
  "Website updates",
];

function Services() {
  return (
    <>
      <section className="page-section services-hero-section">
        <div className="container services-hero-grid">
          <div>
            <p className="eyebrow">Services</p>
            <h1>Websites and launch visuals for service-based businesses.</h1>
            <p className="page-intro">
              Choose from landing pages, business websites, booking websites,
              and branded social launch kits designed to help your business look
              professional and easier to contact.
            </p>
          </div>

          <div className="services-hero-card">
            <p>What Get It Bunny creates</p>
            <strong>
              Clean websites, clear service pages, inquiry forms, and launch
              graphics that help your business show up confidently online.
            </strong>
          </div>
        </div>
      </section>

      <section className="section-block services-detail-section">
        <div className="container">
          <div className="services-detail-grid">
            {services.map((service, index) => (
              <article className="service-detail-card" key={service.title}>
                <div className="service-detail-image">
                  <img src={service.image} alt={`${service.title} preview`} />
                </div>

                <div className="service-detail-content">
                  <span className="service-number">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <h2>{service.title}</h2>
                  <p>{service.forText}</p>

                  <h3>Includes:</h3>
                  <ul>
                    {service.includes.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-block add-ons-section">
        <div className="container add-ons-grid">
          <div className="add-ons-content">
            <p className="eyebrow">Add-ons</p>
            <h2>Add extra support when your project needs more.</h2>
            <p>
              Add-ons are useful when you need extra pages, more launch visuals,
              brand support, setup help, or ongoing website updates after your
              main project is complete.
            </p>

            <Link to="/pricing" className="btn btn-primary">
              View Pricing
            </Link>
          </div>

          <div className="add-ons-list">
            {addOns.map((item) => (
              <div className="add-on-pill" key={item}>
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="final-cta-section">
        <div className="container">
          <div className="final-cta-card">
            <div className="final-cta-content">
              <p className="eyebrow">Need help choosing?</p>
              <h2>Not sure which service fits your business?</h2>
              <p>
                Start with the project request form and explain what you need.
                Get It Bunny can help you decide whether a landing page,
                business website, booking website, or launch kit makes the most
                sense.
              </p>

              <div className="final-cta-actions">
                <Link to="/contact#project-form" className="btn btn-primary">
                  Start Your Project
                </Link>

                <a
                  href="mailto:hello@getitbunny.co.za?subject=Service%20Inquiry"
                  className="btn btn-secondary"
                >
                  Email Get It Bunny
                </a>
              </div>
            </div>

            <div className="final-cta-note">
              <span>Landing Pages</span>
              <span>Business Sites</span>
              <span>Launch Graphics</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Services;