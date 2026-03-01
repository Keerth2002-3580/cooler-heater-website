'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  items: FAQItem[];
}

export default function FAQAccordion({ items }: FAQAccordionProps) {
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <div className="space-y-4">
      {items.map((item) => (
        <div key={item.id} className="bg-white rounded-2xl shadow-md overflow-hidden">
          <button
            onClick={() => setOpenId(openId === item.id ? null : item.id)}
            className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
          >
            <span className="font-medium text-gray-900">{item.question}</span>
            <ChevronDown
              className={`w-5 h-5 text-primary transition-transform ${
                openId === item.id ? 'rotate-180' : ''
              }`}
            />
          </button>
          {openId === item.id && (
            <div className="px-6 py-4 border-t border-gray-100">
              <p className="text-gray-600">{item.answer}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
