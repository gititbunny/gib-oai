import { Link, NavLink } from "react-router-dom";

function Navbar() {
  return (
    <header className="site-header">
      <nav className="navbar container">
        <Link to="/" className="logo">
          <span className="logo-mark">GIB</span>
          <span className="logo-text">Git It Bunny</span>
        </Link>

        <div className="nav-links">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/services">Services</NavLink>
          <NavLink to="/pricing">Pricing</NavLink>
          <NavLink to="/portfolio">Portfolio</NavLink>
          <NavLink to="/process">Process</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/contact" className="nav-cta">
            Start a Project
          </NavLink>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;