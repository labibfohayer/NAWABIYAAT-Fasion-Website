'use client';

import React from 'react';
import { Crown } from 'lucide-react';

interface FooterProps {
  onOpenSizeAdvisor: () => void;
  onNavigate: (view: { type: 'home' | 'category' | 'contact' | 'about'; categoryId?: string }) => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenSizeAdvisor, onNavigate }) => {
  return (
    <footer className="bg-[#090a0d] text-stone-300 pt-16 md:pt-20 pb-12 border-t border-stone-800 text-left font-sans">
      <div className="max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12">
        
        {/* Main 5-Column Grid matching user's preferred layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-14 border-b border-stone-800/80">
          
          {/* 1. Brand Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-full bg-stone-900 border border-amber-400/40 text-amber-300 flex items-center justify-center shadow-md">
                <Crown className="w-5 h-5" />
              </div>
              <div>
                <span className="font-serif text-2xl font-bold tracking-[0.18em] text-white uppercase block leading-none">
                  NAWABIYAAT
                </span>
                <span className="text-[8px] tracking-[0.28em] text-amber-400 font-bold uppercase block mt-1 leading-none">
                  ROYAL PANJABI ATELIER
                </span>
              </div>
            </div>

            <p className="text-xs text-stone-400 leading-relaxed font-bangla">
              বাংলার সর্বশ্রেষ্ঠ তাঁত ঐতিহ্য ও খাঁটি মালবেরি সিল্কের মেলবন্ধনে তৈরি আধুনিক পুরুষের রাজকীয় পাঞ্জাবি সম্ভার।
            </p>

            {/* Social Pills: IG, FB, WA */}
            <div className="flex items-center gap-3 pt-1">
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-9 h-9 rounded-full bg-stone-900 border border-stone-700 hover:border-amber-400 hover:bg-amber-400 hover:text-black text-stone-300 flex items-center justify-center transition-all text-xs font-bold"
                title="Instagram"
              >
                IG
              </a>
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-9 h-9 rounded-full bg-stone-900 border border-stone-700 hover:border-amber-400 hover:bg-amber-400 hover:text-black text-stone-300 flex items-center justify-center transition-all text-xs font-bold"
                title="Facebook"
              >
                FB
              </a>
              <a 
                href="https://wa.me/8801700000000" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-9 h-9 rounded-full bg-stone-900 border border-stone-700 hover:border-emerald-500 hover:bg-emerald-500 hover:text-white text-stone-300 flex items-center justify-center transition-all text-xs font-bold"
                title="WhatsApp VIP"
              >
                WA
              </a>
            </div>
          </div>

          {/* 2. Collections */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-white mb-4 font-serif">
              COLLECTIONS
            </h4>
            <ul className="space-y-2.5 text-xs text-stone-400">
              <li>
                <button 
                  onClick={() => onNavigate({ type: 'home' })} 
                  className="hover:text-amber-300 transition-colors uppercase text-left cursor-pointer"
                >
                  ALL COLLECTIONS
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate({ type: 'category', categoryId: 'silk' })} 
                  className="hover:text-amber-300 transition-colors uppercase text-left cursor-pointer"
                >
                  ROYAL SILK PANJABI
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate({ type: 'category', categoryId: 'katan' })} 
                  className="hover:text-amber-300 transition-colors uppercase text-left cursor-pointer"
                >
                  DESIGNER KATAN
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate({ type: 'category', categoryId: 'kabli' })} 
                  className="hover:text-amber-300 transition-colors uppercase text-left cursor-pointer"
                >
                  KABLI SUIT SET
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate({ type: 'category', categoryId: 'wedding' })} 
                  className="hover:text-amber-300 transition-colors uppercase text-left cursor-pointer"
                >
                  WEDDING & GROOM
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate({ type: 'category', categoryId: 'cotton' })} 
                  className="hover:text-amber-300 transition-colors uppercase text-left cursor-pointer"
                >
                  CHIKANKARI COTTON
                </button>
              </li>
            </ul>
          </div>

          {/* 3. Atelier & Brand */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-white mb-4 font-serif">
              ATELIER & BRAND
            </h4>
            <ul className="space-y-2.5 text-xs text-stone-400">
              <li>
                <button 
                  onClick={() => onNavigate({ type: 'about' })} 
                  className="hover:text-amber-300 transition-colors uppercase text-left cursor-pointer"
                >
                  ABOUT NAWABIYAAT
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate({ type: 'contact' })} 
                  className="hover:text-amber-300 transition-colors uppercase text-left cursor-pointer"
                >
                  CONTACT & OUTLETS
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate({ type: 'contact' })} 
                  className="hover:text-amber-300 transition-colors uppercase text-left cursor-pointer"
                >
                  BESPOKE GROOM APPOINTMENT
                </button>
              </li>
              <li>
                <button 
                  onClick={onOpenSizeAdvisor} 
                  className="hover:text-amber-300 transition-colors uppercase text-left cursor-pointer text-amber-400"
                >
                  SIZE ADVISOR GUIDE
                </button>
              </li>
              <li>
                <span className="hover:text-white transition-colors cursor-pointer">
                  SHIPPING & DELIVERY
                </span>
              </li>
              <li>
                <span className="hover:text-white transition-colors cursor-pointer">
                  3 DAY FREE EXCHANGE
                </span>
              </li>
            </ul>
          </div>

          {/* 4. Showrooms */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-white mb-4 font-serif">
              SHOWROOMS
            </h4>
            <div className="space-y-3 text-xs text-stone-400">
              <div>
                <p className="font-bold text-stone-200">বনানী ফ্ল্যাগশিপ:</p>
                <p className="text-[11px] text-stone-400">রোড ১১, ব্লক বি, বনানী, ঢাকা</p>
              </div>
              <div>
                <p className="font-bold text-stone-200">ধানমন্ডি অ্যাটেলিয়ার:</p>
                <p className="text-[11px] text-stone-400">শিমুলতলা রোড, ধানমন্ডি ২৭, ঢাকা</p>
              </div>
              <div>
                <p className="font-bold text-stone-200">চট্টগ্রাম ডিসপ্লে:</p>
                <p className="text-[11px] text-stone-400">জিইসি মোড়, সিডিএ এভিনিউ, চট্টগ্রাম</p>
              </div>
            </div>
          </div>

          {/* 5. Newsletter */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-white mb-4 font-serif">
              NEWSLETTER
            </h4>
            <p className="text-xs text-stone-400 mb-3 leading-relaxed font-bangla">
              নতুন ঈদ ড্রপ ও ভিআইপি ডিসকাউন্ট পেতে ইমেইল সাবস্ক্রাইব করুন।
            </p>
            <form 
              onSubmit={(e) => { 
                e.preventDefault(); 
                alert('ধন্যবাদ! নবাবিয়াত এক্সক্লুসিভ ক্লাবে আপনি সাবস্ক্রাইব করেছেন।'); 
              }} 
              className="flex items-center"
            >
              <input 
                type="email" 
                required 
                placeholder="Enter your email" 
                className="w-full bg-stone-900 border border-stone-700 text-xs px-3.5 py-3 text-white outline-none focus:border-amber-400 rounded-none placeholder-stone-500"
              />
              <button 
                type="submit" 
                className="bg-amber-400 hover:bg-amber-300 text-black px-5 py-3 text-xs font-bold uppercase rounded-none transition-colors shrink-0 cursor-pointer"
              >
                JOIN
              </button>
            </form>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500">
          <p className="flex items-center gap-2">
            <span>© 2026 NAWABIYAAT (নবাবিয়াত) Atelier. সর্বস্বত্ব সংরক্ষিত।</span>
            <span className="text-stone-700">|</span>
            <a href="/admin" target="_blank" className="text-stone-400 hover:text-amber-400 transition-colors text-[11px] underline">
              🔒 এডমিন প্যানেল
            </a>
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 text-stone-400">
            <span className="text-stone-300 font-semibold">ক্যাশ অন ডেলিভারি</span>
            <span>•</span>
            <span className="text-stone-300 font-semibold">বিকাশ (bKash)</span>
            <span>•</span>
            <span className="text-stone-300 font-semibold">নগদ (Nagad)</span>
            <span>•</span>
            <span className="text-stone-300 font-semibold">VISA / MASTERCARD</span>
          </div>
        </div>

      </div>
    </footer>
  );
};