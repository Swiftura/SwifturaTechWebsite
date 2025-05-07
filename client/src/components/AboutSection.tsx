import SectionTitle from "./SectionTitle";
import ScrollAnimatedSection from "./ScrollAnimatedSection";
import { ArrowRight } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-dark">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="About Swiftura"
          description="We're on a mission to transform how businesses operate through the power of AI automation."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <ScrollAnimatedSection>
            <img 
              src="https://images.unsplash.com/photo-1573497620053-ea5300f94f21?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
              alt="Mason, founder of Swiftura" 
              className="rounded-xl shadow-lg w-full h-auto"
            />
          </ScrollAnimatedSection>
          
          <ScrollAnimatedSection delay={100}>
            <h3 className="text-2xl font-bold mb-6">Meet Mason, Our Founder</h3>
            <p className="text-gray-300 mb-6">
              With over a decade of experience in AI and automation technologies, Mason founded Swiftura with a clear vision: to make powerful automation solutions accessible to businesses of all sizes.
            </p>
            <p className="text-gray-300 mb-6">
              Having worked with Fortune 500 companies and startups alike, Mason realized that many organizations were held back by inefficient manual processes that could be easily automated.
            </p>
            <p className="text-gray-300 mb-8">
              Today, Swiftura helps businesses identify automation opportunities, implement custom AI solutions, and transform their operations for unprecedented efficiency and growth.
            </p>
            <a href="#contact" className="inline-flex items-center text-primary-light hover:text-primary font-medium group">
              <span>Work with us</span>
              <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-2 transition-transform" />
            </a>
          </ScrollAnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
