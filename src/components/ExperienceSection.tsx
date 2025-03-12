
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';

const ExperienceSection = () => {
  const { t } = useLanguage();
  
  return (
    <section className="py-16 bg-brand-darkBlue text-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?q=80&w=1280&auto=format&fit=crop" 
              alt="Experience" 
              className="rounded-lg shadow-xl max-w-full"
            />
            <div className="absolute -bottom-6 -right-6 bg-brand-yellow p-4 rounded-lg shadow-lg transform rotate-3 hidden md:block">
              <p className="text-black font-bold text-lg">100 YEARS</p>
            </div>
          </div>
          
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gradient-blue">
              {t('experience.title')}
            </h2>
            <p className="text-white/80 mb-8 leading-relaxed">
              {t('experience.description')}
            </p>
            <Button className="bg-brand-yellow text-black hover:bg-brand-yellow/90">
              {t('experience.cta')}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
