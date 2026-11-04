'use client';

import React from 'react';
import { Crown, Sparkles, Feather, Scissors, Award, CheckCircle } from 'lucide-react';

export const ArtisanHeritage: React.FC = () => {
  const pillars = [
    {
      icon: Feather,
      title: 'খাঁটি মালবেরি সিল্ক',
      subtitle: '১০০% ন্যাচারাল হ্যান্ডলুম ড্র্যাপ',
      desc: 'কোনো কৃত্রিম পলিয়েস্টার নয়, শতভাগ প্রাকৃতিক রেশমি সুতা যা পরলেই অনুভূত হয় কোমল শীতলতা ও অতুলনীয় উজ্জ্বলতা।'
    },
    {
      icon: Scissors,
      title: 'মাস্টার টেইলরিং ও কাটিং',
      subtitle: 'পারফেক্ট ফিটিং ফর্মুলা',
      desc: 'অভিজ্ঞ ওস্তাদ কারিগরদের নিখুঁত কাটিং, যা ঘাড় ও শোল্ডারে দেয় অনবদ্য আরাম এবং দীর্ঘক্ষণ পরেও কুঁচকাবে না।'
    },
    {
      icon: Sparkles,
      title: 'হ্যান্ডমেড জারদৌসি কারুকাজ',
      subtitle: 'অ্যান্টিক মেটালিক সুতার কাজ',
      desc: 'কলার ও প্লেকেটে খাঁটি জরি ও মাইক্রো সিকুইন দিয়ে চল্লিশ ঘণ্টারও বেশি সময় নিয়ে সূক্ষ্ম নকশা ফুটিয়ে তোলা হয়।'
    },
    {
      icon: Award,
      title: 'সিগনেচার মেটাল বাটন',
      subtitle: 'কাস্টম কাভর্ড ব্রাস বাটন',
      desc: 'নবাবিয়াতের নিজস্ব মনোগ্রাম খোদাই করা অ্যান্টিক ব্রাস ও এনামেল বাটন যা কখনো বিবর্ণ হয় না বা মরিচা ধরে না।'
    }
  ];

  return (
    <section className="py-16 md:py-20 bg-stone-50 border-y border-stone-200 text-left">
      <div className="max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-2 mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-amber-100 text-amber-900 text-[10px] font-bold uppercase tracking-[0.2em]">
            <Crown className="w-3.5 h-3.5 text-amber-800" />
            <span>NAWABIYAAT ARTISANAL CRAFTSMANSHIP</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-stone-900 font-sans">
            কেন নবাবিয়াত পাঞ্জাবি অন্য সবার চেয়ে আলাদা?
          </h2>

          <p className="text-xs sm:text-sm text-stone-600 font-bangla">
            একটি সাধারণ পোশাক নয়, প্রতিটি নবাবিয়াত পাঞ্জাবি বাংলার শতবর্ষের তাঁত ঐতিহ্য ও আধুনিক নবাবী আভিজাত্যের এক জীবন্ত শিল্পকর্ম।
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-white p-7 border border-stone-200 shadow-xs hover:shadow-lg transition-all duration-300 space-y-3 group"
              >
                <div className="w-12 h-12 bg-stone-900 text-amber-300 flex items-center justify-center transition-transform group-hover:scale-105">
                  <Icon className="w-6 h-6" />
                </div>

                <div>
                  <span className="text-[10px] font-bold tracking-wider uppercase text-amber-800 block">
                    {item.subtitle}
                  </span>
                  <h3 className="text-base font-bold text-stone-900 mt-0.5">{item.title}</h3>
                </div>

                <p className="text-xs text-stone-600 leading-relaxed font-bangla">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
