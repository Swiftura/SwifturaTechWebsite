export interface NavItem {
  label: string;
  href: string;
}

export interface ServiceItem {
  title: string;
  description: string;
  icon: React.ReactNode;
  features: string[];
}

export interface ProjectItem {
  title: string;
  description: string;
  image: string;
  tags: string[];
}

export interface BenefitItem {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface TestimonialItem {
  id: number;
  name: string;
  role: string;
  company: string;
  text: string;
  rating: number;
  initials: string;
}
