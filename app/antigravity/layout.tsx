import AntigravityHeader from '@/components/antigravity/AntigravityHeader';

export default function AntigravityLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-white">
      <AntigravityHeader />
      {children}
      
      {/* Simple Footer */}
      <footer className="border-t border-gray-200 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="font-semibold text-gray-900 mb-4">Product</h3>
              <ul className="space-y-2">
                <li><a href="/products" className="text-gray-600 hover:text-gray-900 text-sm">Features</a></li>
                <li><a href="/quote" className="text-gray-600 hover:text-gray-900 text-sm">Pricing</a></li>
                <li><a href="/products" className="text-gray-600 hover:text-gray-900 text-sm">Integrations</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-4">Company</h3>
              <ul className="space-y-2">
                <li><a href="/about" className="text-gray-600 hover:text-gray-900 text-sm">About</a></li>
                <li><a href="/about" className="text-gray-600 hover:text-gray-900 text-sm">Blog</a></li>
                <li><a href="/contact" className="text-gray-600 hover:text-gray-900 text-sm">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-4">Resources</h3>
              <ul className="space-y-2">
                <li><a href="/faq" className="text-gray-600 hover:text-gray-900 text-sm">Documentation</a></li>
                <li><a href="/faq" className="text-gray-600 hover:text-gray-900 text-sm">Help Center</a></li>
                <li><a href="/contact" className="text-gray-600 hover:text-gray-900 text-sm">Support</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-4">Legal</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-600 hover:text-gray-900 text-sm">Privacy</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900 text-sm">Terms</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900 text-sm">Security</a></li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-gray-200 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-gray-600">
              © 2024 Ravique Climate. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <a href="#" className="text-gray-600 hover:text-gray-900 text-sm">Twitter</a>
              <a href="#" className="text-gray-600 hover:text-gray-900 text-sm">LinkedIn</a>
              <a href="#" className="text-gray-600 hover:text-gray-900 text-sm">GitHub</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
