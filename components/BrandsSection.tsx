'use client';

import React from 'react';
import Link from 'next/link';

const brands = [
  { name: 'Lattafa', href: '/collections/lattafa' },
  { name: 'Sheglam', href: '/collections/sheglam' },
  { name: 'Dior', href: '/collections/dior' },
  { name: 'Anua', href: '/collections/anua' },
  { name: 'Rare Beauty', href: '/collections/rare-beauty' },
  { name: 'CeraVe', href: '/collections/cerave' },
  { name: 'Huda Beauty', href: '/collections/huda-beauty' },
  { name: 'Medicube', href: '/collections/medicube' },
  { name: 'Yves Saint Laurent', href: '/collections/yves-saint-laurent' },
  { name: 'NYX', href: '/collections/nyx' },
  { name: 'The Ordinary', href: '/collections/the-ordinary' },
  { name: 'Versace', href: '/collections/versace' },
  { name: 'Fenty Beauty', href: '/collections/fenty-beauty' },
  { name: 'COSRX', href: '/collections/cosrx' },
  { name: 'Giorgio Armani', href: '/collections/giorgio-armani' },
  { name: 'Essence', href: '/collections/essence' },
  { name: 'Beauty of Joseon', href: '/collections/beauty-of-joseon' },
  { name: 'Bioderma', href: '/collections/bioderma' },
  { name: 'La Roche-Posay', href: '/collections/la-roche-posay' },
  { name: 'Eucerin', href: '/collections/eucerin' },
];

export const BrandsSection: React.FC = () => {
  return (
    <section className="py-6 md:py-8 max-w-7xl mx-auto px-4 lg:px-8 overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl sm:text-2xl font-extrabold text-[#1F1433] tracking-tight">
          Nos marques
        </h2>
        <Link
          href="/collections/femme"
          className="text-xs sm:text-sm font-bold text-[#4B2E83] hover:text-[#1F1433] transition-colors"
        >
          Toutes →
        </Link>
      </div>

      {/* Infinite Gliding Marquee */}
      <div className="relative w-full overflow-hidden no-scrollbar py-2">
        <div className="animate-marquee flex gap-2.5 sm:gap-3">
          {[...brands, ...brands].map((brand, idx) => (
            <Link
              key={`${brand.name}-${idx}`}
              href="/collections/femme"
              className="bg-white hover:bg-[#3B2366] text-[#1F1433] hover:text-white border border-[#E6DFF3] hover:border-[#3B2366] px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all shadow-2xs hover:shadow-xs whitespace-nowrap active:scale-95"
            >
              {brand.name}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
