import Link from 'next/link';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function PremiumCTA() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Ambient Glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent-cyan/10 via-transparent to-accent-violet/10"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-accent-cyan/20 rounded-full blur-3xl animate-glow-pulse"></div>

      <div className="container-custom relative z-10">
        <div className="glass-card rounded-premium p-12 md:p-16 text-center relative overflow-hidden">
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent-violet/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent-cyan/10 rounded-full blur-3xl"></div>

          <div className="relative z-10 max-w-3xl mx-auto">
            {/* Icon */}
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-accent-cyan/20 to-accent-violet/20 mb-8">
              <Sparkles className="w-8 h-8 text-accent-cyan" />
            </div>

            {/* Headline */}
            <h2 className="text-heading-xl md:text-display-md font-bold text-text-primary mb-6">
              Ready to Transform Your Space?
            </h2>

            {/* Description */}
            <p className="text-body-lg text-text-secondary mb-10 max-w-2xl mx-auto leading-relaxed">
              Get a free consultation and personalized quote for your home or business. 
              Our experts are ready to help you find the perfect climate solution.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/quote">
                <button className="btn-primary flex items-center gap-2 group px-8 py-4">
                  Get Free Quote
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>
              <Link href="/products">
                <button className="btn-secondary px-8 py-4">
                  Browse Products
                </button>
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center justify-center gap-8 mt-12 pt-8 border-t border-dark-border">
              <div className="text-center">
                <div className="text-2xl font-bold text-gradient mb-1">5000+</div>
                <div className="text-sm text-text-tertiary">Happy Customers</div>
              </div>
              <div className="hidden sm:block w-px h-12 bg-dark-border"></div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gradient mb-1">15+</div>
                <div className="text-sm text-text-tertiary">Years Experience</div>
              </div>
              <div className="hidden sm:block w-px h-12 bg-dark-border"></div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gradient mb-1">98%</div>
                <div className="text-sm text-text-tertiary">Satisfaction Rate</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
