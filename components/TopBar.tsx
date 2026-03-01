'use client';

import { MessageCircle } from 'lucide-react';

export default function TopBar() {
  return (
    <div className="bg-primary text-white py-2.5">
      <div className="container-custom flex flex-wrap items-center justify-center md:justify-between gap-4 text-sm">
        <div className="flex flex-wrap items-center gap-4 md:gap-8">
          <span className="font-medium">Free site visit in Greater London</span>
          <span className="hidden sm:inline text-white/40">|</span>
          <span className="font-medium">Warranty up to 2 years</span>
        </div>
        <a
          href="https://wa.me/447000000000"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 hover:text-accent transition-colors font-medium"
        >
          <MessageCircle className="w-4 h-4" />
          <span>WhatsApp Us</span>
        </a>
      </div>
    </div>
  );
}
