import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import './Header.css';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className="header" role="banner">
      <div className="container header-content">
        <Link to="/" className="logo" onClick={closeMenu}>
          <span className="logo-text">King Koss</span>
          <span className="logo-subtitle">Afro Beats</span>
        </Link>

        <button
          className="mobile-menu-btn"
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? (
            <X size={24} />
          ) : (
            <Menu size={24} />
          )}
        </button>

        <nav
          className={`nav ${mobileMenuOpen ? 'nav-open' : ''}`}
          role="navigation"
        >
          <Link to="/" className="nav-link" onClick={closeMenu}>
            Home
          </Link>
          <Link to="/bio" className="nav-link" onClick={closeMenu}>
            Bio
          </Link>
          <Link to="/music" className="nav-link" onClick={closeMenu}>
            Music
          </Link>
          <Link to="/videos" className="nav-link" onClick={closeMenu}>
            Videos
          </Link>
          <Link to="/gallery" className="nav-link" onClick={closeMenu}>
            Gallery
          </Link>
          <Link to="/tour" className="nav-link" onClick={closeMenu}>
            Tour
          </Link>
          <Link to="/contact" className="nav-link btn btn-primary" onClick={closeMenu}>
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}
