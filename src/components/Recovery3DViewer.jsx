import React from 'react';
import { Link } from 'react-router-dom';

export default function Recovery3DViewer() {
  return (
    <Link
      to="/patient-guides#quiet-knee"
      className="recovery-showcase-card"
      aria-label="Read the recovery pathway"
    >
      {/* Concentric Blueprint Rings in Background */}
      <div className="recovery-concentric-ring ring-outer" />
      <div className="recovery-concentric-ring ring-inner" />

      {/* Central 3D Knee Model */}
      <div className="recovery-showcase-model">
        <div className="knee-ambient-shadow" />
        <img
          src="/knee-motion-v2.png"
          alt="3D Knee Joint Anatomy Visualization"
          className="knee-showcase-img"
        />
      </div>

      {/* Action Button Link */}
      <div className="recovery-orbit-action">
        <span>Read the recovery pathway</span>
        <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M5 12h14M12 5l7 7-7 7" />
        </svg>
      </div>
    </Link>
  );
}
