'use client';

import React, { useState, useEffect, useMemo } from 'react';
import { PRODUCTS_DATA } from '../data/products';
import { getStoredProducts, sanitizeProductImage } from '../utils/productStorage';
import { Product, CartItem, CustomerOrder } from '../types';
import { Navbar } from '../components/Navbar';
import { Hero } from '../components/Hero';
import { Categories } from '../components/Categories';
import { ProductCard } from '../components/ProductCard';
import { PromoBanners } from '../components/PromoBanners';
import { CategoryPage } from '../components/CategoryPage';
import { ContactPage } from '../components/ContactPage';
import { AboutPage } from '../components/AboutPage';
import { ProductModal } from '../components/ProductModal';
import { SizeAdvisorModal } from '../components/SizeAdvisorModal';
import { CartDrawer } from '../components/CartDrawer';
import { CheckoutModal } from '../components/CheckoutModal';
import { OrderSuccessModal } from '../components/OrderSuccessModal';
import { Footer } from '../components/Footer';
import { ArtisanHeritage } from '../components/ArtisanHeritage';
import { ClientTestimonials } from '../components/ClientTestimonials';
import { SlidersHorizontal, Play, Pause, Sparkles, Crown } from 'lucide-react';

export default function Home() {
  const [products, setProducts] = useState<Product[]>(PRODUCTS_DATA);
  
  // Page Routing State: { type: 'home' | 'category' | 'contact' | 'about', categoryId?: string }
  const [currentPage, setCurrentPage] = useState<{
    type: 'home' | 'category' | 'contact' | 'about';
    categoryId?: string;
  }>({
    type: 'home'
  });

  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [activeSort, setActiveSort] = useState<string>('popular');
  const [searchQuery, setSearchQuery] = useState<string>('');
  
  // Right-to-Left Animated Slider vs Grid Mode
  const [displayMode, setDisplayMode] = useState<'slider' | 'grid'>('slider');
  const [isAutoScrollPaused, setIsAutoScrollPaused] = useState(false);
  
  // Persistent Cart & Wishlist
  const [cart, setCart] = useState<CartItem[]>([]);
  const [wishlist, setWishlist] = useState<string[]>([]);

  // Modals Visibility
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isSizeAdvisorOpen, setIsSizeAdvisorOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [completedOrder, setCompletedOrder] = useState<CustomerOrder | null>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const [appliedCouponDiscount, setAppliedCouponDiscount] = useState(0);
  const [appliedCouponCode, setAppliedCouponCode] = useState('');

  // Load from localStorage on client mount
  useEffect(() => {
    try {
      const stored = getStoredProducts();
      if (stored && stored.length > 0) {
        setProducts(stored);
      }

      const handleProductsUpdate = (e: Event) => {
        const customEvent = e as CustomEvent<Product[]>;
        if (customEvent.detail && Array.isArray(customEvent.detail)) {
          setProducts(customEvent.detail);
        } else {
          setProducts(getStoredProducts());
        }
      };

      window.addEventListener('nawabiyaat_products_updated', handleProductsUpdate);
      window.addEventListener('storage', handleProductsUpdate);

      const savedCart = localStorage.getItem('nawabiyaat_cart');
      if (savedCart) {
        try {
          const parsedCart = JSON.parse(savedCart);
          if (Array.isArray(parsedCart)) {
            const sanitizedCart = parsedCart.map((item: CartItem) => {
              const canonical = PRODUCTS_DATA.find((p) => p.id === item.id);
              return {
                ...item,
                image: canonical ? canonical.image : sanitizeProductImage(item.image, item.id)
              };
            });
            setCart(sanitizedCart);
            localStorage.setItem('nawabiyaat_cart', JSON.stringify(sanitizedCart));
          }
        } catch {
          // ignore corrupted cart json
        }
      }

      const savedWishlist = localStorage.getItem('nawabiyaat_wishlist');
      if (savedWishlist) setWishlist(JSON.parse(savedWishlist));

      return () => {
        window.removeEventListener('nawabiyaat_products_updated', handleProductsUpdate);
        window.removeEventListener('storage', handleProductsUpdate);
      };
    } catch (e) {
      console.error('Failed to load localStorage', e);
    }
  }, []);

  // Sync to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('nawabiyaat_cart', JSON.stringify(cart));
    } catch (e) {
      console.error('Failed to save cart', e);
    }
  }, [cart]);

  useEffect(() => {
    try {
      localStorage.setItem('nawabiyaat_wishlist', JSON.stringify(wishlist));
    } catch (e) {
      console.error('Failed to save wishlist', e);
    }
  }, [wishlist]);

  const handleNavigate = (view: { type: 'home' | 'category' | 'contact' | 'about'; categoryId?: string }) => {
    setCurrentPage(view);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const showToast = (message: string) => {
    setToastMessage(message);
    setTimeout(() => setToastMessage(null), 3000);
  };

  // Cart Operations
  const handleAddToCart = (product: Product, size?: string, color?: string, quantity: number = 1) => {
    const pSize = size || (product.sizes && product.sizes.length > 0 ? product.sizes[0] : 'Standard');
    const pColor = color || (product.colors && product.colors.length > 0 ? product.colors[0].name : '');

    setCart((prev) => {
      const existingIndex = prev.findIndex(
        (item) => item.id === product.id && item.size === pSize && item.color === pColor
      );

      if (existingIndex > -1) {
        const updated = [...prev];
        updated[existingIndex].quantity += quantity;
        return updated;
      } else {
        return [
          ...prev,
          {
            id: product.id,
            nameBangla: product.nameBangla,
            nameEnglish: product.nameEnglish,
            price: product.price,
            image: product.image,
            size: pSize,
            color: pColor,
            quantity: quantity
          }
        ];
      }
    });

    showToast(`"${product.nameEnglish}" added to your bag!`);
    setIsCartOpen(true);
    setSelectedProduct(null);
  };

  const handleUpdateQuantity = (index: number, delta: number) => {
    setCart((prev) => {
      const updated = [...prev];
      updated[index].quantity += delta;
      if (updated[index].quantity <= 0) {
        updated.splice(index, 1);
      }
      return updated;
    });
  };

  const handleRemoveCartItem = (index: number) => {
    setCart((prev) => {
      const updated = [...prev];
      updated.splice(index, 1);
      return updated;
    });
    showToast('Item removed from shopping bag.');
  };

  const handleToggleWishlist = (productId: string) => {
    setWishlist((prev) => {
      if (prev.includes(productId)) {
        showToast('Removed from wishlist');
        return prev.filter((id) => id !== productId);
      } else {
        showToast('Added to wishlist! ❤️');
        return [...prev, productId];
      }
    });
  };

  const handleBuyNowDirect = (product: Product, size?: string, color?: string) => {
    handleAddToCart(product, size, color, 1);
    setIsCartOpen(false);
    setIsCheckoutOpen(true);
  };

  // Filter & Sort for Home Page
  const filteredProducts = useMemo(() => {
    let list = [...products];

    if (activeCategory !== 'all') {
      list = list.filter((p) => p.category === activeCategory);
    }

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim();
      list = list.filter(
        (p) =>
          p.nameBangla.toLowerCase().includes(q) ||
          p.nameEnglish.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q) ||
          (p.fabric && p.fabric.toLowerCase().includes(q))
      );
    }

    if (activeSort === 'low-high') {
      list.sort((a, b) => a.price - b.price);
    } else if (activeSort === 'high-low') {
      list.sort((a, b) => b.price - a.price);
    } else if (activeSort === 'rating') {
      list.sort((a, b) => b.rating - a.rating);
    } else if (activeSort === 'popular') {
      list.sort((a, b) => b.reviewsCount - a.reviewsCount);
    }

    return list;
  }, [products, activeCategory, searchQuery, activeSort]);

  const totalCartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  const getCurrentViewName = () => {
    if (currentPage.type === 'home') return 'home';
    if (currentPage.type === 'category') return currentPage.categoryId || 'category';
    return currentPage.type;
  };

  return (
    <div className="min-h-screen bg-white text-stone-900 font-sans flex flex-col justify-between selection:bg-stone-200">
      
      {/* Toast Feedback */}
      {toastMessage && (
        <div className="fixed top-24 right-4 z-50 bg-black text-white text-xs px-4 py-3 rounded-none shadow-2xl flex items-center gap-2 animate-bounce border-l-2 border-amber-400">
          <Sparkles className="w-4 h-4 text-amber-300" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* 1. Header with Page Routing */}
      <Navbar 
        cartCount={totalCartCount}
        wishlistCount={wishlist.length}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenSizeAdvisor={() => setIsSizeAdvisorOpen(true)}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        currentView={getCurrentViewName()}
        onNavigate={handleNavigate}
      />

      {/* 2. Main Body: Conditional Views */}
      <main className="flex-1">
        {/* VIEW A: DEDICATED CATEGORY PAGE */}
        {currentPage.type === 'category' && (
          <CategoryPage 
            categoryId={currentPage.categoryId || 'silk'}
            products={products}
            wishlist={wishlist}
            onToggleWishlist={handleToggleWishlist}
            onOpenDetails={(p) => setSelectedProduct(p)}
            onAddToCart={handleAddToCart}
            onBackToHome={() => handleNavigate({ type: 'home' })}
            onSelectCategory={(catId) => handleNavigate({ type: 'category', categoryId: catId })}
          />
        )}

        {/* VIEW B: DEDICATED CONTACT & EMAIL INQUIRY PAGE */}
        {currentPage.type === 'contact' && (
          <ContactPage 
            onBackToHome={() => handleNavigate({ type: 'home' })}
          />
        )}

        {/* VIEW C: DEDICATED ABOUT & HERITAGE PAGE */}
        {currentPage.type === 'about' && (
          <AboutPage 
            onBackToHome={() => handleNavigate({ type: 'home' })}
            onExploreCollection={() => handleNavigate({ type: 'home' })}
          />
        )}

        {/* VIEW D: HOMEPAGE VIEW */}
        {currentPage.type === 'home' && (
          <>
            {/* Hero Section */}
            <Hero 
              onExploreClick={() => document.getElementById('trending-now')?.scrollIntoView({ behavior: 'smooth' })}
              onOpenSizeAdvisor={() => setIsSizeAdvisorOpen(true)}
            />

            {/* Shop By Category Cards */}
            <Categories 
              onSelectCategory={(cat) => handleNavigate({ type: 'category', categoryId: cat })}
            />

            {/* TRENDING NOW Section with Smooth Right-to-Left Product Animation */}
            <section id="trending-now" className="max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12 py-16 scroll-mt-20">
              <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-6 mb-8 border-b border-stone-200 text-left">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/10 border border-amber-400/30 text-amber-800 text-[10px] font-bold uppercase tracking-[0.2em] mb-2">
                    <Crown className="w-3.5 h-3.5 text-amber-700" />
                    <span>CURATED SIGNATURE ATELIER 2026</span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-black uppercase tracking-tight text-stone-900">
                    NAWABIYAAT SIGNATURE COLLECTION
                  </h2>
                </div>
                <p className="text-xs sm:text-sm text-stone-500 max-w-md">
                  Pure handloom silk, Varanasi katan, and tailored kabli suits. Choose your preferred collection.
                </p>
              </div>

              {/* Minimal Tab Filters, View Modes & Controls */}
              <div className="flex flex-col lg:flex-row items-center justify-between gap-4 pb-6 border-b border-stone-200 mb-8">
                {/* Category Filter Tabs */}
                <div className="flex items-center gap-2 overflow-x-auto text-[11px] uppercase tracking-wider font-semibold w-full lg:w-auto pb-2 lg:pb-0">
                  {[
                    { id: 'all', label: 'All Items' },
                    { id: 'silk', label: 'Royal Silk' },
                    { id: 'katan', label: 'Designer Katan' },
                    { id: 'kabli', label: 'Kabli Suit Set' },
                    { id: 'wedding', label: 'Wedding & Groom' },
                    { id: 'cotton', label: 'Fine Cotton' },
                    { id: 'attar', label: 'Nawabi Oud' }
                  ].map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveCategory(tab.id)}
                      className={`py-2 px-4 whitespace-nowrap transition-all rounded-lg cursor-pointer ${
                        activeCategory === tab.id
                          ? 'bg-stone-900 text-amber-300 font-bold shadow-sm'
                          : 'bg-stone-100 text-stone-600 hover:text-black hover:bg-stone-200'
                      }`}
                    >
                      {tab.label}
                    </button>
                  ))}
                </div>

                {/* Right Controls: Mode Toggle & Sort */}
                <div className="flex items-center gap-3 w-full lg:w-auto justify-between lg:justify-end">
                  
                  {/* Slider vs Grid Toggle */}
                  <div className="flex items-center border border-stone-200 bg-stone-100 p-1 rounded-lg">
                    <button
                      onClick={() => setDisplayMode('slider')}
                      className={`px-3 py-1.5 text-xs font-bold uppercase tracking-wider transition-all rounded-md flex items-center gap-1.5 cursor-pointer ${
                        displayMode === 'slider' ? 'bg-stone-900 text-white shadow-sm' : 'text-stone-600 hover:text-black'
                      }`}
                      title="Continuous Right to Left Animation"
                    >
                      <span>▶ AUTO-SCROLL</span>
                    </button>
                    <button
                      onClick={() => setDisplayMode('grid')}
                      className={`px-3 py-1.5 text-xs font-bold uppercase tracking-wider transition-all rounded-md flex items-center gap-1.5 cursor-pointer ${
                        displayMode === 'grid' ? 'bg-stone-900 text-white shadow-sm' : 'text-stone-600 hover:text-black'
                      }`}
                      title="Classic Grid View"
                    >
                      <span>▦ GRID VIEW</span>
                    </button>
                  </div>

                  {displayMode === 'slider' && (
                    <button
                      onClick={() => setIsAutoScrollPaused(!isAutoScrollPaused)}
                      className="text-xs px-2.5 py-1.5 border border-stone-200 hover:border-black font-semibold uppercase tracking-wider bg-white transition-colors cursor-pointer flex items-center gap-1"
                      title={isAutoScrollPaused ? 'Resume auto-scroll' : 'Pause auto-scroll'}
                    >
                      {isAutoScrollPaused ? (
                        <>
                          <Play className="w-3 h-3" />
                          <span>PLAY</span>
                        </>
                      ) : (
                        <>
                          <Pause className="w-3 h-3" />
                          <span>PAUSE</span>
                        </>
                      )}
                    </button>
                  )}

                  <div className="relative">
                    <select
                      value={activeSort}
                      onChange={(e) => setActiveSort(e.target.value)}
                      className="bg-stone-50 border border-stone-200 text-stone-800 text-xs py-2 px-3 pr-8 focus:outline-none focus:border-black cursor-pointer rounded-none appearance-none font-semibold uppercase tracking-wider"
                    >
                      <option value="popular">Popularity</option>
                      <option value="low-high">Price: Low to High</option>
                      <option value="high-low">Price: High to Low</option>
                      <option value="rating">Top Rated</option>
                    </select>
                    <SlidersHorizontal className="w-3.5 h-3.5 text-stone-400 absolute right-2.5 top-2.5 pointer-events-none" />
                  </div>
                </div>
              </div>

              {/* Mode 1: RIGHT-TO-LEFT ANIMATED MARQUEE / SLIDER */}
              {displayMode === 'slider' ? (
                <div className="relative overflow-hidden w-full py-4 group">
                  {/* Subtle fade edges for luxury feel */}
                  <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-20 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
                  <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-20 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>

                  {/* Infinite Marquee Track Moving Right to Left */}
                  <div 
                    className="flex gap-6 w-max"
                    style={{
                      animation: isAutoScrollPaused ? 'none' : 'marqueeRTL 36s linear infinite'
                    }}
                  >
                    {/* Render duplicated list for continuous smooth looping */}
                    {[...filteredProducts, ...filteredProducts].map((product, idx) => (
                      <div 
                        key={`${product.id}-${idx}`} 
                        className="w-[270px] sm:w-[300px] lg:w-[320px] shrink-0"
                      >
                        <ProductCard
                          product={product}
                          isWishlisted={wishlist.includes(product.id)}
                          onToggleWishlist={handleToggleWishlist}
                          onOpenDetails={(p) => setSelectedProduct(p)}
                          onAddToCart={handleAddToCart}
                        />
                      </div>
                    ))}
                  </div>

                  <p className="text-center text-xs text-stone-400 mt-6 flex items-center justify-center gap-1.5">
                    <span>💡 Hover over any product card to pause auto-scroll and select size for one-click "ADD TO CART".</span>
                  </p>
                </div>
              ) : (
                /* Mode 2: CLASSIC GRID VIEW */
                <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-5 gap-4 sm:gap-6 lg:gap-8">
                  {filteredProducts.map((product) => (
                    <ProductCard
                      key={product.id}
                      product={product}
                      isWishlisted={wishlist.includes(product.id)}
                      onToggleWishlist={handleToggleWishlist}
                      onOpenDetails={(p) => setSelectedProduct(p)}
                      onAddToCart={handleAddToCart}
                    />
                  ))}
                </div>
              )}
            </section>

            {/* 3-Box Promo Banner Section */}
            <PromoBanners 
              onExploreSilk={() => handleNavigate({ type: 'category', categoryId: 'silk' })}
              onExploreWedding={() => handleNavigate({ type: 'category', categoryId: 'wedding' })}
              onShopBundle={() => {
                const pj = products.find(x => x.id === 'nw-silk-01');
                const at = products.find(x => x.id === 'nw-at-01');
                if (pj) handleAddToCart(pj, 'L (40)', 'Pure Ivory Cream');
                if (at) handleAddToCart(at, '6ml (Royal Wooden Box)', 'Golden Amber Essence');
              }}
            />

            {/* Heritage & Craftsmanship Pillars */}
            <ArtisanHeritage />

            {/* Client Testimonials & Royal Client Diaries */}
            <ClientTestimonials />
          </>
        )}
      </main>

      {/* Footer */}
      <Footer 
        onOpenSizeAdvisor={() => setIsSizeAdvisorOpen(true)}
        onNavigate={handleNavigate}
      />

      {/* Modals & Cart Drawer */}
      <ProductModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onAddToCart={handleAddToCart}
        onBuyNowDirect={handleBuyNowDirect}
        onOpenSizeAdvisor={() => {
          setSelectedProduct(null);
          setIsSizeAdvisorOpen(true);
        }}
      />

      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cart={cart}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveCartItem}
        onProceedToCheckout={(discount, code) => {
          setAppliedCouponDiscount(discount);
          setAppliedCouponCode(code);
          setIsCartOpen(false);
          setIsCheckoutOpen(true);
        }}
      />

      <SizeAdvisorModal
        isOpen={isSizeAdvisorOpen}
        onClose={() => setIsSizeAdvisorOpen(false)}
      />

      <CheckoutModal
        isOpen={isCheckoutOpen}
        onClose={() => setIsCheckoutOpen(false)}
        cart={cart}
        couponDiscount={appliedCouponDiscount}
        couponCode={appliedCouponCode}
        onOrderSuccess={(order) => {
          setIsCheckoutOpen(false);
          setCart([]);
          setCompletedOrder(order);
        }}
      />

      <OrderSuccessModal
        order={completedOrder}
        onClose={() => setCompletedOrder(null)}
      />

    </div>
  );
}
