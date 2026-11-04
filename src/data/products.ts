import { Product } from '../types';

export const PRODUCTS_DATA: Product[] = [
  // --- 1. ROYAL SILK ---
  {
    id: 'nw-silk-01',
    nameBangla: 'Royal Midnight Zari Silk Panjabi',
    nameEnglish: 'Royal Midnight Zari Silk Panjabi',
    category: 'silk',
    price: 5850,
    originalPrice: 6900,
    discountPercentage: 15,
    image: '/assets/images/panjabi.jpg',
    rating: 4.95,
    reviewsCount: 142,
    badge: 'BESTSELLER',
    fabric: '100% Pure Mulberry Handloom Silk with Metallic Zari Work',
    description: 'Nawabiyaat signature masterpiece. Pure handcrafted zardozi embroidery across collar and placket with relaxed drop-shoulder tailoring.',
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
    nameBangla: 'Gilded Royal Black Resham Silk Panjabi',
    nameEnglish: 'Gilded Royal Black Resham Silk Panjabi',
    category: 'silk',
    price: 6800,
    originalPrice: 8200,
    discountPercentage: 17,
    image: 'https://images.unsplash.com/photo-1617127365659-c47fa864d8bc?auto=format&fit=crop&w=800&q=80',
    rating: 4.98,
    reviewsCount: 88,
    badge: 'EXCLUSIVE',
    fabric: 'Tussar Raw Silk with Hand-Stitched Copper-Gold Thread',
    description: 'Limited edition bespoke silhouette. Meticulous copper-gold resham threading with micro sequin accents.',
    sizes: ['M (38)', 'L (40)', 'XL (42)', 'XXL (44)'],
    colors: [
      { name: 'Midnight Onyx', code: '#0a0a0c' }
    ],
    inStock: true
  },

  // --- 2. DESIGNER KATAN ---
  {
    id: 'nw-katan-01',
    nameBangla: 'Imperial Emerald Katan Floral Motif Panjabi',
    nameEnglish: 'Imperial Emerald Katan Floral Motif Panjabi',
    category: 'katan',
    price: 6400,
    originalPrice: 7800,
    discountPercentage: 18,
    image: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=800&q=80',
    rating: 5.0,
    reviewsCount: 98,
    badge: 'NEW ARRIVAL',
    fabric: 'Varanasi Weave Pure Katan Silk with Jacquard Weaving',
    description: 'Pinnacle of aristocratic festive attire. Features intricate floral katan motifs throughout the body and minakari collar craft.',
    sizes: ['M (38)', 'L (40)', 'XL (42)', 'XXL (44)'],
    colors: [
      { name: 'Royal Emerald', code: '#0d382b' },
      { name: 'Peacock Teal', code: '#0a3641' }
    ],
    inStock: true
  },
  {
    id: 'nw-katan-02',
    nameBangla: 'Nawabi Crimson Maroon Katan Panjabi',
    nameEnglish: 'Nawabi Crimson Maroon Katan Panjabi',
    category: 'katan',
    price: 5900,
    originalPrice: 7200,
    discountPercentage: 18,
    image: 'https://images.unsplash.com/photo-1605518216938-7c31b7b14ad0?auto=format&fit=crop&w=800&q=80',
    rating: 4.9,
    reviewsCount: 64,
    badge: 'POPULAR',
    fabric: 'Heavyweight Katan Silk with Golden Resham Weave',
    description: 'Deep crimson maroon infused with lustrous gold filaments. A timeless statement for weddings and family celebrations.',
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
    nameBangla: 'Sultanate Jet Black Kabli Suit Set',
    nameEnglish: 'Sultanate Jet Black Kabli Suit Set',
    category: 'kabli',
    price: 4950,
    originalPrice: 5800,
    discountPercentage: 14,
    image: 'https://images.unsplash.com/photo-1627916607164-7b20241db935?auto=format&fit=crop&w=800&q=80',
    rating: 4.92,
    reviewsCount: 215,
    badge: 'BESTSELLER',
    fabric: 'Super 120s Egyptian Mercerized Cotton & Anti-Wrinkle Blend',
    description: 'Complete 2-piece set including tailored kabli panjabi and matching comfort trouser pyjama. Breathable, anti-crease fabric.',
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
    nameBangla: 'Imperial White Arabian Kabli Suit',
    nameEnglish: 'Imperial White Arabian Kabli Suit',
    category: 'kabli',
    price: 4650,
    originalPrice: 5400,
    discountPercentage: 13,
    image: '/assets/images/jubbah.jpg',
    rating: 4.88,
    reviewsCount: 94,
    badge: 'SIGNATURE',
    fabric: 'Japanese Silky Matte Cotton Blend',
    description: 'Emirati drop-shoulder cut with concealed placket and matching tailored trousers. Custom embossed brass buttons.',
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
    nameBangla: 'Ivory Pearl Wedding Sherwani Panjabi',
    nameEnglish: 'Ivory Pearl Wedding Sherwani Panjabi',
    category: 'wedding',
    price: 9200,
    originalPrice: 11500,
    discountPercentage: 20,
    image: 'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=800&q=80',
    rating: 4.96,
    reviewsCount: 76,
    badge: 'EXCLUSIVE',
    fabric: 'Pure Raw Silk with Kashmiri Aari & Handcrafted Pearl Work',
    description: 'Designed exclusively for the discerning groom. Hand-embroidered micro-pearl accents with regal collar structure.',
    sizes: ['M (38)', 'L (40)', 'XL (42)', 'XXL (44)'],
    colors: [
      { name: 'Ivory Champagne', code: '#f4ede4' },
      { name: 'Golden Cream', code: '#faeed1' }
    ],
    inStock: true
  },
  {
    id: 'nw-wed-02',
    nameBangla: 'Royal Heritage Golden Groom Sherwani',
    nameEnglish: 'Royal Heritage Golden Groom Sherwani',
    category: 'wedding',
    price: 12500,
    originalPrice: 15500,
    discountPercentage: 19,
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80',
    rating: 5.0,
    reviewsCount: 52,
    badge: 'ROYAL COUTURE',
    fabric: 'Pure Jamdani Motif Silk with Dabka & Zardozi Embroidery',
    description: 'The crowning jewel of the wedding collection. Authentic heritage motifs blended with hand-woven royal gold embroidery.',
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
    nameBangla: 'Bespoke Crisp White Cotton Chikankari',
    nameEnglish: 'Bespoke Crisp White Cotton Chikankari',
    category: 'cotton',
    price: 3850,
    originalPrice: 4500,
    discountPercentage: 14,
    image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80',
    rating: 4.89,
    reviewsCount: 310,
    badge: 'BESTSELLER',
    fabric: '100% Organic Hand-Spun Cotton with Lucknowi Chikankari',
    description: 'The evergreen choice for morning Jumuah and festive gatherings. Authentic hand shadow-work on crisp white cotton.',
    sizes: ['M (38)', 'L (40)', 'XL (42)', 'XXL (44)'],
    colors: [
      { name: 'Pristine Snow White', code: '#ffffff' },
      { name: 'Warm Cream', code: '#faf6ee' }
    ],
    inStock: true
  },
  {
    id: 'nw-cot-02',
    nameBangla: 'Classic Linen Summer Panjabi',
    nameEnglish: 'Classic Linen Summer Panjabi',
    category: 'cotton',
    price: 2450,
    originalPrice: 2850,
    discountPercentage: 14,
    image: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=800&q=80',
    rating: 4.75,
    reviewsCount: 88,
    badge: 'SUMMER COOL',
    fabric: '100% Pure Organic Breathable Linen',
    description: 'Engineered for hot summer days. Natural cooling texture, light drape, and clean minimalist tailoring.',
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
    nameBangla: 'Dehn Al Oud Combodi Artisan Attar',
    nameEnglish: 'Dehn Al Oud Combodi Artisan Attar',
    category: 'attar',
    price: 2450,
    originalPrice: 2900,
    discountPercentage: 15,
    image: 'https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&w=800&q=80',
    rating: 5.0,
    reviewsCount: 245,
    badge: 'SIGNATURE OUD',
    fabric: '100% Pure Alcohol-Free Natural Fragrance Oil',
    description: 'Aged wild Cambodian agarwood extract with sweet, smoky, and balsamic undertones. Complements any royal outfit.',
    sizes: ['3ml (Sample)', '6ml (Royal Wooden Box)', '12ml (VIP Crystal Bottle)'],
    colors: [{ name: 'Golden Amber Essence', code: '#d4af37' }],
    inStock: true
  },
  {
    id: 'nw-at-02',
    nameBangla: 'Royal White Musk Concentrated Oil',
    nameEnglish: 'Royal White Musk Concentrated Oil',
    category: 'attar',
    price: 1350,
    originalPrice: 1650,
    discountPercentage: 18,
    image: 'https://images.unsplash.com/photo-1547887537-6158d64c35b3?auto=format&fit=crop&w=800&q=80',
    rating: 4.9,
    reviewsCount: 198,
    badge: 'BEST GIFT',
    fabric: 'Non-Alcoholic Perfume Concentrate',
    description: 'A serene, powdery, and velvety white musk fragrance with lasting longevity and spiritual tranquility.',
    sizes: ['3ml', '6ml', '12ml'],
    colors: [{ name: 'Pure Pearl Oil', code: '#f5f5f5' }],
    inStock: true
  }
];

export const CATEGORIES_LIST = [
  { id: 'all', label: 'All Collections' },
  { id: 'silk', label: 'Royal Silk' },
  { id: 'katan', label: 'Designer Katan' },
  { id: 'kabli', label: 'Kabli Suit Set' },
  { id: 'wedding', label: 'Wedding & Groom' },
  { id: 'cotton', label: 'Fine Cotton' },
  { id: 'attar', label: 'Nawabi Oud' }
];
