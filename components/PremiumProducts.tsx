'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Star, ShoppingCart } from 'lucide-react';

export default function PremiumProducts() {
  const [activeTab, setActiveTab] = useState('all');

  const tabs = [
    { id: 'all', label: 'All Products' },
    { id: 'coolers', label: 'Coolers' },
    { id: 'heaters', label: 'Heaters' },
    { id: 'new', label: 'New Arrivals' },
  ];

  const products = [
    {
      id: 1,
      name: 'CoolMaster Pro X1',
      category: 'coolers',
      image: 'https://images.unsplash.com/photo-1631679706909-1844bbd07221?w=600&q=80',
      price: 899,
      rating: 4.8,
      reviews: 124,
      specs: 'Inverter • 18,000 BTU • A+++',
      badge: 'Best Seller',
    },
    {
      id: 2,
      name: 'HeatWave Elite 3000',
      category: 'heaters',
      image: 'https://images.unsplash.com/photo-1545259741-2ea3ebf61fa3?w=600&q=80',
      price: 749,
      rating: 4.9,
      reviews: 89,
      specs: 'Ceramic • 3000W • Silent',
      badge: null,
    },
    {
      id: 3,
      name: 'ArcticPro Smart AC',
      category: 'coolers',
      image: 'https://images.unsplash.com/photo-1585338107529-13afc5f02586?w=600&q=80',
      price: 1299,
      rating: 5.0,
      reviews: 67,
      specs: 'Smart WiFi • 24,000 BTU • Ultra Quiet',
      badge: 'New',
    },
    {
      id: 4,
      name: 'ThermoSmart Heater',
      category: 'heaters',
      image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=600&q=80',
      price: 599,
      rating: 4.7,
      reviews: 156,
      specs: 'Oil-filled • 2500W • Timer',
      badge: null,
    },
  ];

  const filteredProducts = activeTab === 'all' 
    ? products 
    : activeTab === 'new'
    ? products.filter(p => p.badge === 'New')
    : products.filter(p => p.category === activeTab);

  return (
    <section className="py-24 relative">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-heading-xl font-bold text-text-primary mb-4">
            Premium Products
          </h2>
          <p className="text-body-lg text-text-secondary max-w-2xl mx-auto">
            Explore our curated collection of high-performance climate control systems
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-3 rounded-button font-medium transition-all duration-300 ${
                activeTab === tab.id
                  ? 'bg-gradient-to-r from-accent-cyan to-accent-violet text-white shadow-glow-cyan'
                  : 'glass-card text-text-secondary hover:text-text-primary hover:bg-dark-hover'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="group glass-card rounded-card overflow-hidden hover:bg-dark-hover transition-all duration-300 hover:-translate-y-2 hover:shadow-premium-lg"
            >
              {/* Image */}
              <div className="relative aspect-square bg-dark-surface overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
                
                {/* Badge */}
                {product.badge && (
                  <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-gradient-to-r from-accent-cyan to-accent-violet text-white text-xs font-semibold">
                    {product.badge}
                  </div>
                )}

                {/* Quick Add Button */}
                <div className="absolute inset-0 bg-dark-base/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <button className="btn-primary text-sm px-5 py-2 flex items-center gap-2">
                    <ShoppingCart className="w-4 h-4" />
                    Add to Cart
                  </button>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-bold text-lg text-text-primary mb-2 line-clamp-1">
                  {product.name}
                </h3>
                
                <p className="text-sm text-text-tertiary mb-3">
                  {product.specs}
                </p>

                {/* Rating */}
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < Math.floor(product.rating)
                            ? 'fill-accent-warning text-accent-warning'
                            : 'text-dark-border'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-text-secondary">
                    {product.rating} ({product.reviews})
                  </span>
                </div>

                {/* Price & CTA */}
                <div className="flex items-center justify-between pt-4 border-t border-dark-border">
                  <div>
                    <div className="text-2xl font-bold text-gradient">
                      £{product.price}
                    </div>
                  </div>
                  <Link href={`/products/${product.id}`}>
                    <button className="text-sm font-medium text-accent-cyan hover:text-accent-cyan/80 transition-colors">
                      View Details →
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Link href="/products">
            <button className="btn-secondary px-8 py-4">
              View All Products
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
