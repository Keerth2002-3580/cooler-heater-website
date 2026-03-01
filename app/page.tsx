import Link from 'next/link';
import { Snowflake, Flame, Wrench, Settings, Package, Shield, Clock, Award, Headphones, Star } from 'lucide-react';
import HeroSection from '@/components/HeroSection';
import ProductGrid from '@/components/ProductGrid';
import WhatsAppFloating from '@/components/WhatsAppFloating';

export default function HomePage() {
  const categories = [
    { icon: Snowflake, title: 'Coolers', description: 'Premium air cooling systems', href: '/products?category=cooler' },
    { icon: Flame, title: 'Heaters', description: 'Efficient heating solutions', href: '/products?category=heater' },
    { icon: Wrench, title: 'Installation', description: 'Professional setup service', href: '/services' },
    { icon: Settings, title: 'Maintenance', description: 'Regular service plans', href: '/services' },
    { icon: Package, title: 'Spare Parts', description: 'Genuine replacement parts', href: '/products' },
  ];

  const features = [
    { icon: Shield, title: 'Certified Experts', description: 'Fully qualified technicians' },
    { icon: Clock, title: 'Fast Installation', description: 'Same-day service available' },
    { icon: Award, title: '2-Year Warranty', description: 'Comprehensive coverage' },
    { icon: Headphones, title: '24/7 Support', description: 'Always here to help' },
  ];

  const testimonials = [
    { name: 'Sarah Johnson', role: 'Homeowner', rating: 5, text: 'Excellent service! The team installed our new cooler in just 3 hours. Very professional.' },
    { name: 'Michael Chen', role: 'Business Owner', rating: 5, text: 'We use Ravique for all our office climate needs. Reliable and efficient.' },
    { name: 'Emma Williams', role: 'Property Manager', rating: 5, text: 'Great warranty and after-sales support. Highly recommend for commercial properties.' },
  ];

  return (
    <>
      <HeroSection />

      <section className="py-20 bg-white">
        <div className="container-custom">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-gray-900">Our Services</h2>
          <p className="text-center text-gray-600 mb-12 text-lg">Comprehensive climate control solutions</p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 md:gap-4 lg:gap-6">
            {categories.map((category, index) => {
              const Icon = category.icon;
              return (
                <Link key={index} href={category.href}>
                  <div className="bg-white border border-border rounded-2xl shadow-sm p-4 md:p-6 lg:p-8 text-center h-full transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:border-accent/50 w-full">
                    <div className="w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center mx-auto mb-3 md:mb-4 shadow-md">
                      <Icon className="w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 text-white" />
                    </div>
                    <h3 className="font-bold text-sm md:text-base lg:text-lg mb-1 md:mb-2 text-gray-900">{category.title}</h3>
                    <p className="text-gray-600 text-xs md:text-sm leading-relaxed">{category.description}</p>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container-custom">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">Featured Products</h2>
              <p className="text-gray-600 text-lg">Explore our premium range</p>
            </div>
            <Link href="/products">
              <button className="px-6 py-3 border-2 border-primary text-primary rounded-2xl font-semibold hover:bg-primary hover:text-white transition-all">
                View All
              </button>
            </Link>
          </div>
          <ProductGrid />
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container-custom">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-gray-900">Why Choose Ravique Climate</h2>
          <p className="text-center text-gray-600 mb-12 text-lg">Excellence in every installation</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                    <Icon className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="font-bold text-xl mb-3 text-gray-900">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container-custom">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-gray-900">What Our Clients Say</h2>
          <p className="text-center text-gray-600 mb-12 text-lg">Trusted by thousands across London</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white border border-border rounded-2xl shadow-sm p-8">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 leading-relaxed">&quot;{testimonial.text}&quot;</p>
                <div>
                  <p className="font-bold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <WhatsAppFloating />
    </>
  );
}
