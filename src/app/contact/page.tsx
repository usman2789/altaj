'use client';

import React, { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
    dateTime: '',
    totalGuests: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "6ff6b34b-58ef-44c9-baa6-9a6f1304f317",
          subject: "New Reservation - Al Taj Restaurant",
          from_name: formData.fullName,
          name: formData.fullName,
          email: formData.email,
          phone: formData.phoneNumber,
          dateTime: formData.dateTime,
          guests: formData.totalGuests,
          message: formData.message,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setSubmitStatus('success');
        setFormData({
          fullName: '',
          email: '',
          phoneNumber: '',
          dateTime: '',
          totalGuests: '',
          message: ''
        });

        setTimeout(() => {
          setSubmitStatus('idle');
        }, 5000);
      } else {
        throw new Error('Submission failed');
      }
    } catch (error) {
      setSubmitStatus('error');
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#040402] text-white">
      {/* Page Header */}
      <div className="pt-24 pb-12 text-center">
        <h1 className="text-4xl lg:text-5xl font-bold text-[#D4A541] font-serif mb-4">
          Contact Us
        </h1>
        <p className="text-lg text-gray-300 max-w-2xl mx-auto px-4">
          Get in touch with Al Taj Restaurant. We&apos;re here to make your dining experience unforgettable.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        
        {/* Contact Info Boxes */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          
          {/* Phone Number 1 */}
          <div className="bg-[#040402] border-2 border-[#D4A541] rounded-lg p-8 text-center hover:shadow-lg hover:shadow-[#D4A541]/20 transition-all duration-300">
            <div className="flex justify-center mb-4">
              <div className="bg-[#D4A541] p-3 rounded-full">
                <svg className="w-6 h-6 text-[#040402]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                </svg>
              </div>
            </div>
            <a href="tel:+390300983508" className="text-white hover:text-[#D4A541] transition-colors duration-300 text-lg font-semibold">
              +39 030 0983 508
            </a>
          </div>

          {/* Phone Number 2 - Fixed icon */}
          <div className="bg-[#040402] border-2 border-[#D4A541] rounded-lg p-8 text-center hover:shadow-lg hover:shadow-[#D4A541]/20 transition-all duration-300">
            <div className="flex justify-center mb-4">
              <div className="bg-[#D4A541] p-3 rounded-full">
                <svg className="w-6 h-6 text-[#040402]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                </svg>
              </div>
            </div>
            <a href="tel:+393403366793" className="text-white hover:text-[#D4A541] transition-colors duration-300 text-lg font-semibold">
              +39 340 3366 793
            </a>
          </div>

          {/* Address */}
          <div className="bg-[#040402] border-2 border-[#D4A541] rounded-lg p-8 text-center hover:shadow-lg hover:shadow-[#D4A541]/20 transition-all duration-300">
            <div className="flex justify-center mb-4">
              <div className="bg-red-500 p-3 rounded-full">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
            <p className="text-white text-lg font-semibold">
              Via Avis, 12, 25032 Chiari BS, Italy
            </p>
            <a 
              href="https://maps.google.com/?q=Via+Avis+12+Chiari+BS+Italy" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-[#D4A541] hover:underline text-sm mt-2 inline-block"
            >
              View on Google Maps
            </a>
          </div>
        </div>

        {/* Map Section */}
        <div className="mb-12">
          <div className="w-full h-96 bg-gray-800 rounded-lg overflow-hidden border-2 border-[#D4A541]/30 shadow-lg">
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

        {/* Contact Form */}
        <div className="max-w-2xl mx-auto">
          <div className="bg-[#040402] border-2 border-[#D4A541] rounded-xl p-8 shadow-2xl">
            <h2 className="text-3xl font-bold text-[#D4A541] text-center mb-8 font-serif">
              Make a Reservation
            </h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Full Name */}
              <div>
                <input
                  type="text"
                  name="fullName"
                  placeholder="Full Name"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  className="w-full px-4 py-4 bg-white/95 border border-gray-300 rounded-lg text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#D4A541] focus:border-[#D4A541] transition-all duration-300 text-base"
                  required
                  disabled={isSubmitting}
                />
              </div>

              {/* Email */}
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="E-mail address"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-4 bg-white/95 border border-gray-300 rounded-lg text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#D4A541] focus:border-[#D4A541] transition-all duration-300 text-base"
                  required
                  disabled={isSubmitting}
                />
              </div>

              {/* Phone Number */}
              <div>
                <input
                  type="tel"
                  name="phoneNumber"
                  placeholder="Phone Number"
                  value={formData.phoneNumber}
                  onChange={handleInputChange}
                  className="w-full px-4 py-4 bg-white/95 border border-gray-300 rounded-lg text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#D4A541] focus:border-[#D4A541] transition-all duration-300 text-base"
                  required
                  disabled={isSubmitting}
                />
              </div>

              {/* Date & Time */}
              <div>
                <input
                  type="datetime-local"
                  name="dateTime"
                  placeholder="Select Date & Time"
                  value={formData.dateTime}
                  onChange={handleInputChange}
                  className="w-full px-4 py-4 bg-white/95 border border-gray-300 rounded-lg text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#D4A541] focus:border-[#D4A541] transition-all duration-300 text-base"
                  required
                  disabled={isSubmitting}
                />
              </div>

              {/* Total Guests */}
              <div className="relative">
                <select
                  name="totalGuests"
                  value={formData.totalGuests}
                  onChange={handleInputChange}
                  className="w-full px-4 py-4 bg-white/95 border border-gray-300 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#D4A541] focus:border-[#D4A541] transition-all duration-300 text-base appearance-none cursor-pointer"
                  required
                  disabled={isSubmitting}
                >
                  <option value="">Total Guests</option>
                  <option value="1">1 Guest</option>
                  <option value="2">2 Guests</option>
                  <option value="3">3 Guests</option>
                  <option value="4">4 Guests</option>
                  <option value="5">5 Guests</option>
                  <option value="6">6 Guests</option>
                  <option value="7">7 Guests</option>
                  <option value="8">8 Guests</option>
                  <option value="9">9 Guests</option>
                  <option value="10">10+ Guests</option>
                </select>
                {/* Custom dropdown arrow - Fixed positioning */}
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-gray-700">
                  <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
                  </svg>
                </div>
              </div>

              {/* Message */}
              <div>
                <textarea
                  name="message"
                  placeholder="Write Message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={6}
                  className="w-full px-4 py-4 bg-white/95 border border-gray-300 rounded-lg text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#D4A541] focus:border-[#D4A541] transition-all duration-300 text-base resize-vertical"
                  disabled={isSubmitting}
                ></textarea>
              </div>

              {/* Status Messages */}
              {submitStatus === 'success' && (
                <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-lg text-center">
                  Thank you! Your reservation request has been sent successfully. We&apos;ll contact you soon.
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-center">
                  Something went wrong. Please try again or call us directly.
                </div>
              )}

              {/* Submit Button */}
              <div className="text-center">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`font-bold py-4 px-12 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg text-lg ${
                    isSubmitting
                      ? 'bg-gray-400 cursor-not-allowed text-gray-700'
                      : 'bg-[#D4A541] hover:bg-[#B8941A] text-[#040402]'
                  }`}
                >
                  {isSubmitting ? 'Sending...' : 'Send Request'}
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Additional Info Section - Updated opening hours and reservation info */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-[#D4A541] mb-6 font-serif">
            Visit Al Taj Restaurant
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h4 className="text-lg font-semibold text-white mb-2">Opening Hours</h4>
              <div className="text-gray-300">
                <p>Mon, Wed - Sun: 11:00 AM - 11:00 PM</p>
                <p className="text-red-400 font-semibold">Tuesday: Closed</p>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-white mb-2">Cuisine Type</h4>
              <p className="text-gray-300">Pakistani, Indian & Italian</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-white mb-2">Reservation</h4>
              <p className="text-gray-300">Recommended for lunch & dinner</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}