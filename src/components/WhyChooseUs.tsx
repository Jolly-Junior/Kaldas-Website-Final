import { useState, useEffect } from 'react';
import { motion, useMotionValue, useTransform, animate } from 'motion/react';
import { ShieldCheck, Award, Leaf, Compass, Gem, Heart, Trophy, Flame } from 'lucide-react';

interface CounterProps {
  from: number;
  to: number;
  duration?: number;
  suffix?: string;
}

function AnimatedCounter({ from, to, duration = 2, suffix = '' }: CounterProps) {
  const [count, setCount] = useState(from);

  useEffect(() => {
    let active = true;
    const controls = animate(from, to, {
      duration,
      ease: 'easeOut',
      onUpdate: (value) => {
        if (active) setCount(Math.floor(value));
      }
    });
    return () => {
      active = false;
      controls.stop();
    };
  }, [from, to, duration]);

  return <span>{count}{suffix}</span>;
}

export default function WhyChooseUs() {
  const features = [
    {
      id: 'f1',
      title: 'Certified Experts',
      description: 'Our specialists hold master clinical beauty titles from elite training centers in France, Germany, and Denmark.',
      icon: Award
    },
    {
      id: 'f2',
      title: 'Premium Products',
      description: 'We exclusively select clean, botanical-grade formulas and active dermatological elixirs.',
      icon: Leaf
    },
    {
      id: 'f3',
      title: 'Personalized Care',
      description: 'Every treatment maps your precise skeletal anatomy and tissue sensitivity for perfect synergy.',
      icon: Heart
    },
    {
      id: 'f4',
      title: 'Modern Techniques',
      description: 'We blend classical manual lymphatic techniques with advanced high-frequency microcurrent devices.',
      icon: Compass
    },
    {
      id: 'f5',
      title: 'Luxury Experience',
      description: 'An eye-safe, quiet, minimalist sanctuary optimized to lower sensory stimulation and restore focus.',
      icon: Gem
    }
  ];

  const counters = [
    { id: 'c1', label: 'Loyal Clients', value: 1500, suffix: '+', from: 0 },
    { id: 'c2', label: 'Premium Brands', value: 12, suffix: ' Selected', from: 0 },
    { id: 'c3', label: 'Years of Experience', value: 15, suffix: '+', from: 0 },
    { id: 'c4', label: 'Client Satisfaction Index', value: 99, suffix: '%', from: 0 }
  ];

  return (
    <section
      id="why-choose-us"
      className="py-24 md:py-32 bg-brand-beige/25 dark:bg-brand-green/25 transition-colors duration-500 overflow-hidden"
    >
      <div className="max-w-7xl w-full mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div id="why-header" className="text-center max-w-3xl mx-auto mb-20 md:mb-24">
          <span className="font-sans text-xs md:text-sm tracking-[0.25em] text-brand-gold uppercase font-bold mb-4 block">
            THE KALDĀS STANDARD
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-normal tracking-tight text-brand-green dark:text-brand-ivory mb-6">
            Pioneering a New Era of <br />
            <span className="italic font-light text-brand-gold">Conscious</span> Luxury
          </h2>
          <div className="w-16 h-0.5 bg-brand-gold mx-auto mb-6" />
          <p className="font-sans text-neutral-900 dark:text-neutral-100 font-medium leading-relaxed">
            We reject mass-produced beauty trends. Our philosophy unites the tranquility of Scandinavian architecture 
            with certified discipline and premium organic formulations.
          </p>
        </div>

        {/* Feature Cards Grid (Compact P-3/5 cards) */}
        <div id="why-features-grid" className="grid grid-cols-2 lg:grid-cols-3 gap-3 md:gap-8">
          {features.map((feat, index) => {
            const Icon = feat.icon;
            return (
              <motion.div
                id={`feature-card-${feat.id}`}
                key={feat.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                className="group p-3 sm:p-5 bg-white/95 dark:bg-brand-green/80 border-2 border-brand-gold/30 rounded-xl md:rounded-2xl hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-8 h-8 md:w-9 md:h-9 bg-brand-green/10 dark:bg-brand-gold/20 text-brand-green dark:text-brand-gold rounded-lg flex items-center justify-center border border-brand-green/40 dark:border-brand-gold/40 mb-3 md:mb-4 group-hover:bg-brand-green group-hover:text-brand-ivory dark:group-hover:bg-brand-gold dark:group-hover:text-brand-green transition-all duration-500">
                  <Icon size={14} className="md:size-[16px]" />
                </div>
                
                <h3 className="font-serif text-sm md:text-base font-bold text-neutral-950 dark:text-brand-ivory mb-1 md:mb-2 group-hover:text-brand-gold transition-colors duration-300">
                  {feat.title}
                </h3>
                
                <p className="font-sans text-[10px] sm:text-xs md:text-sm text-neutral-900 dark:text-white leading-snug sm:leading-relaxed font-normal">
                  {feat.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Animated Counters Banner (Enhanced, compact and high contrast) */}
        <div 
          id="why-counters-banner" 
          className="mt-20 bg-white dark:bg-brand-green/80 p-6 md:p-8 rounded-2xl border-2 border-brand-gold/50 grid grid-cols-2 lg:grid-cols-4 gap-6 text-center relative overflow-hidden shadow-md"
        >
          <div className="absolute inset-0 bg-brand-gold/[0.05] pointer-events-none" />
          
          {counters.map((counter) => (
            <div id={`counter-item-${counter.id}`} key={counter.id} className="flex flex-col items-center relative z-10">
              <span className="font-serif text-3xl md:text-4xl lg:text-5xl text-neutral-950 dark:text-brand-gold mb-2 flex justify-center font-extrabold tracking-tight">
                <AnimatedCounter from={counter.from} to={counter.value} suffix={counter.suffix} />
              </span>
              <span className="font-sans text-[10px] md:text-xs tracking-widest text-neutral-950 dark:text-white uppercase font-black">
                {counter.label}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
