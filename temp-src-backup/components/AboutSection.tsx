import SectionTitle from "./SectionTitle";
import ScrollAnimatedSection from "./ScrollAnimatedSection";
import { ArrowRight } from "lucide-react";
import masonHeadshot from "../assets/mason-headshot.png";

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
            <div className="max-w-md mx-auto md:mx-0">
              <img 
                src={masonHeadshot} 
                alt="Mason, founder of Swiftura" 
                className="rounded-full shadow-lg w-full h-auto ring-4 ring-primary/30"
              />
            </div>
          </ScrollAnimatedSection>
          
          <ScrollAnimatedSection delay={100}>
            <h3 className="text-2xl font-bold mb-6">Why I Built Swiftura - Mason's Story</h3>
            <p className="text-gray-300 mb-6">
              As someone who's spent the last three years immersed in automation technologies, building on my longer background in web development I founded Swiftura out of a genuine passion for solving practical business problems.
            </p>
            <p className="text-gray-300 mb-6">
              My journey began when I saw firsthand how small improvements in workflow automation could dramatically transform daily operations. What started as helping a few local businesses quickly showed me that accessible automation isn't just for tech giants with massive budgets.
            </p>
            <p className="text-gray-300 mb-8">
              Today, through Swiftura, I'm focused on bringing that same value to businesses ready to evolve. Each project I take on is personal to me whether it's streamlining a repetitive process, integrating systems that should talk to each other, or building custom solutions where nothing off-the-shelf fits. My approach is straightforward: understand your unique challenges, build practical solutions, and deliver tangible results that make a real difference to your bottom line.
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
