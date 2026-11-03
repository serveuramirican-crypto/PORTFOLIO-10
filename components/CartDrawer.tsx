'use client';

import React from 'react';
import Link from 'next/link';
import { X, Trash2, Plus, Minus, ShoppingBag, Truck, ArrowRight } from 'lucide-react';
import { useCart } from './CartContext';

export const CartDrawer: React.FC = () => {
  const {
    isOpen,
    closeCart,
    items,
    removeFromCart,
    updateQuantity,
    totalAmount,
    freeShippingThreshold,
  } = useCart();

  if (!isOpen) return null;

  const progress = Math.min(100, Math.round((totalAmount / freeShippingThreshold) * 100));
  const diffToFree = Math.max(0, freeShippingThreshold - totalAmount);

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity"
        onClick={closeCart}
      />

      {/* Drawer */}
      <div className="relative w-full max-w-md bg-white h-full shadow-2xl flex flex-col z-10 animate-in slide-in-from-right duration-200">
        {/* Header */}
        <div className="p-4 border-b border-[#E6DFF3] flex items-center justify-between bg-[#F7F4FC]">
          <div className="flex items-center gap-2">
            <ShoppingBag className="w-5 h-5 text-[#3B2366]" />
            <span className="font-bold text-[#1F1433] text-lg">Votre Panier</span>
            <span className="text-xs bg-[#EDE6F9] text-[#4B2E83] px-2 py-0.5 rounded-full font-semibold">
              {items.length}
            </span>
          </div>
          <button
            onClick={closeCart}
            aria-label="Fermer le panier"
            className="p-1.5 rounded-full text-[#6C6282] hover:text-[#1F1433] hover:bg-[#EDE6F9] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Free Shipping Bar */}
        <div className="bg-[#FAF7FD] border-b border-[#E6DFF3] px-4 py-3">
          <div className="flex items-center gap-2 text-xs font-medium text-[#1F1433] mb-1.5">
            <Truck className="w-4 h-4 text-[#4B2E83]" />
            <span>
              {diffToFree === 0
                ? '🎉 Félicitations ! Livraison gratuite à Fès accordée !'
                : `Ajoutez encore ${diffToFree.toFixed(2)} dh pour la livraison gratuite à Fès`}
            </span>
          </div>
          <div className="w-full bg-[#E6DFF3] h-2 rounded-full overflow-hidden">
            <div
              className="bg-[#3B2366] h-full rounded-full transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {items.length === 0 ? (
            <div className="text-center py-16 space-y-4">
              <div className="w-16 h-16 bg-[#F7F4FC] rounded-full flex items-center justify-center mx-auto text-[#6C6282]">
                <ShoppingBag className="w-8 h-8" />
              </div>
              <p className="text-[#6C6282] text-sm">Votre panier est actuellement vide.</p>
              <button
                onClick={closeCart}
                className="inline-block bg-[#3B2366] text-white text-sm font-semibold px-6 py-2.5 rounded-full hover:bg-[#4B2E83] transition-colors"
              >
                Découvrir nos produits
              </button>
            </div>
          ) : (
            items.map((item) => (
              <div
                key={item.id}
                className="flex items-start gap-3 p-3 bg-[#F7F4FC]/60 rounded-2xl border border-[#E6DFF3]/60 transition-all hover:bg-[#F7F4FC]"
              >
                <div className="w-16 h-16 rounded-xl bg-white border border-[#E6DFF3] overflow-hidden flex-shrink-0 flex items-center justify-center">
                  <img
                    src={item.image || '/cdn/shop/files/mo-essence-large.webp'}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="flex-1 min-w-0">
                  <h4 className="text-sm font-bold text-[#1F1433] leading-snug line-clamp-2">
                    {item.title}
                  </h4>
                  <p className="text-xs font-semibold text-[#4B2E83] mt-1">
                    {item.price.toFixed(2)} dh
                  </p>

                  <div className="flex items-center justify-between mt-2.5">
                    <div className="flex items-center border border-[#E6DFF3] rounded-lg bg-white overflow-hidden shadow-2xs">
                      <button
                        onClick={() => updateQuantity(item.id, -1)}
                        className="p-1 hover:bg-[#F7F4FC] text-[#6C6282] transition-colors"
                        aria-label="Diminuer"
                      >
                        <Minus className="w-3.5 h-3.5" />
                      </button>
                      <span className="px-2.5 text-xs font-bold text-[#1F1433]">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.id, 1)}
                        className="p-1 hover:bg-[#F7F4FC] text-[#6C6282] transition-colors"
                        aria-label="Augmenter"
                      >
                        <Plus className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-red-500 hover:text-red-700 p-1 transition-colors"
                      aria-label="Supprimer"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer / Checkout */}
        {items.length > 0 && (
          <div className="p-4 border-t border-[#E6DFF3] bg-[#F7F4FC] space-y-3">
            <div className="flex items-center justify-between text-base font-bold text-[#1F1433]">
              <span>Sous-total</span>
              <span className="text-[#3B2366] text-lg font-extrabold">
                {totalAmount.toFixed(2)} dh
              </span>
            </div>
            <p className="text-[11px] text-[#6C6282] leading-tight">
              Taxes incluses. Frais de port calculés à l’étape suivante. Paiement en espèces à la livraison.
            </p>

            <button
              onClick={() => {
                alert('Redirection vers la validation de commande...');
              }}
              className="w-full bg-[#3B2366] hover:bg-[#4B2E83] text-white font-bold py-3 px-4 rounded-xl shadow-md transition-all flex items-center justify-center gap-2 text-sm"
            >
              <span>Valider la commande (Paiement à la livraison)</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

