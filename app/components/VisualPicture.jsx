"use client";

import React from "react";
import Image from "next/image";

const VisualPicture = () => {
  return (
    <div className="hero-visual mt-20 lg:mt-24 max-w-5xl mx-auto relative z-30">
      <div className="bg-gradient-to-br from-[#0d2847] to-[#1e3a5f] rounded-3xl p-1 shadow-2xl">
        <div className="bg-white rounded-[22px] overflow-hidden">
            {/* A step into the future */}
            <div className="mt-2">
              <h2 className="text-2xl font-bold mb-4 text-center">A step into the future</h2>
              
            </div>
          <div className="bg-gradient-to-br from-[#0d2847] to-[#1e3a5f] p-6 lg:p-8 text-white">
            <div className="flex items-center justify-center">
              <Image
                src="/image.png"
                alt="Visual Dashboard"
                width={800}
                height={500}
                className="object-cover rounded-lg shadow-lg"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VisualPicture;