
import React, { useState, useEffect } from 'react';
import { Menu, X, Search, ChevronDown, Globe } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import MegaDropdown from './MegaDropdown';

const Header = () => {
  const { t, language, setLanguage } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Close dropdown when clicking outside
    const handleClickOutside = () => {
      if (activeDropdown) {
        setActiveDropdown(null);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [activeDropdown]);

  const toggleDropdown = (dropdown: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'py-2 bg-white shadow-md' : 'py-4 bg-white/95'}`}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/" className="flex items-center">
              <svg viewBox="0 0 100 30" width="120" className="fill-brand-blue">
                <path d="M26.2,9.6c-2.3,0-4.2,1.9-4.2,4.2s1.9,4.2,4.2,4.2s4.2-1.9,4.2-4.2S28.5,9.6,26.2,9.6z M26.2,15.8c-1.1,0-2-0.9-2-2
                s0.9-2,2-2s2,0.9,2,2S27.3,15.8,26.2,15.8z M40.4,9.6c-2.3,0-4.2,1.9-4.2,4.2s1.9,4.2,4.2,4.2s4.2-1.9,4.2-4.2
                S42.7,9.6,40.4,9.6z M40.4,15.8c-1.1,0-2-0.9-2-2s0.9-2,2-2s2,0.9,2,2S41.5,15.8,40.4,15.8z M54.7,9.6
                c-2.3,0-4.2,1.9-4.2,4.2s1.9,4.2,4.2,4.2s4.2-1.9,4.2-4.2S57,9.6,54.7,9.6z M54.7,15.8c-1.1,0-2-0.9-2-2s0.9-2,2-2
                s2,0.9,2,2S55.8,15.8,54.7,15.8z M69,9.6c-2.3,0-4.2,1.9-4.2,4.2s1.9,4.2,4.2,4.2s4.2-1.9,4.2-4.2S71.3,9.6,69,9.6z
                 M69,15.8c-1.1,0-2-0.9-2-2s0.9-2,2-2s2,0.9,2,2S70.1,15.8,69,15.8z M14.8,12.7l4.9-8.4H9.9L5,12.7l4.9,8.4h9.8
                L14.8,12.7z M13.4,18.9h-5l-2.5-4.3l2.5-4.3h5l2.5,4.3L13.4,18.9z M89.1,10h-3V9.8h7.3V10h-3v8h-1.3V10z M95.3,18
                h1.3v-8.2h-1.3V18z"/>
              </svg>
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <button 
              onClick={(e) => toggleDropdown('products', e)}
              className={`text-sm font-medium flex items-center transition-colors duration-200 ${activeDropdown === 'products' ? 'text-brand-blue' : 'text-gray-800 hover:text-brand-blue'}`}
            >
              {t('nav.products')} <ChevronDown className={`h-4 w-4 ml-1 transition-transform ${activeDropdown === 'products' ? 'rotate-180' : ''}`} />
            </button>
            
            <a href="/inspiration" className="text-sm font-medium text-gray-800 hover:text-brand-blue transition-colors duration-200">
              {t('nav.inspiration')}
            </a>
            
            <button 
              onClick={(e) => toggleDropdown('support', e)}
              className={`text-sm font-medium flex items-center transition-colors duration-200 ${activeDropdown === 'support' ? 'text-brand-blue' : 'text-gray-800 hover:text-brand-blue'}`}
            >
              {t('nav.support')} <ChevronDown className={`h-4 w-4 ml-1 transition-transform ${activeDropdown === 'support' ? 'rotate-180' : ''}`} />
            </button>
            
            <a href="/pool-spa-guides" className="text-sm font-medium text-gray-800 hover:text-brand-blue transition-colors duration-200">
              {t('nav.poolSpaGuides')}
            </a>
            
            <a href="/promotions" className="text-sm font-medium text-gray-800 hover:text-brand-blue transition-colors duration-200">
              {t('nav.promotions')}
            </a>
            
            <a href="/faq" className="text-sm font-medium text-gray-800 hover:text-brand-blue transition-colors duration-200">
              {t('nav.faq')}
            </a>
            
            <button 
              onClick={(e) => toggleDropdown('about', e)}
              className={`text-sm font-medium flex items-center transition-colors duration-200 ${activeDropdown === 'about' ? 'text-brand-blue' : 'text-gray-800 hover:text-brand-blue'}`}
            >
              {t('nav.about')} <ChevronDown className={`h-4 w-4 ml-1 transition-transform ${activeDropdown === 'about' ? 'rotate-180' : ''}`} />
            </button>
          </nav>

          {/* Right actions */}
          <div className="flex items-center space-x-2 md:space-x-4">
            {/* Find a Dealer Button */}
            <Button 
              size="sm" 
              className="bg-brand-blue hover:bg-brand-blue/90 text-white rounded px-4 py-2 hidden md:flex"
            >
              {t('nav.findDealer')}
            </Button>
            
            {/* Login Button */}
            <Button 
              variant="outline" 
              size="sm" 
              className="bg-brand-yellow hover:bg-brand-yellow/90 text-black border-none rounded px-4 py-2 hidden md:flex"
            >
              {t('nav.login')}
            </Button>

            {/* Language Switcher */}
            <Popover>
              <PopoverTrigger asChild>
                <Button variant="ghost" size="sm" className="flex items-center text-gray-800 hover:text-brand-blue transition-colors">
                  <Globe className="h-4 w-4 mr-1" />
                  <span className="uppercase text-sm">{language}</span>
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-40 p-0">
                <div className="flex flex-col">
                  <button 
                    onClick={() => setLanguage('en')}
                    className={`flex items-center px-3 py-2 text-sm ${language === 'en' ? 'bg-brand-gray text-brand-blue font-medium' : 'hover:bg-gray-50'}`}
                  >
                    <span className="mr-2">🇺🇸</span> English
                  </button>
                  <button 
                    onClick={() => setLanguage('km')}
                    className={`flex items-center px-3 py-2 text-sm ${language === 'km' ? 'bg-brand-gray text-brand-blue font-medium' : 'hover:bg-gray-50'}`}
                  >
                    <span className="mr-2">🇰🇭</span> ខ្មែរ
                  </button>
                </div>
              </PopoverContent>
            </Popover>

            {/* Search */}
            <Button variant="ghost" size="icon" className="hidden md:flex">
              <Search className="h-5 w-5 text-gray-600" />
            </Button>

            {/* Mobile menu button */}
            <Button 
              variant="ghost" 
              size="icon" 
              className="lg:hidden" 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mega Dropdown for Products */}
      <MegaDropdown 
        isOpen={activeDropdown === 'products'} 
        onClose={() => setActiveDropdown(null)} 
      />

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-t mt-2 animate-fade-in">
          <div className="container mx-auto px-4 py-4">
            <nav className="flex flex-col space-y-4">
              <a href="#" className="flex justify-between items-center py-2 text-gray-800 border-b border-gray-100">
                <span>{t('nav.products')}</span>
                <ChevronDown className="h-4 w-4" />
              </a>
              <a href="/inspiration" className="py-2 text-gray-800 border-b border-gray-100">
                {t('nav.inspiration')}
              </a>
              <a href="#" className="flex justify-between items-center py-2 text-gray-800 border-b border-gray-100">
                <span>{t('nav.support')}</span>
                <ChevronDown className="h-4 w-4" />
              </a>
              <a href="/pool-spa-guides" className="py-2 text-gray-800 border-b border-gray-100">
                {t('nav.poolSpaGuides')}
              </a>
              <a href="/promotions" className="py-2 text-gray-800 border-b border-gray-100">
                {t('nav.promotions')}
              </a>
              <a href="/faq" className="py-2 text-gray-800 border-b border-gray-100">
                {t('nav.faq')}
              </a>
              <a href="#" className="flex justify-between items-center py-2 text-gray-800 border-b border-gray-100">
                <span>{t('nav.about')}</span>
                <ChevronDown className="h-4 w-4" />
              </a>
            </nav>
            <div className="mt-4 space-y-2">
              <Button className="w-full bg-brand-blue hover:bg-brand-blue/90">
                {t('nav.findDealer')}
              </Button>
              <Button variant="outline" className="w-full bg-brand-yellow hover:bg-brand-yellow/90 text-black border-none">
                {t('nav.login')}
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
