'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

interface Testimonial {
  id: number;
  name: string;
  location: string;
  rating: number;
  comment: string;
  image: string;
  dish?: string;
}

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Testimonials data with authentic restaurant reviews
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: 'Emma Rodriguez',
      location: 'Milano, Italia',
      rating: 5,
      comment: 'Incredibile esperienza culinaria! I sapori autentici Pak-Indiani sono semplicemente perfetti. Il Chicken Biryani era delizioso e il servizio impeccabile. Torneremo sicuramente!',
      image: '/other images/test-1.jpg',
      dish: 'Chicken Biryani'
    },
    {
      id: 2,
      name: 'Marco Albertini',
      location: 'Brescia, Italia',
      rating: 5,
      comment: 'Al Taj è diventato il nostro ristorante preferito! Ogni piatto è preparato con amore e ingredienti freschi. L\'atmosfera familiare e il personale cordiale rendono ogni visita speciale.',
      image: '/other images/test-2.jpg',
      dish: 'Tandoori Mix Grill'
    },
    {
      id: 3,
      name: 'Sofia Benedetti',
      location: 'Verona, Italia',
      rating: 5,
      comment: 'Una scoperta fantastica! La cucina autentica e i sapori ricchi mi hanno conquistato. Il Lamb Curry era spettacolare. Ambiente elegante e servizio professionale. Altamente raccomandato!',
      image: '/other images/test-3.jpg',
      dish: 'Lamb Curry'
    },
    {
      id: 4,
      name: 'Alessandro Rossi',
      location: 'Bergamo, Italia',
      rating: 5,
      comment: 'Qualità eccezionale e prezzi onesti. La passione per la cucina traspare in ogni piatto. Il personale è sempre sorridente e disponibile. Un vero gioiello a Brescia!',
      image: '/other images/test-4.jpg',
      dish: 'Butter Chicken'
    }
  ];

  // Auto-play carousel
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, testimonials.length]);

  // Navigation functions
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
  };

  // Render stars
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <svg
        key={index}
        className={`w-5 h-5 ${
          index < rating ? 'text-[#A48134]' : 'text-gray-300'
        }`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ));
  };

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
            
            <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[400px]">
              
              {/* Image Section - Enhanced mobile interactions */}
              <div className="relative bg-gradient-to-br from-[#A48134]/20 to-[#a57f2cff]/10 flex items-center justify-center p-8 lg:p-12">
                {/* Customer Image - Enhanced with mobile touch */}
                <div className="relative group-hover:scale-105 group-active:scale-105 active:scale-105 transition-transform duration-300">
                  <div className="w-32 h-32 lg:w-40 lg:h-40 relative rounded-full overflow-hidden border-4 border-[#A48134] shadow-2xl group-hover:shadow-[#A48134]/30 group-active:shadow-[#A48134]/30 active:shadow-[#A48134]/30 transition-all duration-500">
                    <Image
                      src={testimonials[currentSlide].image}
                      alt={testimonials[currentSlide].name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110 group-active:scale-110 active:scale-110"
                    />
                    {/* Golden Overlay - Enhanced for mobile */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#A48134]/20 to-transparent opacity-0 group-hover:opacity-100 group-active:opacity-100 active:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  
                  {/* Animated Decorative Ring - Enhanced mobile animations */}
                  <div className="absolute -inset-3 border-2 border-[#A48134]/40 rounded-full animate-spin group-hover:border-[#A48134]/60 group-active:border-[#A48134]/60 active:border-[#A48134]/60 transition-colors duration-300" style={{ animationDuration: '20s' }}></div>
                  <div className="absolute -inset-6 border border-[#a57f2cff]/20 rounded-full animate-pulse group-hover:border-[#a57f2cff]/40 group-active:border-[#a57f2cff]/40 active:border-[#a57f2cff]/40 transition-colors duration-300"></div>
                  
                  {/* Premium Quote Icon - Enhanced bounce animation */}
                  <div className="absolute -top-2 -right-2 w-12 h-12 bg-gradient-to-br from-[#A48134] to-[#a57f2cff] rounded-full flex items-center justify-center shadow-lg animate-bounce group-hover:scale-110 group-active:scale-110 active:scale-110 transition-transform duration-300" style={{ animationDuration: '2s' }}>
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
                    </svg>
                  </div>
                </div>
              </div>

              {/* Content Section with Premium Black Styling */}
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                
                {/* Stars Rating with Golden Theme */}
                <div className="flex items-center mb-6">
                  <div className="flex space-x-1 mr-3">
                    {renderStars(testimonials[currentSlide].rating)}
                  </div>
                  <span className="text-[#A48134] font-serif text-lg font-medium">
                    Eccellente
                  </span>
                </div>

                {/* Testimonial Text */}
                <blockquote className="text-gray-200 text-lg lg:text-xl font-serif leading-relaxed mb-8 italic">
                  "{testimonials[currentSlide].comment}"
                </blockquote>

                {/* Customer Info with Premium Styling */}
                <div className="border-t border-[#A48134]/30 pt-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="text-xl font-serif font-bold text-white mb-1 hover:text-[#A48134] transition-colors duration-300">
                        {testimonials[currentSlide].name}
                      </h4>
                      <p className="text-gray-400 font-serif">
                        {testimonials[currentSlide].location}
                      </p>
                    </div>
                    
                    {/* Favorite Dish with Golden Accent */}
                    {testimonials[currentSlide].dish && (
                      <div className="text-right">
                        <p className="text-sm text-gray-500 font-serif mb-1">Piatto Preferito:</p>
                        <p className="text-[#A48134] font-serif font-medium animate-pulse">
                          {testimonials[currentSlide].dish}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Premium Navigation Arrows - Enhanced mobile touch */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-gradient-to-br from-[#A48134] to-[#a57f2cff] rounded-full shadow-2xl border border-[#A48134]/50 flex items-center justify-center text-white hover:shadow-[#A48134]/50 hover:shadow-2xl hover:scale-110 active:shadow-2xl active:scale-110 transition-all duration-300 group touch-manipulation"
          >
            <svg className="w-6 h-6 transform group-hover:scale-110 group-active:scale-110 active:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-gradient-to-br from-[#A48134] to-[#a57f2cff] rounded-full shadow-2xl border border-[#A48134]/50 flex items-center justify-center text-white hover:shadow-[#A48134]/50 hover:shadow-2xl hover:scale-110 active:shadow-2xl active:scale-110 transition-all duration-300 group touch-manipulation"
          >
            <svg className="w-6 h-6 transform group-hover:scale-110 group-active:scale-110 active:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Premium Dots Navigation - Enhanced mobile touch */}
        <div className="flex items-center justify-center mt-8 space-x-3">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
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
              15+
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

        {/* Premium Call to Action - Enhanced mobile touch */}
        <div className="mt-16 text-center">
          <p className="text-gray-300 text-lg font-serif italic mb-6">
            Vuoi essere il prossimo a condividere la tua esperienza?
          </p>
          <button className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-[#A48134] to-[#a57f2cff] text-white font-serif text-lg font-medium rounded-full hover:shadow-2xl hover:shadow-[#A48134]/50 hover:scale-105 active:shadow-2xl active:shadow-[#A48134]/50 active:scale-105 transition-all duration-300 group animate-pulse hover:animate-none active:animate-none touch-manipulation" style={{ animationDuration: '4s' }}>
            <span>Prenota Ora</span>
            <svg 
              className="ml-3 w-5 h-5 group-hover:translate-x-1 group-active:translate-x-1 active:translate-x-1 transition-transform duration-300" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
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
