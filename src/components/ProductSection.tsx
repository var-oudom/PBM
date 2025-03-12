
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';

const ProductSection = () => {
  const { t } = useLanguage();
  
  const products = [
    {
      id: 1,
      name: 'SpaBot Cordless',
      image: 'https://images.unsplash.com/photo-1622902046580-2e0cb8d9d6d4?q=80&w=800&auto=format&fit=crop',
      link: '#'
    },
    {
      id: 2,
      name: 'Salt Chlorinator',
      image: 'https://images.unsplash.com/photo-1572331165267-854da2b10ccc?q=80&w=800&auto=format&fit=crop',
      link: '#'
    },
    {
      id: 3,
      name: 'Variable Speed Pump',
      image: 'https://images.unsplash.com/photo-1583233086985-5be7b8158817?q=80&w=800&auto=format&fit=crop',
      link: '#'
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">{t('products.title')}</h2>
          <div className="w-20 h-1 bg-brand-blue mx-auto mb-8 rounded-full"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product) => (
            <div 
              key={product.id}
              className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all group hover-scale"
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold mb-4">{product.name}</h3>
                <a 
                  href={product.link}
                  className="text-brand-blue hover:text-brand-darkBlue transition-colors flex items-center text-sm font-medium"
                >
                  Learn More
                  <ChevronRight className="ml-1 h-4 w-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button variant="outline" className="border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white transition-all">
            {t('products.viewAll')}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
