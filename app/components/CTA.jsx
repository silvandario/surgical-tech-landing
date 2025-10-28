import React from 'react'

const CTA = () => {
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
            <button className="bg-gradient-to-r from-[#0d2847] to-[#1e3a5f] text-white px-10 py-4 rounded-lg text-base font-semibold hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
              Schedule Demo
            </button>
            <button className="bg-white text-[#0d2847] px-10 py-4 rounded-lg text-base font-semibold border-2 border-[#0d2847]/20 hover:border-[#0d2847] hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              Contact Sales
            </button>
          </div>
        </div>
      </section>

  )
}

export default CTA