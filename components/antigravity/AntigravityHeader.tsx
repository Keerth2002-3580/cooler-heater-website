'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ChevronDown, Download, Menu, X, Sparkles } from 'lucide-react';

export default function AntigravityHeader() {
  const [isOpen, setIsOpen] = useState(false);
  const [useCasesOpen, setUseCasesOpen] = useState(false);
  const [resourcesOpen, setResourcesOpen] = useState(false);

  const navLinks = [
    { href: '/products', label: 'Product' },
    { href: '/services', label: 'Use Cases', hasDropdown: true, dropdownId: 'useCases' },
    { href: '/quote', label: 'Pricing' },
    { href: '/about', label: 'Blog' },
    { href: '/contact', label: 'Resources', hasDropdown: true, dropdownId: 'resources' },
  ];

  const useCasesDropdown = [
    { label: 'Residential', href: '/services' },
    { label: 'Commercial', href: '/services' },
    { label: 'Industrial', href: '/services' },
  ];

  const resourcesDropdown = [
    { label: 'Documentation', href: '/faq' },
    { label: 'Support', href: '/contact' },
    { label: 'Community', href: '/about' },
  ];

  return (
    <header className="relative z-50 bg-white/80 backdrop-blur-sm border-b border-gray-100">
      <nav className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center group-hover:scale-105 transition-transform">
              <Sparkles className="w-4 h-4 text-white" />
            </div>
            <span className="text-lg font-semibold text-gray-900">
              Ravique Climate
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <div key={link.href} className="relative">
                {link.hasDropdown ? (
                  <button
                    onMouseEnter={() => {
                      if (link.dropdownId === 'useCases') setUseCasesOpen(true);
                      if (link.dropdownId === 'resources') setResourcesOpen(true);
                    }}
                    onMouseLeave={() => {
                      if (link.dropdownId === 'useCases') setUseCasesOpen(false);
                      if (link.dropdownId === 'resources') setResourcesOpen(false);
                    }}
                    className="px-4 py-2 text-[15px] font-medium text-gray-600 hover:text-gray-900 transition-colors flex items-center gap-1"
                  >
                    {link.label}
                    <ChevronDown className="w-4 h-4" />
                  </button>
                ) : (
                  <Link
                    href={link.href}
                    className="px-4 py-2 text-[15px] font-medium text-gray-600 hover:text-gray-900 transition-colors block"
                  >
                    {link.label}
                  </Link>
                )}

                {/* Dropdowns */}
                {link.dropdownId === 'useCases' && useCasesOpen && (
                  <div
                    onMouseEnter={() => setUseCasesOpen(true)}
                    onMouseLeave={() => setUseCasesOpen(false)}
                    className="absolute top-full left-0 mt-2 w-48 bg-white rounded-2xl shadow-lg border border-gray-100 p-2"
                  >
                    {useCasesDropdown.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="block px-4 py-2 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-colors"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}

                {link.dropdownId === 'resources' && resourcesOpen && (
                  <div
                    onMouseEnter={() => setResourcesOpen(true)}
                    onMouseLeave={() => setResourcesOpen(false)}
                    className="absolute top-full left-0 mt-2 w-48 bg-white rounded-2xl shadow-lg border border-gray-100 p-2"
                  >
                    {resourcesDropdown.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="block px-4 py-2 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-colors"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Link href="/quote">
              <button className="flex items-center gap-2 px-5 py-2.5 bg-black text-white rounded-full text-sm font-medium hover:bg-gray-800 hover:shadow-lg transition-all">
                <Download className="w-4 h-4" />
                Download
              </button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className="w-6 h-6 text-gray-900" />
            ) : (
              <Menu className="w-6 h-6 text-gray-900" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden py-6 border-t border-gray-100">
            <div className="flex flex-col space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="px-4 py-3 text-[15px] font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-all"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-4">
                <Link href="/quote" className="block">
                  <button className="w-full flex items-center justify-center gap-2 px-5 py-2.5 bg-black text-white rounded-full text-sm font-medium">
                    <Download className="w-4 h-4" />
                    Download
                  </button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
