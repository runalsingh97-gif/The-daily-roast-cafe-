import React, { useState, useEffect } from 'react';
import { Coffee, ShoppingBag, Menu as MenuIcon, X, MapPin, Phone } from 'lucide-react';

interface HeaderProps {
  cartCount: number;
  onOpenCart: () => void;
  isOpenNow: boolean;
}

export const Header: React.FC<HeaderProps> = ({ cartCount, onOpenCart, isOpenNow }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Menu', href: '#menu' },
    { name: 'About Us', href: '#about' },
    { name: 'Table Reservation', href: '#reservation' },
    { name: 'Location & Hours', href: '#location' },
  ];

  return (
    <>
      {/* Top Banner with live status */}
      <div className="bg-[#2C221E] text-[#EFE8DE] text-xs py-2 px-4 flex justify-between items-center border-b border-[#3D2B1F]">
        <div className="max-w-7xl mx-auto w-full flex flex-col sm:flex-row justify-between items-center gap-2">
          <div className="flex items-center gap-2">
            <span className={`inline-block w-2 h-2 rounded-full ${isOpenNow ? 'bg-emerald-500 animate-pulse' : 'bg-amber-600'}`}></span>
            <span className="font-medium">
              {isOpenNow ? 'OPEN NOW • Serving Fresh Brews' : 'CLOSED NOW • Opens at 8:00 AM'}
            </span>
            <span className="hidden md:inline text-stone-400">| 42 Roasted Bean Blvd, Sector 5</span>
          </div>

          <div className="flex items-center gap-4 text-stone-300">
            <a href="tel:+15553827627" className="hover:text-amber-300 transition-colors flex items-center gap-1">
              <Phone className="w-3.5 h-3.5" />
              <span>+1 (555) 382-7627</span>
            </a>
            <a href="#location" className="hover:text-amber-300 transition-colors hidden sm:flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5" />
              <span>Get Directions</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Sticky Navbar */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#FAF7F2]/95 backdrop-blur-md shadow-md py-3 border-b border-[#EFE8DE]'
            : 'bg-[#FAF7F2] py-4 border-b border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-full bg-[#3D2B1F] flex items-center justify-center text-[#C86D51] group-hover:bg-[#C86D51] group-hover:text-white transition-all shadow-sm">
              <Coffee className="w-5 h-5" />
            </div>
            <div>
              <span className="font-serif-heading text-xl sm:text-2xl font-bold text-[#2C221E] tracking-tight block leading-none">
                The Daily Roast
              </span>
              <span className="text-[10px] tracking-widest text-[#C86D51] uppercase font-semibold block mt-0.5">
                ARTISANAL CAFE & ROASTERY
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-[#2C221E] hover:text-[#C86D51] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#C86D51] hover:after:w-full after:transition-all"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Action Buttons */}
          <div className="flex items-center gap-3">
            <button
              onClick={onOpenCart}
              className="relative p-2.5 rounded-full bg-[#EFE8DE] text-[#2C221E] hover:bg-[#C86D51] hover:text-white transition-all shadow-sm flex items-center justify-center"
              aria-label="Order Cart"
            >
              <ShoppingBag className="w-5 h-5" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-[#C86D51] text-white text-[11px] font-bold w-5 h-5 rounded-full flex items-center justify-center border-2 border-[#FAF7F2]">
                  {cartCount}
                </span>
              )}
            </button>

            <a
              href="#menu"
              onClick={onOpenCart}
              className="hidden sm:inline-flex items-center justify-center px-5 py-2.5 text-sm font-semibold text-white bg-[#C86D51] hover:bg-[#b05a40] rounded-full shadow-sm hover:shadow transition-all"
            >
              Order Online
            </a>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-[#2C221E] hover:bg-[#EFE8DE] transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Slide-Out Menu Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden fixed inset-0 z-50 bg-black/40 backdrop-blur-sm flex justify-end">
            <div className="w-4/5 max-w-sm bg-[#FAF7F2] h-full shadow-2xl p-6 flex flex-col justify-between animate-in slide-in-from-right duration-300">
              <div>
                <div className="flex items-center justify-between pb-6 border-b border-[#EFE8DE]">
                  <div className="flex items-center gap-2">
                    <Coffee className="w-6 h-6 text-[#C86D51]" />
                    <span className="font-serif-heading font-bold text-lg text-[#2C221E]">
                      The Daily Roast
                    </span>
                  </div>
                  <button
                    onClick={() => setMobileMenuOpen(false)}
                    className="p-1 rounded-full text-[#2C221E] hover:bg-[#EFE8DE]"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>

                <div className="py-6 flex flex-col space-y-4">
                  {navLinks.map((link) => (
                    <a
                      key={link.name}
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="text-base font-semibold text-[#2C221E] hover:text-[#C86D51] py-2 border-b border-stone-200/60 transition-colors"
                    >
                      {link.name}
                    </a>
                  ))}
                </div>
              </div>

              <div className="space-y-3 pt-6 border-t border-[#EFE8DE]">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenCart();
                  }}
                  className="w-full py-3 px-4 rounded-xl bg-[#C86D51] text-white font-semibold flex items-center justify-center gap-2 shadow-md hover:bg-[#b05a40] transition-all"
                >
                  <ShoppingBag className="w-5 h-5" />
                  <span>Order Online ({cartCount})</span>
                </button>
                <a
                  href="#reservation"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full py-3 px-4 rounded-xl border-2 border-[#3D2B1F] text-[#3D2B1F] font-semibold flex items-center justify-center transition-all hover:bg-[#3D2B1F] hover:text-white"
                >
                  Book a Table
                </a>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
