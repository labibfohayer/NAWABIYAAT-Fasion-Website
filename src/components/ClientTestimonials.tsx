'use client';

import React from 'react';
import { Star, CheckCircle, Quote, Crown } from 'lucide-react';

export const ClientTestimonials: React.FC = () => {
  const reviews = [
    {
      id: 1,
      author: 'ব্যারিস্টার তানভীর আহমেদ',
      location: 'গুলশান-২, ঢাকা',
      product: 'রয়্যাল মিডনাইট জারি সিল্ক পাঞ্জাবি',
      rating: 5,
      comment: 'অনলাইনে কাপড় কিনতে সবসময় সংশয় কাজ করত, কিন্তু নবাবিয়াতের ফিনিশিং দেখার পর আমি মুগ্ধ! কাপড়ের গ্লস, কলারের সেলাই আর সাইজ ফিটিং একদম পারফেক্ট ছিল। ডেলিভারিও পেয়েছি ২ দিনের মধ্যে।',
      date: '২ দিন আগে',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80'
    },
    {
      id: 2,
      author: 'মাহমুদুল হাসান ফুয়াদ',
      location: 'ধানমন্ডি, ঢাকা',
      product: 'আইভরি পার্ল বর ও ওয়েডিং শেরওয়ানি',
      rating: 5,
      comment: 'আমার বিয়ের রিসেপশনের জন্য আইভরি পার্ল শেরওয়ানিটা নিয়েছিলাম। সবাই জিজ্ঞেস করছিল কোন ডিজাইনার হাউজ থেকে নেওয়া! কাপড়ের কোয়ালিটি ও সূক্ষ্ম মুক্তোর কাজ সত্যি রয়্যাল ছিল।',
      date: '১ সপ্তাহ আগে',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80'
    },
    {
      id: 3,
      author: 'ইঞ্জিনিয়ার সাব্বির চৌধুরী',
      location: 'খুলশী, চট্টগ্রাম',
      product: 'সালতানাত জেট ব্ল্যাক কাবলি সেট',
      rating: 5,
      comment: 'জেট ব্ল্যাক কাবলি সেটটা সত্যিই প্রিমিয়াম। কাপড় ধোয়ার পরেও রঙ বিন্দুমাত্র নষ্ট হয়নি আর ইস্ত্রি ছাড়াই অনেকক্ষণ চমৎকার থাকে। কাস্টমার কেয়ারের রেসপন্সও দারুণ।',
      date: '২ সপ্তাহ আগে',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&q=80'
    }
  ];

  return (
    <section className="py-16 md:py-20 bg-white border-b border-stone-200 text-left">
      <div className="max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-2 mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-amber-100 text-amber-900 text-[10px] font-bold uppercase tracking-[0.2em]">
            <Crown className="w-3.5 h-3.5 text-amber-800" />
            <span>NAWABIYAAT CLIENT DIARIES</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-stone-900 font-sans">
            গ্রাহকদের চোখে নবাবিয়াত অভিজ্ঞতা
          </h2>

          <p className="text-xs sm:text-sm text-stone-600 font-bangla">
            দেশজুড়ে হাজারো রুচিশীল ভদ্রলোকের আস্থা ও ভালোবাসার সত্য গল্প
          </p>
        </div>

        {/* 3 Review Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((rev) => (
            <div
              key={rev.id}
              className="bg-stone-50 border border-stone-200 p-7 flex flex-col justify-between hover:shadow-lg transition-all"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-amber-500">
                    {Array.from({ length: rev.rating }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 text-stone-300" />
                </div>

                <p className="text-xs sm:text-sm text-stone-700 leading-relaxed font-bangla italic">
                  "{rev.comment}"
                </p>

                <div className="text-[11px] text-amber-900 font-bold bg-amber-50/80 px-2.5 py-1 border border-amber-200/60 inline-block font-bangla">
                  সংগ্রহ: {rev.product}
                </div>
              </div>

              <div className="flex items-center gap-3 pt-5 mt-5 border-t border-stone-200">
                <img
                  src={rev.avatar}
                  alt={rev.author}
                  className="w-10 h-10 rounded-full object-cover border border-stone-300"
                />
                <div>
                  <div className="text-xs font-bold text-stone-900 flex items-center gap-1 font-bangla">
                    <span>{rev.author}</span>
                    <span title="ভেরিফাইড ক্রেতা">
                      <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
                    </span>
                  </div>
                  <div className="text-[11px] text-stone-500 font-bangla">{rev.location} • {rev.date}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
