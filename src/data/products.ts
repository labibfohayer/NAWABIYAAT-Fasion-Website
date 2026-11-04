import { Product } from '../types';

export const PRODUCTS_DATA: Product[] = [
  // --- 1. ROYAL SILK ---
  {
    id: 'nw-silk-01',
    nameBangla: 'রয়্যাল মিডনাইট জারি সিল্ক পাঞ্জাবি',
    nameEnglish: 'Royal Midnight Zari Silk Panjabi',
    category: 'silk',
    price: 5850,
    originalPrice: 6900,
    discountPercentage: 15,
    image: '/assets/images/panjabi.jpg',
    rating: 4.95,
    reviewsCount: 142,
    badge: 'BESTSELLER',
    fabric: '১০০% খাঁটি মালবেরি হ্যান্ডলুম সিল্ক ও মেটালিক জারি ওয়ার্ক',
    description: 'নবাবিয়াতের সিগনেচার মাস্টারপিস। কলার ও প্লেকেটে খাঁটি জারদৌসি কাজের সাথে ড্রপ শোল্ডার কম্ফোর্ট কাট। ঈদ ও রিসেপশনে এনে দেবে অতুলনীয় গাম্ভীর্য।',
    sizes: ['M (38)', 'L (40)', 'XL (42)', 'XXL (44)'],
    colors: [
      { name: 'Midnight Obsidian', code: '#0e1118' },
      { name: 'Imperial Navy', code: '#162238' },
      { name: 'Pure Ivory Cream', code: '#fcfbf7' }
    ],
    inStock: true
  },
  {
    id: 'nw-silk-02',
    nameBangla: 'গিল্ডেড রয়্যাল ব্ল্যাক রেশম সিল্ক পাঞ্জাবি',
    nameEnglish: 'Gilded Royal Black Resham Silk Panjabi',
    category: 'silk',
    price: 6800,
    originalPrice: 8200,
    discountPercentage: 17,
    image: 'https://images.unsplash.com/photo-1617127365659-c47fa864d8bc?auto=format&fit=crop&w=800&q=80',
    rating: 4.98,
    reviewsCount: 88,
    badge: 'EXCLUSIVE',
    fabric: 'তসর র সিল্ক ও হাতে সেলাই করা কপার-গোল্ড কাজ',
    description: 'সীমিত সংস্করণের বিশেষ পাঞ্জাবি। সূক্ষ্ম কপার-গোল্ড সুতার সাথে মাইক্রো সিকুইন ওয়ার্ক যা যেকোনো রাতে আলো ছড়িয়ে দেবে।',
    sizes: ['M (38)', 'L (40)', 'XL (42)', 'XXL (44)'],
    colors: [
      { name: 'Midnight Onyx', code: '#0a0a0c' }
    ],
    inStock: true
  },

  // --- 2. DESIGNER KATAN ---
  {
    id: 'nw-katan-01',
    nameBangla: 'ইম্পেরিয়াল পান্না কাতান মোটিফ পাঞ্জাবি',
    nameEnglish: 'Imperial Emerald Katan Floral Motif Panjabi',
    category: 'katan',
    price: 6400,
    originalPrice: 7800,
    discountPercentage: 18,
    image: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=800&q=80',
    rating: 5.0,
    reviewsCount: 98,
    badge: 'NEW ARRIVAL',
    fabric: 'বারাণসী উইভ পিওর কাতান সিল্ক ও জ্যাকুয়ার্ড মোটিফ',
    description: 'অভিজাত্যের সর্বোচ্চ প্রকাশ। পুরো বডিতে সূক্ষ্ম কাতান ফুলের জাফরান মোটিফ এবং কলারজুড়ে মিনাকারি কাজের অপূর্ব ফিনিশিং।',
    sizes: ['M (38)', 'L (40)', 'XL (42)', 'XXL (44)'],
    colors: [
      { name: 'Royal Emerald', code: '#0d382b' },
      { name: 'Peacock Teal', code: '#0a3641' }
    ],
    inStock: true
  },
  {
    id: 'nw-katan-02',
    nameBangla: 'নবাবী ক্রিমসন মেরুন কাতান পাঞ্জাবি',
    nameEnglish: 'Nawabi Crimson Maroon Katan Panjabi',
    category: 'katan',
    price: 5900,
    originalPrice: 7200,
    discountPercentage: 18,
    image: 'https://images.unsplash.com/photo-1605518216938-7c31b7b14ad0?auto=format&fit=crop&w=800&q=80',
    rating: 4.9,
    reviewsCount: 64,
    badge: 'POPULAR',
    fabric: 'হেভিওয়েট কাতান সিল্ক ও রেশমি সুতোর জটিল কাজ',
    description: 'গাঢ় মেরুন ও সোনালী সুতোর অপরূপ সংমিশ্রণ। পারিবারিক যেকোনো অনুষ্ঠান কিংবা বিয়ের দাওয়াতে আভিজাত্যের দ্যুতি ছড়াবে।',
    sizes: ['M (38)', 'L (40)', 'XL (42)', 'XXL (44)'],
    colors: [
      { name: 'Crimson Maroon', code: '#4a0e17' },
      { name: 'Deep Burgundy', code: '#3b0d18' }
    ],
    inStock: true
  },

  // --- 3. KABLI SUIT SET ---
  {
    id: 'nw-kabli-01',
    nameBangla: 'সালতানাত জেট ব্ল্যাক কাবলি স্যুট সেট',
    nameEnglish: 'Sultanate Jet Black Kabli Suit Set',
    category: 'kabli',
    price: 4950,
    originalPrice: 5800,
    discountPercentage: 14,
    image: 'https://images.unsplash.com/photo-1627916607164-7b20241db935?auto=format&fit=crop&w=800&q=80',
    rating: 4.92,
    reviewsCount: 215,
    badge: 'BESTSELLER',
    fabric: 'সুপার ১২০স ইজিপশিয়ান মারসেরাইজড কটন ও অ্যান্টি-রিঙ্কেল ব্লেন্ড',
    description: 'পাঞ্জাবি ও ম্যাচিং টেইলর্ড ট্রাউজার পাজামার ফুল সেট। ইজিপশিয়ান কটনের কারণে গরমের দিনেও আরামদায়ক ও দিনভর কুঁচকাবে না।',
    sizes: ['M (38)', 'L (40)', 'XL (42)', 'XXL (44)'],
    colors: [
      { name: 'Jet Black', code: '#0f1115' },
      { name: 'Slate Charcoal', code: '#232731' },
      { name: 'Deep Olive', code: '#222d1f' }
    ],
    inStock: true
  },
  {
    id: 'nw-kabli-02',
    nameBangla: 'ইম্পেরিয়াল হোয়াইট অ্যারাবিয়ান কাবলি সেট',
    nameEnglish: 'Imperial White Arabian Kabli Suit',
    category: 'kabli',
    price: 4650,
    originalPrice: 5400,
    discountPercentage: 13,
    image: '/assets/images/jubbah.jpg',
    rating: 4.88,
    reviewsCount: 94,
    badge: 'SIGNATURE',
    fabric: 'জাপানিজ সিল্কি ম্যাট কটন ব্লেন্ড',
    description: 'সৌদি ও অ্যারাবিয়ান স্টাইলের ড্রপ-শোল্ডার কাবলি সেট। সাথে রয়েছে ম্যাচিং পায়জামা ও অ্যান্টিক ব্রাস বোতাম।',
    sizes: ['M (38)', 'L (40)', 'XL (42)', 'XXL (44)'],
    colors: [
      { name: 'Snow White', code: '#ffffff' },
      { name: 'Ivory Sand', code: '#f5f0e6' }
    ],
    inStock: true
  },

  // --- 4. GROOM & WEDDING SHERWANI ---
  {
    id: 'nw-wed-01',
    nameBangla: 'আইভরি পার্ল বর ও ওয়েডিং পাঞ্জাবি',
    nameEnglish: 'Ivory Pearl Wedding Sherwani Panjabi',
    category: 'wedding',
    price: 9200,
    originalPrice: 11500,
    discountPercentage: 20,
    image: 'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=800&q=80',
    rating: 4.96,
    reviewsCount: 76,
    badge: 'EXCLUSIVE',
    fabric: 'র সিল্ক ও কাশ্মিরি আরি কাজের সাথে রিয়েল মুক্তো এমব্রয়ডারি',
    description: 'বরের বিশেষ দিনের জন্য নবাবিয়াতের সিগনেচার মাস্টারপিস। বুক ও হাতায় সূক্ষ্ম মুক্তার কাজ ও রয়্যাল কাট যা বরযাত্রী বা রিসেপশনে আপনাকে অনন্য করে তুলবে।',
    sizes: ['M (38)', 'L (40)', 'XL (42)', 'XXL (44)'],
    colors: [
      { name: 'Ivory Champagne', code: '#f4ede4' },
      { name: 'Golden Cream', code: '#faeed1' }
    ],
    inStock: true
  },
  {
    id: 'nw-wed-02',
    nameBangla: 'রয়্যাল হেরিটেজ গোল্ডেন গ্রুম শেরওয়ানি',
    nameEnglish: 'Royal Heritage Golden Groom Sherwani',
    category: 'wedding',
    price: 12500,
    originalPrice: 15500,
    discountPercentage: 19,
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80',
    rating: 5.0,
    reviewsCount: 52,
    badge: 'ROYAL COUTURE',
    fabric: 'পিওর জামদানি মোটিফ সিল্ক এবং দাবকা ও জারদৌসি কাজ',
    description: 'বাংলার ঐতিহ্যবাহী জামদানি মোটিফ ও শাহী কারুকার্যের এক অতুলনীয় সংমিশ্রণ। বিয়ের আসরে বরের জন্য এর চেয়ে শ্রেষ্ঠ কোনো পোশাক হতে পারে না।',
    sizes: ['M (38)', 'L (40)', 'XL (42)', 'XXL (44)'],
    colors: [
      { name: 'Imperial Gold', code: '#d4af37' },
      { name: 'Champagne Bronze', code: '#c5a059' }
    ],
    inStock: true
  },

  // --- 5. FINE COTTON & CHIKANKARI ---
  {
    id: 'nw-cot-01',
    nameBangla: 'বেস্পোক লখনৌ চিকেনকারি সুতি পাঞ্জাবি',
    nameEnglish: 'Bespoke Crisp White Cotton Chikankari',
    category: 'cotton',
    price: 3850,
    originalPrice: 4500,
    discountPercentage: 14,
    image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80',
    rating: 4.89,
    reviewsCount: 310,
    badge: 'BESTSELLER',
    fabric: '১০০% অরগানিক হাতে বোনা সুতি ও লখনৌ শ্যাডো চিকেনকারি',
    description: 'জুমা এবং সকালের আয়োজনের চিরসবুজ পছন্দ। লখনৌ চিকেনকারির নিখুঁত সেলাই যা ধবধবে সাদা কাপড়ে তৈরি করে শান্তিময় আভিজাত্য।',
    sizes: ['M (38)', 'L (40)', 'XL (42)', 'XXL (44)'],
    colors: [
      { name: 'Pristine Snow White', code: '#ffffff' },
      { name: 'Warm Cream', code: '#faf6ee' }
    ],
    inStock: true
  },
  {
    id: 'nw-cot-02',
    nameBangla: 'ক্লাসিক লিনেন সামার কুল পাঞ্জাবি',
    nameEnglish: 'Classic Linen Summer Panjabi',
    category: 'cotton',
    price: 2450,
    originalPrice: 2850,
    discountPercentage: 14,
    image: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=800&q=80',
    rating: 4.75,
    reviewsCount: 88,
    badge: 'SUMMER COOL',
    fabric: '১০০% পিওর অরগানিক লিনেন',
    description: 'গরমের দিনের জন্য সর্বোচ্চ আরামদায়ক ব্রিদেবল লিনেন ফেব্রিক। প্রাকৃতিক টেক্সচার ও আরামদায়ক নরম কাটিং।',
    sizes: ['M (38)', 'L (40)', 'XL (42)', 'XXL (44)'],
    colors: [
      { name: 'Beige Cream', code: '#f5f2eb' },
      { name: 'Soft Sage', code: '#c2d4c0' }
    ],
    inStock: true
  },

  // --- 6. NAWABI ARTISANAL ATTAR ---
  {
    id: 'nw-at-01',
    nameBangla: 'দেহন আল উদ কাম্বোডি (নবাবী খাঁটি আতর)',
    nameEnglish: 'Dehn Al Oud Combodi Artisan Attar',
    category: 'attar',
    price: 2450,
    originalPrice: 2900,
    discountPercentage: 15,
    image: 'https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&w=800&q=80',
    rating: 5.0,
    reviewsCount: 245,
    badge: 'SIGNATURE OUD',
    fabric: '১০০% খাঁটি অ্যালকোহল-মুক্ত প্রাকৃতিক তেল',
    description: 'কম্বোডিয়ান বন্য আগরউডের গভীর, মিষ্টি ও স্মোকি সুবাসের সংমিশ্রণ। পাঞ্জাবির আভিজাত্যকে আরও মোহময় করে তোলে।',
    sizes: ['3ml (টেস্টার)', '6ml (রয়্যাল উডেন বক্স)', '12ml (ভিআইপি বটল)'],
    colors: [{ name: 'Golden Amber Essence', code: '#d4af37' }],
    inStock: true
  },
  {
    id: 'nw-at-02',
    nameBangla: 'রয়্যাল হোয়াইট মাস্ক (স্নিগ্ধ ও আত্মিক সুবাস)',
    nameEnglish: 'Royal White Musk Concentrated Oil',
    category: 'attar',
    price: 1350,
    originalPrice: 1650,
    discountPercentage: 18,
    image: 'https://images.unsplash.com/photo-1547887537-6158d64c35b3?auto=format&fit=crop&w=800&q=80',
    rating: 4.9,
    reviewsCount: 198,
    badge: 'BEST GIFT',
    fabric: 'নন-অ্যালকোহলিক পারফিউম কনসেন্ট্রেট',
    description: 'পবিত্র কাবা প্রাঙ্গনের মতো প্রশান্তিময়, স্নিগ্ধ এবং মৃদু মিষ্টি সুবাস। প্রতিদিনের সালাত ও বিশেষ মুহূর্তের সঙ্গী।',
    sizes: ['3ml', '6ml', '12ml'],
    colors: [{ name: 'Pure Pearl Oil', code: '#f5f5f5' }],
    inStock: true
  }
];

export const CATEGORIES_LIST = [
  { id: 'all', label: 'All Collection', bangla: 'সব কালেকশন' },
  { id: 'silk', label: 'Royal Silk', bangla: 'রয়্যাল সিল্ক' },
  { id: 'katan', label: 'Designer Katan', bangla: 'প্রিমিয়াম কাতান' },
  { id: 'kabli', label: 'Kabli Suit Set', bangla: 'সালতানাত কাবলি' },
  { id: 'wedding', label: 'Wedding & Groom', bangla: 'বর ও শেরওয়ানি' },
  { id: 'cotton', label: 'Fine Cotton', bangla: 'সুতি ও লিনেন' },
  { id: 'attar', label: 'Nawabi Oud', bangla: 'নবাবী আতর' }
];
