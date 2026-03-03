'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function PremiumFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'What areas do you serve?',
      answer: 'We provide services throughout Greater London and surrounding areas. Contact us to confirm if we cover your specific location.',
    },
    {
      question: 'How long does installation take?',
      answer: 'Most residential installations take 3-6 hours. Commercial projects vary depending on size and complexity. We provide accurate timelines during consultation.',
    },
    {
      question: 'What warranty do you offer?',
      answer: 'We offer up to 2 years comprehensive warranty on installations and products. Extended warranties are available for purchase.',
    },
    {
      question: 'Do you offer financing options?',
      answer: 'Yes, we offer flexible financing options with 0% APR available on selected products. Contact us for more details.',
    },
    {
      question: 'How often should I service my system?',
      answer: 'We recommend annual servicing for optimal performance and efficiency. Commercial systems may require more frequent maintenance.',
    },
  ];

  return (
    <section className="py-24 relative">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-heading-xl font-bold text-text-primary mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-body-lg text-text-secondary max-w-2xl mx-auto">
            Find answers to common questions about our products and services
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="glass-card rounded-card overflow-hidden transition-all duration-300 hover:bg-dark-hover"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-8 py-6 flex items-center justify-between text-left"
              >
                <span className="font-semibold text-lg text-text-primary pr-8">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-accent-cyan flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-48' : 'max-h-0'
                }`}
              >
                <div className="px-8 pb-6 text-text-secondary leading-relaxed">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="text-center mt-12">
          <p className="text-text-secondary mb-4">
            Still have questions?
          </p>
          <a href="/contact">
            <button className="btn-secondary">
              Contact Support
            </button>
          </a>
        </div>
      </div>
    </section>
  );
}
