import { ArrowRight, ArrowDown, BarChart, Zap, Clock } from "lucide-react";
import SectionTitle from "./SectionTitle";
import ScrollAnimatedSection from "./ScrollAnimatedSection";
import { cn } from "@/lib/utils";
import { useState } from "react";

// Import project images
import leadNurtureImg from "@/assets/lead-nurture-automation.png";
import invoiceAutomationImg from "@/assets/invoice-automation.png";
import socialMediaAutomationImg from "@/assets/social-media-automation.png";

interface ProjectResult {
  icon: React.ReactNode;
  label: string;
  value: string;
}

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
  results: ProjectResult[];
  expandedDescription?: string;
  delay?: number;
}

const ProjectCard = ({ 
  title, 
  description, 
  image, 
  tags, 
  results,
  expandedDescription,
  delay = 0 
}: ProjectCardProps) => {
  const [expanded, setExpanded] = useState(false);
  
  return (
    <ScrollAnimatedSection
      className="group bg-dark-lighter rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
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
        <p className="text-gray-300 mb-4">
          {expanded && expandedDescription ? expandedDescription : description}
        </p>
        
        {/* Show "View more" button only if there's expanded content */}
        {expandedDescription && (
          <button 
            onClick={() => setExpanded(!expanded)} 
            className="text-primary-light hover:text-primary mb-4 flex items-center text-sm"
          >
            {expanded ? "Show less" : "View full details"}
            <ArrowDown className={cn(
              "h-4 w-4 ml-1 transition-transform", 
              expanded ? "rotate-180" : ""
            )} />
          </button>
        )}
        
        {/* Results Section */}
        <div className="bg-dark/50 rounded-lg p-4 mb-5">
          <h4 className="text-sm uppercase tracking-wider text-gray-400 mb-3">Results</h4>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {results.map((result, idx) => (
              <div key={idx} className="flex flex-col items-center text-center">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center mb-2">
                  {result.icon}
                </div>
                <span className="text-lg font-bold text-primary-light">{result.value}</span>
                <span className="text-xs text-gray-400">{result.label}</span>
              </div>
            ))}
          </div>
        </div>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag, index) => (
            <span key={index} className="bg-primary/20 text-primary-light px-3 py-1 rounded-full text-sm">
              {tag}
            </span>
          ))}
        </div>
        <a href="#contact" className="inline-flex items-center text-primary-light hover:text-primary font-medium group">
          <span>Learn more</span>
          <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-2 transition-transform" />
        </a>
      </div>
    </ScrollAnimatedSection>
  );
};

const projects = [
  {
    title: "Lead Nurture Automation System",
    description: "Developed an intelligent follow-up system that automatically engages with website leads and contact form submissions, sending personalized messages based on inquiry type.",
    expandedDescription: "Developed an intelligent follow-up system that automatically engages with website leads and contact form submissions, sending personalized messages based on inquiry type and following up with non-responsive leads after 24 hours. The system integrates with CRM platforms to track customer journey and optimize conversion rates.",
    image: leadNurtureImg,
    tags: ["Lead Generation", "Sales Automation", "Customer Acquisition"],
    results: [
      { 
        icon: <BarChart className="h-5 w-5 text-primary-light" />, 
        value: "+42%", 
        label: "Conversion Rate" 
      },
      { 
        icon: <Zap className="h-5 w-5 text-primary-light" />, 
        value: "98%", 
        label: "Response Rate" 
      },
      { 
        icon: <Clock className="h-5 w-5 text-primary-light" />, 
        value: "12hrs", 
        label: "Response Time" 
      }
    ]
  },
  {
    title: "Automated Invoice Follow-up System",
    description: "Developed a smart invoicing system that tracks payment statuses, sends personalized reminders at optimal times, and generates performance reports for accounting teams.",
    expandedDescription: "Developed a smart invoicing system that tracks payment statuses, sends personalized reminders at optimal times, and generates performance reports for accounting teams. The solution integrates with accounting software and automatically escalates follow-ups for overdue payments with appropriate messaging.",
    image: invoiceAutomationImg,
    tags: ["Financial Automation", "Communication", "Business Operations"],
    results: [
      { 
        icon: <Clock className="h-5 w-5 text-primary-light" />, 
        value: "-65%", 
        label: "Collection Time" 
      },
      { 
        icon: <BarChart className="h-5 w-5 text-primary-light" />, 
        value: "+88%", 
        label: "On-time Payments" 
      },
      { 
        icon: <Zap className="h-5 w-5 text-primary-light" />, 
        value: "-70%", 
        label: "Admin Work" 
      }
    ]
  },
  {
    title: "Social Media Content Automation Suite",
    description: "Built a comprehensive system that generates platform-specific content variations, schedules posts across multiple social channels, and maintains consistent brand messaging.",
    expandedDescription: "Built a comprehensive system that generates platform-specific content variations, schedules posts across multiple social channels, and maintains consistent brand messaging without manual intervention. The suite includes analytics tracking, engagement monitoring, and automatic optimization of posting schedules.",
    image: socialMediaAutomationImg,
    tags: ["Social Media", "Content Automation", "Cross-Platform Publishing"],
    results: [
      { 
        icon: <Clock className="h-5 w-5 text-primary-light" />, 
        value: "-85%", 
        label: "Time Spent" 
      },
      { 
        icon: <BarChart className="h-5 w-5 text-primary-light" />, 
        value: "+62%", 
        label: "Engagement" 
      },
      { 
        icon: <Zap className="h-5 w-5 text-primary-light" />, 
        value: "3x", 
        label: "Post Volume" 
      }
    ]
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

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.title}
              title={project.title}
              description={project.description}
              expandedDescription={project.expandedDescription}
              image={project.image}
              tags={project.tags}
              results={project.results}
              delay={index * 100}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
