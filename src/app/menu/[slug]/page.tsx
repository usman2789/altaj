import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import menuData from '@/../public/data/menu.json';

// Define the structure of a menu item
interface MenuItem {
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

// Generate static params for all dishes
export async function generateStaticParams() {
  return menuData.map((dish: MenuItem) => ({
    slug: dish.slug,
  }));
}

// Generate metadata for SEO - Fixed: await params
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const dish = menuData.find((item: MenuItem) => item.slug === slug);
  
  if (!dish) {
    return {
      title: 'Dish Not Found - Al Taj Ristorante',
    };
  }

  return {
    title: `${dish.name} - Al Taj Ristorante`,
    description: dish.shortDescription,
  };
}

// Main component - Fixed: await params
export default async function DishDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const dish = menuData.find((item: MenuItem) => item.slug === slug);

  if (!dish) {
    notFound();
  }

  const displayPrice = dish.price || dish.priceRange || 'Price on request';

  // Get related dishes from the same category
  const relatedDishes = menuData
    .filter((item: MenuItem) => item.category === dish.category && item.id !== dish.id)
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-[#040402] text-white">
      {/* Enhanced Breadcrumb Navigation */}
      <div className="bg-gradient-to-r from-[#040402] via-[#040402] to-[#040402] border-b border-[#D4A541]/20 py-6 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-[#D4A541]/10 to-transparent"></div>
          <div className="absolute top-0 right-0 w-32 h-32 border border-[#D4A541]/20 rounded-full transform translate-x-16 -translate-y-16"></div>
          <div className="absolute bottom-0 left-0 w-24 h-24 border border-[#D4A541]/20 rounded-full transform -translate-x-12 translate-y-12"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Back Button - Mobile */}
          <div className="flex items-center mb-4 md:hidden">
            <Link 
              href="/menu" 
              className="flex items-center space-x-2 text-[#D4A541] hover:text-[#B8941A] transition-colors group"
            >
              <svg className="w-5 h-5 transform group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              <span className="font-medium">Back to Menu</span>
            </Link>
          </div>

          {/* Desktop Breadcrumb */}
          <nav className="hidden md:flex items-center justify-between">
            <div className="flex items-center space-x-3">
              {/* Home Link */}
              <Link 
                href="/" 
                className="group flex items-center space-x-2 px-3 py-2 rounded-lg bg-[#D4A541]/5 hover:bg-[#D4A541]/10 text-[#D4A541] hover:text-[#B8941A] transition-all duration-300 border border-transparent hover:border-[#D4A541]/20"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"/>
                </svg>
                <span className="font-medium text-sm">Home</span>
              </Link>
              
              {/* Separator */}
              <div className="flex items-center">
                <div className="w-0.5 h-4 bg-[#D4A541]/30 mx-2"></div>
                <svg className="w-4 h-4 text-[#D4A541]/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
                <div className="w-0.5 h-4 bg-[#D4A541]/30 mx-2"></div>
              </div>

              {/* Menu Link */}
              <Link 
                href="/menu" 
                className="group flex items-center space-x-2 px-3 py-2 rounded-lg bg-[#D4A541]/5 hover:bg-[#D4A541]/10 text-[#D4A541] hover:text-[#B8941A] transition-all duration-300 border border-transparent hover:border-[#D4A541]/20"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3 4a1 1 0 011-1h4a1 1 0 010 2H6.414l2.293 2.293a1 1 0 11-1.414 1.414L5 6.414V8a1 1 0 01-2 0V4zm9 1a1 1 0 010-2h4a1 1 0 011 1v4a1 1 0 01-2 0V6.414l-2.293 2.293a1 1 0 11-1.414-1.414L13.586 5H12zm-9 7a1 1 0 012 0v1.586l2.293-2.293a1 1 0 111.414 1.414L6.414 15H8a1 1 0 010 2H4a1 1 0 01-1-1v-4zm13-1a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 010-2h1.586l-2.293-2.293a1 1 0 111.414-1.414L15.586 13H14a1 1 0 01-1-1z" clipRule="evenodd"/>
                </svg>
                <span className="font-medium text-sm">Menu</span>
              </Link>
              
              {/* Separator */}
              <div className="flex items-center">
                <div className="w-0.5 h-4 bg-[#D4A541]/30 mx-2"></div>
                <svg className="w-4 h-4 text-[#D4A541]/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
                <div className="w-0.5 h-4 bg-[#D4A541]/30 mx-2"></div>
              </div>

              {/* Current Page */}
              <div className="flex items-center space-x-2 px-3 py-2 rounded-lg bg-[#D4A541]/10 border border-[#D4A541]/30">
                <div className="w-2 h-2 bg-[#D4A541] rounded-full animate-pulse"></div>
                <span className="font-medium text-sm text-white">{dish.name}</span>
              </div>
            </div>

            {/* Category Tag - Desktop Only */}
            <div className="hidden lg:flex items-center space-x-2">
              <span className="text-gray-400 text-sm">Category:</span>
              <span className="bg-[#D4A541]/10 text-[#D4A541] px-3 py-1 rounded-full text-sm font-medium border border-[#D4A541]/20">
                {dish.category}
              </span>
            </div>
          </nav>

          {/* Mobile Page Title */}
          <div className="md:hidden">
            <h1 className="text-2xl font-bold text-white">{dish.name}</h1>
            <p className="text-gray-400 text-sm mt-1">{dish.category}</p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          
          {/* Left Column - Image - Square aspect ratio to prevent distortion */}
          <div className="relative">
            <div className="sticky top-8">
              {/* Main Image - Square shape for consistent display */}
              <div className="relative aspect-square bg-gradient-to-br from-[#D4A541]/10 to-transparent rounded-2xl overflow-hidden border border-[#D4A541]/20">
                <Image
                  src={dish.image}
                  alt={`${dish.name} - ${dish.shortDescription}`}
                  fill
                  className="object-contain transition-transform duration-500 hover:scale-105 will-change-transform"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
                
                {/* Category Badge - Hidden on Mobile */}
                <div className="absolute top-4 left-4 hidden md:block z-10">
                  <span className="bg-[#D4A541]/90 backdrop-blur-sm text-[#040402] text-sm font-bold px-3 py-2 rounded-full shadow-lg">
                    {dish.category}
                  </span>
                </div>

                {/* Price Badge */}
                <div className="absolute top-4 right-4 z-10">
                  <span className="bg-[#040402]/90 backdrop-blur-sm text-[#D4A541] text-lg font-bold px-4 py-2 rounded-full border border-[#D4A541]/30 shadow-lg">
                    {displayPrice}
                  </span>
                </div>
              </div>

              {/* Availability Status */}
              <div className="mt-4 p-4 bg-[#D4A541]/10 rounded-lg border border-[#D4A541]/20">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-green-400 font-medium">In Stock</span>
                </div>
                <p className="text-gray-300 text-sm mt-1">Available for immediate preparation</p>
              </div>
            </div>
          </div>

          {/* Right Column - Details */}
          <div className="space-y-6">
            {/* Header */}
            <div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
                {dish.name}
              </h1>
              
              {/* Price Display */}
              <div className="flex items-center space-x-4 mb-6">
                <span className="text-3xl font-bold text-[#D4A541]">
                  {displayPrice}
                </span>
              </div>

              {/* Short Description */}
              <p className="text-xl text-gray-300 leading-relaxed mb-6">
                {dish.shortDescription}
              </p>
            </div>

            {/* Detailed Description */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-white">Description</h2>
              <p className="text-gray-300 leading-relaxed text-lg">
                {dish.description}
              </p>
            </div>

            {/* Features List */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-white">Features</h3>
              <ul className="space-y-2">
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-[#D4A541] rounded-full"></div>
                  <span className="text-gray-300">Realizzato con i migliori ingredienti</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-[#D4A541] rounded-full"></div>
                  <span className="text-gray-300">Preparato fresco su ordinazione</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-[#D4A541] rounded-full"></div>
                  <span className="text-gray-300">Perfetto per ogni occasione</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-[#D4A541] rounded-full"></div>
                  <span className="text-gray-300">Servito con labbinamento perfetto</span>
                </li>
              </ul>
            </div>

            {/* Quantity and Add to Cart */}
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <label className="text-white font-medium">Quantity:</label>
                <div className="flex items-center border border-[#D4A541]/30 rounded-lg bg-[#040402]">
                  <button className="px-3 py-2 text-[#D4A541] hover:bg-[#D4A541]/10 transition-colors">-</button>
                  <input 
                    type="number" 
                    defaultValue="1" 
                    min="1" 
                    className="w-16 py-2 text-center bg-transparent text-white border-x border-[#D4A541]/30 focus:outline-none"
                  />
                  <button className="px-3 py-2 text-[#D4A541] hover:bg-[#D4A541]/10 transition-colors">+</button>
                </div>
              </div>

              <button className="w-full bg-[#D4A541] hover:bg-[#B8941A] text-[#040402] font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
                ADD TO CART
              </button>
            </div>

            {/* Product Details */}
            <div className="grid grid-cols-2 gap-4 pt-6 border-t border-[#D4A541]/20">
              <div>
                <span className="text-gray-400 text-sm">SKU:</span>
                <p className="text-white font-medium">Item No. {dish.id}</p>
              </div>
              <div>
                <span className="text-gray-400 text-sm">Category:</span>
                <p className="text-white font-medium">{dish.category}</p>
              </div>
            </div>

            {/* Social Share */}
            <div className="pt-6 border-t border-[#D4A541]/20">
                <div className="flex items-center space-x-4">
                <span className="text-white font-medium">Share:</span>
                <div className="flex space-x-2">
                  {/* WhatsApp */}
                  <a 
                    href="https://wa.me/393403366793" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-[#25d366] hover:bg-[#1ebe57] rounded-lg flex items-center justify-center transition-colors"
                  >
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                  </svg>
                  </a>
                  {/* Facebook */}
                  <a 
                    href="https://www.facebook.com/people/Al-Taj-Chiari/61564640308043/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-[#3b5998] hover:bg-[#2d4373] rounded-lg flex items-center justify-center transition-colors"
                  >
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                  </a>
                  {/* Instagram */}
                  <a 
                    href="https://www.instagram.com/altaj.chiari" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] hover:opacity-90 rounded-lg flex items-center justify-center transition-colors"
                  >
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.308.974.974 1.246 2.241 1.308 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.334 2.633-1.308 3.608-.974.974-2.241 1.246-3.608 1.308-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.334-3.608-1.308-.974-.974-1.246-2.241-1.308-3.608C2.175 15.647 2.163 15.267 2.163 12s.012-3.584.07-4.85c.062-1.366.334-2.633 1.308-3.608C4.515 2.567 5.782 2.295 7.148 2.233 8.414 2.175 8.794 2.163 12 2.163zm0-2.163C8.741 0 8.332.013 7.052.072 5.771.131 4.659.363 3.678 1.344 2.697 2.325 2.465 3.437 2.406 4.718 2.347 6 .334 6.409.334 12s.013 6 .072 7.282c.059 1.281.291 2.393 1.272 3.374.981.981 2.093 1.213 3.374 1.272C8.332 23.987 8.741 24 12 24s3.668-.013 4.948-.072c1.281-.059 2.393-.291 3.374-1.272.981-.981 1.213-2.093 1.272-3.374.059-1.282.072-1.691.072-7.282s-.013-6-.072-7.282c-.059-1.281-.291-2.393-1.272-3.374-.981-.981-2.093-1.213-3.374-1.272C15.668.013 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zm0 10.162a3.999 3.999 0 110-7.998 3.999 3.999 0 010 7.998zm6.406-11.845a1.44 1.44 0 11-2.88 0 1.44 1.44 0 012.88 0z"/>
                  </svg>
                  </a>
                  {/* TikTok */}
                  <a 
                    href="https://www.tiktok.com/@altajchiari" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-[#010101] hover:bg-[#222] rounded-lg flex items-center justify-center transition-colors"
                  >
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 32 32">
                    <path d="M28.5 10.5c-2.6 0-4.7-2.1-4.7-4.7V2h-4.1v19.1c0 2.1-1.7 3.8-3.8 3.8s-3.8-1.7-3.8-3.8 1.7-3.8 3.8-3.8c.3 0 .7 0 1 .1v-4.2c-.3 0-.7-.1-1-.1-4.4 0-7.9 3.5-7.9 7.9s3.5 7.9 7.9 7.9 7.9-3.5 7.9-7.9V13c1.3 1 3 1.5 4.7 1.5v-4z"/>
                  </svg>
                  </a>
                </div>
                </div>
            </div>
          </div>
        </div>

        {/* Related Dishes */}
        {relatedDishes.length > 0 && (
          <div className="mt-16 lg:mt-24">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                You Might Also <span className="text-[#D4A541]">Like</span>
              </h2>
              <div className="flex justify-center items-center space-x-4">
                <div className="w-12 h-0.5 bg-[#D4A541]"></div>
                <div className="w-3 h-3 bg-[#D4A541] rounded-full"></div>
                <div className="w-12 h-0.5 bg-[#D4A541]"></div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedDishes.map((relatedDish) => (
                <Link key={relatedDish.id} href={`/menu/${relatedDish.slug}`} className="block group">
                  <div className="bg-[#040402] border border-[#D4A541]/20 rounded-xl overflow-hidden hover:border-[#D4A541]/60 transition-all duration-300 hover:shadow-lg hover:shadow-[#D4A541]/20 hover:-translate-y-2">
                    {/* Square aspect ratio for consistent related dish images */}
                    <div className="relative aspect-square overflow-hidden bg-gradient-to-br from-[#D4A541]/5 to-transparent">
                      <Image
                        src={relatedDish.image}
                        alt={`${relatedDish.name} - ${relatedDish.shortDescription}`}
                        fill
                        className="object-contain transition-transform duration-500 group-hover:scale-105 will-change-transform"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        loading="lazy"
                      />
                      <div className="absolute top-3 right-3 z-10">
                        <span className="bg-[#040402]/90 backdrop-blur-sm text-[#D4A541] text-sm font-bold px-3 py-1 rounded-full border border-[#D4A541]/30">
                          {relatedDish.price || relatedDish.priceRange || 'Price on request'}
                        </span>
                      </div>
                    </div>
                    <div className="p-4">
                      <h3 className="text-white font-bold text-lg mb-2 line-clamp-1">{relatedDish.name}</h3>
                      <p className="text-gray-300 text-sm line-clamp-2">{relatedDish.shortDescription}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}