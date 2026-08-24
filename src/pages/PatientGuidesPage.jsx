import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const ERAS_TIMELINE_STEPS = [
  {
    key: 'before',
    phase: 'Before Surgery',
    stageTag: 'PHASE 01',
    title: 'Optimise & Prepare',
    desc: 'Review medicines, health conditions, exercise prehab, nutrition and arrange your home support team before admission.',
    icon: (
      <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="step-svg">
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
        <line x1="16" y1="2" x2="16" y2="6" />
        <line x1="8" y1="2" x2="8" y2="6" />
        <line x1="3" y1="10" x2="21" y2="10" />
        <path d="m9 16 2 2 4-4" />
      </svg>
    )
  },
  {
    key: 'hospital',
    phase: 'Hospital Stay',
    stageTag: 'PHASE 02',
    title: 'Move With Support',
    desc: 'Follow the clinical team’s multimodal pain control protocol, guided safe mobility within 24 hours, and discharge readiness checks.',
    icon: (
      <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="step-svg">
        <path d="M2 4v16" />
        <path d="M2 8h18a2 2 0 0 1 2 2v10" />
        <path d="M2 17h20" />
        <path d="M6 8v9" />
        <path d="M12 4v4" />
        <path d="M10 6h4" />
      </svg>
    )
  },
  {
    key: 'home',
    phase: 'Home Recovery',
    stageTag: 'PHASE 03',
    title: 'Progress Steadily',
    desc: 'Continue prescribed physiotherapy walking routines, daily exercise milestones, wound protection, and follow-up reviews.',
    icon: (
      <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="step-svg">
        <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    )
  }
];

const GUIDE_FAQS = [
  {
    id: 'guide-faq-1',
    question: 'When can I begin walking independently after joint replacement surgery?',
    answer: 'Most patients start guided walking on the day of surgery or within 24 hours under our ERAS protocol. You will typically use a walker or crutches for the first 1 to 3 weeks until your quadriceps strength and balance are fully restored, progressing to unassisted walking around weeks 3 to 6.'
  },
  {
    id: 'guide-faq-2',
    question: 'How can I effectively manage postoperative pain and swelling at home?',
    answer: 'Follow your scheduled multimodal pain medication plan consistently rather than waiting for severe pain. Regularly apply protected ice packs for 15-20 minutes, elevate the operated leg above heart level, perform gentle ankle pumps every hour, and avoid prolonged sitting or standing without leg support.'
  },
  {
    id: 'guide-faq-3',
    question: 'When is it safe to take a shower and how do I protect my surgical dressing?',
    answer: 'Our modern waterproof dressings allow you to shower immediately or within 48 hours without soaking the incision. Avoid submerging the wound in bathtubs or swimming pools until your surgeon confirms complete skin healing at your 2 to 3 week follow-up appointment.'
  },
  {
    id: 'guide-faq-4',
    question: 'What exercises should I prioritize during the first two weeks of recovery?',
    answer: 'Focus on gentle thigh tightening (quad sets), ankle pumps, heel props for full extension (straightening the knee), and passive heel slides within your comfortable range. Avoid aggressive forced bending or heavy resistance until cleared by your physiotherapist.'
  },
  {
    id: 'guide-faq-5',
    question: 'When will I be able to resume driving and return to work?',
    answer: 'For desk-based work, many patients resume light duties remotely within 2 to 3 weeks, and in-person by 4 to 6 weeks. Driving is generally safe once you are completely off prescription pain medications, have fast emergency braking reaction time, and clear your 4-6 week clinical review.'
  },
  {
    id: 'guide-faq-6',
    question: 'What warning signs require calling the clinic immediately?',
    answer: 'Contact our clinical team immediately if you develop a fever over 101°F (38.3°C), sudden calf pain or severe calf swelling (potential DVT), excessive wound redness, spreading warmth, continuous wound drainage, or sudden shortness of breath.'
  }
];

const HERO_JOINTS = [
  {
    id: 'knee',
    name: 'Knee Joint Care',
    img: '/knee-3d.png',
    alt: '3D Knee Joint Model'
  },
  {
    id: 'shoulder',
    name: 'Shoulder Joint Care',
    img: '/shoulder-3d.png',
    alt: '3D Shoulder Joint Model'
  },
  {
    id: 'hip',
    name: 'Hip Joint Care',
    img: '/hip-3d.png',
    alt: '3D Hip Joint Model'
  }
];

