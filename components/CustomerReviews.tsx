'use client';

import React, { useRef } from 'react';
import { Star, ChevronLeft, ChevronRight, MapPin, Navigation, Phone, ExternalLink } from 'lucide-react';

interface Review {
  initial: string;
  name: string;
  source: string;
  text: string;
}

const reviews: Review[] = [
  {
    initial: 'N',
    name: 'Naduuu M.',
    source: 'Avis Google',
    text: 'Excellent service ! Je suis très satisfaite de mon expérience chez MO COSMETICS. Produits de qualité, beaucoup de choix et un accueil très agréable. Je recommande vivement!',
  },
  {
    initial: 'I',
    name: 'Ichrak T.',
    source: 'Avis Google',
    text: 'Un accueil chaleureux et un service irréprochable ! Une équipe adorable, très professionnelle et toujours à l’écoute. On se sent vraiment bien accueillie et conseillée. Je recommande vivement cette boutique pour la qualité de ses produits et surtout pour son excellent service client.',
  },
  {
    initial: 'G',
    name: 'Ghizlane G.',
    source: 'Avis Google',
    text: 'La meilleure adresse pour les soins et parfums, excellente qualité et prix très raisonnable !',
  },
  {
    initial: 'S',
    name: 'Soumia I.',
    source: 'Avis Google',
    text: 'Meilleure parfumerie au maroc, avec un très bon service 🤩🙌',
  },
  {
    initial: 'K',
    name: 'KO K.',
    source: 'Avis Google',
    text: 'Vraiment les produits 100% authentique le meilleur au Maroc',
  },
  {
    initial: 'C',
    name: 'Charmeiine',
    source: 'Avis Google',
    text: 'Vraiment meilleur parfumerie à fes, je recommande vivement',
  },
  {
    initial: 'A',
    name: 'Aïcha E.',
    source: 'Avis Google',
    text: 'The best magazine I love the way how they treat the clients, and they have the best prices ever',
  },
  {
    initial: 'G',
    name: 'Ghita M.',
    source: 'Avis Google',
    text: 'Ahseen parfumerie fik ya fes mo cosmetic',
  },
  {
    initial: 'D',
    name: 'Douja A.',
    source: 'Avis Google',
    text: 'A7saaaaaà wa7ed fes vraiment TOp',
  },
  {
    initial: 'M',
    name: 'Marwa M.',
    source: 'Avis Google',
    text: 'Bon serves ❤️‍🔥❤️‍🔥',
  },
];

const avatarColors = ['#4B2E83', '#9B2E5A', '#34205C', '#0D6B5E'];

