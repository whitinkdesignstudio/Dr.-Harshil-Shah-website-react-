import React from 'react';
import { Link } from 'react-router-dom';

const timelineData = [
  {
    type: 'MEDICAL EDUCATION',
    badgeClass: 'badge-education',
    location: 'Ahmedabad',
    title: 'Medical Education & Orthopaedic Residency',
    institution: 'Smt. NHL Municipal Medical College • V.S. Hospital • L.G. Hospital',
    paragraphs: [
      'He completed his MBBS from Smt. NHL Municipal Medical College, Ahmedabad, followed by his clinical internship at V.S. Hospital, Ahmedabad.',
      'With a growing interest in bone and joint care, he went on to pursue his M.S. in Orthopaedics at L.G. Hospital, Ahmedabad, where he gained extensive experience in trauma, fracture care and a wide range of orthopaedic conditions.'
    ],
    side: 'left'
  },
  {
    type: 'FELLOWSHIP',
    badgeClass: 'badge-training',
    location: 'Mumbai',
    title: 'Joint Replacement Training',
    institution: 'P. D. Hinduja Hospital • Dr. Sanjay Agarwala',
    paragraphs: [
      'To further develop his skills in joint reconstruction, Dr. Shah completed a Fellowship in Joint Replacement Surgery at P. D. Hinduja Hospital, Mumbai, under the guidance of Dr. Sanjay Agarwala.',
      'This training gave him focused exposure to hip and knee replacement surgery and helped build a strong foundation in modern joint replacement techniques.'
    ],
    side: 'right'
  },
  {
    type: 'SPECIALIZED TRAINING',
    badgeClass: 'badge-sports',
    location: 'Mumbai',
    title: 'Sports Injury & Arthroscopy',
    institution: 'Dr. Abhay Narvekar',
    paragraphs: [
      'He later trained under Dr. Abhay Narvekar in Sports Injury and Arthroscopy, gaining experience in the diagnosis and minimally invasive treatment of sports-related and ligament injuries.'
    ],
    side: 'left'
  },
  {
    type: 'SHOULDER FELLOWSHIP',
    badgeClass: 'badge-shoulder',
    location: 'Pune',
    title: 'Shoulder Surgery & Sports Injuries',
    institution: 'DMH Hospital, Pune • Dr. Ashish Babulkar',
    paragraphs: [
      'Dr. Shah continued his specialist training in Pune under Dr. Ashish Babulkar at DMH Hospital, with a focus on shoulder replacement, shoulder disorders and sports injuries.',
      'This experience further developed his interest in treating complex shoulder problems and restoring function in active patients.'
    ],
    side: 'right'
  },
  {
    type: 'INTERNATIONAL FELLOWSHIP — USA',
    badgeClass: 'badge-usa',
    location: 'New York, USA',
    title: 'Robotic & Revision Joint Replacement — USA',
    institution: 'Hospital for Special Surgery (HSS), New York • Dr. Peter Sculco',
    paragraphs: [
      'As part of his advanced international training, Dr. Shah completed a fellowship in Robotic Joint Replacement and Revision Joint Replacement at Hospital for Special Surgery (HSS), New York, a Cornell-affiliated medical centre, under Dr. Peter Sculco.',
      'During this period, he gained exposure to modern robotic-assisted joint replacement techniques as well as the management of complex primary and revision hip and knee replacements.'
    ],
    side: 'left'
  },
  {
    type: 'HARVARD-AFFILIATED FELLOWSHIP',
    badgeClass: 'badge-harvard',
    location: 'Boston, USA',
    title: 'Advanced Shoulder Training — Harvard-Affiliated MGH',
    institution: 'Massachusetts General Hospital (MGH), Boston • Dr. Bassem Elhassan',
    paragraphs: [
      'He further trained in the Shoulder Service at Massachusetts General Hospital (MGH), a Harvard-affiliated teaching hospital, under Dr. Bassem Elhassan.',
      'This fellowship provided advanced experience in shoulder surgery, reconstruction and the management of complex shoulder conditions.'
    ],
    side: 'right'
  }
];

const expertiseList = [
  'Joint Replacement Surgery',
  'Robotic Joint Replacement',
  'Revision Hip & Knee Replacement',
  'Sports Injury Management',
  'Arthroscopy',
  'Shoulder Surgery',
  'Shoulder Replacement',
  'Complex Joint Reconstruction'
];

