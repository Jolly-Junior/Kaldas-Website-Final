import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { TESTIMONIALS } from '../data';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const current = TESTIMONIALS[currentIndex];

  return (
    <section
      id="testimonials"
      className="py-24 md:py-32 bg-brand-beige/25 dark:bg-brand-green/10 transition-colors duration-500 overflow-hidden"
    >
      <div className="max-w-5xl mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div id="testimonials-header" className="text-center max-w-2xl mx-auto mb-16 md:mb-20">
          <span className="font-sans text-xs md:text-sm tracking-[0.25em] text-brand-accent-gold uppercase font-bold mb-4 block">
            CLIENT SATISFACTION
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-normal tracking-tight text-brand-green dark:text-brand-ivory mb-6">
            Voices of Kaldas <span className="italic font-light text-brand-gold">Patrons</span>
          </h2>
          <div className="w-16 h-0.5 bg-brand-gold mx-auto" />
        </div>

        {/* Dynamic Card Stage */}
        <div className="relative glassmorphism rounded-2xl md:rounded-3xl p-5 sm:p-8 md:p-14 shadow-xl">
          <div className="absolute top-0 left-0 right-0 h-1 bg-brand-gold" />
          
          <AnimatePresence mode="wait">
            <motion.div
              id={`testimonial-slide-${current.id}`}
              key={current.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col md:flex-row md:items-center gap-5 md:gap-12"
            >
              {/* Profile Photo */}
              <div className="relative shrink-0 flex justify-center md:block">
                <div className="w-20 h-20 md:w-32 md:h-32 rounded-full overflow-hidden border-2 border-brand-gold shadow-md">
                  <img
                    id={`testimonial-avatar-${current.id}`}
                    src={current.image}
                    alt={current.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Visual quote accent mark */}
                <div className="absolute -bottom-1 -right-1 md:-bottom-2 md:-right-2 w-8 h-8 md:w-10 md:h-10 bg-brand-gold rounded-full flex items-center justify-center text-brand-green font-serif text-2xl md:text-3xl font-bold select-none leading-none shadow-md">
                  “
                </div>
              </div>

              {/* Review Text */}
              <div className="space-y-3 md:space-y-4 flex-1">
                {/* 5 Stars */}
                <div className="flex space-x-1 justify-center md:justify-start">
                  {[...Array(current.rating)].map((_, i) => (
                    <Star key={i} size={14} className="text-brand-gold fill-brand-gold" />
                  ))}
                </div>

                <p className="font-sans text-xs sm:text-sm md:text-lg text-brand-charcoal/85 dark:text-brand-ivory/85 leading-relaxed font-light italic text-center md:text-left">
                  "{current.review}"
                </p>

                <div className="text-center md:text-left">
                  <h4 className="font-serif text-base md:text-lg font-normal text-brand-green dark:text-brand-ivory">
                    {current.name}
                  </h4>
                  <span className="font-sans text-[10px] md:text-[11px] tracking-widest uppercase text-brand-accent-gold font-medium">
                    {current.role}
                  </span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Indicators & controls footer */}
          <div className="flex items-center justify-between border-t border-brand-charcoal/5 dark:border-brand-ivory/5 pt-5 mt-6 md:pt-8 md:mt-10">
            {/* Dots */}
            <div className="flex space-x-2">
              {TESTIMONIALS.map((t, idx) => (
                <button
                  id={`testimonial-dot-${idx}`}
                  key={t.id}
                  onClick={() => setCurrentIndex(idx)}
                  className={`w-2.5 h-2.5 rounded-full cursor-pointer transition-all duration-300 ${
                    currentIndex === idx 
                      ? 'bg-brand-gold w-6' 
                      : 'bg-brand-charcoal/20 dark:bg-brand-ivory/20'
                  }`}
                  aria-label={`Go to testimonial ${idx + 1}`}
                />
              ))}
            </div>

            {/* Slider Controls */}
            <div className="flex space-x-3">
              <button
                id="testimonial-prev-btn"
                onClick={handlePrev}
                className="p-3 border border-brand-charcoal/10 dark:border-brand-ivory/10 hover:border-brand-gold text-brand-charcoal/70 dark:text-brand-ivory/70 hover:text-brand-gold rounded-full bg-brand-beige/10 dark:bg-white/5 transition-all cursor-pointer"
                aria-label="Previous Testimonial"
              >
                <ChevronLeft size={16} />
              </button>
              <button
                id="testimonial-next-btn"
                onClick={handleNext}
                className="p-3 border border-brand-charcoal/10 dark:border-brand-ivory/10 hover:border-brand-gold text-brand-charcoal/70 dark:text-brand-ivory/70 hover:text-brand-gold rounded-full bg-brand-beige/10 dark:bg-white/5 transition-all cursor-pointer"
                aria-label="Next Testimonial"
              >
                <ChevronRight size={16} />
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
