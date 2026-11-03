'use client';

import React, { useRef, useState } from 'react';
import Link from 'next/link';
import { ChevronLeft, ChevronRight, ShoppingBag, Check } from 'lucide-react';
import { useCart } from './CartContext';

export interface Product {
  title: string;
  href: string;
  img: string;
  price: string;
  badge?: string;
}

interface ProductRailProps {
  eyebrow: string;
  title: string;
  seeAllHref: string;
  products: Product[];
}

export const ProductRail: React.FC<ProductRailProps> = ({
  eyebrow,
  title,
  seeAllHref,
  products,
}) => {
  const { addToCart } = useCart();
  const scrollRef = useRef<HTMLDivElement>(null);
  const [addedItem, setAddedItem] = useState<string | null>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = direction === 'left' ? -320 : 320;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const flyToCart = (startEl: HTMLElement, imgSrc: string) => {
    const cartIcon = document.getElementById('cart-icon-bubble');
    if (!cartIcon) return;

    const startRect = startEl.getBoundingClientRect();
    const endRect = cartIcon.getBoundingClientRect();

    const flyer = document.createElement('img');
    flyer.src = imgSrc;
    flyer.className = 'fixed rounded-2xl z-[9999] pointer-events-none object-contain shadow-2xl bg-white border border-[#E6DFF3]';
    flyer.style.width = '70px';
    flyer.style.height = '70px';
    flyer.style.left = `${startRect.left + startRect.width / 2 - 35}px`;
    flyer.style.top = `${startRect.top + startRect.height / 2 - 35}px`;
    flyer.style.transition = 'all 0.65s cubic-bezier(0.2, 0.9, 0.3, 1)';
    document.body.appendChild(flyer);

    requestAnimationFrame(() => {
      flyer.style.left = `${endRect.left + endRect.width / 2 - 15}px`;
      flyer.style.top = `${endRect.top + endRect.height / 2 - 15}px`;
      flyer.style.width = '30px';
      flyer.style.height = '30px';
      flyer.style.opacity = '0.3';
      flyer.style.transform = 'scale(0.3) rotate(-20deg)';
    });

    setTimeout(() => {
      flyer.remove();
      cartIcon.classList.remove('mo-bump');
      void cartIcon.offsetWidth;
      cartIcon.classList.add('mo-bump');
    }, 650);
  };

  const handleAddToCart = (e: React.MouseEvent, product: Product) => {
    e.preventDefault();
    e.stopPropagation();

    const targetBtn = e.currentTarget as HTMLElement;
    flyToCart(targetBtn, product.img || '/cdn/shop/files/mo-essence-large.webp');

    addToCart(product);
    setAddedItem(product.title);
    setTimeout(() => setAddedItem(null), 1500);
  };

  return (
    <section className="py-6 md:py-8 max-w-7xl mx-auto px-4 lg:px-8">
      {/* Header */}
      <div className="flex items-end justify-between mb-4 md:mb-6">
        <div>
          <p className="text-[11px] sm:text-xs font-bold text-[#6C6282] uppercase tracking-wider mb-0.5">
            {eyebrow}
          </p>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-[#1F1433] tracking-tight">
            {title}
          </h2>
        </div>

        <div className="flex items-center gap-3">
          {/* Slider Arrows (Desktop) */}
          <div className="hidden sm:flex items-center gap-1.5">
            <button
              onClick={() => scroll('left')}
              className="w-8 h-8 rounded-full border border-[#E6DFF3] bg-white text-[#1F1433] hover:bg-[#EDE6F9] hover:text-[#4B2E83] flex items-center justify-center transition-colors shadow-2xs"
              aria-label="Produits précédents"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={() => scroll('right')}
              className="w-8 h-8 rounded-full border border-[#E6DFF3] bg-white text-[#1F1433] hover:bg-[#EDE6F9] hover:text-[#4B2E83] flex items-center justify-center transition-colors shadow-2xs"
              aria-label="Produits suivants"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          {/* See All */}
          <Link
            href="/collections/femme"
            className="text-xs sm:text-sm font-bold text-[#4B2E83] hover:text-[#1F1433] transition-colors whitespace-nowrap"
          >
            Voir tout →
          </Link>
        </div>
      </div>

      {/* Product Scroll / Grid */}
      <div
        ref={scrollRef}
        className="flex gap-3 sm:gap-4 overflow-x-auto no-scrollbar scroll-smooth pb-3 snap-x snap-mandatory"
        style={{ WebkitOverflowScrolling: 'touch' }}
      >
        {products.map((product, idx) => {
          const isAdded = addedItem === product.title;
          return (
            <div
              key={`${product.title}-${idx}`}
              className="flex-shrink-0 snap-start w-[170px] sm:w-[210px] md:w-[230px] bg-white rounded-2xl border border-[#E6DFF3] p-3 flex flex-col justify-between group transition-card shadow-mo-card"
            >
              <Link href="/collections/femme" className="block relative">
                {/* Badge if present */}
                {product.badge && (
                  <span className="absolute top-1 left-1 z-10 bg-[#3B2366] text-white text-[10px] font-bold px-2 py-0.5 rounded-full shadow-2xs">
                    {product.badge}
                  </span>
                )}

                {/* Product Image */}
                <div className="w-full aspect-square rounded-xl overflow-hidden bg-[#FAF7FD] mb-2.5 flex items-center justify-center relative p-2">
                  <img
                    src={product.img || '/cdn/shop/files/mo-essence-large.webp'}
                    alt={product.title}
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                </div>

                {/* Product Title */}
                <h3 className="text-xs sm:text-sm font-bold text-[#1F1433] group-hover:text-[#4B2E83] transition-colors line-clamp-2 leading-snug min-h-[2.5rem]">
                  {product.title}
                </h3>
              </Link>

              {/* Price and Add Button */}
              <div className="mt-3 pt-2 border-t border-[#E6DFF3]/50 flex items-center justify-between gap-1">
                <span className="text-xs sm:text-sm font-extrabold text-[#3B2366] whitespace-nowrap">
                  {product.price}
                </span>

                <button
                  onClick={(e) => handleAddToCart(e, product)}
                  aria-label="Ajouter au panier"
                  className={`p-2 rounded-xl transition-all flex items-center justify-center flex-shrink-0 ${
                    isAdded
                      ? 'bg-emerald-600 text-white'
                      : 'bg-[#EDE6F9] hover:bg-[#3B2366] text-[#4B2E83] hover:text-white'
                  }`}
                >
                  {isAdded ? (
                    <Check className="w-3.5 h-3.5 sm:w-4 sm:h-4 stroke-[2.5]" />
                  ) : (
                    <ShoppingBag className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  )}
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
