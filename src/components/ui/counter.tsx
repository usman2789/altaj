'use client';

import { useState } from 'react';

interface QuantityOrderButtonsProps {
  dishName: string;
  displayPrice: string;
}

export default function QuantityOrderButtons({ dishName, displayPrice }: QuantityOrderButtonsProps) {
  const [quantity, setQuantity] = useState(1);

  const handleIncrement = () => {
    setQuantity(prev => prev + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(prev => prev - 1);
    }
  };

  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    if (value > 0) {
      setQuantity(value);
    }
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center space-x-4">
        <label className="text-white font-medium">Quantity:</label>
        <div className="flex items-center border border-[#D4A541]/30 rounded-lg bg-[#040402]">
          <button 
            onClick={handleDecrement}
            className="px-4 py-2 text-[#D4A541] hover:bg-[#D4A541]/10 transition-colors font-bold text-xl"
          >
            -
          </button>
          <input 
            type="number" 
            value={quantity}
            onChange={handleQuantityChange}
            min="1" 
            className="w-16 py-2 text-center bg-transparent text-white border-x border-[#D4A541]/30 focus:outline-none"
          />
          <button 
            onClick={handleIncrement}
            className="px-4 py-2 text-[#D4A541] hover:bg-[#D4A541]/10 transition-colors font-bold text-xl"
          >
            +
          </button>
        </div>
      </div>

      {/* Order Buttons Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Add to Cart Button */}
        <button
          className="w-full bg-[#D4A541] hover:bg-[#B8941A] text-[#040402] font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center gap-2"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
          ADD TO CART
        </button>

        {/* WhatsApp Order Button */}
        <a
          href={`https://wa.me/393403366793?text=Ciao,%20vorrei%20ordinare:%20${quantity}x%20${encodeURIComponent(dishName)}%20-%20${encodeURIComponent(displayPrice)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full bg-[#25d366] hover:bg-[#1ebe57] text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center gap-2"
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
          </svg>
          ORDINA SU WHATSAPP
        </a>
      </div>
    </div>
  );
}