export const CustomerReviews: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = direction === 'left' ? -350 : 350;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-8 md:py-12 max-w-7xl mx-auto px-4 lg:px-8">
      {/* Header */}
      <div className="flex items-end justify-between mb-6">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <p className="text-[11px] sm:text-xs font-bold text-[#6C6282] uppercase tracking-wider">
              Avis Google
            </p>
            <span className="inline-flex items-center gap-1 bg-[#FEF9E7] text-[#7D5A0D] border border-[#F8EAC2] text-[11px] font-extrabold px-2 py-0.5 rounded-full">
              <Star className="w-3 h-3 fill-[#F59E0B] text-[#F59E0B]" />
              4,9/5
            </span>
          </div>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-[#1F1433] tracking-tight">
            Ce que disent nos clients
          </h2>
        </div>

        <div className="flex items-center gap-3">
          <div className="hidden sm:flex items-center gap-1.5">
            <button
              onClick={() => scroll('left')}
              className="w-8 h-8 rounded-full border border-[#E6DFF3] bg-white text-[#1F1433] hover:bg-[#EDE6F9] hover:text-[#4B2E83] flex items-center justify-center transition-colors shadow-2xs"
              aria-label="Avis précédents"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={() => scroll('right')}
              className="w-8 h-8 rounded-full border border-[#E6DFF3] bg-white text-[#1F1433] hover:bg-[#EDE6F9] hover:text-[#4B2E83] flex items-center justify-center transition-colors shadow-2xs"
              aria-label="Avis suivants"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          <a
            href="https://maps.google.com/?cid=14303378717787317269"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs sm:text-sm font-bold text-[#4B2E83] hover:text-[#1F1433] transition-colors whitespace-nowrap flex items-center gap-1"
          >
            <span>Voir tous les avis</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>

      {/* Reviews Track */}
      <div
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto no-scrollbar scroll-smooth pb-3 snap-x snap-mandatory"
        style={{ WebkitOverflowScrolling: 'touch' }}
      >
        {reviews.map((rev, idx) => {
          const color = avatarColors[idx % avatarColors.length];
          return (
            <figure
              key={idx}
              className="flex-shrink-0 snap-start w-[280px] sm:w-[320px] md:w-[360px] bg-white rounded-2xl p-5 border border-[#E6DFF3] shadow-mo-card flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <span
                    className="w-10 h-10 rounded-full flex items-center justify-center text-white font-extrabold text-base flex-shrink-0"
                    style={{ backgroundColor: color }}
                  >
                    {rev.initial}
                  </span>
                  <div>
                    <figcaption className="text-sm font-bold text-[#1F1433] leading-snug">
                      {rev.name}
                    </figcaption>
                    <small className="text-xs text-[#6C6282]">{rev.source}</small>
                  </div>
                </div>

                <div className="flex text-[#F59E0B] gap-0.5 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#F59E0B]" />
                  ))}
                </div>

                <blockquote className="text-xs sm:text-sm text-[#1F1433]/85 leading-relaxed italic line-clamp-4">
                  « {rev.text} »
                </blockquote>
              </div>
            </figure>
          );
        })}
      </div>

      {/* Store Location Card */}
      <div className="mt-8 bg-gradient-to-br from-white via-[#FAF7FD] to-[#F4EEFA] rounded-3xl p-6 sm:p-8 border border-[#E6DFF3] shadow-sm flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-2xl bg-[#EDE6F9] text-[#4B2E83] flex items-center justify-center flex-shrink-0">
            <MapPin className="w-6 h-6 stroke-[2]" />
          </div>
          <div>
            <span className="text-[11px] font-bold text-[#6C6282] uppercase tracking-wider block mb-0.5">
              Notre boutique
            </span>
            <h3 className="text-lg sm:text-xl font-extrabold text-[#1F1433] mb-1">
              MO Cosmetics à Fès
            </h3>
            <p className="text-xs sm:text-sm text-[#6C6282] leading-relaxed">
              Résidence Ouafaa, 20 rue Tantan, Route de Sefrou, Fès<br />
              <span className="text-[#3B2366] font-semibold">
                Ouvert tous les jours : 10h30 – 22h30 (dimanche fermé 13h–15h)
              </span>
            </p>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-3 w-full lg:w-auto">
          <a
            href="https://maps.google.com/?cid=14303378717787317269"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 lg:flex-none inline-flex items-center justify-center gap-2 bg-[#3B2366] hover:bg-[#4B2E83] text-white text-xs sm:text-sm font-bold py-3 px-5 rounded-full shadow-sm transition-all text-center"
          >
            <Navigation className="w-4 h-4" />
            <span>Itinéraire Google Maps</span>
          </a>

          <a
            href="https://wa.me/212776510070"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 lg:flex-none inline-flex items-center justify-center gap-2 bg-white hover:bg-[#EDE6F9] text-[#0d9488] text-xs sm:text-sm font-bold py-3 px-5 rounded-full border border-[#0d9488]/30 transition-all text-center shadow-2xs"
          >
            <Phone className="w-4 h-4" />
            <span>Contacter le magasin</span>
          </a>
        </div>
      </div>
    </section>
  );
};

