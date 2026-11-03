'use client';

import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const announcements = [
  "Fès : livraison le jour même · Maroc : 24 à 48h",
  "Livraison gratuite à Fès dès 500 dh · Maroc 40 dh",
  "Produits 100% originaux, vérifiés à Fès",
  "اللهم صلِّ على سيدِنا محمد ﷺ"
];

export const AnnouncementBar: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % announcements.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + announcements.length) % announcements.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % announcements.length);
  };

  return (
    <div className="bg-[#34205C] text-white text-[13px] md:text-sm font-medium py-2 px-3 border-b border-[#4B2E83]/40 select-none relative z-40">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <button
          onClick={handlePrev}
          aria-label="Annonce précédente"
          className="text-white/70 hover:text-white p-1 transition-colors flex items-center justify-center"
        >
          <ChevronLeft className="w-4 h-4" />
        </button>

        <div className="flex-1 text-center overflow-hidden px-2">
          <p className="transition-opacity duration-300 font-semibold tracking-wide truncate">
            {announcements[currentIndex]}
          </p>
        </div>

        <button
          onClick={handleNext}
          aria-label="Annonce suivante"
          className="text-white/70 hover:text-white p-1 transition-colors flex items-center justify-center"
        >
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

