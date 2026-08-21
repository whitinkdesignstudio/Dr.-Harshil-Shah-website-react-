import React from 'react';
import { Link } from 'react-router-dom';

export default function ContactPage() {
  return (
    <div>
      {/* Visual Hero */}
      <section className="inner-hero compact-hero compact-hero-visual">
        <div className="inner-orbit"></div>
        <div className="shell compact-visual-hero-grid">
          <div>
            <div className="breadcrumb">
              <Link to="/">Home</Link>
              <span>/</span> Contact
            </div>
            <div className="eyebrow">
              <span></span> We are here to help
            </div>
            <h1>
              Start with a
              <br />
              <em>simple conversation.</em>
            </h1>
            <p>
              Contact the clinic to arrange a consultation, ask what reports to bring or discuss the right next step.
            </p>
          </div>
          <div className="page-hero-art" aria-hidden="true">
            <div className="page-art-orbit page-art-orbit-one"></div>
            <div className="page-art-orbit page-art-orbit-two"></div>
            <img className="page-art-model page-art-primary" src="/hip-3d.png" alt="" />
            <img className="page-art-model page-art-secondary" src="/shoulder-3d.png" alt="" />
            <span className="page-art-caption">Knee · Hip · Shoulder</span>
          </div>
        </div>
      </section>

      {/* Contact Direct Section */}
      <section className="section contact-section">
        <div className="shell contact-grid">
          <div className="contact-intro">
            <div className="eyebrow">
              <span></span> Get in touch
            </div>
            <h2>
              Clear support,
              <br />
              <em>from the first call.</em>
            </h2>
            <p>
              For appointment requests, keep your name, contact number and a short description of your concern ready. If you have previous scans or reports, you can bring them to your consultation.
            </p>
            <div className="contact-notice">
              <span>!</span>
              <p>
                <strong>Medical emergency?</strong>
                <br />
                Please contact local emergency services or visit the nearest hospital immediately.
              </p>
            </div>
          </div>

          <div className="contact-cards">
            <a href="tel:+919316753985" className="contact-card">
              <span className="contact-icon">01</span>
              <div>
                <small>Call the clinic</small>
                <strong>+91 93167 53985</strong>
                <p>For appointments and general enquiries</p>
              </div>
              <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className="icon">
                <path d="M5 12h14M14 7l5 5-5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>

            <a href="mailto:care@drharshilshah.com" className="contact-card">
              <span className="contact-icon">02</span>
              <div>
                <small>Email</small>
                <strong>care@drharshilshah.com</strong>
                <p>Share a non-urgent question or request</p>
              </div>
              <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className="icon">
                <path d="M5 12h14M14 7l5 5-5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>

            <Link to="/appointment" className="contact-card">
              <span className="contact-icon">03</span>
              <div>
                <small>Online request</small>
                <strong>Request an appointment</strong>
                <p>Send your preferred day, time and reason</p>
              </div>
              <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className="icon">
                <path d="M5 12h14M14 7l5 5-5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Visiting Section */}
      <section className="visit-section">
        <div className="shell visit-grid">
          <div>
            <div className="eyebrow">
              <span></span> Visiting
            </div>
            <h2>
              Plan your
              <br />
              <em>consultation.</em>
            </h2>
          </div>
          <div className="visit-list">
            <div>
              <span>01</span>
              <p>
                <strong>Bring your reports</strong>
                <small>Previous X-rays, MRI or CT reports if available.</small>
              </p>
            </div>
            <div>
              <span>02</span>
              <p>
                <strong>List your medicines</strong>
                <small>Include current medicines and known allergies.</small>
              </p>
            </div>
            <div>
              <span>03</span>
              <p>
                <strong>Note your questions</strong>
                <small>We want every important concern to be discussed.</small>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Guide Banner */}
      <section className="contact-guide-banner">
        <div className="shell contact-guide-grid">
          <div className="contact-joint-cluster" aria-hidden="true">
            <span></span>
            <img src="/knee-3d.png" alt="" />
            <img src="/hip-3d.png" alt="" />
            <img src="/shoulder-3d.png" alt="" />
          </div>
          <div>
            <span className="guide-kicker">Prepare before your visit</span>
            <h2>
              Know the journey.
              <br />
              <em>Ask better questions.</em>
            </h2>
            <p>
              Read the ERAS preparation pathway before your consultation and note anything you would like the clinical team to explain.
            </p>
            <Link className="button button-light" to="/patient-guides#eras">
              Read ERAS guidance{' '}
              <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className="icon">
                <path d="M5 12h14M14 7l5 5-5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
