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
          <NavLink to="/" onClick={handleNavClick}>
            Home
          </NavLink>

          <NavLink to="/services" onClick={handleNavClick}>
            Services
          </NavLink>

          <NavLink to="/pricing" onClick={handleNavClick}>
            Pricing
          </NavLink>

          <NavLink to="/portfolio" onClick={handleNavClick}>
            Portfolio
          </NavLink>

          <NavLink to="/process" onClick={handleNavClick}>
            Process
          </NavLink>

          <NavLink to="/about" onClick={handleNavClick}>
            About
          </NavLink>

          <NavLink to="/contact" onClick={handleNavClick}>
            Contact
          </NavLink>

          <NavLink to="/contact#project-form" className="nav-cta" onClick={handleNavClick}>
            Start a Project
          </NavLink>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;