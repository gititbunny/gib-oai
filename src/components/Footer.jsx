import { Link } from "react-router-dom";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <h2>Get It Bunny</h2>
          <p>
            Websites, booking pages, and launch graphics for service-based
            businesses.
          </p>
        </div>

        <div>
          <h3>Explore</h3>
          <Link to="/services">Services</Link>
          <Link to="/pricing">Pricing</Link>
          <Link to="/portfolio">Portfolio</Link>
          <Link to="/process">Process</Link>
        </div>

        <div>
          <h3>Support</h3>
          <Link to="/terms">Terms & Conditions</Link>
          <Link to="/refund-policy">Refund Policy</Link>
          <Link to="/privacy-policy">Privacy Policy</Link>
        </div>

        <div>
          <h3>Contact</h3>
          <a href="mailto:gititbunny@gmail.com">gititbunny@gmail.com</a>
          <a
            href="https://wa.me/27000000000?text=Hi%20Get%20It%20Bunny%2C%20I%E2%80%99m%20interested%20in%20starting%20a%20website%20project."
            target="_blank"
            rel="noreferrer"
          >
            WhatsApp
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {currentYear} Git It Bunny. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;