'use client';

import { useState } from 'react';

const HomeTable = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    guests: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      console.log('Form submitted:', formData);
      setSubmitStatus('success');
      setIsSubmitting(false);
      
      // Reset form after 3 seconds
      setTimeout(() => {
        setFormData({
          fullName: '',
          email: '',
          phone: '',
          date: '',
          time: '',
          guests: '',
          message: '',
        });
        setSubmitStatus('idle');
      }, 3000);
    }, 1500);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {/* Header */}
      <div className="text-center mb-6">
        <h3 className="text-3xl font-bold text-white mb-2 font-serif">
          Reserve Your Table
        </h3>
        <p className="text-[#D4A541]">Fill in the details below</p>
      </div>

      {/* Full Name */}
      <div className="relative group">
        <input
          type="text"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          placeholder="Full Name"
          required
          className="w-full px-4 py-3 bg-white/5 border-2 border-[#D4A541]/30 rounded-xl focus:border-[#D4A541] focus:bg-white/10 transition-all duration-300 outline-none placeholder-gray-400 text-white group-hover:border-[#D4A541]/50"
        />
        <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#D4A541]/0 to-[#D4A541]/0 group-hover:from-[#D4A541]/5 group-hover:to-[#D4A541]/5 pointer-events-none transition-all duration-300"></div>
      </div>

      {/* Email */}
      <div className="relative group">
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email Address"
          required
          className="w-full px-4 py-3 bg-white/5 border-2 border-[#D4A541]/30 rounded-xl focus:border-[#D4A541] focus:bg-white/10 transition-all duration-300 outline-none placeholder-gray-400 text-white group-hover:border-[#D4A541]/50"
        />
        <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#D4A541]/0 to-[#D4A541]/0 group-hover:from-[#D4A541]/5 group-hover:to-[#D4A541]/5 pointer-events-none transition-all duration-300"></div>
      </div>

      {/* Phone */}
      <div className="relative group">
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="Phone Number"
          required
          className="w-full px-4 py-3 bg-white/5 border-2 border-[#D4A541]/30 rounded-xl focus:border-[#D4A541] focus:bg-white/10 transition-all duration-300 outline-none placeholder-gray-400 text-white group-hover:border-[#D4A541]/50"
        />
        <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#D4A541]/0 to-[#D4A541]/0 group-hover:from-[#D4A541]/5 group-hover:to-[#D4A541]/5 pointer-events-none transition-all duration-300"></div>
      </div>

      {/* Date and Time */}
      <div className="grid grid-cols-2 gap-4">
        <div className="relative group">
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 bg-white/5 border-2 border-[#D4A541]/30 rounded-xl focus:border-[#D4A541] focus:bg-white/10 transition-all duration-300 outline-none text-white group-hover:border-[#D4A541]/50"
          />
          <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#D4A541]/0 to-[#D4A541]/0 group-hover:from-[#D4A541]/5 group-hover:to-[#D4A541]/5 pointer-events-none transition-all duration-300"></div>
        </div>
        
        <div className="relative group">
          <input
            type="time"
            name="time"
            value={formData.time}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 bg-white/5 border-2 border-[#D4A541]/30 rounded-xl focus:border-[#D4A541] focus:bg-white/10 transition-all duration-300 outline-none text-white group-hover:border-[#D4A541]/50"
          />
          <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#D4A541]/0 to-[#D4A541]/0 group-hover:from-[#D4A541]/5 group-hover:to-[#D4A541]/5 pointer-events-none transition-all duration-300"></div>
        </div>
      </div>

      {/* Number of Guests */}
      <div className="relative group">
        <select
          name="guests"
          value={formData.guests}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 bg-white/5 border-2 border-[#D4A541]/30 rounded-xl focus:border-[#D4A541] focus:bg-white/10 transition-all duration-300 outline-none appearance-none cursor-pointer text-white group-hover:border-[#D4A541]/50"
        >
          <option value="" className="bg-[#040402] text-gray-400">Number of Guests</option>
          <option value="1" className="bg-[#040402]">1 Person</option>
          <option value="2" className="bg-[#040402]">2 People</option>
          <option value="3" className="bg-[#040402]">3 People</option>
          <option value="4" className="bg-[#040402]">4 People</option>
          <option value="5" className="bg-[#040402]">5 People</option>
          <option value="6" className="bg-[#040402]">6 People</option>
          <option value="7+" className="bg-[#040402]">7+ People</option>
        </select>
        <svg className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#D4A541] pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
        <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#D4A541]/0 to-[#D4A541]/0 group-hover:from-[#D4A541]/5 group-hover:to-[#D4A541]/5 pointer-events-none transition-all duration-300"></div>
      </div>

      {/* Message */}
      <div className="relative group">
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Special Requests (Optional)"
          rows={4}
          className="w-full px-4 py-3 bg-white/5 border-2 border-[#D4A541]/30 rounded-xl focus:border-[#D4A541] focus:bg-white/10 transition-all duration-300 outline-none placeholder-gray-400 text-white resize-none group-hover:border-[#D4A541]/50"
        />
        <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#D4A541]/0 to-[#D4A541]/0 group-hover:from-[#D4A541]/5 group-hover:to-[#D4A541]/5 pointer-events-none transition-all duration-300"></div>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isSubmitting}
        className={`w-full py-4 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 active:scale-95 ${
          isSubmitting
            ? 'bg-gray-400 cursor-not-allowed'
            : submitStatus === 'success'
            ? 'bg-green-500 text-white'
            : 'bg-gradient-to-r from-[#D4A541] to-[#B8923A] text-black hover:shadow-2xl hover:shadow-[#D4A541]/50'
        }`}
      >
        {isSubmitting ? (
          <span className="flex items-center justify-center gap-2">
            <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
            </svg>
            Submitting...
          </span>
        ) : submitStatus === 'success' ? (
          <span className="flex items-center justify-center gap-2">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            Reservation Confirmed!
          </span>
        ) : (
          'Book Your Table'
        )}
      </button>

      {/* Success Message */}
      {submitStatus === 'success' && (
        <div className="mt-4 p-4 bg-green-50 border border-green-200 rounded-xl text-center animate-fade-in">
          <p className="text-green-700 font-medium">Thank you! We&apos;ll contact you shortly to confirm your reservation.</p>
        </div>
      )}
    </form>
  );
};

export default HomeTable;