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
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-50 border border-amber-200 text-amber-900 text-[10px] font-bold uppercase tracking-[0.2em] mb-3">
            <Crown className="w-3.5 h-3.5 text-amber-700" />
            <span>THE HERITAGE OF BENGAL</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-stone-900 mb-4">
            নবাবিয়াত (NAWABIYAAT) এর গল্প
          </h1>
          <p className="text-sm font-semibold text-stone-700 mb-3">
            রাজকীয় আভিজাত্যে আধুনিক রুচির এক অনন্য মেলবন্ধন
          </p>
          <p className="text-xs text-stone-500 leading-relaxed max-w-2xl mx-auto font-bangla">
            নবাবিয়াত শুধু একটি পোশাকের ব্র্যান্ড নয়—এটি বাংলার শতবর্ষের ঐতিহ্যবাহী তাঁতশিল্প, সুক্ষ্ম জারদৌসি সূচিকর্ম এবং আধুনিক পরিশীলিত কাটিংয়ের এক জীবন্ত প্রকাশ। প্রতিটি পুরুষের ব্যক্তিত্বে আভিজাত্য ফুটিয়ে তোলাই আমাদের মূল লক্ষ্য।
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
              পরিশুদ্ধ কাপড়ে ঐতিহ্যের স্পর্শ
            </h2>
            <p className="text-xs text-stone-600 leading-relaxed font-bangla">
              আমরা বিশ্বাস করি, প্রতিটি বিশেষ দিন এবং উৎসবের অন্যতম স্মৃতি জড়িয়ে থাকে আপনার পোশাকে। তাই নবাবিয়াতের প্রতিটি পাঞ্জাবিতে ব্যবহৃত হয় ১০০% পিওর মালবেরি সিল্ক, বারাণসী কাতান এবং খাঁটি সুতি ফেব্রিক।
            </p>
            <p className="text-xs text-stone-600 leading-relaxed font-bangla">
              আমাদের ওস্তাদ কারিগররা প্রতিটি কলার, প্লেকেট এবং কাফে যত্নসহকারে অ্যান্টিক মেটালিক সুতা ও সিকুইন দিয়ে কাজ করেন, যা আপনাকে যেকোনো ভিড়ে আলাদা ব্যক্তিত্বের দ্যুতি এনে দেয়।
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
            আমাদের ৪টি অটল প্রতিশ্রুতি
          </h3>
          <div className="w-10 h-0.5 bg-black mx-auto mt-2"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-6 bg-stone-50 border border-stone-200 space-y-2">
            <Feather className="w-6 h-6 text-amber-800" />
            <h4 className="text-xs font-bold uppercase tracking-wider text-black">১০০% পিওর ফেব্রিক</h4>
            <p className="text-xs text-stone-500 font-bangla leading-relaxed">
              কোনো প্রকার সিন্থেটিক ভেজাল ছাড়া খাঁটি সিল্ক, ফাইন লিনেন ও প্রিমিয়াম সুতি কাপড়ের নিশ্চয়তা।
            </p>
          </div>

          <div className="p-6 bg-stone-50 border border-stone-200 space-y-2">
            <Scissors className="w-6 h-6 text-amber-800" />
            <h4 className="text-xs font-bold uppercase tracking-wider text-black">মাস্টার কারিগরি</h4>
            <p className="text-xs text-stone-500 font-bangla leading-relaxed">
              অভিজ্ঞ টেইলার্স মাস্টারদের তত্ত্বাবধানে নিখুঁত শোল্ডার ড্রপ ও পারফেক্ট বডি ফিটিং কাটিং।
            </p>
          </div>

          <div className="p-6 bg-stone-50 border border-stone-200 space-y-2">
            <Sparkles className="w-6 h-6 text-amber-800" />
            <h4 className="text-xs font-bold uppercase tracking-wider text-black">হ্যান্ডমেড কারুকাজ</h4>
            <p className="text-xs text-stone-500 font-bangla leading-relaxed">
              খাঁটি রেশমি সুতা ও মেটালিক জারি দিয়ে প্রতিটি পোশাকে দীর্ঘ সময় নিয়ে নিখুঁত সূচিকর্ম।
            </p>
          </div>

          <div className="p-6 bg-stone-50 border border-stone-200 space-y-2">
            <Award className="w-6 h-6 text-amber-800" />
            <h4 className="text-xs font-bold uppercase tracking-wider text-black">সহজ সাইজ এক্সচেঞ্জ</h4>
            <p className="text-xs text-stone-500 font-bangla leading-relaxed">
              কোনো সাইজে সমস্যা হলে ৩ কার্যদিবসের মধ্যে দ্রুত ও সম্পূর্ণ ফ্রিতে সাইজ পরিবর্তনের সুযোগ।
            </p>
          </div>
        </div>
      </div>

    </div>
  );
};
