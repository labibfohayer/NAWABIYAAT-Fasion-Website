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
  const [subject, setSubject] = useState('Order Inquiry');
  const [message, setMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) return;
    setIsSubmitted(true);
  };

  const handleWhatsApp = () => {
    const text = encodeURIComponent('Hello Nawabiyaat Atelier, I would like to inquire about bespoke panjabi orders or tailoring consultation.');
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
          <div className="w-20 h-20 rounded-full overflow-hidden mx-auto mb-4 border-2 border-amber-400/60 shadow-lg bg-black">
            <img src="/assets/images/logo.png" alt="Nawabiyaat Concierge" className="w-full h-full object-cover" />
          </div>

          <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-50 border border-amber-200 text-amber-900 text-[10px] font-bold uppercase tracking-[0.2em] mb-3">
            <Crown className="w-3.5 h-3.5 text-amber-700" />
            <span>NAWABIYAAT CONCIERGE & ATELIER</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-stone-900 mb-3">
            CONTACT & BESPOKE ATELIER INQUIRY
          </h1>
          <p className="text-sm font-semibold text-stone-700 mb-2">
            Dedicated Concierge Support for Orders, Sizing & Custom Wedding Couture
          </p>
          <p className="text-xs text-stone-500 leading-relaxed max-w-xl mx-auto">
            Whether you require a bespoke groom sherwani, matching family collections, or personalized sizing advice, our master tailors and customer support concierge are here to assist you.
          </p>
        </div>
      </div>

      {/* 3. Main Grid: Form (Left) & Outlets / Info (Right) */}
      <div className="max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Interactive Contact Form */}
          <div className="lg:col-span-7 bg-white border border-stone-200 p-6 sm:p-10 shadow-sm">
            <h2 className="text-lg font-bold font-sans uppercase tracking-wider text-black mb-1">
              SEND US A MESSAGE
            </h2>
            <p className="text-xs text-stone-500 mb-6">
              Fill in the form to send us your inquiry. Our atelier team will get back to you within 2 hours.
            </p>

            {isSubmitted ? (
              <div className="p-8 bg-emerald-50 border border-emerald-200 text-center space-y-4 animate-fadeIn">
                <div className="w-14 h-14 bg-emerald-100 rounded-full flex items-center justify-center mx-auto text-emerald-700">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-lg font-bold text-emerald-950 font-sans uppercase">
                  MESSAGE SENT SUCCESSFULLY!
                </h3>
                <p className="text-xs text-emerald-800 leading-relaxed max-w-md mx-auto">
                  Thank you, <strong>{name}</strong>! Your inquiry has been registered with the Nawabiyaat Concierge Desk. Our styling advisor will reach out to you via mobile <strong>{phone}</strong> or email shortly.
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
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Tanvir Ahmed"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full bg-stone-50 border border-stone-300 p-3 focus:border-black focus:outline-none rounded-none text-black"
                    />
                  </div>

                  <div>
                    <label className="block font-bold text-stone-700 uppercase tracking-wider mb-1">
                      Mobile Number <span className="text-red-500">*</span>
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
                      Email Address <span className="text-red-500">*</span>
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
                      Subject of Inquiry
                    </label>
                    <select
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      className="w-full bg-stone-50 border border-stone-300 p-3 focus:border-black focus:outline-none rounded-none text-black cursor-pointer"
                    >
                      <option value="Order Inquiry">Order Inquiry & Tracking</option>
                      <option value="Wedding & Bespoke Couture">Wedding & Bespoke Groom Couture</option>
                      <option value="Size Exchange & Replacement">Size Exchange & Replacement</option>
                      <option value="Wholesale & Corporate Gifting">Wholesale & Corporate Gifting</option>
                      <option value="General Consultation">General Consultation</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block font-bold text-stone-700 uppercase tracking-wider mb-1">
                    Your Message & Sizing Details <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    rows={5}
                    required
                    placeholder="Enter your message or specific panjabi size and measurement queries..."
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
                  Need Instant WhatsApp Support?
                </h4>
                <p className="text-[11px] text-stone-500">
                  Chat directly with our luxury styling consultant
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
                    <div className="font-bold text-black uppercase tracking-wider">Hotline & Phone</div>
                    <p>+880 1700-000000, +880 1800-000000</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 text-stone-700">
                  <Mail className="w-4 h-4 text-black shrink-0 mt-0.5" />
                  <div>
                    <div className="font-bold text-black uppercase tracking-wider">Email Concierge</div>
                    <p>concierge@nawabiyaat.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 text-stone-700">
                  <Clock className="w-4 h-4 text-black shrink-0 mt-0.5" />
                  <div>
                    <div className="font-bold text-black uppercase tracking-wider">Concierge Operating Hours</div>
                    <p>Monday to Sunday, 10:00 AM – 10:00 PM</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Outlets List */}
            <div className="border border-stone-200 p-6 space-y-4 text-xs">
              <h3 className="text-xs font-bold uppercase tracking-widest text-black pb-2 border-b border-stone-200">
                OUR FLAGSHIP ATELIERS & SHOWROOMS
              </h3>

              <div className="space-y-4 text-stone-700">
                {/* Outlet 1 */}
                <div className="p-3 bg-stone-50 border border-stone-200 space-y-1">
                  <div className="flex items-center gap-1.5 font-bold text-black">
                    <MapPin className="w-3.5 h-3.5 text-amber-700" />
                    <span>Banani Flagship Lounge, Dhaka</span>
                  </div>
                  <p className="text-[11px] text-stone-600">Road 11, Block B, Banani, Dhaka-1213</p>
                  <p className="text-[10px] text-stone-400">Open Daily: 11:00 AM – 9:00 PM</p>
                </div>

                {/* Outlet 2 */}
                <div className="p-3 bg-stone-50 border border-stone-200 space-y-1">
                  <div className="flex items-center gap-1.5 font-bold text-black">
                    <MapPin className="w-3.5 h-3.5 text-amber-700" />
                    <span>Dhanmondi Atelier, Dhaka</span>
                  </div>
                  <p className="text-[11px] text-stone-600">Shimultala Road, Dhanmondi 27 (Old), Dhaka-1209</p>
                  <p className="text-[10px] text-stone-400">Open Daily: 10:30 AM – 9:30 PM</p>
                </div>

                {/* Outlet 3 */}
                <div className="p-3 bg-stone-50 border border-stone-200 space-y-1">
                  <div className="flex items-center gap-1.5 font-bold text-black">
                    <MapPin className="w-3.5 h-3.5 text-amber-700" />
                    <span>Chattogram Display Atelier</span>
                  </div>
                  <p className="text-[11px] text-stone-600">GEC Circle, CDA Avenue, Khulshi, Chattogram</p>
                  <p className="text-[10px] text-stone-400">Open Daily: 11:00 AM – 9:00 PM</p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>

    </div>
  );
};
