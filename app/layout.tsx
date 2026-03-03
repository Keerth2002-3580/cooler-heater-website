import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import PremiumHeader from "@/components/PremiumHeader";
import PremiumFooter from "@/components/PremiumFooter";

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter',
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: '--font-display',
});

export const metadata: Metadata = {
  title: "Ravique Climate - Premium Climate Control Solutions",
  description: "Transform your space with premium cooling and heating systems. Energy-efficient, smart, and designed for modern living.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${plusJakarta.variable}`}>
      <body className={`${inter.className} antialiased`}>
        <PremiumHeader />
        {children}
        <PremiumFooter />
      </body>
    </html>
  );
}
