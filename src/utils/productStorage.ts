import { Product, CustomerOrder } from '../types';
import { PRODUCTS_DATA } from '../data/products';

const PRODUCTS_STORAGE_KEY = 'nawabiyaat_products';
const ORDERS_STORAGE_KEY = 'nawabiyaat_orders';

export const getStoredProducts = (): Product[] => {
  if (typeof window === 'undefined') {
    return PRODUCTS_DATA;
  }
  try {
    const raw = localStorage.getItem(PRODUCTS_STORAGE_KEY);
    if (!raw) {
      localStorage.setItem(PRODUCTS_STORAGE_KEY, JSON.stringify(PRODUCTS_DATA));
      return PRODUCTS_DATA;
    }
    const parsed = JSON.parse(raw);
    if (Array.isArray(parsed) && parsed.length > 0) {
      return parsed;
    }
    return PRODUCTS_DATA;
  } catch (e) {
    console.error('Error reading products from localStorage', e);
    return PRODUCTS_DATA;
  }
};

export const saveStoredProducts = (products: Product[]) => {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem(PRODUCTS_STORAGE_KEY, JSON.stringify(products));
    // Dispatch custom event for real-time same-window updates
    window.dispatchEvent(new CustomEvent('nawabiyaat_products_updated', { detail: products }));
  } catch (e) {
    console.error('Error saving products to localStorage', e);
  }
};

export const resetStoredProducts = (): Product[] => {
  if (typeof window === 'undefined') return PRODUCTS_DATA;
  try {
    localStorage.setItem(PRODUCTS_STORAGE_KEY, JSON.stringify(PRODUCTS_DATA));
    window.dispatchEvent(new CustomEvent('nawabiyaat_products_updated', { detail: PRODUCTS_DATA }));
  } catch (e) {
    console.error('Error resetting products', e);
  }
  return PRODUCTS_DATA;
};

// Initial sample orders if none exist
const DEFAULT_SAMPLE_ORDERS: CustomerOrder[] = [
  {
    orderId: 'NW-942810',
    items: [
      {
        id: 'nw-silk-01',
        nameBangla: 'Royal Midnight Zari Silk Panjabi',
        nameEnglish: 'Royal Midnight Zari Silk Panjabi',
        price: 5850,
        image: '/assets/images/panjabi.jpg',
        size: 'L (40)',
        color: 'Midnight Obsidian',
        quantity: 1
      }
    ],
    customer: {
      name: 'Sakib Al Hasan',
      phone: '01711223344',
      address: 'House 12, Road 7, Sector 4, Uttara, Dhaka',
      city: 'dhaka',
      notes: 'Please call before arrival in the afternoon.'
    },
    pricing: {
      subtotal: 5850,
      deliveryFee: 0,
      discount: 585,
      couponCode: 'NAWABI10',
      total: 5265
    },
    paymentMethod: 'bkash',
    paymentTrxId: 'BKASH92847192',
    date: 'Nov 4, 2026, 10:15 AM',
    status: 'Pending'
  },
  {
    orderId: 'NW-884219',
    items: [
      {
        id: 'nw-katan-01',
        nameBangla: 'Imperial Varanasi Weave Katan Panjabi',
        nameEnglish: 'Imperial Varanasi Weave Katan Panjabi',
        price: 6450,
        image: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=800&q=80',
        size: 'XL (42)',
        color: 'Imperial Emerald',
        quantity: 1
      }
    ],
    customer: {
      name: 'Tanvir Chowdhury',
      phone: '01819876543',
      address: 'Holding 45, OR Nizam Road, Nasirabad, Chattogram',
      city: 'outside-dhaka'
    },
    pricing: {
      subtotal: 6450,
      deliveryFee: 0,
      discount: 0,
      total: 6450
    },
    paymentMethod: 'cod',
    date: 'Nov 3, 2026, 04:30 PM',
    status: 'Processing'
  }
];

export const getStoredOrders = (): CustomerOrder[] => {
  if (typeof window === 'undefined') return DEFAULT_SAMPLE_ORDERS;
  try {
    const raw = localStorage.getItem(ORDERS_STORAGE_KEY);
    if (!raw) {
      localStorage.setItem(ORDERS_STORAGE_KEY, JSON.stringify(DEFAULT_SAMPLE_ORDERS));
      return DEFAULT_SAMPLE_ORDERS;
    }
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : DEFAULT_SAMPLE_ORDERS;
  } catch (e) {
    console.error('Error reading orders from localStorage', e);
    return DEFAULT_SAMPLE_ORDERS;
  }
};

export const saveStoredOrders = (orders: CustomerOrder[]) => {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem(ORDERS_STORAGE_KEY, JSON.stringify(orders));
    window.dispatchEvent(new CustomEvent('nawabiyaat_orders_updated', { detail: orders }));
  } catch (e) {
    console.error('Error saving orders', e);
  }
};

export const addStoredOrder = (newOrder: CustomerOrder) => {
  const current = getStoredOrders();
  const updated = [newOrder, ...current];
  saveStoredOrders(updated);
};
