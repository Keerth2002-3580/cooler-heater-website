import AntigravityHeader from '@/components/antigravity/AntigravityHeader';
import AntigravityHero from '@/components/antigravity/AntigravityHero';

export default function AntigravityPage() {
  return (
    <div className="min-h-screen bg-white">
      <AntigravityHero />
      
      {/* Additional sections can go here */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Built for performance
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Experience the future of climate control with our intelligent systems
            </p>
          </div>

          {/* Feature Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Energy Efficient',
                description: 'Save up to 40% on energy bills with A+++ rated systems',
                icon: '⚡',
              },
              {
                title: 'Smart Control',
                description: 'Precision temperature control with ±0.5°C accuracy',
                icon: '🎯',
              },
              {
                title: 'Whisper Quiet',
                description: 'Ultra-quiet operation at just 19dB noise level',
                icon: '🔇',
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="group p-8 rounded-3xl border border-gray-200 hover:border-gray-300 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Ready to get started?
          </h2>
          <p className="text-xl text-gray-600 mb-10">
            Join thousands of satisfied customers who have transformed their spaces
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="px-8 py-4 bg-black text-white rounded-full text-base font-medium hover:bg-gray-800 hover:shadow-xl transition-all hover:scale-105">
              Get Started Free
            </button>
            <button className="px-8 py-4 bg-white text-gray-900 rounded-full text-base font-medium border-2 border-gray-200 hover:border-gray-300 hover:shadow-lg transition-all hover:scale-105">
              Contact Sales
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