export default function PatientGuidesPage() {
  const [activeErasStep, setActiveErasStep] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [openFaqId, setOpenFaqId] = useState('guide-faq-1');
  const [heroJointIndex, setHeroJointIndex] = useState(0);

  const toggleFaq = (id) => {
    setOpenFaqId((prev) => (prev === id ? null : id));
  };

  useEffect(() => {
    const heroTimer = setInterval(() => {
      setHeroJointIndex((prev) => (prev + 1) % HERO_JOINTS.length);
    }, 2500);
    return () => clearInterval(heroTimer);
  }, []);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setActiveErasStep((prev) => (prev + 1) % ERAS_TIMELINE_STEPS.length);
    }, 3200);
    return () => clearInterval(interval);
  }, [isPaused]);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div>
      {/* Guides Hero */}
      <section className="guides-hero">
        <div className="guides-hero-bg-container" aria-hidden="true">
          <img
            src="/guides-hero-banner.png"
            alt=""
            className="guides-hero-bg-img"
          />
          <div className="guides-hero-scrim"></div>
        </div>
        <div className="shell guides-hero-inner">
          <div className="guides-hero-copy">
            <div className="eyebrow">
              <span></span> Patient Education &amp; Recovery
            </div>
            <h1>
              Recovery, explained
              <br />
              <em>clearly.</em>
            </h1>
            <p>
              Practical guidance for the questions that often come before and after surgery—what to prepare, what to expect and when to ask for help.
            </p>
            <div className="guides-hero-actions">
              <button
                type="button"
                className="button button-primary"
                onClick={() => scrollToSection('eras')}
                style={{ cursor: 'pointer' }}
              >
                Read Recovery Steps{' '}
                <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className="icon">
                  <path d="M5 12h14M14 7l5 5-5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>
          </div>

          {/* Pedestal 3D Joint Showcase Slider */}
          <div className="guides-hero-pedestal-showcase" aria-hidden="true">
            <div className="guides-pedestal-stage">
              {HERO_JOINTS.map((joint, idx) => {
                const isActive = heroJointIndex === idx;
                return (
                  <div
                    key={joint.id}
                    className={`guides-pedestal-slide ${isActive ? 'is-active' : ''}`}
                  >
                    <img
                      src={joint.img}
                      alt={joint.alt}
                      className={`guides-pedestal-3d-img guides-pedestal-img-${joint.id}`}
                    />
                    <div className="guides-pedestal-tag">
                      <span>{joint.name}</span>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="guides-pedestal-dots">
              {HERO_JOINTS.map((joint, idx) => (
                <button
                  key={joint.id}
                  type="button"
                  aria-label={`Switch to ${joint.name}`}
                  className={`guides-pedestal-dot ${heroJointIndex === idx ? 'active' : ''}`}
                  onClick={() => setHeroJointIndex(idx)}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ERAS Section */}
      <section className="section eras-section" id="eras">
        <div className="shell">
          <div className="eras-heading">
            <h2>
              Prepare well. <em>Recover with direction.</em>
            </h2>
            <p className="eras-lead">
              Enhanced Recovery After Surgery brings preparation, pain planning, early movement, nutrition and home recovery into one coordinated pathway.
            </p>
          </div>

          <div className="eras-grid">
            <div className="eras-3d-stage" aria-hidden="true">
              <span></span>
              <img
                src="/eras-journey-3d.png"
                alt="Enhanced Recovery After Surgery Pathway 3D Joint Models"
                className="eras-3d-composite"
              />
            </div>
            <div className="eras-copy">
              <div className="eras-readiness">
                <article>
                  <strong>Medical optimisation</strong>
                  <p>Review diabetes, blood pressure, anaemia, smoking, alcohol and current medicines with your treating team.</p>
                </article>
                <article>
                  <strong>Exercise and prehab</strong>
                  <p>Practise the strengthening, breathing and walking-aid skills recommended before surgery.</p>
                </article>
                <article>
                  <strong>Nutrition and hydration</strong>
                  <p>Choose balanced protein-rich meals and maintain suitable hydration unless your doctor has restricted fluids.</p>
                </article>
                <article>
                  <strong>Education and planning</strong>
                  <p>Understand the procedure, pain plan, home support, transport and follow-up arrangements.</p>
                </article>
              </div>
              <div
                className="eras-animated-timeline"
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
              >
                <div className="eras-timeline-header">
                  <span className="eras-timeline-badge">Interactive Recovery Pathway</span>
                </div>

                <div className="eras-steps-track">
                  {ERAS_TIMELINE_STEPS.map((step, idx) => {
                    const isActive = activeErasStep === idx;
                    return (
                      <div
                        key={step.key}
                        className={`eras-step-node ${isActive ? 'is-active' : ''}`}
                        onClick={() => setActiveErasStep(idx)}
                      >
                        <div className="eras-step-badge">
                          <span className="step-icon-wrap">{step.icon}</span>
                          <span className="step-tag">{step.phase}</span>
                        </div>
                        <div className="eras-step-content">
                          <strong className="eras-step-title">{step.title}</strong>
                          <p className="eras-step-desc">{step.desc}</p>
                        </div>
                        <div className="step-active-indicator" />
                      </div>
                    );
                  })}
                </div>
              </div>
              <Link className="button button-outline" to="/appointment">
                Discuss your recovery plan{' '}
                <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className="icon">
                  <path d="M5 12h14M14 7l5 5-5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Quiet Knee Section */}
      <section className="section quiet-section" id="quiet-knee">
        <div className="shell">
          <div className="quiet-heading">
            <div className="eyebrow">
              <span></span> After Total Knee Replacement
            </div>
            <h2>
              The Quiet Knee <em>Protocol.</em>
            </h2>
            <p>
              Six clear priorities for the first two weeks. Read them in order and follow the personal instructions given by your surgeon and physiotherapist.
            </p>
          </div>
          <div className="quiet-protocol-layout">
            <div className="quiet-3d-stage" aria-hidden="true">
              <span></span>
              <img src="/knee-3d.png" alt="3D Knee joint visualization" />
            </div>
            <div className="quiet-step-grid">
              <article>
                <span>01</span>
                <h3>Control swelling</h3>
                <p>
                  Use a protected ice pack for the duration advised by your team. Elevate the leg so the ankle is supported above heart level, keep the dressing dry and check the skin regularly.
                </p>
              </article>
              <article>
                <span>02</span>
                <h3>Protect straightening</h3>
                <p>
                  Early extension matters. Use the heel-prop, ankle-pump and thigh-tightening exercises prescribed by your physiotherapist; keep support away from directly behind the knee.
                </p>
              </article>
              <article>
                <span>03</span>
                <h3>Do not force bending</h3>
                <p>
                  Only perform the range-of-motion work you have been shown. Aggressive pushing, pulling or bending can increase pain and swelling in the early phase.
                </p>
              </article>
              <article>
                <span>04</span>
                <h3>Keep walking short</h3>
                <p>
                  Use your walker or other aid correctly. Keep early walks purposeful and brief, and follow the individual step target given by your clinical team.
                </p>
              </article>
              <article>
                <span>05</span>
                <h3>Limit time on your feet</h3>
                <p>
                  Alternate short activity with seated rest and elevation. Sit down before pain or swelling builds instead of waiting until the knee feels overworked.
                </p>
              </article>
              <article>
                <span>06</span>
                <h3>Know the stop signs</h3>
                <p>
                  Do not push through rising pain, marked swelling or a change that concerns you. Contact the clinical team for guidance instead of trying to progress on your own.
                </p>
              </article>
            </div>
          </div>
        </div>
      </section>

      {/* Patient Recovery FAQs Section */}
      <section className="section treatment-faq-section" id="recovery-faqs">
        <div className="shell">
          <div className="treatment-faq-header">
            <div className="eyebrow">
              <span></span> Recovery &amp; Rehabilitation Guidance
            </div>
            <h2>
              Frequently Asked <em>Questions</em>
            </h2>
            <p>
              Clear, practical answers about preparing for surgery, early mobilization, home care, and milestone timelines.
            </p>
          </div>

          <div className="treatment-faq-container">
            <div className="treatment-faq-list">
              {GUIDE_FAQS.map((faq, index) => {
                const isOpen = openFaqId === faq.id;
                const panelId = `guide-faq-panel-${faq.id}`;
                const btnId = `guide-faq-btn-${faq.id}`;
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
                <h4>Need tailored advice for your recovery?</h4>
                <p>Explore our comprehensive FAQ library or reach out directly to your surgical care team.</p>
              </div>
              <div className="treatment-faq-footer-actions">
                <Link to="/faq" className="button button-outline">
                  Full FAQ Library
                </Link>
                <Link to="/contact" className="button button-primary">
                  Ask Care Team
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Guide Disclaimer */}
      <section className="guide-disclaimer">
        <div className="shell">
          <span aria-hidden="true">i</span>
          <p>
            <strong>Your personal plan comes first.</strong> These guides provide general education. Recovery varies by procedure and patient; follow the instructions given by your surgeon, anaesthesia team and physiotherapist.
          </p>
          <Link to="/contact">
            Ask a question{' '}
            <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className="icon">
              <path d="M5 12h14M14 7l5 5-5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>
      </section>
    </div>
  );
}
