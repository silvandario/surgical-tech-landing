"use client"

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const FeatureSection = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const featureItemsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate title
      gsap.from(titleRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          end: "top 30%",
          toggleActions: "play none none reverse"
        },
        opacity: 0,
        y: 60,
        duration: 1,
        ease: "power3.out",
      });

      // Animate subtitle
      gsap.from(subtitleRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          end: "top 30%",
          toggleActions: "play none none reverse"
        },
        opacity: 0,
        y: 40,
        duration: 1,
        delay: 0.2,
        ease: "power3.out",
      });

      // Animate feature items with stagger
      featureItemsRef.current.forEach((item, index) => {
        if (!item) return;

        const featureNumber = item.querySelector('.feature-number');
        const featureContent = item.querySelector('.feature-content');

        // Animate the entire item
        gsap.from(item, {
          scrollTrigger: {
            trigger: item,
            start: "top 85%",
            end: "top 50%",
            toggleActions: "play none none reverse"
          },
          opacity: 0,
          x: -80,
          duration: 0.8,
          ease: "power3.out",
        });

        // Animate feature content separately
        gsap.from(featureContent, {
          scrollTrigger: {
            trigger: item,
            start: "top 85%",
            end: "top 50%",
            toggleActions: "play none none reverse"
          },
          opacity: 0,
          y: 20,
          duration: 0.8,
          delay: 0.2,
          ease: "power3.out",
        });

        // Animate number with scale and rotation
        gsap.from(featureNumber, {
          scrollTrigger: {
            trigger: item,
            start: "top 85%",
            end: "top 50%",
            toggleActions: "play none none reverse"
          },
          opacity: 0,
          scale: 0.3,
          rotation: -90,
          duration: 1,
          delay: 0.3,
          ease: "back.out(2)",
        });

        // Add hover effect
        item.addEventListener('mouseenter', () => {
          gsap.to(featureNumber, {
            scale: 1.1,
            opacity: 0.2,
            duration: 0.3,
            ease: "power2.out"
          });
        });

        item.addEventListener('mouseleave', () => {
          gsap.to(featureNumber, {
            scale: 1,
            opacity: 0.1,
            duration: 0.3,
            ease: "power2.out"
          });
        });
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={sectionRef}
      id="features" 
      className="features py-20 lg:py-32 px-6 lg:px-12 bg-gradient-to-br from-[#0d2847] to-[#081a2f] text-white"
    >
      <div className="max-w-6xl mx-auto">
        <div className="max-w-3xl mb-16 lg:mb-20">
          <h2 ref={titleRef} className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
            Built for the<br />operating room
          </h2>
          <p ref={subtitleRef} className="text-lg lg:text-xl text-white/70">
            Every feature designed with input from leading surgeons and tested in real surgical environments.
          </p>
        </div>

        <div className="space-y-1">
          <div 
            ref={el => featureItemsRef.current[0] = el}
            className="feature-item border-t border-white/10 py-8 lg:py-10 hover:bg-white/5 transition-all duration-300 rounded-lg px-4 cursor-pointer"
          >
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
              <div className="feature-content flex-1">
                <h3 className="text-2xl lg:text-3xl font-bold mb-3">Real-time guidance</h3>
                <p className="text-base lg:text-lg text-white/70 max-w-2xl">
                  AI-powered recommendations and alerts during procedures, helping surgeons make informed decisions at critical moments.
                </p>
              </div>
              <div className="feature-number text-6xl lg:text-8xl font-bold text-white/10">01</div>
            </div>
          </div>

          <div 
            ref={el => featureItemsRef.current[1] = el}
            className="feature-item border-t border-white/10 py-8 lg:py-10 hover:bg-white/5 transition-all duration-300 rounded-lg px-4 cursor-pointer"
          >
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
              <div className="feature-content flex-1">
                <h3 className="text-2xl lg:text-3xl font-bold mb-3">Instrument tracking</h3>
                <p className="text-base lg:text-lg text-white/70 max-w-2xl">
                  Computer vision tracks every instrument with millimeter precision, ensuring nothing is misplaced.
                </p>
              </div>
              <div className="feature-number text-6xl lg:text-8xl font-bold text-white/10">02</div>
            </div>
          </div>

          <div 
            ref={el => featureItemsRef.current[2] = el}
            className="feature-item border-t border-white/10 py-8 lg:py-10 hover:bg-white/5 transition-all duration-300 rounded-lg px-4 cursor-pointer"
          >
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
              <div className="feature-content flex-1">
                <h3 className="text-2xl lg:text-3xl font-bold mb-3">Predictive analytics</h3>
                <p className="text-base lg:text-lg text-white/70 max-w-2xl">
                  Machine learning models predict potential complications before they occur, improving patient outcomes.
                </p>
              </div>
              <div className="feature-number text-6xl lg:text-8xl font-bold text-white/10">03</div>
            </div>
          </div>

          <div 
            ref={el => featureItemsRef.current[3] = el}
            className="feature-item border-t border-white/10 py-8 lg:py-10 border-b hover:bg-white/5 transition-all duration-300 rounded-lg px-4 cursor-pointer"
          >
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
              <div className="feature-content flex-1">
                <h3 className="text-2xl lg:text-3xl font-bold mb-3">Team coordination</h3>
                <p className="text-base lg:text-lg text-white/70 max-w-2xl">
                  Seamless communication tools keep the entire surgical team synchronized throughout the procedure.
                </p>
              </div>
              <div className="feature-number text-6xl lg:text-8xl font-bold text-white/10">04</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FeatureSection