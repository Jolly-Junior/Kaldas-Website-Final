import { Service, Course, FAQ, Testimonial, GalleryItem, BeforeAfterItem } from './types';

import beautyHero from './assets/images/beauty_hero_banner_1782993942691.jpg';
import academyClass from './assets/images/academy_class_1782993957990.jpg';
import facialTreatment from './assets/images/facial_treatment_1782993972475.jpg';
import regeneratedImage_1783087226828 from './assets/images/regenerated_image_1783087226828.jpg';
import regeneratedImage_1783008929233 from './assets/images/regenerated_image_1783008929233.jpg';
import regeneratedImage_1783008930703 from './assets/images/regenerated_image_1783008930703.jpg';
import regeneratedImage_1783008931625 from './assets/images/regenerated_image_1783008931625.jpg';
import regeneratedImage_1783010054749 from './assets/images/regenerated_image_1783010054749.jpg';
import regeneratedImage_1783010055801 from './assets/images/regenerated_image_1783010055801.jpg';
import regeneratedImage_1783010057038 from './assets/images/regenerated_image_1783010057038.jpg';
import regeneratedImage_1783010058365 from './assets/images/regenerated_image_1783010058365.jpg';
import regeneratedImage_1783087217960 from './assets/images/regenerated_image_1783087217960.jpg';
import regeneratedImage_1783087219606 from './assets/images/regenerated_image_1783087219606.jpg';
import regeneratedImage_1783087225447 from './assets/images/regenerated_image_1783087225447.jpg';
import regeneratedImage_1783087221842 from './assets/images/regenerated_image_1783087221842.jpg';

export const HERO_IMAGE = beautyHero;
export const ACADEMY_IMAGE = academyClass;
export const FACIAL_IMAGE = facialTreatment;

export const SERVICES: Service[] = [
  {
    id: 'hair-styling',
    name: 'Couture Hair Styling',
    description: 'Bespoke cuts, master coloring, balayage, and restorative treatments designed to frame your unique facial architecture.',
    duration: '90 - 150 mins',
    price: '$120 - $350',
    category: 'hair',
    iconName: 'Scissors',
    image: regeneratedImage_1783087226828
  },
  {
    id: 'bridal-makeup',
    name: 'Bridal Artistry',
    description: 'A comprehensive bridal look including customized skin prep, glowing premium foundation, and bespoke trial sessions.',
    duration: '120 mins',
    price: '$250 - $450',
    category: 'makeup',
    iconName: 'Sparkles',
    image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'facial-treatments',
    name: 'Gold Glow Facial',
    description: 'A sensory lifting and firming treatment utilizing botanical enzymes, lymphatic drainage, and customized gold-infused serums.',
    duration: '75 mins',
    price: '$180',
    category: 'skin',
    iconName: 'Flower2',
    image: FACIAL_IMAGE
  },
  {
    id: 'professional-makeup',
    name: 'Editorial Makeup',
    description: 'Flawless makeup artistry tailored for high-fashion events, photo shoots, or elite galas, crafted with luxury pigments.',
    duration: '60 mins',
    price: '$150',
    category: 'makeup',
    iconName: 'Paintbrush',
    image: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'nail-care',
    name: 'Luxury Elixir Manicure',
    description: 'Soothe your hands with a rich herbal soak, meticulously detailed nail shaping, structure gel application, and organic oil massage.',
    duration: '60 mins',
    price: '$85',
    category: 'nails',
    iconName: 'Hand',
    image: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'eyebrow-lash',
    name: 'Micro-sculpting Eyebrow & Lash Lift',
    description: 'Precision mapping, threading/waxing, custom hybrid tinting, and a keratin-infused lift that beautifully defines your eyes.',
    duration: '45 mins',
    price: '$95',
    category: 'lashes',
    iconName: 'Eye',
    image: 'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'skincare',
    name: 'Sovereign Hydra-Radiance',
    description: 'Premium medical-grade hydration infused with high-frequency microcurrents, cooling globes, and custom oxygen delivery.',
    duration: '90 mins',
    price: '$210',
    category: 'skin',
    iconName: 'Layers',
    image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=800&q=80'
  }
];

