import React from 'react'

const CTA = () => {
  return (
    <section className="py-20 lg:py-32 px-6 lg:px-12 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6 lg:mb-8 tracking-tight leading-tight">
            Ready to elevate<br />your practice?
          </h2>
          <p className="text-lg lg:text-xl text-black/60 mb-10 lg:mb-12 max-w-2xl mx-auto">
            Join the world's leading hospitals in delivering exceptional surgical outcomes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-black text-white px-10 py-4 rounded-lg text-base font-medium hover:bg-black/90 transition">
              Schedule Demo
            </button>
            <button className="bg-white text-black px-10 py-4 rounded-lg text-base font-medium border border-black/10 hover:border-black/20 transition">
              Contact Sales
            </button>
          </div>
        </div>
      </section>

  )
}

export default CTA