import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Eye, Users, Cpu, ArrowRight, CheckCircle2, AlertTriangle, Layers, Zap } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';
import { projectInfo } from '../data/projectData';
import { StatusBadge } from '../components/StatusBadge';
import { SEOHead } from '../components/SEOHead';

export const AboutPage: React.FC = () => {
  const { language, t } = useLanguage();

  return (
    <>
      <SEOHead
        title="About Block Aura — Solana & Polygon"
        description="Learn about Block Aura (BA) — our community-first vision, core values of radical transparency, and Solana & Polygon dual-network architecture."
      />

      <div className="py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <StatusBadge label={t.hero.badgeStage} variant="gold" size="sm" />
            <h1 className="text-3xl sm:text-5xl font-display font-bold text-primary-text mt-4 mb-4">
              {t.about.title}
            </h1>
            <p className="text-champagne-gold text-base sm:text-lg font-medium">
              {language === 'en' ? 'Decentralized Multi-Chain Crypto Project' : 'Dezentrales Multi-Chain Kryptoprojekt'}
            </p>
            <p className="text-secondary-text text-sm sm:text-base mt-4 leading-relaxed">
              {t.about.shortDesc}
            </p>
          </div>

          {/* Mission & Identity Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-20">
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs uppercase tracking-widest text-champagne-gold font-mono font-semibold">
                {language === 'en' ? 'Core Purpose' : 'Hauptzweck'}
              </span>
              <h2 className="text-2xl sm:text-3xl font-display font-bold text-primary-text">
                {language === 'en' ? 'Built for High-Speed Decentralized Finance' : 'Entwickelt für dezentrale Finanztechnologie'}
              </h2>
              <p className="text-secondary-text text-base leading-relaxed">
                {language === 'en'
                  ? 'Block Aura unites high-speed execution on Solana with deep Ethereum-compatible liquidity on Polygon, ensuring an agile, accessible, and community-first asset.'
                  : 'Block Aura verbindet Hochgeschwindigkeits-Transaktionen auf Solana mit breiter EVM-Liquidität auf Polygon für ein agiles, zugängliches und gemeinschaftsorientiertes Krypto-Asset.'}
              </p>
              <div className="pt-2 flex flex-wrap gap-3">
                <span className="px-3 py-1 text-xs font-mono bg-surface border border-purple-500/40 rounded-full text-purple-300">
                  Solana Network
                </span>
                <span className="px-3 py-1 text-xs font-mono bg-surface border border-indigo-500/40 rounded-full text-indigo-300">
                  Polygon Network
                </span>
                <span className="px-3 py-1 text-xs font-mono bg-surface border border-gold-border rounded-full text-champagne-gold">
                  Decentralized Exchange Trading
                </span>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="p-8 rounded-2xl bg-glass-card border border-gold-border shadow-gold-card relative overflow-hidden">
                <div className="w-16 h-16 rounded-full bg-champagne-gold/10 border border-champagne-gold/30 flex items-center justify-center text-champagne-gold mb-4">
                  <Eye className="w-8 h-8" />
                </div>
                <h3 className="font-display text-xl font-bold text-primary-text mb-3">
                  {language === 'en' ? 'Uncompromising Principles' : 'Kompromisslose Prinzipien'}
                </h3>
                <p className="text-secondary-text text-sm leading-relaxed mb-4">
                  {language === 'en'
                    ? 'In an ecosystem filled with unverified claims, Block Aura stands for disciplined, documented progression. We do not announce partnerships that do not exist or claim listings prior to formal execution.'
                    : 'In einem von unüberprüften Behauptungen geprägten Umfeld steht Block Aura für disziplinierte, dokumentierte Entwicklung. Wir kündigen keine fiktiven Partnerschaften oder Notierungen an.'}
                </p>
                <div className="text-xs font-mono text-champagne-gold">
                  ✓ {language === 'en' ? 'Honest status reporting' : 'Ehrliche Statusberichte'}
                </div>
              </div>
            </div>
          </div>

          {/* Uncompromising Values */}
          <div className="mb-20">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-8 rounded-2xl bg-surface border border-gold-border">
                <div className="w-12 h-12 rounded-xl bg-champagne-gold/10 border border-champagne-gold/30 flex items-center justify-center text-champagne-gold mb-6">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <h3 className="font-display text-xl font-semibold text-primary-text mb-3">
                  {language === 'en' ? 'Radical Transparency' : 'Radikale Transparenz'}
                </h3>
                <p className="text-secondary-text text-sm leading-relaxed">
                  {language === 'en'
                    ? 'No fake statistics, no fabricated price projections, and no unverified claims. Every aspect of development is reported honestly.'
                    : 'Keine falschen Zahlen, keine erfundenen Kursprognosen und keine unbelegten Versprechen. Jeder Entwicklungsschritt wird ehrlich kommuniziert.'}
                </p>
              </div>

              <div className="p-8 rounded-2xl bg-surface border border-gold-border">
                <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-purple-300 mb-6">
                  <Layers className="w-6 h-6" />
                </div>
                <h3 className="font-display text-xl font-semibold text-primary-text mb-3">
                  {language === 'en' ? 'Dual-Chain Scaling' : 'Dual-Chain Skalierung'}
                </h3>
                <p className="text-secondary-text text-sm leading-relaxed">
                  {language === 'en'
                    ? 'Operating on both Solana and Polygon ensures low fees, rapid confirmation, and broad decentralized exchange accessibility.'
                    : 'Der Betrieb auf Solana und Polygon sichert niedrige Gebühren, schnelle Abwicklung und breite DEX-Erreichbarkeit.'}
                </p>
              </div>

              <div className="p-8 rounded-2xl bg-surface border border-gold-border">
                <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-neon-cyan mb-6">
                  <Cpu className="w-6 h-6" />
                </div>
                <h3 className="font-display text-xl font-semibold text-primary-text mb-3">
                  {language === 'en' ? 'AI Digital Vision' : 'KI-Zukunftsvision'}
                </h3>
                <p className="text-secondary-text text-sm leading-relaxed">
                  {language === 'en'
                    ? 'Preparing high-speed on-chain infrastructure designed to interact with autonomous digital networks and data-rich applications.'
                    : 'Vorbereitung von Hochgeschwindigkeits-Infrastruktur für autonome digitale Netzwerke und datenreiche Anwendungen.'}
                </p>
              </div>
            </div>
          </div>

          {/* Current Status Clarity Callout */}
          <div className="rounded-2xl bg-glass-card border border-amber-500/30 p-8 sm:p-12 mb-16">
            <div className="flex flex-col md:flex-row items-start gap-6">
              <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400">
                <AlertTriangle className="w-8 h-8" />
              </div>
              <div className="space-y-3 flex-1">
                <h3 className="text-xl sm:text-2xl font-display font-bold text-primary-text">
                  {language === 'en' ? 'Project Development Status' : 'Aktueller Projektstatus'}
                </h3>
                <p className="text-secondary-text text-sm sm:text-base leading-relaxed">
                  {language === 'en'
                    ? 'Block Aura is in active pre-deployment development across Solana and Polygon. Token contracts have not yet been deployed to mainnet, and no presales or wallet connections are active.'
                    : 'Block Aura befindet sich in der aktiven Vor-Bereitstellungsphase für Solana und Polygon. Token-Contracts sind noch nicht im Mainnet deployed und es finden keine Vorverkäufe statt.'}
                </p>
              </div>
            </div>
          </div>

          {/* Bottom Navigation CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-center">
            <Link
              to="/#dex"
              className="w-full sm:w-auto px-8 py-3.5 rounded-full font-bold text-xs tracking-wider uppercase bg-champagne-gold text-background hover:bg-champagne-gold-light transition-all flex items-center justify-center gap-2"
            >
              <span>{t.nav.buyBlockAura}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
