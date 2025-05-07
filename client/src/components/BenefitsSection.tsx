import { DollarSign, Zap, Shield, TrendingUp } from "lucide-react";
import SectionTitle from "./SectionTitle";
import ScrollAnimatedSection from "./ScrollAnimatedSection";

interface BenefitCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  delay?: number;
}

const BenefitCard = ({ title, description, icon, delay = 0 }: BenefitCardProps) => {
  return (
    <ScrollAnimatedSection
      className="bg-dark rounded-xl p-8 text-center shadow-lg hover:shadow-xl transition-shadow"
      delay={delay}
    >
      <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-4">{title}</h3>
      <p className="text-gray-300">{description}</p>
    </ScrollAnimatedSection>
  );
};

const benefits = [
  {
    title: "Cost Reduction",
    description: "Minimize operational expenses by automating repetitive tasks and optimizing resource allocation.",
    icon: <DollarSign className="h-8 w-8 text-primary-light" />
  },
  {
    title: "Enhanced Productivity",
    description: "Free your team from repetitive tasks, allowing them to focus on creative and strategic initiatives.",
    icon: <Zap className="h-8 w-8 text-primary-light" />
  },
  {
    title: "Reduced Errors",
    description: "Minimize human errors and inconsistencies with precise, reliable automated processes.",
    icon: <Shield className="h-8 w-8 text-primary-light" />
  },
  {
    title: "Scalable Growth",
    description: "Easily scale your operations without proportionally increasing costs or resources.",
    icon: <TrendingUp className="h-8 w-8 text-primary-light" />
  }
];

const BenefitsSection = () => {
  return (
    <section id="benefits" className="py-20 bg-dark-lighter">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Benefits of AI Automation"
          description="Discover the transformative advantages that our automation solutions bring to your business."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <BenefitCard
              key={benefit.title}
              title={benefit.title}
              description={benefit.description}
              icon={benefit.icon}
              delay={index * 100}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
