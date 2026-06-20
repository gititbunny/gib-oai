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
    </>
  );
}

export default Home;