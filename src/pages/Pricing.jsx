import { Link } from "react-router-dom";
import "../styles/pricing.css";

const pricingPackages = [
  {
    name: "Landing Page Package",
    price: "From R3,500",
    timeline: "Estimated timeline: 5–7 business days",
    bestFor: "Best for one service, promo, campaign, event, or launch.",
    features: [
      "One-page landing page",
      "Mobile responsive design",
      "Contact or booking button",
      "Basic SEO setup",
      "Contact form",
      "2 launch graphics",
    ],
  },
  {
    name: "Business Website Package",
    price: "From R8,500",
    timeline: "Estimated timeline: 10–14 business days",
    bestFor: "Best for a full professional business website.",
    features: [
      "3–5 website pages",
      "Mobile responsive design",
      "Contact form",
      "Inquiry buttons",
      "Google Maps embed where needed",
      "Basic SEO setup",
      "4 launch graphics",
    ],
    featured: true,
  },
  {
    name: "Booking Website Package",
    price: "From R12,500",
    timeline: "Estimated timeline: 2–3 weeks",
    bestFor: "Best for service businesses that need booking requests.",
    features: [
      "5-page website",
      "Services or pricing page",
      "Booking request form",
      "Email or WhatsApp follow-up flow",
      "Contact form",
      "Basic SEO setup",
      "6 launch graphics",
    ],
  },
];

const addOnPricing = [
  {
    item: "Extra website page",
    price: "From R700",
  },
  {
    item: "Extra social media post",
    price: "From R250",
  },
  {
    item: "Instagram / WhatsApp story graphic",
    price: "From R150",
  },
  {
    item: "Promo poster / flyer",
    price: "From R400",
  },
  {
    item: "Price list design",
    price: "From R500",
  },
  {
    item: "Service menu design",
    price: "From R500",
  },
  {
    item: "Basic logo refresh",
    price: "From R1,000",
  },
  {
    item: "Mini brand kit",
    price: "From R2,500",
  },
  {
    item: "Domain / hosting setup",
    price: "From R750",
  },
  {
    item: "Booking form setup",
    price: "From R1,000",
  },
  {
    item: "Monthly support",
    price: "From R750/month",
  },
];

function Pricing() {
  return (
    <>
      <section className="page-section pricing-hero-section">
        <div className="container pricing-hero-grid">
          <div>
            <p className="eyebrow">Pricing</p>
            <h1>Simple starting prices for professional online presence.</h1>
            <p className="page-intro">
              Choose a starting package based on where your business is right
              now. Final pricing depends on the number of pages, design
              complexity, content needs, booking features, and extra brand
              assets.
            </p>
          </div>

          <div className="pricing-hero-card">
            <p>Starting from</p>
            <strong>R3,500</strong>
            <span>Landing pages, websites, booking pages, and launch graphics.</span>
          </div>
        </div>
      </section>

      <section className="section-block pricing-packages-section">
        <div className="container">
          <div className="section-heading section-heading-center">
            <p className="eyebrow">Main Packages</p>
            <h2>Pick the package that fits your business goal.</h2>
            <p>
              Start small with a focused landing page, build a professional
              business website, or create a booking-ready website for service
              inquiries.
            </p>
          </div>

          <div className="pricing-packages-grid">
            {pricingPackages.map((item) => (
              <article
                className={`pricing-package-card ${
                  item.featured ? "featured-pricing-package" : ""
                }`}
                key={item.name}
              >
                {item.featured && <span className="pricing-badge">Popular</span>}

                <div className="pricing-package-header">
                  <h2>{item.name}</h2>
                  <p>{item.bestFor}</p>
                </div>

                <div className="pricing-package-price">{item.price}</div>

                <div className="pricing-package-timeline">{item.timeline}</div>

                <ul className="pricing-package-features">
                  {item.features.map((feature) => (
                    <li key={feature}>{feature}</li>
                  ))}
                </ul>

                <Link to="/contact" className="btn btn-pricing">
                  Start With This Package
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-block add-on-pricing-section">
        <div className="container add-on-pricing-grid">
          <div className="add-on-pricing-content">
            <p className="eyebrow">Add-on Pricing</p>
            <h2>Add extra design, setup, or support when needed.</h2>
            <p>
              Add-ons help customize your project if you need extra pages,
              extra graphics, setup help, or ongoing updates after launch.
            </p>
          </div>

          <div className="add-on-pricing-list">
            {addOnPricing.map((addOn) => (
              <div className="add-on-pricing-row" key={addOn.item}>
                <span>{addOn.item}</span>
                <strong>{addOn.price}</strong>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-block pricing-note-section">
        <div className="container">
          <div className="pricing-note-card">
            <p className="eyebrow">Pricing Note</p>
            <h2>What affects the final price?</h2>
            <p>
              All prices are starting prices. Final pricing depends on the
              number of pages, design complexity, content needs, booking
              features, revisions, timeline, and extra brand assets.
            </p>
            <p>
              Domain, hosting, booking tools, email accounts, paid plugins,
              premium apps, and third-party subscriptions are paid separately by
              the client.
            </p>
          </div>
        </div>
      </section>

      <section className="final-cta-section">
        <div className="container">
          <div className="final-cta-card">
            <div className="final-cta-content">
              <p className="eyebrow">Start With Clarity</p>
              <h2>Need help choosing the right package?</h2>
              <p>
                Send your project details through the form, and Get It Bunny can
                help you choose the package that fits your business, budget, and
                launch goals.
              </p>

              <div className="final-cta-actions">
                <Link to="/contact" className="btn btn-primary">
                  Start Your Project
                </Link>

                <a
                  href="mailto:hello@getitbunny.co.za?subject=Pricing%20Inquiry"
                  className="btn btn-secondary"
                >
                  Email Get It Bunny
                </a>
              </div>
            </div>

            <div className="final-cta-note">
              <span>Clear Pricing</span>
              <span>Add-ons</span>
              <span>Custom Quotes</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Pricing;