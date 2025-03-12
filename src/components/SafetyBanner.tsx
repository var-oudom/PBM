
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { AlertTriangle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const SafetyBanner = () => {
  const { t } = useLanguage();
  
  return (
    <section className="bg-brand-blue text-white">
      <div className="container mx-auto px-4 md:px-6 py-8">
        <div className="flex flex-col md:flex-row items-center justify-center md:justify-between text-center md:text-left">
          <div className="flex items-center mb-4 md:mb-0">
            <AlertTriangle className="h-8 w-8 mr-4 text-brand-yellow" />
            <div>
              <h3 className="text-xl font-bold mb-1">{t('safety.title')}</h3>
              <p className="text-white/80">{t('safety.description')}</p>
            </div>
          </div>
          
          <Button 
            variant="outline"
            className="border-white text-white hover:bg-white hover:text-brand-blue transition-all"
          >
            {t('safety.cta')}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default SafetyBanner;
