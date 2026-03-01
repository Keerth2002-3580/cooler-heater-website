'use client';

import { useState } from 'react';
import { MapPin, Building, Home } from 'lucide-react';

export default function ProjectsFilter() {
  const [filter, setFilter] = useState<'all' | 'residential' | 'commercial'>('all');

  const projects = [
    {
      id: 1,
      title: 'Luxury Apartment Complex',
      location: 'Kensington, London',
      type: 'residential' as const,
      category: 'Cooling Installation',
      description: '50 premium air cooling units installed across a luxury apartment building',
      image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800',
    },
    {
      id: 2,
      title: 'Corporate Office Building',
      location: 'Canary Wharf, London',
      type: 'commercial' as const,
      category: 'HVAC System',
      description: 'Complete climate control system for 5-floor office building',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800',
    },
    {
      id: 3,
      title: 'Victorian Home Renovation',
      location: 'Chelsea, London',
      type: 'residential' as const,
      category: 'Heating Installation',
      description: 'Modern heating system installed in historic Victorian property',
      image: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=800',
    },
    {
      id: 4,
      title: 'Retail Shopping Center',
      location: 'Oxford Street, London',
      type: 'commercial' as const,
      category: 'Cooling & Heating',
      description: 'Comprehensive climate solution for 20,000 sq ft retail space',
      image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800',
    },
    {
      id: 5,
      title: 'Modern Family Home',
      location: 'Hampstead, London',
      type: 'residential' as const,
      category: 'Smart Climate System',
      description: 'WiFi-enabled smart heating and cooling for contemporary home',
      image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800',
    },
    {
      id: 6,
      title: 'Hotel Refurbishment',
      location: 'Westminster, London',
      type: 'commercial' as const,
      category: 'Full HVAC Upgrade',
      description: '80-room boutique hotel climate system modernization',
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800',
    },
  ];

  const filteredProjects = projects.filter(
    (project) => filter === 'all' || project.type === filter
  );

  return (
    <div className="py-12 bg-background">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Projects</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explore our portfolio of successful installations across London
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <button
            onClick={() => setFilter('all')}
            className={`px-6 py-3 rounded-2xl font-medium transition-all ${
              filter === 'all'
                ? 'bg-primary text-white shadow-md'
                : 'bg-white text-gray-700 hover:bg-gray-50'
            }`}
          >
            All Projects
          </button>
          <button
            onClick={() => setFilter('residential')}
            className={`px-6 py-3 rounded-2xl font-medium transition-all flex items-center gap-2 ${
              filter === 'residential'
                ? 'bg-primary text-white shadow-md'
                : 'bg-white text-gray-700 hover:bg-gray-50'
            }`}
          >
            <Home className="w-4 h-4" />
            Residential
          </button>
          <button
            onClick={() => setFilter('commercial')}
            className={`px-6 py-3 rounded-2xl font-medium transition-all flex items-center gap-2 ${
              filter === 'commercial'
                ? 'bg-primary text-white shadow-md'
                : 'bg-white text-gray-700 hover:bg-gray-50'
            }`}
          >
            <Building className="w-4 h-4" />
            Commercial
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div key={project.id} className="bg-white rounded-2xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className="relative aspect-[4/3] bg-gray-200 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
                <span className="absolute top-4 left-4 px-3 py-1 bg-green-100 text-green-800 rounded-full text-xs font-medium">
                  Completed
                </span>
                <span className="absolute top-4 right-4 px-3 py-1 bg-primary text-white rounded-full text-xs font-medium">
                  {project.type === 'residential' ? 'Residential' : 'Commercial'}
                </span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <div className="flex items-center gap-2 text-gray-600 mb-3">
                  <MapPin className="w-4 h-4" />
                  <span className="text-sm">{project.location}</span>
                </div>
                <span className="inline-block px-3 py-1 bg-secondary text-gray-900 rounded-full text-xs font-medium mb-3">
                  {project.category}
                </span>
                <p className="text-gray-700">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
