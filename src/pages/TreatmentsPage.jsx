import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Interactive3DViewer from '../components/Interactive3DViewer';
import ErrorBoundary from '../components/ErrorBoundary';

const TREATMENT_FAQS = [
  {
    id: 'treatment-faq-1',
    question: 'How do I know if I need non-surgical care or joint replacement surgery?',
    answer: 'Our priority is always joint preservation. We begin with non-surgical options—such as targeted physiotherapy, medications, lifestyle changes, and advanced biologic injections (e.g. PRP). Surgery is only recommended when conservative care no longer provides sufficient pain relief or when structural joint wear severely limits your daily mobility.'
  },
  {
    id: 'treatment-faq-2',
    question: 'What are the benefits of robotic-assisted joint replacement?',
    answer: 'Robotic-assisted surgery combines patient-specific 3D CT planning with real-time intraoperative precision. This enables sub-millimeter accurate implant positioning, greater preservation of healthy bone and soft tissues, lower postoperative pain, and faster return to natural joint motion.'
  },
  {
    id: 'treatment-faq-3',
    question: 'What is the expected recovery timeline after knee, hip, or shoulder surgery?',
    answer: 'Under our Enhanced Recovery After Surgery (ERAS) pathway, most patients begin supported walking on the same day or within 24 hours. Light household activities typically resume in 2 to 4 weeks, with driving and office work resumed by 4 to 6 weeks based on individual recovery milestones.'
  },
  {
    id: 'treatment-faq-4',
    question: 'Can sports injuries like ACL tears or Rotator Cuff tears be repaired keyhole?',
    answer: 'Yes. Minimally invasive arthroscopic (keyhole) surgery is the gold standard for ACL reconstructions, meniscus repairs, and rotator cuff repairs. Small incisions minimize muscle trauma, reduce infection risks, and accelerate functional rehabilitation back to sports and active routines.'
  },
  {
    id: 'treatment-faq-5',
    question: 'What is the difference between partial and total knee replacement?',
    answer: 'A partial (unicompartmental) knee replacement replaces only the damaged compartment (medial or lateral), preserving all healthy cartilage, bone, and your natural cruciate ligaments. Total knee replacement is advised when arthritis affects multiple compartments of the knee.'
  },
  {
    id: 'treatment-faq-6',
    question: 'How should I prepare at home before my scheduled surgery?',
    answer: 'Preparation includes performing guided preoperative muscle strengthening exercises (prehab), maintaining proper nutrition and hydration, optimizing clinical parameters (such as blood sugar and blood pressure), and setting up a clear, obstacle-free recovery space at home.'
  }
];

