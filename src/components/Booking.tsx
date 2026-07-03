import { motion } from 'motion/react';
import { Phone, Mail, MapPin, Sparkles, Clock, PhoneCall } from 'lucide-react';

interface BookingProps {
  selectedServiceId: string;
  onSelectService: (serviceId: string) => void;
}

export default function Booking({ selectedServiceId, onSelectService }: BookingProps) {
  const handleDial = () => {
    window.location.href = 'tel:0970436373';
  };

  return (
    <section
      id="booking"
      className="py-24 md:py-32 bg-brand-beige/25 dark:bg-brand-green/10 transition-colors duration-500 overflow-hidden relative"
    >
      {/* Background accents */}
      <div className="absolute inset-0 bg-[radial-gradient(#C9B15B_1px,transparent_1px)] [background-size:32px_32px] opacity-[0.02] pointer-events-none" />
      <div className="absolute -left-48 top-1/2 w-96 h-96 bg-brand-gold/5 rounded-full blur-3xl pointer-events-none" />
      
      <div className="max-w-4xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div id="booking-header" className="text-center mb-16 max-w-2xl mx-auto">
          <span className="font-sans text-xs md:text-sm tracking-[0.25em] text-brand-gold uppercase font-bold mb-4 block">
            SECURE YOUR VISIT
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-normal tracking-tight text-brand-green dark:text-brand-ivory mb-6">
            Refined <span className="italic font-light text-brand-gold">Bespoke</span> Booking
          </h2>
          <p className="font-sans text-brand-charcoal/70 dark:text-brand-ivory/70 font-light leading-relaxed">
            We operate strictly by appointment to ensure each client receives undivided master artistry. 
            Connect with our reception desk directly to secure your slot.
          </p>
        </div>

        {/* Master Booking Card */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative max-w-2xl mx-auto bg-white/95 dark:bg-brand-green/80 border-2 border-brand-gold/30 rounded-3xl p-8 md:p-12 shadow-2xl overflow-hidden backdrop-blur-md"
        >
          {/* Gold Decorative Border Accents */}
          <div className="absolute top-0 left-0 right-0 h-1.5 bg-brand-gold" />
          <div className="absolute top-4 right-4 text-brand-gold/20">
            <Sparkles size={48} className="animate-pulse" />
          </div>

          <div className="text-center mb-8">
            <h3 className="font-serif text-3xl font-normal text-neutral-950 dark:text-brand-ivory mb-2">
              Kaldas Beauty Salon
            </h3>
            <span className="font-sans text-xs tracking-[0.2em] text-brand-gold uppercase font-semibold">
              RECEPTION & BOOKINGS
            </span>
          </div>

          {/* Details Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10 border-t border-b border-brand-gold/15 py-8">
            {/* Phone Card */}
            <div className="flex items-start space-x-4">
              <div className="w-10 h-10 bg-brand-gold/10 text-brand-gold rounded-xl flex items-center justify-center border border-brand-gold/20 shrink-0">
                <Phone size={18} />
              </div>
              <div>
                <span className="font-sans text-[10px] tracking-wider text-brand-charcoal/50 dark:text-brand-ivory/50 uppercase font-bold block mb-1">
                  CALL RECEPTION
                </span>
                <a 
                  href="tel:0970436373" 
                  className="font-mono text-lg font-bold text-neutral-950 dark:text-brand-gold hover:underline"
                >
                  0970436373
                </a>
              </div>
            </div>

            {/* Address Card */}
            <div className="flex items-start space-x-4">
              <div className="w-10 h-10 bg-brand-gold/10 text-brand-gold rounded-xl flex items-center justify-center border border-brand-gold/20 shrink-0">
                <MapPin size={18} />
              </div>
              <div>
                <span className="font-sans text-[10px] tracking-wider text-brand-charcoal/50 dark:text-brand-ivory/50 uppercase font-bold block mb-1">
                  SALON LOCATION
                </span>
                <a 
                  href="https://www.google.com/maps/search/?api=1&query=Kaldas+Beauty+Salon+Medhanyalem+Mall+Addis+Ababa+Ethiopia"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-sans text-sm font-semibold text-neutral-950 dark:text-brand-ivory leading-snug hover:underline block hover:text-brand-gold transition-colors"
                >
                  📍 Medhanyalem mall 5th floor, Addis Ababa, Ethiopia
                </a>
              </div>
            </div>

            {/* Email Card */}
            <div className="flex items-start space-x-4">
              <div className="w-10 h-10 bg-brand-gold/10 text-brand-gold rounded-xl flex items-center justify-center border border-brand-gold/20 shrink-0">
                <Mail size={18} />
              </div>
              <div>
                <span className="font-sans text-[10px] tracking-wider text-brand-charcoal/50 dark:text-brand-ivory/50 uppercase font-bold block mb-1">
                  EMAIL ENQUIRIES
                </span>
                <a 
                  href="mailto:info@kaldasbeauty.com" 
                  className="font-sans text-sm font-semibold text-neutral-950 dark:text-brand-ivory hover:underline block"
                >
                  info@kaldasbeauty.com
                </a>
              </div>
            </div>

            {/* Operating Hours Card */}
            <div className="flex items-start space-x-4">
              <div className="w-10 h-10 bg-brand-gold/10 text-brand-gold rounded-xl flex items-center justify-center border border-brand-gold/20 shrink-0">
                <Clock size={18} />
              </div>
              <div>
                <span className="font-sans text-[10px] tracking-wider text-brand-charcoal/50 dark:text-brand-ivory/50 uppercase font-bold block mb-1">
                  OPERATING HOURS
                </span>
                <p className="font-sans text-sm font-semibold text-neutral-950 dark:text-brand-ivory leading-snug">
                  Mon – Sat: 09:00 AM – 08:00 PM
                  <span className="block text-brand-gold text-[10px] uppercase mt-0.5">(Sunday: Closed)</span>
                </p>
              </div>
            </div>
          </div>

          {/* Quick Dial Button */}
          <button
            id="reception-quick-dial-btn"
            onClick={handleDial}
            className="w-full bg-brand-green dark:bg-brand-gold hover:bg-brand-accent-gold dark:hover:bg-brand-ivory text-brand-ivory dark:text-brand-green hover:text-brand-ivory dark:hover:text-brand-green font-sans text-sm tracking-widest uppercase font-bold py-4.5 rounded-2xl shadow-xl hover:shadow-2xl hover:-translate-y-0.5 transition-all duration-300 cursor-pointer flex items-center justify-center space-x-3"
          >
            <PhoneCall size={18} className="animate-bounce" />
            <span>Dial Reception to Book</span>
          </button>

          <p className="font-sans text-[10px] text-center text-brand-charcoal/40 dark:text-brand-ivory/45 mt-4 leading-relaxed">
            Clicking the button will automatically dial 0970436373 on your device.
          </p>
        </motion.div>

      </div>
    </section>
  );
}
