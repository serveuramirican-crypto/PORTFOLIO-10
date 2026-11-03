'use client';

import React, { useState } from 'react';
import { Phone, X } from 'lucide-react';

export const FloatingWhatsApp: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(true);

  return (
    <div className="fixed bottom-5 right-5 z-40 flex items-center gap-2">
      {/* Tooltip / Prompt */}
      {showTooltip && (
        <div className="hidden sm:flex items-center gap-2 bg-white text-[#1F1433] px-3.5 py-2 rounded-2xl shadow-xl border border-[#E6DFF3] text-xs font-semibold animate-in fade-in slide-in-from-right duration-300">
          <span>Besoin d'un conseil ? Écrivez-nous !</span>
          <button
            onClick={() => setShowTooltip(false)}
            className="text-[#6C6282] hover:text-[#1F1433] p-0.5"
            aria-label="Fermer"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Button */}
      <a
        href="https://wa.me/212776510070"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contactez-nous sur WhatsApp"
        className="w-13 h-13 sm:w-14 sm:h-14 bg-[#25D366] hover:bg-[#20ba5a] text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-105 transition-all relative"
      >
        <Phone className="w-6 h-6 stroke-[2.5]" />
        <span className="absolute top-0 right-0 w-3.5 h-3.5 bg-red-500 border-2 border-white rounded-full animate-ping" />
        <span className="absolute top-0 right-0 w-3.5 h-3.5 bg-red-500 border-2 border-white rounded-full" />
      </a>
    </div>
  );
};