export const COURSES: Course[] = [
  {
    id: 'beautician-course',
    name: 'Professional Beautician Diploma',
    description: 'The ultimate master-level course covering cosmetology, clinical skin analysis, expert hair styling, and beauty business management.',
    duration: '6 Months',
    price: '$3,200',
    certification: 'Accredited Master Beautician Diploma',
    level: 'Beginner',
    syllabus: [
      'Advanced Skin Physiology & Anatomy',
      'Couture Hair Sculpture & Styling Science',
      'Chemical Treatments & Custom Color Chemistry',
      'Bespoke Facial Therapy & Device Operations',
      'Aesthetic Studio Hygiene & Safety Regulations',
      'Client Management & Salon Business Development'
    ],
    iconName: 'Award',
    image: ACADEMY_IMAGE
  },
  {
    id: 'makeup-masterclass',
    name: 'Elite Makeup Artistry Masterclass',
    description: 'Become a certified makeup artist. Learn editorial, bridal, runway, and high-definition photography makeup techniques from industry experts.',
    duration: '12 Weeks',
    price: '$1,800',
    certification: 'Professional Makeup Artist Certification',
    level: 'Intermediate',
    syllabus: [
      'Color Theory & Facial Shape Analysis',
      'Skin Types, Prep, & Airbrush Foundation Mastery',
      'Bridal & Glamour Artistry Mapping',
      'Editorial & High-Fashion Runway Concept Styling',
      'Lighting Design & Camera-Ready Techniques',
      'Building your Professional Portfolio'
    ],
    iconName: 'BookOpen',
    image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'hair-dressing',
    name: 'Advanced Hair Sculpture & Coloring',
    description: 'Master advanced cuts, couture styling, and complex color correction techniques including Parisian balayage and foil blending.',
    duration: '8 Weeks',
    price: '$1,500',
    certification: 'Advanced Hair Colorist Certificate',
    level: 'Advanced',
    syllabus: [
      'Anatomy of Hair Fibers & Hair Health Diagnosis',
      'Advanced 3D Geometry Sectioning and Cuts',
      'Color Theory, Tonal Balancing & Correction',
      'Freehand Balayage & Ombre Painting Artistry',
      'Bespoke Thermal Styling & Runway Work',
      'Professional Product Formulation Protocols'
    ],
    iconName: 'Scissors',
    image: 'https://images.unsplash.com/photo-1521590832167-7bcbfea63319?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'nail-technician',
    name: 'Master Nail Technician Certification',
    description: 'A hands-on immersive certification in gel extensions, builder gels, freehand nail art, dry manicuring, and luxury hand wellness.',
    duration: '6 Weeks',
    price: '$950',
    certification: 'Licensed Nail Technician Credential',
    level: 'All Levels',
    syllabus: [
      'Nail Anatomy, Pathologies & Sanitization Protocols',
      'Russian Manicure Techniques (E-File)',
      'Sculpting Gel Extensions & Tips Styling',
      'Aesthetic Gel Polish Artistry & 3D Textures',
      'Spa Hand Elixirs & Reflexology Basics',
      'Nail Business Pricing & Marketing'
    ],
    iconName: 'Hand',
    image: 'https://images.unsplash.com/photo-1632345031435-8797b2d58045?auto=format&fit=crop&w=800&q=80'
  }
];

export const GALLERY: GalleryItem[] = [
  {
    id: 'g1',
    title: 'Signature Wig Installation & Custom Layered Cut',
    category: 'Hair',
    image: regeneratedImage_1783008929233
  },
  {
    id: 'g2',
    title: 'Deluxe Gel Acrylic Nail Art Extensions with Chrome Details',
    category: 'Nails',
    image: regeneratedImage_1783008930703
  },
  {
    id: 'g3',
    title: 'Flawless Bridal Glamour & Custom Hair Updo',
    category: 'Makeup',
    image: regeneratedImage_1783008931625
  },
  {
    id: 'g4',
    title: 'Signature Flawless Russian Volume Eyelash Extensions',
    category: 'Lashes & Brows',
    image: regeneratedImage_1783010054749
  },
  {
    id: 'g5',
    title: 'Premium Weave Styling with Golden Highlights',
    category: 'Hair',
    image: regeneratedImage_1783010055801
  },
  {
    id: 'g6',
    title: 'Bespoke Evening Glow Airbrush Makeup & Soft Lip Contour',
    category: 'Makeup',
    image: regeneratedImage_1783010057038
  },
  {
    id: 'g7',
    title: 'Deluxe Hydrating Skin Treatment & Face Massage',
    category: 'Skincare',
    image: 'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'g8',
    title: 'Perfect Brow Mapping & Keratin Hybrid Tint',
    category: 'Lashes & Brows',
    image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=80'
  },
  // Reels and Work Demonstration Videos
  {
    id: 'g9',
    title: 'Behind the Scenes: Couture Hair Curling & Styling',
    category: 'Reels & Videos',
    image: regeneratedImage_1783010058365,
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-stylist-combing-a-clients-hair-44161-large.mp4'
  },
  {
    id: 'g10',
    title: 'Bridal Eye Makeup & Fine Mascara Application',
    category: 'Reels & Videos',
    image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=800&q=80',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-putting-mascara-on-a-young-woman-44165-large.mp4'
  },
  {
    id: 'g11',
    title: 'Precision Gel Polish Painting & Chrome Artistry',
    category: 'Reels & Videos',
    image: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&w=800&q=80',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-manicurist-polishing-the-nails-of-a-woman-44169-large.mp4'
  },
  {
    id: 'g12',
    title: 'Deep Facial Cleansing & Hydra Glow Therapy',
    category: 'Reels & Videos',
    image: 'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&w=800&q=80',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-cosmetologist-cleansing-the-skin-of-a-client-44170-large.mp4'
  }
];

