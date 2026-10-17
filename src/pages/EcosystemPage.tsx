import React from 'react';
import { Link } from 'react-router-dom';
import {
  Cpu,
  Layers,
  Zap,
  Flame,
  Droplets,
  Shield,
  ArrowRight,
  ExternalLink,
  CheckCircle2,
  Clock,
} from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';
import { projectInfo } from '../data/projectData';
import { StatusBadge } from '../components/StatusBadge';
import { SEOHead } from '../components/SEOHead';

export const EcosystemPage: React.FC = () => {
  const { language, t } = useLanguage();

  return (
    <>
      <SEOHead
        title="Technology & Ecosystem — Block Aura"
        description="Explore Block Aura's multi-chain architecture on Solana and Polygon, decentralized exchange accessibility, and sustainable tokenomics."
      />

      <div className="py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <StatusBadge label="Solana &amp; Polygon" variant="gold" size="sm" />
            <h1 className="text-3xl sm:text-5xl font-display font-bold text-primary-text mt-4 mb-4">
              Dual-Chain Technology &amp; Ecosystem
            </h1>
            <p className="text-champagne-gold text-base sm:text-lg font-medium">
              High-Throughput Solana &amp; Robust Polygon Infrastructure
            </p>
            <p className="text-secondary-text text-sm sm:text-base mt-4 leading-relaxed">
              Block Aura harnesses the distinct technical strengths of two leading blockchain ecosystems to ensure instant settlement, minimal transaction friction, and expansive decentralized exchange liquidity.
            </p>
          </div>

          {/* Technology Cards: Solana & Polygon */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
            {/* Solana */}
            <div className="p-8 sm:p-10 rounded-2xl bg-surface border border-purple-500/30 shadow-2xl space-y-4">
              <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-purple-300">
                <Zap className="w-6 h-6" />
              </div>
              <h2 className="text-2xl font-display font-bold text-primary-text">
                Solana Architecture
              </h2>
              <p className="text-secondary-text text-sm sm:text-base leading-relaxed">
                Solana provides ultra-fast block finality through its Proof of History (PoH) and Tower BFT consensus algorithms, delivering 65,000+ theoretical TPS and fractions-of-a-cent fees ideal for high-frequency decentralized trading.
              </p>
              <div className="pt-4 border-t border-purple-500/20 grid grid-cols-2 gap-4 text-xs font-mono">
                <div>
                  <span className="text-secondary-text block">Consensus:</span>
                  <span className="text-primary-text font-semibold">Proof of History + PoS</span>
                </div>
                <div>
                  <span className="text-secondary-text block">Avg. Block Time:</span>
                  <span className="text-primary-text font-semibold">~400 Milliseconds</span>
                </div>
              </div>
            </div>

            {/* Polygon */}
            <div className="p-8 sm:p-10 rounded-2xl bg-surface border border-indigo-500/30 shadow-2xl space-y-4">
              <div className="w-12 h-12 rounded-xl bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center text-indigo-300">
                <Layers className="w-6 h-6" />
              </div>
              <h2 className="text-2xl font-display font-bold text-primary-text">
                Polygon Architecture
              </h2>
              <p className="text-secondary-text text-sm sm:text-base leading-relaxed">
                Polygon delivers high scalability and low gas costs while retaining full Ethereum Virtual Machine (EVM) compatibility, ensuring instant interoperability with leading decentralized tools, multi-sig vaults, and liquidity protocols.
              </p>
              <div className="pt-4 border-t border-indigo-500/20 grid grid-cols-2 gap-4 text-xs font-mono">
                <div>
                  <span className="text-secondary-text block">Compatibility:</span>
                  <span className="text-primary-text font-semibold">Full EVM Standards</span>
                </div>
                <div>
                  <span className="text-secondary-text block">Security Model:</span>
                  <span className="text-primary-text font-semibold">Ethereum Layer-2 Security</span>
                </div>
              </div>
            </div>
          </div>

          {/* Feature Status Matrix */}
          <div className="rounded-2xl bg-surface border border-gold-border p-6 sm:p-10 mb-16 shadow-gold-card">
            <div className="mb-8">
              <h2 className="text-xl sm:text-2xl font-display font-bold text-primary-text mb-2">
                Implementation Status Matrix
              </h2>
              <p className="text-secondary-text text-xs sm:text-sm">
                Transparent overview distinguishing active development from upcoming launch phases.
              </p>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm" aria-label="Feature Status Matrix">
                <thead>
                  <tr className="border-b border-gold-border text-xs uppercase font-mono text-champagne-gold tracking-wider">
                    <th scope="col" className="pb-4 font-semibold">Component</th>
                    <th scope="col" className="pb-4 font-semibold">Status</th>
                    <th scope="col" className="pb-4 font-semibold">Technical Reality</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gold-border/20">
                  <tr>
                    <td className="py-4 font-semibold text-primary-text">
                      Solana &amp; Polygon Token Contracts
                    </td>
                    <td className="py-4">
                      <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-champagne-gold/20 text-champagne-gold border border-champagne-gold/30">
                        In Development
                      </span>
                    </td>
                    <td className="py-4 text-secondary-text text-xs sm:text-sm">
                      Dual-chain smart contract architecture under development; not deployed to mainnet yet.
                    </td>
                  </tr>

                  <tr>
                    <td className="py-4 font-semibold text-primary-text">
                      Decentralized Exchange (DEX) Availability
                    </td>
                    <td className="py-4">
                      <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-surface border border-gold-border text-secondary-text">
                        Planned Upon Launch
                      </span>
                    </td>
                    <td className="py-4 text-secondary-text text-xs sm:text-sm">
                      Will be available through supported decentralized exchanges on Solana and Polygon ecosystems.
                    </td>
                  </tr>

                  <tr>
                    <td className="py-4 font-semibold text-primary-text">
                      Token Burning Mechanism
                    </td>
                    <td className="py-4">
                      <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-amber-500/20 text-amber-300 border border-amber-500/30">
                        Architecture Design
                      </span>
                    </td>
                    <td className="py-4 text-secondary-text text-xs sm:text-sm">
                      Permanent on-chain removal mechanism to support structured long-term sustainability.
                    </td>
                  </tr>

                  <tr>
                    <td className="py-4 font-semibold text-primary-text">
                      Launch Pool Liquidity
                    </td>
                    <td className="py-4">
                      <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-cyan-500/20 text-neon-cyan border border-cyan-500/30">
                        Scheduled
                      </span>
                    </td>
                    <td className="py-4 text-secondary-text text-xs sm:text-sm">
                      Liquidity infrastructure designed to support the Block Aura ecosystem at launch.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Navigation CTA */}
          <div className="text-center">
            <Link
              to="/#dex"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-bold text-xs tracking-wider uppercase bg-champagne-gold text-background hover:bg-champagne-gold-light transition-all"
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
