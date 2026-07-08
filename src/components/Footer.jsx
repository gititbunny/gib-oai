import { Link } from "react-router-dom";
import {
  FaInstagram,
  FaTiktok,
  FaFacebookF,
  FaPinterestP,
} from "react-icons/fa6";

const socialLinks = [
  {
    name: "Instagram",
    url: "https://instagram.com/gititbunny",
    icon: <FaInstagram />,
  },
  {
    name: "TikTok",
    url: "https://tiktok.com/@gititbunny",
    icon: <FaTiktok />,
  },
  {
    name: "Facebook",
    url: "https://facebook.com/gititbunny",
    icon: <FaFacebookF />,
  },
  {
    name: "Pinterest",
    url: "https://pinterest.com/gititbunny",
    icon: <FaPinterestP />,
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

          <a href="mailto:gititbunny@gmail.com?subject=Website%20Project%20Inquiry">
            gititbunny@gmail.com
          </a>

          <Link to="/contact#project-form">Project Request Form</Link>

          <a
            href="https://wa.me/27000000000?text=Hi%20Git%20It%20Bunny%2C%20I%20have%20a%20quick%20question%20about%20a%20website%20project."
            target="_blank"
            rel="noreferrer"
          >
            Quick WhatsApp Question
          </a>

          <div className="footer-social-icons" aria-label="Social media links">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noreferrer"
                aria-label={social.name}
                title={social.name}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {currentYear} Git It Bunny. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;