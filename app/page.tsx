import PremiumHero from '@/components/PremiumHero';
import PremiumFeatures from '@/components/PremiumFeatures';
import PremiumProducts from '@/components/PremiumProducts';
import PremiumTestimonials from '@/components/PremiumTestimonials';
import PremiumFAQ from '@/components/PremiumFAQ';
import PremiumCTA from '@/components/PremiumCTA';

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <PremiumHero />
      <PremiumFeatures />
      <PremiumProducts />
      <PremiumTestimonials />
      <PremiumFAQ />
      <PremiumCTA />
    </main>
  );
}
