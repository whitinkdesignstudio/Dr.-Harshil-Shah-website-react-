import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

export default function WelcomeModal() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const closeButtonRef = useRef(null);

  useEffect(() => {
    // Show modal on first website visit (once per session)
    const hasSeenModal = sessionStorage.getItem('hasSeenWelcomeModal');
    if (!hasSeenModal) {
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 800);
      return () => clearTimeout(timer);
    }
  }, []);

  // Auto-focus close button when modal opens (accessibility)
  useEffect(() => {
    if (isOpen && closeButtonRef.current) {
      closeButtonRef.current.focus();
    }
  }, [isOpen]);

  // Single keydown listener — stable, no recreation on isOpen change
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setIsOpen((prev) => {
          if (prev) {
            sessionStorage.setItem('hasSeenWelcomeModal', 'true');
            return false;
          }
          return prev;
        });
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    sessionStorage.setItem('hasSeenWelcomeModal', 'true');
  };

  const handleBook = () => {
    handleClose();
    navigate('/appointment');
  };

  const handleKnowMore = () => {
    handleClose();
    navigate('/about');
  };

  if (!isOpen) return null;

  return (
    <div
      className="welcome-modal-overlay"
      onClick={handleClose}
      role="dialog"
      aria-modal="true"
      aria-label="Welcome — Dr. Harshil Shah Orthopaedic Surgeon"
    >
      <div
        className="welcome-modal-card"
        onClick={(e) => e.stopPropagation()}
        aria-labelledby="welcome-modal-title"
        aria-describedby="welcome-modal-desc"
        tabIndex="-1"
      >
        {/* Close Button */}
        <button
          ref={closeButtonRef}
          className="welcome-modal-close"
          onClick={handleClose}
          aria-label="Close welcome modal"
          type="button"
        >
          <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>

        {/* Left Side: Doctor Photo (Exact Uploaded Graphic) */}
        <div className="welcome-modal-visual">
          <picture>
            <source media="(max-width: 768px)" srcSet="/reponsive igm/ChatGPT Image Aug 22, 2026, 10_37_13 AM.png" />
            <img
              src="/popup-doctor.webp"
              alt="Dr. Harshil Shah - Orthopaedic Surgeon"
              className="welcome-modal-photo"
            />
          </picture>
        </div>

        {/* Right Side: Content & Action */}
        <div className="welcome-modal-content">
          {/* Header Area */}
          <div className="welcome-modal-header">
            <div className="welcome-kicker">
              <span>Welcome to</span>
              <div className="welcome-kicker-line"></div>
            </div>
            <h2 id="welcome-modal-title" className="welcome-title">
              Dr. Harshil Shah
            </h2>
            <div className="welcome-subtitle">ORTHOPAEDIC SURGEON</div>
            <p id="welcome-modal-desc" className="welcome-desc">
              Focused orthopaedic care for knee, hip and shoulder conditions with clear guidance from diagnosis through recovery.
            </p>
          </div>

          {/* 4 Feature Badges */}
          <div className="welcome-features-grid">
            <div className="welcome-feature-item">
              <div className="welcome-feature-icon">
                <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
              </div>
              <span>Expert<br />Consultation</span>
            </div>

            <div className="welcome-feature-item">
              <div className="welcome-feature-icon">
                <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="3"></circle>
                  <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83"></path>
                </svg>
              </div>
              <span>Advanced<br />Treatment</span>
            </div>

            <div className="welcome-feature-item">
              <div className="welcome-feature-icon">
                <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                </svg>
              </div>
              <span>Patient-First<br />Care</span>
            </div>

            <div className="welcome-feature-item">
              <div className="welcome-feature-icon">
                <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                  <line x1="16" y1="2" x2="16" y2="6"></line>
                  <line x1="8" y1="2" x2="8" y2="6"></line>
                  <line x1="3" y1="10" x2="21" y2="10"></line>
                  <path d="M9 16l2 2 4-4"></path>
                </svg>
              </div>
              <span>Book<br />Appointment Easily</span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="welcome-actions">
            <button className="welcome-btn-primary" onClick={handleBook} type="button">
              <span>Book appointment</span>
              <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </button>
            <button className="welcome-btn-secondary" onClick={handleKnowMore} type="button">
              Know More
            </button>
          </div>

          {/* Stats Bar */}
          <div className="welcome-stats-bar">
            <div className="welcome-stat-col">
              <div className="welcome-stat-icon">
                <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                  <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" />
                </svg>
              </div>
              <div className="welcome-stat-text">
                <strong>5000+</strong>
                <span>Patients</span>
              </div>
            </div>

            <div className="welcome-stat-divider" />

            <div className="welcome-stat-col">
              <div className="welcome-stat-icon">
                <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15v-4H8l4-7v4h3l-4 7z" />
                </svg>
              </div>
              <div className="welcome-stat-text">
                <strong>Knee • Hip • Shoulder</strong>
                <span>Specialized Care</span>
              </div>
            </div>

            <div className="welcome-stat-divider" />

            <div className="welcome-stat-col">
              <div className="welcome-stat-icon">
                <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                </svg>
              </div>
              <div className="welcome-stat-text">
                <strong>Ahmedabad</strong>
                <span>Gujarat, India</span>
              </div>
            </div>
          </div>

          {/* Bottom Tagline */}
          <div className="welcome-tagline-footer">
            <span className="welcome-tagline-line" />
            <span className="welcome-tagline-text">Your Mobility. Our Priority.</span>
            <span className="welcome-tagline-line" />
          </div>
        </div>
      </div>
    </div>
  );
}
