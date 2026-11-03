'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ChevronRight, Sparkles, SlidersHorizontal, ArrowUpDown, PackageOpen } from 'lucide-react';

const chips = [
  { name: 'Parfums femme', href: '/collections/femme', active: true },
  { name: 'Décants femme', href: '/collections/femme', active: false },
  { name: 'Parfums arabes femme', href: '/collections/femme', active: false },
  { name: 'Coffrets femme', href: '/collections/femme', active: false },
];

export default function FemmeCollectionPage() {
  const [activeChip, setActiveChip] = useState('Parfums femme');

  return (
    <div className="min-h-screen bg-[#F7F4FC] text-[#1F1433]">
      {/* Breadcrumb Navigation */}
      <div className="max-w-7xl mx-auto px-4 lg:px-8 pt-5 pb-2">
        <nav aria-label="Fil d'Ariane" className="flex items-center gap-1.5 text-xs text-[#6C6282]">
          <Link href="/" className="hover:text-[#34205C] transition-colors">
            Accueil
          </Link>
          <ChevronRight className="w-3.5 h-3.5 opacity-50" />
          <span className="font-semibold text-[#1F1433]">Parfums femme</span>
        </nav>
      </div>

      {/* Collection Hero Section */}
      <section className="max-w-7xl mx-auto px-4 lg:px-8 pt-4 pb-6">
        <div className="max-w-3xl">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#1F1433] tracking-tight mb-3">
            Parfums femme
          </h1>
          <p className="text-sm sm:text-base text-[#6C6282] leading-relaxed">
            Floraux, gourmands, fruités ou orientaux : trouvez le parfum féminin qui vous ressemble parmi les grandes marques et les parfums arabes, tous 100 % originaux.
          </p>
        </div>

        {/* Subnav Chips / Pills */}
        <div className="pt-6 pb-2">
          <ul className="flex items-center gap-2.5 overflow-x-auto no-scrollbar py-1" role="list">
            {chips.map((chip) => {
              const isActive = activeChip === chip.name;
              return (
                <li key={chip.name} className="flex-shrink-0">
                  <button
                    type="button"
                    onClick={() => setActiveChip(chip.name)}
                    className={`inline-flex items-center h-10 px-5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 border ${
                      isActive
                        ? 'bg-[#34205C] text-white border-[#34205C] shadow-sm shadow-[#34205C]/20'
                        : 'bg-white text-[#1F1433] border-[#E6DFF3] hover:border-[#4B2E83] hover:bg-white/80'
                    }`}
                  >
                    {chip.name}
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      {/* Collection Layout (No products rendered as explicitly instructed) */}
      <section className="max-w-7xl mx-auto px-4 lg:px-8 py-12 md:py-20">
        <div className="bg-white/70 backdrop-blur-sm border border-[#E6DFF3] rounded-3xl p-8 sm:p-12 text-center max-w-2xl mx-auto shadow-sm">
          <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-[#EDE6F9] text-[#34205C] flex items-center justify-center relative">
            <PackageOpen className="w-10 h-10 text-[#3B2366]" />
            <span className="absolute -top-1.5 -right-1.5 flex h-4 w-4">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#9B2E5A] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-4 w-4 bg-[#9B2E5A]"></span>
            </span>
          </div>

          <h2 className="text-xl sm:text-2xl font-black text-[#1F1433] mb-3">
            Collection {activeChip}
          </h2>

          <p className="text-sm sm:text-base text-[#6C6282] max-w-md mx-auto leading-relaxed mb-8">
            Cette page a été dupliquée selon votre instruction sans intégrer la liste des produits. Les catégories et l'architecture sont prêtes.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="/"
              className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 rounded-full bg-[#3B2366] hover:bg-[#34205C] text-white font-bold text-sm transition-all shadow-md hover:scale-[1.02]"
            >
              Retour à l'accueil
            </Link>
            <a
              href="https://wa.me/212776510070"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-sm transition-all shadow-md hover:scale-[1.02]"
            >
              Commander sur WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

