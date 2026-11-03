'use client';

import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { Package, MessageCircle, ArrowRight } from 'lucide-react';

export const AboutSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isWaving, setIsWaving] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsWaving(true);
        }
      },
      { threshold: 0.25 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-8 md:py-12 max-w-7xl mx-auto px-4 lg:px-8">
      {/* 1. Main About Card */}
      <div className="bg-[#F7F4FC] rounded-3xl p-6 sm:p-10 border border-[#E6DFF3] shadow-sm mb-5 relative overflow-hidden">
        {/* Subtle decorative background gradient */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-bl from-[#EDE6F9]/60 to-transparent rounded-full -mr-20 -mt-20 pointer-events-none" />

        <div className="max-w-3xl relative z-10">
          <p className="text-[11px] sm:text-xs font-extrabold text-[#6C6282] uppercase tracking-[0.18em] mb-1.5">
            PARFUMERIE À FÈS
          </p>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#1F1433] tracking-tight mb-3">
            À propos de MO Cosmetics
          </h2>

          <p className="text-sm sm:text-base text-[#1F1433]/80 leading-relaxed mb-3">
            MO Cosmetics est une parfumerie et boutique beauté à Fès (Route de Sefrou) : parfums originaux, décants 5 ml et 10 ml, soins K-Beauty et maquillage. Tous nos produits sont 100% authentiques.
          </p>

          <p className="text-sm sm:text-base text-[#1F1433]/80 leading-relaxed mb-6">
            Livraison le jour même à Fès avec paiement à la livraison, et en 24 à 48h partout au Maroc.
          </p>

          {/* Pill Buttons */}
          <div className="flex flex-wrap items-center gap-3">
            <Link
              href="/collections/femme"
              className="bg-white hover:bg-[#3B2366] text-[#1F1433] hover:text-white border border-[#E6DFF3] hover:border-[#3B2366] text-xs sm:text-sm font-bold py-2.5 px-6 rounded-full transition-all shadow-2xs hover:shadow-xs active:scale-95"
            >
              En savoir plus
            </Link>

            <Link
              href="/collections/femme"
              className="bg-white hover:bg-[#3B2366] text-[#1F1433] hover:text-white border border-[#E6DFF3] hover:border-[#3B2366] text-xs sm:text-sm font-bold py-2.5 px-6 rounded-full transition-all shadow-2xs hover:shadow-xs active:scale-95"
            >
              Notre boutique à Fès
            </Link>
          </div>
        </div>
      </div>

      {/* 2. Dual Action Help Cards with Peeking Animated Mascot */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 relative">
        {/* Left Card: Suivre ma commande WITH PEEKING CHARACTER */}
        <Link
          href="/collections/femme"
          className="group relative bg-white hover:bg-[#FAF7FD] rounded-2xl p-5 sm:p-6 border border-[#E6DFF3] shadow-mo-card transition-card flex items-center gap-4"
        >
          {/* Peeking Mascot Animated on Scroll */}
          <div
            className={`absolute -top-12 sm:-top-14 left-3 sm:left-4 z-20 pointer-events-none transition-all duration-700 ease-out ${
              isWaving
                ? 'opacity-100 translate-y-0 scale-100'
                : 'opacity-0 translate-y-6 scale-75'
            }`}
          >
            <div className="w-16 h-16 sm:w-18 sm:h-18 animate-wave relative">
              <img
                src="/cdn/shop/files/mo-masc-wave.webp"
                alt="Mascotte MO Cosmetics"
                className="w-full h-full object-contain filter drop-shadow-md select-none"
                draggable="false"
              />
            </div>
          </div>

          <div className="w-12 h-12 rounded-xl bg-[#EDE6F9] text-[#4B2E83] flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
            <Package className="w-6 h-6 stroke-[1.8]" />
          </div>

          <div className="flex-1 min-w-0">
            <h4 className="text-sm sm:text-base font-extrabold text-[#1F1433] group-hover:text-[#4B2E83] transition-colors">
              Suivre ma commande
            </h4>
            <p className="text-xs sm:text-sm text-[#6C6282] mt-0.5">
              Où en est mon colis ?
            </p>
          </div>

          <ArrowRight className="w-4 h-4 text-[#6C6282] group-hover:text-[#4B2E83] group-hover:translate-x-1 transition-all" />
        </Link>

        {/* Right Card: Commander sur WhatsApp */}
        <a
          href="https://wa.me/212776510070"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative bg-[#EDFDF2] hover:bg-[#E1FBEB] rounded-2xl p-5 sm:p-6 border border-[#A7F3D0] shadow-mo-card transition-card flex items-center gap-4"
        >
          <div className="w-12 h-12 rounded-xl bg-[#25D366] text-white flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform shadow-2xs">
            <MessageCircle className="w-6 h-6 fill-white text-white" />
          </div>

          <div className="flex-1 min-w-0">
            <h4 className="text-sm sm:text-base font-extrabold text-[#065F46] group-hover:text-[#047857] transition-colors">
              Commander sur WhatsApp
            </h4>
            <p className="text-xs sm:text-sm text-[#047857]/80 mt-0.5">
              Réponse rapide
            </p>
          </div>

          <ArrowRight className="w-4 h-4 text-[#059669] group-hover:translate-x-1 transition-all" />
        </a>
      </div>
    </section>
  );
};
