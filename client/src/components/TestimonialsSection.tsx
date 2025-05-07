import { useState, useEffect } from "react";
import SectionTitle from "./SectionTitle";
import ScrollAnimatedSection from "./ScrollAnimatedSection";
import { cn } from "@/lib/utils";
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
    name: "Jane Doe",
    role: "CTO",
    company: "TechCorp Inc.",
    text: "Swiftura's document processing automation saved our team countless hours of manual data entry. What used to take days now happens in minutes with greater accuracy. The ROI was evident within the first month.",
    rating: 5,
    initials: "JD"
  },
  {
    id: 2,
    name: "John Smith",
    role: "Operations Director",
    company: "Global Logistics",
    text: "Implementing Swiftura's workflow automation solution has been transformative for our business. Our team is now focusing on strategic work instead of repetitive tasks, and our client satisfaction scores have improved dramatically.",
    rating: 5,
    initials: "JS"
  },
  {
    id: 3,
    name: "Lisa Johnson",
    role: "CEO",
    company: "Retail Solutions",
    text: "Mason and the Swiftura team delivered a custom AI solution that exceeded our expectations. Their inventory forecasting system has helped us reduce costs while improving product availability. Highly recommended.",
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
