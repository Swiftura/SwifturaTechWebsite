import { Mail, Phone, MapPin } from "lucide-react";
import SectionTitle from "./SectionTitle";
import ScrollAnimatedSection from "./ScrollAnimatedSection";
import ContactForm from "./ContactForm";
import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-[#1E293B]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <ScrollAnimatedSection>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Transform Your Business?</h2>
              <div className="w-20 h-1 bg-primary-light mb-8"></div>
              <p className="text-lg text-gray-300 mb-8">
                Reach out to discuss how our AI automation solutions can help streamline your operations and boost productivity.
              </p>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <Mail className="h-6 w-6 text-primary-light" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Email Us</h3>
                    <p className="text-gray-300">info@swiftura.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <Phone className="h-6 w-6 text-primary-light" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Call Us</h3>
                    <p className="text-gray-300">(555) 123-4567</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <MapPin className="h-6 w-6 text-primary-light" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Location</h3>
                    <p className="text-gray-300">
                      123 Tech Plaza, Suite 400<br />
                      San Francisco, CA 94105
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center text-primary-light hover:bg-primary hover:text-white transition-colors"
                  aria-label="Facebook"
                >
                  <FaFacebook className="h-5 w-5" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center text-primary-light hover:bg-primary hover:text-white transition-colors"
                  aria-label="Twitter"
                >
                  <FaTwitter className="h-5 w-5" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center text-primary-light hover:bg-primary hover:text-white transition-colors"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin className="h-5 w-5" />
                </a>
              </div>
            </ScrollAnimatedSection>
            
            <ScrollAnimatedSection delay={100}>
              <div className="bg-dark rounded-xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>
                <ContactForm />
              </div>
            </ScrollAnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
