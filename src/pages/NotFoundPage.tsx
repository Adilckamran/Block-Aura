import React from 'react';
import { Link } from 'react-router-dom';
import { Compass, Home, ArrowLeft } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';
import { SEOHead } from '../components/SEOHead';

export const NotFoundPage: React.FC = () => {
  const { language, t } = useLanguage();

  return (
    <>
      <SEOHead
        title="404 — Not Found"
        description="The requested page could not be located on Block Aura."
      />

      <div className="min-h-[70vh] flex items-center justify-center py-20 px-4">
        <div className="max-w-md w-full text-center space-y-6">
          <div className="w-20 h-20 rounded-full bg-champagne-gold/10 border border-champagne-gold/30 mx-auto flex items-center justify-center text-champagne-gold font-display font-bold text-3xl shadow-gold-subtle">
            404
          </div>

          <h1 className="text-3xl font-display font-bold text-primary-text">
            {t.common.pageNotFound}
          </h1>

          <p className="text-secondary-text text-sm leading-relaxed">
            {t.common.pageNotFoundDesc}
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              to="/"
              className="w-full sm:w-auto px-6 py-3 rounded-full font-semibold text-xs bg-champagne-gold text-background hover:bg-champagne-gold-light transition-all flex items-center justify-center gap-2"
            >
              <Home className="w-4 h-4" />
              <span>{t.common.backToHome}</span>
            </Link>
            <Link
              to="/about"
              className="w-full sm:w-auto px-6 py-3 rounded-full font-semibold text-xs bg-surface border border-gold-border hover:border-champagne-gold text-primary-text transition-all flex items-center justify-center gap-2"
            >
              <Compass className="w-4 h-4 text-champagne-gold" />
              <span>{t.nav.about}</span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
