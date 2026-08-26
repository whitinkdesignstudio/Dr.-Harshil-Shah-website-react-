import React, { useState, useEffect, useRef, useCallback } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isHeaderHidden, setIsHeaderHidden] = useState(false);
  const [brochureDropdownOpen, setBrochureDropdownOpen] = useState(false);
  const [galleryDropdownOpen, setGalleryDropdownOpen] = useState(false);
  const [mobileGalleryOpen, setMobileGalleryOpen] = useState(false);
  const [mobileBrochureOpen, setMobileBrochureOpen] = useState(false);
  const location = useLocation();

  const brochureRef = useRef(null);
  const galleryRef = useRef(null);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (brochureRef.current && !brochureRef.current.contains(e.target)) {
        setBrochureDropdownOpen(false);
      }
      if (galleryRef.current && !galleryRef.current.contains(e.target)) {
        setGalleryDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Single RAF-throttled scroll + resize listener (desktop fade / mobile frozen)
  useEffect(() => {
    let rafId = null;

    const updateHeader = () => {
      if (window.innerWidth > 1024) {
        const scrollY = window.scrollY;
        if (scrollY > 30) {
          setIsHeaderHidden(true);
          setBrochureDropdownOpen(false);
          setGalleryDropdownOpen(false);
        } else {
          setIsHeaderHidden(false);
        }
      } else {
        // Always visible on mobile
        setIsHeaderHidden(false);
      }
    };

    const handleScrollOrResize = () => {
      if (rafId) return; // already scheduled — skip
      rafId = requestAnimationFrame(() => {
        updateHeader();
        rafId = null;
      });
    };

    window.addEventListener('scroll', handleScrollOrResize, { passive: true });
    window.addEventListener('resize', handleScrollOrResize, { passive: true });
    // Run once on mount
    updateHeader();

    return () => {
      window.removeEventListener('scroll', handleScrollOrResize);
      window.removeEventListener('resize', handleScrollOrResize);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  // Close mobile menu and dropdowns on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setBrochureDropdownOpen(false);
    setGalleryDropdownOpen(false);
    setMobileGalleryOpen(false);
    setMobileBrochureOpen(false);
    setIsHeaderHidden(false);
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
      <header
        className={`site-header ${isHeaderHidden ? 'is-header-hidden' : ''}`}
        id="site-header"
      >
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

            {/* Gallery with Click Dropdown */}
            <div className="nav-dropdown-item nav-gallery-dropdown" ref={galleryRef}>
              <button
                type="button"
                className={`nav-dropdown-trigger nav-gallery-btn ${galleryDropdownOpen ? 'active' : ''} ${location.pathname === '/gallery' ? 'active' : ''}`}
                onClick={() => setGalleryDropdownOpen((prev) => !prev)}
                aria-expanded={galleryDropdownOpen}
              >
                Gallery
                <svg className={`nav-arrow-icon ${galleryDropdownOpen ? 'open' : ''}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </button>

              <div className={`nav-dropdown-menu nav-gallery-menu ${galleryDropdownOpen ? 'is-visible' : ''}`}>
                <div className="nav-dropdown-header">
                  <span>Explore Gallery</span>
                </div>
                <Link to="/operation-theatre" className="nav-dropdown-link" onClick={() => setGalleryDropdownOpen(false)}>
                  <div className="dropdown-link-icon">🎬</div>
                  <div>
                    <strong>Surgical &amp; OT Videos</strong>
                    <small>Live surgery recordings &amp; robotic procedures</small>
                  </div>
                  <span className="dropdown-dl-tag" style={{ background: '#0284c7', color: '#ffffff', fontWeight: 800 }}>VIDEOS</span>
                </Link>
                <Link to="/gallery" className="nav-dropdown-link" onClick={() => setGalleryDropdownOpen(false)}>
                  <div className="dropdown-link-icon">📸</div>
                  <div>
                    <strong>All Moments</strong>
                    <small>Moments from practice &amp; patient care</small>
                  </div>
                </Link>
                <Link to="/gallery" className="nav-dropdown-link" onClick={() => setGalleryDropdownOpen(false)}>
                  <div className="dropdown-link-icon">🏥</div>
                  <div>
                    <strong>Clinical Practice</strong>
                    <small>Surgical theatre &amp; consultations</small>
                  </div>
                </Link>
                <Link to="/treatments" className="nav-dropdown-link" onClick={() => setGalleryDropdownOpen(false)}>
                  <div className="dropdown-link-icon">🦴</div>
                  <div>
                    <strong>3D Joint Models</strong>
                    <small>Interactive anatomical visualizations</small>
                  </div>
                </Link>
                <Link to="/about" className="nav-dropdown-link" onClick={() => setGalleryDropdownOpen(false)}>
                  <div className="dropdown-link-icon">🎓</div>
                  <div>
                    <strong>Professional Journey</strong>
                    <small>Workshops, research &amp; achievements</small>
                  </div>
                </Link>
              </div>
            </div>
          </nav>

          {/* Center Brand */}
          <Link to="/" className="brand" aria-label="Dr. Harshil Shah - Home">
            <img
              src="/logo.png"
              alt="Dr. Harshil Shah - M.S Orthopaedic, FIJR, FIAS"
              className="brand-logo-img"
            />
          </Link>

          {/* Desktop Right Nav & CTA */}
          <div className="desktop-nav-zone">
            <nav className="desktop-nav desktop-nav-right" aria-label="Patient navigation">
              {/* Brochure with Hover / Cursor Move Dropdown */}
              <div
                className="nav-dropdown-item nav-brochure-dropdown"
                ref={brochureRef}
                onMouseEnter={() => setBrochureDropdownOpen(true)}
                onMouseLeave={() => setBrochureDropdownOpen(false)}
              >
                <button
                  type="button"
                  className={`nav-dropdown-trigger nav-brochure-btn ${brochureDropdownOpen ? 'active' : ''}`}
                  onClick={() => setBrochureDropdownOpen((prev) => !prev)}
                  aria-expanded={brochureDropdownOpen}
                >
                  Brochure
                  <svg className={`nav-arrow-icon ${brochureDropdownOpen ? 'open' : ''}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </button>

                <div className={`nav-dropdown-menu nav-brochure-menu ${brochureDropdownOpen ? 'is-visible' : ''}`}>
                  <div className="nav-dropdown-header">
                    <span>Patient Information &amp; Brochures</span>
                  </div>
                  <a
                    href="#download-knee"
                    onClick={(e) => {
                      e.preventDefault();
                      alert('Downloading Knee Replacement & Joint Preservation Brochure (PDF)...');
                      setBrochureDropdownOpen(false);
                    }}
                    className="nav-dropdown-link"
                  >
                    <div className="dropdown-link-icon">📄</div>
                    <div>
                      <strong>Knee Care &amp; Robotic Surgery</strong>
                      <small>Comprehensive Patient Guide</small>
                    </div>
                    <span className="dropdown-dl-tag">PDF</span>
                  </a>
                  <a
                    href="#download-hip"
                    onClick={(e) => {
                      e.preventDefault();
                      alert('Downloading Hip & Shoulder Specialist Care Booklet (PDF)...');
                      setBrochureDropdownOpen(false);
                    }}
                    className="nav-dropdown-link"
                  >
                    <div className="dropdown-link-icon">📘</div>
                    <div>
                      <strong>Hip &amp; Shoulder Specialist Care</strong>
                      <small>Surgical &amp; Non-Surgical Booklet</small>
                    </div>
                    <span className="dropdown-dl-tag">PDF</span>
                  </a>
                  <a
                    href="#download-eras"
                    onClick={(e) => {
                      e.preventDefault();
                      alert('Downloading ERAS Rapid Recovery Care Protocol (PDF)...');
                      setBrochureDropdownOpen(false);
                    }}
                    className="nav-dropdown-link"
                  >
                    <div className="dropdown-link-icon">🏃</div>
                    <div>
                      <strong>ERAS Recovery Pathway Protocol</strong>
                      <small>Milestone Checklist &amp; Prehab</small>
                    </div>
                    <span className="dropdown-dl-tag">PDF</span>
                  </a>
                  <a
                    href="#download-clinic"
                    onClick={(e) => {
                      e.preventDefault();
                      alert('Downloading Dr. Harshil Shah Profile & Clinic Guide (PDF)...');
                      setBrochureDropdownOpen(false);
                    }}
                    className="nav-dropdown-link"
                  >
                    <div className="dropdown-link-icon">🏥</div>
                    <div>
                      <strong>Clinic Profile &amp; Doctor Overview</strong>
                      <small>Credentials &amp; Consultation Info</small>
                    </div>
                    <span className="dropdown-dl-tag">PDF</span>
                  </a>
                </div>
              </div>

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

        <div style={{ marginBottom: '24px', display: 'flex', alignItems: 'center', justifyContent: 'flex-start' }}>
          <img
            src="/logo.png"
            alt="Dr. Harshil Shah"
            className="brand-logo-img brand-logo-drawer"
          />
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

          {/* Mobile Expandable Gallery Dropdown */}
          <div className="mobile-nav-accordion">
            <button
              type="button"
              className={`mobile-nav-accordion-trigger ${mobileGalleryOpen ? 'open' : ''} ${location.pathname === '/gallery' ? 'active' : ''}`}
              onClick={() => setMobileGalleryOpen((prev) => !prev)}
            >
              <span>Gallery</span>
              <svg className={`mobile-chevron ${mobileGalleryOpen ? 'rotated' : ''}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </button>
            {mobileGalleryOpen && (
              <div className="mobile-nav-sublinks">
                <Link to="/operation-theatre" onClick={() => setMobileMenuOpen(false)}>
                  🎬 Surgical &amp; OT Videos <span className="mobile-pdf-pill" style={{ background: '#0284c7', color: '#fff' }}>VIDEOS</span>
                </Link>
                <Link to="/gallery" onClick={() => setMobileMenuOpen(false)}>
                  📸 All Moments
                </Link>
                <Link to="/gallery" onClick={() => setMobileMenuOpen(false)}>
                  🏥 Clinical Practice
                </Link>
                <Link to="/treatments" onClick={() => setMobileMenuOpen(false)}>
                  🦴 3D Joint Models
                </Link>
                <Link to="/about" onClick={() => setMobileMenuOpen(false)}>
                  🎓 Professional Journey
                </Link>
              </div>
            )}
          </div>

          {/* Mobile Expandable Brochure Dropdown */}
          <div className="mobile-nav-accordion">
            <button
              type="button"
              className={`mobile-nav-accordion-trigger ${mobileBrochureOpen ? 'open' : ''}`}
              onClick={() => setMobileBrochureOpen((prev) => !prev)}
            >
              <span>Brochures (PDF)</span>
              <svg className={`mobile-chevron ${mobileBrochureOpen ? 'rotated' : ''}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </button>
            {mobileBrochureOpen && (
              <div className="mobile-nav-sublinks">
                <a
                  href="#download-knee"
                  onClick={(e) => {
                    e.preventDefault();
                    alert('Downloading Knee Care & Robotic Surgery Guide (PDF)...');
                    setMobileMenuOpen(false);
                  }}
                >
                  📄 Knee Care &amp; Robotics <span className="mobile-pdf-pill">PDF</span>
                </a>
                <a
                  href="#download-hip"
                  onClick={(e) => {
                    e.preventDefault();
                    alert('Downloading Hip & Shoulder Specialist Care Booklet (PDF)...');
                    setMobileMenuOpen(false);
                  }}
                >
                  📘 Hip &amp; Shoulder Care <span className="mobile-pdf-pill">PDF</span>
                </a>
                <a
                  href="#download-eras"
                  onClick={(e) => {
                    e.preventDefault();
                    alert('Downloading ERAS Rapid Recovery Care Protocol (PDF)...');
                    setMobileMenuOpen(false);
                  }}
                >
                  🏃 ERAS Recovery Protocol <span className="mobile-pdf-pill">PDF</span>
                </a>
                <a
                  href="#download-clinic"
                  onClick={(e) => {
                    e.preventDefault();
                    alert('Downloading Dr. Harshil Shah Profile & Clinic Guide (PDF)...');
                    setMobileMenuOpen(false);
                  }}
                >
                  🏥 Clinic Profile &amp; Info <span className="mobile-pdf-pill">PDF</span>
                </a>
              </div>
            )}
          </div>

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

