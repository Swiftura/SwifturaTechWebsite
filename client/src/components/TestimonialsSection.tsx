import { useState } from "react";
import SectionTitle from "./SectionTitle";
import ScrollAnimatedSection from "./ScrollAnimatedSection";
import { cn } from "@/lib/utils";
import { Star } from "lucide-react";
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

  return (
    <section id="testimonials" className="py-20 bg-dark">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="What Our Clients Say"
          description="Don't just take our word for it — hear from the businesses we've helped transform."
        />

        <div className="max-w-5xl mx-auto relative">
          <ScrollAnimatedSection className="testimonial-slider">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTestimonial.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.5 }}
                className="bg-[#1E293B] rounded-xl p-8 shadow-lg"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-r from-primary to-[#0284C7] flex-shrink-0 flex items-center justify-center text-2xl font-bold text-white">
                    {activeTestimonial.initials}
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold">{activeTestimonial.name}</h4>
                    <p className="text-gray-400">{activeTestimonial.role}, {activeTestimonial.company}</p>
                  </div>
                </div>
                <p className="text-gray-300 italic mb-4">{activeTestimonial.text}</p>
                <div className="flex">
                  {Array.from({ length: activeTestimonial.rating }).map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </ScrollAnimatedSection>

          <div className="mt-8 flex justify-center gap-3">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={cn(
                  "w-3 h-3 rounded-full transition-opacity",
                  index === activeIndex ? "bg-primary-light opacity-100" : "bg-gray-500 opacity-50 hover:opacity-100"
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
