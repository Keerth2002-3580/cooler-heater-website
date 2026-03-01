export interface Product {
  id: string;
  slug: string;
  name: string;
  category: 'cooler' | 'heater';
  brand: string;
  price: { min: number; max: number };
  rating: number;
  reviews: number;
  image: string;
  images: string[];
  inStock: boolean;
  specs: {
    power: string;
    coverage: string;
    noise: string;
    warranty: string;
    installation: string;
  };
  description: string;
  features: string[];
}

export const products: Product[] = [
  {
    id: '1',
    slug: 'premium-air-cooler-5000',
    name: 'Premium Air Cooler 5000',
    category: 'cooler',
    brand: 'CoolMaster',
    price: { min: 1200, max: 1500 },
    rating: 4.8,
    reviews: 124,
    image: 'https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=500',
    images: [
      'https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=500',
      'https://images.unsplash.com/photo-1631545806609-4b0e8c0f0e0e?w=500',
    ],
    inStock: true,
    specs: {
      power: '5 kW',
      coverage: '50-70 m²',
      noise: '42 dB',
      warranty: '2 years',
      installation: 'Professional required',
    },
    description: 'High-efficiency air cooling system perfect for medium to large spaces.',
    features: ['Energy efficient', 'Smart temperature control', 'Remote operation', 'Eco-friendly refrigerant'],
  },
  {
    id: '2',
    slug: 'eco-heater-pro-3000',
    name: 'Eco Heater Pro 3000',
    category: 'heater',
    brand: 'HeatWave',
    price: { min: 900, max: 1100 },
    rating: 4.6,
    reviews: 89,
    image: 'https://images.unsplash.com/photo-1545259741-2ea3ebf61fa3?w=500',
    images: [
      'https://images.unsplash.com/photo-1545259741-2ea3ebf61fa3?w=500',
      'https://images.unsplash.com/photo-1604754742629-3e5728249d73?w=500',
    ],
    inStock: true,
    specs: {
      power: '3 kW',
      coverage: '30-45 m²',
      noise: '38 dB',
      warranty: '2 years',
      installation: 'Professional required',
    },
    description: 'Efficient heating solution with advanced energy-saving technology.',
    features: ['Low energy consumption', 'Fast heating', 'Safety cut-off', 'Timer function'],
  },
  {
    id: '3',
    slug: 'industrial-cooler-8000',
    name: 'Industrial Cooler 8000',
    category: 'cooler',
    brand: 'ArcticPro',
    price: { min: 2200, max: 2800 },
    rating: 4.9,
    reviews: 67,
    image: 'https://images.unsplash.com/photo-1631545806609-4b0e8c0f0e0e?w=500',
    images: [
      'https://images.unsplash.com/photo-1631545806609-4b0e8c0f0e0e?w=500',
      'https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=500',
    ],
    inStock: true,
    specs: {
      power: '8 kW',
      coverage: '100-150 m²',
      noise: '48 dB',
      warranty: '2 years',
      installation: 'Professional required',
    },
    description: 'Heavy-duty cooling for large commercial spaces and offices.',
    features: ['High capacity', 'Durable construction', '24/7 operation', 'Advanced filtration'],
  },
  {
    id: '4',
    slug: 'smart-heater-deluxe',
    name: 'Smart Heater Deluxe',
    category: 'heater',
    brand: 'ThermoSmart',
    price: { min: 1400, max: 1700 },
    rating: 4.7,
    reviews: 156,
    image: 'https://images.unsplash.com/photo-1604754742629-3e5728249d73?w=500',
    images: [
      'https://images.unsplash.com/photo-1604754742629-3e5728249d73?w=500',
      'https://images.unsplash.com/photo-1545259741-2ea3ebf61fa3?w=500',
    ],
    inStock: true,
    specs: {
      power: '4.5 kW',
      coverage: '40-60 m²',
      noise: '35 dB',
      warranty: '2 years',
      installation: 'Professional required',
    },
    description: 'WiFi-enabled smart heater with app control and scheduling.',
    features: ['WiFi connectivity', 'Voice control compatible', 'Energy monitoring', 'Programmable schedules'],
  },
  {
    id: '5',
    slug: 'compact-cooler-2500',
    name: 'Compact Cooler 2500',
    category: 'cooler',
    brand: 'CoolMaster',
    price: { min: 650, max: 850 },
    rating: 4.5,
    reviews: 203,
    image: 'https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=500',
    images: [
      'https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=500',
      'https://images.unsplash.com/photo-1631545806609-4b0e8c0f0e0e?w=500',
    ],
    inStock: true,
    specs: {
      power: '2.5 kW',
      coverage: '20-30 m²',
      noise: '40 dB',
      warranty: '1 year',
      installation: 'DIY friendly',
    },
    description: 'Perfect for small rooms and apartments with easy installation.',
    features: ['Compact design', 'Easy installation', 'Energy star rated', 'Quiet operation'],
  },
  {
    id: '6',
    slug: 'premium-heater-6000',
    name: 'Premium Heater 6000',
    category: 'heater',
    brand: 'HeatWave',
    price: { min: 1800, max: 2200 },
    rating: 4.8,
    reviews: 92,
    image: 'https://images.unsplash.com/photo-1545259741-2ea3ebf61fa3?w=500',
    images: [
      'https://images.unsplash.com/photo-1545259741-2ea3ebf61fa3?w=500',
      'https://images.unsplash.com/photo-1604754742629-3e5728249d73?w=500',
    ],
    inStock: false,
    specs: {
      power: '6 kW',
      coverage: '70-90 m²',
      noise: '40 dB',
      warranty: '2 years',
      installation: 'Professional required',
    },
    description: 'Premium heating solution for large residential and commercial spaces.',
    features: ['Rapid heating', 'Zone control', 'Air purification', 'Humidity control'],
  },
];