const jointsData = [
  {
    id: 'knee',
    name: 'Knee Joint',
    subtitle: 'Preservation, Arthroscopy & ACL Repair',
    img: '/knee-3d.png',
    badge: '01 / Knee'
  },
  {
    id: 'hip',
    name: 'Hip Joint',
    subtitle: 'Preservation & Joint Replacement',
    img: '/hip-3d.png',
    badge: '02 / Hip'
  },
  {
    id: 'shoulder',
    name: 'Shoulder Joint',
    subtitle: 'Arthroscopy, Rotator Cuff & Reconstruction',
    img: '/shoulder-3d.png',
    badge: '03 / Shoulder'
  }
];

const aboutFaqs = [
  {
    question: "What are Dr. Harshil Shah’s qualifications and areas of expertise?",
    answer: "Dr. Harshil Shah is a Consultant Orthopaedic Surgeon holding MBBS, M.S. (Orthopaedics), FIJR (Fellowship in Joint Replacement), and FIAS (Fellowship in Arthroscopy & Sports Surgery). His core areas of expertise include robotic joint replacement, partial and total knee replacement, total hip arthroplasty, keyhole arthroscopic ligament reconstruction (ACL/PCL/meniscus), rotator cuff repair, and complex revision surgeries."
  },
  {
    question: "What specialised training has Dr. Harshil Shah completed in India and abroad?",
    answer: "Dr. Shah completed his orthopaedic residency in Ahmedabad (L.G. Hospital / V.S. Hospital), followed by prestigious fellowships in Mumbai (Joint Replacement at P.D. Hinduja Hospital under Dr. Sanjay Agarwala, and Arthroscopy under Dr. Abhay Narvekar) and Pune (Shoulder Surgery at DMH under Dr. Ashish Babulkar). He further undertook advanced international fellowships in the United States in Robotic & Revision Joint Replacement at Hospital for Special Surgery (HSS), New York (under Dr. Peter Sculco) and Shoulder Surgery at Massachusetts General Hospital (MGH), Harvard Medical School affiliate, Boston (under Dr. Bassem Elhassan)."
  },
  {
    question: "Which orthopaedic conditions does Dr. Harshil Shah primarily treat?",
    answer: "Dr. Shah specializes in disorders of the knee, hip, and shoulder. This includes osteoarthritis, meniscus tears, cruciate ligament injuries (ACL/PCL), cartilage degeneration, avascular necrosis (AVN) of the hip, hip arthritis, rotator cuff tears, shoulder dislocations and instability, frozen shoulder, subacromial impingement, sports injuries, and complex orthopaedic trauma."
  },
  {
    question: "What is Dr. Harshil Shah’s approach to patient care and treatment planning?",
    answer: "Dr. Shah follows a patient-centric, evidence-based philosophy: 'Care begins with a good conversation.' Rather than relying solely on scan reports or age, every treatment plan is tailored to the individual’s daily routine, pain severity, functional demands, and personal recovery goals. Recommendations are explained in simple, transparent terms so patients and their families feel confident and supported."
  },
  {
    question: "Does Dr. Harshil Shah consider non-surgical treatment before recommending surgery?",
    answer: "Yes, absolutely. Dr. Shah strongly advocates a conservative-first approach. Non-surgical measures—including targeted physiotherapy, muscle strengthening, joint preservation therapies, lifestyle modifications, and medication—are always prioritised whenever clinically appropriate. Surgery is discussed only when non-operative care no longer provides adequate relief or when structural restoration is necessary."
  },
  {
    question: "What types of joint replacement and arthroscopic procedures does Dr. Harshil Shah perform?",
    answer: "Dr. Shah performs modern primary, partial, and robotic-assisted total knee replacements; muscle-sparing total hip replacements; and complex revision hip/knee surgeries. In arthroscopy, he performs keyhole ACL/PCL reconstructions, multi-ligament repairs, meniscal preservation, shoulder rotator cuff repairs, Bankart labral stabilizations, and anatomic/reverse total shoulder replacements."
  },
  {
    question: "Can patients consult Dr. Harshil Shah for a second opinion before orthopaedic surgery?",
    answer: "Yes. Dr. Shah regularly provides objective second opinions for patients evaluating whether surgery is truly necessary or if alternative non-surgical or joint-preserving options exist. Patients are encouraged to bring all previous X-rays, MRI scans, and medical records for a comprehensive and unbiased clinical assessment."
  },
  {
    question: "Why should patients choose Dr. Harshil Shah for knee, hip or shoulder care?",
    answer: "Patients benefit from a rare combination of world-class international fellowship training (HSS New York and Harvard-affiliated MGH Boston), advanced surgical precision, and a warm, patient-first ethos. Dr. Shah prioritises tissue preservation, rapid recovery protocols (ERAS), and honest guidance, ensuring every patient receives personalised, high-standard orthopaedic care."
  }
];

