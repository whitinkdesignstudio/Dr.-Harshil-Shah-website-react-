import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Link } from 'react-router-dom';

const VIDEO_BASE = '/galleri/opreation/';

export const surgicalVideos = [
  {
    id: 1,
    file: 'IMG_3715.MP4',
    src: `${VIDEO_BASE}IMG_3715.MP4`,
    poster: `${VIDEO_BASE}thumbnails/IMG_3715.webp`,
    title: 'Knee Arthroplasty & Precision Alignment',
    category: 'knee',
    categoryName: 'Knee & Robotic Surgery',
    tag: 'Robotic Arthroplasty',
    desc: 'Intra-operative robotic alignment and sub-millimeter component placement for total knee restoration.',
    badge: '01 / Robotic Knee'
  },
  {
    id: 2,
    file: 'IMG_3727.MP4',
    src: `${VIDEO_BASE}IMG_3727.MP4`,
    poster: `${VIDEO_BASE}thumbnails/IMG_3727.webp`,
    title: 'Ligament Reconstruction & Arthroscopic Inspection',
    category: 'knee',
    categoryName: 'Knee & Robotic Surgery',
    tag: 'Arthroscopy',
    desc: 'High-definition endoscopic visualization and tension verification for cruciate ligament reconstruction.',
    badge: '02 / Arthroscopy'
  },
  {
    id: 3,
    file: 'IMG_3815.MP4',
    src: `${VIDEO_BASE}IMG_3815.MP4`,
    poster: `${VIDEO_BASE}thumbnails/IMG_3815.webp`,
    title: 'Minimally Invasive Joint Preservation',
    category: 'knee',
    categoryName: 'Knee & Robotic Surgery',
    tag: 'Joint Preservation',
    desc: 'Targeted bone and cartilage preservation to support early weight-bearing and accelerated mobility.',
    badge: '03 / Joint Preservation'
  },
  {
    id: 4,
    file: 'IMG_4033.MP4',
    src: `${VIDEO_BASE}IMG_4033.MP4`,
    poster: `${VIDEO_BASE}thumbnails/IMG_4033.webp`,
    title: 'Hip Reconstruction & Acetabular Preparation',
    category: 'hip',
    categoryName: 'Hip & Reconstruction',
    tag: 'Hip Surgery',
    desc: 'Precision acetabular reaming and anatomical implant orientation for optimal stability and range of motion.',
    badge: '04 / Hip Reconstruction'
  },
  {
    id: 5,
    file: 'IMG_4034.MP4',
    src: `${VIDEO_BASE}IMG_4034.MP4`,
    poster: `${VIDEO_BASE}thumbnails/IMG_4034.webp`,
    title: 'Direct Anterior Muscle-Sparing Hip Approach',
    category: 'hip',
    categoryName: 'Hip & Reconstruction',
    tag: 'Muscle-Sparing',
    desc: 'Sparing key musculature to facilitate rapid same-day rehabilitation and reduced post-operative discomfort.',
    badge: '05 / Muscle Sparing'
  },
  {
    id: 6,
    file: 'IMG_4055.MP4',
    src: `${VIDEO_BASE}IMG_4055.MP4`,
    poster: `${VIDEO_BASE}thumbnails/IMG_4055.webp`,
    title: 'Shoulder Arthroscopy & Rotator Cuff Repair',
    category: 'shoulder',
    categoryName: 'Shoulder & Sports Medicine',
    tag: 'Shoulder Arthroscopy',
    desc: 'Keyhole suture anchor placement and rotator cuff tendon reattachment with dynamic tensioning.',
    badge: '06 / Shoulder Care'
  },
  {
    id: 7,
    file: 'IMG_4455.MP4',
    src: `${VIDEO_BASE}IMG_4455.MP4`,
    poster: `${VIDEO_BASE}thumbnails/IMG_4455.webp`,
    title: 'Glenohumeral Joint Stabilization',
    category: 'shoulder',
    categoryName: 'Shoulder & Sports Medicine',
    tag: 'Shoulder Instability',
    desc: 'Labral repair and anatomical capsule restoration for recurrent shoulder instability and sports recovery.',
    badge: '07 / Shoulder Stabilization'
  },
  {
    id: 8,
    file: 'IMG_4459.MP4',
    src: `${VIDEO_BASE}IMG_4459.MP4`,
    poster: `${VIDEO_BASE}thumbnails/IMG_4459.webp`,
    title: 'Robotic Arm Surgical Resurfacing',
    category: 'knee',
    categoryName: 'Knee & Robotic Surgery',
    tag: 'Robotic Surgery',
    desc: 'Live stereotactic boundary tracking ensuring zero collateral ligament compromise during bone preparation.',
    badge: '08 / Robotic Precision'
  },
  {
    id: 9,
    file: 'IMG_4841.MP4',
    src: `${VIDEO_BASE}IMG_4841.MP4`,
    poster: `${VIDEO_BASE}thumbnails/IMG_4841.webp`,
    title: 'Complex Revision Arthroplasty Procedure',
    category: 'hip',
    categoryName: 'Hip & Reconstruction',
    tag: 'Revision Surgery',
    desc: 'Managing bone loss and structural reconstruction using specialized modular revision implants.',
    badge: '09 / Complex Revision'
  },
  {
    id: 10,
    file: 'IMG_4846.MP4',
    src: `${VIDEO_BASE}IMG_4846.MP4`,
    poster: `${VIDEO_BASE}thumbnails/IMG_4846.webp`,
    title: 'Surgical Theatre Workflow & Team Coordination',
    category: 'theatre',
    categoryName: 'Surgical Theatre & Techniques',
    tag: 'OT Protocol',
    desc: 'Sterile ultra-clean laminar flow operating room setup adhering to international safety protocols.',
    badge: '10 / Theatre Protocol'
  },
  {
    id: 11,
    file: 'IMG_4875.MP4',
    src: `${VIDEO_BASE}IMG_4875.MP4`,
    poster: `${VIDEO_BASE}thumbnails/IMG_4875.webp`,
    title: 'Meniscal Repair & Biological Augmentation',
    category: 'shoulder',
    categoryName: 'Shoulder & Sports Medicine',
    tag: 'Sports Injury',
    desc: 'Inside-out meniscal suture repair saving natural cushioning to prevent premature arthritis.',
    badge: '11 / Sports Recovery'
  },
  {
    id: 12,
    file: 'IMG_4891.MP4',
    src: `${VIDEO_BASE}IMG_4891.MP4`,
    poster: `${VIDEO_BASE}thumbnails/IMG_4891.webp`,
    title: 'Subacromial Decompression & Bursectomy',
    category: 'shoulder',
    categoryName: 'Shoulder & Sports Medicine',
    tag: 'Shoulder Keyhole',
    desc: 'Arthroscopic bone spur resection creating frictionless glide for full overhead shoulder range.',
    badge: '12 / Keyhole Shoulder'
  },
  {
    id: 13,
    file: 'IMG_5140.MP4',
    src: `${VIDEO_BASE}IMG_5140.MP4`,
    poster: `${VIDEO_BASE}thumbnails/IMG_5140.webp`,
    title: 'Multi-Ligament Knee Reconstruction',
    category: 'knee',
    categoryName: 'Knee & Robotic Surgery',
    tag: 'Ligament Repair',
    desc: 'Combined ACL and collateral ligament reconstruction restoring full rotational joint stability.',
    badge: '13 / Multi-Ligament'
  },
  {
    id: 14,
    file: 'IMG_5524.MP4',
    src: `${VIDEO_BASE}IMG_5524.MP4`,
    poster: `${VIDEO_BASE}thumbnails/IMG_5524.webp`,
    title: 'Trial Component Kinematic Testing',
    category: 'knee',
    categoryName: 'Knee & Robotic Surgery',
    tag: 'Kinematic Alignment',
    desc: 'Dynamic real-time testing of flexion-extension balance and patellar tracking before final seating.',
    badge: '14 / Kinematic Balance'
  },
  {
    id: 15,
    file: 'IMG_5525.MP4',
    src: `${VIDEO_BASE}IMG_5525.MP4`,
    poster: `${VIDEO_BASE}thumbnails/IMG_5525.webp`,
    title: 'Day-Care Joint Replacement Protocol',
    category: 'knee',
    categoryName: 'Knee & Robotic Surgery',
    tag: 'Rapid Recovery',
    desc: 'Fast-track surgical execution enabling walking within 3-4 hours post-procedure under ERAS guidelines.',
    badge: '15 / ERAS Pathway'
  },
  {
    id: 16,
    file: 'IMG_5527.MP4',
    src: `${VIDEO_BASE}IMG_5527.MP4`,
    poster: `${VIDEO_BASE}thumbnails/IMG_5527.webp`,
    title: 'Femoral Component Impaction & Seating',
    category: 'hip',
    categoryName: 'Hip & Reconstruction',
    tag: 'Hip Arthroplasty',
    desc: 'Precision press-fit seating of hydroxyapatite coated femoral stem for long-term osseointegration.',
    badge: '16 / Precision Hip'
  },
  {
    id: 17,
    file: 'IMG_5528.MP4',
    src: `${VIDEO_BASE}IMG_5528.MP4`,
    poster: `${VIDEO_BASE}thumbnails/IMG_5528.webp`,
    title: 'Endoscopic Visualization & Joint Cleansing',
    category: 'theatre',
    categoryName: 'Surgical Theatre & Techniques',
    tag: 'Arthroscopy System',
    desc: 'Ultra-HD 4K camera visualization providing crisp views of joint cartilage and soft tissue borders.',
    badge: '17 / 4K Endoscopy'
  },
  {
    id: 18,
    file: 'IMG_5529.MP4',
    src: `${VIDEO_BASE}IMG_5529.MP4`,
    poster: `${VIDEO_BASE}thumbnails/IMG_5529.webp`,
    title: 'Tissue-Preserving Wound Closure Technique',
    category: 'theatre',
    categoryName: 'Surgical Theatre & Techniques',
    tag: 'Wound Care',
    desc: 'Multi-layer sub-cuticular waterproof suture closure promoting minimal cosmetic scarring.',
    badge: '18 / Cosmetic Closure'
  }
];

