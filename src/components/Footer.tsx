import React from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import { ShieldAlert, ArrowUpRight, FileText, Download } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';
import { projectInfo } from '../data/projectData';

export const Footer: React.FC = () => {
  const { language, setLanguage, t } = useLanguage();
  const navigate = useNavigate();
  const location = useLocation();

  const handleFooterNav = (id: string) => {
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

  return (
    <footer className="bg-surface border-t border-gold-border pt-16 pb-12 mt-20 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-24 bg-champagne-gold/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Column 1: Brand Info */}
          <div className="space-y-4">
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                handleFooterNav('home');
              }}
              className="flex items-center gap-3 group inline-flex"
              aria-label="Block Aura Home"
            >
              <div className="w-10 h-10 rounded-full overflow-hidden border border-champagne-gold/40 shadow-gold-subtle group-hover:border-champagne-gold transition-colors bg-background">
                <img
                  src="/block-aura-logo.jpg"
                  alt="Block Aura Logo"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <span className="font-display font-bold text-xl tracking-wider text-primary-text">
                  {projectInfo.brandName}
                </span>
                <span className="ml-2 px-1.5 py-0.5 rounded text-[10px] font-semibold bg-champagne-gold/20 text-champagne-gold border border-champagne-gold/30">
                  {projectInfo.ticker}
                </span>
              </div>
            </a>
            <p className="text-secondary-text text-sm leading-relaxed max-w-sm">
              {t.footer.brandDesc}
            </p>
            <div className="flex flex-wrap items-center gap-2 pt-2">
              <span className="px-2.5 py-1 text-xs font-mono bg-background border border-purple-500/40 text-purple-300 rounded-full">
                Solana
              </span>
              <span className="px-2.5 py-1 text-xs font-mono bg-background border border-indigo-500/40 text-indigo-300 rounded-full">
                Polygon
              </span>
              <span className="px-2.5 py-1 text-xs font-mono bg-background border border-champagne-gold/30 text-champagne-gold rounded-full">
                {t.hero.badgeStage}
              </span>
            </div>
          </div>

          {/* Column 2: Navigation */}
          <div>
            <h3 className="font-display text-xs font-bold text-primary-text tracking-widest uppercase mb-4">
              {t.footer.quickLinks}
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a
                  href="#home"
                  onClick={(e) => {
                    e.preventDefault();
                    handleFooterNav('home');
                  }}
                  className="text-secondary-text hover:text-champagne-gold transition-colors"
                >
                  {t.nav.home}
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  onClick={(e) => {
                    e.preventDefault();
                    handleFooterNav('about');
                  }}
                  className="text-secondary-text hover:text-champagne-gold transition-colors"
                >
                  {t.nav.about}
                </a>
              </li>
              <li>
                <a
                  href="#token"
                  onClick={(e) => {
                    e.preventDefault();
                    handleFooterNav('token');
                  }}
                  className="text-secondary-text hover:text-champagne-gold transition-colors"
                >
                  {t.nav.token}
                </a>
              </li>
              <li>
                <a
                  href="#ecosystem"
                  onClick={(e) => {
                    e.preventDefault();
                    handleFooterNav('ecosystem');
                  }}
                  className="text-secondary-text hover:text-champagne-gold transition-colors"
                >
                  {t.nav.ecosystem}
                </a>
              </li>
              <li>
                <a
                  href="#roadmap"
                  onClick={(e) => {
                    e.preventDefault();
                    handleFooterNav('roadmap');
                  }}
                  className="text-secondary-text hover:text-champagne-gold transition-colors"
                >
                  {t.nav.roadmap}
                </a>
              </li>
              <li>
                <Link
                  to="/whitepaper"
                  className="text-champagne-gold hover:text-champagne-gold-light transition-colors font-medium flex items-center gap-1.5"
                >
                  <FileText className="w-3.5 h-3.5" />
                  <span>{t.common.whitepaper} (Draft v1.0)</span>
                </Link>
              </li>
              <li>
                <a
                  href="#faq"
                  onClick={(e) => {
                    e.preventDefault();
                    handleFooterNav('faq');
                  }}
                  className="text-secondary-text hover:text-champagne-gold transition-colors"
                >
                  {t.nav.faq}
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Supported Networks & DEX */}
          <div>
            <h3 className="font-display text-xs font-bold text-primary-text tracking-widest uppercase mb-4">
              {t.footer.networks}
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a
                  href="#networks"
                  onClick={(e) => {
                    e.preventDefault();
                    handleFooterNav('networks');
                  }}
                  className="text-secondary-text hover:text-champagne-gold transition-colors flex items-center gap-1.5"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                  <span>Solana Ecosystem</span>
                </a>
              </li>
              <li>
                <a
                  href="#networks"
                  onClick={(e) => {
                    e.preventDefault();
                    handleFooterNav('networks');
                  }}
                  className="text-secondary-text hover:text-champagne-gold transition-colors flex items-center gap-1.5"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
                  <span>Polygon Ecosystem</span>
                </a>
              </li>
              <li>
                <a
                  href="#dex"
                  onClick={(e) => {
                    e.preventDefault();
                    handleFooterNav('dex');
                  }}
                  className="text-secondary-text hover:text-champagne-gold transition-colors flex items-center gap-1.5"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-champagne-gold" />
                  <span>Decentralized Exchanges (DEX)</span>
                </a>
              </li>
              <li>
                <a
                  href="#burning"
                  onClick={(e) => {
                    e.preventDefault();
                    handleFooterNav('burning');
                  }}
                  className="text-secondary-text hover:text-champagne-gold transition-colors flex items-center gap-1.5"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                  <span>Token Burning Mechanism</span>
                </a>
              </li>
              <li>
                <a
                  href="#launchpool"
                  onClick={(e) => {
                    e.preventDefault();
                    handleFooterNav('launchpool');
                  }}
                  className="text-secondary-text hover:text-champagne-gold transition-colors flex items-center gap-1.5"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                  <span>Launch Pool Infrastructure</span>
                </a>
              </li>
              <li>
                <a
                  href="/block-aura-whitepaper.pdf"
                  download="block-aura-whitepaper.pdf"
                  className="text-champagne-gold hover:text-champagne-gold-light transition-colors flex items-center gap-1.5 text-xs font-mono pt-1"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download Whitepaper (PDF)</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Official Community Links */}
          <div>
            <h3 className="font-display text-xs font-bold text-primary-text tracking-widest uppercase mb-4">
              {t.footer.community}
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a
                  href={projectInfo.socials.x}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-secondary-text hover:text-champagne-gold transition-colors flex items-center gap-1.5 group"
                >
                  <span>X (Twitter)</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-secondary-text group-hover:text-champagne-gold transition-colors" />
                </a>
              </li>
              <li>
                <a
                  href={projectInfo.socials.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-secondary-text hover:text-champagne-gold transition-colors flex items-center gap-1.5 group"
                >
                  <span>Facebook</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-secondary-text group-hover:text-champagne-gold transition-colors" />
                </a>
              </li>
            </ul>

            {/* Language Selector */}
            <div className="mt-6 pt-4 border-t border-gold-border/30">
              <span className="text-xs text-secondary-text block mb-2 font-mono">Language / Sprache:</span>
              <div className="inline-flex rounded-md border border-gold-border p-0.5 bg-background">
                <button
                  type="button"
                  onClick={() => setLanguage('en')}
                  className={`px-3 py-1 text-xs rounded transition-colors ${
                    language === 'en'
                      ? 'bg-champagne-gold text-background font-semibold'
                      : 'text-secondary-text hover:text-primary-text'
                  }`}
                >
                  English
                </button>
                <button
                  type="button"
                  onClick={() => setLanguage('de')}
                  className={`px-3 py-1 text-xs rounded transition-colors ${
                    language === 'de'
                      ? 'bg-champagne-gold text-background font-semibold'
                      : 'text-secondary-text hover:text-primary-text'
                  }`}
                >
                  Deutsch
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Project Disclaimer Box */}
        <div className="border border-gold-border/40 rounded-xl p-5 bg-background/50 mb-8">
          <div className="flex items-start gap-3">
            <ShieldAlert className="w-5 h-5 text-champagne-gold flex-shrink-0 mt-0.5" />
            <div className="text-xs text-secondary-text leading-relaxed">
              <span className="font-semibold text-primary-text block mb-1">
                Transparency &amp; Risk Disclosure
              </span>
              {t.footer.disclaimer}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 border-t border-gold-border/20 flex flex-col sm:flex-row items-center justify-between text-xs text-secondary-text gap-4">
          <p>© 2026 {projectInfo.brandName} ({projectInfo.ticker}). {t.footer.copyright}</p>
          <div className="flex items-center gap-4">
            <span className="text-purple-400 font-mono">Solana</span>
            <span>•</span>
            <span className="text-indigo-400 font-mono">Polygon</span>
            <span>•</span>
            <span className="text-champagne-gold font-mono">Decentralized</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
