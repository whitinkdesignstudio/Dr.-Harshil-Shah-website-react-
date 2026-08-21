import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function FaqPage() {
  const [openItems, setOpenItems] = useState([0]); // First item open by default

  const faqData = [
    {
      id: '01',
      question: 'What should I bring to my first consultation?',
      answer:
        'Bring any recent X-rays, MRI or CT reports, a list of current medicines and a brief note of when your symptoms started. Previous treatment records can also be helpful.'
    },
    {
      id: '02',
      question: 'Does every joint problem need surgery?',
      answer:
        'No. Many conditions may improve with medical treatment, activity changes or appropriate rehabilitation. Surgery is considered only after the diagnosis, expected benefits and suitable alternatives are discussed.'
    },
    {
      id: '03',
      question: 'Can I request a second opinion?',
      answer:
        'Yes. Bring your reports and previous medical notes so the diagnosis and available options can be reviewed carefully.'
    },
    {
      id: '04',
      question: 'How is the recovery plan decided?',
      answer:
        'Recovery depends on your condition, procedure if any, general health and daily goals. You will receive guidance on activity, follow-up and physiotherapy based on your individual situation.'
    },
    {
      id: '05',
      question: 'Can the website diagnose my pain?',
      answer:
        'No. Website information is general education only. A safe diagnosis needs medical history, physical examination and sometimes appropriate imaging.'
    }
  ];

  const toggleItem = (idx) => {
    setOpenItems((prev) =>
      prev.includes(idx) ? prev.filter((i) => i !== idx) : [...prev, idx]
    );
  };

  return (
    <div>
      {/* Visual Hero */}
      <section className="inner-hero compact-hero compact-hero-visual">
        <div className="inner-orbit"></div>
        <div className="shell compact-visual-hero-grid">
          <div>
            <div className="breadcrumb">
              <Link to="/">Home</Link>
              <span>/</span> Common questions
            </div>
            <div className="eyebrow">
              <span></span> Helpful information
            </div>
            <h1>
              Know what to
              <br />
              <em>expect.</em>
            </h1>
            <p>
              Simple answers to common questions before an orthopaedic consultation.
            </p>
          </div>
          <div className="page-hero-art" aria-hidden="true">
            <div className="page-art-orbit page-art-orbit-one"></div>
            <div className="page-art-orbit page-art-orbit-two"></div>
            <img className="page-art-model page-art-primary" src="/knee-3d.png" alt="" />
            <img className="page-art-model page-art-secondary" src="/hip-3d.png" alt="" />
            <span className="page-art-caption">Knee · Hip · Shoulder</span>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section faq-section">
        <div className="shell faq-grid">
          <div className="faq-aside">
            <div className="eyebrow">
              <span></span> Patient guide
            </div>
            <h2>
              Questions are
              <br />
              <em>always welcome.</em>
            </h2>
            <p>
              Your consultation should leave you with a clearer understanding of the diagnosis and next steps.
            </p>
            <Link className="button button-outline" to="/appointment">
              Ask at consultation
            </Link>
            <Link
              className="faq-guide-preview faq-guide-preview-3d"
              to="/patient-guides#quiet-knee"
            >
              <img src="/knee-3d.png" alt="3D knee joint visualization" />
              <span>
                <small>Recovery guidance</small>
                <strong>Key do’s and don’ts</strong>
                <i>Read guidance →</i>
              </span>
            </Link>
          </div>

          <div className="faq-list">
            {faqData.map((faq, idx) => {
              const isOpen = openItems.includes(idx);
              return (
                <div
                  key={faq.id}
                  className={`faq-accordion-item ${isOpen ? 'is-open' : ''}`}
                >
                  <button
                    type="button"
                    className="faq-accordion-button"
                    onClick={() => toggleItem(idx)}
                    aria-expanded={isOpen}
                  >
                    <span className="faq-accordion-num">{faq.id}</span>
                    <strong className="faq-accordion-title">{faq.question}</strong>
                    <i className="faq-accordion-icon">+</i>
                  </button>
                  <div className="faq-accordion-body">
                    <p>{faq.answer}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
