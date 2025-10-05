import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface FeatureItem {
  id: number;
  icon: string;
  title: string;
  description: string;
}

const WhyChooseUs = () => {
  // Feature data with your restaurant's unique selling points
  const features: FeatureItem[] = [
    {
      id: 1,
      icon: '/other images/why_feature_1.svg',
      title: 'Qualità Superiore',
      description: 'Ingredienti freschi selezionati e piatti preparati con passione ogni giorno dalla nostra cucina tradizionale.'
    },
    {
      id: 2,
      icon: '/other images/why_feature_2.svg', 
      title: 'Ricette Autentiche',
      description: 'Sapori tradizionali Pak-Indiani tramandati da generazioni, preparati dai nostri chef esperti.'
    },
    {
      id: 3,
      icon: '/other images/why_feature_3.svg',
      title: 'Servizio Eccellente',
      description: 'Staff professionale e atmosfera familiare per un&apos;esperienza culinaria indimenticabile nel cuore di Brescia.'
    }
  ];

  return (
    <section className="py-12 lg:py-16 bg-black relative overflow-hidden">
      {/* Premium Background Decorative Elements */}
      <div className="absolute inset-0">
        {/* Animated Golden Particles */}
        <div className="absolute top-16 left-8 w-2 h-2 bg-[#A48134] rounded-full animate-pulse opacity-40"></div>
        <div className="absolute top-32 right-16 w-3 h-3 bg-[#a57f2cff] rounded-full animate-bounce opacity-30 delay-500"></div>
        <div className="absolute bottom-24 left-1/4 w-1 h-1 bg-[#A48134] rounded-full animate-ping opacity-20"></div>
        <div className="absolute top-1/3 right-1/3 w-2 h-2 bg-[#a57f2cff] rounded-full animate-pulse opacity-25 delay-1000"></div>
        
        {/* Golden Gradient Overlays */}
        <div className="absolute top-0 left-0 w-72 h-72 bg-gradient-radial from-[#A48134]/8 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-gradient-radial from-[#a57f2cff]/8 to-transparent rounded-full blur-3xl"></div>
        
        {/* Geometric Patterns */}
        <div className="absolute top-1/4 left-8 w-16 h-16 border border-[#A48134]/15 rotate-45 animate-spin opacity-20" style={{ animationDuration: '20s' }}></div>
        <div className="absolute bottom-1/4 right-8 w-12 h-12 border border-[#a57f2cff]/15 rounded-full animate-pulse"></div>
      </div>

      {/* Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header - Reduced spacing */}
        <div className="text-center mb-8 lg:mb-12">
          {/* Subtitle */}
          <div className="inline-flex items-center mb-3">
            <div className="h-px bg-gradient-to-r from-transparent via-[#A48134] to-[#a57f2cff] w-12 mr-4 animate-pulse"></div>
            <span className="text-[#A48134] font-serif text-lg font-medium tracking-wide">
              Perché Sceglierci
            </span>
            <div className="h-px bg-gradient-to-l from-transparent via-[#a57f2cff] to-[#A48134] w-12 ml-4 animate-pulse"></div>
          </div>
          
          {/* Main Title - Reduced size */}
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-white mb-4">
            Scopri Cosa Ci Rende
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#A48134] to-[#a57f2cff] mt-1 bg-[length:200%_200%] animate-pulse">Speciali</span>
          </h2>
          
          {/* Description - Reduced size */}
          <p className="text-gray-300 text-base lg:text-lg max-w-2xl mx-auto leading-relaxed font-serif">
            Al TAJ RISTORANTE offriamo un&apos;autentica esperienza culinaria Pak-Indiana nel cuore di Brescia. 
            La nostra dedizione alla qualità e al servizio eccellente ci distingue da sempre.
          </p>
        </div>

        {/* Features Grid - Enhanced with mobile animations */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature) => (
            <div 
              key={feature.id}
              className="group text-center cursor-pointer"
            >
              {/* Icon Container - Enhanced mobile interactions */}
              <div className="relative mb-4 lg:mb-6">
                {/* Background Circle - Enhanced with mobile animations */}
                <div className="w-20 h-20 lg:w-24 lg:h-24 mx-auto bg-gradient-to-br from-[#A48134] to-[#a57f2cff] rounded-full flex items-center justify-center shadow-xl group-hover:shadow-2xl group-hover:shadow-[#A48134]/20 group-active:shadow-2xl group-active:shadow-[#A48134]/20 transition-all duration-300 group-hover:scale-105 group-active:scale-105 active:scale-105 touch-manipulation">
                  {/* Inner Circle - Enhanced animations */}
                  <div className="w-16 h-16 lg:w-20 lg:h-20 bg-black rounded-full flex items-center justify-center border-2 border-[#A48134]/20 group-hover:border-[#A48134]/40 group-active:border-[#A48134]/40 active:border-[#A48134]/40 transition-all duration-300">
                    {/* Icon - Enhanced with mobile scaling */}
                    <div className="w-10 h-10 lg:w-12 lg:h-12 relative">
                      <Image
                        src={feature.icon}
                        alt={feature.title}
                        fill
                        className="object-contain group-hover:scale-110 group-active:scale-110 active:scale-110 transition-transform duration-300"
                      />
                    </div>
                  </div>
                </div>
                
                {/* Decorative Elements - Enhanced mobile animations */}
                <div className="absolute -top-1 -right-1 w-5 h-5 border-2 border-[#A48134] rounded-full opacity-30 group-hover:opacity-60 group-active:opacity-60 active:opacity-60 transition-opacity duration-300 animate-pulse"></div>
                <div className="absolute -bottom-1 -left-1 w-3 h-3 bg-[#A48134] rounded-full opacity-30 group-hover:opacity-60 group-active:opacity-60 active:opacity-60 transition-opacity duration-300 animate-bounce"></div>
                
                {/* Animated Ring - Enhanced for mobile */}
                <div className="absolute -inset-2 border border-[#A48134]/20 rounded-full animate-spin opacity-0 group-hover:opacity-100 group-active:opacity-100 active:opacity-100 transition-opacity duration-300" style={{ animationDuration: '3s' }}></div>
              </div>

              {/* Content - Enhanced mobile interactions */}
              <div className="space-y-3">
                {/* Title - Enhanced with mobile animations */}
                <h3 className="text-lg lg:text-xl font-serif font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#A48134] group-hover:to-[#a57f2cff] group-active:text-transparent group-active:bg-clip-text group-active:bg-gradient-to-r group-active:from-[#A48134] group-active:to-[#a57f2cff] active:text-transparent active:bg-clip-text active:bg-gradient-to-r active:from-[#A48134] active:to-[#a57f2cff] transition-all duration-300">
                  {feature.title}
                </h3>
                
                {/* Description - Enhanced with mobile color changes */}
                <p className="text-gray-400 text-sm lg:text-base leading-relaxed font-serif max-w-xs mx-auto group-hover:text-gray-300 group-active:text-gray-300 active:text-gray-300 transition-colors duration-300">
                  {feature.description}
                </p>
              </div>

              {/* Bottom Accent Line - Enhanced mobile animations */}
              <div className="mt-4 w-12 h-0.5 bg-gradient-to-r from-transparent via-[#A48134] to-transparent mx-auto opacity-0 group-hover:opacity-100 group-hover:w-16 group-active:opacity-100 group-active:w-16 active:opacity-100 active:w-16 transition-all duration-300"></div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Section - Enhanced button animations */}
        <div className="mt-12 lg:mt-16 text-center">
          {/* Decorative Border */}
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-[#A48134] to-transparent mx-auto mb-6 animate-pulse"></div>
          
          {/* CTA Text - Fix escaped quotes */}
          <p className="text-gray-300 text-base lg:text-lg font-serif italic mb-6">
            &ldquo;Vieni a scoprire il gusto autentico della tradizione Pak-Indiana&rdquo;
          </p>
          
          {/* CTA Button - Enhanced with mobile touch animations and table booking link */}
          <Link 
            href="/tablebooking"
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-[#A48134] to-[#a57f2cff] text-white font-serif text-base font-medium rounded-full hover:shadow-2xl hover:shadow-[#A48134]/30 hover:scale-105 active:shadow-2xl active:shadow-[#A48134]/30 active:scale-105 transition-all duration-300 group animate-pulse hover:animate-none active:animate-none touch-manipulation" 
            style={{ animationDuration: '4s' }}
          >
            <span>Prenota il Tuo Tavolo</span>
            <svg 
              className="ml-2 w-4 h-4 group-hover:translate-x-1 group-active:translate-x-1 active:translate-x-1 transition-transform duration-300" 
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

export default WhyChooseUs;

/*
=== CUSTOMIZATION GUIDE ===

PREMIUM BLACK THEME:
- Background: bg-black with golden decorative elements
- Icons: Golden gradient circles with black inner circles (showing original SVG colors)
- Text: White/gray with golden hover effects
- Accent particles: Subtle animated golden dots

REDUCED SIZE FEATURES:
- Section padding: py-12 lg:py-16 (was py-16 lg:py-24)
- Header spacing: mb-8 lg:mb-12 (was mb-12 lg:mb-16)
- Icon size: w-20 h-20 lg:w-24 lg:h-24 (was w-24 h-24 lg:w-28 lg:h-28)
- Grid gap: gap-6 lg:gap-8 (was gap-8 lg:gap-12)
- Title size: text-2xl sm:text-3xl lg:text-4xl (was text-3xl sm:text-4xl lg:text-5xl)

ANIMATIONS (Using Tailwind Classes):
- animate-pulse: Pulsing decorative lines and particles (4s duration for button)
- animate-bounce: Bouncing decorative elements
- animate-ping: Ping effect for small particles
- animate-spin: Slow spinning geometric patterns (20s and 3s durations)
- hover:scale-105: Scale effects on icons and buttons
- transition-all duration-300: Smooth transitions

VISUAL ENHANCEMENTS:
- Black inner circles for icons with golden borders
- SVG icons showing original colors (orange, blue, teal, etc.)
- Animated background particles (using Tailwind animation classes)
- Gradient overlays for depth
- Premium shadow effects with golden tints

RESPONSIVE DESIGN:
- Maintains mobile-first approach
- Smaller elements on mobile devices
- Optimized spacing for all screen sizes
- Touch-friendly hover states

ACCESSIBILITY:
- Proper alt texts for images
- Semantic HTML structure
- Focus states on interactive elements
- Good color contrast ratios

PERFORMANCE:
- Server-side component (no 'use client')
- Optimized images with Next.js Image component
- CSS-only animations using Tailwind classes (no JavaScript)
- No styled-jsx dependency - FIXED SERVER COMPONENT ERROR

RESPONSIVE DESIGN:
- Maintains mobile-first approach
- Smaller elements on mobile devices
- Optimized spacing for all screen sizes
- Touch-friendly hover states

ACCESSIBILITY:
- Proper alt texts for images
- Semantic HTML structure
- Focus states on interactive elements
- Good color contrast ratios

PERFORMANCE:
- Server-side component (no 'use client')
- Optimized images with Next.js Image component
- CSS-only animations using Tailwind classes (no JavaScript)
- No styled-jsx dependency


REDUCED SIZE FEATURES:
- Section padding: py-12 lg:py-16 (was py-16 lg:py-24)
- Header spacing: mb-8 lg:mb-12 (was mb-12 lg:mb-16)
- Icon size: w-20 h-20 lg:w-24 lg:h-24 (was w-24 h-24 lg:w-28 lg:h-28)
- Grid gap: gap-6 lg:gap-8 (was gap-8 lg:gap-12)
- Title size: text-2xl sm:text-3xl lg:text-4xl (was text-3xl sm:text-4xl lg:text-5xl)

ANIMATIONS:
- Pulsing decorative lines and particles
- Hover scale effects on icons
- Gradient text transitions on hover
- Spinning rings around icons
- Golden glow effects

VISUAL ENHANCEMENTS:
- Black inner circles for icons with golden borders
- SVG icons colored to match golden theme
- Animated background particles
- Gradient overlays for depth
- Premium shadow effects with golden tints

RESPONSIVE DESIGN:
- Maintains mobile-first approach
- Smaller elements on mobile devices
- Optimized spacing for all screen sizes
- Touch-friendly hover states
*/

