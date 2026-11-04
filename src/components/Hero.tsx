'use client';

import React, { useState, useEffect } from 'react';
import { Crown, ArrowRight, Ruler, Sparkles, ShieldCheck, Truck, Scissors, RotateCcw } from 'lucide-react';

interface HeroProps {
  onExploreClick: () => void;
  onOpenSizeAdvisor: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreClick, onOpenSizeAdvisor }) => {
  const [activeLook, setActiveLook] = useState(0);

  const heroLooks = [
    {
      id: 'silk',
      badge: 'SIGNATURE ATELIER PIECE',
      titleEnglish: 'ROYAL MULBERRY',
      titleBangla: 'খাঁটি সিল্ক পাঞ্জাবি',
      subtitle: 'Pure Mulberry Silk with Antique Golden Zari Work',
      desc: 'শতভাগ খাঁটি মালবেরি রেশম সুতা, সূক্ষ্ম হ্যান্ডক্রাফটেড জারি কলার এবং নবাবিয়াতের নিজস্ব ওস্তাদ কারিগরদের নিখুঁত মাস্টার কাটিং।',
      price: '৳৪,৮৫০',
      image: '/assets/images/panjabi.jpg',
      modelTag: 'মডেল পরিহিত: রয়্যাল মিডনাইট জারি সিল্ক'
    },
    {
      id: 'katan',
      badge: 'FESTIVE WEDDING COUTURE',
      titleEnglish: 'IMPERIAL KATAN',
      titleBangla: 'বারাণসী কাতান পাঞ্জাবি',
      subtitle: 'Varanasi Jacquard Weave with Antique Brass Buttons',
      desc: 'বারাণসী উইভ পিওর কাতান সিল্কের ওপর সূক্ষ্ম মিনাকারি কলার কাজ—ঈদ ও বিশেষ পারিবারিক আয়োজনের রাজকীয় আভিজাত্য।',
      price: '৳৫,৪৫০',
      image: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=800&q=80',
      modelTag: 'মডেল পরিহিত: ইম্পেরিয়াল এমারেল্ড কাতান'
    },
    {
      id: 'kabli',
      badge: 'EXECUTIVE SULTANATE SUIT',
      titleEnglish: 'SULTANATE KABLI',
      titleBangla: 'সালতানাত কাবলি সেট',
      subtitle: 'Super 120s Egyptian Mercerized Cotton Set',
      desc: 'সুপার ১২০স ইজিপশিয়ান মারসেরাইজড কটন ও অ্যান্টি-রিঙ্কেল ফেব্রিক—ম্যাচিং টেইলর্ড পায়জামা সহ পূর্ণাঙ্গ সেট।',
      price: '৳৩,৯৫০',
      image: '/assets/images/jubbah.jpg',
      modelTag: 'মডেল পরিহিত: জেট ব্ল্যাক কাবলি সেট'
    }
  ];

  // Auto-switch looks every 6 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveLook((prev) => (prev + 1) % heroLooks.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [heroLooks.length]);

  const current = heroLooks[activeLook];

  return (
    <div className="relative bg-[#07080a] text-white overflow-hidden text-left font-sans">
      
      {/* Ambient Radial Glows */}
      <div className="absolute top-0 right-1/4 w-[600px] h-[500px] bg-amber-500/10 blur-[150px] pointer-events-none rounded-full" />
      <div className="absolute bottom-0 left-10 w-[500px] h-[400px] bg-stone-700/15 blur-[140px] pointer-events-none rounded-full" />

      {/* Main Hero Container */}
      <div className="max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12 pt-8 sm:pt-12 pb-16 relative z-10">
        
        {/* Top Minimalist Brand Kicker */}
        <div className="flex items-center justify-between pb-6 mb-8 border-b border-stone-800/80">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
            <span className="text-[11px] sm:text-xs tracking-[0.25em] text-stone-300 uppercase font-semibold">
              EID & FESTIVE COLLECTION 2026 • ATELIER EDITION
            </span>
          </div>

          <div className="hidden md:flex items-center gap-4 text-xs text-amber-300/90 font-bangla">
            <span>✨ ১০০% খাঁটি ফেব্রিক গ্যারান্টি</span>
            <span>•</span>
            <span>৩ দিনে সারা দেশে হোম ডেলিভারি</span>
          </div>
        </div>

        {/* 2-Column High-Fashion Asymmetric Stage */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 xl:gap-16 items-center">
          
          {/* Left Column: Editorial Content (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Look Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-400/10 border border-amber-400/30 text-amber-300 text-[11px] font-bold tracking-widest uppercase">
              <Crown className="w-3.5 h-3.5 text-amber-400" />
              <span>{current.badge}</span>
            </div>

            {/* Massive Editorial Headline */}
            <div className="space-y-1">
              <span className="text-stone-400 text-xs sm:text-sm font-sans tracking-[0.25em] uppercase block">
                {current.titleEnglish}
              </span>
              <h1 className="text-4xl sm:text-6xl xl:text-7xl font-serif font-black tracking-tight text-white leading-[1.05]">
                {current.titleBangla}
              </h1>
              <p className="text-amber-200/90 text-sm sm:text-base font-serif italic pt-1">
                "{current.subtitle}"
              </p>
            </div>

            {/* Description */}
            <p className="text-stone-300 text-xs sm:text-sm md:text-base font-bangla leading-relaxed max-w-2xl font-light">
              {current.desc}
            </p>

            {/* Price & Primary Actions */}
            <div className="pt-2 flex flex-wrap items-center gap-4 sm:gap-6">
              <div className="flex flex-col">
                <span className="text-[10px] uppercase tracking-widest text-stone-400">প্রারম্ভিক মূল্য</span>
                <span className="text-2xl sm:text-3xl font-serif font-bold text-amber-300 leading-none">
                  {current.price}
                </span>
              </div>

              <div className="h-10 w-[1px] bg-stone-800 hidden sm:block" />

              <div className="flex flex-wrap items-center gap-3">
                <button
                  onClick={onExploreClick}
                  className="px-8 py-4 bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 hover:brightness-110 text-black font-extrabold text-xs uppercase tracking-widest transition-all shadow-lg shadow-amber-500/20 flex items-center gap-2 cursor-pointer"
                >
                  <span>কালেকশন দেখুন</span>
                  <ArrowRight className="w-4 h-4 text-black" />
                </button>

                <button
                  onClick={onOpenSizeAdvisor}
                  className="px-6 py-4 bg-stone-900/90 hover:bg-stone-800 text-stone-200 border border-stone-700 hover:border-amber-400/60 font-bold text-xs uppercase tracking-wider transition-all flex items-center gap-2 cursor-pointer"
                >
                  <Ruler className="w-4 h-4 text-amber-400" />
                  <span>সাইজ ক্যালকুলেটর</span>
                </button>
              </div>
            </div>

            {/* Interactive Look Tabs */}
            <div className="pt-6 border-t border-stone-800/80">
              <span className="text-[10px] uppercase tracking-widest text-stone-400 font-bold block mb-3">
                FEATURED LOOKS (লুকবুক নির্বাচন করুন):
              </span>
              <div className="grid grid-cols-3 gap-3 max-w-xl">
                {heroLooks.map((look, idx) => (
                  <button
                    key={look.id}
                    onClick={() => setActiveLook(idx)}
                    className={`p-3 rounded-lg border text-left transition-all cursor-pointer ${
                      activeLook === idx
                        ? 'border-amber-400 bg-amber-400/10 text-white'
                        : 'border-stone-800 bg-stone-900/50 text-stone-400 hover:border-stone-700'
                    }`}
                  >
                    <span className="text-[10px] block font-mono text-amber-400">0{idx + 1}</span>
                    <span className="text-xs font-bold block truncate text-stone-200">{look.titleBangla}</span>
                    <span className="text-[10px] text-stone-400 block truncate">{look.price}</span>
                  </button>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: High-Fashion Curated Model Portrait (5 cols) */}
          <div className="lg:col-span-5 relative flex justify-center">
            
            {/* Decorative Gold Frame Accent */}
            <div className="absolute -inset-2 rounded-2xl bg-gradient-to-b from-amber-400/20 via-transparent to-amber-500/10 blur-sm pointer-events-none" />

            <div className="relative w-full max-w-[440px] aspect-[3/4] rounded-2xl overflow-hidden border-2 border-amber-400/30 bg-stone-900 shadow-2xl">
              <img
                src={current.image}
                alt={current.titleBangla}
                className="w-full h-full object-cover object-top transition-transform duration-700 hover:scale-105"
              />

              {/* Gradient Vignette at Bottom */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#07080a] via-transparent to-black/20 pointer-events-none" />

              {/* Floating Model Tag */}
              <div className="absolute bottom-4 left-4 right-4 p-3.5 rounded-xl bg-black/80 backdrop-blur-md border border-white/10 flex items-center justify-between">
                <div>
                  <span className="text-[10px] text-amber-400 font-bold uppercase tracking-wider block">
                    EXCLUSIVE COUTURE
                  </span>
                  <p className="text-xs font-bold text-white font-bangla">
                    {current.modelTag}
                  </p>
                </div>
                <span className="text-xs font-serif font-bold text-amber-300">
                  {current.price}
                </span>
              </div>
            </div>

          </div>

        </div>

      </div>

      {/* Integrated Luxury Royal Trust Bar (Replacing generic 4 white boxes) */}
      <div className="bg-[#0c0d12] border-t border-b border-stone-800 py-6">
        <div className="max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Trust 1 */}
            <div className="flex items-center gap-3.5">
              <div className="w-10 h-10 rounded-full bg-amber-400/10 border border-amber-400/30 flex items-center justify-center shrink-0">
                <Crown className="w-5 h-5 text-amber-400" />
              </div>
              <div className="text-left">
                <h4 className="text-xs font-bold text-white uppercase tracking-wider">১০০% খাঁটি ফেব্রিক</h4>
                <p className="text-[11px] text-stone-400 font-bangla">বিশুদ্ধ মালবেরি সিল্ক ও কাতান</p>
              </div>
            </div>

            {/* Trust 2 */}
            <div className="flex items-center gap-3.5">
              <div className="w-10 h-10 rounded-full bg-amber-400/10 border border-amber-400/30 flex items-center justify-center shrink-0">
                <Truck className="w-5 h-5 text-amber-400" />
              </div>
              <div className="text-left">
                <h4 className="text-xs font-bold text-white uppercase tracking-wider">সারা দেশে ৩ দিনে ক্যাশ অন</h4>
                <p className="text-[11px] text-stone-400 font-bangla">৳৩,০০০+ অর্ডারে সম্পূর্ণ ফ্রি শিপিং</p>
              </div>
            </div>

            {/* Trust 3 */}
            <div className="flex items-center gap-3.5">
              <div className="w-10 h-10 rounded-full bg-amber-400/10 border border-amber-400/30 flex items-center justify-center shrink-0">
                <Scissors className="w-5 h-5 text-amber-400" />
              </div>
              <div className="text-left">
                <h4 className="text-xs font-bold text-white uppercase tracking-wider">ওস্তাদ মাস্টার টেইলরিং</h4>
                <p className="text-[11px] text-stone-400 font-bangla">নিখুঁত ফিটিং ও দীর্ঘস্থায়ী সেলাই</p>
              </div>
            </div>

            {/* Trust 4 */}
            <div className="flex items-center gap-3.5">
              <div className="w-10 h-10 rounded-full bg-amber-400/10 border border-amber-400/30 flex items-center justify-center shrink-0">
                <RotateCcw className="w-5 h-5 text-amber-400" />
              </div>
              <div className="text-left">
                <h4 className="text-xs font-bold text-white uppercase tracking-wider">৩ দিনের ফ্রি এক্সচেঞ্জ</h4>
                <p className="text-[11px] text-stone-400 font-bangla">সহজ ও শতভাগ নিরাপদ পরিবর্তন</p>
              </div>
            </div>

          </div>
        </div>
      </div>

    </div>
  );
};