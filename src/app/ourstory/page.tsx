import React from 'react';
import Image from 'next/image';

export default function OurStoryPage() {
  return (
    <div className="min-h-screen bg-[#040402] text-white">
      
      {/* Hero Section */}
      <div className="pt-24 pb-12 text-center">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Food Image */}
          <div className="mb-8 flex justify-center">
            <div className="relative w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-[#D4A541] shadow-2xl shadow-[#D4A541]/20">
              <Image
                src="/Chicken-Tikka-Masalla.png" // Replace with your food image
                alt="Al Taj Restaurant Signature Dish"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

          {/* Welcome Text */}
          <div className="mb-4">
            <h2 className="text-2xl md:text-3xl font-serif text-[#D4A541] italic mb-4">
              Welcome To Al Taj Restaurant
            </h2>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              A Culinary Journey Through<br />
              Pakistani, Indian, And Italian<br />
              <span className="text-[#D4A541]">Traditions</span>
            </h1>
            <p className="text-gray-300 text-lg md:text-xl max-w-4xl mx-auto leading-relaxed">
              Al Taj Ristorante is where culinary cultures meet. We offer a unique dining experience that 
              combines the best of Pakistani, Indian, and Italian cuisines. From aromatic traditional 
              dishes to authentic Italian flavors, every bite is a journey through the flavors of the world.
            </p>
          </div>
        </div>
      </div>

      {/* Enhanced Features Section */}
      <div className="py-16 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#D4A541]/10 via-transparent to-[#D4A541]/5"></div>
        </div>
        
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center p-2 bg-[#D4A541]/10 rounded-full mb-4">
              <div className="bg-[#D4A541] p-2 rounded-full">
                <svg className="w-6 h-6 text-[#040402]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              What Makes Us <span className="text-[#D4A541]">Special</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Discover the exceptional features that set Al Taj Restaurant apart from the rest
            </p>
          </div>

          {/* Enhanced Golden Border Container */}
          <div className="relative">
            {/* Decorative Corner Elements */}
            <div className="absolute -top-4 -left-4 w-8 h-8 border-t-4 border-l-4 border-[#D4A541] rounded-tl-xl opacity-60"></div>
            <div className="absolute -top-4 -right-4 w-8 h-8 border-t-4 border-r-4 border-[#D4A541] rounded-tr-xl opacity-60"></div>
            <div className="absolute -bottom-4 -left-4 w-8 h-8 border-b-4 border-l-4 border-[#D4A541] rounded-bl-xl opacity-60"></div>
            <div className="absolute -bottom-4 -right-4 w-8 h-8 border-b-4 border-r-4 border-[#D4A541] rounded-br-xl opacity-60"></div>

            {/* Main Container */}
            <div className="border-3 border-[#D4A541] rounded-2xl bg-gradient-to-b from-[#D4A541]/8 via-[#D4A541]/3 to-transparent backdrop-blur-sm shadow-2xl shadow-[#D4A541]/10 overflow-hidden">
              
              {/* Top Accent Bar */}
              <div className="h-1 bg-gradient-to-r from-transparent via-[#D4A541] to-transparent"></div>
              
              <div className="p-8 md:p-12 lg:p-16">
                {/* Grid Layout for Features */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
                  
                  {/* Feature 1 */}
                  <div className="group relative">
                    <div className="flex items-start p-6 md:p-8 bg-gradient-to-r from-[#040402] via-[#040402] to-[#040402]/90 rounded-2xl border border-[#D4A541]/20 hover:border-[#D4A541]/60 transition-all duration-500 hover:shadow-xl hover:shadow-[#D4A541]/15 transform hover:-translate-y-2">
                      {/* Icon */}
                      <div className="bg-gradient-to-br from-[#D4A541] to-[#B8941A] p-4 rounded-2xl mr-6 flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300">
                        <svg className="w-8 h-8 text-[#040402]" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      {/* Content */}
                      <div className="flex-1">
                        <h3 className="text-white text-xl md:text-2xl font-bold mb-3 group-hover:text-[#D4A541] transition-colors duration-300">
                          Diverse Culinary Selection
                        </h3>
                        <p className="text-gray-400 leading-relaxed text-base md:text-lg">
                          Wide selection of Pakistani, Indian and Italian dishes crafted with authentic recipes
                        </p>
                      </div>
                      {/* Accent Line */}
                      <div className="absolute bottom-0 left-6 right-6 h-0.5 bg-gradient-to-r from-transparent via-[#D4A541]/50 to-transparent"></div>
                    </div>
                  </div>

                  {/* Feature 2 */}
                  <div className="group relative">
                    <div className="flex items-start p-6 md:p-8 bg-gradient-to-r from-[#040402] via-[#040402] to-[#040402]/90 rounded-2xl border border-[#D4A541]/20 hover:border-[#D4A541]/60 transition-all duration-500 hover:shadow-xl hover:shadow-[#D4A541]/15 transform hover:-translate-y-2">
                      {/* Icon */}
                      <div className="bg-gradient-to-br from-[#D4A541] to-[#B8941A] p-4 rounded-2xl mr-6 flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300">
                        <svg className="w-8 h-8 text-[#040402]" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zm0 4a1 1 0 011-1h12a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1V8z" clipRule="evenodd" />
                        </svg>
                      </div>
                      {/* Content */}
                      <div className="flex-1">
                        <h3 className="text-white text-xl md:text-2xl font-bold mb-3 group-hover:text-[#D4A541] transition-colors duration-300">
                          Premium Ingredients
                        </h3>
                        <p className="text-gray-400 leading-relaxed text-base md:text-lg">
                          Fresh, high-quality ingredients sourced daily to ensure exceptional flavor and quality
                        </p>
                      </div>
                      {/* Accent Line */}
                      <div className="absolute bottom-0 left-6 right-6 h-0.5 bg-gradient-to-r from-transparent via-[#D4A541]/50 to-transparent"></div>
                    </div>
                  </div>

                  {/* Feature 3 */}
                  <div className="group relative">
                    <div className="flex items-start p-6 md:p-8 bg-gradient-to-r from-[#040402] via-[#040402] to-[#040402]/90 rounded-2xl border border-[#D4A541]/20 hover:border-[#D4A541]/60 transition-all duration-500 hover:shadow-xl hover:shadow-[#D4A541]/15 transform hover:-translate-y-2">
                      {/* Icon */}
                      <div className="bg-gradient-to-br from-[#D4A541] to-[#B8941A] p-4 rounded-2xl mr-6 flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300">
                        <svg className="w-8 h-8 text-[#040402]" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                        </svg>
                      </div>
                      {/* Content */}
                      <div className="flex-1">
                        <h3 className="text-white text-xl md:text-2xl font-bold mb-3 group-hover:text-[#D4A541] transition-colors duration-300">
                          Warm Hospitality
                        </h3>
                        <p className="text-gray-400 leading-relaxed text-base md:text-lg">
                          Welcoming and familiar atmosphere that makes you feel at home with every visit
                        </p>
                      </div>
                      {/* Accent Line */}
                      <div className="absolute bottom-0 left-6 right-6 h-0.5 bg-gradient-to-r from-transparent via-[#D4A541]/50 to-transparent"></div>
                    </div>
                  </div>

                  {/* Feature 4 */}
                  <div className="group relative">
                    <div className="flex items-start p-6 md:p-8 bg-gradient-to-r from-[#040402] via-[#040402] to-[#040402]/90 rounded-2xl border border-[#D4A541]/20 hover:border-[#D4A541]/60 transition-all duration-500 hover:shadow-xl hover:shadow-[#D4A541]/15 transform hover:-translate-y-2">
                      {/* Icon */}
                      <div className="bg-gradient-to-br from-[#D4A541] to-[#B8941A] p-4 rounded-2xl mr-6 flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300">
                        <svg className="w-8 h-8 text-[#040402]" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M12 1.586l-4 4v12.828l4-4V1.586zM3.707 3.293A1 1 0 002 4v10a1 1 0 00.293.707L6 18.414V5.586L3.707 3.293zM17.707 6.293L14 2.586v12.828l3.707 3.707A1 1 0 0018 18V8a1 1 0 00-.293-.707z" clipRule="evenodd" />
                        </svg>
                      </div>
                      {/* Content */}
                      <div className="flex-1">
                        <h3 className="text-white text-xl md:text-2xl font-bold mb-3 group-hover:text-[#D4A541] transition-colors duration-300">
                          Curated Menu
                        </h3>
                        <p className="text-gray-400 leading-relaxed text-base md:text-lg">
                          Menu designed to satisfy every type of palate with carefully crafted dishes
                        </p>
                      </div>
                      {/* Accent Line */}
                      <div className="absolute bottom-0 left-6 right-6 h-0.5 bg-gradient-to-r from-transparent via-[#D4A541]/50 to-transparent"></div>
                    </div>
                  </div>

                  {/* Feature 5 - Full Width */}
                  <div className="lg:col-span-2">
                    <div className="group relative">
                      <div className="flex items-start p-6 md:p-8 bg-gradient-to-r from-[#040402] via-[#040402] to-[#040402]/90 rounded-2xl border border-[#D4A541]/20 hover:border-[#D4A541]/60 transition-all duration-500 hover:shadow-xl hover:shadow-[#D4A541]/15 transform hover:-translate-y-2">
                        {/* Icon */}
                        <div className="bg-gradient-to-br from-[#D4A541] to-[#B8941A] p-4 rounded-2xl mr-6 flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300">
                          <svg className="w-8 h-8 text-[#040402]" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                          </svg>
                        </div>
                        {/* Content */}
                        <div className="flex-1">
                          <h3 className="text-white text-xl md:text-2xl font-bold mb-3 group-hover:text-[#D4A541] transition-colors duration-300">
                            Tradition Meets Innovation
                          </h3>
                          <p className="text-gray-400 leading-relaxed text-base md:text-lg">
                            A culinary experience that combines time-honored traditions with modern innovation, creating dishes that honor the past while embracing the future
                          </p>
                        </div>
                        {/* Accent Line */}
                        <div className="absolute bottom-0 left-6 right-6 h-0.5 bg-gradient-to-r from-transparent via-[#D4A541]/50 to-transparent"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Bottom Accent Bar */}
              <div className="h-1 bg-gradient-to-r from-transparent via-[#D4A541] to-transparent"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-serif text-[#D4A541] italic mb-4">
              Why Choose Us
            </h2>
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Find Out What Makes Us Unique
            </h3>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto leading-relaxed">
              At AL TAJ RISTORANTE, we offer an authentic culinary experience with dishes prepared 
              with fresh ingredients and passion. Our dedication to quality and exceptional service sets 
              us apart.
            </p>
          </div>

          {/* Explore Menu Button */}
          <div className="text-center mb-16">
            <button className="bg-[#D4A541] hover:bg-[#B8941A] text-[#040402] font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-[#D4A541]/30 text-lg">
              EXPLORE MENU
            </button>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Food Quality */}
            <div className="text-center p-8 bg-[#040402] border-2 border-[#D4A541] rounded-xl hover:shadow-lg hover:shadow-[#D4A541]/20 transition-all duration-300">
              <div className="mb-6 flex justify-center">
                <div className="bg-[#D4A541] p-4 rounded-full">
                  <svg className="w-12 h-12 text-[#040402]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V4a2 2 0 00-2-2H6zm1 2a1 1 0 000 2h6a1 1 0 100-2H7zm6 7a1 1 0 011 1v3a1 1 0 11-2 0v-3a1 1 0 011-1zm-3 3a1 1 0 100 2h.01a1 1 0 100-2H10zm-4 1a1 1 0 011-1h.01a1 1 0 110 2H7a1 1 0 01-1-1zm1-4a1 1 0 100 2h.01a1 1 0 100-2H7zm2 1a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1zm4-4a1 1 0 100 2h.01a1 1 0 100-2H13zm-2 1a1 1 0 011-1h.01a1 1 0 110 2H12a1 1 0 01-1-1zm-2 1a1 1 0 100 2h.01a1 1 0 100-2H9zm-2-1a1 1 0 011-1h.01a1 1 0 110 2H8a1 1 0 01-1-1z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
              <h4 className="text-2xl font-bold text-white mb-4">Food Quality</h4>
              <p className="text-gray-300 leading-relaxed">
                Fresh ingredients and dishes prepared with love.
              </p>
            </div>

            {/* Book a Table */}
            <div className="text-center p-8 bg-[#040402] border-2 border-[#D4A541] rounded-xl hover:shadow-lg hover:shadow-[#D4A541]/20 transition-all duration-300">
              <div className="mb-6 flex justify-center">
                <div className="bg-[#D4A541] p-4 rounded-full">
                  <svg className="w-12 h-12 text-[#040402]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
              <h4 className="text-2xl font-bold text-white mb-4">Book a Table</h4>
              <p className="text-gray-300 leading-relaxed">
                Easily book your table online or by phone.
              </p>
            </div>

            {/* Order Online */}
            <div className="text-center p-8 bg-[#040402] border-2 border-[#D4A541] rounded-xl hover:shadow-lg hover:shadow-[#D4A541]/20 transition-all duration-300">
              <div className="mb-6 flex justify-center">
                <div className="bg-[#D4A541] p-4 rounded-full">
                  <svg className="w-12 h-12 text-[#040402]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
              <h4 className="text-2xl font-bold text-white mb-4">Order Online</h4>
              <p className="text-gray-300 leading-relaxed">
                Order your favorite dishes from the comfort of your home.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Our Story Section */}
      <div className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-[#D4A541]/10 to-transparent border-l-4 border-[#D4A541] p-8 md:p-12 rounded-r-xl">
            <h2 className="text-3xl md:text-4xl font-bold text-[#D4A541] mb-6 font-serif">
              Our Story
            </h2>
            <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
              <p>
                Founded with a passion for bringing authentic flavors from three rich culinary traditions, 
                Al Taj Restaurant has been serving the community with exceptional Pakistani, Indian, and 
                Italian cuisine since our opening.
              </p>
              <p>
                Our journey began with a simple vision: to create a place where families and friends could 
                gather to enjoy delicious food made with love and the finest ingredients. From our traditional 
                tandoor-grilled specialties to our handcrafted Italian pizzas, every dish tells a story of 
                heritage and craftsmanship.
              </p>
              <p>
                Located in the heart of Chiari, we have become a beloved destination for food enthusiasts 
                who appreciate authentic flavors and warm hospitality. Our team of skilled chefs brings 
                decades of experience, ensuring that every meal is a memorable experience.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}