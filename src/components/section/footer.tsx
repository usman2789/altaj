'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

// Navigation links data
const QUICK_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/menu', label: 'Menu' },
  { href: '/menu', label: 'Shop' },
  { href: '/ourstory', label: 'Who We Are' },
  { href: '/contact', label: 'Contact us' },
];

const MENU_LINKS = [
  { href: '/menu#tandoor-grill', label: 'Tandoor and Grill' },
  { href: '/menu#special-pizzas', label: 'Special Pizzas' },
  { href: '/menu#coffee-shop', label: 'Coffee shop' },
  { href: '/menu#red-wine', label: 'Red wine' },
  { href: '/menu#appetizers', label: 'Appetizers' },
  { href: '/order', label: 'Order Now' },
];

const SOCIAL_LINKS = [
  {
    href: 'https://www.facebook.com/people/Al-Taj-Chiari/61564640308043/',
    label: 'Facebook',
    icon: 'M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z',
  },
  {
    href: 'https://www.instagram.com/altaj.chiari',
    label: 'Instagram',
    icon: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z',
  },
  {
    href: 'https://www.tiktok.com/@altajchiari',
    label: 'TikTok',
    icon: 'M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z',
  },
  {
    href: 'https://wa.me/393403366793',
    label: 'WhatsApp',
    icon: 'M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.56-.01-.188 0-.669.25-.916.371-.247.123-.842.823-.842 2.006 0 1.184.863 2.327 1.235 2.488.372.162 5.856 8.944 14.19 12.544C21.9 18.152 22.5 17.952 23 17.952c.5 0 .912-.372 1.02-.621.108-.248-.062-.37-.371-.495z M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.568 17.477c-.513.513-1.229.854-2.018.854-.434 0-.866-.1-1.229-.281C12.395 19.395 8.5 18.5 6.5 16c-2-2.5-2.895-6.395-1.50-8.321.181-.363.281-.795.281-1.229 0-.789-.341-1.505-.854-2.018-.513-.513-.787-.787-1.3-.787s-.787.274-1.3.787c-.513.513-.854 1.229-.854 2.018v.95c0 3.038 1.2 5.95 3.35 8.1s5.062 3.35 8.1 3.35h.95c.789 0 1.505-.341 2.018-.854s.787-.787.787-1.3-.274-.787-.787-1.3z',
  },
];

