import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Interactive3DViewer from '../components/Interactive3DViewer';

export default function TreatmentsPage() {
  const [activeJointTab, setActiveJointTab] = useState('knee');

  const scrollToSection = (id) => {
    setActiveJointTab(id);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="treatments-page">
      {/* Hero */}
      <section className="inner-hero compact-hero treatment-hero">
        <div className="shell treatment-hero-grid">
          <div>
            <h1>
              Specialist care for
              <br />
              <em>better movement.</em>
            </h1>
            <p>
              Every plan begins with the right diagnosis and a clear discussion of both non-surgical and surgical options.
            </p>
          </div>
          <div className="treatment-hero-art" aria-hidden="true">
            <img src="/hip-3d.png" alt="3D Hip" />
            <img src="/knee-3d.png" alt="3D Knee" />
            <img src="/shoulder-3d.png" alt="3D Shoulder" />
          </div>
        </div>
      </section>

      {/* Real 3D Interactive Joint Anatomy Explorer */}
      <section className="treatment-3d-section" id="3d-explorer" aria-label="Interactive 3D Joint Anatomy">
        <div className="shell">
          <div className="treatment-3d-header">
            <span className="treatment-3d-kicker">REAL 3D ANATOMY EXPLORER</span>
            <h2 className="treatment-3d-title">Explore Joint Anatomy in 360° Real 3D</h2>
            <p className="treatment-3d-subtitle">
              Rotate, zoom, and inspect the Knee, Hip, and Shoulder joints in full 3D. Explore bones, cartilage, ligaments, and surgical treatment views.
            </p>
          </div>

          <Interactive3DViewer
            initialJoint={activeJointTab}
            onSelectTreatment={(joint) => scrollToSection(joint)}
          />
        </div>
      </section>

      {/* Directory Nav & Sections */}
      <section className="treatment-directory">
        <div className="shell treatment-tabs">
          <span>Explore by joint</span>
          <button
            type="button"
            className="treatment-tab-btn"
            onClick={() => scrollToSection('knee')}
          >
            Knee
          </button>
          <button
            type="button"
            className="treatment-tab-btn"
            onClick={() => scrollToSection('hip')}
          >
            Hip
          </button>
          <button
            type="button"
            className="treatment-tab-btn"
            onClick={() => scrollToSection('shoulder')}
          >
            Shoulder
          </button>
          <button
            type="button"
            className="treatment-tab-btn"
            onClick={() => scrollToSection('more')}
          >
            More care
          </button>
        </div>

        {/* Knee Section */}
        <section className="treatment-row" id="knee">
          <div className="shell treatment-row-grid">
            <div className="treatment-joint-visual">
              <img src="/knee-3d.png" alt="3D Knee joint medical visualization" />
            </div>
            <div className="treatment-detail">
              <div className="eyebrow">
                <span></span> Knee care
              </div>
              <h2>
                Knee conditions &amp;
                <br />
                <em>treatment options.</em>
              </h2>
              <p>
                Care for pain, instability and injuries that keep you from walking, climbing stairs or returning to sport.
              </p>
              <div className="treatment-list">
                <Link to="/appointment">
                  <span>01</span>
                  <strong>Robotic, muscle-sparing joint replacement</strong>
                  <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className="icon">
                    <path d="M5 12h14M14 7l5 5-5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>
                <Link to="/appointment">
                  <span>02</span>
                  <strong>Day-care joint replacement pathway</strong>
                  <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className="icon">
                    <path d="M5 12h14M14 7l5 5-5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>
                <Link to="/appointment">
                  <span>03</span>
                  <strong>ACL reconstruction with graft options</strong>
                  <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className="icon">
                    <path d="M5 12h14M14 7l5 5-5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>
                <Link to="/appointment">
                  <span>04</span>
                  <strong>Lateral extra-articular tenodesis (LET)</strong>
                  <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className="icon">
                    <path d="M5 12h14M14 7l5 5-5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>
                <Link to="/appointment">
                  <span>05</span>
                  <strong>Meniscus and cartilage arthroscopy</strong>
                  <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className="icon">
                    <path d="M5 12h14M14 7l5 5-5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>
              </div>
              <Link className="button button-outline" to="/appointment">
                Discuss your symptoms{' '}
                <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className="icon">
                  <path d="M5 12h14M14 7l5 5-5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
            </div>
          </div>
        </section>

        {/* Hip Section */}
        <section className="treatment-row treatment-row-alt" id="hip">
          <div className="shell treatment-row-grid">
            <div className="treatment-joint-visual">
              <img src="/hip-3d.png" alt="3D Hip joint medical visualization" />
            </div>
            <div className="treatment-detail">
              <div className="eyebrow">
                <span></span> Hip care
              </div>
              <h2>
                Hip conditions &amp;
                <br />
                <em>treatment options.</em>
              </h2>
              <p>
                Accurate evaluation for groin pain, stiffness, sports-related impingement and loss of mobility.
              </p>
              <div className="treatment-list">
                <Link to="/appointment">
                  <span>01</span>
                  <strong>Avascular necrosis (AVN) care</strong>
                  <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className="icon">
                    <path d="M5 12h14M14 7l5 5-5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>
                <Link to="/appointment">
                  <span>02</span>
                  <strong>Direct anterior hip replacement</strong>
                  <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className="icon">
                    <path d="M5 12h14M14 7l5 5-5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>
                <Link to="/appointment">
                  <span>03</span>
                  <strong>STAR muscle-sparing approach</strong>
                  <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className="icon">
                    <path d="M5 12h14M14 7l5 5-5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>
                <Link to="/appointment">
                  <span>04</span>
                  <strong>Robotic and day-care pathways</strong>
                  <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className="icon">
                    <path d="M5 12h14M14 7l5 5-5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>
                <Link to="/appointment">
                  <span>05</span>
                  <strong>FAI: cam and pincer impingement</strong>
                  <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className="icon">
                    <path d="M5 12h14M14 7l5 5-5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>
              </div>
              <Link className="button button-outline" to="/appointment">
                Discuss your symptoms{' '}
                <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className="icon">
                  <path d="M5 12h14M14 7l5 5-5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
            </div>
          </div>
        </section>

        {/* Shoulder Section */}
        <section className="treatment-row" id="shoulder">
          <div className="shell treatment-row-grid">
            <div className="treatment-joint-visual">
              <img src="/shoulder-3d.png" alt="3D Shoulder joint medical visualization" />
            </div>
            <div className="treatment-detail">
              <div className="eyebrow">
                <span></span> Shoulder care
              </div>
              <h2>
                Shoulder conditions &amp;
                <br />
                <em>treatment options.</em>
              </h2>
              <p>
                Treatment for night pain, weakness, instability and restricted overhead movement.
              </p>
              <div className="treatment-list">
                <Link to="/appointment">
                  <span>01</span>
                  <strong>Shoulder arthroscopy</strong>
                  <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className="icon">
                    <path d="M5 12h14M14 7l5 5-5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>
                <Link to="/appointment">
                  <span>02</span>
                  <strong>Rotator cuff repair</strong>
                  <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className="icon">
                    <path d="M5 12h14M14 7l5 5-5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>
                <Link to="/appointment">
                  <span>03</span>
                  <strong>Recurrent dislocation and instability</strong>
                  <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className="icon">
                    <path d="M5 12h14M14 7l5 5-5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>
                <Link to="/appointment">
                  <span>04</span>
                  <strong>Frozen shoulder treatment</strong>
                  <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className="icon">
                    <path d="M5 12h14M14 7l5 5-5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>
                <Link to="/appointment">
                  <span>05</span>
                  <strong>Reverse shoulder replacement</strong>
                  <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className="icon">
                    <path d="M5 12h14M14 7l5 5-5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>
              </div>
              <Link className="button button-outline" to="/appointment">
                Discuss your symptoms{' '}
                <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className="icon">
                  <path d="M5 12h14M14 7l5 5-5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
            </div>
          </div>
        </section>
      </section>

      {/* Recovery Guides Feature */}
      <section className="section treatment-guides-feature">
        <div className="shell treatment-guides-grid">
          <div className="treatment-guides-copy">
            <span className="guide-kicker">Treatment continues after discharge</span>
            <h2>
              A recovery plan you can
              <br />
              <em>actually follow.</em>
            </h2>
            <p>
              Clear visual guidance complements your personal instructions. It helps patients and families understand the early priorities without turning recovery into a long list of medical terms.
            </p>
            <div className="treatment-guide-notes">
              <span>
                <b>01</b> Prepare before surgery
              </span>
              <span>
                <b>02</b> Protect the early phase
              </span>
              <span>
                <b>03</b> Progress with guidance
              </span>
            </div>
            <Link className="button button-outline" to="/patient-guides">
              Open patient guides{' '}
              <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className="icon">
                <path d="M5 12h14M14 7l5 5-5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </div>
          <div className="treatment-recovery-3d" aria-hidden="true">
            <span className="treatment-recovery-ring treatment-recovery-ring-one"></span>
            <span className="treatment-recovery-ring treatment-recovery-ring-two"></span>
            <img className="treatment-recovery-knee" src="/knee-3d.png" alt="" />
            <img className="treatment-recovery-hip" src="/hip-3d.png" alt="" />
            <img className="treatment-recovery-shoulder" src="/shoulder-3d.png" alt="" />
          </div>
        </div>
      </section>

      {/* More Specialist Care */}
      <section className="section more-care" id="more">
        <div className="shell">
          <div className="section-heading split-heading">
            <div>
              <div className="eyebrow">
                <span></span> More specialist care
              </div>
              <h2>
                One diagnosis.
                <br />
                <em>More than one option.</em>
              </h2>
            </div>
            <p>
              The first goal is to understand the source of symptoms. Treatment may include medicines, guided rehabilitation, injections or surgery when the expected benefit makes it appropriate.
            </p>
          </div>
          <div className="more-care-grid">
            <article>
              <span>04</span>
              <h3>Sports injuries</h3>
              <p>Assessment and structured return-to-activity planning for ligament, cartilage and overuse injuries.</p>
            </article>
            <article>
              <span>05</span>
              <h3>Non-surgical care</h3>
              <p>Stage-appropriate options to manage symptoms and improve function before considering surgery.</p>
            </article>
            <article>
              <span>06</span>
              <h3>Rehabilitation guidance</h3>
              <p>The right physiotherapy at the right time, with progress milestones that are easy to understand.</p>
            </article>
          </div>
        </div>
      </section>

      {/* Medical Note */}
      <section className="medical-note">
        <div className="shell">
          <span>Important</span>
          <p>
            Treatment depends on a clinical examination and appropriate imaging. Website information cannot replace a personal medical consultation.
          </p>
          <Link to="/appointment">
            Book a consultation{' '}
            <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className="icon">
              <path d="M5 12h14M14 7l5 5-5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>
      </section>
    </div>
  );
}
