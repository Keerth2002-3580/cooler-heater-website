'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, ChevronDown, Sparkles, Truck, Wallet } from 'lucide-react';

export default function PremiumHeader() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '/products', label: 'Products', hasDropdown: true },
    { href: '/services', label: 'Solutions' },
    { href: '/quote', label: 'Pricing' },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' },
  ];

  const productCategories = [
    { href: '/products?category=cooler', label: 'Coolers', icon: '❄️' },
    { href: '/products?category=heater', label: 'Heaters', icon: '🔥' },
    { href: '/products', label: 'Accessories', icon: '🔧' },
    { href: '/products', label: 'Bundles', icon: '📦' },
  ];

  return (
    <>
      {/* Announcement Bar */}
      <div className="bg-gradient-to-r from-accent-cyan/10 to-accent-violet/10 border-b border-dark-border">
        <div className="container-custom">
          <div className="flex items-center justify-center gap-6 py-2 text-sm text-text-secondary">
            <div className="flex items-center gap-2">
              <Truck className="w-4 h-4 text-accent-cyan" />
              <span>Free delivery over LKR 10,000</span>
            </div>
            <div className="hidden sm:block w-px h-4 bg-dark-border"></div>
            <div className="hidden sm:flex items-center gap-2">
              <Wallet className="w-4 h-4 text-accent-violet" />
              <span>5% Wallet Cashback</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-dark-elevated/80 backdrop-blur-premium shadow-premium'
            : 'bg-transparent'
        }`}
      >
        <nav className="container-custom">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-accent-cyan to-accent-violet rounded-xl blur-md opacity-50 group-hover:opacity-75 transition-opacity"></div>
                <div className="relative w-10 h-10 bg-gradient-to-br from-accent-cyan to-accent-violet rounded-xl flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-white" />
                </div>
              </div>
              <span className="text-xl font-bold text-text-primary tracking-tight">
                Ravique Climate
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <div key={link.href} className="relative">
                  {link.hasDropdown ? (
                    <button
                      onMouseEnter={() => setProductsOpen(true)}
                      onMouseLeave={() => setProductsOpen(false)}
                      className="relative px-4 py-2 text-[15px] font-medium text-text-secondary hover:text-text-primary transition-colors duration-300 flex items-center gap-1 group"
                    >
                      {link.label}
                      <ChevronDown className="w-4 h-4" />
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-accent-cyan to-accent-violet transition-all duration-300 group-hover:w-full"></span>
                    </button>
                  ) : (
                    <Link
                      href={link.href}
                      className="relative px-4 py-2 text-[15px] font-medium text-text-secondary hover:text-text-primary transition-colors duration-300 group block"
                    >
                      {link.label}
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-accent-cyan to-accent-violet transition-all duration-300 group-hover:w-full"></span>
                    </Link>
                  )}

                  {/* Products Dropdown */}
                  {link.hasDropdown && productsOpen && (
                    <div
                      onMouseEnter={() => setProductsOpen(true)}
                      onMouseLeave={() => setProductsOpen(false)}
                      className="absolute top-full left-0 mt-2 w-56 glass-card rounded-card p-2 shadow-premium-lg"
                    >
                      {productCategories.map((category) => (
                        <Link
                          key={category.href}
                          href={category.href}
                          className="flex items-center gap-3 px-4 py-3 rounded-lg text-text-secondary hover:text-text-primary hover:bg-dark-hover transition-all duration-200"
                        >
                          <span className="text-xl">{category.icon}</span>
                          <span className="text-sm font-medium">{category.label}</span>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="hidden lg:flex items-center gap-3">
              <Link href="/contact">
                <button className="btn-ghost">Sign in</button>
              </Link>
              <Link href="/quote">
                <button className="btn-primary">Get Quote</button>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-dark-hover transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X className="w-6 h-6 text-text-primary" />
              ) : (
                <Menu className="w-6 h-6 text-text-primary" />
              )}
            </button>
          </div>

          {/* Mobile Menu */}
          {isOpen && (
            <div className="lg:hidden py-6 border-t border-dark-border">
              <div className="flex flex-col space-y-1">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="px-4 py-3 text-[15px] font-medium text-text-secondary hover:text-text-primary hover:bg-dark-hover rounded-lg transition-all"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
                <div className="pt-4 space-y-2">
                  <Link href="/contact" className="block">
                    <button className="w-full btn-ghost" onClick={() => setIsOpen(false)}>
                      Sign in
                    </button>
                  </Link>
                  <Link href="/quote" className="block">
                    <button className="w-full btn-primary" onClick={() => setIsOpen(false)}>
                      Get Quote
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          )}
        </nav>
      </header>
    </>
  );
}
