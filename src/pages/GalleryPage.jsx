import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [activeModalImg, setActiveModalImg] = useState(null);
  const [visibleCardIds, setVisibleCardIds] = useState(new Set());
  const cardRefs = useRef({});

  // Reset and re-trigger observer on filter category change
  const handleCategoryChange = (cat) => {
    setActiveCategory(cat);
  };

  const DOCTOR_IMG_BASE = '/galleri/docter img/';

  const galleryItems = [
    {
      id: 1,
      src: `${DOCTOR_IMG_BASE}WS_DB.JPG.webp`,
      tag: 'Clinical Practice',
      title: 'Dr. Harshil Shah — Specialist Consultation',
      subtitle: 'Patient-centric joint assessment and care planning',
      size: 'big', // 2x2
      anim: 'left-to-right',
      category: 'practice'
    },
    {
      id: 2,
      src: `${DOCTOR_IMG_BASE}WS_DB-2.JPG.webp`,
      tag: 'Surgical Theatre',
      title: 'Joint Replacement & Precision Surgery',
      subtitle: 'Advanced robotic techniques for knee and hip restoration',
      size: 'column', // 1x2 tall
      anim: 'top-to-bottom',
      category: 'surgery'
    },
    {
      id: 3,
      src: `${DOCTOR_IMG_BASE}WS_DB-3.JPG.webp`,
      tag: 'Academic Forum',
      title: 'Orthopaedic Conference Presentation',
      subtitle: 'Sharing clinical findings with national orthopaedic faculty',
      size: 'small', // 1x1
      anim: 'right-to-left',
      category: 'events'
    },
    {
      id: 4,
      src: `${DOCTOR_IMG_BASE}WS_DB-4.JPG.webp`,
      tag: 'Surgical Excellence',
      title: 'Minimally Invasive Joint Procedures',
      subtitle: 'Fast-track recovery and tissue preservation',
      size: 'small', // 1x1
      anim: 'bottom-to-top',
      category: 'surgery'
    },
    {
      id: 5,
      src: `${DOCTOR_IMG_BASE}WS_DB-5.JPG.webp`,
      tag: 'Professional Journey',
      title: 'Clinical Discussion & Diagnosis Review',
      subtitle: 'Evaluating imaging scans for accurate surgical planning',
      size: 'row', // 2x1 wide
      anim: 'left-to-right',
      category: 'practice'
    },
    {
      id: 6,
      src: `${DOCTOR_IMG_BASE}WS_DB-7.JPG.webp`,
      tag: 'Workshops & Masterclasses',
      title: 'Hands-On Arthroplasty Workshop',
      subtitle: 'Demonstrating sub-millimeter component positioning',
      size: 'small', // 1x1
      anim: 'top-to-bottom',
      category: 'events'
    },
    {
      id: 7,
      src: `${DOCTOR_IMG_BASE}WS_DB-8.JPG.webp`,
      tag: 'Medical Collaboration',
      title: 'Multidisciplinary Surgical Team in Action',
      subtitle: 'Collaborative care for complex joint reconstructions',
      size: 'small', // 1x1
      anim: 'right-to-left',
      category: 'surgery'
    },
    {
      id: 8,
      src: `${DOCTOR_IMG_BASE}WS_DB-9.JPG.webp`,
      tag: 'Patient Care',
      title: 'Post-Operative Progress Evaluation',
      subtitle: 'Guiding patients through tailored recovery milestones',
      size: 'column', // 1x2 tall
      anim: 'bottom-to-top',
      category: 'practice'
    },
    {
      id: 9,
      src: `${DOCTOR_IMG_BASE}WhatsApp Image 2026-08-24 at 12.47.57 PM.webp`,
      tag: 'Events & Honors',
      title: 'Orthopaedic Association Milestone',
      subtitle: 'Recognition for contributions to joint surgery education',
      size: 'small', // 1x1
      anim: 'left-to-right',
      category: 'events'
    },
    {
      id: 10,
      src: `${DOCTOR_IMG_BASE}WhatsApp Image 2026-08-24 at 12.47.58 PM.webp`,
      tag: 'Clinical Moments',
      title: 'Pre-Op Patient Consultation & Guidance',
      subtitle: 'Addressing queries with clarity and empathy',
      size: 'big', // 2x2
      anim: 'right-to-left',
      category: 'practice'
    },
    {
      id: 11,
      src: `${DOCTOR_IMG_BASE}WhatsApp Image 2026-08-24 at 12.47.58 PM (1).webp`,
      tag: 'Surgical Theatre',
      title: 'High-Precision Robotic Joint Realignment',
      subtitle: 'Optimizing biomechanical balance and longevity',
      size: 'column', // 1x2 tall
      anim: 'top-to-bottom',
      category: 'surgery'
    },
    {
      id: 12,
      src: `${DOCTOR_IMG_BASE}WhatsApp Image 2026-08-24 at 12.47.58 PM (2).webp`,
      tag: 'Workshops',
      title: 'Advanced Joint Cadaveric Lab Training',
      subtitle: 'Refining complex revision techniques',
      size: 'small', // 1x1
      anim: 'bottom-to-top',
      category: 'events'
    },
    {
      id: 13,
      src: `${DOCTOR_IMG_BASE}WhatsApp Image 2026-08-24 at 12.47.59 PM.webp`,
      tag: 'Clinical Practice',
      title: 'Diagnostic Knee Assessment',
      subtitle: 'Ligament and cartilage evaluation',
      size: 'small', // 1x1
      anim: 'left-to-right',
      category: 'practice'
    },
    {
      id: 14,
      src: `${DOCTOR_IMG_BASE}WhatsApp Image 2026-08-24 at 12.48.00 PM.webp`,
      tag: 'Professional Journey',
      title: 'Scientific Paper Presentation',
      subtitle: 'Outcomes in rapid-recovery joint pathways',
      size: 'small', // 1x1
      anim: 'right-to-left',
      category: 'events'
    },
    {
      id: 15,
      src: `${DOCTOR_IMG_BASE}WhatsApp Image 2026-08-24 at 12.48.01 PM.webp`,
      tag: 'Surgical Excellence',
      title: 'Sterile Operating Environment',
      subtitle: 'State-of-the-art laminar airflow surgical suite',
      size: 'small', // 1x1
      anim: 'top-to-bottom',
      category: 'surgery'
    },
    {
      id: 16,
      src: `${DOCTOR_IMG_BASE}WhatsApp Image 2026-08-24 at 12.48.01 PM (1).webp`,
      tag: 'Patient Care',
      title: 'Day-1 Mobility Restoration',
      subtitle: 'Assisting early ambulation under ERAS protocol',
      size: 'small', // 1x1
      anim: 'bottom-to-top',
      category: 'practice'
    },
    {
      id: 17,
      src: `${DOCTOR_IMG_BASE}WhatsApp Image 2026-08-24 at 12.48.02 PM.webp`,
      tag: 'Academic Exchange',
      title: 'International Faculty Interaction',
      subtitle: 'Exchanging clinical insights with global specialists',
      size: 'column', // 1x2 tall
      anim: 'left-to-right',
      category: 'events'
    },
    {
      id: 18,
      src: `${DOCTOR_IMG_BASE}WhatsApp Image 2026-08-24 at 12.48.02 PM (1).webp`,
      tag: 'Surgical Precision',
      title: 'Shoulder Arthroscopy in Progress',
      subtitle: 'Keyhole repair of rotator cuff and labrum',
      size: 'big', // 2x2
      anim: 'right-to-left',
      category: 'surgery'
    },
    {
      id: 19,
      src: `${DOCTOR_IMG_BASE}WhatsApp Image 2026-08-24 at 12.48.02 PM (2).webp`,
      tag: 'Clinical Moments',
      title: 'Compassionate Patient Counseling',
      subtitle: 'Explaining surgical steps with 3D anatomical models',
      size: 'small', // 1x1
      anim: 'top-to-bottom',
      category: 'practice'
    },
    {
      id: 20,
      src: `${DOCTOR_IMG_BASE}WhatsApp Image 2026-08-24 at 12.48.03 PM.webp`,
      tag: 'Events & CME',
      title: 'Continuous Medical Education Seminar',
      subtitle: 'Educating general practitioners on joint preservation',
      size: 'small', // 1x1
      anim: 'bottom-to-top',
      category: 'events'
    },
    {
      id: 21,
      src: `${DOCTOR_IMG_BASE}WhatsApp Image 2026-08-24 at 12.48.03 PM (1).webp`,
      tag: 'Surgical Team',
      title: 'Team Briefing & Pre-Operative Check',
      subtitle: 'Ensuring utmost patient safety and surgical readiness',
      size: 'row', // 2x1 wide
      anim: 'left-to-right',
      category: 'surgery'
    },
    {
      id: 22,
      src: `${DOCTOR_IMG_BASE}WhatsApp Image 2026-08-24 at 12.48.04 PM.webp`,
      tag: 'Clinical Practice',
      title: 'Functional Joint Mobility Testing',
      subtitle: 'Assessing post-rehab range of motion',
      size: 'small', // 1x1
      anim: 'right-to-left',
      category: 'practice'
    },
    {
      id: 23,
      src: `${DOCTOR_IMG_BASE}WhatsApp Image 2026-08-24 at 12.48.04 PM (1).webp`,
      tag: 'Fellowships',
      title: 'Specialized Arthroplasty Certification',
      subtitle: 'Dedication to advanced clinical mastery',
      size: 'small', // 1x1
      anim: 'top-to-bottom',
      category: 'events'
    },
    {
      id: 24,
      src: `${DOCTOR_IMG_BASE}WhatsApp Image 2026-08-24 at 12.48.04 PM (2).webp`,
      tag: 'Surgical Theatre',
      title: 'Knee Preservation & Realignment',
      subtitle: 'High tibial osteotomy and cartilage restoration',
      size: 'small', // 1x1
      anim: 'bottom-to-top',
      category: 'surgery'
    },
    {
      id: 25,
      src: `${DOCTOR_IMG_BASE}WhatsApp Image 2026-08-24 at 12.48.05 PM.webp`,
      tag: 'Practice Highlights',
      title: 'Dr. Harshil Shah — Dedicated Orthopaedic Care',
      subtitle: 'Committed to empowering pain-free movement across Gujarat',
      size: 'big', // 2x2
      anim: 'left-to-right',
      category: 'practice'
    }
  ];

  const filteredItems = activeCategory === 'all'
    ? galleryItems
    : galleryItems.filter((item) => item.category === activeCategory);

  // IntersectionObserver: Animate cards when user scrolls down to them
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const id = Number(entry.target.dataset.id);
          if (entry.isIntersecting) {
            setVisibleCardIds((prev) => new Set([...prev, id]));
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -40px 0px',
      }
    );

    Object.values(cardRefs.current).forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [filteredItems]);

  return (
    <div className="gallery-page-wrapper">
      {/* Visual Hero */}
      <section className="gallery-hero-custom">
        <div className="gallery-hero-bg-glow"></div>
        <div className="shell gallery-hero-grid">
          <div className="gallery-hero-content">
            <h1 className="gallery-hero-title">
              Moments from a
              <br />
              <span className="hero-accent-text">journey of care.</span>
            </h1>
            <p className="gallery-hero-subtitle">
              A comprehensive visual journey through Dr. Harshil Shah's clinical practice, advanced robotic joint surgeries, academic CME forums, and surgical fellowships.
            </p>

            {/* Filter Tabs */}
            <div className="gallery-filter-tabs">
              <button
                type="button"
                className={`gallery-filter-pill ${activeCategory === 'all' ? 'active' : ''}`}
                onClick={() => handleCategoryChange('all')}
              >
                All Moments ({galleryItems.length})
              </button>
              <button
                type="button"
                className={`gallery-filter-pill ${activeCategory === 'practice' ? 'active' : ''}`}
                onClick={() => handleCategoryChange('practice')}
              >
                🏥 Consultations &amp; Care ({galleryItems.filter(i => i.category === 'practice').length})
              </button>
              <button
                type="button"
                className={`gallery-filter-pill ${activeCategory === 'surgery' ? 'active' : ''}`}
                onClick={() => handleCategoryChange('surgery')}
              >
                🩺 Surgical Theatre ({galleryItems.filter(i => i.category === 'surgery').length})
              </button>
              <button
                type="button"
                className={`gallery-filter-pill ${activeCategory === 'events' ? 'active' : ''}`}
                onClick={() => handleCategoryChange('events')}
              >
                🎓 Conferences &amp; Fellowships ({galleryItems.filter(i => i.category === 'events').length})
              </button>
            </div>
          </div>

          <div className="gallery-hero-visual-panel" aria-hidden="true">
            <div className="gallery-hero-showcase-card">
              <div className="hero-floating-badge badge-top">
                <span className="badge-dot"></span>
                <span>Robotic Precision &amp; 3D Care</span>
              </div>

              <div className="hero-3d-models-wrap">
                <img className="hero-3d-img hero-3d-shoulder" src="/shoulder-3d.webp" alt="3D Shoulder Joint" />
                <img className="hero-3d-img hero-3d-knee" src="/knee-3d.webp" alt="3D Knee Joint" />
              </div>

              <div className="hero-floating-badge badge-bottom">
                <span>Knee · Hip · Shoulder Joint Care</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bento Mosaic Dynamic Animated Grid */}
      <section className="section gallery-bento-section">
        <div className="shell">
          <div className="gallery-bento-grid">
            {filteredItems.map((item, index) => {
              const isInView = visibleCardIds.has(item.id);
              return (
                <div
                  key={item.id}
                  ref={(el) => (cardRefs.current[item.id] = el)}
                  data-id={item.id}
                  className={`gallery-bento-card gallery-card-${item.size} anim-${item.anim} ${isInView ? 'is-in-view' : 'is-hidden'}`}
                  style={{ animationDelay: `${(index % 3) * 0.12}s` }}
                  onClick={() => setActiveModalImg(item)}
                  title="Click to zoom image"
                >
                  <div className="gallery-card-inner">
                    <img
                      src={item.src}
                      alt={item.title}
                      className="gallery-card-img"
                      loading="lazy"
                    />

                    {/* Glassmorphic Overlay Gradient */}
                    <div className="gallery-card-gradient"></div>

                    {/* Top Badge */}
                    <div className="gallery-card-tag">
                      <span>{item.tag}</span>
                    </div>

                    {/* Hover Zoom Icon */}
                    <div className="gallery-zoom-badge">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                        <circle cx="11" cy="11" r="8" />
                        <line x1="21" y1="21" x2="16.65" y2="16.65" />
                        <line x1="11" y1="8" x2="11" y2="14" />
                        <line x1="8" y1="11" x2="14" y2="11" />
                      </svg>
                    </div>

                    {/* Bottom Captions */}
                    <div className="gallery-card-info">
                      <h3>{item.title}</h3>
                      <p>{item.subtitle}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {activeModalImg && (
        <div
          className="gallery-modal-backdrop"
          onClick={() => setActiveModalImg(null)}
        >
          <div
            className="gallery-modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="gallery-modal-close"
              onClick={() => setActiveModalImg(null)}
              aria-label="Close lightbox"
            >
              ✕
            </button>
            <div className="gallery-modal-img-wrap">
              <img src={activeModalImg.src} alt={activeModalImg.title} />
            </div>
            <div className="gallery-modal-caption">
              <span className="modal-tag">{activeModalImg.tag}</span>
              <strong>{activeModalImg.title}</strong>
              <p>{activeModalImg.subtitle}</p>
            </div>
          </div>
        </div>
      )}

      {/* Education Library 3D */}
      <section className="section gallery-education-section">
        <div className="shell">
          <div className="gallery-stacked-heading">
            <h2>
              Information designed <em>to be revisited.</em>
            </h2>
            <p>
              Original patient education helps families remember the important parts of preparation, early protection and steady recovery.
            </p>
          </div>
          <div className="education-gallery education-gallery-3d">
            <Link to="/patient-guides#eras">
              <img src="/hip-3d.webp" alt="3D hip joint visualization" />
              <span>
                <strong>Prepare before surgery</strong>
                <i>Read guidance →</i>
              </span>
            </Link>
            <Link to="/patient-guides#quiet-knee">
              <img src="/knee-3d.webp" alt="3D knee joint visualization" />
              <span>
                <strong>Protect early recovery</strong>
                <i>Read guidance →</i>
              </span>
            </Link>
            <Link to="/patient-guides#quiet-knee">
              <img src="/shoulder-3d.webp" alt="3D shoulder joint visualization" />
              <span>
                <strong>Progress with support</strong>
                <i>Read guidance →</i>
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Gallery Note */}
      <section className="gallery-note">
        <div className="shell">
          <div>
            <span>✦</span>
            <p>Looking for information about a condition or treatment?</p>
          </div>
          <Link className="button button-light" to="/treatments">
            Explore treatments
          </Link>
        </div>
      </section>
    </div>
  );
}
