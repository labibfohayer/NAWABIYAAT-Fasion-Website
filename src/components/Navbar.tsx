'use client';

import React, { useState } from 'react';
import { Search, ShoppingBag, Heart, Ruler, Menu, X, ChevronDown, Crown } from 'lucide-react';

interface NavbarProps {
  cartCount: number;
  wishlistCount: number;
  onOpenCart: () => void;
  onOpenSizeAdvisor: () => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  onNavigate: (view: { type: 'home' | 'category' | 'contact' | 'about'; categoryId?: string }) => void;
  currentView: string;
}

export const Navbar: React.FC<NavbarProps> = ({
  cartCount = 0,
  wishlistCount = 0,
  onOpenCart,
  onOpenSizeAdvisor,
  searchQuery,
  setSearchQuery,
  onNavigate,
  currentView
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <>
      {/* Top Notification Announcement Bar */}
      <div className="bg-[#090a0d] text-white text-[11px] py-2 px-4 border-b border-stone-800">
        <div className="max-w-[1800px] mx-auto flex items-center justify-between gap-4 font-sans tracking-wider uppercase">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse"></span>
            <span className="text-stone-300 text-xs">
              EID & WEDDING COLLECTION 2026 • 3-DAY EXPRESS DELIVERY NATIONWIDE • FREE SHIPPING OVER BDT 3,000
            </span>
          </div>

          <div className="hidden sm:flex items-center gap-6 text-[10px] text-stone-400">
            <button
              onClick={onOpenSizeAdvisor}
              className="hover:text-white transition-colors flex items-center gap-1 cursor-pointer"
            >
              <Ruler className="w-3 h-3 text-amber-300" />
              <span>Smart Size Calculator</span>
            </button>
            <a href="tel:+8801700000000" className="hover:text-white transition-colors">
              Hotline: +880 1700-000000
            </a>
          </div>
        </div>
      </div>

      {/* Main Minimalist High-Fashion Header */}
      <header className="sticky top-0 z-40 editorial-glass border-b border-stone-200 transition-all">
        <div className="max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12 h-20 flex items-center justify-between gap-4">
          
          {/* Brand Logo - NAWABIYAAT */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-1.5 text-stone-900 hover:bg-stone-100 rounded-lg cursor-pointer"
              aria-label="Toggle Navigation"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>

            <button
              onClick={() => onNavigate({ type: 'home' })}
              className="flex items-center gap-3 group text-left cursor-pointer"
            >
              <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full overflow-hidden border border-amber-400/50 shadow-md shrink-0 bg-black flex items-center justify-center">
                <img
                  src="/assets/images/logo.png"
                  alt="Nawabiyaat Royal Atelier"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                />
              </div>
              <div className="flex flex-col items-start">
                <div className="flex items-baseline gap-1.5">
                  <span className="font-serif text-2xl sm:text-3xl font-bold tracking-[0.16em] text-[#1c1917] leading-none uppercase">
                    NAWABIYAAT
                  </span>
                  <span className="text-[10px] text-amber-800 font-bold hidden sm:inline tracking-widest uppercase">ATELIER</span>
                </div>
                <span className="text-[8px] sm:text-[9px] tracking-[0.28em] text-stone-500 font-semibold uppercase mt-1 leading-none">
                  FASHION BEYOND TIME
                </span>
              </div>
            </button>
          </div>

          {/* Center Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7 text-[12px] uppercase tracking-widest font-semibold text-stone-700">
            <button
              onClick={() => onNavigate({ type: 'home' })}
              className={`hover:text-black transition-colors py-1 cursor-pointer ${
                currentView === 'home' ? 'border-b-2 border-black text-black' : ''
              }`}
            >
              HOME
            </button>

            {/* Collections Dropdown */}
            <div className="relative group py-1">
              <button
                onClick={() => {
                  onNavigate({ type: 'home' });
                  setTimeout(() => {
                    document.getElementById('shop-by-category')?.scrollIntoView({ behavior: 'smooth' });
                  }, 100);
                }}
                className="hover:text-black transition-colors flex items-center gap-1 group-hover:border-b-2 group-hover:border-black pb-0.5 cursor-pointer"
              >
                <span>COLLECTIONS</span>
                <ChevronDown className="w-3.5 h-3.5 text-stone-400 group-hover:text-black transition-transform group-hover:rotate-180" />
              </button>

              <div className="absolute left-0 top-full mt-2 w-60 bg-white border border-stone-200 shadow-xl py-2 z-50 hidden group-hover:block transition-all">
                <button
                  onClick={() => onNavigate({ type: 'category', categoryId: 'silk' })}
                  className="w-full text-left px-4 py-2.5 text-xs hover:bg-stone-50 text-stone-700 hover:text-black font-semibold flex items-center justify-between cursor-pointer"
                >
                  <span>ROYAL SILK PANJABI</span>
                  <span className="text-[10px] text-stone-400">→</span>
                </button>
                <button
                  onClick={() => onNavigate({ type: 'category', categoryId: 'katan' })}
                  className="w-full text-left px-4 py-2.5 text-xs hover:bg-stone-50 text-stone-700 hover:text-black font-semibold flex items-center justify-between cursor-pointer"
                >
                  <span>DESIGNER KATAN</span>
                  <span className="text-[10px] text-stone-400">→</span>
                </button>
                <button
                  onClick={() => onNavigate({ type: 'category', categoryId: 'kabli' })}
                  className="w-full text-left px-4 py-2.5 text-xs hover:bg-stone-50 text-stone-700 hover:text-black font-semibold flex items-center justify-between cursor-pointer"
                >
                  <span>KABLI SUIT SET</span>
                  <span className="text-[10px] text-stone-400">→</span>
                </button>
                <button
                  onClick={() => onNavigate({ type: 'category', categoryId: 'wedding' })}
                  className="w-full text-left px-4 py-2.5 text-xs hover:bg-stone-50 text-stone-700 hover:text-black font-semibold flex items-center justify-between cursor-pointer"
                >
                  <span>GROOM & WEDDING</span>
                  <span className="text-[10px] text-stone-400">→</span>
                </button>
                <button
                  onClick={() => onNavigate({ type: 'category', categoryId: 'cotton' })}
                  className="w-full text-left px-4 py-2.5 text-xs hover:bg-stone-50 text-stone-700 hover:text-black font-semibold flex items-center justify-between cursor-pointer"
                >
                  <span>FINE COTTON & LINEN</span>
                  <span className="text-[10px] text-stone-400">→</span>
                </button>
                <button
                  onClick={() => onNavigate({ type: 'category', categoryId: 'attar' })}
                  className="w-full text-left px-4 py-2.5 text-xs hover:bg-stone-50 text-stone-700 hover:text-black font-semibold flex items-center justify-between cursor-pointer"
                >
                  <span>NAWABI OUD & ATTAR</span>
                  <span className="text-[10px] text-stone-400">→</span>
                </button>
              </div>
            </div>

            <button
              onClick={() => onNavigate({ type: 'category', categoryId: 'silk' })}
              className={`hover:text-black transition-colors py-1 cursor-pointer ${
                currentView === 'silk' ? 'border-b-2 border-black text-black' : ''
              }`}
            >
              SILK PANJABI
            </button>

            <button
              onClick={() => onNavigate({ type: 'category', categoryId: 'kabli' })}
              className={`hover:text-black transition-colors py-1 cursor-pointer ${
                currentView === 'kabli' ? 'border-b-2 border-black text-black' : ''
              }`}
            >
              KABLI SET
            </button>

            <button
              onClick={() => onNavigate({ type: 'category', categoryId: 'wedding' })}
              className={`hover:text-black transition-colors py-1 cursor-pointer ${
                currentView === 'wedding' ? 'border-b-2 border-black text-black' : ''
              }`}
            >
              WEDDING & GROOM
            </button>

            <button
              onClick={() => onNavigate({ type: 'about' })}
              className={`hover:text-black transition-colors py-1 cursor-pointer ${
                currentView === 'about' ? 'border-b-2 border-black text-black' : ''
              }`}
            >
              ABOUT US
            </button>

            <button
              onClick={() => onNavigate({ type: 'contact' })}
              className={`hover:text-black transition-colors py-1 cursor-pointer ${
                currentView === 'contact' ? 'border-b-2 border-black text-black' : ''
              }`}
            >
              CONTACT
            </button>
          </nav>

          {/* Right Action Icons */}
          <div className="flex items-center gap-3 sm:gap-4">
            
            {/* Desktop Search input */}
            <div className="hidden md:flex items-center relative">
              <input
                type="text"
                placeholder="Search panjabi, fabric..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-36 xl:w-52 bg-stone-50 border border-stone-200 text-xs px-3 py-2 pl-8 focus:outline-none focus:border-black rounded-none transition-all placeholder:text-stone-400"
              />
              <Search className="w-3.5 h-3.5 text-stone-400 absolute left-2.5 pointer-events-none" />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-2 text-xs text-stone-400 hover:text-black cursor-pointer"
                >
                  ✕
                </button>
              )}
            </div>

            {/* Mobile Search Toggle */}
            <button
              onClick={() => setSearchOpen(!searchOpen)}
              className="md:hidden p-2 text-stone-700 hover:text-black cursor-pointer"
              aria-label="Search"
            >
              <Search className="w-5 h-5" />
            </button>

            {/* Size Advisor Button */}
            <button
              onClick={onOpenSizeAdvisor}
              className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 border border-stone-200 hover:border-black text-[11px] font-bold tracking-wider uppercase transition-colors cursor-pointer"
              title="Calculate your size"
            >
              <Ruler className="w-3.5 h-3.5 text-amber-700" />
              <span>Size Guide</span>
            </button>

            {/* Wishlist Button */}
            <button
              onClick={() => alert(`You have ${wishlistCount} item(s) in your wishlist!`)}
              className="relative p-2 text-stone-700 hover:text-black transition-colors cursor-pointer"
              title="Wishlist"
            >
              <Heart className="w-5 h-5" />
              {wishlistCount > 0 && (
                <span className="absolute top-1 right-1 w-4 h-4 bg-black text-white text-[9px] font-bold rounded-full flex items-center justify-center">
                  {wishlistCount}
                </span>
              )}
            </button>

            {/* Cart Trigger */}
            <button
              onClick={onOpenCart}
              className="relative bg-black text-white px-4 py-2.5 rounded-none flex items-center gap-2 hover:bg-stone-800 transition-colors shadow-sm cursor-pointer"
            >
              <ShoppingBag className="w-4 h-4" />
              <span className="text-xs font-bold uppercase tracking-wider hidden sm:inline">Bag</span>
              <span className="bg-amber-400 text-black text-[10px] font-bold px-1.5 py-0.2 rounded-full min-w-4 text-center">
                {cartCount}
              </span>
            </button>
          </div>

        </div>

        {/* Mobile Search Bar Dropdown */}
        {searchOpen && (
          <div className="md:hidden px-4 pb-3 pt-1 border-t border-stone-100">
            <div className="relative">
              <input
                type="text"
                placeholder="Search panjabi, fabric or collection..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-stone-50 border border-stone-300 text-xs px-3 py-2 pl-9 focus:outline-none focus:border-black rounded-none"
                autoFocus
              />
              <Search className="w-4 h-4 text-stone-400 absolute left-3 top-2.5" />
            </div>
          </div>
        )}

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-stone-200 bg-white px-4 py-4 space-y-2 text-xs uppercase tracking-wider font-semibold">
            <button
              onClick={() => {
                onNavigate({ type: 'home' });
                setMobileMenuOpen(false);
              }}
              className="block w-full text-left py-2 hover:text-black cursor-pointer"
            >
              HOME
            </button>
            <button
              onClick={() => {
                onNavigate({ type: 'category', categoryId: 'silk' });
                setMobileMenuOpen(false);
              }}
              className="block w-full text-left py-2 hover:text-black cursor-pointer"
            >
              ROYAL SILK PANJABI
            </button>
            <button
              onClick={() => {
                onNavigate({ type: 'category', categoryId: 'katan' });
                setMobileMenuOpen(false);
              }}
              className="block w-full text-left py-2 hover:text-black cursor-pointer"
            >
              DESIGNER KATAN
            </button>
            <button
              onClick={() => {
                onNavigate({ type: 'category', categoryId: 'kabli' });
                setMobileMenuOpen(false);
              }}
              className="block w-full text-left py-2 hover:text-black cursor-pointer"
            >
              KABLI SUIT SET
            </button>
            <button
              onClick={() => {
                onNavigate({ type: 'category', categoryId: 'wedding' });
                setMobileMenuOpen(false);
              }}
              className="block w-full text-left py-2 hover:text-black cursor-pointer"
            >
              WEDDING & GROOM
            </button>
            <button
              onClick={() => {
                onNavigate({ type: 'about' });
                setMobileMenuOpen(false);
              }}
              className="block w-full text-left py-2 hover:text-black cursor-pointer"
            >
              ABOUT THE ATELIER
            </button>
            <button
              onClick={() => {
                onNavigate({ type: 'contact' });
                setMobileMenuOpen(false);
              }}
              className="block w-full text-left py-2 hover:text-black cursor-pointer"
            >
              CONTACT & OUTLETS
            </button>
            <div className="pt-3 border-t border-stone-100 flex items-center justify-between">
              <button
                onClick={() => {
                  onOpenSizeAdvisor();
                  setMobileMenuOpen(false);
                }}
                className="text-amber-800 font-bold cursor-pointer"
              >
                📏 Smart Size Calculator
              </button>
              <a href="tel:+8801700000000" className="text-stone-500">
                +880 1700-000000
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
