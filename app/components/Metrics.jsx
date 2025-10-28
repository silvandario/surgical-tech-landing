"use client"

const Metrics = () => {
  return (
   <section className="metrics py-20 lg:py-32 px-6 lg:px-12 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            <div className="metric-card text-center p-6 rounded-2xl bg-white border-2 border-[#0d2847]/10 hover:border-[#0d2847]/30 transition-all duration-300 hover:shadow-xl">
              <div className="text-5xl lg:text-6xl font-bold mb-3 bg-gradient-to-r from-[#0d2847] to-[#1e3a5f] bg-clip-text text-transparent">99.8%</div>
              <div className="text-sm lg:text-base text-[#0d2847]/60 font-medium">Success rate across 10,000+ procedures</div>
            </div>
            <div className="metric-card text-center p-6 rounded-2xl bg-white border-2 border-[#0d2847]/10 hover:border-[#0d2847]/30 transition-all duration-300 hover:shadow-xl">
              <div className="text-5xl lg:text-6xl font-bold mb-3 bg-gradient-to-r from-[#0d2847] to-[#1e3a5f] bg-clip-text text-transparent">15min</div>
              <div className="text-sm lg:text-base text-[#0d2847]/60 font-medium">Average time saved per surgery</div>
            </div>
            <div className="metric-card text-center p-6 rounded-2xl bg-white border-2 border-[#0d2847]/10 hover:border-[#0d2847]/30 transition-all duration-300 hover:shadow-xl">
              <div className="text-5xl lg:text-6xl font-bold mb-3 bg-gradient-to-r from-[#0d2847] to-[#1e3a5f] bg-clip-text text-transparent">500+</div>
              <div className="text-sm lg:text-base text-[#0d2847]/60 font-medium">Hospitals using our platform</div>
            </div>
            <div className="metric-card text-center p-6 rounded-2xl bg-white border-2 border-[#0d2847]/10 hover:border-[#0d2847]/30 transition-all duration-300 hover:shadow-xl">
              <div className="text-5xl lg:text-6xl font-bold mb-3 bg-gradient-to-r from-[#0d2847] to-[#1e3a5f] bg-clip-text text-transparent">24/7</div>
              <div className="text-sm lg:text-base text-[#0d2847]/60 font-medium">Real-time support available</div>
            </div>
          </div>
        </div>
      </section>
  )
}

export default Metrics