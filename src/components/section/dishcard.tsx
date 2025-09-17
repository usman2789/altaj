  import React from 'react';
import Image from 'next/image';

interface DishCardProps {
  id: number;
  name: string;
  slug: string;
  shortDescription: string;
  description: string;
  price?: string;
  priceRange?: string;
  image: string;
  category: string;
}

const DishCard: React.FC<DishCardProps> = ({
  name,
  shortDescription,
  price,
  priceRange,
  image,
  category
}) => {
  const displayPrice = price || priceRange || 'Price on request';

  return (
    <div className="group bg-[#040402] border border-[#D4A541]/20 rounded-xl overflow-hidden hover:border-[#D4A541]/60 transition-all duration-300 hover:shadow-lg hover:shadow-[#D4A541]/20 hover:-translate-y-2">
      {/* Image Container */}
      <div className="relative h-48 sm:h-52 md:h-56 lg:h-60 overflow-hidden bg-gradient-to-br from-[#D4A541]/5 to-transparent">
        <Image
          src={image}
          alt={`${name} - ${shortDescription}`}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-500"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          placeholder="blur"
          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGBkbHB0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
        />
        
        {/* Category Badge */}
        <div className="absolute top-3 left-3">
          <span className="bg-[#D4A541]/90 backdrop-blur-sm text-[#040402] text-xs font-bold px-2 py-1 rounded-full">
            {category}
          </span>
        </div>

        {/* Price Badge */}
        <div className="absolute top-3 right-3">
          <span className="bg-[#040402]/80 backdrop-blur-sm text-[#D4A541] text-sm font-bold px-3 py-1 rounded-full border border-[#D4A541]/30">
            {displayPrice}
          </span>
        </div>

        {/* Hover Overlay - Only visible on desktop */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#040402]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 hidden md:block">
          <div className="absolute bottom-4 left-4 right-4">
            <button className="w-full bg-[#D4A541] hover:bg-[#B8941A] text-[#040402] font-bold py-2 px-4 rounded-lg transition-colors duration-200 transform translate-y-4 group-hover:translate-y-0">
              View Details
            </button>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-4 sm:p-5">
        {/* Dish Name */}
        <h3 className="text-white font-bold text-lg sm:text-xl mb-2 group-hover:text-[#D4A541] transition-colors duration-300 line-clamp-2">
          {name}
        </h3>

        {/* Short Description */}
        <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-4 line-clamp-2 group-hover:text-gray-200 transition-colors duration-300">
          {shortDescription}
        </p>

        {/* Price and Action - Mobile Version */}
        <div className="flex items-center justify-between md:hidden">
          <span className="text-[#D4A541] font-bold text-lg">
            {displayPrice}
          </span>
          <button className="bg-[#D4A541]/10 hover:bg-[#D4A541]/20 text-[#D4A541] font-medium py-2 px-4 rounded-lg border border-[#D4A541]/30 transition-colors duration-200">
            Order
          </button>
        </div>

        {/* Desktop Price Display */}
        <div className="hidden md:flex items-center justify-between">
          <span className="text-[#D4A541] font-bold text-xl group-hover:scale-110 transition-transform duration-300">
            {displayPrice}
          </span>
          <div className="flex items-center space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <button className="bg-[#D4A541]/20 hover:bg-[#D4A541]/30 text-[#D4A541] p-2 rounded-full transition-colors duration-200">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Accent Line */}
      <div className="h-1 bg-gradient-to-r from-transparent via-[#D4A541]/50 to-transparent group-hover:via-[#D4A541] transition-colors duration-300"></div>
    </div>
  );
};

export default DishCard;