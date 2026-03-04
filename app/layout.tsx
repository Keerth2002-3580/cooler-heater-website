import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import AntigravityHeader from "@/components/antigravity/AntigravityHeader";

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: "Ravique Climate - Premium Climate Control Solutions",
  description: "Experience liftoff with next-generation climate control systems. Energy-efficient, smart, and designed for modern living.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className={`${inter.className} antialiased`}>
        <AntigravityHeader />
        {children}
        
        {/* Minimal Footer */}
        <footer className="border-t border-gray-200 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
              <div>
                <h3 className="font-semibold text-gray-900 mb-4 text-sm">Product</h3>
                <ul className="space-y-2">
                  <li><a href="/products" className="text-gray-600 hover:text-gray-900 text-sm transition-colors">Features</a></li>
                  <li><a href="/quote" className="text-gray-600 hover:text-gray-900 text-sm transition-colors">Pricing</a></li>
                  <li><a href="/products" className="text-gray-600 hover:text-gray-900 text-sm transition-colors">Catalog</a></li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-4 text-sm">Company</h3>
                <ul className="space-y-2">
                  <li><a href="/about" className="text-gray-600 hover:text-gray-900 text-sm transition-colors">About</a></li>
                  <li><a href="/about" className="text-gray-600 hover:text-gray-900 text-sm transition-colors">Blog</a></li>
                  <li><a href="/contact" className="text-gray-600 hover:text-gray-900 text-sm transition-colors">Contact</a></li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-4 text-sm">Resources</h3>
                <ul className="space-y-2">
                  <li><a href="/faq" className="text-gray-600 hover:text-gray-900 text-sm transition-colors">Documentation</a></li>
                  <li><a href="/faq" className="text-gray-600 hover:text-gray-900 text-sm transition-colors">Help Center</a></li>
                  <li><a href="/contact" className="text-gray-600 hover:text-gray-900 text-sm transition-colors">Support</a></li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-4 text-sm">Legal</h3>
                <ul className="space-y-2">
                  <li><a href="#" className="text-gray-600 hover:text-gray-900 text-sm transition-colors">Privacy</a></li>
                  <li><a href="#" className="text-gray-600 hover:text-gray-900 text-sm transition-colors">Terms</a></li>
                  <li><a href="#" className="text-gray-600 hover:text-gray-900 text-sm transition-colors">Security</a></li>
                </ul>
              </div>
            </div>
            <div className="pt-8 border-t border-gray-200 flex flex-col md:flex-row items-center justify-between gap-4">
              <p className="text-sm text-gray-600">
                © 2024 Ravique Climate. All rights reserved.
              </p>
              <div className="flex items-center gap-6">
                <a href="#" className="text-gray-600 hover:text-gray-900 text-sm transition-colors">Twitter</a>
                <a href="#" className="text-gray-600 hover:text-gray-900 text-sm transition-colors">LinkedIn</a>
                <a href="#" className="text-gray-600 hover:text-gray-900 text-sm transition-colors">GitHub</a>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
