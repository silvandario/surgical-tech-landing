"use client"

import Image from 'next/image'
import React from 'react'

const ValueProposition = () => {
  return (
  <section className="value-proposition py-20 lg:py-28 px-6 lg:px-12 bg-linear-to-b from-white to-gray-50" id="company">
      <div className="max-w-6xl mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h3 className="text-sm font-semibold text-[#0d2847]/70 mb-3">THE VALUE</h3>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0d2847] mb-4">
            Two areas. One solution.
          </h2>
          <p className="text-base lg:text-lg text-[#0d2847]/70 max-w-2xl mx-auto">
            Explore <span className="font-semibold">EmilioMed Voice</span> and <span className="font-semibold">EmilioMed Vision</span>.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          <div className="card p-6 rounded-2xl bg-white border-2 border-[#0d2847]/10 hover:shadow-xl transition cursor-default">
            <div className="text-2xl lg:text-3xl font-bold text-[#0d2847] mb-2">Automated intraoperative documentation</div>
            <div className="text-sm text-[#0d2847]/70">through voice commands</div>
          </div>

          <div className="card p-6 rounded-2xl bg-white border-2 border-[#0d2847]/10 hover:shadow-xl transition cursor-default">
            <div className="text-2xl lg:text-3xl font-bold text-[#0d2847] mb-2">Tissue recognition and anomalies tagging</div>
            <div className="text-sm text-[#0d2847]/70">automatically or through voice commands</div>
          </div>
        </div>
        <div className="grid grid-cols-1 mt-4 gap-6 lg:gap-8">
        <div className="card p-6 rounded-2xl bg-white border-2 border-[#0d2847]/10 hover:shadow-xl transition cursor-default text-center">
            <div className="text-2xl lg:text-3xl font-bold text-[#0d2847] mb-2">Our solution fits your set up</div>
            <div className="text-sm text-[#0d2847]/70">fully compatible, fully integrated</div>
          </div>
        </div>
      </div>

      {/* Human Impact section */}
      <div className="max-w-6xl mx-auto mt-16">
        <div className="max-w-3xl mx-auto text-center mb-6">
          <h3 className="text-sm font-semibold text-[#0d2847]/70 mb-3">HUMAN IMPACT</h3>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0d2847] mb-4">
            Because behind every
            <br />procedure is a human.
          </h2>
          <p className="text-base lg:text-lg text-[#0d2847]/70 max-w-2xl mx-auto">
            Surgery is about trust between patient and surgeon. To build that trust, EmilioMed designed its solution in close collaboration with surgeons, ensuring it meets the highest standards of care and reliability - as well as the human touch.
          </p>
          {/* Image human.png */}
          <div className="mt-6">
            <Image
              src="/human.png"
              alt="Human Impact"
              width={800}
              height={500}
              className="object-cover rounded-lg shadow-lg"
              priority
            />
          </div>
        </div>

      </div>
    </section>
  )
}

export default ValueProposition
