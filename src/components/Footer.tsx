import { motion } from 'motion/react';
import { Instagram, Star, ExternalLink } from 'lucide-react';
import ig1Img from '../assets/images/regenerated_image_1783008929233.jpg';
import ig2Img from '../assets/images/regenerated_image_1783008930703.jpg';
import ig3Img from '../assets/images/regenerated_image_1783008931625.jpg';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  const instagramFeed = [
    {
      id: 'ig1',
      image: ig1Img,
      link: 'https://www.instagram.com/kaldasbeauty/'
    },
    {
      id: 'ig2',
      image: ig2Img,
      link: 'https://www.instagram.com/kaldasbeauty/'
    },
    {
      id: 'ig3',
      image: ig3Img,
      link: 'https://www.instagram.com/kaldasbeauty/'
    },
    {
      id: 'ig4',
      image: 'https://images.unsplash.com/photo-1604654894610-df4906b197ae?auto=format&fit=crop&w=400&q=80',
      link: 'https://www.instagram.com/kaldasbeauty/'
    },
    {
      id: 'ig5',
      image: 'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&w=400&q=80',
      link: 'https://www.instagram.com/kaldasbeauty/'
    },
    {
      id: 'ig6',
      image: 'https://images.unsplash.com/photo-1521590832167-7bcbfea63319?auto=format&fit=crop&w=400&q=80',
      link: 'https://www.instagram.com/kaldasbeauty/'
    }
  ];

  return (
    <footer id="footer-root" className="bg-brand-green text-brand-ivory pt-16 pb-8 border-t border-brand-gold/15 relative overflow-hidden">
      {/* Decorative accent lines */}
      <div className="absolute inset-0 bg-[radial-gradient(#C9B15B_1px,transparent_1px)] [background-size:24px_24px] opacity-[0.03] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* 1. Instagram Feed Section */}
        <div id="instagram-feed" className="mb-16">
          <div className="flex flex-col sm:flex-row justify-between items-center mb-8 gap-4 border-b border-brand-gold/10 pb-6">
            <div className="text-center sm:text-left">
              <span className="font-sans text-[10px] tracking-[0.2em] text-brand-gold uppercase font-bold block mb-1">
                LATEST LOOKS & REELS
              </span>
              <h3 className="font-serif text-2xl font-normal tracking-wide text-brand-ivory flex items-center justify-center sm:justify-start">
                <Instagram size={20} className="text-brand-gold mr-2 shrink-0" />
                @kaldasbeauty
              </h3>
            </div>
            <a
              href="https://www.instagram.com/kaldasbeauty/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-brand-gold/10 hover:bg-brand-gold text-brand-gold hover:text-brand-green border border-brand-gold/30 px-6 py-2.5 rounded-full font-sans text-xs tracking-wider uppercase font-semibold transition-all duration-300 flex items-center gap-2"
            >
              Follow Our Journey <ExternalLink size={12} />
            </a>
          </div>

          <div id="instagram-grid" className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {instagramFeed.map((post) => (
              <a
                id={`instagram-post-${post.id}`}
                key={post.id}
                href={post.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative aspect-square rounded-2xl overflow-hidden border border-brand-gold/10 bg-brand-green/40 shadow-sm block"
              >
                <img
                  src={post.image}
                  alt="Kaldas Beauty Instagram look"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-brand-green/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-center text-brand-ivory">
                    <Instagram size={24} className="text-brand-gold mx-auto mb-2 transform scale-90 group-hover:scale-100 transition-transform duration-500" />
                    <span className="font-sans text-[9px] tracking-widest uppercase block">View Post</span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* 2. Google Reviews Callout Banner */}
        <div 
          id="google-review-banner" 
          className="bg-white/5 border border-brand-gold/20 p-8 rounded-3xl text-center mb-16 relative overflow-hidden backdrop-blur-md"
        >
          <div className="absolute top-0 right-0 p-4 opacity-5">
            <Star size={120} className="text-brand-gold" />
          </div>
          <div className="max-w-2xl mx-auto flex flex-col items-center">
            {/* Stars */}
            <div className="flex space-x-1.5 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={18} className="text-brand-gold fill-brand-gold" />
              ))}
            </div>
            <h3 className="font-serif text-2xl md:text-3xl font-normal text-brand-ivory mb-2">
              Loved Your Experience at Kaldas?
            </h3>
            <p className="font-sans text-xs md:text-sm text-brand-beige/80 mb-6 leading-relaxed">
              Your feedback shapes our craft. Share your review on Google Maps to help others discover our luxury sanctuary in Addis Ababa.
            </p>
            <a
              href="https://www.google.com/search?q=Kaldas+Beauty+Salon+Addis+Ababa+review"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-brand-gold hover:bg-brand-ivory text-brand-green px-8 py-3 rounded-full font-sans text-xs tracking-widest uppercase font-bold shadow-md hover:shadow-xl transition-all duration-300 flex items-center gap-2"
            >
              Write a Google Review <Star size={14} fill="currentColor" />
            </a>
          </div>
        </div>

        {/* 3. Bottom Credits Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-center border-t border-brand-gold/10 pt-8">
          <span className="font-sans text-xs tracking-wider text-brand-beige/65">
            &copy; 2026 Kaldas Beauty Salon. All Rights Reserved.
          </span>
          <span className="font-sans text-xs tracking-wider text-brand-beige/65">
            Design and Developed by <span className="text-brand-gold font-medium">Viavela Technology</span>
          </span>
        </div>
      </div>
    </footer>
  );
}
