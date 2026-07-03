export interface Service {
  id: string;
  name: string;
  description: string;
  duration: string;
  price: string;
  category: 'hair' | 'makeup' | 'skin' | 'nails' | 'lashes';
  iconName: string;
  image: string;
}

export interface Course {
  id: string;
  name: string;
  description: string;
  duration: string;
  price: string;
  certification: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced' | 'All Levels';
  syllabus: string[];
  iconName: string;
  image: string;
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
  category: 'general' | 'salon' | 'academy' | 'booking';
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  review: string;
  rating: number;
  image: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  image: string;
  videoUrl?: string;
}

export interface BeforeAfterItem {
  id: string;
  title: string;
  description: string;
  beforeImage: string;
  afterImage: string;
  category: string;
}

export interface Appointment {
  id?: string;
  clientName: string;
  clientEmail: string;
  clientPhone: string;
  serviceId: string;
  date: string;
  time: string;
  notes?: string;
}
