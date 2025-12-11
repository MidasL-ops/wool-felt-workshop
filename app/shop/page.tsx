'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { products } from '@/data/products';
import { ProductCategory } from '@/types';

const categories: ProductCategory[] = ['全部', '吊飾', '擺飾', '圍巾', 'IP系列', '其他'] as any;

export default function Shop() {
  const [selectedCategory, setSelectedCategory] = useState<ProductCategory | '全部'>('全部');

  const filteredProducts = selectedCategory === '全部'
    ? products
    : products.filter(p => p.category === selectedCategory);

  return (
    <div className="min-h-screen bg-cloud-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/30 via-cream-yellow/20 to-primary/20 py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <div className="mb-6 inline-block">
              <span className="text-6xl">🛍️</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              商品列表
            </h1>
            <p className="text-xl text-text-secondary">
              找到屬於你的療癒小物
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-white border-b border-peach-pink/20 sticky top-20 z-40">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full font-medium transition-colors ${
                  selectedCategory === category
                    ? 'bg-primary text-white'
                    : 'bg-primary/20 text-foreground hover:bg-primary/30'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {filteredProducts.map((product) => (
                <Link
                  key={product.id}
                  href={`/shop/${product.id}`}
                  className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                >
                  <div className="relative h-64 bg-gradient-to-br from-primary/20 to-cream-yellow/20 flex items-center justify-center overflow-hidden">
                    {product.images && product.images.length > 0 ? (
                      <Image
                        src={product.images[0]}
                        alt={product.name}
                        width={400}
                        height={400}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <span className="text-6xl">🧶</span>
                    )}
                    {product.originalPrice && (
                      <span className="absolute top-4 right-4 bg-primary text-white px-3 py-1 rounded-full text-sm font-medium">
                        特價
                      </span>
                    )}
                    {!product.inStock && (
                      <span className="absolute top-4 left-4 bg-gray-400 text-white px-3 py-1 rounded-full text-sm font-medium">
                        缺貨
                      </span>
                    )}
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-accent bg-primary/10 px-3 py-1 rounded-full">
                        {product.category}
                      </span>
                      {product.customizable && (
                        <span className="text-xs text-text-secondary">可訂製</span>
                      )}
                    </div>
                    <h3 className="text-xl font-semibold text-heading-card mb-2 group-hover:text-accent transition-colors">
                      {product.name}
                    </h3>
                    <p className="text-text-secondary text-sm mb-4 line-clamp-2">
                      {product.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <div>
                        {product.originalPrice && (
                          <span className="text-sm text-text-secondary line-through mr-2">
                            NT$ {product.originalPrice}
                          </span>
                        )}
                        <span className="text-2xl font-bold text-accent">
                          NT$ {product.price}
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <span className="text-6xl mb-4 block">🔍</span>
              <p className="text-xl text-text-secondary mb-8">
                目前沒有此類別的商品
              </p>
              <button
                onClick={() => setSelectedCategory('全部')}
                className="inline-block px-8 py-3 bg-primary text-white rounded-full font-medium hover:bg-primary/90 transition-colors"
              >
                查看全部商品
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}


