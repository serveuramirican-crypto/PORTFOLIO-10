'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { Search, X } from 'lucide-react';

export const MascotAssistant: React.FC = () => {
  const [isAway, setIsAway] = useState(true);
  const [isDip, setIsDip] = useState(false);
  const [isBlink, setIsBlink] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isRight, setIsRight] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [walking, setWalking] = useState(false);
  const scrollTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Scroll detection: peek in when scrolled past hero, dip while scrolling
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      // Hide while hero is prominently in view (top 280px)
      if (scrollY < 280) {
        setIsAway(true);
      } else {
        setIsAway(false);
      }

      // While scrolling, dip slightly behind the screen border
      setIsDip(true);
      if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);
      scrollTimeoutRef.current = setTimeout(() => {
        setIsDip(false);
      }, 200);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);
    };
  }, []);

  // Natural blinking effect
  useEffect(() => {
    let blinkTimeout: NodeJS.Timeout;
    const triggerBlink = () => {
      setIsBlink(true);
      setTimeout(() => setIsBlink(false), 160);
      const nextDelay = 3000 + Math.random() * 2500;
      blinkTimeout = setTimeout(triggerBlink, nextDelay);
    };
    blinkTimeout = setTimeout(triggerBlink, 2000);
    return () => clearTimeout(blinkTimeout);
  }, []);

  return (
    <>
      <div
        id="MoAssistant"
        className={`mo-as ${isRight ? 'is-right' : 'is-left'} ${isAway ? 'is-away' : ''
          } ${isDip ? 'is-dip' : ''} ${isOpen ? 'is-open' : ''}`}
        aria-label="Assistant MO Cosmetics"
      >
        {/* Assistant Dialog Panel */}
        {isOpen && (
          <div
            className="mo-as__panel shadow-2xl"
            role="dialog"
            aria-label="Je peux vous aider ?"
          >
            <div className="flex items-center justify-between pb-1 border-b border-[#E6DFF3]">
              <p className="font-extrabold text-[#1F1433] text-[15px]">
                Je peux vous aider ?
              </p>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="w-8 h-8 rounded-full bg-[#F7F4FC] hover:bg-[#EDE6F9] text-[#34205C] flex items-center justify-center transition-colors"
                aria-label="Fermer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Quick search input */}
            <div className="flex items-center gap-2 px-3 py-2 border border-[#E6DFF3] rounded-xl bg-white focus-within:border-[#3B2366] transition-colors">
              <Search className="w-4 h-4 text-[#3B2366] flex-shrink-0" />
              <input
                type="search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Rechercher un parfum, marque…"
                className="w-full text-sm outline-none text-[#1F1433] placeholder:text-[#6C6282]/60"
              />
            </div>

            {/* Category Quick Links */}
            <div className="grid grid-cols-3 gap-2 pt-1">
              <Link
                href="/collections/femme"
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-center py-2.5 px-1 rounded-xl bg-[#EDE6F9] hover:bg-[#E2D7F6] text-[#34205C] font-bold text-xs text-center transition-colors"
              >
                Parfums
              </Link>
              <Link
                href="/collections/femme"
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-center py-2.5 px-1 rounded-xl bg-[#EDE6F9] hover:bg-[#E2D7F6] text-[#34205C] font-bold text-xs text-center transition-colors"
              >
                Maquillage
              </Link>
              <Link
                href="/collections/femme"
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-center py-2.5 px-1 rounded-xl bg-[#EDE6F9] hover:bg-[#E2D7F6] text-[#34205C] font-bold text-xs text-center transition-colors"
              >
                K-Beauty
              </Link>
            </div>
          </div>
        )}

        {/* Mascot Peeking Button */}
        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          className="mo-as__btn group cursor-pointer"
          aria-expanded={isOpen}
          aria-label="Besoin d'aide ? Ouvrir l'assistant MO Cosmetics"
        >
          <span className="mo-as__clip">
            <span className="mo-as__m">
              <div
                className={`mo-mascot ${isBlink ? 'is-blink' : ''}`}
                data-mo-mascot
                aria-hidden="true"
              >
                <div className="mo-mascot__in">
                  <img
                    className="mo-mascot__body"
                    src="/cdn/shop/files/mo-mascot.webp"
                    alt="MO Mascot"
                    width={400}
                    height={400}
                    loading="lazy"
                    decoding="async"
                    draggable={false}
                  />

                  {/* Left Eye */}
                  <div
                    className="mo-mascot__eye"
                    style={{
                      left: '32.695%',
                      top: '41.467%',
                      width: '11.483%',
                      height: '9.49%',
                      WebkitMaskImage: "url('/cdn/shop/files/mo-mascot-eye-1.png')",
                      maskImage: "url('/cdn/shop/files/mo-mascot-eye-1.png')",
                    }}
                  >
                    <div className="mo-mascot__iris">
                      <img
                        src="/cdn/shop/files/mo-mascot-iris-1.webp"
                        alt=""
                        width={96}
                        height={96}
                        loading="lazy"
                        decoding="async"
                        draggable={false}
                      />
                    </div>
                  </div>

                  {/* Right Eye */}
                  <div
                    className="mo-mascot__eye"
                    style={{
                      left: '58.293%',
                      top: '42.344%',
                      width: '11.882%',
                      height: '9.888%',
                      WebkitMaskImage: "url('/cdn/shop/files/mo-mascot-eye-2.png')",
                      maskImage: "url('/cdn/shop/files/mo-mascot-eye-2.png')",
                    }}
                  >
                    <div className="mo-mascot__iris">
                      <img
                        src="/cdn/shop/files/mo-mascot-iris-2.webp"
                        alt=""
                        width={96}
                        height={96}
                        loading="lazy"
                        decoding="async"
                        draggable={false}
                      />
                    </div>
                  </div>

                  {/* Eyelids */}
                  <span
                    className="mo-mascot__lidbox"
                    style={{
                      left: '31.1%',
                      top: '39.952%',
                      width: '14.354%',
                      height: '11.164%',
                      WebkitMaskImage: "url('/cdn/shop/files/mo-mascot-lidb-1.png')",
                      maskImage: "url('/cdn/shop/files/mo-mascot-lidb-1.png')",
                    }}
                  >
                    <span className="mo-mascot__lid"></span>
                  </span>

                  <span
                    className="mo-mascot__lidbox"
                    style={{
                      left: '56.459%',
                      top: '40.75%',
                      width: '15.47%',
                      height: '11.643%',
                      WebkitMaskImage: "url('/cdn/shop/files/mo-mascot-lidb-2.png')",
                      maskImage: "url('/cdn/shop/files/mo-mascot-lidb-2.png')",
                    }}
                  >
                    <span className="mo-mascot__lid"></span>
                  </span>
                </div>
              </div>
            </span>
          </span>
        </button>
      </div>
    </>
  );
};

