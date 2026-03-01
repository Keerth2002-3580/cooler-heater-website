import Link from 'next/link';
import { Star, MessageCircle, Mail, Calendar, Check } from 'lucide-react';
import { products } from '../../../data/products';
import ProductImageGallery from '../../../components/ProductImageGallery';

export default function ProductDetailPage({ params }: { params: { slug: string } }) {
  const product = products.find(p => p.slug === params.slug);

  if (!product) {
    return (
      <div className="container-custom py-20 text-center">
        <h1 className="text-3xl font-bold mb-4">Product Not Found</h1>
        <Link href="/products">
          <button className="px-6 py-3 bg-primary text-white rounded-2xl font-medium hover:bg-primary-dark transition-all shadow-md">
            Back to Products
          </button>
        </Link>
      </div>
    );
  }

  const relatedProducts = products
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 3);

  return (
    <div className="py-12 bg-background">
      <div className="container-custom">
        <div className="mb-8 text-sm text-gray-600">
          <Link href="/" className="hover:text-primary">Home</Link>
          <span className="mx-2">/</span>
          <Link href="/products" className="hover:text-primary">Products</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-900">{product.name}</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <ProductImageGallery images={product.images} name={product.name} />

          <div>
            <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium mb-4 ${
              product.inStock ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
            }`}>
              {product.inStock ? 'In Stock' : 'Out of Stock'}
            </span>
            <h1 className="text-4xl font-bold mb-4">{product.name}</h1>
            <div className="flex items-center gap-4 mb-6">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-5 h-5 ${
                      i < Math.floor(product.rating)
                        ? 'fill-yellow-400 text-yellow-400'
                        : 'text-gray-300'
                    }`}
                  />
                ))}
              </div>
              <span className="text-gray-600">{product.rating} ({product.reviews} reviews)</span>
            </div>
            <p className="text-3xl font-bold text-primary mb-6">
              £{product.price.min} - £{product.price.max}
            </p>
            <p className="text-gray-700 mb-6">{product.description}</p>

            <div className="mb-8">
              <h3 className="font-semibold text-lg mb-4">Key Features</h3>
              <ul className="space-y-2">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-3">
              <a href="https://wa.me/447000000000" target="_blank" rel="noopener noreferrer" className="block">
                <button className="w-full px-8 py-4 bg-primary text-white rounded-2xl font-medium hover:bg-primary-dark transition-all shadow-md flex items-center justify-center gap-2">
                  <MessageCircle className="w-5 h-5" />
                  WhatsApp Quote
                </button>
              </a>
              <button className="w-full px-8 py-4 border-2 border-primary text-primary rounded-2xl font-medium hover:bg-primary hover:text-white transition-all flex items-center justify-center gap-2">
                <Mail className="w-5 h-5" />
                Email Quote
              </button>
              <Link href="/services">
                <button className="w-full px-8 py-4 bg-secondary text-gray-900 rounded-2xl font-medium hover:bg-secondary-dark transition-all flex items-center justify-center gap-2">
                  <Calendar className="w-5 h-5" />
                  Book Service
                </button>
              </Link>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-md p-8 mb-16">
          <h2 className="text-2xl font-bold mb-6">Technical Specifications</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {Object.entries(product.specs).map(([key, value]) => (
              <div key={key} className="flex justify-between py-3 border-b border-gray-200">
                <span className="font-medium capitalize">{key}</span>
                <span className="text-gray-600">{value}</span>
              </div>
            ))}
          </div>
        </div>

        {relatedProducts.length > 0 && (
          <div>
            <h2 className="text-2xl font-bold mb-6">Related Products</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedProducts.map((relatedProduct) => (
                <Link key={relatedProduct.id} href={`/products/${relatedProduct.slug}`}>
                  <div className="bg-white rounded-2xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                    <div className="aspect-square bg-gray-200 overflow-hidden">
                      <img
                        src={relatedProduct.image}
                        alt={relatedProduct.name}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="font-semibold text-lg mb-2">{relatedProduct.name}</h3>
                      <div className="flex items-center gap-2 mb-2">
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`w-4 h-4 ${
                                i < Math.floor(relatedProduct.rating)
                                  ? 'fill-yellow-400 text-yellow-400'
                                  : 'text-gray-300'
                              }`}
                            />
                          ))}
                        </div>
                        <span className="text-sm text-gray-600">({relatedProduct.reviews})</span>
                      </div>
                      <p className="text-primary font-bold text-lg">
                        £{relatedProduct.price.min} - £{relatedProduct.price.max}
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
