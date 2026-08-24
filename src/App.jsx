import React, { lazy, Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Topbar from './components/Topbar';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

// Eagerly load the home page for fastest initial render
import HomePage from './pages/HomePage';

// Lazy-load all secondary pages — each gets its own JS chunk
const AboutPage        = lazy(() => import('./pages/AboutPage'));
const TreatmentsPage   = lazy(() => import('./pages/TreatmentsPage'));
const PatientGuidesPage= lazy(() => import('./pages/PatientGuidesPage'));
const GalleryPage      = lazy(() => import('./pages/GalleryPage'));
const FaqPage          = lazy(() => import('./pages/FaqPage'));
const ContactPage      = lazy(() => import('./pages/ContactPage'));
const AppointmentPage  = lazy(() => import('./pages/AppointmentPage'));

// Lazy-load non-critical UI overlays
const WelcomeModal     = lazy(() => import('./components/WelcomeModal'));
const FloatingSocialBar= lazy(() => import('./components/FloatingSocialBar'));

// Minimal route-transition fallback — just a blank screen, no spinner flash
function PageShell() {
  return <div className="page-shell-loading" aria-hidden="true" />;
}

export default function App() {
  return (
    <div className="app-container">
      <ScrollToTop />

      {/* Non-critical overlays — lazy, won't delay initial paint */}
      <Suspense fallback={null}>
        <WelcomeModal />
      </Suspense>
      <Suspense fallback={null}>
        <FloatingSocialBar />
      </Suspense>

      <Topbar />
      <Header />

      <main>
        <Suspense fallback={<PageShell />}>
          <Routes>
            <Route path="/"               element={<HomePage />} />
            <Route path="/about"          element={<AboutPage />} />
            <Route path="/treatments"     element={<TreatmentsPage />} />
            <Route path="/patient-guides" element={<PatientGuidesPage />} />
            <Route path="/gallery"        element={<GalleryPage />} />
            <Route path="/faq"            element={<FaqPage />} />
            <Route path="/contact"        element={<ContactPage />} />
            <Route path="/appointment"    element={<AppointmentPage />} />
            {/* Catch-all redirect to Home */}
            <Route path="*"              element={<Navigate to="/" replace />} />
          </Routes>
        </Suspense>
      </main>

      <Footer />
    </div>
  );
}
