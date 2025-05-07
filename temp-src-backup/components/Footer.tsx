import Logo from "./Logo";
import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-dark-darker py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div>
            <Logo />
            <p className="text-gray-400 mb-4 mt-4">
              Transforming business operations through AI automation solutions.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-400 hover:text-primary-light transition-colors"
                aria-label="Facebook"
              >
                <FaFacebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-primary-light transition-colors"
                aria-label="Twitter"
              >
                <FaTwitter className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-primary-light transition-colors"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-3">
              <li><a href="#about" className="text-gray-400 hover:text-primary-light transition-colors">About Us</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-primary-light transition-colors">Services</a></li>
              <li><a href="#projects" className="text-gray-400 hover:text-primary-light transition-colors">Projects</a></li>
              <li><a href="#testimonials" className="text-gray-400 hover:text-primary-light transition-colors">Testimonials</a></li>
              <li><a href="#" className="text-gray-400 hover:text-primary-light transition-colors">Careers</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-primary-light transition-colors">Blog</a></li>
              <li><a href="#" className="text-gray-400 hover:text-primary-light transition-colors">Case Studies</a></li>
              <li><a href="#" className="text-gray-400 hover:text-primary-light transition-colors">Documentation</a></li>
              <li><a href="#" className="text-gray-400 hover:text-primary-light transition-colors">Videos</a></li>
              <li><a href="#" className="text-gray-400 hover:text-primary-light transition-colors">FAQ</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-primary-light transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-primary-light transition-colors">Terms of Service</a></li>
              <li><a href="#" className="text-gray-400 hover:text-primary-light transition-colors">Cookie Policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-primary-light transition-colors">GDPR Compliance</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8">
          <p className="text-gray-500 text-center">&copy; {new Date().getFullYear()} Swiftura. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
