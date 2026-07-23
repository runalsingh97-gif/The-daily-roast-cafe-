import React, { useState } from 'react';
import { GALLERY_ITEMS } from '../data/cafeData';
import { GalleryItem } from '../types';
import { Instagram, Eye, X, Sparkles, Camera } from 'lucide-react';

export const GallerySection: React.FC = () => {
  const [selectedPhoto, setSelectedPhoto] = useState<GalleryItem | null>(null);

  return (
    <section className="py-20 lg:py-28 bg-[#FAF7F2] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#C86D51]/10 text-[#C86D51] text-xs font-bold uppercase tracking-widest">
              <Camera className="w-3.5 h-3.5" />
              <span>@thedailyroastcafe</span>
            </div>
            <h2 className="font-serif-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2C221E]">
              The Cafe Vibe Gallery
            </h2>
            <p className="text-stone-600 text-sm sm:text-base font-normal max-w-xl">
              Take a peek inside our cozy lounge, latte art moments, and peaceful reading corners. Tag us in your stories!
            </p>
          </div>

          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#3D2B1F] text-[#FAF7F2] text-xs font-bold hover:bg-[#C86D51] transition-all shadow-sm shrink-0 self-start md:self-auto"
          >
            <Instagram className="w-4 h-4 text-[#D4A359]" />
            <span>Follow on Instagram</span>
          </a>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {GALLERY_ITEMS.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedPhoto(item)}
              className="group relative rounded-3xl overflow-hidden aspect-[4/3] bg-stone-200 cursor-pointer shadow-sm hover:shadow-xl transition-all duration-300 border border-[#EFE8DE]"
            >
              <img
                src={item.imageUrl}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                loading="lazy"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-6 flex flex-col justify-end text-white">
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#D4A359] mb-1">
                  {item.category}
                </span>
                <h3 className="font-serif-heading font-bold text-lg leading-snug">
                  {item.title}
                </h3>
                <p className="text-xs text-stone-300 line-clamp-2 mt-1 font-light">
                  {item.caption}
                </p>
                
                <div className="mt-3 flex items-center gap-1.5 text-xs text-[#E89E86] font-semibold">
                  <Eye className="w-4 h-4" />
                  <span>Click to expand</span>
                </div>
              </div>

              {/* Corner Category Tag (Always visible) */}
              <div className="absolute top-3 left-3 bg-[#2C221E]/80 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-semibold text-[#FAF7F2] border border-stone-600/40">
                {item.category}
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      {selectedPhoto && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-[#FAF7F2] text-[#2C221E] max-w-2xl w-full rounded-3xl overflow-hidden shadow-2xl relative animate-in zoom-in duration-200 border border-stone-700">
            
            <button
              onClick={() => setSelectedPhoto(null)}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/50 text-white hover:bg-black/80 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="aspect-[16/10] bg-stone-900 overflow-hidden relative">
              <img
                src={selectedPhoto.imageUrl}
                alt={selectedPhoto.title}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="p-6 sm:p-8 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-[#C86D51] bg-[#C86D51]/10 px-3 py-1 rounded-full">
                  {selectedPhoto.category}
                </span>
                <span className="text-xs text-stone-500 font-medium">@thedailyroastcafe</span>
              </div>

              <h3 className="font-serif-heading font-bold text-2xl text-[#2C221E]">
                {selectedPhoto.title}
              </h3>

              <p className="text-sm text-stone-700 leading-relaxed">
                {selectedPhoto.caption}
              </p>

              <div className="pt-4 border-t border-[#EFE8DE] flex justify-between items-center text-xs text-stone-500">
                <span>The Daily Roast Experience</span>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-[#C86D51] hover:underline flex items-center gap-1"
                >
                  <Instagram className="w-4 h-4" />
                  View on Instagram
                </a>
              </div>
            </div>

          </div>
        </div>
      )}
    </section>
  );
};
