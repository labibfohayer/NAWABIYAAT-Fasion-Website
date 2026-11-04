'use client';

import React from 'react';
import { CustomerOrder } from '../types';
import { CheckCircle2, MessageCircle, Printer, ShoppingBag, Truck, Calendar } from 'lucide-react';

interface OrderSuccessModalProps {
  order: CustomerOrder | null;
  onClose: () => void;
}

export const OrderSuccessModal: React.FC<OrderSuccessModalProps> = ({ order, onClose }) => {
  if (!order) return null;

  const handleWhatsApp = () => {
    const text = encodeURIComponent(
      `Hello Nawabiyaat Atelier, I have placed a new order.\nOrder ID: ${order.orderId}\nName: ${order.customer.name}\nTotal: BDT ${order.pricing.total}\nPayment Method: ${order.paymentMethod.toUpperCase()}`
    );
    window.open(`https://wa.me/8801700000000?text=${text}`, '_blank');
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/85 backdrop-blur-sm overflow-y-auto">
      <div className="relative w-full max-w-xl bg-white border border-stone-200 shadow-2xl overflow-hidden my-auto p-6 sm:p-8 space-y-6 text-left">
        
        {/* Header */}
        <div className="text-center space-y-2">
          <div className="w-16 h-16 bg-stone-100 rounded-full mx-auto flex items-center justify-center text-emerald-600">
            <CheckCircle2 className="w-10 h-10" />
          </div>

          <span className="text-[10px] font-bold tracking-[0.25em] text-stone-500 uppercase block">
            ORDER CONFIRMED
          </span>

          <h2 className="text-2xl font-bold font-sans uppercase text-stone-900">
            THANK YOU, {order.customer.name}!
          </h2>
          <p className="text-xs text-stone-600">
            Order ID: <strong className="text-black font-mono text-sm tracking-wider">{order.orderId}</strong>
          </p>
        </div>

        {/* Invoice Summary */}
        <div className="bg-stone-50 p-4 border border-stone-200 space-y-3 text-xs">
          <div className="flex justify-between pb-2 border-b border-stone-200 text-stone-500">
            <span className="flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5" /> {order.date}
            </span>
            <span className="text-emerald-700 font-bold uppercase tracking-wider">Status: Processing</span>
          </div>

          {/* Items */}
          <div className="space-y-2 max-h-36 overflow-y-auto pr-1">
            {order.items.map((item, idx) => (
              <div key={idx} className="flex justify-between items-center text-stone-800">
                <div className="flex items-center gap-2">
                  <span className="text-stone-400 font-mono">{item.quantity}x</span>
                  <span className="font-semibold text-stone-900">{item.nameEnglish || item.nameBangla}</span>
                  <span className="text-[10px] text-stone-500 bg-stone-200 px-1.5 py-0.2">
                    {item.size}
                  </span>
                </div>
                <span className="font-bold text-black font-serif">
                  BDT {(item.price * item.quantity).toLocaleString('en-US')}
                </span>
              </div>
            ))}
          </div>

          {/* Pricing */}
          <div className="pt-2 border-t border-stone-200 space-y-1 text-stone-600">
            <div className="flex justify-between">
              <span>Subtotal:</span>
              <span>BDT {order.pricing.subtotal.toLocaleString('en-US')}</span>
            </div>
            {order.pricing.discount > 0 && (
              <div className="flex justify-between text-emerald-700 font-semibold">
                <span>Discount:</span>
                <span>-BDT {order.pricing.discount.toLocaleString('en-US')}</span>
              </div>
            )}
            <div className="flex justify-between">
              <span>Shipping:</span>
              <span>{order.pricing.deliveryFee === 0 ? 'FREE' : `BDT ${order.pricing.deliveryFee}`}</span>
            </div>
            <div className="flex justify-between font-bold text-sm text-black pt-1 border-t border-stone-300">
              <span>Total:</span>
              <span className="font-serif text-base">BDT {order.pricing.total.toLocaleString('en-US')}</span>
            </div>
          </div>
        </div>

        {/* Shipping details */}
        <div className="p-3.5 bg-stone-50 border border-stone-200 text-xs space-y-1 text-stone-700">
          <div className="font-bold uppercase tracking-wider text-black flex items-center gap-1.5">
            <Truck className="w-4 h-4" />
            <span>DELIVERY ADDRESS:</span>
          </div>
          <p>{order.customer.address}</p>
          <p className="text-stone-500">
            Mobile: <strong className="text-black">{order.customer.phone}</strong>
          </p>
          <p className="text-stone-500">
            Payment Method: <strong className="text-black uppercase">{order.paymentMethod}</strong>
          </p>
        </div>

        {/* Action Buttons */}
        <div className="space-y-2 pt-1">
          <button
            onClick={handleWhatsApp}
            className="w-full py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer transition-colors"
          >
            <MessageCircle className="w-4 h-4" />
            <span>GET WHATSAPP ORDER UPDATES</span>
          </button>

          <div className="grid grid-cols-2 gap-2">
            <button
              onClick={handlePrint}
              className="py-2.5 px-3 border border-stone-300 hover:border-black text-stone-800 text-xs font-semibold flex items-center justify-center gap-1.5 cursor-pointer transition-colors"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>PRINT RECEIPT</span>
            </button>

            <button
              onClick={onClose}
              className="py-2.5 px-3 bg-black hover:bg-stone-800 text-white text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-1.5 cursor-pointer transition-colors"
            >
              <ShoppingBag className="w-3.5 h-3.5" />
              <span>CONTINUE SHOPPING</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
