import Image from 'next/image';
import { Award, Users, Shield, Heart } from 'lucide-react';

export default function AboutPage() {
  const values = [
    { icon: Shield, title: 'Quality First', description: 'We never compromise on quality or safety standards' },
    { icon: Users, title: 'Customer Focus', description: 'Your satisfaction is our top priority' },
    { icon: Award, title: 'Excellence', description: 'Certified professionals delivering expert service' },
    { icon: Heart, title: 'Integrity', description: 'Honest, transparent, and reliable in everything we do' },
  ];

  const stats = [
    { number: '15+', label: 'Years Experience' },
    { number: '5000+', label: 'Happy Clients' },
    { number: '10000+', label: 'Installations' },
    { number: '98%', label: 'Satisfaction Rate' },
  ];

  const team = [
    { name: 'James Anderson', role: 'Founder & CEO', image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400' },
    { name: 'Sarah Mitchell', role: 'Operations Director', image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400' },
    { name: 'David Chen', role: 'Lead Technician', image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400' },
    { name: 'Emma Thompson', role: 'Customer Service Manager', image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400' },
  ];

  return (
    <div className="py-12 bg-background">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About Ravique Climate</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            London's trusted partner for premium cooling and heating solutions since 2011
          </p>
        </div>

        {/* Our Story with Founder Image - 2 Column Layout */}
        <div className="max-w-6xl mx-auto mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left: Story Text */}
            <div>
              <div className="bg-white rounded-2xl shadow-sm border border-border p-8 md:p-10">
                <h2 className="text-3xl font-bold mb-6">Our Story</h2>
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p>
                    Founded in 2011, Ravique Climate has grown from a small family business to become one of London's most trusted names in climate control solutions. Our journey began with a simple mission: to provide premium quality cooling and heating systems with exceptional customer service.
                  </p>
                  <p>
                    Over the years, we've installed thousands of systems across residential and commercial properties throughout Greater London. Our commitment to quality, reliability, and customer satisfaction has earned us a reputation for excellence in the industry.
                  </p>
                  <p>
                    Today, we continue to innovate and adapt, offering the latest in energy-efficient climate control technology while maintaining the personal touch that our customers have come to expect.
                  </p>
                </div>
              </div>
            </div>

            {/* Right: Founder/Office Image */}
            <div>
              <div className="bg-white rounded-2xl shadow-sm border border-border p-6 overflow-hidden">
                <div className="relative aspect-[4/5] rounded-2xl overflow-hidden mb-4">
                  <Image
                    src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800&q=80"
                    alt="Founder & Team at Ravique Climate"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <p className="text-sm text-gray-500 text-center mb-6">
                  Founder & Team — Ravique Climate, London
                </p>
                
                {/* Founder Info Block */}
                <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-xl p-6 border border-primary/10">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold text-xl">JA</span>
                    </div>
                    <div>
                      <h3 className="font-bold text-lg text-gray-900">James Anderson</h3>
                      <p className="text-sm text-primary font-medium mb-2">Founder & CEO</p>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        "Our mission is to deliver exceptional climate solutions that enhance comfort while prioritizing energy efficiency and sustainability."
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white border border-border rounded-2xl shadow-sm p-8 text-center">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">{stat.number}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-white border border-border rounded-2xl shadow-sm overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <div className="aspect-square bg-gray-200 overflow-hidden relative">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="font-semibold text-lg mb-1">{member.name}</h3>
                  <p className="text-gray-600 text-sm">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-br from-primary to-primary-light text-white rounded-2xl shadow-md p-12 text-center">
          <h2 className="text-3xl font-bold mb-6">Certified & Trusted</h2>
          <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
            All our technicians are fully certified and insured. We're proud members of industry associations and maintain the highest standards of workmanship.
          </p>
          <div className="flex flex-wrap justify-center gap-8 text-sm">
            <div>Gas Safe Registered</div>
            <div>NICEIC Approved</div>
            <div>REFCOM Certified</div>
            <div>ISO 9001 Quality</div>
          </div>
        </div>
      </div>
    </div>
  );
}
