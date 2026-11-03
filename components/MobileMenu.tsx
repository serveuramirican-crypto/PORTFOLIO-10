'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { X, ChevronDown, ChevronRight, Phone, Search, ShoppingBag, User } from 'lucide-react';

interface SubItem {
  name: string;
  href: string;
}

interface NavCategory {
  title: string;
  href: string;
  items?: SubItem[];
}

const navCategories: NavCategory[] = [
  {
    title: 'Parfums',
    href: '/collections/femme',
    items: [
      { name: 'Femme', href: '/collections/femme' },
      { name: 'Homme', href: '/collections/femme' },
      { name: 'Parfums arabes', href: '/collections/femme' },
      { name: 'Tous les parfums', href: '/collections/femme' },
    ],
  },
  {
    title: 'Décants',
    href: '/collections/femme',
    items: [
      { name: 'Femme', href: '/collections/femme' },
      { name: 'Homme', href: '/collections/femme' },
      { name: 'Tous les décants', href: '/collections/femme' },
    ],
  },
  {
    title: 'Maquillage',
    href: '/collections/femme',
    items: [
      { name: 'Teint', href: '/collections/femme' },
      { name: 'Anti-cernes', href: '/collections/femme' },
      { name: 'Lèvres', href: '/collections/femme' },
      { name: 'Yeux & sourcils', href: '/collections/femme' },
      { name: 'Joues & éclat', href: '/collections/femme' },
      { name: 'Tout le maquillage', href: '/collections/femme' },
    ],
  },
  {
    title: 'Soins visage',
    href: '/collections/femme',
    items: [
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
    title: 'Cheveux',
    href: '/collections/femme',
    items: [
      { name: 'Soins cheveux', href: '/collections/femme' },
      { name: 'Appareils coiffure', href: '/collections/femme' },
    ],
  },
  {
    title: 'Corps & bain',
    href: '/collections/femme',
    items: [
      { name: 'Déodorants', href: '/collections/femme' },
      { name: 'Hygiène', href: '/collections/femme' },
      { name: 'Bébé', href: '/collections/femme' },
      { name: 'Compléments alimentaires', href: '/collections/femme' },
      { name: 'Tout Corps & bain', href: '/collections/femme' },
    ],
  },
  {
    title: 'Coffrets',
    href: '/collections/femme',
    items: [
      { name: 'Pour elle', href: '/collections/femme' },
      { name: 'Pour lui', href: '/collections/femme' },
      { name: 'Tous les coffrets', href: '/collections/femme' },
    ],
  },
  {
    title: 'Marques',
    href: '/collections/femme',
    items: [
      { name: 'Parfums de créateurs', href: '/collections/femme' },
      { name: 'Parfums arabes', href: '/collections/femme' },
      { name: 'Maquillage', href: '/collections/femme' },
      { name: 'Soins & K-Beauty', href: '/collections/femme' },
      { name: 'Toutes les marques A–Z', href: '/collections/femme' },
    ],
  },
];

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose }) => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Drawer */}
      <div className="relative w-full max-w-[340px] bg-white h-full shadow-2xl flex flex-col z-10 overflow-hidden">
        {/* Header */}
        <div className="p-4 border-b border-[#E6DFF3] flex items-center justify-between bg-[#F7F4FC]">
          <span className="font-bold text-[#1F1433] text-lg">Menu</span>
          <button
            onClick={onClose}
            className="p-1 rounded-full text-[#6C6282] hover:text-[#1F1433] hover:bg-[#EDE6F9] transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Categories List */}
        <div className="flex-1 overflow-y-auto divide-y divide-[#E6DFF3]/60 py-2">
          {navCategories.map((cat, idx) => {
            const isExpanded = expandedIndex === idx;
            return (
              <div key={cat.title} className="px-4 py-2">
                <div
                  className="flex items-center justify-between py-2 text-[#1F1433] font-medium text-[15px] cursor-pointer"
                  onClick={() => setExpandedIndex(isExpanded ? null : idx)}
                >
                  <span>{cat.title}</span>
                  {cat.items && (
                    <ChevronDown
                      className={`w-4 h-4 text-[#6C6282] transition-transform duration-200 ${
                        isExpanded ? 'rotate-180 text-[#3B2366]' : ''
                      }`}
                    />
                  )}
                </div>

                {/* Submenu */}
                {isExpanded && cat.items && (
                  <div className="pl-4 py-1.5 space-y-2 bg-[#F7F4FC]/80 rounded-xl my-1 border border-[#E6DFF3]/50">
                    {cat.items.map((sub) => (
                      <Link
                        key={sub.name}
                        href={sub.href}
                        onClick={onClose}
                        className="block py-1.5 text-sm text-[#4B2E83] hover:text-[#1F1433] transition-colors"
                      >
                        {sub.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            );
          })}

          <div className="p-4 space-y-3 bg-[#F7F4FC] mt-4 border-t border-[#E6DFF3]">
            <Link
              href="/pages/suivre-ma-commande"
              onClick={onClose}
              className="flex items-center gap-2 text-sm font-semibold text-[#1F1433] hover:text-[#3B2366]"
            >
              <span>Suivre ma commande</span>
            </Link>

            <a
              href="https://wa.me/212776510070"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm font-semibold text-[#0d9488]"
            >
              <Phone className="w-4 h-4" />
              <span>WhatsApp: +212 776-510070</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

