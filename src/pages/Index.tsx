
import React from 'react';
import { LanguageProvider } from '@/contexts/LanguageContext';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import FeatureSection from '@/components/FeatureSection';
import ProductSection from '@/components/ProductSection';
import SafetyBanner from '@/components/SafetyBanner';
import EnergyRatingSection from '@/components/EnergyRatingSection';
import ExperienceSection from '@/components/ExperienceSection';
import InspirationSection from '@/components/InspirationSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <LanguageProvider>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          <HeroSection />
          <FeatureSection />
          <ProductSection />
          <SafetyBanner />
          <EnergyRatingSection />
          <ExperienceSection />
          <InspirationSection />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
};

export default Index;
