import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, Globe, ArrowUpRight, Zap, FileText } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';
import { projectInfo } from '../data/projectData';

export const Navbar: React.FC = () => {
  const { language, setLanguage, t } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (id: string, isRoute?: boolean) => {
    setMobileMenuOpen(false);
    if (isRoute || id === 'whitepaper') {
      navigate('/whitepaper');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (location.pathname !== '/') {
      navigate(`/#${id}`);
      setTimeout(() => {
        const element = document.getElementById(id.replace('#', ''));
        if (element) {
          const yOffset = -80;
          const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
          window.scrollTo({ top: y, behavior: 'smooth' });
        }
      }, 100);
    } else {
      const element = document.getElementById(id.replace('#', ''));
      if (element) {
        const yOffset = -80;
        const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    }
  };

  const navLinks = [
    { key: 'home', id: 'home', label: t.nav.home },
    { key: 'about', id: 'about', label: t.nav.about },
    { key: 'token', id: 'token', label: t.nav.token },
    { key: 'ecosystem', id: 'ecosystem', label: t.nav.ecosystem },
    { key: 'roadmap', id: 'roadmap', label: t.nav.roadmap },
    { key: 'whitepaper', id: 'whitepaper', label: t.nav.whitepaper, isRoute: true },
    { key: 'faq', id: 'faq', label: t.nav.faq },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-background/95 backdrop-blur-md border-b border-gold-border/40 shadow-2xl py-3'
          : 'bg-transparent border-b border-transparent py-4 sm:py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo & Name */}
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('home');
            }}
            className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-champagne-gold/50 rounded-lg p-1"
            aria-label="Block Aura Home"
          >
            <div className="relative w-10 h-10 sm:w-11 sm:h-11 rounded-full overflow-hidden border border-champagne-gold/40 shadow-gold-subtle group-hover:border-champagne-gold transition-colors bg-surface">
              <img
                src="/block-aura-logo.jpg"
                alt="Block Aura Official Logo"
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <span className="font-display font-bold text-lg sm:text-xl tracking-wider text-primary-text group-hover:text-champagne-gold-light transition-colors">
                  {projectInfo.brandName}
                </span>
                <span className="px-1.5 py-0.5 rounded text-[10px] font-semibold bg-champagne-gold/20 text-champagne-gold border border-champagne-gold/30">
                  {projectInfo.ticker}
                </span>
              </div>
              <div className="flex items-center gap-1.5 text-[10px] font-mono text-secondary-text tracking-wider uppercase hidden sm:flex">
                <span className="text-purple-400">Solana</span>
                <span>•</span>
                <span className="text-indigo-400">Polygon</span>
              </div>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-1" aria-label="Main Navigation">
            {navLinks.map((item) => (
              <a
                key={item.key}
                href={item.isRoute ? '/whitepaper' : `#${item.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.id, item.isRoute);
                }}
                className={`px-3 py-1.5 text-xs font-semibold tracking-wider transition-colors rounded-md uppercase ${
                  item.key === 'whitepaper' && location.pathname === '/whitepaper'
                    ? 'text-champagne-gold bg-champagne-gold/10 border border-champagne-gold/30'
                    : 'text-secondary-text hover:text-champagne-gold hover:bg-surface/60'
                }`}
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Actions: Language Switcher + Highlighted BUY BLOCK AURA CTA */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Language Switcher */}
            <div className="flex items-center bg-surface border border-gold-border rounded-full p-0.5 text-xs font-medium">
              <button
                type="button"
                onClick={() => setLanguage('en')}
                className={`px-2.5 py-1 rounded-full transition-all ${
                  language === 'en'
                    ? 'bg-champagne-gold text-background font-semibold shadow'
                    : 'text-secondary-text hover:text-primary-text'
                }`}
                aria-label="Switch to English"
              >
                EN
              </button>
              <button
                type="button"
                onClick={() => setLanguage('de')}
                className={`px-2.5 py-1 rounded-full transition-all ${
                  language === 'de'
                    ? 'bg-champagne-gold text-background font-semibold shadow'
                    : 'text-secondary-text hover:text-primary-text'
                }`}
                aria-label="Switch to German"
              >
                DE
              </button>
            </div>

            {/* Highlighted BUY BLOCK AURA CTA Button */}
            <a
              href="#dex"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('dex');
              }}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold tracking-wider uppercase bg-champagne-gold text-background hover:bg-champagne-gold-light active:scale-95 transition-all shadow-gold-subtle hover:shadow-gold-glow"
            >
              <Zap className="w-3.5 h-3.5 fill-current" />
              <span>{t.nav.buyBlockAura}</span>
            </a>
          </div>

          {/* Mobile Menu Trigger & Quick Switcher */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              type="button"
              onClick={() => setLanguage(language === 'en' ? 'de' : 'en')}
              className="px-2.5 py-1 text-xs font-semibold rounded-full border border-gold-border text-champagne-gold bg-surface flex items-center gap-1"
              aria-label="Toggle language"
            >
              <Globe className="w-3 h-3" />
              <span>{language.toUpperCase()}</span>
            </button>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-secondary-text hover:text-primary-text hover:bg-surface border border-gold-border focus:outline-none focus:ring-2 focus:ring-champagne-gold"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6 text-champagne-gold" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[65px] bg-background/98 backdrop-blur-2xl border-b border-gold-border shadow-2xl px-6 py-6 transition-all duration-300">
          <div className="flex flex-col space-y-3">
            <div className="pb-3 border-b border-gold-border/40 flex items-center justify-between">
              <span className="text-xs font-mono text-champagne-gold font-semibold uppercase">
                {t.hero.badgeStage}
              </span>
              <div className="flex gap-2 text-[11px] font-mono text-secondary-text">
                <span className="text-purple-400">Solana</span>
                <span>•</span>
                <span className="text-indigo-400">Polygon</span>
              </div>
            </div>

            {navLinks.map((item) => (
              <a
                key={item.key}
                href={item.isRoute ? '/whitepaper' : `#${item.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.id, item.isRoute);
                }}
                className={`px-4 py-2.5 rounded-lg text-sm font-semibold tracking-wider transition-colors uppercase ${
                  item.key === 'whitepaper' && location.pathname === '/whitepaper'
                    ? 'text-champagne-gold bg-champagne-gold/10 border border-champagne-gold/30'
                    : 'text-primary-text hover:text-champagne-gold hover:bg-surface'
                }`}
              >
                {item.label}
              </a>
            ))}

            <div className="pt-4 border-t border-gold-border/40 flex flex-col gap-3">
              <a
                href="#dex"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick('dex');
                }}
                className="w-full py-3 rounded-full text-center font-bold tracking-wider text-xs uppercase bg-champagne-gold text-background shadow-gold-subtle flex items-center justify-center gap-2"
              >
                <Zap className="w-4 h-4 fill-current" />
                <span>{t.nav.buyBlockAura}</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
