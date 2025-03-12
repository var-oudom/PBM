
import React, { useState, useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';

const HeroSection = () => {
  const { t } = useLanguage();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [autoplayInterval, setAutoplayInterval] = useState<number | null>(null);

  const slides = [
    {
      id: 1,
      title: 'hero.title',
      subtitle: 'hero.subtitle',
      cta: 'hero.cta',
      image: 'https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?q=80&w=1280&auto=format&fit=crop',
      gradient: 'from-brand-blue to-brand-lightBlue',
    },
    {
      id: 2,
      title: 'hero.title2',
      subtitle: 'hero.subtitle2',
      cta: 'hero.cta',
      image: 'https://images.unsplash.com/photo-1622902046580-2e0cb8d9d6d4?q=80&w=800&auto=format&fit=crop',
      gradient: 'from-brand-darkBlue to-brand-blue',
    },
    {
      id: 3,
      title: 'hero.title3',
      subtitle: 'hero.subtitle3',
      cta: 'hero.cta',
      image: 'https://images.unsplash.com/photo-1575429198097-0414ec08e8cd?q=80&w=800&auto=format&fit=crop',
      gradient: 'from-brand-blue to-brand-lightBlue',
    }
  ];

  // Initialize autoplay
  useEffect(() => {
    setIsLoaded(true);
    const interval = window.setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);
    setAutoplayInterval(interval);
    
    return () => {
      if (autoplayInterval) {
        clearInterval(autoplayInterval);
      }
    };
  }, []);

  // Pause autoplay on user interaction
  const handleManualSlideChange = (index: number) => {
    if (autoplayInterval) {
      clearInterval(autoplayInterval);
      setAutoplayInterval(null);
    }
    setCurrentSlide(index);
  };

  return (
    <div className="relative w-full h-[600px] md:h-[650px] mt-16 overflow-hidden">
      {slides.map((slide, index) => (
        <div 
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-700 ${
            currentSlide === index ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
        >
          {/* Background Image with gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-600/50">
            <div 
              className={`absolute inset-0 bg-cover bg-center ${isLoaded ? 'image-loaded' : 'image-loading'}`} 
              style={{ backgroundImage: `url(${slide.image})` }}
            />
          </div>
          
          {/* Content Container */}
          <div className="container mx-auto h-full px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 h-full items-center gap-8">
              {/* Text Content */}
              <div className={`text-white z-10 transform transition-all duration-700 delay-300 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                  {t(slide.title)}
                </h1>
                <p className="text-lg md:text-xl opacity-90 mb-8 max-w-md">
                  {t(slide.subtitle)}
                </p>
                <Button size="lg" className="group bg-brand-yellow hover:bg-brand-yellow/90 text-black">
                  {t(slide.cta)}
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </div>
              
              {/* Product Image */}
              <div className={`hidden md:flex justify-center items-center transform transition-all duration-1000 delay-500 ${isLoaded ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'}`}>
                <div className="relative">
                  <img 
                    src="https://images.unsplash.com/photo-1622902046580-2e0cb8d9d6d4?q=80&w=800&auto=format&fit=crop" 
                    alt="Spa Cleaner" 
                    className="max-w-full object-contain drop-shadow-xl"
                  />
                  <div className="absolute top-1/4 right-0 transform translate-x-1/2 -translate-y-1/2">
                    <div className="bg-gradient-to-r from-cyan-400 to-blue-500 text-white text-xl font-bold py-2 px-4 rounded-full animate-pulse">
                      SpaBot™
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
      
      {/* Navigation Dots */}
      <div className="absolute bottom-8 left-0 right-0 z-20 flex justify-center space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => handleManualSlideChange(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              currentSlide === index 
                ? 'bg-white scale-110' 
                : 'bg-white/50 hover:bg-white/70'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
      
      {/* Arrow Navigation */}
      <button 
        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 rounded-full p-2 backdrop-blur-sm transition-all"
        onClick={() => handleManualSlideChange(currentSlide === 0 ? slides.length - 1 : currentSlide - 1)}
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-6 w-6 text-white" />
      </button>
      <button 
        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 rounded-full p-2 backdrop-blur-sm transition-all"
        onClick={() => handleManualSlideChange(currentSlide === slides.length - 1 ? 0 : currentSlide + 1)}
        aria-label="Next slide"
      >
        <ChevronRight className="h-6 w-6 text-white" />
      </button>
    </div>
  );
};

export default HeroSection;
