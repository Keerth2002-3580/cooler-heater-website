'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { CheckCircle2, ArrowRight } from 'lucide-react';

export default function HeroSection() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const features = [
    'Energy-efficient climate control systems',
    'Professional installation by certified experts',
    'Comprehensive 2-year warranty coverage',
    '24/7 priority support for all clients',
  ];

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1631679706909-1844bbd07221?w=1920&q=80"
          alt="Modern home interior with air conditioning"
          fill
          className="object-cover"
          priority
          quality={90}
        />
        {/* Overlay - 45% for 55% image visibility */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0B1F3A]/45 via-[#0B1F3A]/40 to-[#1E40AF]/45"></div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 md:px-10 py-28">
        <div
          className={`text-center transition-all duration-1000 ${
            mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {/* Headline */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
            <span className="block text-white drop-shadow-2xl">Premium Climate Solutions</span>
            <span className="block text-[#93C5FD] mt-2 drop-shadow-xl">for London</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-12 leading-relaxed drop-shadow-lg">
            Expert cooling and heating systems for corporate offices, commercial properties, and luxury residences
          </p>

          {/* Glassmorphism Feature Card */}
          <div
            className={`max-w-4xl mx-auto mb-12 transition-all duration-1000 delay-200 ${
              mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl shadow-2xl p-8 md:p-10 hover:shadow-[0_20px_80px_rgba(59,130,246,0.3)] transition-all duration-500 hover:-translate-y-1">
              {/* Feature List */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 text-left"
                  >
                    <CheckCircle2 className="w-6 h-6 text-[#3B82F6] flex-shrink-0 mt-0.5 drop-shadow-[0_0_8px_rgba(59,130,246,0.6)]" />
                    <span className="text-white/95 text-base leading-relaxed font-medium">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link href="/contact">
                  <button className="group px-8 py-4 bg-gradient-to-r from-[#2563EB] to-[#1D4ED8] text-white font-semibold rounded-xl shadow-xl hover:shadow-[0_20px_40px_rgba(37,99,235,0.5)] hover:scale-105 transition-all duration-300 flex items-center gap-2">
                    Get Free Quote
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </Link>
                <Link href="/products">
                  <button className="px-8 py-4 border-2 border-white/40 text-white font-semibold rounded-xl hover:bg-white/15 hover:border-white/60 transition-all duration-300 backdrop-blur-sm shadow-lg">
                    View Products
                  </button>
                </Link>
              </div>
            </div>
          </div>

          {/* Trust Indicators */}
          <div
            className={`flex flex-wrap items-center justify-center gap-8 text-sm text-white/70 transition-all duration-1000 delay-400 ${
              mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-[#3B82F6] rounded-full animate-pulse shadow-[0_0_8px_rgba(59,130,246,0.8)]"></div>
              <span className="font-medium">15+ Years Experience</span>
            </div>
            <div className="hidden sm:block w-px h-4 bg-white/30"></div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-[#3B82F6] rounded-full animate-pulse shadow-[0_0_8px_rgba(59,130,246,0.8)]"></div>
              <span className="font-medium">5000+ Happy Clients</span>
            </div>
            <div className="hidden sm:block w-px h-4 bg-white/30"></div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-[#3B82F6] rounded-full animate-pulse shadow-[0_0_8px_rgba(59,130,246,0.8)]"></div>
              <span className="font-medium">Gas Safe Certified</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#F8FAFC] to-transparent z-10"></div>
    </section>
  );
}
