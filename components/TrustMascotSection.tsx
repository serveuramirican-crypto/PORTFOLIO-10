'use client';

import React from 'react';
import { Star, ArrowRight } from 'lucide-react';

export const TrustMascotSection: React.FC = () => {
  return (
    <section className="py-4 md:py-6 max-w-7xl mx-auto px-4 lg:px-8">
      <div className="bg-gradient-to-r from-[#FCE6F1] to-[#F8DDEC] rounded-3xl p-6 sm:p-8 border border-[#F8D2DF] shadow-sm flex flex-col sm:flex-row items-center gap-6 sm:gap-10 overflow-hidden">
        {/* Floating Mascot with Hearts */}
        <div className="w-28 sm:w-36 md:w-44 flex-shrink-0 animate-float">
          <img
            src="/cdn/shop/files/mo-mascot-coeur.webp"
            alt="Mascotte MO Cosmetics"
            className="w-full h-auto object-contain filter drop-shadow-md select-none"
            draggable="false"
          />
        </div>

        {/* Content */}
        <div className="flex-1 text-center sm:text-left">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-[#1F1433] tracking-tight">
            Ils nous font confiance !
          </h2>

          <div className="flex items-center justify-center sm:justify-start gap-2 my-2">
            <div className="flex text-[#F59E0B]">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-[#F59E0B]" />
              ))}
            </div>
            <span className="text-sm font-extrabold text-[#1F1433]">
              4,9/5 sur Google
            </span>
          </div>

          <p className="text-xs sm:text-sm text-[#4A3D60] leading-relaxed mb-4 max-w-md">
            Des centaines de clients satisfaits à Fès et partout au Maroc.
          </p>

          <a
            href="https://maps.google.com/?cid=14303378717787317269"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white hover:bg-[#3B2366] text-[#34205C] hover:text-white border border-[#4B2E83] text-xs sm:text-sm font-bold py-2.5 px-6 rounded-full transition-all shadow-2xs hover:shadow-xs active:scale-95"
          >
            <span>Voir les avis</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

