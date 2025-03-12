import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'en' | 'km';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.products': 'Products',
    'nav.support': 'Support',
    'nav.parts': 'Parts & Supplies',
    'nav.installers': 'Find Installers',
    'nav.about': 'About Us',
    'nav.warranty': 'Warranty Registration',
    'nav.dealers': 'Find a Dealer',
    'nav.newsletter': 'Newsletter',
    'nav.findProduct': 'Find a Product',
    'nav.login': 'LOGIN TO MYFLUIDRA',
    'nav.findDealer': 'FIND A DEALER',
    'nav.inspiration': 'Inspiration',
    'nav.promotions': 'Promotions',
    'nav.faq': 'FAQ',
    'nav.poolSpaGuides': 'Pool & Spa Guides',
    
    // Hero Section
    'hero.title': 'World\'s First Cordless Robotic Spa Cleaner',
    'hero.subtitle': 'Clean your spa the smart way with SpaBot™, the Zodiac® SmartBot™ robotic cleaner.',
    'hero.cta': 'Learn More',
    
    // Feature Sections
    'feature.dealer.title': 'Find a Dealer',
    'feature.dealer.description': 'Find your nearest dealer to purchase Zodiac pool equipment.',
    
    'feature.assistance.title': 'Equipment Assistance',
    'feature.assistance.description': 'Find guide to use or fix your equipment.',
    
    'feature.warranty.title': 'Warranty Registration',
    'feature.warranty.description': 'Get the best out of your products with our extended warranty coverage.',
    
    'feature.promotion.title': 'Promotions',
    'feature.promotion.description': 'Check all our special rebate offers.',
    
    // Product Sections
    'products.title': 'More Fun, Less Hassle.',
    'products.viewAll': 'View All Products Categories',
    'products.featured': 'Featured Products',
    
    // Safety Recall
    'safety.title': 'Product Safety Recall',
    'safety.description': 'Click here for more information on affected models.',
    'safety.cta': 'Learn More',
    
    // Energy Rating
    'energy.title': 'MEPS - Energy Star Compliant Pool Pumps',
    'energy.description': 'With the introduction of pool pump MEPS in Australia, Zodiac gives you peace of mind with our range of energy efficiency compliance standards.',
    'energy.cta': 'Learn More',
    
    // Experience Section
    'experience.title': '100 Years Of Experience',
    'experience.description': '100 years of innovative leadership has led to industry firsts & brand dominance in many of essential technologies that are so prized in the pool. We are two-time proud winners of the America\'s Cup and global leaders in pool technology.',
    'experience.cta': 'Learn More',
    
    // Inspiration
    'inspiration.title': 'Inspiration',
    'inspiration.description': 'Get inspired by viewing some of the breathtaking pools that feature our products. A collection, showcasing great innovation and spectacular aesthetics.',
    'inspiration.viewAll': 'See Inspiring Pools',
    
    // Pool Types
    'pool.modern.title': 'Modern Pool Grandeur',
    'pool.modern.description': 'This pool is spectacular, the wall of fire feature and stunning view makes it a pool to remember.',
    
    'pool.luxury.title': 'Breathtaking Pool Luxury',
    'pool.luxury.description': 'This is modern luxury at its best, harnessing the view and natural landscape with perfect pool technology.',
    
    'pool.symphony.title': 'Nighttime Pool Symphony',
    'pool.symphony.description': 'Setting it all off in the night, this lighting, water features and pool technology work in perfect harmony.',
    
    // Footer
    'footer.dealer': 'Dealer Log In',
    'footer.privacy': 'Privacy Policy',
    'footer.terms': 'Terms & Conditions',
    'footer.sitemap': 'Sitemap',
    'footer.copyright': '© 2023 All Rights Reserved.',
    'footer.trademark': 'ZODIAC® is a registered trademark of Zodiac International S.A.S used under license.',
    'footer.followUs': 'Follow Us',
    
    // Mega Menu
    'menu.products': 'Our Products',
    'menu.poolCleaners': 'Pool & Spa Cleaners',
    'menu.saltChlorinators': 'Salt Chlorinators',
    'menu.chemicalFeeding': 'Chemical Feeding Systems',
    'menu.poolPumps': 'Pool Pumps',
    'menu.poolFilters': 'Pool Filters',
    'menu.poolHeaters': 'Pool Heaters',
    'menu.controllers': 'Pool And Spa Controllers',
    'menu.valves': 'Pool & Spa Valves',
    'menu.waterFeatures': 'Water Features',
    'menu.poolLights': 'Pool Lights',
    'menu.mineralPools': 'MagnaPool® Mineral Pools',
    'menu.waterPurification': 'Mineral Water Purification Systems',
    'menu.poolChemicals': 'Pool Chemicals',
    'menu.spaChemicals': 'Spa Chemicals',
    'menu.discontinued': 'Discontinued Products',
    'menu.climateCare': 'Climate Care Certified',
    'menu.sustainablePool': 'MySustainablePool'
  },
  km: {
    // Navigation
    'nav.home': 'ទំព័រដើម',
    'nav.products': 'ផលិតផល',
    'nav.support': 'ជំនួយ',
    'nav.parts': 'គ្រឿងបន្លាស់និងការផ្គត់ផ្គង់',
    'nav.installers': 'ស្វែងរកអ្នកតម្លើង',
    'nav.about': 'អំពីយើង',
    'nav.warranty': 'ការចុះឈ្មោះធានា',
    'nav.dealers': 'ស្វែងរកឈ្មួញ',
    'nav.newsletter': 'ព្រឹត្តិបត្រ',
    'nav.findProduct': 'ស្វែងរកផលិតផល',
    'nav.login': 'ចូលគណនី MYFLUIDRA',
    'nav.findDealer': 'ស្វែងរកអ្នកលក់',
    'nav.inspiration': 'ការបំផុសគំនិត',
    'nav.promotions': 'ការផ្សព្វផ្សាយ',
    'nav.faq': 'សំណួរញឹកញាប់',
    'nav.poolSpaGuides': 'មគ្គុទេសក៍អាងហែលទឹកនិងស្ប៉ា',
    
    // Hero Section
    'hero.title': 'ម៉ាស៊ីនសម្អាតស្ប៉ាដំបូងគេបង្អស់ក្នុងពិភពលោក',
    'hero.subtitle': 'សម្អាតស្ប៉ារបស់អ្នកដោយវិធីឆ្លាតវៃជាមួយ SpaBot™, ម៉ាស៊ីនសម្អាតស្វ័យប្រវត្តិ Zodiac® SmartBot™។',
    'hero.cta': 'មើលបន្ថែម',
    
    // Feature Sections
    'feature.dealer.title': 'ស្វែងរកឈ្មួញ',
    'feature.dealer.description': 'ស្វែងរកឈ្មួញនៅជិតបំផុតដើម្បីទិញឧបករណ៍អាងហែលទឹក Zodiac។',
    
    'feature.assistance.title': 'ជំនួយឧបករណ៍',
    'feature.assistance.description': 'ស្វែងរកគន្លឹះប្រើប្រាស់ឬជួសជុលឧបករណ៍របស់អ្នក។',
    
    'feature.warranty.title': 'ការចុះឈ្មោះធានា',
    'feature.warranty.description': 'ទទួលបានអត្ថប្រយោជន៍ល្អបំផុតពីផលិតផលរបស់យើងជាមួយនឹងការធានាបន្ថែម។',
    
    'feature.promotion.title': 'ការផ្សព្វផ្សាយ',
    'feature.promotion.description': 'ពិនិត្យមើលការផ្តល់ជូនពិសេសទាំងអស់របស់យើង។',
    
    // Product Sections
    'products.title': 'កម្សាន្តច្រើន, ការលំបាកតិច។',
    'products.viewAll': 'មើលប្រភេទផលិតផលទាំងអស់',
    'products.featured': 'ផលិតផលពិសេស',
    
    // Safety Recall
    'safety.title': 'ការហៅត្រឡប់សុវត្ថិភាពផលិតផល',
    'safety.description': 'ចុចទីនេះសម្រាប់ព័ត៌មានបន្ថែមលើម៉ូដែលដែលរងផលប៉ះពាល់។',
    'safety.cta': 'មើលបន្ថែម',
    
    // Energy Rating
    'energy.title': 'MEPS - ម៉ាស៊ីនបូមអាងហែលទឹកប្រសិទ្ធិភាពថាមពល',
    'energy.description': 'ជាមួយនឹងការណែនាំអំពីប្រសិទ្ធភាពថាមពលម៉ាស៊ីនបូមអាងហែលទឹកនៅប្រទេសអូស្រ្តាលី Zodiac ផ្តល់ជូនអ្នកនូវភាពស្ងប់ចិត្តជាមួយនឹងបទដ្ឋានអនុលោមភាពប្រសិទ្ធភាពថាមពលរបស់យើង។',
    'energy.cta': 'មើលបន្ថែម',
    
    // Experience Section
    'experience.title': 'បទពិសោធន៍ ១០០ ឆ្នាំ',
    'experience.description': '១០០ ឆ្នាំនៃភាពជាអ្នកដឹកនាំច្នៃប្រឌិតបានបង្កើតឲ្យមានការរីកចម្រើនដែលជាកិត្តិនាមយីហោក្នុងវិស័យ និងការគ្រប់គ្រងបច្ចេកវិទ្យាសំខាន់ៗដែលត្រូវបានគេចូលចិត្តក្នុងអាងហែលទឹក។ យើងជាអ្នកឈ្នះពាន America\'s Cup ចំនួនពីរដង និងជាអ្នកដឹកនាំពិភពលោកក្នុងបច្ចេកវិទ្យាអាងហែលទឹក។',
    'experience.cta': 'មើលបន្ថែម',
    
    // Inspiration
    'inspiration.title': 'ការជំរុញចិត្ត',
    'inspiration.description': 'ទទួលបានការជំរុញចិត្តដោយទស្សនាអាងហែលទឹកដ៏អស្ចារ្យដែលមានផលិតផលរបស់យើង។ ការប្រមូលផ្ដុំដែលបង្ហាញពីការច្នៃប្រឌិតដ៏អស្ចារ្យនិងសោភ័ណភាពដ៏អស្ចារ្យ។',
    'inspiration.viewAll': 'មើលអាងហែលទឹកគួរឱ្យចាប់អារម្មណ៍',
    
    // Pool Types
    'pool.modern.title': 'អាងហែលទឹកទំនើប',
    'pool.modern.description': 'អាងហែលទឹកនេះគឺអស្ចារ្យណាស់ ជញ្ជាំងនៃភ្លើង និងទិដ្ឋភាពដ៏អស្ចារ្យធ្វើឱ្យវាជាអាងហែលទឹកមួយដែលគួរឱ្យចងចាំ។',
    
    'pool.luxury.title': 'អាងហែលទឹកប្រណិត',
    'pool.luxury.description': 'នេះគឺជាភាពប្រណិតទំនើបដែលល្អបំផុត ដោយប្រើទិដ្ឋភាពនិងទេសភាពធម្មជាតិជាមួយបច្ចេកវិទ្យាអាងហែលទឹកឥតខ្ចោះ។',
    
    'pool.symphony.title': 'អាងហែលទឹកពេលយប់',
    'pool.symphony.description': 'កំណត់វាទាំងអស់នៅពេលយប់ ពន្លឺនេះ លក្ខណៈពិសេសនៃទឹក និងបច្ចេកវិទ្យាអាងហែលទឹកដំណើរការក្នុងភាពស៊ីសង្វាក់ឥតខ្ចោះ។',
    
    // Footer
    'footer.dealer': 'ចូលជាឈ្មួញ',
    'footer.privacy': 'គោលការណ៍ឯកជនភាព',
    'footer.terms': 'លក្ខខណ្ឌ',
    'footer.sitemap': 'ផែនទីគេហទំព័រ',
    'footer.copyright': '© 2023 រក្សាសិទ្ធិគ្រប់យ៉ាង។',
    'footer.trademark': 'ZODIAC® គឺជាពាណិជ្ជសញ្ញាចុះបញ្ជីរបស់ Zodiac International S.A.S ដែលប្រើក្រោមអាជ្ញាប័ណ្ណ។',
    'footer.followUs': 'តាមដានយើង',
    
    // Mega Menu
    'menu.products': 'ផលិតផលរបស់យើង',
    'menu.poolCleaners': 'ឧបករណ៍សម្អាតអាងហែលទឹកនិងស្ប៉ា',
    'menu.saltChlorinators': 'ម៉ាស៊ីនបង្កើតក្លរ',
    'menu.chemicalFeeding': 'ប្រព័ន្ធផ្គត់ផ្គង់សារធាតុគីមី',
    'menu.poolPumps': 'ម៉ាស៊ីនបូមទឹក',
    'menu.poolFilters': 'តម្រងអាងហែលទឹក',
    'menu.poolHeaters': 'ឧបករណ៍កម្ដៅទឹក',
    'menu.controllers': 'ឧបករណ៍បញ្ជាអាងហែលទឹកនិងស្ប៉ា',
    'menu.valves': 'វ៉ាល់អាងហែលទឹកនិងស្ប៉ា',
    'menu.waterFeatures': 'លក្ខណៈពិសេសទឹក',
    'menu.poolLights': 'ភ្លើងអាងហែលទឹក',
    'menu.mineralPools': 'អាងហែលទឹកប្រើរ៉ែ MagnaPool®',
    'menu.waterPurification': 'ប្រព័ន្ធសម្អាតទឹកប្រើរ៉ែ',
    'menu.poolChemicals': 'សារធាតុគីមីអាងហែលទឹក',
    'menu.spaChemicals': 'សារធាតុគីមីស្ប៉ា',
    'menu.discontinued': 'ផលិតផលដែលឈប់ផលិត',
    'menu.climateCare': 'មានវិញ្ញាបនបត្រថែរក្សាអាកាសធាតុ',
    'menu.sustainablePool': 'អាងហែលទឹកចីរភាពរបស់ខ្ញុំ'
  }
};

const LanguageContext = createContext<LanguageContextType>({
  language: 'en',
  setLanguage: () => {},
  t: (key: string) => key,
});

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  // Load language preference from localStorage on initial render
  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') as Language;
    if (savedLanguage && (savedLanguage === 'en' || savedLanguage === 'km')) {
      setLanguage(savedLanguage);
    }
  }, []);

  // Save language preference to localStorage when changed
  useEffect(() => {
    localStorage.setItem('language', language);
    
    // Update document lang attribute and font class
    document.documentElement.lang = language;
    if (language === 'km') {
      document.body.classList.add('font-khmer');
      document.body.classList.remove('font-sans');
    } else {
      document.body.classList.add('font-sans');
      document.body.classList.remove('font-khmer');
    }
  }, [language]);

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations[typeof language]] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
