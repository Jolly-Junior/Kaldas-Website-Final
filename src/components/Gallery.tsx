import { useState, TouchEvent, MouseEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { GALLERY, BEFORE_AFTER } from '../data';
import { Eye, X, ChevronLeft, ChevronRight, Sliders, Play, Sparkles } from 'lucide-react';

interface BeforeAfterSliderProps {
  key?: string;
  beforeImage: string;
  afterImage: string;
  title: string;
  description: string;
}

function BeforeAfterSlider({ beforeImage, afterImage, title, description }: BeforeAfterSliderProps) {
  const [sliderPosition, setSliderPosition] = useState(50); // 0 to 100
  const [isSliding, setIsSliding] = useState(false);

  const handleMove = (clientX: number, containerRect: DOMRect) => {
    const x = clientX - containerRect.left;
    const position = Math.max(0, Math.min(100, (x / containerRect.width) * 100));
    setSliderPosition(position);
  };

  const handleTouchMove = (e: TouchEvent) => {
    const container = e.currentTarget.getBoundingClientRect();
    if (e.touches[0]) {
      handleMove(e.touches[0].clientX, container);
    }
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (e.buttons === 1 || isSliding) {
      const container = e.currentTarget.getBoundingClientRect();
      handleMove(e.clientX, container);
    }
  };

  return (
    <div className="relative frosted-card rounded-3xl overflow-hidden p-4 md:p-6 transition-colors duration-500">
      <h4 className="font-serif text-lg md:text-xl font-normal text-brand-green dark:text-brand-ivory mb-2">{title}</h4>
      <p className="font-sans text-xs text-brand-charcoal/60 dark:text-brand-ivory/60 mb-4 font-light">{description}</p>
      
      {/* Dynamic Stage */}
      <div
        id={`slider-stage-${title.replace(/\s+/g, '-').toLowerCase()}`}
        className="relative w-full aspect-4/3 rounded-2xl overflow-hidden cursor-ew-resize select-none"
        onTouchMove={handleTouchMove}
        onMouseMove={handleMouseMove}
        onMouseDown={() => setIsSliding(true)}
        onMouseUp={() => setIsSliding(false)}
        onMouseLeave={() => setIsSliding(false)}
      >
        {/* Before Image (Background) */}
        <img
          src={beforeImage}
          alt="Before treatment"
          referrerPolicy="no-referrer"
          className="absolute inset-0 w-full h-full object-cover select-none pointer-events-none"
        />
        <span className="absolute bottom-4 left-4 z-10 bg-brand-charcoal/80 text-white text-[10px] tracking-widest uppercase font-semibold px-3 py-1 rounded-full backdrop-blur-xs select-none pointer-events-none">
          Before
        </span>

        {/* After Image (Absolute foreground clipped by width) */}
        <div
          className="absolute inset-y-0 left-0 right-0 overflow-hidden"
          style={{ width: `${sliderPosition}%` }}
        >
          <img
            src={afterImage}
            alt="After treatment"
            referrerPolicy="no-referrer"
            className="absolute inset-0 w-full h-full object-cover max-w-none select-none pointer-events-none"
            style={{ width: '100%', height: '100%' }} // Lock to parent size
          />
          <span className="absolute bottom-4 right-4 z-10 bg-brand-gold text-brand-green text-[10px] tracking-widest uppercase font-bold px-3 py-1 rounded-full shadow-md select-none pointer-events-none">
            After
          </span>
        </div>

        {/* Separator Line & Interactive Handle */}
        <div
          className="absolute inset-y-0 w-1 bg-brand-gold z-20 shadow-md cursor-ew-resize"
          style={{ left: `${sliderPosition}%` }}
        >
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-brand-gold rounded-full flex items-center justify-center shadow-lg border border-brand-green/30 select-none pointer-events-none">
            <Sliders size={12} className="text-brand-green rotate-90" />
          </div>
        </div>
      </div>
      <div className="text-center mt-3 text-[10px] tracking-widest text-brand-charcoal/40 dark:text-brand-ivory/40 uppercase font-light">
        Slide or drag across image to compare
      </div>
    </div>
  );
}

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const categories = ['All', 'Hair', 'Makeup', 'Skincare', 'Nails', 'Lashes & Brows', 'Reels & Videos'];

  const filteredGallery = activeFilter === 'All'
    ? GALLERY
    : GALLERY.filter(item => item.category === activeFilter);

  const openLightbox = (id: string) => {
    const idx = GALLERY.findIndex(item => item.id === id);
    if (idx !== -1) setLightboxIndex(idx);
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  const handlePrev = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex - 1 + GALLERY.length) % GALLERY.length);
  };

  const handleNext = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex + 1) % GALLERY.length);
  };

  return (
    <section
      id="gallery"
      className="py-24 md:py-32 bg-brand-beige/25 dark:bg-brand-green/10 transition-colors duration-500"
    >
      <div className="max-w-7xl w-full mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div id="gallery-header" className="text-center max-w-3xl mx-auto mb-20">
          <span className="font-sans text-xs md:text-sm tracking-[0.25em] text-brand-accent-gold uppercase font-bold mb-4 block">
            VISUAL PORTFOLIO & REAL RESULTS
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-normal tracking-tight text-brand-green dark:text-brand-ivory mb-6">
            The Living <span className="italic font-light text-brand-gold">Artistry</span> Gallery
          </h2>
          <div className="w-16 h-0.5 bg-brand-gold mx-auto mb-6" />
          <p className="font-sans text-brand-charcoal/70 dark:text-brand-ivory/70 font-light leading-relaxed">
            Witness the transformations created by Kaldas artisans and certified graduates. Explore high-contrast, 
            natural aesthetics and browse real-time before & after case studies.
          </p>
        </div>

        {/* 1. Photo Grid / Filter Section */}
        <div className="mb-24">
          <div className="flex items-center justify-center space-x-3 mb-10">
            <Eye size={16} className="text-brand-gold" />
            <h3 className="font-serif text-2xl md:text-3xl font-normal text-brand-green dark:text-brand-ivory text-center">
              Salon Artistry Portfolio
            </h3>
          </div>

          {/* Filters */}
          <div 
            id="gallery-filters" 
            className="flex flex-wrap justify-center gap-2 mb-12 overflow-x-auto pb-4 scrollbar-none"
          >
            {categories.map((filter) => (
              <button
                id={`gallery-filter-${filter.replace(/\s+/g, '-').toLowerCase()}`}
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-5 py-2.5 rounded-full font-sans text-xs tracking-wider uppercase font-semibold cursor-pointer transition-all duration-300 ${
                  activeFilter === filter
                    ? 'bg-brand-green dark:bg-brand-gold text-brand-ivory dark:text-brand-green shadow-xs'
                    : 'bg-white/40 dark:bg-brand-green/30 text-brand-charcoal/70 dark:text-brand-ivory/70 hover:bg-white/80 dark:hover:bg-brand-green/50 border border-brand-gold/20 backdrop-blur-md'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>

          {/* Masonry-style Grid */}
          <motion.div
            id="gallery-grid"
            layout
            className="grid grid-cols-2 lg:grid-cols-3 gap-3 md:gap-8"
          >
            <AnimatePresence mode="popLayout">
              {filteredGallery.map((item, index) => (
                <motion.div
                  id={`gallery-item-${item.id}`}
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  onClick={() => openLightbox(item.id)}
                  className="group relative rounded-xl md:rounded-2xl overflow-hidden aspect-square shadow-xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer border border-brand-charcoal/5 dark:border-brand-ivory/5"
                >
                  <img
                    id={`gallery-img-${item.id}`}
                    src={item.image}
                    alt={item.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover filter brightness-95 transition-transform duration-1000 group-hover:scale-105"
                  />
                  {/* Play video overlay icon if it has a videoUrl */}
                  {item.videoUrl && (
                    <div className="absolute top-2 right-2 md:top-4 md:right-4 bg-brand-green/80 dark:bg-brand-gold/80 text-brand-ivory dark:text-brand-green p-1.5 md:p-2 rounded-full backdrop-blur-xs shadow-md z-10 flex items-center justify-center animate-pulse">
                      <Play size={10} className="md:size-[14px]" fill="currentColor" />
                    </div>
                  )}
                  {/* Frosted details overlay */}
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-brand-green/95 via-brand-green/70 to-transparent p-3 pt-8 md:p-6 md:pt-12 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end">
                    <span className="font-sans text-[8px] md:text-[10px] tracking-widest uppercase font-bold text-brand-gold mb-0.5 md:mb-1">
                      {item.category}
                    </span>
                    <h4 className="font-serif text-xs sm:text-base md:text-lg text-brand-ivory leading-snug font-medium">
                      {item.title}
                    </h4>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>

        {/* 2. Before & After Comparisons (Interactive Section) */}
        <div>
          <div className="flex items-center justify-center space-x-3 mb-10">
            <Sparkles size={16} className="text-brand-gold animate-pulse" />
            <h3 className="font-serif text-2xl md:text-3xl font-normal text-brand-green dark:text-brand-ivory text-center">
              Featured Case Studies
            </h3>
          </div>
          <div id="before-after-slider-grid" className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12">
            {BEFORE_AFTER.map((caseStudy) => (
              <BeforeAfterSlider
                key={caseStudy.id}
                beforeImage={caseStudy.beforeImage}
                afterImage={caseStudy.afterImage}
                title={caseStudy.title}
                description={caseStudy.description}
              />
            ))}
          </div>
        </div>

      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4 md:p-10 select-none">
            {/* Background Backdrop Tap Close */}
            <div className="absolute inset-0" onClick={closeLightbox} />

            {/* Close Button */}
            <button
              id="lightbox-close"
              onClick={closeLightbox}
              className="absolute top-6 right-6 text-white hover:text-brand-gold p-2 rounded-full cursor-pointer z-20"
              aria-label="Close Lightbox"
            >
              <X size={24} />
            </button>

            {/* Left Button */}
            <button
              id="lightbox-prev"
              onClick={handlePrev}
              className="absolute left-4 md:left-8 text-white hover:text-brand-gold p-3 rounded-full bg-white/5 hover:bg-white/10 backdrop-blur-xs transition-colors cursor-pointer z-10"
              aria-label="Previous Image"
            >
              <ChevronLeft size={24} />
            </button>

            {/* Image Stage */}
            <motion.div
              id="lightbox-stage"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative w-full max-w-4xl max-h-[80vh] flex flex-col items-center justify-center z-10"
            >
              {GALLERY[lightboxIndex].videoUrl ? (
                <div className="relative w-full max-w-xs md:max-w-sm aspect-[9/16] bg-black rounded-2xl overflow-hidden shadow-2xl border border-brand-gold/20">
                  <video
                    id="lightbox-video"
                    src={GALLERY[lightboxIndex].videoUrl}
                    controls
                    autoPlay
                    loop
                    playsInline
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                </div>
              ) : (
                <img
                  id="lightbox-image"
                  src={GALLERY[lightboxIndex].image}
                  alt={GALLERY[lightboxIndex].title}
                  referrerPolicy="no-referrer"
                  className="max-w-full max-h-[70vh] rounded-xl object-contain shadow-2xl"
                />
              )}
              {/* Image Description */}
              <div className="text-center mt-6 text-white">
                <span className="font-sans text-[10px] tracking-widest uppercase text-brand-gold font-bold mb-1 block">
                  {GALLERY[lightboxIndex].category}
                </span>
                <h3 className="font-serif text-lg md:text-xl font-normal tracking-wide px-4">
                  {GALLERY[lightboxIndex].title}
                </h3>
              </div>
            </motion.div>

            {/* Right Button */}
            <button
              id="lightbox-next"
              onClick={handleNext}
              className="absolute right-4 md:right-8 text-white hover:text-brand-gold p-3 rounded-full bg-white/5 hover:bg-white/10 backdrop-blur-xs transition-colors cursor-pointer z-10"
              aria-label="Next Image"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
