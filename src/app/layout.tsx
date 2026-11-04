import type { Metadata } from "next";
import { Playfair_Display, Geist } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"]
});

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "NAWABIYAAT — Royal Panjabi Atelier | Luxury Heritage Men's Fashion",
  description: "Royal heritage & luxury ethnic men's couture. 100% pure handloom silk, Varanasi katan, tailored kabli suit sets and wedding sherwanis.",
  keywords: "nawabiyaat, luxury panjabi, silk panjabi, wedding sherwani, katan panjabi, eid men fashion, couture atelier",
  icons: {
    icon: "/assets/images/logo.png",
    shortcut: "/assets/images/logo.png",
    apple: "/assets/images/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${geist.variable} scroll-smooth`}>
      <body className="min-h-screen bg-white text-stone-900 antialiased selection:bg-stone-200 font-sans">
        {children}
      </body>
    </html>
  );
}
