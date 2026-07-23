import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { HighlightBar } from './components/HighlightBar';
import { AboutSection } from './components/AboutSection';
import { MenuSection } from './components/MenuSection';
import { ReservationSection } from './components/ReservationSection';
import { GallerySection } from './components/GallerySection';
import { FooterAndLocation } from './components/FooterAndLocation';
import { OrderCartDrawer } from './components/OrderCartDrawer';
import { CartItem, MenuItem } from './types';
import { CAFE_INFO } from './data/cafeData';

export default function App() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isOpenNow, setIsOpenNow] = useState(true);

  // Determine if cafe is currently OPEN based on local system time
  useEffect(() => {
    const checkStatus = () => {
      const now = new Date();
      const hour = now.getHours();
      const isOpen = hour >= CAFE_INFO.openingHours.openHour24 && hour < CAFE_INFO.openingHours.closeHour24;
      setIsOpenNow(isOpen);
    };

    checkStatus();
    const interval = setInterval(checkStatus, 60000); // Recheck every minute
    return () => clearInterval(interval);
  }, []);

  // Cart operations
  const handleAddToCart = (item: MenuItem) => {
    setCartItems((prev) => {
      const existing = prev.find((ci) => ci.menuItem.id === item.id);
      if (existing) {
        return prev.map((ci) =>
          ci.menuItem.id === item.id
            ? { ...ci, quantity: ci.quantity + 1 }
            : ci
        );
      } else {
        return [...prev, { menuItem: item, quantity: 1 }];
      }
    });
  };

  const handleUpdateQuantity = (id: string, delta: number) => {
    setCartItems((prev) => {
      return prev
        .map((ci) => {
          if (ci.menuItem.id === id) {
            const newQty = ci.quantity + delta;
            return newQty > 0 ? { ...ci, quantity: newQty } : null;
          }
          return ci;
        })
        .filter(Boolean) as CartItem[];
    });
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  const totalCartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="min-h-screen bg-[#FAF7F2] text-[#2C221E] selection:bg-[#C86D51] selection:text-white flex flex-col font-sans">
      
      {/* Sticky Navigation Header */}
      <Header
        cartCount={totalCartCount}
        onOpenCart={() => setIsCartOpen(true)}
        isOpenNow={isOpenNow}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero />

        {/* Highlight USPs Bar */}
        <HighlightBar />

        {/* About & Atmosphere */}
        <AboutSection />

        {/* Interactive Menu Section */}
        <MenuSection
          onAddToCart={handleAddToCart}
          cartItemIds={cartItems.map((c) => c.menuItem.id)}
        />

        {/* Table Reservation Section */}
        <ReservationSection />

        {/* Aesthetic Instagram Vibe Gallery */}
        <GallerySection />

        {/* Location, Opening Hours & Footer */}
        <FooterAndLocation isOpenNow={isOpenNow} />
      </main>

      {/* Online Order Drawer */}
      <OrderCartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onClearCart={handleClearCart}
      />

    </div>
  );
}
