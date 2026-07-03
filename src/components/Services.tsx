import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { SERVICES } from '../data';
import { Service } from '../types';
import { Scissors, Sparkles, Flower2, Paintbrush, Hand, Eye, Layers, ArrowRight } from 'lucide-react';

// Dynamic icon resolver helper
const IconMap: { [key: string]: any } = {
  Scissors,
  Sparkles,
  Flower2,
  Paintbrush,
  Hand,
  Eye,
  Layers
};

interface ServicesProps {
  onSelectService: (serviceId: string) => void;
}

export default function Services({ onSelectService }: ServicesProps) {
  const [activeTab, setActiveTab] = useState<'all' | 'hair' | 'makeup' | 'nails' | 'lashes'>('all');

  const categories = [
    { name: 'All Signature Treatments', id: 'all' },
    { name: 'Couture Hair', id: 'hair' },
    { name: 'Bridal & Editorial Makeup', id: 'makeup' },
    { name: 'Nail Artistry', id: 'nails' },
    { name: 'Lashes & Brows', id: 'lashes' }
  ];

  const filteredServices = activeTab === 'all'
    ? SERVICES
    : SERVICES.filter(service => service.category === activeTab);

  return (
    <section
      id="services"
      className="py-24 md:py-32 bg-brand-beige/25 dark:bg-brand-green/10 transition-colors duration-500"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div id="services-header" className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
          <span className="font-sans text-xs md:text-sm tracking-[0.25em] text-brand-accent-gold uppercase font-bold mb-4 block animate-fade-in">
            OUR SIGNATURE OFFERINGS
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-normal tracking-tight text-brand-green dark:text-brand-ivory mb-6">
            Indulge in <span className="italic font-light text-brand-gold">Bespoke</span> Beauty
          </h2>
          <div className="w-16 h-0.5 bg-brand-gold mx-auto mb-6" />
          <p className="font-sans text-neutral-900 dark:text-neutral-100 font-medium leading-relaxed">
            Every service is tailored precisely to your anatomy and preferences, incorporating clinical precision, 
            premium organic botanical blends, and high-contrast artistry.
          </p>
        </div>

        {/* Filter Navigation (Apple product filter pill style) */}
        <div 
          id="services-filter" 
          className="flex flex-wrap justify-center gap-2 mb-16 md:mb-20 overflow-x-auto pb-4 scrollbar-none"
        >
          {categories.map((cat) => (
            <button
              id={`filter-tab-${cat.id}`}
              key={cat.id}
              onClick={() => setActiveTab(cat.id as any)}
              className={`px-6 py-3 rounded-full font-sans text-xs tracking-wider uppercase font-semibold cursor-pointer transition-all duration-300 ${
                activeTab === cat.id
                  ? 'bg-brand-green dark:bg-brand-gold text-brand-ivory dark:text-brand-green shadow-sm'
                  : 'bg-white/80 dark:bg-brand-green/45 text-neutral-950 dark:text-neutral-50 hover:bg-white dark:hover:bg-brand-green/60 border-2 border-brand-gold/30 backdrop-blur-md'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Services Grid with elegant entering transitions */}
        <motion.div
          id="services-grid"
          layout
          className="grid grid-cols-2 lg:grid-cols-3 gap-3 md:gap-10"
        >
          <AnimatePresence mode="popLayout">
            {filteredServices.map((service, index) => {
              const IconComponent = IconMap[service.iconName] || Sparkles;
              return (
                <motion.div
                  id={`service-card-${service.id}`}
                  key={service.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className="group frosted-card rounded-xl md:rounded-3xl overflow-hidden hover:shadow-xl hover:-translate-y-1.5 transition-all duration-500 flex flex-col justify-between"
                >
                  {/* Card Thumbnail Container */}
                  <div className="relative aspect-[16/10] sm:aspect-4/3 overflow-hidden">
                    <img
                      id={`service-img-${service.id}`}
                      src={service.image}
                      alt={service.name}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 group-hover:saturate-100 saturate-75 filter brightness-95"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal/70 via-transparent to-transparent opacity-40 group-hover:opacity-10 transition-opacity duration-500" />
                    
                    {/* Category Tag */}
                    <span className="absolute top-2 left-2 md:top-3 md:left-3 bg-brand-green/95 dark:bg-brand-gold/95 backdrop-blur-xs text-brand-ivory dark:text-brand-green text-[8px] md:text-[9px] tracking-widest uppercase font-semibold px-2 py-0.5 md:px-3 md:py-1 rounded-full border border-brand-gold/20">
                      {service.category}
                    </span>
                  </div>

                  {/* Card Info */}
                  <div className="p-3 sm:p-5 md:p-8 flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center space-x-1.5 md:space-x-2.5 mb-2 md:mb-4 text-brand-gold">
                        <div className="p-1 md:p-2 bg-brand-gold/10 dark:bg-brand-gold/5 rounded-md md:rounded-lg border border-brand-gold/15">
                          <IconComponent size={12} className="md:size-[16px]" />
                        </div>
                        <span className="font-sans text-[8px] md:text-[10px] tracking-widest uppercase font-semibold text-brand-accent-gold">
                          Signature Ritual
                        </span>
                      </div>

                       <h3 className="font-serif text-sm sm:text-lg md:text-2xl font-semibold text-brand-green dark:text-brand-ivory mb-1.5 md:mb-3 group-hover:text-brand-gold transition-colors duration-300 leading-snug">
                        {service.name}
                      </h3>

                      <p className="font-sans text-[10px] sm:text-xs md:text-sm text-neutral-900 dark:text-neutral-50 leading-snug sm:leading-relaxed font-medium mb-3 md:mb-6 line-clamp-3 md:line-clamp-none">
                        {service.description}
                      </p>
                    </div>

                    {/* CTAs */}
                    <div className="pt-2">
                      <button
                        id={`service-book-btn-${service.id}`}
                        onClick={() => onSelectService(service.id)}
                        className="w-full flex items-center justify-center space-x-1.5 bg-brand-green/5 dark:bg-brand-ivory/5 hover:bg-brand-green dark:hover:bg-brand-gold text-brand-green dark:text-brand-ivory hover:text-brand-ivory dark:hover:text-brand-green border border-brand-green/10 dark:border-brand-ivory/10 hover:border-transparent dark:hover:border-transparent font-sans text-[9px] sm:text-xs tracking-widest uppercase font-bold py-2 md:py-3.5 rounded-full transition-all duration-300 cursor-pointer"
                      >
                        <span>Book Treatment</span>
                        <ArrowRight size={10} className="group-hover:translate-x-1 transition-transform md:size-[12px]" />
                      </button>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}
