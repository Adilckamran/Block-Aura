import React from 'react';
import {
  Users,
  ShieldCheck,
  ShieldAlert,
  ArrowUpRight,
  ExternalLink,
  MessageSquare,
  AlertTriangle,
  Lock,
} from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';
import { projectInfo } from '../data/projectData';
import { StatusBadge } from '../components/StatusBadge';
import { SEOHead } from '../components/SEOHead';

export const ContactPage: React.FC = () => {
  const { language, t } = useLanguage();

  return (
    <>
      <SEOHead
        title={t.contact.title}
        description={
          language === 'en'
            ? 'Official Block Aura (BA) Community channels. Connect on X (@BlockAuraCoin) and Facebook (BlockAura). Verified project updates.'
            : 'Offizielle Block Aura (BA) Community-Kanäle. Verbinden Sie sich auf X (@BlockAuraCoin) und Facebook (BlockAura).'
        }
      />

      <div className="py-12 sm:py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <StatusBadge label={t.common.officialChannels} variant="gold" size="sm" />
            <h1 className="text-3xl sm:text-5xl font-display font-bold text-primary-text mt-4 mb-4">
              {t.contact.title}
            </h1>
            <p className="text-champagne-gold text-base sm:text-lg font-medium">
              {t.contact.subtitle}
            </p>
            <p className="text-secondary-text text-sm sm:text-base mt-4 leading-relaxed">
              {t.contact.desc}
            </p>
          </div>

          {/* Social Channels Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {/* X Card */}
            <div className="p-8 rounded-2xl bg-glass-card border border-gold-border shadow-gold-card flex flex-col justify-between group">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl bg-champagne-gold/10 border border-champagne-gold/30 flex items-center justify-center text-champagne-gold font-display font-bold text-xl">
                    𝕏
                  </div>
                  <span className="px-2.5 py-1 text-xs font-mono bg-surface border border-gold-border rounded-full text-champagne-gold">
                    {language === 'en' ? 'Micro-Updates' : 'Echtzeit-Updates'}
                  </span>
                </div>
                <h2 className="text-2xl font-display font-bold text-primary-text mb-1">
                  {t.contact.xTitle}
                </h2>
                <div className="text-xs font-mono text-champagne-gold mb-4">
                  {t.contact.xHandle}
                </div>
                <p className="text-secondary-text text-sm leading-relaxed mb-6">
                  {t.contact.xDesc}
                </p>
              </div>

              <a
                href={projectInfo.socials.x}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 rounded-full font-semibold text-sm bg-champagne-gold text-background hover:bg-champagne-gold-light active:scale-95 transition-all shadow-gold-subtle flex items-center justify-center gap-2"
              >
                <span>{t.contact.xButton}</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>

            {/* Facebook Card */}
            <div className="p-8 rounded-2xl bg-glass-card border border-gold-border shadow-gold-card flex flex-col justify-between group">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl bg-champagne-gold/10 border border-champagne-gold/30 flex items-center justify-center text-champagne-gold font-display font-bold text-xl">
                    f
                  </div>
                  <span className="px-2.5 py-1 text-xs font-mono bg-surface border border-gold-border rounded-full text-champagne-gold">
                    {language === 'en' ? 'Community Hub' : 'Community-Zentrum'}
                  </span>
                </div>
                <h2 className="text-2xl font-display font-bold text-primary-text mb-1">
                  {t.contact.fbTitle}
                </h2>
                <div className="text-xs font-mono text-champagne-gold mb-4">
                  facebook.com/{t.contact.fbHandle}
                </div>
                <p className="text-secondary-text text-sm leading-relaxed mb-6">
                  {t.contact.fbDesc}
                </p>
              </div>

              <a
                href={projectInfo.socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 rounded-full font-semibold text-sm bg-surface border border-gold-border hover:border-champagne-gold text-primary-text hover:text-champagne-gold active:scale-95 transition-all flex items-center justify-center gap-2"
              >
                <span>{t.contact.fbButton}</span>
                <ArrowUpRight className="w-4 h-4 text-champagne-gold" />
              </a>
            </div>
          </div>

          {/* Honest Direct Message Notice (No fake form or fake email) */}
          <div className="rounded-2xl bg-surface border border-gold-border p-8 mb-12">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-xl bg-background border border-gold-border text-champagne-gold flex-shrink-0">
                <MessageSquare className="w-6 h-6" />
              </div>
              <div className="space-y-2">
                <h3 className="font-display font-bold text-lg text-primary-text">
                  {t.contact.directMessageNote}
                </h3>
                <p className="text-secondary-text text-sm leading-relaxed">
                  {t.contact.directMessageText}
                </p>
              </div>
            </div>
          </div>

          {/* Security Advisory */}
          <div className="rounded-2xl bg-amber-500/10 border border-amber-500/25 p-8">
            <div className="flex items-start gap-4">
              <ShieldAlert className="w-6 h-6 text-amber-400 flex-shrink-0 mt-0.5" />
              <div className="space-y-2">
                <h3 className="font-display font-bold text-lg text-amber-200">
                  {t.contact.securityWarningTitle}
                </h3>
                <p className="text-secondary-text text-sm leading-relaxed">
                  {t.contact.securityWarningText}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
