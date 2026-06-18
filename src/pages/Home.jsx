function Home() {
  return (
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
            <a href="/contact" className="btn btn-primary">
              Start a Project
            </a>
            <a href="/pricing" className="btn btn-secondary">
              View Packages
            </a>
          </div>
        </div>

        <div className="hero-visual" aria-label="Website design preview">
          <div className="hero-image-card">
            <img
              src="/images/hero-workspace.jpg"
              alt="Creative workspace with laptop for website design"
            />

            <div className="floating-card floating-card-top">
              <span>01</span>
              <p>Landing Page Design</p>
            </div>

            <div className="floating-card floating-card-middle">
              <span>02</span>
              <p>WhatsApp Booking Flow</p>
            </div>

            <div className="floating-card floating-card-bottom">
              <span>03</span>
              <p>Launch Graphics Included</p>
            </div>
          </div>

          <div className="hero-mini-card">
            <p className="hero-card-label">Website + Launch Kit</p>
            <h2>Look official. Get inquiries. Launch with confidence.</h2>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;