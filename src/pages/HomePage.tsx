import React, { useState } from 'react';
import {
  ArrowRight,
  Zap,
  Flame,
  Droplets,
  Cpu,
  Shield,
  Layers,
  ChevronDown,
  ArrowUpRight,
  ExternalLink,
  CheckCircle2,
  Lock,
  Sparkles,
} from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';
import { projectInfo, roadmapData, faqData } from '../data/projectData';
import { HeroSphere } from '../components/HeroSphere';
import { SEOHead } from '../components/SEOHead';

export const HomePage: React.FC = () => {
  const { language, t } = useLanguage();
  const [openFaqId, setOpenFaqId] = useState<string | null>('faq-1');

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -80;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <>
      <SEOHead
        title="Block Aura (BA) — Solana & Polygon"
        description="Block Aura is a decentralized cryptocurrency project operating across the Solana and Polygon networks."
      />

      {/* 1. HERO SECTION */}
      <section
        id="home"
        className="relative min-h-[85vh] sm:min-h-[90vh] flex items-center justify-center overflow-hidden pt-8 pb-20"
      >
        {/* Subtle futuristic background lights */}
        <div className="absolute inset-0 bg-hero-radial pointer-events-none" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-neon-cyan/5 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Column: Copy, Badges, CTAs */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              {/* Dual-Network Badges & Stage */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2.5">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-semibold bg-champagne-gold/15 text-champagne-gold border border-champagne-gold/30">
                  <span className="w-1.5 h-1.5 rounded-full bg-champagne-gold animate-pulse" />
                  {t.hero.badgeStage}
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-semibold bg-purple-500/10 text-purple-300 border border-purple-500/30">
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                  {t.hero.badgeSolana}
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-semibold bg-indigo-500/10 text-indigo-300 border border-indigo-500/30">
                  <span className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
                  {t.hero.badgePolygon}
                </span>
              </div>

              {/* Tagline & Headline */}
              <div className="space-y-3">
                <span className="text-xs sm:text-sm font-semibold tracking-widest uppercase text-champagne-gold block font-mono">
                  {t.hero.tagline}
                </span>
                <h1 className="text-3xl sm:text-5xl lg:text-6xl font-display font-bold text-primary-text leading-[1.15] tracking-tight">
                  {t.hero.headline}
                </h1>
              </div>

              {/* Short project description */}
              <p className="text-secondary-text text-base sm:text-lg max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
                {t.hero.subheadline}
              </p>

              {/* Clean CTAs */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
                <button
                  type="button"
                  onClick={() => scrollToSection('dex')}
                  className="w-full sm:w-auto px-8 py-3.5 rounded-full font-bold text-xs tracking-wider uppercase bg-champagne-gold text-background hover:bg-champagne-gold-light active:scale-95 transition-all shadow-gold-subtle hover:shadow-gold-glow flex items-center justify-center gap-2"
                >
                  <Zap className="w-4 h-4 fill-current" />
                  <span>{t.hero.ctaBuy}</span>
                </button>
                <button
                  type="button"
                  onClick={() => scrollToSection('ecosystem')}
                  className="w-full sm:w-auto px-8 py-3.5 rounded-full font-bold text-xs tracking-wider uppercase bg-surface border border-gold-border hover:border-champagne-gold hover:text-champagne-gold transition-all flex items-center justify-center gap-2 text-primary-text"
                >
                  <span>{t.hero.ctaEcosystem}</span>
                  <ArrowRight className="w-4 h-4 text-champagne-gold" />
                </button>
              </div>

              {/* Honest Notice */}
              <div className="pt-2">
                <p className="text-xs text-secondary-text/80 flex items-center justify-center lg:justify-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                  <span>{t.hero.disclaimerNotice}</span>
                </p>
              </div>
            </div>

            {/* Right Column: 3D Sphere Interactive Visual */}
            <div className="lg:col-span-5 flex items-center justify-center relative">
              <HeroSphere />
            </div>
          </div>
        </div>
      </section>

      {/* 2. ABOUT BLOCK AURA */}
      <section id="about" className="py-20 bg-surface/50 border-y border-gold-border/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-widest text-champagne-gold font-mono font-semibold">
              {t.about.badge}
            </span>
            <h2 className="text-2xl sm:text-4xl font-display font-bold text-primary-text mt-2 mb-4">
              {t.about.title}
            </h2>
            <p className="text-secondary-text text-sm sm:text-base leading-relaxed">
              {t.about.shortDesc}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl bg-surface border border-gold-border/40 hover:border-champagne-gold/60 transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-purple-300 mb-6">
                <Layers className="w-6 h-6" />
              </div>
              <h3 className="font-display text-lg font-semibold text-primary-text mb-2">
                {t.about.pillar1Title}
              </h3>
              <p className="text-secondary-text text-sm leading-relaxed">
                {t.about.pillar1Desc}
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-surface border border-gold-border/40 hover:border-champagne-gold/60 transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-champagne-gold/10 border border-champagne-gold/30 flex items-center justify-center text-champagne-gold mb-6">
                <Zap className="w-6 h-6" />
              </div>
              <h3 className="font-display text-lg font-semibold text-primary-text mb-2">
                {t.about.pillar2Title}
              </h3>
              <p className="text-secondary-text text-sm leading-relaxed">
                {t.about.pillar2Desc}
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-surface border border-gold-border/40 hover:border-champagne-gold/60 transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-300 mb-6">
                <Flame className="w-6 h-6" />
              </div>
              <h3 className="font-display text-lg font-semibold text-primary-text mb-2">
                {t.about.pillar3Title}
              </h3>
              <p className="text-secondary-text text-sm leading-relaxed">
                {t.about.pillar3Desc}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. BLOCKCHAIN NETWORKS (Solana & Polygon) */}
      <section id="networks" className="py-20 sm:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-widest text-champagne-gold font-mono font-semibold">
              {t.networks.badge}
            </span>
            <h2 className="text-2xl sm:text-4xl font-display font-bold text-primary-text mt-2 mb-4">
              {t.networks.title}
            </h2>
            <p className="text-secondary-text text-sm sm:text-base">
              {t.networks.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Solana Network Card */}
            <div className="p-8 sm:p-10 rounded-2xl bg-surface border border-purple-500/30 shadow-2xl relative overflow-hidden group hover:border-purple-400 transition-all">
              <div className="absolute top-0 right-0 w-48 h-48 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-purple-500/20 border border-purple-500/40 flex items-center justify-center text-purple-300 font-display font-bold">
                    SOL
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-bold text-primary-text">
                      {t.networks.solanaTitle}
                    </h3>
                    <span className="text-xs font-mono text-purple-300">{t.networks.solanaTag}</span>
                  </div>
                </div>
                <span className="px-3 py-1 rounded-full text-[10px] font-mono font-semibold bg-purple-500/20 text-purple-300 border border-purple-500/30">
                  Supported Network
                </span>
              </div>

              <p className="text-secondary-text text-sm leading-relaxed mb-8">
                {t.networks.solanaDesc}
              </p>

              <div className="grid grid-cols-2 gap-4 pt-6 border-t border-purple-500/20">
                <div className="p-4 rounded-xl bg-background border border-purple-500/20">
                  <div className="font-display text-lg font-bold text-purple-300">
                    {t.networks.solanaStat1}
                  </div>
                  <div className="text-xs text-secondary-text mt-0.5">{t.networks.solanaStat1Label}</div>
                </div>
                <div className="p-4 rounded-xl bg-background border border-purple-500/20">
                  <div className="font-display text-lg font-bold text-neon-cyan">
                    {t.networks.solanaStat2}
                  </div>
                  <div className="text-xs text-secondary-text mt-0.5">{t.networks.solanaStat2Label}</div>
                </div>
              </div>
            </div>

            {/* Polygon Network Card */}
            <div className="p-8 sm:p-10 rounded-2xl bg-surface border border-indigo-500/30 shadow-2xl relative overflow-hidden group hover:border-indigo-400 transition-all">
              <div className="absolute top-0 right-0 w-48 h-48 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-indigo-500/20 border border-indigo-500/40 flex items-center justify-center text-indigo-300 font-display font-bold">
                    POL
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-bold text-primary-text">
                      {t.networks.polygonTitle}
                    </h3>
                    <span className="text-xs font-mono text-indigo-300">{t.networks.polygonTag}</span>
                  </div>
                </div>
                <span className="px-3 py-1 rounded-full text-[10px] font-mono font-semibold bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
                  Supported Network
                </span>
              </div>

              <p className="text-secondary-text text-sm leading-relaxed mb-8">
                {t.networks.polygonDesc}
              </p>

              <div className="grid grid-cols-2 gap-4 pt-6 border-t border-indigo-500/20">
                <div className="p-4 rounded-xl bg-background border border-indigo-500/20">
                  <div className="font-display text-lg font-bold text-indigo-300">
                    {t.networks.polygonStat1}
                  </div>
                  <div className="text-xs text-secondary-text mt-0.5">{t.networks.polygonStat1Label}</div>
                </div>
                <div className="p-4 rounded-xl bg-background border border-indigo-500/20">
                  <div className="font-display text-lg font-bold text-champagne-gold">
                    {t.networks.polygonStat2}
                  </div>
                  <div className="text-xs text-secondary-text mt-0.5">{t.networks.polygonStat2Label}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. TOKEN & ECOSYSTEM: DEX AVAILABILITY, BURNING, LAUNCH POOL */}
      <section id="token" className="py-20 sm:py-24 bg-surface/40 border-y border-gold-border/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
          
          {/* A. BUY BLOCK AURA / DECENTRALIZED EXCHANGES */}
          <div id="dex" className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <span className="text-xs uppercase tracking-widest text-champagne-gold font-mono font-semibold">
                {t.dex.badge}
              </span>
              <h2 className="text-2xl sm:text-4xl font-display font-bold text-primary-text mt-2 mb-3">
                {t.dex.title}
              </h2>
              <p className="text-champagne-gold text-sm sm:text-base font-medium max-w-2xl mx-auto">
                {t.dex.subtitle}
              </p>
              <p className="text-secondary-text text-sm max-w-xl mx-auto mt-2 leading-relaxed">
                {t.dex.desc}
              </p>
            </div>

            <div className="rounded-2xl bg-surface border border-gold-border p-8 sm:p-10 shadow-gold-card">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                {/* Solana DEX Card */}
                <div className="p-6 rounded-xl bg-background border border-purple-500/30">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="w-2 h-2 rounded-full bg-purple-400" />
                    <h3 className="font-display font-semibold text-base text-primary-text">
                      {t.dex.cardSolanaDex}
                    </h3>
                  </div>
                  <p className="text-secondary-text text-xs sm:text-sm leading-relaxed mb-4">
                    {t.dex.cardSolanaDexDesc}
                  </p>
                  <span className="text-[11px] font-mono text-purple-300">
                    {t.dex.availabilityText}
                  </span>
                </div>

                {/* Polygon DEX Card */}
                <div className="p-6 rounded-xl bg-background border border-indigo-500/30">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="w-2 h-2 rounded-full bg-indigo-400" />
                    <h3 className="font-display font-semibold text-base text-primary-text">
                      {t.dex.cardPolygonDex}
                    </h3>
                  </div>
                  <p className="text-secondary-text text-xs sm:text-sm leading-relaxed mb-4">
                    {t.dex.cardPolygonDexDesc}
                  </p>
                  <span className="text-[11px] font-mono text-indigo-300">
                    {t.dex.availabilityText}
                  </span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 border-t border-gold-border/30">
                <a
                  href="#dex"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('dex');
                  }}
                  className="w-full sm:w-auto px-7 py-3 rounded-full font-bold text-xs tracking-wider uppercase bg-champagne-gold text-background hover:bg-champagne-gold-light transition-all flex items-center justify-center gap-2 shadow-gold-subtle"
                >
                  <Zap className="w-3.5 h-3.5 fill-current" />
                  <span>{t.dex.ctaBuy}</span>
                </a>
                <a
                  href="#dex"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('dex');
                  }}
                  className="w-full sm:w-auto px-7 py-3 rounded-full font-bold text-xs tracking-wider uppercase bg-surface border border-gold-border hover:border-champagne-gold text-champagne-gold transition-all flex items-center justify-center gap-2"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>{t.dex.ctaExplore}</span>
                </a>
                <a
                  href="#token"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('token');
                  }}
                  className="w-full sm:w-auto px-7 py-3 rounded-full font-bold text-xs tracking-wider uppercase bg-surface border border-gold-border hover:border-champagne-gold text-secondary-text hover:text-primary-text transition-all flex items-center justify-center gap-2"
                >
                  <span>{t.dex.ctaViewToken}</span>
                </a>
              </div>

              <div className="mt-6 text-center">
                <span className="text-xs text-secondary-text font-mono">
                  ℹ {t.dex.noFakeNotice}
                </span>
              </div>
            </div>
          </div>

          {/* B. TOKEN BURNING SECTION */}
          <div id="burning" className="max-w-5xl mx-auto">
            <div className="p-8 sm:p-12 rounded-2xl bg-surface border border-amber-500/30 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />
              
              <div className="flex flex-col md:flex-row items-start gap-8">
                <div className="p-4 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-amber-400 flex-shrink-0">
                  <Flame className="w-10 h-10" />
                </div>
                <div className="space-y-4 flex-1">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono font-semibold uppercase tracking-widest text-amber-400">
                      {t.burning.badge}
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono bg-amber-500/20 text-amber-300 border border-amber-500/30">
                      Deflationary Strategy
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-display font-bold text-primary-text">
                    {t.burning.title}
                  </h3>

                  <p className="text-secondary-text text-sm sm:text-base leading-relaxed">
                    {t.burning.desc}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
                    <div className="p-4 rounded-xl bg-background border border-gold-border/20">
                      <div className="font-semibold text-xs text-primary-text mb-1">
                        {t.burning.point1Title}
                      </div>
                      <div className="text-[11px] text-secondary-text leading-relaxed">
                        {t.burning.point1Desc}
                      </div>
                    </div>
                    <div className="p-4 rounded-xl bg-background border border-gold-border/20">
                      <div className="font-semibold text-xs text-primary-text mb-1">
                        {t.burning.point2Title}
                      </div>
                      <div className="text-[11px] text-secondary-text leading-relaxed">
                        {t.burning.point2Desc}
                      </div>
                    </div>
                    <div className="p-4 rounded-xl bg-background border border-gold-border/20">
                      <div className="font-semibold text-xs text-primary-text mb-1">
                        {t.burning.point3Title}
                      </div>
                      <div className="text-[11px] text-secondary-text leading-relaxed">
                        {t.burning.point3Desc}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* C. LAUNCH / LIQUIDITY POOL */}
          <div id="launchpool" className="max-w-5xl mx-auto">
            <div className="p-8 sm:p-12 rounded-2xl bg-surface border border-cyan-500/30 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

              <div className="flex flex-col md:flex-row items-start gap-8">
                <div className="p-4 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 text-neon-cyan flex-shrink-0">
                  <Droplets className="w-10 h-10" />
                </div>
                <div className="space-y-4 flex-1">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono font-semibold uppercase tracking-widest text-neon-cyan">
                      {t.launchPool.badge}
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
                      Multi-Chain Liquidity
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-display font-bold text-primary-text">
                    {t.launchPool.title}
                  </h3>

                  <p className="text-secondary-text text-sm sm:text-base leading-relaxed">
                    {t.launchPool.desc}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
                    <div className="p-4 rounded-xl bg-background border border-gold-border/20">
                      <div className="font-semibold text-xs text-primary-text mb-1">
                        {t.launchPool.point1Title}
                      </div>
                      <div className="text-[11px] text-secondary-text leading-relaxed">
                        {t.launchPool.point1Desc}
                      </div>
                    </div>
                    <div className="p-4 rounded-xl bg-background border border-gold-border/20">
                      <div className="font-semibold text-xs text-primary-text mb-1">
                        {t.launchPool.point2Title}
                      </div>
                      <div className="text-[11px] text-secondary-text leading-relaxed">
                        {t.launchPool.point2Desc}
                      </div>
                    </div>
                    <div className="p-4 rounded-xl bg-background border border-gold-border/20">
                      <div className="font-semibold text-xs text-primary-text mb-1">
                        {t.launchPool.point3Title}
                      </div>
                      <div className="text-[11px] text-secondary-text leading-relaxed">
                        {t.launchPool.point3Desc}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 5. AI + FUTURE VISION */}
      <section id="ai" className="py-20 sm:py-24 bg-background relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-neon-cyan/5 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-widest text-champagne-gold font-mono font-semibold">
              {t.ai.badge}
            </span>
            <h2 className="text-2xl sm:text-4xl font-display font-bold text-primary-text mt-2 mb-4">
              {t.ai.title}
            </h2>
            <p className="text-secondary-text text-sm sm:text-base leading-relaxed">
              {t.ai.desc}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="p-8 rounded-2xl bg-surface border border-gold-border hover:border-neon-cyan/50 transition-all">
              <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-neon-cyan mb-6">
                <Cpu className="w-6 h-6" />
              </div>
              <h3 className="font-display text-lg font-semibold text-primary-text mb-2">
                {t.ai.card1Title}
              </h3>
              <p className="text-secondary-text text-sm leading-relaxed">
                {t.ai.card1Desc}
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-surface border border-gold-border hover:border-champagne-gold/60 transition-all">
              <div className="w-12 h-12 rounded-xl bg-champagne-gold/10 border border-champagne-gold/30 flex items-center justify-center text-champagne-gold mb-6">
                <Shield className="w-6 h-6" />
              </div>
              <h3 className="font-display text-lg font-semibold text-primary-text mb-2">
                {t.ai.card2Title}
              </h3>
              <p className="text-secondary-text text-sm leading-relaxed">
                {t.ai.card2Desc}
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-surface border border-gold-border hover:border-purple-500/50 transition-all">
              <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-purple-300 mb-6">
                <Sparkles className="w-6 h-6" />
              </div>
              <h3 className="font-display text-lg font-semibold text-primary-text mb-2">
                {t.ai.card3Title}
              </h3>
              <p className="text-secondary-text text-sm leading-relaxed">
                {t.ai.card3Desc}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. ROADMAP (Simple clean timeline) */}
      <section id="roadmap" className="py-20 sm:py-24 bg-surface/40 border-y border-gold-border/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-widest text-champagne-gold font-mono font-semibold">
              {t.roadmap.badge}
            </span>
            <h2 className="text-2xl sm:text-4xl font-display font-bold text-primary-text mt-2 mb-3">
              {t.roadmap.title}
            </h2>
            <p className="text-secondary-text text-sm sm:text-base">
              {t.roadmap.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {roadmapData.map((phase) => {
              const isCurrent = phase.status === 'in_progress';
              return (
                <div
                  key={phase.phaseNumber}
                  className={`p-6 rounded-2xl border flex flex-col justify-between transition-all ${
                    isCurrent
                      ? 'bg-surface border-champagne-gold/60 shadow-gold-subtle'
                      : 'bg-surface/80 border-gold-border/30'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs font-mono font-bold text-champagne-gold uppercase">
                        {phase.badge[language]}
                      </span>
                      <span
                        className={`text-[10px] font-semibold px-2 py-0.5 rounded-full ${
                          isCurrent
                            ? 'bg-champagne-gold/20 text-champagne-gold border border-champagne-gold/40'
                            : 'bg-background text-secondary-text border border-gold-border/30'
                        }`}
                      >
                        {phase.statusLabel[language]}
                      </span>
                    </div>

                    <h3 className="font-display text-base font-bold text-primary-text mb-2">
                      {phase.title[language]}
                    </h3>

                    <p className="text-secondary-text text-xs leading-relaxed mb-4">
                      {phase.description[language]}
                    </p>
                  </div>

                  <ul className="space-y-2 text-xs text-primary-text/90 pt-3 border-t border-gold-border/20">
                    {phase.milestones[language].map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle2
                          className={`w-3.5 h-3.5 flex-shrink-0 mt-0.5 ${
                            isCurrent ? 'text-champagne-gold' : 'text-secondary-text'
                          }`}
                        />
                        <span className="text-[11px] leading-tight">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 7. FAQ (Only important questions) */}
      <section id="faq" className="py-20 sm:py-24 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-xs uppercase tracking-widest text-champagne-gold font-mono font-semibold">
              {t.faq.badge}
            </span>
            <h2 className="text-2xl sm:text-4xl font-display font-bold text-primary-text mt-2 mb-3">
              {t.faq.title}
            </h2>
            <p className="text-secondary-text text-sm sm:text-base">
              {t.faq.subtitle}
            </p>
          </div>

          <div className="space-y-4">
            {faqData.map((faq) => {
              const isOpen = openFaqId === faq.id;
              return (
                <div
                  key={faq.id}
                  className="rounded-xl bg-surface border border-gold-border/40 overflow-hidden transition-colors"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaqId(isOpen ? null : faq.id)}
                    className="w-full px-6 py-4 sm:py-5 text-left flex items-center justify-between text-base font-semibold text-primary-text hover:text-champagne-gold transition-colors focus:outline-none"
                    aria-expanded={isOpen}
                  >
                    <span className="pr-4">{faq.question[language]}</span>
                    <ChevronDown
                      className={`w-5 h-5 text-champagne-gold flex-shrink-0 transition-transform duration-200 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-6 pb-6 pt-2 text-sm text-secondary-text leading-relaxed border-t border-gold-border/20">
                      {faq.answer[language]}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 8. FINAL CTA */}
      <section className="py-20 bg-surface/50 relative overflow-hidden border-t border-gold-border/30">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-glass-card border border-champagne-gold/40 p-8 sm:p-14 text-center relative overflow-hidden shadow-gold-glow">
            <div className="absolute top-0 right-0 w-64 h-64 bg-champagne-gold/10 rounded-full blur-3xl pointer-events-none" />

            <span className="text-xs uppercase tracking-widest text-champagne-gold font-mono font-semibold block mb-3">
              {t.finalCta.badge}
            </span>

            <h2 className="text-2xl sm:text-4xl font-display font-bold text-primary-text mb-4">
              {t.finalCta.title}
            </h2>

            <p className="text-secondary-text max-w-xl mx-auto text-sm sm:text-base leading-relaxed mb-8">
              {t.finalCta.subtitle}
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                type="button"
                onClick={() => scrollToSection('dex')}
                className="w-full sm:w-auto px-8 py-3.5 rounded-full font-bold text-xs tracking-wider uppercase bg-champagne-gold text-background hover:bg-champagne-gold-light active:scale-95 transition-all shadow-gold-subtle flex items-center justify-center gap-2"
              >
                <Zap className="w-4 h-4 fill-current" />
                <span>{t.finalCta.ctaBuy}</span>
              </button>

              <a
                href={projectInfo.socials.x}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-3.5 rounded-full font-bold text-xs tracking-wider uppercase bg-surface border border-gold-border hover:border-champagne-gold text-primary-text hover:text-champagne-gold transition-all flex items-center justify-center gap-2"
              >
                <span>{t.finalCta.ctaCommunity}</span>
                <ArrowUpRight className="w-4 h-4 text-champagne-gold" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
