'use client';

import React from 'react';
import { Crown, ArrowRight, Sparkles } from 'lucide-react';

interface CategoriesProps {
  onSelectCategory: (categoryId: string) => void;
}

export const Categories: React.FC<CategoriesProps> = ({ onSelectCategory }) => {
  return (
    <section id="shop-by-category" className="max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12 py-16 scroll-mt-20 text-left font-sans">
      
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-6 mb-8 border-b border-stone-200">
        <div>
          <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-amber-800 mb-1">
            <Crown className="w-3.5 h-3.5 text-amber-700" />
            <span>CURATED CATEGORIES</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-black uppercase tracking-tight text-stone-900">
            EXPLORE BY CATEGORY
          </h2>
        </div>
        <p className="text-xs sm:text-sm text-stone-500 max-w-md">
          From pure handloom mulberry silk to majestic wedding sherwanis and tailored kabli suits—each collection embodies royal distinction.
        </p>
      </div>

      {/* Editorial High-Fashion Asymmetric Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Large Featured Category Hero (Left 6 cols) */}
        <div 
          onClick={() => onSelectCategory('silk')}
          className="lg:col-span-6 group relative rounded-2xl overflow-hidden aspect-[4/5] sm:aspect-[16/11] lg:aspect-auto lg:min-h-[520px] bg-stone-900 cursor-pointer shadow-md hover:shadow-2xl transition-all duration-500 border border-stone-200"
        >
          <img 
            src="/assets/images/panjabi.jpg" 
            alt="Royal Silk Panjabi" 
            className="w-full h-full object-cover object-top opacity-90 group-hover:scale-105 group-hover:opacity-95 transition-all duration-700" 
          />

          {/* Dark luxury gradient vignette */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent flex flex-col justify-end p-6 sm:p-10">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-400/20 border border-amber-400/40 text-amber-300 text-[10px] font-bold uppercase tracking-widest mb-3 w-fit">
              <Sparkles className="w-3 h-3 text-amber-400" />
              <span>FLIP-THROUGH EDITORIAL • 12+ NEW DROPS</span>
            </div>

            <h3 className="text-2xl sm:text-4xl font-serif font-bold text-white uppercase tracking-wide mb-2 leading-tight">
              ROYAL SILK PANJABI<br />
              <span className="text-amber-300 font-serif italic font-normal text-xl sm:text-2xl">Pure Mulberry Silk Heritage</span>
            </h3>

            <p className="text-xs sm:text-sm text-stone-300 mb-6 max-w-md line-clamp-2 font-light">
              100% natural silk threads handwoven with antique metallic zari work and master comfort cuts. The definitive choice for festive elegance.
            </p>

            <div className="flex items-center gap-2 text-xs font-bold text-black uppercase tracking-widest bg-amber-400 group-hover:bg-amber-300 px-6 py-3 rounded-none w-fit transition-colors shadow-lg">
              <span>EXPLORE COLLECTION</span>
              <ArrowRight className="w-4 h-4 text-black group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        </div>

        {/* 2x2 Companion Grid (Right 6 cols) */}
        <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
          
          {/* Card 1: Katan */}
          <div 
            onClick={() => onSelectCategory('katan')}
            className="group relative rounded-xl overflow-hidden aspect-[4/5] bg-stone-900 cursor-pointer shadow-sm hover:shadow-xl transition-all duration-500 border border-stone-200"
          >
            <img 
              src="https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=600&q=80" 
              alt="Designer Katan" 
              className="w-full h-full object-cover object-top opacity-85 group-hover:scale-105 group-hover:opacity-95 transition-all duration-500" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent flex flex-col justify-end p-5">
              <span className="text-[10px] text-amber-400 font-bold uppercase tracking-wider block">
                FESTIVE WEAVE
              </span>
              <h4 className="text-base sm:text-lg font-serif font-bold text-white uppercase tracking-wide">
                DESIGNER KATAN
              </h4>
              <p className="text-xs text-amber-200 mb-3">
                Varanasi Pure Katan Collection
              </p>
              <span className="text-[10px] font-bold text-white uppercase tracking-wider flex items-center gap-1 group-hover:text-amber-300 transition-colors">
                <span>VIEW MORE</span>
                <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
              </span>
            </div>
          </div>

          {/* Card 2: Kabli */}
          <div 
            onClick={() => onSelectCategory('kabli')}
            className="group relative rounded-xl overflow-hidden aspect-[4/5] bg-stone-900 cursor-pointer shadow-sm hover:shadow-xl transition-all duration-500 border border-stone-200"
          >
            <img 
              src="/assets/images/jubbah.jpg" 
              alt="Kabli Suit Set" 
              className="w-full h-full object-cover object-top opacity-85 group-hover:scale-105 group-hover:opacity-95 transition-all duration-500" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent flex flex-col justify-end p-5">
              <span className="text-[10px] text-amber-400 font-bold uppercase tracking-wider block">
                EXECUTIVE FIT
              </span>
              <h4 className="text-base sm:text-lg font-serif font-bold text-white uppercase tracking-wide">
                KABLI SUIT SET
              </h4>
              <p className="text-xs text-amber-200 mb-3">
                Sultanate Mercerized Suit Set
              </p>
              <span className="text-[10px] font-bold text-white uppercase tracking-wider flex items-center gap-1 group-hover:text-amber-300 transition-colors">
                <span>VIEW MORE</span>
                <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
              </span>
            </div>
          </div>

          {/* Card 3: Wedding & Groom */}
          <div 
            onClick={() => onSelectCategory('wedding')}
            className="group relative rounded-xl overflow-hidden aspect-[4/5] bg-stone-900 cursor-pointer shadow-sm hover:shadow-xl transition-all duration-500 border border-stone-200"
          >
            <img 
              src="https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=600&q=80" 
              alt="Wedding & Groom" 
              className="w-full h-full object-cover object-top opacity-85 group-hover:scale-105 group-hover:opacity-95 transition-all duration-500" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent flex flex-col justify-end p-5">
              <span className="text-[10px] text-amber-400 font-bold uppercase tracking-wider block">
                ROYAL COUTURE
              </span>
              <h4 className="text-base sm:text-lg font-serif font-bold text-white uppercase tracking-wide">
                WEDDING & GROOM
              </h4>
              <p className="text-xs text-amber-200 mb-3">
                Bespoke Groom Sherwani Couture
              </p>
              <span className="text-[10px] font-bold text-white uppercase tracking-wider flex items-center gap-1 group-hover:text-amber-300 transition-colors">
                <span>VIEW MORE</span>
                <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
              </span>
            </div>
          </div>

          {/* Card 4: Pure Oud & Attar */}
          <div 
            onClick={() => onSelectCategory('attar')}
            className="group relative rounded-xl overflow-hidden aspect-[4/5] bg-stone-900 cursor-pointer shadow-sm hover:shadow-xl transition-all duration-500 border border-stone-200"
          >
            <img 
              src="https://images.unsplash.com/photo-1547887537-6158d64c35b3?auto=format&fit=crop&w=600&q=80" 
              alt="Nawabi Oud & Attar" 
              className="w-full h-full object-cover opacity-85 group-hover:scale-105 group-hover:opacity-95 transition-all duration-500" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent flex flex-col justify-end p-5">
              <span className="text-[10px] text-amber-400 font-bold uppercase tracking-wider block">
                PURE FRAGRANCE
              </span>
              <h4 className="text-base sm:text-lg font-serif font-bold text-white uppercase tracking-wide">
                NAWABI OUD & ATTAR
              </h4>
              <p className="text-xs text-amber-200 mb-3">
                100% Pure Alcohol-Free Fragrance
              </p>
              <span className="text-[10px] font-bold text-white uppercase tracking-wider flex items-center gap-1 group-hover:text-amber-300 transition-colors">
                <span>VIEW MORE</span>
                <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
              </span>
            </div>
          </div>

        </div>

      </div>

    </section>
  );
};