import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNavClick = () => {
  setMenuOpen(false);
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "instant",
  });
  };

  return (
    <header className="site-header">
      <nav className="navbar container">
        <Link to="/" className="logo" aria-label="Git It Bunny home" onClick={handleNavClick}>
          <img
            src="/logo.svg"
            alt="Git It Bunny logo"
            className="logo-image"
          />
          <span className="logo-text">Git It Bunny</span>
        </Link>

        <button
          type="button"
          className={`menu-toggle ${menuOpen ? "menu-toggle-open" : ""}`}
          onClick={() => setMenuOpen((current) => !current)}
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <div className={`nav-links ${menuOpen ? "nav-links-open" : ""}`}>
          <NavLink to="/" className="nav-link" onClick={handleNavClick}>
            Home
          </NavLink>

          <NavLink to="/services" className="nav-link" onClick={handleNavClick}>
            Services
          </NavLink>

          <NavLink to="/pricing" className="nav-link" onClick={handleNavClick}>
            Pricing
          </NavLink>

          <NavLink to="/portfolio" className="nav-link" onClick={handleNavClick}>
            Portfolio
          </NavLink>

          <NavLink to="/process" className="nav-link" onClick={handleNavClick}>
            Process
          </NavLink>

          <NavLink to="/about" className="nav-link" onClick={handleNavClick}>
            About
          </NavLink>

          <NavLink to="/contact" className="nav-link" onClick={handleNavClick}>
            Contact
          </NavLink>

          <NavLink
            to="/contact#project-form"
            className="nav-cta"
            onClick={() => {
              setMenuOpen(false);
            }}
          >
            Start a Project
          </NavLink>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;