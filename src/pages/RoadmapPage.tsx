import React from 'react';
import { Link } from 'react-router-dom';
import {
  Compass,
  CheckCircle2,
  Clock,
  Sparkles,
  ArrowRight,
  AlertCircle,
  Calendar,
} from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';
import { roadmapData } from '../data/projectData';
import { StatusBadge } from '../components/StatusBadge';
import { SEOHead } from '../components/SEOHead';

export const RoadmapPage: React.FC = () => {
  const { language, t } = useLanguage();

  return (
    <>
      <SEOHead
        title={t.roadmap.title}
        description={
          language === 'en'
            ? 'Proposed Development Roadmap for Block Aura (BA). A transparent, phased development framework subject to confirmation.'
            : 'Vorgeschlagene Entwicklungs-Roadmap für Block Aura (BA). Ein transparenter Phasenplan, vorbehaltlich formeller Bestätigung.'
        }
      />

      <div className="py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <StatusBadge label={t.common.proposedFramework} variant="gold" size="sm" />
            <h1 className="text-3xl sm:text-5xl font-display font-bold text-primary-text mt-4 mb-4">
              {t.roadmap.title}
            </h1>
            <p className="text-champagne-gold text-base sm:text-lg font-medium">
              {t.roadmap.subtitle}
            </p>
            <p className="text-secondary-text text-sm sm:text-base mt-4 leading-relaxed">
              {t.roadmap.intro}
            </p>
          </div>

          {/* Prominent Disclaimer Banner */}
          <div className="max-w-4xl mx-auto mb-16 p-4 rounded-xl bg-surface border border-gold-border text-xs sm:text-sm text-secondary-text flex items-center gap-3">
            <AlertCircle className="w-5 h-5 text-champagne-gold flex-shrink-0" />
            <span>{t.roadmap.disclaimer}</span>
          </div>

          {/* Phased Roadmap Timeline */}
          <div className="max-w-4xl mx-auto space-y-8 sm:space-y-10 relative">
            {/* Vertical connector line */}
            <div className="hidden sm:block absolute left-8 top-10 bottom-10 w-0.5 bg-gradient-to-b from-champagne-gold via-champagne-gold/40 to-transparent" />

            {roadmapData.map((phase) => {
              const isCurrent = phase.status === 'in_progress';
              return (
                <div
                  key={phase.phaseNumber}
                  className={`relative sm:pl-20 rounded-2xl transition-all duration-300 ${
                    isCurrent ? 'scale-[1.01]' : ''
                  }`}
                >
                  {/* Phase number circle indicator for desktop */}
                  <div
                    className={`hidden sm:flex absolute left-4 top-8 -translate-x-1/2 w-9 h-9 rounded-full border items-center justify-center font-display font-bold text-sm z-10 ${
                      isCurrent
                        ? 'bg-champagne-gold text-background border-champagne-gold-light shadow-gold-subtle'
                        : 'bg-surface text-secondary-text border-gold-border'
                    }`}
                  >
                    {phase.phaseNumber}
                  </div>

                  {/* Card Container */}
                  <div
                    className={`p-6 sm:p-8 rounded-2xl border ${
                      isCurrent
                        ? 'bg-glass-card border-champagne-gold/60 shadow-gold-card'
                        : 'bg-surface border-gold-border'
                    }`}
                  >
                    <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                      <span className="text-xs font-mono font-semibold text-champagne-gold uppercase tracking-wider">
                        {phase.badge[language]}
                      </span>
                      <span
                        className={`text-xs font-semibold px-3 py-1 rounded-full ${
                          isCurrent
                            ? 'bg-champagne-gold/20 text-champagne-gold border border-champagne-gold/40'
                            : 'bg-background text-secondary-text border border-gold-border'
                        }`}
                      >
                        {phase.statusLabel[language]}
                      </span>
                    </div>

                    <h2 className="text-xl sm:text-2xl font-display font-bold text-primary-text mb-3">
                      {phase.title[language]}
                    </h2>

                    <p className="text-secondary-text text-sm sm:text-base leading-relaxed mb-6">
                      {phase.description[language]}
                    </p>

                    <div className="pt-4 border-t border-gold-border/30">
                      <h3 className="text-xs font-mono uppercase tracking-wider text-secondary-text mb-3">
                        {language === 'en' ? 'Proposed Objectives' : 'Vorgeschlagene Ziele'}:
                      </h3>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {phase.milestones[language].map((milestone, idx) => (
                          <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-primary-text/90">
                            <CheckCircle2
                              className={`w-4 h-4 flex-shrink-0 mt-0.5 ${
                                isCurrent ? 'text-champagne-gold' : 'text-secondary-text'
                              }`}
                            />
                            <span>{milestone}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Navigation CTA */}
          <div className="mt-16 text-center">
            <Link
              to="/whitepaper"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-semibold text-sm bg-champagne-gold text-background hover:bg-champagne-gold-light transition-all"
            >
              <span>{t.common.readDoc}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
