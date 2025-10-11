"use client";

import React, { useState } from "react";

export default function TableBookingPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    dateTime: "",
    totalGuests: "",
    occasionType: "",
    message: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form functionality will be added later
    console.log("Table booking data:", formData);
  };

  return (
    <div className="min-h-screen bg-[#040402] text-white">
      {/* Page Header */}
      <div className="pt-24 pb-12 text-center">
        <h1 className="text-4xl lg:text-5xl font-bold text-[#D4A541] font-serif mb-4">
          Book Your Table
        </h1>
        <p className="text-lg text-gray-300 max-w-2xl mx-auto px-4">
          Reserve your perfect dining experience at Al Taj Restaurant. Join us
          for an unforgettable culinary journey.
        </p>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        {/* Opening Hours Block - Compact Version */}
        <div className="mb-12">
          <div className="bg-[#040402] border-2 border-[#D4A541] rounded-2xl p-6 shadow-2xl hover:shadow-[#D4A541]/20 transition-all duration-300">
            <h2 className="text-2xl font-bold text-[#D4A541] text-center mb-6 font-serif">
              Restaurant Hours
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-3">
              {/* Monday */}
              <div className="text-center p-3 bg-gray-900/30 rounded-lg border border-gray-700 hover:border-[#D4A541]/50 transition-all duration-300">
                <h3 className="font-bold text-[#D4A541] mb-1 text-base">MON</h3>
                <p className="text-white text-xs">11AM-11PM</p>
              </div>

              {/* Tuesday - Closed */}
              <div className="text-center p-3 bg-red-900/20 rounded-lg border border-red-500/30 hover:border-red-400 transition-all duration-300">
                <h3 className="font-bold text-red-400 mb-1 text-base">TUE</h3>
                <p className="text-red-300 text-xs font-semibold">CLOSED</p>
              </div>

              {/* Wednesday */}
              <div className="text-center p-3 bg-gray-900/30 rounded-lg border border-gray-700 hover:border-[#D4A541]/50 transition-all duration-300">
                <h3 className="font-bold text-[#D4A541] mb-1 text-base">WED</h3>
                <p className="text-white text-xs">11AM-11PM</p>
              </div>

              {/* Thursday */}
              <div className="text-center p-3 bg-gray-900/30 rounded-lg border border-gray-700 hover:border-[#D4A541]/50 transition-all duration-300">
                <h3 className="font-bold text-[#D4A541] mb-1 text-base">THU</h3>
                <p className="text-white text-xs">11AM-11PM</p>
              </div>

              {/* Friday */}
              <div className="text-center p-3 bg-gray-900/30 rounded-lg border border-gray-700 hover:border-[#D4A541]/50 transition-all duration-300">
                <h3 className="font-bold text-[#D4A541] mb-1 text-base">FRI</h3>
                <p className="text-white text-xs">11AM-11PM</p>
              </div>

              {/* Saturday */}
              <div className="text-center p-3 bg-gray-900/30 rounded-lg border border-gray-700 hover:border-[#D4A541]/50 transition-all duration-300">
                <h3 className="font-bold text-[#D4A541] mb-1 text-base">SAT</h3>
                <p className="text-white text-xs">11AM-11PM</p>
              </div>

              {/* Sunday */}
              <div className="text-center p-3 bg-gray-900/30 rounded-lg border border-gray-700 hover:border-[#D4A541]/50 transition-all duration-300">
                <h3 className="font-bold text-[#D4A541] mb-1 text-base">SUN</h3>
                <p className="text-white text-xs">11AM-11PM</p>
              </div>
            </div>

            {/* Additional Info - Compact */}
            <div className="mt-4 text-center">
              <p className="text-gray-400 text-xs">
                Kitchen closes 10:30 PM | Last orders: 10:00 PM
              </p>
            </div>
          </div>
        </div>

        {/* Reservation Form - With Yellow Hover Effects */}
        <div className="max-w-3xl mx-auto">
          <div className="bg-[#040402] border-2 border-[#D4A541] rounded-2xl p-8 lg:p-12 shadow-2xl hover:shadow-[#D4A541]/20 transition-all duration-300">
            <h2 className="text-4xl font-bold text-[#D4A541] text-center mb-3 font-serif">
              Reserve Your Table
            </h2>
            <p className="text-gray-300 text-center mb-8 text-lg">
              Secure your spot for an exceptional dining experience
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Full Name */}
              <div className="group">
                <label className="block text-[#D4A541] text-sm font-semibold mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  name="fullName"
                  placeholder="Enter your full name"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  className="w-full px-4 py-4 bg-white/95 border-2 border-gray-300 rounded-lg text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#D4A541] focus:border-[#D4A541] transition-all duration-300 text-base group-hover:border-[#D4A541]/70 group-hover:shadow-lg group-hover:shadow-[#D4A541]/10"
                  required
                />
              </div>

              {/* Email */}
              <div className="group">
                <label className="block text-[#D4A541] text-sm font-semibold mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="your.email@example.com"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-4 bg-white/95 border-2 border-gray-300 rounded-lg text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#D4A541] focus:border-[#D4A541] transition-all duration-300 text-base group-hover:border-[#D4A541]/70 group-hover:shadow-lg group-hover:shadow-[#D4A541]/10"
                  required
                />
              </div>

              {/* Phone Number */}
              <div className="group">
                <label className="block text-[#D4A541] text-sm font-semibold mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  name="phoneNumber"
                  placeholder="+39 XXX XXX XXXX"
                  value={formData.phoneNumber}
                  onChange={handleInputChange}
                  className="w-full px-4 py-4 bg-white/95 border-2 border-gray-300 rounded-lg text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#D4A541] focus:border-[#D4A541] transition-all duration-300 text-base group-hover:border-[#D4A541]/70 group-hover:shadow-lg group-hover:shadow-[#D4A541]/10"
                  required
                />
              </div>

              {/* Date & Time */}
              <div className="group">
                <label className="block text-[#D4A541] text-sm font-semibold mb-2">
                  Preferred Date & Time *
                </label>
                <input
                  type="datetime-local"
                  name="dateTime"
                  value={formData.dateTime}
                  onChange={handleInputChange}
                  className="w-full px-4 py-4 bg-white/95 border-2 border-gray-300 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#D4A541] focus:border-[#D4A541] transition-all duration-300 text-base group-hover:border-[#D4A541]/70 group-hover:shadow-lg group-hover:shadow-[#D4A541]/10"
                  required
                />
              </div>

              {/* Total Guests */}
              <div className="group relative">
                <label className="block text-[#D4A541] text-sm font-semibold mb-2">
                  Number of Guests *
                </label>
                <select
                  name="totalGuests"
                  value={formData.totalGuests}
                  onChange={handleInputChange}
                  className="w-full px-4 py-4 bg-white/95 border-2 border-gray-300 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#D4A541] focus:border-[#D4A541] transition-all duration-300 text-base appearance-none cursor-pointer group-hover:border-[#D4A541]/70 group-hover:shadow-lg group-hover:shadow-[#D4A541]/10"
                  required
                >
                  <option value="">Select number of guests</option>
                  <option value="1">1 Guest</option>
                  <option value="2">2 Guests</option>
                  <option value="3">3 Guests</option>
                  <option value="4">4 Guests</option>
                  <option value="5">5 Guests</option>
                  <option value="6">6 Guests</option>
                  <option value="7">7 Guests</option>
                  <option value="8">8 Guests</option>
                  <option value="9">9 Guests</option>
                  <option value="10">10 Guests</option>
                  <option value="11">11+ Guests (Contact us)</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-gray-700 top-8">
                  <svg
                    className="fill-current h-5 w-5"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                </div>
              </div>

              {/* Occasion Type - NEW FIELD */}
              <div className="group relative">
                <label className="block text-[#D4A541] text-sm font-semibold mb-2">
                  Occasion Type *
                </label>
                <select
                  name="occasionType"
                  value={formData.occasionType}
                  onChange={handleInputChange}
                  className="w-full px-4 py-4 bg-white/95 border-2 border-gray-300 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#D4A541] focus:border-[#D4A541] transition-all duration-300 text-base appearance-none cursor-pointer group-hover:border-[#D4A541]/70 group-hover:shadow-lg group-hover:shadow-[#D4A541]/10"
                  required
                >
                  <option value="">Select occasion type</option>
                  <option value="casual-lunch">Casual Lunch</option>
                  <option value="casual-dinner">Casual Dinner</option>
                  <option value="business-meeting">Business Meeting</option>
                  <option value="romantic-dinner">Romantic Dinner</option>
                  <option value="family-celebration">Family Celebration</option>
                  <option value="birthday-party">Birthday Party</option>
                  <option value="anniversary">Anniversary</option>
                  <option value="corporate-event">Corporate Event</option>
                  <option value="wedding-party">Wedding Party</option>
                  <option value="graduation">Graduation</option>
                  <option value="other-event">Other Special Event</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-gray-700 top-8">
                  <svg
                    className="fill-current h-5 w-5"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                </div>
              </div>

              {/* Special Requests */}
              <div className="group">
                <label className="block text-[#D4A541] text-sm font-semibold mb-2">
                  Special Requests
                </label>
                <textarea
                  name="message"
                  placeholder="Any dietary restrictions, seating preferences, or special requests..."
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={5}
                  className="w-full px-4 py-4 bg-white/95 border-2 border-gray-300 rounded-lg text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#D4A541] focus:border-[#D4A541] transition-all duration-300 text-base resize-vertical group-hover:border-[#D4A541]/70 group-hover:shadow-lg group-hover:shadow-[#D4A541]/10"
                ></textarea>
              </div>

              {/* Submit Button */}
              <div className="text-center pt-4">
                <button
                  type="submit"
                  className="bg-[#D4A541] hover:bg-[#B8941A] text-[#040402] font-bold py-4 px-16 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-[#D4A541]/40 text-lg flex items-center justify-center mx-auto space-x-2 group-hover:shadow-2xl"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>Reserve Table</span>
                </button>
              </div>

              {/* Terms and conditions */}
              <div className="text-center pt-4">
                <p className="text-gray-400 text-xs">
                  By submitting this form, you agree to our reservation policy.
                  <span className="text-[#D4A541] hover:underline cursor-pointer hover:text-[#B8941A] transition-colors duration-300">
                    {" "}
                    Terms & Conditions
                  </span>
                </p>
              </div>
            </form>
          </div>
        </div>

        {/* Additional Information */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Reservation Policy */}
          <div className="bg-gray-900/40 border border-gray-700 rounded-xl p-6 hover:border-[#D4A541]/50 hover:shadow-lg hover:shadow-[#D4A541]/10 transition-all duration-300">
            <h3 className="text-xl font-bold text-[#D4A541] mb-4 flex items-center">
              <svg
                className="w-5 h-5 mr-2"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                  clipRule="evenodd"
                />
              </svg>
              Reservation Policy
            </h3>
            <ul className="text-gray-300 text-sm space-y-2">
              <li>• Reservations recommended</li>
              <li>• 15-minute grace period</li>
              <li>• Party of 8+ requires deposit</li>
              <li>• 24-hour cancellation policy</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="bg-gray-900/40 border border-gray-700 rounded-xl p-6 hover:border-[#D4A541]/50 hover:shadow-lg hover:shadow-[#D4A541]/10 transition-all duration-300">
            <h3 className="text-xl font-bold text-[#D4A541] mb-4 flex items-center">
              <svg
                className="w-5 h-5 mr-2"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M2 3.5A1.5 1.5 0 713.5 2h1.148a1.5 1.5 0 011.465 1.175l.716 3.223a1.5 1.5 0 01-1.052 1.767l-.933.267c-.41.117-.643.555-.48.95a11.542 11.542 0 006.254 6.254c.395.163.833-.07.95-.48l.267-.933a1.5 1.5 0 011.767-1.052l3.223.716A1.5 1.5 0 0118 15.352V16.5a1.5 1.5 0 01-1.5 1.5H15c-1.149 0-2.263-.15-3.326-.43A13.022 13.022 0 712.43 8.326 13.019 13.019 0 712 5V3.5z"
                  clipRule="evenodd"
                />
              </svg>
              Need Help?
            </h3>
            <div className="text-gray-300 text-sm space-y-2">
              <p>Call us directly:</p>
              <a
                href="tel:+390300983508"
                className="block text-[#D4A541] font-semibold hover:text-[#B8941A] transition-colors duration-300 hover:underline"
              >
                +39 030 0983 508
              </a>
              <a
                href="tel:+393403366793"
                className="block text-[#D4A541] font-semibold hover:text-[#B8941A] transition-colors duration-300 hover:underline"
              >
                +39 340 3366 793
              </a>
            </div>
          </div>

          {/* Special Notes */}
          <div className="bg-gray-900/40 border border-gray-700 rounded-xl p-6 hover:border-[#D4A541]/50 hover:shadow-lg hover:shadow-[#D4A541]/10 transition-all duration-300">
            <h3 className="text-xl font-bold text-[#D4A541] mb-4 flex items-center">
              <svg
                className="w-5 h-5 mr-2"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
                  clipRule="evenodd"
                />
              </svg>
              Special Events
            </h3>
            <ul className="text-gray-300 text-sm space-y-2">
              <li>• Private dining available</li>
              <li>• Custom menu options</li>
              <li>• Event planning assistance</li>
              <li>• Group discounts available</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
