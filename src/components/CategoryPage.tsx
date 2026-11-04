'use client';

import React, { useState, useMemo } from 'react';
import { Product } from '../types';
import { ProductCard } from './ProductCard';
import { ChevronDown, ArrowLeft, SlidersHorizontal } from 'lucide-react';

interface CategoryPageProps {
  categoryId: string;
  products: Product[];
  wishlist: string[];
  onToggleWishlist: (productId: string) => void;
  onOpenDetails: (product: Product) => void;
  onAddToCart: (product: Product, size?: string, color?: string) => void;
  onBackToHome: () => void;
  onSelectCategory: (categoryId: string) => void;
}

export const CategoryPage: React.FC<CategoryPageProps> = ({
  categoryId,
  products = [],
  wishlist = [],
  onToggleWishlist,
  onOpenDetails,
  onAddToCart,
  onBackToHome,
  onSelectCategory
}) => {
  const [sortBy, setSortBy] = useState('popular');
  const [selectedSize, setSelectedSize] = useState('all');

  const categoryMeta: Record<string, { title: string; subtitle: string; desc: string }> = {
    silk: {
      title: 'ROYAL SILK PANJABI',
      subtitle: 'Pure Mulberry & Tussar Silk Collection',
      desc: '100% pure Mulberry silk and Tussar handloom weaves adorned with intricate metallic zari and handcrafted zardozi.'
    },
    katan: {
      title: 'DESIGNER KATAN PANJABI',
      subtitle: 'Imperial Varanasi & Jamdani Weave',
      desc: 'Authentic Varanasi katan silk jacquard motifs designed for prestigious celebrations, weddings, and Eid festivities.'
    },
    kabli: {
      title: 'KABLI SUIT SET',
      subtitle: 'Tailored Sultanate Jubbah & Trouser Pyjama',
      desc: 'Complete premium two-piece sets crafted from wrinkle-resistant Super 120s Egyptian mercerized cotton.'
    },
    wedding: {
      title: 'GROOM & WEDDING SHERWANI',
      subtitle: 'Artisanal Wedding Couture for Grooms',
      desc: 'Handcrafted master embroidery and heirloom grandeur tailored exclusively for memorable ceremonies.'
    },
    cotton: {
      title: 'FINE COTTON & LINEN',
      subtitle: 'Breathable Lucknowi Chikankari & Pure Linen',
      desc: 'Ultra-breathable natural cotton fibers offering supreme comfort and understated timeless elegance.'
    },
    attar: {
      title: 'NAWABI OUD & PERFUMERY',
      subtitle: 'Artisanal Alcohol-Free Attar & Wild Agarwood',
      desc: 'Pure Cambodian wild agarwood, royal white musk, and distilled floral notes evoking aristocratic heritage.'
    }
  };

  const currentMeta = categoryMeta[categoryId] || {
    title: 'NAWABIYAAT COLLECTION',
    subtitle: 'Exclusive Atelier Signature Collection',
    desc: 'Bespoke handloom craftsmanship and royal tailoring from the Nawabiyaat Atelier.'
  };

  // Filter and Sort category items
  const categoryProducts = useMemo(() => {
    let list = products.filter((p) => p.category === categoryId);

    if (selectedSize !== 'all') {
      list = list.filter((p) => p.sizes && p.sizes.some((s) => s.includes(selectedSize)));
    }

    if (sortBy === 'low-high') list.sort((a, b) => a.price - b.price);
    else if (sortBy === 'high-low') list.sort((a, b) => b.price - a.price);
    else if (sortBy === 'rating') list.sort((a, b) => b.rating - a.rating);
    else if (sortBy === 'popular') list.sort((a, b) => b.reviewsCount - a.reviewsCount);

    return list;
  }, [products, categoryId, sortBy, selectedSize]);

  return (
    <div className="bg-white min-h-screen text-stone-900 pb-20 text-left">
      
      {/* 1. Breadcrumbs */}
      <div className="max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12 pt-6 pb-4">
        <nav className="flex items-center gap-2 text-xs text-stone-400 font-sans uppercase tracking-widest">
          <button 
            onClick={onBackToHome}
            className="hover:text-black transition-colors flex items-center gap-1 cursor-pointer"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>HOME</span>
          </button>
          <span>/</span>
          
          {/* Clickable COLLECTIONS with dropdown */}
          <div className="relative group inline-block">
            <button 
              className="text-stone-600 hover:text-black transition-colors flex items-center gap-1 font-semibold cursor-pointer"
            >
              <span>COLLECTIONS</span>
              <ChevronDown className="w-3.5 h-3.5 text-stone-400 group-hover:text-black transition-transform group-hover:rotate-180" />
            </button>

            <div className="absolute left-0 top-full mt-1.5 w-60 bg-white border border-stone-200 shadow-xl py-2 z-50 hidden group-hover:block transition-all">
              <button 
                onClick={() => onSelectCategory('silk')}
                className="w-full text-left px-4 py-2 text-xs hover:bg-stone-50 text-stone-700 hover:text-black font-semibold cursor-pointer"
              >
                ROYAL SILK
              </button>
              <button 
                onClick={() => onSelectCategory('katan')}
                className="w-full text-left px-4 py-2 text-xs hover:bg-stone-50 text-stone-700 hover:text-black font-semibold cursor-pointer"
              >
                DESIGNER KATAN
              </button>
              <button 
                onClick={() => onSelectCategory('kabli')}
                className="w-full text-left px-4 py-2 text-xs hover:bg-stone-50 text-stone-700 hover:text-black font-semibold cursor-pointer"
              >
                KABLI SUIT SET
              </button>
              <button 
                onClick={() => onSelectCategory('wedding')}
                className="w-full text-left px-4 py-2 text-xs hover:bg-stone-50 text-stone-700 hover:text-black font-semibold cursor-pointer"
              >
                WEDDING & GROOM
              </button>
              <button 
                onClick={() => onSelectCategory('cotton')}
                className="w-full text-left px-4 py-2 text-xs hover:bg-stone-50 text-stone-700 hover:text-black font-semibold cursor-pointer"
              >
                FINE COTTON
              </button>
              <button 
                onClick={() => onSelectCategory('attar')}
                className="w-full text-left px-4 py-2 text-xs hover:bg-stone-50 text-stone-700 hover:text-black font-semibold cursor-pointer"
              >
                NAWABI OUD
              </button>
            </div>
          </div>

          <span>/</span>
          <span className="text-black font-bold">{currentMeta.title}</span>
        </nav>
      </div>

      {/* 2. Category Hero Header */}
      <div className="bg-stone-50 border-y border-stone-200 py-10 md:py-14 mb-8">
        <div className="max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12 text-center max-w-3xl">
          <span className="text-[10px] font-bold tracking-[0.25em] text-amber-800 uppercase block mb-1">
            NAWABIYAAT ATELIER
          </span>
          <h1 className="text-2xl sm:text-4xl font-black uppercase tracking-tight text-stone-900 mb-2">
            {currentMeta.title}
          </h1>
          <p className="text-sm font-semibold text-stone-700 mb-2 font-bangla">
            {currentMeta.subtitle}
          </p>
          <p className="text-xs text-stone-500 leading-relaxed max-w-xl mx-auto font-bangla">
            {currentMeta.desc}
          </p>
        </div>
      </div>

      {/* 3. Filter Controls & Product Count */}
      <div className="max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12 mb-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pb-4 border-b border-stone-200">
          
          {/* Size Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto w-full sm:w-auto text-xs">
            <span className="text-stone-400 font-semibold uppercase tracking-wider text-[11px]">Size:</span>
            {['all', '38', '40', '42', '44'].map((size) => (
              <button
                key={size}
                onClick={() => setSelectedSize(size)}
                className={`px-3 py-1 text-xs font-semibold uppercase tracking-wider transition-colors cursor-pointer ${
                  selectedSize === size
                    ? 'bg-black text-white'
                    : 'bg-stone-100 text-stone-600 hover:bg-stone-200 hover:text-black'
                }`}
              >
                {size === 'all' ? 'All' : size}
              </button>
            ))}
          </div>

          {/* Sort By Dropdown */}
          <div className="flex items-center gap-3 w-full sm:w-auto justify-between sm:justify-end">
            <span className="text-xs text-stone-500 font-sans font-medium">
              Showing {categoryProducts.length} items
            </span>

            <div className="relative">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="bg-stone-50 border border-stone-200 text-stone-800 text-xs py-2 px-3 pr-8 focus:outline-none focus:border-black cursor-pointer rounded-none appearance-none font-semibold uppercase tracking-wider"
              >
                <option value="popular">Popularity</option>
                <option value="low-high">Price: Low to High</option>
                <option value="high-low">Price: High to Low</option>
                <option value="rating">Top Rated</option>
              </select>
              <SlidersHorizontal className="w-3.5 h-3.5 text-stone-400 absolute right-2.5 top-2.5 pointer-events-none" />
            </div>
          </div>

        </div>
      </div>

      {/* 4. Products Grid */}
      <div className="max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12">
        {categoryProducts.length === 0 ? (
          <div className="py-20 text-center space-y-4 max-w-md mx-auto">
            <h3 className="text-base font-bold text-stone-800">No items found</h3>
            <p className="text-xs text-stone-500">Please adjust your filter options to see more products.</p>
            <button
              onClick={() => setSelectedSize('all')}
              className="px-6 py-2 bg-black text-white text-xs font-bold uppercase tracking-wider cursor-pointer"
            >
              Reset Size Filter
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-5 gap-4 sm:gap-6 lg:gap-8">
            {categoryProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                isWishlisted={wishlist.includes(product.id)}
                onToggleWishlist={onToggleWishlist}
                onOpenDetails={onOpenDetails}
                onAddToCart={onAddToCart}
              />
            ))}
          </div>
        )}
      </div>

    </div>
  );
};
