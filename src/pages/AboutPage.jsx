import React from 'react';
import { Link } from 'react-router-dom';

export default function AboutPage() {
  return (
    <div>
      {/* Inner Hero */}
      <section className="inner-hero">
        <div className="inner-orbit"></div>
        <div className="shell inner-hero-grid">
          <div className="reveal">
            <div className="breadcrumb">
              <Link to="/">Home</Link>
              <span>/</span> About
            </div>
            <div className="eyebrow">
              <span></span> Knee · Hip · Shoulder Care
            </div>
            <h1>
              Helping you move
              <br />
              <em>without fear.</em>
            </h1>
            <p>
              Thoughtful orthopaedic care shaped by clear guidance, evidence-based decisions and respect for what matters to you.
            </p>
          </div>
          <div className="about-hero-stage">
            <div className="inner-portrait">
              <img src="/profile2.jpg" alt="Dr. Harshil Shah" />
              <div className="portrait-label">
                <strong>Dr. Harshil Shah</strong>
                <span>Orthopaedic Surgeon</span>
              </div>
            </div>
            <img
              className="about-hero-joint about-hero-knee"
              src="/knee-3d.png"
              alt="3D knee joint visualization"
            />
            <img
              className="about-hero-joint about-hero-shoulder"
              src="/shoulder-3d.png"
              alt="3D shoulder joint visualization"
            />
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="section story-section">
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
          <div className="about-focus-art" aria-hidden="true">
            <img src="/knee-3d.png" alt="Knee 3D" />
            <img src="/hip-3d.png" alt="Hip 3D" />
            <img src="/shoulder-3d.png" alt="Shoulder 3D" />
          </div>
          <div>
            <span className="guide-kicker">Specialist focus</span>
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

      {/* Experience & Training */}
      <section className="section experience-section">
        <div className="shell experience-grid">
          <div className="experience-card">
            <div className="eyebrow eyebrow-light">
              <span></span> Experience
            </div>
            <h2>
              Built through practice.
              <br />
              <em>Refined through training.</em>
            </h2>
            <div className="experience-stats">
              <div>
                <strong>Knee</strong>
                <span>Arthroscopy &amp; replacement</span>
              </div>
              <div>
                <strong>Hip</strong>
                <span>Preservation &amp; replacement</span>
              </div>
              <div>
                <strong>Shoulder</strong>
                <span>Arthroscopy &amp; reconstruction</span>
              </div>
            </div>
          </div>
          <div className="timeline-panel">
            <div className="eyebrow">
              <span></span> Professional experience
            </div>
            <div className="timeline">
              <div>
                <span>01</span>
                <p>
                  <strong>Joint replacement &amp; arthroscopy</strong>
                  <small>Focused fellowship training at P. D. Hinduja Hospital, Mumbai</small>
                </p>
              </div>
              <div>
                <span>02</span>
                <p>
                  <strong>International clinical exposure</strong>
                  <small>Advanced shoulder and joint-replacement learning in the United States</small>
                </p>
              </div>
            </div>
            <div className="eyebrow training-label">
              <span></span> Fellowships &amp; advanced training
            </div>
            <ul className="training-list">
              <li>Arthroplasty training under Dr. Sanjay Agarwala</li>
              <li>Arthroscopy training under Dr. Abhay Narvekar</li>
              <li>Shoulder replacement training under Dr. Ashish Babulkar</li>
              <li>Clinical exposure at Massachusetts General Hospital and Hospital for Special Surgery</li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="shell cta-grid">
          <div>
            <div className="eyebrow eyebrow-light">
              <span></span> Start with clarity
            </div>
            <h2>
              Bring your reports.
              <br />
              <em>Bring your questions.</em>
            </h2>
          </div>
          <div>
            <p>A consultation is time to understand the full picture—not to rush into a procedure.</p>
            <div className="cta-actions">
              <Link className="button button-light" to="/appointment">
                Book appointment{' '}
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
              <a className="phone-link" href="tel:+919316753985">
                <small>Call the clinic</small>
                <strong>+91 93167 53985</strong>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
