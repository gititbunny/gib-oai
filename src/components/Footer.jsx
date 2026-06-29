import { Link } from "react-router-dom";

const socialLinks = [
  {
    name: "Instagram",
    url: "https://instagram.com/getitbunny",
  },
  {
    name: "TikTok",
    url: "https://tiktok.com/@getitbunny",
  },
  {
    name: "Facebook",
    url: "https://facebook.com/getitbunny",
  },
  {
    name: "Pinterest",
    url: "https://pinterest.com/getitbunny",
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com/company/getitbunny",
  },
];

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <h2>Git It Bunny</h2>
          <p>
            Professional websites, booking pages, and launch graphics for
            service-based businesses.
          </p>
        </div>

        <div>
          <h3>Explore</h3>
            <Link to="/services">Services</Link>
            <Link to="/pricing">Pricing</Link>
            <Link to="/portfolio">Portfolio</Link>
            <Link to="/process">Process</Link>
            <Link to="/about">About</Link>
        </div>

        <div>
          <h3>Support</h3>
           <Link to="/faqs">FAQs</Link>
          <Link to="/terms">Terms & Conditions</Link>
          <Link to="/refund-policy">Refund Policy</Link>
          <Link to="/privacy-policy">Privacy Policy</Link>
        </div>

      <div>
        <h3>Contact</h3>

        <a href="mailto:gitbunny@gmail.com?subject=Website%20Project%20Inquiry">
          gitbunny@gmail.com
        </a>

        <Link to="/contact">Project Request Form</Link>

        <a
          href="https://wa.me/27000000000?text=Hi%20Git%20It%20Bunny%2C%20I%20have%20a%20quick%20question%20about%20a%20website%20project."
          target="_blank"
          rel="noreferrer"
        >
          Quick WhatsApp Question
        </a>
      </div>
    </div>

    <div>
  <h3>Follow</h3>
  <p className="footer-social-text">
    Website tips, design ideas, launch visuals, and small business online
    presence inspiration.
  </p>

  <div className="footer-social-links">
    {socialLinks.map((social) => (
      <a
        key={social.name}
        href={social.url}
        target="_blank"
        rel="noreferrer"
      >
        {social.name}
      </a>
    ))}
  </div>
</div>

      <div className="footer-bottom">
        <p>© {currentYear} Git It Bunny. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;