'use client';

import React, { useState, useEffect, useCallback, useMemo } from 'react';
import Link from 'next/link';

interface Testimonial {
  id: number;
  name: string;
  location: string;
  rating: number;
  comment: string;
  dish?: string;
}

// Move testimonials data outside component to prevent recreation on every render
const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: 'Emma Rodriguez',
    location: 'Milano, Italia',
    rating: 5,
    comment: 'Incredibile esperienza culinaria! I sapori autentici Pak-Indiani sono semplicemente perfetti. Il Chicken Biryani era delizioso e il servizio impeccabile. Torneremo sicuramente!',
    dish: 'Chicken Biryani'
  },
  {
    id: 2,
    name: 'Marco Albertini',
    location: 'Brescia, Italia',
    rating: 5,
    comment: 'Al Taj è diventato il nostro ristorante preferito! Ogni piatto è preparato con amore e ingredienti freschi. L\'atmosfera familiare e il personale cordiale rendono ogni visita speciale.',
    dish: 'Tandoori Mix Grill'
  },
  {
    id: 3,
    name: 'Sofia Benedetti',
    location: 'Verona, Italia',
    rating: 5,
    comment: 'Una scoperta fantastica! La cucina autentica e i sapori ricchi mi hanno conquistato. Il Lamb Curry era spettacolare. Ambiente elegante e servizio professionale. Altamente raccomandato!',
    dish: 'Lamb Curry'
  },
  {
    id: 4,
    name: 'Alessandro Rossi',
    location: 'Bergamo, Italia',
    rating: 5,
    comment: 'Qualità eccezionale e prezzi onesti. La passione per la cucina traspare in ogni piatto. Il personale è sempre sorridente e disponibile. Un vero gioiello a Brescia!',
    dish: 'Butter Chicken'
  }
];

