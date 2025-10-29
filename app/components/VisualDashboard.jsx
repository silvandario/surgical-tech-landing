import React from 'react'

const VisualDashboard = () => {
  return (
    <div className="hero-visual mt-20 lg:mt-24 max-w-5xl mx-auto relative z-30">
            <div className="bg-gradient-to-br from-[#0d2847] to-[#1e3a5f] rounded-3xl p-1 shadow-2xl">
              <div className="bg-white rounded-[22px] overflow-hidden">
                <div className="bg-gradient-to-br from-[#0d2847] to-[#1e3a5f] p-6 lg:p-8 text-white">
                  <div className="flex items-center justify-between mb-8">
                    <div className="flex space-x-2">
                      <div className="w-3 h-3 rounded-full bg-white/30 animate-pulse"></div>
                      <div className="w-3 h-3 rounded-full bg-white/30 animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                      <div className="w-3 h-3 rounded-full bg-white/30 animate-pulse" style={{ animationDelay: '0.4s' }}></div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
                      <div className="text-xs font-semibold text-white/90">OR-2 • Live Session</div>
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-4 lg:gap-6">
                    <div className="bg-white/10 backdrop-blur-lg rounded-xl p-4 lg:p-5 border border-white/20 hover:bg-white/15 transition-all duration-300 transform hover:scale-105">
                      <div className="text-xs text-white/70 mb-2 font-medium">Precision Rate</div>
                      <div className="text-3xl lg:text-4xl font-bold">99.8%</div>
                    </div>
                    <div className="bg-white/10 backdrop-blur-lg rounded-xl p-4 lg:p-5 border border-white/20 hover:bg-white/15 transition-all duration-300 transform hover:scale-105">
                      <div className="text-xs text-white/70 mb-2 font-medium">Duration</div>
                      <div className="text-3xl lg:text-4xl font-bold">2.4h</div>
                    </div>
                    <div className="bg-white/10 backdrop-blur-lg rounded-xl p-4 lg:p-5 border border-white/20 hover:bg-white/15 transition-all duration-300 transform hover:scale-105">
                      <div className="text-xs text-white/70 mb-2 font-medium">Status</div>
                      <div className="text-3xl lg:text-4xl font-bold text-green-400">● Live</div>
                    </div>
                  </div>
                </div>
                <div className="p-6 lg:p-8 bg-gradient-to-b from-gray-50 to-white">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-4 lg:p-5 bg-white rounded-xl border-2 border-[#0d2847]/10 hover:border-[#0d2847]/30 transition-all duration-300 hover:shadow-lg">
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 rounded-full bg-green-500"></div>
                        <span className="text-sm font-semibold text-[#0d2847]">Instrument tracking</span>
                      </div>
                      <span className="text-sm text-[#0d2847]/60 font-medium">Active</span>
                    </div>
                    <div className="flex items-center justify-between p-4 lg:p-5 bg-white rounded-xl border-2 border-[#0d2847]/10 hover:border-[#0d2847]/30 transition-all duration-300 hover:shadow-lg">
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 rounded-full bg-green-500"></div>
                        <span className="text-sm font-semibold text-[#0d2847]">Vital monitoring</span>
                      </div>
                      <span className="text-sm text-[#0d2847]/60 font-medium">Normal</span>
                    </div>
                    <div className="flex items-center justify-between p-4 lg:p-5 bg-white rounded-xl border-2 border-[#0d2847]/10 hover:border-[#0d2847]/30 transition-all duration-300 hover:shadow-lg">
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 rounded-full bg-green-500"></div>
                        <span className="text-sm font-semibold text-[#0d2847]">AI assistance</span>
                      </div>
                      <span className="text-sm text-[#0d2847]/60 font-medium">Enabled</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
  )
}

export default VisualDashboard