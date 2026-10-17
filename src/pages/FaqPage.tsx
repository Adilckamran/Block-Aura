import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  HelpCircle,
  ChevronDown,
  ArrowRight,
  ShieldCheck,
  Search,
} from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';
import { faqData, projectInfo } from '../data/projectData';
import { StatusBadge } from '../components/StatusBadge';
import { SEOHead } from '../components/SEOHead';

export const FaqPage: React.FC = () => {
  const { language, t } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [openIds, setOpenIds] = useState<Record<string, boolean>>({ 'faq-1': true, 'faq-2': true, 'faq-3': true });
  const [searchQuery, setSearchQuery] = useState('');

  const toggleFaq = (id: string) => {
    setOpenIds((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const filteredFaqs = faqData.filter((item) => {
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    const matchesQuery =
      searchQuery.trim() === '' ||
      item.question[language].toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.answer[language].toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesQuery;
  });

  const categories = [
    { key: 'all', label: language === 'en' ? 'All' : 'Alle' },
    { key: 'general', label: language === 'en' ? 'General' : 'Allgemein' },
    { key: 'networks', label: language === 'en' ? 'Networks' : 'Netzwerke' },
    { key: 'dex', label: 'DEX' },
    { key: 'token', label: 'Token & Burn' },
    { key: 'security', label: language === 'en' ? 'Security' : 'Sicherheit' },
  ];

  return (
    <>
      <SEOHead
        title="FAQ — Block Aura (BA)"
        description="Frequently asked questions regarding Block Aura (BA), Solana & Polygon networks, DEX availability, token burning, and launch pool."
      />

      <div className="py-12 sm:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto mb-12">
            <StatusBadge label={t.common.transparency} variant="gold" size="sm" />
            <h1 className="text-3xl sm:text-5xl font-display font-bold text-primary-text mt-4 mb-4">
              {t.faq.title}
            </h1>
            <p className="text-champagne-gold text-base sm:text-lg font-medium">
              {t.faq.subtitle}
            </p>
          </div>

          {/* Search bar */}
          <div className="relative mb-8">
            <Search className="w-5 h-5 text-secondary-text absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={language === 'en' ? 'Search questions or keywords...' : 'Fragen oder Suchbegriffe eingeben...'}
              className="w-full pl-12 pr-4 py-3.5 rounded-xl bg-surface border border-gold-border text-primary-text placeholder-secondary-text text-sm focus:outline-none focus:border-champagne-gold transition-colors"
            />
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-2 justify-center mb-10">
            {categories.map((cat) => (
              <button
                key={cat.key}
                onClick={() => setSelectedCategory(cat.key)}
                className={`px-4 py-2 rounded-full text-xs font-semibold transition-all ${
                  selectedCategory === cat.key
                    ? 'bg-champagne-gold text-background shadow-gold-subtle'
                    : 'bg-surface border border-gold-border text-secondary-text hover:text-primary-text'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Accordion Questions List */}
          <div className="space-y-4 mb-16">
            {filteredFaqs.length === 0 ? (
              <div className="p-8 text-center text-secondary-text text-sm rounded-xl bg-surface border border-gold-border">
                {language === 'en'
                  ? 'No matching questions found for your search query.'
                  : 'Keine passenden Fragen zu Ihrer Suchanfrage gefunden.'}
              </div>
            ) : (
              filteredFaqs.map((faq) => {
                const isOpen = !!openIds[faq.id];
                return (
                  <div
                    key={faq.id}
                    className="rounded-xl bg-surface border border-gold-border overflow-hidden transition-colors"
                  >
                    <button
                      onClick={() => toggleFaq(faq.id)}
                      className="w-full px-6 py-4 sm:py-5 text-left flex items-center justify-between text-base sm:text-lg font-semibold text-primary-text hover:text-champagne-gold transition-colors focus:outline-none"
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
                      <div className="px-6 pb-6 pt-2 text-sm sm:text-base text-secondary-text leading-relaxed border-t border-gold-border/20">
                        {faq.answer[language]}
                      </div>
                    )}
                  </div>
                );
              })
            )}
          </div>

          {/* Forwarding to Home DEX */}
          <div className="rounded-2xl bg-glass-card border border-gold-border p-8 text-center">
            <h3 className="text-xl font-display font-bold text-primary-text mb-2">
              Ready to acquire Block Aura?
            </h3>
            <p className="text-secondary-text text-sm mb-6 max-w-md mx-auto">
              Learn more about DEX availability across Solana and Polygon.
            </p>
            <Link
              to="/#dex"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider bg-champagne-gold text-background hover:bg-champagne-gold-light transition-all"
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
