import { products } from '@/data/products';
import ProductCard from './ProductCard';

export default function ProductGrid() {
  const featuredProducts = products.slice(0, 4);

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4 lg:gap-6">
      {featuredProducts.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
