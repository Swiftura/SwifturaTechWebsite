import ScrollAnimatedSection from "./ScrollAnimatedSection";

interface SectionTitleProps {
  title: string;
  description: string;
}

const SectionTitle = ({ title, description }: SectionTitleProps) => {
  return (
    <ScrollAnimatedSection className="max-w-3xl mx-auto mb-16 text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
      <div className="w-20 h-1 bg-primary-light mx-auto mb-8"></div>
      <p className="text-lg text-gray-300">{description}</p>
    </ScrollAnimatedSection>
  );
};

export default SectionTitle;
