
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Facebook, Twitter, Instagram } from 'lucide-react';

const Footer = () => {
  const { t } = useLanguage();
  
  return (
    <footer className="bg-brand-darkBlue text-white">
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="font-bold text-lg mb-4">Products</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-white/80 hover:text-white transition-colors">Robotic Cleaners</a></li>
              <li><a href="#" className="text-white/80 hover:text-white transition-colors">Pumps</a></li>
              <li><a href="#" className="text-white/80 hover:text-white transition-colors">Filters</a></li>
              <li><a href="#" className="text-white/80 hover:text-white transition-colors">Heaters</a></li>
              <li><a href="#" className="text-white/80 hover:text-white transition-colors">Salt Chlorinators</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Support</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-white/80 hover:text-white transition-colors">FAQs</a></li>
              <li><a href="#" className="text-white/80 hover:text-white transition-colors">Contact</a></li>
              <li><a href="#" className="text-white/80 hover:text-white transition-colors">Warranty Claims</a></li>
              <li><a href="#" className="text-white/80 hover:text-white transition-colors">Manuals</a></li>
              <li><a href="#" className="text-white/80 hover:text-white transition-colors">Troubleshooting</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">About</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-white/80 hover:text-white transition-colors">Our Story</a></li>
              <li><a href="#" className="text-white/80 hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="text-white/80 hover:text-white transition-colors">News</a></li>
              <li><a href="#" className="text-white/80 hover:text-white transition-colors">Sustainability</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">{t('footer.followUs')}</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-brand-yellow transition-colors">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="hover:text-brand-yellow transition-colors">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="hover:text-brand-yellow transition-colors">
                <Instagram className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/20">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex flex-wrap justify-center md:justify-start space-x-4 mb-4 md:mb-0">
              <a href="#" className="text-sm text-white/70 hover:text-white transition-colors">
                {t('footer.dealer')}
              </a>
              <span className="text-white/40">|</span>
              <a href="#" className="text-sm text-white/70 hover:text-white transition-colors">
                {t('footer.privacy')}
              </a>
              <span className="text-white/40">|</span>
              <a href="#" className="text-sm text-white/70 hover:text-white transition-colors">
                {t('footer.terms')}
              </a>
              <span className="text-white/40">|</span>
              <a href="#" className="text-sm text-white/70 hover:text-white transition-colors">
                {t('footer.sitemap')}
              </a>
            </div>
            
            <div className="text-center md:text-right">
              <p className="text-sm text-white/70">{t('footer.copyright')}</p>
              <p className="text-xs text-white/50 mt-1">{t('footer.trademark')}</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
