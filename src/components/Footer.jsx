import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="shell footer-grid">
        {/* Brand Col */}
        <div className="footer-brand">
          <Link to="/" className="brand brand-footer" aria-label="Dr Harshil Shah home">
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
          <p className="footer-brand-text">
            Patient-first orthopaedic care for knee, hip and shoulder conditions, based in Gujarat, India.
          </p>
          <span className="footer-location-badge">
            <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 2a8 8 0 0 0-8 8c0 5.25 8 12 8 12s8-6.75 8-12a8 8 0 0 0-8-8z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            Ahmedabad, Gujarat, India
          </span>
        </div>

        {/* Explore Col */}
        <div className="footer-nav-col">
          <p className="footer-label">Explore</p>
          <Link to="/about">About the doctor</Link>
          <Link to="/treatments">Treatments</Link>
          <Link to="/patient-guides">Patient guides</Link>
          <Link to="/gallery">Case gallery</Link>
        </div>

        {/* Patient Help Col */}
        <div className="footer-nav-col">
          <p className="footer-label">Patient Help</p>
          <Link to="/appointment">Book appointment</Link>
          <Link to="/contact">Contact clinic</Link>
          <Link to="/faq">Common questions</Link>
        </div>

        {/* Contact Col */}
        <div className="footer-nav-col footer-contact-col">
          <p className="footer-label">Contact</p>
          <a className="footer-contact-link" href="tel:+919316753985">
            <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
            +91 93167 53985
          </a>
          <a className="footer-contact-email" href="mailto:care@drharshilshah.com">
            <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
              <polyline points="22,6 12,13 2,6" />
            </svg>
            care@drharshilshah.com
          </a>
          <span className="footer-hours-text">Mon – Sat: 9:00 AM – 7:00 PM</span>
        </div>
      </div>

      <div className="shell footer-bottom">
        <span>© {new Date().getFullYear()} Dr. Harshil Shah. All rights reserved.</span>
        <span>Medical information is for general education, not a diagnosis.</span>
      </div>
    </footer>
  );
}
