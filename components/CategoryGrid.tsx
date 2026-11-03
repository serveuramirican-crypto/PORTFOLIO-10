'use client';

import React from 'react';
import Link from 'next/link';

interface Category {
  tag: string;
  title: string;
  href: string;
  img: string;
}

const categories: Category[] = [
  {
    tag: 'Nouveaux',
    title: 'Décants',
    href: '/collections/femme',
    img: '/cdn/shop/files/IMG-5192.png',
  },
  {
    tag: 'Nouveau',
    title: 'Parfums',
    href: '/collections/femme',
    img: '/cdn/shop/files/IMG-5194.png',
  },
  {
    tag: 'Nouveau',
    title: 'K-Beauty & soins',
    href: '/collections/femme',
    img: '/cdn/shop/files/IMG-5196.png',
  },
  {
    tag: 'Nouveau',
    title: 'Maquillage',
    href: '/collections/femme',
    img: '/cdn/shop/files/88427A02-0F57-41DE-877C-EF138FCDE0F8_90644b60-248a-417c-b520-e016d0127c0f.jpg',
  },
];

export const CategoryGrid: React.FC = () => {
  return (
    <section className="py-4 md:py-6 max-w-7xl mx-auto px-4 lg:px-8">
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 md:gap-5">
        {categories.map((cat) => (
          <Link
            key={cat.title}
            href={cat.href}
            className="group bg-white rounded-2xl p-3 sm:p-4 border border-[#E6DFF3] shadow-mo-card transition-card flex flex-col items-center text-center overflow-hidden"
          >
            {/* Pill Tag */}
            <span className="bg-[#FAF7FD] text-[#4B2E83] border border-[#E6DFF3] text-[10px] sm:text-xs font-bold px-2.5 py-0.5 rounded-full mb-1 group-hover:bg-[#EDE6F9] transition-colors">
              {cat.tag}
            </span>

            {/* Title */}
            <h3 className="text-xs sm:text-sm md:text-base font-bold text-[#1F1433] mb-2 group-hover:text-[#4B2E83] transition-colors line-clamp-1">
              {cat.title}
            </h3>

            {/* Image */}
            <div className="relative w-28 h-28 sm:w-32 sm:h-32 md:w-36 md:h-36 flex items-center justify-center mt-auto">
              <img
                src={cat.img}
                alt={cat.title}
                className="w-full h-full object-contain filter drop-shadow-sm group-hover:scale-105 transition-transform duration-300"
                loading="lazy"
              />
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