// Memoized star rendering component
const StarRating = React.memo(({ rating }: { rating: number }) => {
  return (
    <>
      {Array.from({ length: 5 }, (_, index) => (
        <svg
          key={index}
          className={`w-5 h-5 ${index < rating ? 'text-[#A48134]' : 'text-gray-300'}`}
          fill="currentColor"
          viewBox="0 0 20 20"
          aria-hidden="true"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </>
  );
});

StarRating.displayName = 'StarRating';

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Get current testimonial
  const currentTestimonial = useMemo(() => TESTIMONIALS[currentSlide], [currentSlide]);

  // Auto-play carousel
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  // Memoized navigation functions
  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % TESTIMONIALS.length);
    setIsAutoPlaying(false);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
    setIsAutoPlaying(false);
  }, []);

  const goToSlide = useCallback((index: number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
  }, []);

  return (
    <section className="py-16 lg:py-24 bg-black relative overflow-hidden">
      {/* Premium Background Decorative Elements */}
      <div className="absolute inset-0">
        {/* Animated Golden Particles */}
        <div className="absolute top-20 left-10 w-2 h-2 bg-[#A48134] rounded-full animate-pulse opacity-60"></div>
        <div className="absolute top-40 right-20 w-3 h-3 bg-[#a57f2cff] rounded-full animate-bounce opacity-40 delay-500"></div>
        <div className="absolute bottom-32 left-1/4 w-2 h-2 bg-[#A48134] rounded-full animate-pulse opacity-50 delay-1000"></div>
        <div className="absolute top-1/3 right-1/4 w-1 h-1 bg-[#a57f2cff] rounded-full animate-ping opacity-30"></div>
        
        {/* Golden Gradient Overlays */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-radial from-[#A48134]/10 to-transparent rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-radial from-[#a57f2cff]/10 to-transparent rounded-full blur-3xl animate-pulse delay-[2s]"></div>
        
        {/* Geometric Patterns */}
        <div className="absolute top-1/4 left-12 w-20 h-20 border border-[#A48134]/20 rotate-45 animate-spin" style={{ animationDuration: '20s' }}></div>
        <div className="absolute bottom-1/4 right-12 w-16 h-16 border-2 border-[#a57f2cff]/20 rounded-full animate-pulse"></div>
      </div>

      {/* Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-12 lg:mb-16">
          {/* Subtitle with Premium Golden Line */}
          <div className="inline-flex items-center mb-4">
            <div className="h-px bg-gradient-to-r from-transparent via-[#A48134] to-[#a57f2cff] w-16 mr-4 animate-pulse"></div>
            <span className="text-[#A48134] font-serif text-lg font-medium tracking-wide">
              Testimonianze
            </span>
            <div className="h-px bg-gradient-to-l from-transparent via-[#a57f2cff] to-[#A48134] w-16 ml-4 animate-pulse"></div>
          </div>
          
          {/* Main Title with Stagger Animation */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white mb-6">
            Le Vostre <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#A48134] to-[#a57f2cff]">Opinioni</span>
            <span className="block mt-2">Ci Rendono Fieri</span>
          </h2>
          
          {/* Description */}
          <p className="text-gray-300 text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed font-serif">
            Scoprite cosa dicono i nostri clienti della loro esperienza culinaria 
            al AL TAJ RISTORANTE. Ogni recensione è una storia di sapori autentici.
          </p>
        </div>

        {/* Testimonials Carousel Container */}
        <div className="relative max-w-6xl mx-auto">
          
          {/* Main Testimonial Card - Enhanced with mobile interactions */}
          <div className="bg-gradient-to-br from-gray-900 to-black rounded-2xl shadow-2xl overflow-hidden border border-[#A48134]/30 relative backdrop-blur-sm group cursor-pointer">
            {/* Premium Golden Border Accent */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#A48134] via-[#a57f2cff] to-[#A48134]"></div>
            
            <div className="min-h-[400px] flex items-center justify-center">
              
              {/* Content Section with Premium Black Styling - Full Width */}
              <div className="p-8 sm:p-10 lg:p-16 flex flex-col justify-center w-full max-w-4xl mx-auto text-center">
                
                {/* Premium Quote Icon */}
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#A48134] to-[#a57f2cff] rounded-full flex items-center justify-center shadow-lg animate-pulse">
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
                    </svg>
                  </div>
                </div>
                
                {/* Stars Rating with Golden Theme */}
                <div className="flex items-center justify-center mb-6 lg:mb-8">
                  <div className="flex space-x-1 mr-3">
                    <StarRating rating={currentTestimonial.rating} />
                  </div>
                  <span className="text-[#A48134] font-serif text-base lg:text-lg font-medium">
                    Eccellente
                  </span>
                </div>

                {/* Testimonial Text */}
                <blockquote className="text-gray-200 text-lg sm:text-xl lg:text-2xl font-serif leading-relaxed mb-8 lg:mb-10 italic px-4 lg:px-8">
                  &ldquo;{currentTestimonial.comment}&rdquo;
                </blockquote>

                {/* Customer Info with Premium Styling */}
                <div className="border-t border-[#A48134]/30 pt-6 lg:pt-8 mt-4">
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-12">
                    <div className="text-center sm:text-left">
                      <h4 className="text-xl lg:text-2xl font-serif font-bold text-white mb-2 hover:text-[#A48134] transition-colors duration-300">
                        {currentTestimonial.name}
                      </h4>
                      <p className="text-gray-400 font-serif text-sm lg:text-base flex items-center justify-center sm:justify-start gap-2">
                        <svg className="w-4 h-4 text-[#A48134]" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                          <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                        </svg>
                        {currentTestimonial.location}
                      </p>
                    </div>
                    
                    {/* Favorite Dish with Golden Accent */}
                    {currentTestimonial.dish && (
                      <div className="text-center sm:text-left px-6 py-3 bg-[#A48134]/10 rounded-lg border border-[#A48134]/30">
                        <p className="text-xs lg:text-sm text-gray-400 font-serif mb-1">Piatto Preferito</p>
                        <p className="text-base lg:text-lg text-[#A48134] font-serif font-bold">
                          {currentTestimonial.dish}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Premium Navigation Arrows - Enhanced mobile touch - Fixed positioning */}
          <button
            onClick={prevSlide}
            aria-label="Previous testimonial"
            className="absolute left-2 lg:left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-br from-[#A48134] to-[#a57f2cff] rounded-full shadow-2xl border border-[#A48134]/50 flex items-center justify-center text-white hover:shadow-[#A48134]/50 hover:shadow-2xl hover:scale-110 active:shadow-2xl active:scale-110 transition-all duration-300 group touch-manipulation"
          >
            <svg className="w-5 h-5 lg:w-6 lg:h-6 transform group-hover:scale-110 group-active:scale-110 active:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={nextSlide}
            aria-label="Next testimonial"
            className="absolute right-2 lg:right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-br from-[#A48134] to-[#a57f2cff] rounded-full shadow-2xl border border-[#A48134]/50 flex items-center justify-center text-white hover:shadow-[#A48134]/50 hover:shadow-2xl hover:scale-110 active:shadow-2xl active:scale-110 transition-all duration-300 group touch-manipulation"
          >
            <svg className="w-5 h-5 lg:w-6 lg:h-6 transform group-hover:scale-110 group-active:scale-110 active:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Premium Dots Navigation - Enhanced mobile touch */}
        <div className="flex items-center justify-center mt-8 space-x-3">
          {TESTIMONIALS.map((testimonial, index) => (
            <button
              key={testimonial.id}
              onClick={() => goToSlide(index)}
              aria-label={`Go to testimonial ${index + 1}`}
              className={`rounded-full transition-all duration-300 hover:scale-125 active:scale-125 touch-manipulation ${
                index === currentSlide
                  ? 'w-8 h-3 bg-gradient-to-r from-[#A48134] to-[#a57f2cff] animate-pulse'
                  : 'w-3 h-3 bg-gray-600 hover:bg-[#A48134]/70 active:bg-[#A48134]/70'
              }`}
            />
          ))}
        </div>

        {/* Premium Stats Section - Enhanced mobile animations */}
        <div className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          <div className="group cursor-pointer">
            <div className="text-3xl lg:text-4xl font-serif font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#A48134] to-[#a57f2cff] mb-2 group-hover:scale-110 group-active:scale-110 active:scale-110 transition-transform duration-300 touch-manipulation">
              500+
            </div>
            <p className="text-gray-400 font-serif group-hover:text-gray-300 group-active:text-gray-300 active:text-gray-300 transition-colors duration-300">Clienti Soddisfatti</p>
          </div>
          
          <div className="group cursor-pointer">
            <div className="text-3xl lg:text-4xl font-serif font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#A48134] to-[#a57f2cff] mb-2 group-hover:scale-110 group-active:scale-110 active:scale-110 transition-transform duration-300 touch-manipulation">
              4.9★
            </div>
            <p className="text-gray-400 font-serif group-hover:text-gray-300 group-active:text-gray-300 active:text-gray-300 transition-colors duration-300">Valutazione Media</p>
          </div>
          
          <div className="group cursor-pointer">
            <div className="text-3xl lg:text-4xl font-serif font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#A48134] to-[#a57f2cff] mb-2 group-hover:scale-110 group-active:scale-110 active:scale-110 transition-transform duration-300 touch-manipulation">
              2+
            </div>
            <p className="text-gray-400 font-serif group-hover:text-gray-300 group-active:text-gray-300 active:text-gray-300 transition-colors duration-300">Anni di Esperienza</p>
          </div>
          
          <div className="group cursor-pointer">
            <div className="text-3xl lg:text-4xl font-serif font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#A48134] to-[#a57f2cff] mb-2 group-hover:scale-110 group-active:scale-110 active:scale-110 transition-transform duration-300 touch-manipulation">
              100%
            </div>
            <p className="text-gray-400 font-serif group-hover:text-gray-300 group-active:text-gray-300 active:text-gray-300 transition-colors duration-300">Ingredienti Freschi</p>
          </div>
        </div>

        {/* Premium Call to Action - Enhanced mobile touch with table booking link */}
        <div className="mt-16 text-center">
          <p className="text-gray-300 text-lg font-serif italic mb-6">
            Vuoi essere il prossimo a condividere la tua esperienza?
          </p>
          <Link 
            href="/tablebooking"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-[#A48134] to-[#a57f2cff] text-white font-serif text-lg font-medium rounded-full hover:shadow-2xl hover:shadow-[#A48134]/50 hover:scale-105 active:shadow-2xl active:shadow-[#A48134]/50 active:scale-105 transition-all duration-300 group animate-pulse hover:animate-none active:animate-none touch-manipulation" 
            style={{ animationDuration: '4s' }}
          >
            <span>Prenota Ora</span>
            <svg 
              className="ml-3 w-5 h-5 group-hover:translate-x-1 group-active:translate-x-1 active:translate-x-1 transition-transform duration-300" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

/*
=== CUSTOMIZATION GUIDE ===

PREMIUM BLACK THEME:
- Background: bg-black with golden decorative elements
- Cards: Gradient from gray-900 to black with golden borders
- Text: White/gray with golden accents and hover effects
- Accent particles: Subtle animated golden dots

ANIMATIONS (Using Tailwind Classes):
- animate-pulse: Pulsing decorative lines and particles (4s duration for button)
- animate-bounce: Bouncing decorative elements (2s duration for quote icon)
- animate-ping: Ping effect for small particles
- animate-spin: Slow spinning geometric patterns (20s duration)
- hover:scale-110: Scale effects on navigation and images
- transition-all duration-300: Smooth transitions

VISUAL ENHANCEMENTS:
- Golden gradient borders and accents
- Decorative background particles with staggered delays
- Animated quote icon with slower bounce
- Hover effects on navigation arrows
- Decorative rings around customer images

RESPONSIVE DESIGN:
- Mobile: Single column, smaller images (w-32 h-32), stacked content
- Desktop: Two-column layout with larger images (w-40 h-40)
- Breakpoints: Tailored for all screen sizes

PERFORMANCE OPTIMIZATIONS:
- Removed broken styled-jsx code
- Uses only Tailwind CSS classes
- No JavaScript animations for better performance
- Hardware-accelerated transforms for smooth animations

- Location names (Milano, Brescia, etc.)
- Restaurant-specific language
- Authentic customer names and reviews

STYLING:
- Golden color scheme (#A48134, #a57f2cff)
- Serif typography for elegance
- White cards with subtle shadows
- Gradient backgrounds and accents

          50% { box-shadow: 0 0 30px rgba(164, 129, 52, 0.6); }
        }
        
        .animate-shimmer {
          background-size: 200% 100%;
          animation: shimmer 3s linear infinite;
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
        
        .animate-bounce-slow {
          animation: bounce-slow 2s ease-in-out infinite;
        }
        
        .animate-bounce-x {
          animation: bounce-x 2s ease-in-out infinite;
        }
        
        .animate-slide-up {
          animation: slide-up 0.8s ease-out forwards;
        }
        
        .animate-fade-in {
          animation: fade-in 1s ease-out forwards;
        }
        
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
        
        .animate-glow {
          animation: glow 2s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default Testimonials;

/*
=== CUSTOMIZATION GUIDE ===

CAROUSEL FUNCTIONALITY:
- Auto-play: Changes slide every 5 seconds (modify interval duration)
- Manual Navigation: Arrow buttons and dot indicators
- Pause on Interaction: Auto-play stops when user interacts
- Smooth Transitions: CSS transitions for all animations

RESPONSIVE DESIGN:
- Mobile: Single column, smaller images, stacked content
- Desktop: Two-column layout with side-by-side image and content
- Breakpoints: Tailored for all screen sizes

VISUAL ENHANCEMENTS:
- Golden gradient borders and accents
- Decorative background elements
- Animated quote icon in corner
- Hover effects on navigation
- Pulsing decorative ring around images

CONTENT CUSTOMIZATION:
- Testimonials Array: Easy to add/modify reviews
- Star Ratings: Visual 5-star system
- Customer Info: Name, location, favorite dish
- Stats Section: Customizable achievement numbers

ANIMATIONS:
- Smooth slide transitions
- Hover scale effects
- Button animations
- Auto-playing carousel with pause on hover

ITALIAN THEME:
- Italian testimonial content
- Location names (Milano, Brescia, etc.)
- Restaurant-specific language
- Authentic customer names and reviews

STYLING:
- Golden color scheme (#A48134, #a57f2cff)
- Serif typography for elegance
- White cards with subtle shadows
- Gradient backgrounds and accents
*/
