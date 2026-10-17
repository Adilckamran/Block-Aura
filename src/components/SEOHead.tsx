import React, { useEffect } from 'react';
import { useLanguage } from '../i18n/LanguageContext';

interface SEOHeadProps {
  title?: string;
  description?: string;
}

export const SEOHead: React.FC<SEOHeadProps> = ({ title, description }) => {
  const { language } = useLanguage();

  useEffect(() => {
    const baseTitle = 'Block Aura (BA) — Solana & Polygon';
    const finalTitle = title ? `${title} | ${baseTitle}` : baseTitle;
    document.title = finalTitle;

    const defaultDesc =
      language === 'en'
        ? 'Block Aura (BA) is a decentralized cryptocurrency project operating across the Solana and Polygon networks.'
        : 'Block Aura (BA) ist ein dezentrales Kryptowährungsprojekt auf den Netzwerken Solana und Polygon.';

    const finalDesc = description || defaultDesc;

    // Update meta description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute('content', finalDesc);

    // Update Open Graph tags
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute('content', finalTitle);

    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute('content', finalDesc);
  }, [title, description, language]);

  return null;
};
