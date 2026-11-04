'use client';

import React from 'react';
import { ArrowRight, Crown, Gift } from 'lucide-react';

interface PromoBannersProps {
  onExploreSilk: () => void;
  onExploreWedding: () => void;
  onShopBundle: () => void;
}

export const PromoBanners: React.FC<PromoBannersProps> = ({
  onExploreWedding,
  onShopBundle
}) => {
  return (
    <section className="max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12 py-14 text-left font-sans">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
        
        {/* Banner 1: Bespoke Groom & Wedding Atelier (7 cols) */}
        <div className="lg:col-span-7 relative bg-gradient-to-r from-[#12141c] via-[#1a1c26] to-[#0f1017] text-white p-8 sm:p-12 rounded-2xl border border-amber-400/30 overflow-hidden group shadow-xl flex flex-col justify-between min-h-[320px]">
          
          {/* Subtle Ambient Radial Glow */}
          <div className="absolute top-0 right-0 w-[400px] h-[300px] bg-amber-500/10 blur-[100px] pointer-events-none rounded-full" />

          <div className="relative z-10 max-w-lg space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/15 border border-amber-400/30 text-amber-300 text-[10px] font-bold uppercase tracking-widest">
              <Crown className="w-3.5 h-3.5 text-amber-400" />
              <span>BESPOKE GROOM COUTURE 2026</span>
            </div>

            <h3 className="text-2xl sm:text-4xl font-serif font-black tracking-wide text-white uppercase leading-tight">
              Bespoke Groom Sherwanis & Custom Tailoring
            </h3>

            <p className="text-xs sm:text-sm text-stone-300 leading-relaxed font-light">
              Experience private fitting consultations with our master tailors at our Banani and Dhanmondi Lounges for your wedding day.
            </p>
          </div>

          <div className="relative z-10 pt-6 flex flex-wrap items-center gap-4">
            <button 
              onClick={onExploreWedding}
              className="bg-amber-400 hover:bg-amber-300 text-black text-xs font-extrabold uppercase tracking-widest px-7 py-3.5 transition-all shadow-md flex items-center gap-2 cursor-pointer"
            >
              <span>EXPLORE WEDDING COUTURE</span>
              <ArrowRight className="w-4 h-4 text-black group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Background Ambient Model Image with soft opacity */}
          <img 
            src="https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=700&q=80" 
            alt="Groom Couture" 
            className="absolute right-0 top-0 w-2/5 h-full object-cover object-top opacity-20 group-hover:scale-105 group-hover:opacity-30 transition-all duration-700 pointer-events-none"
          />
        </div>

        {/* Banner 2: Nawabi Gift Box & Bundle (5 cols) */}
        <div className="lg:col-span-5 relative bg-gradient-to-br from-[#181a20] to-[#0c0d12] text-white p-8 sm:p-12 rounded-2xl border border-stone-800 overflow-hidden group shadow-xl flex flex-col justify-between min-h-[320px]">
          
          <div className="relative z-10 space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/15 border border-red-500/30 text-red-300 text-[10px] font-bold uppercase tracking-widest">
              <Gift className="w-3.5 h-3.5 text-red-400" />
              <span>SPECIAL EID BUNDLE BOX • SAVE BDT 1,500</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-serif font-black tracking-wide text-white uppercase leading-tight">
              Royal Nawabi Curated Gift Box
            </h3>

            <p className="text-xs text-stone-300 leading-relaxed font-light">
              1 Signature Silk Panjabi + 1 Tailored Cotton Trouser + 1 Bottle (6ml) Aged Dehn Al Oud in an engraved wooden box.
            </p>
          </div>

          <div className="relative z-10 pt-6">
            <button 
              onClick={onShopBundle}
              className="bg-white hover:bg-stone-200 text-black text-xs font-extrabold uppercase tracking-widest px-7 py-3.5 transition-all shadow-md flex items-center gap-2 cursor-pointer"
            >
              <span>CLAIM BUNDLE OFFER</span>
              <ArrowRight className="w-4 h-4 text-black group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Background Ambient Imagery */}
          <img 
            src="/assets/images/panjabi.jpg" 
            alt="Bundle Set" 
            className="absolute right-0 bottom-0 w-1/3 h-full object-cover opacity-15 group-hover:scale-105 group-hover:opacity-25 transition-all duration-700 pointer-events-none"
          />
        </div>

      </div>
    </section>
  );
};