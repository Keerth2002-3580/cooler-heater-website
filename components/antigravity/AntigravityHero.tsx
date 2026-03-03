import Link from 'next/link';
import { Download, ArrowRight, Sparkles } from 'lucide-react';
import ParticleBackground from './ParticleBackground';

export default function AntigravityHero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-[#FBFBFD]">
      {/* Dotted Grid Background */}
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `radial-gradient(circle, #d1d5db 1px, transparent 1px)`,
          backgroundSize: '24px 24px',
        }}
      />

      {/* Particle Bursts */}
      <ParticleBackground />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 py-20 text-center">
        {/* Brand Line */}
        <div className="flex items-center justify-center gap-2 mb-8">
          <div className="w-6 h-6 bg-black rounded-md flex items-center justify-center">
            <Sparkles className="w-3 h-3 text-white" />
          </div>
          <span className="text-sm font-medium text-gray-600">
            Ravique Climate
          </span>
        </div>

        {/* Headline */}
        <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-gray-900 mb-8 leading-[1.1] tracking-tight">
          Experience liftoff with the next-generation{' '}
          <span className="relative inline-block">
            IDE
            <svg
              className="absolute -bottom-2 left-0 w-full"
              height="8"
              viewBox="0 0 200 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 5.5C50 2.5 150 2.5 199 5.5"
                stroke="#ec4899"
                strokeWidth="3"
                strokeLinecap="round"
              />
            </svg>
          </span>
        </h1>

        {/* Subheadline */}
        <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
          Transform your indoor climate with intelligent, energy-efficient systems designed for modern living
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <Link href="/quote">
            <button className="group flex items-center gap-2 px-8 py-4 bg-black text-white rounded-full text-base font-medium hover:bg-gray-800 hover:shadow-xl transition-all hover:scale-105">
              <Download className="w-5 h-5" />
              Download for Windows
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </Link>
          <Link href="/services">
            <button className="flex items-center gap-2 px-8 py-4 bg-white text-gray-900 rounded-full text-base font-medium border-2 border-gray-200 hover:border-gray-300 hover:shadow-lg transition-all hover:scale-105">
              Explore use cases
              <ArrowRight className="w-4 h-4" />
            </button>
          </Link>
        </div>

        {/* Trust Indicators */}
        <div className="flex flex-wrap items-center justify-center gap-8 text-sm text-gray-500">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span>5000+ Active Users</span>
          </div>
          <div className="hidden sm:block w-px h-4 bg-gray-300"></div>
          <div className="flex items-center gap-2">
            <svg className="w-4 h-4 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <span>4.9/5 Rating</span>
          </div>
          <div className="hidden sm:block w-px h-4 bg-gray-300"></div>
          <div className="flex items-center gap-2">
            <svg className="w-4 h-4 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
            <span>2-Year Warranty</span>
          </div>
        </div>
      </div>

      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
}
