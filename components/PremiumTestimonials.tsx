import { Star, Quote } from 'lucide-react';

export default function PremiumTestimonials() {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Homeowner, London',
      rating: 5,
      text: 'Absolutely love my new cooling system! The installation was seamless and the energy savings are incredible. Best investment for our home.',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80',
    },
    {
      name: 'Michael Chen',
      role: 'Business Owner',
      rating: 5,
      text: 'We equipped our entire office with Ravique systems. The smart controls and efficiency have transformed our workspace. Highly recommended!',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80',
    },
    {
      name: 'Emma Williams',
      role: 'Property Manager',
      rating: 5,
      text: 'Managing 20+ properties, reliability is key. Ravique has never let us down. Excellent warranty support and professional service every time.',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80',
    },
  ];

  return (
    <section className="py-24 relative">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent-violet/10 rounded-full blur-3xl"></div>

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-heading-xl font-bold text-text-primary mb-4">
            Trusted by Thousands
          </h2>
          <p className="text-body-lg text-text-secondary max-w-2xl mx-auto">
            See what our customers say about their experience
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="glass-card rounded-card p-8 hover:bg-dark-hover transition-all duration-300 hover:-translate-y-1 hover:shadow-premium-lg relative"
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 opacity-10">
                <Quote className="w-16 h-16 text-accent-cyan" />
              </div>

              <div className="relative z-10">
                {/* Rating */}
                <div className="flex items-center gap-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-accent-warning text-accent-warning"
                    />
                  ))}
                </div>

                {/* Text */}
                <p className="text-text-secondary leading-relaxed mb-8">
                  &quot;{testimonial.text}&quot;
                </p>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden bg-dark-surface">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <div className="font-semibold text-text-primary">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-text-tertiary">
                      {testimonial.role}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
