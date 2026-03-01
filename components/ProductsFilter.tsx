'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import { Star, Filter } from 'lucide-react';
import { products, type Product } from '@/data/products';

export default function ProductsFilter() {
  const [category, setCategory] = useState<string>('all');
  const [priceRange, setPriceRange] = useState<number>(3000);
  const [brand, setBrand] = useState<string>('all');
  const [inStockOnly, setInStockOnly] = useState<boolean>(false);
  const [sortBy, setSortBy] = useState<string>('popular');
  const [showFilters, setShowFilters] = useState<boolean>(false);

  const brands = ['all', ...Array.from(new Set(products.map(p => p.brand)))];

  const filteredProducts = useMemo(() => {
    let filtered = products.filter(product => {
      if (category !== 'all' && product.category !== category) return false;
      if (brand !== 'all' && product.brand !== brand) return false;
      if (product.price.max > priceRange) return false;
      if (inStockOnly && !product.inStock) return false;
      return true;
    });

    if (sortBy === 'price-low') {
      filtered.sort((a, b) => a.price.min - b.price.min);
    } else if (sortBy === 'price-high') {
      filtered.sort((a, b) => b.price.max - a.price.max);
    } else if (sortBy === 'rating') {
      filtered.sort((a, b) => b.rating - a.rating);
    }

    return filtered;
  }, [category, brand, priceRange, inStockOnly, sortBy]);

  return (
    <div className="py-12 bg-background min-h-screen">
      <div className="container-custom">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-4">Our Products</h1>
          <p className="text-gray-600">Browse our premium selection of cooling and heating systems</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-64 flex-shrink-0">
            <div className="lg:hidden mb-4">
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="w-full px-6 py-3 border-2 border-primary text-primary rounded-2xl font-medium hover:bg-primary hover:text-white transition-all flex items-center justify-center gap-2"
              >
                <Filter className="w-4 h-4" />
                {showFilters ? 'Hide Filters' : 'Show Filters'}
              </button>
            </div>

            <div className={`space-y-6 ${showFilters ? 'block' : 'hidden lg:block'}`}>
              <div className="bg-white rounded-2xl shadow-md p-6">
                <h3 className="font-semibold mb-4">Filters</h3>

                <div className="mb-6">
                  <label className="block text-sm font-medium mb-2">Category</label>
                  <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
                  >
                    <option value="all">All Products</option>
                    <option value="cooler">Coolers</option>
                    <option value="heater">Heaters</option>
                  </select>
                </div>

                <div className="mb-6">
                  <label className="block text-sm font-medium mb-2">
                    Max Price: £{priceRange}
                  </label>
                  <input
                    type="range"
                    min="500"
                    max="3000"
                    step="100"
                    value={priceRange}
                    onChange={(e) => setPriceRange(Number(e.target.value))}
                    className="w-full"
                  />
                </div>

                <div className="mb-6">
                  <label className="block text-sm font-medium mb-2">Brand</label>
                  <select
                    value={brand}
                    onChange={(e) => setBrand(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
                  >
                    {brands.map(b => (
                      <option key={b} value={b}>{b === 'all' ? 'All Brands' : b}</option>
                    ))}
                  </select>
                </div>

                <div className="mb-6">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={inStockOnly}
                      onChange={(e) => setInStockOnly(e.target.checked)}
                      className="w-4 h-4 text-primary rounded"
                    />
                    <span className="text-sm font-medium">In Stock Only</span>
                  </label>
                </div>

                <button
                  onClick={() => {
                    setCategory('all');
                    setBrand('all');
                    setPriceRange(3000);
                    setInStockOnly(false);
                  }}
                  className="w-full px-4 py-2 border-2 border-primary text-primary rounded-xl font-medium hover:bg-primary hover:text-white transition-all"
                >
                  Reset Filters
                </button>
              </div>
            </div>
          </div>

          <div className="flex-1">
            <div className="flex items-center justify-between mb-6">
              <p className="text-gray-600">{filteredProducts.length} products found</p>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-48 px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
              >
                <option value="popular">Most Popular</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
              </select>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map((product) => (
                <Link key={product.id} href={`/products/${product.slug}`}>
                  <div className="bg-white rounded-2xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                    <div className="relative">
                      <div className="aspect-square bg-gray-200 overflow-hidden">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      {!product.inStock && (
                        <span className="absolute top-4 right-4 px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-xs font-medium">
                          Out of Stock
                        </span>
                      )}
                    </div>
                    <div className="p-6">
                      <span className="inline-block px-3 py-1 bg-secondary text-gray-900 rounded-full text-xs font-medium mb-2">
                        {product.category === 'cooler' ? 'Cooler' : 'Heater'}
                      </span>
                      <h3 className="font-semibold text-lg mb-2">{product.name}</h3>
                      <p className="text-sm text-gray-600 mb-2">{product.brand}</p>
                      <div className="flex items-center gap-2 mb-3">
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`w-4 h-4 ${
                                i < Math.floor(product.rating)
                                  ? 'fill-yellow-400 text-yellow-400'
                                  : 'text-gray-300'
                              }`}
                            />
                          ))}
                        </div>
                        <span className="text-sm text-gray-600">({product.reviews})</span>
                      </div>
                      <p className="text-sm text-gray-600 mb-3">
                        {product.specs.power} • {product.specs.coverage}
                      </p>
                      <p className="text-primary font-bold text-xl">
                        £{product.price.min} - £{product.price.max}
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            {filteredProducts.length === 0 && (
              <div className="text-center py-12 bg-white rounded-2xl shadow-md">
                <p className="text-gray-600 text-lg mb-4">No products found matching your filters.</p>
                <button
                  onClick={() => {
                    setCategory('all');
                    setBrand('all');
                    setPriceRange(3000);
                    setInStockOnly(false);
                  }}
                  className="px-6 py-3 border-2 border-primary text-primary rounded-2xl font-medium hover:bg-primary hover:text-white transition-all"
                >
                  Reset Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
