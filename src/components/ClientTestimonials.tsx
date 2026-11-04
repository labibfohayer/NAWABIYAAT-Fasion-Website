'use client';

import React from 'react';
import { Star, CheckCircle, Quote, Crown } from 'lucide-react';

export const ClientTestimonials: React.FC = () => {
  const reviews = [
    {
      id: 1,
      author: 'Barrister Tanveer Ahmed',
      location: 'Gulshan-2, Dhaka',
      product: 'Royal Midnight Zari Silk Panjabi',
      rating: 5,
      comment: 'I was hesitant about ordering ethnic couture online, but the craftsmanship of Nawabiyaat blew me away! The silk sheen, the collar posture, and the fit were immaculate. Delivered in 2 days.',
      date: '2 days ago',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80'
    },
    {
      id: 2,
      author: 'Mahmudul Hasan Fuad',
      location: 'Dhanmondi, Dhaka',
      product: 'Ivory Pearl Wedding Sherwani',
      rating: 5,
      comment: 'Wore the Ivory Pearl Sherwani for my wedding reception. Everyone was asking which luxury designer house I commissioned! The silk fabric and handcrafted pearls felt truly royal.',
      date: '1 week ago',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80'
    },
    {
      id: 3,
      author: 'Engr. Sabbir Chowdhury',
      location: 'Khulshi, Chattogram',
      product: 'Sultanate Jet Black Kabli Set',
      rating: 5,
      comment: 'The Jet Black Kabli Set is absolute luxury. The mercerized Egyptian cotton stays crisp without wrinkling, and the color depth remains pristine. Exceptional customer care too.',
      date: '2 weeks ago',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&q=80'
    }
  ];

  return (
    <section className="py-16 md:py-20 bg-white border-b border-stone-200 text-left font-sans">
      <div className="max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-2 mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-amber-100 text-amber-900 text-[10px] font-bold uppercase tracking-[0.2em]">
            <Crown className="w-3.5 h-3.5 text-amber-800" />
            <span>NAWABIYAAT CLIENT DIARIES</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-serif font-black uppercase tracking-tight text-stone-900">
            Client Words & Experiences
          </h2>

          <p className="text-xs sm:text-sm text-stone-600 font-light">
            Genuine testimonials from gentlemen across the country who trust Nawabiyaat for their defining moments.
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

                <p className="text-xs sm:text-sm text-stone-700 leading-relaxed italic font-light">
                  "{rev.comment}"
                </p>

                <div className="text-[11px] text-amber-900 font-bold bg-amber-50/80 px-2.5 py-1 border border-amber-200/60 inline-block">
                  Curated Item: {rev.product}
                </div>
              </div>

              <div className="flex items-center gap-3 pt-6 mt-6 border-t border-stone-200">
                <img
                  src={rev.avatar}
                  alt={rev.author}
                  className="w-10 h-10 rounded-full object-cover border border-stone-300"
                />
                <div>
                  <div className="flex items-center gap-1.5 font-bold text-stone-900 text-xs">
                    <span>{rev.author}</span>
                    <span title="Verified Client">
                      <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
                    </span>
                  </div>
                  <div className="text-[10px] text-stone-400">
                    {rev.location} • {rev.date}
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};