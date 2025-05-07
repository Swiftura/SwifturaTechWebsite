import { useEffect, useRef, useState } from "react";
import ScrollAnimatedSection from "./ScrollAnimatedSection";

interface StatCounterProps {
  target: number;
  suffix?: string;
  delay?: number;
}

const StatCounter = ({ target, suffix = "", delay = 0 }: StatCounterProps) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const countRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    if (countRef.current) {
      observer.observe(countRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;
    
    // Add delay before starting animation
    const timeout = setTimeout(() => {
      const duration = 2000; // ms
      const step = Math.max(1, Math.floor(target / (duration / 16)));
      let current = 0;
      
      const interval = setInterval(() => {
        current += step;
        if (current >= target) {
          setCount(target);
          clearInterval(interval);
        } else {
          setCount(current);
        }
      }, 16);
      
      return () => clearInterval(interval);
    }, delay);
    
    return () => clearTimeout(timeout);
  }, [isVisible, target, delay]);

  return (
    <div ref={countRef} className="inline-block">
      {count}
      {suffix}
    </div>
  );
};

const StatsSection = () => {
  return (
    <section className="py-16 bg-[#1E293B]"> {/* bg-dark-lighter */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <ScrollAnimatedSection className="text-center p-6">
            <div className="text-4xl sm:text-5xl font-bold text-primary-light mb-2">
              <StatCounter target={85} suffix="%" />
            </div>
            <p className="text-gray-400 uppercase tracking-wider text-sm">Average Time Saved</p>
          </ScrollAnimatedSection>
          
          <ScrollAnimatedSection className="text-center p-6" delay={100}>
            <div className="text-4xl sm:text-5xl font-bold text-primary-light mb-2">
              <StatCounter target={300} suffix="+" delay={100} />
            </div>
            <p className="text-gray-400 uppercase tracking-wider text-sm">Tasks Automated</p>
          </ScrollAnimatedSection>
          
          <ScrollAnimatedSection className="text-center p-6" delay={200}>
            <div className="text-4xl sm:text-5xl font-bold text-primary-light mb-2">
              <StatCounter target={40} suffix="%" delay={200} />
            </div>
            <p className="text-gray-400 uppercase tracking-wider text-sm">Conversion Increase</p>
          </ScrollAnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
