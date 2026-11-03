'use client';

import React, { useRef, useState, useEffect } from 'react';
import Link from 'next/link';

interface Banner {
  id: string;
  kicker: string;
  title: string;
  cta: string;
  href: string;
  img: string;
  bgGradient: string;
  borderColor: string;
  textColor: string;
  ctaColor: string;
}

const banners: Banner[] = [
  {
    id: 'nouveautes',
    kicker: 'Arrivages de la semaine',
    title: 'Nouveautés',
    cta: 'Découvrir →',
    href: '/collections/femme',
    img: '/cdn/shop/files/ECOMM-SP-LIQUID-BLUSH-MATTE-GRACE.jpg',
    bgGradient: 'bg-gradient-to-br from-[#FAF7FD] to-[#EDE6F9]',
    borderColor: 'border-[#E6DFF3]',
    textColor: 'text-[#34205C]',
    ctaColor: 'text-[#4B2E83]',
  },
  {
    id: 'maquillage',
    kicker: 'Sheglam, Rare Beauty, NYX…',
    title: 'Maquillage',
    cta: 'Découvrir →',
    href: '/collections/femme',
    img: '/cdn/shop/files/2F642BC2-D662-443B-BF65-D59CE7F87F33_ba6dffc1-6d9e-449c-a11e-714e6136f7d0.jpg',
    bgGradient: 'bg-gradient-to-br from-[#FFF5F8] to-[#FBE7EE]',
    borderColor: 'border-[#F8D2DF]',
    textColor: 'text-[#9B2E5A]',
    ctaColor: 'text-[#9B2E5A]',
  },
  {
    id: 'decants',
    kicker: 'Dès 30 dh · 5 ml et 10 ml',
    title: 'Décants',
    cta: 'Découvrir →',
    href: '/collections/femme',
    img: '/cdn/shop/files/IMG-4582.webp',
    bgGradient: 'bg-gradient-to-br from-[#FAF4FC] to-[#F3EBF7]',
    borderColor: 'border-[#EBDCF0]',
    textColor: 'text-[#58226B]',
    ctaColor: 'text-[#58226B]',
  },
  {
    id: 'parfums',
    kicker: '100% originaux',
    title: 'Parfums',
    cta: 'Découvrir →',
    href: '/collections/femme',
    img: '/cdn/shop/files/badf18313ca5ccbdf90809c178a0e0b5_0e82b94f-dc38-4098-878d-ecec7bf56802.jpg',
    bgGradient: 'bg-gradient-to-br from-[#FFFDF5] to-[#FEF9E7]',
    borderColor: 'border-[#F8EAC2]',
    textColor: 'text-[#7D5A0D]',
    ctaColor: 'text-[#7D5A0D]',
  },
  {
    id: 'k-beauty',
    kicker: 'Anua, Medicube, Revox…',
    title: 'K-Beauty & soins',
    cta: 'Découvrir →',
    href: '/collections/femme',
    img: '/cdn/shop/files/323f4144-c2fc-4697-8b44-5c42bebbad31.jpg',
    bgGradient: 'bg-gradient-to-br from-[#F2FAF9] to-[#E8F8F5]',
    borderColor: 'border-[#CEEFE8]',
    textColor: 'text-[#0D6B5E]',
    ctaColor: 'text-[#0D6B5E]',
  },
];

export const HeroBanners: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeDot, setActiveDot] = useState(0);

  const handleScroll = () => {
    if (scrollRef.current) {
      const scrollPos = scrollRef.current.scrollLeft;
      const width = scrollRef.current.offsetWidth;
      const idx = Math.round(scrollPos / (width * 0.7));
      setActiveDot(Math.min(banners.length - 1, Math.max(0, idx)));
    }
  };

  return (
    <section className="py-4 md:py-6 overflow-hidden max-w-7xl mx-auto px-4 lg:px-8">
      <div
        ref={scrollRef}
        onScroll={handleScroll}
        className="flex items-center gap-3.5 overflow-x-auto no-scrollbar scroll-smooth snap-x snap-mandatory pb-2"
        style={{ WebkitOverflowScrolling: 'touch' }}
      >
        {banners.map((item) => (
          <Link
            key={item.id}
            href={item.href}
            className={`flex-shrink-0 snap-start w-[260px] sm:w-[280px] md:w-[310px] h-[130px] sm:h-[140px] rounded-2xl p-4 border ${item.borderColor} ${item.bgGradient} relative overflow-hidden flex items-center justify-between group transition-card shadow-mo-card`}
          >
            {/* Text content */}
            <div className="flex flex-col justify-between h-full z-10 max-w-[62%]">
              <div>
                <p className="text-[11px] font-semibold text-[#6C6282] uppercase tracking-wider line-clamp-1">
                  {item.kicker}
                </p>
                <h3 className={`text-base sm:text-lg font-extrabold ${item.textColor} mt-0.5 leading-tight line-clamp-2`}>
                  {item.title}
                </h3>
              </div>
              <span className={`text-xs font-bold ${item.ctaColor} flex items-center gap-1 group-hover:translate-x-1 transition-transform`}>
                {item.cta}
              </span>
            </div>

            {/* Floating Image */}
            <div className="relative w-20 h-20 sm:w-24 sm:h-24 flex-shrink-0 flex items-center justify-center -mr-1">
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-full object-contain filter drop-shadow-md group-hover:scale-105 transition-transform duration-300"
              />
            </div>
          </Link>
        ))}
      </div>

      {/* Dots Indicator for Mobile */}
      <div className="flex md:hidden justify-center items-center gap-1.5 mt-2">
        {banners.map((_, i) => (
          <div
            key={i}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              activeDot === i ? 'w-5 bg-[#3B2366]' : 'w-1.5 bg-[#E6DFF3]'
            }`}
          />
        ))}
      </div>
    </section>
  );
};

