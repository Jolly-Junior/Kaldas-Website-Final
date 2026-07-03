import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowDown, Sparkles, ChevronLeft, ChevronRight } from 'lucide-react';

import slide1 from '../assets/images/K1.png';
import slide2 from '../assets/images/K2.png';
import slide3 from '../assets/images/K3.png';
import slide4 from '../assets/images/K4.jpeg';

interface HeroProps {
  onNavigate: (sectionId: string) => void;
}

const HERO_IMAGES = [
  slide1,
  slide2,
  slide3,
  slide4
];

export default function Hero({ onNavigate }: HeroProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto slide every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev + 1) % HERO_IMAGES.length);
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev - 1 + HERO_IMAGES.length) % HERO_IMAGES.length);
  };

  return (
    <section
      id="home"
      className="relative w-full min-h-screen flex flex-col justify-end pb-12 md:pb-14 overflow-hidden bg-brand-green"
    >
      {/* Background Slideshow */}
      <div id="hero-slideshow-container" className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.img
            id={`hero-slide-${currentIndex}`}
            key={currentIndex}
            src={HERO_IMAGES[currentIndex]}
            alt="Kaldas Luxury Beauty Salon background"
            referrerPolicy="no-referrer"
            initial={{ opacity: 0, scale: 1.00 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 1.0, ease: 'easeInOut' }}
            className="absolute inset-0 w-full h-full object-cover object-center"
          />
        </AnimatePresence>
      </div>

      {/* Slide Navigation Buttons (Subtle/Sophisticated) */}
      <div className="absolute top-1/2 left-6 right-6 -translate-y-1/2 flex justify-between items-center z-10 pointer-events-none">
        <button
          id="hero-slide-prev"
          onClick={handlePrev}
          className="p-2.5 rounded-full bg-black/10 hover:bg-white/10 text-brand-gold hover:text-brand-beige border border-white/5 pointer-events-auto cursor-pointer transition-all duration-300"
          aria-label="Previous slide"
        >
          <ChevronLeft size={16} />
        </button>
        <button
          id="hero-slide-next"
          onClick={handleNext}
          className="p-2.5 rounded-full bg-black/10 hover:bg-white/10 text-brand-gold hover:text-brand-beige border border-white/5 pointer-events-auto cursor-pointer transition-all duration-300"
          aria-label="Next slide"
        >
          <ChevronRight size={16} />
        </button>
      </div>

      {/* Dots Indicator */}
      <div className="absolute right-8 top-1/2 -translate-y-1/2 flex flex-col gap-2 z-15">
        {HERO_IMAGES.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`w-1.5 h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
              idx === currentIndex ? 'bg-brand-gold h-4' : 'bg-brand-gold/30 hover:bg-brand-gold/60'
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>

      {/* Compact Hero Content - Aligned at the Bottom for Maximum Visibility */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 md:px-12 text-center text-brand-ivory flex flex-col items-center">
        {/* Small/Subtle Sub-tag */}
        <motion.div
          id="hero-tag"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex items-center space-x-1 bg-brand-green/80 backdrop-blur-md border border-brand-gold/30 rounded-full px-3 py-1 mb-4 shadow-sm"
        >
          <Sparkles size={9} className="text-brand-gold animate-pulse" />
          <span className="font-sans text-[8px] tracking-[0.25em] uppercase font-bold text-brand-gold">
            KALDĀS BEAUTY SALON
          </span>
        </motion.div>

        {/* Small/Compact CTA Buttons */}
        <motion.div
          id="hero-cta-group"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="flex flex-row space-x-3 w-auto"
        >
          <button
            id="hero-book-btn"
            onClick={() => onNavigate('booking')}
            className="bg-brand-gold hover:bg-brand-beige text-brand-green font-sans text-[10px] tracking-widest uppercase font-semibold px-4 py-1.5 rounded-full cursor-pointer shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0"
          >
            Book Now
          </button>
          
          <button
            id="hero-services-btn"
            onClick={() => onNavigate('services')}
            className="border border-brand-gold/40 hover:border-brand-gold bg-brand-green/80 hover:bg-brand-green/95 backdrop-blur-xs text-brand-gold font-sans text-[10px] tracking-widest uppercase font-semibold px-4 py-1.5 rounded-full cursor-pointer transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0"
          >
            Services
          </button>
        </motion.div>
      </div>

      {/* Floating Scroll Down Indicator (Extra compact) */}
      <motion.button
        id="hero-scroll-indicator"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.8 }}
        transition={{ delay: 1, duration: 0.8 }}
        onClick={() => onNavigate('about')}
        className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-brand-beige/50 hover:text-brand-gold transition-colors duration-300 cursor-pointer group z-10"
      >
        <motion.div
          animate={{ y: [0, 4, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
        >
          <ArrowDown size={14} className="group-hover:text-brand-gold" />
        </motion.div>
      </motion.button>
    </section>
  );
}
