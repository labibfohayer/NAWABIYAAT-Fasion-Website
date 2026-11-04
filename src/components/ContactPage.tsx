'use client';

import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle2, MessageCircle, Crown, ArrowLeft } from 'lucide-react';

interface ContactPageProps {
  onBackToHome: () => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onBackToHome }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [subject, setSubject] = useState('অর্ডার অনুসন্ধান');
  const [message, setMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) return;
    setIsSubmitted(true);
  };

  const handleWhatsApp = () => {
    const text = encodeURIComponent('আসসালামু আলাইকুম নবাবিয়াত, আমি বিশেষ পাঞ্জাবি অর্ডার বা সেবা সংক্রান্ত তথ্য জানতে চাচ্ছি।');
    window.open(`https://wa.me/8801700000000?text=${text}`, '_blank');
  };

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
          <span className="text-black font-bold">CONTACT & BESPOKE INQUIRY</span>
        </nav>
      </div>

      {/* 2. Page Hero Header */}
      <div className="bg-stone-50 border-y border-stone-200 py-12 md:py-16 mb-12">
        <div className="max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12 text-center max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-50 border border-amber-200 text-amber-900 text-[10px] font-bold uppercase tracking-[0.2em] mb-3">
            <Crown className="w-3.5 h-3.5 text-amber-700" />
            <span>NAWABIYAAT CONCIERGE & ATELIER</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-stone-900 mb-3">
            যোগাযোগ ও কাস্টম অর্ডার
          </h1>
          <p className="text-sm font-semibold text-stone-700 mb-2">
            আপনাদের প্রতিটি প্রশ্ন, মতামত ও বিশেষ অর্ডারের সমাধান দিতে আমরা সর্বদা প্রস্তুত
          </p>
          <p className="text-xs text-stone-500 leading-relaxed max-w-xl mx-auto">
            বরের বিশেষ পাঞ্জাবি, পরিবারের ম্যাচিং কালেকশন কিংবা কোনো নির্দিষ্ট ফিটিংয়ের জন্য আমাদের ওস্তাদ কারিগর ও কাস্টমার সাপোর্ট টিমের সাথে সরাসরি যোগাযোগ করুন।
          </p>
        </div>
      </div>

      {/* 3. Main Grid: Form (Left) & Outlets / Info (Right) */}
      <div className="max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Interactive Contact Form */}
          <div className="lg:col-span-7 bg-white border border-stone-200 p-6 sm:p-10 shadow-sm">
            <h2 className="text-lg font-bold font-sans uppercase tracking-wider text-black mb-1">
              SEND US A MESSAGE (বার্তা পাঠান)
            </h2>
            <p className="text-xs text-stone-500 mb-6 font-bangla">
              ফর্মটি পূরণ করে আপনার বার্তা বা ইমেইল পাঠান। আমাদের টিম সর্বোচ্চ ২ ঘণ্টার মধ্যে যোগাযোগ করবে।
            </p>

            {isSubmitted ? (
              <div className="p-8 bg-emerald-50 border border-emerald-200 text-center space-y-4 animate-fadeIn">
                <div className="w-14 h-14 bg-emerald-100 rounded-full flex items-center justify-center mx-auto text-emerald-700">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-lg font-bold text-emerald-950 font-sans uppercase">
                  MESSAGE SENT SUCCESSFULLY!
                </h3>
                <p className="text-xs text-emerald-800 font-bangla leading-relaxed max-w-md mx-auto">
                  ধন্যবাদ <strong>{name}</strong>! আপনার বার্তাটি নবাবিয়াত কনসিয়ার্জ ডেস্ক-এ রেকর্ড করা হয়েছে। আমাদের প্রতিনিধি দ্রুত আপনার সাথে মোবাইল <strong>{phone}</strong> অথবা ইমেইলে যোগাযোগ করবেন।
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="px-6 py-2 bg-black text-white text-xs font-bold uppercase tracking-wider hover:bg-stone-800 cursor-pointer"
                >
                  SEND ANOTHER MESSAGE
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-bold text-stone-700 uppercase tracking-wider mb-1">
                      আপনার সম্পূর্ণ নাম <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="যেমন: তানভীর আহমেদ"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full bg-stone-50 border border-stone-300 p-3 focus:border-black focus:outline-none rounded-none text-black"
                    />
                  </div>

                  <div>
                    <label className="block font-bold text-stone-700 uppercase tracking-wider mb-1">
                      মোবাইল নম্বর <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="017XXXXXXXX"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full bg-stone-50 border border-stone-300 p-3 focus:border-black focus:outline-none rounded-none text-black"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-bold text-stone-700 uppercase tracking-wider mb-1">
                      ইমেইল ঠিকানা <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="name@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full bg-stone-50 border border-stone-300 p-3 focus:border-black focus:outline-none rounded-none text-black"
                    />
                  </div>

                  <div>
                    <label className="block font-bold text-stone-700 uppercase tracking-wider mb-1">
                      বার্তার বিষয় (SUBJECT)
                    </label>
                    <select
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      className="w-full bg-stone-50 border border-stone-300 p-3 focus:border-black focus:outline-none rounded-none text-black cursor-pointer"
                    >
                      <option value="অর্ডার অনুসন্ধান">অর্ডার অনুসন্ধান ও ট্র্যাকিং</option>
                      <option value="বিয়ে ও বরের কাস্টম শেরওয়ানি">বিয়ে ও বরের কাস্টম শেরওয়ানি</option>
                      <option value="সাইজ এক্সচেঞ্জ বা রিপ্লেসমেন্ট">সাইজ এক্সচেঞ্জ বা রিপ্লেসমেন্ট</option>
                      <option value="হোলসেল ও কর্পোরেট গিফট">হোলসেল ও কর্পোরেট গিফটিং</option>
                      <option value="অন্যান্য পরামর্শ">অন্যান্য পরামর্শ</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block font-bold text-stone-700 uppercase tracking-wider mb-1">
                    আপনার বার্তা বা বিস্তারিত বিবরণ <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    rows={5}
                    required
                    placeholder="আপনার প্রশ্ন বা পাঞ্জাবির সাইজ/মেজারমেন্ট সংক্রান্ত বিস্তারিত লিখুন..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full bg-stone-50 border border-stone-300 p-3 focus:border-black focus:outline-none rounded-none text-black"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-4 bg-black hover:bg-stone-800 text-white font-bold text-xs uppercase tracking-[0.2em] transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-md"
                  >
                    <Send className="w-4 h-4" />
                    <span>SEND MESSAGE TO NAWABIYAAT</span>
                  </button>
                </div>
              </form>
            )}

            {/* Direct WhatsApp Quick Contact */}
            <div className="mt-8 pt-6 border-t border-stone-200 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-black">
                  তাত্ক্ষণিক হোয়াটসঅ্যাপ সাপোর্ট চান?
                </h4>
                <p className="text-[11px] text-stone-500 font-bangla">
                  আমাদের ফ্যাশন কনসালটেন্টের সাথে সরাসরি চ্যাট করুন
                </p>
              </div>

              <button
                onClick={handleWhatsApp}
                className="px-5 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs uppercase tracking-wider flex items-center gap-2 cursor-pointer transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WHATSAPP CHAT</span>
              </button>
            </div>
          </div>

          {/* Right Column: Outlets & Showrooms */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Quick Contact Info Box */}
            <div className="bg-stone-50 border border-stone-200 p-6 space-y-4 text-xs">
              <h3 className="text-xs font-bold uppercase tracking-widest text-black pb-2 border-b border-stone-200">
                DIRECT CONTACT CHANNELS
              </h3>

              <div className="space-y-3">
                <div className="flex items-start gap-3 text-stone-700">
                  <Phone className="w-4 h-4 text-black shrink-0 mt-0.5" />
                  <div>
                    <div className="font-bold text-black uppercase tracking-wider">হটলাইন ও ফোন</div>
                    <p>+880 1700-000000, +880 1800-000000</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 text-stone-700">
                  <Mail className="w-4 h-4 text-black shrink-0 mt-0.5" />
                  <div>
                    <div className="font-bold text-black uppercase tracking-wider">ইমেইল কনসিয়ার্জ</div>
                    <p>concierge@nawabiyaat.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 text-stone-700">
                  <Clock className="w-4 h-4 text-black shrink-0 mt-0.5" />
                  <div>
                    <div className="font-bold text-black uppercase tracking-wider">সেবা সময়সূচি</div>
                    <p>সপ্তাহের প্রতিদিন সকাল ১০:০০ টা থেকে রাত ১০:০০ টা</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Outlets List */}
            <div className="border border-stone-200 p-6 space-y-4 text-xs">
              <h3 className="text-xs font-bold uppercase tracking-widest text-black pb-2 border-b border-stone-200">
                আমাদের ফ্ল্যাগশিপ আউটলেটসমূহ (ATELIERS)
              </h3>

              <div className="space-y-4 text-stone-700">
                {/* Outlet 1 */}
                <div className="p-3 bg-stone-50 border border-stone-200 space-y-1">
                  <div className="flex items-center gap-1.5 font-bold text-black">
                    <MapPin className="w-3.5 h-3.5 text-amber-700" />
                    <span>বনানী ফ্ল্যাগশিপ লাউঞ্জ, ঢাকা</span>
                  </div>
                  <p className="text-[11px] text-stone-600">রোড ১১, ব্লক বি, বনানী, ঢাকা-১২১৩</p>
                  <p className="text-[10px] text-stone-400">খোলা থাকে: প্রতিদিন সকাল ১১:০০ টা – রাত ৯:০০ টা</p>
                </div>

                {/* Outlet 2 */}
                <div className="p-3 bg-stone-50 border border-stone-200 space-y-1">
                  <div className="flex items-center gap-1.5 font-bold text-black">
                    <MapPin className="w-3.5 h-3.5 text-amber-700" />
                    <span>ধানমন্ডি অ্যাটেলিয়ার, ঢাকা</span>
                  </div>
                  <p className="text-[11px] text-stone-600">শিমুলতলা রোড, ধানমন্ডি ২৭ (পুরাতন), ঢাকা-১২০৯</p>
                  <p className="text-[10px] text-stone-400">খোলা থাকে: প্রতিদিন সকাল ১০:৩০ টা – রাত ৯:৩০ টা</p>
                </div>

                {/* Outlet 3 */}
                <div className="p-3 bg-stone-50 border border-stone-200 space-y-1">
                  <div className="flex items-center gap-1.5 font-bold text-black">
                    <MapPin className="w-3.5 h-3.5 text-amber-700" />
                    <span>চট্টগ্রাম ডিসপ্লে সেন্টার</span>
                  </div>
                  <p className="text-[11px] text-stone-600">জিইসি মোড়, সিডিএ এভিনিউ, খুলশী, চট্টগ্রাম</p>
                  <p className="text-[10px] text-stone-400">খোলা থাকে: প্রতিদিন সকাল ১১:০০ টা – রাত ৯:০০ টা</p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>

    </div>
  );
};
