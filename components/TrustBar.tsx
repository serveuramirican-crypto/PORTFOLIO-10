'use client';

import React from 'react';
import { ShieldCheck, Truck, CreditCard, MessageCircle } from 'lucide-react';

const trustItems = [
  {
    icon: ShieldCheck,
    title: 'Produits 100% originaux',
    sub: 'Vérifiés avec soin',
    href: '#',
  },
  {
    icon: Truck,
    title: 'Livraison rapide',
    sub: 'Fès : jour même · Maroc : 24 à 48h',
    href: '/pages/livraison',
  },
  {
    icon: CreditCard,
    title: 'Paiement à la livraison',
    sub: 'Disponible à Fès',
    href: '#',
  },
  {
    icon: MessageCircle,
    title: 'Service client WhatsApp',
    sub: 'Réponse rapide',
    href: 'https://wa.me/212776510070',
    isExternal: true,
  },
];

export const TrustBar: React.FC = () => {
  return (
    <section className="py-4 md:py-6 max-w-7xl mx-auto px-4 lg:px-8">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
        {trustItems.map((item, idx) => {
          const Icon = item.icon;
          const Content = (
            <div className="bg-white rounded-2xl p-4 border border-[#E6DFF3] shadow-2xs hover:shadow-xs transition-card flex items-center gap-3.5 h-full">
              <div className="w-10 h-10 rounded-xl bg-[#EDE6F9] text-[#4B2E83] flex items-center justify-center flex-shrink-0">
                <Icon className="w-5 h-5 stroke-[2]" />
              </div>
              <div className="min-w-0">
                <h4 className="text-xs sm:text-sm font-bold text-[#1F1433] leading-snug truncate">
                  {item.title}
                </h4>
                <p className="text-[11px] sm:text-xs text-[#6C6282] leading-tight truncate mt-0.5">
                  {item.sub}
                </p>
              </div>
            </div>
          );

          return item.isExternal ? (
            <a
              key={idx}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              {Content}
            </a>
          ) : (
            <a key={idx} href={item.href} className="block">
              {Content}
            </a>
          );
        })}
      </div>
    </section>
  );
};

