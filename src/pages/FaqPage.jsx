import React, { useState, useMemo, useRef, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { faqData, FAQ_CATEGORIES, featuredFaqIds } from '../data/faqData';

// ─── CATEGORIES (excluding "All Questions") ───────────────────────────────────
const TOPIC_CATEGORIES = FAQ_CATEGORIES.filter((c) => c !== 'All Questions');

// Helper: convert category name → slug id
const catToId = (cat) =>
  `faq-section-${cat.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '')}`;

// ─── FAQ ITEM (Accordion Row) ─────────────────────────────────────────────────
function FaqItem({ item, isOpen, onToggle, searchQuery }) {
  const panelId = `faq-panel-${item.id}`;
  const btnId = `faq-btn-${item.id}`;

  const highlightText = useCallback(
    (text) => {
      if (!searchQuery || searchQuery.length < 2) return text;
      const escaped = searchQuery.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
      const parts = text.split(new RegExp(`(${escaped})`, 'gi'));
      return parts.map((part, i) =>
        part.toLowerCase() === searchQuery.toLowerCase() ? (
          <mark key={i} className="faq-search-highlight">{part}</mark>
        ) : (
          part
        )
      );
    },
    [searchQuery]
  );

  return (
    <div className={`faq-item ${isOpen ? 'faq-item--open' : ''}`} id={`faq-${item.id}`}>
      <button
        type="button"
        id={btnId}
        className="faq-item-trigger"
        aria-expanded={isOpen}
        aria-controls={panelId}
        onClick={onToggle}
      >
        <span className="faq-item-question">{highlightText(item.question)}</span>
        <span className="faq-item-icon" aria-hidden="true">
          <span className="faq-icon-line faq-icon-h" />
          <span className="faq-icon-line faq-icon-v" />
        </span>
      </button>
      <div
        id={panelId}
        role="region"
        aria-labelledby={btnId}
        className="faq-item-panel"
      >
        <div className="faq-item-answer">
          <p>{item.answer}</p>
          {(item.category === 'Appointments' || item.id === 'general-contact') && (
            <div className="faq-item-cta-row">
              <Link to="/appointment" className="faq-item-cta-link">
                Book Appointment
                <svg aria-hidden="true" viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M14 7l5 5-5 5" /></svg>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

// ─── FAQ GROUP ────────────────────────────────────────────────────────────────
const FaqGroup = React.forwardRef(function FaqGroup(
  { category, items, openId, onToggle, searchQuery, globalIndex },
  ref
) {
  const num = String(globalIndex + 1).padStart(2, '0');
  return (
    <section
      id={catToId(category)}
      className="faq-group"
      data-category={category}
      ref={ref}
    >
      <header className="faq-group-header">
        <span className="faq-group-num">{num}</span>
        <div>
          <h2 className="faq-group-title">{category}</h2>
          <p className="faq-group-count">
            {items.length} {items.length === 1 ? 'Question' : 'Questions'}
          </p>
        </div>
      </header>
      <div className="faq-group-list">
        {items.map((item) => (
          <FaqItem
            key={item.id}
            item={item}
            isOpen={openId === item.id}
            onToggle={() => onToggle(item.id)}
            searchQuery={searchQuery}
          />
        ))}
      </div>
    </section>
  );
});

// ─── FEATURED CARD ────────────────────────────────────────────────────────────
function FeaturedCard({ item, index, onActivate }) {
  return (
    <button
      type="button"
      className="faq-featured-card"
      onClick={() => onActivate(item.id)}
      aria-label={`View answer: ${item.question}`}
    >
      <span className="faq-featured-num">0{index + 1}</span>
      <span className="faq-featured-cat">{item.category}</span>
      <span className="faq-featured-q">{item.question}</span>
      <span className="faq-featured-arrow" aria-hidden="true">
        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M5 12h14M14 7l5 5-5 5" />
        </svg>
      </span>
    </button>
  );
}

// ─── MAIN PAGE ────────────────────────────────────────────────────────────────
export default function FaqPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All Questions');
  const [openFaqId, setOpenFaqId] = useState(null);
  const [activeSection, setActiveSection] = useState('');
  const searchRef = useRef(null);
  const scrollContainerRef = useRef(null); // Right-panel scroll container
  const sectionRefs = useRef({});           // Map: category → section element

  // ── Ctrl+K shortcut ──────────────────────────────────────────────────────
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        searchRef.current?.focus();
      }
      if (e.key === 'Escape' && document.activeElement === searchRef.current) {
        setSearchQuery('');
        searchRef.current?.blur();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // ── Normalize query ──────────────────────────────────────────────────────
  const normalizedQuery = searchQuery.trim().toLowerCase();

  // ── Filter FAQs ───────────────────────────────────────────────────────────
  const filteredFaqs = useMemo(() => {
    let items = faqData;
    if (selectedCategory !== 'All Questions') {
      items = items.filter((f) => f.category === selectedCategory);
    }
    if (normalizedQuery.length >= 2) {
      items = items.filter((f) =>
        f.question.toLowerCase().includes(normalizedQuery) ||
        f.answer.toLowerCase().includes(normalizedQuery) ||
        f.category.toLowerCase().includes(normalizedQuery) ||
        f.keywords.some((kw) => kw.toLowerCase().includes(normalizedQuery))
      );
    }
    return items;
  }, [selectedCategory, normalizedQuery]);

  // ── Grouped FAQs: ordered by canonical TOPIC_CATEGORIES order ────────────
  const groupedFaqs = useMemo(() => {
    const map = {};
    filteredFaqs.forEach((item) => {
      if (!map[item.category]) map[item.category] = [];
      map[item.category].push(item);
    });
    return TOPIC_CATEGORIES.filter((cat) => map[cat]).map((cat) => ({
      category: cat,
      items: map[cat],
    }));
  }, [filteredFaqs]);

  // ── Featured items ───────────────────────────────────────────────────────
  const featuredItems = useMemo(
    () =>
      featuredFaqIds
        .map((id) => faqData.find((f) => f.id === id))
        .filter(Boolean)
        .slice(0, 6),
    []
  );

  // ── Toggle accordion ─────────────────────────────────────────────────────
  const handleToggle = useCallback((id) => {
    setOpenFaqId((prev) => (prev === id ? null : id));
  }, []);

  // ── Activate featured FAQ ─────────────────────────────────────────────────
  const handleFeaturedActivate = useCallback((id) => {
    const item = faqData.find((f) => f.id === id);
    if (!item) return;
    setSelectedCategory('All Questions');
    setSearchQuery('');
    setOpenFaqId(id);
    setActiveSection(item.category);

    setTimeout(() => {
      const isDesktop = window.matchMedia('(min-width: 961px)').matches;
      const explorerSection = document.querySelector('.faq-explorer');
      const container = scrollContainerRef.current;
      const targetFaq = document.getElementById(`faq-${id}`);

      // Scroll the main browser window down so the FAQ explorer section is visible
      if (explorerSection) {
        const explorerRect = explorerSection.getBoundingClientRect();
        const windowScrollTop = window.pageYOffset + explorerRect.top - 80;
        window.scrollTo({ top: Math.max(0, windowScrollTop), behavior: 'smooth' });
      }

      // On desktop, also scroll the inner scrollable container directly to this question
      if (isDesktop && container && targetFaq) {
        const containerRect = container.getBoundingClientRect();
        const targetRect = targetFaq.getBoundingClientRect();
        const scrollTop = container.scrollTop + (targetRect.top - containerRect.top) - 16;
        container.scrollTo({ top: Math.max(0, scrollTop), behavior: 'smooth' });
      } else if (targetFaq) {
        // On mobile or when no inner container, scroll directly to target question
        const y = targetFaq.getBoundingClientRect().top + window.pageYOffset - 120;
        window.scrollTo({ top: Math.max(0, y), behavior: 'smooth' });
      }

      // Highlight the targeted FAQ item briefly
      if (targetFaq) {
        targetFaq.classList.remove('faq-item--highlighted');
        // Trigger reflow to restart animation
        void targetFaq.offsetWidth;
        targetFaq.classList.add('faq-item--highlighted');
        setTimeout(() => {
          targetFaq.classList.remove('faq-item--highlighted');
        }, 2200);
      }
    }, 60);
  }, []);

  // ── IntersectionObserver — scoped to right scroll container on desktop ────
  useEffect(() => {
    const container = scrollContainerRef.current;
    const isDesktop = window.matchMedia('(min-width: 961px)').matches;
    const root = isDesktop && container ? container : null;

    const observers = [];
    TOPIC_CATEGORIES.forEach((cat) => {
      const el = document.getElementById(catToId(cat));
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(cat);
        },
        { root, rootMargin: '-15% 0px -60% 0px', threshold: 0 }
      );
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach((o) => o.disconnect());
    // Re-run when groupedFaqs changes or container mounts
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [groupedFaqs, scrollContainerRef.current]);

  // ── Sidebar / mobile-tab click ────────────────────────────────────────────
  const handleSidebarClick = useCallback((cat) => {
    setActiveSection(cat); // Immediate feedback
    setSelectedCategory('All Questions');
    setSearchQuery('');

    setTimeout(() => {
      const container = scrollContainerRef.current;
      const sectionEl = sectionRefs.current[cat];
      if (container && sectionEl) {
        // Desktop: scroll only the right panel using rect-based calculation
        const containerRect = container.getBoundingClientRect();
        const sectionRect = sectionEl.getBoundingClientRect();
        const scrollTop = container.scrollTop + (sectionRect.top - containerRect.top) - 24;
        container.scrollTo({ top: Math.max(0, scrollTop), behavior: 'smooth' });
      } else {
        // Mobile: scroll the whole page
        const el = document.getElementById(catToId(cat));
        if (el) {
          const y = el.getBoundingClientRect().top + window.pageYOffset - 160;
          window.scrollTo({ top: Math.max(0, y), behavior: 'smooth' });
        }
      }
    }, 60);
  }, []);

  const isSearching = normalizedQuery.length >= 2;
  const isFiltered = selectedCategory !== 'All Questions';
  const isExplorerMode = !isSearching && !isFiltered;

  // ── JSON-LD Structured Data ───────────────────────────────────────────────
  const jsonLd = useMemo(() => ({
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqData.slice(0, 20).map((f) => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: { '@type': 'Answer', text: f.answer },
    })),
  }), []);

  return (

    <>
      {/* JSON-LD FAQ Schema */}
      <script type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="faq-page">
        {/* ── HERO ──────────────────────────────────────────────────────────── */}
        <section className="faq-hero" aria-labelledby="faq-h1">
          <div className="shell faq-hero-grid">
            {/* Left */}
            <div className="faq-hero-left">
              <div className="breadcrumb">
                <Link to="/">Home</Link>
                <span>/</span> Patient Help Centre
              </div>
              <h1 id="faq-h1" className="faq-hero-heading">
                Clear answers before<br />
                <span className="faq-heading-accent">your consultation.</span>
              </h1>
              <p className="faq-hero-desc">
                Find information about appointments, consultations, reports,
                surgery, recovery, second opinions and follow-up care.
              </p>
              <p className="faq-hero-subdesc">
                For advice specific to your condition, our clinic team can help you
                arrange a consultation with Dr.&nbsp;Harshil Shah.
              </p>
            </div>

            {/* Right — visual */}
            <div className="faq-hero-right" aria-hidden="true">
              <div className="faq-hero-visual">
                <div className="faq-hero-orbit faq-hero-orbit-1" />
                <div className="faq-hero-orbit faq-hero-orbit-2" />
                <div className="faq-hero-art-wrap">
                  <img src="/knee-3d.webp" alt="" className="faq-hero-joint faq-hero-joint-primary" />
                  <img src="/shoulder-3d.webp" alt="" className="faq-hero-joint faq-hero-joint-secondary" />
                  <img src="/hip-3d.webp" alt="" className="faq-hero-joint faq-hero-joint-tertiary" />
                </div>
                <div className="faq-hero-card faq-hero-card-1">
                  <span className="fhc-dot" />
                  <span>First consultation</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── CATEGORY PILLS ─────────────────────────────────────────────── */}
        <nav className="faq-cat-nav" aria-label="FAQ categories">
          <div className="faq-cat-scroll shell">
            {FAQ_CATEGORIES.map((cat) => (
              <button
                key={cat}
                type="button"
                className={`faq-cat-pill ${selectedCategory === cat ? 'faq-cat-pill--active' : ''}`}
                onClick={() => setSelectedCategory(cat)}
                aria-pressed={selectedCategory === cat}
              >
                {cat}
              </button>
            ))}
          </div>
        </nav>

        {/* ── FEATURED QUESTIONS ──────────────────────────────────────────── */}
        {!isSearching && !isFiltered && (
          <section className="faq-featured-section" aria-labelledby="faq-featured-heading">
            <div className="shell">
              <header className="faq-section-header faq-section-header--left">
                <h2 id="faq-featured-heading" className="faq-section-title">Questions patients often ask</h2>
                <p className="faq-section-sub">Start here — the topics most people want to understand before meeting the doctor.</p>
              </header>
              <div className="faq-featured-grid">
                {featuredItems.map((item, idx) => (
                  <FeaturedCard
                    key={item.id}
                    item={item}
                    index={idx}
                    onActivate={handleFeaturedActivate}
                  />
                ))}
              </div>
            </div>
          </section>
        )}

        {/* ── SEARCH EMPTY STATE ───────────────────────────────────────────── */}
        {isSearching && filteredFaqs.length === 0 && (
          <section className="faq-empty-state">
            <div className="shell">
              <div className="faq-empty-inner">
                <svg aria-hidden="true" viewBox="0 0 48 48" width="52" height="52" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="faq-empty-icon">
                  <circle cx="22" cy="22" r="16" />
                  <path d="M38 38l-6-6" />
                  <path d="M22 16v6M22 28v.5" />
                </svg>
                <h2 className="faq-empty-title">We couldn't find a matching answer.</h2>
                <p className="faq-empty-desc">Try a different search term or contact the clinic for personal assistance.</p>
                <div className="faq-empty-actions">
                  <button type="button" className="button button-outline" onClick={() => setSearchQuery('')}>
                    Clear Search
                  </button>
                  <Link to="/contact" className="button">Contact Clinic</Link>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* ── MAIN EXPLORER ────────────────────────────────────────────────── */}
        {filteredFaqs.length > 0 && (
          <section className="faq-explorer" aria-labelledby="faq-explorer-heading">
            <div className="shell faq-explorer-grid">

              {/* ── LEFT SIDEBAR (desktop sticky — hidden on mobile) ── */}
              {isExplorerMode && (
                <aside className="faq-sidebar" aria-label="Browse FAQ by topic">
                  <p className="faq-sidebar-label">Browse by topic</p>
                  <nav aria-label="Topic navigation">
                    {TOPIC_CATEGORIES.map((cat, i) => {
                      const isActive = activeSection === cat;
                      const num = String(i + 1).padStart(2, '0');
                      return (
                        <button
                          key={cat}
                          type="button"
                          className={`faq-sidebar-item ${isActive ? 'faq-sidebar-item--active' : ''}`}
                          onClick={() => handleSidebarClick(cat)}
                          aria-current={isActive ? 'true' : undefined}
                        >
                          <span className="faq-sidebar-num">{num}</span>
                          <span className="faq-sidebar-text">{cat}</span>
                        </button>
                      );
                    })}
                  </nav>
                  <div className="faq-sidebar-cta">
                    <p>Need personal guidance?</p>
                    <Link to="/appointment" className="button button-small">Book Appointment</Link>
                  </div>
                </aside>
              )}

              {/* ── RIGHT CONTENT PANEL ── */}
              <div className={`faq-content ${!isExplorerMode ? 'faq-content--full' : ''}`}>
                {/* Inner scroll container — desktop only */}
                <div
                  className={`faq-content-scroll ${isExplorerMode ? 'faq-content-scroll--active' : ''}`}
                  ref={scrollContainerRef}
                >
                  {/* ── Search / filter mode ── */}
                  {!isExplorerMode && (
                    <>
                      <header className="faq-explorer-head">
                        <h2 id="faq-explorer-heading" className="faq-section-title">
                          {isSearching
                            ? <>Results for &ldquo;{searchQuery}&rdquo;</>
                            : selectedCategory}
                        </h2>
                        <button
                          type="button"
                          className="faq-reset-btn"
                          onClick={() => { setSearchQuery(''); setSelectedCategory('All Questions'); }}
                        >
                          ← Back to all questions
                        </button>
                      </header>
                      <div className="faq-group-list">
                        {filteredFaqs.map((item) => (
                          <FaqItem
                            key={item.id}
                            item={item}
                            isOpen={openFaqId === item.id}
                            onToggle={() => handleToggle(item.id)}
                            searchQuery={normalizedQuery}
                          />
                        ))}
                      </div>
                    </>
                  )}

                  {/* ── Explorer mode (default) ── */}
                  {isExplorerMode && (
                    <>
                      {/* Mobile horizontal topic selector */}
                      <div className="faq-mobile-topics" role="navigation" aria-label="Browse topics">
                        {TOPIC_CATEGORIES.map((cat) => (
                          <button
                            key={cat}
                            type="button"
                            className={`faq-mobile-topic-chip ${activeSection === cat ? 'faq-mobile-topic-chip--active' : ''}`}
                            onClick={() => handleSidebarClick(cat)}
                            aria-current={activeSection === cat ? 'true' : undefined}
                          >
                            {cat}
                          </button>
                        ))}
                      </div>

                      <header className="faq-explorer-head">
                        <h2 id="faq-explorer-heading" className="faq-section-title">Explore by topic</h2>
                        <p className="faq-section-sub">Browse the sections below or use search to find a specific question.</p>
                      </header>

                      {groupedFaqs.map(({ category, items }) => {
                        const globalIndex = TOPIC_CATEGORIES.indexOf(category);
                        return (
                          <FaqGroup
                            key={category}
                            category={category}
                            items={items}
                            openId={openFaqId}
                            onToggle={handleToggle}
                            searchQuery={normalizedQuery}
                            globalIndex={globalIndex}
                            ref={(el) => { if (el) sectionRefs.current[category] = el; }}
                          />
                        );
                      })}
                    </>
                  )}
                </div>
              </div>

            </div>
          </section>
        )}

        {/* ── BEFORE YOUR CONSULTATION ──────────────────────────────────────── */}
        <section className="faq-prep-section" aria-labelledby="faq-prep-heading">
          <div className="shell">
            <header className="faq-section-header">
              <div>
                <h2 id="faq-prep-heading" className="faq-section-title">A little preparation helps</h2>
                <p className="faq-section-sub">
                  Keeping your reports, medication details and questions ready can help make
                  your consultation more focused and useful.
                </p>
              </div>
            </header>
            <div className="faq-prep-grid">
              {[
                {
                  num: '01',
                  title: 'Bring previous scans and reports',
                  desc: 'If you have X-rays, MRI scans, CT scans or previous medical reports related to your condition, keep them ready. Both physical films and digital reports are helpful.',
                },
                {
                  num: '02',
                  title: 'Keep your medication list available',
                  desc: 'Bring or note the names and doses of medicines you currently take, including supplements and over-the-counter drugs.',
                },
                {
                  num: '03',
                  title: 'Write down your main concerns',
                  desc: 'Note when symptoms started, what makes them better or worse, and the specific questions you would like to discuss during your consultation.',
                },
                {
                  num: '04',
                  title: 'Arrive a little early',
                  desc: 'Allow enough time for registration and any clinic formalities so the consultation can begin on schedule.',
                },
              ].map((step) => (
                <div key={step.num} className="faq-prep-card">
                  <span className="faq-prep-num">{step.num}</span>
                  <h3 className="faq-prep-title">{step.title}</h3>
                  <p className="faq-prep-desc">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── REPORTS & SECOND OPINION ──────────────────────────────────────── */}
        <section className="faq-support-strip">
          <div className="shell faq-support-grid">
            <div className="faq-support-block">
              <div className="faq-support-icon-wrap" aria-hidden="true">
                <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="#0c7b79" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                  <polyline points="14 2 14 8 20 8" />
                  <line x1="16" y1="13" x2="8" y2="13" />
                  <line x1="16" y1="17" x2="8" y2="17" />
                  <polyline points="10 9 9 9 8 9" />
                </svg>
              </div>
              <h3 className="faq-support-title">Have previous reports or scans?</h3>
              <p className="faq-support-desc">
                Bring relevant X-rays, MRI scans, CT scans, discharge summaries or previous
                treatment records to your consultation if available. No specific document is
                mandatory — bring what you have.
              </p>
              <Link to="/contact" className="faq-support-link">
                Ask the clinic what to bring
                <svg aria-hidden="true" viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M14 7l5 5-5 5" /></svg>
              </Link>
            </div>

            <div className="faq-support-divider" aria-hidden="true" />

            <div className="faq-support-block">
              <div className="faq-support-icon-wrap" aria-hidden="true">
                <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="#0c7b79" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 8v4l3 3" />
                  <path d="M3.05 11a9 9 0 1 0 .5-2" />
                </svg>
              </div>
              <h3 className="faq-support-title">Looking for a second opinion?</h3>
              <p className="faq-support-desc">
                You can discuss an existing diagnosis, treatment recommendation or surgical plan
                during a consultation. Bringing previous reports and imaging can help provide
                useful clinical context.
              </p>
              <Link to="/appointment" className="faq-support-link">
                Request a consultation
                <svg aria-hidden="true" viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M14 7l5 5-5 5" /></svg>
              </Link>
            </div>
          </div>
        </section>

        {/* ── STILL NEED HELP CTA ───────────────────────────────────────────── */}
        <section className="faq-cta-section" aria-labelledby="faq-cta-heading">
          <div className="shell faq-cta-grid">
            <div className="faq-cta-left">
              <h2 id="faq-cta-heading" className="faq-cta-heading">
                Still need a clearer answer?
              </h2>
              <p className="faq-cta-desc">
                Some questions are best discussed personally. Our clinic team can help you
                arrange an orthopaedic consultation with Dr.&nbsp;Harshil Shah.
              </p>
              <p className="faq-cta-sub">
                <svg aria-hidden="true" viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><path d="M12 8v4l3 3" /></svg>
                Monday – Saturday &nbsp;|&nbsp; By Appointment
              </p>
            </div>
            <div className="faq-cta-right">
              <Link to="/appointment" className="faq-cta-primary">
                Book an Appointment
                <svg aria-hidden="true" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M14 7l5 5-5 5" /></svg>
              </Link>
              <Link to="/contact" className="faq-cta-secondary">
                Contact the Clinic
              </Link>
              <a
                href="https://wa.me/919316753985?text=Hello%2C%20I%20would%20like%20help%20regarding%20an%20orthopaedic%20consultation."
                target="_blank"
                rel="noreferrer"
                className="faq-cta-whatsapp"
              >
                <svg aria-hidden="true" viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                WhatsApp the Clinic
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
