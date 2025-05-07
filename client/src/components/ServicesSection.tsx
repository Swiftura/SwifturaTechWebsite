import { ArrowRight, Shield, Zap, BarChart3 } from "lucide-react";
import SectionTitle from "./SectionTitle";
import ScrollAnimatedSection from "./ScrollAnimatedSection";
import { cn } from "@/lib/utils";

interface ServiceProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  features: string[];
  delay?: number;
}

const ServiceCard = ({ title, description, icon, features, delay = 0 }: ServiceProps) => {
  return (
    <ScrollAnimatedSection 
      className="bg-dark rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow"
      delay={delay}
    >
      <div className="w-14 h-14 bg-primary/20 rounded-lg flex items-center justify-center mb-6">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-4">{title}</h3>
      <p className="text-gray-300 mb-4">{description}</p>
      <ul className="space-y-2 mb-6">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary-light mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
            </svg>
            <span className="text-gray-300">{feature}</span>
          </li>
        ))}
      </ul>
      <a href="#contact" className="inline-flex items-center text-primary-light hover:text-primary font-medium group">
        <span>Learn more</span>
        <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-2 transition-transform" />
      </a>
    </ScrollAnimatedSection>
  );
};

const services = [
  {
    title: "Document Processing Automation",
    description: "Eliminate manual data entry by using AI to extract, process, and route information from documents automatically.",
    icon: <Shield className="h-8 w-8 text-primary-light" />,
    features: [
      "Intelligent OCR technology",
      "Form data extraction",
      "Automated document routing"
    ]
  },
  {
    title: "Workflow Automation",
    description: "Create streamlined, automated processes that reduce manual tasks and enable your team to focus on high-value work.",
    icon: <Zap className="h-8 w-8 text-primary-light" />,
    features: [
      "Custom workflow design",
      "Process optimization",
      "Cross-system integration"
    ]
  },
  {
    title: "AI-Powered Data Analysis",
    description: "Leverage machine learning to analyze your business data, uncover insights, and make data-driven decisions faster.",
    icon: <BarChart3 className="h-8 w-8 text-primary-light" />,
    features: [
      "Predictive analytics",
      "Pattern recognition",
      "Automated reporting"
    ]
  }
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 bg-dark-lighter">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Our Automation Services"
          description="Customized AI solutions to streamline your business operations and boost productivity."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={service.title}
              title={service.title}
              description={service.description}
              icon={service.icon}
              features={service.features}
              delay={index * 100}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
