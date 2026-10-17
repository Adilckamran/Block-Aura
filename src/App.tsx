import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './i18n/LanguageContext';
import { RootLayout } from './layouts/RootLayout';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { TokenomicsPage } from './pages/TokenomicsPage';
import { RoadmapPage } from './pages/RoadmapPage';
import { WhitepaperPage } from './pages/WhitepaperPage';
import { EcosystemPage } from './pages/EcosystemPage';
import { FaqPage } from './pages/FaqPage';
import { ContactPage } from './pages/ContactPage';
import { NotFoundPage } from './pages/NotFoundPage';

export const App: React.FC = () => {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<RootLayout />}>
            <Route index element={<HomePage />} />
            <Route path="about" element={<AboutPage />} />
            <Route path="tokenomics" element={<TokenomicsPage />} />
            <Route path="roadmap" element={<RoadmapPage />} />
            <Route path="whitepaper" element={<WhitepaperPage />} />
            <Route path="ecosystem" element={<EcosystemPage />} />
            <Route path="faq" element={<FaqPage />} />
            <Route path="contact" element={<ContactPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </LanguageProvider>
  );
};

export default App;