export default function TreatmentsPage() {
  const [activeJointTab, setActiveJointTab] = useState('knee');
  const [openFaqId, setOpenFaqId] = useState('treatment-faq-1');

  const scrollToSection = (id) => {
    setActiveJointTab(id);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const toggleFaq = (id) => {
    setOpenFaqId((prev) => (prev === id ? null : id));
  };

  return (
    <div className="treatments-page">
      {/* Hero */}
      <section className="treatment-hero">
        <div className="treatment-hero-bg-container" aria-hidden="true">
          <img
            src="/treatments-hero-banner.webp"
            alt=""
            className="treatment-hero-bg-img"
          />
          <div className="treatment-hero-scrim"></div>
        </div>
        <div className="shell treatment-hero-inner">
          <div className="treatment-hero-copy">
            <div className="eyebrow">
              <span></span> Specialist Orthopaedic Care
            </div>
            <h1>
              Specialist care for
              <br />
              <em>better movement.</em>
            </h1>
            <p>
              Personalised knee, hip, and shoulder treatments to restore mobility and active life.
            </p>
            <div className="treatment-hero-actions">
              <button
                type="button"
                className="button button-primary"
                onClick={() => scrollToSection('3d-explorer')}
              >
                Read More{' '}
                <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className="icon" style={{ width: '16px', height: '16px', marginLeft: '4px' }}>
                  <path d="M19 9l-7 7-7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>
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

          <ErrorBoundary
            fallback={
              <div style={{
                textAlign: 'center',
                padding: '40px 20px',
                background: 'rgba(15, 23, 42, 0.6)',
                borderRadius: '16px',
                color: '#e2e8f0'
              }}>
                <img
                  src={`/${activeJointTab === 'more' ? 'knee' : activeJointTab}-3d.webp`}
                  alt="Joint Anatomy"
                  style={{ maxHeight: '220px', objectFit: 'contain', margin: '0 auto 16px' }}
                />
                <h4 style={{ color: '#38bdf8', marginBottom: '8px' }}>Specialist Orthopaedic Anatomy</h4>
                <p style={{ color: '#94a3b8', fontSize: '0.9rem', maxWidth: '400px', margin: '0 auto 16px' }}>
                  Explore specific knee, hip, and shoulder conditions and surgical treatments in the sections below.
                </p>
                <button
                  type="button"
                  className="button button-outline"
                  onClick={() => scrollToSection(activeJointTab === 'more' ? 'knee' : activeJointTab)}
                >
                  View Treatment Options ↓
                </button>
              </div>
            }
          >
            <Interactive3DViewer
              initialJoint={activeJointTab}
              onSelectTreatment={(joint) => scrollToSection(joint)}
            />
          </ErrorBoundary>
        </div>
      </section>

      {/* Directory Nav & Sections */}
      <section className="treatment-directory" id="treatment-nav">
        <div className="shell">
          <div className="treatment-tabs-bar">
            <div className="treatment-tabs-label">
              <span className="tabs-live-dot"></span>
              <span>Explore By Joint</span>
            </div>
            <div className="treatment-tabs-list">
              <button
                type="button"
                className={`treatment-tab-pill ${activeJointTab === 'knee' ? 'active' : ''}`}
                onClick={() => scrollToSection('knee')}
              >
                Knee Care
              </button>
              <button
                type="button"
                className={`treatment-tab-pill ${activeJointTab === 'hip' ? 'active' : ''}`}
                onClick={() => scrollToSection('hip')}
              >
                Hip Care
              </button>
              <button
                type="button"
                className={`treatment-tab-pill ${activeJointTab === 'shoulder' ? 'active' : ''}`}
                onClick={() => scrollToSection('shoulder')}
              >
                Shoulder Care
              </button>
              <button
                type="button"
                className={`treatment-tab-pill ${activeJointTab === 'more' ? 'active' : ''}`}
                onClick={() => scrollToSection('more')}
              >
                More Care
              </button>
            </div>
          </div>
        </div>
      </section>

        {/* Knee Section */}
        <section className="treatment-row" id="knee">
          <div className="shell treatment-row-grid">
            <div className="treatment-joint-visual">
              <img src="/knee-3d.webp" alt="3D Knee joint medical visualization" />
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
              <img src="/hip-3d.webp" alt="3D Hip joint medical visualization" />
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
              <img src="/shoulder-3d.webp" alt="3D Shoulder joint medical visualization" />
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

      {/* Recovery Guides Feature */}
      <section className="section treatment-guides-feature">
        <div className="shell treatment-guides-grid">
          <div className="treatment-guides-copy">
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
            <img
              className="treatment-recovery-composite"
              src="/recovery-plan-3d.webp"
              alt="Comprehensive 3D Orthopedic Joint Recovery Anatomy"
            />
          </div>
        </div>
      </section>

      {/* More Specialist Care */}
      <section className="section more-care" id="more">
        <div className="shell">
          <div className="section-heading more-care-heading">
            <div className="eyebrow">
              <span></span> More specialist care
            </div>
            <h2>
              One diagnosis. <em>More than one option.</em>
            </h2>
            <p>
              The first goal is to understand the source of symptoms. Treatment may include medicines, guided rehabilitation, injections or surgery when the expected benefit makes it appropriate.
            </p>
          </div>
          <div className="more-care-grid">
            <article>
              <h3>Sports injuries</h3>
              <p>Assessment and structured return-to-activity planning for ligament, cartilage and overuse injuries.</p>
            </article>
            <article>
              <h3>Non-surgical care</h3>
              <p>Stage-appropriate options to manage symptoms and improve function before considering surgery.</p>
            </article>
            <article>
              <h3>Rehabilitation guidance</h3>
              <p>The right physiotherapy at the right time, with progress milestones that are easy to understand.</p>
            </article>
          </div>
        </div>
      </section>

      {/* Treatments FAQ Section */}
      <section className="section treatment-faq-section" id="treatment-faqs">
        <div className="shell">
          <div className="treatment-faq-header">
            <div className="eyebrow">
              <span></span> Treatment Guidance &amp; Insights
            </div>
            <h2>
              Frequently Asked <em>Questions</em>
            </h2>
            <p>
              Clear answers to common questions about orthopaedic diagnosis, non-surgical options, robotic surgery, and recovery.
            </p>
          </div>

          <div className="treatment-faq-container">
            <div className="treatment-faq-list">
              {TREATMENT_FAQS.map((faq, index) => {
                const isOpen = openFaqId === faq.id;
                const panelId = `treatment-faq-panel-${faq.id}`;
                const btnId = `treatment-faq-btn-${faq.id}`;
                return (
                  <div
                    key={faq.id}
                    className={`treatment-faq-card ${isOpen ? 'is-open' : ''}`}
                  >
                    <button
                      type="button"
                      id={btnId}
                      className="treatment-faq-trigger"
                      aria-expanded={isOpen}
                      aria-controls={panelId}
                      onClick={() => toggleFaq(faq.id)}
                    >
                      <div className="treatment-faq-num">
                        {String(index + 1).padStart(2, '0')}
                      </div>
                      <span className="treatment-faq-q">{faq.question}</span>
                      <div className="treatment-faq-icon-wrap" aria-hidden="true">
                        <span className="faq-toggle-icon">
                          {isOpen ? '−' : '+'}
                        </span>
                      </div>
                    </button>
                    {isOpen && (
                      <div
                        id={panelId}
                        role="region"
                        aria-labelledby={btnId}
                        className="treatment-faq-body"
                      >
                        <p>{faq.answer}</p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            <div className="treatment-faq-footer-card">
              <div className="treatment-faq-footer-info">
                <h4>Have more questions about your condition?</h4>
                <p>Explore our complete knowledge library or discuss your symptoms directly with our specialist team.</p>
              </div>
              <div className="treatment-faq-footer-actions">
                <Link to="/faq" className="button button-outline">
                  Full FAQ Library
                </Link>
                <Link to="/appointment" className="button button-primary">
                  Book Consultation
                </Link>
              </div>
            </div>
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
