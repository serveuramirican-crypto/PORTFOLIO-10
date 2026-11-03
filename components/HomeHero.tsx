'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { Star, ArrowRight } from 'lucide-react';

export const HomeHero: React.FC = () => {
  const [irisOffset, setIrisOffset] = useState({ x: 0, y: 0 });
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;
      const rect = heroRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const deltaX = (e.clientX - centerX) / (rect.width / 2);
      const deltaY = (e.clientY - centerY) / (rect.height / 2);

      // Clamp movement within eye range
      const clampX = Math.max(-4, Math.min(4, deltaX * 4));
      const clampY = Math.max(-4, Math.min(4, deltaY * 4));

      setIrisOffset({ x: clampX, y: clampY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section ref={heroRef} className="py-8 md:py-12 max-w-7xl mx-auto px-4 lg:px-8">
      <div className="bg-gradient-to-br from-[#FAF7FD] via-[#F4EEFA] to-[#EDE6F9] rounded-3xl p-6 md:p-10 lg:p-14 border border-[#E6DFF3] shadow-sm relative overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-8">
        
        {/* Left Copy */}
        <div className="flex-1 max-w-xl text-center lg:text-left z-10">
          {/* Rating Badge */}
          <a
            href="https://maps.google.com/?cid=14303378717787317269"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 bg-white/90 backdrop-blur-xs px-3.5 py-1.5 rounded-full border border-[#E6DFF3] shadow-2xs hover:shadow-xs transition-all mb-5 group cursor-pointer"
          >
            <div className="flex text-[#F59E0B]">
              <Star className="w-3.5 h-3.5 fill-[#F59E0B]" />
            </div>
            <span className="text-xs font-bold text-[#1F1433] group-hover:text-[#4B2E83] transition-colors">
              Noté 4,9/5 sur Google
            </span>
          </a>

          {/* Heading */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#1F1433] tracking-tight leading-[1.1] mb-4">
            L’original,<br />
            <span className="text-[#3B2366]">livré chez vous.</span>
          </h1>

          {/* Subtitle */}
          <p className="text-sm sm:text-base text-[#6C6282] leading-relaxed mb-8 max-w-lg mx-auto lg:mx-0">
            Parfums 100% originaux, décants dès 30 dh, soins K-Beauty et maquillage, sélectionnés dans notre boutique à Fès.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5">
            <Link
              href="/collections/femme"
              className="w-full sm:w-auto bg-[#3B2366] hover:bg-[#4B2E83] text-white text-sm font-bold py-3.5 px-7 rounded-full shadow-md hover:shadow-lg transition-all text-center"
            >
              Découvrir les parfums
            </Link>
            <Link
              href="/collections/femme"
              className="w-full sm:w-auto bg-white/80 hover:bg-white text-[#3B2366] hover:text-[#1F1433] text-sm font-bold py-3.5 px-7 rounded-full border border-[#3B2366]/20 hover:border-[#3B2366] transition-all text-center"
            >
              Découvrir les décants
            </Link>
          </div>
        </div>

        {/* Right: Interactive Mascot Graphic */}
        <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 flex-shrink-0 flex items-center justify-center">
          <div className="relative w-full h-full max-w-[340px] max-h-[340px]">
            {/* Mascot Body */}
            <img
              src="/cdn/shop/files/mo-mascot.webp"
              alt="MO Cosmetics Mascot"
              className="w-full h-full object-contain filter drop-shadow-xl select-none"
              draggable="false"
            />

            {/* Left Eye with animated tracking */}
            <div
              className="absolute overflow-hidden"
              style={{
                left: '32.695%',
                top: '41.467%',
                width: '11.483%',
                height: '9.49%',
                WebkitMaskImage: "url('/cdn/shop/files/mo-mascot-eye-1.png')",
                maskImage: "url('/cdn/shop/files/mo-mascot-eye-1.png')",
                WebkitMaskSize: 'contain',
                maskSize: 'contain',
                WebkitMaskRepeat: 'no-repeat',
                maskRepeat: 'no-repeat',
              }}
            >
              <div
                className="w-full h-full transition-transform duration-75 ease-out"
                style={{
                  transform: `translate(${irisOffset.x}px, ${irisOffset.y}px)`,
                }}
              >
                <img
                  src="/cdn/shop/files/mo-mascot-iris-1.webp"
                  alt=""
                  className="w-full h-full object-contain"
                  draggable="false"
                />
              </div>
            </div>

            {/* Right Eye with animated tracking */}
            <div
              className="absolute overflow-hidden"
              style={{
                left: '58.293%',
                top: '42.344%',
                width: '11.882%',
                height: '9.888%',
                WebkitMaskImage: "url('/cdn/shop/files/mo-mascot-eye-2.png')",
                maskImage: "url('/cdn/shop/files/mo-mascot-eye-2.png')",
                WebkitMaskSize: 'contain',
                maskSize: 'contain',
                WebkitMaskRepeat: 'no-repeat',
                maskRepeat: 'no-repeat',
              }}
            >
              <div
                className="w-full h-full transition-transform duration-75 ease-out"
                style={{
                  transform: `translate(${irisOffset.x}px, ${irisOffset.y}px)`,
                }}
              >
                <img
                  src="/cdn/shop/files/mo-mascot-iris-2.webp"
                  alt=""
                  className="w-full h-full object-contain"
                  draggable="false"
                />
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

