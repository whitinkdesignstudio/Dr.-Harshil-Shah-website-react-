import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const ERAS_TIMELINE_STEPS = [
  {
    key: 'before',
    targetId: 'before-surgery',
    phase: 'Before Surgery',
    stageTag: 'PHASE 01',
    title: 'Optimise & Prepare',
    desc: 'Medical clearances, prehab exercises, home safety, and fasting.',
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
    targetId: 'hospital-stay',
    phase: 'Hospital Stay',
    stageTag: 'PHASE 02',
    title: 'Move With Support',
    desc: 'Multimodal pain relief, 24h assisted walking, and safe discharge.',
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
    targetId: 'home-recovery',
    phase: 'Home Recovery',
    stageTag: 'PHASE 03',
    title: 'Progress Steadily',
    desc: 'Quiet Knee protocol, milestone targets, swelling control, and activity.',
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
    question: 'What information is included in the patient guides?',
    answer: 'Our patient guides offer structured, evidence-based guidance across all stages of orthopaedic care. This includes pre-operative medical clearances and prehab exercises, hospital stay expectations and same-day mobilization protocols (ERAS), step-by-step home recovery guidelines (including the Quiet Knee protocol), wound care instructions, milestone roadmaps, and clear red-flag alert signs.'
  },
  {
    id: 'guide-faq-2',
    question: 'How should I prepare before an orthopaedic consultation or surgery?',
    answer: 'For a consultation, write down your symptom history, previous treatments, and specific questions. For surgery, complete recommended pre-operative health assessments (blood tests, ECG, chest X-ray, physician/anaesthesia clearances), practice guided prehab exercises to strengthen surrounding muscles, optimise blood sugar (HbA1c < 7.5%) and blood pressure, and arrange family caregiver support for discharge.'
  },
  {
    id: 'guide-faq-3',
    question: 'What should I bring with me to my hospital or clinic visit?',
    answer: 'Bring all previous diagnostic imaging (X-rays, MRI scans, CT scans) on films or discs, recent blood reports, a complete list of current prescription medicines and supplements, government-issued photo ID, insurance/TPA documentation, and comfortable, loose-fitting clothing with non-skid flat walking footwear.'
  },
  {
    id: 'guide-faq-4',
    question: 'How can I prepare my home for recovery after joint surgery?',
    answer: 'Set up a safe, single-level living area before surgery. Remove loose throw rugs, electrical cords, and tripping hazards. Ensure pathways to the bathroom and kitchen are clear and wide enough for a walker. Place a firm chair with sturdy armrests in your sitting area, install non-slip mats and grab bars in the bathroom, and keep ice packs, medications, and phone chargers within easy reach.'
  },
  {
    id: 'guide-faq-5',
    question: 'What should I know about medicines, fasting and pre-operative instructions?',
    answer: 'Follow fasting rules strictly: no solid food for 6 to 8 hours before surgery, with clear liquids permitted only up to the time specified by your anaesthetist. Review all current medications with Dr. Shah—certain blood thinners (like aspirin, clopidogrel, or apixaban) must be paused under clinical guidance several days before surgery, while essential morning medications for blood pressure or thyroid may be taken with a tiny sip of water.'
  },
  {
    id: 'guide-faq-6',
    question: 'What can I expect during the early recovery period after surgery?',
    answer: 'Under modern Enhanced Recovery After Surgery (ERAS) protocols, you will receive targeted multimodal pain relief (nerve blocks and scheduled oral medications) to keep you comfortable without heavy sedation. Guided walking with walker support begins on the same day or within 24 hours. Temporary swelling, bruising, and tightness are normal and managed through regular ice application, leg elevation, and hourly ankle pumps.'
  },
  {
    id: 'guide-faq-7',
    question: 'When can I return to walking, driving, work and normal daily activities?',
    answer: 'Supported walking with a walker begins immediately; most patients transition to a cane within 2 to 3 weeks and walk independently by 4 to 6 weeks. Light desk work can resume in 2 to 3 weeks, while driving is generally cleared at 4 to 6 weeks once emergency reflex braking is safe and you are off narcotic medications. Low-impact activities (swimming, stationary cycling, walking) resume by 6 to 12 weeks.'
  },
  {
    id: 'guide-faq-8',
    question: 'When should I contact the clinic if I have concerns during recovery?',
    answer: 'Contact Dr. Harshil Shah’s team promptly if you experience red-flag symptoms: fever above 101°F (38.3°C), sudden or worsening calf pain and swelling (signs of possible DVT), spreading redness or persistent discharge from the surgical wound, sudden severe pain unrelieved by prescribed medication, or unexpected chest discomfort or shortness of breath.'
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

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const headerOffset = 85;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const handleStepClick = (idx, targetId) => {
    setActiveErasStep(idx);
    setIsPaused(true);
    scrollToSection(targetId);
  };

  return (
    <div className="patient-guides-page-wrapper">
      {/* Guides Hero */}
      <section className="guides-hero">
        <div className="guides-hero-bg-container" aria-hidden="true">
          <img
            src="/guides-hero-banner.webp"
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
              Evidence-based orthopaedic guidance for before and after joint replacement surgery.
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

      {/* ERAS Overview Section */}
      <section className="section eras-section" id="eras">
        <div className="shell">
          <div className="eras-heading">
            <div className="eyebrow">
              <span></span> Enhanced Recovery After Surgery (ERAS)
            </div>
            <h2>
              Prepare well. <em>Recover with direction.</em>
            </h2>
            <p className="eras-lead">
              Enhanced Recovery After Surgery integrates prehab, multimodal pain planning, early walking, and structured home rehabilitation.
            </p>
          </div>

          <div className="eras-grid">
            <div className="eras-3d-stage" aria-hidden="true">
              <span></span>
              <img
                src="/eras-journey-3d.webp"
                alt="Enhanced Recovery After Surgery Pathway 3D Joint Models"
                className="eras-3d-composite"
              />
            </div>
            <div className="eras-copy">
              <div className="eras-readiness">
                <article>
                  <strong>Medical Optimisation</strong>
                  <p>Diabetes, blood pressure, and medication review.</p>
                </article>
                <article>
                  <strong>Exercise &amp; Prehab</strong>
                  <p>Strengthening exercises and walking-aid practice.</p>
                </article>
                <article>
                  <strong>Nutrition Plan</strong>
                  <p>High-protein meals and proper hydration.</p>
                </article>
                <article>
                  <strong>Home Planning</strong>
                  <p>Safe home layout and caregiver arrangements.</p>
                </article>
              </div>

              {/* Interactive Recovery Pathway Buttons */}
              <div className="eras-animated-timeline">
                <div className="eras-steps-track" role="tablist" aria-label="Recovery Pathway Phases">
                  {ERAS_TIMELINE_STEPS.map((step, idx) => {
                    const isActive = activeErasStep === idx;
                    return (
                      <button
                        key={step.key}
                        type="button"
                        role="tab"
                        aria-selected={isActive}
                        className={`eras-step-node ${isActive ? 'is-active' : ''}`}
                        onClick={() => handleStepClick(idx, step.targetId)}
                      >
                        <div className="eras-step-badge">
                          <span className="step-icon-wrap">{step.icon}</span>
                          <div className="step-tag-group">
                            <span className="step-phase-kicker">{step.stageTag}</span>
                            <span className="step-tag">{step.phase}</span>
                          </div>
                        </div>
                        <div className="eras-step-content">
                          <strong className="eras-step-title">{step.title}</strong>
                          <p className="eras-step-desc">{step.desc}</p>
                        </div>
                        <div className="step-action-cta">
                          <span className="step-cta-label">View Guide</span>
                          <span className="step-arrow-icon">
                            <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                              <path d="M7 13l5 5 5-5M12 6v12" />
                            </svg>
                          </span>
                        </div>
                        <div className="step-active-indicator" />
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="eras-action-row">
                <Link className="button button-outline" to="/appointment">
                  Discuss your recovery plan{' '}
                  <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className="icon">
                    <path d="M5 12h14M14 7l5 5-5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* PHASE 01: BEFORE SURGERY CONTENT SECTION */}
      {/* ========================================================================= */}
      <section className="section phase-detail-section before-surgery-section" id="before-surgery">
        <div className="shell">
          <div className="phase-detail-header">
            <h2>
              Before Surgery: <em>Optimise &amp; Prepare</em>
            </h2>
            <p className="phase-lead">
              Essential preparation to ensure surgical safety, muscle strength, and a smooth return home.
            </p>
          </div>

          <div className="phase-cards-grid">
            <article className="phase-card">
              <div className="phase-card-header">
                <div className="phase-card-icon">
                  <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                  </svg>
                </div>
                <span className="phase-card-step">01</span>
              </div>
              <h3>Medical Clearances</h3>
              <p>Optimize vital health markers.</p>
              <ul className="phase-card-list">
                <li><strong>HbA1c &lt; 7.5%:</strong> Ensures fast wound healing.</li>
                <li><strong>Blood Thinners:</strong> Pause strictly per doctor advice.</li>
                <li><strong>Infection Screen:</strong> Dental and urine testing.</li>
                <li><strong>Anaesthetic Check:</strong> ECG and chest X-ray.</li>
              </ul>
            </article>

            <article className="phase-card">
              <div className="phase-card-header">
                <div className="phase-card-icon">
                  <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <path d="M12 6v6l4 2" />
                  </svg>
                </div>
                <span className="phase-card-step">02</span>
              </div>
              <h3>Prehab Exercises</h3>
              <p>Strengthen muscles before surgery.</p>
              <ul className="phase-card-list">
                <li><strong>Quad Sets:</strong> 10s holds for knee extension power.</li>
                <li><strong>Ankle Pumps:</strong> Boost lower leg blood flow.</li>
                <li><strong>Arm Strength:</strong> Prepare for walker/crutch support.</li>
                <li><strong>Deep Breathing:</strong> Diaphragmatic lung expansion.</li>
              </ul>
            </article>

            <article className="phase-card">
              <div className="phase-card-header">
                <div className="phase-card-icon">
                  <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                    <polyline points="9 22 9 12 15 12 15 22" />
                  </svg>
                </div>
                <span className="phase-card-step">03</span>
              </div>
              <h3>Home Safety Setup</h3>
              <p>Prepare an obstacle-free living space.</p>
              <ul className="phase-card-list">
                <li><strong>Clear Routes:</strong> Remove rugs, cables, and clutter.</li>
                <li><strong>Firm Chair:</strong> High seat with armrests.</li>
                <li><strong>Bathroom Safety:</strong> Non-slip mats and grab bars.</li>
                <li><strong>Recovery Hub:</strong> Ice packs and medicines within reach.</li>
              </ul>
            </article>

            <article className="phase-card">
              <div className="phase-card-header">
                <div className="phase-card-icon">
                  <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
                    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                  </svg>
                </div>
                <span className="phase-card-step">04</span>
              </div>
              <h3>Day of Admission</h3>
              <p>Fasting and hospital bag preparation.</p>
              <ul className="phase-card-list">
                <li><strong>Fasting:</strong> Nil by mouth 6–8 hours prior.</li>
                <li><strong>Antiseptic Wash:</strong> Shower with antibacterial soap.</li>
                <li><strong>Clothing:</strong> Loose clothing &amp; non-skid flat shoes.</li>
                <li><strong>Paperwork:</strong> ID, previous X-rays/MRI, and reports.</li>
              </ul>
            </article>
          </div>

          <div className="phase-tip-banner">
            <div className="phase-tip-icon" aria-hidden="true">💡</div>
            <div className="phase-tip-text">
              <strong>Clinical Tip:</strong> Having a family caregiver attend your pre-op consultation ensures smooth coordination of medicines, walking aids, and discharge arrangements.
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* PHASE 02: HOSPITAL STAY CONTENT SECTION */}
      {/* ========================================================================= */}
      <section className="section phase-detail-section hospital-stay-section" id="hospital-stay">
        <div className="shell">
          <div className="phase-detail-header">
            <h2>
              Hospital Stay: <em>Move With Support</em>
            </h2>
            <p className="phase-lead">
              Multimodal pain control, safe mobilization within 24 hours, and structured discharge criteria.
            </p>
          </div>

          <div className="phase-cards-grid">
            <article className="phase-card">
              <div className="phase-card-header">
                <div className="phase-card-icon">
                  <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  </svg>
                </div>
                <span className="phase-card-step">01</span>
              </div>
              <h3>Pain Management</h3>
              <p>Targeted pain relief without sedation.</p>
              <ul className="phase-card-list">
                <li><strong>Local Block:</strong> Targeted periarticular infiltration.</li>
                <li><strong>Scheduled Oral Drugs:</strong> Prevents pain before physio.</li>
                <li><strong>Low Opioids:</strong> Prevents nausea and brain fog.</li>
                <li><strong>Proactive Dosing:</strong> Timed before physical exercise.</li>
              </ul>
            </article>

            <article className="phase-card">
              <div className="phase-card-header">
                <div className="phase-card-icon">
                  <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M13 4v16M7 8l6-4 6 4M7 16l6 4 6-4" />
                  </svg>
                </div>
                <span className="phase-card-step">02</span>
              </div>
              <h3>24h Mobilisation</h3>
              <p>Early guided walking restores joint motion.</p>
              <ul className="phase-card-list">
                <li><strong>Day 0 First Stand:</strong> Assisted bed-to-chair transfer.</li>
                <li><strong>Day 1 Corridor Walk:</strong> 15–30m walking with walker.</li>
                <li><strong>Knee Extension:</strong> Immediate 0° straight-leg check.</li>
                <li><strong>Balance Training:</strong> Safe weight-bearing mechanics.</li>
              </ul>
            </article>

            <article className="phase-card">
              <div className="phase-card-header">
                <div className="phase-card-icon">
                  <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="9" />
                    <path d="M12 3v18" />
                    <path d="M3 12h18" />
                  </svg>
                </div>
                <span className="phase-card-step">03</span>
              </div>
              <h3>Anti-Clot Protection</h3>
              <p>Circulation and DVT prevention.</p>
              <ul className="phase-card-list">
                <li><strong>TED Stockings:</strong> Compression prevents fluid pooling.</li>
                <li><strong>Calf Pumps:</strong> Automated pneumatic pressure cuffs.</li>
                <li><strong>Hourly Pumps:</strong> 20–30 ankle pumps every hour.</li>
                <li><strong>Anticoagulants:</strong> Preventive blood thinners.</li>
              </ul>
            </article>

            <article className="phase-card">
              <div className="phase-card-header">
                <div className="phase-card-icon">
                  <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <span className="phase-card-step">04</span>
              </div>
              <h3>Discharge Readiness</h3>
              <p>Safe functional home independence.</p>
              <ul className="phase-card-list">
                <li><strong>Safe Transfers:</strong> Independent bed, chair, and toilet.</li>
                <li><strong>Stair Training:</strong> Safe step climbing technique.</li>
                <li><strong>Stable Vitals:</strong> Normal diet &amp; oral pain control.</li>
                <li><strong>Written Summary:</strong> Clear medication schedule.</li>
              </ul>
            </article>
          </div>

          <div className="phase-milestone-bar">
            <div className="milestone-step">
              <span className="milestone-badge">Day 0</span>
              <strong>Surgery &amp; First Sit</strong>
              <p>Pain control, bed-to-chair transfer with walker.</p>
            </div>
            <div className="milestone-divider">→</div>
            <div className="milestone-step">
              <span className="milestone-badge">Day 1</span>
              <strong>Corridor Walking &amp; Range</strong>
              <p>Physiotherapy walking sessions and knee extension.</p>
            </div>
            <div className="milestone-divider">→</div>
            <div className="milestone-step">
              <span className="milestone-badge">Day 2</span>
              <strong>Stair Mastery &amp; Discharge</strong>
              <p>Stair assessment, medication briefing, safe discharge.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* PHASE 03: HOME RECOVERY CONTENT SECTION (QUIET KNEE PROTOCOL) */}
      {/* ========================================================================= */}
      <section className="section phase-detail-section home-recovery-section quiet-section" id="home-recovery">
        <div className="shell">
          <div className="phase-detail-header">
            <h2>
              Home Recovery: <em>Progress Steadily</em>
            </h2>
            <p className="phase-lead">
              Follow our <strong>Quiet Knee Protocol</strong> and milestone roadmap for a steady, complications-free recovery.
            </p>
          </div>

          {/* Quiet Knee Protocol Cards Layout */}
          <div className="quiet-protocol-layout">
            <div className="quiet-3d-stage" aria-hidden="true">
              <span></span>
              <img src="/knee-3d.webp" alt="3D Knee joint visualization" />
            </div>
            <div className="quiet-step-grid">
              <article>
                <span>01</span>
                <h3>Control swelling</h3>
                <p>
                  Ice for 15–20 minutes every 2–3 hours. Elevate the ankle above heart level and keep the dressing dry.
                </p>
              </article>
              <article>
                <span>02</span>
                <h3>Protect straightening</h3>
                <p>
                  Full 0° extension is critical. Do heel props and quad sets; never place pillows directly beneath your knee bend.
                </p>
              </article>
              <article>
                <span>03</span>
                <h3>Do not force bending</h3>
                <p>
                  Gentle heel slides only. Forcing aggressive bending increases inflammation and joint swelling.
                </p>
              </article>
              <article>
                <span>04</span>
                <h3>Keep walking short</h3>
                <p>
                  Walk with your walker for 5–10 minutes at a time. Prioritize proper gait over long distances.
                </p>
              </article>
              <article>
                <span>05</span>
                <h3>Limit time on your feet</h3>
                <p>
                  Alternate short activity with seated leg elevation. Rest before fatigue or swelling builds up.
                </p>
              </article>
              <article>
                <span>06</span>
                <h3>Know the stop signs</h3>
                <p>
                  Contact clinic immediately for fever &gt; 101°F, sudden calf pain/swelling, or spreading wound redness.
                </p>
              </article>
            </div>
          </div>

          {/* Weekly Recovery Milestone Roadmap */}
          <div className="home-milestones-card">
            <div className="home-milestones-header">
              <h3>Recovery Milestone Roadmap</h3>
              <p>Key progress benchmarks from acute healing to full active living.</p>
            </div>
            <div className="home-milestones-grid">
              <div className="milestone-block">
                <div className="milestone-tag">Weeks 1 – 2</div>
                <h4>Acute Healing</h4>
                <ul className="milestone-items">
                  <li>0° extension &amp; 90° flexion range.</li>
                  <li>Indoor walking with walker support.</li>
                  <li>Incision inspection &amp; suture review at Day 12–14.</li>
                  <li>Strict elevation and ice pack routine.</li>
                </ul>
              </div>
              <div className="milestone-block">
                <div className="milestone-tag">Weeks 3 – 6</div>
                <h4>Restoring Independence</h4>
                <ul className="milestone-items">
                  <li>Transition to single stick or unassisted walking.</li>
                  <li>Achieve 105° to 115° knee flexion.</li>
                  <li>Resume light desk work and daily chores.</li>
                  <li>Driving clearance assessment.</li>
                </ul>
              </div>
              <div className="milestone-block">
                <div className="milestone-tag">Weeks 7 – 12+</div>
                <h4>Active Living &amp; Strength</h4>
                <ul className="milestone-items">
                  <li>Normal walking without limp; unassisted stairs.</li>
                  <li>Achieve 120°+ flexion and muscle stamina.</li>
                  <li>Resume swimming, cycling, and travel.</li>
                  <li>Long-term joint preservation exercises.</li>
                </ul>
              </div>
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
              Clear, practical answers about surgery preparation, hospital stay, and milestone timelines.
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
