"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import FeatureSection from "./components/FeatureSection";
import Metrics from "./components/Metrics";
import CTA from "./components/CTA";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const heroRef = useRef(null);
  const imagesRef = useRef<(HTMLDivElement | null)[]>([]);
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Initial page load animation sequence
      const tl = gsap.timeline();
      
      // Fade out overlay
      tl.to(overlayRef.current, {
        opacity: 0,
        duration: 0.8,
        ease: "power2.inOut",
      });

      // Hero content animations with stagger
      tl.from(".hero-badge", {
        opacity: 0,
        y: 20,
        duration: 0.6,
        ease: "power3.out",
      })
      .from(".hero-title", {
        opacity: 0,
        y: 40,
        duration: 0.8,
        ease: "power3.out",
      }, "-=0.3")
      .from(".hero-subtitle", {
        opacity: 0,
        y: 30,
        duration: 0.7,
        ease: "power3.out",
      }, "-=0.5")
      .from(".hero-buttons", {
        opacity: 0,
        y: 20,
        duration: 0.6,
        ease: "power3.out",
      }, "-=0.4")
      .from(".hero-visual", {
        opacity: 0,
        y: 40,
        scale: 0.95,
        duration: 0.8,
        ease: "power3.out",
      }, "-=0.4");

      // Create complex parallax animation for hero images
      imagesRef.current.forEach((img, index) => {
        if (!img) return;
        
        const direction = index % 2 === 0 ? 1 : -1;
        const rotation = (index % 3) * 15 - 15;
        
        // Initial position - scattered around viewport
        gsap.set(img, {
          x: direction * (200 + index * 100),
          y: -100 + (index * 80),
          rotation: rotation,
          scale: 0.8,
          opacity: 0,
        });

        // Entrance animation
        gsap.to(img, {
          opacity: 0.9,
          scale: 1,
          duration: 1.2,
          delay: 0.3 + index * 0.1,
          ease: "power2.out",
        });

        // Parallax scroll animation
        gsap.to(img, {
          scrollTrigger: {
            trigger: heroRef.current,
            start: 'top top',
            end: 'bottom top',
            scrub: 1.5,
          },
          x: direction * (-300 - index * 80),
          y: 200 + (index * 60),
          rotation: rotation + (direction * 20),
          opacity: 0,
          ease: 'none',
        });

        // Floating animation
        gsap.to(img, {
          y: "+=20",
          duration: 2 + (index * 0.3),
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });
      });

      // CTA section animation
      gsap.from(".cta-content", {
        scrollTrigger: {
          trigger: ".cta-content",
          start: "top 80%",
          end: "top 40%",
          toggleActions: "play none none reverse"
        },
        opacity: 0,
        y: 60,
        duration: 1,
        ease: "power3.out",
      });

    });

    return () => ctx.revert();
  }, []);


  return (
    <div className="min-h-screen bg-white">
      {/* Loading overlay */}
      <div 
        ref={overlayRef}
        className="fixed inset-0 bg-[#0d2847] z-[100] flex items-center justify-center"
      >
        <div className="text-white text-2xl font-bold">SurgeTech</div>
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md z-50 border-b border-[#0d2847]/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-[#0d2847] to-[#1e3a5f] rounded-lg"></div>
              <span className="text-xl font-semibold tracking-tight text-[#0d2847]">SurgeTech</span>
            </div>
            <div className="hidden md:flex items-center space-x-10">
              <a href="#features" className="text-sm font-medium text-[#0d2847]/60 hover:text-[#0d2847] transition">Product</a>
              <a href="#about" className="text-sm font-medium text-[#0d2847]/60 hover:text-[#0d2847] transition">Company</a>
              <a href="#contact" className="text-sm font-medium text-[#0d2847]/60 hover:text-[#0d2847] transition">Contact</a>
              <button className="bg-[#0d2847] text-white px-6 py-2.5 rounded-lg text-sm font-medium hover:bg-[#081a2f] transition shadow-lg hover:shadow-xl">
                <Link href="www.google.com">
                  See Demo
                </Link>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section ref={heroRef} className="relative pt-32 pb-20 px-6 lg:px-12 overflow-hidden min-h-screen flex items-center bg-gradient-to-b from-white to-gray-50">
        {/* Animated background images */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          {[1, 2, 3, 4, 5, 6].map((num, index) => (
            <div
              key={num}
              ref={(el) => {
                imagesRef.current[index] = el;
              }}
              className="absolute w-56 h-56 lg:w-72 lg:h-72 rounded-2xl overflow-hidden shadow-2xl border-4 border-white"
              style={{
                backgroundImage: `url(/hero${num}.png)`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                zIndex: 6 - index,
              }}
            >
              {/* Overlay with blue tint */}
              <div className="w-full h-full bg-gradient-to-br from-[#0d2847]/30 to-[#1e3a5f]/40"></div>
            </div>
          ))}
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="hero-content text-center">
            <div className="hero-badge inline-block px-5 py-2 bg-gradient-to-r from-[#0d2847]/10 to-[#1e3a5f]/10 backdrop-blur-sm rounded-full mb-8 border border-[#0d2847]/20">
              <span className="text-sm font-semibold text-[#0d2847]">Trusted by less than 500+ Leading Hospitals Worldwide</span>
            </div>
            
            <h1 className="hero-title text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight leading-[1.05] mb-8 text-[#0d2847]">
              Surgical precision<br />
              <span className="bg-gradient-to-r from-[#0d2847] to-[#1e3a5f] bg-clip-text text-transparent">powered by AI</span>
            </h1>

            <p className="hero-subtitle text-lg sm:text-xl lg:text-2xl text-black mb-12 max-w-2xl mx-auto leading-relaxed font-bold">
              Real-time guidance and analytics that help surgeons perform at their best. 
              Every procedure, every time.
            </p>

            <div className="hero-buttons flex flex-col sm:flex-row gap-4 justify-center">
              <button className="group bg-gradient-to-r from-[#0d2847] to-[#1e3a5f] text-white px-10 py-4 rounded-lg text-base font-semibold hover:shadow-2xl transition-all duration-300 flex items-center justify-center transform hover:scale-105">
                <span>Get Started</span>
                <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
              <button className="bg-white text-[#0d2847] px-10 py-4 rounded-lg text-base font-semibold border-2 border-[#0d2847]/20 hover:border-[#0d2847] hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                View Demo
              </button>
            </div>
          </div>

          {/* Enhanced Visual Dashboard */}
          <div className="hero-visual mt-20 lg:mt-24 max-w-5xl mx-auto">
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
        </div>
      </section>

      {/* Metrics */}
      <Metrics />

      {/* Features */}
      <FeatureSection />

      {/* CTA */}
      <CTA />

    </div>
  );
}