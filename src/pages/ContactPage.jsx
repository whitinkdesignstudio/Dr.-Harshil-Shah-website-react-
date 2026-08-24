import React from 'react';
import { Link } from 'react-router-dom';

export default function ContactPage() {
  return (
    <div>
      {/* Visual Contact Full-Width Hero Banner */}
      <section className="contact-photo-hero">
        <div className="contact-photo-hero-bg-wrap">
          <img
            src="/ChatGPT Image Aug 22, 2026, 01_05_41 PM.png"
            alt="Dr. Harshil Shah - Orthopaedic Surgeon Consultation"
            className="contact-photo-hero-img"
          />
          <div className="contact-photo-hero-overlay" />
        </div>

        <div className="shell contact-photo-hero-shell">
          <div className="contact-photo-hero-content">
            <div className="breadcrumb breadcrumb-light-theme">
              <Link to="/">Home</Link>
              <span>/</span> Contact
            </div>
            <h1 className="contact-photo-hero-title">Get in Touch</h1>
            <div className="contact-photo-hero-bar" />
            <p className="contact-photo-hero-desc">
              Have questions about treatment, surgery, or recovery?
              <br />
              Our team is here to help you with expert advice and personalized care.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Direct Section */}
      <section className="section contact-section">
        <div className="shell contact-grid">
          <div className="contact-intro">
            <h2 className="contact-main-heading">
              Clear support,
              <br />
              <span className="contact-heading-accent">from the first</span>
              <br />
              call.
            </h2>

            <div className="contact-heading-bar" />

            <p className="contact-intro-desc">
              For appointment requests, keep your name, contact number and a short description of your concern ready. If you have previous scans or reports, you can bring them to your consultation.
            </p>

            <div className="contact-emergency-card">
              <div className="contact-emergency-icon-wrap">
                <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="#0284c7" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M6 18h12" />
                  <path d="M6 14h12" />
                  <path d="M12 2v2" />
                  <path d="M12 6a6 6 0 0 1 6 6v2H6v-2a6 6 0 0 1 6-6z" />
                  <path d="M4.93 4.93l1.41 1.41" />
                  <path d="M19.07 4.93l-1.41 1.41" />
                </svg>
              </div>
              <div className="contact-emergency-content">
                <strong>Medical emergency?</strong>
                <p>
                  Please contact local emergency services or visit the nearest hospital immediately.
                </p>
              </div>
            </div>
          </div>

          <div className="contact-cards-container">
            <a href="tel:+919316753985" className="contact-feature-card">
              <span className="contact-num-badge">01</span>
              <div className="contact-card-body">
                <span className="contact-card-kicker">CALL THE CLINIC</span>
                <strong className="contact-card-main">+91 93167 53985</strong>
                <p className="contact-card-sub">For appointments and direct enquiries</p>
              </div>
              <div className="contact-arrow-circle">
                <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </div>
            </a>

            <a href="https://wa.me/919316753985" target="_blank" rel="noreferrer" className="contact-feature-card">
              <span className="contact-num-badge">02</span>
              <div className="contact-card-body">
                <span className="contact-card-kicker">WHATSAPP SUPPORT</span>
                <strong className="contact-card-main">+91 93167 53985</strong>
                <p className="contact-card-sub">Fast responses & appointment coordination</p>
              </div>
              <div className="contact-arrow-circle">
                <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </div>
            </a>

            <a href="https://share.google/MBpDzvqtecRuH4gf8" target="_blank" rel="noreferrer" className="contact-feature-card">
              <span className="contact-num-badge">03</span>
              <div className="contact-card-body">
                <span className="contact-card-kicker">CLINIC LOCATION</span>
                <strong className="contact-card-main">Ahmedabad, Gujarat</strong>
                <p className="contact-card-sub">Open clinic address in Google Maps</p>
              </div>
              <div className="contact-arrow-circle">
                <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </div>
            </a>

            <a href="mailto:care@drharshilshah.com" className="contact-feature-card">
              <span className="contact-num-badge">04</span>
              <div className="contact-card-body">
                <span className="contact-card-kicker">EMAIL</span>
                <strong className="contact-card-main">care@drharshilshah.com</strong>
                <p className="contact-card-sub">Share medical queries or scan reports</p>
              </div>
              <div className="contact-arrow-circle">
                <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </div>
            </a>

            <Link to="/appointment" className="contact-feature-card">
              <span className="contact-num-badge">05</span>
              <div className="contact-card-body">
                <span className="contact-card-kicker">ONLINE FORM</span>
                <strong className="contact-card-main">Request an appointment</strong>
                <p className="contact-card-sub">Send your preferred day, time and reason</p>
              </div>
              <div className="contact-arrow-circle">
                <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Patient Preparation / Visiting Section (Balanced 3-Column Grid) */}
      <section className="visit-section">
        <div className="shell visit-container">
          <header className="visit-header">
            <h2 className="visit-main-heading">
              Plan your <span className="visit-heading-accent">consultation.</span>
            </h2>

            <p className="visit-intro-lead">
              A few simple preparation steps allow Dr. Harshil Shah to provide an accurate clinical assessment and a targeted recovery pathway from day one.
            </p>
          </header>

          <div className="visit-cards-grid">
            {/* Step 01 */}
            <div className="visit-step-card">
              <div className="visit-step-top">
                <span className="visit-step-num">STEP 01</span>
                <div className="visit-step-icon-badge">
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="#0284c7" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                    <polyline points="14 2 14 8 20 8" />
                    <line x1="16" y1="13" x2="8" y2="13" />
                    <line x1="16" y1="17" x2="8" y2="17" />
                  </svg>
                </div>
              </div>
              <h3 className="visit-step-title">Bring Previous Reports & Scans</h3>
              <p className="visit-step-desc">
                Prior X-rays, MRI scans, CT reports, or blood tests help compare progression and avoid repeating unnecessary scans.
              </p>
              <div className="visit-step-footer">
                <span className="visit-step-tag">Physical Films or Digital</span>
              </div>
            </div>

            {/* Step 02 */}
            <div className="visit-step-card">
              <div className="visit-step-top">
                <span className="visit-step-num">STEP 02</span>
                <div className="visit-step-icon-badge">
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="#0284c7" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="m10.5 20.5 10-10a4.95 4.95 0 1 0-7-7l-10 10a4.95 4.95 0 1 0 7 7Z" />
                    <line x1="8.5" y1="8.5" x2="15.5" y2="15.5" />
                  </svg>
                </div>
              </div>
              <h3 className="visit-step-title">List Ongoing Medications</h3>
              <p className="visit-step-desc">
                Note down daily medicines, blood thinners, past surgeries, and any known drug or analgesic allergies.
              </p>
              <div className="visit-step-footer">
                <span className="visit-step-tag">Crucial for Surgical Safety</span>
              </div>
            </div>

            {/* Step 03 */}
            <div className="visit-step-card">
              <div className="visit-step-top">
                <span className="visit-step-num">STEP 03</span>
                <div className="visit-step-icon-badge">
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="#0284c7" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                    <path d="M12 7v4" />
                    <path d="M12 15h.01" />
                  </svg>
                </div>
              </div>
              <h3 className="visit-step-title">Note Your Key Questions</h3>
              <p className="visit-step-desc">
                Write down when pain triggers, daily activities affected, and what outcome goals you want to achieve.
              </p>
              <div className="visit-step-footer">
                <span className="visit-step-tag">Dedicated Doctor Discussion</span>
              </div>
            </div>
          </div>

          {/* Bottom Tip Bar */}
          <div className="visit-tip-bar">
            <div className="visit-tip-icon">
              <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="#0284c7" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                <polyline points="9 12 11 14 15 10" />
              </svg>
            </div>
            <div className="visit-tip-text">
              <strong>Digital Scans Supported:</strong>
              <span>You can bring physical films, CDs, pendrives, or share reports directly over WhatsApp.</span>
            </div>
          </div>
        </div>
      </section>

      {/* Educational Guide Banner (Executive 3D Visual Section) */}
      <section className="contact-guide-banner">
        <div className="shell contact-guide-grid">
          {/* Left: 3D Joint Anatomy Models Orbiting along Circular Track */}
          <div className="contact-3d-showcase" aria-hidden="true">
            <div className="contact-3d-ambient-glow" />
            <div className="contact-3d-orbit orbit-primary" />
            <div className="contact-3d-orbit orbit-secondary" />

            {/* Revolving Orbit Track */}
            <div className="contact-orbit-track">
              {/* Joint 1: Hip */}
              <div className="contact-orbit-slot slot-hip">
                <div className="contact-orbit-counter">
                  <img src="/hip-3d.webp" alt="3D Hip Anatomy" className="contact-3d-img" />
                  <span className="contact-3d-label">Hip Preservation</span>
                </div>
              </div>

              {/* Joint 2: Knee */}
              <div className="contact-orbit-slot slot-knee">
                <div className="contact-orbit-counter">
                  <img src="/knee-3d.webp" alt="3D Knee Anatomy" className="contact-3d-img" />
                  <span className="contact-3d-label">Knee Care</span>
                </div>
              </div>

              {/* Joint 3: Shoulder */}
              <div className="contact-orbit-slot slot-shoulder">
                <div className="contact-orbit-counter">
                  <img src="/shoulder-3d.webp" alt="3D Shoulder Anatomy" className="contact-3d-img" />
                  <span className="contact-3d-label">Shoulder Mobility</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right: High-Contrast Illuminated Guidance Text */}
          <div className="contact-guide-content">
            <h2 className="contact-guide-title">
              Know the journey.
              <br />
              <span className="contact-guide-accent">Ask better questions.</span>
            </h2>
            <p className="contact-guide-lead">
              Review our specialized ERAS (Enhanced Recovery After Surgery) pathway before your consultation so you can make confident, informed decisions about your joint recovery.
            </p>
            <Link className="contact-guide-cta-btn" to="/patient-guides#eras">
              <span>Explore ERAS Guidance</span>
              <svg aria-hidden="true" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
