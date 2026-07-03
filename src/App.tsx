import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Services from './components/Services';
import WhyChooseUs from './components/WhyChooseUs';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import Booking from './components/Booking';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { ArrowUp, Sparkles, Phone, MapPin, X } from 'lucide-react';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [darkMode, setDarkMode] = useState(true);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [selectedServiceId, setSelectedServiceId] = useState('');
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  // 1. Initial premium loading sequence
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1800);
    return () => clearTimeout(timer);
  }, []);

  // 2. Track scroll activities (progress + back to top)
  useEffect(() => {
    const handleScroll = () => {
      // Calculate scroll progress percentage
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        setScrollProgress((window.scrollY / totalHeight) * 100);
      }
      
      // Toggle Back to Top button
      setShowBackToTop(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // 3. Coordinate dark mode application to document level
  useEffect(() => {
    const root = window.document.documentElement;
    if (darkMode) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  // 4. Smooth scroll-to-section navigation with custom offset
  const handleNavigate = (sectionId: string) => {
    if (sectionId === 'booking') {
      setIsBookingModalOpen(true);
      return;
    }
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80; // height of our fixed navigation
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  // 5. Connect Treatment booking buttons
  const handleSelectService = (serviceId: string) => {
    setSelectedServiceId(serviceId);
    setIsBookingModalOpen(true);
  };

  const handleBackToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div id="app-root" className={`min-h-screen ${darkMode ? 'dark bg-brand-green text-brand-ivory' : 'bg-brand-ivory text-brand-charcoal'} selection:bg-brand-gold selection:text-brand-green font-sans transition-colors duration-500`}>
      
      {/* Scroll Progress Bar */}
      <div 
        id="scroll-progress-bar"
        className="fixed top-0 left-0 h-1 bg-brand-gold z-55 transition-all duration-100"
        style={{ width: `${scrollProgress}%` }}
      />

      <AnimatePresence mode="wait">
        {isLoading ? (
          /* Premium Splash Screen Loader */
          <motion.div
            id="app-splash-loader"
            key="loader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: 'easeInOut' }}
            className="fixed inset-0 z-55 bg-brand-green flex flex-col items-center justify-center text-brand-ivory"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="flex flex-col items-center space-y-4"
            >
              <span className="font-serif text-5xl md:text-6xl tracking-[0.2em] text-brand-gold">
                KALDĀS
              </span>
              <div className="flex items-center space-x-2 border-t border-brand-gold/30 pt-3">
                <Sparkles size={14} className="text-brand-gold animate-pulse" />
                <span className="font-sans text-xs tracking-[0.3em] text-brand-beige uppercase font-medium">
                  Beauty Salon
                </span>
              </div>
            </motion.div>
          </motion.div>
        ) : (
          /* Main Application Container */
          <motion.div
            id="main-app-content"
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            {/* Header / Nav */}
            <Navigation 
              darkMode={darkMode} 
              toggleDarkMode={toggleDarkMode} 
              onNavigate={handleNavigate} 
            />

            {/* Visual Sections */}
            <main id="main-sections" className="relative">
              <Hero onNavigate={handleNavigate} />
              
              <Gallery />
              
              <Services onSelectService={handleSelectService} />
              
              <WhyChooseUs />
              
              <Testimonials />
              
              <Booking 
                selectedServiceId={selectedServiceId} 
                onSelectService={setSelectedServiceId} 
              />
              
              <Contact />
            </main>

            {/* Footer */}
            <Footer onNavigate={handleNavigate} />

            {/* Interactive Floating Helpers */}
            
            {/* 1. Scroll Back to Top Floating button */}
            <AnimatePresence>
              {showBackToTop && (
                <motion.button
                  id="back-to-top-btn"
                  onClick={handleBackToTop}
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0, opacity: 0 }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="fixed bottom-6 right-6 z-40 glassmorphism text-brand-green dark:text-brand-gold hover:bg-brand-gold hover:text-brand-green p-4 rounded-full shadow-2xl flex items-center justify-center cursor-pointer border border-brand-gold/30"
                  aria-label="Back to Top"
                >
                  <ArrowUp size={18} />
                </motion.button>
              )}
            </AnimatePresence>

            {/* 3. Luxury Quick-Call Booking Modal */}
            <AnimatePresence>
              {isBookingModalOpen && (
                <div id="booking-modal-overlay" className="fixed inset-0 z-55 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md">
                  <motion.div
                    id="booking-modal-card"
                    initial={{ opacity: 0, scale: 0.95, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95, y: 20 }}
                    transition={{ duration: 0.4, ease: 'easeOut' }}
                    className="relative w-full max-w-md bg-white dark:bg-brand-green/95 border-2 border-brand-gold/40 rounded-3xl p-8 shadow-2xl overflow-hidden text-neutral-950 dark:text-brand-ivory"
                  >
                    {/* Gold Header accent */}
                    <div className="absolute top-0 left-0 right-0 h-1.5 bg-brand-gold" />
                    
                    {/* Close Button */}
                    <button
                      id="booking-modal-close"
                      onClick={() => setIsBookingModalOpen(false)}
                      className="absolute top-4 right-4 p-2 text-brand-charcoal/40 dark:text-brand-ivory/50 hover:text-brand-gold dark:hover:text-brand-gold hover:bg-black/5 dark:hover:bg-white/5 rounded-full cursor-pointer transition-colors"
                      aria-label="Close modal"
                    >
                      <X size={18} />
                    </button>

                    <div className="text-center mb-6">
                      <span className="font-sans text-[9px] tracking-[0.25em] text-brand-gold uppercase font-bold mb-1.5 block">
                        FAST TELEPHONE BOOKING
                      </span>
                      <h3 className="font-serif text-2xl font-normal text-neutral-950 dark:text-brand-ivory">
                        Kaldas Beauty Salon
                      </h3>
                    </div>

                    {/* Centered Phone Calling card */}
                    <div className="bg-brand-beige/20 dark:bg-white/5 border border-brand-gold/25 rounded-2xl p-6 text-center mb-6">
                      <div className="w-12 h-12 bg-brand-gold/10 text-brand-gold rounded-full flex items-center justify-center border border-brand-gold/20 mx-auto mb-4">
                        <Phone size={20} className="animate-pulse" />
                      </div>
                      
                      <span className="font-sans text-[10px] tracking-wider text-brand-charcoal/50 dark:text-brand-ivory/50 uppercase font-semibold block mb-1">
                        RECEPTION NUMBER
                      </span>
                      <a
                        href="tel:0970436373"
                        className="font-mono text-2xl font-bold text-neutral-950 dark:text-brand-gold hover:underline"
                      >
                        0970436373
                      </a>
                    </div>

                    {/* Address details */}
                    <div className="flex items-start space-x-3 text-left mb-6 px-1">
                      <MapPin size={16} className="text-brand-gold shrink-0 mt-0.5" />
                      <div>
                        <span className="font-sans text-[9px] tracking-wider text-brand-charcoal/50 dark:text-brand-ivory/50 uppercase font-semibold block">
                          SALON ADDRESS
                        </span>
                        <p className="font-sans text-xs font-medium text-brand-charcoal dark:text-brand-ivory leading-relaxed">
                          📍 Medhanyalem mall 5th floor, Addis Ababa, Ethiopia
                        </p>
                      </div>
                    </div>

                    {/* CTA and close */}
                    <div className="space-y-3">
                      <a
                        id="modal-dial-btn"
                        href="tel:0970436373"
                        className="w-full bg-brand-green dark:bg-brand-gold hover:bg-brand-accent-gold dark:hover:bg-brand-ivory text-brand-ivory dark:text-brand-green hover:text-brand-ivory dark:hover:text-brand-green font-sans text-xs tracking-widest uppercase font-bold py-3.5 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center space-x-2 animate-pulse"
                      >
                        <span>Dial Now</span>
                      </a>
                      
                      <button
                        id="modal-cancel-btn"
                        onClick={() => setIsBookingModalOpen(false)}
                        className="w-full bg-transparent hover:bg-black/5 dark:hover:bg-white/5 text-brand-charcoal/60 dark:text-brand-ivory/60 hover:text-neutral-950 dark:hover:text-brand-ivory border border-brand-charcoal/10 dark:border-brand-ivory/15 font-sans text-xs tracking-widest uppercase font-bold py-3.5 rounded-xl transition-all duration-300"
                      >
                        Close
                      </button>
                    </div>
                  </motion.div>
                </div>
              )}
            </AnimatePresence>

          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
