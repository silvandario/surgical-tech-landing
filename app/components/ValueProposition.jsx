"use client"

import Image from 'next/image'
import React from 'react'

const ValueProposition = () => {
  return (
  <section className="value-proposition py-20 lg:py-28 px-6 lg:px-12 bg-linear-to-b from-white to-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h3 className="text-sm font-semibold text-[#0d2847]/70 mb-3">THE VALUE</h3>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0d2847] mb-4">
            Operative notes & Billing capture, reimagined.
          </h2>
          <p className="text-base lg:text-lg text-[#0d2847]/70 max-w-2xl mx-auto">
            Less admin. More precision. More revenue.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          <div className="card p-6 rounded-2xl bg-white border-2 border-[#0d2847]/10 hover:shadow-xl transition cursor-default">
            <div className="text-2xl lg:text-3xl font-bold text-[#0d2847] mb-2">Operative Note Drafting</div>
            <div className="text-sm text-[#0d2847]/70">Reduce op-note time by 80%</div>
          </div>

          <div className="card p-6 rounded-2xl bg-white border-2 border-[#0d2847]/10 hover:shadow-xl transition cursor-default">
            <div className="text-2xl lg:text-3xl font-bold text-[#0d2847] mb-2">Compliant, structured output</div>
            <div className="text-sm text-[#0d2847]/70">Seamlessly integrates with your EHR</div>
          </div>

          <div className="card p-6 rounded-2xl bg-white border-2 border-[#0d2847]/10 hover:shadow-xl transition cursor-default">
            <div className="text-2xl lg:text-3xl font-bold text-[#0d2847] mb-2">+15% avg. billing capture</div>
            <div className="text-sm text-[#0d2847]/70">= $800 missed per case</div>
          </div>

          <div className="card p-6 rounded-2xl bg-white border-2 border-[#0d2847]/10 hover:shadow-xl transition cursor-default">
            <div className="text-2xl lg:text-3xl font-bold text-[#0d2847] mb-2">Video proof for compliance</div>
            <div className="text-sm text-[#0d2847]/70">Fewer missed events.</div>
          </div>
        </div>
      </div>

      {/* Human Impact section */}
      <div className="max-w-6xl mx-auto mt-16">
        <div className="max-w-3xl mx-auto text-center mb-6">
          <h3 className="text-sm font-semibold text-[#0d2847]/70 mb-3">HUMAN IMPACT</h3>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0d2847] mb-4">
            Because behind every
            <br />procedure is a patient.
          </h2>
          <p className="text-base lg:text-lg text-[#0d2847]/70 max-w-2xl mx-auto">
            Surgery isn’t just about outcomes, it’s about trust. Uncovr gives EmilioMeds confidence, reduces risk for patients, and ensures hospitals capture the true value of every operation.
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
