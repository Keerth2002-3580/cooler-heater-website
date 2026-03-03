import Link from 'next/link';
import { Sparkles, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

export default function PremiumFooter() {
  const footerLinks = {
    products: [
      { label: 'Coolers', href: '/products?category=cooler' },
      { label: 'Heaters', href: '/products?category=heater' },
      { label: 'Accessories', href: '/products' },
      { label: 'Bundles', href: '/products' },
    ],
    company: [
      { label: 'About Us', href: '/about' },
      { label: 'Our Services', href: '/services' },
      { label: 'Projects', href: '/projects' },
      { label: 'Contact', href: '/contact' },
    ],
    support: [
      { label: 'FAQ', href: '/faq' },
      { label: 'Warranty', href: '/about' },
      { label: 'Installation', href: '/services' },
      { label: 'Maintenance', href: '/services' },
    ],
    legal: [
      { label: 'Privacy Policy', href: '/privacy' },
      { label: 'Terms of Service', href: '/terms' },
      { label: 'Cookie Policy', href: '/cookies' },
      { label: 'Refund Policy', href: '/refunds' },
    ],
  };

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
  ];

  return (
    <footer className="relative border-t border-dark-border">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-accent-cyan to-accent-violet rounded-xl flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-text-primary">
                Ravique Climate
              </span>
            </Link>
            <p className="text-text-secondary mb-6 leading-relaxed">
              Premium climate control solutions for modern living. Transform your space with our energy-efficient systems.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <a href="tel:+442012345678" className="flex items-center gap-3 text-text-secondary hover:text-text-primary transition-colors">
                <Phone className="w-4 h-4 text-accent-cyan" />
                <span className="text-sm">+44 20 1234 5678</span>
              </a>
              <a href="mailto:info@raviqueclimate.co.uk" className="flex items-center gap-3 text-text-secondary hover:text-text-primary transition-colors">
                <Mail className="w-4 h-4 text-accent-cyan" />
                <span className="text-sm">info@raviqueclimate.co.uk</span>
              </a>
              <div className="flex items-start gap-3 text-text-secondary">
                <MapPin className="w-4 h-4 text-accent-cyan mt-0.5" />
                <span className="text-sm">123 Climate Street<br />London, SW1A 1AA</span>
              </div>
            </div>
          </div>

          {/* Products */}
          <div>
            <h3 className="font-semibold text-text-primary mb-4">Products</h3>
            <ul className="space-y-3">
              {footerLinks.products.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-text-secondary hover:text-text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-text-primary mb-4">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-text-secondary hover:text-text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-semibold text-text-primary mb-4">Support</h3>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-text-secondary hover:text-text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold text-text-primary mb-4">Legal</h3>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-text-secondary hover:text-text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        <div className="glass-card rounded-card p-8 mb-12">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="font-bold text-xl text-text-primary mb-2">
              Stay Updated
            </h3>
            <p className="text-text-secondary mb-6">
              Subscribe to our newsletter for exclusive offers and climate tips
            </p>
            <form className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-button bg-dark-surface border border-dark-border text-text-primary placeholder:text-text-tertiary focus:outline-none focus:ring-2 focus:ring-accent-cyan"
              />
              <button type="submit" className="btn-primary whitespace-nowrap">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-dark-border">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Copyright */}
            <p className="text-sm text-text-tertiary">
              © 2024 Ravique Climate. All rights reserved.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="w-10 h-10 rounded-lg bg-dark-surface border border-dark-border flex items-center justify-center text-text-secondary hover:text-text-primary hover:bg-dark-hover hover:border-accent-cyan transition-all duration-300"
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>

            {/* Certifications */}
            <div className="flex items-center gap-4 text-xs text-text-tertiary">
              <span>Gas Safe Registered</span>
              <span>•</span>
              <span>ISO 9001</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
