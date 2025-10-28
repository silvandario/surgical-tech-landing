"use client"

const Metrics = () => {
  return (
   <section className="metrics py-16 lg:py-20 px-6 lg:px-12 border-t border-black/5 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            <div className="metric-card text-center">
              <div className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-2">99.8%</div>
              <div className="text-sm lg:text-base text-black/60">Success rate across 10,000+ procedures</div>
            </div>
            <div className="metric-card text-center">
              <div className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-2">15min</div>
              <div className="text-sm lg:text-base text-black/60">Average time saved per surgery</div>
            </div>
            <div className="metric-card text-center">
              <div className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-2">500+</div>
              <div className="text-sm lg:text-base text-black/60">Hospitals using our platform</div>
            </div>
            <div className="metric-card text-center">
              <div className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-2">24/7</div>
              <div className="text-sm lg:text-base text-black/60">Real-time support available</div>
            </div>
          </div>
        </div>
      </section>
  )
}

export default Metrics