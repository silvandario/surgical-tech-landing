"use client"

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Metrics = () => {
  const sectionRef = useRef(null);
  const metricCardsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      metricCardsRef.current.forEach((card, index) => {
        if (!card) return;

        const number = card.querySelector('.metric-number');
        const description = card.querySelector('.metric-description');

        // Main card animation
        gsap.from(card, {
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            end: "top 50%",
            toggleActions: "play none none reverse"
          },
          opacity: 0,
          y: 60,
          scale: 0.9,
          duration: 0.8,
          delay: index * 0.15,
          ease: "back.out(1.5)",
        });

        // Number counter animation
        if (number) {
          const text = number.textContent;
          let hasPercent = text.includes('%');
          let hasPlus = text.includes('+');
          let numValue;

          if (text.includes('%')) {
            numValue = parseFloat(text.replace('%', ''));
          } else if (text.includes('min')) {
            numValue = parseFloat(text.replace('min', ''));
          } else if (text.includes('+')) {
            numValue = parseFloat(text.replace('+', ''));
          } else if (text.includes('/')) {
            // Handle 24/7
            gsap.from(number, {
              scrollTrigger: {
                trigger: card,
                start: "top 85%",
                end: "top 50%",
                toggleActions: "play none none reverse"
              },
              opacity: 0,
              scale: 0.5,
              duration: 0.8,
              delay: index * 0.15 + 0.3,
              ease: "back.out(2)",
            });
            return;
          } else {
            // Handle plain numbers (like 1000000000)
            numValue = parseFloat(text);
          }

          if (numValue !== undefined) {
            // Set initial value to 0
            const counterObj = { val: 0 };
            
            gsap.to(counterObj, {
              scrollTrigger: {
                trigger: card,
                start: "top 85%",
                end: "top 50%",
                toggleActions: "play none none reverse"
              },
              val: numValue,
              duration: 1.5,
              delay: index * 0.15 + 0.3,
              ease: "power2.out",
              onUpdate: function() {
                let currentVal = counterObj.val;
                if (hasPercent) {
                  number.textContent = currentVal.toFixed(1) + '%';
                } else if (text.includes('min')) {
                  number.textContent = Math.round(currentVal) + 'min';
                } else if (hasPlus) {
                  number.textContent = Math.round(currentVal) + '+';
                } else {
                  // Format large numbers with commas or abbreviations
                  if (numValue >= 1000000000) {
                    number.textContent = (currentVal / 1000000000).toFixed(1) + 'B+';
                  } else if (numValue >= 1000000) {
                    number.textContent = (currentVal / 1000000).toFixed(1) + 'M+';
                  } else if (numValue >= 1000) {
                    number.textContent = Math.round(currentVal).toLocaleString() + '+';
                  } else {
                    number.textContent = Math.round(currentVal).toString();
                  }
                }
              }
            });
          }
        }

        // Description fade in
        gsap.from(description, {
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            end: "top 50%",
            toggleActions: "play none none reverse"
          },
          opacity: 0,
          y: 20,
          duration: 0.6,
          delay: index * 0.15 + 0.5,
          ease: "power2.out",
        });

        // Hover animations
        card.addEventListener('mouseenter', () => {
          gsap.to(card, {
            y: -10,
            scale: 1.05,
            duration: 0.3,
            ease: "power2.out"
          });
          gsap.to(number, {
            scale: 1.1,
            duration: 0.3,
            ease: "back.out(2)"
          });
        });

        card.addEventListener('mouseleave', () => {
          gsap.to(card, {
            y: 0,
            scale: 1,
            duration: 0.3,
            ease: "power2.out"
          });
          gsap.to(number, {
            scale: 1,
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
      className="metrics py-20 lg:py-32 px-6 lg:px-12 bg-gradient-to-b from-gray-50 to-white"
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-3 lg:grid-cols-3 gap-8 lg:gap-12">
          

          

          <div 
            ref={el => metricCardsRef.current[2] = el}
            className="metric-card text-center p-6 rounded-2xl bg-white border-2 border-[#0d2847]/10 hover:border-[#0d2847]/30 transition-all duration-300 hover:shadow-xl cursor-pointer"
          >
            <div className="metric-number text-5xl lg:text-6xl font-bold mb-3 bg-gradient-to-r from-[#0d2847] to-[#1e3a5f] bg-clip-text text-transparent">
              3
            </div>
            <div className="metric-description text-sm lg:text-base text-[#0d2847]/60 font-medium">
              Times more detected anomalies
            </div>
          </div>

          <div 
            ref={el => metricCardsRef.current[1] = el}
            className="metric-card text-center p-6 rounded-2xl bg-white border-2 border-[#0d2847]/10 hover:border-[#0d2847]/30 transition-all duration-300 hover:shadow-xl cursor-pointer"
          >
            <div className="metric-number text-5xl lg:text-6xl font-bold mb-3 bg-gradient-to-r from-[#0d2847] to-[#1e3a5f] bg-clip-text text-transparent">
              200+
            </div>
            <div className="metric-description text-sm lg:text-base text-[#0d2847]/60 font-medium">
              Hours saved per surgeon per year
            </div>
          </div>

          <div 
            ref={el => metricCardsRef.current[3] = el}
            className="metric-card text-center p-6 rounded-2xl bg-white border-2 border-[#0d2847]/10 hover:border-[#0d2847]/30 transition-all duration-300 hover:shadow-xl cursor-pointer"
          >
            <div className="metric-number text-5xl lg:text-6xl font-bold mb-3 bg-gradient-to-r from-[#0d2847] to-[#1e3a5f] bg-clip-text text-transparent">
              1+
            </div>
            <div className="metric-description text-sm lg:text-base text-[#0d2847]/60 font-medium">
              Million CHF saved per year per institution
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Metrics