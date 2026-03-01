'use client';

import { useState } from 'react';
import { Search } from 'lucide-react';
import FAQAccordion from './FAQAccordion';

export default function FAQSearch() {
  const [searchQuery, setSearchQuery] = useState('');

  const faqs = [
    {
      id: '1',
      category: 'General',
      question: 'What areas do you serve?',
      answer: 'We provide services throughout Greater London and surrounding areas. Contact us to confirm if we cover your specific location.',
    },
    {
      id: '2',
      category: 'General',
      question: 'Do you offer free consultations?',
      answer: 'Yes! We offer free site visits and consultations within Greater London. Our experts will assess your needs and provide recommendations.',
    },
    {
      id: '3',
      category: 'Installation',
      question: 'How long does installation take?',
      answer: 'Most residential installations take 3-6 hours. Commercial projects vary depending on size and complexity. We provide accurate timelines during consultation.',
    },
    {
      id: '4',
      category: 'Installation',
      question: 'Do I need to be present during installation?',
      answer: 'Yes, we require someone to be present during installation for access and to sign off on the completed work.',
    },
    {
      id: '5',
      category: 'Products',
      question: 'What brands do you work with?',
      answer: 'We work with leading brands including CoolMaster, HeatWave, ArcticPro, and ThermoSmart. All products come with manufacturer warranties.',
    },
    {
      id: '6',
      category: 'Warranty',
      question: 'What warranty do you offer?',
      answer: 'We offer up to 2 years warranty on installations and products. Extended warranties are available for purchase.',
    },
    {
      id: '7',
      category: 'Maintenance',
      question: 'How often should I service my system?',
      answer: 'We recommend annual servicing for optimal performance and efficiency. Commercial systems may require more frequent maintenance.',
    },
    {
      id: '8',
      category: 'Pricing',
      question: 'How much does installation cost?',
      answer: 'Installation costs start from £200 and vary based on system type, location, and complexity. Contact us for a detailed quote.',
    },
  ];

  const filteredFaqs = faqs.filter(
    (faq) =>
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const categories = Array.from(new Set(faqs.map((faq) => faq.category)));

  return (
    <div className="py-12 bg-background">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Frequently Asked Questions</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Find answers to common questions about our products and services
          </p>
        </div>

        <div className="max-w-2xl mx-auto mb-12">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search FAQs..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-4 rounded-2xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all shadow-md"
            />
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSearchQuery(category)}
              className="px-6 py-2 bg-white rounded-full text-sm font-medium text-gray-700 hover:bg-primary hover:text-white transition-all shadow-sm"
            >
              {category}
            </button>
          ))}
        </div>

        <div className="max-w-4xl mx-auto">
          {filteredFaqs.length > 0 ? (
            <FAQAccordion items={filteredFaqs} />
          ) : (
            <div className="bg-white rounded-2xl shadow-md p-12 text-center">
              <p className="text-gray-600 text-lg">
                No FAQs found matching your search. Try different keywords or{' '}
                <button
                  onClick={() => setSearchQuery('')}
                  className="text-primary font-medium hover:underline"
                >
                  clear your search
                </button>
                .
              </p>
            </div>
          )}
        </div>

        <div className="max-w-4xl mx-auto mt-16">
          <div className="bg-gradient-to-br from-primary to-primary-light text-white rounded-2xl shadow-md p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Still Have Questions?</h2>
            <p className="text-lg mb-6 text-gray-100">
              Can&apos;t find what you&apos;re looking for? Our team is here to help
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="/contact">
                <button className="px-6 py-3 bg-white text-primary rounded-2xl font-semibold hover:bg-secondary transition-all">
                  Contact Us
                </button>
              </a>
              <a href="https://wa.me/447000000000" target="_blank" rel="noopener noreferrer">
                <button className="px-6 py-3 bg-primary-dark text-white rounded-2xl font-semibold hover:bg-primary transition-all">
                  WhatsApp Us
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
