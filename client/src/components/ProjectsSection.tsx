import { ArrowRight } from "lucide-react";
import SectionTitle from "./SectionTitle";
import ScrollAnimatedSection from "./ScrollAnimatedSection";
import { cn } from "@/lib/utils";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
  delay?: number;
}

const ProjectCard = ({ title, description, image, tags, delay = 0 }: ProjectCardProps) => {
  return (
    <ScrollAnimatedSection
      className="group bg-[#1E293B] rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
      delay={delay}
    >
      <div className="overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500" 
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-3">{title}</h3>
        <p className="text-gray-300 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag, index) => (
            <span key={index} className="bg-primary/20 text-primary-light px-3 py-1 rounded-full text-sm">
              {tag}
            </span>
          ))}
        </div>
        <a href="#contact" className="inline-flex items-center text-primary-light hover:text-primary font-medium group">
          <span>View case study</span>
          <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-2 transition-transform" />
        </a>
      </div>
    </ScrollAnimatedSection>
  );
};

const projects = [
  {
    title: "FinTech Workflow Automation",
    description: "Helped a financial services company automate their loan approval process, reducing processing time by 78%.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500",
    tags: ["Finance", "Workflow", "AI"]
  },
  {
    title: "Healthcare Data Analysis",
    description: "Implemented an AI system for a hospital network that analyzes patient data to optimize scheduling and resource allocation.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500",
    tags: ["Healthcare", "Analytics", "ML"]
  },
  {
    title: "Retail Inventory Management",
    description: "Developed an automated inventory forecasting system for a retail chain, reducing stockouts by 35% and excess inventory by 22%.",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500",
    tags: ["Retail", "Forecasting", "Automation"]
  }
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20 bg-dark">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Featured Projects"
          description="See how we've helped businesses transform their operations with AI automation."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.title}
              title={project.title}
              description={project.description}
              image={project.image}
              tags={project.tags}
              delay={index * 100}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
