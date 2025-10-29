"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const CTA = () => {
  const [email, setEmail] = useState("");
  const [showAnimation, setShowAnimation] = useState(false);

  const handleSubmit = () => {
    if (!email) {
      alert("Please enter your email address");
      return;
    }

    // Trigger animation
    setShowAnimation(true);
    setEmail("");

    // Hide animation after 5 seconds
    setTimeout(() => setShowAnimation(false), 5000);
  };

  return (
    <section className="relative cta-content py-20 lg:py-32 px-6 lg:px-12 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6 lg:mb-8 tracking-tight leading-tight text-[#0d2847]">
          Ready to elevate<br />your practice?
        </h2>
        <p className="text-lg lg:text-xl text-[#0d2847]/60 mb-10 lg:mb-12 max-w-2xl mx-auto">
          Join the world's leading hospitals in delivering exceptional surgical outcomes.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
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

      {/* Crazy Animation Overlay */}
      <AnimatePresence>
        {showAnimation && (
          <motion.div
            className="absolute inset-0 z-50 flex flex-col items-center justify-center bg-[#0d2847] text-white overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.h1
              className="text-4xl sm:text-6xl font-extrabold mb-6 text-center"
              initial={{ scale: 0.5, rotate: -10 }}
              animate={{ scale: [0.5, 1.2, 1], rotate: [0, 10, 0] }}
              transition={{ duration: 1 }}
            >
              🎉 Congrats! 🎉
            </motion.h1>
            <motion.p
              className="text-lg sm:text-2xl mb-10 text-center"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              Your address will be <span className="text-pink-400 font-bold">sold</span> <br />
              to support our brilliant founders 💸
            </motion.p>

            {/* Confetti-like squares */}
            {[...Array(60)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-4 h-4 bg-gradient-to-r from-pink-500 to-yellow-300 rounded-md"
                initial={{
                  x: Math.random() * window.innerWidth - window.innerWidth / 2,
                  y: Math.random() * window.innerHeight - window.innerHeight / 2,
                  opacity: 0,
                  scale: 0.5,
                }}
                animate={{
                  y: "100vh",
                  x: `+=${Math.random() * 200 - 100}`,
                  opacity: [1, 0],
                  rotate: 360 * Math.random(),
                }}
                transition={{
                  duration: 3 + Math.random() * 2,
                  repeat: Infinity,
                }}
              />
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default CTA;