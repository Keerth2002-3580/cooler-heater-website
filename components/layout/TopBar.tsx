import React from 'react';
import { MessageCircle } from 'lucide-react';

export const TopBar: React.FC = () => {
  return (
    <div className="bg-primary text-white py-2">
      <div className="container-custom flex flex-wrap items-center justify-center md:justify-between gap-4 text-sm">
        <div className="flex flex-wrap items-center gap-4 md:gap-6">
          <span>🎯 Free site visit in Greater London</span>
          <span className="hidden sm:inline">|</span>
          <span>✓ Warranty up to 2 years</span>
        </div>
        <a
          href="https://wa.me/447000000000"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 hover:text-secondary transition-colors"
        >
          <MessageCircle className="w-4 h-4" />
          <span>WhatsApp Us</span>
        </a>
      </div>
    </div>
  );
};
