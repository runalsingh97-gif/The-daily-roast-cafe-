import React from 'react';
import { Heart, Award, Clock, Users, Coffee, Sparkles } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 lg:py-28 bg-[#FAF7F2] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Visual Grid */}
          <div className="lg:col-span-6 relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="rounded-3xl overflow-hidden shadow-lg border border-[#EFE8DE] aspect-[3/4]">
                  <img
                    src="https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&fit=crop&q=80&w=800"
                    alt="Artisanal Coffee Pour-over"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="bg-[#3D2B1F] text-[#FAF7F2] p-6 rounded-3xl shadow-md border border-stone-700">
                  <div className="font-serif-heading font-bold text-3xl text-[#D4A359] mb-1">100%</div>
                  <div className="text-xs uppercase tracking-wider text-stone-300 font-semibold">
                    Direct-Trade Organic Arabica
                  </div>
                </div>
              </div>

              <div className="space-y-4 pt-8">
                <div className="bg-[#EFE8DE] text-[#2C221E] p-6 rounded-3xl shadow-sm border border-[#D8C4B6]">
                  <div className="flex items-center gap-2 text-[#C86D51] mb-2">
                    <Coffee className="w-5 h-5" />
                    <span className="font-bold text-sm">Batch Roasted Weekly</span>
                  </div>
                  <p className="text-xs text-stone-700 leading-relaxed">
                    Custom roast profiles designed to highlight floral berries and smooth dark chocolate notes.
                  </p>
                </div>

                <div className="rounded-3xl overflow-hidden shadow-lg border border-[#EFE8DE] aspect-[3/4]">
                  <img
                    src="https://images.unsplash.com/photo-1521017432531-fbd92d768814?auto=format&fit=crop&q=80&w=800"
                    alt="Cozy Cafe Interior Seating"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </div>
            </div>

            {/* Decorative Gold Seal */}
            <div className="absolute -bottom-6 -right-6 hidden sm:flex w-24 h-24 rounded-full bg-[#C86D51] text-white p-2 shadow-xl items-center justify-center text-center text-[10px] font-bold uppercase tracking-wider leading-tight border-4 border-[#FAF7F2]">
              Est. 2019 • Crafted with Love
            </div>
          </div>

          {/* Right Narrative Content */}
          <div className="lg:col-span-6 space-y-6 text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#C86D51]/10 text-[#C86D51] text-xs font-bold uppercase tracking-widest">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Our Story & Philosophy</span>
            </div>

            <h2 className="font-serif-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2C221E] leading-tight">
              Where Exceptional Coffee Meets the Comfort of Home
            </h2>

            <p className="text-base text-stone-700 leading-relaxed font-normal">
              Founded in 2019, <strong>The Daily Roast Cafe</strong> was born out of a simple desire: to create a cozy, welcoming sanctuary where people can slow down, savor masterfully roasted coffee, and connect deeply over warm conversations.
            </p>

            <p className="text-sm text-stone-600 leading-relaxed">
              Whether you're looking for an inspiring nook with high-speed Wi-Fi and power outlets for your laptop, a peaceful sunlit table to read a book, or a leafy garden patio to catch up with friends (and pets!), we've designed every corner with warmth and intention.
            </p>

            {/* Highlight Badges Grid */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="flex items-center gap-3 p-3 rounded-2xl bg-[#EFE8DE]/50 border border-[#D8C4B6]/60">
                <div className="p-2.5 rounded-xl bg-[#3D2B1F] text-[#D4A359]">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-xs text-[#2C221E]">Award-Winning Baristas</h4>
                  <p className="text-[11px] text-stone-600">Master latte artists</p>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 rounded-2xl bg-[#EFE8DE]/50 border border-[#D8C4B6]/60">
                <div className="p-2.5 rounded-xl bg-[#3D2B1F] text-[#C86D51]">
                  <Heart className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-xs text-[#2C221E]">Fresh In-House Bakery</h4>
                  <p className="text-[11px] text-stone-600">Baked fresh every 7 AM</p>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 rounded-2xl bg-[#EFE8DE]/50 border border-[#D8C4B6]/60">
                <div className="p-2.5 rounded-xl bg-[#3D2B1F] text-[#D4A359]">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-xs text-[#2C221E]">Work-Friendly Nooks</h4>
                  <p className="text-[11px] text-stone-600">No rushed tables policy</p>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 rounded-2xl bg-[#EFE8DE]/50 border border-[#D8C4B6]/60">
                <div className="p-2.5 rounded-xl bg-[#3D2B1F] text-[#C86D51]">
                  <Users className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-xs text-[#2C221E]">Community Gatherings</h4>
                  <p className="text-[11px] text-stone-600">Acoustic music & book clubs</p>
                </div>
              </div>
            </div>

            <div className="pt-4">
              <a
                href="#reservation"
                className="inline-flex items-center gap-2 text-sm font-bold text-[#C86D51] hover:text-[#b05a40] transition-colors group"
              >
                <span>Reserve your favorite spot for today</span>
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
