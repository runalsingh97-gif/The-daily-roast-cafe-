import React, { useState, useMemo } from 'react';
import { MENU_ITEMS } from '../data/cafeData';
import { CategoryType, MenuItem } from '../types';
import { Search, Plus, Check, Flame, Leaf, Coffee, CupSoda, Wine, Cake, Sandwich, Sparkles } from 'lucide-react';

interface MenuSectionProps {
  onAddToCart: (item: MenuItem) => void;
  cartItemIds: string[];
}

export const MenuSection: React.FC<MenuSectionProps> = ({ onAddToCart, cartItemIds }) => {
  const [activeCategory, setActiveCategory] = useState<CategoryType>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [dietaryFilter, setDietaryFilter] = useState<'all' | 'veg' | 'vegan' | 'gf'>('all');
  const [addedAnimationId, setAddedAnimationId] = useState<string | null>(null);

  const categories: { id: CategoryType; label: string; icon: React.ReactNode }[] = [
    { id: 'all', label: 'All Items', icon: <Sparkles className="w-4 h-4" /> },
    { id: 'hot-coffee', label: 'Hot Coffee', icon: <Coffee className="w-4 h-4" /> },
    { id: 'cold-brews', label: 'Cold Brews', icon: <CupSoda className="w-4 h-4" /> },
    { id: 'artisanal-tea', label: 'Artisanal Tea', icon: <Wine className="w-4 h-4" /> },
    { id: 'fresh-bakery', label: 'Fresh Bakery', icon: <Cake className="w-4 h-4" /> },
    { id: 'snacks', label: 'Snacks & Savory', icon: <Sandwich className="w-4 h-4" /> },
  ];

  const filteredItems = useMemo(() => {
    return MENU_ITEMS.filter((item) => {
      // Category check
      if (activeCategory !== 'all' && item.category !== activeCategory) {
        return false;
      }
      // Search check
      if (searchQuery.trim() !== '') {
        const query = searchQuery.toLowerCase();
        const matchesTitle = item.title.toLowerCase().includes(query);
        const matchesDesc = item.description.toLowerCase().includes(query);
        if (!matchesTitle && !matchesDesc) return false;
      }
      // Dietary check
      if (dietaryFilter === 'veg' && !item.isVeg) return false;
      if (dietaryFilter === 'vegan' && !item.isVegan) return false;
      if (dietaryFilter === 'gf' && !item.isGlutenFree) return false;

      return true;
    });
  }, [activeCategory, searchQuery, dietaryFilter]);

  const handleAdd = (item: MenuItem) => {
    onAddToCart(item);
    setAddedAnimationId(item.id);
    setTimeout(() => {
      setAddedAnimationId(null);
    }, 1200);
  };

  return (
    <section id="menu" className="py-20 lg:py-28 bg-[#EFE8DE]/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#C86D51]/10 text-[#C86D51] text-xs font-bold uppercase tracking-widest">
            <Coffee className="w-3.5 h-3.5" />
            <span>Handcrafted Everyday</span>
          </div>
          <h2 className="font-serif-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2C221E]">
            Our Artisanal Menu
          </h2>
          <p className="text-stone-600 text-sm sm:text-base font-normal">
            Sourced from ethical micro-farms and prepared fresh daily by our passionate baristas and pastry chefs.
          </p>
        </div>

        {/* Filter Controls Bar */}
        <div className="space-y-6 mb-12">
          
          {/* Category Tabs */}
          <div className="flex items-center justify-start sm:justify-center overflow-x-auto pb-2 scrollbar-none gap-2 sm:gap-3">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`flex items-center gap-2 px-5 py-3 rounded-full text-xs sm:text-sm font-semibold whitespace-nowrap transition-all duration-200 cursor-pointer ${
                  activeCategory === cat.id
                    ? 'bg-[#3D2B1F] text-[#FAF7F2] shadow-md scale-105'
                    : 'bg-[#FAF7F2] text-[#2C221E] hover:bg-[#EFE8DE] border border-[#D8C4B6]/60'
                }`}
              >
                {cat.icon}
                <span>{cat.label}</span>
              </button>
            ))}
          </div>

          {/* Search & Dietary Filters Row */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 bg-[#FAF7F2] p-4 rounded-2xl border border-[#D8C4B6] shadow-sm">
            
            {/* Search Input */}
            <div className="relative w-full md:w-72">
              <Search className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search coffee, pastries, toast..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 text-xs sm:text-sm bg-[#EFE8DE]/50 rounded-xl border border-transparent focus:border-[#C86D51] focus:bg-white outline-none transition-all text-[#2C221E]"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-stone-400 hover:text-[#2C221E]"
                >
                  ✕
                </button>
              )}
            </div>

            {/* Dietary Filter Pills */}
            <div className="flex items-center gap-2 w-full md:w-auto overflow-x-auto">
              <span className="text-xs font-semibold text-stone-500 whitespace-nowrap mr-1">Dietary:</span>
              
              <button
                onClick={() => setDietaryFilter('all')}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  dietaryFilter === 'all'
                    ? 'bg-[#C86D51] text-white'
                    : 'bg-[#EFE8DE] text-stone-700 hover:bg-stone-300/60'
                }`}
              >
                All
              </button>

              <button
                onClick={() => setDietaryFilter('veg')}
                className={`flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  dietaryFilter === 'veg'
                    ? 'bg-emerald-700 text-white'
                    : 'bg-[#EFE8DE] text-stone-700 hover:bg-stone-300/60'
                }`}
              >
                <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                <span>Vegetarian</span>
              </button>

              <button
                onClick={() => setDietaryFilter('vegan')}
                className={`flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  dietaryFilter === 'vegan'
                    ? 'bg-emerald-800 text-white'
                    : 'bg-[#EFE8DE] text-stone-700 hover:bg-stone-300/60'
                }`}
              >
                <Leaf className="w-3 h-3 text-emerald-400" />
                <span>Vegan</span>
              </button>

              <button
                onClick={() => setDietaryFilter('gf')}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  dietaryFilter === 'gf'
                    ? 'bg-amber-700 text-white'
                    : 'bg-[#EFE8DE] text-stone-700 hover:bg-stone-300/60'
                }`}
              >
                Gluten-Free
              </button>
            </div>

          </div>

        </div>

        {/* Menu Items Grid */}
        {filteredItems.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredItems.map((item) => {
              const isAdded = addedAnimationId === item.id;
              const inCart = cartItemIds.includes(item.id);

              return (
                <div
                  key={item.id}
                  className="bg-[#FAF7F2] rounded-3xl overflow-hidden border border-[#EFE8DE] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group"
                >
                  {/* Image Container */}
                  <div className="relative aspect-[16/10] overflow-hidden bg-stone-200">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    
                    {/* Bestseller Badge */}
                    {item.isBestseller && (
                      <span className="absolute top-3 left-3 bg-[#D4A359] text-[#2C221E] text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full shadow-md flex items-center gap-1">
                        <Sparkles className="w-3 h-3" />
                        Bestseller
                      </span>
                    )}

                    {/* Calories Tag */}
                    {item.calories && (
                      <span className="absolute bottom-3 left-3 bg-[#2C221E]/80 backdrop-blur-md text-stone-200 text-[10px] font-medium px-2 py-0.5 rounded-md">
                        {item.calories}
                      </span>
                    )}

                    {/* Dietary Badges */}
                    <div className="absolute top-3 right-3 flex items-center gap-1">
                      {item.isVegan ? (
                        <span className="bg-emerald-800/90 backdrop-blur-md text-white text-[10px] font-bold px-2 py-0.5 rounded-full flex items-center gap-1 border border-emerald-500/40">
                          <Leaf className="w-3 h-3" /> Vegan
                        </span>
                      ) : item.isVeg ? (
                        <span className="bg-emerald-700/90 backdrop-blur-md text-white text-[10px] font-bold px-2 py-0.5 rounded-full border border-emerald-500/40">
                          Veg
                        </span>
                      ) : null}

                      {item.isGlutenFree && (
                        <span className="bg-amber-800/90 backdrop-blur-md text-white text-[10px] font-bold px-2 py-0.5 rounded-full border border-amber-500/40">
                          GF
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-start justify-between gap-2 mb-2">
                        <h3 className="font-serif-heading text-lg font-bold text-[#2C221E] group-hover:text-[#C86D51] transition-colors">
                          {item.title}
                        </h3>
                        <span className="font-serif-heading font-bold text-lg text-[#C86D51] shrink-0">
                          ${item.price.toFixed(2)}
                        </span>
                      </div>
                      <p className="text-xs text-stone-600 leading-relaxed font-light mb-4">
                        {item.description}
                      </p>
                    </div>

                    {/* Bottom Action */}
                    <div className="pt-4 border-t border-[#EFE8DE] flex items-center justify-between">
                      <span className="text-[11px] text-stone-500 italic">
                        {inCart ? 'Already in order' : 'Made fresh to order'}
                      </span>

                      <button
                        onClick={() => handleAdd(item)}
                        className={`px-4 py-2 rounded-full text-xs font-bold flex items-center gap-1.5 transition-all duration-300 ${
                          isAdded
                            ? 'bg-emerald-600 text-white scale-105'
                            : inCart
                            ? 'bg-[#3D2B1F] text-white hover:bg-[#C86D51]'
                            : 'bg-[#C86D51] text-white hover:bg-[#b05a40] shadow-sm hover:shadow'
                        }`}
                      >
                        {isAdded ? (
                          <>
                            <Check className="w-3.5 h-3.5" />
                            <span>Added!</span>
                          </>
                        ) : (
                          <>
                            <Plus className="w-3.5 h-3.5" />
                            <span>{inCart ? 'Add Another' : 'Add to Order'}</span>
                          </>
                        )}
                      </button>
                    </div>
                  </div>

                </div>
              );
            })}
          </div>
        ) : (
          <div className="text-center py-16 bg-[#FAF7F2] rounded-3xl border border-[#D8C4B6]">
            <Coffee className="w-12 h-12 text-stone-400 mx-auto mb-3" />
            <h3 className="font-serif-heading font-bold text-lg text-[#2C221E]">
              No menu items match your search
            </h3>
            <p className="text-xs text-stone-500 mt-1 mb-4">
              Try adjusting your search keywords or dietary filter options.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setActiveCategory('all');
                setDietaryFilter('all');
              }}
              className="px-5 py-2 rounded-full bg-[#C86D51] text-white text-xs font-bold hover:bg-[#b05a40]"
            >
              Reset Filters
            </button>
          </div>
        )}

      </div>
    </section>
  );
};
