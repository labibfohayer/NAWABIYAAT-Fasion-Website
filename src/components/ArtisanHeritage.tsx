'use client';

import React from 'react';
import { Crown, Sparkles, Feather, Scissors, Award } from 'lucide-react';

export const ArtisanHeritage: React.FC = () => {
  const pillars = [
    {
      icon: Feather,
      title: 'Pure Mulberry Silk',
      subtitle: '100% NATURAL HANDLOOM DRAPE',
      desc: 'Zero synthetic polyester. Woven from 100% natural mulberry raw silk that delivers natural coolness, subtle sheen, and effortless drape.'
    },
    {
      icon: Scissors,
      title: 'Master Tailoring & Cut',
      subtitle: 'PRECISION COUTURE FORMULA',
      desc: 'Engineered by generational master ustads for unmatched collar and shoulder posture that maintains structure all day without creasing.'
    },
    {
      icon: Sparkles,
      title: 'Handmade Zardozi Art',
      subtitle: 'ANTIQUE METALLIC THREADING',
      desc: 'Collar and plackets are embellished with pure metallic zari and micro sequins, taking up to forty hours of meticulous artisanal needlework.'
    },
    {
      icon: Award,
      title: 'Signature Brass Buttons',
      subtitle: 'CUSTOM EMBOSSED ATELIER BUTTONS',
      desc: 'Custom-cast antique brass and enamel buttons bearing the Nawabiyaat royal seal, designed to never tarnish or corrode.'
    }
  ];

  return (
    <section className="py-16 md:py-20 bg-stone-50 border-y border-stone-200 text-left font-sans">
      <div className="max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-2 mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-amber-100 text-amber-900 text-[10px] font-bold uppercase tracking-[0.2em]">
            <Crown className="w-3.5 h-3.5 text-amber-800" />
            <span>NAWABIYAAT ARTISANAL CRAFTSMANSHIP</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-serif font-black uppercase tracking-tight text-stone-900">
            Why Nawabiyaat Stands Apart
          </h2>

          <p className="text-xs sm:text-sm text-stone-600 font-light">
            More than just clothing—each Nawabiyaat garment is a living testament to centuries of Bengal weaving heritage and modern royal refinement.
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

                <p className="text-xs text-stone-600 leading-relaxed font-light">
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