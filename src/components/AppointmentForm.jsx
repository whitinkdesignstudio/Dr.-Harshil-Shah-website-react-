import React, { useState } from 'react';

export default function AppointmentForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    concern: 'Knee',
    preferredDate: '',
    notes: '',
    consent: true
  });

  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

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
      alert('Please fill in your name and phone number.');
      return;
    }
    setSubmitting(true);
    // Simulate booking submission
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 800);
  };

  return (
    <div className="form-panel">
      <div className="form-heading">
        <span>Request consultation</span>
        <p>Private &amp; confidential</p>
      </div>

      {submitted ? (
        <div className="form-success-banner" style={{ marginTop: '24px' }}>
          <div>
            <strong style={{ display: 'block', fontSize: '15px', color: 'var(--teal-dark)' }}>
              Thank You, {formData.name}!
            </strong>
            <p style={{ margin: '6px 0 0', color: 'var(--ink)' }}>
              Your appointment request for <strong>{formData.concern} Consultation</strong> has been received. Our clinic coordinator will contact you at <strong>{formData.phone}</strong> shortly to confirm your scheduled slot.
            </p>
            <button
              type="button"
              className="button button-small"
              style={{ marginTop: '16px', background: 'var(--teal)' }}
              onClick={() => {
                setSubmitted(false);
                setFormData({
                  name: '',
                  phone: '',
                  email: '',
                  concern: 'Knee',
                  preferredDate: '',
                  notes: '',
                  consent: true
                });
              }}
            >
              Book Another Appointment
            </button>
          </div>
        </div>
      ) : (
        <form className="appointment-form" onSubmit={handleSubmit}>
          <div className="form-row">
            <label>
              <span>Your Name *</span>
              <input
                type="text"
                name="name"
                required
                placeholder="e.g. Rajesh Patel"
                value={formData.name}
                onChange={handleChange}
              />
            </label>
            <label>
              <span>Phone Number *</span>
              <input
                type="tel"
                name="phone"
                required
                placeholder="+91 98765 43210"
                value={formData.phone}
                onChange={handleChange}
              />
            </label>
          </div>

          <div className="form-row">
            <label>
              <span>Email Address</span>
              <input
                type="email"
                name="email"
                placeholder="your.email@example.com"
                value={formData.email}
                onChange={handleChange}
              />
            </label>
            <label>
              <span>Area of Concern</span>
              <select
                name="concern"
                value={formData.concern}
                onChange={handleChange}
              >
                <option value="Knee">Knee (Ligament / Meniscus / Arthritis / Pain)</option>
                <option value="Hip">Hip (AVN / Arthritis / Joint replacement)</option>
                <option value="Shoulder">Shoulder (Dislocation / Rotator Cuff / Pain)</option>
                <option value="Sports Injury">Sports Injury / Arthroscopy</option>
                <option value="Second Opinion">Second Opinion on Surgery</option>
                <option value="Other">Other Joint Condition</option>
              </select>
            </label>
          </div>

          <label>
            <span>Preferred Date / Timeframe</span>
            <input
              type="date"
              name="preferredDate"
              value={formData.preferredDate}
              onChange={handleChange}
            />
          </label>

          <label>
            <span>Brief description of symptoms / reports (Optional)</span>
            <textarea
              name="notes"
              rows="3"
              placeholder="E.g., Left knee swelling for 3 weeks after football injury; MRI available."
              value={formData.notes}
              onChange={handleChange}
            />
          </label>

          <label className="consent">
            <input
              type="checkbox"
              name="consent"
              checked={formData.consent}
              onChange={handleChange}
              required
            />
            <span>
              I agree to be contacted by Dr. Harshil Shah's clinic team via phone / WhatsApp regarding my consultation request.
            </span>
          </label>

          <button
            type="submit"
            className="button form-submit"
            disabled={submitting}
            style={{ width: '100%', marginTop: '10px' }}
          >
            {submitting ? 'Submitting Request...' : 'Confirm Appointment Request'}
          </button>

          <div className="privacy-line">
            <span>🔒</span>
            <p>Your medical information is held strictly confidential and never shared.</p>
          </div>
        </form>
      )}
    </div>
  );
}
