import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Sun, Moon } from 'lucide-react';
import KaldasLogo from './KaldasLogo';

interface NavigationProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
  onNavigate: (sectionId: string) => void;
}

export default function Navigation({ darkMode, toggleDarkMode, onNavigate }: NavigationProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { name: 'Home', id: 'home' },
    { name: 'Services', id: 'services' },
    { name: 'Gallery', id: 'gallery' },
    { name: 'Contact', id: 'contact' }
  ];

  const handleItemClick = (id: string) => {
    setIsMobileMenuOpen(false);
    onNavigate(id);
  };

  return (
    <>
      <nav
        id="main-nav"
        className={`fixed z-50 transition-all duration-500 flex items-center glass-nav ${
          isScrolled 
            ? 'top-2 left-2 right-2 h-16 rounded-2xl shadow-lg border border-brand-gold/30 bg-white/85 dark:bg-brand-green/85 backdrop-blur-md lg:top-0 lg:left-0 lg:right-0 lg:rounded-none lg:h-20 lg:border-b lg:border-brand-gold/25 lg:bg-white/50 lg:dark:bg-brand-green/60' 
            : 'top-3 left-3 right-3 h-16 rounded-2xl shadow-md border border-brand-gold/20 bg-white/75 dark:bg-brand-green/80 backdrop-blur-md lg:top-0 lg:left-0 lg:right-0 lg:rounded-none lg:h-20 lg:border-t-0 lg:border-x-0 lg:border-b lg:border-brand-gold/15 lg:bg-transparent'
        }`}
      >
        <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-12 flex justify-between items-center">
          {/* Logo */}
          <button 
            id="nav-logo"
            onClick={() => handleItemClick('home')} 
            className="flex items-center space-x-2 md:space-x-3 text-left cursor-pointer group"
          >
            <KaldasLogo className="w-[70px] h-[70px] text-brand-gold group-hover:text-brand-beige transition-colors duration-300 shrink-0" />
            <span className="font-serif text-xl md:text-2xl lg:text-3xl font-semibold tracking-wider text-brand-gold dark:text-brand-gold group-hover:text-brand-beige transition-colors duration-300">
              KALDĀS
            </span>
            <div className="flex flex-col border-l border-brand-gold/30 pl-1.5 md:pl-2 leading-none">
              <span className="font-sans text-[8px] md:text-[10px] tracking-widest text-brand-gold uppercase font-semibold">
                BEAUTY SALON
              </span>
              <span className="font-sans text-[7px] md:text-[8px] tracking-[0.15em] text-brand-beige dark:text-brand-beige uppercase font-light">
                EST. 2011
              </span>
            </div>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-10">
            <div className="flex space-x-8">
              {menuItems.map((item) => (
                <button
                  id={`nav-link-${item.id}`}
                  key={item.id}
                  onClick={() => handleItemClick(item.id)}
                  className="font-sans text-sm tracking-wide font-medium text-brand-gold dark:text-brand-gold hover:text-brand-beige dark:hover:text-brand-beige cursor-pointer transition-colors duration-300 relative py-1 group"
                >
                  {item.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-brand-gold transition-all duration-300 group-hover:w-full" />
                </button>
              ))}
            </div>

            {/* Dark Mode and CTA */}
            <div className="flex items-center space-x-6 border-l border-brand-gold/30 pl-6">
              <button
                id="desktop-dark-toggle"
                onClick={toggleDarkMode}
                className="text-brand-gold dark:text-brand-gold hover:text-brand-beige dark:hover:text-brand-beige p-2 rounded-full cursor-pointer transition-colors duration-300"
                aria-label="Toggle Dark Mode"
              >
                {darkMode ? <Sun size={19} /> : <Moon size={19} />}
              </button>

              <button
                id="desktop-book-btn"
                onClick={() => handleItemClick('booking')}
                className="bg-brand-gold hover:bg-brand-beige text-brand-green font-sans text-xs tracking-widest uppercase font-semibold px-6 py-3 rounded-full shadow-md cursor-pointer transition-all duration-300 transform hover:-translate-y-0.5"
              >
                Book Appointment
              </button>
            </div>
          </div>

          {/* Mobile Menu Buttons */}
          <div className="flex items-center space-x-2 lg:hidden">
            <button
              id="mobile-dark-toggle"
              onClick={toggleDarkMode}
              className="text-brand-gold dark:text-brand-gold hover:text-brand-beige p-2.5 rounded-full cursor-pointer transition-colors active:scale-90"
              aria-label="Toggle Dark Mode"
            >
              {darkMode ? <Sun size={18} /> : <Moon size={18} />}
            </button>

            <button
              id="mobile-menu-toggle"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-brand-gold dark:text-brand-gold hover:text-brand-beige p-2.5 focus:outline-hidden cursor-pointer transition-all active:scale-95 rounded-full"
              aria-label="Toggle Menu"
            >
              {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Floating Mobile Dropdown Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            id="mobile-drawer"
            initial={{ opacity: 0, y: -15, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -15, scale: 0.95 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="fixed top-[74px] left-3 right-3 z-45 bg-white/95 dark:bg-brand-green/95 border-2 border-brand-gold/30 rounded-2xl p-5 shadow-2xl backdrop-blur-md lg:hidden flex flex-col space-y-5"
          >
            <div className="flex flex-col space-y-2">
              {menuItems.map((item, index) => (
                <motion.button
                  id={`mobile-nav-link-${item.id}`}
                  key={item.id}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.04 }}
                  onClick={() => handleItemClick(item.id)}
                  className="font-serif text-lg font-bold text-left text-neutral-950 dark:text-brand-ivory hover:text-brand-gold dark:hover:text-brand-gold cursor-pointer py-2.5 px-4 hover:bg-brand-gold/10 rounded-xl transition-all flex items-center justify-between"
                >
                  <span>{item.name}</span>
                  <span className="w-1.5 h-1.5 bg-brand-gold rounded-full opacity-0 group-hover:opacity-100" />
                </motion.button>
              ))}
            </div>

            <div className="flex flex-col space-y-3 pt-3 border-t border-brand-gold/15">
              <button
                id="mobile-book-btn"
                onClick={() => handleItemClick('booking')}
                className="w-full text-center bg-brand-green dark:bg-brand-gold text-brand-ivory dark:text-brand-green hover:bg-brand-gold dark:hover:bg-brand-ivory font-sans text-xs tracking-widest uppercase font-bold py-3.5 rounded-xl transition-all duration-300 shadow-md cursor-pointer active:scale-98"
              >
                Book Appointment
              </button>
              
              <div className="text-center text-[9px] tracking-widest text-brand-charcoal/40 dark:text-brand-ivory/40 uppercase font-bold">
                Kaldas Beauty Salon
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
