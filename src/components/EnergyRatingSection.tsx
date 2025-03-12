
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';

const EnergyRatingSection = () => {
  const { t } = useLanguage();
  
  return (
    <section className="py-12 md:py-16 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="order-2 md:order-1">
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="flex flex-col space-y-2">
                <div className="flex">
                  <div className="relative">
                    <div className="bg-red-600 text-white font-bold p-4 rounded-full w-16 h-16 flex items-center justify-center text-xl">
                      6.0
                    </div>
                    <div className="absolute -top-1 -right-1 bg-brand-yellow text-xs font-bold py-0.5 px-2 rounded-full">
                      STARS
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="font-bold text-lg uppercase">Energy Rating</h4>
                    <p className="text-sm text-gray-600 uppercase font-medium">The more stars</p>
                    <p className="text-sm text-gray-600 uppercase font-medium">The more savings</p>
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t border-gray-200">
                  <p className="text-sm text-gray-600">
                    More information on Energy rating visit www.energyrating.gov.au
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="order-1 md:order-2">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-brand-blue">
              {t('energy.title')}
            </h2>
            <p className="text-gray-700 mb-6">
              {t('energy.description')}
            </p>
            <Button className="bg-brand-blue hover:bg-brand-blue/90">
              {t('energy.cta')}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EnergyRatingSection;
