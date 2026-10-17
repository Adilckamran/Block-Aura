import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  FileText,
  Download,
  Printer,
  Share2,
  CheckCircle2,
  AlertTriangle,
  Info,
  ArrowRight,
  ExternalLink,
  ChevronRight,
  Layers,
  Cpu,
  Flame,
  Droplets,
  ShieldAlert,
  ArrowUpRight,
  Sparkles,
  BookOpen,
} from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';
import { projectInfo } from '../data/projectData';
import { whitepaperSections, whitepaperMetadata } from '../data/whitepaperData';
import { StatusBadge } from '../components/StatusBadge';
import { SEOHead } from '../components/SEOHead';

export const WhitepaperPage: React.FC = () => {
  const { language, t } = useLanguage();
  const [activeSection, setActiveSection] = useState<string>('section-1-cover');
  const [copied, setCopied] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;
      for (const section of whitepaperSections) {
        const el = document.getElementById(section.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -90;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <>
      <SEOHead
        title="Official Whitepaper — Block Aura (BA)"
        description="Official Block Aura (BA) Architectural Whitepaper v1.0. Dual-chain infrastructure on Solana and Polygon, planned token supply (200M Polygon, 200M Solana), DEX liquidity, burning mechanism, and AI vision."
      />

      <div className="py-10 sm:py-14 bg-background min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Top Document Header Banner */}
          <div className="mb-10 p-6 sm:p-8 rounded-3xl bg-surface border border-gold-border/60 shadow-gold-card relative overflow-hidden">
            <div className="absolute top-0 right-0 w-80 h-80 bg-champagne-gold/5 rounded-full blur-3xl pointer-events-none" />
            
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 relative z-10">
              <div className="space-y-3">
                <div className="flex flex-wrap items-center gap-2.5">
                  <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold bg-champagne-gold/15 text-champagne-gold border border-champagne-gold/30">
                    {whitepaperMetadata.version}
                  </span>
                  <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold bg-amber-500/15 text-amber-300 border border-amber-500/30">
                    {t.whitepaperUi.statusPreDeploy}
                  </span>
                  <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold bg-purple-500/10 text-purple-300 border border-purple-500/30">
                    Solana
                  </span>
                  <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold bg-indigo-500/10 text-indigo-300 border border-indigo-500/30">
                    Polygon
                  </span>
                </div>

                <h1 className="text-2xl sm:text-4xl lg:text-5xl font-display font-bold text-primary-text leading-tight">
                  {whitepaperMetadata.documentTitle[language]}
                </h1>

                <p className="text-champagne-gold text-sm sm:text-base font-medium max-w-3xl">
                  {whitepaperMetadata.documentSubtitle[language]}
                </p>

                <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-secondary-text pt-1">
                  <span>📅 {whitepaperMetadata.date}</span>
                  <span>•</span>
                  <span>🚀 {whitepaperMetadata.launchDate[language]}</span>
                </div>
              </div>

              {/* Action Toolbar */}
              <div className="flex flex-wrap sm:flex-nowrap items-center gap-3 pt-2 lg:pt-0 flex-shrink-0">
                <a
                  href="/block-aura-whitepaper.pdf"
                  download="block-aura-whitepaper.pdf"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full text-xs font-bold tracking-wider uppercase bg-champagne-gold text-background hover:bg-champagne-gold-light active:scale-95 transition-all shadow-gold-subtle hover:shadow-gold-glow"
                  title="Download Official Standalone PDF"
                >
                  <Download className="w-4 h-4" />
                  <span>{t.whitepaperUi.downloadPdf}</span>
                </a>

                <button
                  type="button"
                  onClick={handlePrint}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-3 rounded-full text-xs font-semibold uppercase bg-surface border border-gold-border hover:border-champagne-gold text-secondary-text hover:text-primary-text transition-all"
                  title="Print or Save to Local PDF"
                >
                  <Printer className="w-4 h-4 text-champagne-gold" />
                  <span>{t.whitepaperUi.printDoc}</span>
                </button>

                <button
                  type="button"
                  onClick={handleCopyLink}
                  className="inline-flex items-center justify-center p-3 rounded-full text-xs bg-surface border border-gold-border hover:border-champagne-gold text-secondary-text hover:text-primary-text transition-all"
                  title="Copy Document Link"
                >
                  <Share2 className="w-4 h-4 text-champagne-gold" />
                </button>
                {copied && (
                  <span className="text-xs font-mono text-emerald-400">Copied!</span>
                )}
              </div>
            </div>
          </div>

          {/* Two-Column Document Reader Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Column: Sticky Table of Contents (Desktop) */}
            <aside className="lg:col-span-4 sticky top-24 space-y-6">
              <div className="p-6 rounded-2xl bg-surface border border-gold-border/60 shadow-lg">
                <div className="flex items-center justify-between pb-4 border-b border-gold-border/30 mb-4">
                  <div className="flex items-center gap-2">
                    <BookOpen className="w-4 h-4 text-champagne-gold" />
                    <h2 className="font-display text-sm font-bold text-primary-text uppercase tracking-wider">
                      {t.whitepaperUi.tableOfContents}
                    </h2>
                  </div>
                  <span className="text-[11px] font-mono text-champagne-gold">
                    14 {t.whitepaperUi.chapters}
                  </span>
                </div>

                <nav className="space-y-1 max-h-[60vh] overflow-y-auto pr-1 text-xs">
                  {whitepaperSections.map((sec) => {
                    const isActive = activeSection === sec.id;
                    return (
                      <button
                        key={sec.id}
                        type="button"
                        onClick={() => scrollToSection(sec.id)}
                        className={`w-full text-left px-3 py-2 rounded-lg transition-all flex items-center justify-between gap-2 group ${
                          isActive
                            ? 'bg-champagne-gold/15 text-champagne-gold font-semibold border-l-2 border-champagne-gold'
                            : 'text-secondary-text hover:text-primary-text hover:bg-background/60'
                        }`}
                      >
                        <span className="truncate">{sec.title[language]}</span>
                        <ChevronRight
                          className={`w-3.5 h-3.5 flex-shrink-0 transition-transform ${
                            isActive ? 'text-champagne-gold translate-x-0.5' : 'text-secondary-text/40'
                          }`}
                        />
                      </button>
                    );
                  })}
                </nav>

                {/* PDF Download Direct Card in Sidebar */}
                <div className="mt-6 pt-5 border-t border-gold-border/30">
                  <div className="p-4 rounded-xl bg-background border border-gold-border/40 text-center space-y-2">
                    <div className="flex items-center justify-center gap-2 text-champagne-gold text-xs font-semibold">
                      <FileText className="w-4 h-4" />
                      <span>Offline PDF Available</span>
                    </div>
                    <p className="text-[11px] text-secondary-text leading-tight">
                      9-page formatted document with full specifications and risk disclosures.
                    </p>
                    <a
                      href="/block-aura-whitepaper.pdf"
                      download="block-aura-whitepaper.pdf"
                      className="inline-flex items-center justify-center gap-1.5 w-full py-2 rounded-lg text-xs font-bold uppercase bg-champagne-gold/20 text-champagne-gold border border-champagne-gold/40 hover:bg-champagne-gold hover:text-background transition-all"
                    >
                      <Download className="w-3.5 h-3.5" />
                      <span>{t.whitepaperUi.downloadPdf}</span>
                    </a>
                  </div>
                </div>
              </div>
            </aside>

            {/* Right Column: Full Document Body (14 Sections) */}
            <main className="lg:col-span-8 space-y-12">
              {whitepaperSections.map((sec) => {
                const langContent = sec.content[language];

                return (
                  <article
                    key={sec.id}
                    id={sec.id}
                    className="p-6 sm:p-10 rounded-3xl bg-surface border border-gold-border/50 shadow-gold-card space-y-6 scroll-mt-24 transition-all"
                  >
                    {/* Section Header */}
                    <div className="space-y-2 border-b border-gold-border/30 pb-5">
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <span className="text-xs font-mono font-bold uppercase tracking-widest text-champagne-gold">
                          {sec.badge[language]}
                        </span>
                        <span
                          className={`px-2.5 py-0.5 rounded-full text-[11px] font-mono font-semibold ${
                            sec.status === 'confirmed'
                              ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/30'
                              : sec.status === 'pending_confirmation'
                              ? 'bg-amber-500/10 text-amber-300 border border-amber-500/30'
                              : 'bg-cyan-500/10 text-neon-cyan border border-cyan-500/30'
                          }`}
                        >
                          {sec.statusLabel[language]}
                        </span>
                      </div>

                      <h2 className="text-xl sm:text-3xl font-display font-bold text-primary-text leading-snug">
                        {sec.title[language]}
                      </h2>

                      {sec.subtitle && (
                        <p className="text-xs sm:text-sm text-champagne-gold/90 font-medium">
                          {sec.subtitle[language]}
                        </p>
                      )}
                    </div>

                    {/* Paragraphs */}
                    <div className="space-y-4 text-secondary-text text-sm sm:text-base leading-relaxed">
                      {langContent.paragraphs.map((p, pIdx) => (
                        <p key={pIdx}>{p}</p>
                      ))}
                    </div>

                    {/* Metrics / Key Specs Grid (if applicable) */}
                    {langContent.metrics && (
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
                        {langContent.metrics.map((m, mIdx) => (
                          <div
                            key={mIdx}
                            className="p-4 rounded-xl bg-background border border-gold-border/30 flex flex-col justify-between"
                          >
                            <span className="text-[11px] uppercase font-mono text-secondary-text">
                              {m.label}
                            </span>
                            <span className="text-base sm:text-lg font-display font-bold text-primary-text mt-1">
                              {m.value}
                            </span>
                            {m.note && (
                              <span className="text-[10px] text-champagne-gold/80 mt-1 font-mono">
                                {m.note}
                              </span>
                            )}
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Key Points (if applicable) */}
                    {langContent.keyPoints && (
                      <div className="space-y-3 pt-2">
                        {langContent.keyPoints.map((kp, kpIdx) => (
                          <div
                            key={kpIdx}
                            className="p-4 rounded-xl bg-background/70 border border-gold-border/20 flex items-start gap-3"
                          >
                            <CheckCircle2 className="w-4 h-4 text-champagne-gold flex-shrink-0 mt-0.5" />
                            <div className="space-y-0.5">
                              <h3 className="font-semibold text-xs sm:text-sm text-primary-text">
                                {kp.title}
                              </h3>
                              <p className="text-xs text-secondary-text leading-relaxed">
                                {kp.desc}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Callout Notice (if applicable) */}
                    {langContent.callout && (
                      <div
                        className={`p-4 sm:p-5 rounded-2xl border flex items-start gap-3.5 ${
                          langContent.callout.type === 'warning'
                            ? 'bg-amber-500/10 border-amber-500/40 text-amber-200'
                            : langContent.callout.type === 'success'
                            ? 'bg-emerald-500/10 border-emerald-500/40 text-emerald-200'
                            : 'bg-background border-gold-border/40 text-secondary-text'
                        }`}
                      >
                        {langContent.callout.type === 'warning' ? (
                          <AlertTriangle className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                        ) : langContent.callout.type === 'success' ? (
                          <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                        ) : (
                          <Info className="w-5 h-5 text-champagne-gold flex-shrink-0 mt-0.5" />
                        )}
                        <div className="space-y-1">
                          <h4 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-primary-text font-mono">
                            {langContent.callout.title}
                          </h4>
                          <p className="text-xs leading-relaxed text-secondary-text">
                            {langContent.callout.desc}
                          </p>
                        </div>
                      </div>
                    )}
                  </article>
                );
              })}

              {/* Bottom Navigation CTA */}
              <div className="p-8 sm:p-10 rounded-3xl bg-surface border border-gold-border text-center space-y-6">
                <div className="space-y-2">
                  <h3 className="text-xl sm:text-2xl font-display font-bold text-primary-text">
                    {language === 'en' ? 'Have Questions About Block Aura?' : 'Fragen zu Block Aura?'}
                  </h3>
                  <p className="text-secondary-text text-xs sm:text-sm max-w-lg mx-auto">
                    {language === 'en'
                      ? 'Follow our verified community channels for official updates and contract deployment announcements.'
                      : 'Folgen Sie unseren verifizierten Kanälen für offizielle Updates und Ankündigungen.'}
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <a
                    href="/block-aura-whitepaper.pdf"
                    download="block-aura-whitepaper.pdf"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full text-xs font-bold uppercase bg-champagne-gold text-background hover:bg-champagne-gold-light transition-all shadow-gold-subtle"
                  >
                    <Download className="w-4 h-4" />
                    <span>{t.whitepaperUi.downloadPdf}</span>
                  </a>

                  <Link
                    to="/#home"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full text-xs font-bold uppercase bg-background border border-gold-border hover:border-champagne-gold text-primary-text hover:text-champagne-gold transition-all"
                  >
                    <span>{t.whitepaperUi.backToHome}</span>
                    <ArrowRight className="w-4 h-4 text-champagne-gold" />
                  </Link>
                </div>
              </div>
            </main>
          </div>
        </div>
      </div>
    </>
  );
};
