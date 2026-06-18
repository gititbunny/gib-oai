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

        <div className="hero-card">
          <p className="hero-card-label">Website + Launch Kit</p>
          <h2>Look official. Get inquiries. Launch with confidence.</h2>
          <p>
            Clean layouts, mobile-friendly pages, WhatsApp booking flow, and
            branded graphics that match your business.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Home;