const Footer = () => {
  return (
    <footer className="bg-[#000000] text-white py-8 lg:py-12">
      {/* Simple border container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="border-2 border-[#D4A541]/20 rounded-xl mx-0 lg:mx-0">
        
          {/* Top accent line */}
          <div className="h-0.5 bg-[#D4A541]/10 rounded-t-xl"></div>
          
          {/* DESKTOP LAYOUT - Hidden on mobile */}
          <div className="hidden lg:grid lg:grid-cols-4 lg:gap-8 xl:gap-12 p-6 lg:p-8">
            
            {/* ABOUT THE RESTAURANT SECTION */}
            <div className="lg:col-span-1">
              {/* LOGO - Increased size for desktop */}
              <div className="mb-6">
                <Image
                  src="/logo-f.png"
                  alt="Al Taj Ristorante"
                  width={300}
                  height={300}
                  className="h-24 w-auto"
                />
              </div>
              
              {/* ABOUT TEXT */}
              <div className="mb-6">
                <h3 className="text-[#D4A541] text-lg font-bold mb-4">About the Restaurant...</h3>
                <p className="text-white text-sm leading-relaxed font-medium">
                  Welcome to Al Taj Restaurant, where tradition meets flavor. 
                  We bring the best of Pak-Indian and Italian cuisine to your table, 
                  crafted with authentic flavors and fresh ingredients. Enjoy a 
                  unique culinary experience with dishes that reflect our passion 
                  for quality and hospitality.
                </p>
              </div>

              {/* VAT NUMBER */}
              <div className="mb-6">
                <div className="flex items-center">
                  <div className="bg-[#D4A541] p-2 rounded-full mr-3">
                    <svg className="w-4 h-4 text-[#040402]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2H4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-white text-sm font-bold">VAT number</p>
                    <p className="text-white text-sm font-medium">04573340983</p>
                  </div>
                </div>
              </div>

              {/* SOCIAL ICONS - Facebook, Instagram, TikTok, WhatsApp */}
              <div className="flex space-x-4">
                {SOCIAL_LINKS.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="bg-transparent border-2 border-[#D4A541]/60 p-2 rounded-full hover:bg-[#D4A541] hover:border-[#D4A541] hover:scale-110 transition-all duration-300"
                  >
                    <svg className="w-4 h-4 text-white hover:text-[#040402]" fill="currentColor" viewBox="0 0 24 24">
                      <path d={social.icon} />
                    </svg>
                  </a>
                ))}
              </div>
            </div>

            {/* QUICK LINKS SECTION - Enhanced with top margin and bolder text */}
            <div className="lg:col-span-1 mt-6">
              <h3 className="text-[#D4A541] text-lg font-bold mb-6">Quick Links</h3>
              <ul className="space-y-3">
                {QUICK_LINKS.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-white hover:text-[#D4A541] transition-colors duration-300 text-lg font-medium">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* OUR MENU SECTION - Enhanced with top margin and bolder text */}
            <div className="lg:col-span-1 mt-6">
              <h3 className="text-[#D4A541] text-lg font-bold mb-6">Our Menu</h3>
              <ul className="space-y-3">
                {MENU_LINKS.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-white hover:text-[#D4A541] transition-colors duration-300 text-lg font-medium">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* CONTACT US SECTION - Enhanced with top margin and proper phone icons */}
            <div className="lg:col-span-1 mt-6">
              <h3 className="text-[#D4A541] text-lg font-bold mb-6">Contact Us Now</h3>
              <div className="space-y-4">
                
                {/* PHONE NUMBER 1 - Enhanced with phone icon */}
                <div className="flex items-center">
                  <div className="bg-[#D4A541] p-2 rounded-full mr-3">
                    <svg className="w-4 h-4 text-[#040402]" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                    </svg>
                  </div>
                  <a href="tel:+390300983508" className="text-white hover:text-[#D4A541] transition-colors duration-300 text-sm font-medium">
                    +39 030 0983 508
                  </a>
                </div>

                {/* PHONE NUMBER 2 - Enhanced with phone icon */}
                <div className="flex items-center">
                  <div className="bg-[#D4A541] p-2 rounded-full mr-3">
                    <svg className="w-4 h-4 text-[#040402]" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                    </svg>
                  </div>
                  <a href="tel:+393403366793" className="text-white hover:text-[#D4A541] transition-colors duration-300 text-sm font-medium">
                    +39 340 3366 793
                  </a>
                </div>

                {/* ADDRESS */}
                <div className="flex items-start">
                  <div className="bg-[#D4A541] p-2 rounded-full mr-3 mt-1">
                    <svg className="w-4 h-4 text-[#040402]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-white text-sm font-medium">Via Avis, 12,</p>
                    <p className="text-white text-sm font-medium">25032 Chiari (BS)</p>
                  </div>
                </div>

                {/* VISUAL MAP - Desktop with enhanced border */}
                <div className="mt-4">
                  <div className="w-full h-40 bg-black rounded-lg overflow-hidden border-2 border-[#D4A541]/40 shadow-lg">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2782.2879684394234!2d9.926785915465832!3d45.54018297910228!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4781b9c3a0b7b5f1%3A0x9c3e8a6f9a5a7b2c!2sVia%20Avis%2C%2012%2C%2025032%20Chiari%20BS%2C%20Italy!5e0!3m2!1sen!2sus!4v1634567890123!5m2!1sen!2sus"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen={true}
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      className="w-full h-full"
                    ></iframe>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* MOBILE LAYOUT - Hidden on desktop with enhanced styling */}
          <div className="lg:hidden space-y-6 p-6">
            
            {/* LOGO - Mobile with increased size */}
            <div className="flex justify-center mb-6">
              <Image
                src="/logo-f.png"
                alt="Al Taj Ristorante"
                width={160}
                height={160}
                className="h-20 w-auto"
              />
            </div>

            {/* ABOUT THE RESTAURANT SECTION */}
            <div className="text-center">
              <h3 className="text-[#D4A541] text-lg font-bold mb-4">About the Restaurant...</h3>
              <p className="text-white text-sm leading-relaxed px-2 font-medium">
                Welcome to Al Taj Ristorante, where tradition meets flavor. 
                We bring the best of Pak-Indian and Italian cuisine to your table, 
                crafted with authentic flavors and fresh ingredients. Enjoy a 
                unique culinary experience with dishes that reflect our passion 
                for quality and hospitality.
              </p>

              {/* VAT NUMBER - Positioned after About text */}
              <div className="mt-6 inline-flex items-center">
                <div className="bg-[#D4A541] p-2 rounded-full mr-3">
                  <svg className="w-4 h-4 text-[#040402]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2H4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="text-left">
                  <p className="text-white text-sm font-bold">VAT number</p>
                  <p className="text-white text-sm font-medium">04573340983</p>
                </div>
              </div>

              {/* SOCIAL ICONS - Enhanced with better borders */}
              <div className="flex justify-center space-x-3 mt-4">
                {SOCIAL_LINKS.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="bg-transparent border-2 border-[#D4A541]/60 p-1.5 rounded-full hover:bg-[#D4A541] hover:border-[#D4A541] hover:scale-110 transition-all duration-300 transform"
                  >
                    <svg className="w-3.5 h-3.5 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d={social.icon} />
                    </svg>
                  </a>
                ))}
              </div>
            </div>

            {/* QUICK LINKS SECTION - Enhanced with margins and bolder text */}
            <div className="mt-8">
              <h3 className="text-[#D4A541] text-lg font-bold mb-4 text-left px-6">Quick Links</h3>
              <ul className="space-y-3 text-left px-6">
                {QUICK_LINKS.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-white hover:text-[#D4A541] hover:translate-x-2 transition-all duration-300 text-lg font-medium block py-1">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* OUR MENU SECTION - Enhanced with margins and bolder text */}
            <div className="mt-8">
              <h3 className="text-[#D4A541] text-lg font-bold mb-4 text-left px-6">Our Menu</h3>
              <ul className="space-y-3 text-left px-6">
                {MENU_LINKS.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-white hover:text-[#D4A541] hover:translate-x-2 transition-all duration-300 text-lg font-medium block py-1">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* CONTACT US SECTION - Enhanced with margins and proper phone icons */}
            <div className="mt-8">
              <h3 className="text-[#D4A541] text-lg font-bold mb-6 text-left px-6">Contact Us Now</h3>
              
              <div className="px-6">
                {/* PHONE NUMBER 1 - Enhanced with proper phone icon */}
                <div className="mb-3">
                  <div className="flex items-center">
                    <div className="bg-[#D4A541] p-2 rounded-full mr-3">
                      <svg className="w-4 h-4 text-[#040402]" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                      </svg>
                    </div>
                    <a href="tel:+390300983508" className="text-white hover:text-[#D4A541] transition-colors duration-300 text-sm font-medium">
                      +39 030 0983 508
                    </a>
                  </div>
                </div>

                {/* PHONE NUMBER 2 - Enhanced with proper phone icon */}
                <div className="mb-4">
                  <div className="flex items-center">
                    <div className="bg-[#D4A541] p-2 rounded-full mr-3">
                      <svg className="w-4 h-4 text-[#040402]" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                      </svg>
                    </div>
                    <a href="tel:+393403366793" className="text-white hover:text-[#D4A541] transition-colors duration-300 text-sm font-medium">
                      +39 340 3366 793
                    </a>
                  </div>
                </div>

                {/* ADDRESS */}
                <div className="mb-6">
                  <div className="flex items-center">
                    <div className="bg-[#D4A541] p-2 rounded-full mr-3">
                      <svg className="w-4 h-4 text-[#040402]" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div className="text-left">
                      <p className="text-white text-sm font-medium">Via Avis, 12,</p>
                      <p className="text-white text-sm font-medium">25032 Chiari (BS)</p>
                    </div>
                  </div>
                </div>

                {/* VISUAL MAP - Mobile with enhanced border */}
                <div className="w-full h-48 bg-black rounded-lg overflow-hidden border-2 border-[#D4A541]/40 shadow-lg">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2782.2879684394234!2d9.926785915465832!3d45.54018297910228!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4781b9c3a0b7b5f1%3A0x9c3e8a6f9a5a7b2c!2sVia%20Avis%2C%2012%2C%2025032%20Chiari%20BS%2C%20Italy!5e0!3m2!1sen!2sus!4v1634567890123!5m2!1sen!2sus"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={true}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="w-full h-full"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
          
          {/* Bottom accent line */}
          <div className="h-0.5 bg-[#D4A541]/10 rounded-b-xl"></div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;