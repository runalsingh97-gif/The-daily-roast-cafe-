import React, { useState } from 'react';
import { CAFE_INFO } from '../data/cafeData';
import { MapPin, Phone, Mail, Clock, ExternalLink, Music, Instagram, Facebook, Share2, Compass, Heart, X, Check } from 'lucide-react';

interface FooterAndLocationProps {
  isOpenNow: boolean;
}

export const FooterAndLocation: React.FC<FooterAndLocationProps> = ({ isOpenNow }) => {
  const [showSpotifyModal, setShowSpotifyModal] = useState(false);
  const [copiedAddress, setCopiedAddress] = useState(false);

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(`${CAFE_INFO.address}, ${CAFE_INFO.city}`);
    setCopiedAddress(true);
    setTimeout(() => setCopiedAddress(false), 2000);
  };

  return (
    <footer id="location" className="bg-[#2C221E] text-[#FAF7F2] pt-20 pb-12 relative border-t border-[#3D2B1F]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Grid: Info + Map + Links */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-16 border-b border-stone-800">
          
          {/* Left Column (5 Cols) - Address, Hours, Status */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#D4A359] block mb-1">
                VISIT US TODAY
              </span>
              <h2 className="font-serif-heading text-3xl font-bold text-[#FAF7F2]">
                Location & Hours
              </h2>
            </div>

            {/* Dynamic Open / Closed Status Card */}
            <div className={`p-4 rounded-2xl border flex items-center justify-between ${
              isOpenNow 
                ? 'bg-emerald-950/40 border-emerald-600/40 text-emerald-200' 
                : 'bg-amber-950/40 border-amber-600/40 text-amber-200'
            }`}>
              <div className="flex items-center gap-3">
                <span className={`w-3 h-3 rounded-full ${isOpenNow ? 'bg-emerald-500 animate-ping' : 'bg-amber-600'}`}></span>
                <div>
                  <h4 className="font-bold text-sm">
                    {isOpenNow ? 'OPEN NOW' : 'CLOSED NOW'}
                  </h4>
                  <p className="text-xs opacity-80">
                    {isOpenNow ? 'Kitchen & Espresso bar serving until 11:00 PM' : 'Opens tomorrow at 8:00 AM'}
                  </p>
                </div>
              </div>
              <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-black/40 border border-white/10">
                Mon - Sun
              </span>
            </div>

            {/* Opening Hours Detail */}
            <div className="space-y-3 bg-[#3D2B1F]/60 p-5 rounded-2xl border border-stone-700/60 text-xs">
              <div className="flex items-center gap-2 text-[#D4A359] font-bold mb-1">
                <Clock className="w-4 h-4" />
                <span>Operating Schedule</span>
              </div>
              <div className="flex justify-between border-b border-stone-700/50 pb-2">
                <span className="text-stone-300">Monday - Friday:</span>
                <span className="font-bold text-[#FAF7F2]">{CAFE_INFO.openingHours.weekdays}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-stone-300">Saturday - Sunday:</span>
                <span className="font-bold text-[#FAF7F2]">{CAFE_INFO.openingHours.weekends}</span>
              </div>
            </div>

            {/* Address & Contact */}
            <div className="space-y-3 text-xs text-stone-300">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#C86D51] shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-white block">{CAFE_INFO.name}</span>
                  <span>{CAFE_INFO.address}, {CAFE_INFO.city}</span>
                  <button
                    onClick={handleCopyAddress}
                    className="ml-2 text-[11px] text-[#D4A359] hover:underline font-medium inline-flex items-center gap-1"
                  >
                    {copiedAddress ? (
                      <>
                        <Check className="w-3 h-3 text-emerald-400" />
                        <span>Copied!</span>
                      </>
                    ) : (
                      <span>Copy Address</span>
                    )}
                  </button>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#C86D51] shrink-0" />
                <a href={`tel:${CAFE_INFO.phone}`} className="hover:text-amber-300 transition-colors">
                  {CAFE_INFO.phone}
                </a>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#C86D51] shrink-0" />
                <a href={`mailto:${CAFE_INFO.email}`} className="hover:text-amber-300 transition-colors">
                  {CAFE_INFO.email}
                </a>
              </div>
            </div>

            {/* Delivery Partner Buttons (Swiggy & Zomato) */}
            <div className="pt-2">
              <span className="text-xs font-semibold text-stone-400 block mb-2">
                Order Delivery Direct to Your Door:
              </span>
              <div className="grid grid-cols-2 gap-3">
                <a
                  href={CAFE_INFO.swiggyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-[#FC8019]/20 hover:bg-[#FC8019] text-white border border-[#FC8019]/40 font-bold text-xs flex items-center justify-center gap-2 transition-all shadow-sm"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>Order on Swiggy</span>
                </a>

                <a
                  href={CAFE_INFO.zomatoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-[#E23744]/20 hover:bg-[#E23744] text-white border border-[#E23744]/40 font-bold text-xs flex items-center justify-center gap-2 transition-all shadow-sm"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>Order on Zomato</span>
                </a>
              </div>
            </div>

          </div>

          {/* Right Column (7 Cols) - Google Maps & Spotify Banner */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Embedded Google Map */}
            <div className="rounded-3xl overflow-hidden border border-stone-700/80 shadow-xl h-72 sm:h-80 relative group">
              <iframe
                title="The Daily Roast Cafe Location Map"
                src={CAFE_INFO.googleMapsEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale opacity-85 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
              />
              
              <div className="absolute top-4 left-4 bg-[#2C221E]/90 backdrop-blur-md px-4 py-2 rounded-2xl border border-stone-600 text-xs text-stone-200 shadow-lg pointer-events-none">
                <span className="font-bold text-[#D4A359] block">📍 Sector 5 Central</span>
                <span>Valet Parking Available</span>
              </div>
            </div>

            {/* Spotify Cafe Acoustic Playlist Banner */}
            <div className="bg-gradient-to-r from-emerald-950/80 via-[#3D2B1F] to-[#2C221E] p-5 rounded-3xl border border-emerald-600/30 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-emerald-500 text-black flex items-center justify-center shrink-0 shadow-lg">
                  <Music className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-serif-heading font-bold text-base text-white">
                    Listen to Our Cafe Playlist
                  </h4>
                  <p className="text-xs text-stone-300 font-light">
                    "Cozy Roast Acoustic Vibes" • Stream our in-house background music.
                  </p>
                </div>
              </div>

              <button
                onClick={() => setShowSpotifyModal(true)}
                className="px-5 py-2.5 rounded-full bg-emerald-500 hover:bg-emerald-400 text-black font-bold text-xs transition-all shadow-md shrink-0"
              >
                Play on Spotify
              </button>
            </div>

          </div>

        </div>

        {/* Bottom Copyright & Social Links */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-400">
          <div className="flex items-center gap-2">
            <span className="font-serif-heading font-bold text-white text-sm">
              The Daily Roast Cafe
            </span>
            <span>© {new Date().getFullYear()} All rights reserved.</span>
          </div>

          <div className="flex items-center space-x-6">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#D4A359] transition-colors">
              <Instagram className="w-4 h-4" />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#D4A359] transition-colors">
              <Facebook className="w-4 h-4" />
            </a>
            <a href="https://spotify.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#D4A359] transition-colors">
              <Music className="w-4 h-4" />
            </a>
          </div>
        </div>

      </div>

      {/* Spotify Modal Popup */}
      {showSpotifyModal && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-[#121212] text-white max-w-md w-full rounded-3xl p-6 shadow-2xl relative border border-emerald-500/30">
            <button
              onClick={() => setShowSpotifyModal(false)}
              className="absolute top-4 right-4 p-2 rounded-full text-stone-400 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3 mb-4">
              <Music className="w-6 h-6 text-emerald-500" />
              <h3 className="font-serif-heading font-bold text-lg">Cozy Roast Acoustic Vibes</h3>
            </div>

            <p className="text-xs text-stone-400 mb-6 leading-relaxed">
              Experience the exact warm acoustic and indie jazz tunes played daily at The Daily Roast Cafe. Curated weekly by our lead barista.
            </p>

            <div className="space-y-3">
              <a
                href={CAFE_INFO.spotifyPlaylistUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setShowSpotifyModal(false)}
                className="w-full py-3 rounded-full bg-emerald-500 hover:bg-emerald-400 text-black font-bold text-xs flex items-center justify-center gap-2 shadow-lg transition-all"
              >
                <ExternalLink className="w-4 h-4" />
                <span>Open in Spotify App</span>
              </a>

              <button
                onClick={() => setShowSpotifyModal(false)}
                className="w-full py-2.5 text-xs text-stone-400 hover:text-white"
              >
                Dismiss
              </button>
            </div>
          </div>
        </div>
      )}

    </footer>
  );
};
