import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function AppointmentPage() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    date: '',
    time: '',
    reason: '',
    consent: false
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) {
      alert('Please enter your name and phone number.');
      return;
    }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 700);
  };

  return (
    <div>
      <section className="appointment-section">
        <div className="shell appointment-grid">
          {/* Left Column Info */}
          <div className="appointment-copy">
            <div className="breadcrumb breadcrumb-light">
              <Link to="/">Home</Link>
              <span>/</span> Appointment
            </div>
            <div className="eyebrow eyebrow-light">
              <span></span> Appointment request
            </div>
            <h1>
              Let’s understand
              <br />
              <em>what’s holding you back.</em>
            </h1>
            <p>
              Share a few details and your preferred time. Our clinic coordinator will review your request and contact you directly to confirm your consultation.
            </p>

            <div className="appointment-help">
              <span>Before your visit</span>
              <ul>
                <li>Keep recent reports or scans ready</li>
                <li>Bring a list of current medicines</li>
                <li>Write down your most important questions</li>
              </ul>
            </div>

            <a href="tel:+919316753985" className="appointment-phone">
              <small>Prefer to call?</small>
              <strong>+91 93167 53985</strong>
            </a>

            <div className="appointment-joint-band" aria-hidden="true">
              <img src="/knee-3d.png" alt="3D Knee" />
              <img src="/hip-3d.png" alt="3D Hip" />
              <img src="/shoulder-3d.png" alt="3D Shoulder" />
              <span>Knee · Hip · Shoulder</span>
            </div>
          </div>

          {/* Right Column Form */}
          <div className="form-panel">
            <div className="form-heading">
              <span>Request a consultation</span>
              <p>Fields marked * are required.</p>
            </div>

            {submitted ? (
              <div className="form-success-banner" style={{ marginTop: '24px' }}>
                <div>
                  <strong style={{ fontSize: '16px', display: 'block', color: 'var(--teal-dark)' }}>
                    Appointment Request Received!
                  </strong>
                  <p style={{ margin: '8px 0', color: 'var(--ink)' }}>
                    Thank you, <strong>{formData.name}</strong>. Our team will contact you at <strong>{formData.phone}</strong> to confirm your slot for {formData.date || 'the requested date'}.
                  </p>
                  <button
                    type="button"
                    className="button button-small"
                    style={{ marginTop: '12px', background: 'var(--teal)' }}
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: '',
                        phone: '',
                        date: '',
                        time: '',
                        reason: '',
                        consent: false
                      });
                    }}
                  >
                    Submit Another Request
                  </button>
                </div>
              </div>
            ) : (
              <form className="appointment-form" onSubmit={handleSubmit}>
                <div className="form-row">
                  <label>
                    <span>Full name *</span>
                    <input
                      required
                      autoComplete="name"
                      placeholder="Your name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                    />
                  </label>
                  <label>
                    <span>Phone number *</span>
                    <input
                      type="tel"
                      required
                      autoComplete="tel"
                      placeholder="+91 98765 43210"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </label>
                </div>

                <div className="form-row">
                  <label>
                    <span>Preferred date</span>
                    <input
                      type="date"
                      name="date"
                      value={formData.date}
                      onChange={handleChange}
                    />
                  </label>
                  <label>
                    <span>Preferred time</span>
                    <select
                      name="time"
                      value={formData.time}
                      onChange={handleChange}
                    >
                      <option value="">Select a time</option>
                      <option value="Morning">Morning (10:00 AM - 1:00 PM)</option>
                      <option value="Afternoon">Afternoon (2:00 PM - 5:00 PM)</option>
                      <option value="Evening">Evening (5:30 PM - 8:30 PM)</option>
                    </select>
                  </label>
                </div>

                <label>
                  <span>Reason for consultation</span>
                  <textarea
                    name="reason"
                    rows="4"
                    placeholder="Briefly describe your pain, injury or concern (e.g. knee arthritis, shoulder dislocation, ligament tear)..."
                    value={formData.reason}
                    onChange={handleChange}
                  ></textarea>
                </label>

                <label className="consent">
                  <input
                    type="checkbox"
                    required
                    name="consent"
                    checked={formData.consent}
                    onChange={handleChange}
                  />
                  <span>
                    I understand this is an appointment request, not emergency medical support.
                  </span>
                </label>

                <button
                  className="button form-submit"
                  type="submit"
                  disabled={loading}
                  style={{ width: '100%' }}
                >
                  {loading ? 'Sending Request...' : 'Send appointment request'} <span aria-hidden="true">→</span>
                </button>
              </form>
            )}

            <div className="privacy-line">
              <span>✦</span>
              <p>Your details are used only to respond to this appointment request.</p>
            </div>

            <Link
              className="appointment-guide-preview appointment-guide-preview-3d"
              to="/patient-guides"
            >
              <img src="/knee-3d.png" alt="3D knee joint visualization" />
              <span>
                <small>While you wait</small>
                <strong>Read patient recovery guidance</strong>
                <i>Open library →</i>
              </span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
