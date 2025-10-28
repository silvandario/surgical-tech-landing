"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import FeatureSection from "./components/FeatureSection";
import CTA from "./components/CTA";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const heroRef = useRef(null);
  const imagesRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero content animations
      gsap.from(".hero-content > *", {
        opacity: 0,
        y: 30,
        duration: 1,
        stagger: 0.15,
        ease: "power3.out",
      });

      // Create horizontal scroll animation for hero images
      imagesRef.current.forEach((img, index) => {
        if (!img) return;
        
        // Each image slides horizontally across the screen on scroll
        gsap.fromTo(img, 
          {
            x: index % 2 === 0 ? '100%' : '-100%',
            opacity: 0,
          },
          {
            scrollTrigger: {
              trigger: heroRef.current,
              start: 'top top',
              end: 'bottom top',
              scrub: 1,
              // markers: true, // Uncomment for debugging
            },
            x: index % 2 === 0 ? '-100%' : '100%',
            opacity: 1,
            ease: 'none',
          }
        );
      });

      // Metrics animation
      gsap.from(".metric-card", {
        scrollTrigger: {
          trigger: ".metrics",
          start: "top 80%",
        },
        opacity: 0,
        y: 40,
        stagger: 0.1,
        duration: 0.8,
        ease: "power3.out",
      });

      // Features animation
      gsap.from(".feature-item", {
        scrollTrigger: {
          trigger: ".features",
          start: "top 75%",
        },
        opacity: 0,
        x: -40,
        stagger: 0.12,
        duration: 0.8,
        ease: "power3.out",
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-black/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-black rounded-lg"></div>
              <span className="text-xl font-semibold tracking-tight">SurgeTech</span>
            </div>
            <div className="hidden md:flex items-center space-x-10">
              <a href="#features" className="text-sm font-medium text-black/60 hover:text-black transition">Product</a>
              <a href="#about" className="text-sm font-medium text-black/60 hover:text-black transition">Company</a>
              <a href="#contact" className="text-sm font-medium text-black/60 hover:text-black transition">Contact</a>
              <button className="bg-black text-white px-6 py-2.5 rounded-lg text-sm font-medium hover:bg-black/90 transition">
                Request Demo
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section ref={heroRef} className="relative pt-32 pb-20 px-6 lg:px-12 overflow-hidden min-h-screen flex items-center">
        {/* Animated background images */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          {[1, 2, 3, 4, 5, 6].map((num, index) => (
            <div
              key={num}
              ref={(el) => {
                imagesRef.current[index] = el;
              }}
              className="absolute w-48 h-48 lg:w-64 lg:h-64 rounded-2xl overflow-hidden shadow-2xl"
              style={{
                backgroundImage: `url(/hero${num}.png)`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              {/* Fallback gradient if images don't load */}
              <div className="w-full h-full bg-gradient-to-br from-black/20 to-black/40"></div>
            </div>
          ))}
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="hero-content text-center">
            <div className="inline-block px-4 py-1.5 bg-white/90 backdrop-blur-sm rounded-full mb-6 border border-black/10">
              <span className="text-sm font-medium">Used by leading hospitals worldwide</span>
            </div>
            
            <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight leading-[1.05] mb-6 bg-white/90 backdrop-blur-sm py-4 px-6 rounded-3xl inline-block">
              Surgical precision<br />
              powered by AI
            </h1>

            <p className="text-lg sm:text-xl lg:text-2xl text-black/80 mb-10 max-w-2xl mx-auto leading-relaxed bg-white/80 backdrop-blur-sm py-4 px-6 rounded-2xl">
              Real-time guidance and analytics that help surgeons perform at their best. 
              Every procedure, every time.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="group bg-black text-white px-8 py-4 rounded-lg text-base font-medium hover:bg-black/90 transition flex items-center justify-center shadow-lg hover:shadow-xl">
                <span>Get Started</span>
                <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
              <button className="bg-white text-black px-8 py-4 rounded-lg text-base font-medium border border-black/10 hover:border-black/20 transition shadow-lg hover:shadow-xl">
                View Demo
              </button>
            </div>
          </div>

          {/* Visual */}
          <div className="mt-16 lg:mt-20 max-w-5xl mx-auto">
            <div className="bg-gradient-to-br from-black/5 to-black/10 rounded-2xl lg:rounded-3xl p-1">
              <div className="bg-white rounded-[15px] lg:rounded-[22px] overflow-hidden shadow-2xl">
                <div className="bg-black p-4 lg:p-6 text-white">
                  <div className="flex items-center justify-between mb-6 lg:mb-8">
                    <div className="flex space-x-2">
                      <div className="w-2.5 h-2.5 lg:w-3 lg:h-3 rounded-full bg-white/20"></div>
                      <div className="w-2.5 h-2.5 lg:w-3 lg:h-3 rounded-full bg-white/20"></div>
                      <div className="w-2.5 h-2.5 lg:w-3 lg:h-3 rounded-full bg-white/20"></div>
                    </div>
                    <div className="text-xs font-medium text-white/60">OR-2 • Live Session</div>
                  </div>
                  <div className="grid grid-cols-3 gap-3 lg:gap-4">
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:rounded-xl p-3 lg:p-4 border border-white/10">
                      <div className="text-xs text-white/60 mb-1 lg:mb-2">Precision</div>
                      <div className="text-2xl lg:text-3xl font-bold">99.8%</div>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:rounded-xl p-3 lg:p-4 border border-white/10">
                      <div className="text-xs text-white/60 mb-1 lg:mb-2">Duration</div>
                      <div className="text-2xl lg:text-3xl font-bold">2.4h</div>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:rounded-xl p-3 lg:p-4 border border-white/10">
                      <div className="text-xs text-white/60 mb-1 lg:mb-2">Status</div>
                      <div className="text-2xl lg:text-3xl font-bold">●</div>
                    </div>
                  </div>
                </div>
                <div className="p-6 lg:p-8">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 lg:p-4 bg-black/5 rounded-lg lg:rounded-xl">
                      <span className="text-sm font-medium">Instrument tracking</span>
                      <span className="text-sm text-black/60">Active</span>
                    </div>
                    <div className="flex items-center justify-between p-3 lg:p-4 bg-black/5 rounded-lg lg:rounded-xl">
                      <span className="text-sm font-medium">Vital monitoring</span>
                      <span className="text-sm text-black/60">Normal</span>
                    </div>
                    <div className="flex items-center justify-between p-3 lg:p-4 bg-black/5 rounded-lg lg:rounded-xl">
                      <span className="text-sm font-medium">AI assistance</span>
                      <span className="text-sm text-black/60">Enabled</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Metrics */}
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

      {/* Features */}
      <FeatureSection />

      {/* CTA */}
      <CTA />

    </div>
  );
}
