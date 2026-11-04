'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { 
  Crown, 
  Plus, 
  Trash2, 
  Edit3, 
  Search, 
  Filter, 
  ExternalLink, 
  CheckCircle, 
  AlertCircle, 
  X, 
  Upload, 
  Image as ImageIcon, 
  ShoppingBag, 
  Clock, 
  Tag, 
  DollarSign, 
  Layers, 
  RefreshCw, 
  Check, 
  Eye, 
  Package, 
  Phone, 
  MapPin, 
  Save, 
  Sparkles
} from 'lucide-react';
import { Product, CustomerOrder } from '../../types';
import { 
  getStoredProducts, 
  saveStoredProducts, 
  resetStoredProducts, 
  getStoredOrders, 
  saveStoredOrders 
} from '../../utils/productStorage';

export default function AdminDashboard() {
  const [products, setProducts] = useState<Product[]>([]);
  const [orders, setOrders] = useState<CustomerOrder[]>([]);
  const [activeTab, setActiveTab] = useState<'products' | 'orders' | 'settings'>('products');

  // Filter & Search
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategoryFilter, setSelectedCategoryFilter] = useState('all');
  const [toastMessage, setToastMessage] = useState<{ text: string; type: 'success' | 'error' } | null>(null);

  // Modal State for Add / Edit Product
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);

  // Form Fields
  const [formId, setFormId] = useState('');
  const [formNameBangla, setFormNameBangla] = useState('');
  const [formNameEnglish, setFormNameEnglish] = useState('');
  const [formCategory, setFormCategory] = useState<'silk' | 'katan' | 'kabli' | 'cotton' | 'wedding' | 'attar'>('silk');
  const [formPrice, setFormPrice] = useState<number>(4500);
  const [formOriginalPrice, setFormOriginalPrice] = useState<number>(5500);
  const [formImage, setFormImage] = useState('/assets/images/panjabi.jpg');
  const [formBadge, setFormBadge] = useState('NEW DROP');
  const [formFabric, setFormFabric] = useState('১০০% খাঁটি মালবেরি সিল্ক');
  const [formDescription, setFormDescription] = useState('');
  const [formInStock, setFormInStock] = useState(true);
  const [formSizes, setFormSizes] = useState<string[]>(['M (38)', 'L (40)', 'XL (42)', 'XXL (44)']);

  // Site Settings Form
  const [topNotice, setTopNotice] = useState('✨ নবাবিয়াত ঈদ ও ওয়েডিং কালেকশন ২০২৬ • সারা বাংলাদেশে ৩ দিনে ক্যাশ অন ডেলিভারি • ৳৩,০০০+ অর্ডারে ফ্রি শিপিং');
  const [hotline, setHotline] = useState('+880 1700-000000');
  const [freeShippingThreshold, setFreeShippingThreshold] = useState(3000);

  // Preset image gallery for quick selection
  const imagePresets = [
    { label: 'রয়্যাল সিল্ক (Panjabi)', url: '/assets/images/panjabi.jpg' },
    { label: 'সালতানাত কাবলি (Jubbah/Kabli)', url: '/assets/images/jubbah.jpg' },
    { label: 'বারাণসী কাতান (Katan Weave)', url: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=800&q=80' },
    { label: 'ওয়েডিং শেরওয়ানি (Groom Wedding)', url: 'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=800&q=80' },
    { label: 'ব্ল্যাক গ্লস রেশম (Black Silk)', url: 'https://images.unsplash.com/photo-1617127365659-c47fa864d8bc?auto=format&fit=crop&w=800&q=80' },
    { label: 'নবাবী আতর ও উদ (Oud & Attar)', url: 'https://images.unsplash.com/photo-1547887537-6158d64c35b3?auto=format&fit=crop&w=800&q=80' }
  ];

  const standardSizesList = ['M (38)', 'L (40)', 'XL (42)', 'XXL (44)', '3XL (46)'];

  // Load from Storage
  useEffect(() => {
    const loadedProducts = getStoredProducts();
    setProducts(loadedProducts);

    const loadedOrders = getStoredOrders();
    setOrders(loadedOrders);

    const handleProductsUpdate = (e: Event) => {
      const customEvent = e as CustomEvent<Product[]>;
      if (customEvent.detail) setProducts(customEvent.detail);
      else setProducts(getStoredProducts());
    };

    window.addEventListener('nawabiyaat_products_updated', handleProductsUpdate);
    return () => window.removeEventListener('nawabiyaat_products_updated', handleProductsUpdate);
  }, []);

  const showToast = (text: string, type: 'success' | 'error' = 'success') => {
    setToastMessage({ text, type });
    setTimeout(() => setToastMessage(null), 3000);
  };

  // Open Modal for Add
  const handleOpenAddModal = () => {
    setEditingProduct(null);
    setFormId(`nw-${Date.now().toString().slice(-6)}`);
    setFormNameBangla('');
    setFormNameEnglish('');
    setFormCategory('silk');
    setFormPrice(4850);
    setFormOriginalPrice(5800);
    setFormImage('/assets/images/panjabi.jpg');
    setFormBadge('NEW ARRIVAL');
    setFormFabric('১০০% খাঁটি মালবেরি সিল্ক ও সূক্ষ্ম জারি কাজ');
    setFormDescription('নবাবিয়াত রাজকীয় কালেকশন। কলার ও প্লেকেটে নিখুঁত কাজ এবং আরামদায়ক মাস্টার ফিটিং।');
    setFormInStock(true);
    setFormSizes(['M (38)', 'L (40)', 'XL (42)', 'XXL (44)']);
    setIsModalOpen(true);
  };

  // Open Modal for Edit
  const handleOpenEditModal = (p: Product) => {
    setEditingProduct(p);
    setFormId(p.id);
    setFormNameBangla(p.nameBangla);
    setFormNameEnglish(p.nameEnglish);
    setFormCategory(p.category);
    setFormPrice(p.price);
    setFormOriginalPrice(p.originalPrice || Math.round(p.price * 1.15));
    setFormImage(p.image);
    setFormBadge(p.badge || 'EXCLUSIVE');
    setFormFabric(p.fabric || '১০০% পিওর ফেব্রিক');
    setFormDescription(p.description || '');
    setFormInStock(p.inStock);
    setFormSizes(p.sizes || ['M (38)', 'L (40)', 'XL (42)']);
    setIsModalOpen(true);
  };

  // Save Product (Create or Update)
  const handleSaveProduct = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formNameBangla || !formNameEnglish) {
      showToast('অনুগ্রহ করে পণ্যের বাংলা ও ইংরেজি নাম দিন', 'error');
      return;
    }

    const discount = formOriginalPrice > formPrice 
      ? Math.round(((formOriginalPrice - formPrice) / formOriginalPrice) * 100) 
      : 0;

    const newProduct: Product = {
      id: formId,
      nameBangla: formNameBangla,
      nameEnglish: formNameEnglish,
      category: formCategory,
      price: Number(formPrice),
      originalPrice: Number(formOriginalPrice),
      discountPercentage: discount > 0 ? discount : undefined,
      image: formImage || '/assets/images/panjabi.jpg',
      rating: editingProduct ? editingProduct.rating : 5.0,
      reviewsCount: editingProduct ? editingProduct.reviewsCount : 1,
      badge: formBadge,
      fabric: formFabric,
      description: formDescription,
      sizes: formSizes.length > 0 ? formSizes : ['Standard'],
      colors: editingProduct?.colors || [
        { name: 'Royal Obsidian', code: '#090a0d' },
        { name: 'Ivory Gold', code: '#fcfbf7' }
      ],
      inStock: formInStock
    };

    let updatedList: Product[];
    if (editingProduct) {
      updatedList = products.map((p) => (p.id === editingProduct.id ? newProduct : p));
      showToast(`'${newProduct.nameBangla}' সফলভাবে আপডেট করা হয়েছে!`);
    } else {
      updatedList = [newProduct, ...products];
      showToast(`নতুন প্রোডাক্ট '${newProduct.nameBangla}' যুক্ত হয়েছে!`);
    }

    setProducts(updatedList);
    saveStoredProducts(updatedList);
    setIsModalOpen(false);
  };

  // Delete Product
  const handleDeleteProduct = (productId: string, productName: string) => {
    if (confirm(`আপনি কি নিশ্চিত যে '${productName}' প্রোডাক্টটি মুছে ফেলতে চান?`)) {
      const updated = products.filter((p) => p.id !== productId);
      setProducts(updated);
      saveStoredProducts(updated);
      showToast(`'${productName}' প্রোডাক্টটি ডিলিট করা হয়েছে।`);
    }
  };

  // Toggle In-Stock Status
  const handleToggleStock = (productId: string) => {
    const updated = products.map((p) => {
      if (p.id === productId) {
        return { ...p, inStock: !p.inStock };
      }
      return p;
    });
    setProducts(updated);
    saveStoredProducts(updated);
    showToast('স্টক স্ট্যাটাস আপডেট করা হয়েছে');
  };

  // Handle Local Image Upload (FileReader -> Base64)
  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        if (typeof reader.result === 'string') {
          setFormImage(reader.result);
          showToast('ছবি সফলভাবে আপলোড হয়েছে!');
        }
      };
      reader.readAsDataURL(file);
    }
  };

  // Reset to Default Products
  const handleResetDefaults = () => {
    if (confirm('আপনি কি ফ্যাক্টরি ডিফল্ট ১২টি প্রোডাক্ট ফিরিয়ে আনতে চান? এর ফলে আপনার যুক্ত করা কাস্টম প্রোডাক্ট রিসেট হবে।')) {
      const defs = resetStoredProducts();
      setProducts(defs);
      showToast('ডিফল্ট প্রোডাক্ট ডাটা রিস্টোর করা হয়েছে!');
    }
  };

  // Update Order Status
  const handleUpdateOrderStatus = (orderId: string, newStatus: CustomerOrder['status']) => {
    const updated = orders.map((o) => {
      if (o.orderId === orderId) {
        return { ...o, status: newStatus };
      }
      return o;
    });
    setOrders(updated);
    saveStoredOrders(updated);
    showToast(`অর্ডার ${orderId} স্ট্যাটাস পরিবর্তন হয়েছে: ${newStatus}`);
  };

  // Filtered Products
  const filteredProducts = products.filter((p) => {
    const matchCat = selectedCategoryFilter === 'all' || p.category === selectedCategoryFilter;
    const matchSearch = p.nameBangla.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.nameEnglish.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.fabric.toLowerCase().includes(searchQuery.toLowerCase());
    return matchCat && matchSearch;
  });

  // Calculate Metrics
  const totalStockCount = products.filter((p) => p.inStock).length;
  const totalValue = products.reduce((sum, p) => sum + p.price, 0);

  return (
    <div className="min-h-screen bg-[#07080a] text-stone-200 font-sans text-left selection:bg-amber-400 selection:text-black">
      
      {/* 1. Top Admin Header Bar */}
      <header className="sticky top-0 z-40 bg-[#0c0e14]/95 backdrop-blur-md border-b border-stone-800 px-4 sm:px-8 py-3.5 flex items-center justify-between gap-4">
        
        {/* Brand Logo & Portal Title */}
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center text-black shadow-md shadow-amber-400/20">
            <Crown className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-serif font-black text-lg tracking-[0.15em] text-white uppercase leading-none">
                NAWABIYAAT
              </span>
              <span className="px-2 py-0.5 rounded bg-amber-400/15 border border-amber-400/30 text-amber-300 text-[10px] font-extrabold uppercase tracking-wider">
                ADMIN PORTAL
              </span>
            </div>
            <span className="text-[10px] text-stone-400 font-bangla block mt-0.5">
              নবাবিয়াত সেন্ট্রাল ম্যানেজমেন্ট ও প্রোডাক্ট কন্ট্রোল প্যানেল
            </span>
          </div>
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-3">
          <Link
            href="/"
            target="_blank"
            className="px-4 py-2 rounded-lg bg-stone-900 hover:bg-stone-800 border border-stone-700 text-stone-200 hover:text-white text-xs font-bold transition-all flex items-center gap-1.5 shadow-sm"
          >
            <span>ওয়েবসাইট দেখুন</span>
            <ExternalLink className="w-3.5 h-3.5 text-amber-400" />
          </Link>

          <button
            onClick={handleOpenAddModal}
            className="px-4 sm:px-5 py-2 rounded-lg bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 hover:brightness-110 text-black font-extrabold text-xs uppercase tracking-wider transition-all shadow-md shadow-amber-400/20 flex items-center gap-1.5 cursor-pointer"
          >
            <Plus className="w-4 h-4" />
            <span>নতুন প্রোডাক্ট যোগ করুন</span>
          </button>
        </div>

      </header>

      {/* Toast Notification */}
      {toastMessage && (
        <div className={`fixed top-20 right-6 z-50 px-5 py-3 rounded-xl shadow-2xl flex items-center gap-2 text-xs font-bold tracking-wide transition-all ${
          toastMessage.type === 'success' 
            ? 'bg-emerald-600 text-white border border-emerald-400' 
            : 'bg-red-600 text-white border border-red-400'
        }`}>
          {toastMessage.type === 'success' ? <CheckCircle className="w-4 h-4" /> : <AlertCircle className="w-4 h-4" />}
          <span>{toastMessage.text}</span>
        </div>
      )}

      {/* 2. Main Container */}
      <main className="max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        
        {/* Metric Cards Banner */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          <div className="bg-[#10121a] border border-stone-800 p-5 rounded-xl space-y-1">
            <div className="flex items-center justify-between text-stone-400 text-xs uppercase font-bold">
              <span>মোট প্রোডাক্ট</span>
              <Package className="w-4 h-4 text-amber-400" />
            </div>
            <p className="text-2xl sm:text-3xl font-serif font-black text-white">{products.length} টি</p>
            <span className="text-[11px] text-stone-400 font-bangla">সব ক্যাটাগরি মিলিয়ে</span>
          </div>

          <div className="bg-[#10121a] border border-stone-800 p-5 rounded-xl space-y-1">
            <div className="flex items-center justify-between text-stone-400 text-xs uppercase font-bold">
              <span>ইন স্টক প্রস্তুত</span>
              <Check className="w-4 h-4 text-emerald-400" />
            </div>
            <p className="text-2xl sm:text-3xl font-serif font-black text-emerald-400">{totalStockCount} টি</p>
            <span className="text-[11px] text-stone-400 font-bangla">গ্রাহক সরাসরি অর্ডার করতে পারবে</span>
          </div>

          <div className="bg-[#10121a] border border-stone-800 p-5 rounded-xl space-y-1">
            <div className="flex items-center justify-between text-stone-400 text-xs uppercase font-bold">
              <span>কাস্টমার অর্ডার</span>
              <ShoppingBag className="w-4 h-4 text-blue-400" />
            </div>
            <p className="text-2xl sm:text-3xl font-serif font-black text-blue-400">{orders.length} টি</p>
            <span className="text-[11px] text-stone-400 font-bangla">লাইভ প্লেস করা অর্ডার</span>
          </div>

          <div className="bg-[#10121a] border border-stone-800 p-5 rounded-xl space-y-1">
            <div className="flex items-center justify-between text-stone-400 text-xs uppercase font-bold">
              <span>ক্যাটালগ মূল্য</span>
              <DollarSign className="w-4 h-4 text-amber-400" />
            </div>
            <p className="text-2xl sm:text-3xl font-serif font-black text-amber-300">৳{totalValue.toLocaleString()}</p>
            <span className="text-[11px] text-stone-400 font-bangla">গড় মূল্য: ৳{Math.round(totalValue / (products.length || 1)).toLocaleString()}</span>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="flex items-center gap-3 border-b border-stone-800 pb-3">
          <button
            onClick={() => setActiveTab('products')}
            className={`px-5 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-2 cursor-pointer ${
              activeTab === 'products'
                ? 'bg-amber-400 text-black shadow-md shadow-amber-400/20'
                : 'bg-stone-900/60 text-stone-400 hover:text-white hover:bg-stone-800'
            }`}
          >
            <Layers className="w-4 h-4" />
            <span>প্রোডাক্ট ইনভেন্টরি ({products.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('orders')}
            className={`px-5 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-2 cursor-pointer ${
              activeTab === 'orders'
                ? 'bg-amber-400 text-black shadow-md shadow-amber-400/20'
                : 'bg-stone-900/60 text-stone-400 hover:text-white hover:bg-stone-800'
            }`}
          >
            <ShoppingBag className="w-4 h-4" />
            <span>গ্রাহক অর্ডারসমূহ ({orders.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('settings')}
            className={`px-5 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-2 cursor-pointer ${
              activeTab === 'settings'
                ? 'bg-amber-400 text-black shadow-md shadow-amber-400/20'
                : 'bg-stone-900/60 text-stone-400 hover:text-white hover:bg-stone-800'
            }`}
          >
            <Sparkles className="w-4 h-4" />
            <span>ওয়েবসাইট ব্যানার ও সেটিংস</span>
          </button>
        </div>

        {/* =========================================================================
            TAB 1: PRODUCTS INVENTORY MANAGEMENT
           ========================================================================= */}
        {activeTab === 'products' && (
          <div className="space-y-6">
            
            {/* Search & Category Filter Controls */}
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 bg-[#10121a] p-4 rounded-xl border border-stone-800">
              
              {/* Search Bar */}
              <div className="relative w-full md:w-96">
                <Search className="w-4 h-4 text-stone-400 absolute left-3.5 top-3 pointer-events-none" />
                <input
                  type="text"
                  placeholder="প্রোডাক্টের নাম বা আইডি দিয়ে খুঁজুন..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-[#08090d] border border-stone-700 text-xs px-3.5 py-2.5 pl-10 text-white placeholder-stone-500 rounded-lg outline-none focus:border-amber-400"
                />
              </div>

              {/* Category Filter Pills */}
              <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
                <span className="text-xs text-stone-400 font-semibold uppercase flex items-center gap-1">
                  <Filter className="w-3.5 h-3.5 text-amber-400" />
                  <span>ফিল্টার:</span>
                </span>
                {[
                  { id: 'all', label: 'সবগুলো' },
                  { id: 'silk', label: 'রয়্যাল সিল্ক' },
                  { id: 'katan', label: 'কাতান' },
                  { id: 'kabli', label: 'কাবলি সেট' },
                  { id: 'wedding', label: 'ওয়েডিং' },
                  { id: 'cotton', label: 'সুতি' },
                  { id: 'attar', label: 'আতর' }
                ].map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedCategoryFilter(cat.id)}
                    className={`px-3 py-1.5 rounded-md text-[11px] font-bold uppercase tracking-wider transition-all cursor-pointer ${
                      selectedCategoryFilter === cat.id
                        ? 'bg-amber-400 text-black'
                        : 'bg-stone-900 border border-stone-800 text-stone-300 hover:border-stone-700'
                    }`}
                  >
                    {cat.label}
                  </button>
                ))}

                <button
                  onClick={handleResetDefaults}
                  className="ml-auto px-3 py-1.5 rounded-md bg-stone-900 hover:bg-stone-800 border border-stone-700 text-stone-400 hover:text-white text-[11px] font-bold flex items-center gap-1 cursor-pointer"
                  title="রিসেট ডিফল্ট প্রোডাক্ট"
                >
                  <RefreshCw className="w-3 h-3 text-amber-400" />
                  <span>রিসেট ডাটা</span>
                </button>
              </div>

            </div>

            {/* Products Table */}
            <div className="bg-[#10121a] border border-stone-800 rounded-xl overflow-hidden shadow-xl">
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse text-xs">
                  <thead>
                    <tr className="bg-[#141722] border-b border-stone-800 text-stone-400 uppercase tracking-wider font-bold">
                      <th className="py-4 px-4">ছবি</th>
                      <th className="py-4 px-4">আইডি ও নাম</th>
                      <th className="py-4 px-4">ক্যাটাগরি</th>
                      <th className="py-4 px-4">মূল্য (BDT)</th>
                      <th className="py-4 px-4">ফেব্রিক / উপাদান</th>
                      <th className="py-4 px-4">সাইজ</th>
                      <th className="py-4 px-4">স্টক স্ট্যাটাস</th>
                      <th className="py-4 px-4 text-right">অ্যাকশন</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-stone-800/60">
                    {filteredProducts.length === 0 ? (
                      <tr>
                        <td colSpan={8} className="py-12 text-center text-stone-500 font-bangla text-sm">
                          কোনো প্রোডাক্ট পাওয়া যায়নি। "নতুন প্রোডাক্ট যোগ করুন" বাটনে ক্লিক করে নতুন প্রোডাক্ট যোগ করতে পারেন।
                        </td>
                      </tr>
                    ) : (
                      filteredProducts.map((p) => (
                        <tr key={p.id} className="hover:bg-stone-900/50 transition-colors group">
                          
                          {/* Image */}
                          <td className="py-3 px-4">
                            <div className="w-14 h-16 rounded-lg bg-stone-900 border border-stone-700 overflow-hidden relative shadow-sm">
                              <img
                                src={p.image}
                                alt={p.nameBangla}
                                className="w-full h-full object-cover object-top"
                              />
                            </div>
                          </td>

                          {/* Name & ID */}
                          <td className="py-3 px-4 max-w-xs">
                            <span className="text-[10px] font-mono text-amber-400 block font-semibold">
                              #{p.id}
                            </span>
                            <span className="font-bold text-white text-sm block truncate font-bangla">
                              {p.nameBangla}
                            </span>
                            <span className="text-[11px] text-stone-400 block truncate">
                              {p.nameEnglish}
                            </span>
                            {p.badge && (
                              <span className="inline-block mt-1 px-2 py-0.5 rounded text-[9px] font-extrabold uppercase bg-stone-800 border border-stone-700 text-amber-300">
                                {p.badge}
                              </span>
                            )}
                          </td>

                          {/* Category Badge */}
                          <td className="py-3 px-4 whitespace-nowrap">
                            <span className={`px-2.5 py-1 rounded text-[10px] font-bold uppercase tracking-wider ${
                              p.category === 'silk' ? 'bg-amber-400/15 text-amber-300 border border-amber-400/30' :
                              p.category === 'katan' ? 'bg-rose-500/15 text-rose-300 border border-rose-500/30' :
                              p.category === 'kabli' ? 'bg-blue-500/15 text-blue-300 border border-blue-500/30' :
                              p.category === 'wedding' ? 'bg-purple-500/15 text-purple-300 border border-purple-500/30' :
                              p.category === 'cotton' ? 'bg-emerald-500/15 text-emerald-300 border border-emerald-500/30' :
                              'bg-orange-500/15 text-orange-300 border border-orange-500/30'
                            }`}>
                              {p.category === 'silk' ? '👑 রয়্যাল সিল্ক' :
                               p.category === 'katan' ? '✨ কাতান' :
                               p.category === 'kabli' ? '👔 কাবলি সেট' :
                               p.category === 'wedding' ? '💍 বর ওয়েডিং' :
                               p.category === 'cotton' ? '🌿 সুতি' : '🌸 আতর'}
                            </span>
                          </td>

                          {/* Price */}
                          <td className="py-3 px-4 whitespace-nowrap">
                            <div className="font-serif font-bold text-sm text-amber-300">
                              ৳{p.price.toLocaleString()}
                            </div>
                            {p.originalPrice && (
                              <div className="text-[10px] text-stone-500 line-through">
                                ৳{p.originalPrice.toLocaleString()}
                              </div>
                            )}
                          </td>

                          {/* Fabric */}
                          <td className="py-3 px-4 max-w-xs truncate text-stone-300 font-bangla text-[11px]">
                            {p.fabric}
                          </td>

                          {/* Sizes */}
                          <td className="py-3 px-4 whitespace-nowrap">
                            <div className="flex flex-wrap gap-1 max-w-[120px]">
                              {p.sizes?.slice(0, 3).map((s) => (
                                <span key={s} className="px-1.5 py-0.5 bg-stone-900 border border-stone-700 text-[10px] rounded text-stone-300">
                                  {s.split(' ')[0]}
                                </span>
                              ))}
                              {p.sizes && p.sizes.length > 3 && (
                                <span className="text-[10px] text-stone-500">+{p.sizes.length - 3}</span>
                              )}
                            </div>
                          </td>

                          {/* Stock Status */}
                          <td className="py-3 px-4 whitespace-nowrap">
                            <button
                              onClick={() => handleToggleStock(p.id)}
                              className={`px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider flex items-center gap-1 cursor-pointer transition-all ${
                                p.inStock
                                  ? 'bg-emerald-500/15 text-emerald-300 border border-emerald-500/30'
                                  : 'bg-red-500/15 text-red-300 border border-red-500/30'
                              }`}
                              title="ক্লিক করে স্টক স্ট্যাটাস পরিবর্তন করুন"
                            >
                              <span className={`w-1.5 h-1.5 rounded-full ${p.inStock ? 'bg-emerald-400' : 'bg-red-400'}`} />
                              <span>{p.inStock ? 'ইন স্টক' : 'স্টক শেষ'}</span>
                            </button>
                          </td>

                          {/* Actions */}
                          <td className="py-3 px-4 text-right whitespace-nowrap">
                            <div className="flex items-center justify-end gap-2">
                              <button
                                onClick={() => handleOpenEditModal(p)}
                                className="p-2 rounded-lg bg-stone-900 hover:bg-amber-400 hover:text-black border border-stone-700 text-stone-300 transition-colors cursor-pointer"
                                title="এডিট করুন"
                              >
                                <Edit3 className="w-3.5 h-3.5" />
                              </button>

                              <button
                                onClick={() => handleDeleteProduct(p.id, p.nameBangla)}
                                className="p-2 rounded-lg bg-stone-900 hover:bg-red-600 hover:text-white border border-stone-700 text-stone-400 transition-colors cursor-pointer"
                                title="মুছে ফেলুন"
                              >
                                <Trash2 className="w-3.5 h-3.5" />
                              </button>
                            </div>
                          </td>

                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>
            </div>

          </div>
        )}

        {/* =========================================================================
            TAB 2: LIVE ORDERS MANAGEMENT
           ========================================================================= */}
        {activeTab === 'orders' && (
          <div className="space-y-6">
            <div className="flex items-center justify-between pb-2">
              <h3 className="text-xl font-bold font-serif text-white">
                গ্রাহকদের সাম্প্রতিক অর্ডারসমূহ (Recent Customer Orders)
              </h3>
              <span className="text-xs text-stone-400">সর্বমোট: {orders.length} টি অর্ডার</span>
            </div>

            <div className="grid grid-cols-1 gap-4">
              {orders.length === 0 ? (
                <div className="p-12 text-center bg-[#10121a] border border-stone-800 rounded-xl text-stone-500 font-bangla">
                  এখনো কোনো নতুন অর্ডার আসেনি। মূল সাইটের চেকআউট থেকে গ্রাহক অর্ডার করলেই এখানে দৃশ্যমান হবে।
                </div>
              ) : (
                orders.map((order) => (
                  <div key={order.orderId} className="bg-[#10121a] border border-stone-800 p-6 rounded-xl space-y-4">
                    
                    {/* Order Top Bar */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-stone-800">
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="font-mono text-sm font-bold text-amber-400">#{order.orderId}</span>
                          <span className="text-xs text-stone-400">• {order.date}</span>
                        </div>
                        <span className="text-xs text-stone-300 font-bold block mt-0.5">
                          গ্রাহক: {order.customer.name} | ফোন: {order.customer.phone}
                        </span>
                      </div>

                      <div className="flex items-center gap-3">
                        <span className="text-xs text-stone-400">স্ট্যাটাস:</span>
                        <select
                          value={order.status}
                          onChange={(e) => handleUpdateOrderStatus(order.orderId, e.target.value as CustomerOrder['status'])}
                          className="bg-[#090a0d] border border-stone-700 text-xs px-3 py-1.5 rounded-lg text-amber-300 font-bold outline-none cursor-pointer"
                        >
                          <option value="Pending">Pending (অপেক্ষমান)</option>
                          <option value="Confirmed">Confirmed (নিশ্চিত)</option>
                          <option value="Processing">Processing (প্রক্রিয়াধীন)</option>
                          <option value="Shipped">Shipped (ডেলিভারিতে পাঠানো)</option>
                          <option value="Delivered">Delivered (পৌঁছে গেছে)</option>
                          <option value="Cancelled">Cancelled (বাতিল)</option>
                        </select>
                      </div>
                    </div>

                    {/* Order Details Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs">
                      
                      {/* Customer Address */}
                      <div className="space-y-1 bg-[#0b0d13] p-3.5 rounded-lg border border-stone-800/80">
                        <span className="text-[10px] text-stone-400 font-bold uppercase tracking-wider block">
                          ডেলিভারি ঠিকানা
                        </span>
                        <p className="text-stone-200 font-bangla">{order.customer.address}</p>
                        <p className="text-stone-400">শহর: {order.customer.city === 'dhaka' ? 'ঢাকার ভিতরে' : 'ঢাকার বাইরে'}</p>
                        {order.customer.notes && (
                          <p className="text-amber-300 text-[11px] font-bangla pt-1">
                            নোট: {order.customer.notes}
                          </p>
                        )}
                      </div>

                      {/* Items Ordered */}
                      <div className="space-y-2 bg-[#0b0d13] p-3.5 rounded-lg border border-stone-800/80">
                        <span className="text-[10px] text-stone-400 font-bold uppercase tracking-wider block">
                          অর্ডারকৃত আইটেম
                        </span>
                        <div className="space-y-1.5 max-h-32 overflow-y-auto">
                          {order.items.map((item, idx) => (
                            <div key={idx} className="flex items-center justify-between gap-2 border-b border-stone-800/40 pb-1">
                              <span className="font-bangla text-stone-200 truncate">{item.nameBangla} ({item.size})</span>
                              <span className="font-mono text-stone-400 shrink-0">x{item.quantity} = ৳{(item.price * item.quantity).toLocaleString()}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Payment Summary */}
                      <div className="space-y-1 bg-[#0b0d13] p-3.5 rounded-lg border border-stone-800/80">
                        <span className="text-[10px] text-stone-400 font-bold uppercase tracking-wider block">
                          পেমেন্ট ও হিসাব
                        </span>
                        <div className="flex justify-between text-stone-300">
                          <span>পদ্ধতি:</span>
                          <span className="font-bold text-amber-300">{order.paymentMethod}</span>
                        </div>
                        {order.paymentTrxId && (
                          <div className="flex justify-between text-stone-300">
                            <span>TrxID:</span>
                            <span className="font-mono text-stone-200">{order.paymentTrxId}</span>
                          </div>
                        )}
                        <div className="flex justify-between text-stone-300 pt-1 border-t border-stone-800">
                          <span className="font-bold text-white">সর্বমোট মূল্য:</span>
                          <span className="font-serif font-black text-amber-400 text-sm">৳{order.pricing.total.toLocaleString()}</span>
                        </div>
                      </div>

                    </div>

                  </div>
                ))
              )}
            </div>

          </div>
        )}

        {/* =========================================================================
            TAB 3: SITE SETTINGS & ANNOUNCEMENT
           ========================================================================= */}
        {activeTab === 'settings' && (
          <div className="max-w-3xl bg-[#10121a] border border-stone-800 p-8 rounded-xl space-y-6">
            <h3 className="text-xl font-bold font-serif text-white">
              ওয়েবসাইট গ্লোবাল সেটিংস (Site Settings)
            </h3>

            <div className="space-y-4 text-xs">
              <div>
                <label className="block text-stone-300 font-bold mb-1.5 font-bangla">
                  টপ অ্যানাউন্সমেন্ট বার মেসেজ:
                </label>
                <input
                  type="text"
                  value={topNotice}
                  onChange={(e) => setTopNotice(e.target.value)}
                  className="w-full bg-[#08090d] border border-stone-700 text-xs px-4 py-3 text-white rounded-lg outline-none focus:border-amber-400"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-stone-300 font-bold mb-1.5">
                    অফিসিয়াল হটলাইন নাম্বার:
                  </label>
                  <input
                    type="text"
                    value={hotline}
                    onChange={(e) => setHotline(e.target.value)}
                    className="w-full bg-[#08090d] border border-stone-700 text-xs px-4 py-3 text-white rounded-lg outline-none focus:border-amber-400"
                  />
                </div>

                <div>
                  <label className="block text-stone-300 font-bold mb-1.5">
                    ফ্রি শিপিং ন্যূনতম লিমিট (টাকা):
                  </label>
                  <input
                    type="number"
                    value={freeShippingThreshold}
                    onChange={(e) => setFreeShippingThreshold(Number(e.target.value))}
                    className="w-full bg-[#08090d] border border-stone-700 text-xs px-4 py-3 text-white rounded-lg outline-none focus:border-amber-400"
                  />
                </div>
              </div>

              <div className="pt-4">
                <button
                  type="button"
                  onClick={() => showToast('সেটিংস সফলভাবে সংরক্ষিত হয়েছে!')}
                  className="px-6 py-3 bg-amber-400 text-black font-extrabold text-xs uppercase tracking-wider rounded-lg hover:bg-amber-300 transition-colors cursor-pointer flex items-center gap-2"
                >
                  <Save className="w-4 h-4" />
                  <span>সেটিংস সেভ করুন</span>
                </button>
              </div>
            </div>

          </div>
        )}

      </main>

      {/* =========================================================================
          MODAL: ADD / EDIT PRODUCT
         ========================================================================= */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/80 backdrop-blur-sm overflow-y-auto">
          <div className="relative w-full max-w-3xl bg-[#0e1017] border border-stone-700 shadow-2xl rounded-2xl overflow-hidden my-auto max-h-[92vh] flex flex-col text-left">
            
            {/* Modal Header */}
            <div className="flex items-center justify-between p-5 sm:p-6 border-b border-stone-800 bg-[#121520]">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-amber-400/15 border border-amber-400/30 text-amber-300 flex items-center justify-center">
                  <Crown className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="font-serif font-bold text-base sm:text-lg text-white">
                    {editingProduct ? 'প্রোডাক্ট এডিট করুন (Edit Product)' : 'নতুন প্রোডাক্ট যুক্ত করুন (Add New Product)'}
                  </h3>
                  <p className="text-[11px] text-stone-400 font-bangla">
                    যেকোনো ক্যাটাগরি, মূল্য, ছবি ও বিবরণ পূরণ করে সেভ করুন
                  </p>
                </div>
              </div>

              <button
                onClick={() => setIsModalOpen(false)}
                className="p-1.5 rounded-lg text-stone-400 hover:text-white hover:bg-stone-800 transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Form */}
            <form onSubmit={handleSaveProduct} className="p-6 overflow-y-auto space-y-5 text-xs">
              
              {/* Row 1: Category & ID */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-stone-300 font-bold mb-1.5">
                    ক্যাটাগরি নির্বাচন করুন (Category) *
                  </label>
                  <select
                    value={formCategory}
                    onChange={(e) => setFormCategory(e.target.value as Product['category'])}
                    className="w-full bg-[#151824] border border-stone-700 text-xs px-3.5 py-3 text-white rounded-lg outline-none focus:border-amber-400 font-semibold cursor-pointer"
                  >
                    <option value="silk">👑 রয়্যাল সিল্ক পাঞ্জাবি (Royal Silk)</option>
                    <option value="katan">✨ বারাণসী কাতান কালেকশন (Designer Katan)</option>
                    <option value="kabli">👔 সালতানাত কাবলি সেট (Kabli Suit Set)</option>
                    <option value="wedding">💍 বর ও ওয়েডিং শেরওয়ানি (Wedding & Groom)</option>
                    <option value="cotton">🌿 লখনৌ চিকেনকারি সুতি (Fine Cotton)</option>
                    <option value="attar">🌸 নবাবী উদ ও আতর (Nawabi Oud & Attar)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-stone-300 font-bold mb-1.5">
                    প্রোডাক্ট ব্যাজ / ট্যাগ
                  </label>
                  <input
                    type="text"
                    value={formBadge}
                    onChange={(e) => setFormBadge(e.target.value)}
                    placeholder="যেমন: NEW DROP, BESTSELLER, EXCLUSIVE"
                    className="w-full bg-[#151824] border border-stone-700 text-xs px-3.5 py-3 text-white rounded-lg outline-none focus:border-amber-400 uppercase"
                  />
                </div>
              </div>

              {/* Row 2: Name in Bangla & English */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-stone-300 font-bold mb-1.5 font-bangla">
                    পণ্যের নাম (বাংলায়) *
                  </label>
                  <input
                    type="text"
                    required
                    value={formNameBangla}
                    onChange={(e) => setFormNameBangla(e.target.value)}
                    placeholder="যেমন: রয়্যাল মিডনাইট জারি সিল্ক পাঞ্জাবি"
                    className="w-full bg-[#151824] border border-stone-700 text-xs px-3.5 py-3 text-white rounded-lg outline-none focus:border-amber-400 font-bangla"
                  />
                </div>

                <div>
                  <label className="block text-stone-300 font-bold mb-1.5">
                    Product Name (English) *
                  </label>
                  <input
                    type="text"
                    required
                    value={formNameEnglish}
                    onChange={(e) => setFormNameEnglish(e.target.value)}
                    placeholder="e.g. Royal Midnight Zari Silk Panjabi"
                    className="w-full bg-[#151824] border border-stone-700 text-xs px-3.5 py-3 text-white rounded-lg outline-none focus:border-amber-400"
                  />
                </div>
              </div>

              {/* Row 3: Pricing */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-stone-300 font-bold mb-1.5">
                    বিক্রয় মূল্য (Selling Price ৳) *
                  </label>
                  <input
                    type="number"
                    required
                    min={1}
                    value={formPrice}
                    onChange={(e) => setFormPrice(Number(e.target.value))}
                    className="w-full bg-[#151824] border border-stone-700 text-xs px-3.5 py-3 text-amber-300 font-serif font-bold text-sm rounded-lg outline-none focus:border-amber-400"
                  />
                </div>

                <div>
                  <label className="block text-stone-300 font-bold mb-1.5">
                    নিয়মিত পূর্বের মূল্য (Regular Price ৳ - ঐচ্ছিক)
                  </label>
                  <input
                    type="number"
                    min={formPrice}
                    value={formOriginalPrice}
                    onChange={(e) => setFormOriginalPrice(Number(e.target.value))}
                    className="w-full bg-[#151824] border border-stone-700 text-xs px-3.5 py-3 text-stone-300 rounded-lg outline-none focus:border-amber-400"
                  />
                </div>
              </div>

              {/* Row 4: Fabric & Material */}
              <div>
                <label className="block text-stone-300 font-bold mb-1.5 font-bangla">
                  ফেব্রিক ও উপাদান বিবরণ (Fabric & Details) *
                </label>
                <input
                  type="text"
                  required
                  value={formFabric}
                  onChange={(e) => setFormFabric(e.target.value)}
                  placeholder="যেমন: ১০০% খাঁটি মালবেরি হ্যান্ডলুম সিল্ক ও মেটালিক জারি ওয়ার্ক"
                  className="w-full bg-[#151824] border border-stone-700 text-xs px-3.5 py-3 text-white rounded-lg outline-none focus:border-amber-400 font-bangla"
                />
              </div>

              {/* Row 5: Image URL & Upload / Presets */}
              <div className="space-y-3 bg-[#131622] p-4 rounded-xl border border-stone-800">
                <label className="block text-stone-300 font-bold font-bangla">
                  প্রোডাক্টের ছবি নির্বাচন / পরিবর্তন করুন (Product Image):
                </label>

                <div className="flex flex-col sm:flex-row items-center gap-4">
                  {/* Image Preview Box */}
                  <div className="w-20 h-24 rounded-lg bg-stone-900 border-2 border-amber-400/40 overflow-hidden shrink-0 shadow-md">
                    <img
                      src={formImage || '/assets/images/panjabi.jpg'}
                      alt="Preview"
                      className="w-full h-full object-cover object-top"
                    />
                  </div>

                  <div className="flex-1 space-y-2 w-full">
                    <div className="flex items-center gap-2">
                      <input
                        type="text"
                        value={formImage}
                        onChange={(e) => setFormImage(e.target.value)}
                        placeholder="ছবির লিংক বা URL পেস্ট করুন..."
                        className="w-full bg-[#0a0c12] border border-stone-700 text-xs px-3 py-2 text-white rounded-lg outline-none focus:border-amber-400"
                      />
                    </div>

                    {/* Local File Upload button */}
                    <div className="flex items-center gap-3">
                      <label className="px-3 py-1.5 rounded-lg bg-stone-800 hover:bg-stone-700 border border-stone-600 text-stone-200 text-[11px] font-bold cursor-pointer flex items-center gap-1.5 transition-colors">
                        <Upload className="w-3.5 h-3.5 text-amber-400" />
                        <span>কম্পিউটার থেকে ছবি আপলোড</span>
                        <input
                          type="file"
                          accept="image/*"
                          onChange={handleFileUpload}
                          className="hidden"
                        />
                      </label>
                      <span className="text-[10px] text-stone-500 font-bangla">বা নিচের প্রি-সেট থেকে ক্লিক করুন:</span>
                    </div>
                  </div>
                </div>

                {/* Preset image pills */}
                <div className="flex flex-wrap gap-2 pt-2 border-t border-stone-800">
                  {imagePresets.map((preset, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => setFormImage(preset.url)}
                      className={`px-2.5 py-1 rounded text-[10px] font-semibold transition-all cursor-pointer ${
                        formImage === preset.url
                          ? 'bg-amber-400 text-black font-bold'
                          : 'bg-stone-800 text-stone-300 hover:bg-stone-700'
                      }`}
                    >
                      {preset.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Row 6: Sizes */}
              <div>
                <label className="block text-stone-300 font-bold mb-1.5">
                  উপলব্ধ সাইজ নির্বাচন করুন (Available Sizes):
                </label>
                <div className="flex flex-wrap gap-2">
                  {standardSizesList.map((sz) => {
                    const isSelected = formSizes.includes(sz);
                    return (
                      <button
                        key={sz}
                        type="button"
                        onClick={() => {
                          if (isSelected) {
                            setFormSizes(formSizes.filter((s) => s !== sz));
                          } else {
                            setFormSizes([...formSizes, sz]);
                          }
                        }}
                        className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                          isSelected
                            ? 'bg-amber-400 text-black shadow-sm'
                            : 'bg-stone-800 text-stone-400 hover:bg-stone-700'
                        }`}
                      >
                        {sz}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Row 7: Description */}
              <div>
                <label className="block text-stone-300 font-bold mb-1.5 font-bangla">
                  বিস্তারিত বিবরণ (Description):
                </label>
                <textarea
                  rows={3}
                  value={formDescription}
                  onChange={(e) => setFormDescription(e.target.value)}
                  placeholder="পাঞ্জাবির কাটিং, কাপড়ের স্থায়িত্ব, ও বিশেষত্বের বিবরণ লিখুন..."
                  className="w-full bg-[#151824] border border-stone-700 text-xs p-3 text-white rounded-lg outline-none focus:border-amber-400 font-bangla"
                />
              </div>

              {/* Row 8: Stock Toggle */}
              <div className="flex items-center gap-3 pt-2">
                <input
                  type="checkbox"
                  id="stockCheck"
                  checked={formInStock}
                  onChange={(e) => setFormInStock(e.target.checked)}
                  className="w-4 h-4 accent-amber-400 cursor-pointer"
                />
                <label htmlFor="stockCheck" className="text-stone-300 font-bold cursor-pointer font-bangla">
                  এই প্রোডাক্টটি বর্তমানে ইন স্টক (In Stock) আছে এবং অর্ডার নেওয়া যাবে
                </label>
              </div>

              {/* Footer Actions */}
              <div className="pt-4 border-t border-stone-800 flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="px-5 py-2.5 rounded-lg bg-stone-800 hover:bg-stone-700 text-stone-300 text-xs font-bold transition-colors cursor-pointer"
                >
                  বাতিল করুন
                </button>

                <button
                  type="submit"
                  className="px-7 py-2.5 rounded-lg bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 hover:brightness-110 text-black font-extrabold text-xs uppercase tracking-wider transition-all shadow-md shadow-amber-400/20 cursor-pointer"
                >
                  {editingProduct ? 'পরিবর্তন সেভ করুন' : 'প্রোডাক্ট যুক্ত করুন'}
                </button>
              </div>

            </form>

          </div>
        </div>
      )}

    </div>
  );
}
