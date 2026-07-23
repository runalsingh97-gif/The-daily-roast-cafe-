import React, { useState } from 'react';
import { Calendar, Clock, Users, Sparkles, MessageSquare, CheckCircle, Phone, User, Heart, Coffee, ShieldCheck, X } from 'lucide-react';
import { ReservationData } from '../types';
import { CAFE_INFO } from '../data/cafeData';

export const ReservationSection: React.FC = () => {
  const [formData, setFormData] = useState<ReservationData>({
    name: '',
    phone: '',
    date: new Date().toISOString().split('T')[0],
    time: '11:00',
    guests: 2,
    occasion: 'Casual',
    specialRequest: '',
  });

  const [showModal, setShowModal] = useState(false);
  const [bookingCode, setBookingCode] = useState('');

  const occasions = [
    'Casual Hangout / Coffee',
    'Date Night / Romantic',
    'Work Meeting / Remote Desk',
    'Birthday Celebration',
    'Anniversary',
    'Book Club / Study Group',
  ];

  const timeSlots = [
    '08:30 AM', '09:30 AM', '10:30 AM', '11:30 AM',
    '12:30 PM', '02:00 PM', '03:30 PM', '05:00 PM',
    '06:30 PM', '08:00 PM', '09:30 PM'
  ];

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const generateWhatsAppUrl = () => {
    const message = `Hello *The Daily Roast Cafe*! ☕\n\nI would like to book a table reservation:\n\n👤 *Name:* ${formData.name}\n📞 *Phone:* ${formData.phone}\n📅 *Date:* ${formData.date}\n⏰ *Time:* ${formData.time}\n👥 *Guests:* ${formData.guests} ${formData.guests === 1 ? 'Person' : 'People'}\n🎉 *Occasion:* ${formData.occasion}${formData.specialRequest ? `\n💬 *Notes:* ${formData.specialRequest}` : ''}\n\n*Booking Code:* ${bookingCode}`;
    return `https://wa.me/${CAFE_INFO.whatsappNumber}?text=${encodeURIComponent(message)}`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) {
      alert('Please fill in your name and phone number to complete the booking.');
      return;
    }

    const code = 'DRC-' + Math.floor(100000 + Math.random() * 900000);
    setBookingCode(code);
    setShowModal(true);
  };

  return (
    <section id="reservation" className="py-20 lg:py-28 bg-[#2C221E] text-[#FAF7F2] relative overflow-hidden">
      {/* Background Subtle Accent Gradients */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#C86D51]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#D4A359]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column Text & Benefits */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#C86D51]/20 border border-[#C86D51]/40 text-[#E89E86] text-xs font-semibold uppercase tracking-wider">
              <Calendar className="w-3.5 h-3.5 text-[#D4A359]" />
              <span>Instant Table Reservation</span>
            </div>

            <h2 className="font-serif-heading text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
              Reserve Your Cozy Corner
            </h2>

            <p className="text-stone-300 text-sm sm:text-base font-light leading-relaxed">
              Planning a work session, a casual coffee catchup, or a special date night? Reserve your table in advance and we’ll prepare your preferred spot with high-speed Wi-Fi and power outlets ready.
            </p>

            <div className="space-y-4 pt-2">
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-[#3D2B1F] text-[#D4A359] shrink-0 mt-1">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-[#FAF7F2]">Guaranteed Seating & Power Outlets</h4>
                  <p className="text-xs text-stone-400">No waiting in line during peak morning or afternoon hours.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-[#3D2B1F] text-[#C86D51] shrink-0 mt-1">
                  <Coffee className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-[#FAF7F2]">Complimentary Welcome Tasting</h4>
                  <p className="text-xs text-stone-400">Enjoy a seasonal mini cold brew shooter upon arrival.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-[#3D2B1F] text-[#D4A359] shrink-0 mt-1">
                  <Heart className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-[#FAF7F2]">Custom Celebration Setup</h4>
                  <p className="text-xs text-stone-400">Let us know if it's a birthday or date; we'll add special touches!</p>
                </div>
              </div>
            </div>

            {/* Quick Contact Box */}
            <div className="p-4 rounded-2xl bg-[#3D2B1F]/60 border border-stone-700/60 text-xs text-stone-300 flex items-center justify-between">
              <span>Prefer booking via phone or WhatsApp?</span>
              <a
                href={`tel:${CAFE_INFO.phone}`}
                className="font-bold text-[#D4A359] hover:underline flex items-center gap-1"
              >
                <Phone className="w-3.5 h-3.5" />
                Call Us Direct
              </a>
            </div>
          </div>

          {/* Right Column Reservation Form */}
          <div className="lg:col-span-7">
            <div className="bg-[#FAF7F2] text-[#2C221E] rounded-3xl p-6 sm:p-8 lg:p-10 shadow-2xl border border-[#EFE8DE]">
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-[#EFE8DE]">
                <div>
                  <h3 className="font-serif-heading font-bold text-xl sm:text-2xl text-[#2C221E]">
                    Table Booking Form
                  </h3>
                  <p className="text-xs text-stone-500">
                    Instant confirmation sent to WhatsApp upon submission
                  </p>
                </div>
                <div className="w-10 h-10 rounded-full bg-[#EFE8DE] flex items-center justify-center text-[#C86D51]">
                  <Sparkles className="w-5 h-5" />
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                
                {/* Name & Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-1.5">
                      Full Name *
                    </label>
                    <div className="relative">
                      <User className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="e.g. Sarah Jenkins"
                        className="w-full pl-10 pr-4 py-3 bg-[#EFE8DE]/50 rounded-xl border border-stone-300 focus:border-[#C86D51] focus:bg-white text-xs sm:text-sm text-[#2C221E] outline-none transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-1.5">
                      Phone / WhatsApp *
                    </label>
                    <div className="relative">
                      <Phone className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="+1 (555) 000-0000"
                        className="w-full pl-10 pr-4 py-3 bg-[#EFE8DE]/50 rounded-xl border border-stone-300 focus:border-[#C86D51] focus:bg-white text-xs sm:text-sm text-[#2C221E] outline-none transition-all"
                      />
                    </div>
                  </div>
                </div>

                {/* Date & Time */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-1.5">
                      Reservation Date *
                    </label>
                    <div className="relative">
                      <Calendar className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                      <input
                        type="date"
                        name="date"
                        required
                        value={formData.date}
                        onChange={handleInputChange}
                        className="w-full pl-10 pr-4 py-3 bg-[#EFE8DE]/50 rounded-xl border border-stone-300 focus:border-[#C86D51] focus:bg-white text-xs sm:text-sm text-[#2C221E] outline-none transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-1.5">
                      Preferred Time *
                    </label>
                    <div className="relative">
                      <Clock className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                      <select
                        name="time"
                        value={formData.time}
                        onChange={handleInputChange}
                        className="w-full pl-10 pr-4 py-3 bg-[#EFE8DE]/50 rounded-xl border border-stone-300 focus:border-[#C86D51] focus:bg-white text-xs sm:text-sm text-[#2C221E] outline-none transition-all appearance-none cursor-pointer"
                      >
                        {timeSlots.map((slot) => (
                          <option key={slot} value={slot}>
                            {slot}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>

                {/* Guests & Occasion */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-1.5">
                      Number of Guests
                    </label>
                    <div className="relative">
                      <Users className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                      <select
                        name="guests"
                        value={formData.guests}
                        onChange={handleInputChange}
                        className="w-full pl-10 pr-4 py-3 bg-[#EFE8DE]/50 rounded-xl border border-stone-300 focus:border-[#C86D51] focus:bg-white text-xs sm:text-sm text-[#2C221E] outline-none transition-all appearance-none cursor-pointer"
                      >
                        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                          <option key={num} value={num}>
                            {num} {num === 1 ? 'Guest' : 'Guests'}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-1.5">
                      Special Occasion
                    </label>
                    <select
                      name="occasion"
                      value={formData.occasion}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-[#EFE8DE]/50 rounded-xl border border-stone-300 focus:border-[#C86D51] focus:bg-white text-xs sm:text-sm text-[#2C221E] outline-none transition-all cursor-pointer"
                    >
                      {occasions.map((occ) => (
                        <option key={occ} value={occ}>
                          {occ}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Special Request */}
                <div>
                  <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-1.5">
                    Seating Preference / Special Notes (Optional)
                  </label>
                  <textarea
                    name="specialRequest"
                    rows={2}
                    value={formData.specialRequest}
                    onChange={handleInputChange}
                    placeholder="e.g. Quiet window seat near power outlet, patio table for dog..."
                    className="w-full p-3.5 bg-[#EFE8DE]/50 rounded-xl border border-stone-300 focus:border-[#C86D51] focus:bg-white text-xs sm:text-sm text-[#2C221E] outline-none transition-all"
                  />
                </div>

                {/* Confirm Button */}
                <button
                  type="submit"
                  className="w-full py-4 rounded-xl bg-[#C86D51] hover:bg-[#b05a40] text-white font-bold text-sm sm:text-base shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 group cursor-pointer"
                >
                  <MessageSquare className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  <span>Confirm Booking via WhatsApp</span>
                </button>

              </form>
            </div>
          </div>

        </div>
      </div>

      {/* Booking Confirmation Dialog Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-[#FAF7F2] text-[#2C221E] w-full max-w-lg rounded-3xl p-6 sm:p-8 shadow-2xl relative animate-in fade-in zoom-in duration-200 border border-[#D8C4B6]">
            
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4 p-2 rounded-full text-stone-400 hover:text-stone-700 hover:bg-[#EFE8DE] transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="text-center mb-6">
              <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-700 mx-auto flex items-center justify-center mb-3">
                <CheckCircle className="w-8 h-8" />
              </div>
              <span className="text-[10px] uppercase font-bold tracking-widest text-[#C86D51]">
                Reservation Details Formatted
              </span>
              <h3 className="font-serif-heading font-bold text-2xl text-[#2C221E] mt-1">
                Booking Reference: {bookingCode}
              </h3>
            </div>

            <div className="bg-[#EFE8DE]/60 p-4 rounded-2xl space-y-2 text-xs text-stone-800 mb-6 border border-[#D8C4B6]/60">
              <div className="flex justify-between">
                <span className="text-stone-500 font-medium">Guest Name:</span>
                <span className="font-bold">{formData.name}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-stone-500 font-medium">Date & Time:</span>
                <span className="font-bold">{formData.date} at {formData.time}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-stone-500 font-medium">Party Size:</span>
                <span className="font-bold">{formData.guests} Guests</span>
              </div>
              <div className="flex justify-between">
                <span className="text-stone-500 font-medium">Occasion:</span>
                <span className="font-bold">{formData.occasion}</span>
              </div>
              {formData.specialRequest && (
                <div className="pt-2 border-t border-stone-300/60">
                  <span className="text-stone-500 font-medium block">Special Request:</span>
                  <p className="italic text-stone-700 mt-0.5">{formData.specialRequest}</p>
                </div>
              )}
            </div>

            <p className="text-xs text-stone-600 text-center mb-6 leading-relaxed">
              Click the button below to send your pre-filled reservation details directly to our Cafe Concierge on WhatsApp.
            </p>

            <div className="space-y-3">
              <a
                href={generateWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setShowModal(false)}
                className="w-full py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm flex items-center justify-center gap-2 shadow-md transition-all"
              >
                <MessageSquare className="w-5 h-5" />
                <span>Open WhatsApp & Send Booking</span>
              </a>

              <button
                onClick={() => setShowModal(false)}
                className="w-full py-2.5 text-xs font-semibold text-stone-600 hover:text-stone-900"
              >
                Close & Modify
              </button>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};
