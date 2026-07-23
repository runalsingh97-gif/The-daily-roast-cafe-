import React, { useState } from 'react';
import { CartItem } from '../types';
import { CAFE_INFO } from '../data/cafeData';
import { ShoppingBag, X, Plus, Minus, Trash2, MessageSquare, Check, ArrowRight, Coffee, Sparkles } from 'lucide-react';

interface OrderCartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  onUpdateQuantity: (id: string, delta: number) => void;
  onClearCart: () => void;
}

export const OrderCartDrawer: React.FC<OrderCartDrawerProps> = ({
  isOpen,
  onClose,
  cartItems,
  onUpdateQuantity,
  onClearCart,
}) => {
  const [orderType, setOrderType] = useState<'dine-in' | 'takeaway'>('dine-in');
  const [tableNumber, setTableNumber] = useState('');
  const [orderNote, setOrderNote] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.menuItem.price * item.quantity,
    0
  );
  const tax = subtotal * 0.05; // 5% tax
  const total = subtotal + tax;

  const handleWhatsAppCheckout = () => {
    if (cartItems.length === 0) return;

    let itemsList = cartItems
      .map(
        (ci) =>
          `• *${ci.quantity}x* ${ci.menuItem.title} ($${(
            ci.menuItem.price * ci.quantity
          ).toFixed(2)})`
      )
      .join('\n');

    const orderMsg = `Hello *The Daily Roast Cafe*! ☕\n\nI would like to place an online order:\n\n*Order Type:* ${
      orderType === 'dine-in' ? `Dine-In ${tableNumber ? `(Table #${tableNumber})` : ''}` : 'Takeaway / Pickup'
    }\n\n*Order Items:*\n${itemsList}\n\n*Subtotal:* $${subtotal.toFixed(2)}\n*Tax (5%):* $${tax.toFixed(2)}\n*Total Amount:* *$${total.toFixed(2)}*${
      orderNote ? `\n\n💬 *Special Notes:* ${orderNote}` : ''
    }`;

    const waUrl = `https://wa.me/${CAFE_INFO.whatsappNumber}?text=${encodeURIComponent(
      orderMsg
    )}`;

    window.open(waUrl, '_blank');
    setIsSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex justify-end">
      <div className="w-full max-w-md bg-[#FAF7F2] text-[#2C221E] h-full shadow-2xl flex flex-col justify-between animate-in slide-in-from-right duration-300">
        
        {/* Drawer Header */}
        <div className="p-6 border-b border-[#EFE8DE] flex items-center justify-between bg-[#EFE8DE]/40">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#3D2B1F] text-[#C86D51] flex items-center justify-center shadow-sm">
              <ShoppingBag className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-serif-heading font-bold text-xl text-[#2C221E]">
                Your Order Tray
              </h3>
              <p className="text-xs text-stone-500">
                {cartItems.length} {cartItems.length === 1 ? 'item' : 'items'} selected
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full text-stone-400 hover:text-stone-800 hover:bg-[#EFE8DE] transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Drawer Body - Items List */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          {cartItems.length > 0 ? (
            cartItems.map(({ menuItem, quantity }) => (
              <div
                key={menuItem.id}
                className="flex items-center gap-4 p-3.5 rounded-2xl bg-white border border-[#EFE8DE] shadow-sm"
              >
                <img
                  src={menuItem.image}
                  alt={menuItem.title}
                  className="w-16 h-16 rounded-xl object-cover shrink-0"
                />

                <div className="flex-1 min-w-0">
                  <h4 className="font-serif-heading font-bold text-sm text-[#2C221E] truncate">
                    {menuItem.title}
                  </h4>
                  <p className="text-xs font-semibold text-[#C86D51]">
                    ${(menuItem.price * quantity).toFixed(2)}
                  </p>

                  <div className="flex items-center gap-2 mt-2">
                    <div className="flex items-center bg-[#EFE8DE] rounded-lg p-0.5 border border-[#D8C4B6]">
                      <button
                        onClick={() => onUpdateQuantity(menuItem.id, -1)}
                        className="p-1 text-stone-700 hover:text-red-600 transition-colors"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="px-2 text-xs font-bold text-[#2C221E]">
                        {quantity}
                      </span>
                      <button
                        onClick={() => onUpdateQuantity(menuItem.id, 1)}
                        className="p-1 text-stone-700 hover:text-emerald-600 transition-colors"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>

                    <button
                      onClick={() => onUpdateQuantity(menuItem.id, -quantity)}
                      className="text-stone-400 hover:text-red-500 p-1 text-xs"
                      title="Remove item"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center py-16 text-stone-500">
              <Coffee className="w-12 h-12 text-stone-300 mx-auto mb-3" />
              <h4 className="font-serif-heading font-bold text-base text-[#2C221E]">
                Your tray is currently empty
              </h4>
              <p className="text-xs mt-1 max-w-xs mx-auto">
                Explore our artisanal menu and add your favorite brews, pastries, or avocado toast.
              </p>
            </div>
          )}

          {cartItems.length > 0 && (
            <div className="pt-4 border-t border-[#EFE8DE] space-y-3">
              <div>
                <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-1.5">
                  Order Preference
                </label>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => setOrderType('dine-in')}
                    className={`py-2 px-3 rounded-xl text-xs font-bold border transition-all ${
                      orderType === 'dine-in'
                        ? 'bg-[#3D2B1F] text-white border-[#3D2B1F]'
                        : 'bg-white text-stone-700 border-stone-300 hover:bg-[#EFE8DE]'
                    }`}
                  >
                    Dine-In
                  </button>
                  <button
                    type="button"
                    onClick={() => setOrderType('takeaway')}
                    className={`py-2 px-3 rounded-xl text-xs font-bold border transition-all ${
                      orderType === 'takeaway'
                        ? 'bg-[#3D2B1F] text-white border-[#3D2B1F]'
                        : 'bg-white text-stone-700 border-stone-300 hover:bg-[#EFE8DE]'
                    }`}
                  >
                    Takeaway / Pickup
                  </button>
                </div>
              </div>

              {orderType === 'dine-in' && (
                <div>
                  <input
                    type="text"
                    placeholder="Table Number (Optional if ordering from table)"
                    value={tableNumber}
                    onChange={(e) => setTableNumber(e.target.value)}
                    className="w-full px-3.5 py-2 text-xs bg-white rounded-xl border border-stone-300 outline-none focus:border-[#C86D51]"
                  />
                </div>
              )}

              <div>
                <input
                  type="text"
                  placeholder="Special Instructions (e.g. Extra hot, Oat milk)"
                  value={orderNote}
                  onChange={(e) => setOrderNote(e.target.value)}
                  className="w-full px-3.5 py-2 text-xs bg-white rounded-xl border border-stone-300 outline-none focus:border-[#C86D51]"
                />
              </div>
            </div>
          )}
        </div>

        {/* Drawer Footer - Price & Checkout */}
        {cartItems.length > 0 && (
          <div className="p-6 bg-white border-t border-[#EFE8DE] space-y-4 shadow-lg">
            <div className="space-y-1.5 text-xs text-stone-600">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>Estimated Tax (5%)</span>
                <span>${tax.toFixed(2)}</span>
              </div>
              <div className="flex justify-between pt-2 border-t border-stone-200 text-sm font-bold text-[#2C221E]">
                <span>Total Amount</span>
                <span className="text-[#C86D51] font-serif-heading text-lg">
                  ${total.toFixed(2)}
                </span>
              </div>
            </div>

            <button
              onClick={handleWhatsAppCheckout}
              className="w-full py-3.5 rounded-xl bg-[#C86D51] hover:bg-[#b05a40] text-white font-bold text-sm flex items-center justify-center gap-2 shadow-md hover:shadow-lg transition-all"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Send Order to WhatsApp</span>
            </button>

            <button
              onClick={onClearCart}
              className="w-full text-center text-[11px] font-semibold text-stone-400 hover:text-red-500 transition-colors"
            >
              Clear Order Tray
            </button>
          </div>
        )}

      </div>
    </div>
  );
};
