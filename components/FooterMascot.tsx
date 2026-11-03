'use client';

import React, { useState, useEffect, useRef } from 'react';

export const FooterMascot: React.FC = () => {
  const [isIn, setIsIn] = useState(false);
  const [isFly, setIsFly] = useState(false);
  const [isBack, setIsBack] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsIn(true);
          document.body.classList.add('mo-bm-on');
        } else {
          setIsIn(false);
          document.body.classList.remove('mo-bm-on');
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const handleScrollToTop = () => {
    if (isFly) return;
    setIsFly(true);
    setIsBack(false);

    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 380);

    setTimeout(() => {
      setIsFly(false);
      setIsBack(true);
    }, 1800);
  };

  return (
    <div
      ref={containerRef}
      id="MoFootMascot"
      className={`mo-fm ${isIn ? 'is-in' : ''} ${isFly ? 'is-fly' : ''} ${
        isBack ? 'is-back' : ''
      }`}
    >
      <button
        type="button"
        onClick={handleScrollToTop}
        className="mo-fm__btn"
        aria-label="Remonter tout en haut"
      >
        <span className="mo-fm__bubble" aria-hidden="true">
          Baraka men dorane ! Tla3 kmel chra 😄
          <small>Remonter ↑</small>
        </span>
        <img
          className="mo-fm__img"
          src="/cdn/shop/t/91/assets/mo-mascot-bas.webp"
          width={240}
          height={286}
          loading="lazy"
          decoding="async"
          alt="Remonter"
        />
        <span className="mo-fm__fx" aria-hidden="true">
          <i>✨</i>
          <i>💜</i>
          <i>⭐</i>
          <i>💖</i>
          <i>✨</i>
          <i>💜</i>
        </span>
      </button>
    </div>
  );
};
