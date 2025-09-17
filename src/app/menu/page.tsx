import React from 'react';
import DishCard from '@/components/section/dishcard';
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

// Group menu items by category
function groupItemsByCategory(items: MenuItem[]): Record<string, MenuItem[]> {
  return items.reduce((acc, item) => {
    if (!acc[item.category]) {
      acc[item.category] = [];
    }
    acc[item.category].push(item);
    return acc;
  }, {} as Record<string, MenuItem[]>);
}

// Custom category ordering for better UX
const categoryOrder = [
  'APPETIZERS',
  'TANDOOR AND GRILL SPECIALTIES', 
  'VEGETARIAN',
  'DAAL CURRY SPECIALTY',
  'MAIN COURSES - CHICKEN SPECIALTIES',
  'MAIN COURSES - LAMB SPECIALTIES', 
  'FISH CURRY SPECIALTIES',
  'BASMATI RICE',
  'SOUPS',
  'TANDOOR BREAD',
  'INDIAN DESSERTS',
  'ETHNIC DRINKS',
  'CLASSIC PIZZAS',
  'SPECIAL PIZZAS',
  'WHITE PIZZAS',
  'CALZONE',
  'COFFEE SHOP',
  'DRINKS',
  'MENABREA BLONDE ON TAP',
  'BUBBLES',
  'RED WINE'
];

const MenuPage = () => {
  const groupedItems = groupItemsByCategory(menuData as MenuItem[]);
  
  // Get ordered categories, including any that might not be in our predefined order
  const orderedCategories = [
    ...categoryOrder.filter(cat => groupedItems[cat]),
    ...Object.keys(groupedItems).filter(cat => !categoryOrder.includes(cat))
  ];

  return (
    <div className="min-h-screen bg-[#040402] text-white">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-[#040402] via-[#040402] to-[#D4A541]/10 py-16 lg:py-24">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('/pattern.svg')] bg-repeat"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            Our <span className="text-[#D4A541]">Menu</span>
          </h1>
          <p className="text-xl sm:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Discover our authentic flavors from Pakistan, India, and Italy. 
            Every dish crafted with passion and the finest ingredients.
          </p>
          
          {/* Decorative Elements */}
          <div className="flex justify-center mt-8 space-x-4">
            <div className="w-16 h-1 bg-gradient-to-r from-transparent via-[#D4A541] to-transparent"></div>
            <div className="w-4 h-1 bg-[#D4A541] rounded-full"></div>
            <div className="w-16 h-1 bg-gradient-to-r from-transparent via-[#D4A541] to-transparent"></div>
          </div>
        </div>
      </div>

      {/* Menu Categories */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {orderedCategories.map((category) => {
          const items = groupedItems[category];
          if (!items || items.length === 0) return null;

          return (
            <section key={category} className="mb-16 lg:mb-20">
              {/* Category Header */}
              <div className="text-center mb-8 lg:mb-12">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
                  <span className="text-[#D4A541]">{category.charAt(0)}</span>
                  {category.slice(1).toLowerCase().replace(/_/g, ' ')}
                </h2>
                <div className="flex justify-center items-center space-x-4">
                  <div className="w-12 h-0.5 bg-[#D4A541]"></div>
                  <div className="w-3 h-3 bg-[#D4A541] rounded-full"></div>
                  <div className="w-12 h-0.5 bg-[#D4A541]"></div>
                </div>
                <p className="text-gray-400 mt-4 text-lg">
                  {items.length} delicious option{items.length !== 1 ? 's' : ''} available
                </p>
              </div>

              {/* Items Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
                {items.map((item) => (
                  <DishCard
                    key={item.id}
                    id={item.id}
                    name={item.name}
                    slug={item.slug}
                    shortDescription={item.shortDescription}
                    description={item.description}
                    price={item.price}
                    priceRange={item.priceRange}
                    image={item.image}
                    category={category}
                  />
                ))}
              </div>
            </section>
          );
        })}
      </div>

      {/* Call to Action */}
      <div className="bg-gradient-to-r from-[#D4A541]/10 via-[#D4A541]/5 to-[#D4A541]/10 py-16">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h3 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Ready to <span className="text-[#D4A541]">Order</span>?
          </h3>
          <p className="text-xl text-gray-300 mb-8">
            Contact us today to place your order or make a reservation
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:+390300983508"
              className="bg-[#D4A541] hover:bg-[#B8941A] text-[#040402] font-bold py-3 px-8 rounded-lg transition-colors duration-300 transform hover:scale-105"
            >
              Call Now: +39 030 0983 508
            </a>
            <a 
              href="/contact"
              className="bg-transparent border-2 border-[#D4A541] text-[#D4A541] hover:bg-[#D4A541] hover:text-[#040402] font-bold py-3 px-8 rounded-lg transition-all duration-300"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuPage;