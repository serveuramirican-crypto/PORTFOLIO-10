'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

export interface CartItem {
  id: string;
  title: string;
  price: number;
  originalPriceStr: string;
  image: string;
  quantity: number;
}

interface CartContextType {
  isOpen: boolean;
  openCart: () => void;
  closeCart: () => void;
  items: CartItem[];
  addToCart: (product: { title: string; price: string; img: string }) => void;
  removeFromCart: (id: string) => void;
  updateQuantity: (id: string, delta: number) => void;
  totalAmount: number;
  totalCount: number;
  freeShippingThreshold: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [items, setItems] = useState<CartItem[]>([]);

  const openCart = () => setIsOpen(true);
  const closeCart = () => setIsOpen(false);

  const parsePrice = (priceStr: string): number => {
    // Extract first number like "40.00" or "1,400.00" or "85.00"
    const cleaned = priceStr.replace(/,/g, '');
    const match = cleaned.match(/(\d+(\.\d+)?)/);
    return match ? parseFloat(match[1]) : 100;
  };

  const addToCart = (product: { title: string; price: string; img: string }) => {
    const numPrice = parsePrice(product.price);
    setItems(prev => {
      const existing = prev.find(item => item.title === product.title);
      if (existing) {
        return prev.map(item =>
          item.title === product.title
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [
        ...prev,
        {
          id: `${product.title}-${Date.now()}`,
          title: product.title,
          price: numPrice,
          originalPriceStr: product.price,
          image: product.img,
          quantity: 1,
        },
      ];
    });
    setIsOpen(true);
  };

  const removeFromCart = (id: string) => {
    setItems(prev => prev.filter(item => item.id !== id));
  };

  const updateQuantity = (id: string, delta: number) => {
    setItems(prev =>
      prev
        .map(item => {
          if (item.id === id) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean) as CartItem[]
    );
  };

  const totalAmount = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const totalCount = items.reduce((sum, item) => sum + item.quantity, 0);
  const freeShippingThreshold = 500; // 500 dh for free shipping in Fès

  return (
    <CartContext.Provider
      value={{
        isOpen,
        openCart,
        closeCart,
        items,
        addToCart,
        removeFromCart,
        updateQuantity,
        totalAmount,
        totalCount,
        freeShippingThreshold,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

