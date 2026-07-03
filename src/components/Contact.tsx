import { useState, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MapPin, Phone, Mail, Clock, MessageSquare, Send, CheckCircle, Instagram, Star } from 'lucide-react';
import mapImage from '../assets/images/map.png';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSending, setIsSending] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const [formErr, setFormErr] = useState('');

  const handleContactSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) {
      setFormErr('Please complete all form fields to send your message.');
      return;
    }
    setFormErr('');
    setIsSending(true);

    // Simulate luxury API response transition
    setTimeout(() => {
      setIsSending(false);
      setIsSent(true);
      setName('');
      setEmail('');
      setMessage('');
    }, 1800);
  };

  const contactDetails = [
    {
      id: 'c-loc',
      title: 'Our Sanctuary Address',
      desc: '📍 Medhanyalem mall 5th floor, Addis Ababa, Ethiopia',
      icon: MapPin,
      link: 'https://www.google.com/maps/search/?api=1&query=Kaldas+Beauty+Salon+Medhanyalem+Mall+Addis+Ababa+Ethiopia'
    },
    {
      id: 'c-tel',
      title: 'Salon Reservations',
      desc: '0970436373',
      icon: Phone,
      link: 'tel:0970436373'
    },
    {
      id: 'c-ig',
      title: 'Instagram Feed & Stories',
      desc: '@kaldasBeauty',
      icon: Instagram,
      link: 'https://www.instagram.com/kaldasbeauty/'
    },
    {
      id: 'c-review',
      title: 'Write a Google Review',
      desc: '⭐ Share your experience on Google Maps',
      icon: Star,
      link: 'https://www.google.com/search?q=Kaldas+Beauty+Salon+Addis+Ababa+review'
    }
  ];

  return (
    <section
      id="contact"
      className="py-24 md:py-32 bg-brand-beige/20 dark:bg-brand-green/20 transition-colors duration-500"
    >
      <div className="max-w-7xl w-full mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div id="contact-header" className="text-center max-w-3xl mx-auto mb-20 md:mb-24">
          <span className="font-sans text-xs md:text-sm tracking-[0.25em] text-brand-accent-gold uppercase font-bold mb-4 block animate-fade-in">
            CONNECT WITH US
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-normal tracking-tight text-brand-green dark:text-brand-ivory mb-6">
            Begin Your <span className="italic font-light text-brand-gold">Transformation</span>
          </h2>
          <div className="w-16 h-0.5 bg-brand-gold mx-auto" />
        </div>

        <div id="contact-content-grid" className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Contact Details & Map Card (Left Column) */}
          <div className="lg:col-span-5 space-y-8">
            <div className="bg-white dark:bg-brand-green/10 rounded-3xl border border-brand-charcoal/5 dark:border-brand-ivory/5 p-8 md:p-10 shadow-xs space-y-6">
              <h3 className="font-serif text-2xl font-normal text-brand-green dark:text-brand-ivory mb-4">
                The Salon
              </h3>
              
              <div className="space-y-6">
                {contactDetails.map((detail) => {
                  const Icon = detail.icon;
                  return (
                    <div id={detail.id} key={detail.id} className="flex items-start space-x-4">
                      <div className="p-3 bg-brand-gold/10 text-brand-gold rounded-xl border border-brand-gold/15 shrink-0">
                        <Icon size={16} />
                      </div>
                      <div>
                        <h4 className="font-sans text-xs tracking-wider uppercase font-semibold text-brand-accent-gold mb-1">
                          {detail.title}
                        </h4>
                        {detail.link ? (
                          <a
                            href={detail.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-sans text-sm text-brand-charcoal/85 dark:text-brand-ivory/85 hover:text-brand-gold dark:hover:text-brand-gold transition-colors font-light block"
                          >
                            {detail.desc}
                          </a>
                        ) : (
                          <span className="font-sans text-sm text-brand-charcoal/85 dark:text-brand-ivory/85 font-light block">
                            {detail.desc}
                          </span>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Apple-style Interactive Map Card Placeholder */}
            <div className="relative rounded-3xl overflow-hidden aspect-16/10 shadow-md border border-brand-charcoal/5 group">
              {/* Styled background image representing map */}
              <div 
                className="absolute inset-0 bg-cover bg-center bg-no-repeat flex items-center justify-center transition-all duration-500"
                style={{ backgroundImage: `url(${mapImage})`, backgroundColor: '#ebe3d5' }}
              >
                {/* Visual Locator Pin */}
                <div className="relative flex flex-col items-center">
                  <motion.div
                    animate={{ y: [0, -6, 0] }}
                    transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
                    className="w-10 h-10 bg-brand-green text-brand-gold rounded-full flex items-center justify-center shadow-lg border-2 border-brand-gold"
                  >
                    <MapPin size={18} />
                  </motion.div>
                  <div className="w-5 h-1.5 bg-brand-charcoal/20 dark:bg-black/40 rounded-full blur-xs mt-1" />
                </div>
              </div>
              
              {/* Address detail badge on map */}
              <div className="absolute bottom-4 left-4 right-4 bg-white/95 dark:bg-brand-green/95 backdrop-blur-md p-4 rounded-2xl border border-brand-gold/15 flex justify-between items-center shadow-lg">
                <div>
                  <h4 className="font-serif text-sm font-normal text-brand-green dark:text-brand-ivory">Kaldas Beauty Salon</h4>
                  <span className="font-sans text-[10px] text-brand-charcoal/60 dark:text-brand-ivory/80 font-light">Medhanyalem Mall, Addis Ababa</span>
                </div>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Kaldas+Beauty+Salon+Medhanyalem+Mall+Addis+Ababa+Ethiopia"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-brand-green dark:bg-brand-gold text-brand-ivory dark:text-brand-green px-4 py-2 rounded-full font-sans text-[9px] tracking-widest uppercase font-bold hover:bg-brand-gold dark:hover:bg-brand-ivory hover:text-brand-green dark:hover:text-brand-green transition-all"
                >
                  Directions
                </a>
              </div>
            </div>
          </div>

          {/* Contact Message Form (Right Column) */}
          <div className="lg:col-span-7 glassmorphism rounded-3xl p-8 md:p-12 shadow-xs relative">
            <div className="absolute top-0 left-0 right-0 h-1 bg-brand-gold" />
            
            <AnimatePresence mode="wait">
              {!isSent ? (
                <motion.form
                  id="contact-form"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  onSubmit={handleContactSubmit}
                  className="space-y-6"
                >
                  <h3 className="font-serif text-2xl font-normal text-brand-green dark:text-brand-ivory">
                    Inquire Online
                  </h3>
                  <p className="font-sans text-xs text-brand-charcoal/60 dark:text-brand-ivory/80 font-light mb-4">
                    Fill out our contact dispatch form for custom treatment consults, wedding bookings, or school questions.
                  </p>

                  {formErr && (
                    <div id="contact-form-err" className="p-4 bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-900/30 rounded-xl text-red-600 dark:text-red-400 font-sans text-xs font-semibold">
                      {formErr}
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block font-sans text-xs tracking-wider uppercase font-semibold text-brand-charcoal/80 dark:text-brand-ivory/80 mb-2">
                        Your Name *
                      </label>
                      <input
                        id="contact-name-input"
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Elena Vestergaard"
                        className="w-full bg-brand-beige/25 dark:bg-white/5 border border-brand-charcoal/10 dark:border-brand-ivory/15 focus:border-brand-gold dark:focus:border-brand-gold outline-hidden text-brand-charcoal dark:text-brand-ivory rounded-xl px-4 py-3.5 text-sm transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block font-sans text-xs tracking-wider uppercase font-semibold text-brand-charcoal/80 dark:text-brand-ivory/80 mb-2">
                        Email Address *
                      </label>
                      <input
                        id="contact-email-input"
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="elena@example.com"
                        className="w-full bg-brand-beige/25 dark:bg-white/5 border border-brand-charcoal/10 dark:border-brand-ivory/15 focus:border-brand-gold dark:focus:border-brand-gold outline-hidden text-brand-charcoal dark:text-brand-ivory rounded-xl px-4 py-3.5 text-sm transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block font-sans text-xs tracking-wider uppercase font-semibold text-brand-charcoal/80 dark:text-brand-ivory/80 mb-2">
                      Your Inquiry *
                    </label>
                    <textarea
                      id="contact-msg-input"
                      required
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Share your beauty aspirations, dates of interest, or technical queries..."
                      rows={5}
                      className="w-full bg-brand-beige/25 dark:bg-white/5 border border-brand-charcoal/10 dark:border-brand-ivory/15 focus:border-brand-gold dark:focus:border-brand-gold outline-hidden text-brand-charcoal dark:text-brand-ivory rounded-xl px-4 py-3.5 text-sm transition-colors resize-none"
                    />
                  </div>

                  <button
                    id="contact-submit-btn"
                    type="submit"
                    disabled={isSending}
                    className="w-full flex items-center justify-center space-x-2 bg-brand-green dark:bg-brand-gold hover:bg-brand-accent-gold dark:hover:bg-brand-ivory text-brand-ivory dark:text-brand-green hover:text-brand-ivory dark:hover:text-brand-green font-sans text-xs tracking-widest uppercase font-bold py-4 rounded-xl transition-all duration-300 disabled:opacity-75 cursor-pointer"
                  >
                    {isSending ? (
                      <span className="animate-pulse">Dispatching Inquiry...</span>
                    ) : (
                      <>
                        <Send size={14} />
                        <span>Dispatch Message</span>
                      </>
                    )}
                  </button>
                </motion.form>
              ) : (
                <motion.div
                  id="contact-success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-10 flex flex-col items-center"
                >
                  <div className="w-16 h-16 bg-brand-gold/15 dark:bg-brand-gold/25 text-brand-gold rounded-full flex items-center justify-center mb-6">
                    <CheckCircle size={32} />
                  </div>
                  <h3 className="font-serif text-2xl md:text-3xl font-normal text-brand-green dark:text-brand-ivory mb-4">
                    Inquiry Dispatched!
                  </h3>
                  <p className="font-sans text-sm text-brand-charcoal/70 dark:text-brand-ivory/70 leading-relaxed max-w-sm mb-8 font-light">
                    Your inquiry has been logged successfully. One of our master coordinators will reply to you within 4 hours.
                  </p>
                  <button
                    id="contact-reset-btn"
                    onClick={() => setIsSent(false)}
                    className="bg-brand-green dark:bg-brand-gold text-brand-ivory dark:text-brand-green hover:bg-brand-gold dark:hover:bg-brand-ivory font-sans text-xs tracking-widest uppercase font-bold px-8 py-3.5 rounded-full transition-colors cursor-pointer"
                  >
                    Send Another Message
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
}
