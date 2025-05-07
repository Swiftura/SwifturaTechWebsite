import { useState, useEffect } from "react";
import SectionTitle from "./SectionTitle";
import ScrollAnimatedSection from "./ScrollAnimatedSection";
import { cn } from "../lib/utils";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  text: string;
  rating: number;
  initials: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Joseph",
    role: "Operations Manager",
    company: "Spark Moving",
    text: "As a moving service, responding quickly to inquiries is critical to our business. Swiftura designed an automated email response system that not only acknowledges customer inquiries instantly but intelligently follows up after 24-48 hours if we haven't heard back. Since implementation, our lead conversion rate has increased by 42%, and we're booking more moves with the same team size. Mason's solution has been a game-changer for our growth.",
    rating: 5,
    initials: "JD"
  },
  {
    id: 2,
    name: "Rebecca",
    role: "Content Director",
    company: "Horizon Digital",
    text: "Working with Swiftura revolutionized our content production workflow. The AI content generation system Mason customized for us produces consistently on-brand material across multiple channels in a fraction of the time. What used to take our team an entire week now happens semi-automatically in just a few hours. The quality is excellent, requiring minimal editing, and has allowed us to triple our content output while maintaining our unique voice.",
    rating: 5,
    initials: "JS"
  },
  {
    id: 3,
    name: "Cameron",
    role: "Head of Marketing",
    company: "Rendur",
    text: "Swiftura transformed our customer engagement strategy with their RAG chatbot implementation. The system handles inquiries 24/7 with remarkable accuracy and maintains our brand voice perfectly. We've seen a 28% increase in conversion rates as the chatbot intelligently guides customers through their purchasing decisions. Mason understood our ecommerce needs from day one and delivered a solution that pays for itself many times over.",
    rating: 5,
    initials: "LJ"
  }
];

const TestimonialsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeTestimonial = testimonials[activeIndex];

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % testimonials.length);
    }, 8000);
    
    return () => clearInterval(interval);
  }, []);

  const nextTestimonial = () => {
    setActiveIndex((current) => (current + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((current) => (current - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-20 bg-dark">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="What Our Clients Say"
          description="Don't just take our word for it — hear from the businesses we've helped transform."
        />

        <div className="max-w-5xl mx-auto relative mt-16">
          {/* Large quote icon */}
          <div className="absolute -top-10 left-12 opacity-20">
            <Quote className="h-20 w-20 text-primary-light" />
          </div>
          
          {/* Navigation buttons */}
          <div className="absolute top-1/2 -left-5 -translate-y-1/2 z-10 md:-left-10">
            <button 
              onClick={prevTestimonial}
              className="p-2 rounded-full bg-dark-lighter hover:bg-primary/20 transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-6 w-6 text-white" />
            </button>
          </div>
          
          <div className="absolute top-1/2 -right-5 -translate-y-1/2 z-10 md:-right-10">
            <button 
              onClick={nextTestimonial}
              className="p-2 rounded-full bg-dark-lighter hover:bg-primary/20 transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-6 w-6 text-white" />
            </button>
          </div>

          <ScrollAnimatedSection className="testimonial-slider">
            <div className="bg-dark-lighter rounded-xl p-8 md:p-10 shadow-lg border border-gray-800">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTestimonial.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="flex flex-col md:flex-row md:items-start gap-6 mb-8">
                    <div className="w-20 h-20 rounded-full bg-gradient-to-r from-primary to-secondary flex-shrink-0 flex items-center justify-center text-2xl font-bold text-white shadow-lg mx-auto md:mx-0">
                      {activeTestimonial.initials}
                    </div>
                    <div className="text-center md:text-left">
                      <p className="text-gray-100 italic text-lg mb-6 leading-relaxed">{activeTestimonial.text}</p>
                      <div className="flex mb-2 justify-center md:justify-start">
                        {Array.from({ length: activeTestimonial.rating }).map((_, i) => (
                          <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                        ))}
                      </div>
                      <h4 className="text-xl font-semibold">{activeTestimonial.name}</h4>
                      <p className="text-gray-400">{activeTestimonial.role}, {activeTestimonial.company}</p>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </ScrollAnimatedSection>

          <div className="mt-8 flex justify-center gap-3">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={cn(
                  "w-3 h-3 rounded-full transition-all",
                  index === activeIndex 
                    ? "bg-primary-light scale-125" 
                    : "bg-gray-500 opacity-50 hover:opacity-80"
                )}
                onClick={() => setActiveIndex(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
