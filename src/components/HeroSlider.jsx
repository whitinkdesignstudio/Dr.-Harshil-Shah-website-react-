import React, { useState, useEffect, useCallback, useRef } from 'react';
import { Link } from 'react-router-dom';

// Defined outside component — prevents recreation on every render
const SLIDES = [
  {
    id: 0,
    title: (
      <>
        Move freely.<br />
        Live confidently.
      </>
    ),
    copy: 'Dedicated joint preservation, arthroscopy and advanced surgical expertise tailored to your recovery goals.',
    image: '/doctor-hero-office.png',
    alt: 'Dr. Harshil Shah in clinic consultation — Orthopaedic Surgeon Ahmedabad',
    className: 'photo-hero-slide-office'
  },
  {
    id: 1,
    title: 'Better movement.',
    copy: 'Thoughtful care for sports injuries, arthroscopy, joint preservation and replacement—explained in language you can understand.',
    image: '/doctor-hero-studio.png',
    alt: 'Portrait of Dr. Harshil Shah, Orthopaedic Surgeon Gujarat',
    className: 'photo-hero-slide-studio'
  }
];

const SLIDE_COUNT = SLIDES.length;

export default function HeroSlider() {
  const [activeSlide, setActiveSlide] = useState(0);
  const timerRef = useRef(null);

  // Start/restart auto-advance timer
  const startTimer = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % SLIDE_COUNT);
    }, 6000);
  }, []);

  useEffect(() => {
    startTimer();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [startTimer]);

  // Pause on visibility change to save CPU when tab is hidden
  useEffect(() => {
    const handleVisibility = () => {
      if (document.hidden) {
        if (timerRef.current) clearInterval(timerRef.current);
      } else {
        startTimer();
      }
    };
    document.addEventListener('visibilitychange', handleVisibility);
    return () => document.removeEventListener('visibilitychange', handleVisibility);
  }, [startTimer]);

  const handlePrev = useCallback(() => {
    setActiveSlide((prev) => (prev === 0 ? SLIDE_COUNT - 1 : prev - 1));
    startTimer();
  }, [startTimer]);

  const handleNext = useCallback(() => {
    setActiveSlide((prev) => (prev + 1) % SLIDE_COUNT);
    startTimer();
  }, [startTimer]);

  const currentSlide = SLIDES[activeSlide];

  return (
    <section
      className="photo-hero"
      aria-roledescription="carousel"
      aria-label="Dr. Harshil Shah orthopaedic care"
    >
      <div className="photo-hero-media" aria-live="polite" aria-atomic="true">
        {SLIDES.map((s, idx) => (
          <img
            key={s.id}
            className={`photo-hero-slide ${s.className} ${activeSlide === idx ? 'is-active' : ''}`}
            src={s.image}
            alt={s.alt}
            aria-hidden={activeSlide !== idx}
            /* Hero LCP image — load eagerly with high priority */
            loading={idx === 0 ? 'eager' : 'lazy'}
            fetchpriority={idx === 0 ? 'high' : 'low'}
            decoding={idx === 0 ? 'sync' : 'async'}
            width="1920"
            height="1080"
          />
        ))}
      </div>

      <div className="photo-hero-shade" aria-hidden="true" />
      <div className="photo-hero-grid" aria-hidden="true" />

      <div className="shell photo-hero-inner">
        <div className="photo-hero-card">
          <h1>{currentSlide.title}</h1>
          <p className="photo-hero-copy">{currentSlide.copy}</p>
          <div className="photo-hero-actions">
            <Link className="photo-hero-primary" to="/treatments">
              <span>Explore care</span>
              <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className="hero-arrow" width="18" height="18">
                <path
                  d="M5 12h14M14 7l5 5-5 5"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>

      <div className="photo-hero-controls" aria-label="Hero banner controls">
        <button
          className="photo-hero-prev"
          type="button"
          aria-label="Previous banner"
          onClick={handlePrev}
        >
          <svg aria-hidden="true" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M19 12H5M12 19l-7-7 7-7" />
          </svg>
        </button>

        <div className="photo-hero-dots" role="tablist" aria-label="Slide indicators">
          {SLIDES.map((s, idx) => (
            <button
              key={s.id}
              type="button"
              role="tab"
              className={`hero-dot-btn ${activeSlide === idx ? 'is-active' : ''}`}
              aria-label={`Show banner ${idx + 1}`}
              aria-selected={activeSlide === idx}
              onClick={() => { setActiveSlide(idx); startTimer(); }}
            >
              <span className="hero-dot-pill" />
            </button>
          ))}
        </div>

        <button
          className="photo-hero-next"
          type="button"
          aria-label="Next banner"
          onClick={handleNext}
        >
          <svg aria-hidden="true" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </section>
  );
}
