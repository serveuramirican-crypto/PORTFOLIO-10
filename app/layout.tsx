import type { Metadata } from 'next';
import './globals.css';
import { CartProvider } from '@/components/CartContext';
import { AnnouncementBar } from '@/components/AnnouncementBar';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { CartDrawer } from '@/components/CartDrawer';
import { FloatingWhatsApp } from '@/components/FloatingWhatsApp';
import { MascotAssistant } from '@/components/MascotAssistant';

export const metadata: Metadata = {
  title: 'MO Cosmetics - Parfums Originaux & Maquillage à Fès | Livraison Maroc',
  description:
    'Parfums 100% originaux, décants dès 30 dh, soins K-Beauty et maquillage, sélectionnés dans notre boutique à Fès et livrés partout au Maroc.',
  icons: {
    icon: '/cdn/shop/files/mo-logo-2026-hd.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body className="antialiased min-h-screen flex flex-col bg-[#F7F4FC] text-[#1F1433] font-sans">
        <CartProvider>
          <AnnouncementBar />
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
          <CartDrawer />
          <FloatingWhatsApp />
          <MascotAssistant />
        </CartProvider>
      </body>
    </html>
  );
}
