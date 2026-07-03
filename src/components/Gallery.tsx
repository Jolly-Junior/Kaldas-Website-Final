import { useState, TouchEvent, MouseEvent, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { GALLERY, BEFORE_AFTER } from '../data';
import { Eye, X, ChevronLeft, ChevronRight, Sliders, Play, Sparkles, ZoomIn, EyeOff, Heart, MessageCircle, Share2, Instagram } from 'lucide-react';

interface BeforeAfterSliderProps {
  key?: string;
  beforeImage: string;
  afterImage: string;
  title: string;
  description: string;
}

function BeforeAfterSlider({ beforeImage, afterImage, title, description }: BeforeAfterSliderProps) {
  const [viewMode, setViewMode] = useState<'side-by-side' | 'slider'>('side-by-side');
  
  // Slider Mode state
  const [sliderPosition, setSliderPosition] = useState(50); // 0 to 100
  const [isSliding, setIsSliding] = useState(false);

  // Side-by-Side Magnifier state
  const [hoverPos, setHoverPos] = useState({ x: 0, y: 0 });
  const [showLens, setShowLens] = useState(false);
  const containerRefBefore = useRef<HTMLDivElement>(null);
  const containerRefAfter = useRef<HTMLDivElement>(null);

  const handleSliderMove = (clientX: number, containerRect: DOMRect) => {
    const x = clientX - containerRect.left;
    const position = Math.max(0, Math.min(100, (x / containerRect.width) * 100));
    setSliderPosition(position);
  };

  const handleSliderTouchMove = (e: TouchEvent) => {
    const container = e.currentTarget.getBoundingClientRect();
    if (e.touches[0]) {
      handleSliderMove(e.touches[0].clientX, container);
    }
  };

  const handleSliderMouseMove = (e: MouseEvent) => {
    if (e.buttons === 1 || isSliding) {
      const container = e.currentTarget.getBoundingClientRect();
      handleSliderMove(e.clientX, container);
    }
  };

  // Magnifier hover handlers
  const handleMagnifierMove = (e: MouseEvent<HTMLDivElement>) => {
    const container = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - container.left) / container.width) * 100;
    const y = ((e.clientY - container.top) / container.height) * 100;
    setHoverPos({ x, y });
    setShowLens(true);
  };

  return (
    <div className="relative frosted-card rounded-3xl overflow-hidden p-5 md:p-8 transition-colors duration-500 border border-brand-gold/20 shadow-lg">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
        <div>
          <h4 className="font-serif text-xl md:text-2xl font-normal text-brand-green dark:text-brand-ivory mb-1">{title}</h4>
          <p className="font-sans text-xs text-brand-charcoal/60 dark:text-brand-ivory/60 font-light">{description}</p>
        </div>

        {/* Dynamic Mode Switcher */}
        <div className="flex bg-brand-green/5 dark:bg-white/5 p-1 rounded-full border border-brand-gold/10 self-start sm:self-auto shrink-0">
          <button
            onClick={() => setViewMode('side-by-side')}
            className={`px-4 py-1.5 rounded-full font-sans text-[10px] tracking-widest uppercase font-bold transition-all ${
              viewMode === 'side-by-side'
                ? 'bg-brand-green dark:bg-brand-gold text-brand-ivory dark:text-brand-green shadow-sm'
                : 'text-brand-charcoal/60 dark:text-brand-ivory/60 hover:text-brand-gold'
            }`}
          >
            Side-by-Side Zoom
          </button>
          <button
            onClick={() => setViewMode('slider')}
            className={`px-4 py-1.5 rounded-full font-sans text-[10px] tracking-widest uppercase font-bold transition-all ${
              viewMode === 'slider'
                ? 'bg-brand-green dark:bg-brand-gold text-brand-ivory dark:text-brand-green shadow-sm'
                : 'text-brand-charcoal/60 dark:text-brand-ivory/60 hover:text-brand-gold'
            }`}
          >
            Swipe Slider
          </button>
        </div>
      </div>

      {viewMode === 'side-by-side' ? (
        /* --- SIDE-BY-SIDE DYNAMIC ZOOM VIEW --- */
        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            {/* Before Frame */}
            <div
              ref={containerRefBefore}
              onMouseMove={handleMagnifierMove}
              onMouseLeave={() => setShowLens(false)}
              className="relative aspect-4/3 rounded-2xl overflow-hidden cursor-crosshair border border-brand-gold/10 group bg-neutral-100 dark:bg-neutral-900"
            >
              <img
                src={beforeImage}
                alt="Before style change"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover select-none pointer-events-none"
              />
              <span className="absolute top-4 left-4 z-10 bg-brand-charcoal/80 text-white text-[10px] tracking-widest uppercase font-bold px-3 py-1 rounded-full backdrop-blur-xs select-none">
                Before
              </span>

              {/* Magnifier Lens */}
              {showLens && (
                <div
                  className="absolute pointer-events-none rounded-full border-2 border-brand-gold shadow-2xl overflow-hidden"
                  style={{
                    width: '120px',
                    height: '120px',
                    left: `${hoverPos.x}%`,
                    top: `${hoverPos.y}%`,
                    transform: 'translate(-50%, -50%)',
                    backgroundImage: `url(${beforeImage})`,
                    backgroundPosition: `${hoverPos.x}% ${hoverPos.y}%`,
                    backgroundSize: '250%',
                    backgroundRepeat: 'no-repeat'
                  }}
                />
              )}
            </div>

            {/* After Frame */}
            <div
              ref={containerRefAfter}
              onMouseMove={handleMagnifierMove}
              onMouseLeave={() => setShowLens(false)}
              className="relative aspect-4/3 rounded-2xl overflow-hidden cursor-crosshair border border-brand-gold/15 group bg-neutral-100 dark:bg-neutral-900 shadow-md"
            >
              <img
                src={afterImage}
                alt="After transformation"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover select-none pointer-events-none"
              />
              <span className="absolute top-4 right-4 z-10 bg-brand-gold text-brand-green text-[10px] tracking-widest uppercase font-extrabold px-3 py-1 rounded-full shadow-md select-none">
                After
              </span>

              {/* Synchronized Magnifier Lens */}
              {showLens && (
                <div
                  className="absolute pointer-events-none rounded-full border-2 border-brand-gold shadow-2xl overflow-hidden"
                  style={{
                    width: '120px',
                    height: '120px',
                    left: `${hoverPos.x}%`,
                    top: `${hoverPos.y}%`,
                    transform: 'translate(-50%, -50%)',
                    backgroundImage: `url(${afterImage})`,
                    backgroundPosition: `${hoverPos.x}% ${hoverPos.y}%`,
                    backgroundSize: '250%',
                    backgroundRepeat: 'no-repeat'
                  }}
                />
              )}
            </div>
          </div>
          <div className="flex items-center justify-center space-x-2 text-[10px] tracking-widest text-brand-charcoal/50 dark:text-brand-ivory/50 uppercase font-light">
            <ZoomIn size={12} className="text-brand-gold" />
            <span>Hover on either image for synchronized high-definition inspection</span>
          </div>
        </div>
      ) : (
        /* --- INTERACTIVE SWIPE SLIDER --- */
        <div>
          <div
            id={`slider-stage-${title.replace(/\s+/g, '-').toLowerCase()}`}
            className="relative w-full aspect-4/3 rounded-2xl overflow-hidden cursor-ew-resize select-none"
            onTouchMove={handleSliderTouchMove}
            onMouseMove={handleSliderMouseMove}
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
      )}
    </div>
  );
}

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const categories = ['All', 'Hair', 'Makeup', 'Nails', 'Lashes & Brows', 'Reels & Videos'];

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
              {filteredGallery.map((item, index) => {
                const isVideo = !!item.videoUrl;
                return (
                  <motion.div
                    id={`gallery-item-${item.id}`}
                    key={item.id}
                    layout
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    onClick={() => openLightbox(item.id)}
                    className={`group relative rounded-xl md:rounded-2xl overflow-hidden aspect-square shadow-xs hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-500 cursor-pointer border ${
                      isVideo 
                        ? 'border-brand-gold/40 hover:border-brand-gold/80 ring-1 ring-brand-gold/10' 
                        : 'border-brand-charcoal/5 dark:border-brand-ivory/5'
                    }`}
                  >
                    <img
                      id={`gallery-img-${item.id}`}
                      src={item.image}
                      alt={item.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover filter brightness-95 transition-transform duration-1000 group-hover:scale-105"
                    />

                    {/* Custom Instagram/Reels Badge */}
                    {isVideo ? (
                      <div className="absolute top-2 left-2 md:top-3 md:left-3 bg-black/75 text-brand-gold px-2.5 py-1 rounded-full text-[9px] font-bold tracking-wider uppercase flex items-center space-x-1.5 backdrop-blur-md z-10 border border-brand-gold/30">
                        <Instagram size={10} className="text-brand-gold" />
                        <span>Reel</span>
                      </div>
                    ) : null}

                    {/* Play video overlay icon if it has a videoUrl */}
                    {isVideo && (
                      <div className="absolute top-2 right-2 md:top-3 md:right-3 bg-brand-gold text-brand-green p-1.5 md:p-2 rounded-full shadow-lg z-10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <Play size={10} className="md:size-[12px]" fill="currentColor" />
                      </div>
                    )}

                    {/* Frosted details overlay */}
                    {isVideo ? (
                      /* Instagram Custom Reel Overlay styling */
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent p-4 md:p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end">
                        <div className="flex items-center space-x-2 mb-1.5">
                          <div className="w-5 h-5 bg-brand-gold rounded-full flex items-center justify-center text-[8px] font-extrabold text-brand-green">K</div>
                          <span className="font-sans text-[10px] font-bold text-white tracking-wide">@kaldasbeauty</span>
                        </div>
                        <h4 className="font-sans text-xs md:text-sm text-brand-ivory leading-snug font-medium mb-3">
                          {item.title}
                        </h4>
                        <div className="flex items-center space-x-4 text-[10px] text-brand-gold/80 font-bold border-t border-white/10 pt-2.5">
                          <span className="flex items-center space-x-1">
                            <Heart size={10} fill="currentColor" />
                            <span>1.2k</span>
                          </span>
                          <span className="flex items-center space-x-1">
                            <MessageCircle size={10} fill="currentColor" />
                            <span>84</span>
                          </span>
                        </div>
                      </div>
                    ) : (
                      /* Standard Gallery Overlay */
                      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-brand-green/95 via-brand-green/70 to-transparent p-3 pt-8 md:p-6 md:pt-12 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end">
                        <span className="font-sans text-[8px] md:text-[10px] tracking-widest uppercase font-bold text-brand-gold mb-0.5 md:mb-1">
                          {item.category}
                        </span>
                        <h4 className="font-serif text-xs sm:text-base md:text-lg text-brand-ivory leading-snug font-medium">
                          {item.title}
                        </h4>
                      </div>
                    )}
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </motion.div>
        </div>

        {/* 2. Before & After Comparisons (Interactive Section) */}
        <div className="mt-28">
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
              className="absolute top-6 right-6 text-white hover:text-brand-gold p-2 rounded-full cursor-pointer z-20 bg-black/40 hover:bg-black/80 transition-colors"
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

            {/* Image/Reel Stage */}
            <motion.div
              id="lightbox-stage"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative w-full max-w-4xl max-h-[85vh] flex flex-col items-center justify-center z-10"
            >
              {GALLERY[lightboxIndex].videoUrl ? (
                /* Interactive Smartphone Reels Player Layout */
                <div className="flex flex-col lg:flex-row bg-[#11241f] rounded-3xl overflow-hidden border border-brand-gold/30 shadow-2xl max-w-3xl w-full">
                  
                  {/* Video Side (Simulated Mobile Screen) */}
                  <div className="relative aspect-[9/16] max-h-[60vh] lg:max-h-[70vh] bg-black shrink-0 mx-auto flex items-center justify-center">
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
                    <div className="absolute bottom-4 left-4 right-4 bg-gradient-to-t from-black/80 to-transparent p-3 rounded-xl pointer-events-none text-left">
                      <div className="flex items-center space-x-2 mb-1">
                        <span className="text-white text-xs font-extrabold bg-brand-gold text-brand-green px-2 py-0.5 rounded-sm">K</span>
                        <span className="text-white text-xs font-bold font-sans">@kaldasbeauty</span>
                      </div>
                      <p className="text-white/80 text-[10px] font-sans leading-snug line-clamp-1">{GALLERY[lightboxIndex].title}</p>
                    </div>
                  </div>

                  {/* Feedback Side (Instagram Engagement Details) */}
                  <div className="p-6 md:p-8 flex-1 flex flex-col justify-between text-left text-white bg-[#0e1e1a]">
                    <div className="space-y-6">
                      <div className="flex items-center justify-between border-b border-white/10 pb-4">
                        <div className="flex items-center space-x-3">
                          <div className="w-10 h-10 bg-brand-gold rounded-full flex items-center justify-center text-brand-green text-sm font-black">K</div>
                          <div>
                            <h4 className="font-sans text-sm font-bold text-white flex items-center">
                              kaldasbeauty
                              <span className="ml-1 w-3.5 h-3.5 bg-blue-500 rounded-full flex items-center justify-center text-[8px] text-white">✓</span>
                            </h4>
                            <span className="font-sans text-[10px] text-brand-gold/80 uppercase tracking-widest font-semibold">Verified Salon Creator</span>
                          </div>
                        </div>
                      </div>

                      <div className="space-y-4">
                        <h3 className="font-serif text-lg md:text-xl font-normal leading-snug text-brand-ivory">
                          {GALLERY[lightboxIndex].title}
                        </h3>
                        <p className="font-sans text-xs text-white/70 font-light leading-relaxed">
                          Witness the standard of Kaldas master artisans in this exclusive behind-the-scenes demonstration reel. Crafted with discipline, premium elixirs, and bespoke detail.
                        </p>
                        <div className="bg-white/5 px-4 py-2.5 rounded-xl border border-white/5 font-mono text-[10px] text-brand-gold flex items-center justify-between">
                          <span>♫ Music: Original Audio - kaldasbeauty</span>
                          <span className="animate-spin text-xs">💿</span>
                        </div>
                      </div>

                      {/* Engagement indicators */}
                      <div className="grid grid-cols-3 gap-3 border-t border-b border-white/10 py-4 text-center">
                        <div>
                          <span className="block font-sans text-lg font-extrabold text-white">1,482</span>
                          <span className="text-[9px] tracking-widest text-white/40 uppercase">Likes</span>
                        </div>
                        <div>
                          <span className="block font-sans text-lg font-extrabold text-white">124</span>
                          <span className="text-[9px] tracking-widest text-white/40 uppercase">Comments</span>
                        </div>
                        <div>
                          <span className="block font-sans text-lg font-extrabold text-white">536</span>
                          <span className="text-[9px] tracking-widest text-white/40 uppercase">Shares</span>
                        </div>
                      </div>
                    </div>

                    {/* Follow on Instagram CTA button */}
                    <div className="mt-8">
                      <a
                        href="https://www.instagram.com/kaldasbeauty/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full py-4 bg-brand-gold text-brand-green hover:bg-brand-ivory transition-colors rounded-xl font-sans text-xs tracking-widest uppercase font-black flex items-center justify-center space-x-2 shadow-lg"
                      >
                        <Instagram size={14} fill="currentColor" />
                        <span>Watch on Instagram @kaldasbeauty</span>
                      </a>
                    </div>
                  </div>

                </div>
              ) : (
                /* Standard image Lightbox */
                <div className="flex flex-col items-center">
                  <img
                    id="lightbox-image"
                    src={GALLERY[lightboxIndex].image}
                    alt={GALLERY[lightboxIndex].title}
                    referrerPolicy="no-referrer"
                    className="max-w-full max-h-[70vh] rounded-xl object-contain shadow-2xl"
                  />
                  {/* Image Description */}
                  <div className="text-center mt-6 text-white">
                    <span className="font-sans text-[10px] tracking-widest uppercase text-brand-gold font-bold mb-1 block">
                      {GALLERY[lightboxIndex].category}
                    </span>
                    <h3 className="font-serif text-lg md:text-xl font-normal tracking-wide px-4">
                      {GALLERY[lightboxIndex].title}
                    </h3>
                  </div>
                </div>
              )}
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
