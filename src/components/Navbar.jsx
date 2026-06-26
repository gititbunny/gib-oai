import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="site-header">
      <nav className="navbar container">
        <Link to="/" className="logo" aria-label="Get It Bunny home" onClick={closeMenu}>
          <img
            src="/logo.svg"
            alt="Get It Bunny logo"
            className="logo-image"
          />
          <span className="logo-text">Get It Bunny</span>
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
          <NavLink to="/" onClick={closeMenu}>
            Home
          </NavLink>

          <NavLink to="/services" onClick={closeMenu}>
            Services
          </NavLink>

          <NavLink to="/pricing" onClick={closeMenu}>
            Pricing
          </NavLink>

          <NavLink to="/portfolio" onClick={closeMenu}>
            Portfolio
          </NavLink>

          <NavLink to="/process" onClick={closeMenu}>
            Process
          </NavLink>

          <NavLink to="/about" onClick={closeMenu}>
            About
          </NavLink>

          <NavLink to="/contact" onClick={closeMenu}>
            Contact
          </NavLink>

          <NavLink to="/contact" className="nav-cta" onClick={closeMenu}>
            Start a Project
          </NavLink>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;