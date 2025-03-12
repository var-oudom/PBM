
import React from 'react';
import { ChevronDown } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { cn } from '@/lib/utils';

interface CategoryItem {
  title: string;
  image: string;
  link: string;
}

interface MegaDropdownProps {
  isOpen: boolean;
  onClose: () => void;
}

const MegaDropdown: React.FC<MegaDropdownProps> = ({ isOpen, onClose }) => {
  const { t } = useLanguage();

  // Product categories with images based on the design
  const productCategories: CategoryItem[] = [
    {
      title: 'menu.poolCleaners',
      image: 'https://fluidrausa.com/-/media/zodiac/images/mega-menu/cleaners_vx55-4wd-min.png?sc=1',
      link: '#pool-cleaners'
    },
    {
      title: 'menu.saltChlorinators',
      image: 'https://fluidrausa.com/-/media/zodiac/images/mega-menu/salt_chlorinator-min.png?sc=1',
      link: '#salt-chlorinators'
    },
    {
      title: 'menu.chemicalFeeding',
      image: 'https://fluidrausa.com/-/media/zodiac/images/mega-menu/nature2_fusion_soft-min.png?sc=1',
      link: '#chemical-feeding'
    },
    {
      title: 'menu.poolPumps',
      image: 'https://fluidrausa.com/-/media/zodiac/images/mega-menu/jxi-pumps-min.png?sc=1',
      link: '#pool-pumps'
    },
    {
      title: 'menu.poolFilters',
      image: 'https://fluidrausa.com/-/media/zodiac/images/mega-menu/cs-cartridge-min.png?sc=1',
      link: '#pool-filters'
    },
    {
      title: 'menu.poolHeaters',
      image: 'https://fluidrausa.com/-/media/zodiac/images/mega-menu/jxi-heater-min.png?sc=1',
      link: '#pool-heaters'
    },
    {
      title: 'menu.controllers',
      image: 'https://fluidrausa.com/-/media/zodiac/images/mega-menu/aqualink-min.png?sc=1',
      link: '#controllers'
    },
    {
      title: 'menu.valves',
      image: 'https://fluidrausa.com/-/media/zodiac/images/mega-menu/jandy-valve-min.png?sc=1',
      link: '#valves'
    },
    {
      title: 'menu.waterFeatures',
      image: 'https://fluidrausa.com/-/media/zodiac/images/mega-menu/laminar-jets-min.png?sc=1',
      link: '#water-features'
    },
    {
      title: 'menu.poolLights',
      image: 'https://fluidrausa.com/-/media/zodiac/images/mega-menu/nicheless-led-min.png?sc=1',
      link: '#pool-lights'
    },
    {
      title: 'menu.mineralPools',
      image: 'https://fluidrausa.com/-/media/zodiac/images/mega-menu/magnapool-logo-min.png?sc=1',
      link: '#mineral-pools'
    },
    {
      title: 'menu.waterPurification',
      image: 'https://fluidrausa.com/-/media/zodiac/images/mega-menu/nature2-cv-min.png?sc=1',
      link: '#water-purification'
    },
    {
      title: 'menu.poolChemicals',
      image: 'https://fluidrausa.com/-/media/zodiac/images/mega-menu/aqua-pure-min.png?sc=1',
      link: '#pool-chemicals'
    },
    {
      title: 'menu.spaChemicals',
      image: 'https://fluidrausa.com/-/media/zodiac/images/mega-menu/spa-pure-min.png?sc=1',
      link: '#spa-chemicals'
    },
    {
      title: 'menu.discontinued',
      image: 'https://fluidrausa.com/-/media/zodiac/images/mega-menu/polaris-380-min.png?sc=1',
      link: '#discontinued'
    }
  ];

  // Render three rows of 5 items each
  const renderProductItems = () => {
    const rowSize = 5;
    const rows = Math.ceil(productCategories.length / rowSize);
    
    return Array.from({ length: rows }).map((_, rowIndex) => (
      <div key={`row-${rowIndex}`} className="grid grid-cols-5 gap-8 mb-8">
        {productCategories
          .slice(rowIndex * rowSize, (rowIndex + 1) * rowSize)
          .map((category, index) => (
            <a 
              key={index} 
              href={category.link}
              className="flex flex-col items-center text-center group hover:text-brand-blue transition-colors"
            >
              <div className="w-full h-36 mb-2 overflow-hidden flex items-center justify-center">
                <img 
                  src={category.image} 
                  alt={t(category.title)} 
                  className="max-h-full max-w-full object-contain transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <span className="text-sm font-medium">{t(category.title)}</span>
            </a>
          ))}
      </div>
    ));
  };

  if (!isOpen) return null;

  return (
    <div 
      className="absolute top-full left-0 w-full bg-white shadow-xl z-50 border-t border-gray-200 animate-fade-in"
      onClick={(e) => e.stopPropagation()}
    >
      <div className="container mx-auto py-8 px-6">
        <div className="grid grid-cols-1 gap-6">
          {/* Title */}
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-xl font-semibold text-brand-blue">{t('menu.products')}</h3>
            <button 
              onClick={onClose}
              className="text-gray-500 hover:text-gray-800"
              aria-label="Close menu"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-x"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
            </button>
          </div>
          
          {/* Product Categories */}
          <div className="border-t border-gray-200 pt-6">
            {renderProductItems()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MegaDropdown;
