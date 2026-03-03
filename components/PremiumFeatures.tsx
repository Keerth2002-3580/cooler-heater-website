import { Zap, Thermometer, Shield, Package, Truck, Lock } from 'lucide-react';

export default function PremiumFeatures() {
  const features = [
    {
      icon: Zap,
      title: 'Energy Efficient',
      description: 'Save up to 40% on energy bills with our A+++ rated systems',
      color: 'cyan',
    },
    {
      icon: Thermometer,
      title: 'Smart Temperature Control',
      description: 'Precision climate control with ±0.5°C accuracy',
      color: 'violet',
    },
    {
      icon: Shield,
      title: 'Warranty Support',
      description: 'Comprehensive 2-year warranty with 24/7 support',
      color: 'cyan',
    },
    {
      icon: Package,
      title: 'Durable Build',
      description: 'Premium materials built to last 15+ years',
      color: 'violet',
    },
    {
      icon: Truck,
      title: 'Fast Delivery',
      description: 'Free delivery and professional installation included',
      color: 'cyan',
    },
    {
      icon: Lock,
      title: 'Secure Payment',
      description: 'Bank-level encryption with multiple payment options',
      color: 'violet',
    },
  ];

  return (
    <section className="py-24 relative">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-heading-xl font-bold text-text-primary mb-4">
            Why Choose Ravique Climate
          </h2>
          <p className="text-body-lg text-text-secondary max-w-2xl mx-auto">
            Premium features designed for your comfort and peace of mind
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            const glowColor = feature.color === 'cyan' ? 'accent-cyan' : 'accent-violet';
            
            return (
              <div
                key={index}
                className="group glass-card rounded-card p-8 hover:bg-dark-hover transition-all duration-300 hover:-translate-y-1 hover:shadow-premium-lg relative overflow-hidden"
              >
                {/* Glow Effect on Hover */}
                <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-${glowColor}/5 to-transparent`}></div>
                
                <div className="relative z-10">
                  {/* Icon */}
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${
                    feature.color === 'cyan' 
                      ? 'from-accent-cyan/20 to-accent-cyan/10' 
                      : 'from-accent-violet/20 to-accent-violet/10'
                  } flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className={`w-6 h-6 ${
                      feature.color === 'cyan' ? 'text-accent-cyan' : 'text-accent-violet'
                    }`} />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-text-primary mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-text-secondary leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
