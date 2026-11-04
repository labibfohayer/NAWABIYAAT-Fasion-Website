'use client';

import React, { useState } from 'react';
import { CartItem, CustomerOrder } from '../types';
import { addStoredOrder } from '../utils/productStorage';
import { X, Lock, Truck, User, ArrowRight } from 'lucide-react';

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  cart: CartItem[];
  couponDiscount: number;
  couponCode: string;
  onOrderSuccess: (order: CustomerOrder) => void;
}

export const CheckoutModal: React.FC<CheckoutModalProps> = ({
  isOpen,
  onClose,
  cart,
  couponDiscount,
  couponCode,
  onOrderSuccess
}) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [altPhone, setAltPhone] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState<'dhaka' | 'outside-dhaka'>('dhaka');
  const [notes, setNotes] = useState('');
  const [paymentMethod, setPaymentMethod] = useState<'cod' | 'bkash' | 'nagad'>('cod');
  const [paymentTrxId, setPaymentTrxId] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  if (!isOpen) return null;

  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const isFreeShipping = subtotal >= 3000;
  const deliveryFee = isFreeShipping ? 0 : city === 'dhaka' ? 70 : 130;
  const grandTotal = Math.max(0, subtotal - couponDiscount + deliveryFee);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    if (!name.trim()) {
      setErrorMessage('Please enter your full name.');
      return;
    }

    const cleanPhone = phone.trim().replace(/\s+/g, '');
    if (!cleanPhone || cleanPhone.length < 11) {
      setErrorMessage('Please enter a valid 11-digit mobile number (e.g. 017XXXXXXXX).');
      return;
    }

    if (!address.trim()) {
      setErrorMessage('Please enter your detailed delivery address.');
      return;
    }

    if ((paymentMethod === 'bkash' || paymentMethod === 'nagad') && !paymentTrxId.trim()) {
      setErrorMessage(`Please enter the ${paymentMethod === 'bkash' ? 'bKash' : 'Nagad'} Transaction ID (TrxID).`);
      return;
    }

    setIsSubmitting(true);

    setTimeout(() => {
      const orderId = `NW-${Math.floor(100000 + Math.random() * 900000)}`;
      const newOrder: CustomerOrder = {
        orderId,
        items: [...cart],
        customer: {
          name,
          phone,
          alternativePhone: altPhone || undefined,
          address,
          city,
          notes: notes || undefined
        },
        pricing: {
          subtotal,
          deliveryFee,
          discount: couponDiscount,
          couponCode: couponCode || undefined,
          total: grandTotal
        },
        paymentMethod,
        paymentTrxId: paymentTrxId || undefined,
        date: new Date().toLocaleDateString('bn-BD', {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
          hour: '2-digit',
          minute: '2-digit'
        }),
        status: 'Pending'
      };

      setIsSubmitting(false);
      addStoredOrder(newOrder);
      onOrderSuccess(newOrder);
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/80 backdrop-blur-sm overflow-y-auto">
      <div className="relative w-full max-w-3xl bg-white border border-stone-200 shadow-2xl overflow-hidden my-auto max-h-[92vh] flex flex-col p-6 sm:p-8 text-left">
        
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-stone-200">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 bg-stone-100 flex items-center justify-center text-stone-900">
              <Lock className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-lg sm:text-xl font-bold font-sans uppercase tracking-wider text-stone-900">
                EXPRESS CHECKOUT
              </h2>
              <p className="text-xs text-stone-500">Complete your details to finalize your order</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 hover:bg-stone-100 rounded-full text-stone-500 hover:text-black transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form Body */}
        <form onSubmit={handleSubmit} className="overflow-y-auto space-y-6 pt-5">
          
          {errorMessage && (
            <div className="p-3 bg-red-50 border border-red-200 text-xs text-red-700">
              ⚠️ {errorMessage}
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Left: Customer Info */}
            <div className="space-y-4">
              <h3 className="text-xs font-bold text-stone-900 uppercase tracking-wider flex items-center gap-1.5">
                <User className="w-4 h-4" />
                <span>SHIPPING DETAILS</span>
              </h3>

              <div>
                <label className="block text-xs font-semibold text-stone-700 mb-1">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Tanvir Ahmed"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-stone-50 border border-stone-300 text-xs text-stone-900 p-2.5 focus:border-black focus:outline-none rounded-none"
                />
              </div>

              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-1">
                    Mobile Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="017XXXXXXXX"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full bg-stone-50 border border-stone-300 text-xs text-stone-900 p-2.5 focus:border-black focus:outline-none rounded-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-1">Alternative Phone</label>
                  <input
                    type="tel"
                    placeholder="018XXXXXXXX"
                    value={altPhone}
                    onChange={(e) => setAltPhone(e.target.value)}
                    className="w-full bg-stone-50 border border-stone-300 text-xs text-stone-900 p-2.5 focus:border-black focus:outline-none rounded-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-stone-700 mb-1">
                  Delivery Zone <span className="text-red-500">*</span>
                </label>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => setCity('dhaka')}
                    className={`p-2.5 border text-left transition-all text-xs cursor-pointer ${
                      city === 'dhaka'
                        ? 'border-black bg-stone-100 font-bold'
                        : 'border-stone-200 bg-white text-stone-500'
                    }`}
                  >
                    <div>Inside Dhaka</div>
                    <div className="text-[10px] text-stone-500">
                      {isFreeShipping ? 'Free Delivery' : 'Charge BDT 70 (24-48 hrs)'}
                    </div>
                  </button>

                  <button
                    type="button"
                    onClick={() => setCity('outside-dhaka')}
                    className={`p-2.5 border text-left transition-all text-xs cursor-pointer ${
                      city === 'outside-dhaka'
                        ? 'border-black bg-stone-100 font-bold'
                        : 'border-stone-200 bg-white text-stone-500'
                    }`}
                  >
                    <div>All Bangladesh (Outside Dhaka)</div>
                    <div className="text-[10px] text-stone-500">
                      {isFreeShipping ? 'Free Delivery' : 'Charge BDT 130 (2-3 days)'}
                    </div>
                  </button>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-stone-700 mb-1">
                  Full Address (House, Road, Area, Thana, District) <span className="text-red-500">*</span>
                </label>
                <textarea
                  rows={2}
                  required
                  placeholder="House no, Road no, Area, Thana, District..."
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  className="w-full bg-stone-50 border border-stone-300 text-xs text-stone-900 p-2.5 focus:border-black focus:outline-none rounded-none"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-stone-700 mb-1">Order Notes (Optional)</label>
                <input
                  type="text"
                  placeholder="e.g. Please deliver in the afternoon"
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full bg-stone-50 border border-stone-300 text-xs text-stone-900 p-2 focus:border-black focus:outline-none rounded-none"
                />
              </div>
            </div>

            {/* Right: Payment & Summary */}
            <div className="space-y-4">
              <h3 className="text-xs font-bold text-stone-900 uppercase tracking-wider flex items-center gap-1.5">
                <Truck className="w-4 h-4" />
                <span>PAYMENT METHOD</span>
              </h3>

              <div className="space-y-2">
                <label
                  onClick={() => setPaymentMethod('cod')}
                  className={`flex items-start gap-3 p-3 border cursor-pointer transition-all ${
                    paymentMethod === 'cod' ? 'border-black bg-stone-50' : 'border-stone-200 bg-white'
                  }`}
                >
                  <input
                    type="radio"
                    name="payment"
                    checked={paymentMethod === 'cod'}
                    onChange={() => setPaymentMethod('cod')}
                    className="mt-0.5 text-black"
                  />
                  <div>
                    <div className="text-xs font-bold text-black flex items-center gap-1.5">
                      <span>Cash on Delivery (COD)</span>
                      <span className="text-[9px] bg-emerald-100 text-emerald-800 px-1 py-0.2 font-bold">POPULAR</span>
                    </div>
                    <p className="text-[11px] text-stone-500 mt-0.5">
                      Inspect your garment upon arrival and pay cash directly to the courier.
                    </p>
                  </div>
                </label>

                <label
                  onClick={() => setPaymentMethod('bkash')}
                  className={`flex items-start gap-3 p-3 border cursor-pointer transition-all ${
                    paymentMethod === 'bkash' ? 'border-black bg-stone-50' : 'border-stone-200 bg-white'
                  }`}
                >
                  <input
                    type="radio"
                    name="payment"
                    checked={paymentMethod === 'bkash'}
                    onChange={() => setPaymentMethod('bkash')}
                    className="mt-0.5 text-black"
                  />
                  <div className="flex-1">
                    <div className="text-xs font-bold text-pink-600">bKash Instant Transfer</div>
                    <p className="text-[11px] text-stone-500 mt-0.5">
                      Send payment or transfer money to our verified personal account.
                    </p>
                  </div>
                </label>

                <label
                  onClick={() => setPaymentMethod('nagad')}
                  className={`flex items-start gap-3 p-3 border cursor-pointer transition-all ${
                    paymentMethod === 'nagad' ? 'border-black bg-stone-50' : 'border-stone-200 bg-white'
                  }`}
                >
                  <input
                    type="radio"
                    name="payment"
                    checked={paymentMethod === 'nagad'}
                    onChange={() => setPaymentMethod('nagad')}
                    className="mt-0.5 text-black"
                  />
                  <div className="flex-1">
                    <div className="text-xs font-bold text-orange-600">Nagad Instant Transfer</div>
                    <p className="text-[11px] text-stone-500 mt-0.5">
                      Quick and seamless direct payment from your Nagad digital wallet.
                    </p>
                  </div>
                </label>
              </div>

              {/* TrxID input */}
              {(paymentMethod === 'bkash' || paymentMethod === 'nagad') && (
                <div className="p-3 bg-stone-100 border border-stone-300 space-y-2">
                  <div className="text-xs text-stone-800">
                    Our {paymentMethod === 'bkash' ? 'bKash' : 'Nagad'} Number:{' '}
                    <strong className="text-black font-mono">01700-000000</strong> (Personal/Send Money)
                  </div>
                  <div>
                    <label className="block text-[11px] font-semibold text-stone-700 mb-1">
                      Enter Transaction ID (TrxID) <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. 9J4K2L8M7"
                      value={paymentTrxId}
                      onChange={(e) => setPaymentTrxId(e.target.value)}
                      className="w-full bg-white border border-stone-300 text-xs text-black p-2 focus:border-black uppercase font-semibold rounded-none"
                    />
                  </div>
                </div>
              )}

              {/* Cost Summary */}
              <div className="p-4 bg-stone-50 border border-stone-200 space-y-2 text-xs">
                <div className="font-bold uppercase tracking-wider text-stone-900 pb-1 border-b border-stone-200">
                  ORDER SUMMARY
                </div>

                <div className="flex justify-between text-stone-600">
                  <span>Subtotal ({cart.reduce((a, b) => a + b.quantity, 0)} items):</span>
                  <span className="font-semibold text-black">BDT {subtotal.toLocaleString('en-US')}</span>
                </div>

                {couponDiscount > 0 && (
                  <div className="flex justify-between text-emerald-700">
                    <span>Discount ({couponCode}):</span>
                    <span>-BDT {couponDiscount.toLocaleString('en-US')}</span>
                  </div>
                )}

                <div className="flex justify-between text-stone-600">
                  <span>Delivery ({city === 'dhaka' ? 'Inside Dhaka' : 'Outside Dhaka'}):</span>
                  <span>
                    {deliveryFee === 0 ? (
                      <span className="text-emerald-700 font-bold">FREE (Over BDT 3,000)</span>
                    ) : (
                      `BDT ${deliveryFee}`
                    )}
                  </span>
                </div>

                <div className="flex justify-between text-base font-bold text-black pt-2 border-t border-stone-300">
                  <span>Total Payable:</span>
                  <span className="font-serif text-lg">BDT {grandTotal.toLocaleString('en-US')}</span>
                </div>
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3.5 bg-black hover:bg-stone-800 text-white font-bold text-xs uppercase tracking-[0.2em] transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-md disabled:opacity-50"
              >
                {isSubmitting ? (
                  <span>PROCESSING ORDER...</span>
                ) : (
                  <>
                    <span>CONFIRM ORDER (BDT {grandTotal.toLocaleString('en-US')})</span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>
            </div>
          </div>

        </form>

      </div>
    </div>
  );
};
