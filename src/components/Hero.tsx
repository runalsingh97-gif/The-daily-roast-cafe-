import React from 'react';
import { Coffee, Calendar, Star, Wifi, ArrowDown, Sparkles } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-[85vh] lg:min-h-[90vh] flex items-center justify-center overflow-hidden bg-[#2C221E] text-white">
      {/* Background Image with Warm Warm-Tone Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&q=80&w=1920"
          alt="Cozy Cafe Atmosphere"
          className="w-full h-full object-cover object-center opacity-35 scale-105 transition-transform duration-1000"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1F1714] via-[#2C221E]/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#2C221E]/90 via-[#2C221E]/60 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 w-full">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column Text Content */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Tagline Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#C86D51]/20 border border-[#C86D51]/40 text-[#E89E86] text-xs font-semibold uppercase tracking-wider backdrop-blur-sm">
              <Sparkles className="w-3.5 h-3.5 text-[#D4A359]" />
              <span>Downtown's Favorite Neighborhood Sanctuary</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-serif-heading text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.15] text-[#FAF7F2] tracking-tight">
              Crafted Coffee, <br />
              <span className="text-[#D4A359] italic font-normal">Cozy Moments</span> & <br />
              Great Conversations.
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-[#EFE8DE]/90 max-w-2xl leading-relaxed font-light">
              Work-friendly atmosphere, artisanal brews crafted from 100% single-origin beans, and fresh daily baked goods. Your perfect desk away from home.
            </p>

            {/* CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <a
                href="#menu"
                className="inline-flex items-center justify-center px-8 py-4 text-base font-bold rounded-full bg-[#C86D51] hover:bg-[#b05a40] text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5 group"
              >
                <Coffee className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
                <span>Explore Menu</span>
              </a>

              <a
                href="#reservation"
                className="inline-flex items-center justify-center px-8 py-4 text-base font-bold rounded-full border-2 border-[#D4A359] text-[#FAF7F2] hover:bg-[#D4A359] hover:text-[#2C221E] shadow-md transition-all duration-300"
              >
                <Calendar className="w-5 h-5 mr-2" />
                <span>Book a Table</span>
              </a>
            </div>

            {/* Quick USP Highlights */}
            <div className="pt-6 border-t border-stone-700/60 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs sm:text-sm text-stone-300">
              <span className="flex items-center gap-1.5">
                <Wifi className="w-4 h-4 text-[#D4A359]" />
                <span>Gigabit Free Wi-Fi</span>
              </span>
              <span className="hidden sm:inline text-stone-600">•</span>
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                <span>Power Outlets Everywhere</span>
              </span>
              <span className="hidden sm:inline text-stone-600">•</span>
              <span>Pet Friendly Patio</span>
            </div>
          </div>

          {/* Right Column Floating Feature Card */}
          <div className="lg:col-span-5 relative hidden lg:block">
            <div className="relative mx-auto max-w-md bg-[#3D2B1F]/90 backdrop-blur-md p-6 rounded-3xl border border-stone-600/50 shadow-2xl text-[#FAF7F2]">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden mb-5 relative group">
                <img
                  src="https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&q=80&w=800"
                  alt="Barista Pouring Artisanal Coffee"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-3 right-3 bg-[#2C221E]/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-semibold text-[#D4A359] border border-[#D4A359]/30">
                  Batch Roast #408
                </div>
              </div>

              {/* Rating Card */}
              <div className="flex items-center justify-between pt-2">
                <div>
                  <div className="flex items-center gap-1 text-[#D4A359] mb-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                    <span className="ml-1.5 font-bold text-white text-sm">4.9 / 5.0</span>
                  </div>
                  <p className="text-xs text-stone-300">
                    Based on 1,280+ happy coffee lovers & digital nomads
                  </p>
                </div>
                <a
                  href="#about"
                  className="p-3 bg-[#C86D51] hover:bg-[#b05a40] text-white rounded-full transition-transform hover:scale-110 shadow-md"
                  aria-label="Learn about our cafe"
                >
                  <ArrowDown className="w-5 h-5 -rotate-45" />
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Scroll Indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 hidden md:flex flex-col items-center opacity-70 hover:opacity-100 transition-opacity">
        <a href="#usps" className="text-xs text-stone-300 flex flex-col items-center gap-1">
          <span>Scroll to explore</span>
          <ArrowDown className="w-4 h-4 animate-bounce text-[#C86D51]" />
        </a>
      </div>
    </section>
  );
};
