'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Search, ShoppingBag, User, Menu, Phone, ChevronDown, Sparkles } from 'lucide-react';
import { useCart } from './CartContext';
import { MobileMenu } from './MobileMenu';

const navItems = [
  {
    name: 'Parfums',
    href: '/collections/femme',
    subItems: [
      { name: 'Femme', href: '/collections/femme' },
      { name: 'Homme', href: '/collections/femme' },
      { name: 'Parfums arabes', href: '/collections/femme' },
      { name: 'Tous les parfums', href: '/collections/femme' },
    ],
  },
  {
    name: 'Décants',
    href: '/collections/femme',
    subItems: [
      { name: 'Femme', href: '/collections/femme' },
      { name: 'Homme', href: '/collections/femme' },
      { name: 'Tous les décants', href: '/collections/femme' },
    ],
  },
  {
    name: 'Maquillage',
    href: '/collections/femme',
    subItems: [
      { name: 'Teint', href: '/collections/femme' },
      { name: 'Anti-cernes', href: '/collections/femme' },
      { name: 'Lèvres', href: '/collections/femme' },
      { name: 'Yeux & sourcils', href: '/collections/femme' },
      { name: 'Joues & éclat', href: '/collections/femme' },
      { name: 'Tout le maquillage', href: '/collections/femme' },
    ],
  },
  {
    name: 'Soins visage',
    href: '/collections/femme',
    subItems: [
      { name: 'Sérums & Ampoules', href: '/collections/femme' },
      { name: 'Crèmes & Hydratants', href: '/collections/femme' },
      { name: 'Protection solaire', href: '/collections/femme' },
      { name: 'Nettoyants & Démaquillants', href: '/collections/femme' },
      { name: 'Toners & Pads', href: '/collections/femme' },
      { name: 'Masques & Patchs', href: '/collections/femme' },
      { name: 'K-Beauty', href: '/collections/femme' },
      { name: 'Tous les soins visage', href: '/collections/femme' },
    ],
  },
  {
    name: 'Cheveux',
    href: '/collections/femme',
    subItems: [
      { name: 'Soins cheveux', href: '/collections/femme' },
      { name: 'Appareils coiffure', href: '/collections/femme' },
    ],
  },
  {
    name: 'Corps & bain',
    href: '/collections/femme',
    subItems: [
      { name: 'Déodorants', href: '/collections/femme' },
      { name: 'Hygiène', href: '/collections/femme' },
      { name: 'Bébé', href: '/collections/femme' },
      { name: 'Compléments alimentaires', href: '/collections/femme' },
      { name: 'Tout Corps & bain', href: '/collections/femme' },
    ],
  },
  { name: 'Appareils', href: '/collections/femme' },
  {
    name: 'Coffrets',
    href: '/collections/femme',
    subItems: [
      { name: 'Pour elle', href: '/collections/femme' },
      { name: 'Pour lui', href: '/collections/femme' },
      { name: 'Tous les coffrets', href: '/collections/femme' },
    ],
  },
  {
    name: 'Marques',
    href: '/collections/femme',
    subItems: [
      { name: 'Parfums de créateurs', href: '/collections/femme' },
      { name: 'Parfums arabes', href: '/collections/femme' },
      { name: 'Maquillage', href: '/collections/femme' },
      { name: 'Soins & K-Beauty', href: '/collections/femme' },
      { name: 'Corps & cheveux', href: '/collections/femme' },
      { name: 'Toutes les marques A–Z', href: '/collections/femme' },
    ],
  },
  { name: 'Suivre ma commande', href: '/collections/femme' },
  { name: 'WhatsApp', href: 'https://wa.me/212776510070', isExternal: true },
];

