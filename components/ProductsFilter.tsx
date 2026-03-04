'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import { Star, Filter, X } from 'lucide-react';
import { products, type Product } from '@/data/products';
import Image from 'next/image';

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
    <div className="py-12 bg-[#FBFBFD] min-h-screen">
      <div className="container-custom">
        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="text-5xl font-bold mb-4 text-gray-900 tracking-tight">Our Products</h1>
          <p className="text-xl text-gray-600">Browse our premium selection of climate control systems</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <div className="lg:w-80 flex-shrink-0">
            {/* Mobile Filter Toggle */}
            <div className="lg:hidden mb-4">
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-white border border-gray-200 rounded-full text-gray-900 font-medium hover:border-gray-300 transition-colors"
              >
                <Filter className="w-5 h-5" />
                {showFilters ? 'Hide Filters' : 'Show Filters'}
              </button>
            </div>

            {/* Filter Panel */}
            <div className={`${showFilters ? 'block' : 'hidden'} lg:block`}>
              <div className="card-light p-6 space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold text-gray-900">Filters</h3>
                  <button
                    onClick={() => {
                      setCategory('all');
                      setBrand('all');
                      setPriceRange(3000);
                      setInStockOnly(false);
                    }}
                    className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
                  >
                    Clear all
                  </button>
                </div>

                {/* Category */}
                <div>
                  <label className="block text-sm font-medium text-gray-900 mb-3">Category</label>
                  <div className="space-y-2">
                    {['all', 'cooler', 'heater'].map((cat) => (
                      <label key={cat} className="flex items-center cursor-pointer group">
                        <input
                          type="radio"
                          name="category"
                          value={cat}
                          checked={category === cat}
                          onChange={(e) => setCategory(e.target.value)}
                          className="w-4 h-4 text-black border-gray-300 focus:ring-black"
                        />
                        <span className="ml-3 text-sm text-gray-600 group-hover:text-gray-900 capitalize">
                          {cat === 'all' ? 'All Products' : cat + 's'}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Brand */}
                <div>
                  <label className="block text-sm font-medium text-gray-900 mb-3">Brand</label>
                  <select
                    value={brand}
                    onChange={(e) => setBrand(e.target.value)}
                    className="w-full px-4 py-2 bg-white border border-gray-200 rounded-xl text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                  >
                    {brands.map(b => (
                      <option key={b} value={b}>{b === 'all' ? 'All Brands' : b}</option>
                    ))}
                  </select>
                </div>

                {/* Price Range */}
                <div>
                  <label className="block text-sm font-medium text-gray-900 mb-3">
                    Max Price: £{priceRange}
                  </label>
                  <input
                    type="range"
                    min="0"
                    max="3000"
                    step="100"
                    value={priceRange}
                    onChange={(e) => setPriceRange(Number(e.target.value))}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-black"
                  />
                </div>

                {/* In Stock */}
                <div>
                  <label className="flex items-center cursor-pointer group">
                    <input
                      type="checkbox"
                      checked={inStockOnly}
                      onChange={(e) => setInStockOnly(e.target.checked)}
                      className="w-4 h-4 text-black border-gray-300 rounded focus:ring-black"
                    />
                    <span className="ml-3 text-sm text-gray-600 group-hover:text-gray-900">
                      In stock only
                    </span>
                  </label>
                </div>
              </div>
            </div>
          </div>

          {/* Products Grid */}
          <div className="flex-1">
            {/* Sort Bar */}
            <div className="flex items-center justify-between mb-8">
              <p className="text-sm text-gray-600">
                {filteredProducts.length} {filteredProducts.length === 1 ? 'product' : 'products'} found
              </p>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-2 bg-white border border-gray-200 rounded-full text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
              >
                <option value="popular">Most Popular</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
              </select>
            </div>

            {/* Products Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map((product) => (
                <Link key={product.id} href={`/products/${product.slug}`}>
                  <div className="card-light overflow-hidden group">
                    {/* Image */}
                    <div className="relative aspect-square bg-gray-100 overflow-hidden">
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                      {!product.inStock && (
                        <div className="absolute top-4 right-4 px-3 py-1 bg-white rounded-full text-xs font-medium text-gray-900 border border-gray-200">
                          Out of Stock
                        </div>
                      )}
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <h3 className="font-bold text-lg text-gray-900 mb-2 line-clamp-1">
                        {product.name}
                      </h3>
                      
                      <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                        {product.description}
                      </p>

                      {/* Rating */}
                      <div className="flex items-center gap-2 mb-4">
                        <div className="flex items-center">
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
                        <span className="text-sm text-gray-600">
                          {product.rating} ({product.reviews})
                        </span>
                      </div>

                      {/* Price */}
                      <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                        <div>
                          <div className="text-2xl font-bold text-gray-900">
                            £{product.price.min}
                          </div>
                          <div className="text-xs text-gray-500">Starting from</div>
                        </div>
                        <button className="px-4 py-2 bg-black text-white rounded-full text-sm font-medium hover:bg-gray-800 transition-colors">
                          View Details
                        </button>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            {filteredProducts.length === 0 && (
              <div className="card-light p-12 text-center">
                <p className="text-gray-600 text-lg">
                  No products found matching your filters. Try adjusting your selection.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
