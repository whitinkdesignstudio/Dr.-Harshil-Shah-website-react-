import React from 'react';
import { Link } from 'react-router-dom';

const timelineData = [
  {
    type: 'EXPERIENCE',
    badgeClass: 'badge-experience',
    title: 'LT Hospital',
    desc: 'Four years of comprehensive orthopaedic and trauma surgical experience.',
    side: 'left'
  },
  {
    type: 'EXPERIENCE',
    badgeClass: 'badge-experience',
    title: 'Hinduja Hospital',
    desc: 'One year of advanced orthopaedic practice and specialised clinical care.',
    side: 'right'
  },
  {
    type: 'TRAINING',
    badgeClass: 'badge-training',
    title: 'Dr. Sanjay Agarwala',
    desc: 'Prestigious fellowship in complex joint replacement and reconstruction.',
    side: 'left'
  },
  {
    type: 'TRAINING',
    badgeClass: 'badge-training',
    title: 'Dr. Aditya Manek',
    desc: 'Six months of intensive specialized training in advanced joint care.',
    side: 'right'
  },
  {
    type: 'TRAINING',
    badgeClass: 'badge-training',
    title: 'Dr. Viral Shah • Breach Candy Hospital',
    desc: 'Specialised knee and hip replacement training, including Total Knee Replacement (TKR).',
    side: 'left'
  }
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
    question: "What are Dr. Harshil Shah's primary areas of surgical expertise?",
    answer: "Dr. Harshil Shah is a Consultant Orthopaedic Surgeon specializing in Knee, Hip, and Shoulder care. His clinical practice encompasses keyhole arthroscopy, ligament reconstruction (ACL/PCL/meniscus), joint preservation therapies, total & partial joint replacement, and complex trauma management in Ahmedabad."
  },
  {
    question: "Where did Dr. Harshil Shah receive his advanced orthopaedic training?",
    answer: "Dr. Harshil Shah completed four years of comprehensive orthopaedic and trauma surgery at LT Hospital, followed by advanced fellowships in joint replacement and arthroscopy at P.D. Hinduja Hospital, Mumbai under Dr. Sanjay Agarwala and Dr. Abhay Narvekar. He also completed specialized shoulder surgery training under Dr. Ashish Babulkar, and gained international clinical exposure at Massachusetts General Hospital and the Hospital for Special Surgery in the United States."
  },
  {
    question: "Does Dr. Harshil Shah recommend surgery for all joint pain cases?",
    answer: "No. Dr. Shah strongly advocates a patient-first, conservative-first philosophy. Non-surgical options—including targeted physiotherapy, specialized joint preservation protocols, posture correction, and medication—are explored first whenever viable. Surgery is considered only when necessary to restore function, relieve pain, and improve your quality of life."
  },
  {
    question: "Can I consult Dr. Harshil Shah for an objective second opinion?",
    answer: "Yes. Many patients consult Dr. Shah to confirm a diagnosis, evaluate the necessity of a proposed surgical procedure, or explore alternative minimally invasive options. Please bring all previous X-rays, MRI scans, and medical reports to your consultation."
  },
  {
    question: "How can I prepare for my first consultation with Dr. Harshil Shah?",
    answer: "Please bring any previous X-rays, MRI scans, blood test reports, and a list of current medications. It is also helpful to note down when your symptoms began and any specific activities that cause discomfort so Dr. Shah can conduct a thorough, tailored evaluation."
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
      <section className="about-timeline-section">
        <div className="shell">
          <div className="about-timeline-header">
            <h2 className="about-timeline-title">Experience &amp; advanced training</h2>
            <p className="about-timeline-subtitle">
              Professional experience plus advanced training with specialists in joint replacement and arthroscopy.
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
                      <span className={`about-timeline-badge ${item.badgeClass}`}>
                        {item.type}
                      </span>
                      <h3 className="about-timeline-heading">{item.title}</h3>
                      <p className="about-timeline-desc">{item.desc}</p>
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
