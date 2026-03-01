import Link from 'next/link';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-primary text-white">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <h3 className="text-xl font-bold mb-4">Ravique Climate</h3>
            <p className="text-blue-100 mb-6 leading-relaxed">Premium cooling and heating solutions for London businesses and homes.</p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-accent transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-accent transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-accent transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-accent transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li><Link href="/products" className="text-blue-100 hover:text-white transition-colors">Products</Link></li>
              <li><Link href="/services" className="text-blue-100 hover:text-white transition-colors">Services</Link></li>
              <li><Link href="/projects" className="text-blue-100 hover:text-white transition-colors">Projects</Link></li>
              <li><Link href="/about" className="text-blue-100 hover:text-white transition-colors">About Us</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <span className="text-blue-100">+44 20 1234 5678</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <span className="text-blue-100">info@raviqueclimate.co.uk</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <span className="text-blue-100">123 Climate St, London, UK</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Business Hours</h4>
            <ul className="space-y-2 text-blue-100 mb-4">
              <li>Mon - Fri: 8:00 AM - 6:00 PM</li>
              <li>Saturday: 9:00 AM - 4:00 PM</li>
              <li>Sunday: Closed</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-primary-light/30">
        <div className="container-custom py-6 text-center text-blue-100 text-sm">
          © 2026 Ravique Climate. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