export default function AboutPage() {
  const timelineRef = React.useRef(null);
  const [lineProgress, setLineProgress] = React.useState(0);
  const [activeJoint, setActiveJoint] = React.useState(0);
  const [isPaused, setIsPaused] = React.useState(false);
  const [openFaq, setOpenFaq] = React.useState(0);

  React.useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setActiveJoint((prev) => (prev + 1) % jointsData.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [isPaused]);

  React.useEffect(() => {
    const handleScroll = () => {
      if (!timelineRef.current) return;
      const rect = timelineRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Calculate scroll progress through timeline container
      const startTrigger = windowHeight * 0.75;
      const totalDist = rect.height + 50;
      const currentScroll = startTrigger - rect.top;
      
      let pct = (currentScroll / totalDist) * 100;
      pct = Math.max(0, Math.min(100, pct));
      setLineProgress(pct);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="about-page">
      {/* About Page Hero */}
      <section className="about-hero-section">
        <div className="about-hero-backdrop-pattern" aria-hidden="true" />
        <div className="shell about-hero-container">
          <div className="about-hero-content">
            <div className="breadcrumb">
              <Link to="/">Home</Link>
              <span>/</span> About
            </div>

            <h1 className="about-hero-title">
              About <span className="about-hero-accent">Dr. Harshil Shah</span>
            </h1>

            <p className="about-hero-desc">
              Consultant Orthopaedic Surgeon specializing in arthroscopy, joint reconstruction, and sports injury recovery in Ahmedabad.
            </p>

            <div className="about-hero-ctas">
              <a
                href="#approach"
                className="about-btn-primary"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('approach')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Read More
                <svg aria-hidden="true" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 5v14M19 12l-7 7-7-7" />
                </svg>
              </a>
            </div>
          </div>

          <div className="about-hero-visual-col">
            <div className="about-portrait-card">
              <img
                src="/profile2.webp"
                alt="Dr. Harshil Shah - Orthopaedic Surgeon"
                className="about-portrait-photo"
              />
              <div className="about-portrait-info">
                <strong className="about-portrait-name">Dr. Harshil Shah</strong>
                <span className="about-portrait-role">M.S. (Ortho) · Consultant Orthopaedic Surgeon</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section id="approach" className="section story-section">
        <div className="shell story-grid">
          <div className="story-lead">
            <div className="eyebrow">
              <span></span> The approach
            </div>
            <h2>
              Care begins with a
              <br />
              <em>good conversation.</em>
            </h2>
            <p className="story-lead-sub">
              Understanding your symptoms, lifestyle, and goals before deciding on any treatment.
            </p>
          </div>
          <div className="story-copy">
            <p className="story-quote">
              “My role is to help you understand what is happening, explain every sensible option and choose a treatment that fits your health and your life.”
            </p>
            <p>
              Dr. Harshil Shah is an orthopaedic surgeon focused on knee, hip and shoulder care. His work covers joint reconstruction, arthroscopy, sports injuries and complex trauma, with a strong emphasis on preserving tissue and supporting early mobility where appropriate.
            </p>
            <p>
              Every recommendation starts with an accurate diagnosis. Non-surgical treatment is considered first when it can help; surgery is discussed only when the expected benefit makes it the right next step.
            </p>
          </div>
        </div>
      </section>

      {/* 3 Joints Focus Banner */}
      <section className="about-focus-banner">
        <div className="shell about-focus-grid">
          {/* Animated 3D Joint Showcase */}
          <div
            className="about-joints-stage ultra-pro-max"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <div className="about-joints-bg-glow" aria-hidden="true" />
            <div className="about-joints-orbit-ring ring-outer" aria-hidden="true" />
            <div className="about-joints-orbit-ring ring-inner" aria-hidden="true" />
            <div className="about-joints-scan-line" aria-hidden="true" />

            <div className="about-joints-viewport">
              {jointsData.map((joint, idx) => {
                const diff = (idx - activeJoint + jointsData.length) % jointsData.length;
                let statusClass = 'slide-hidden';
                if (diff === 0) statusClass = 'slide-active';
                else if (diff === 1) statusClass = 'slide-next';
                else if (diff === jointsData.length - 1) statusClass = 'slide-prev';

                return (
                  <div
                    key={joint.id}
                    className={`about-joint-slide-item ${statusClass}`}
                    onClick={() => setActiveJoint(idx)}
                  >
                    <div className="about-joint-img-box">
                      <img
                        src={joint.img}
                        alt={joint.name}
                        className="about-joint-3d-img"
                      />
                      <div className="about-joint-glow-aura" />
                    </div>
                    <div className="about-joint-card-tag">
                      <span className="about-joint-num">{joint.badge}</span>
                      <strong className="about-joint-name">{joint.name}</strong>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Bottom Interactive Pill Selectors */}
            <div className="about-joints-dots-bar">
              {jointsData.map((joint, idx) => (
                <button
                  key={joint.id}
                  type="button"
                  className={`about-joint-pill-btn ${activeJoint === idx ? 'pill-active' : ''}`}
                  onClick={() => setActiveJoint(idx)}
                >
                  <span className="pill-indicator" />
                  {joint.name.split(' ')[0]}
                </button>
              ))}
            </div>
          </div>

          <div className="about-focus-content">
            <h2>
              Three joints.
              <br />
              <em>One tailored approach.</em>
            </h2>
            <p>
              From sports injuries in younger patients to joint-preserving and replacement care later in life, each plan starts with the person—not a standard package.
            </p>
            <Link className="text-link" to="/treatments">
              Explore specialist treatments{' '}
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
        </div>
      </section>

      {/* Principles Section */}
      <section className="principles-section">
        <div className="shell principles-grid">
          <article>
            <span>01</span>
            <h3>Patient-first decisions</h3>
            <p>Surgery only when truly needed, with medical therapy considered first where possible.</p>
          </article>
          <article>
            <span>02</span>
            <h3>Clear, calm guidance</h3>
            <p>Simple explanations, enough time for questions and support through each stage.</p>
          </article>
          <article>
            <span>03</span>
            <h3>Thoughtful recovery</h3>
            <p>Muscle-preserving techniques and focused rehabilitation based on the individual.</p>
          </article>
          <article>
            <span>04</span>
            <h3>Evidence-based care</h3>
            <p>Treatment aligned with current practice, your diagnosis and your personal goals.</p>
          </article>
        </div>
      </section>

      {/* Experience & Advanced Training Timeline */}
      <section className="about-timeline-section" id="experience-training">
        <div className="shell">
          <div className="about-timeline-header">
            <div className="eyebrow">
              <span></span> Experience &amp; Training
            </div>
            <h2 className="about-timeline-title">Experience &amp; Training</h2>
            <p className="about-timeline-subtitle">
              Dr. Harshil Shah’s journey in orthopaedics has been shaped by years of hands-on clinical training in India and the United States. From his early medical education to advanced fellowships in joint replacement, sports injuries and shoulder surgery, each stage of his training has added to the way he approaches patient care today.
            </p>
          </div>

          <div className="about-timeline-wrapper" ref={timelineRef}>
            {/* Center Background Line */}
            <div className="about-timeline-line-bg" aria-hidden="true" />

            {/* Dynamic Center Scroll Progress Fill Line */}
            <div
              className="about-timeline-line-fill"
              style={{ height: `${lineProgress}%` }}
              aria-hidden="true"
            />

            <div className="about-timeline-entries">
              {timelineData.map((item, idx) => {
                const threshold = (idx / (timelineData.length - 1)) * 95;
                const isPassed = lineProgress >= threshold;

                return (
                  <div
                    key={idx}
                    className={`about-timeline-item ${item.side === 'left' ? 'item-left' : 'item-right'} ${isPassed ? 'item-active' : ''}`}
                  >
                    {/* Content Card */}
                    <div className="about-timeline-card">
                      <div className="about-timeline-card-header">
                        <span className={`about-timeline-badge ${item.badgeClass}`}>
                          {item.type}
                        </span>
                        <span className="about-timeline-location">📍 {item.location}</span>
                      </div>
                      <h3 className="about-timeline-heading">{item.title}</h3>
                      {item.institution && (
                        <div className="about-timeline-institution">{item.institution}</div>
                      )}
                      <div className="about-timeline-body">
                        {item.paragraphs.map((p, pIdx) => (
                          <p key={pIdx} className="about-timeline-desc">{p}</p>
                        ))}
                      </div>
                    </div>

                    {/* Center Node */}
                    <div className={`about-timeline-circle ${isPassed ? 'circle-active' : ''}`}>
                      <span className="circle-inner" />
                    </div>

                    {/* Spacer for balanced 50/50 alternating grid */}
                    <div className="about-timeline-blank" />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* A Well-Rounded Orthopaedic Journey Section */}
      <section className="about-journey-section" aria-label="A Well-Rounded Orthopaedic Journey">
        <div className="shell">
          <div className="about-journey-box">
            <div className="about-journey-header">
              <div className="eyebrow eyebrow-light">
                <span></span> Clinical Breadth &amp; Philosophy
              </div>
              <h2 className="about-journey-title">A Well-Rounded Orthopaedic Journey</h2>
              <p className="about-journey-lead">
                Training across institutions in <strong>Ahmedabad, Mumbai, Pune and the United States</strong> has given Dr. Harshil Shah a broad perspective on orthopaedic care.
              </p>
            </div>

            <div className="about-journey-specialties-wrap">
              <span className="about-journey-list-title">His experience includes:</span>
              <div className="about-journey-grid">
                {expertiseList.map((item, idx) => (
                  <div key={idx} className="about-journey-item">
                    <div className="about-journey-icon">
                      <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </div>
                    <span className="about-journey-item-text">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="about-journey-philosophy-card">
              <div className="about-journey-quote-icon">“</div>
              <p className="about-journey-philosophy-text">
                Today, he brings this experience together with a simple goal: <strong>to understand each patient’s problem clearly, explain the available treatment options and help them return to movement and daily life with confidence.</strong>
              </p>
              <div className="about-journey-cta-row">
                <Link to="/appointment" className="button button-white">
                  <span>Book a Consultation</span>
                  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </Link>
                <Link to="/treatments" className="button button-outline-white">
                  <span>Explore Treatments</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Page Related FAQs */}
      <section className="about-faq-section" aria-label="Frequently Asked Questions about Dr. Harshil Shah">
        <div className="shell">
          <div className="about-faq-header">
            <span className="about-faq-kicker">FREQUENTLY ASKED QUESTIONS</span>
            <h2 className="about-faq-title">About Dr. Harshil Shah &amp; Consultations</h2>
            <p className="about-faq-subtitle">
              Key questions regarding clinical experience, surgical specialities, and consultation guidance.
            </p>
          </div>

          <div className="about-faq-container">
            {aboutFaqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className={`about-faq-card ${isOpen ? 'is-open' : ''}`}
                >
                  <button
                    type="button"
                    className="about-faq-question-btn"
                    onClick={() => setOpenFaq(isOpen ? -1 : idx)}
                    aria-expanded={isOpen}
                  >
                    <span className="about-faq-q-text">{faq.question}</span>
                    <span className="about-faq-icon" aria-hidden="true">
                      <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M6 9l6 6 6-6" />
                      </svg>
                    </span>
                  </button>

                  <div className={`about-faq-answer-wrap ${isOpen ? 'open' : ''}`}>
                    <div className="about-faq-answer-inner">
                      <p>{faq.answer}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="about-faq-footer-cta">
            <p>Have more questions about specific conditions or recovery?</p>
            <Link to="/faq" className="about-faq-more-link">
              <span>View All Patient FAQs</span>
              <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section" aria-label="Book appointment callout">
        <div className="shell cta-grid">
          <div className="cta-left">
            <h2 className="cta-main-title">
              Bring your reports.<br />
              <span className="cta-title-accent">Bring your questions.</span>
            </h2>
          </div>
          <div className="cta-right">
            <p className="cta-desc">
              A consultation is time to understand the full picture—not to rush into a procedure.
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
