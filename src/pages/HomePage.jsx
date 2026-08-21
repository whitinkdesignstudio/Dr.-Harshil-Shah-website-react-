import React from 'react';
import { Link } from 'react-router-dom';
import HeroSlider from '../components/HeroSlider';
import Recovery3DViewer from '../components/Recovery3DViewer';

export default function HomePage() {
  return (
    <div className="home-page">
      {/* Dynamic Hero Carousel */}
      <HeroSlider />

      {/* Stats & Trust Strip Bar */}
      <section className="stats-trust-section" aria-label="Key statistics and trust">
        <div className="shell">
          <div className="stats-trust-bar">
            {/* Stat 1: 15+ Years of Experience */}
            <div className="stats-trust-item">
              <div className="stats-trust-icon">
                <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="#0284c7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  <polygon points="12 8 13.5 11.2 17 11.5 14.5 13.8 15.2 17.2 12 15.4 8.8 17.2 9.5 13.8 7 11.5 10.5 11.2 12 8" fill="#0284c7" fillOpacity="0.18" />
                </svg>
              </div>
              <div className="stats-trust-info">
                <strong className="stats-number">15+</strong>
                <span className="stats-label">Years of Experience</span>
              </div>
            </div>

            <div className="stats-trust-divider" />

            {/* Stat 2: 5000+ Happy Patients */}
            <div className="stats-trust-item">
              <div className="stats-trust-icon">
                <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="#0284c7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M18.5 11.5c-1.3 0-2.3 1-2.3 2.3 0 2.2 3.3 3.8 3.3 3.8s3.3-1.6 3.3-3.8c0-1.3-1-2.3-2.3-2.3-.8 0-1.5.4-1.8 1-.3-.6-1-1-1.8-1z" fill="#0284c7" fillOpacity="0.2" />
                </svg>
              </div>
              <div className="stats-trust-info">
                <strong className="stats-number">5000+</strong>
                <span className="stats-label">Happy Patients</span>
              </div>
            </div>

            <div className="stats-trust-divider" />

            {/* Stat 3: 2000+ Successful Procedures */}
            <div className="stats-trust-item">
              <div className="stats-trust-icon">
                <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="#0284c7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 3c0 3-1.5 5.5-1.5 8 0 2.2 1.8 4 4 4.5 2.2-.5 4-2.3 4-4.5 0-2.5-1.5-5-1.5-8" />
                  <path d="M10.5 15.5v5.5M13.5 15.5v5.5" />
                  <circle cx="12" cy="11" r="1.5" fill="#0284c7" />
                </svg>
              </div>
              <div className="stats-trust-info">
                <strong className="stats-number">2000+</strong>
                <span className="stats-label">Successful Procedures</span>
              </div>
            </div>

            <div className="stats-trust-divider" />

            {/* Stat 4: 98% Patient Satisfaction */}
            <div className="stats-trust-item">
              <div className="stats-trust-icon">
                <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="#0284c7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                  <path d="M3.5 12h3.5l2-4 3 8 2.5-5 1.5 2h4.5" />
                </svg>
              </div>
              <div className="stats-trust-info">
                <strong className="stats-number">98%</strong>
                <span className="stats-label">Patient Satisfaction</span>
              </div>
            </div>

            <div className="stats-trust-divider" />

            {/* Stat 5: Trusted Orthopaedic Care */}
            <div className="stats-trust-item stats-trust-promise">
              <div className="stats-trust-icon">
                <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="#0284c7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  <path d="M12 8v8M8 12h8" strokeWidth="2.4" />
                </svg>
              </div>
              <div className="stats-trust-info">
                <strong className="stats-promise-title">Trusted orthopaedic care.</strong>
                <span className="stats-label">Experience, precision, and patient-first treatment.</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Areas of Care - Bento Grid */}
      <section className="section care-section" id="care">
        <div className="shell">
          <div className="care-heading-row">
            <h2>
              Focused expertise for <span className="care-heading-accent">better movement.</span>
            </h2>
            <p className="care-heading-desc">
              From accurate diagnosis to advanced treatment, we create personalized care plans to help you move better, heal faster and live stronger.
            </p>
          </div>

          <div className="care-bento-grid">
            {/* Left Big Card: Knee Care */}
            <div className="care-bento-card care-card-knee">
              <div className="care-card-topbar">
                <span className="care-card-index">01 —</span>
              </div>

              <div className="care-knee-stage">
                <div className="care-orbit-bg" />
                <img src="/knee-motion-v2.png" alt="3D Knee Joint Visualization" className="care-knee-img" />
              </div>

              <div className="care-knee-bottom">
                <div className="care-specialty-badge">
                  <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="#0284c7" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M10 2h4v5c0 1.2.6 2.2 1.5 2.8.9.6 1.5 1.7 1.5 2.9 0 1.9-1.6 3.5-3.5 3.5h-3C8.6 16.2 7 14.6 7 12.7c0-1.2.6-2.3 1.5-2.9C9.4 9.2 10 8.2 10 7V2z" fill="#0284c7" fillOpacity="0.08" />
                    <circle cx="12" cy="12" r="2" fill="#0284c7" fillOpacity="0.25" />
                    <path d="M10.5 17v5M13.5 17v5M7.5 18v3.5" />
                  </svg>
                </div>
                <h3>Knee care</h3>
                <p>
                  Diagnosis and treatment for ligament injuries, meniscus tears, arthritis, and persistent knee pain.
                </p>
                <Link to="/treatments#knee" className="care-btn-primary">
                  <span>Explore Knee Care</span>
                  <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Right Column: Stacked Hip and Shoulder */}
            <div className="care-bento-right">
              {/* 02 Hip Care */}
              <div className="care-bento-card care-horizontal-card">
                <div className="care-horizontal-content">
                  <div className="care-card-topbar">
                    <span className="care-card-index">02 —</span>
                  </div>
                  <div className="care-horizontal-title-group">
                    <div className="care-specialty-badge">
                      <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="#0284c7" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 4c3.5-1.5 8-1.5 11.5 0 2.5 1.5 3.5 4.5 2.5 7.5-.8 2.2-2.5 3.8-4.5 4.5" />
                        <circle cx="12.5" cy="11.5" r="3" fill="#0284c7" fillOpacity="0.2" stroke="#0284c7" strokeWidth="1.8" />
                        <path d="M10.5 13.5l-3 7.5M13 14.5l-2 6.5" />
                      </svg>
                    </div>
                    <h3>Hip care</h3>
                  </div>
                  <p>
                    Advanced solutions for hip replacement, joint preservation and mobility restoration.
                  </p>
                  <Link to="/treatments#hip" className="care-btn-secondary">
                    <span>Explore Hip Care</span>
                    <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>

                <div className="care-horizontal-visual">
                  <img src="/hip-precision-v2.png" alt="3D Hip Care Model" className="care-horizontal-img" />
                </div>
              </div>

              {/* 03 Shoulder Care */}
              <div className="care-bento-card care-horizontal-card">
                <div className="care-horizontal-content">
                  <div className="care-card-topbar">
                    <span className="care-card-index">03 —</span>
                  </div>
                  <div className="care-horizontal-title-group">
                    <div className="care-specialty-badge">
                      <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="#0284c7" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M4 8c4-2.5 9-2.5 13 0 2 1.2 3 3.5 3 5.8" />
                        <circle cx="14" cy="12" r="3" fill="#0284c7" fillOpacity="0.2" stroke="#0284c7" strokeWidth="1.8" />
                        <path d="M6 10c0 4.5 2.5 8 6 9.5" />
                        <path d="M14 15v6" strokeWidth="2" />
                      </svg>
                    </div>
                    <h3>Shoulder care</h3>
                  </div>
                  <p>
                    Expert care for shoulder pain, dislocation, rotator cuff issues, and arthroscopic treatment.
                  </p>
                  <Link to="/treatments#shoulder" className="care-btn-secondary">
                    <span>Explore Shoulder Care</span>
                    <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>

                <div className="care-horizontal-visual">
                  <img src="/shoulder-mobility-v2.png" alt="3D Shoulder Care Model" className="care-horizontal-img" />
                </div>
              </div>
            </div>
          </div>

          {/* Bottom All Treatments Link */}
          <div className="care-bottom-footer">
            <div className="care-footer-line" />
            <Link to="/treatments" className="care-view-all-link">
              <div className="care-runner-icon">
                <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                  <path d="M13.5 5.5c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zM9.8 8.9L7 23h2.1l1.8-8 2.1 2v6h2v-7.5l-2.1-2 .6-3C14.8 12 16.8 13 19 13v-2c-1.9 0-3.5-1-4.3-2.4l-1-1.6c-.4-.6-1-1-1.7-1-.3 0-.5.1-.8.1L6 8.3V13h2V9.6l1.8-.7z" />
                </svg>
              </div>
              <span>View all treatments</span>
              <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
            <div className="care-footer-line" />
          </div>
        </div>
      </section>

      {/* Block 1: Experience Personalized Rehabilitation */}
      <section className="rehab-section" aria-label="Personalized Rehabilitation">
        <div className="rehab-fullscreen-container">
          {/* Left spacing for background knee illustration */}
          <div className="rehab-space-left" />

          {/* Right: Typography, CTA and Glassmorphic Stats */}
          <div className="rehab-content-col">
            <div className="rehab-header">
              <h2 className="rehab-title">
                EXPERIENCE<br />
                PERSONALIZED<br />
                REHABILITATION
              </h2>
              <div className="rehab-divider-line" />
              <div className="rehab-sub-row">
                <p className="rehab-sub-text">
                  Achieve your fitness goals with personalized training programs, expert guidance,
                </p>
                <Link to="/appointment" className="rehab-cta-btn">
                  <span>Get Expert Care</span>
                </Link>
              </div>
            </div>

            {/* Bottom Glassmorphic Stats Cards */}
            <div className="rehab-stats-grid">
              {/* Card 1: 98% Patient Satisfaction */}
              <div className="rehab-stat-card rehab-stat-simple">
                <div className="rehab-stat-val">
                  98<span className="rehab-stat-percent">%</span>
                </div>
                <div className="rehab-stat-label">Patient Satisfaction</div>
              </div>

              {/* Card 2: 85% Treatment Progress with Chart */}
              <div className="rehab-stat-card rehab-chart-card">
                <div className="rehab-chart-header">
                  <div className="rehab-stat-val">
                    85<span className="rehab-stat-percent">%</span>
                  </div>
                  <div className="rehab-chart-legend">
                    <span className="legend-item legend-strength">● Strength Gain</span>
                    <span className="legend-item legend-pain">● Pain Reduction</span>
                  </div>
                </div>

                <div className="rehab-chart-body">
                  <div className="rehab-growth-pill">
                    <svg viewBox="0 0 24 24" width="11" height="11" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M23 6l-9.5 9.5-5-5L1 18" />
                      <path d="M17 6h6v6" />
                    </svg>
                  </div>
                  <svg viewBox="0 0 160 52" className="rehab-chart-svg" preserveAspectRatio="none">
                    <defs>
                      <linearGradient id="rehabBlueGrad" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#1e3a8a" stopOpacity="0.9" />
                        <stop offset="100%" stopColor="#1e40af" stopOpacity="0.65" />
                      </linearGradient>
                      <linearGradient id="rehabLightGrad" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#cbd5e1" stopOpacity="0.6" />
                        <stop offset="100%" stopColor="#f1f5f9" stopOpacity="0.15" />
                      </linearGradient>
                    </defs>
                    <polygon points="0,52 0,38 25,24 55,42 85,12 115,34 135,18 160,30 160,52" fill="url(#rehabBlueGrad)" />
                    <polygon points="0,52 0,44 30,48 65,40 100,50 135,43 160,46 160,52" fill="url(#rehabLightGrad)" />
                    <line x1="85" y1="0" x2="85" y2="52" stroke="#475569" strokeWidth="1" strokeDasharray="2 2" />
                  </svg>
                </div>
                <div className="rehab-stat-label">Treatment Progress</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Doctor Card Pop-Box Section: Care that starts with listening */}
      <section className="doctor-box-section" aria-label="About the surgeon">
        <div className="shell">
          <div className="doctor-box-card">
            {/* Left spacing for background Doctor image */}
            <div className="doctor-box-space" aria-hidden="true" />

            {/* Right side content */}
            <div className="doctor-box-content">
              <h2 className="doctor-box-title">
                Care that starts<br />
                with <span>listening.</span>
              </h2>

              <p className="doctor-box-quote">
                “My goal is to help you move without fear—with honest advice, precise treatment and a recovery plan that makes sense for your life.”
              </p>

              <p className="doctor-box-desc">
                Dr. Harshil Shah focuses on knee, hip and shoulder conditions, arthroscopy, joint replacement and sports injuries. His approach combines evidence-based care with newer, muscle-preserving and day-care pathways where clinically appropriate.
              </p>

              <div className="doctor-box-rows">
                <div className="doctor-box-row">
                  <span className="box-row-num">01</span>
                  <strong className="box-row-title">Patient–first decisions</strong>
                  <span className="box-row-desc">Surgery only when it is truly needed.</span>
                </div>
                <div className="doctor-box-row">
                  <span className="box-row-num">02</span>
                  <strong className="box-row-title">Muscle–preserving approach</strong>
                  <span className="box-row-desc">Thoughtful techniques for early mobility.</span>
                </div>
                <div className="doctor-box-row">
                  <span className="box-row-num">03</span>
                  <strong className="box-row-title">Recovery with clarity</strong>
                  <span className="box-row-desc">Know what to expect at every stage.</span>
                </div>
              </div>

              <Link to="/about" className="doctor-box-btn">
                <span>Read his story</span>
                <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Block 2: Advanced Orthopedic & Aesthetic Care */}
      <section className="advanced-ortho-section" aria-label="Advanced Orthopedic Care">
        <div className="ortho-fullscreen-container">
          {/* Left spacing for background anatomy runner */}
          <div className="ortho-space-left" />

          {/* Right: Top Joint Callout, Headline, Description and Black CTA */}
          <div className="advanced-ortho-content">
            {/* Top Mini Joint Callout */}
            <div className="ortho-callout-row">
              <img src="/knee-callout-full.png" alt="Keeping your knee joints healthy is vital to performing any activity pain-free." className="ortho-callout-full-img" />
            </div>

            {/* Main Content */}
            <div className="ortho-main-body">
              <h2 className="ortho-main-title">
                Advanced Orthopedic<br />
                & Aesthetic Care
              </h2>
              <p className="ortho-main-desc">
                Diagnosis and treatment for joint pain, sports injuries, arthritis, spine conditions, and musculoskeletal disorders—focused on long-term mobility and recovery.
              </p>
              <Link to="/treatments" className="ortho-black-btn">
                <span>VIEW TREATMENTS</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section process-section" aria-label="Your Care Journey">
        <div className="shell">
          <div className="process-header">
            <h2 className="process-main-title">
              Simple steps. <span>Clear direction.</span>
            </h2>
            <p className="process-main-desc">
              No jargon, no rushed decisions—just a care plan you can understand.
            </p>
          </div>
          <div className="process-grid">
            <div className="process-card">
              <span className="process-num">01</span>
              <h3>Listen &amp; diagnose</h3>
              <p>A focused consultation, careful examination and review of your reports.</p>
            </div>
            <div className="process-card">
              <span className="process-num">02</span>
              <h3>Choose the right path</h3>
              <p>Medical care first where possible; surgery only when it is truly needed.</p>
            </div>
            <div className="process-card">
              <span className="process-num">03</span>
              <h3>Recover with clarity</h3>
              <p>A practical recovery plan, clear milestones and the right rehabilitation guidance.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Patient Recovery Guides Feature */}
      <section className="section home-guides-section">
        <div className="shell home-guides-grid">
          <div className="home-guides-copy">
            <h2>
              Good recovery starts
              <br />
              with <em>clear information.</em>
            </h2>
            <p>
              Practical, text-based guidance helps patients and families prepare, ask better questions and understand the early recovery journey.
            </p>
            <div className="home-guide-list">
              <span>
                Before <strong>Prepare your body and home</strong>
              </span>
              <span>
                Hospital <strong>Move with clinical support</strong>
              </span>
              <span>
                Home <strong>Protect the early recovery phase</strong>
              </span>
            </div>
            <Link className="button button-outline" to="/patient-guides">
              Read recovery guidance{' '}
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
          <Recovery3DViewer />
        </div>

        <div className="shell protocol-rail protocol-rail-text" aria-label="Quiet Knee Protocol highlights">
          <Link to="/patient-guides#quiet-knee">
            <span>01</span>
            <img src="/knee-motion-v2.png" alt="Swelling control" />
            <strong>Control swelling</strong>
            <p>Use protected ice and elevation as instructed.</p>
            <i>READ GUIDANCE →</i>
          </Link>
          <Link to="/patient-guides#quiet-knee">
            <span>02</span>
            <img src="/hip-precision-v2.png" alt="Protect extension" />
            <strong>Protect extension</strong>
            <p>Work on safe straightening before chasing bend.</p>
            <i>READ GUIDANCE →</i>
          </Link>
          <Link to="/patient-guides#quiet-knee">
            <span>03</span>
            <img src="/shoulder-mobility-v2.png" alt="Walking aids" />
            <strong>Keep walking short</strong>
            <p>Use your aid and follow your personal activity limit.</p>
            <i>READ GUIDANCE →</i>
          </Link>
          <Link to="/patient-guides#quiet-knee">
            <span>04</span>
            <img src="/knee-3d.png" alt="Rest and pain management" />
            <strong>Rest before pain rises</strong>
            <p>Short activity periods support a calmer early knee.</p>
            <i>READ GUIDANCE →</i>
          </Link>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section" aria-label="Book appointment callout">
        <div className="shell cta-grid">
          <div className="cta-left">
            <h2 className="cta-main-title">
              Ready to move<br />
              without fear?
            </h2>
          </div>
          <div className="cta-right">
            <p className="cta-desc">
              Bring your reports and current medicines. We’ll review the full picture and guide you towards the right next step.
            </p>
            <div className="cta-actions">
              <Link className="cta-btn-white" to="/appointment">
                <span>Book appointment</span>
                <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
              <a href="tel:+919316753985" className="cta-phone-block">
                <small>OR CALL THE CLINIC</small>
                <strong>+91 93167 53985</strong>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
