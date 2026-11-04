'use client';

import React, { useState } from 'react';
import { Product } from '../types';
import { ShoppingBag, Heart, Check, Sparkles, Eye } from 'lucide-react';

interface ProductCardProps {
  product: Product;
  isWishlisted: boolean;
  onToggleWishlist: (productId: string) => void;
  onOpenDetails: (product: Product) => void;
  onAddToCart: (product: Product, size?: string, color?: string) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  isWishlisted,
  onToggleWishlist,
  onOpenDetails,
  onAddToCart
}) => {
  const [selectedSize, setSelectedSize] = useState<string>(
    product.sizes && product.sizes.length > 0 ? product.sizes[0] : 'Standard'
  );
  const [isAddedToast, setIsAddedToast] = useState(false);

  const handleQuickAdd = (e: React.MouseEvent) => {
    e.stopPropagation();
    onAddToCart(product, selectedSize, product.colors?.[0]?.name || '');
    setIsAddedToast(true);
    setTimeout(() => setIsAddedToast(false), 1800);
  };

  return (
    <div className="group bg-white rounded-xl border border-stone-200 hover:border-amber-400/60 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden text-left font-sans">
      
      {/* 1. Portrait Image Container */}
      <div>
        <div 
          className="relative aspect-[3/4] bg-[#f5f5f7] overflow-hidden cursor-pointer"
          onClick={() => onOpenDetails(product)}
        >
          <img 
            src={product.image} 
            alt={product.nameBangla} 
            className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
            loading="lazy"
          />

          {/* Badges */}
          <div className="absolute top-3 left-3 flex flex-col gap-1.5 z-10 pointer-events-none">
            {product.badge && (
              <span className="bg-black/90 backdrop-blur-sm text-white text-[9px] uppercase tracking-wider font-extrabold px-2.5 py-1 rounded-sm border border-white/20">
                {product.badge}
              </span>
            )}
            {product.discountPercentage && (
              <span className="bg-amber-600 text-white text-[9px] font-bold px-2 py-0.5 rounded-sm">
                -{product.discountPercentage}% OFF
              </span>
            )}
          </div>

          {/* Wishlist Button */}
          <button 
            onClick={(e) => {
              e.stopPropagation();
              onToggleWishlist(product.id);
            }}
            className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center text-stone-700 hover:text-red-500 shadow-md transition-all active:scale-90 cursor-pointer z-10"
            title="Wishlist"
          >
            <Heart className={`w-4 h-4 ${isWishlisted ? 'text-red-500 fill-red-500' : 'text-stone-400'}`} />
          </button>

          {/* Quick View Floating Action */}
          <div className="absolute inset-x-3 bottom-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 hidden sm:block">
            <button
              onClick={(e) => {
                e.stopPropagation();
                onOpenDetails(product);
              }}
              className="w-full py-2 bg-black/85 hover:bg-black text-white text-[11px] font-bold uppercase tracking-wider backdrop-blur-md rounded-lg flex items-center justify-center gap-1.5 shadow-lg cursor-pointer transition-colors"
            >
              <Eye className="w-3.5 h-3.5" />
              <span>বিস্তারিত দেখুন (QUICK VIEW)</span>
            </button>
          </div>
        </div>

        {/* 2. Product Information Details */}
        <div className="p-4 sm:p-5">
          
          <div className="flex items-center justify-between mb-1">
            <span className="text-[10px] tracking-[0.2em] uppercase text-amber-800 font-bold">
              {product.category === 'silk'
                ? 'ROYAL SILK'
                : product.category === 'katan'
                ? 'DESIGNER KATAN'
                : product.category === 'kabli'
                ? 'KABLI SUIT'
                : product.category === 'wedding'
                ? 'WEDDING & GROOM'
                : product.category === 'cotton'
                ? 'FINE COTTON'
                : 'NAWABI OUD'}
            </span>

            {product.rating && (
              <span className="text-[11px] text-amber-700 font-bold flex items-center gap-0.5">
                ★ {product.rating}
              </span>
            )}
          </div>

          <h3 
            onClick={() => onOpenDetails(product)}
            className="font-bold text-stone-900 text-sm sm:text-base leading-snug hover:text-amber-800 cursor-pointer line-clamp-1 mb-1 font-bangla"
            title={product.nameBangla}
          >
            {product.nameBangla}
          </h3>

          <p className="text-[11px] text-stone-400 font-sans tracking-wide uppercase truncate mb-2">
            {product.nameEnglish}
          </p>

          <p className="text-[11px] text-stone-500 truncate mb-3 font-bangla">
            ✓ {product.fabric}
          </p>

          {/* Quick Size Pill Selector */}
          {product.sizes && product.sizes.length > 0 && product.category !== 'attar' && (
            <div className="mb-3 flex items-center gap-1.5">
              <span className="text-[10px] text-stone-400 uppercase font-semibold">সাইজ:</span>
              <div className="flex items-center gap-1">
                {product.sizes.map((s) => (
                  <button
                    key={s}
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedSize(s);
                    }}
                    className={`px-2 py-0.5 text-[10px] font-bold rounded transition-all cursor-pointer ${
                      selectedSize === s
                        ? 'bg-stone-900 text-white'
                        : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
                    }`}
                  >
                    {s.split(' ')[0]}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Price */}
          <div className="flex items-baseline gap-2 pt-1 border-t border-stone-100">
            <span className="text-base sm:text-lg font-bold text-stone-950 font-serif">
              ৳{product.price.toLocaleString('en-US')}
            </span>
            {product.originalPrice && (
              <span className="text-xs text-stone-400 line-through">
                ৳{product.originalPrice.toLocaleString('en-US')}
              </span>
            )}
          </div>

        </div>
      </div>

      {/* 3. Add to Cart Button */}
      <div className="p-4 sm:p-5 pt-0">
        <button 
          onClick={handleQuickAdd}
          className={`w-full py-3 rounded-lg font-bold text-xs uppercase tracking-widest transition-all flex items-center justify-center gap-2 cursor-pointer shadow-sm active:scale-[0.98] ${
            isAddedToast
              ? 'bg-emerald-600 text-white'
              : 'bg-stone-900 hover:bg-stone-800 text-white'
          }`}
        >
          {isAddedToast ? (
            <>
              <Check className="w-4 h-4 text-white" />
              <span>কার্টে যুক্ত হয়েছে!</span>
            </>
          ) : (
            <>
              <ShoppingBag className="w-3.5 h-3.5 text-amber-300" />
              <span>কার্টে যোগ করুন</span>
            </>
          )}
        </button>
      </div>

    </div>
  );
};