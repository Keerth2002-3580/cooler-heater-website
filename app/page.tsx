import AntigravityHero from '@/components/antigravity/AntigravityHero';
import { Zap, Thermometer, Shield, Package, Truck, Lock } from 'lucide-react';

export default function HomePage() {
  const features = [
    {
      icon: Zap,
      title: 'Energy Efficient',
      description: 'Save up to 40% on energy bills with our A+++ rated systems',
    },
    {
      icon: Thermometer,
      title: 'Smart Temperature Control',
      description: 'Precision climate control with ±0.5°C accuracy',
    },
    {
      icon: Shield,
      title: 'Warranty Support',
      description: 'Comprehensive 2-year warranty with 24/7 support',
    },
    {
      icon: Package,
      title: 'Durable Build',
      description: 'Premium materials built to last 15+ years',
    },
    {
      icon: Truck,
      title: 'Fast Delivery',
      description: 'Free delivery and professional installation included',
    },
    {
      icon: Lock,
      title: 'Secure Payment',
      description: 'Bank-level encryption with multiple payment options',
    },
  ];

  return (
    <main className="min-h-screen bg-[#FBFBFD]">
      <AntigravityHero />

      {/* Features Section */}
      <section className="py-24 bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-gray-900 mb-4 tracking-tight">
              Why Choose Ravique Climate
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Premium features designed for your comfort and peace of mind
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="card-light p-8 group"
                >
                  <div className="w-12 h-12 rounded-2xl bg-gray-100 flex items-center justify-center mb-6 group-hover:bg-gray-200 transition-colors">
                    <Icon className="w-6 h-6 text-gray-900" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-[#FBFBFD]">
        <div className="container-custom">
          <div className="card-light p-16 text-center max-w-4xl mx-auto">
            <h2 className="text-5xl font-bold text-gray-900 mb-6 tracking-tight">
              Ready to get started?
            </h2>
            <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
              Join thousands of satisfied customers who have transformed their spaces with our premium climate solutions
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="/quote">
                <button className="btn-primary">
                  Get Free Quote
                </button>
              </a>
              <a href="/products">
                <button className="btn-secondary">
                  Browse Products
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
