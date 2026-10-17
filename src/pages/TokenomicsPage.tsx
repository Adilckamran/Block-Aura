import React from 'react';
import { Link } from 'react-router-dom';
import {
  Coins,
  Shield,
  Layers,
  Flame,
  Droplets,
  AlertCircle,
  Clock,
  ArrowRight,
  CheckCircle2,
  Lock,
} from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';
import { projectInfo } from '../data/projectData';
import { StatusBadge } from '../components/StatusBadge';
import { SEOHead } from '../components/SEOHead';

export const TokenomicsPage: React.FC = () => {
  const { language, t } = useLanguage();

  return (
    <>
      <SEOHead
        title="Tokenomics — Block Aura (BA)"
        description="Official Block Aura (BA) tokenomics on Solana & Polygon. Dual-chain specifications, burning mechanism, launch pool, and decentralized exchange liquidity."
      />

      <div className="py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <StatusBadge label={t.common.pendingConfirmation} variant="amber" size="sm" />
            <h1 className="text-3xl sm:text-5xl font-display font-bold text-primary-text mt-4 mb-4">
              Token &amp; Ecosystem Economics
            </h1>
            <p className="text-champagne-gold text-base sm:text-lg font-medium">
              Dual-Chain Operational Parameters on Solana &amp; Polygon
            </p>
            <p className="text-secondary-text text-sm sm:text-base mt-4 leading-relaxed">
              {language === 'en'
                ? 'Block Aura operates natively across Solana and Polygon, engineered with a structured burning mechanism, launch pool liquidity infrastructure, and decentralized exchange accessibility.'
                : 'Block Aura agiert nativ auf Solana und Polygon, ausgestattet mit einem strukturierten Burning-Mechanismus, Launch-Pool-Liquidität und dezentraler DEX-Erreichbarkeit.'}
            </p>
          </div>

          {/* Asset Specifications Grid */}
          <div className="mb-16">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-xl sm:text-2xl font-display font-bold text-primary-text">
                Asset Parameters
              </h2>
              <span className="text-xs font-mono text-champagne-gold">
                Solana &amp; Polygon Dual-Chain
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="p-6 rounded-2xl bg-surface border border-gold-border">
                <div className="text-xs uppercase font-mono text-secondary-text mb-2">
                  Token Name
                </div>
                <div className="text-2xl font-display font-bold text-primary-text">
                  {projectInfo.brandName}
                </div>
                <div className="text-xs text-secondary-text mt-1">Official Asset Name</div>
              </div>

              <div className="p-6 rounded-2xl bg-surface border border-gold-border">
                <div className="text-xs uppercase font-mono text-secondary-text mb-2">
                  Ticker Symbol
                </div>
                <div className="text-2xl font-display font-bold text-champagne-gold">
                  {projectInfo.ticker}
                </div>
                <div className="text-xs text-secondary-text mt-1">Symbol Insignia</div>
              </div>

              <div className="p-6 rounded-2xl bg-surface border border-purple-500/30">
                <div className="text-xs uppercase font-mono text-purple-300 mb-2">
                  Primary Chain 1
                </div>
                <div className="text-2xl font-display font-bold text-purple-300">
                  Solana
                </div>
                <div className="text-xs text-secondary-text mt-1">High-Speed SPL Protocol</div>
              </div>

              <div className="p-6 rounded-2xl bg-surface border border-indigo-500/30">
                <div className="text-xs uppercase font-mono text-indigo-300 mb-2">
                  Primary Chain 2
                </div>
                <div className="text-2xl font-display font-bold text-indigo-300">
                  Polygon
                </div>
                <div className="text-xs text-secondary-text mt-1">Scalable EVM Protocol</div>
              </div>

              <div className="p-6 rounded-2xl bg-surface border border-gold-border">
                <div className="text-xs uppercase font-mono text-secondary-text mb-2">
                  Deployment Status
                </div>
                <div className="text-xl font-display font-bold text-amber-300">
                  In Development
                </div>
                <div className="text-xs text-secondary-text mt-1">Pre-deployment architecture</div>
              </div>

              <div className="p-6 rounded-2xl bg-surface border border-gold-border">
                <div className="text-xs uppercase font-mono text-secondary-text mb-2">
                  Contract Addresses
                </div>
                <div className="text-xl font-display font-bold text-amber-300">
                  Pending Confirmation
                </div>
                <div className="text-xs text-secondary-text mt-1">Announced upon mainnet release</div>
              </div>

              <div className="p-6 rounded-2xl bg-surface border border-purple-500/30">
                <div className="text-xs uppercase font-mono text-purple-300 mb-2">
                  Solana Planned Supply
                </div>
                <div className="text-xl font-display font-bold text-purple-300">
                  {projectInfo.plannedSupply.solana}
                </div>
                <div className="text-xs text-secondary-text mt-1">Planned allocation on Solana</div>
              </div>

              <div className="p-6 rounded-2xl bg-surface border border-indigo-500/30">
                <div className="text-xs uppercase font-mono text-indigo-300 mb-2">
                  Polygon Planned Supply
                </div>
                <div className="text-xl font-display font-bold text-indigo-300">
                  {projectInfo.plannedSupply.polygon}
                </div>
                <div className="text-xs text-secondary-text mt-1">Planned allocation on Polygon</div>
              </div>

              <div className="p-6 rounded-2xl bg-surface border border-gold-border">
                <div className="text-xs uppercase font-mono text-secondary-text mb-2">
                  Trading Availability
                </div>
                <div className="text-xl font-display font-bold text-champagne-gold">
                  Decentralized Exchanges
                </div>
                <div className="text-xs text-secondary-text mt-1">Supported DEX pools at launch</div>
              </div>
            </div>

            {/* Architecture Confirmation Callout */}
            <div className="mt-6 p-5 rounded-xl bg-background border border-gold-border/40 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-amber-400" />
                  <span className="text-xs font-mono font-semibold uppercase text-amber-300">
                    {language === 'en' ? 'Architecture Status: Pending Confirmation' : 'Architekturstatus: Bestätigung ausstehend'}
                  </span>
                </div>
                <p className="text-xs text-secondary-text leading-relaxed max-w-3xl">
                  {projectInfo.plannedSupply.note[language]}
                </p>
              </div>
              <div className="flex items-center gap-3 flex-shrink-0">
                <Link
                  to="/whitepaper"
                  className="px-4 py-2 rounded-lg text-xs font-semibold uppercase bg-surface border border-gold-border hover:border-champagne-gold text-champagne-gold transition-colors"
                >
                  {language === 'en' ? 'View Whitepaper' : 'Whitepaper ansehen'}
                </Link>
                <a
                  href="/block-aura-whitepaper.pdf"
                  download="block-aura-whitepaper.pdf"
                  className="px-4 py-2 rounded-lg text-xs font-semibold uppercase bg-champagne-gold text-background hover:bg-champagne-gold-light transition-colors"
                >
                  PDF
                </a>
              </div>
            </div>
          </div>

          {/* Burning & Launch Pool Dual Highlight Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="p-8 rounded-2xl bg-surface border border-amber-500/30">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-400">
                  <Flame className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-mono uppercase text-amber-400 tracking-wider">Deflationary</span>
                  <h3 className="font-display font-bold text-xl text-primary-text">Token Burning Mechanism</h3>
                </div>
              </div>
              <p className="text-secondary-text text-sm leading-relaxed mb-4">
                Selected tokens may be permanently removed from circulation through the Block Aura burning mechanism, supporting a structured and sustainable token ecosystem.
              </p>
              <div className="text-xs text-secondary-text font-mono">
                ✓ Irreversible on-chain destruction without speculative inflation
              </div>
            </div>

            <div className="p-8 rounded-2xl bg-surface border border-cyan-500/30">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-neon-cyan">
                  <Droplets className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-mono uppercase text-neon-cyan tracking-wider">Liquidity</span>
                  <h3 className="font-display font-bold text-xl text-primary-text">Launch Pool Infrastructure</h3>
                </div>
              </div>
              <p className="text-secondary-text text-sm leading-relaxed mb-4">
                Liquidity infrastructure designed to support the Block Aura ecosystem at launch across Solana and Polygon decentralized exchange pools.
              </p>
              <div className="text-xs text-secondary-text font-mono">
                ✓ Non-custodial DEX liquidity bootstrapping
              </div>
            </div>
          </div>

          {/* Navigation CTA */}
          <div className="text-center">
            <Link
              to="/#dex"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-bold text-xs tracking-wider uppercase bg-champagne-gold text-background hover:bg-champagne-gold-light transition-all shadow-gold-subtle"
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
