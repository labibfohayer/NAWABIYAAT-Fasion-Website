'use client';

import React, { useState } from 'react';
import { CartItem } from '../types';
import { X, Trash2, ShoppingBag, ArrowRight, Truck, Tag, Check } from 'lucide-react';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cart: CartItem[];
  onUpdateQuantity: (index: number, delta: number) => void;
  onRemoveItem: (index: number) => void;
  onProceedToCheckout: (discount: number, code: string) => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  cart,
  onUpdateQuantity,
  onRemoveItem,
  onProceedToCheckout
}) => {
  const [couponInput, setCouponInput] = useState('');
  const [appliedCoupon, setAppliedCoupon] = useState<{ code: string; discount: number } | null>(null);
  const [couponError, setCouponError] = useState('');

  if (!isOpen) return null;

  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const freeShippingThreshold = 3000;
  const progressPercent = Math.min(100, Math.round((subtotal / freeShippingThreshold) * 100));
  const amountNeeded = Math.max(0, freeShippingThreshold - subtotal);

  const handleApplyCoupon = (e: React.FormEvent) => {
    e.preventDefault();
    setCouponError('');
    const code = couponInput.trim().toUpperCase();

    if (code === 'EID2026' || code === 'NAWABI10') {
      const discount = Math.round(subtotal * 0.1);
      setAppliedCoupon({ code, discount });
    } else if (code === 'NAWAB') {
      const discount = Math.min(500, subtotal);
      setAppliedCoupon({ code, discount });
    } else {
      setCouponError('Invalid coupon! Try "EID2026" for 10% off or "NAWAB" for BDT 500 off.');
    }
  };

  const discountAmount = appliedCoupon ? appliedCoupon.discount : 0;
  const finalSubtotal = Math.max(0, subtotal - discountAmount);

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-black/70 backdrop-blur-xs transition-opacity">
      <div className="fixed inset-y-0 right-0 flex max-w-full pl-10">
        <div className="w-screen max-w-md bg-white border-l border-stone-200 shadow-2xl flex flex-col justify-between text-left">
          
          {/* Header */}
          <div className="p-4 sm:p-5 border-b border-stone-200 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <ShoppingBag className="w-5 h-5 text-black" />
              <h2 className="text-sm sm:text-base font-bold font-sans tracking-wider uppercase text-black">
                YOUR BAG ({cart.reduce((a, b) => a + b.quantity, 0)})
              </h2>
            </div>

            <button
              onClick={onClose}
              className="p-1.5 hover:bg-stone-100 rounded-full text-stone-500 hover:text-black transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Free Shipping Progress Meter */}
          <div className="px-5 py-3 bg-stone-50 border-b border-stone-200 text-xs">
            <div className="flex items-center justify-between text-stone-700 mb-1.5 font-medium">
              <span className="flex items-center gap-1.5">
                <Truck className="w-3.5 h-3.5 text-stone-900" />
                {amountNeeded === 0 ? (
                  <span className="text-emerald-700 font-bold">🎉 FREE DELIVERY UNLOCKED!</span>
                ) : (
                  <span>
                    Add <strong className="text-black font-bold">BDT {amountNeeded.toLocaleString()}</strong> for Free Delivery
                  </span>
                )}
              </span>
              <span className="font-bold text-black">{progressPercent}%</span>
            </div>
            <div className="w-full h-1.5 bg-stone-200 rounded-none overflow-hidden">
              <div
                className="h-full bg-black transition-all duration-500"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
          </div>

          {/* Items List */}
          <div className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-4">
            {cart.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center p-6 space-y-4">
                <div className="w-16 h-16 bg-stone-100 rounded-full flex items-center justify-center text-stone-400">
                  <ShoppingBag className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-sm font-bold uppercase tracking-wider text-black">Your bag is empty</h3>
                  <p className="text-xs text-stone-500 mt-1">Explore our latest drops and signature collections.</p>
                </div>
                <button
                  onClick={onClose}
                  className="px-6 py-2.5 bg-black text-white text-xs font-bold uppercase tracking-widest hover:bg-stone-800 cursor-pointer"
                >
                  START SHOPPING
                </button>
              </div>
            ) : (
              cart.map((item, index) => (
                <div
                  key={`${item.id}-${item.size}-${item.color}-${index}`}
                  className="p-3 bg-white border border-stone-200 flex gap-3 relative group"
                >
                  <img
                    src={item.image}
                    alt={item.nameBangla}
                    className="w-16 h-20 object-cover object-top border border-stone-100 shrink-0"
                  />

                  <div className="flex-1 min-w-0 flex flex-col justify-between">
                    <div>
                      <div className="flex items-start justify-between gap-1">
                        <h4 className="text-xs font-bold text-stone-900 truncate">
                          {item.nameBangla}
                        </h4>
                        <button
                          onClick={() => onRemoveItem(index)}
                          className="text-stone-400 hover:text-red-500 transition-colors p-0.5 cursor-pointer"
                          title="Remove item"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                      <p className="text-[10px] text-stone-400 uppercase tracking-wide truncate">
                        {item.nameEnglish}
                      </p>

                      <div className="flex items-center gap-2 text-[11px] text-stone-600 mt-1">
                        <span className="bg-stone-100 px-1.5 py-0.5 font-semibold">
                          Size: {item.size}
                        </span>
                        {item.color && (
                          <span className="text-stone-500">
                            Color: {item.color}
                          </span>
                        )}
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-1">
                      <div className="flex items-center border border-stone-300 bg-stone-50">
                        <button
                          onClick={() => onUpdateQuantity(index, -1)}
                          className="px-2 py-0.5 text-xs text-stone-700 hover:bg-stone-200 cursor-pointer"
                        >
                          -
                        </button>
                        <span className="px-2.5 text-xs font-bold text-black">{item.quantity}</span>
                        <button
                          onClick={() => onUpdateQuantity(index, 1)}
                          className="px-2 py-0.5 text-xs text-stone-700 hover:bg-stone-200 cursor-pointer"
                        >
                          +
                        </button>
                      </div>

                      <span className="text-xs sm:text-sm font-bold font-serif text-black">
                        BDT {(item.price * item.quantity).toLocaleString('en-US')}
                      </span>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer */}
          {cart.length > 0 && (
            <div className="p-4 sm:p-5 border-t border-stone-200 bg-stone-50 space-y-3.5">
              
              {/* Coupon Form */}
              <form onSubmit={handleApplyCoupon} className="space-y-1">
                <div className="flex gap-2">
                  <div className="relative flex-1">
                    <input
                      type="text"
                      placeholder="Coupon Code (e.g. EID2026)"
                      value={couponInput}
                      onChange={(e) => setCouponInput(e.target.value)}
                      className="w-full bg-white border border-stone-300 text-xs text-black rounded-none pl-8 pr-2 py-2 focus:border-black uppercase placeholder:normal-case font-semibold"
                    />
                    <Tag className="w-3.5 h-3.5 text-stone-400 absolute left-2.5 top-2.5" />
                  </div>
                  <button
                    type="submit"
                    className="px-4 py-2 bg-black hover:bg-stone-800 text-xs font-bold uppercase tracking-wider text-white transition-colors cursor-pointer"
                  >
                    APPLY
                  </button>
                </div>

                {appliedCoupon && (
                  <div className="text-[11px] text-emerald-700 flex items-center gap-1 font-semibold pt-1">
                    <Check className="w-3 h-3" />
                    <span>Coupon '{appliedCoupon.code}' applied (-BDT {appliedCoupon.discount})</span>
                  </div>
                )}
                {couponError && <p className="text-[11px] text-red-600 pt-1">{couponError}</p>}
              </form>

              {/* Bill Details */}
              <div className="space-y-1.5 text-xs text-stone-600 border-t border-stone-200 pt-2 font-medium">
                <div className="flex justify-between">
                  <span>Subtotal:</span>
                  <span className="font-bold text-black">BDT {subtotal.toLocaleString('en-US')}</span>
                </div>

                {appliedCoupon && (
                  <div className="flex justify-between text-emerald-700">
                    <span>Discount ({appliedCoupon.code}):</span>
                    <span>-BDT {appliedCoupon.discount.toLocaleString('en-US')}</span>
                  </div>
                )}

                <div className="flex justify-between text-stone-500">
                  <span>Shipping:</span>
                  <span>{amountNeeded === 0 ? 'FREE' : 'Calculated at checkout'}</span>
                </div>

                <div className="flex justify-between text-sm sm:text-base font-bold text-black border-t border-stone-300 pt-2">
                  <span>Estimated Total:</span>
                  <span className="font-serif text-lg">BDT {finalSubtotal.toLocaleString('en-US')}</span>
                </div>
              </div>

              {/* Checkout Trigger */}
              <button
                onClick={() => onProceedToCheckout(discountAmount, appliedCoupon ? appliedCoupon.code : '')}
                className="w-full py-3.5 bg-black hover:bg-stone-800 text-white font-bold text-xs uppercase tracking-[0.2em] transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-md"
              >
                <span>PROCEED TO CHECKOUT</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};
