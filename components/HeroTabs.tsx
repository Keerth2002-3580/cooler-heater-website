'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Snowflake, Flame } from 'lucide-react';

export default function HeroTabs() {
  const [activeTab, setActiveTab] = useState<'coolers' | 'heaters'>('coolers');

  return (
    <section className="bg-gradient-to-br from-primary via-secondary to-primary-light text-white py-24">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Premium Climate Solutions for London
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed">
            Expert cooling and heating systems with professional installation
          </p>
        </div>

        <div className="max-w-2xl mx-auto mb-10">
          <div className="flex gap-4 justify-center">
            <button
              onClick={() => setActiveTab('coolers')}
              className={`px-10 py-4 rounded-2xl font-semibold transition-all text-lg ${
                activeTab === 'coolers'
                  ? 'bg-white text-primary shadow-xl'
                  : 'bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 border border-white/20'
              }`}
            >
              <Snowflake className="w-5 h-5 inline mr-2" />
              Coolers
            </button>
            <button
              onClick={() => setActiveTab('heaters')}
              className={`px-10 py-4 rounded-2xl font-semibold transition-all text-lg ${
                activeTab === 'heaters'
                  ? 'bg-white text-primary shadow-xl'
                  : 'bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 border border-white/20'
              }`}
            >
              <Flame className="w-5 h-5 inline mr-2" />
              Heaters
            </button>
          </div>
        </div>

        <div className="max-w-3xl mx-auto bg-white/10 backdrop-blur-md rounded-2xl p-10 border border-white/20 shadow-2xl">
          {activeTab === 'coolers' ? (
            <div>
              <h3 className="text-3xl font-bold mb-4">Professional Cooling Systems</h3>
              <p className="text-lg mb-6 text-blue-100 leading-relaxed">
                Beat the heat with our energy-efficient air coolers. Perfect for homes, offices, and commercial spaces.
              </p>
              <ul className="space-y-3 mb-8 text-blue-100">
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 bg-accent rounded-full"></span>
                  Energy-efficient operation
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 bg-accent rounded-full"></span>
                  Quiet performance
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 bg-accent rounded-full"></span>
                  Smart temperature control
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 bg-accent rounded-full"></span>
                  Professional installation included
                </li>
              </ul>
              <Link href="/products?category=cooler">
                <button className="px-8 py-4 bg-accent text-white rounded-2xl font-semibold hover:bg-accent-dark transition-all shadow-lg text-lg">
                  Browse Coolers
                </button>
              </Link>
            </div>
          ) : (
            <div>
              <h3 className="text-3xl font-bold mb-4">Efficient Heating Solutions</h3>
              <p className="text-lg mb-6 text-blue-100 leading-relaxed">
                Stay warm with our advanced heating systems. Designed for comfort and energy savings.
              </p>
              <ul className="space-y-3 mb-8 text-blue-100">
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 bg-accent rounded-full"></span>
                  Rapid heating technology
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 bg-accent rounded-full"></span>
                  Low energy consumption
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 bg-accent rounded-full"></span>
                  Safety features included
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 bg-accent rounded-full"></span>
                  Expert installation service
                </li>
              </ul>
              <Link href="/products?category=heater">
                <button className="px-8 py-4 bg-accent text-white rounded-2xl font-semibold hover:bg-accent-dark transition-all shadow-lg text-lg">
                  Browse Heaters
                </button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
