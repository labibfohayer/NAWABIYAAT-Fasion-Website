'use client';

import React from 'react';
import { Crown, Sparkles, Feather, Scissors, Award, ArrowLeft, ArrowRight } from 'lucide-react';

interface AboutPageProps {
  onBackToHome: () => void;
  onExploreCollection: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onBackToHome, onExploreCollection }) => {
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
          <span className="text-black font-bold">ABOUT NAWABIYAAT</span>
        </nav>
      </div>

      {/* 2. Hero */}
      <div className="bg-stone-50 border-y border-stone-200 py-14 md:py-20 mb-12">
        <div className="max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12 text-center max-w-3xl">
          <div className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-5 border-2 border-amber-400/60 shadow-xl bg-black">
            <img src="/assets/images/logo.png" alt="Nawabiyaat Emblem" className="w-full h-full object-cover" />
          </div>

          <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-50 border border-amber-200 text-amber-900 text-[10px] font-bold uppercase tracking-[0.2em] mb-3">
            <Crown className="w-3.5 h-3.5 text-amber-700" />
            <span>THE HERITAGE OF BENGAL</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-stone-900 mb-4">
            THE STORY OF NAWABIYAAT
          </h1>
          <p className="text-sm font-semibold text-stone-700 mb-3">
            A Regal Fusion of Heritage Craftsmanship and Modern Sophistication
          </p>
          <p className="text-xs text-stone-500 leading-relaxed max-w-2xl mx-auto">
            Nawabiyaat is more than an atelier—it is the living embodiment of Bengal’s centenary handloom weaving, intricate zardozi embroidery, and razor-sharp modern tailoring. Our mission is to bestow every modern gentleman with regal poise and distinctive refinement.
          </p>
        </div>
      </div>

      {/* 3. Story Section */}
      <div className="max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12 mb-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          <div className="lg:col-span-6 space-y-4">
            <span className="text-[10px] font-bold tracking-[0.25em] text-amber-800 uppercase block">
              OUR PHILOSOPHY
            </span>
            <h2 className="text-2xl sm:text-3xl font-black uppercase text-black">
              TOUCH OF NOBLE HERITAGE IN PURE FABRICS
            </h2>
            <p className="text-xs text-stone-600 leading-relaxed">
              We believe every momentous festival and landmark occasion is immortalized through what you wear. At Nawabiyaat, each silhouette is meticulously created from 100% pure Mulberry silk, Varanasi jacquard katan, and premium Egyptian cotton.
            </p>
            <p className="text-xs text-stone-600 leading-relaxed">
              Our master artisans spend dozens of hours ornamenting every collar, placket, and cuff with antique metallic zari and delicate handwork—giving you an aura of unmistakable prestige in every gathering.
            </p>

            <div className="pt-2">
              <button
                onClick={onExploreCollection}
                className="px-8 py-3.5 bg-black hover:bg-stone-800 text-white font-bold text-xs uppercase tracking-widest transition-colors flex items-center gap-2 cursor-pointer shadow-md"
              >
                <span>EXPLORE COLLECTIONS</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="relative aspect-[4/3] bg-stone-100 overflow-hidden border border-stone-200">
              <img
                src="/assets/images/panjabi.jpg"
                alt="Nawabiyaat Craftsmanship"
                className="w-full h-full object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-6">
                <span className="text-white text-xs font-bold uppercase tracking-wider font-sans">
                  Crafted with passion in Bangladesh
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* 4 Pillars Grid */}
      <div className="max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12 py-12 border-t border-stone-200">
        <div className="text-center mb-10">
          <h3 className="text-xl font-bold uppercase tracking-widest text-black">
            OUR 4 PILLARS OF EXCELLENCE
          </h3>
          <div className="w-10 h-0.5 bg-black mx-auto mt-2"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-6 bg-stone-50 border border-stone-200 space-y-2">
            <Feather className="w-6 h-6 text-amber-800" />
            <h4 className="text-xs font-bold uppercase tracking-wider text-black">100% PURE FABRIC</h4>
            <p className="text-xs text-stone-500 leading-relaxed">
              Zero synthetic adulteration. Guaranteed pure Mulberry silk, fine linen, and premium mercerized cotton.
            </p>
          </div>

          <div className="p-6 bg-stone-50 border border-stone-200 space-y-2">
            <Scissors className="w-6 h-6 text-amber-800" />
            <h4 className="text-xs font-bold uppercase tracking-wider text-black">MASTER TAILORING</h4>
            <p className="text-xs text-stone-500 leading-relaxed">
              Sculpted shoulder drops, immaculate collar curves, and precision bespoke fits supervised by senior master tailors.
            </p>
          </div>

          <div className="p-6 bg-stone-50 border border-stone-200 space-y-2">
            <Sparkles className="w-6 h-6 text-amber-800" />
            <h4 className="text-xs font-bold uppercase tracking-wider text-black">HANDCRAFTED ARTISANRY</h4>
            <p className="text-xs text-stone-500 leading-relaxed">
              Heirloom metallic zari, authentic zardozi, and hand-embroidered details that celebrate heritage artistry.
            </p>
          </div>

          <div className="p-6 bg-stone-50 border border-stone-200 space-y-2">
            <Award className="w-6 h-6 text-amber-800" />
            <h4 className="text-xs font-bold uppercase tracking-wider text-black">COMPLIMENTARY EXCHANGE</h4>
            <p className="text-xs text-stone-500 leading-relaxed">
              Hassle-free size replacement and support within 3 business days across all districts of Bangladesh.
            </p>
          </div>
        </div>
      </div>

    </div>
  );
};
