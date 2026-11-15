'use client';

import React, { useState, useEffect } from 'react';
import { ChevronUp } from 'lucide-react';

export const ScrollToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 350) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Scroll to top of page"
      className={`fixed bottom-6 right-6 z-40 w-12 h-12 rounded-full bg-[#090a0d]/95 backdrop-blur-md border border-amber-400/50 text-amber-400 hover:text-amber-300 hover:border-amber-300 shadow-xl shadow-black/40 hover:shadow-amber-500/20 flex flex-col items-center justify-center transition-all duration-300 group cursor-pointer ${
        isVisible
          ? 'opacity-100 translate-y-0 scale-100 pointer-events-auto'
          : 'opacity-0 translate-y-4 scale-90 pointer-events-none'
      }`}
      title="Back to Top"
    >
      <ChevronUp className="w-5 h-5 transition-transform duration-200 group-hover:-translate-y-0.5" />
      <span className="text-[8px] font-bold tracking-widest uppercase font-mono -mt-1 leading-none text-amber-300/80 group-hover:text-amber-300">
        TOP
      </span>
    </button>
  );
};
