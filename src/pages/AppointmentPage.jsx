import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import emailjs from '@emailjs/browser';

export default function AppointmentPage() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: 'Knee Care & Arthroscopy',
    consultType: 'In-Clinic Consultation',
    date: '',
    time: '',
    reason: '',
    consent: true
  });

  const [honeypot, setHoneypot] = useState('');
  const [submittedData, setSubmittedData] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [fieldErrors, setFieldErrors] = useState({});

  const serviceOptions = [
    'Knee Care & Arthroscopy',
    'Total Knee Replacement (Robotic / Fast-Track)',
    'Hip Preservation & Replacement',
    'Shoulder Arthroscopy & Rotator Cuff Repair',
    'Sports Ligament Reconstruction (ACL / PCL)',
    'Joint Pain & Arthritis Evaluation',
    'Second Opinion on Orthopaedic Surgery'
  ];

  const consultTypes = [
    'In-Clinic Consultation',
    'Second Opinion Review',
    'Post-Surgery Follow-up'
  ];

  // Timezone-safe local date for min date attribute
  const getTodayLocal = () => {
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  };

  // Format date to readable string (e.g. 28 August 2026) for EmailJS
  const formatAppointmentDate = (dateValue) => {
    if (!dateValue) return 'Date to be coordinated';
    try {
      const [year, month, day] = dateValue.split('-');
      const date = new Date(Number(year), Number(month) - 1, Number(day));
      return date.toLocaleDateString('en-IN', {
        day: '2-digit',
        month: 'long',
        year: 'numeric'
      });
    } catch {
      return dateValue;
    }
  };

  // Format 24h time input (e.g. 11:30) to user-friendly 12h format (e.g. 11:30 AM)
  const formatAppointmentTime = (timeValue) => {
    if (!timeValue) return 'Time to be coordinated';
    if (timeValue.includes('AM') || timeValue.includes('PM')) return timeValue;
    try {
      const [hourStr, minuteStr] = timeValue.split(':');
      let hour = parseInt(hourStr, 10);
      if (isNaN(hour)) return timeValue;
      const ampm = hour >= 12 ? 'PM' : 'AM';
      hour = hour % 12 || 12;
      const min = minuteStr ? minuteStr.padStart(2, '0') : '00';
      return `${hour}:${min} ${ampm}`;
    } catch {
      return timeValue;
    }
  };

  const normalizePhone = (phone) => phone.replace(/[\s()-]/g, '');

  const validateForm = () => {
    const errors = {};

    const trimmedName = formData.name.trim();
    if (!trimmedName || trimmedName.length < 2) {
      errors.name = 'Please enter your full name.';
    }

    const cleanPhone = normalizePhone(formData.phone);
    const phoneRegex = /^(\+?\d{1,4})?[6-9]\d{9}$/;
    if (!cleanPhone || (!phoneRegex.test(cleanPhone) && cleanPhone.length < 10)) {
      errors.phone = 'Please enter a valid 10-digit mobile number.';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email || !emailRegex.test(formData.email.trim())) {
      errors.email = 'Please enter a valid email address.';
    }

    if (!formData.date) {
      errors.date = 'Please select a preferred date.';
    } else if (formData.date < getTodayLocal()) {
      errors.date = 'Date cannot be in the past.';
    }

    if (!formData.time) {
      errors.time = 'Please select or enter your preferred time.';
    }

    if (!formData.service) {
      errors.service = 'Please select a service.';
    }

    if (!formData.consent) {
      errors.consent = 'Please confirm consent to proceed.';
    }

    return errors;
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));

    if (fieldErrors[name]) {
      setFieldErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (honeypot) {
      console.warn('Bot submission blocked.');
      return;
    }

    if (loading) return;

    const errors = validateForm();
    if (Object.keys(errors).length > 0) {
      setFieldErrors(errors);
      setErrorMessage('Please complete all required fields correctly.');
      return;
    }

    setFieldErrors({});
    setErrorMessage('');
    setLoading(true);

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    const formattedDate = formatAppointmentDate(formData.date);
    const formattedTime = formatAppointmentTime(formData.time);
    const referenceId = `DHS-${Math.floor(1000 + Math.random() * 9000)}`;

    const templateParams = {
      patient_name: formData.name.trim(),
      patient_phone: formData.phone.trim(),
      patient_email: formData.email.trim(),
      appointment_date: formattedDate,
      appointment_time: formattedTime,
      service: `${formData.service} (${formData.consultType})`,
      message: formData.reason.trim() || 'No additional notes provided.'
    };

    try {
      if (serviceId && templateId && publicKey && publicKey !== 'YOUR_EMAILJS_PUBLIC_KEY') {
        // Send SINGLE EmailJS request (linked Auto-Reply handles patient confirmation)
        await emailjs.send(serviceId, templateId, templateParams, {
          publicKey: publicKey
        });
      } else {
        await new Promise((resolve) => setTimeout(resolve, 800));
      }

      setSubmittedData({
        ...templateParams,
        referenceId,
        rawDate: formData.date
      });
      setSubmitted(true);

      // Reset form fields
      setFormData({
        name: '',
        phone: '',
        email: '',
        service: 'Knee Care & Arthroscopy',
        consultType: 'In-Clinic Consultation',
        date: '',
        time: '',
        reason: '',
        consent: true
      });
    } catch (error) {
      console.error('EmailJS appointment submission failed:', error);
      setErrorMessage(
        'We were unable to submit your request at this moment. Please call our clinic directly at +91 93167 53985 for immediate booking.'
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="appt-page-container">
      {/* Background Lighting Rig */}
      <div className="appt-ambient-canvas" aria-hidden="true">
        <div className="appt-glow-beam beam-left" />
        <div className="appt-glow-beam beam-right" />
        <div className="appt-grid-texture" />
      </div>

      <div className="appt-shell">
        <div className="appt-two-column-layout">
          {/* LEFT COLUMN: Doctor Authority & Consultation Guide */}
          <aside className="appt-info-column">
            <h1 className="appt-hero-heading">
              Expert joint care,
              <br />
              <span className="appt-hero-accent">tailored to your recovery.</span>
            </h1>

            <p className="appt-hero-lead">
              Book a comprehensive clinical consultation with <strong>Dr. Harshil Shah</strong>. Our medical desk coordinates slot confirmation directly with you within 2 hours.
            </p>

            {/* Doctor Credentials Card */}
            <div className="appt-doctor-card">
              <div className="appt-doctor-avatar">
                <span>HS</span>
              </div>
              <div className="appt-doctor-meta">
                <strong>Dr. Harshil Shah</strong>
                <span>M.S. (Orthopaedics) · Arthroscopy & Joint Replacement Surgeon</span>
                <div className="appt-badge-row">
                  <span className="appt-mini-tag">Knee, Hip & Shoulder</span>
                  <span className="appt-mini-tag">Gold Medalist</span>
                </div>
              </div>
            </div>

            {/* Structured 3-Step Consultation Workflow */}
            <div className="appt-workflow-card">
              <h2 className="appt-workflow-title">What happens after you submit?</h2>
              <ol className="appt-timeline">
                <li className="appt-timeline-item">
                  <div className="appt-timeline-marker">1</div>
                  <div className="appt-timeline-content">
                    <strong>Request Received & Triaged</strong>
                    <p>Our clinical desk reviews your concern and slot preference.</p>
                  </div>
                </li>
                <li className="appt-timeline-item">
                  <div className="appt-timeline-marker">2</div>
                  <div className="appt-timeline-content">
                    <strong>Direct Coordinator Call</strong>
                    <p>We confirm your clinic timing and answer your pre-visit questions.</p>
                  </div>
                </li>
                <li className="appt-timeline-item">
                  <div className="appt-timeline-marker">3</div>
                  <div className="appt-timeline-content">
                    <strong>In-Depth Consultation</strong>
                    <p>Doctor evaluates your condition, previous X-rays/MRI, and guides next steps.</p>
                  </div>
                </li>
              </ol>
            </div>

            {/* Urgent Phone Help Box */}
            <div className="appt-direct-call-box">
              <div className="appt-call-icon-wrap">
                <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
              </div>
              <div className="appt-call-copy">
                <small>Need urgent scheduling assistance?</small>
                <a href="tel:+919316753985" className="appt-call-link">
                  +91 93167 53985
                </a>
              </div>
            </div>
          </aside>

          {/* RIGHT COLUMN: Senior-Level Form Card / Success Receipt */}
          <main className="appt-form-column">
            <div className="appt-card-surface">
              {/* Form Top Header */}
              <header className="appt-card-header">
                <div>
                  <span className="appt-kicker">PATIENT INTAKE</span>
                  <h2 className="appt-card-title">Book an Appointment</h2>
                </div>
                <span className="appt-card-caption">Zero wait-time coordination</span>
              </header>

              {/* Inline Error Notice */}
              {errorMessage && (
                <div className="appt-alert-banner" role="alert">
                  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="#dc2626" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <line x1="12" y1="8" x2="12" y2="12" />
                    <line x1="12" y1="16" x2="12.01" y2="16" />
                  </svg>
                  <span>{errorMessage}</span>
                </div>
              )}

              {/* SUCCESS RECEIPT STATE (Apple / Stripe Grade) */}
              {submitted && submittedData ? (
                <div className="appt-receipt-view" role="status">
                  <div className="appt-receipt-icon-wrap">
                    <svg viewBox="0 0 24 24" width="30" height="30" fill="none" stroke="#059669" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>

                  <div className="appt-receipt-headline">
                    <h3>Appointment Request Received</h3>
                    <p>
                      Thank you, <strong>{submittedData.patient_name}</strong>. Your consultation details have been sent to Dr. Harshil Shah’s desk.
                    </p>
                  </div>

                  {/* Summary Breakdown Card */}
                  <div className="appt-receipt-breakdown">
                    <div className="appt-receipt-row">
                      <span className="appt-receipt-label">Reference ID</span>
                      <span className="appt-receipt-ref">{submittedData.referenceId}</span>
                    </div>

                    <div className="appt-receipt-divider" />

                    <div className="appt-receipt-row">
                      <span className="appt-receipt-label">Specialty / Service</span>
                      <span className="appt-receipt-val">{submittedData.service}</span>
                    </div>

                    <div className="appt-receipt-row">
                      <span className="appt-receipt-label">Preferred Date & Time</span>
                      <span className="appt-receipt-val">
                        {submittedData.appointment_date} · {submittedData.appointment_time}
                      </span>
                    </div>

                    <div className="appt-receipt-row">
                      <span className="appt-receipt-label">Contact Registered</span>
                      <span className="appt-receipt-val">
                        {submittedData.patient_phone}
                      </span>
                    </div>

                    <div className="appt-receipt-row">
                      <span className="appt-receipt-label">Confirmation Email</span>
                      <span className="appt-receipt-val">
                        {submittedData.patient_email}
                      </span>
                    </div>
                  </div>

                  {/* Clarification Box */}
                  <div className="appt-receipt-next-note">
                    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="#0284c7" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10" />
                      <line x1="12" y1="16" x2="12" y2="12" />
                      <line x1="12" y1="8" x2="12.01" y2="8" />
                    </svg>
                    <p>
                      A confirmation email has been dispatched. Our team will contact you on <strong>{submittedData.patient_phone}</strong> to confirm your final consultation schedule.
                    </p>
                  </div>

                  {/* Action Buttons */}
                  <div className="appt-receipt-actions">
                    <button
                      type="button"
                      className="appt-btn-primary"
                      onClick={() => {
                        setSubmitted(false);
                        setSubmittedData(null);
                      }}
                    >
                      <span>Book Another Appointment</span>
                      <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M23 4v6h-6M1 20v-6h6" />
                        <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15" />
                      </svg>
                    </button>
                    <a
                      href="https://wa.me/919316753985"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="appt-btn-secondary"
                    >
                      <span>Chat on WhatsApp</span>
                    </a>
                  </div>
                </div>
              ) : (
                /* INTAKE FORM (Executive Design) */
                <form className="appt-intake-form" onSubmit={handleSubmit} noValidate>
                  {/* Honeypot anti-spam */}
                  <input
                    type="text"
                    name="website_url"
                    value={honeypot}
                    onChange={(e) => setHoneypot(e.target.value)}
                    tabIndex="-1"
                    autoComplete="off"
                    aria-hidden="true"
                    className="appt-honeypot"
                  />

                  {/* Row 0: Consultation Type Selector */}
                  <div className="appt-form-field">
                    <span className="appt-field-label">Consultation Type</span>
                    <div className="appt-type-segment">
                      {consultTypes.map((type) => (
                        <button
                          key={type}
                          type="button"
                          className={`appt-type-btn ${formData.consultType === type ? 'is-active' : ''}`}
                          onClick={() => setFormData((prev) => ({ ...prev, consultType: type }))}
                        >
                          {type}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Row 1: Full Name & Mobile */}
                  <div className="appt-grid-row">
                    <div className="appt-form-field">
                      <label htmlFor="patient_name" className="appt-field-label">
                        Full Name <span className="appt-req-star">*</span>
                      </label>
                      <div className={`appt-input-container ${fieldErrors.name ? 'is-invalid' : ''}`}>
                        <svg className="appt-field-icon" viewBox="0 0 24 24" width="17" height="17" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                          <circle cx="12" cy="7" r="4" />
                        </svg>
                        <input
                          id="patient_name"
                          name="name"
                          type="text"
                          required
                          autoComplete="name"
                          placeholder="e.g. Rajesh Patel"
                          value={formData.name}
                          onChange={handleChange}
                          className="appt-text-input"
                          aria-invalid={Boolean(fieldErrors.name)}
                        />
                      </div>
                      {fieldErrors.name && <span className="appt-error-hint">{fieldErrors.name}</span>}
                    </div>

                    <div className="appt-form-field">
                      <label htmlFor="patient_phone" className="appt-field-label">
                        Mobile Number <span className="appt-req-star">*</span>
                      </label>
                      <div className={`appt-input-container ${fieldErrors.phone ? 'is-invalid' : ''}`}>
                        <svg className="appt-field-icon" viewBox="0 0 24 24" width="17" height="17" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                        </svg>
                        <input
                          id="patient_phone"
                          name="phone"
                          type="tel"
                          inputMode="tel"
                          required
                          autoComplete="tel"
                          placeholder="+91 98765 43210"
                          value={formData.phone}
                          onChange={handleChange}
                          className="appt-text-input"
                          aria-invalid={Boolean(fieldErrors.phone)}
                        />
                      </div>
                      {fieldErrors.phone && <span className="appt-error-hint">{fieldErrors.phone}</span>}
                    </div>
                  </div>

                  {/* Row 2: Email & Area of Concern */}
                  <div className="appt-grid-row">
                    <div className="appt-form-field">
                      <label htmlFor="patient_email" className="appt-field-label">
                        Email Address <span className="appt-req-star">*</span>
                      </label>
                      <div className={`appt-input-container ${fieldErrors.email ? 'is-invalid' : ''}`}>
                        <svg className="appt-field-icon" viewBox="0 0 24 24" width="17" height="17" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                          <polyline points="22,6 12,13 2,6" />
                        </svg>
                        <input
                          id="patient_email"
                          name="email"
                          type="email"
                          inputMode="email"
                          required
                          autoComplete="email"
                          placeholder="rajesh@example.com"
                          value={formData.email}
                          onChange={handleChange}
                          className="appt-text-input"
                          aria-invalid={Boolean(fieldErrors.email)}
                        />
                      </div>
                      {fieldErrors.email && <span className="appt-error-hint">{fieldErrors.email}</span>}
                    </div>

                    <div className="appt-form-field">
                      <label htmlFor="patient_service" className="appt-field-label">
                        Area of Concern / Specialty <span className="appt-req-star">*</span>
                      </label>
                      <div className={`appt-input-container ${fieldErrors.service ? 'is-invalid' : ''}`}>
                        <svg className="appt-field-icon" viewBox="0 0 24 24" width="17" height="17" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <circle cx="12" cy="12" r="10" />
                          <line x1="12" y1="8" x2="12" y2="12" />
                          <line x1="12" y1="16" x2="12.01" y2="16" />
                        </svg>
                        <select
                          id="patient_service"
                          name="service"
                          value={formData.service}
                          onChange={handleChange}
                          className="appt-text-input appt-select-input"
                        >
                          {serviceOptions.map((srv) => (
                            <option key={srv} value={srv}>
                              {srv}
                            </option>
                          ))}
                        </select>
                      </div>
                      {fieldErrors.service && <span className="appt-error-hint">{fieldErrors.service}</span>}
                    </div>
                  </div>

                  {/* Row 3: Date & Time as Direct Clean Input Fields */}
                  <div className="appt-grid-row">
                    <div className="appt-form-field">
                      <label htmlFor="patient_date" className="appt-field-label">
                        Preferred Date <span className="appt-req-star">*</span>
                      </label>
                      <div className={`appt-input-container ${fieldErrors.date ? 'is-invalid' : ''}`}>
                        <svg className="appt-field-icon" viewBox="0 0 24 24" width="17" height="17" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                          <line x1="16" y1="2" x2="16" y2="6" />
                          <line x1="8" y1="2" x2="8" y2="6" />
                          <line x1="3" y1="10" x2="21" y2="10" />
                        </svg>
                        <input
                          id="patient_date"
                          type="date"
                          name="date"
                          min={getTodayLocal()}
                          value={formData.date}
                          onChange={handleChange}
                          className="appt-text-input"
                          aria-invalid={Boolean(fieldErrors.date)}
                        />
                      </div>
                      {fieldErrors.date && <span className="appt-error-hint">{fieldErrors.date}</span>}
                    </div>

                    <div className="appt-form-field">
                      <label htmlFor="patient_time" className="appt-field-label">
                        Preferred Time <span className="appt-req-star">*</span>
                      </label>
                      <div className={`appt-input-container ${fieldErrors.time ? 'is-invalid' : ''}`}>
                        <svg className="appt-field-icon" viewBox="0 0 24 24" width="17" height="17" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <circle cx="12" cy="12" r="10" />
                          <polyline points="12 6 12 12 16 14" />
                        </svg>
                        <input
                          id="patient_time"
                          type="time"
                          name="time"
                          required
                          value={formData.time}
                          onChange={handleChange}
                          className="appt-text-input"
                          aria-invalid={Boolean(fieldErrors.time)}
                        />
                      </div>
                      {fieldErrors.time && <span className="appt-error-hint">{fieldErrors.time}</span>}
                    </div>
                  </div>

                  {/* Row 4: Medical Symptoms & Notes */}
                  <div className="appt-form-field">
                    <label htmlFor="patient_reason" className="appt-field-label">
                      Describe Your Symptoms or Medical History <span className="appt-opt-tag">(Optional)</span>
                    </label>
                    <div className="appt-input-container appt-textarea-container">
                      <textarea
                        id="patient_reason"
                        name="reason"
                        rows="3"
                        placeholder="e.g. Left knee stiffness after walking for 15 mins; prior ligament tear history or MRI available..."
                        value={formData.reason}
                        onChange={handleChange}
                        className="appt-text-input appt-textarea-input"
                      />
                    </div>
                  </div>

                  {/* Row 5: Consent */}
                  <div className="appt-consent-group">
                    <label className="appt-consent-item">
                      <input
                        type="checkbox"
                        required
                        name="consent"
                        checked={formData.consent}
                        onChange={handleChange}
                        className="appt-custom-check"
                      />
                      <span className="appt-consent-text">
                        I consent to Dr. Harshil Shah’s clinical desk contacting me via Phone / WhatsApp to verify and confirm my consultation slot.
                      </span>
                    </label>
                    {fieldErrors.consent && <span className="appt-error-hint">{fieldErrors.consent}</span>}
                  </div>

                  {/* Row 6: Submit Button */}
                  <button
                    className="appt-btn-primary appt-submit-btn"
                    type="submit"
                    disabled={loading}
                  >
                    {loading ? (
                      <>
                        <span className="appt-spinner" aria-hidden="true" />
                        <span>Sending Request to Clinic...</span>
                      </>
                    ) : (
                      <>
                        <span>Submit Appointment Request</span>
                        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round" className="appt-btn-icon">
                          <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                      </>
                    )}
                  </button>

                  {/* Security Guarantee */}
                  <footer className="appt-security-seal">
                    <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="#0284c7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                    </svg>
                    <span>Confidential Medical Intake · Direct Clinic Desk · No Third-Party Data Sharing</span>
                  </footer>
                </form>
              )}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
