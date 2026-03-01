import { Wrench, Settings, ClipboardCheck, Check } from 'lucide-react';
// Import ServiceBookingForm component
import ServiceBookingForm from '../../components/ServiceBookingForm';

export default function ServicesPage() {
  const services = [
    {
      icon: Wrench,
      title: 'Installation',
      description: 'Professional installation of cooling and heating systems',
      features: [
        'Site survey and assessment',
        'Expert installation by certified technicians',
        'System testing and commissioning',
        'User training and handover',
        'Post-installation support',
      ],
      price: 'From £200',
    },
    {
      icon: Settings,
      title: 'Maintenance',
      description: 'Regular maintenance to keep your system running efficiently',
      features: [
        'Annual service contracts available',
        'Filter cleaning and replacement',
        'Performance optimization',
        'Preventive maintenance checks',
        'Priority booking for contract holders',
      ],
      price: 'From £80',
    },
    {
      icon: Wrench,
      title: 'Repair',
      description: 'Fast and reliable repair services for all brands',
      features: [
        'Same-day emergency repairs',
        'Genuine spare parts',
        'Experienced technicians',
        '90-day warranty on repairs',
        'Transparent pricing',
      ],
      price: 'From £60',
    },
    {
      icon: ClipboardCheck,
      title: 'Inspection',
      description: 'Comprehensive system inspection and diagnostics',
      features: [
        'Detailed system assessment',
        'Performance testing',
        'Safety checks',
        'Written report with recommendations',
        'Energy efficiency evaluation',
      ],
      price: 'From £50',
    },
  ];

  return (
    <div className="py-12 bg-background">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Professional climate control services for homes and businesses across London
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div key={index} className="bg-white rounded-2xl shadow-md p-8">
                <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mb-6">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-2xl font-bold mb-3">{service.title}</h2>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-3 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex items-center justify-between pt-6 border-t border-gray-200">
                  <span className="text-2xl font-bold text-primary">{service.price}</span>
                  <button className="px-6 py-3 bg-primary text-white rounded-2xl font-medium hover:bg-primary-dark transition-all shadow-md">
                    Book Now
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        <div className="max-w-3xl mx-auto">
          <ServiceBookingForm />
        </div>
      </div>
    </div>
  );
}