const categories = [
  { id: 'all', label: 'All Procedures', count: 18 },
  { id: 'knee', label: 'Knee & Robotic Surgery', count: 7 },
  { id: 'hip', label: 'Hip & Reconstruction', count: 4 },
  { id: 'shoulder', label: 'Shoulder & Sports Medicine', count: 4 },
  { id: 'theatre', label: 'Surgical Theatre & Techniques', count: 3 }
];

// High-performance video card: loads 30KB WebP poster instantly, previews video smoothly on hover
function LazyVideoCard({ video, onSelect }) {
  const [isHovered, setIsHovered] = useState(false);
  const [videoReady, setVideoReady] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    if (isHovered && videoRef.current) {
      const p = videoRef.current.play();
      if (p !== undefined) p.catch(() => {});
    } else if (!isHovered && videoRef.current) {
      videoRef.current.pause();
    }
  }, [isHovered]);

  return (
    <div
      className="surgical-grid-card"
      onClick={() => onSelect(video)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        setVideoReady(false);
      }}
    >
      <div className="surgical-card-media">
        {/* Instant WebP Poster Image */}
        <img
          src={video.poster}
          alt={video.title}
          loading="lazy"
          className="surgical-card-poster"
        />

        {/* Video stream mounted on hover only — zero network bloat on page load */}
        {isHovered && (
          <video
            ref={videoRef}
            src={video.src}
            muted
            loop
            playsInline
            preload="metadata"
            onCanPlay={() => setVideoReady(true)}
            className={`surgical-card-video ${videoReady ? 'is-playing' : ''}`}
          />
        )}

        {/* Center Play Indicator */}
        <div className="surgical-card-play-btn" aria-hidden="true">
          <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
            <polygon points="6 4 20 12 6 20 6 4" />
          </svg>
        </div>

        <div className="surgical-card-overlay-badge">
          <span className="card-badge-num">{video.badge}</span>
          <span className="card-badge-cat">{video.tag}</span>
        </div>

        <div className="surgical-card-hover-actions">
          <span className="card-expand-pill">
            <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 3 21 3 21 9" />
              <polyline points="9 21 3 21 3 15" />
            </svg>
            <span>Watch Full Procedure</span>
          </span>
        </div>
      </div>

      <div className="surgical-card-info">
        <h3 className="surgical-card-title">{video.title}</h3>
        <p className="surgical-card-desc">{video.desc}</p>
        <div className="surgical-card-footer">
          <span className="surgical-card-action-text">
            Watch Full Procedure <span aria-hidden="true">→</span>
          </span>
        </div>
      </div>
    </div>
  );
}

