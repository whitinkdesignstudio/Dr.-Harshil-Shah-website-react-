import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Interactive3DViewer from '../components/Interactive3DViewer';
import ErrorBoundary from '../components/ErrorBoundary';

const TREATMENT_FAQS = [
  {
    id: 'treatment-faq-1',
    question: 'What orthopaedic treatments does Dr. Harshil Shah offer?',
    answer: 'Dr. Harshil Shah provides comprehensive surgical and non-surgical treatments for knee, hip, and shoulder conditions. His expertise includes robotic-assisted total and partial knee replacements, muscle-sparing total hip replacements, keyhole arthroscopic surgery (ACL/PCL reconstruction, meniscal repair, rotator cuff repair, labral stabilization), revision joint reconstructions, complex trauma management, and structured non-surgical joint preservation protocols.'
  },
  {
    id: 'treatment-faq-2',
    question: 'Which knee conditions can be treated without surgery?',
    answer: 'Many knee conditions—including early to moderate osteoarthritis, mild degenerative meniscal fraying, minor ligament sprains (Grade 1/2 MCL or LCL), patellofemoral pain syndrome, tendonitis, and bursitis—frequently improve with non-surgical care. Conservative treatment plans combine structured physiotherapy, muscle strengthening, weight optimisation, activity modification, anti-inflammatory medications, and targeted joint injections.'
  },
  {
    id: 'treatment-faq-3',
    question: 'What treatment options are available for hip pain and arthritis?',
    answer: 'For early-stage hip pain, bursitis, muscle strain, or early arthritis, initial treatment focuses on physiotherapy, gait training, anti-inflammatory medication, and lifestyle adjustments. For advanced arthritis or avascular necrosis (AVN) with significant joint collapse and persistent pain, total hip replacement (THR)—utilising modern muscle-sparing techniques and durable ceramic implants—provides excellent long-term pain relief and restores natural mobility.'
  },
  {
    id: 'treatment-faq-4',
    question: 'How are shoulder pain, rotator cuff problems and instability treated?',
    answer: 'Treatment depends on the underlying diagnosis. Frozen shoulder, impingement syndrome, and mild tendinopathy often respond well to focused physiotherapy, posture correction, and targeted anti-inflammatory injections. For structural issues like significant rotator cuff tears, recurrent dislocations, labral (Bankart) tears, or advanced shoulder arthritis, minimally invasive arthroscopic repair or shoulder replacement (anatomic or reverse) is recommended to restore stability and overhead function.'
  },
  {
    id: 'treatment-faq-5',
    question: 'When is arthroscopic surgery recommended?',
    answer: 'Arthroscopy (keyhole surgery) is recommended when internal joint structures—such as torn cruciate ligaments (ACL/PCL), damaged meniscal cartilage, loose bodies, or torn shoulder rotator cuffs and labrums—require repair or reconstruction that cannot heal through non-surgical means alone. It uses miniature instruments and high-definition cameras through tiny incisions, minimising tissue trauma and accelerating recovery.'
  },
  {
    id: 'treatment-faq-6',
    question: 'When is joint replacement considered for knee, hip or shoulder problems?',
    answer: 'Joint replacement is considered when advanced joint damage (severe osteoarthritis, avascular necrosis, or joint destruction) causes persistent pain, stiffness, and loss of daily function that no longer responds adequately to conservative treatments like physiotherapy and medications. The decision is made collaboratively based on pain severity, functional impairment, and radiographic findings—not age alone.'
  },
  {
    id: 'treatment-faq-7',
    question: 'How are sports injuries such as ACL, meniscus and ligament injuries treated?',
    answer: 'Treatment is tailored to the specific injury grade, patient activity goals, and joint stability. Minor sprains and stable partial meniscal tears may be managed with rehabilitation and bracing. Complete ACL tears, unstable multi-ligament injuries, and repairable meniscus tears in active individuals are typically treated with advanced keyhole arthroscopic reconstruction and meniscal repair to restore joint stability and protect long-term cartilage health.'
  },
  {
    id: 'treatment-faq-8',
    question: 'How does Dr. Harshil Shah decide which treatment is right for each patient?',
    answer: 'Dr. Shah uses a comprehensive, individualised assessment that combines a thorough clinical examination, detailed review of X-rays and MRI scans, and an in-depth conversation about your daily activities, occupational demands, and personal goals. Non-surgical options are always prioritised first when viable, and surgical options are recommended only when they offer a predictable, meaningful improvement in your mobility and quality of life.'
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
              <div className="treatment-action-group" style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', alignItems: 'center' }}>
                <Link className="button button-outline" to="/appointment">
                  Discuss your symptoms{' '}
                  <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className="icon">
                    <path d="M5 12h14M14 7l5 5-5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>
                <a
                  href="/galleri/brochure/01_Knee_Replacement_Updated_Brochure.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="treatment-brochure-quicklink"
                  title="Download Knee Replacement Patient Guide (PDF)"
                >
                  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                    <polyline points="14 2 14 8 20 8" />
                  </svg>
                  <span>Knee Guide (PDF)</span>
                </a>
              </div>
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
              <div className="treatment-action-group" style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', alignItems: 'center' }}>
                <Link className="button button-outline" to="/appointment">
                  Discuss your symptoms{' '}
                  <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className="icon">
                    <path d="M5 12h14M14 7l5 5-5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>
                <a
                  href="/galleri/brochure/02_Hip_Replacement_Updated_Brochure.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="treatment-brochure-quicklink"
                  title="Download Hip Replacement Patient Guide (PDF)"
                >
                  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
                    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
                  </svg>
                  <span>Hip Guide (PDF)</span>
                </a>
              </div>
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
              <div className="treatment-action-group" style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', alignItems: 'center' }}>
                <Link className="button button-outline" to="/appointment">
                  Discuss your symptoms{' '}
                  <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className="icon">
                    <path d="M5 12h14M14 7l5 5-5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>
                <a
                  href="/galleri/brochure/04_Shoulder_Arthroscopy_Updated_Brochure.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="treatment-brochure-quicklink"
                  title="Download Shoulder Arthroscopy Patient Guide (PDF)"
                >
                  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8z" />
                  </svg>
                  <span>Shoulder Guide (PDF)</span>
                </a>
              </div>
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
