import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  // Scroll listener for sticky header state
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  return (
    <>
      <header className={`site-header ${isScrolled ? 'is-scrolled' : ''}`} id="site-header">
        <div className="shell nav-wrap">
          {/* Desktop Left Nav */}
          <nav className="desktop-nav desktop-nav-left" aria-label="Primary navigation">
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? 'active' : '')}
              end
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) => (isActive ? 'active' : '')}
            >
              About
            </NavLink>
            <NavLink
              to="/treatments"
              className={({ isActive }) => (isActive ? 'active' : '')}
            >
              Treatments
            </NavLink>
            <NavLink
              to="/patient-guides"
              className={({ isActive }) => (isActive ? 'active' : '')}
            >
              Patient Guides
            </NavLink>
          </nav>

          {/* Center Brand */}
          <Link to="/" className="brand" aria-label="Dr Harshil Shah home">
            <svg aria-hidden="true" viewBox="0 0 40 40" className="brand-mark">
              <rect x="15" y="3" width="10" height="34" rx="3" fill="currentColor" />
              <rect x="3" y="15" width="34" height="10" rx="3" fill="currentColor" />
              <circle cx="20" cy="20" r="5" fill="#fff" />
            </svg>
            <span className="brand-copy">
              <strong>Dr. Harshil Shah</strong>
              <small>Orthopaedic Surgeon</small>
            </span>
          </Link>

          {/* Desktop Right Nav & CTA */}
          <div className="desktop-nav-zone">
            <nav className="desktop-nav desktop-nav-right" aria-label="Patient navigation">
              <NavLink
                to="/gallery"
                className={({ isActive }) => (isActive ? 'active' : '')}
              >
                Gallery
              </NavLink>
              <NavLink
                to="/faq"
                className={({ isActive }) => (isActive ? 'active' : '')}
              >
                FAQs
              </NavLink>
              <NavLink
                to="/contact"
                className={({ isActive }) => (isActive ? 'active' : '')}
              >
                Contact
              </NavLink>
            </nav>
            <Link className="button button-small nav-cta" to="/appointment">
              <span className="nav-cta-full">Book appointment</span>
              <span className="nav-cta-short">Book</span>{' '}
              <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className="icon">
                <path
                  d="M5 12h14M14 7l5 5-5 5"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
          </div>

          {/* Mobile Hamburger Toggle */}
          <button
            type="button"
            className="mobile-menu-btn"
            style={{
              display: 'none',
              background: 'none',
              border: '1px solid var(--line)',
              width: '44px',
              height: '44px',
              borderRadius: '8px',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '5px',
              cursor: 'pointer',
              marginLeft: 'auto'
            }}
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Open menu"
            id="mobile-nav-toggle"
          >
            <span style={{ background: 'var(--ink)', width: '20px', height: '2px', display: 'block' }}></span>
            <span style={{ background: 'var(--ink)', width: '20px', height: '2px', display: 'block' }}></span>
            <span style={{ background: 'var(--ink)', width: '20px', height: '2px', display: 'block' }}></span>
          </button>
        </div>
      </header>

      {/* Mobile Drawer & Backdrop */}
      <div
        className={`mobile-nav-backdrop ${mobileMenuOpen ? 'is-open' : ''}`}
        onClick={() => setMobileMenuOpen(false)}
        aria-hidden={!mobileMenuOpen}
      />
      <aside
        className={`mobile-menu-drawer ${mobileMenuOpen ? 'is-open' : ''}`}
        aria-label="Mobile Navigation"
      >
        <button
          type="button"
          className="mobile-menu-close"
          onClick={() => setMobileMenuOpen(false)}
          aria-label="Close menu"
        >
          ✕
        </button>

        <div style={{ marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '10px' }}>
          <svg aria-hidden="true" viewBox="0 0 40 40" style={{ width: '28px', height: '28px', color: 'var(--teal)' }}>
            <rect x="15" y="3" width="10" height="34" rx="3" fill="currentColor" />
            <rect x="3" y="15" width="34" height="10" rx="3" fill="currentColor" />
            <circle cx="20" cy="20" r="5" fill="#fff" />
          </svg>
          <div>
            <strong style={{ display: 'block', fontSize: '15px', fontFamily: 'var(--serif)' }}>Dr. Harshil Shah</strong>
            <small style={{ color: 'var(--ink-soft)', textTransform: 'uppercase', fontSize: '8px', letterSpacing: '0.15em' }}>Orthopaedic Surgeon</small>
          </div>
        </div>

        <nav className="mobile-nav-links">
          <NavLink to="/" end className={({ isActive }) => (isActive ? 'active' : '')}>
            Home <span>→</span>
          </NavLink>
          <NavLink to="/about" className={({ isActive }) => (isActive ? 'active' : '')}>
            About <span>→</span>
          </NavLink>
          <NavLink to="/treatments" className={({ isActive }) => (isActive ? 'active' : '')}>
            Treatments <span>→</span>
          </NavLink>
          <NavLink to="/patient-guides" className={({ isActive }) => (isActive ? 'active' : '')}>
            Patient Guides <span>→</span>
          </NavLink>
          <NavLink to="/gallery" className={({ isActive }) => (isActive ? 'active' : '')}>
            Gallery <span>→</span>
          </NavLink>
          <NavLink to="/faq" className={({ isActive }) => (isActive ? 'active' : '')}>
            FAQs <span>→</span>
          </NavLink>
          <NavLink to="/contact" className={({ isActive }) => (isActive ? 'active' : '')}>
            Contact <span>→</span>
          </NavLink>
          <NavLink to="/appointment" className="mobile-cta-btn">
            Book Appointment
          </NavLink>
        </nav>
      </aside>
    </>
  );
}
