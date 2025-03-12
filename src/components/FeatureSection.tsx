
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Map, Wrench, Shield, Tag } from 'lucide-react';

const FeatureSection = () => {
  const { t } = useLanguage();
  
  const features = [
    {
      icon: <Map className="h-10 w-10 text-brand-blue" />,
      title: 'feature.dealer.title',
      description: 'feature.dealer.description',
    },
    {
      icon: <Wrench className="h-10 w-10 text-brand-blue" />,
      title: 'feature.assistance.title',
      description: 'feature.assistance.description',
    },
    {
      icon: <Shield className="h-10 w-10 text-brand-blue" />,
      title: 'feature.warranty.title',
      description: 'feature.warranty.description',
    },
    {
      icon: <Tag className="h-10 w-10 text-brand-blue" />,
      title: 'feature.promotion.title',
      description: 'feature.promotion.description',
    },
  ];

  return (
    <section className="bg-gray-50 py-12 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="relative bg-white rounded-lg shadow-sm hover:shadow-md transition-all p-6 flex flex-col items-center text-center group hover-scale"
            >
              <div className="mb-4 transition-transform duration-300 group-hover:-translate-y-1">
                {feature.icon}
              </div>
              <h3 className="text-lg font-semibold mb-2 text-gray-900">
                {t(feature.title)}
              </h3>
              <p className="text-gray-600 text-sm">
                {t(feature.description)}
              </p>
              
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 mt-4 opacity-0 group-hover:opacity-100 transition-all duration-300">
                <div className="w-8 h-8 bg-brand-yellow rounded-full flex items-center justify-center">
                  <span className="text-black font-bold">+</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
