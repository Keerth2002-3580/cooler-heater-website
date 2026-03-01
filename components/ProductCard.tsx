import Link from 'next/link';
import { Star } from 'lucide-react';
import type { Product } from '@/data/products';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <Link href={`/products/${product.slug}`} className="w-full">
      <div className="bg-white border border-border rounded-2xl shadow-sm overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:border-accent/50 h-full w-full">
        <div className="aspect-square bg-gray-100 overflow-hidden w-full">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="p-3 md:p-4 lg:p-6">
          <h3 className="font-bold text-sm md:text-base lg:text-lg mb-2 text-gray-900 line-clamp-2">{product.name}</h3>
          <div className="flex items-center gap-2 mb-3">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-3 h-3 md:w-4 md:h-4 ${
                    i < Math.floor(product.rating)
                      ? 'fill-accent text-accent'
                      : 'text-gray-300'
                  }`}
                />
              ))}
            </div>
            <span className="text-xs md:text-sm text-gray-600">({product.reviews})</span>
          </div>
          <p className="text-primary font-bold text-base md:text-lg lg:text-xl">
            £{product.price.min} - £{product.price.max}
          </p>
        </div>
      </div>
    </Link>
  );
}