export const Header: React.FC = () => {
  const { totalCount, openCart } = useCart();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [isLogoRunning, setIsLogoRunning] = useState(false);
  const [runnerFrame, setRunnerFrame] = useState('/cdn/shop/files/mo-la-jump.webp');

  const triggerLogoAnim = () => {
    if (isLogoRunning) return;
    setIsLogoRunning(true);
    setRunnerFrame('/cdn/shop/files/mo-la-jump.webp');

    setTimeout(() => {
      setRunnerFrame('/cdn/shop/files/mo-la-land.webp');
    }, 280);

    let frameToggle = false;
    const interval = setInterval(() => {
      frameToggle = !frameToggle;
      setRunnerFrame(
        frameToggle
          ? '/cdn/shop/files/mo-la-run1.webp'
          : '/cdn/shop/files/mo-la-run2.webp'
      );
    }, 70);

    setTimeout(() => {
      clearInterval(interval);
      setIsLogoRunning(false);
    }, 1200);
  };

  return (
    <>
      <header className="sticky top-0 z-40 bg-white border-b border-[#E6DFF3] shadow-sm">
        {/* Main Header Row */}
        <div className="max-w-7xl mx-auto px-4 lg:px-8 py-3 relative">
          <div className="flex items-center justify-between gap-4">
            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="lg:hidden p-2 text-[#1F1433] hover:text-[#3B2366] transition-colors -ml-2"
              aria-label="Ouvrir le menu"
            >
              <Menu className="w-6 h-6" />
            </button>

            {/* Logo with Mascot Runner Animation */}
            <div className="flex-shrink-0 flex items-center relative">
              <Link
                href="/"
                onClick={(e) => {
                  triggerLogoAnim();
                }}
                className="inline-block relative group"
              >
                <img
                  src="/cdn/shop/files/mo-logo-2026-hd.png"
                  alt="MO Cosmetics"
                  className={`h-10 md:h-12 w-auto object-contain transition-transform duration-200 group-hover:scale-105 ${
                    isLogoRunning ? 'opacity-30' : 'opacity-100'
                  }`}
                />
              </Link>

              {/* Runner Mascot Overlay */}
              {isLogoRunning && (
                <div className="absolute left-0 top-0 pointer-events-none z-50 flex items-center animate-in fade-in duration-100">
                  <div
                    className="w-12 h-12"
                    style={{
                      animation: 'logoRunAcross 1.2s cubic-bezier(0.45, 0, 0.9, 0.6) forwards',
                    }}
                  >
                    <img
                      src={runnerFrame}
                      alt=""
                      className="w-full h-full object-contain filter drop-shadow-md"
                    />
                  </div>
                </div>
              )}
            </div>

            {/* Search Bar (Desktop) */}
            <div className="hidden lg:flex flex-1 max-w-xl mx-6">
              <div className="relative w-full">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Rechercher un parfum, une marque, un soin..."
                  className="w-full bg-[#F7F4FC] text-[#1F1433] placeholder-[#6C6282] text-sm pl-4 pr-10 py-2.5 rounded-full border border-[#E6DFF3] focus:outline-none focus:border-[#4B2E83] focus:bg-white transition-all shadow-inner"
                />
                <button
                  type="button"
                  aria-label="Rechercher"
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-[#6C6282] hover:text-[#3B2366]"
                >
                  <Search className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Actions: Account & Cart */}
            <div className="flex items-center gap-2 sm:gap-4">
              <a
                href="https://wa.me/212776510070"
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:flex items-center gap-1.5 text-xs md:text-sm font-semibold text-[#0d9488] bg-[#ecfdf5] hover:bg-[#d1fae5] px-3.5 py-1.5 rounded-full transition-colors border border-[#a7f3d0]"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>WhatsApp</span>
              </a>

              <Link
                href="/account"
                className="hidden md:flex items-center gap-1 text-sm font-medium text-[#1F1433] hover:text-[#3B2366] transition-colors px-2 py-1"
              >
                <User className="w-5 h-5" />
                <span>Connexion</span>
              </Link>

              <button
                id="cart-icon-bubble"
                onClick={openCart}
                aria-label="Panier d'achats"
                className="relative p-2 text-[#1F1433] hover:text-[#3B2366] transition-colors rounded-full hover:bg-[#EDE6F9]"
              >
                <ShoppingBag className="w-6 h-6" />
                {totalCount > 0 && (
                  <span className="absolute top-1 right-1 bg-[#3B2366] text-white text-[11px] font-bold w-5 h-5 rounded-full flex items-center justify-center shadow-md animate-pulse">
                    {totalCount}
                  </span>
                )}
              </button>
            </div>
          </div>

          {/* Search Bar (Mobile) */}
          <div className="mt-2.5 lg:hidden">
            <div className="relative w-full">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Rechercher un parfum, une marque..."
                className="w-full bg-[#F7F4FC] text-[#1F1433] placeholder-[#6C6282] text-sm pl-4 pr-10 py-2 rounded-full border border-[#E6DFF3] focus:outline-none focus:border-[#4B2E83] focus:bg-white transition-all shadow-inner"
              />
              <button
                type="button"
                aria-label="Rechercher"
                className="absolute right-3 top-1/2 -translate-y-1/2 text-[#6C6282]"
              >
                <Search className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Desktop Navigation Links Bar */}
        <nav className="hidden lg:block border-t border-[#E6DFF3]/60 bg-white">
          <div className="max-w-7xl mx-auto px-8">
            <ul className="flex items-center justify-start gap-5 py-2.5 text-[14px] font-medium text-[#1F1433]">
              {navItems.map((item) => {
                const hasSub = item.subItems && item.subItems.length > 0;
                return (
                  <li
                    key={item.name}
                    className="relative group"
                    onMouseEnter={() => hasSub && setActiveDropdown(item.name)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    {item.isExternal ? (
                      <a
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 hover:text-[#4B2E83] transition-colors py-1 text-[#0d9488] font-semibold"
                      >
                        {item.name}
                      </a>
                    ) : (
                      <Link
                        href={item.href}
                        className={`flex items-center gap-1 hover:text-[#4B2E83] transition-colors py-1 ${
                          activeDropdown === item.name ? 'text-[#4B2E83] font-semibold' : ''
                        }`}
                      >
                        <span>{item.name}</span>
                        {hasSub && (
                          <ChevronDown className="w-3.5 h-3.5 text-[#6C6282] group-hover:rotate-180 transition-transform duration-200" />
                        )}
                      </Link>
                    )}

                    {/* Dropdown Menu */}
                    {hasSub && activeDropdown === item.name && (
                      <div className="absolute top-full left-0 mt-1 w-56 bg-white border border-[#E6DFF3] shadow-lg rounded-xl py-2 z-50 animate-in fade-in slide-in-from-top-1 duration-150">
                        {item.subItems!.map((sub) => (
                          <Link
                            key={sub.name}
                            href={sub.href}
                            className="block px-4 py-2 text-sm text-[#1F1433] hover:bg-[#F7F4FC] hover:text-[#4B2E83] font-medium transition-colors"
                          >
                            {sub.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>
        </nav>
      </header>

      {/* Mobile Drawer */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />

      <style jsx global>{`
        @keyframes logoRunAcross {
          0% {
            transform: translateX(0);
            opacity: 1;
          }
          100% {
            transform: translateX(min(90vw, 800px));
            opacity: 0;
          }
        }
      `}</style>
    </>
  );
};
