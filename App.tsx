
import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Benefits } from './components/Benefits';
import { ServicesGrid, FilmsAndShows } from './components/ServicesGrid';
import { Pricing } from './components/Pricing';
import { FAQ } from './components/FAQ';
import { Reviews } from './components/Reviews';
import { PaymentMethods } from './components/PaymentMethods';
import { Footer } from './components/Footer';
import { AlgemeneVoorwaarden } from './components/AlgemeneVoorwaarden';
import { Privacybeleid } from './components/Privacybeleid';
import { Channels } from './components/Channels';
import { ResellerPacks } from './components/ResellerPacks';
import { AnnouncementBanner } from './components/AnnouncementBanner';

const App: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);
  const [currentPage, setCurrentPage] = useState<string>('home');
  const [showBanner, setShowBanner] = useState(true);

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash === '#/algemene-voorwaarden') {
        setCurrentPage('algemene-voorwaarden');
        window.scrollTo(0, 0);
      } else if (hash === '#/privacybeleid') {
        setCurrentPage('privacybeleid');
        window.scrollTo(0, 0);
      } else if (hash === '#/kanalen') {
        setCurrentPage('kanalen');
        window.scrollTo(0, 0);
      } else if (hash === '#/reseller') {
        setCurrentPage('reseller');
        window.scrollTo(0, 0);
      } else {
        setCurrentPage('home');
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);

    // Reveal animation observer
    const observerOptions = {
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, observerOptions);

    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach(el => observer.observe(el));

    return () => {
      window.removeEventListener('scroll', handleScroll);
      revealElements.forEach(el => observer.unobserve(el));
    };
  }, [currentPage]);

  return (
    <div className="relative min-h-screen">
      <div className="grid-line grid-line-left"></div>
      <div className="grid-line grid-line-right"></div>

      {showBanner && <AnnouncementBanner onClose={() => setShowBanner(false)} />}
      <Header isScrolled={scrollY > 50} hasBanner={showBanner} />

      {currentPage === 'algemene-voorwaarden' ? (
        <main>
          <AlgemeneVoorwaarden />
        </main>
      ) : currentPage === 'privacybeleid' ? (
        <main>
          <Privacybeleid />
        </main>
      ) : currentPage === 'kanalen' ? (
        <main>
          <Channels />
        </main>
      ) : currentPage === 'reseller' ? (
        <main>
          <ResellerPacks />
        </main>
      ) : (
        <main>
          <section className="reveal">
            <Hero />
          </section>
          <section className="reveal">
            <FilmsAndShows />
          </section>
          <section className="reveal">
            <Pricing />
          </section>
          <section className="reveal">
            <Benefits />
          </section>
          <section className="reveal">
            <ServicesGrid />
          </section>
          <section className="reveal">
            <Reviews />
          </section>
          <section className="reveal">
            <PaymentMethods />
          </section>
          <section className="reveal">
            <FAQ />
          </section>
        </main>
      )}

      <Footer />

      {/* Sticky CTA Button */}
      {currentPage === 'home' && (
        <a
          href="#pricing"
          style={{
            position: 'fixed',
            bottom: '24px',
            left: '50%',
            transform: 'translateX(-50%)',
            zIndex: 9999,
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            padding: '20px 40px',
            background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)',
            border: '2px solid rgba(168, 85, 247, 0.6)',
            borderRadius: '9999px',
            color: 'white',
            fontWeight: 900,
            fontSize: '15px',
            textDecoration: 'none',
            boxShadow: '0 0 30px rgba(168, 85, 247, 0.3), 0 4px 20px rgba(0,0,0,0.5)',
            whiteSpace: 'nowrap' as const,
          }}
        >
          <span
            style={{
              width: '8px',
              height: '8px',
              backgroundColor: '#22c55e',
              borderRadius: '50%',
              animation: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
              boxShadow: '0 0 8px rgba(34, 197, 94, 0.6)',
            }}
          />
          Abonneer Nu
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </a>
      )}
    </div>
  );
};

export default App;
