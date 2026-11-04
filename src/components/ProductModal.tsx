'use client';

import React, { useState } from 'react';
import { Product } from '../types';
import { X, Star, Ruler, ShoppingBag, Zap, Check, MessageCircle, Truck, RotateCcw, ShieldCheck } from 'lucide-react';

interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
  onAddToCart: (product: Product, size?: string, color?: string, quantity?: number) => void;
  onBuyNowDirect: (product: Product, size?: string, color?: string) => void;
  onOpenSizeAdvisor: () => void;
}

export const ProductModal: React.FC<ProductModalProps> = ({
  product,
  onClose,
  onAddToCart,
  onBuyNowDirect,
  onOpenSizeAdvisor
}) => {
  if (!product) return null;

  const [selectedSize, setSelectedSize] = useState<string>(
    product.sizes && product.sizes.length > 0 ? product.sizes[0] : 'Standard'
  );
  const [selectedColor, setSelectedColor] = useState<string>(
    product.colors && product.colors.length > 0 ? product.colors[0].name : ''
  );
  const [quantity, setQuantity] = useState(1);

  const handleWhatsApp = () => {
    const text = encodeURIComponent(
      `Hello Nawabiyaat Atelier, I would like to inquire about "${product.nameEnglish || product.nameBangla}" - Size: ${selectedSize}. Price: BDT ${product.price}`
    );
    window.open(`https://wa.me/8801700000000?text=${text}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/80 backdrop-blur-sm overflow-y-auto">
      <div className="relative w-full max-w-4xl bg-white border border-stone-200 shadow-2xl overflow-hidden my-auto max-h-[92vh] flex flex-col md:flex-row text-left">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 bg-white/80 hover:bg-black hover:text-white rounded-full transition-colors cursor-pointer"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Left: Product Image */}
        <div className="md:w-1/2 p-6 bg-stone-50 flex items-center justify-center">
          <div className="relative aspect-[3/4] w-full max-w-sm overflow-hidden bg-white shadow-sm border border-stone-200">
            <img
              src={product.image}
              alt={product.nameBangla}
              className="w-full h-full object-cover object-top"
            />
            {product.badge && (
              <span className="absolute top-3 left-3 bg-black text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1">
                {product.badge}
              </span>
            )}
          </div>
        </div>

        {/* Right: Details & Purchase */}
        <div className="md:w-1/2 p-6 md:p-8 overflow-y-auto space-y-5">
          <div>
            <div className="flex items-center justify-between text-xs text-stone-500 mb-1">
              <span className="uppercase tracking-widest font-bold text-stone-400">
                {product.category}
              </span>
              <div className="flex items-center gap-1 text-amber-500">
                <Star className="w-3.5 h-3.5 fill-current" />
                <span className="font-bold text-stone-800">{product.rating}</span>
                <span className="text-stone-400">({product.reviewsCount} reviews)</span>
              </div>
            </div>

            <h2 className="text-lg sm:text-xl font-bold text-stone-900 leading-tight">
              {product.nameBangla}
            </h2>
            <p className="text-xs text-stone-400 uppercase tracking-wider mt-0.5">
              {product.nameEnglish}
            </p>

            {/* Price */}
            <div className="flex items-baseline gap-3 mt-3">
              <span className="text-2xl font-bold font-serif text-stone-950">
                BDT {product.price.toLocaleString('en-US')}
              </span>
              {product.originalPrice && (
                <span className="text-sm text-stone-400 line-through">
                  BDT {product.originalPrice.toLocaleString('en-US')}
                </span>
              )}
              {product.discountPercentage && (
                <span className="text-xs bg-black text-white font-bold px-2 py-0.5">
                  -{product.discountPercentage}%
                </span>
              )}
            </div>
          </div>

          {/* Description */}
          <p className="text-xs text-stone-600 leading-relaxed">
            {product.description}
          </p>

          {/* Fabric / Fragrance Specs */}
          {product.fabric && (
            <div className="text-xs text-stone-700 bg-stone-50 p-2.5 border border-stone-200">
              <strong>Fabric Specification:</strong> {product.fabric}
            </div>
          )}

          {product.fragranceNotes && (
            <div className="text-xs text-stone-700 bg-amber-50/50 p-2.5 border border-amber-200/60 space-y-1">
              <div><strong>Top Note:</strong> {product.fragranceNotes.top}</div>
              <div><strong>Heart Note:</strong> {product.fragranceNotes.heart}</div>
              <div><strong>Base Note:</strong> {product.fragranceNotes.base}</div>
            </div>
          )}

          {/* Color Selection */}
          {product.colors && product.colors.length > 0 && (
            <div className="space-y-2">
              <span className="text-xs font-bold text-stone-800 uppercase tracking-wider">
                Color: <span className="font-normal text-stone-600">{selectedColor}</span>
              </span>
              <div className="flex items-center gap-2">
                {product.colors.map((c) => (
                  <button
                    key={c.name}
                    onClick={() => setSelectedColor(c.name)}
                    className={`w-7 h-7 rounded-full border-2 flex items-center justify-center transition-all cursor-pointer ${
                      selectedColor === c.name ? 'border-black scale-110 shadow-sm' : 'border-stone-300'
                    }`}
                    style={{ backgroundColor: c.code }}
                    title={c.name}
                  >
                    {selectedColor === c.name && <Check className="w-3.5 h-3.5 text-white mix-blend-difference" />}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Size Selection */}
          {product.sizes && product.sizes.length > 0 && (
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-stone-800 uppercase tracking-wider">
                  Select Size:
                </span>
                <button
                  onClick={onOpenSizeAdvisor}
                  className="text-xs text-amber-800 hover:underline flex items-center gap-1 font-semibold cursor-pointer"
                >
                  <Ruler className="w-3 h-3" />
                  <span>Smart Size Guide</span>
                </button>
              </div>

              <div className="flex flex-wrap items-center gap-2">
                {product.sizes.map((s) => (
                  <button
                    key={s}
                    onClick={() => setSelectedSize(s)}
                    className={`px-3 py-1.5 text-xs font-bold transition-all cursor-pointer ${
                      selectedSize === s
                        ? 'bg-black text-white'
                        : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
                    }`}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Quantity */}
          <div className="flex items-center gap-3 pt-1">
            <span className="text-xs font-bold text-stone-800 uppercase tracking-wider">Quantity:</span>
            <div className="flex items-center border border-stone-300 bg-stone-50">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="px-3 py-1 text-xs text-stone-700 hover:bg-stone-200 cursor-pointer"
              >
                -
              </button>
              <span className="px-3 text-xs font-bold text-stone-900">{quantity}</span>
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="px-3 py-1 text-xs text-stone-700 hover:bg-stone-200 cursor-pointer"
              >
                +
              </button>
            </div>
          </div>

          {/* CTAs */}
          <div className="space-y-2 pt-2">
            <div className="grid grid-cols-2 gap-3">
              <button
                onClick={() => {
                  onAddToCart(product, selectedSize, selectedColor, quantity);
                  onClose();
                }}
                className="py-3 bg-black hover:bg-stone-800 text-white font-bold text-xs uppercase tracking-widest transition-colors flex items-center justify-center gap-2 cursor-pointer"
              >
                <ShoppingBag className="w-3.5 h-3.5" />
                <span>ADD TO CART</span>
              </button>

              <button
                onClick={() => {
                  onBuyNowDirect(product, selectedSize, selectedColor);
                  onClose();
                }}
                className="py-3 bg-amber-400 hover:bg-amber-300 text-black font-bold text-xs uppercase tracking-widest transition-colors flex items-center justify-center gap-2 cursor-pointer"
              >
                <Zap className="w-3.5 h-3.5" />
                <span>BUY NOW</span>
              </button>
            </div>

            <button
              onClick={handleWhatsApp}
              className="w-full py-2.5 border border-emerald-600 bg-emerald-50 text-emerald-800 hover:bg-emerald-100 text-xs font-bold transition-colors flex items-center justify-center gap-2 cursor-pointer"
            >
              <MessageCircle className="w-4 h-4 text-emerald-600" />
              <span>Inquire via WhatsApp for Sizing & Orders</span>
            </button>
          </div>

          {/* Guarantees */}
          <div className="grid grid-cols-3 gap-2 pt-3 border-t border-stone-200 text-[10px] text-stone-500 text-center">
            <div className="flex flex-col items-center gap-1">
              <Truck className="w-4 h-4 text-stone-700" />
              <span>Cash on Delivery</span>
            </div>
            <div className="flex flex-col items-center gap-1">
              <RotateCcw className="w-4 h-4 text-stone-700" />
              <span>7-Day Easy Exchange</span>
            </div>
            <div className="flex flex-col items-center gap-1">
              <ShieldCheck className="w-4 h-4 text-stone-700" />
              <span>100% Authentic Luxury Fabric</span>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
