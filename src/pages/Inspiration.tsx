
import React from 'react';
import { LanguageProvider } from '@/contexts/LanguageContext';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useLanguage } from '@/contexts/LanguageContext';

const Inspiration = () => {
  const { t } = useLanguage();
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-32 pb-16">
        <div className="container mx-auto px-4 md:px-6">
          <h1 className="text-3xl font-bold mb-8">{t('nav.inspiration')}</h1>
          <p className="text-lg">{t('inspiration.description')}</p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Inspiration;
