import { motion } from "framer-motion";
import ScrollAnimatedSection from "./ScrollAnimatedSection";

const HeroSection = () => {
  return (
    <section className="pt-32 pb-20 bg-gradient-to-b from-dark-darker to-dark">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollAnimatedSection className="max-w-4xl mx-auto text-center">
          <motion.h1 
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <span className="text-primary-light">Automate</span> Your Business Operations <span className="text-primary-light">with AI</span>
          </motion.h1>
          
          <motion.p 
            className="text-lg md:text-xl text-gray-300 mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Swiftura transforms your manual, time-consuming processes into efficient automated workflows, boosting productivity and reducing costs.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <a 
              href="#contact" 
              className="bg-primary hover:bg-primary-dark text-white px-8 py-3 rounded-lg text-lg transition-all transform hover:scale-105"
            >
              Get Started
            </a>
            <a 
              href="#services" 
              className="bg-[#0284C7] hover:bg-[#0369A1] text-white px-8 py-3 rounded-lg text-lg transition-all transform hover:scale-105"
            >
              Explore Solutions
            </a>
          </motion.div>
        </ScrollAnimatedSection>
      </div>
    </section>
  );
};

export default HeroSection;
