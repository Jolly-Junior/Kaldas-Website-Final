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
  const counters = [
    { id: 'c1', label: 'Loyal Clients', value: 1500, suffix: '+', from: 0 },
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
        <div id="why-header" className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <span className="font-sans text-xs md:text-sm tracking-[0.25em] text-brand-gold uppercase font-bold mb-4 block">
            THE KALDĀS STANDARD
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-normal tracking-tight text-brand-green dark:text-brand-ivory mb-6">
            Pioneering a New Era of <br />
            <span className="italic font-light text-brand-gold">Conscious</span> Luxury
          </h2>
          <div className="w-16 h-0.5 bg-brand-gold mx-auto" />
        </div>

        {/* Animated Counters Banner (Enhanced, compact and high contrast) */}
        <div 
          id="why-counters-banner" 
          className="max-w-4xl mx-auto bg-white dark:bg-brand-green/80 p-8 md:p-12 rounded-3xl border-2 border-brand-gold/50 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4 text-center relative overflow-hidden shadow-xl"
        >
          <div className="absolute inset-0 bg-brand-gold/[0.03] pointer-events-none" />
          
          {counters.map((counter, index) => (
            <div 
              id={`counter-item-${counter.id}`} 
              key={counter.id} 
              className={`flex flex-col items-center relative z-10 py-4 ${
                index < counters.length - 1 ? 'md:border-r border-brand-gold/25' : ''
              }`}
            >
              <span className="font-serif text-4xl md:text-5xl lg:text-6xl text-brand-green dark:text-brand-gold mb-3 flex justify-center font-extrabold tracking-tight">
                <AnimatedCounter from={counter.from} to={counter.value} suffix={counter.suffix} />
              </span>
              <span className="font-sans text-xs md:text-sm tracking-widest text-neutral-900 dark:text-white uppercase font-black px-4">
                {counter.label}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
