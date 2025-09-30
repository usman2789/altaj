'use client';

import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

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
  id,
  name,
  slug,
  shortDescription,
  price,
  priceRange,
  image,
  category
}) => {
  const displayPrice = price || priceRange || 'Price on request';
  const [imageError, setImageError] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  // Intersection Observer for mobile scroll detection
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.intersectionRatio >= 0.7);
      },
      {
        threshold: [0, 0.3, 0.7, 1],
        rootMargin: '-50px 0px -50px 0px'
      }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);
  
  const PlaceholderImage = () => (
    <div className="w-full h-full bg-gradient-to-br from-[#D4A541]/20 to-[#040402] flex items-center justify-center">
      <div className="text-center p-4">
        <div className="text-[#D4A541] text-3xl mb-3">🍽️</div>
        <h4 className="text-white text-sm font-bold mb-1">Al Taj Restaurant</h4>
        <p className="text-gray-300 text-xs">Image Coming Soon</p>
        <p className="text-[#D4A541] text-xs mt-2 font-medium">{category}</p>
      </div>
    </div>
  );

  return (
    <Link href={`/menu/${slug}`} className="block">
      <div 
        ref={cardRef}
        className={`group bg-[#040402] border border-[#D4A541]/20 rounded-xl overflow-hidden transition-all duration-500 cursor-pointer
          ${isInView 
            ? 'border-[#D4A541]/60 shadow-lg shadow-[#D4A541]/20 -translate-y-2' 
            : 'hover:border-[#D4A541]/60 hover:shadow-lg hover:shadow-[#D4A541]/20 hover:-translate-y-2'
          }`}
      >
        {/* Image Container - Optimized for 555×592 (1:1.07 ratio) */}
        <div className="relative w-full overflow-hidden bg-gradient-to-br from-[#D4A541]/5 to-transparent">
          <div className="aspect-[555/592] relative">
            {imageError ? (
              <PlaceholderImage />
            ) : (
              <Image
                src={image}
                alt={`${name} - ${shortDescription}`}
                fill
                className={`object-cover transition-transform duration-500 
                  ${isInView ? 'scale-110' : 'group-hover:scale-110'}
                `}
                sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGBkbHB0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                priority={false}
                onError={() => {
                  console.error(`Failed to load image: ${image}`);
                  setImageError(true);
                }}
              />
            )}
          </div>
          
          {/* Category Badge */}
          <div className="absolute top-3 left-3 z-10">
            <span className="bg-[#D4A541]/90 backdrop-blur-sm text-[#040402] text-xs font-bold px-2 py-1 rounded-full shadow-lg">
              {category}
            </span>
          </div>

          {/* Price Badge */}
          <div className="absolute top-3 right-3 z-10">
            <span className="bg-[#040402]/90 backdrop-blur-sm text-[#D4A541] text-sm font-bold px-3 py-1 rounded-full border border-[#D4A541]/30 shadow-lg">
              {displayPrice}
            </span>
          </div>

          {/* Hover/Scroll Overlay */}
          <div className={`absolute inset-0 bg-gradient-to-t from-[#040402]/80 via-transparent to-transparent transition-opacity duration-300 z-10
            ${isInView 
              ? 'opacity-100' 
              : 'opacity-0 group-hover:opacity-100'
            } md:block`}
          >
            <div className="absolute bottom-4 left-4 right-4">
              <button className={`w-full bg-[#D4A541] hover:bg-[#B8941A] text-[#040402] font-bold py-2 px-4 rounded-lg transition-all duration-300 shadow-lg transform
                ${isInView 
                  ? 'translate-y-0 opacity-100' 
                  : 'translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100'
                }`}
              >
                View Details
              </button>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-4 sm:p-5">
          <h3 className={`font-bold text-lg sm:text-xl mb-2 transition-colors duration-300 line-clamp-2
            ${isInView ? 'text-[#D4A541]' : 'text-white group-hover:text-[#D4A541]'}
          `}>
            {name}
          </h3>

          <p className={`text-sm sm:text-base leading-relaxed mb-4 line-clamp-2 transition-colors duration-300
            ${isInView ? 'text-gray-200' : 'text-gray-300 group-hover:text-gray-200'}
          `}>
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
            <span className={`font-bold text-xl transition-transform duration-300
              ${isInView ? 'text-[#D4A541] scale-110' : 'text-[#D4A541] group-hover:scale-110'}
            `}>
              {displayPrice}
            </span>
            <div className={`flex items-center space-x-2 transition-opacity duration-300
              ${isInView ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}
            `}>
              <button className="bg-[#D4A541]/10 hover:bg-[#D4A541]/20 text-[#D4A541] font-medium py-2 px-4 rounded-lg border border-[#D4A541]/30 transition-colors duration-200">
                Order
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Accent Line */}
        <div className={`h-1 bg-gradient-to-r from-transparent to-transparent transition-colors duration-300
          ${isInView 
            ? 'via-[#D4A541]' 
            : 'via-[#D4A541]/50 group-hover:via-[#D4A541]'
          }`}
        />
      </div>
    </Link>
  );
};

export default DishCard;