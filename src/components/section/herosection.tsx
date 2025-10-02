'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

interface HeroSlide {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  dishes: {
    left: string;
    center: string;
    right: string;
  };
}

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [progress, setProgress] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const slides: HeroSlide[] = [
    {
      id: 1,
      title: 'Seasonal Delights',
      subtitle: 'PLATES OF PERFECTION',
      description: 'Experience the best of each season with our menu, featuring fresh, locally sourced ingredients. Savor the vibrant tastes of nature&apos;s bounty.',
      dishes: {
        left: '/hero/p12.png',
        center: '/hero/p13.png',
        right: '/hero/p14.png'
      }
    },
    {
      id: 2,
      title: 'Chef&apos;s Creations',
      subtitle: 'PLATES OF PERFECTION',
      description: 'Indulge in the artistry of our chef&apos;s specialties, where culinary expertise meets innovative flair.',
      dishes: {
        left: '/hero/p4.png',
        center: '/hero/p5.png',
        right: '/hero/p6.png'
      }
    },
    {
      id: 3,
      title: 'Gourmet Experience',
      subtitle: 'PLATES OF PERFECTION',
      description: 'Discover an exceptional dining journey with meticulously crafted dishes that celebrate flavors from around the world.',
      dishes: {
        left: '/hero/p7.png',
        center: '/hero/p8.png',
        right: '/hero/p9.png'
      }
    }
  ];

  // Auto-play functionality with progress
  useEffect(() => {
    if (!isAutoPlaying) return;

    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          return 0;
        }
        return prev + 0.5; // Increment by 0.5% every 50ms = 10 seconds total
      });
    }, 50);

    return () => clearInterval(progressInterval);
  }, [isAutoPlaying]);

  // Change slide when progress reaches 100%
  useEffect(() => {
    if (progress >= 100) {
      nextSlide();
      setProgress(0);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [progress]);

  const nextSlide = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
      setProgress(0);
      setIsAutoPlaying(true);
      setTimeout(() => setIsTransitioning(false), 100);
    }, 600);
  };

  const prevSlide = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
      setProgress(0);
      setIsAutoPlaying(true);
      setTimeout(() => setIsTransitioning(false), 100);
    }, 600);
  };

  const goToSlide = (index: number) => {
    if (index === currentSlide) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentSlide(index);
      setProgress(0);
      setIsAutoPlaying(true);
      setTimeout(() => setIsTransitioning(false), 100);
    }, 600);
  };

  // Calculate circumference for the progress circle
  const radius = 47; // Percentage radius
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  return (
    <section className="relative min-h-screen bg-black overflow-hidden">
      {/* Background Image with Overlay - More Blur */}
      <div className="absolute inset-0">
        <Image
          src="/hero/b2.jpg"
          alt="Restaurant Background"
          fill
          className="object-cover opacity-30 blur-sm"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/80"></div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 py-20">
        
        {/* Subtitle with Logo */}
        <div className="flex items-center gap-3 mb-6 animate-fade-in">
          <div className="w-3 h-3 rounded-full bg-[#FFC700] animate-pulse"></div>
          <h2 className="text-white text-sm sm:text-base lg:text-lg font-medium tracking-[0.3em] uppercase">
            {slides[currentSlide].subtitle}
          </h2>
          <div className="w-3 h-3 rounded-full bg-[#FFC700] animate-pulse"></div>
        </div>

        {/* Main Title */}
        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white text-center mb-12 sm:mb-16 lg:mb-20 font-serif tracking-tight animate-slide-up">
          {slides[currentSlide].title}
        </h1>

        {/* Dishes Display */}
        <div className="flex items-center justify-center gap-4 sm:gap-6 lg:gap-8 mb-8 sm:mb-12 lg:mb-16 flex-wrap max-w-6xl mx-auto">
          
          {/* Left Dish - Hidden on Mobile */}
          <div 
            className={`hidden lg:block relative w-56 h-56 transition-all duration-700 ${
              isTransitioning ? 'animate-dish-spin-out' : 'animate-dish-spin-in'
            }`}
          >
            {/* Rotating White Border Ring */}
            <svg 
              className="absolute inset-0 w-full h-full animate-spin-slow pointer-events-none" 
              style={{ animationDuration: '20s' }}
            >
              <circle
                cx="50%"
                cy="50%"
                r="48%"
                stroke="rgba(255, 255, 255, 0.3)"
                strokeWidth="2"
                fill="none"
                strokeDasharray="8 8"
              />
            </svg>
            
            {/* Dish Image */}
            <div className="relative w-full h-full rounded-full overflow-hidden shadow-2xl transform transition-all duration-700 hover:scale-105">
              <Image
                src={slides[currentSlide].dishes.left}
                alt="Dish 1"
                fill
                className="object-cover transition-transform duration-700"
              />
            </div>
          </div>

          {/* Center Dish with Progress Circle */}
          <div 
            className={`relative w-40 h-40 sm:w-48 sm:h-48 lg:w-64 lg:h-64 transition-all duration-700 ${
              isTransitioning ? 'animate-dish-spin-out' : 'animate-dish-spin-in'
            }`}
          >
            {/* Rotating White Border Ring (Background) */}
            <svg 
              className="absolute inset-0 w-full h-full animate-spin-slow pointer-events-none" 
              style={{ animationDuration: '20s' }}
            >
              <circle
                cx="50%"
                cy="50%"
                r="48%"
                stroke="rgba(255, 255, 255, 0.3)"
                strokeWidth="3"
                fill="none"
                strokeDasharray="10 10"
              />
            </svg>

            {/* Yellow Progress Loader - Moves along the border */}
            <svg 
              className="absolute inset-0 w-full h-full -rotate-90 pointer-events-none" 
              style={{ filter: 'drop-shadow(0 0 15px rgba(255, 199, 0, 0.8))' }}
            >
              <circle
                cx="50%"
                cy="50%"
                r="48%"
                stroke="#FFC700"
                strokeWidth="4"
                fill="none"
                strokeDasharray={circumference}
                strokeDashoffset={strokeDashoffset}
                strokeLinecap="round"
                className="transition-all duration-100 ease-linear"
              />
            </svg>

            {/* Dish Image - Center */}
            <div 
              className="absolute inset-0 w-[90%] h-[90%] m-auto rounded-full overflow-hidden shadow-2xl transform transition-all duration-700 hover:scale-105 z-10"
            >
              <Image
                src={slides[currentSlide].dishes.center}
                alt="Featured Dish"
                fill
                className="object-cover transition-transform duration-700"
              />
            </div>
          </div>

          {/* Right Dish - Hidden on Mobile */}
          <div 
            className={`hidden lg:block relative w-56 h-56 transition-all duration-700 ${
              isTransitioning ? 'animate-dish-spin-out' : 'animate-dish-spin-in'
            }`}
          >
            {/* Rotating White Border Ring */}
            <svg 
              className="absolute inset-0 w-full h-full animate-spin-slow pointer-events-none" 
              style={{ animationDuration: '20s' }}
            >
              <circle
                cx="50%"
                cy="50%"
                r="48%"
                stroke="rgba(255, 255, 255, 0.3)"
                strokeWidth="2"
                fill="none"
                strokeDasharray="8 8"
              />
            </svg>
            
            {/* Dish Image */}
            <div className="relative w-full h-full rounded-full overflow-hidden shadow-2xl transform transition-all duration-700 hover:scale-105">
              <Image
                src={slides[currentSlide].dishes.right}
                alt="Dish 3"
                fill
                className="object-cover transition-transform duration-700"
              />
            </div>
          </div>
        </div>

        {/* Description */}
        <p className="text-gray-300 text-center text-sm sm:text-base lg:text-lg max-w-3xl mx-auto mb-10 sm:mb-12 lg:mb-16 leading-relaxed px-4 animate-fade-in">
          {slides[currentSlide].description}
        </p>

        {/* Navigation Controls */}
        <div className="flex items-center gap-4 sm:gap-6">
          {/* Previous Button */}
          <button
            onClick={prevSlide}
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
            disabled={isTransitioning}
            aria-label="Previous slide"
            className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center hover:bg-white/20 transition-all duration-300 hover:scale-110 active:scale-105 group touch-manipulation disabled:opacity-50"
          >
            <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Book a Table Button */}
          <button
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
            className="px-8 py-3 sm:px-10 sm:py-4 lg:px-12 lg:py-4 bg-[#FFC700] text-black font-bold text-sm sm:text-base lg:text-lg rounded-full hover:bg-[#FFD700] transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-[#FFC700]/50 active:scale-100 uppercase tracking-wider touch-manipulation"
          >
            BOOK A TABLE
          </button>

          {/* Next Button */}
          <button
            onClick={nextSlide}
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
            disabled={isTransitioning}
            aria-label="Next slide"
            className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-full bg-[#FFC700] flex items-center justify-center hover:bg-[#FFD700] transition-all duration-300 hover:scale-110 active:scale-105 hover:shadow-2xl hover:shadow-[#FFC700]/50 group touch-manipulation disabled:opacity-50"
          >
            <svg className="w-5 h-5 sm:w-6 sm:h-6 text-black group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Slide Indicators */}
        <div className="flex items-center gap-3 mt-10 sm:mt-12">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              onMouseEnter={() => setIsAutoPlaying(false)}
              onMouseLeave={() => setIsAutoPlaying(true)}
              disabled={isTransitioning}
              aria-label={`Go to slide ${index + 1}`}
              className={`transition-all duration-300 rounded-full touch-manipulation disabled:opacity-50 ${
                index === currentSlide
                  ? 'w-10 h-2 sm:w-12 sm:h-2 bg-[#FFC700]'
                  : 'w-2 h-2 bg-white/40 hover:bg-white/60 hover:scale-125'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Year Badge */}
      <div className="absolute bottom-8 left-8 text-white font-bold text-xl sm:text-2xl opacity-50">
        <div>20</div>
        <div>24</div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes slide-up {
          from { 
            opacity: 0;
            transform: translateY(30px);
          }
          to { 
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        @keyframes dish-spin-out {
          0% {
            opacity: 1;
            transform: rotate(0deg) scale(1);
          }
          100% {
            opacity: 0;
            transform: rotate(360deg) scale(0.8);
          }
        }

        @keyframes dish-spin-in {
          0% {
            opacity: 0;
            transform: rotate(-360deg) scale(0.8);
          }
          100% {
            opacity: 1;
            transform: rotate(0deg) scale(1);
          }
        }
        
        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }
        
        .animate-slide-up {
          animation: slide-up 0.8s ease-out;
        }

        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }

        .animate-dish-spin-out {
          animation: dish-spin-out 0.6s ease-in-out forwards;
        }

        .animate-dish-spin-in {
          animation: dish-spin-in 0.7s ease-out forwards;
        }
      `}</style>
    </section>
  );
};

export default HeroSection;