import type { Metadata } from "next";
import { Playfair_Display, Hind_Siliguri } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"]
});

const hindSiliguri = Hind_Siliguri({
  variable: "--font-hind-siliguri",
  subsets: ["bengali", "latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "নবাবিয়াত (NAWABIYAAT) — Royal Panjabi Atelier | Luxury Heritage Men's Fashion",
  description: "রাজকীয় আভিজাত্য ও ঐতিহ্যের সেরা পাঞ্জাবি কালেকশন। ১০০% পিওর সিল্ক, কাতান, সুতি ও ওয়েডিং পাঞ্জাবি। ক্যাশ অন ডেলিভারি ও দ্রুত শিপিং।",
  keywords: "নবাবিয়াত, nawabiyaat, panjabi, luxury panjabi, silk panjabi, wedding panjabi, katan panjabi, eid panjabi",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="bn" className={`${playfair.variable} ${hindSiliguri.variable} scroll-smooth`}>
      <body className="min-h-screen bg-white text-stone-900 antialiased selection:bg-stone-200 font-sans">
        {children}
      </body>
    </html>
  );
}