export default function SurgicalVideosPage() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeCategory, setActiveCategory] = useState('all');
  const [isHeroMuted, setIsHeroMuted] = useState(true);
  const [isAutoPlayEnabled, setIsAutoPlayEnabled] = useState(true);
  const [modalVideo, setModalVideo] = useState(null);
  const [playbackProgress, setPlaybackProgress] = useState(0);

  const heroVideoRef = useRef(null);
  const modalVideoRef = useRef(null);

  const totalHeroVideos = surgicalVideos.length;

  // Filtered videos for grid
  const filteredVideos = activeCategory === 'all'
    ? surgicalVideos
    : surgicalVideos.filter((v) => v.category === activeCategory);

  // Next / Prev handlers for hero stage
  const handleNext = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % totalHeroVideos);
    setPlaybackProgress(0);
  }, [totalHeroVideos]);

  const handlePrev = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + totalHeroVideos) % totalHeroVideos);
    setPlaybackProgress(0);
  }, [totalHeroVideos]);

  // When center video ends or auto-advances, go to next video
  const handleHeroVideoEnded = () => {
    if (isAutoPlayEnabled) {
      handleNext();
    }
  };

  // Center video time update for smooth animated progress bar
  const handleHeroTimeUpdate = () => {
    if (heroVideoRef.current && heroVideoRef.current.duration) {
      const pct = (heroVideoRef.current.currentTime / heroVideoRef.current.duration) * 100;
      setPlaybackProgress(pct);
    }
  };

  // When active index changes, force play the center video
  useEffect(() => {
    if (heroVideoRef.current) {
      heroVideoRef.current.currentTime = 0;
      const playPromise = heroVideoRef.current.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          // Autoplay policy handled silently
        });
      }
    }
  }, [activeIndex]);

  // Keyboard navigation for hero
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (modalVideo) {
        if (e.key === 'Escape') setModalVideo(null);
        return;
      }
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [modalVideo, handleNext, handlePrev]);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (modalVideo) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [modalVideo]);

  const currentVideo = surgicalVideos[activeIndex];

  // Compute 3D stage items: previous, current, next
  const prevIdx = (activeIndex - 1 + totalHeroVideos) % totalHeroVideos;
  const nextIdx = (activeIndex + 1) % totalHeroVideos;

  return (
    <div className="surgical-page">
      {/* Hero Header */}
      <section className="surgical-hero-section">
        <div className="surgical-hero-mesh" aria-hidden="true" />
        <div className="shell surgical-hero-container">
          <div className="breadcrumb">
            <Link to="/">Home</Link>
            <span>/</span>
            <Link to="/gallery">Gallery</Link>
            <span>/</span>
            <span>Surgical &amp; OT Videos</span>
          </div>

          <h1 className="surgical-hero-title">
            Surgical Procedures &amp; <span className="text-gradient-cyan">Clinical Videos</span>
          </h1>
          <p className="surgical-hero-desc">
            Authentic intra-operative video recordings demonstrating robotic joint replacements, keyhole arthroscopy, and complex reconstructive techniques by Dr. Harshil Shah.
          </p>

          {/* ============================================================
              3D CINEMA THEATRE STAGE CAROUSEL
              ============================================================ */}
          <div className="surgical-cinema-stage-wrap">
            <div className="surgical-stage-lights" aria-hidden="true" />

            <div className="surgical-3d-stage">
              {/* Left Preview Card (Previous Video) */}
              <div
                className="surgical-stage-card stage-card-left"
                onClick={handlePrev}
                title={`Previous: ${surgicalVideos[prevIdx].title}`}
              >
                <div className="stage-card-video-box">
                  <img
                    src={surgicalVideos[prevIdx].poster}
                    alt={surgicalVideos[prevIdx].title}
                    className="stage-video-el stage-poster-img"
                    loading="eager"
                  />
                  <div className="stage-card-glass-overlay">
                    <span className="stage-arrow-btn">‹</span>
                    <span className="stage-card-mini-title">{surgicalVideos[prevIdx].title}</span>
                  </div>
                </div>
              </div>

              {/* Center Active Spotlight Video (Autoplays with Sound Off) */}
              <div className="surgical-stage-card stage-card-center">
                <div className="center-card-frame">
                  <div className="center-video-container" onClick={() => setModalVideo(currentVideo)} style={{ cursor: 'pointer' }}>
                    <video
                      ref={heroVideoRef}
                      key={currentVideo.id}
                      src={currentVideo.src}
                      poster={currentVideo.poster}
                      muted={isHeroMuted}
                      autoPlay
                      playsInline
                      preload="auto"
                      onEnded={handleHeroVideoEnded}
                      onTimeUpdate={handleHeroTimeUpdate}
                      className="center-video-el"
                    />

                    {/* Bottom Progress Bar */}
                    <div className="center-progress-track">
                      <div
                        className="center-progress-bar"
                        style={{ width: `${playbackProgress}%` }}
                      />
                    </div>
                  </div>

                  {/* Center Card Info Panel */}
                  <div className="center-info-panel">
                    <div className="center-info-text">
                      <div className="center-info-header-row">
                        <span className="center-tag-chip">{currentVideo.tag}</span>
                        <span className="center-file-tag">{currentVideo.categoryName}</span>
                      </div>
                      <h2 className="center-video-title">{currentVideo.title}</h2>
                      <p className="center-video-desc">{currentVideo.desc}</p>
                    </div>

                    <div className="center-action-row">
                      <button
                        type="button"
                        className="center-nav-arrow-btn prev-btn"
                        onClick={handlePrev}
                        aria-label="Previous Video"
                      >
                        ←
                      </button>

                      <button
                        type="button"
                        className="center-play-main-btn"
                        onClick={() => setModalVideo(currentVideo)}
                      >
                        <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                          <polygon points="5 3 19 12 5 21 5 3" />
                        </svg>
                        <span>Watch High-Def</span>
                      </button>

                      <button
                        type="button"
                        className="center-nav-arrow-btn next-btn"
                        onClick={handleNext}
                        aria-label="Next Video"
                      >
                        →
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Preview Card (Next Video) */}
              <div
                className="surgical-stage-card stage-card-right"
                onClick={handleNext}
                title={`Next: ${surgicalVideos[nextIdx].title}`}
              >
                <div className="stage-card-video-box">
                  <img
                    src={surgicalVideos[nextIdx].poster}
                    alt={surgicalVideos[nextIdx].title}
                    className="stage-video-el stage-poster-img"
                    loading="eager"
                  />
                  <div className="stage-card-glass-overlay">
                    <span className="stage-card-mini-title">{surgicalVideos[nextIdx].title}</span>
                    <span className="stage-arrow-btn">›</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Stage Quick Indicator Dots */}
            <div className="surgical-stage-dots">
              {surgicalVideos.map((v, idx) => (
                <button
                  key={v.id}
                  type="button"
                  className={`stage-dot-btn ${activeIndex === idx ? 'dot-active' : ''}`}
                  onClick={() => {
                    setActiveIndex(idx);
                    setPlaybackProgress(0);
                  }}
                  aria-label={`Jump to video ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          CATEGORY FILTER TABS & COMPREHENSIVE VIDEO BENTO GRID
          ============================================================ */}
      <section className="surgical-grid-section" id="surgical-archive">
        <div className="shell">
          <div className="surgical-section-heading">
            <div className="eyebrow">
              <span></span> Categorized Video Library
            </div>
            <h2 className="surgical-section-title">Explore by Surgical Specialty</h2>
            <p className="surgical-section-subtitle">
              Click on any procedure video below to inspect anatomical milestones, surgical techniques, and keyhole arthroscopy methods.
            </p>

            {/* Filter Tabs */}
            <div className="surgical-filter-bar" role="tablist">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  type="button"
                  className={`surgical-filter-tab ${activeCategory === cat.id ? 'is-active' : ''}`}
                  onClick={() => setActiveCategory(cat.id)}
                  role="tab"
                  aria-selected={activeCategory === cat.id}
                >
                  <span className="filter-tab-label">{cat.label}</span>
                  <span className="filter-tab-count">{cat.count}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Video Grid */}
          <div className="surgical-video-bento-grid">
            {filteredVideos.map((video) => (
              <LazyVideoCard
                key={video.id}
                video={video}
                onSelect={setModalVideo}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          CINEMA LIGHTBOX MODAL VIEWER
          ============================================================ */}
      {modalVideo && (
        <div
          className="surgical-modal-backdrop"
          onClick={() => setModalVideo(null)}
          aria-modal="true"
          role="dialog"
        >
          <div
            className="surgical-modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              className="surgical-modal-close-btn"
              onClick={() => setModalVideo(null)}
              aria-label="Close Video Viewer"
            >
              ✕
            </button>

            <div className="surgical-modal-player-wrap">
              <video
                ref={modalVideoRef}
                src={modalVideo.src}
                poster={modalVideo.poster}
                controls
                muted
                autoPlay
                playsInline
                preload="auto"
                className="surgical-modal-video"
              />
            </div>

            <div className="surgical-modal-info">
              <div className="modal-header-line">
                <span className="modal-cat-tag">{modalVideo.categoryName}</span>
                <span className="modal-file-id">Dr. Harshil Shah Clinical Archive</span>
              </div>
              <h2 className="modal-title">{modalVideo.title}</h2>
              <p className="modal-desc">{modalVideo.desc}</p>

              <div className="modal-action-bar">
                <Link
                  to="/appointment"
                  className="button button-primary"
                  onClick={() => setModalVideo(null)}
                >
                  <span>Book Consultation for this Condition</span>
                  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </Link>
                <button
                  type="button"
                  className="button button-outline"
                  onClick={() => setModalVideo(null)}
                >
                  Close Player
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Bottom CTA */}
      <section className="cta-section" aria-label="Consultation callout">
        <div className="shell cta-grid">
          <div className="cta-left">
            <h2 className="cta-main-title">
              Have Questions About <br />
              <span className="cta-title-accent">Your Surgery Options?</span>
            </h2>
          </div>
          <div className="cta-right">
            <p className="cta-desc">
              Discuss robotic precision, expected recovery timelines, and joint preservation during a personalized clinical consultation.
            </p>
            <div className="cta-actions">
              <Link className="cta-btn-white" to="/appointment">
                <span>Book appointment</span>
                <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
              <a href="tel:+919316753985" className="cta-phone-block">
                <small>DIRECT CLINIC DESK</small>
                <strong>+91 93167 53985</strong>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