export const BEFORE_AFTER: BeforeAfterItem[] = [
  {
    id: 'ba1',
    title: 'Keratin Restore & Parisian Balayage',
    description: 'Revitalized dry, colored hair with structured nourishment and seamless blonde highlights.',
    beforeImage: regeneratedImage_1783087217960,
    afterImage: regeneratedImage_1783087219606,
    category: 'Hair'
  },
  {
    id: 'ba2',
    title: 'Sovereign Hydra-Radiance Facial',
    description: 'Clinical hydration and botanical enzymes visibly smoothed skin texture and redness.',
    beforeImage: regeneratedImage_1783087225447,
    afterImage: regeneratedImage_1783087221842,
    category: 'Skincare'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    name: 'Helena Vestergaard',
    role: 'Fashion Consultant',
    review: 'Kaldas is the epitome of Scandinavian luxury. The attention to detail during my balayage and skincare session was immaculate. The deep forest green ambience makes you feel disconnected from the chaotic world.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&h=400&q=80'
  },
  {
    id: 't2',
    name: 'Sophia Aris',
    role: 'Editorial Director',
    review: 'I completed the Elite Makeup Masterclass last month. The structured academy syllabus, high-end materials, and hands-on portfolio creation gave me the exact skills and confidence I needed to sign my first runway client.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&h=400&q=80'
  },
  {
    id: 't3',
    name: 'Alexandra Moretti',
    role: 'Bridal Client',
    review: 'The Bridal Artistry team was magical. From the initial trial to the big day, they made me feel so grounded and beautiful. The skin preparation made my makeup last flawlessly for 14 hours.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=400&h=400&q=80'
  }
];

export const FAQS: FAQ[] = [
  {
    id: 'faq1',
    question: 'How do I enroll in the Kaldas Beauty Academy certification courses?',
    answer: 'You can easily enroll online by clicking "Enroll Now" on any of our course cards, or by filling out our enrollment form. Once submitted, our registrar office will contact you to complete enrollment, schedule your orientation, and arrange installment options if requested.',
    category: 'academy'
  },
  {
    id: 'faq2',
    question: 'Are Kaldas Beauty Academy courses accredited and certified?',
    answer: 'Yes. All programs are fully certified. Our Professional Beautician Course and Nail Technician Certification are internationally accredited and recognized, ensuring you can build a legitimate career anywhere in the world.',
    category: 'academy'
  },
  {
    id: 'faq3',
    question: 'What premium beauty products do you use in the salon?',
    answer: 'We exclusively use premium, certified botanical and high-efficacy luxury brands, including Oribe, Biologique Recherche, Chanel Beauty, and custom-blended, cruelty-free, vegan scalp and nail elixirs.',
    category: 'salon'
  },
  {
    id: 'faq4',
    question: 'What is your cancellation policy for appointments?',
    answer: 'As a luxury salon with limited slots, we require a 24-hour notice for cancellations or rescheduling. This allows us to offer the slot to clients on our waitlist. Cancellations under 24 hours may incur a small premium fee.',
    category: 'booking'
  },
  {
    id: 'faq5',
    question: 'Can I book a combined treatment and beauty academy trial session?',
    answer: 'Absolutely! Many of our academy prospects book a signature hair or skin treatment to experience our technique firsthand before embarking on their beauty education journey. Let us know when filling out the form!',
    category: 'general'
  }
];
