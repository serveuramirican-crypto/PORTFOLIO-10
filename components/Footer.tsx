'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, Instagram, Phone, CheckCircle2, ShieldCheck } from 'lucide-react';
import { FooterMascot } from './FooterMascot';

export const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <footer className="bg-[#1F1433] text-white/80 pt-12 md:pt-16 pb-8 border-t border-[#34205C]">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-10 pb-12 border-b border-white/10">
          
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="inline-block">
              <span className="text-2xl font-black text-white tracking-wider">
                MO COSMETICS
              </span>
            </Link>
            <p className="text-xs sm:text-sm text-white/70 leading-relaxed max-w-sm">
              Parfums originaux, décants et produits de beauté authentiques, sélectionnés dans notre boutique à Fès et livrés partout au Maroc.
            </p>

            {/* Newsletter */}
            <div className="pt-2">
              <p className="text-xs font-bold text-white uppercase tracking-wider mb-2">
                Recevez nos nouveautés et offres
              </p>
              {subscribed ? (
                <div className="flex items-center gap-2 text-emerald-400 text-xs font-semibold py-2">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Merci pour votre inscription !</span>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="flex max-w-md">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Votre adresse e-mail"
                    required
                    className="flex-1 bg-white/10 border border-white/20 text-white placeholder-white/50 text-xs sm:text-sm px-4 py-2.5 rounded-l-xl focus:outline-none focus:border-white/40 focus:bg-white/15 transition-all"
                  />
                  <button
                    type="submit"
                    aria-label="S'inscrire"
                    className="bg-[#EDE6F9] hover:bg-white text-[#1F1433] px-4 rounded-r-xl transition-colors flex items-center justify-center font-bold text-xs"
                  >
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Boutique Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Boutique
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <Link href="/collections/parfums" className="hover:text-white transition-colors">
                  Parfums
                </Link>
              </li>
              <li>
                <Link href="/collections/decantes" className="hover:text-white transition-colors">
                  Décants
                </Link>
              </li>
              <li>
                <Link href="/collections/makeup" className="hover:text-white transition-colors">
                  Maquillage
                </Link>
              </li>
              <li>
                <Link href="/collections/skin-care" className="hover:text-white transition-colors">
                  Soins visage
                </Link>
              </li>
              <li>
                <Link href="/collections/hair-care" className="hover:text-white transition-colors">
                  Cheveux
                </Link>
              </li>
              <li>
                <Link href="/collections/coffrets" className="hover:text-white transition-colors">
                  Coffrets
                </Link>
              </li>
            </ul>
          </div>

          {/* Aide Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Aide & Services
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <Link href="/pages/livraison" className="hover:text-white transition-colors">
                  Livraison & Tarifs
                </Link>
              </li>
              <li>
                <Link href="/pages/suivre-ma-commande" className="hover:text-white transition-colors">
                  Suivre ma commande
                </Link>
              </li>
              <li>
                <Link href="/pages/faq" className="hover:text-white transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/pages/contact" className="hover:text-white transition-colors">
                  Contact & horaires
                </Link>
              </li>
              <li>
                <Link href="/pages/parfumerie-fes" className="hover:text-white transition-colors">
                  Notre boutique à Fès
                </Link>
              </li>
              <li>
                <a
                  href="https://wa.me/212776510070"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-emerald-400 hover:text-emerald-300 font-semibold transition-colors flex items-center gap-1"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>WhatsApp: +212 776-510070</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Store Info */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Boutique à Fès
            </h4>
            <p className="text-xs text-white/70 leading-relaxed">
              Résidence Ouafaa, 20 rue Tantan, Route de Sefrou, Fès, Maroc
            </p>
            <p className="text-xs text-white/60">
              Ouvert tous les jours 10h30–22h30<br />
              Dimanche fermé 13h–15h
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-2 pt-2">
              <a
                href="https://www.instagram.com/mo__cosmetics"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://www.tiktok.com/@mocosmetics1"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors font-bold text-xs"
              >
                TK
              </a>
              <a
                href="https://wa.me/212776510070"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="w-9 h-9 rounded-full bg-emerald-600/30 hover:bg-emerald-600/50 text-emerald-400 flex items-center justify-center transition-colors"
              >
                <Phone className="w-4 h-4" />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Copyright & Badges */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/50 relative">
          <p>© {new Date().getFullYear()} MO Cosmetics. Tous droits réservés.</p>
          
          <div className="flex items-center gap-4 text-[11px]">
            <span className="flex items-center gap-1 text-white/70">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              Paiement à la livraison garanti
            </span>
            <span className="border-l border-white/20 pl-4">Livraison partout au Maroc</span>
          </div>

          <FooterMascot />
        </div>
      </div>
    </footer>
  );
};

