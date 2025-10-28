"use client"

import React, { useState } from 'react'

const CTA = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = () => {
    if (email) {
      alert(`Thank you! We'll contact you at ${email}`);
      setEmail('');
    } else {
      alert('Please enter your email address');
    }
  };

  return (
    <section className="cta-content py-20 lg:py-32 px-6 lg:px-12 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6 lg:mb-8 tracking-tight leading-tight text-[#0d2847]">
            Ready to elevate<br />your practice?
          </h2>
          <p className="text-lg lg:text-xl text-[#0d2847]/60 mb-10 lg:mb-12 max-w-2xl mx-auto">
            Join the world's leading hospitals in delivering exceptional surgical outcomes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {/* Collect Email */}
            <input
              type="email"
              placeholder="Enter your work email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full sm:w-auto flex-1 px-5 py-3 border border-[#0d2847]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0d2847]/30 transition"
            />
            <button 
              onClick={handleSubmit}
              className="px-6 py-3 bg-gradient-to-r from-[#0d2847] to-[#1e3a5f] text-white font-semibold rounded-lg hover:from-[#1e3a5f] hover:to-[#0d2847] transition cursor-pointer"
            >
              Get Started
            </button>
          </div>
        </div>
      </section>

  )
}

export default CTA