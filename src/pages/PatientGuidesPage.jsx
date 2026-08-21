import React from 'react';
import { Link } from 'react-router-dom';

export default function PatientGuidesPage() {
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div>
      {/* Guides Hero */}
      <section className="guides-hero">
        <div className="shell guides-hero-grid">
          <div className="guides-hero-copy reveal">
            <span className="guide-kicker">Patient education · Recovery library</span>
            <h1>
              Recovery, explained
              <br />
              <em>clearly.</em>
            </h1>
            <p>
              Practical guidance for the questions that often come before and after surgery—what to prepare, what to expect and when to ask for help.
            </p>
            <button
              type="button"
              className="button"
              onClick={() => scrollToSection('quiet-knee')}
              style={{ cursor: 'pointer' }}
            >
              Read the recovery steps{' '}
              <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className="icon">
                <path d="M5 12h14M14 7l5 5-5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
          <div className="guides-3d-constellation reveal reveal-delay" aria-hidden="true">
            <span className="guides-3d-orbit guides-3d-orbit-one"></span>
            <span className="guides-3d-orbit guides-3d-orbit-two"></span>
            <img className="guides-3d-knee" src="/knee-3d.png" alt="3D Knee" />
            <img className="guides-3d-hip" src="/hip-3d.png" alt="3D Hip" />
            <img className="guides-3d-shoulder" src="/shoulder-3d.png" alt="3D Shoulder" />
          </div>
        </div>
      </section>

      {/* ERAS Section */}
      <section className="section eras-section" id="eras">
        <div className="shell eras-grid">
          <div className="eras-3d-stage" aria-hidden="true">
            <span></span>
            <img src="/hip-3d.png" alt="3D Hip joint" />
            <img src="/knee-3d.png" alt="3D Knee joint" />
          </div>
          <div className="eras-copy">
            <span className="guide-kicker">01 · Your ERAS journey</span>
            <h2>
              Prepare well.
              <br />
              <em>Recover with direction.</em>
            </h2>
            <p className="eras-lead">
              Enhanced Recovery After Surgery brings preparation, pain planning, early movement, nutrition and home recovery into one coordinated pathway.
            </p>
            <div className="eras-readiness">
              <article>
                <strong>Medical optimisation</strong>
                <p>Review diabetes, blood pressure, anaemia, smoking, alcohol and current medicines with your treating team.</p>
              </article>
              <article>
                <strong>Exercise and prehab</strong>
                <p>Practise the strengthening, breathing and walking-aid skills recommended before surgery.</p>
              </article>
              <article>
                <strong>Nutrition and hydration</strong>
                <p>Choose balanced protein-rich meals and maintain suitable hydration unless your doctor has restricted fluids.</p>
              </article>
              <article>
                <strong>Education and planning</strong>
                <p>Understand the procedure, pain plan, home support, transport and follow-up arrangements.</p>
              </article>
            </div>
            <div className="eras-points">
              <div>
                <span>Before</span>
                <strong>Optimise and prepare</strong>
                <p>Review medicines, health conditions, exercise, nutrition and your home support plan.</p>
              </div>
              <div>
                <span>Hospital</span>
                <strong>Move with support</strong>
                <p>Follow the clinical team’s advice for pain control, safe mobility and discharge readiness.</p>
              </div>
              <div>
                <span>Home</span>
                <strong>Progress steadily</strong>
                <p>Continue the prescribed walking, exercises, wound care and medicines.</p>
              </div>
            </div>
            <Link className="button button-outline" to="/appointment">
              Discuss your recovery plan{' '}
              <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className="icon">
                <path d="M5 12h14M14 7l5 5-5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Quiet Knee Section */}
      <section className="section quiet-section" id="quiet-knee">
        <div className="shell">
          <div className="quiet-heading">
            <div>
              <span className="guide-kicker">02 · After total knee replacement</span>
              <h2>
                The Quiet Knee
                <br />
                <em>Protocol.</em>
              </h2>
            </div>
            <div>
              <p>
                Six clear priorities for the first two weeks. Read them in order and follow the personal instructions given by your surgeon and physiotherapist.
              </p>
            </div>
          </div>
          <div className="quiet-protocol-layout">
            <div className="quiet-3d-stage" aria-hidden="true">
              <span></span>
              <img src="/knee-3d.png" alt="3D Knee joint visualization" />
            </div>
            <div className="quiet-step-grid">
              <article>
                <span>01</span>
                <h3>Control swelling</h3>
                <p>
                  Use a protected ice pack for the duration advised by your team. Elevate the leg so the ankle is supported above heart level, keep the dressing dry and check the skin regularly.
                </p>
              </article>
              <article>
                <span>02</span>
                <h3>Protect straightening</h3>
                <p>
                  Early extension matters. Use the heel-prop, ankle-pump and thigh-tightening exercises prescribed by your physiotherapist; keep support away from directly behind the knee.
                </p>
              </article>
              <article>
                <span>03</span>
                <h3>Do not force bending</h3>
                <p>
                  Only perform the range-of-motion work you have been shown. Aggressive pushing, pulling or bending can increase pain and swelling in the early phase.
                </p>
              </article>
              <article>
                <span>04</span>
                <h3>Keep walking short</h3>
                <p>
                  Use your walker or other aid correctly. Keep early walks purposeful and brief, and follow the individual step target given by your clinical team.
                </p>
              </article>
              <article>
                <span>05</span>
                <h3>Limit time on your feet</h3>
                <p>
                  Alternate short activity with seated rest and elevation. Sit down before pain or swelling builds instead of waiting until the knee feels overworked.
                </p>
              </article>
              <article>
                <span>06</span>
                <h3>Know the stop signs</h3>
                <p>
                  Do not push through rising pain, marked swelling or a change that concerns you. Contact the clinical team for guidance instead of trying to progress on your own.
                </p>
              </article>
            </div>
          </div>
        </div>
      </section>

      {/* Guide Disclaimer */}
      <section className="guide-disclaimer">
        <div className="shell">
          <span aria-hidden="true">i</span>
          <p>
            <strong>Your personal plan comes first.</strong> These guides provide general education. Recovery varies by procedure and patient; follow the instructions given by your surgeon, anaesthesia team and physiotherapist.
          </p>
          <Link to="/contact">
            Ask a question{' '}
            <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className="icon">
              <path d="M5 12h14M14 7l5 5-5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>
      </section>
    </div>
  );
}
