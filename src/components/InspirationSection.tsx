
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';

const InspirationSection = () => {
  const { t } = useLanguage();
  
  const inspirations = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=800&auto=format&fit=crop',
      title: 'pool.modern.title',
      description: 'pool.modern.description',
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1572331165267-854da2b10ccc?q=80&w=800&auto=format&fit=crop',
      title: 'pool.luxury.title',
      description: 'pool.luxury.description',
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1575429198097-0414ec08e8cd?q=80&w=800&auto=format&fit=crop',
      title: 'pool.symphony.title',
      description: 'pool.symphony.description',
    },
  ];

  return (
    <section className="py-16 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">{t('inspiration.title')}</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {t('inspiration.description')}
          </p>
          <div className="w-20 h-1 bg-brand-blue mx-auto mt-8 rounded-full"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {inspirations.map((inspiration) => (
            <div 
              key={inspiration.id}
              className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all group"
            >
              <div className="relative h-56 overflow-hidden">
                <img 
                  src={inspiration.image} 
                  alt={t(inspiration.title)} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold mb-2">{t(inspiration.title)}</h3>
                <p className="text-gray-600 text-sm mb-4">
                  {t(inspiration.description)}
                </p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button className="bg-brand-blue hover:bg-brand-blue/90">
            {t('inspiration.viewAll')}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default InspirationSection;
