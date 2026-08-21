import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function HeroSlider() {
  const [activeSlide, setActiveSlide] = useState(1);

  const slides = [
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
      alt: 'Dr. Harshil Shah in clinic consultation',
      className: 'photo-hero-slide-office'
    },
    {
      id: 1,
      title: 'Better movement.',
      copy: 'Thoughtful care for sports injuries, arthroscopy, joint preservation and replacement—explained in language you can understand.',
      image: '/doctor-hero-studio.png',
      alt: 'Portrait of Dr. Harshil Shah, Orthopaedic Surgeon',
      className: 'photo-hero-slide-studio'
    }
  ];

  // Auto-advance every 6 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev === 0 ? 1 : 0));
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const handlePrev = () => {
    setActiveSlide((prev) => (prev === 0 ? 1 : 0));
  };

  const handleNext = () => {
    setActiveSlide((prev) => (prev === 0 ? 1 : 0));
  };

  const currentSlide = slides[activeSlide];

  return (
    <section className="photo-hero" aria-roledescription="carousel" aria-label="Dr. Harshil Shah orthopaedic care">
      <div className="photo-hero-media" aria-live="polite">
        {slides.map((s, idx) => (
          <img
            key={s.id}
            className={`photo-hero-slide ${s.className} ${activeSlide === idx ? 'is-active' : ''}`}
            src={s.image}
            alt={s.alt}
            aria-hidden={activeSlide !== idx}
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

        <div className="photo-hero-controls" aria-label="Hero banner controls">
          <button
            className="photo-hero-prev"
            type="button"
            aria-label="Previous banner"
            onClick={handlePrev}
          >
            <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className="hero-arrow hero-arrow-left">
              <path
                d="M5 12h14M14 7l5 5-5 5"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          <div className="photo-hero-dots">
            {slides.map((s, idx) => (
              <button
                key={s.id}
                type="button"
                className={activeSlide === idx ? 'is-active' : ''}
                aria-label={`Show banner ${idx + 1}`}
                aria-current={activeSlide === idx ? 'true' : 'false'}
                onClick={() => setActiveSlide(idx)}
              >
                <span></span>
              </button>
            ))}
          </div>

          <button
            className="photo-hero-next"
            type="button"
            aria-label="Next banner"
            onClick={handleNext}
          >
            <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className="hero-arrow">
              <path
                d="M5 12h14M14 7l5 5-5 5"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
