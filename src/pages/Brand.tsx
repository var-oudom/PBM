
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

interface BrandCard {
  id: number;
  logo: string;
  image: string;
  regions: string;
  description: string;
}

const Brand = () => {
  const { t } = useLanguage();
  
  const brands: BrandCard[] = [
    {
      id: 1,
      logo: "https://example.com/astralpool-logo.png",
      image: "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?q=80&w=1280&auto=format&fit=crop",
      regions: "EUROPE · LATIN AMERICA · AFRICA · ASIA · OCEANIA",
      description: "Worldwide leading brand in the pool and wellness sector"
    },
    {
      id: 2,
      logo: "https://example.com/zodiac-logo.png",
      image: "https://images.unsplash.com/photo-1622902046580-2e0cb8d9d6d4?q=80&w=800&auto=format&fit=crop",
      regions: "EUROPE · USA & CANADA · OCEANIA · AFRICA",
      description: "Zodiac® strives to deliver the perfect pool experience that enhances comfort, enjoyment and peace."
    },
    {
      id: 3,
      logo: "https://example.com/jandy-logo.png",
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=800&auto=format&fit=crop",
      regions: "USA & CANADA",
      description: "Designing a full range of products to deliver enjoyment and peace for the pool owner"
    },
    {
      id: 4,
      logo: "https://example.com/polaris-logo.png",
      image: "https://images.unsplash.com/photo-1572331165267-854da2b10ccc?q=80&w=800&auto=format&fit=crop",
      regions: "EUROPE · USA & CANADA · OCEANIA",
      description: "Polaris offers best-in-class automatic pool cleaners to make maintaining a pool easier"
    },
    {
      id: 5,
      logo: "https://example.com/gre-logo.png",
      image: "https://images.unsplash.com/photo-1575429198097-0414ec08e8cd?q=80&w=800&auto=format&fit=crop",
      regions: "EUROPE · AFRICA · LATIN AMERICA",
      description: "Pioneers in cutting edge wooden, steel and composite above-ground pools"
    },
    {
      id: 6,
      logo: "https://example.com/cepex-logo.png",
      image: "https://images.unsplash.com/photo-1562290745-4afcf487c2a6?q=80&w=800&auto=format&fit=crop",
      regions: "GLOBAL",
      description: "Developing plastic valves and fittings to deliver the best fluid handling experience"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-32 pb-16">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-brand-darkBlue to-brand-blue text-white py-12">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Brands</h1>
            <p className="text-lg max-w-3xl mx-auto">
              Our portfolio includes some of the most trusted brands in the sector
              and offers our customers a wide range of products in the residential
              and commercial pool and wellness market.
            </p>
          </div>
        </div>
        
        {/* Brands Grid */}
        <div className="container mx-auto px-4 md:px-6 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {brands.map((brand) => (
              <div 
                key={brand.id} 
                className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all"
              >
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={brand.image} 
                    alt={brand.description} 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-4 left-4 bg-white p-2 rounded shadow">
                    <img 
                      src={brand.logo} 
                      alt={`${brand.id} logo`} 
                      className="h-8" 
                    />
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-xs text-gray-500 tracking-wider mb-2">{brand.regions}</p>
                  <p className="text-gray-800">{brand.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Contact Section */}
        <div className="bg-brand-darkBlue text-white py-12">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">How can we help you?</h2>
                <button className="border border-white text-white hover:bg-white hover:text-brand-darkBlue transition-colors px-6 py-2 rounded">
                  Contact
                </button>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl mb-4">EXPLORE</h3>
                <ul className="space-y-2">
                  <li><a href="#" className="hover:underline">Websites for Pool Professionals</a></li>
                  <li><a href="#" className="hover:underline">Fundación Fluidra</a></li>
                  <li><a href="#" className="hover:underline">European Projects</a></li>
                  <li><a href="#" className="hover:underline">Confidential Channel</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Brand;
