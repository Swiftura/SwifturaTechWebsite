import { useEffect, useRef, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { cn } from "../lib/utils";

interface ScrollAnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

const ScrollAnimatedSection = ({ 
  children, 
  className, 
  delay = 0 
}: ScrollAnimatedSectionProps) => {
  const controls = useAnimation();
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
          controls.start({
            y: 0,
            opacity: 1,
            transition: {
              duration: 0.5,
              delay: delay / 1000,
              ease: "easeOut",
            },
          });
        }
      },
      { threshold: 0.1 }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [controls, delay, isVisible]);

  return (
    <motion.div
      ref={ref}
      initial={{ y: 50, opacity: 0 }}
      animate={controls}
      className={cn("animate-on-scroll", className)}
    >
      {children}
    </motion.div>
  );
};

export default ScrollAnimatedSection;
