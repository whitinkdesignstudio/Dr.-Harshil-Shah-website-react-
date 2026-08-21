import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function GalleryPage() {
  const [activeModalImg, setActiveModalImg] = useState(null);

  const galleryItems = [
    {
      id: 1,
      src: '/about.jpg',
      alt: 'In practice — Dr. Harshil Shah',
      className: 'gallery-item-1'
    },
    {
      id: 2,
      src: '/about2.jpg',
      alt: 'Professional journey — Dr. Harshil Shah',
      className: 'gallery-item-2'
    },
    {
      id: 3,
      src: '/about3.jpg',
      alt: 'Learning & collaboration — Dr. Harshil Shah',
      className: 'gallery-item-3'
    },
    {
      id: 4,
      src: '/about4.png',
      alt: 'Orthopaedic expertise — Dr. Harshil Shah',
      className: 'gallery-item-4'
    },
    {
      id: 5,
      src: '/about5.png',
      alt: 'Patient-first care — Dr. Harshil Shah',
      className: 'gallery-item-5'
    }
  ];

  return (
    <div>
      {/* Visual Hero */}
      <section className="inner-hero compact-hero compact-hero-visual">
        <div className="inner-orbit"></div>
        <div className="shell compact-visual-hero-grid">
          <div>
            <div className="breadcrumb">
              <Link to="/">Home</Link>
              <span>/</span> Gallery
            </div>
            <div className="eyebrow">
              <span></span> Inside the practice
            </div>
            <h1>
              Moments from a
              <br />
              <em>journey of care.</em>
            </h1>
            <p>
              A glimpse into the work, learning and professional experiences behind the practice.
            </p>
          </div>
          <div className="page-hero-art" aria-hidden="true">
            <div className="page-art-orbit page-art-orbit-one"></div>
            <div className="page-art-orbit page-art-orbit-two"></div>
            <img className="page-art-model page-art-primary" src="/shoulder-3d.png" alt="" />
            <img className="page-art-model page-art-secondary" src="/knee-3d.png" alt="" />
            <span className="page-art-caption">Knee · Hip · Shoulder</span>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="section gallery-section">
        <div className="shell gallery-grid">
          {galleryItems.map((item) => (
            <figure
              key={item.id}
              className={`gallery-item ${item.className}`}
              onClick={() => setActiveModalImg(item)}
              style={{ cursor: 'pointer' }}
              title="Click to view image"
            >
              <img src={item.src} alt={item.alt} />
            </figure>
          ))}
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
            <img src={activeModalImg.src} alt={activeModalImg.alt} />
            <div className="gallery-modal-caption">
              {activeModalImg.alt}
            </div>
          </div>
        </div>
      )}

      {/* Education Library 3D */}
      <section className="section gallery-education-section">
        <div className="shell">
          <div className="section-heading split-heading">
            <div>
              <span className="guide-kicker">Patient education library</span>
              <h2>
                Information designed
                <br />
                <em>to be revisited.</em>
              </h2>
            </div>
            <p>
              Original patient education helps families remember the important parts of preparation, early protection and steady recovery.
            </p>
          </div>
          <div className="education-gallery education-gallery-3d">
            <Link to="/patient-guides#eras">
              <img src="/hip-3d.png" alt="3D hip joint visualization" />
              <span>
                <strong>Prepare before surgery</strong>
                <i>Read guidance →</i>
              </span>
            </Link>
            <Link to="/patient-guides#quiet-knee">
              <img src="/knee-3d.png" alt="3D knee joint visualization" />
              <span>
                <strong>Protect early recovery</strong>
                <i>Read guidance →</i>
              </span>
            </Link>
            <Link to="/patient-guides#quiet-knee">
              <img src="/shoulder-3d.png" alt="3D shoulder joint visualization" />
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
