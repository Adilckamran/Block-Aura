import React from 'react';
import { Activity, ShieldCheck, Database, Layers, AlertCircle } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';
import { projectInfo } from '../data/projectData';
import { StatusBadge } from './StatusBadge';

/**
 * Future Market Data Configuration Point:
 * When the BA token contracts are deployed on Solana and Polygon mainnets:
 * 1. Set the contract addresses in src/data/projectData.ts
 * 2. Configure DEX telemetry feeds (e.g., DexScreener, Raydium/QuickSwap or CoinGecko)
 */
export const MarketDataSection: React.FC = () => {
  const { language } = useLanguage();

  return (
    <section className="py-16 sm:py-20 bg-background relative overflow-hidden" id="market-data">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-champagne-gold/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 mb-3">
            <Activity className="w-4 h-4 text-champagne-gold" />
            <span className="text-xs uppercase tracking-widest text-champagne-gold font-semibold">
              {language === 'en' ? 'Verified Live Telemetry' : 'Verifizierte Live-Telemetrie'}
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-bold text-primary-text mb-4">
            {language === 'en' ? 'Market Valuation & Metrics' : 'Marktbewertung & Kennzahlen'}
          </h2>
          <p className="text-sm sm:text-base text-secondary-text">
            {language === 'en'
              ? 'Block Aura strictly avoids fabricating placeholders, simulated charts, or unverified market figures.'
              : 'Block Aura verzichtet strikt auf erfundene Platzhalter, simulierte Diagramme oder unbestätigte Marktstatistiken.'}
          </p>
        </div>

        <div className="max-w-4xl mx-auto rounded-2xl bg-glass-card p-6 sm:p-10 border border-gold-border relative shadow-gold-card">
          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full border border-champagne-gold/30 bg-surface flex items-center justify-center mb-6 shadow-gold-subtle relative">
              <Database className="w-8 h-8 text-champagne-gold" />
              <div className="absolute inset-0 rounded-full border border-champagne-gold/40 animate-ping opacity-25" />
            </div>

            <StatusBadge
              label={language === 'en' ? 'Pending Mainnet Deployment' : 'Mainnet-Bereitstellung ausstehend'}
              variant="amber"
              size="md"
            />

            <h3 className="text-xl sm:text-2xl font-display font-semibold text-primary-text mt-4 mb-3">
              {language === 'en' ? 'Market Data Unavailable' : 'Marktdaten nicht verfügbar'}
            </h3>

            <p className="text-secondary-text max-w-xl text-sm sm:text-base leading-relaxed mb-8">
              {language === 'en'
                ? 'Market data will become available after official token deployment and verification on supported Solana and Polygon decentralized exchanges. No pricing, liquidity, or trading metrics are currently active.'
                : 'Marktdaten werden nach der offiziellen Bereitstellung und Verifizierung des Tokens auf unterstützten dezentralen Börsen (Solana & Polygon) verfügbar sein. Derzeit sind keine Preis- oder Handelsmetriken aktiv.'}
            </p>

            <div className="w-full grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-gold-border/30">
              <div className="p-4 rounded-xl bg-surface border border-gold-border/20 text-left">
                <div className="flex items-center gap-2 text-xs text-secondary-text mb-1">
                  <Layers className="w-3.5 h-3.5 text-champagne-gold" />
                  <span>{language === 'en' ? 'Supported Chains' : 'Unterstützte Chains'}</span>
                </div>
                <div className="font-semibold text-sm text-primary-text">Solana &amp; Polygon</div>
                <div className="text-[11px] text-champagne-gold font-mono mt-0.5">Dual-Chain DEX</div>
              </div>

              <div className="p-4 rounded-xl bg-surface border border-gold-border/20 text-left">
                <div className="flex items-center gap-2 text-xs text-secondary-text mb-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-champagne-gold" />
                  <span>{language === 'en' ? 'Smart Contracts' : 'Smart Contracts'}</span>
                </div>
                <div className="font-semibold text-sm text-amber-300">
                  {language === 'en' ? 'Pending Confirmation' : 'Bestätigung ausstehend'}
                </div>
                <div className="text-[11px] text-secondary-text font-mono mt-0.5">
                  {language === 'en' ? 'In development' : 'In Entwicklung'}
                </div>
              </div>

              <div className="p-4 rounded-xl bg-surface border border-gold-border/20 text-left">
                <div className="flex items-center gap-2 text-xs text-secondary-text mb-1">
                  <Activity className="w-3.5 h-3.5 text-champagne-gold" />
                  <span>{language === 'en' ? 'DEX Liquidity' : 'DEX-Liquidität'}</span>
                </div>
                <div className="font-semibold text-sm text-primary-text">
                  {language === 'en' ? 'Launch Pool Planned' : 'Launch Pool geplant'}
                </div>
                <div className="text-[11px] text-secondary-text font-mono mt-0.5">
                  {language === 'en' ? 'Available upon launch' : 'Verfügbar zum Launch'}
                </div>
              </div>
            </div>

            <div className="mt-8 flex items-center justify-center gap-2 text-xs text-secondary-text/80 bg-background/60 px-4 py-2 rounded-full border border-gold-border/20">
              <AlertCircle className="w-3.5 h-3.5 text-champagne-gold" />
              <span>
                {language === 'en'
                  ? 'Real-time telemetry will feed via verified oracles upon official decentralized exchange liquidity creation.'
                  : 'Echtzeit-Telemetrie wird nach offizieller Bereitstellung von DEX-Liquidität über verifizierte Orakel eingebunden.'}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
