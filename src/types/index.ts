export interface ProductColor {
  name: string;
  code: string;
}

export interface FragranceNotes {
  top?: string;
  heart?: string;
  base?: string;
}

export interface Product {
  id: string;
  nameBangla: string;
  nameEnglish: string;
  category: 'silk' | 'katan' | 'kabli' | 'cotton' | 'wedding' | 'attar';
  price: number;
  originalPrice?: number;
  discountPercentage?: number;
  image: string;
  rating: number;
  reviewsCount: number;
  badge: string;
  fabric: string;
  fragranceNotes?: FragranceNotes;
  description: string;
  sizes: string[];
  colors: ProductColor[];
  inStock: boolean;
  features?: string[];
}

export interface CartItem {
  id: string;
  nameBangla: string;
  nameEnglish: string;
  price: number;
  image: string;
  size: string;
  color: string;
  quantity: number;
}

export interface CustomerOrder {
  orderId: string;
  items: CartItem[];
  customer: {
    name: string;
    phone: string;
    alternativePhone?: string;
    address: string;
    city: 'dhaka' | 'outside-dhaka';
    notes?: string;
  };
  pricing: {
    subtotal: number;
    deliveryFee: number;
    discount: number;
    couponCode?: string;
    total: number;
  };
  paymentMethod: 'cod' | 'bkash' | 'nagad';
  paymentTrxId?: string;
  date: string;
  status: 'Pending' | 'Confirmed' | 'Processing';
}

export interface ContactMessage {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  date: string;
}
