import React from 'react';
import { Wifi, Zap, Dog, Coffee, ShieldCheck } from 'lucide-react';
import { USP_LIST } from '../data/cafeData';

export const HighlightBar: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Wifi':
        return <Wifi className="w-7 h-7 text-[#C86D51]" />;
      case 'Zap':
        return <Zap className="w-7 h-7 text-[#D4A359]" />;
      case 'Dog':
        return <Dog className="w-7 h-7 text-[#C86D51]" />;
      case 'Coffee':
        return <Coffee className="w-7 h-7 text-[#D4A359]" />;
      default:
        return <ShieldCheck className="w-7 h-7 text-[#C86D51]" />;
    }
  };

  return (
    <section id="usps" className="relative z-20 -mt-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-[#FAF7F2] rounded-3xl p-6 lg:p-8 shadow-xl border border-[#EFE8DE]">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {USP_LIST.map((usp) => (
            <div
              key={usp.id}
              className="flex items-start gap-4 p-4 rounded-2xl bg-[#EFE8DE]/60 hover:bg-[#EFE8DE] transition-all duration-300 border border-transparent hover:border-[#D8C4B6]"
            >
              <div className="p-3 bg-[#FAF7F2] rounded-2xl shadow-sm border border-stone-200/80 shrink-0">
                {getIcon(usp.iconName)}
              </div>
              <div>
                <h3 className="font-serif-heading font-bold text-base text-[#2C221E] mb-1">
                  {usp.title}
                </h3>
                <p className="text-xs text-[#2C221E]/80 leading-relaxed font-light">
                  {usp.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
