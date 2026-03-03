'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Shield, Zap, Award, TrendingUp } from 'lucide-react';

export default function PremiumHero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const trustLogos = [
    { name: 'Warranty', icon: Shield },
    { name: 'Fast Delivery', icon: Zap },
    { name: 'Secure Payments', icon: Award },
  ];

  const floatingStats = [
    { label: '2-Year Warranty', value: '100%', icon: Shield },
    { label: 'Energy Efficient', value: 'A+++', icon: TrendingUp },
    { label: 'Temperature Control', value: '±0.5°C', icon: Zap },
  ];

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden pt-32 pb-20">
      {/* Ambient Glow Background */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent-cyan/20 rounded-full blur-3xl animate-glow-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-violet/20 rounded-full blur-3xl animate-glow-pulse" style={{ animationDelay: '1.5s' }}></div>

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Content */}
          <div
            className={`transition-all duration-1000 ${
              mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-8">
              <div className="w-2 h-2 bg-accent-success rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-text-secondary">
                Premium Climate Solutions
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-display-md lg:text-display-lg font-bold mb-6 leading-tight">
              <span className="text-text-primary">Transform Your</span>
              <br />
              <span className="text-gradient">Indoor Climate</span>
            </h1>

            {/* Supporting Text */}
            <p className="text-body-lg text-text-secondary mb-10 max-w-xl leading-relaxed">
              Experience ultimate comfort with our premium cooling and heating systems. 
              Energy-efficient, whisper-quiet, and designed for modern living.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Link href="/products">
                <button className="btn-primary flex items-center gap-2 group">
                  Shop Now
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>
              <Link href="/products">
                <button className="btn-secondary">View Catalog</button>
              </Link>
            </div>

            {/* Trust Row */}
            <div className="flex flex-wrap items-center gap-8">
              <span className="text-sm font-medium text-text-tertiary">Trusted by 5000+ customers</span>
              <div className="flex items-center gap-6">
                {trustLogos.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <div key={index} className="flex items-center gap-2">
                      <Icon className="w-5 h-5 text-accent-cyan" />
                      <span className="text-sm text-text-secondary">{item.name}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right: Product Visual */}
          <div
            className={`relative transition-all duration-1000 delay-300 ${
              mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            {/* Main Product Card */}
            <div className="relative glass-card rounded-premium p-8 shadow-premium-lg">
              {/* Product Image */}
              <div className="relative aspect-square rounded-card overflow-hidden mb-6 bg-gradient-to-br from-dark-surface to-dark-hover">
                <Image
                  src="https://images.unsplash.com/photo-1631679706909-1844bbd07221?w=800&q=80"
                  alt="Premium Climate Control System"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
                
                {/* Floating Stats Chips */}
                <div className="absolute top-4 right-4 space-y-2">
                  {floatingStats.map((stat, index) => {
                    const Icon = stat.icon;
                    return (
                      <div
                        key={index}
                        className="glass-card rounded-xl px-3 py-2 backdrop-blur-premium shadow-premium"
                        style={{ animationDelay: `${index * 0.2}s` }}
                      >
                        <div className="flex items-center gap-2">
                          <Icon className="w-4 h-4 text-accent-cyan" />
                          <div>
                            <div className="text-xs font-semibold text-text-primary">{stat.value}</div>
                            <div className="text-[10px] text-text-tertiary">{stat.label}</div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Product Info */}
              <div className="space-y-3">
                <h3 className="text-heading-md font-bold text-text-primary">
                  CoolMaster Pro X1
                </h3>
                <p className="text-sm text-text-secondary">
                  Ultra-quiet inverter technology with smart temperature control
                </p>
                <div className="flex items-center justify-between pt-4 border-t border-dark-border">
                  <div>
                    <div className="text-2xl font-bold text-gradient">£899</div>
                    <div className="text-xs text-text-tertiary">Starting from</div>
                  </div>
                  <Link href="/products">
                    <button className="btn-primary text-sm px-5 py-2">
                      View Details
                    </button>
                  </Link>
                </div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-accent-cyan/10 rounded-full blur-2xl"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-accent-violet/10 rounded-full blur-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
