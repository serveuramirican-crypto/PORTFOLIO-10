'use client';

import React from 'react';
import Link from 'next/link';

export const EssenceBanner: React.FC = () => {
  return (
    <section className="py-4 md:py-6 max-w-7xl mx-auto px-4 lg:px-8">
      <Link
        href="/collections/femme"
        className="block rounded-3xl overflow-hidden border border-[#E6DFF3] shadow-sm hover:shadow-md transition-card group relative"
      >
        <picture>
          <source
            media="(min-width: 750px)"
            srcSet="/cdn/shop/files/mo-essence-large.webp"
          />
          <img
            src="/cdn/shop/files/mo-essence-tel.webp"
            alt="Essence – nouvelle collection de maquillage à petits prix"
            className="w-full h-auto object-cover group-hover:scale-[1.01] transition-transform duration-500"
            loading="lazy"
          />
        </picture>
      </Link>
    </section>
  );
};

